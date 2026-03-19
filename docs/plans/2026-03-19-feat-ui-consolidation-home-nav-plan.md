---
title: UI Consolidation, Minimal Home Page, and Navigation Simplification
type: feat
date: 2026-03-19
---

# UI Consolidation, Minimal Home Page, and Navigation Simplification

## Overview

Three coordinated changes to simplify the FORGE demo before re-recording:

1. **Color & visual consolidation** — reduce to 4 semantic colors, replace donuts with black bar charts, consolidate risk levels
2. **Minimal Home page** — replace the Insights dashboard with a greeting + brief + 4 metric cards
3. **Nav simplification** — move Documents and Agents into Settings tabs, sidebar goes from 7→5 items

## Implementation Order

Feature 2 (Home) first — eliminates EnergyDonut, simplifying Feature 1.
Then Feature 1 (colors/charts) — touches every page.
Then Feature 3 (Settings tabs) — structural nav change.
Demo script updates last — depends on all three.

---

## Phase 1: Minimal Home Page

### 1.1 Create Home page content

**File: `app/(dashboard)/insights/page.tsx`** — gut and rewrite:

- Remove imports: `ProductionChart`, `EnergyDonut`, `DueJobsTable`, `PageHeader`
- Keep imports: `StatCard`, `IntelligenceBrief`
- New layout (top to bottom):
  1. **Greeting**: `<h1>` "Good morning, Julian" + `<p>` with today's date and "Day Shift"
  2. **Intelligence Brief**: reuse `<IntelligenceBrief />` but with updated mock data (see 1.3)
  3. **4 Metric Cards**: `grid grid-cols-4 gap-4` using updated `homeKpis` data (see 1.3)
- No PageHeader, no action buttons, no charts, no tables

### 1.2 Update routing

**File: `app/page.tsx`** — change redirect from `/insights` to stay as-is (root redirects to `/insights` which is now the Home page). Alternatively, if we want the route to be `/`:
- Move the Home page content to `app/(dashboard)/page.tsx` (new file)
- Change `app/page.tsx` redirect to `/` → but this creates a loop

**Simplest approach:** Keep the route as `/insights` internally but rename it "Home" in the sidebar. The redirect from `/` to `/insights` stays.

**File: `components/Sidebar.tsx`**:
- Change first nav item: `{ href: '/insights', label: 'Home', icon: Home }` (import `Home` from lucide-react instead of `LayoutDashboard`)
- Logo link stays as `/insights`

### 1.3 Update mock data

**File: `lib/mock-data.ts`**:

Replace `insightsKpis` with `homeKpis` — 4 cards, one per module:

```typescript
export const homeKpis = [
  { title: 'OEE Score', value: '84.2%', subtitle: 'Shop floor effectiveness', badge: '+2.4%', badgeColor: 'green' as const },
  { title: 'On-Time Delivery', value: '91.2%', subtitle: '3 POs at risk this week', badge: '-1.1%', badgeColor: 'red' as const },
  { title: 'Open Quotes', value: '$1.2M', subtitle: '4 pending review', badge: '+3', badgeColor: 'neutral' as const },
  { title: 'Active Alerts', value: '7', subtitle: '2 critical, 5 warnings', badge: '', badgeColor: 'neutral' as const },
];
```

Update `forgeBrief` to be cross-module:

```typescript
export const forgeBrief = {
  title: 'Daily Intelligence Brief',
  description: 'Line 4 hydraulic pressure trending 12% below threshold — predictive model flags 70% seal failure probability within 48h. Apex Industrial has 2 deliveries at risk this week due to port congestion. The Wilson Manufacturing quote ($142K) has been in review for 5 days with margin 18% above target.',
};
```

### 1.4 Clean up unused components

- `components/insights/EnergyDonut.tsx` — delete (no longer used anywhere)
- `components/insights/ProductionChart.tsx` — delete (no longer used on Home)
- `components/insights/DueJobsTable.tsx` — delete (no longer used on Home)
- Remove corresponding mock data exports if only used by Insights: `onTimeDeliveryData`, `lateOrderCausesData`, `dueJobsData`

