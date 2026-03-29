---
title: "feat: Rebuild demo video as Remotion-native composition with real React components"
type: feat
date: 2026-03-21
---

# Rebuild Demo Video as Remotion-Native Composition

## Overview

Replace the Playwright screen-recording approach with a fully Remotion-native demo video that renders the actual FORGE React components directly. Instead of recording a running app through a lossy VP8 encoder, Remotion opens real Chromium, renders React components to the DOM, screenshots each frame as lossless PNG, and encodes to H.264. This eliminates the quality bottleneck entirely — every frame is pixel-perfect.

## Problem Statement

The current pipeline records the live FORGE app with Playwright's built-in video, which hardcodes VP8 at 1 Mbit/s. This causes fuzzy text, compression artifacts on UI edges, and overall softness. The CDP screencast alternative was investigated but rejected due to complexity (frame timing during pauses, disk I/O at 33ms intervals, OneDrive sync interference) and fragility for dynamic content like scrolling and typing.

The fundamental issue: any approach that records a running app in real-time and compresses it will lose quality. The only way to get pixel-perfect output is to render each frame independently — which is exactly what Remotion does.

## Proposed Solution

Port the FORGE demo components into the existing `video/` Remotion sub-project. Each "scene" becomes a React composition that renders the actual UI components (GlassCard, StatCard, charts, tables, etc.) with frame-driven animations for cursor movement, scrolling, typing, and state transitions. Remotion renders each frame as a lossless PNG screenshot of real Chromium DOM, then encodes to H.264.

### What This Gives Us

- **Pixel-perfect quality** — no compression at capture time
- **Full control over timing** — every frame is deterministic
- **Instant iteration** — change a zoom, cursor path, or timing in code and preview in Remotion Studio (no 3-minute re-record cycle)
- **No server required** — no need to build/serve the Next.js app for recording
- **Simpler pipeline** — `cd video && npx remotion render` is the entire pipeline

### Architecture

```
video/
├── src/
│   ├── Root.tsx                    (registers ForgeDemo composition)
│   ├── ForgeDemo.tsx               (TransitionSeries of all scenes)
│   ├── components/
│   │   ├── ForgeSidebar.tsx        (static sidebar, active state via props)
│   │   ├── ForgeLayout.tsx         (atmosphere bg + sidebar + content area)
│   │   ├── DemoCursor.tsx          (animated cursor with click effects)
│   │   ├── ScrollContainer.tsx     (translateY-driven scroll simulation)
│   │   ├── TypingText.tsx          (character-by-character reveal)
│   │   ├── StaggerEntrance.tsx     (Remotion replacement for AnimatedGroup)
│   │   ├── FadeSlideIn.tsx         (Remotion replacement for AnimatedItem)
│   │   └── ZoomEffect.tsx          (existing — unchanged)
│   ├── scenes/
│   │   ├── SceneHome.tsx           (Home + Shop Floor navigation)
│   │   ├── SceneQuoting.tsx        (Quoting flow with modal)
│   │   ├── SceneDelivery.tsx       (Delivery Intelligence)
│   │   └── SceneKnowledge.tsx      (Knowledge Base chat)
│   └── config/
│       └── scenes.ts              (cursor keyframes, scroll keyframes, timing)
├── forge/                          (ported FORGE components — see Phase 2)
│   ├── components/                 (copied from main project, adapted)
│   ├── lib/                        (mock-data.ts, utils.ts — copied as-is)
│   └── styles/                     (globals.css theme tokens)
└── public/                         (static assets if needed)
```

## Technical Approach

### Phase 1: Remotion Project Setup (Tailwind v4, Fonts, CSS)

**Goal:** Get the existing `video/` Remotion project set up with Tailwind v4 and Inter font so that FORGE components render identically.

#### 1a. Add dependencies

```bash
cd video
pnpm add tailwindcss @remotion/tailwind-v4 @remotion/google-fonts
pnpm add recharts lucide-react clsx tailwind-merge
```

#### 1b. Configure Tailwind v4

```ts
// video/remotion.config.ts
import { Config } from '@remotion/cli/config';
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setEntryPoint('src/index.ts');
Config.overrideWebpackConfig((current) => enableTailwind(current));
```

#### 1c. Configure path aliases

The FORGE components use `@/` path alias. Configure webpack in `remotion.config.ts`:

```ts
Config.overrideWebpackConfig((current) => {
  const withTailwind = enableTailwind(current);
  return {
    ...withTailwind,
    resolve: {
      ...withTailwind.resolve,
      alias: {
        ...withTailwind.resolve?.alias,
        '@': path.resolve(__dirname, 'forge'),
      },
    },
  };
});
```

