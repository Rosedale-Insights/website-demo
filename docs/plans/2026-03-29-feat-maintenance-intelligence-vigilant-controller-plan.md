---
title: "feat: Maintenance Intelligence + Vigilant Controller"
type: feat
date: 2026-03-29
---

# Maintenance Intelligence + Vigilant Controller

## Overview

Two changes to the FORGE demo grounded in Mihir Shah prospect feedback:

1. **Refactor Shop Floor → Maintenance Intelligence**: Replace uptime/downtime monitoring with PM scheduling. 8 CNC machines (drop peripheral equipment), richer PM data per machine, interactive "Schedule PM" 3-step modal, horizontal PM timeline as hero.
2. **New Vigilant Controller page** (`/controller`): Financial anomaly detection feed with 8 realistic findings, triage workflow (click → detail → dismiss/confirm/resolve), savings tracker. New sidebar nav item.

Design constraint from user: **no decorative color, icons, or accents** that don't deliver direct value. Use only the existing 3 badge colors (green/red/neutral), `forge-primary` for all chart fills, and functional icons only.

## Technical Approach

### Patterns to Follow (from repo research)

Every page uses this skeleton:
```
PageHeader → AnimatedGroup → [AnimatedItem(StatCards), AnimatedItem(Hero), AnimatedItem(Secondary)]
```

- `glass-solid` for content cards, `glass` for StatCards
- All charts monochrome `#1A1A1A`
- Badge colors: `green` | `red` | `neutral` only
- Table headers: `bg-black/[0.02]` + `text-[10px] uppercase tracking-wider text-forge-hint`
- Modals: `fixed inset-0 z-50 bg-black/40 backdrop-blur-sm` + `glass-solid` card
- Multi-step state: `useState<'form' | 'processing' | 'review'>('form')`
- AI processing animation: `setTimeout` chain with `Check`/`Loader2`/empty states
- All mock data in `lib/mock-data.ts`, types as string unions (not enums)

### Implementation Phases

---

#### Phase 1: Data Foundation

Define all new types and mock data in `lib/mock-data.ts`. Everything else depends on this.

**1.1 — Update Machine type and trim roster to 8 machines**

Keep these 8 (all spindle-class):
- CNC-01: Mazak VTC-800/30 (CNC Mill)
- CNC-02: Haas VF-4SS (CNC Mill)
- CNC-03: Haas VF-2 (CNC Mill)
- 5AX-01: DMG Mori DMU 50 (5-Axis Mill)
- 5AX-02: Hermle C400 (5-Axis Mill)
- LAT-01: Okuma LB3000 (CNC Lathe)
- LAT-02: Doosan Puma 2600 (CNC Lathe)
- LAS-01: Trumpf TruLaser 3030 (Laser Cutter)

Drop: CMM-01, HT-01, GRN-01, EDM-01.

Add new fields to existing `Machine` type:
```ts
// New fields on Machine
spindleHoursSinceLastPm: number;    // e.g. 4312
pmThresholdHours: number;           // e.g. 4500
vibrationStatus: 'Normal' | 'Attention' | 'Alarm';
jobBacklog: { woCount: number; hours: number };
exclusiveJobs: string[];            // job IDs that can ONLY run on this machine
costUnplannedDowntime: number;      // $/hr
costPlannedPm: number;              // total $ for the PM
serviceProvider: 'In-House' | 'OEM' | 'Third-Party';
```

Remove fields no longer needed: `pctActive`, `pctStalled`, `pctSetup`, `pctLoading` (uptime/downtime breakdown — the thing Mihir said to avoid).

**1.2 — New PM schedule data**

```ts
export type PmScheduleEntry = {
  id: string;
  machineId: string;
  machineName: string;
  pmType: 'Preventive' | 'Predictive' | 'Inspection';
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Overdue';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  startDate: string;     // ISO date
  endDate: string;       // ISO date
  duration: string;      // e.g. "2 days", "4 hrs"
  serviceProvider: 'In-House' | 'OEM' | 'Third-Party';
  technician: string | null;
  jobConflicts: number;  // count of jobs affected
  aiRecommended: boolean;
  description: string;
};
```

