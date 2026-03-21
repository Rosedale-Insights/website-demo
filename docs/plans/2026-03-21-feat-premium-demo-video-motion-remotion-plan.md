---
title: "feat: Premium demo video with Motion + Remotion hybrid pipeline"
type: feat
date: 2026-03-21
---

# Premium Demo Video — Motion + Remotion Hybrid Pipeline

## Overview

Replace the current single-Playwright-recording approach with a three-layer pipeline that produces a website-quality demo video:

1. **Motion** (motion.dev) — spring-physics entrance animations baked into the FORGE app
2. **Playwright** — records 4 per-scene raw clips of the real app (no fake cursor, no zoom)
3. **Remotion** (remotion.dev) — composes clips into a polished final video with cross-fade transitions, animated cursor overlay, zoom effects, fade-to-black ending

No title card, no audio. ~66s of raw footage → ~68s final video at 30fps H.264.

## Problem Statement

The current Playwright-only demo recording has three quality problems:

1. **Mechanical zooms** — CSS `transform: scale()` on `document.documentElement` misaligns with scroll offsets and looks robotic
2. **Robotic cursor** — CSS-transitioned fake cursor lacks natural motion (no spring physics, no acceleration curves)
3. **Hard-cut transitions** — URL navigations with no visual transition between scenes

These make the video unsuitable for the company website. A premium demo needs smooth entrance animations, spring-physics cursor movement, and cinematic scene transitions.

## Proposed Solution

### Architecture

```
┌─────────────────────────────────────────────────────────┐
│ FORGE App (Next.js + Motion entrance animations)        │
└──────────────────────┬──────────────────────────────────┘
                       │ Playwright records 4 tests
                       ▼
┌─────────────────────────────────────────────────────────┐
│ Raw clips (4 .webm files) → ffmpeg → 4 .mp4 files      │
└──────────────────────┬──────────────────────────────────┘
                       │ Copied to video/public/clips/
                       ▼
┌─────────────────────────────────────────────────────────┐
│ Remotion Composition (video/ sub-project)               │
│  TransitionSeries + AnimatedCursor + ZoomEffect         │
└──────────────────────┬──────────────────────────────────┘
                       │ npx remotion render
                       ▼
                  demo.mp4 (final output)
```

## Technical Approach

### Phase 1: Add Motion to FORGE App

**Goal:** Add spring-physics entrance animations to key components. These play in the live app AND get captured by Playwright.

**Strategy: Client wrapper components.** Most pages are server components. Instead of adding `'use client'` to `StatCard` and `GlassCard` globally (which bloats the bundle on every page), create thin client wrappers that add Motion animations.

#### New files

**`components/motion/AnimatedGroup.tsx`** — `'use client'` wrapper that staggers children on mount:

```tsx
'use client';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function AnimatedGroup({ children, className, staggerDelay = 0.08 }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}
```

**`components/motion/AnimatedItem.tsx`** — `'use client'` wrapper for individual items (cards, chart sections):

```tsx
'use client';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

export function AnimatedItem({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } },
      }}
    >
      {children}
    </motion.div>
  );
}
```

#### Modified files

Each page wraps its content sections with `AnimatedGroup` + `AnimatedItem`:

| File | Change |
|------|--------|
| `app/(dashboard)/insights/page.tsx` | Wrap stat cards grid and content sections |
| `app/(dashboard)/shop-floor/page.tsx` | Wrap stat cards and chart/table sections |
| `app/(dashboard)/quoting/page.tsx` | Wrap table section (already `'use client'`) |
| `app/(dashboard)/delivery/page.tsx` | Wrap stat cards, charts, and table sections |
| `app/(dashboard)/knowledge-base/page.tsx` | Wrap chat interface area |
| `components/knowledge/ChatInterface.tsx` | Wrap each new AI message with spring entrance |

#### What NOT to animate

- `Sidebar.tsx` — static, always visible
- `PageHeader.tsx` — appears instantly, anchors the scene
- `QuoteBuilderModal.tsx` — already has its own AI processing animation
- Form inputs — no benefit to animating inputs