#### 1d. Copy and adapt CSS

Copy `app/globals.css` theme tokens into `video/forge/styles/globals.css`. Remove Next.js-specific directives. Import in Remotion entry:

```css
/* video/forge/styles/globals.css */
@import 'tailwindcss';

@theme {
  /* All --color-forge-* tokens, --shadow-*, etc. copied from app/globals.css */
}

/* .forge-atmosphere, .glass, .glass-solid classes */
```

#### 1e. Load Inter font

```ts
// video/src/fonts.ts
import { loadFont } from '@remotion/google-fonts/Inter';
const { fontFamily } = loadFont();
export { fontFamily };
```

Apply via a wrapper `<div style={{ fontFamily }}>` around all scene content.

#### 1f. Add sideEffects to package.json

```json
{
  "sideEffects": ["*.css"]
}
```

**Acceptance criteria:**
- [ ] Remotion Studio starts without errors
- [ ] A test composition rendering `<div className="glass p-4 text-forge-primary">Hello</div>` shows correct glass styling and Inter font
- [ ] Tailwind utility classes and FORGE theme tokens work

---

### Phase 2: Port FORGE Components

**Goal:** Copy components from the main project into `video/forge/` and adapt them for Remotion.

#### Component audit summary

| Category | Count | Changes needed |
|----------|-------|---------------|
| Clean — copy as-is | 20 | None |
| Remove `'use client'` + hard-code state | 13 | Minor — remove directive, replace useState with props |
| Replace `next/*` imports | 4 | Replace Link/usePathname/useSearchParams with static values |
| Replace `motion/react` | 3 | Rewrite with Remotion interpolate/spring |
| Replace Recharts `ResponsiveContainer` | 4 | Set explicit width/height instead |

#### 2a. Copy clean components (20 files, no changes)

```
video/forge/components/
├── GlassCard.tsx
├── StatCard.tsx
├── PageHeader.tsx
├── delivery/
│   ├── DelayRootCauseChart.tsx
│   ├── DeliveryAgentFeed.tsx
│   ├── DeliveryBrief.tsx
├── shop-floor/
│   ├── MachineAlerts.tsx
│   ├── MaintenanceTimeline.tsx
│   ├── OeeBreakdown.tsx
│   ├── ShiftOverview.tsx
├── quoting/
│   ├── AiInsightBanner.tsx
│   ├── ConfidenceGauge.tsx
│   ├── OperationsRouting.tsx
│   ├── QuoteDetailPanel.tsx
│   ├── SimilarJobsPanel.tsx
├── agents/
│   ├── AgentCard.tsx
│   ├── LiveActivity.tsx
├── knowledge/
│   ├── SourceCards.tsx
├── documents/
│   ├── PinnedDocs.tsx
├── settings/
│   ├── SecuritySection.tsx
├── insights/
│   └── IntelligenceBrief.tsx
```

Also copy:
```
video/forge/lib/mock-data.ts    (as-is)
video/forge/lib/utils.ts        (as-is — cn() helper)
```

#### 2b. Adapt `'use client'` components (13 files)

These components use `useState` for interactive state (row selection, tab switching, etc.). In Remotion, state is driven by frame number via props. For each:

1. Remove `'use client'` directive
2. Replace `useState` with props (e.g., `selectedRow?: string`)
3. Remove event handlers that set state (onClick, onChange)
4. Keep the JSX rendering logic intact

Files: `AtRiskOrdersTable`, `SupplierScorecard`, `MachineStatusGrid`, `QuoteBuilderModal`, `QuoteFilterTabs`, `QuoteTable`, `ConfigForm`, `Guardrails`, `DocTable`, `AiSettings`, `ProfileForm`, `CostBreakdownChart`, `PerformanceAnalytics/PerformanceChart`

Example — `QuoteTable.tsx`:

```tsx
// Before (in main project)
'use client';
export function QuoteTable() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  return (
    <div onClick={() => setExpandedRow(id)}>...</div>
  );
}

// After (in video/forge/)
export function QuoteTable({ expandedRow }: { expandedRow?: string | null }) {
  return (
    <div>...</div>  // same JSX, no onClick
  );
}
```

#### 2c. Replace Next.js imports (4 files)

**`Sidebar.tsx`** — biggest change. Create `video/forge/components/ForgeSidebar.tsx`:

```tsx
// Static sidebar for video — no router
const navItems = [
  { label: 'Home', icon: Home, href: '/insights' },
  { label: 'Delivery', icon: Truck, href: '/delivery' },
  { label: 'Shop Floor', icon: Factory, href: '/shop-floor' },
  { label: 'Quoting', icon: Calculator, href: '/quoting' },
  { label: 'Knowledge Base', icon: BookOpen, href: '/knowledge-base' },
];

export function ForgeSidebar({ activePath }: { activePath: string }) {
  return (
    // Same JSX as original, but:
    // - <a> instead of <Link>
    // - activePath prop instead of usePathname()
    // - No click handlers (navigation is scene-based)
  );
}
```

**`settings/page.tsx`** — replace `useSearchParams` with `activeTab` prop.
**`agents/page.tsx`**, **`documents/page.tsx`** — remove `redirect()` calls (not rendered in video).

#### 2d. Replace Motion animations (3 files)

Create Remotion-native replacements:

**`video/src/components/StaggerEntrance.tsx`** — replaces `AnimatedGroup`:

```tsx
import { useCurrentFrame, interpolate, Easing } from 'remotion';

export function StaggerEntrance({
  children,
  staggerDelay = 3,  // frames between each child
  startFrame = 0,
}: {
  children: React.ReactNode[];
  staggerDelay?: number;
  startFrame?: number;
}) {
  const frame = useCurrentFrame();
  return (
    <>
      {React.Children.map(children, (child, i) => {
        const childStart = startFrame + i * staggerDelay;
        const opacity = interpolate(frame, [childStart, childStart + 12], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
        const y = interpolate(frame, [childStart, childStart + 12], [12, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.cubic),
        });
        return (
          <div style={{ opacity, transform: `translateY(${y}px)` }}>
            {child}
          </div>
        );
      })}
    </>
  );
}
```

**`video/src/components/FadeSlideIn.tsx`** — replaces `AnimatedItem`:

```tsx
export function FadeSlideIn({
  children,
  startFrame = 0,
  duration = 15,
}: {
  children: React.ReactNode;
  startFrame?: number;
  duration?: number;
}) {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const y = interpolate(frame, [startFrame, startFrame + duration], [12, 0], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  return <div style={{ opacity, transform: `translateY(${y}px)` }}>{children}</div>;
}
```

#### 2e. Fix Recharts for fixed dimensions (4 files)

Replace `ResponsiveContainer` with explicit dimensions:

```tsx
// Before
<ResponsiveContainer width="100%" height={200}>
  <AreaChart data={data}>...</AreaChart>
</ResponsiveContainer>

// After (in video/forge/)
<AreaChart width={800} height={200} data={data}>
  ...
</AreaChart>
```

Files: `SupplierOtdChart` (delivery), `CostBreakdownChart` (quoting), `PerformanceAnalytics`, `PerformanceChart` (agents — not in demo scenes, can skip).

**Note:** Recharts' built-in animations (`animationBegin`, `animationDuration`) use `requestAnimationFrame` which won't sync with Remotion's frame-based rendering. For the Delivery OTD chart animation (currently `animationBegin: 800ms`), either:
- Disable Recharts animation (`isAnimationActive={false}`) and use Remotion `interpolate()` to animate the data values
- Or accept that the chart appears fully drawn (simpler, and the zoom effect draws attention anyway)

**Acceptance criteria:**
- [ ] All 20 clean components render correctly in a test Remotion composition
- [ ] Adapted components accept props instead of internal state
- [ ] ForgeSidebar renders with correct active state highlighting
- [ ] StaggerEntrance/FadeSlideIn produce smooth entrance animations in Remotion Studio
- [ ] Recharts render at correct fixed dimensions without ResponsiveContainer

---

### Phase 3: Build Interaction Simulation Components

**Goal:** Create the building blocks for simulating user interactions (cursor, scrolling, typing) that drive the demo choreography.

#### 3a. DemoCursor — animated cursor with click effects