Mock ~6 entries across the 8 machines (mix of statuses: 2 completed, 1 in progress, 2 scheduled, 1 overdue).

**1.3 — Replace `shopFloorKpis` with `maintenanceKpis`**

```ts
export const maintenanceKpis = [
  { title: 'PM Compliance', value: '94%', subtitle: 'Completed on schedule', badge: '+3%', badgeColor: 'green' as const },
  { title: 'Upcoming PMs', value: '3', subtitle: 'Next 14 days', badge: '1 critical', badgeColor: 'red' as const },
  { title: 'Unplanned Downtime', value: '2.1%', subtitle: 'vs. last month', badge: '-0.8%', badgeColor: 'green' as const },
  { title: 'Avg. MTTR', value: '3.4 hrs', subtitle: 'Mean time to repair', badge: '-22 min', badgeColor: 'green' as const },
];
```

**1.4 — New Controller types and mock data**

```ts
export type FindingSeverity = 'Critical' | 'High' | 'Medium' | 'Low';
export type FindingStatus = 'New' | 'Under Review' | 'Confirmed' | 'Dismissed' | 'Resolved';

export type Finding = {
  id: string;
  type: string;            // e.g. "Purchase Price Variance"
  title: string;           // one-line summary
  vendor: string;
  severity: FindingSeverity;
  status: FindingStatus;
  dollarImpact: number;
  detectedDate: string;
  aiSummary: string;       // 2-3 sentence explanation
  evidence: {
    label: string;         // e.g. "Previous PO", "Current PO"
    value: string;         // e.g. "PO-8847 — $14.20/ea (Jan 12)"
  }[];
};
```

8 findings from the brainstorm, with full evidence arrays.

```ts
export const controllerKpis = [
  { title: 'Open Findings', value: '14', subtitle: '4 critical, 6 high, 4 medium', badge: '+3', badgeColor: 'red' as const },
  { title: 'Dollar Impact', value: '$127.4K', subtitle: 'Potential savings identified', badge: '+$18.2K', badgeColor: 'red' as const },
  { title: 'Realized Savings', value: '$284.9K', subtitle: 'YTD confirmed', badge: '+$41K', badgeColor: 'green' as const },
  { title: 'Resolution Rate', value: '73%', subtitle: 'Resolved within 7 days', badge: '+8%', badgeColor: 'green' as const },
];
```

**1.5 — PM modal mock data**

Static data for the AI analysis step of the Schedule PM modal:

```ts
export type PmImpactAnalysis = {
  machineId: string;
  recommendedWindow: { start: string; end: string };
  jobsAffected: { jobId: string; customer: string; currentDeadline: string; delayDays: number; canReroute: boolean; rerouteTo: string | null }[];
  totalDelayDays: number;
  costImpact: number;
  aiRecommendation: string;
};
```

2-3 pre-built analysis results (one with 0 conflicts, one with 2 reroutable jobs, one with a hard conflict).

---

#### Phase 2: Navigation

**2.1 — Update Sidebar.tsx**

```ts
// Before:
{ href: '/shop-floor', label: 'Shop Floor', icon: Factory },

// After:
{ href: '/shop-floor', label: 'Maintenance', icon: Wrench },
```

Add Controller between Quoting and Knowledge Base:
```ts
{ href: '/controller', label: 'Controller', icon: ScanSearch },
```

Add `Wrench` and `ScanSearch` to the lucide-react import.

Route stays at `/shop-floor` (no redirects needed). Only the sidebar label and icon change.

**Files modified**: `components/Sidebar.tsx`

---

#### Phase 3: Maintenance Intelligence Page

**3.1 — Create `components/maintenance/` directory**

New components (all `glass-solid` surfaces unless noted):

| Component | File | Client? | Description |
|-----------|------|---------|-------------|
| `PmScheduleTimeline` | `components/maintenance/PmScheduleTimeline.tsx` | No | Hero: horizontal timeline, one row per machine, PM blocks positioned by date |
| `MachineHealthGrid` | `components/maintenance/MachineHealthGrid.tsx` | No | Compact grid of 8 machine cards: name, spindle hours progress bar, vibration status dot, next PM date |
| `SchedulePmModal` | `components/maintenance/SchedulePmModal.tsx` | Yes | 3-step modal: configure → AI analysis → review |