#### Dependency

```bash
pnpm add motion
```

**React 19 compatibility:** Motion v11+ supports React 19. Pin to latest stable: `motion@^11`.

---

### Phase 2: Rewrite Playwright for Per-Scene Clips

**Goal:** Produce 4 separate raw video clips of the real app, stripped of all cursor/zoom hacks.

#### Playwright changes

**Remove entirely:**
- `injectCursor()`, `moveCursorTo()`, `moveCursorToElement()`, `clickWithCursor()` — Remotion handles cursor
- `zoomIn()`, `zoomOut()` — Remotion handles zoom
- Ripple animation injection — Remotion handles click effects

**Keep (adapted):**
- `waitVisible()` — wait for elements before interacting
- `smoothScrollTo()`, `smoothScrollToBottom()` — smooth scroll within `<main>`
- `pause()` — timing control

**Add:**
- Real `page.click()` calls instead of `clickWithCursor()` (no cursor overlay needed)
- Per-scene test structure (4 `test()` blocks = 4 separate video files)
- 2s pre-roll at start of each clip (content loaded, no interaction) to support Remotion cross-fades

**Config changes (`playwright.config.ts`):**
- Remove `slowMo: 50` — Remotion controls pacing
- Keep video recording ON at 1920x1080
- Keep `workers: 1` (sequential recording)
- Keep 180s timeout

**New file: `tests/demo-scenes.spec.ts`** (replaces `demo-recording.spec.ts`)

#### Clip choreography

**Clip 1: Home → Shop Floor (~14s including 2s pre-roll)**

1. `goto('/insights')` → wait for "Good morning, Julian" + wait 600ms for Motion entrances
2. **2s pre-roll** (content visible, no interaction — Remotion trims/overlaps this)
3. Pause 2s on intelligence brief cards
4. Click "Shop Floor" in sidebar (`page.click('nav a:has-text("Shop Floor")')`)
5. Wait for "Shop Floor Monitor" + 600ms for Motion entrances
6. Smooth scroll to "All Machines" table
7. Click first machine row (Stalled status — most visually dramatic) → highlights
8. Pause 1.5s
9. **Click same row again to deselect** (toggle behavior — component does not support click-outside deselection)
10. Smooth scroll to top

**Clip 2: Quoting (~26s including 2s pre-roll)**

1. `goto('/quoting')` → wait for "Quoting Tool" + Motion entrances
2. **2s pre-roll**
3. Click "Draft" filter tab (isolates Aerospace Dynamics row)
4. Click Aerospace Dynamics row → expands detail panel (cost breakdown + routing)
5. Pause 2s on expanded detail
6. Click same row → collapses
7. Click "New Quote" button → modal opens
8. Pause 1.5s on pre-filled form
9. Click "Generate Quote" → 5-step AI processing animation (~4.2s)
10. Wait for review step ("Quote QT-2026-0891")
11. Pause 2s on review (cost chart, routing, AI recommendation)
12. Click "Save as Draft" → modal closes

**Note on Draft filter:** Only 1 row visible after filtering. This is intentional — it cleanly isolates the target row. The "All" tab (8 rows) is visible before the filter click, showing data density.

**Clip 3: Delivery (~14s including 2s pre-roll)**

1. `goto('/delivery')` → wait for "Delivery Intelligence" + Motion entrances
2. **2s pre-roll**
3. **Pause 2.5s on Delivery Risk Summary card** (Remotion zooms on this region in post)
4. Smooth scroll to "At-Risk Purchase Orders" table
5. Click first "At Risk" PO row → highlights
6. Pause 1.5s
7. **Click same row to deselect** (toggle behavior)
8. Smooth scroll to top

**Clip 4: Knowledge Base (~20s including 2s pre-roll)**