**Wait** — `DueJobsTable` and `dueJobsData` may be useful elsewhere. Check before deleting. If only used on Insights, delete.

### Files changed (Phase 1):
- `app/(dashboard)/insights/page.tsx` — rewrite
- `components/Sidebar.tsx` — rename Insights→Home, swap icon
- `lib/mock-data.ts` — new homeKpis, updated forgeBrief
- `components/insights/EnergyDonut.tsx` — delete
- `components/insights/ProductionChart.tsx` — delete
- `components/insights/DueJobsTable.tsx` — delete (if unused elsewhere)

---

## Phase 2: Color & Visual Consolidation

### 2.1 Remove forge-accent-blue token

**File: `app/globals.css`**:
- Delete `--color-forge-accent-blue: #7C9CB4;` from `@theme`

### 2.2 Replace accent-blue usages across components

Replacement mapping (context-dependent):

| Context | Current | Replacement | Rationale |
|---------|---------|-------------|-----------|
| **Idle machine status** (MachineStatusGrid) | `forge-accent-blue` | `forge-hint` | Idle = inactive, gray conveys "not doing anything" |
| **Watch risk level** (AtRiskOrdersTable) | `forge-accent-blue` | `forge-hint` | Watch = low urgency, muted gray |
| **Medium severity** (DeliveryAgentFeed) | `forge-accent-blue` | `forge-hint` | Medium = neutral awareness |
| **Scheduled maintenance** (MaintenanceTimeline) | `forge-accent-blue` | `forge-hint` | Scheduled = planned, neutral |
| **Preventive maintenance type** (MaintenanceTimeline) | `forge-accent-blue` | `forge-hint` | Preventive = routine |
| **Review quote status** (QuoteTable) | `forge-accent-blue` | `forge-secondary` | Review = active state, slightly more prominent than hint |
| **Input focus state** (ProfileForm, ConfigForm) | `focus:border-forge-accent-blue` | `focus:border-forge-primary` | Standard dark focus ring |
| **Confidence badge** (ChatInterface) | `forge-accent-blue` | `forge-secondary` | Informational, not status |
| **Citation icons** (ChatInterface) | `forge-accent-blue` | `forge-secondary` | Informational accent |
| **Chart stroke/fill** (PerformanceAnalytics) | `#7C9CB4` | `#1A1A1A` | Match area chart convention |
| **Material bar** (CostBreakdownChart) | `#7C9CB4` | `#1A1A1A` | All bars become black |
| **Donut data colors** (mock-data.ts) | `#7C9CB4` | Remove (donuts deleted) | N/A |

**Files to edit:**
- `components/shop-floor/MachineStatusGrid.tsx` — 2 replacements
- `components/shop-floor/MaintenanceTimeline.tsx` — 4 replacements
- `components/delivery/AtRiskOrdersTable.tsx` — 2 replacements
- `components/delivery/DeliveryAgentFeed.tsx` — 2 replacements
- `components/quoting/QuoteTable.tsx` — 1 replacement
- `components/quoting/CostBreakdownChart.tsx` — 1 hex replacement
- `components/knowledge/ChatInterface.tsx` — 3 replacements
- `components/settings/ProfileForm.tsx` — 1 replacement
- `components/agents/ConfigForm.tsx` — 3 replacements
- `components/agents/PerformanceAnalytics.tsx` — 4 hex replacements

### 2.3 Remove rogue chart colors

All hardcoded chart hex colors (`#B85C3A`, `#D4A843`) in mock data and chart components get replaced with `#1A1A1A` (or opacity variants for multi-bar charts). Since donuts are being deleted, the mock data arrays that held these colors (`lateOrderCausesData`, `delayRootCauseData`) either get deleted or updated.

**For the CostBreakdownChart** (quoting page):
- Change ALL bar colors to `#1A1A1A`. The chart differentiates via text labels, not color.
- The `colorMap` object becomes unnecessary — every category maps to `#1A1A1A`.

### 2.4 Replace DelayRootCauseDonut with black bar chart