```tsx
// video/src/components/DemoCursor.tsx
import { useCurrentFrame, interpolate, spring, useVideoConfig, Easing } from 'remotion';

type CursorKeyframe = {
  frame: number;
  x: number;
  y: number;
  click?: boolean;
};

export function DemoCursor({ keyframes }: { keyframes: CursorKeyframe[] }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Interpolate position between keyframes
  const frames = keyframes.map((k) => k.frame);
  const xs = keyframes.map((k) => k.x);
  const ys = keyframes.map((k) => k.y);

  const x = interpolate(frame, frames, xs, {
    easing: Easing.bezier(0.22, 0.61, 0.36, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const y = interpolate(frame, frames, ys, {
    easing: Easing.bezier(0.22, 0.61, 0.36, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Click effects at click keyframes
  const clickKeyframes = keyframes.filter((k) => k.click);
  const isNearClick = clickKeyframes.some(
    (k) => frame >= k.frame && frame <= k.frame + 10,
  );

  // Visibility: hidden before first keyframe
  const visible = frame >= keyframes[0]?.frame;

  return visible ? (
    <>
      <div
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: 20,
          height: 20,
          background: 'rgba(255, 255, 255, 0.92)',
          border: '2px solid rgba(0, 0, 0, 0.2)',
          borderRadius: '50%',
          transform: `translate(-50%, -50%) scale(${isNearClick ? 0.7 : 1})`,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          zIndex: 999999,
        }}
      />
      {/* Ripple rings at click frames */}
      {clickKeyframes.map((k) => {
        const rippleProgress = spring({
          frame: frame - k.frame,
          fps,
          config: { damping: 15, stiffness: 200 },
        });
        if (frame < k.frame || frame > k.frame + 15) return null;
        return (
          <div
            key={k.frame}
            style={{
              position: 'absolute',
              left: k.x,
              top: k.y,
              width: interpolate(rippleProgress, [0, 1], [20, 70]),
              height: interpolate(rippleProgress, [0, 1], [20, 70]),
              border: '2px solid rgba(26, 26, 26, 0.3)',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: interpolate(rippleProgress, [0, 1], [0.7, 0]),
              zIndex: 999998,
            }}
          />
        );
      })}
    </>
  ) : null;
}
```

#### 3b. ScrollContainer — translateY-driven scroll simulation

```tsx
// video/src/components/ScrollContainer.tsx
import { useCurrentFrame, interpolate, Easing } from 'remotion';

type ScrollKeyframe = {
  frame: number;
  scrollY: number;  // pixels from top
};

export function ScrollContainer({
  children,
  keyframes,
  viewportHeight = 1080,
  sidebarWidth = 256,
}: {
  children: React.ReactNode;
  keyframes: ScrollKeyframe[];
  viewportHeight?: number;
  sidebarWidth?: number;
}) {
  const frame = useCurrentFrame();
  const contentHeight = viewportHeight - 0; // full viewport (header is inside content)

  const frames = keyframes.map((k) => k.frame);
  const scrollYs = keyframes.map((k) => k.scrollY);

  const scrollY = interpolate(frame, frames, scrollYs, {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: 1920 - sidebarWidth,
        height: contentHeight,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ transform: `translateY(${-scrollY}px)` }}>
        {children}
      </div>
    </div>
  );
}
```

#### 3c. TypingText — character-by-character reveal

```tsx
// video/src/components/TypingText.tsx
import { useCurrentFrame, interpolate } from 'remotion';

export function TypingText({
  text,
  startFrame,
  msPerChar = 65,
  fps = 30,
}: {
  text: string;
  startFrame: number;
  msPerChar?: number;
  fps?: number;
}) {
  const frame = useCurrentFrame();
  const framesPerChar = Math.max(1, Math.round((msPerChar / 1000) * fps));
  const totalTypingFrames = text.length * framesPerChar;

  const charCount = Math.floor(
    interpolate(frame, [startFrame, startFrame + totalTypingFrames], [0, text.length], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }),
  );

  return <>{text.slice(0, charCount)}</>;
}
```

**Acceptance criteria:**
- [ ] DemoCursor moves smoothly between keyframes in Remotion Studio
- [ ] Click ripple animation plays at designated frames
- [ ] ScrollContainer smoothly scrolls content between keyframe positions
- [ ] TypingText reveals characters at configurable speed
- [ ] Cursor is hidden before first keyframe

---

### Phase 4: Build Scene Compositions

**Goal:** Create the 4 scene components that compose FORGE UI components with interaction simulations.

Each scene follows this structure:

```tsx
function SceneX() {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      <ForgeLayout activePath="/insights">
        <ScrollContainer keyframes={scrollKeyframes}>
          {/* Actual FORGE page content with frame-driven props */}
          <PageHeader title="..." />
          <StaggerEntrance startFrame={entranceStart}>
            <StatCard ... />
            <StatCard ... />
          </StaggerEntrance>
          {/* ... */}
        </ScrollContainer>
      </ForgeLayout>
      <DemoCursor keyframes={cursorKeyframes} />
    </AbsoluteFill>
  );
}
```

#### 4a. ForgeLayout — shared wrapper

```tsx
// video/src/components/ForgeLayout.tsx
export function ForgeLayout({
  activePath,
  children,
}: {
  activePath: string;
  children: React.ReactNode;
}) {
  return (
    <div className="forge-atmosphere" style={{ width: 1920, height: 1080, display: 'flex' }}>
      <ForgeSidebar activePath={activePath} />
      <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {children}
      </main>
    </div>
  );
}
```

