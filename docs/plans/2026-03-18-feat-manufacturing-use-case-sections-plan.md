---
title: "feat: Manufacturing Use-Case Sections (Delivery, Shop Floor, Enhanced Quoting, Enhanced KB)"
type: feat
date: 2026-03-18
---

# Manufacturing Use-Case Sections

Add 2 new pages (`/delivery`, `/shop-floor`) and enhance 2 existing pages (`/quoting`, `/knowledge-base`) to demonstrate FORGE's four core value propositions: predicting late deliveries, AI-assisted quoting, shop floor resource optimization, and institutional knowledge preservation.

## Overview

The current FORGE demo has 7 pages, but several are configuration/settings views that don't showcase the AI solving real manufacturing problems. This plan adds concrete, data-rich use-case pages that map directly to the four problems Rosedale helps manufacturers solve:

| Problem | Solution | Section |
|---------|----------|---------|
| Delayed deliveries | Predict and anticipate late delivery issues | `/delivery` (NEW) |
| Ad hoc quoting | AI-assisted quote generation with cost breakdowns | `/quoting` (ENHANCED) |
| Resource optimization | Machine monitoring, maintenance, shift optimization | `/shop-floor` (NEW) |
| Knowledge loss | Rich citations, attribution, tribal knowledge retrieval | `/knowledge-base` (ENHANCED) |

## Problem Statement

The existing demo pages (Agents, Documents, Settings) show platform *configuration* but not the platform *in action*. A potential buyer watching the demo video sees dashboards and settings, not the AI actively solving their problems. The four new/enhanced sections create dramatic "demo moments" that tell a compelling narrative.

## Proposed Solution

Build in 5 phases: Foundation (shared data + nav) → Delivery Intelligence → Shop Floor Monitor → Enhanced Quoting with Quote Builder → Enhanced Knowledge Base. Each phase is independently deployable and demo-recordable.

---

## Technical Approach

### Architecture

All new pages follow the established `app/(dashboard)/` pattern. No new APIs, database connections, or server actions — everything remains mocked in `lib/mock-data.ts`. New components follow the existing `components/{page-name}/` convention. Charts use Recharts with the established gradient/glass styling patterns.

### Key Decisions

1. **Sidebar order**: Insights → Delivery → Shop Floor → Quoting → Knowledge Base → Documents → Agents (7 items)
2. **Quote Builder**: Multi-step modal overlay on `/quoting` (not a separate route)
3. **Content overlap**: Insights keeps production-focused data; Delivery has supplier-focused data with different underlying datasets
4. **Machine tiles**: Purely visual (not clickable) for the demo
5. **Mini-gauges**: CSS `conic-gradient` arcs instead of 12 Recharts instances (performance)
6. **Waterfall chart**: Horizontal stacked bar in Recharts (not a true waterfall — simpler, native support)
7. **Margin slider**: Range 10-45%, default at the quote's target margin. Updates total price live.

---

## Implementation Phases

### Phase 0: Foundation (Shared Infrastructure)

**Goal:** Add all mock data types/entities and update navigation so subsequent phases can build on them.

#### 0.1 — Sidebar Navigation Update

**File:** `components/Sidebar.tsx`

Add 2 new nav items to the `navItems` array:

```typescript
const navItems = [
  { href: '/insights', label: 'Insights', icon: LayoutDashboard },
  { href: '/delivery', label: 'Delivery', icon: Truck },
  { href: '/shop-floor', label: 'Shop Floor', icon: Factory },
  { href: '/quoting', label: 'Quoting', icon: FileText },
  { href: '/knowledge-base', label: 'Knowledge Base', icon: Lightbulb },
  { href: '/documents', label: 'Documents', icon: FolderOpen },
  { href: '/agents', label: 'Agents', icon: Bot },
];
```

Import `Truck` and `Factory` from `lucide-react`.

#### 0.2 — Mock Data: Delivery Intelligence

**File:** `lib/mock-data.ts`

Add these exports (append to existing file with section comment dividers):

**Types:**

```typescript
type PurchaseOrder = {
  poNumber: string;
  supplier: string;
  supplierId: string;
  material: string;
  partNumber: string;
  quantity: number;
  unitCost: number;
  totalCost: number;
  forWorkOrder: string;
  forCustomer: string;
  dateCreated: string;
  promisedDelivery: string;
  predictedDelivery: string;
  actualDelivery: string | null;
  status: 'Created' | 'Acknowledged' | 'In Production' | 'Shipped' | 'In Transit' | 'Delivered' | 'Delayed';
  riskLevel: 'On Track' | 'Watch' | 'At Risk' | 'Critical';
  riskScore: number;
  riskReason: string | null;
  carrier: string | null;
  trackingNumber: string | null;
  aiConfidence: number;
};

type Supplier = {
  id: string;
  name: string;
  location: string;
  specialty: string;
  reliabilityScore: number;
  reliabilityTrend: 'up' | 'down' | 'stable';
  onTimeRate: number;
  avgLeadTimeDays: number;
  totalPOs: number;
  activePOs: number;
  trendData: number[];
  riskLevel: 'Low' | 'Medium' | 'High';
};

type DeliveryAlert = {
  id: string;
  timestamp: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  type: 'delay' | 'quality' | 'supplier' | 'logistics';
  title: string;
  description: string;
  affectedWorkOrders: string[];
  suggestedAction: string;
  status: 'new' | 'acknowledged' | 'resolved';
};
```

**Data arrays:**