1. `goto('/knowledge-base')` → wait for empty state with suggestion pills
2. **2s pre-roll**
3. Type Q1: `What's the setup procedure for the Mazak VTC-800?` at 65ms/char (compensates for removed `slowMo`)
4. Click submit → wait for AI response (response[0]: Mazak setup, 96% confidence, 3 citations)
5. Pause 3s for viewer to read response + citation cards
6. Type Q2: `Troubleshoot surface finish issues on 4140 steel` at 65ms/char
7. Click submit → wait for AI response (response[1]: surface finish, 91% confidence, 2 citations)
8. Pause 3s

**KB mock data verification:** The cycling logic at `ChatInterface.tsx:126` uses `responseIndex % enhancedChatResponses.length`. Q1 → response[0] (Mazak setup), Q2 → response[1] (surface finish). Both match the typed queries. Verified: the array has 4 entries with distinct content. If testing reveals both queries return the same response, investigate React state batching.

#### Playwright output

4 `.webm` files in `test-results/`, one per test:
- `test-results/clip-1-home-shopfloor-*/video.webm`
- `test-results/clip-2-quoting-*/video.webm`
- `test-results/clip-3-delivery-*/video.webm`
- `test-results/clip-4-knowledge-*/video.webm`

---

### Phase 3: Scaffold Remotion Sub-Project

**Goal:** Create an isolated `video/` directory with Remotion tooling.

#### Why a separate sub-project

- Remotion has its own bundler (Webpack-based) that conflicts with Turbopack
- Remotion may require React 18 if React 19 support is not stable
- Keeps video tooling out of the Next.js build
- Independent dependency management

#### Setup

```bash
mkdir video
cd video
pnpm init
pnpm add remotion @remotion/cli @remotion/transitions @remotion/media-utils
pnpm add react@^18 react-dom@^18  # Pin to React 18 if Remotion doesn't support 19
```

**NOT a pnpm workspace member.** The `video/` directory is standalone. No `pnpm-workspace.yaml` needed. The pipeline script runs `cd video && pnpm install` as a setup step.

#### Directory structure

```
video/
├── package.json
├── tsconfig.json
├── remotion.config.ts
├── src/
│   ├── index.ts              (entry point — re-exports Root)
│   ├── Root.tsx               (registers ForgeDemo composition)
│   ├── ForgeDemo.tsx          (main video — TransitionSeries)
│   ├── components/
│   │   ├── SceneClip.tsx      (loads a clip + cursor overlay + optional zoom)
│   │   ├── AnimatedCursor.tsx (spring-physics cursor with click ripples)
│   │   └── ZoomEffect.tsx     (interpolate-based scale transform)
│   └── config/
│       └── scenes.ts          (per-scene: cursor keyframes, zoom regions, click frames)
└── public/
    └── clips/                 (raw clips copied here — gitignored)
        ├── clip-1-home-shopfloor.mp4
        ├── clip-2-quoting.mp4
        ├── clip-3-delivery.mp4
        └── clip-4-knowledge.mp4
```

**Clips go in `video/public/clips/`** — Remotion's `<Video>` component loads assets from the `public/` directory via its dev server. The `<Video src={staticFile('clips/clip-1-home-shopfloor.mp4')}` pattern is the standard approach.

#### Composition registration (`Root.tsx`)

```tsx
import { Composition } from 'remotion';
import { ForgeDemo } from './ForgeDemo';
import { useClipDurations } from './hooks/useClipDurations';

export const RemotionRoot: React.FC = () => {
  const totalDuration = useClipDurations(); // dynamic based on actual clip lengths

  return (
    <Composition
      id="ForgeDemo"
      component={ForgeDemo}
      durationInFrames={totalDuration}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
```

**Dynamic durations:** Use `getVideoMetadata()` from `@remotion/media-utils` to read actual clip lengths at render time. This eliminates timing mismatches between Playwright recording and Remotion composition. Each clip's `durationInFrames` = `Math.ceil(clipDurationInSeconds * 30)`.

---

### Phase 4: Build Remotion Components

#### AnimatedCursor (`video/src/components/AnimatedCursor.tsx`)

A positioned `<div>` overlay driven by `useCurrentFrame()` + `interpolate()`:

- **Movement:** Bezier-eased interpolation between keyframe positions. Uses `Easing.bezier(0.22, 0.61, 0.36, 1)` for natural acceleration/deceleration.
- **Click ripples:** At designated click frames, render an expanding ring using `spring({ fps, frame: frame - clickFrame, config: { damping: 15 } })`.
- **Cursor dot:** 20px circle, `rgba(15, 15, 15, 0.9)` fill, 2px white border, subtle shadow. Same as current but with spring-physics movement.

Config-driven: each scene provides an array of `{ frame, x, y, click?: boolean }` keyframes.

#### ZoomEffect (`video/src/components/ZoomEffect.tsx`)

Wraps clip content with animated `transform: scale()` + `transform-origin`:

```tsx
const zoom = interpolate(frame, [startFrame, endFrame], [1, targetScale], {
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
});
```

Applied to:
- **Clip 2 (Quoting):** Zoom on Quote Builder modal review step
- **Clip 3 (Delivery):** Zoom on Delivery Risk Summary card

Zoom origin coordinates are hardcoded per scene (approximate center of the target element within the 1920x1080 frame).

#### SceneClip (`video/src/components/SceneClip.tsx`)

Composite wrapper that layers:
1. `<Video>` — the raw Playwright clip
2. `<ZoomEffect>` — optional zoom transform
3. `<AnimatedCursor>` — cursor overlay on top

Uses `<Sequence from={preRollFrames}>` to skip the 2s pre-roll at the start of each clip, so transitions blend with rendered content instead of loading states.

#### ForgeDemo (`video/src/ForgeDemo.tsx`)

```tsx
<TransitionSeries>
  <TransitionSeries.Sequence durationInFrames={clip1Frames}>
    <SceneClip scene={scenes[0]} />
  </TransitionSeries.Sequence>
  <TransitionSeries.Transition
    timing={linearTiming({ durationInFrames: 15 })} // 0.5s cross-fade
    presentation={fade()}
  />
  <TransitionSeries.Sequence durationInFrames={clip2Frames}>
    <SceneClip scene={scenes[1]} />
  </TransitionSeries.Sequence>
  <TransitionSeries.Transition timing={linearTiming({ durationInFrames: 15 })} presentation={fade()} />
  <TransitionSeries.Sequence durationInFrames={clip3Frames}>
    <SceneClip scene={scenes[2]} />
  </TransitionSeries.Sequence>
  <TransitionSeries.Transition timing={linearTiming({ durationInFrames: 15 })} presentation={fade()} />
  <TransitionSeries.Sequence durationInFrames={clip4Frames}>
    <SceneClip scene={scenes[3]} />
  </TransitionSeries.Sequence>
  {/* Fade to black: 1s */}
  <TransitionSeries.Transition timing={linearTiming({ durationInFrames: 30 })} presentation={fade()} />
  <TransitionSeries.Sequence durationInFrames={30}>
    <AbsoluteFill style={{ backgroundColor: 'black' }} />
  </TransitionSeries.Sequence>
</TransitionSeries>
```

---

### Phase 5: Cursor Keyframe Authoring

**This is the most labor-intensive phase.** Each cursor movement requires frame-accurate x,y coordinates matching element positions in the recorded clips.

#### Methodology

1. **Playwright logs element positions:** During recording, after each interaction, log `{ action, selector, boundingBox, timestamp }` to a JSON file. Example:
   ```ts
   const box = await locator.boundingBox();
   cursorLog.push({ action: 'click', selector: 'button:has-text("Draft")', x: box.x + box.width/2, y: box.y + box.height/2, timestamp: Date.now() - startTime });
   ```

2. **Convert timestamps to frame numbers:** `frame = Math.round(timestampMs / 1000 * 30)` (30fps).

3. **Import as starting keyframes** in `video/src/config/scenes.ts`.

4. **Refine in Remotion Studio:** Use `npx remotion studio` to preview the composition. Scrub frame-by-frame and adjust cursor positions visually until they look natural.

This two-step approach (automated extraction → manual refinement) avoids pure trial-and-error while acknowledging that perfect alignment requires visual tuning.

