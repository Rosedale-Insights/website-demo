---
date: 2026-03-19
topic: demo-recording-rewrite
---

# Demo Recording Rewrite

## What We're Building

A complete rewrite of `tests/demo-recording.spec.ts` — the Playwright script that records a cinematic video walkthrough of the FORGE manufacturing demo. The new script follows a 5-scene narrative that mirrors the natural manufacturing workflow: overview, operations, costing, supply chain, knowledge, then back to home as a bookend.

## Why This Approach

The old script visited Home → KB → Settings/Documents → Quoting → Settings/Agents → Agent Config. It spent time on settings pages that don't showcase the product's core value. The new script drops settings entirely and instead covers the four operational modules (Shop Floor, Quoting, Delivery, Knowledge Base) that demonstrate manufacturing intelligence. Every scene has a clear hero moment and the flow tells a story a manufacturer would recognize.

## Scene Plan

### Scene 1: Home Overview (~6s)

- Navigate to `/insights`
- Wait for "Good morning, Julian" greeting
- Inject cursor
- Light zoom (1.2x) on Intelligence Brief cards
- Pause 1.5s for viewer to absorb
- Zoom out
- Brief pause before transition

### Scene 2: Shop Floor Monitor (~10s)

- Navigate via sidebar → "Shop Floor"
- Wait for "Shop Floor Monitor" header
- Pause 2s on top section (KPIs + Maintenance Timeline + OEE Breakdown)
- Smooth scroll down to Machine Status Grid
- Pause 2s on full machine table

### Scene 3: Quoting Tool (~22s) — Hero Scene

- Navigate via sidebar → "Quoting"
- Wait for "Quoting Tool" header
- Pause on quote table overview
- **Expand first quote row** (click chevron) → reveals QuoteDetailPanel with cost breakdown + operations routing
- Pause 2s on expanded detail
- **Collapse row** (click chevron again)
- **Click "New Quote"** button → opens QuoteBuilderModal
- **Zoom into modal** (1.25x)
- Pause 1.5s on pre-filled form (Customer: "Aerospace Dynamics", Material: "Ti-6Al-4V", Part: "Titanium Turbine Housing", Qty: 6, Urgency: Standard, Certs: AS9100 + ITAR)
- **Click "Generate Quote"** → triggers 5-step AI processing animation
  - Steps auto-advance: "Analyzing part specifications..." → "Matching 847 historical jobs..." → "Calculating material costs (Ti-6Al-4V: $18.50/lb)..." → "Generating manufacturing routing..." → "Optimizing pricing for 68% win probability..."
  - Wait for all steps to complete + auto-transition to review
- Pause 2s on review step (cost breakdown chart, operations routing, AI recommendation, similar jobs, margin slider, price summary)
- **Close modal** (click X or "Save as Draft")
- Zoom out

### Scene 4: Delivery Intelligence (~8s)

- Navigate via sidebar → "Delivery"
- Wait for "Delivery Intelligence" header
- Pause on KPIs + OTD trend chart
- **Zoom on Delivery Risk Summary** (AI insight card) — 1.25x
- Pause 1.5s
- Zoom out
- Smooth scroll down to At-Risk PO table
- Pause on table

### Scene 5: Knowledge Base (~18s)

- Navigate via sidebar → "Knowledge Base"
- Wait for "Technical Knowledge Base" header + empty state with suggestion pills
- **Type Q1**: `What's the setup procedure for the Mazak VTC-800?`
  - Typing speed: ~30ms per character (readable by viewer)
  - Submit (click send or press Enter)
  - Wait for response to render: Mazak VTC-800 setup (96% confidence, 3 citation cards, 3 contributors)
  - Pause 3s for viewer to read response + citations
- **Type Q2**: `Troubleshoot surface finish issues on 4140 steel`
  - Same typing speed
  - Submit
  - Wait for response: surface finish troubleshooting (91% confidence, 2 citations)
  - Pause 3s
- Navigate back to Home via sidebar

### Ending (~2s)

- Wait for Home page to load
- Hide cursor (fade or display:none)
- Hold clean final frame 1.5s

**Total estimated duration: ~66 seconds**

## Animation & Motion Enhancements

### Page Entry Effect
After each navigation, inject a CSS animation on the main content area:
- `opacity: 0 → 1` + `translateY(8px) → translateY(0)`
- Duration: 0.3s ease-out
- Creates an app-like page transition feel

### Smooth Scrolling
Replace `scrollIntoViewIfNeeded()` with `window.scrollTo()` using `behavior: 'smooth'` for cinematic scroll feel. Calculate target Y position from element bounding box.

### Cursor Motion
Slow cursor transition from 0.35s to 0.45s cubic-bezier for more human-like movement.

### Zoom Timing
Increase zoom animation duration from 0.6s to 0.7s for more deliberate feel.

### Chat Typing
Use `pressSequentially` at ~30ms delay (up from current 8ms) so viewers can follow along.

### Processing Animation
The QuoteBuilderModal processing step already has built-in timing (1000ms first step, 800ms subsequent). Let it run naturally — no need to override.

## Key Decisions

- **No Settings/Agents scenes**: Dropped to focus on operational modules that showcase manufacturing intelligence
- **Quoting is the hero scene**: Longest scene, most interactivity, demonstrates the full AI-assisted workflow
- **KB questions match mock data order**: Q1 gets response[0] (Mazak setup, 96% confidence, richest citations), Q2 gets response[1] (surface finish, 91% confidence). Both are realistic shop-floor questions.
- **Form is pre-filled**: The `quoteBuilderDefaults` already populate the form with realistic data. No need to clear and retype — just show and click Generate.
- **Expand quote row before New Quote**: Shows data depth in existing quotes before demonstrating the creation flow.
- **Delivery zoom target is the AI insight card**: The Delivery Risk Summary is the most information-dense element and demonstrates AI analysis.

## Locator Strategy

| Element | Locator |
|---------|---------|
| Sidebar links | `nav a:has-text("Shop Floor")` etc. |
| New Quote button | `button:has-text("New Quote")` |
| Quote row chevron | First expandable row in quote table |
| Generate Quote button | `button:has-text("Generate Quote")` |
| Modal close | `.fixed.inset-0 button` with X icon (top-right) |
| Delivery Risk Summary | Text "Delivery Risk Summary" parent card |
| KB input | `input[placeholder="Ask a technical question..."]` |
| KB send button | `button[type="submit"]` in the KB form |
| Quote processing complete | Wait for "Review" heading to appear |

## Open Questions

None — ready for implementation.

## Next Steps

→ Implement the rewritten `tests/demo-recording.spec.ts`