**3.2 — `PmScheduleTimeline`**

Pure CSS/Tailwind layout (not Recharts — Gantt is not a Recharts chart type):
- Left column: machine names (fixed ~160px)
- Right area: 4-week date range with day gridlines
- PM blocks: horizontal bars positioned by start/end date
  - Completed: `bg-forge-primary/10` with subtle border
  - In Progress: `bg-forge-primary` solid
  - Scheduled: `bg-forge-primary/5` dashed border
  - Overdue: border in `border-forge-error`
- Job conflict indicators: small text markers where PMs overlap with active jobs
- "Today" marker: thin vertical line

This is a presentational component — no interactivity. The data tells the story.

**3.3 — `MachineHealthGrid`**

Grid of 8 cards (`grid grid-cols-4 gap-4`), each showing:
- Machine ID + name (e.g., "CNC-01 · Mazak VTC-800/30")
- Spindle hours: progress bar toward PM threshold (e.g., "4,312 / 4,500 hrs") — bar uses `bg-forge-primary`, no color
- Health score number (e.g., "92")
- Vibration status: text label "Normal" / "Attention" / "Alarm" — only "Alarm" gets `text-forge-error`, others use `text-forge-secondary` or `text-forge-hint`
- Next PM date
- Job backlog count

No icons per card — the data labels are sufficient. No color-coding beyond the severity text.

**3.4 — `SchedulePmModal`**

Follows `QuoteBuilderModal` pattern exactly:

**Step 1 — Configure:**
- Machine dropdown (8 machines)
- PM Type: radio group (Preventive | Predictive | Inspection)
- Preferred Date Window: start date + end date inputs
- Estimated Duration: dropdown (4 hrs | 8 hrs | 1 day | 2 days)
- Service Provider: radio group (In-House | OEM | Third-Party)
- Input styling: `rounded-lg border border-forge-divider bg-white px-4 py-2.5 text-sm`
- "Analyze Schedule" button (primary style)

**Step 2 — AI Analysis (processing → results):**

Processing animation (same pattern as QuoteBuilder):
1. "Checking machine PM history..." ✓
2. "Analyzing job schedule conflicts..." ✓
3. "Evaluating rerouting options..." ✓
4. "Calculating cost impact..." ✓

Then auto-transitions to results:
- AI recommendation text: "Recommended window: Mar 22–23. 0 jobs delayed. WO-4835 can move to 5AX-01."
- Jobs affected table (if any): Job ID, Customer, Deadline, Delay, Reroutable?
- Cost summary: Planned PM cost vs. risk of unplanned downtime cost
- "Confirm Schedule" + "Try Different Window" buttons

**Step 3 — Review & Confirm:**
- Summary card: Machine, dates, duration, technician, service provider
- Checklist preview (static list of PM tasks)
- "Schedule PM" primary button + "Back" secondary

**3.5 — Rewrite `app/(dashboard)/shop-floor/page.tsx`**

```tsx
'use client';

// Client because of modal state

export default function MaintenancePage() {
  const [showScheduler, setShowScheduler] = useState(false);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Maintenance Intelligence"
        subtitle="PM scheduling, machine health, and maintenance optimization."
      >
        <button onClick={() => setShowScheduler(true)} className="...primary...">
          <Plus className="h-4 w-4" />
          Schedule PM
        </button>
      </PageHeader>

      <AnimatedGroup className="space-y-8">
        <AnimatedItem>
          <div className="grid grid-cols-4 gap-4">
            {maintenanceKpis.map(kpi => <StatCard key={kpi.title} {...kpi} />)}
          </div>
        </AnimatedItem>

        <AnimatedItem>
          <PmScheduleTimeline />
        </AnimatedItem>

        <AnimatedItem>
          <MachineHealthGrid />
        </AnimatedItem>
      </AnimatedGroup>

      {showScheduler && <SchedulePmModal onClose={() => setShowScheduler(false)} />}
    </div>
  );
}
```