---

### Phase 6: Pipeline Script

**New `scripts/record-demo.sh`:**

```bash
#!/bin/bash
set -e

echo "=== FORGE Demo Video Pipeline ==="

# 0. Ensure video/ dependencies are installed
echo "Step 0: Installing video project dependencies..."
(cd video && pnpm install --frozen-lockfile 2>/dev/null || cd video && pnpm install)

# 1. Build FORGE app
echo "Step 1: Building FORGE app..."
pnpm build

# 2. Start production server
echo "Step 2: Starting production server..."
pnpm start &
SERVER_PID=$!
sleep 8  # extra buffer for Windows

# 3. Record per-scene clips with Playwright
echo "Step 3: Recording clips with Playwright..."
npx playwright test tests/demo-scenes.spec.ts || { kill $SERVER_PID 2>/dev/null; exit 1; }

# 4. Stop server
kill $SERVER_PID 2>/dev/null || npx kill-port 3000

# 5. Convert .webm clips to .mp4 and move to Remotion public/
echo "Step 4: Converting clips to MP4..."
mkdir -p video/public/clips

CLIPS=("clip-1-home-shopfloor" "clip-2-quoting" "clip-3-delivery" "clip-4-knowledge")
for clip in "${CLIPS[@]}"; do
  WEBM=$(find test-results -name "video.webm" -path "*${clip}*" | head -1)
  if [ -z "$WEBM" ]; then
    echo "ERROR: No recording found for ${clip}"
    exit 1
  fi
  # Convert .webm (VP8) to .mp4 (H.264) using ffmpeg-static or system ffmpeg
  FFMPEG=$(node -e "try{console.log(require('ffmpeg-static'))}catch{console.log('ffmpeg')}")
  "$FFMPEG" -y -i "$WEBM" -c:v libx264 -crf 18 -preset fast "video/public/clips/${clip}.mp4"
done

# 6. Render final video with Remotion
echo "Step 5: Rendering final video with Remotion..."
cd video
npx remotion render ForgeDemo --output=../demo.mp4 --codec=h264 --crf=18
cd ..

echo "=== Done: demo.mp4 ==="
```

**Windows compatibility notes:**
- `kill $SERVER_PID` may not work reliably on Windows bash. Fallback: `npx kill-port 3000`.
- `find` command syntax works in Git Bash on Windows.
- `ffmpeg-static` provides a platform-specific binary that works on Windows.

---

## Implementation Phases

### Phase 1: Motion Entrance Animations (~2-3 hours)

**Files to create:**
- `components/motion/AnimatedGroup.tsx`
- `components/motion/AnimatedItem.tsx`

**Files to modify:**
- `package.json` — add `motion` dependency
- `app/(dashboard)/insights/page.tsx` — wrap sections
- `app/(dashboard)/shop-floor/page.tsx` — wrap sections
- `app/(dashboard)/quoting/page.tsx` — wrap table section
- `app/(dashboard)/delivery/page.tsx` — wrap sections
- `app/(dashboard)/knowledge-base/page.tsx` — wrap chat area
- `components/knowledge/ChatInterface.tsx` — animate new messages

**Verification:** Run `pnpm dev`, navigate each page, confirm entrance animations play smoothly. No visual regression on existing hover/interaction transitions.

### Phase 2: Rewrite Playwright Spec (~1-2 hours)

**Files to create:**
- `tests/demo-scenes.spec.ts` — new 4-clip recording spec

**Files to modify:**
- `playwright.config.ts` — remove `slowMo`, keep video recording config

**Files to archive (not delete yet):**
- `tests/demo-recording.spec.ts` — keep as reference until new spec is verified

**Verification:** Run `npx playwright test tests/demo-scenes.spec.ts`. Confirm 4 separate `.webm` files in `test-results/`. Manually review each clip for correct content.

### Phase 3: Scaffold Remotion Project (~1-2 hours)

