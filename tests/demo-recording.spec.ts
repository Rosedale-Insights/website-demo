import { type Locator, type Page, test } from '@playwright/test';

/* ─── Helpers ──────────────────────────────────────────────── */

const pause = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function waitVisible(locator: Locator, timeout = 15_000) {
	await locator.waitFor({ state: 'visible', timeout });
}

/**
 * Inject the fake cursor + ripple container + hidden real cursor.
 * Must be called after every full-page navigation since the DOM resets.
 */
async function injectCursor(page: Page) {
	await page.evaluate(() => {
		if (document.getElementById('demo-cursor')) return;

		// Hide real cursor
		const style = document.createElement('style');
		style.id = 'demo-hide-cursor';
		style.textContent = `
			* { cursor: none !important; }
			@keyframes demo-ripple {
				0%   { transform: translate(-50%,-50%) scale(0); opacity: 0.5; }
				100% { transform: translate(-50%,-50%) scale(1.5); opacity: 0; }
			}
		`;
		document.head.appendChild(style);

		// Fake cursor — 20px dot
		const cursor = document.createElement('div');
		cursor.id = 'demo-cursor';
		Object.assign(cursor.style, {
			position: 'fixed',
			width: '20px',
			height: '20px',
			borderRadius: '50%',
			backgroundColor: 'rgba(15, 15, 15, 0.9)',
			border: '2px solid rgba(255, 255, 255, 0.95)',
			boxShadow: '0 2px 10px rgba(0,0,0,0.35)',
			zIndex: '99999',
			pointerEvents: 'none',
			transition:
				'left 0.35s cubic-bezier(0.22,0.61,0.36,1), top 0.35s cubic-bezier(0.22,0.61,0.36,1), width 0.1s, height 0.1s',
			left: '960px',
			top: '540px',
			transform: 'translate(-50%, -50%)',
		});
		document.body.appendChild(cursor);

		// Ripple container
		const rippleContainer = document.createElement('div');
		rippleContainer.id = 'demo-ripple-container';
		Object.assign(rippleContainer.style, {
			position: 'fixed',
			zIndex: '99998',
			pointerEvents: 'none',
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
		});
		document.body.appendChild(rippleContainer);
	});
}

async function moveCursorTo(page: Page, x: number, y: number) {
	await page.evaluate(
		({ x, y }) => {
			const c = document.getElementById('demo-cursor');
			if (c) {
				c.style.left = `${x}px`;
				c.style.top = `${y}px`;
			}
		},
		{ x, y },
	);
	await pause(380);
}

async function moveCursorToElement(page: Page, locator: Locator) {
	const box = await locator.boundingBox();
	if (!box) return;
	await moveCursorTo(page, box.x + box.width / 2, box.y + box.height / 2);
}

async function clickWithCursor(page: Page, locator: Locator) {
	await moveCursorToElement(page, locator);
	const box = await locator.boundingBox();
	if (box) {
		const cx = box.x + box.width / 2;
		const cy = box.y + box.height / 2;
		await page.evaluate(
			({ cx, cy }) => {
				const cursor = document.getElementById('demo-cursor');
				if (cursor) {
					cursor.style.width = '16px';
					cursor.style.height = '16px';
					setTimeout(() => {
						cursor.style.width = '20px';
						cursor.style.height = '20px';
					}, 120);
				}
				const container = document.getElementById('demo-ripple-container');
				if (container) {
					const ring = document.createElement('div');
					Object.assign(ring.style, {
						position: 'fixed',
						left: `${cx}px`,
						top: `${cy}px`,
						width: '40px',
						height: '40px',
						borderRadius: '50%',
						border: '2px solid rgba(15,15,15,0.35)',
						animation: 'demo-ripple 0.45s ease-out forwards',
						pointerEvents: 'none',
					});
					container.appendChild(ring);
					setTimeout(() => ring.remove(), 500);
				}
			},
			{ cx, cy },
		);
	}
	await pause(80);
	await locator.click();
	await pause(200);
}

/**
 * Zoom: set transform-origin to element center, then animate ONLY scale().
 * No translate — single-property animation avoids jitter/bounce.
 */
async function zoomIn(page: Page, locator: Locator, scale = 1.35) {
	const box = await locator.boundingBox();
	if (!box) return;

	// Get current scroll offset so we compute the correct document-relative point
	const scroll = await page.evaluate(() => ({
		x: window.scrollX,
		y: window.scrollY,
	}));

	const originX = scroll.x + box.x + box.width / 2;
	const originY = scroll.y + box.y + box.height / 2;

	await page.evaluate(
		({ originX, originY, scale }) => {
			const html = document.documentElement;
			// Set origin first (no transition on origin)
			html.style.transformOrigin = `${originX}px ${originY}px`;
			// Small delay to ensure origin is applied before animating
			html.style.transition = 'transform 0.6s ease-in-out';
			html.style.transform = `scale(${scale})`;
		},
		{ originX, originY, scale },
	);
	await pause(650);
}

