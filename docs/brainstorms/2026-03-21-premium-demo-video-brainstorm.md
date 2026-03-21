---
date: 2026-03-21
topic: premium-demo-video
---

# Premium Demo Video — Motion + Remotion Hybrid

## What We're Building

A premium-quality demo video of the FORGE app suitable for the company website. Replaces the current single-Playwright-recording approach with a three-layer architecture:

1. **Motion** (motion.dev) — spring-physics entrance animations baked into the FORGE app itself
2. **Playwright** — records 4 per-scene raw clips of the real app (no fake cursor, no zoom)
3. **Remotion** (remotion.dev) — composes clips into a polished final video with cross-fade transitions, animated cursor overlay, zoom effects

## Why This Approach

The current Playwright-only approach has three problems: (a) CSS `transform: scale()` zooms look mechanical and sometimes misalign with scroll offsets, (b) the fake cursor moves via CSS transitions which feel robotic, (c) scene transitions are hard URL navigations with no visual transition.

A full Remotion rebuild (recreating every screen as React components) would give pixel-perfect control but requires massive engineering effort and must be manually synced with app changes.

The hybrid approach records the **real app** (authentic footage) while letting Remotion handle everything that makes a video feel premium: transitions, cursor, zoom, pacing.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│ FORGE App (Next.js)                                     │
│  + Motion entrance animations (cards, charts, pages)    │
└──────────────────────┬──────────────────────────────────┘
                       │ Playwright records
                       ▼
┌─────────────────────────────────────────────────────────┐
│ Raw clips (4 .mp4 files, one per scene)                 │
│  clip-1-home-shopfloor.mp4                              │
│  clip-2-quoting.mp4                                     │
│  clip-3-delivery.mp4                                    │
│  clip-4-knowledge.mp4                                   │
└──────────────────────┬──────────────────────────────────┘
                       │ Imported as <Video> assets
                       ▼
┌─────────────────────────────────────────────────────────┐
│ Remotion Composition                                    │
│  ├── TransitionSeries                                   │
│  │    ├── Clip 1 + cursor overlay                       │
│  │    ├── cross-fade                                    │
│  │    ├── Clip 2 + cursor overlay + zoom (modal)        │
│  │    ├── cross-fade                                    │
│  │    ├── Clip 3 + cursor overlay + zoom (risk summary) │
│  │    ├── cross-fade                                    │
│  │    └── Clip 4 + cursor overlay                       │
│  └── Fade to black                                      │
└──────────────────────┬──────────────────────────────────┘
                       │ npx remotion render
                       ▼
                  demo.mp4 (final)