#### 4b. Scene 1: Home + Shop Floor (~14s = 420 frames)

**Choreography:**

| Frame | Action | Implementation |
|-------|--------|---------------|
| 0-20 | Entrance animations play | `StaggerEntrance` on greeting, brief, stat cards |
| 20-80 | Viewer absorbs Home page | Static content, cursor hidden |
| 80-100 | Cursor appears, moves to sidebar "Shop Floor" | `DemoCursor` keyframes |
| 100 | Click sidebar | Cursor click effect at frame 100 |
| 100-115 | Transition: Home content fades, Shop Floor fades in | Opacity interpolation |
| 115-135 | Shop Floor entrance animations | `StaggerEntrance` on machine table, OEE, etc. |
| 135-200 | Viewer absorbs Shop Floor | Static |
| 200-230 | Scroll down to "All Machines" table | `ScrollContainer` keyframe |
| 230-240 | Cursor moves to first machine row | `DemoCursor` keyframe |
| 240 | Click row | Row highlight via `selectedMachine` prop |
| 240-285 | Pause on selected row | Static, row highlighted |
| 285 | Click row again | Deselect |
| 285-315 | Scroll back to top | `ScrollContainer` keyframe |
| 315-420 | Hold on Shop Floor overview | Static, fade handled by TransitionSeries |

**Key implementation detail — page transition within a scene:**

The Home-to-Shop-Floor navigation happens WITHIN Scene 1 (not a cross-fade between scenes). Use conditional rendering:

```tsx
function SceneHome() {
  const frame = useCurrentFrame();
  const showShopFloor = frame >= 100;
  const transitionProgress = interpolate(frame, [100, 115], [0, 1], { clamp: true });

  return (
    <AbsoluteFill>
      <ForgeLayout activePath={showShopFloor ? '/shop-floor' : '/insights'}>
        {/* Home page content — fades out */}
        <div style={{ opacity: 1 - transitionProgress, position: 'absolute', inset: 0 }}>
          <HomeContent entranceStartFrame={0} />
        </div>
        {/* Shop Floor content — fades in */}
        <div style={{ opacity: transitionProgress, position: 'absolute', inset: 0 }}>
          <ScrollContainer keyframes={shopFloorScrollKeyframes}>
            <ShopFloorContent
              entranceStartFrame={115}
              selectedMachine={frame >= 240 && frame < 285 ? 'cnc-001' : null}
            />
          </ScrollContainer>
        </div>
      </ForgeLayout>
      <DemoCursor keyframes={scene1CursorKeyframes} />
    </AbsoluteFill>
  );
}
```

#### 4c. Scene 2: Quoting (~28s = 840 frames)

**Choreography:**

| Frame | Action | Implementation |
|-------|--------|---------------|
| 0-20 | Entrance animations | `StaggerEntrance` on quote table, filters, AI banner |
| 20-80 | Viewer absorbs Quoting page | Static |
| 80-120 | Scroll to quote table area | `ScrollContainer` |
| 120-130 | Cursor moves to "Draft" filter tab | `DemoCursor` |
| 130 | Click Draft tab | `activeFilter="draft"` prop |
| 130-160 | Pause on filtered view | Static |
| 160-170 | Cursor moves to Aerospace Dynamics row | `DemoCursor` |
| 170 | Click row | `expandedRow="aerospace-dynamics"` prop |
| 170-200 | Scroll to reveal expanded detail panel | `ScrollContainer` |
| 200-260 | Pause on expanded detail (cost breakdown, routing) | Static |
| 260 | Click row to collapse | `expandedRow=null` |
| 260-300 | Scroll back to top | `ScrollContainer` |
| 300-310 | Cursor moves to "New Quote" button | `DemoCursor` |
| 310 | Click "New Quote" | `showModal=true`, `modalStep=1` |
| 310-370 | Pause on pre-filled form (step 1) | Static modal content |
| 370-380 | Cursor moves to "Generate Quote" | `DemoCursor` |
| 380 | Click "Generate Quote" | `modalStep=2` (processing) |
| 380-500 | AI processing animation (5 steps) | Frame-driven step progression |
| 500 | Processing complete | `modalStep=3` (review) |
| 500-600 | Pause on review step (cost chart, routing, similar jobs) | Static |
| 600-610 | ZoomEffect on modal (existing component) | `ZoomEffect` at scale 1.15 |
| 680-690 | Zoom back out | `ZoomEffect` back to 1.0 |
| 690-700 | Cursor moves to "Save as Draft" | `DemoCursor` |
| 700 | Click "Save as Draft" | `showModal=false` |
| 700-840 | Return to quote table, hold | Static |