**File: `components/delivery/DelayRootCauseDonut.tsx`** — rewrite (or create new `components/delivery/DelayRootCauseChart.tsx`):

Design spec:
- **Horizontal bar chart** (layout="vertical" in Recharts)
- **All bars: `#1A1A1A`** (solid black, no color differentiation)
- **Text labels**: Category name on the left (Y-axis), percentage on the right of each bar
- **No grid lines**, no axis lines, no legend
- **Clean, editorial style** — generous whitespace between bars
- **Container**: `GlassCard` with title "Delay Root Causes"

Data stays the same structure but `color` field becomes irrelevant:
```
Supplier Production — 34%
Shipping / Logistics — 24%
Material Unavailability — 19%
Quality Rejection — 13%
Customs / Documentation — 10%
```

**File: `app/(dashboard)/delivery/page.tsx`** — update import from `DelayRootCauseDonut` to new component name. Adjust grid layout if needed (donut was in a `320px` or `340px` sidebar column).

### 2.5 Consolidate risk levels (AtRiskOrdersTable)

**File: `lib/mock-data.ts`**:
- Update `PurchaseOrder` type: `riskLevel: 'On Track' | 'Watch' | 'At Risk'` (remove `'Critical'`)
- Change PO-7198 (`riskLevel: 'Critical'`) → `'At Risk'`
- Change PO-7210 (`riskLevel: 'Critical'`) → `'At Risk'`

**File: `components/delivery/AtRiskOrdersTable.tsx`**:
- Remove `Critical` from `riskConfig` map
- `At Risk` keeps its current styling: `AlertTriangle` icon, `text-forge-accent-warm`, `bg-forge-accent-warm/10`
- Result: 3 levels — At Risk (warm/amber), Watch (hint/gray), On Track (success/green)

**Scope note:** Only `PurchaseOrder.riskLevel` is consolidated. Other severity systems (`DeliveryAlert.severity`, `MaintenanceEvent.priority`, `Supplier.riskLevel`, `DueJobsTable` risk) are left unchanged — they're separate contexts.

### 2.6 Strip unnecessary icons

Review each page for decorative-only icons. Keep icons that convey status, type, or AI provenance. Remove icons that are pure visual flair next to text that already explains itself. This is a judgment call during implementation — no exhaustive pre-list needed. Focus areas:
- StatCard badges that use arrow icons (keep — they convey direction)
- Status dots/icons in tables (keep — they convey state)
- Purely decorative icons next to section headers (remove if the text is clear enough)

### Files changed (Phase 2):
- `app/globals.css` — remove accent-blue token
- 10 component files — accent-blue → replacement colors (see table in 2.2)
- `components/delivery/DelayRootCauseDonut.tsx` — rewrite to bar chart
- `app/(dashboard)/delivery/page.tsx` — update import, possibly adjust grid
- `lib/mock-data.ts` — risk level type + data, remove donut color data
- `components/delivery/AtRiskOrdersTable.tsx` — remove Critical config
- `components/quoting/CostBreakdownChart.tsx` — all bars to black

---

## Phase 3: Move Documents & Agents into Settings

### 3.1 Convert Settings to tabbed layout

**File: `app/(dashboard)/settings/page.tsx`** — rewrite:

- Add `'use client'` (needs state for active tab)
- Use `searchParams` (from URL `?tab=profile`) for tab state — makes tabs linkable
- Actually: since this is App Router, use `useSearchParams()` from `next/navigation` in a client component
- Tab bar at top: **Profile** | **AI Settings** | **Agents** | **Documents** | **Security**
- Default tab: `profile`
- Each tab renders its content panel:
  - Profile → `<ProfileForm />`
  - AI Settings → `<AiSettings />`
  - Agents → agent workspace content (AgentCards grid + LiveActivity)
  - Documents → document library content (PinnedDocs + DocTable)
  - Security → `<SecuritySection />`
- "Save Configuration" footer only shows on Profile / AI Settings / Security tabs
- Remove `max-w-2xl` constraint for Agents and Documents tabs (they need more width). Keep it for Profile/AI/Security.