- `deliveryKpis` — 4 stat cards (OTD 87.3%, At-Risk 7 of 42, Lead Variance +2.4d, Revenue at Risk $482K)
- `supplierOtdTrendData` — 12 data points for area chart (weekly, different from insights `onTimeDeliveryData`)
- `delayRootCauseData` — 5 categories (Supplier Production 34%, Logistics 24%, Material 19%, Quality 13%, Customs 10%) — different from insights `lateOrderCausesData`
- `purchaseOrders` — 8 POs with mix of statuses (2 Critical, 2 At Risk, 1 Watch, 3 On Track)
- `suppliers` — 6 suppliers with reliability scores and trend arrays (Acme Metals 94%, Pacific Fasteners 71%, Summit Alloys 82%, Midwest Steel 96%, Kennametal 99%, Cascade Coatings 88%)
- `deliveryAlerts` — 7 alerts graded critical through low
- `deliveryBrief` — `{ title, description }` (natural language paragraph connecting risks)

#### 0.3 — Mock Data: Shop Floor

**File:** `lib/mock-data.ts`

**Types:**

```typescript
type Machine = {
  id: string;
  name: string;
  type: string;
  location: string;
  status: 'Running' | 'Idle' | 'Down' | 'Setup' | 'Maintenance';
  currentJobId: string | null;
  currentOperator: string | null;
  healthScore: number;
  oee: { overall: number; availability: number; performance: number; quality: number };
  shiftMetrics: { partsProduced: number; partsGoal: number; scrapCount: number };
  maintenance: { lastService: string; nextScheduled: string; hoursToService: number };
};

type Operator = {
  id: string;
  name: string;
  shift: 'Day' | 'Swing' | 'Night';
  role: string;
  certifications: { machine: string; level: 0 | 1 | 2 | 3 }[];
  currentMachine: string | null;
  overtimeHours: number;
  initials: string;
};

type MaintenanceEvent = {
  id: string;
  machineId: string;
  machineName: string;
  type: 'Preventive' | 'Predictive' | 'Corrective';
  status: 'Scheduled' | 'In Progress' | 'Complete' | 'Overdue';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  scheduledDate: string;
  aiGenerated: boolean;
  confidenceScore?: number;
};
```

**Data arrays:**

- `shopFloorKpis` — 4 stat cards (OEE 84.2%, Machine Utilization 78.4%, Active WOs 14, Shift Coverage 92%)
- `machines` — 12 machines:
  | ID | Name | Type | Status | OEE | Health |
  |----|------|------|--------|-----|--------|
  | CNC-01 | Mazak VTC-800/30 | CNC Mill | Running | 87.4% | 92 |
  | CNC-02 | Haas VF-4SS | CNC Mill | Running | 79.1% | 68 |
  | CNC-03 | Haas VF-2 | CNC Mill | Setup | — | 95 |
  | 5AX-01 | DMG Mori DMU 50 | 5-Axis Mill | Running | 91.2% | 88 |
  | 5AX-02 | Hermle C400 | 5-Axis Mill | Down | — | 34 |
  | LAT-01 | Okuma LB3000 | CNC Lathe | Running | 85.6% | 90 |
  | LAT-02 | Doosan Puma 2600 | CNC Lathe | Idle | — | 82 |
  | LAS-01 | Trumpf TruLaser 3030 | Laser Cutter | Running | 93.1% | 97 |
  | CMM-01 | Zeiss Contura | CMM | Running | — | 99 |
  | HT-01 | Lindberg Blue M | Heat Treat Oven | Running | — | 76 |
  | GRN-01 | Okamoto ACC-820 | Surface Grinder | Idle | — | 91 |
  | EDM-01 | Sodick ALC600G | EDM Wire | Maintenance | — | 45 |
- `operators` — 8 operators across Day/Swing/Night with skill matrices
- `maintenanceEvents` — 8 events (mix of past completed + upcoming scheduled + AI-recommended)
- `shopFloorAlerts` — 6 agent actions (Machine Health, Scheduler, Quality, Workforce alerts)

#### 0.4 — Mock Data: Enhanced Quoting

**File:** `lib/mock-data.ts`

**Types:**

```typescript
type CostBreakdown = {
  material: number;
  labor: number;
  machineTime: number;
  setup: number;
  tooling: number;
  outsideServices: number;
  overhead: number;
  margin: number;
};

type QuoteOperation = {
  opNumber: number;
  name: string;
  machine: string;
  setupMinutes: number;
  cycleMinutes: number;
  costPerPart: number;
};

type SimilarJob = {
  jobId: string;
  partName: string;
  material: string;
  quantity: number;
  quotedPrice: number;
  actualCost: number;
  margin: number;
  outcome: 'Won' | 'Lost';
  similarity: number;
  dateQuoted: string;
};

type EnhancedQuote = {
  quoteId: string;
  client: string;
  project: string;
  date: string;
  amount: number;
  status: 'Draft' | 'Review' | 'Sent' | 'Won' | 'Lost' | 'Expired';
  targetMargin: number;
  actualMargin: number;
  confidenceScore: number;
  aiRecommendation: string;
  costBreakdown: CostBreakdown;
  operations: QuoteOperation[];
  similarJobs: SimilarJob[];
};
```

**Data arrays:**

- `enhancedQuotingStats` — 4 stat cards (Win Rate 64.2%, Avg Turnaround 2.4 hrs, Pipeline $482K, Margin Health 28.4%)
- `enhancedQuoteTableRows` — 8 quotes replacing current `quoteTableRows` (add Won/Lost statuses, margin %, confidence)
- `quoteDetail` — One fully detailed `EnhancedQuote` for the "hero" demo (Titanium Turbine Housing, $14,528 total, 6 operations, 3 similar jobs)
- `quoteBuilderDefaults` — Pre-filled form values for the demo recording (customer: "Aerospace Dynamics", material: "Ti-6Al-4V", qty: 6)
- `quoteBuilderSteps` — 5 processing step labels:
  1. "Analyzing part specifications..."
  2. "Matching 847 historical jobs..."
  3. "Calculating material costs (Ti-6Al-4V: $18.50/lb)..."
  4. "Generating manufacturing routing..."
  5. "Optimizing pricing for 68% win probability..."