**AI processing animation:** The QuoteBuilderModal already has a 5-step processing UI. Drive it with frame number:

```tsx
const processingStep = Math.min(5, Math.floor(
  interpolate(frame, [380, 500], [0, 5], { clamp: true })
));
```

#### 4d. Scene 3: Delivery Intelligence (~16s = 480 frames)

**Choreography:**

| Frame | Action | Implementation |
|-------|--------|---------------|
| 0-20 | Entrance animations | `StaggerEntrance` |
| 20-50 | Chart draw animation | Recharts with `isAnimationActive={false}` + manual data interpolation OR just show chart fully drawn |
| 50-120 | Hold on OTD chart + brief | Static |
| 120-160 | ZoomEffect on Delivery Risk Summary | Existing `ZoomEffect` component |
| 160-200 | Zoom back out | `ZoomEffect` |
| 200-230 | Scroll to At-Risk Purchase Orders | `ScrollContainer` |
| 230-240 | Cursor moves to first PO row | `DemoCursor` |
| 240 | Click PO row | `selectedPo` prop |
| 240-285 | Pause on selected row | Static |
| 285 | Click to deselect | `selectedPo=null` |
| 285-330 | Scroll back to top | `ScrollContainer` |
| 330-480 | Hold on overview | Static |

#### 4e. Scene 4: Knowledge Base (~22s = 660 frames)

**Choreography:**

| Frame | Action | Implementation |
|-------|--------|---------------|
| 0-20 | Entrance animations | `StaggerEntrance` |
| 20-80 | Viewer absorbs empty state + suggestion pills | Static |
| 80-90 | Cursor moves to input field | `DemoCursor` |
| 90 | Click input | Visual focus state |
| 90-150 | Type Q1: "What's the setup procedure for the Mazak VTC-800?" | `TypingText` at 65ms/char = ~60 frames |
| 150-155 | Cursor moves to Send button | `DemoCursor` |
| 155 | Click Send | Add user message to chat |
| 155-175 | Brief "thinking" indicator | Animated dots |
| 175 | AI response appears | `FadeSlideIn` on response message |
| 175-265 | Pause on Q1 response (96% confidence, citations) | Static |
| 265-275 | Cursor moves to input field | `DemoCursor` |
| 275 | Click input | Focus state |
| 275-340 | Type Q2: "Troubleshoot surface finish issues on 4140 steel" | `TypingText` |
| 340-345 | Cursor to Send | `DemoCursor` |
| 345 | Click Send | Add user message |
| 345-365 | Thinking indicator | Animated dots |
| 365 | AI response appears | `FadeSlideIn` |
| 365-480 | Pause on Q2 response (91% confidence, citations) | Static |
| 480-660 | Hold, eventual fade to black | Static |

**Chat state management:** Drive the entire chat via frame number:

```tsx
function SceneKnowledge() {
  const frame = useCurrentFrame();

  const messages = [];
  if (frame >= 155) messages.push({ role: 'user', content: Q1_TEXT });
  if (frame >= 175) messages.push({ role: 'assistant', content: MAZAK_RESPONSE, confidence: 96 });
  if (frame >= 345) messages.push({ role: 'user', content: Q2_TEXT });
  if (frame >= 365) messages.push({ role: 'assistant', content: SURFACE_FINISH_RESPONSE, confidence: 91 });

  return (
    <ForgeLayout activePath="/knowledge-base">
      <ChatInterface
        messages={messages}
        typingInput={
          frame >= 90 && frame < 150 ? <TypingText text={Q1_TEXT} startFrame={90} /> :
          frame >= 275 && frame < 340 ? <TypingText text={Q2_TEXT} startFrame={275} /> :
          null
        }
        isThinking={(frame >= 155 && frame < 175) || (frame >= 345 && frame < 365)}
      />
    </ForgeLayout>
  );
}
```

**Acceptance criteria:**
- [ ] Each scene renders correct FORGE UI in Remotion Studio
- [ ] Cursor moves smoothly and clicks have ripple effects
- [ ] Scroll simulation smoothly reveals content below the fold
- [ ] Typing animation reveals characters at realistic speed
- [ ] Modal open/close and tab switching transitions look natural
- [ ] Page transition within Scene 1 (Home → Shop Floor) fades correctly

---

### Phase 5: Compose Final Video

**Goal:** Wire all 4 scenes into the TransitionSeries with cross-fades and a fade-to-black ending.

#### 5a. Update ForgeDemo.tsx

Replace `OffthreadVideo`-based clips with native scene components:

```tsx
// video/src/ForgeDemo.tsx
import { TransitionSeries } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { linearTiming } from '@remotion/transitions/timing';
import { SceneHome } from './scenes/SceneHome';
import { SceneQuoting } from './scenes/SceneQuoting';
import { SceneDelivery } from './scenes/SceneDelivery';
import { SceneKnowledge } from './scenes/SceneKnowledge';

const FADE_FRAMES = 15; // 0.5s cross-fade

export function ForgeDemo() {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={420}>
        <SceneHome />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: FADE_FRAMES })}
        presentation={fade()}
      />

      <TransitionSeries.Sequence durationInFrames={840}>
        <SceneQuoting />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: FADE_FRAMES })}
        presentation={fade()}
      />

      <TransitionSeries.Sequence durationInFrames={480}>
        <SceneDelivery />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: FADE_FRAMES })}
        presentation={fade()}
      />

      <TransitionSeries.Sequence durationInFrames={660}>
        <SceneKnowledge />
      </TransitionSeries.Sequence>

      {/* Fade to black */}
      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: 30 })}
        presentation={fade()}
      />
      <TransitionSeries.Sequence durationInFrames={30}>
        <AbsoluteFill style={{ backgroundColor: 'black' }} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
}
```

#### 5b. Update Root.tsx

Simplify — no more dynamic clip duration probing:

```tsx
const TOTAL_FRAMES = 420 + 840 + 480 + 660 - (3 * 15) + 30 + 30; // scenes - overlaps + fade + black

export const RemotionRoot = () => (
  <Composition
    id="ForgeDemo"
    component={ForgeDemo}
    durationInFrames={TOTAL_FRAMES}
    fps={30}
    width={1920}
    height={1080}
  />
);
```

#### 5c. Update render script

The shell script becomes much simpler — no build, no server, no Playwright:

```bash
#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/../video"

echo "=== FORGE Demo Video — Remotion Native Render ==="

echo "==> Installing dependencies..."
pnpm install --frozen-lockfile 2>/dev/null || pnpm install

echo "==> Rendering demo video..."
npx remotion render ForgeDemo \
  --output=../demo.mp4 \
  --codec=h264 \
  --crf=18 \
  --image-format=png \
  --color-space=bt709

echo "=== Done: demo.mp4 ==="
```

**Acceptance criteria:**
- [ ] All 4 scenes compose correctly with cross-fade transitions
- [ ] Fade-to-black ending plays smoothly
- [ ] Total duration matches expected ~80 seconds
- [ ] Final demo.mp4 has sharp text, clean edges, and accurate colors
- [ ] Pipeline is `cd video && npx remotion render` — no build/serve/Playwright needed

---

### Phase 6: Polish and Iteration

**Goal:** Fine-tune timing, cursor choreography, and visual details in Remotion Studio.

#### 6a. Remotion Studio workflow

```bash
cd video && npx remotion studio
```

Open `http://localhost:3000` — Remotion Studio gives:
- Frame-by-frame scrubbing
- Real-time preview at 30fps
- Per-scene navigation
- Instant feedback on timing changes

#### 6b. Timing adjustments

All timing is in `video/src/config/scenes.ts`. Iterate by:
1. Preview scene in Studio
2. Adjust cursor keyframes, scroll keyframes, or scene duration
3. Hot-reload in Studio — see changes instantly
4. Repeat

#### 6c. Chromium flags for cleaner rendering

In `remotion.config.ts`:

```ts
Config.setChromiumOpenGlRenderer('angle');  // consistent rendering
```

#### 6d. Final encode with BT.709

Same as the ffmpeg command that fixed color space:

```bash
npx remotion render ForgeDemo \
  --output=../demo.mp4 \
  --codec=h264 \
  --crf=18 \
  --image-format=png \
  --color-space=bt709
```

If Remotion's `--color-space` flag doesn't exist, post-process:

```bash
FFMPEG=$(node -e "console.log(require('ffmpeg-static'))")
"$FFMPEG" -i ../demo-raw.mp4 \
  -c:v libx264 -preset slow -crf 18 \
  -pix_fmt yuv420p -colorspace bt709 -color_primaries bt709 -color_trc bt709 \
  -color_range tv -movflags +faststart -an \
  ../demo.mp4
```

**Acceptance criteria:**
- [ ] Cursor movement feels natural (not robotic, not too fast)
- [ ] Scroll timing matches viewer attention
- [ ] Typing speed is readable
- [ ] Cross-fade transitions are smooth
- [ ] BT.709 color space tags are correct in final output

---

## Files Changed Summary

### New files (in `video/`)

