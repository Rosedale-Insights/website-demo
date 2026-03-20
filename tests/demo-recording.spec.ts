import { type Locator, type Page, test } from '@playwright/test';

/* ─── Helpers ──────────────────────────────────────────────── */

const pause = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function waitVisible(locator: Locator, timeout = 15_000) {
	await locator.waitFor({ state: 'visible', timeout });
}

/**
 * Inject the fake cursor + ripple container + hidden real cursor.
 * Idempotent — safe to call after SPA navigations.
 */
async function injectCursor(page: Page) {
	await page.evaluate(() => {
		if (document.getElementById('demo-cursor')) return;

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
				'left 0.45s cubic-bezier(0.22,0.61,0.36,1), top 0.45s cubic-bezier(0.22,0.61,0.36,1), width 0.1s, height 0.1s',
			left: '960px',
			top: '540px',
			transform: 'translate(-50%, -50%)',
		});
		document.body.appendChild(cursor);

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
	await pause(420);
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
 * Reads scroll offset from <main> (the actual scroll container), not window.
 */
async function zoomIn(page: Page, locator: Locator, scale = 1.35) {
	const box = await locator.boundingBox();
	if (!box) return;

	const scrollTop = await page.evaluate(() => document.querySelector('main')?.scrollTop ?? 0);

	const originX = box.x + box.width / 2;
	const originY = scrollTop + box.y + box.height / 2;

	await page.evaluate(
		({ originX, originY, scale }) => {
			const html = document.documentElement;
			html.style.transformOrigin = `${originX}px ${originY}px`;
			html.style.transition = 'transform 0.7s ease-in-out';
			html.style.transform = `scale(${scale})`;
		},
		{ originX, originY, scale },
	);
	await pause(750);
}

async function zoomOut(page: Page) {
	await page.evaluate(() => {
		const html = document.documentElement;
		html.style.transition = 'transform 0.7s ease-in-out';
		html.style.transform = 'scale(1)';
	});
	await pause(750);
	await page.evaluate(() => {
		const html = document.documentElement;
		html.style.transition = '';
		html.style.transform = '';
		html.style.transformOrigin = '';
	});
}

/**
 * Smooth scroll within <main> to the bottom of the content.
 */
async function smoothScrollToBottom(page: Page) {
	await page.evaluate(() => {
		const main = document.querySelector('main');
		if (main) {
			main.scrollTo({ top: main.scrollHeight, behavior: 'smooth' });
		}
	});
	await pause(1200);
}

/**
 * Smooth scroll within <main> to position the target element ~200px from top.
 */
async function smoothScrollTo(page: Page, locator: Locator) {
	await waitVisible(locator);
	const box = await locator.boundingBox();
	if (!box) {
		await locator.scrollIntoViewIfNeeded();
		await pause(800);
		return;
	}
	await page.evaluate(
		({ elTop }) => {
			const main = document.querySelector('main');
			if (!main) return;
			const mainRect = main.getBoundingClientRect();
			const targetScroll = main.scrollTop + elTop - mainRect.top - 200;
			main.scrollTo({
				top: Math.max(0, targetScroll),
				behavior: 'smooth',
			});
		},
		{ elTop: box.y },
	);
	await pause(800);
}

/**
 * Navigate via sidebar click, wait for content, re-inject cursor.
 * Smooth-scrolls to top before clicking so the transition doesn't jump.
 */
async function navigateVia(page: Page, linkText: string, waitForText: string) {
	await page.evaluate(() => {
		const main = document.querySelector('main');
		if (main && main.scrollTop > 0) {
			main.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});
	await pause(600);
	const link = page.locator('nav a', { hasText: linkText });
	await clickWithCursor(page, link);
	await waitVisible(page.getByText(waitForText).first());
	await injectCursor(page);
	await pause(400);
}

/**
 * Type a message in the KB chat, submit, and wait for the AI response to render.
 * The ChatInterface has a 1s simulated delay before showing the AI response.
 */
async function typeMessage(page: Page, text: string) {
	const input = page.locator('input[placeholder="Ask a technical question..."]');
	await clickWithCursor(page, input);
	await input.pressSequentially(text, { delay: 18 });

	const sendBtn = page.locator('button[type="submit"]');
	await clickWithCursor(page, sendBtn);

	// Wait for the user message to appear
	await page.getByText(text).first().waitFor({ state: 'visible', timeout: 10_000 });
	// Wait for the AI response (arrives after 1s delay) — confidence badge is the signal
	await page.locator('text=/\\d+% confidence/').last().waitFor({ state: 'visible', timeout: 10_000 });
	await pause(300);
}

/* ─── Demo Script ──────────────────────────────────────────── */

test('FORGE cinematic demo walkthrough', async ({ page }) => {
	/* ── Scene 1: Home ──────────────────────────────────── */
	await page.goto('/insights');
	await waitVisible(page.getByText('Good morning, Julian'));
	await injectCursor(page);
	await pause(2500);

	/* ── Scene 2: Shop Floor ───────────────────────────── */
	await navigateVia(page, 'Shop Floor', 'Shop Floor Monitor');
	await pause(1500);

	// Scroll all the way down to reveal the full machine table
	await smoothScrollToBottom(page);
	await pause(500);

	// Zoom on the whole machine table card (centered on the card, not just heading)
	const machineTableCard = page
		.locator('.glass-solid')
		.filter({ has: page.getByText('All Machines') })
		.first();
	await zoomIn(page, machineTableCard, 1.25);
	await pause(2000);
	await zoomOut(page);
	await pause(400);

	/* ── Scene 3: Quoting (Hero Scene) ─────────────────── */
	await navigateVia(page, 'Quoting', 'Quoting Tool');
	await pause(1000);

	// Expand first quote row (Aerospace Dynamics) and zoom on the detail
	const firstRow = page
		.locator('[role="button"][tabindex="0"]')
		.filter({ hasText: 'Aerospace Dynamics' })
		.first();
	await clickWithCursor(page, firstRow);
	await pause(500);

	// Zoom on the expanded detail panel
	const detailPanel = page.locator('.bg-black\\/\\[0\\.01\\]').first();
	await zoomIn(page, detailPanel, 1.3);
	await pause(2000);
	await zoomOut(page);
	await pause(300);

	// Collapse row
	await clickWithCursor(page, firstRow);
	await pause(500);

	// Open Quote Builder modal
	const newQuoteBtn = page.locator('button', { hasText: 'New Quote' });
	await clickWithCursor(page, newQuoteBtn);
	await waitVisible(page.getByText('New Quote — RFQ Details'));

	// Zoom on modal and STAY ZOOMED through the entire flow
	const modalContent = page.locator('.fixed.inset-0 .glass-solid').first();
	await zoomIn(page, modalContent, 1.2);
	await pause(1500);

	// Click Generate Quote while zoomed
	const generateBtn = page.locator('button', { hasText: 'Generate Quote' });
	await clickWithCursor(page, generateBtn);

	// Wait for processing animation to complete — scope to modal
	const modal = page.locator('.fixed.inset-0');
	await modal.getByText(/Quote QT-2026-0891/).waitFor({ state: 'visible', timeout: 15_000 });
	await pause(2000);

	// Close modal via Save as Draft — still zoomed
	const closeBtn = modal.locator('button', { hasText: 'Save as Draft' });
	await clickWithCursor(page, closeBtn);
	await pause(300);

	// Now zoom out after modal is closed
	await zoomOut(page);
	await pause(400);

	/* ── Scene 4: Delivery ─────────────────────────────── */
	await navigateVia(page, 'Delivery', 'Delivery Intelligence');
	await pause(1200);

	// Zoom on the Delivery Risk Summary AI insight card
	const riskSummary = page
		.locator('.glass-solid')
		.filter({ has: page.getByText('Delivery Risk Summary') })
		.first();
	await zoomIn(page, riskSummary, 1.25);
	await pause(1500);
	await zoomOut(page);
	await pause(400);

	// Scroll to At-Risk PO table
	const poTable = page.getByText('At-Risk Purchase Orders').first();
	await smoothScrollTo(page, poTable);
	await pause(1500);

	/* ── Scene 5: Knowledge Base ───────────────────────── */
	await navigateVia(page, 'Knowledge Base', 'Technical Knowledge Base');
	await pause(500);

	// Zoom in on input bar immediately and start typing
	const chatForm = page.locator('form').first();
	await zoomIn(page, chatForm, 1.3);

	// Q1: Mazak VTC-800 setup
	await typeMessage(page, "What's the setup procedure for the Mazak VTC-800?");

	// Zoom out to reveal the full response with citations
	await zoomOut(page);
	await pause(3000);

	// Q2: Type at normal zoom — no zoom-in again to avoid vibration
	await typeMessage(page, 'Troubleshoot surface finish issues on 4140 steel');
	await pause(3000);

	/* ── Ending: Return to Home ────────────────────────── */
	await navigateVia(page, 'Home', 'Good morning, Julian');
	await pause(800);

	// Hide cursor for clean final frame
	await page.evaluate(() => {
		const c = document.getElementById('demo-cursor');
		if (c) c.style.display = 'none';
	});
	await pause(1500);
});