#### 0.5 — Mock Data: Enhanced Knowledge Base

**File:** `lib/mock-data.ts`

**Types:**

```typescript
type CitationSource = {
  id: string;
  docTitle: string;
  docType: 'SOP' | 'Work Instruction' | 'Troubleshooting Guide' | 'Process Parameters' | 'Tribal Knowledge';
  docId: string;
  revision: string;
  author: string;
  lastUpdated: string;
  highlightedPassage: string;
  relevanceScore: number;
};

type KnowledgeContributor = {
  name: string;
  initials: string;
  role: string;
  yearsExperience: number;
};

type EnhancedChatResponse = {
  content: string;
  confidenceScore: number;
  sourcesMatched: number;
  citations: CitationSource[];
  contributors: KnowledgeContributor[];
};
```

**Data arrays:**

- `querySuggestions` — 4 clickable chip labels:
  - "What's the setup procedure for the Mazak VTC-800?"
  - "Troubleshoot surface finish issues on 4140 steel"
  - "Approved feed rate for Ti-6Al-4V on 5-axis?"
  - "Show inspection checklist for aerospace housings"
- `enhancedChatResponses` — 4 `EnhancedChatResponse` objects (replacing `cannedResponses`), each with:
  - Rich text content with inline `[1]`, `[2]`, `[3]` citation markers
  - 2-4 `CitationSource` entries per response
  - 1-3 `KnowledgeContributor` entries per response
  - Confidence scores (84-97%)
- `knowledgeDocuments` — 12 document entries across 5 types:
  - SOPs: CNC Lathe Startup (SOP-101), Incoming Inspection (SOP-205), First Article (SOP-310)
  - Work Instructions: Mazak Ti Roughing (WI-L3-001), Haas Tool Change (WI-L1-003), DMG 5-Axis Fixturing (WI-5X-010)
  - Troubleshooting: Surface Finish Defects (TSG-CNC-01), Dimensional Drift (TSG-QC-05)
  - Process Parameters: Ti-6Al-4V Machining (PP-TI64-001), 316SS Parameters (PP-316SS-002)
  - Tribal Knowledge: "Why 180 SFM not 220" (TK-042), "Haas Y-axis backlash workaround" (TK-067)

---

### Phase 1: `/delivery` — Delivery Intelligence

**Goal:** New page showing AI-predicted delivery risks, supplier reliability, and agent activity.

#### Files to Create

| File | Type | Description |
|------|------|-------------|
| `app/(dashboard)/delivery/page.tsx` | Server Component | Page layout: stat cards, charts row, table, scorecard, feed, brief |
| `components/delivery/SupplierOtdChart.tsx` | Client Component | Area chart with 95% target reference line (similar to ProductionChart) |
| `components/delivery/DelayRootCauseDonut.tsx` | Client Component | Donut chart (similar to EnergyDonut but with delivery-specific data) |
| `components/delivery/AtRiskOrdersTable.tsx` | Server Component | CSS grid table of at-risk POs with risk level pills and confidence badges |
| `components/delivery/SupplierScorecard.tsx` | Client Component | Ranked supplier list with reliability bars and sparkline trends |
| `components/delivery/DeliveryAgentFeed.tsx` | Server Component | Activity feed (similar to LiveActivity but delivery-specific actions) |
| `components/delivery/DeliveryBrief.tsx` | Server Component | Natural language intelligence brief (similar to IntelligenceBrief) |

#### Page Layout

```
[PageHeader: "Delivery Intelligence" + "Track Shipment" + "Export" buttons]

[StatCard x4: OTD | At-Risk | Lead Variance | Revenue at Risk]
  grid-cols-4 gap-4

[Charts Row: grid-cols-[1fr_340px] gap-6]
  Left: SupplierOtdChart (area chart, height 280px, with 95% target ReferenceLine)
  Right: DelayRootCauseDonut (donut, height 240px)

[AtRiskOrdersTable]
  Columns: PO# | Supplier | Material | Promised | Predicted | Risk Level | Confidence
  grid-cols-[1fr_1.5fr_1.5fr_1fr_1fr_1fr_80px]
  Risk level pills: Critical=forge-error, At Risk=forge-accent-warm, Watch=forge-accent-blue, On Track=forge-success
  Confidence: small text with % (e.g., "87%")
  8 rows

[Bottom Row: grid-cols-[1fr_340px] gap-6]
  Left: SupplierScorecard
    6 suppliers ranked by reliability
    Each row: name, location, reliability % bar, sparkline (tiny LineChart, no axes, 8 data points), risk badge
  Right: DeliveryAgentFeed
    7 alert items with severity icons, timestamps ("12m ago"), and action descriptions
    Icon mapping: critical=AlertTriangle/forge-error, high=Clock/forge-accent-warm, medium=Info/forge-accent-blue, low=CheckCircle/forge-success

[DeliveryBrief]
  glass-solid card with Sparkles icon header + natural language paragraph
```

#### Acceptance Criteria