```

## Decisions

- **No title card** — video opens straight into the app
- **No audio** — silent video
- **Cross-fade transitions** between all clips (~0.5s dissolves)
- **Cursor style** — dark dot with white border (same as current, but spring-physics movement via Remotion)
- **4 clips, not 5** — Shop Floor is included in Clip 1 (Home → Shop Floor navigation)
- **30fps, H.264** — sufficient for product demo, reasonable render time

## Layer 1: Motion Animations in FORGE App

Add `motion` (the library, formerly Framer Motion) to the FORGE app. These animations play in the live app AND get captured by Playwright recordings.

### What to animate

| Component | Animation | Motion API |
|-----------|-----------|------------|
| Page content wrapper | Fade in + translateY(12px→0) on mount | `<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>` |
| StatCard / GlassCard | Staggered entrance (each card delayed 80ms) | Variants with `staggerChildren: 0.08` on parent |
| Chart areas | Fade + scale(0.97→1) | `<motion.div>` with spring transition |
| Table rows | Stagger from top | Variants with `staggerChildren: 0.03` |
| KB chat messages | Slide in from bottom with spring | `<motion.div initial={{ y: 20, opacity: 0 }}>` |

### What NOT to animate

- Sidebar (static, always visible)
- Page headers (appear instantly, anchor the scene)
- Form inputs in modals (already has the AI processing animation)

### Installation

```bash
pnpm add motion
```

Import from `motion/react` (not `framer-motion`).

## Layer 2: Playwright Per-Scene Clips

Rewrite `tests/demo-recording.spec.ts` to produce **4 separate clips**.

### Changes from current script

- **Remove**: fake cursor injection, `moveCursorTo`, `clickWithCursor`, `zoomIn`, `zoomOut`, ripple effects
- **Remove**: all cursor/zoom choreography
- **Keep**: `waitVisible`, `smoothScrollTo`, `smoothScrollToBottom`
- **Add**: per-scene test structure (4 separate tests, each produces its own video clip)
- **Add**: real browser clicks (no cursor overlay — Remotion handles that)

### Scene clips — detailed choreography

#### Clip 1: Home → Shop Floor (~12s)

1. Navigate to `/insights`
2. Wait for "Good morning, Julian" + Motion entrance animations
3. Pause 2s on intelligence brief cards
4. Click "Shop Floor" in sidebar
5. Wait for "Shop Floor Monitor" + Motion entrance
6. Scroll down to "All Machines" table
7. Click a machine row → highlights (white bg, other rows dim 40%)
8. Pause 1.5s
9. Click elsewhere to deselect
10. Scroll back up

#### Clip 2: Quoting (~24s)

1. Navigate to `/quoting`
2. Wait for "Quoting Tool" + Motion entrance
3. Click "Draft" filter tab
4. Expand Aerospace Dynamics row → detail panel (cost breakdown + routing)
5. Pause 2s on expanded detail
6. Collapse row
7. Click "New Quote" → modal opens
8. Pause 1.5s on pre-filled form
9. Click "Generate Quote" → 5-step AI processing animation
10. Wait for processing to complete → review step
11. Pause 2s on review (cost chart, routing, AI recommendation, margin slider)
12. Close modal (click "Save as Draft")

#### Clip 3: Delivery (~12s)

1. Navigate to `/delivery`
2. Wait for "Delivery Intelligence" + Motion entrance
3. **Pause 2s on Delivery Risk Summary** (Remotion will zoom on this region in post)
4. Scroll down to "At-Risk Purchase Orders" table
5. Click a PO row → highlights (white bg, others dim)
6. Pause 1.5s
7. Click to deselect
8. Scroll back up

#### Clip 4: Knowledge Base (~18s)

1. Navigate to `/knowledge-base`
2. Wait for empty state with suggestion pills
3. Type Q1: `What's the setup procedure for the Mazak VTC-800?` (~30ms/char)
4. Submit → wait for AI response (96% confidence, Mazak setup content, 3 citations)
5. Pause 3s for viewer to read
6. Type Q2: `Troubleshoot surface finish issues on 4140 steel` (~30ms/char)
7. Submit → wait for AI response (91% confidence, surface finish content, 2 citations)
8. Pause 3s

**KB mock data note**: The cycling logic (`responseIndex % enhancedChatResponses.length`) should deliver response[0] (Mazak setup) for Q1 and response[1] (surface finish) for Q2. Verify during implementation — if both return the same response, fix the state management.

### Playwright config

- Video recording ON (1920x1080)
- No `slowMo` — real-time recording
- Output to `video/raw-clips/` directory

## Layer 3: Remotion Composition

New `video/` directory at project root with a standalone Remotion project.

### Directory structure

```
video/
├── package.json          (remotion, @remotion/cli, @remotion/transitions)
├── tsconfig.json
├── remotion.config.ts
├── src/
│   ├── Root.tsx           (registers the main composition)
│   ├── ForgeDemo.tsx      (main video — TransitionSeries of all clips)
│   ├── components/
│   │   ├── SceneClip.tsx      (wrapper: loads a raw clip + cursor overlay + optional zoom)
│   │   ├── AnimatedCursor.tsx (spring-physics cursor with click ripples)
│   │   └── ZoomEffect.tsx     (interpolate-based zoom on scale)
│   └── config/
│       └── scenes.ts          (per-scene config: clip path, cursor keyframes, zoom regions, timing)
└── raw-clips/             (Playwright output — gitignored)
    ├── clip-1-home-shopfloor.mp4
    ├── clip-2-quoting.mp4
    ├── clip-3-delivery.mp4
    └── clip-4-knowledge.mp4
```

