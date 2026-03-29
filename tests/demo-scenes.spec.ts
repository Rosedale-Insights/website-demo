import { type Locator, type Page, test } from '@playwright/test';

/* ─── Helpers ──────────────────────────────────────────────── */

const pause = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function waitVisible(locator: Locator, timeout = 15_000) {
	await locator.waitFor({ state: 'visible', timeout });
}

/** Wait for Motion entrance animations to settle (~600ms). */
async function waitForEntrances() {
	await pause(700);
}

/**
 * Inject a visual cursor overlay that tracks Playwright's real mouse events.
 * Hidden until the first mousemove, then appears instantly at that position
 * (no slide-in from 0,0). Subsequent moves are CSS-smoothed.
 */
async function injectCursor(page: Page) {
	await page.addStyleTag({
		content: `
			*, *::before, *::after { cursor: none !important; }
			#demo-cursor {
				position: fixed;
				width: 20px;
				height: 20px;
				background: rgba(255, 255, 255, 0.92);
				border: 2px solid rgba(0, 0, 0, 0.2);
				border-radius: 50%;
				pointer-events: none;
				z-index: 999999;
				transform: translate(-50%, -50%);
				transition: opacity 0.3s ease, transform 0.1s ease;
				box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
				opacity: 0;
			}
			#demo-cursor.visible { opacity: 1; }
			#demo-cursor.no-transition { transition: none !important; }
			#demo-cursor.clicking {
				transform: translate(-50%, -50%) scale(0.7);
			}
			.demo-ripple {
				position: fixed;
				pointer-events: none;
				z-index: 999998;
				border-radius: 50%;
				border: 2px solid rgba(26, 26, 26, 0.3);
				transform: translate(-50%, -50%);
				animation: demo-ripple-out 0.45s ease-out forwards;
			}
			@keyframes demo-ripple-out {
				0%   { width: 20px; height: 20px; opacity: 0.7; }
				100% { width: 70px; height: 70px; opacity: 0; }
			}
		`,
	});
	await page.evaluate(() => {
		if (document.getElementById('demo-cursor')) return;
		const c = document.createElement('div');
		c.id = 'demo-cursor';
		document.body.appendChild(c);

		let first = true;
		document.addEventListener('mousemove', (e) => {
			if (first) {
				c.classList.add('no-transition');
				c.style.left = `${e.clientX}px`;
				c.style.top = `${e.clientY}px`;
				void c.offsetHeight;
				c.classList.remove('no-transition');
				c.classList.add('visible');
				first = false;
			} else {
				c.style.left = `${e.clientX}px`;
				c.style.top = `${e.clientY}px`;
			}
		});
		document.addEventListener('mousedown', (e) => {
			c.classList.add('clicking');
			const r = document.createElement('div');
			r.className = 'demo-ripple';
			r.style.left = `${e.clientX}px`;
			r.style.top = `${e.clientY}px`;
			document.body.appendChild(r);
			r.addEventListener('animationend', () => r.remove());
		});
		document.addEventListener('mouseup', () => {
			c.classList.remove('clicking');
		});
	});
}

/**
 * Smooth-move cursor to a locator's center, pause briefly, then click.
 * Uses page.mouse.move with intermediate steps so the DOM cursor
 * visibly travels from its current position to the target.
 */
async function clickEl(page: Page, locator: Locator) {
	await waitVisible(locator);
	const box = await locator.boundingBox();
	if (!box) {
		await locator.click();
		return;
	}
	const x = box.x + box.width / 2;
	const y = box.y + box.height / 2;
	await page.mouse.move(x, y);
	await pause(50);
	await page.mouse.click(x, y);
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
	await pause(1000);
}

/** Smooth scroll <main> back to top. */
async function scrollToTop(page: Page) {
	await page.evaluate(() => {
		const main = document.querySelector('main');
		if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
	});
	await pause(1000);
}

/**
 * Type a message in the KB chat, submit, and wait for the AI response.
 */
async function typeAndSubmit(page: Page, text: string) {
	const input = page.locator(
		'input[placeholder="Ask a technical question..."]',
	);
	await clickEl(page, input);
	await input.pressSequentially(text, { delay: 65 });

	const sendBtn = page.locator('button[type="submit"]');
	await clickEl(page, sendBtn);

	await page
		.getByText(text)
		.first()
		.waitFor({ state: 'visible', timeout: 10_000 });
	await page
		.locator('text=/\\d+% confidence/')
		.last()
		.waitFor({ state: 'visible', timeout: 10_000 });
	await pause(300);
}

/* ─── Clip 1: Home → Shop Floor ──────────────────────────── */