- [ ] Page renders at `/delivery` with all 7 sections visible on scroll
- [ ] Sidebar shows "Delivery" link with Truck icon, active state works
- [ ] Area chart has gradient fill and 95% target reference line (dashed)
- [ ] Donut chart shows 5 categories with custom colors and legend
- [ ] At-Risk Orders table has color-coded risk level pills
- [ ] Supplier scorecard shows inline sparklines (Recharts LineChart, ~60px wide, no axes)
- [ ] Agent feed has severity-colored icons and timestamps
- [ ] Intelligence brief has Sparkles icon and glass-solid card
- [ ] All data imported from `lib/mock-data.ts`

---

### Phase 2: `/shop-floor` — Shop Floor Monitor

**Goal:** New page with a machine status grid, OEE breakdown, maintenance timeline, and shift overview.

#### Files to Create

| File | Type | Description |
|------|------|-------------|
| `app/(dashboard)/shop-floor/page.tsx` | Server Component | Page layout: stat cards, machine grid, OEE + maintenance row, shift overview |
| `components/shop-floor/MachineStatusGrid.tsx` | Server Component | 4x3 grid of machine tiles with status indicators |
| `components/shop-floor/MachineTile.tsx` | Server Component | Individual machine tile with status dot, job, OEE gauge, parts bar, health |
| `components/shop-floor/OeeBreakdown.tsx` | Server Component | Three horizontal bars + combined OEE number |
| `components/shop-floor/MaintenanceTimeline.tsx` | Server Component | Vertical timeline with color-coded event nodes |
| `components/shop-floor/ShiftOverview.tsx` | Server Component | Compact operator/machine assignment strip |

#### Machine Tile Design

Each tile is a `glass-solid rounded-2xl p-4` card with a colored left border:

- **Running**: `border-l-4 border-forge-success`
- **Idle**: `border-l-4 border-forge-accent-blue`
- **Down**: `border-l-4 border-forge-error`
- **Setup**: `border-l-4 border-forge-accent-warm`
- **Maintenance**: `border-l-4 border-forge-hint`

Tile contents (compact, fits ~140px height):

```
[Status dot + Machine ID]     [Health: 92]
[Machine Name - truncated]
[Current Job: WO-4821]
[OEE mini-gauge] [Parts: 142/160 bar]
```

**OEE mini-gauge**: CSS `conic-gradient` arc (not Recharts). A 36px semi-circle showing OEE % with color: green >=80%, amber 60-79%, red <60%. Text label below: "87%".

**Parts bar**: Simple div with `bg-forge-success/20` background and `bg-forge-success` fill bar, showing "142/160" text.

#### OEE Breakdown Design

`glass-solid rounded-2xl p-6` card. Three horizontal bars:

```
Availability  [====================------] 91.5%
Performance   [=====================-----] 94.3%
Quality       [=========================-] 97.6%

Combined OEE: 84.2%  (large text, below bars)
```

Each bar: `h-3 rounded-full bg-forge-divider` background, colored fill (`bg-forge-success` for >=85%, `bg-forge-accent-warm` for 70-84%, `bg-forge-error` for <70%).

#### Maintenance Timeline Design

`glass-solid rounded-2xl p-6` card. Vertical timeline with a thin line (`border-l-2 border-forge-divider`) and event nodes:

```
[Blue dot]  Mar 22 — CNC-01 Spindle Bearing Inspection (Preventive, Scheduled)
[Amber dot] Mar 20 — 5AX-02 Spindle Service [AI Recommended - 87%] (Predictive, Scheduled)
[Green dot] Mar 15 — LAT-01 Coolant System Flush (Preventive, Complete)
[Red dot]   Mar 14 — EDM-01 Wire Guide Replacement (Corrective, In Progress)
...
```

Color mapping: Preventive=forge-accent-blue, Predictive=forge-accent-warm, Corrective=forge-error, Complete=forge-success.

"AI Recommended" badge: small pill with Sparkles icon `text-xs bg-forge-accent-warm/10 text-forge-accent-warm rounded-full px-2 py-0.5`.

#### Shift Overview Design

`glass-solid rounded-2xl p-6` card with a horizontal layout of operator cards:

```
[Day Shift — 5 operators]
  [MC] Marcus Chen    CNC-01  ★★★  [4.5h OT]
  [ST] Sarah Torres   LAT-01  ★★   [8.0h OT ⚠]
  [JW] James Wilson   CMM-01  ★★★
  ...
```

Stars represent skill level (1-3) for their assigned machine. Warning icon on overtime > 8h. Initials in a circle with `bg-forge-primary/10`.

#### Page Layout

```
[PageHeader: "Shop Floor Monitor" + "Current Shift: Day" badge + "Alerts" button]

[StatCard x4: OEE | Utilization | Active WOs | Shift Coverage]
  grid-cols-4 gap-4

[MachineStatusGrid]
  grid-cols-4 gap-4 (4x3 = 12 tiles)

[Middle Row: grid-cols-[1fr_340px] gap-6]
  Left: OeeBreakdown
  Right: MaintenanceTimeline (max 6 events, scrollable if needed)

[ShiftOverview]
  Horizontal layout, grouped by shift
```

#### Acceptance Criteria

- [ ] Page renders at `/shop-floor` with all sections visible
- [ ] Sidebar shows "Shop Floor" link with Factory icon
- [ ] 12 machine tiles render in 4x3 grid with correct status colors
- [ ] OEE mini-gauges use CSS conic-gradient (no Recharts)
- [ ] Parts-vs-goal bars show proportional fill
- [ ] OEE breakdown shows 3 horizontal bars with percentage labels
- [ ] Maintenance timeline has colored dots, connecting line, and AI badges
- [ ] Shift overview shows operators with initials, machine assignments, and skill stars
- [ ] Down/Maintenance machines show no job or OEE data (graceful empty state)

---

### Phase 3: Enhanced `/quoting` — Quote Builder + Enhanced Table

