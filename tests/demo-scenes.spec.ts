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
	const input = page.locator('input[placeholder="Ask a technical question..."]');
	await input.click();
	await input.pressSequentially(text, { delay: 65 });

	const sendBtn = page.locator('button[type="submit"]');
	await sendBtn.click();

	// Wait for user message to appear
	await page.getByText(text).first().waitFor({ state: 'visible', timeout: 10_000 });
	// Wait for AI response — confidence badge signals completion
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
	await waitForEntrances();

	// Pre-roll: content visible, no interaction
	await pause(2000);

	// Pause on intelligence brief + stat cards
	await pause(2000);

	// Navigate to Shop Floor via sidebar
	await page.click('nav a:has-text("Shop Floor")');
	await waitVisible(page.getByText('Shop Floor Monitor'));
	await waitForEntrances();

	// Scroll down to All Machines table
	const machineHeading = page.getByText('All Machines').first();
	await smoothScrollTo(page, machineHeading);
	await pause(500);

	// Click first machine row (Stalled status — most visually dramatic)
	const firstRow = page.locator('table tbody tr').first();
	await firstRow.click();
	await pause(1500);

	// Click same row again to deselect (toggle behavior)
	await firstRow.click();
	await pause(500);

	// Scroll back up
	await scrollToTop(page);
	await pause(500);
});

/* ─── Clip 2: Quoting (Hero Scene) ───────────────────────── */

test('clip-2-quoting', async ({ page }) => {
	await page.goto('/quoting');
	await waitVisible(page.getByText('Quoting Tool'));
	await waitForEntrances();

	// Pre-roll
	await pause(2000);

	// Click Draft filter tab
	const draftTab = page.locator('button', { hasText: 'Draft' });
	await draftTab.click();
	await pause(800);

	// Expand Aerospace Dynamics row
	const aeroRow = page
		.locator('[role="button"][tabindex="0"]')
		.filter({ hasText: 'Aerospace Dynamics' })
		.first();
	await aeroRow.click();
	await pause(2000);

	// Collapse row
	await aeroRow.click();
	await pause(500);

	// Open Quote Builder modal
	const newQuoteBtn = page.locator('button', { hasText: 'New Quote' });
	await newQuoteBtn.click();
	await waitVisible(page.getByText('New Quote — RFQ Details'));
	await pause(1500);

	// Click Generate Quote
	const generateBtn = page.locator('button', { hasText: 'Generate Quote' });
	await generateBtn.click();

	// Wait for processing to complete — review step shows quote ID
	const modal = page.locator('.fixed.inset-0');
	await modal.getByText(/Quote QT-2026-0891/).waitFor({ state: 'visible', timeout: 15_000 });
	await pause(2000);

	// Close modal via Save as Draft
	const closeBtn = modal.locator('button', { hasText: 'Save as Draft' });
	await closeBtn.click();
	await pause(500);
});

/* ─── Clip 3: Delivery Intelligence ──────────────────────── */

test('clip-3-delivery', async ({ page }) => {
	await page.goto('/delivery');
	await waitVisible(page.getByText('Delivery Intelligence'));
	await waitForEntrances();

	// Pre-roll
	await pause(2000);

	// Pause on Delivery Risk Summary (Remotion zooms in post-production)
	await pause(2500);

	// Scroll to At-Risk Purchase Orders
	const poHeading = page.getByText('At-Risk Purchase Orders').first();
	await smoothScrollTo(page, poHeading);
	await pause(500);

	// Click first At Risk PO row
	const firstPoRow = page.locator('table tbody tr').first();
	await firstPoRow.click();
	await pause(1500);

	// Click same row to deselect (toggle)
	await firstPoRow.click();
	await pause(500);

	// Scroll back up
	await scrollToTop(page);
	await pause(500);
});

/* ─── Clip 4: Knowledge Base ─────────────────────────────── */

test('clip-4-knowledge', async ({ page }) => {
	await page.goto('/knowledge-base');
	await waitVisible(page.getByText('Technical Knowledge Base'));
	await waitForEntrances();

	// Pre-roll
	await pause(2000);

	// Q1: Mazak VTC-800 setup → response[0] (96% confidence)
	await typeAndSubmit(page, "What's the setup procedure for the Mazak VTC-800?");
	await pause(3000);

	// Q2: Surface finish troubleshooting → response[1] (91% confidence)
	await typeAndSubmit(page, 'Troubleshoot surface finish issues on 4140 steel');
	await pause(3000);
});