Tab styling: minimal, text-only tabs with an underline indicator. Use `forge-primary` for active, `forge-secondary` for inactive. No background fills.

### 3.2 Update sidebar

**File: `components/Sidebar.tsx`**:
- Remove `{ href: '/documents', label: 'Documents', icon: FolderOpen }` from `navItems`
- Remove `{ href: '/agents', label: 'Agents', icon: Bot }` from `navItems`
- Remove unused icon imports (`FolderOpen`, `Bot`)
- Result: 5 nav items — Home, Delivery, Shop Floor, Quoting, Knowledge Base

### 3.3 Add redirects for old routes

**File: `app/(dashboard)/documents/page.tsx`** — replace content with redirect:
```typescript
import { redirect } from 'next/navigation';
export default function DocumentsPage() {
  redirect('/settings?tab=documents');
}
```

**File: `app/(dashboard)/agents/page.tsx`** — replace content with redirect:
```typescript
import { redirect } from 'next/navigation';
export default function AgentsPage() {
  redirect('/settings?tab=agents');
}
```

**File: `app/(dashboard)/agents/[id]/page.tsx`** — keep as-is (still a standalone route for agent config), but update breadcrumb link from `/agents` to `/settings?tab=agents`.

### 3.4 Move component imports

The Settings page needs to import components from `components/documents/` and `components/agents/`:
- `DocTable`, `PinnedDocs` for the Documents tab
- `AgentCard`, `LiveActivity`, `PerformanceChart` for the Agents tab
- Mock data: `specializedAgents`, `agentWorkspaceStats`, `documentStats`

These components stay in their current directories — no need to move files.

### Files changed (Phase 3):
- `app/(dashboard)/settings/page.tsx` — full rewrite with tabs
- `components/Sidebar.tsx` — remove 2 nav items
- `app/(dashboard)/documents/page.tsx` — redirect
- `app/(dashboard)/agents/page.tsx` — redirect
- `app/(dashboard)/agents/[id]/page.tsx` — breadcrumb href update

---

## Phase 4: Demo Script & Documentation

### 4.1 Update demo recording script

**File: `tests/demo-recording.spec.ts`** — update scenes:

- **Scene 1 (Home)**: Navigate to `/insights`, wait for greeting text instead of "Manufacturing Insights". Remove chart zoom and Due Jobs scroll. Show the brief + metric cards.
- **Scene 3 (Documents)**: Navigate via Settings tab instead of sidebar. Go to `/settings`, click "Documents" tab, interact with doc table.
- **Scene 5 (Agents)**: Navigate via Settings tab instead of sidebar. Go to `/settings`, click "Agents" tab, then click into an agent config.

### 4.2 Update CLAUDE.md

- Update route table (remove Insights description, add Home description, note Documents/Agents are Settings tabs)
- Update chart descriptions (remove donut references)
- Update sidebar item count (7→5)
- Update design system section (remove accent-blue)

### Files changed (Phase 4):
- `tests/demo-recording.spec.ts`
- `CLAUDE.md`

---

## Acceptance Criteria

- [ ] Home page shows only: greeting, intelligence brief, 4 metric cards — nothing else
- [ ] No donut charts anywhere in the app
- [ ] Delivery page has black horizontal bar chart replacing the donut
- [ ] CostBreakdownChart (quoting) uses all-black bars
- [ ] `forge-accent-blue` token removed from globals.css
- [ ] No references to `forge-accent-blue` or `#7C9CB4` in any source file
- [ ] Risk levels in AtRiskOrdersTable: At Risk, Watch, On Track (no Critical)
- [ ] Sidebar has 5 items: Home, Delivery, Shop Floor, Quoting, Knowledge Base
- [ ] Settings page has 5 tabs: Profile, AI Settings, Agents, Documents, Security
- [ ] `/documents` redirects to `/settings?tab=documents`
- [ ] `/agents` redirects to `/settings?tab=agents`
- [ ] `/agents/[id]` still works with updated breadcrumb
- [ ] `pnpm build` succeeds with no type errors
- [ ] `pnpm check:fix` passes (Biome)
- [ ] Demo recording script updated to match new navigation