**Goal:** Upgrade the existing quoting page with richer stat cards, filter tabs, and a multi-step Quote Builder modal.

#### Files to Modify

| File | Change |
|------|--------|
| `app/(dashboard)/quoting/page.tsx` | 4 stat cards (was 3), add filter state, swap data imports |
| `components/quoting/QuoteTable.tsx` | Add filter tabs, margin indicator, Won/Lost status icons, row click → detail |

#### Files to Create

| File | Type | Description |
|------|------|-------------|
| `components/quoting/QuoteFilterTabs.tsx` | Client Component | Tab bar: All / Draft / Sent / Won / Lost |
| `components/quoting/QuoteBuilderModal.tsx` | Client Component | Multi-step modal with 3 phases (form → animation → review) |
| `components/quoting/RfqForm.tsx` | Client Component | Quote input form (Step 1) |
| `components/quoting/AiProcessingAnimation.tsx` | Client Component | 5-step sequential animation (Step 2) |
| `components/quoting/QuoteReview.tsx` | Client Component | Generated quote review layout (Step 3) |
| `components/quoting/CostBreakdownChart.tsx` | Client Component | Horizontal stacked bar chart showing cost categories |
| `components/quoting/OperationsRouting.tsx` | Server Component | Table of manufacturing operations |
| `components/quoting/SimilarJobsPanel.tsx` | Server Component | 3-4 historical job comparisons |
| `components/quoting/ConfidenceGauge.tsx` | Server Component | Circular confidence indicator |
| `components/quoting/MarginSlider.tsx` | Client Component | Range slider that updates price |
| `components/quoting/QuoteDetailPanel.tsx` | Client Component | Expandable inline panel for existing quote rows |

#### Quote Table Enhancements

**Updated columns:**

```
grid-cols-[2fr_1fr_2fr_1fr_1fr_80px_1fr_48px]
Client | Quote ID | Project | Date | Amount | Margin | Status | Expand
```

**Margin column**: Colored bar (green >=25%, amber 15-24%, red <15%) with percentage text.

**Status taxonomy update**: Add `Won` and `Lost` to `statusConfig`:
- Won: `CheckCircle2` icon, `text-forge-success`
- Lost: `XCircle` icon, `text-forge-error`
- Review: `Eye` icon, `text-forge-accent-blue`

**Filter tabs**: Horizontal pill bar above table. Active tab: `bg-forge-primary text-white`. Inactive: `bg-black/[0.02] text-forge-secondary`. Clicking filters the table by status. "All" shows everything.

**Row click**: Clicking a row toggles a `QuoteDetailPanel` below that row showing cost breakdown, operations, and similar jobs for that quote. Only one detail panel open at a time.

#### Quote Builder Modal

**Trigger**: Clicking existing "New Quote" button opens the modal.

**Modal shell**: Full-screen overlay with `bg-black/40 backdrop-blur-sm`. Inner container: `glass-solid rounded-2xl max-w-4xl mx-auto my-8 max-h-[calc(100vh-64px)] overflow-y-auto`. Close button (X) top-right.

**Step 1 — RFQ Form** (`RfqForm.tsx`):

```
[Modal Header: "New Quote — RFQ Details"]

Customer:        [Dropdown — "Aerospace Dynamics"]
Part Description: [Text input — "Titanium Turbine Housing"]
Material:        [Dropdown — "Ti-6Al-4V"]
Quantity:        [Number input — 6]
Certifications:  [Checkboxes — ☑ AS9100  ☑ ITAR  ☐ NADCAP  ☐ ISO 9001]
Urgency:         [Radio pills — Standard / Rush / AOG]
Drawings:        [Upload area — decorative, non-functional]

[Cancel] [Generate Quote →]
```

Form fields use the existing input styling from Settings page (ProfileForm): `rounded-xl border border-forge-divider bg-white px-4 py-2.5 text-sm`. Pre-filled with `quoteBuilderDefaults` for the demo recording.

**Step 2 — AI Processing Animation** (`AiProcessingAnimation.tsx`):

```
[Modal Header: "Generating Quote"]

[Sparkles icon, animated pulse]

✓ Analyzing part specifications...                    [1.0s delay, then checkmark]
✓ Matching 847 historical jobs...                     [0.8s delay]
✓ Calculating material costs (Ti-6Al-4V: $18.50/lb)... [0.8s delay]
→ Generating manufacturing routing...                  [0.8s delay]
  Optimizing pricing for 68% win probability...        [0.6s delay, then all done]

Total animation: ~4 seconds
```

Each step: starts with a spinner (animated `Loader2` from Lucide), resolves to a checkmark (`Check` icon, `text-forge-success`). The current step has pulsing text. Steps below current are dimmed.

**Step 3 — Quote Review** (`QuoteReview.tsx`):