| File | Purpose |
|------|---------|
| `forge/components/*.tsx` | ~35 ported FORGE components |
| `forge/lib/mock-data.ts` | Mock data (copied as-is) |
| `forge/lib/utils.ts` | cn() helper (copied as-is) |
| `forge/styles/globals.css` | Theme tokens + Tailwind config |
| `src/components/ForgeLayout.tsx` | Sidebar + atmosphere wrapper |
| `src/components/ForgeSidebar.tsx` | Static sidebar (no router) |
| `src/components/DemoCursor.tsx` | Animated cursor with click effects |
| `src/components/ScrollContainer.tsx` | translateY scroll simulation |
| `src/components/TypingText.tsx` | Character-by-character typing |
| `src/components/StaggerEntrance.tsx` | Remotion replacement for AnimatedGroup |
| `src/components/FadeSlideIn.tsx` | Remotion replacement for AnimatedItem |
| `src/scenes/SceneHome.tsx` | Home + Shop Floor scene |
| `src/scenes/SceneQuoting.tsx` | Quoting flow scene |
| `src/scenes/SceneDelivery.tsx` | Delivery Intelligence scene |
| `src/scenes/SceneKnowledge.tsx` | Knowledge Base chat scene |
| `src/fonts.ts` | Inter font loading |

### Modified files (in `video/`)

| File | Change |
|------|--------|
| `package.json` | Add tailwindcss, @remotion/tailwind-v4, @remotion/google-fonts, recharts, lucide-react, clsx, tailwind-merge |
| `remotion.config.ts` | Add Tailwind v4 override, path aliases, chromium config |
| `src/Root.tsx` | Simplified — fixed duration, no clip probing |
| `src/ForgeDemo.tsx` | Replace OffthreadVideo clips with native scene components |
| `src/config/scenes.ts` | Expanded: cursor keyframes, scroll keyframes per scene |

### Modified files (project root)

| File | Change |
|------|--------|
| `scripts/record-demo.sh` | Simplified — just `cd video && npx remotion render` |

### Files that can be removed/archived

| File | Reason |
|------|--------|
| `tests/demo-scenes.spec.ts` | No longer needed (Playwright not used for recording) |
| `tests/demo-recording.spec.ts` | Already legacy |
| `video/public/clips/*.mp4` | No longer needed (no video clips) |
| `video/src/components/SceneClip.tsx` | Replaced by native scenes |
| `video/src/components/AnimatedCursor.tsx` | Replaced by DemoCursor |

## Risk Analysis

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Recharts doesn't render correctly without ResponsiveContainer | Medium | Medium | Test early in Phase 2. Fallback: render charts as static SVGs exported from the live app |
| Remotion rendering is slow (~2-5 min for 80s video) | High | Low | Expected and acceptable — much faster iteration than Playwright re-record cycle |
| Scroll simulation looks unnatural | Medium | Medium | Tune easing curves in Remotion Studio. Use `Easing.inOut(Easing.cubic)` for natural feel |
| Chat interface requires significant adaptation | Medium | High | The ChatInterface component has complex internal state (message cycling). May need a simplified video-specific version |
| Component styling drift over time | Low | Medium | When FORGE app UI changes, `video/forge/` components must be updated manually. Document this in CLAUDE.md |

## What Does NOT Change

- The FORGE Next.js app (`app/`, `components/`, `lib/`) — completely untouched
- The existing Motion entrance animations in the live app — still work for the real app
- The overall video structure (4 scenes, cross-fades, fade-to-black)
- The Remotion sub-project approach (`video/` as standalone, not a pnpm workspace member)

## Dependencies

- `@remotion/tailwind-v4` — Tailwind v4 support in Remotion
- `@remotion/google-fonts` — Font loading for Inter
- `recharts` (added to video project) — Same chart library as main app
- `lucide-react` (added to video project) — Same icon library
- `clsx` + `tailwind-merge` (added to video project) — For cn() utility

## References

- [Remotion Docs: Tailwind v4](https://www.remotion.dev/docs/tailwind-v4)
- [Remotion Docs: Google Fonts](https://www.remotion.dev/docs/google-fonts)
- [Remotion Docs: interpolate()](https://www.remotion.dev/docs/interpolate)
- [Remotion Docs: spring()](https://www.remotion.dev/docs/spring)
- [Remotion Docs: TransitionSeries](https://www.remotion.dev/docs/transitions)
- [remotion-saas-showcase](https://github.com/Raazi305/remotion-saas-showcase) — SaaS demo video pattern with cursor component
- Brainstorm: `docs/brainstorms/2026-03-21-premium-demo-video-brainstorm.md`
- Memory: `project_premium_demo_video.md` — current pipeline state
- Memory: `feedback_demo_video.md` — cursor must teleport, deviceScaleFactor:2 broken