**Files created**:
- `components/maintenance/PmScheduleTimeline.tsx`
- `components/maintenance/MachineHealthGrid.tsx`
- `components/maintenance/SchedulePmModal.tsx`

**Files modified**:
- `app/(dashboard)/shop-floor/page.tsx` (rewrite)

---

#### Phase 4: Vigilant Controller Page

**4.1 — Create `components/controller/` directory**

| Component | File | Client? | Description |
|-----------|------|---------|-------------|
| `FindingsFeed` | `components/controller/FindingsFeed.tsx` | Yes | Card list of findings with click-to-expand detail |
| `FindingDetail` | `components/controller/FindingDetail.tsx` | No | Expanded finding: evidence, AI summary, action buttons |
| `SavingsSummary` | `components/controller/SavingsSummary.tsx` | No | YTD savings number + breakdown by finding type |

**4.2 — `FindingsFeed`**

Client component (manages selected finding state).

Card list where each finding shows:
- One-line title (e.g., "Vendor Price Creep — Metro Industrial Supply")
- Severity: text label only — "Critical" in `text-forge-error`, "High" in `text-forge-primary font-medium`, "Medium" / "Low" in `text-forge-secondary`. No colored dots or badges — the text weight and color provide hierarchy.
- Dollar impact: `$1,368` in `text-forge-primary font-semibold`
- Status pill: `rounded-full px-2.5 py-0.5 text-xs font-medium bg-black/[0.04]` for all statuses (neutral background, text differentiates: "New" = `text-forge-primary`, "Resolved" = `text-forge-success`, etc.)
- Detected date: `text-forge-hint text-xs`

Click a card → expands inline to show `FindingDetail` (same pattern as `QuoteTable` row expansion — selected row gets `bg-white ring-1 ring-forge-primary/10 shadow`, other rows dim to `opacity-40`).

**4.3 — `FindingDetail`**

Rendered below the expanded finding card:
- **AI Summary**: 2-3 sentence plain text explanation
- **Evidence**: key-value pairs in a compact `dl` list (e.g., "Previous PO: PO-8847 — $14.20/ea")
- **Actions row**: 3 buttons
  - "Dismiss" — secondary style (outlined)
  - "Confirm Finding" — secondary style
  - "Resolve" — primary style (filled)

No charts, no price history visualizations — the text evidence is sufficient for a demo. Keeps the page clean and avoids decorative complexity.

**4.4 — `SavingsSummary`**

Static `glass-solid` card in the narrow sidebar column:
- YTD Realized Savings: large number `$284.9K`
- Identified (not yet acted on): `$127.4K`
- Breakdown list by finding type: simple text rows with dollar amounts aligned right
  - "Price Variance — $68.2K"
  - "Freight Optimization — $34.1K"
  - "Duplicate Prevention — $22.8K"
  - etc.
- No chart needed — the number list is scannable and avoids decorative weight

**4.5 — Create `app/(dashboard)/controller/page.tsx`**

```tsx
'use client';

// Client because FindingsFeed manages selection state

export default function ControllerPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Vigilant Controller"
        subtitle="AI-powered financial anomaly detection and spend intelligence."
      />

      <AnimatedGroup className="space-y-8">
        <AnimatedItem>
          <div className="grid grid-cols-4 gap-4">
            {controllerKpis.map(kpi => <StatCard key={kpi.title} {...kpi} />)}
          </div>
        </AnimatedItem>

        <AnimatedItem>
          <div className="grid grid-cols-[1fr_340px] gap-6">
            <FindingsFeed />
            <SavingsSummary />
          </div>
        </AnimatedItem>
      </AnimatedGroup>
    </div>
  );
}
```

**Files created**:
- `app/(dashboard)/controller/page.tsx`
- `components/controller/FindingsFeed.tsx`
- `components/controller/FindingDetail.tsx`
- `components/controller/SavingsSummary.tsx`

---

#### Phase 5: Cleanup

**5.1 — Delete unused shop-floor components**

These are replaced by `components/maintenance/*`:
- `components/shop-floor/MachineStatusGrid.tsx`
- `components/shop-floor/OeeBreakdown.tsx`
- `components/shop-floor/MachineAlerts.tsx`
- `components/shop-floor/ShiftOverview.tsx`
- `components/shop-floor/MaintenanceTimeline.tsx`