### Key Remotion components

#### AnimatedCursor

A `<div>` positioned absolutely, driven by `useCurrentFrame()` + `interpolate()`:

```tsx
// Pseudo-code
const frame = useCurrentFrame();
const x = interpolate(frame, [0, 30, 60, 90], [960, 400, 400, 700], {
  easing: Easing.bezier(0.22, 0.61, 0.36, 1),
  extrapolateRight: "clamp",
});
```

Each scene defines cursor keyframes in config. Click ripples at specific frames using `spring()`.

#### ZoomEffect

Wraps a scene clip in a `<div>` with animated `transform: scale()` + `transform-origin`:

```tsx
const zoom = interpolate(frame, [startFrame, endFrame], [1, 1.35], {
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
```

#### Composition structure

```tsx
<TransitionSeries>
  <TransitionSeries.Sequence durationInFrames={clip1Duration}>
    <SceneClip clip="clip-1-home-shopfloor.mp4" cursor={clip1Cursor} />
  </TransitionSeries.Sequence>
  <TransitionSeries.Transition
    timing={linearTiming({ durationInFrames: 15 })}
    presentation={fade()}
  />
  <TransitionSeries.Sequence durationInFrames={clip2Duration}>
    <SceneClip clip="clip-2-quoting.mp4" cursor={clip2Cursor} zoom={clip2Zoom} />
  </TransitionSeries.Sequence>
  {/* ... clips 3, 4 with cross-fades ... */}
</TransitionSeries>
```

### Scene config format

```ts
export const scenes = [
  {
    id: "home-shopfloor",
    clip: "clip-1-home-shopfloor.mp4",
    durationInFrames: 360, // 12s at 30fps
    cursor: [
      { frame: 60, x: 960, y: 400 },   // hover intelligence brief
      { frame: 120, x: 140, y: 320 },   // move to sidebar "Shop Floor"
      { frame: 150, x: 140, y: 320, click: true },
      // ... more keyframes
    ],
    zoom: [], // no zoom for clip 1
  },
  // ... more scenes
];
```

## Pipeline Script

Updated `scripts/record-demo.sh`:

```bash
#!/bin/bash
set -e

# 1. Build FORGE app
pnpm build

# 2. Start production server
pnpm start &
SERVER_PID=$!
sleep 5

# 3. Record per-scene clips with Playwright
npx playwright test tests/demo-scenes.spec.ts
kill $SERVER_PID

# 4. Move clips to Remotion raw-clips/
mkdir -p video/raw-clips
mv video/raw-clips-tmp/*.mp4 video/raw-clips/

# 5. Render final video with Remotion
cd video
npx remotion render src/index.ts ForgeDemo ../demo.mp4 --codec=h264 --crf=18
cd ..

echo "Done: demo.mp4"
```

## Implementation Order

1. **Add Motion to FORGE app** — entrance animations on key components
2. **Verify KB mock cycling** — ensure Q1→response[0], Q2→response[1] works correctly
3. **Rewrite Playwright spec** — 4 per-scene clips, stripped of cursor/zoom
4. **Scaffold Remotion project** — `video/` directory with basic composition
5. **Build cursor + zoom overlays** — AnimatedCursor, ZoomEffect components
6. **Compose clips** — TransitionSeries with all 4 clips + cross-fades
7. **Choreograph** — fine-tune cursor keyframes, zoom timing per scene
8. **Pipeline script** — end-to-end `pnpm record-demo`
9. **Fade to black ending** — clean final frame

## Next Steps

→ `/workflows:plan` for implementation details