**Files to create:**
- `video/package.json`
- `video/tsconfig.json`
- `video/remotion.config.ts`
- `video/src/index.ts`
- `video/src/Root.tsx`
- `video/src/ForgeDemo.tsx`
- `video/src/components/SceneClip.tsx`
- `video/src/components/AnimatedCursor.tsx`
- `video/src/components/ZoomEffect.tsx`
- `video/src/config/scenes.ts`

**Files to modify:**
- `.gitignore` — add `video/public/clips/`, `video/node_modules/`, `video/out/`

**Verification:** `cd video && npx remotion studio` opens. Placeholder composition renders. Basic `<Video>` component loads a test clip.

### Phase 4: Compose & Choreograph (~2-3 hours)

**Files to modify:**
- `video/src/config/scenes.ts` — add cursor keyframes, zoom regions, click frames per scene
- `video/src/ForgeDemo.tsx` — wire up all 4 scenes with transitions

**Verification:** `npx remotion studio` → scrub through full video. Cursor movements align with element positions. Zoom targets correct regions. Cross-fades blend smoothly (no white flash from loading states).

### Phase 5: Pipeline Script (~1 hour)

**Files to create/modify:**
- `scripts/record-demo.sh` — full pipeline (build → record → convert → render)
- `package.json` — update `record-demo` script

**Verification:** Run `pnpm record-demo` end-to-end. `demo.mp4` produced at project root. Play back and confirm quality.

---

## Acceptance Criteria

### Functional Requirements

- [ ] Motion entrance animations play on all 4 recorded pages (Home, Shop Floor, Quoting, Delivery, KB)
- [ ] Playwright produces 4 separate raw clips with correct content per the choreography spec
- [ ] Remotion composes all 4 clips with cross-fade transitions (~0.5s between scenes)
- [ ] Animated cursor with spring-physics movement overlays each scene
- [ ] Zoom effect on Delivery Risk Summary in Clip 3
- [ ] Zoom effect on Quote Builder modal review in Clip 2
- [ ] Video ends with 1s fade to black
- [ ] KB shows correct responses: Q1 → Mazak setup (96%), Q2 → surface finish (91%)
- [ ] Machine row and PO row selection/deselection uses toggle (click same row)
- [ ] Final output: `demo.mp4`, 1920x1080, 30fps, H.264

### Non-Functional Requirements

- [ ] Pipeline runs end-to-end via `pnpm record-demo`
- [ ] Pipeline works on Windows 10 with Git Bash
- [ ] Remotion sub-project is isolated (own dependencies, not a workspace member)
- [ ] Raw clips are gitignored
- [ ] No breaking changes to the live FORGE app (Motion animations are additive)
- [ ] Biome formatting passes on all new/modified files

### Quality Gates

- [ ] Each Motion entrance animation completes in <600ms
- [ ] Final video is <100MB
- [ ] Video plays smoothly at 30fps with no dropped frames
- [ ] Cross-fade transitions show rendered content (no white flash from loading states)

---

## Dependencies & Prerequisites

| Dependency | Version | Purpose |
|-----------|---------|---------|
| `motion` | ^11 | Entrance animations in FORGE app |
| `remotion` | ^4 | Video composition framework |
| `@remotion/cli` | ^4 | Render CLI |
| `@remotion/transitions` | ^4 | Cross-fade transitions |
| `@remotion/media-utils` | ^4 | Dynamic clip duration reading |
| `ffmpeg-static` | ^5.3.0 | Already installed — .webm → .mp4 conversion |
| `@playwright/test` | ^1.58.2 | Already installed — clip recording |

**Remotion + React 19 risk:** If Remotion 4.x does not support React 19, pin `video/package.json` to React 18. Since `video/` is standalone (not a workspace member), there is no version conflict with the main app.

---

