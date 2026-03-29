---
title: "feat: Rewrite Playwright demo recording script"
type: feat
date: 2026-03-19
---

# Rewrite Playwright Demo Recording Script

## Overview

Rewrite `tests/demo-recording.spec.ts` to follow a 5-scene manufacturing narrative (Home -> Shop Floor -> Quoting -> Delivery -> KB -> Home bookend), replacing the old script that visited Settings pages. Add motion polish: smoother cursor, page entry animations, cinematic scrolling, and adjusted zoom timing.

## Problem Statement / Motivation

The old demo script visits Settings/Documents and Settings/Agents — pages that don't showcase the product's core manufacturing intelligence. The four operational modules (Shop Floor, Quoting, Delivery, Knowledge Base) are now fully built and need to be the focus. The quoting module in particular has a rich interactive flow (expand rows, full Quote Builder modal with AI processing) that was barely touched in the old script.

## Proposed Solution

One file rewrite (`tests/demo-recording.spec.ts`) plus a small config change to `playwright.config.ts`. No app code changes. All motion enhancements are injected by the Playwright script via `page.evaluate()`.

## Technical Approach

### Critical Issues Identified by Spec-Flow Analysis

These MUST be addressed during implementation:

| Issue | Problem | Fix |
|-------|---------|-----|
| **Scroll container** | `window.scrollTo()` does nothing — `<main>` has `overflow-y-auto`, outer div has `overflow-hidden` | All smooth scroll calls must target `document.querySelector('main')` |
| **Zoom scroll offset** | `zoomIn()` reads `window.scrollY` (always 0) — zoom origin is wrong for scrolled elements | Replace with `document.querySelector('main').scrollTop` |
| **"Intelligence Brief" locator** | Text "Intelligence Brief" does NOT exist in the rendered DOM — only an HTML comment | Target first brief card via `page.getByText('Seal Failure Risk on Line 4')` or the container |
| **Playwright timeout** | Config is 60s; actual recording will be 80-100s with `slowMo: 50` | Increase to `180_000` in `playwright.config.ts` |
| **Zoom during modal** | `scale()` on `<html>` while fixed-overlay modal is open may cause backdrop gaps | Do NOT zoom while modal is open; zoom on the quote table row instead, then open modal at 1x |
| **"Review" heading ambiguity** | `getByText('Review')` could match "Review" status in the quote table behind the modal | Scope to modal: `page.locator('.fixed.inset-0').getByText(/Review/)` |
| **Typing speed + slowMo** | 30ms typing + 50ms `slowMo` = 80ms/char effective; KB scene alone would be 28s not 18s | Reduce `pressSequentially` delay to 18ms (18+50=68ms effective, natural pace) |

### Phase 1: Update `playwright.config.ts`

**File:** `playwright.config.ts`

Single change — increase timeout:

```ts
timeout: 180_000, // was 60_000 — recording takes ~90-100s with slowMo
```

### Phase 2: Rewrite Helper Functions in `tests/demo-recording.spec.ts`

Keep existing helpers but modify these:

#### 2a. Fix `scrollToElement` — target `<main>` with smooth scroll

Replace `scrollIntoViewIfNeeded()` with smooth scroll on the `<main>` element:

```ts
async function smoothScrollTo(page: Page, locator: Locator) {
  await waitVisible(locator);
  const box = await locator.boundingBox();
  if (!box) return;
  await page.evaluate(
    ({ targetY }) => {
      const main = document.querySelector('main');
      if (main) {
        main.scrollTo({ top: targetY - 200, behavior: 'smooth' });
      }
    },
    { targetY: box.y + (/* main.scrollTop */ await page.evaluate(() => document.querySelector('main')?.scrollTop ?? 0)) },
  );
  await pause(800); // let smooth scroll complete
}
```

Note: the actual implementation should compute the absolute Y within `<main>` by adding `main.scrollTop` to the bounding box `y`, then subtracting viewport offset to position the element nicely (e.g., 200px from top).

#### 2b. Fix `zoomIn` — read scroll offset from `<main>`

```ts
// Replace:
const scroll = await page.evaluate(() => ({
  x: window.scrollX,
  y: window.scrollY,
}));
// With:
const scroll = await page.evaluate(() => {
  const main = document.querySelector('main');
  return { x: 0, y: main?.scrollTop ?? 0 };
});
```

#### 2c. Slow cursor transition

In `injectCursor`, change the cursor's CSS transition:
```
transition: 'left 0.45s cubic-bezier(...), top 0.45s cubic-bezier(...), ...'
// was 0.35s
```