async function zoomOut(page: Page) {
	await page.evaluate(() => {
		const html = document.documentElement;
		html.style.transition = 'transform 0.6s ease-in-out';
		html.style.transform = 'scale(1)';
	});
	await pause(650);
	// Clean up transforms so they don't interfere with scrolling
	await page.evaluate(() => {
		const html = document.documentElement;
		html.style.transition = '';
		html.style.transform = '';
		html.style.transformOrigin = '';
	});
}

async function scrollToElement(page: Page, locator: Locator) {
	await waitVisible(locator);
	await locator.scrollIntoViewIfNeeded();
	await pause(400);
}

/**
 * Navigate via sidebar click, wait for content, re-inject cursor.
 */
async function navigateVia(page: Page, linkText: string, waitForText: string) {
	const link = page.locator('nav a', { hasText: linkText });
	await clickWithCursor(page, link);
	await waitVisible(page.getByText(waitForText).first());
	await injectCursor(page);
	await pause(400);
}

async function typeMessage(page: Page, text: string) {
	const input = page.locator('input[placeholder="Ask a technical question..."]');
	await clickWithCursor(page, input);
	await input.pressSequentially(text, { delay: 8 });

	const beforeCount = await page.locator('.overflow-y-auto > div > div').count();

	const sendBtn = page.locator('button[type="submit"]');
	await sendBtn.click();

	// Wait for AI response to render
	await page.waitForFunction(
		(expected) =>
			document.querySelectorAll('.overflow-y-auto > div > div').length >= expected,
		beforeCount + 2,
		{ timeout: 10_000 },
	);
	await pause(300);
}

/* ─── Demo Script ──────────────────────────────────────────── */

test('FORGE cinematic demo walkthrough', async ({ page }) => {
	/* ── Scene 1: Insights Dashboard ─────────────────────── */
	await page.goto('/insights');
	await waitVisible(page.getByText('Manufacturing Insights'));
	await waitVisible(page.locator('.recharts-responsive-container').first());
	await pause(1800); // let recharts animations finish

	await injectCursor(page);
	await pause(300);

	// Light zoom on Intelligence Brief
	const intelBrief = page.getByText('Forge Intelligence Brief').first();
	await zoomIn(page, intelBrief, 1.2);
	await pause(1500);
	await zoomOut(page);

	// Scroll down to Due Jobs table using JS scrollIntoView
	await page.evaluate(() => {
		for (const node of document.querySelectorAll('*')) {
			if (node.textContent?.trim().startsWith('Due Jobs') && node.children.length < 3) {
				node.scrollIntoView({ behavior: 'smooth', block: 'start' });
				break;
			}
		}
	});
	await pause(2000);

	/* ── Scene 2: Knowledge Base ─────────────────────────── */
	await navigateVia(page, 'Knowledge Base', 'Technical Knowledge Base');
	const chatInput = page.locator('input[placeholder="Ask a technical question..."]');
	await waitVisible(chatInput);

	// Subtle zoom on chat area
	const chatForm = page.locator('form').first();
	await zoomIn(page, chatForm, 1.15);

	await typeMessage(page, 'How many Kennametal CNMG 432 inserts are in stock?');
	await typeMessage(page, 'What did the ISO 9001 audit find this quarter?');

	await zoomOut(page);

	/* ── Scene 3: Documents ──────────────────────────────── */
	await navigateVia(page, 'Documents', 'Document Library');
	await waitVisible(page.getByText('Total Storage'));
	await pause(1900);

	/* ── Scene 4: Quoting ────────────────────────────────── */
	await navigateVia(page, 'Quoting', 'Quoting Tool');

	// Scroll to Forge AI Insight and zoom
	const aiInsight = page.getByText('Forge AI Insight').first();
	await scrollToElement(page, aiInsight);
	await zoomIn(page, aiInsight, 1.35);
	await pause(600);
	await zoomOut(page);

	/* ── Scene 5: Agents → Quality Inspector AI ──────────── */
	await navigateVia(page, 'Agents', 'Agent Workspace');
	const agentCards = page.locator('.grid.grid-cols-2 a');
	await waitVisible(agentCards.first());

	const qcInspector = agentCards.first();
	await clickWithCursor(page, qcInspector);
	await waitVisible(page.getByText('Agent Configuration'));
	await injectCursor(page);
	await pause(400);

	// Zoom in on agent specs
	const agentConfig = page.getByText('Agent Configuration').first();
	await zoomIn(page, agentConfig, 1.25);
	await pause(1200);
	await zoomOut(page);

	/* ── End: hide cursor for clean final frame ──────────── */
	await page.evaluate(() => {
		const c = document.getElementById('demo-cursor');
		if (c) c.style.display = 'none';
	});
	await pause(800);
});