```
[Modal Header: "Quote QT-2026-0891 — Review"]

[Left 60%]
  [Cost Breakdown Chart — horizontal stacked bar]
    Material $2,220 | Machine $4,290 | Labor $1,140 | Setup $680 |
    Tooling $390 | Outside $540 | Overhead $2,106 | Margin $3,162
    Total: $14,528 (6 units × $2,421/unit)

  [Operations Routing Table]
    Op 10 | Rough Mill    | DMG Mori DMU 50 | Setup: 45m | Cycle: 2.5h | $412/part
    Op 20 | Finish Mill   | DMG Mori DMU 50 | Setup: 30m | Cycle: 1.8h | $297/part
    Op 30 | Drill/Tap     | Haas VF-4SS     | Setup: 20m | Cycle: 24m  | $48/part
    Op 40 | Deburr        | Manual          | —          | 18m         | $23/part
    Op 50 | CMM Inspect   | Zeiss Contura   | Setup: 15m | Cycle: 30m  | $58/part
    Op 60 | Anodize       | Cascade Coatings (Outside) | —  | 3 days  | $90/part

[Right 40%]
  [Confidence Gauge — 84% High]
    Circular indicator, green background arc

  [AI Recommendation card]
    "Ti-6Al-4V pricing is up 8% from Q4. Similar jobs at $2,200-$2,500/unit
     had a 68% win rate. Recommend holding at $2,421/unit."

  [Similar Jobs Panel]
    WO-4207 | Hydraulic Housing | 4140 | 24 qty | $1,720/unit | Won | 87% match
    WO-3982 | Actuator Body     | Ti-6Al-4V | 8 qty | $2,340/unit | Won | 82% match
    WO-4401 | Sensor Bracket    | Ti-6Al-4V | 12 qty | $2,580/unit | Lost | 74% match

  [Margin Slider]
    Label: "Target Margin"
    Range: 10% — 45%
    Default: 28%
    Moving slider updates: total price display + margin $ in cost breakdown
    Current: 28% → $14,528

[Bottom Bar]
  [← Back to Form] [Save as Draft] [Send to Customer]
```

**Cost Breakdown Chart** (`CostBreakdownChart.tsx`):

Horizontal stacked bar using Recharts `BarChart` with `layout="vertical"` and stacked `Bar` components. One data row, 8 segments. Each segment has a label above/below. Color palette:

- Material: `#7C9CB4` (forge-accent-blue)
- Machine Time: `#1A1A1A` (forge-primary)
- Labor: `#4A6741` (forge-success)
- Setup: `#C4836A` (forge-accent-warm)
- Tooling: `#666666` (forge-secondary)
- Outside Services: `#A0A0A0` (forge-hint)
- Overhead: `#BC4B41` (forge-error)
- Margin: `#E0E7FF` (forge-bg-wash)

Alternative: If the stacked bar is too complex, use a simple vertical list with proportional width bars (like the OEE breakdown bars) — simpler and equally readable.

**Confidence Gauge** (`ConfidenceGauge.tsx`):

CSS-only circular gauge (same `conic-gradient` approach as machine OEE mini-gauges, but larger — 80px diameter). Center shows percentage text. Background ring: `forge-divider`. Fill ring: green >=80%, amber 60-79%, red <60%. Label below: "High Confidence" / "Medium" / "Low".

**Margin Slider** (`MarginSlider.tsx`):

Native `<input type="range">` with custom Tailwind styling. Shows current margin %, updates the displayed total price in real-time using React state.

#### Page Layout (Updated)

```
[PageHeader: "Quoting Tool" + "New Quote" button (opens QuoteBuilderModal)]

[StatCard x4: Win Rate | Avg Turnaround | Pipeline Value | Margin Health]
  grid-cols-4 gap-4

[QuoteFilterTabs: All | Draft | Review | Sent | Won | Lost]

[QuoteTable — enhanced with margin column, row expansion]
  [QuoteDetailPanel — inline expandable below clicked row]

[AiInsightBanner — keep existing, make contextual]

[QuoteBuilderModal — overlay, 3 steps]
```

#### Acceptance Criteria

- [ ] 4 stat cards render (was 3)
- [ ] Filter tabs filter the quote table by status
- [ ] Quote table shows margin bars and Won/Lost icons
- [ ] Clicking a row expands a detail panel with cost breakdown, routing, similar jobs
- [ ] "New Quote" button opens the modal
- [ ] Step 1 form renders with pre-filled demo values
- [ ] Step 2 animation plays 5 steps sequentially (~4s total)
- [ ] Step 3 shows cost breakdown chart, routing table, similar jobs, confidence gauge
- [ ] Margin slider updates displayed price in real-time
- [ ] "Save as Draft" closes modal (in demo, no persistence needed)
- [ ] Only one detail panel open at a time in the table

---

### Phase 4: Enhanced `/knowledge-base` — Rich Citations + Attribution

**Goal:** Upgrade the chat interface with inline citations, source cards, confidence scores, contributor attribution, and query suggestions.

#### Files to Modify

| File | Change |
|------|--------|
| `components/knowledge/ChatInterface.tsx` | Major refactor: citation rendering, confidence badge, suggestion chips, new response data structure |
| `components/knowledge/SourceCards.tsx` | Replace with citation-style cards tied to AI responses |

#### Files to Create

| File | Type | Description |
|------|------|-------------|
| `components/knowledge/CitationBadge.tsx` | Server Component | Inline `[1]` style superscript badge |
| `components/knowledge/SourceCitationCard.tsx` | Server Component | Expandable card with doc title, type icon, highlighted passage, metadata |
| `components/knowledge/KnowledgeAttribution.tsx` | Server Component | Contributor avatars with name and experience |
| `components/knowledge/QuerySuggestions.tsx` | Client Component | Clickable chip row for empty state |
| `components/knowledge/ConfidenceBadge.tsx` | Server Component | Small badge: "96% confidence / 4 sources" |

#### Enhanced Chat Message Rendering

The current `ChatInterface` renders messages as plain text `<p>`. The enhanced version needs:

**For user messages**: No change (plain text, right-aligned, dark background).

**For AI messages**: Rich rendering:

```
[AI message bubble - left-aligned, glass-solid]
  [Message text with inline citation markers]
    "The approved setup procedure for the Mazak VTC-800 when running
     Ti-6Al-4V [1] requires a 15-minute warm-up spindle rotation [2]
     before loading material..."

  [Confidence Badge]
    "96% confidence · 4 sources matched"  (small, muted text with icon)

  [Source Citation Cards - stacked below message]
    [1] WI-L3-001: Mazak VTC-800 Setup for Titanium Roughing (Rev 3)
        "...warm-up spindle for minimum 15 minutes at 2000 RPM before
         engaging workpiece. Check runout indicator reads < 0.0005..."
        Work Instruction · Jim Torres · Updated Feb 2026
        [Expand ▼]

    [2] TK-042: Why we run Ti-6Al-4V at 180 SFM instead of 220
        "...at 220 SFM we were getting premature edge buildup on the
         KC5010 inserts in the Mazak. Dropped to 180 and tool life
         doubled from ~45 min to ~90 min per edge..."
        Tribal Knowledge · Mike Rodriguez · Updated Jan 2026
        [Expand ▼]

    [3] PP-TI64-001: Ti-6Al-4V Machining Parameters
        "...Roughing: 150-200 SFM, 0.008-0.012 IPR, DOC 0.100-0.250..."
        Process Parameters · Sarah Chen · Updated Mar 2026

  [Knowledge Attribution Bar]
    [MR] Mike Rodriguez, 22 yrs · [SC] Sarah Chen, 8 yrs · [JT] Jim Torres, 15 yrs
```

#### Citation Rendering Strategy

The `content` field in `EnhancedChatResponse` contains text with `[1]`, `[2]`, `[3]` markers. The component splits the text on these markers and renders them as styled superscript badges (`CitationBadge`):

```tsx
// Parse "[1]" markers into badge components
const renderCitedText = (text: string) => {
  return text.split(/(\[\d+\])/).map((part, i) => {
    const match = part.match(/\[(\d+)\]/);
    if (match) return <CitationBadge key={i} number={Number(match[1])} />;
    return <span key={i}>{part}</span>;
  });
};
```

`CitationBadge`: `inline-flex h-4 w-4 items-center justify-center rounded-full bg-forge-primary/10 text-[10px] font-bold text-forge-primary`.

#### Source Citation Card Design

`SourceCitationCard.tsx`: A compact card for each cited source.

```
[doc-type-icon] [docId]: [docTitle] (Rev [revision])
[highlighted passage in amber/warm background: bg-forge-accent-warm/5 border-l-2 border-forge-accent-warm]
[doc-type label] · [author] · Updated [date]
```

Doc type icons (from Lucide):
- SOP: `ClipboardList`
- Work Instruction: `Wrench`
- Troubleshooting Guide: `Search`
- Process Parameters: `Table2`
- Tribal Knowledge: `Brain`

#### Query Suggestions Design

`QuerySuggestions.tsx`: Shown when the chat has no messages (or only the initial welcome message). A row of 4 clickable chips:

```
[💡 Suggested questions]
[What's the setup procedure for the Mazak VTC-800?]
[Troubleshoot surface finish issues on 4140 steel]
[Approved feed rate for Ti-6Al-4V on 5-axis?]
[Show inspection checklist for aerospace housings]
```

Each chip: `rounded-full border border-forge-divider bg-white px-4 py-2 text-sm text-forge-secondary hover:bg-black/[0.02] hover:text-forge-primary cursor-pointer transition-colors`.

Clicking a chip sets the input value and submits, triggering the matching enhanced canned response.

#### Chat State Refactor

Current state: `messages` array + `responseIndex` cycling through `cannedResponses`.

New state: `messages` array + `responseIndex` cycling through `enhancedChatResponses`. Each AI message now stores additional data (citations, contributors, confidence) alongside the text content.

Updated message type:

```typescript
type KBMessage = {
  id: string;
  role: 'user' | 'assistant';
  sender: string;
  content: string;
  citations?: CitationSource[];
  contributors?: KnowledgeContributor[];
  confidenceScore?: number;
  sourcesMatched?: number;
};
```

#### Acceptance Criteria

- [ ] Empty chat state shows 4 query suggestion chips
- [ ] Clicking a chip submits the query and shows enhanced AI response
- [ ] AI responses show inline `[1]` `[2]` `[3]` citation badges
- [ ] Source citation cards render below each AI message with highlighted passages
- [ ] Confidence badge shows score and source count
- [ ] Knowledge attribution bar shows contributor avatars and experience
- [ ] User messages remain unchanged (plain text, right-aligned)
- [ ] Chat auto-scrolls to newest message
- [ ] Typing a custom question also triggers an enhanced response (cycles through `enhancedChatResponses`)

---

### Phase 5: Playwright Demo Recording Update

**Goal:** Update the demo recording script to cover all new/enhanced pages with compelling cursor movements and pauses.

#### File to Modify

| File | Change |
|------|--------|
| `tests/demo-recording.spec.ts` | Add Delivery + Shop Floor scenes, update Quoting + KB scenes |
| `playwright.config.ts` | Increase timeout from 60s to 120s |

#### Updated Scene Order (7 scenes)

1. **Insights** (existing, ~12s) — No changes needed
2. **Delivery** (new, ~15s)
   - Navigate via sidebar: `navigateVia(page, 'Delivery', 'Delivery Intelligence')`
   - Pause on stat cards (2s)
   - Zoom into at-risk orders table (3s)
   - Scroll to supplier scorecard (2s)
   - Scroll to agent feed + intelligence brief (3s)
3. **Shop Floor** (new, ~15s)
   - Navigate via sidebar: `navigateVia(page, 'Shop Floor', 'Shop Floor Monitor')`
   - Pause on stat cards (2s)
   - Zoom into a specific machine tile (CNC-02 with health 68 — the one to watch) (3s)
   - Scroll to OEE breakdown + maintenance timeline (3s)
   - Scroll to shift overview (2s)