#### 2d. Slow zoom duration

In `zoomIn` and `zoomOut`, change transition duration:
```
html.style.transition = 'transform 0.7s ease-in-out';
// was 0.6s
```
And increase the pause after to 750ms (was 650ms).

#### 2e. Add page entry animation helper

New helper injected after each navigation:

```ts
async function animatePageEntry(page: Page) {
  await page.evaluate(() => {
    const main = document.querySelector('main');
    if (!main) return;
    const content = main.firstElementChild as HTMLElement;
    if (!content) return;
    content.style.transition = 'none';
    content.style.opacity = '0';
    content.style.transform = 'translateY(8px)';
    // Force reflow
    void content.offsetHeight;
    content.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  });
  await pause(350);
}
```

#### 2f. Update `navigateVia` to include page entry animation

```ts
async function navigateVia(page: Page, linkText: string, waitForText: string) {
  // Reset scroll to top before navigating
  await page.evaluate(() => {
    const main = document.querySelector('main');
    if (main) main.scrollTop = 0;
  });
  const link = page.locator('nav a', { hasText: linkText });
  await clickWithCursor(page, link);
  await waitVisible(page.getByText(waitForText).first());
  await injectCursor(page);
  await animatePageEntry(page);
  await pause(400);
}
```

#### 2g. Update `typeMessage` for KB

Adjust typing speed and use more reliable response detection:

```ts
async function typeMessage(page: Page, text: string) {
  const input = page.locator('input[placeholder="Ask a technical question..."]');
  await clickWithCursor(page, input);
  await input.pressSequentially(text, { delay: 18 }); // 18ms + 50ms slowMo = ~68ms effective

  const beforeCount = await page.locator('.space-y-6 > div').count();

  const sendBtn = page.locator('button[type="submit"]');
  await clickWithCursor(page, sendBtn);

  // Wait for new messages to appear
  await page.waitForFunction(
    (expected) => {
      const container = document.querySelector('.space-y-6.overflow-y-auto');
      return container && container.children.length >= expected;
    },
    beforeCount + 2,
    { timeout: 10_000 },
  );
  await pause(300);
}
```

### Phase 3: Rewrite the Demo Script (5 Scenes)

#### Scene 1: Home Overview (~6s effective)

```
goto('/insights')
waitVisible('Good morning, Julian')
pause(1200)
injectCursor()
animatePageEntry()

// Zoom on first brief card (NOT "Intelligence Brief" — that text doesn't exist)
const briefCard = page.getByText('Seal Failure Risk on Line 4').first()
zoomIn(page, briefCard, 1.2)
pause(1500)
zoomOut()
pause(600)
```

#### Scene 2: Shop Floor Monitor (~10s effective)

```
navigateVia('Shop Floor', 'Shop Floor Monitor')
pause(2000) // viewer absorbs KPIs + maintenance timeline

// Smooth scroll to machine table
const machineTable = page.getByText('Machine Status').first()
smoothScrollTo(page, machineTable)
pause(2000) // viewer reads machine grid
```

#### Scene 3: Quoting Tool — Hero Scene (~25s effective)

```
navigateVia('Quoting', 'Quoting Tool')
pause(1000) // overview

// Expand first quote row
const firstRow = page.locator('[role="button"][tabindex="0"]').first()
clickWithCursor(page, firstRow)
pause(2000) // viewer sees cost breakdown + operations routing

// Collapse row
clickWithCursor(page, firstRow)
pause(500)

// Open Quote Builder
const newQuoteBtn = page.locator('button', { hasText: 'New Quote' })
clickWithCursor(page, newQuoteBtn)
await waitVisible(page.getByText('New Quote — RFQ Details'))
pause(1500) // viewer reads pre-filled form

// Click Generate Quote
const generateBtn = page.locator('button', { hasText: 'Generate Quote' })
clickWithCursor(page, generateBtn)

// Wait for processing animation to complete and review to appear
// Scope "Review" check to the modal to avoid matching table "Review" status
const modal = page.locator('.fixed.inset-0')
await modal.getByText(/Quote QT-2026-0891/).waitFor({ state: 'visible', timeout: 15_000 })
pause(2500) // viewer absorbs review: cost chart, routing, AI recommendation, price

// Close modal
const closeBtn = modal.locator('button', { hasText: 'Save as Draft' })
clickWithCursor(page, closeBtn)
pause(500)
```

**Key decision: NO zoom while modal is open.** The fixed-position overlay + `scale()` on `<html>` causes backdrop gaps. The modal content is already large and readable at 1x.

#### Scene 4: Delivery Intelligence (~8s effective)

