---
date: 2026-03-29
topic: shop-floor-pm-pivot-vigilant-controller
---

# Shop Floor PM Pivot + Vigilant Controller

## What We're Building

Two changes to the FORGE demo, grounded in real prospect feedback (Mihir Shah call, 2026-03-29):

1. **Shop Floor → Maintenance Intelligence**: Replace the current machine uptime/downtime monitoring page with a PM scheduling-focused page. Fewer machines (8 spindle-class CNC machines), richer PM data per machine, and an interactive "Schedule PM" multi-step modal (paralleling the Quote Builder). The hero becomes a PM schedule timeline showing upcoming PM windows against job load, with AI-recommended optimal windows.

2. **Vigilant Controller (new route `/controller`)**: A new sidebar nav item between Quoting and Knowledge Base. An always-on anomaly feed that surfaces financial and operational findings (vendor price creep, rush freight waste, suspicious invoices, tooling consumption spikes, volume discount opportunities) with clear dollar impact. Interactive triage: click a finding → detail panel with evidence, AI explanation, and Dismiss/Confirm/Resolve actions.

## Why This Approach

Direct prospect feedback:
- Machine uptime/downtime monitoring is "not that interesting" — too many failed startups, loose ROI
- PM scheduling is "an AI problem" — 26 spindles, each needs 2-day annual PM, algorithmic to schedule against live jobs
- Vigilant controller = "direct ROI" — constantly surfacing findings that save money
- Quoting stays (resonates with other prospects) but controller joins as a complementary tool

We chose:
- **Option B for machines** — fewer (8), richer PM data, avoids "monitoring dashboard" feel
- **New nav item** rather than replacing quoting — both tools tell different value stories
- **Interactive modals/flows** matching the Quote Builder UX pattern — credible, not just static tables

## Key Decisions

- Page title: "Maintenance Intelligence" (replaces "Shop Floor Monitor")
- Sidebar label: "Controller" with `ScanSearch` icon (6th item, between Quoting and KB)
- PM scheduling modal: 3-step flow (select machine/window → AI impact analysis → review/confirm)
- Finding triage: card-based feed with slide-over detail panel
- Machine roster: 8 CNC spindles (drop CMM, heat treat, grinder, EDM)
- All mock data, no real integrations (consistent with rest of demo)
- Design tokens, glass cards, chart styling all match existing FORGE system

## PM Scheduling — Nomenclature & Data

### KPIs (top 4 cards)
| KPI | Value | Badge | Subtitle |
|-----|-------|-------|----------|
| PM Compliance | 94% | +3% | Completed on schedule |
| Upcoming PMs | 3 | 1 critical | Next 14 days |
| Unplanned Downtime | 2.1% | -0.8% | vs. last month |
| Avg. MTTR | 3.4 hrs | -22 min | Mean time to repair |

### Machine data model (per machine)
- Spindle hours since last PM
- Hours to PM threshold
- Health score (composite)
- Vibration status: Normal | Attention | Alarm
- Job backlog (WO count + hours)
- Machine-specific parts (jobs only this machine can run)
- Last PM date, next PM window
- OEM service required? (some PMs need vendor tech)
- Cost of unplanned downtime vs. planned PM cost

### PM Schedule modal (3 steps)
1. **Configure**: Select machine, PM type (Preventive | Predictive | Inspection), preferred date window, estimated duration, service provider (In-House | OEM | Third-Party)
2. **AI Analysis**: Shows job conflicts, rerouting options, net delay per affected job, cost impact, operator displacement. AI recommendation: "Best window: Mar 22-23. 0 jobs delayed."
3. **Review & Confirm**: Summary with assigned technician, parts needed, checklist template

### PM types
Preventive | Predictive | Corrective | Inspection | Emergency

### Work order statuses
Requested | Approved | Scheduled | In Progress | On Hold | Completed | Overdue

## Vigilant Controller — Nomenclature & Data

### KPIs (top 4 cards)
| KPI | Value | Badge | Subtitle |
|-----|-------|-------|----------|
| Open Findings | 14 | +3 | 4 critical, 6 high, 4 medium |
| Dollar Impact | $127.4K | +$18.2K | Potential savings identified |
| Realized Savings | $284.9K | +$41K | YTD confirmed |
| Resolution Rate | 73% | +8% | Resolved within 7 days |

### Finding types
1. Purchase Price Variance (PPV) — vendor price creep
2. Expedited Freight Premium — rush shipping waste
3. Phantom Vendor Risk — ghost vendor / suspicious invoice
4. Contract Price Deviation — overbilling vs. blanket PO
5. Consumable Variance — tooling consumption spike
6. Consolidation Opportunity — volume discount potential
7. AP Exception (Duplicate) — duplicate invoice
8. Unclassified Spend — unallocated costs

### Finding statuses
New | Under Review | Confirmed | Dismissed | Resolved | Monitoring

### Finding severities
Critical | High | Medium | Low

### Mock findings (8)
1. Metro Industrial Supply — Kennametal inserts +20.1%, $1,368
2. Grainger — UPS Next Day on MRO items, $2,207 overspend
3. "Apex Calibration Services LLC" — ghost vendor, $4,750
4. Summit Steel & Alloys — contract overbilling, $8,060
5. WO-4835 tooling — Sandvik inserts 2.75x expected, $588
6. Allied Cutting Tools — consolidation opportunity, $2,072/yr
7. Precision Grinding Inc. — duplicate invoice, $6,420
8. FedEx Freight — unallocated LTL shipment, $1,840

### Interactive flows
- **Anomaly feed**: Card-based inbox, filter by type/severity/status/vendor
- **Finding detail**: Slide-over panel with evidence, price history, AI summary, action buttons
- **Savings tracker**: YTD realized + identified pipeline

## Open Questions
- Should the PM timeline be a horizontal Gantt or a vertical calendar view? (Lean: horizontal Gantt — matches production scheduling mental model)
- Should the Controller page have a secondary chart (savings trend over time, spend by category)? (Lean: yes, small savings waterfall or trend line)

## Next Steps
→ `/workflows:plan` for implementation details