4. **Quoting** (enhanced, ~25s)
   - Navigate via sidebar: `navigateVia(page, 'Quoting', 'Quoting Tool')`
   - Click filter tab "Won" then "All" (3s)
   - Click a quote row to expand detail panel (4s)
   - Click "New Quote" to open modal (1s)
   - Fill form fields with `pressSequentially` (5s)
   - Click "Generate Quote" — watch animation (5s)
   - Scroll through review: waterfall chart, routing, similar jobs (5s)
   - Drag margin slider (or click preset) (2s)
   - Click "Save as Draft" (1s)
5. **Knowledge Base** (enhanced, ~15s)
   - Navigate via sidebar: `navigateVia(page, 'Knowledge Base', 'Technical Knowledge Base')`
   - Pause on suggestion chips (2s)
   - Click first suggestion chip (1s)
   - Wait for enhanced AI response with citations (3s)
   - Zoom into source citation cards (3s)
   - Zoom into attribution bar (2s)
   - Type a second question (3s)
6. **Documents** (existing, ~8s) — No changes needed
7. **Agents** (existing, ~10s) — No changes needed

**Total estimated duration: ~100s** (within 120s timeout with buffer)

#### New Playwright Helpers Needed

- None strictly required. The margin slider can be handled with `clickWithCursor` on a specific position within the slider element, or by using `page.locator('input[type=range]').fill('35')` followed by a visual cursor move.

#### Acceptance Criteria

- [ ] `pnpm record-demo` produces a complete video covering all 7 pages
- [ ] Delivery and Shop Floor scenes navigate correctly via sidebar
- [ ] Quote Builder modal opens, fills, animates, and reviews in the video
- [ ] KB suggestion chip click and citation display is visible in the video
- [ ] Total recording stays under 120 seconds
- [ ] `playwright.config.ts` timeout updated to 120000

---

## Alternative Approaches Considered

1. **Separate routes for quote detail (`/quoting/[id]`)** — Rejected because the existing pattern uses inline expansion (like accordions), and a route change would require loading data by ID (overcomplicating the mock).

2. **Real Recharts gauges for machine tiles** — Rejected due to performance concerns with 12 chart instances. CSS `conic-gradient` is lighter and sufficient for static demo data.

3. **True waterfall chart** — Rejected because Recharts has no native waterfall. A horizontal stacked bar communicates the same information more simply.

4. **Knowledge Base sidebar panel for full documents** — Deferred. The citation cards with highlighted passages are sufficient for the demo. A full document viewer adds complexity without proportional demo value.

5. **Interactive machine floor map (SVG)** — Deferred. Visually striking but high effort for a demo. The 4x3 tile grid achieves the same "at-a-glance" effect with standard components.

## Risk Analysis & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Mock data file gets unwieldy (already 921 lines) | Medium | Use section comment dividers. Consider splitting into `mock-data/delivery.ts`, etc. only if file exceeds ~1500 lines. |
| 7 sidebar items may feel crowded | Low | Current sidebar is 260px wide with plenty of vertical space. 7 items still fit comfortably above the user profile section. |
| Quote Builder modal complexity | High | Build in isolation: form → animation → review. Test each step independently. The animation timing is the trickiest part. |
| Horizontal stacked bar chart may not look like a "waterfall" | Medium | Add labels above each segment and a clear "Total" callout. The demo narrator can explain "here's where each dollar goes." |
| Playwright timeout may need further adjustment | Low | 120s provides 20s buffer. If scenes run long, reduce pauses by 1s each. |
| Citation text parsing edge cases | Low | The `[N]` markers are placed deliberately in mock data. No ambiguity in parsing. |

## Dependencies & Prerequisites

- No external dependencies needed (all features use existing packages: Recharts, Lucide, Tailwind)
- Phase 0 (mock data + sidebar) must complete before any other phase
- Phases 1-4 are independent of each other and can be built in any order
- Phase 5 (Playwright) depends on all other phases being complete

## Success Metrics

- All 4 sections render correctly and are navigable via sidebar
- `pnpm build` succeeds with no TypeScript errors
- `pnpm record-demo` produces a complete video showing all 7 pages
- Each section tells a clear story for its corresponding manufacturing problem

## Documentation Plan

- Update `CLAUDE.md` to add the 2 new routes to the Pages table
- Update `docs/architecture.md` if it exists and references the route list
- No other docs needed (this plan serves as the reference)

## References

### Internal References

- Sidebar navigation: `components/Sidebar.tsx:9-15`
- Mock data: `lib/mock-data.ts` (921 lines, has unused data ready for reuse)
- Chart patterns: `components/insights/ProductionChart.tsx`, `components/insights/EnergyDonut.tsx`
- Table patterns: `components/insights/DueJobsTable.tsx`, `components/quoting/QuoteTable.tsx`
- Chat interface: `components/knowledge/ChatInterface.tsx`
- Design tokens: `app/globals.css` (--color-forge-* variables)
- Playwright helpers: `tests/demo-recording.spec.ts` (injectCursor, moveCursorToElement, clickWithCursor, navigateVia, typeMessage)
- Dashboard layout: `app/(dashboard)/layout.tsx` (sidebar + main with max-w-6xl)

### External Research (conducted during brainstorming)

- Delivery intelligence: FourKites, Project44, Kinaxis, Everstream Analytics patterns
- Quoting: Paperless Parts, Xometry, aPriori, Costimator workflows
- Shop floor: MachineMetrics, Tulip, Sight Machine, OEE.com methodologies
- Knowledge management: Dozuki, Poka, SwipeGuide, Shape of AI citation patterns