```
navigateVia('Delivery', 'Delivery Intelligence')
pause(1200) // viewer sees KPIs + OTD chart

// Zoom on Delivery Risk Summary card
const riskSummary = page.locator('.glass-solid', {
  has: page.getByText('Delivery Risk Summary')
})
zoomIn(page, riskSummary, 1.25)
pause(1500) // viewer reads AI insight
zoomOut()
pause(400) // breathing room between zoom-out and scroll

// Scroll to At-Risk PO table
const poTable = page.getByText('At-Risk Purchase Orders').first()
smoothScrollTo(page, poTable)
pause(1500) // viewer scans PO table
```

#### Scene 5: Knowledge Base (~20s effective)

```
navigateVia('Knowledge Base', 'Technical Knowledge Base')
pause(1000) // viewer sees empty state + suggestion pills

// Q1: Mazak VTC-800 setup
typeMessage(page, "What's the setup procedure for the Mazak VTC-800?")
pause(3000) // viewer reads response + 3 citation cards

// Q2: Surface finish troubleshooting
typeMessage(page, 'Troubleshoot surface finish issues on 4140 steel')
pause(3000) // viewer reads response + 2 citation cards
```

#### Ending (~3s effective)

```
navigateVia('Home', 'Good morning, Julian')
pause(800)

// Hide cursor for clean final frame
page.evaluate(() => {
  const c = document.getElementById('demo-cursor');
  if (c) c.style.display = 'none';
})
pause(1500) // hold clean final frame
```

### Timing Estimate (with `slowMo: 50`)

| Scene | Content | Pauses | Cursor/Click | SlowMo overhead | Subtotal |
|-------|---------|--------|-------------|-----------------|----------|
| 1. Home | zoom in/out ~1.5s | 3.3s | ~1.5s | ~0.5s | ~7s |
| 2. Shop Floor | scroll ~1s | 4.4s | ~1s | ~0.5s | ~7s |
| 3. Quoting | expand/collapse + modal flow ~8s | 7.5s | ~4s | ~2s | ~22s |
| 4. Delivery | zoom + scroll ~2s | 4.6s | ~2s | ~1s | ~10s |
| 5. KB | typing ~7s (2 Qs at 68ms/char) | 7s | ~2s | ~3s | ~19s |
| End | nav + hide | 2.3s | ~1s | ~0.3s | ~4s |
| **Total** | | | | | **~69s** |

With buffer for React rendering, animation completion, and variability: **expect 80-100s actual runtime**. The 180s timeout provides ample headroom.

## Acceptance Criteria

- [ ] Video covers all 5 scenes in order: Home -> Shop Floor -> Quoting -> Delivery -> KB -> Home
- [ ] Fake cursor is visible throughout (20px dark dot with white border)
- [ ] Click ripples fire on every click
- [ ] Page entry fade-in animation plays after each navigation
- [ ] Smooth scroll (not jump) when scrolling to machine table and PO table
- [ ] Quote table row expands/collapses cleanly
- [ ] Quote Builder modal opens, shows pre-filled form, processes 5 AI steps, shows review
- [ ] KB shows typed questions with readable pace, responses render with citation cards
- [ ] No zoom applied while modal overlay is open
- [ ] Final frame shows Home page with no cursor for 1.5s
- [ ] Total runtime under 120s
- [ ] `pnpm record-demo` completes without errors and produces `demo-recording.mp4`

## Files Changed

| File | Change |
|------|--------|
| `tests/demo-recording.spec.ts` | Full rewrite — new scene order, updated helpers, motion enhancements |
| `playwright.config.ts` | Increase `timeout` from `60_000` to `180_000` |

## Dependencies & Risks

- **Risk: Locator fragility** — Quote table row selector depends on `[role="button"][tabindex="0"]`. If these attributes change, the locator breaks. Mitigated by using the most semantic selector available.
- **Risk: Processing animation timing** — The Quote Builder's 5-step animation is driven by `setTimeout` inside React. If step timing changes in the component, the wait-for-Review strategy still works (it waits for the heading, not a fixed delay).
- **Risk: Smooth scroll duration** — `behavior: 'smooth'` scroll speed varies by browser. The 800ms pause should be sufficient for Chromium but may need adjustment if scroll distance is large.

## References

- Brainstorm: `docs/brainstorms/2026-03-19-demo-recording-rewrite-brainstorm.md`
- Existing script: `tests/demo-recording.spec.ts`
- Original recording prompt: `docs/demo_recording_test_prompt.md`
- CLAUDE.md Demo Recording System section