Delete the entire `components/shop-floor/` directory.

**5.2 — Clean up mock data**

Remove or mark as unused:
- `shopFloorKpis` (replaced by `maintenanceKpis`)
- `shopFloorAlerts` (replaced by PM schedule data)
- Trim `operators` array if no longer referenced
- Remove dropped machines from `machines` array

**5.3 — Verify no broken imports**

Run `pnpm typecheck` to catch any remaining references to deleted components or data.

**5.4 — Run `pnpm check:fix`**

Biome formatting pass on all modified/created files.

---

## Acceptance Criteria

### Functional

- [x] Sidebar shows "Maintenance" (Wrench icon) instead of "Shop Floor" (Factory icon)
- [x] Sidebar shows "Controller" (ScanSearch icon) between Quoting and Knowledge Base
- [x] `/shop-floor` renders Maintenance Intelligence page with 4 PM-focused KPIs
- [x] PM Schedule Timeline shows 8 machines with PM blocks across a 4-week range
- [x] Machine Health Grid shows 8 machine cards with spindle hours, health score, next PM
- [x] "Schedule PM" button opens 3-step modal (configure → AI analysis → confirm)
- [x] AI analysis step shows processing animation then results with job conflicts
- [x] `/controller` renders Vigilant Controller page with 4 financial KPIs
- [x] Anomaly feed shows 8 findings with severity, dollar impact, status
- [x] Clicking a finding expands inline to show evidence, AI summary, action buttons
- [x] Savings summary sidebar shows YTD totals and breakdown by type
- [x] Dismiss/Confirm/Resolve buttons toggle finding status (client-side state only)

### Design Consistency

- [x] All surfaces use `glass` or `glass-solid` — no new surface styles
- [x] Badge colors limited to `green`, `red`, `neutral` — no new colors
- [x] No decorative icons — every icon serves a functional purpose
- [x] Tables/grids follow existing header style (`bg-black/[0.02]`, uppercase hint text)
- [x] Modal follows QuoteBuilderModal overlay/card pattern exactly
- [x] Animations use `AnimatedGroup`/`AnimatedItem` — no custom animation
- [x] Typography uses existing scale — no new font sizes or weights

### Quality

- [x] `pnpm typecheck` passes with no errors
- [x] `pnpm check:fix` runs clean (Biome)
- [x] No `'use client'` on components that don't need it
- [x] All imports use `@/` path alias
- [x] No `any` types — use `unknown` and narrow

---

## File Summary

### New Files (10)
- `app/(dashboard)/controller/page.tsx`
- `components/maintenance/PmScheduleTimeline.tsx`
- `components/maintenance/MachineHealthGrid.tsx`
- `components/maintenance/SchedulePmModal.tsx`
- `components/controller/FindingsFeed.tsx`
- `components/controller/FindingDetail.tsx`
- `components/controller/SavingsSummary.tsx`

### Modified Files (3)
- `lib/mock-data.ts` — new types, new data, trimmed machines
- `components/Sidebar.tsx` — new nav item, updated label/icon
- `app/(dashboard)/shop-floor/page.tsx` — complete rewrite

### Deleted Files (5)
- `components/shop-floor/MachineStatusGrid.tsx`
- `components/shop-floor/OeeBreakdown.tsx`
- `components/shop-floor/MachineAlerts.tsx`
- `components/shop-floor/ShiftOverview.tsx`
- `components/shop-floor/MaintenanceTimeline.tsx`

### Documentation
- `CLAUDE.md` — update page table (route descriptions, component folders)

---

## References

- Brainstorm: `docs/brainstorms/2026-03-29-shop-floor-pm-vigilant-controller-brainstorm.md`
- QuoteBuilderModal pattern: `components/quoting/QuoteBuilderModal.tsx`
- QuoteTable row expansion: `components/quoting/QuoteTable.tsx`
- Existing machine data: `lib/mock-data.ts:1419`
- Sidebar nav items: `components/Sidebar.tsx:9`
- Design tokens: `app/globals.css`