## Risk Analysis & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Remotion doesn't support React 19 | Medium | Low | Pin React 18 in video/package.json — fully isolated |
| Cursor keyframes don't align with clip content | High | Medium | Playwright logs element positions → semi-automated starting coordinates + Remotion Studio visual refinement |
| Clip durations vary between recordings | High | Medium | Use `getVideoMetadata()` for dynamic durations instead of hardcoded frame counts |
| Cross-fade shows loading state | Medium | High | 2s pre-roll on each clip + `<Sequence from={60}>` to skip loading frames |
| Pipeline fails on Windows | Medium | Medium | Fallback `kill-port` for server cleanup, test on Windows bash |
| Motion animations cause hydration mismatch | Low | Medium | Wrapper components are purely client-side, no SSR animation state |

---

## Files Summary

### New files (14)

| File | Purpose |
|------|---------|
| `components/motion/AnimatedGroup.tsx` | Staggered entrance wrapper (client component) |
| `components/motion/AnimatedItem.tsx` | Individual entrance wrapper (client component) |
| `tests/demo-scenes.spec.ts` | 4-clip Playwright recording spec |
| `video/package.json` | Remotion project dependencies |
| `video/tsconfig.json` | Remotion TypeScript config |
| `video/remotion.config.ts` | Remotion entry point config |
| `video/src/index.ts` | Remotion entry point |
| `video/src/Root.tsx` | Composition registration |
| `video/src/ForgeDemo.tsx` | Main video (TransitionSeries) |
| `video/src/components/SceneClip.tsx` | Clip + cursor + zoom wrapper |
| `video/src/components/AnimatedCursor.tsx` | Spring-physics cursor overlay |
| `video/src/components/ZoomEffect.tsx` | Interpolate-based zoom |
| `video/src/config/scenes.ts` | Per-scene cursor/zoom/click config |
| `video/src/hooks/useClipDurations.ts` | Dynamic duration from clip metadata |

### Modified files (10)

| File | Change |
|------|--------|
| `package.json` | Add `motion` dependency |
| `app/(dashboard)/insights/page.tsx` | Wrap sections with AnimatedGroup/Item |
| `app/(dashboard)/shop-floor/page.tsx` | Wrap sections |
| `app/(dashboard)/quoting/page.tsx` | Wrap table section |
| `app/(dashboard)/delivery/page.tsx` | Wrap sections |
| `app/(dashboard)/knowledge-base/page.tsx` | Wrap chat area |
| `components/knowledge/ChatInterface.tsx` | Animate new chat messages |
| `playwright.config.ts` | Remove slowMo |
| `scripts/record-demo.sh` | Full pipeline rewrite |
| `.gitignore` | Add video/public/clips/, video/node_modules/, video/out/ |

### Archived (not deleted)

| File | Reason |
|------|--------|
| `tests/demo-recording.spec.ts` | Keep as reference until new spec is verified |

---

## References & Research

### Internal References
- Brainstorm: `docs/brainstorms/2026-03-21-premium-demo-video-brainstorm.md`
- Previous brainstorm: `docs/brainstorms/2026-03-19-demo-recording-rewrite-brainstorm.md`
- Current Playwright spec: `tests/demo-recording.spec.ts`
- Current pipeline: `scripts/record-demo.sh`
- Dashboard layout: `app/(dashboard)/layout.tsx` (animation wrapper insertion point)
- Machine row toggle: `components/shop-floor/MachineStatusGrid.tsx:94`
- PO row toggle: `components/delivery/AtRiskOrdersTable.tsx:67`
- KB response cycling: `components/knowledge/ChatInterface.tsx:126`
- Mock responses: `lib/mock-data.ts:2233-2391`

### External References
- Motion docs: https://motion.dev/docs/react-animation
- Motion React API: https://motion.dev/docs/react-motion-component
- Remotion docs: https://www.remotion.dev/docs/the-fundamentals
- Remotion TransitionSeries: https://www.remotion.dev/docs/transitions/transitionseries
- Remotion Video component: https://www.remotion.dev/docs/video
- Remotion staticFile: https://www.remotion.dev/docs/staticfile
- Remotion getVideoMetadata: https://www.remotion.dev/docs/renderer/get-video-metadata
- Remotion spring: https://www.remotion.dev/docs/spring
- Remotion interpolate: https://www.remotion.dev/docs/interpolate