test('clip-1-home-shopfloor', async ({ page }) => {
	await page.goto('/insights');
	await waitVisible(page.getByText('Good morning, Julian'));
	await injectCursor(page);
	await waitForEntrances();

	// Pre-roll: content visible, no interaction
	await pause(2000);

	// Pause on intelligence brief + stat cards
	await pause(2000);

	// Navigate to Shop Floor via sidebar
	const shopFloorLink = page.locator('nav a', { hasText: 'Shop Floor' });
	await clickEl(page, shopFloorLink);
	await waitVisible(page.getByText('Shop Floor Monitor'));
	await waitForEntrances();

	// Scroll down to All Machines table
	const machineHeading = page.getByText('All Machines').first();
	await smoothScrollTo(page, machineHeading);
	await pause(500);

	// Click first machine row
	const firstRow = page.locator('.glass-solid .cursor-pointer').first();
	await clickEl(page, firstRow);
	await pause(1500);

	// Click same row again to deselect
	await clickEl(page, firstRow);
	await pause(500);

	// Scroll back up
	await scrollToTop(page);
	await pause(500);
});

/* ─── Clip 2: Quoting (Hero Scene) ───────────────────────── */

test('clip-2-quoting', async ({ page }) => {
	await page.goto('/quoting');
	await waitVisible(page.getByText('Quoting Tool'));
	await injectCursor(page);
	await waitForEntrances();

	// Pre-roll
	await pause(2000);

	// Scroll down to show quote table section fully
	const quoteTableSection = page.getByText('Aerospace Dynamics').first();
	await smoothScrollTo(page, quoteTableSection);
	await pause(800);

	// Click Draft filter tab
	const draftTab = page.locator('button', { hasText: 'Draft' });
	await clickEl(page, draftTab);
	await pause(800);

	// Expand Aerospace Dynamics row
	const aeroRow = page
		.locator('[role="button"][tabindex="0"]')
		.filter({ hasText: 'Aerospace Dynamics' })
		.first();
	await clickEl(page, aeroRow);
	await pause(1500);

	// Scroll down slightly to reveal the full expanded detail panel
	const detailPanel = page.locator('.bg-black\\/\\[0\\.01\\]').first();
	await smoothScrollTo(page, detailPanel);
	await pause(2000);

	// Collapse row
	await clickEl(page, aeroRow);
	await pause(500);

	// Scroll back up to show full New Quote card area
	await scrollToTop(page);
	await pause(1000);
	const newQuoteBtn = page.locator('button', { hasText: 'New Quote' });
	await clickEl(page, newQuoteBtn);
	await waitVisible(page.getByText('New Quote — RFQ Details'));
	await pause(2000);

	// Click Generate Quote
	const generateBtn = page.locator('button', { hasText: 'Generate Quote' });
	await clickEl(page, generateBtn);

	// Wait for processing to complete
	const modal = page.locator('.fixed.inset-0');
	await modal
		.getByText(/Quote QT-2026-0891/)
		.waitFor({ state: 'visible', timeout: 15_000 });
	await pause(3000);

	// Close modal via Save as Draft
	const closeBtn = modal.locator('button', { hasText: 'Save as Draft' });
	await clickEl(page, closeBtn);
	await pause(200);
});

/* ─── Clip 3: Delivery Intelligence ──────────────────────── */

test('clip-3-delivery', async ({ page }) => {
	await page.goto('/delivery');
	await waitVisible(page.getByText('Delivery Intelligence'));
	await injectCursor(page);
	await waitForEntrances();

	// Pre-roll — hold longer so chart draw animation is visible
	await pause(3500);

	// Pause on Delivery Risk Summary (Remotion zooms in post-production)
	await pause(2500);

	// Scroll to At-Risk Purchase Orders
	const poHeading = page.getByText('At-Risk Purchase Orders').first();
	await smoothScrollTo(page, poHeading);
	await pause(500);

	// Click first At Risk PO row
	const firstPoRow = page.locator('.glass-solid .cursor-pointer').first();
	await clickEl(page, firstPoRow);
	await pause(1500);

	// Click same row to deselect
	await clickEl(page, firstPoRow);
	await pause(500);

	// Scroll back up
	await scrollToTop(page);
	await pause(500);
});

/* ─── Clip 4: Knowledge Base ─────────────────────────────── */

test('clip-4-knowledge', async ({ page }) => {
	await page.goto('/knowledge-base');
	await waitVisible(page.getByText('Technical Knowledge Base'));
	await injectCursor(page);
	await waitForEntrances();

	// Pre-roll
	await pause(2000);

	// Q1: Mazak VTC-800 setup
	await typeAndSubmit(
		page,
		"What's the setup procedure for the Mazak VTC-800?",
	);
	await pause(3000);

	// Q2: Surface finish troubleshooting
	await typeAndSubmit(
		page,
		'Troubleshoot surface finish issues on 4140 steel',
	);
	await pause(3000);
});
