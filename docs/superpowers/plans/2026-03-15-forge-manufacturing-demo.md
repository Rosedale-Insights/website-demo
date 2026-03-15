# FORGE Manufacturing Demo Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 7-page interactive manufacturing demo app ("FORGE") matching provided Figma designs, with mocked data and full navigation — ready for Playwright recording.

**Architecture:** Next.js App Router with a shared dashboard layout (`app/(dashboard)/layout.tsx`) containing the sidebar and atmospheric background. Each page is a route under the dashboard group. All data comes from `lib/mock-data.ts`. Charts use Recharts with custom styling to match the glass/atmospheric design language. Client components only where interactivity requires it (chat, chart toggles, form inputs).

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Recharts (charts), Lucide React (icons), pnpm

---

## File Structure

### Shared / Foundation
- **Modify:** `app/globals.css` — Design tokens, glass surface utilities, atmospheric background gradients
- **Modify:** `app/layout.tsx` — Add Inter font import from Google Fonts
- **Create:** `app/(dashboard)/layout.tsx` — Sidebar + main content shell with atmospheric bg
- **Create:** `components/Sidebar.tsx` — FORGE logo, 5 nav items + settings, user profile
- **Create:** `components/GlassCard.tsx` — Reusable glass panel (white 70% opacity, blur, border)
- **Create:** `components/StatCard.tsx` — KPI stat card with title, value, subtitle, optional badge
- **Create:** `components/PageHeader.tsx` — Page title + subtitle + right-side actions
- **Modify:** `app/page.tsx` — Redirect to /insights

### Mock Data
- **Modify:** `lib/mock-data.ts` — Add quoting table rows, document library entries, agent workspace data, insights chart data, chat knowledge sources

### Pages
- **Create:** `app/(dashboard)/insights/page.tsx` — Insights Dashboard
- **Create:** `components/insights/ProductionChart.tsx` — Line/area chart (client component)
- **Create:** `components/insights/EnergyDonut.tsx` — Donut chart (client component)
- **Create:** `components/insights/IntelligenceBrief.tsx` — AI alert card

- **Create:** `app/(dashboard)/quoting/page.tsx` — Quoting Tool
- **Create:** `components/quoting/QuoteTable.tsx` — Quote table with status badges
- **Create:** `components/quoting/AiInsightBanner.tsx` — Dark bottom banner

- **Create:** `app/(dashboard)/knowledge-base/page.tsx` — Technical Knowledge Chat
- **Create:** `components/knowledge/ChatInterface.tsx` — Chat messages + input (client component)
- **Create:** `components/knowledge/SourceCards.tsx` — Knowledge source cards

- **Create:** `app/(dashboard)/documents/page.tsx` — Document Library
- **Create:** `components/documents/PinnedDocs.tsx` — Pinned document cards
- **Create:** `components/documents/DocTable.tsx` — Document file table with pagination

- **Create:** `app/(dashboard)/agents/page.tsx` — Agent Workspace
- **Create:** `components/agents/AgentCard.tsx` — Agent unit card
- **Create:** `components/agents/LiveActivity.tsx` — Activity feed (client component)
- **Create:** `components/agents/PerformanceChart.tsx` — Mini sparkline chart

- **Create:** `app/(dashboard)/agents/[id]/page.tsx` — Agent Configuration
- **Create:** `components/agents/ConfigForm.tsx` — Identity & Persona form (client component)
- **Create:** `components/agents/Guardrails.tsx` — Toggles + slider (client component)
- **Create:** `components/agents/PerformanceAnalytics.tsx` — Accuracy chart + stats

- **Create:** `app/(dashboard)/settings/page.tsx` — Settings & Profile
- **Create:** `components/settings/ProfileForm.tsx` — Profile details form (client component)
- **Create:** `components/settings/AiSettings.tsx` — AI toggles + repositories (client component)
- **Create:** `components/settings/SecuritySection.tsx` — 2FA + data residency

---

## Chunk 1: Foundation & Shared Components

### Task 1: Install Recharts

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install recharts**

Run: `pnpm add recharts`

- [ ] **Step 2: Verify install**

Run: `pnpm typecheck`
Expected: No errors (recharts types included)

- [ ] **Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add recharts for chart components"
```

---

### Task 2: Design Tokens & Global Styles

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update globals.css with design tokens and utility classes**

Replace the contents of `app/globals.css` with the full design system:

```css
@import 'tailwindcss';

@theme {
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;

  /* Colors — from design spec */
  --color-forge-bg: #F2F4F5;
  --color-forge-bg-wash: #E0E7FF;
  --color-forge-surface: #FFFFFFB3;
  --color-forge-surface-solid: #FFFFFF;
  --color-forge-primary: #1A1A1A;
  --color-forge-secondary: #666666;
  --color-forge-hint: #A0A0A0;
  --color-forge-accent-blue: #7C9CB4;
  --color-forge-accent-warm: #C4836A;
  --color-forge-success: #4A6741;
  --color-forge-error: #BC4B41;
  --color-forge-divider: #0000000A;

  /* Shadows */
  --shadow-glass: 0 1px 3px #0000000A;
  --shadow-glass-md: 0 4px 12px #0000000D;
  --shadow-glass-lg: 0 8px 24px -4px #00000014;
  --shadow-glass-xl: 0 12px 32px -8px #0000001A;
}

/* Base atmospheric background applied in layout */
.forge-atmosphere {
  background: radial-gradient(ellipse at top right, var(--color-forge-bg-wash) 0%, var(--color-forge-bg) 70%);
  min-height: 100vh;
}

/* Glass surface utility */
.glass {
  background: var(--color-forge-surface);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow-glass);
}

.glass-solid {
  background: var(--color-forge-surface-solid);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: var(--shadow-glass);
}
```

- [ ] **Step 2: Update root layout with Inter font**

In `app/layout.tsx`, update to load Inter from Google Fonts via `next/font/google`:

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'FORGE — Manufacturing Intelligence',
  description: 'AI-native manufacturing platform demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Verify dev server starts**

Run: `pnpm dev`
Expected: Compiles without errors

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: add FORGE design tokens, glass utilities, and Inter font"
```

---

### Task 3: Redirect Root to /insights

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace root page with redirect**

```tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/insights');
}
```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redirect root to /insights dashboard"
```

---

### Task 4: Shared Components — GlassCard, StatCard, PageHeader

**Files:**
- Create: `components/GlassCard.tsx`
- Create: `components/StatCard.tsx`
- Create: `components/PageHeader.tsx`

- [ ] **Step 1: Create GlassCard component**

A versatile glass panel wrapper. Props: `className`, `children`, `solid` (boolean for opaque variant).

```tsx
import { cn } from '@/lib/utils';

export function GlassCard({
  children,
  className,
  solid = false,
}: {
  children: React.ReactNode;
  className?: string;
  solid?: boolean;
}) {
  return (
    <div className={cn(solid ? 'glass-solid' : 'glass', 'rounded-2xl p-6', className)}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Create StatCard component**

Matches the KPI cards in the designs — title (label_medium), large value (headline_medium), subtitle (body_small), optional trend badge.

```tsx
import { cn } from '@/lib/utils';

export function StatCard({
  title,
  value,
  subtitle,
  badge,
  badgeColor = 'green',
  className,
}: {
  title: string;
  value: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: 'green' | 'red' | 'neutral';
  className?: string;
}) {
  const badgeColors = {
    green: 'bg-forge-success/10 text-forge-success',
    red: 'bg-forge-error/10 text-forge-error',
    neutral: 'bg-forge-primary/5 text-forge-secondary',
  };

  return (
    <div className={cn('glass rounded-2xl px-6 py-5', className)}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium tracking-wide text-forge-secondary">{title}</p>
        {badge && (
          <span className={cn('rounded-full px-2.5 py-0.5 text-xs font-medium', badgeColors[badgeColor])}>
            {badge}
          </span>
        )}
      </div>
      <p className="mt-1 text-3xl font-semibold tracking-tight text-forge-primary">{value}</p>
      {subtitle && <p className="mt-0.5 text-xs text-forge-hint">{subtitle}</p>}
    </div>
  );
}
```

- [ ] **Step 3: Create PageHeader component**

Title + subtitle on left, action slot on right.

```tsx
export function PageHeader({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-forge-primary">{title}</h1>
        <p className="mt-1 text-sm text-forge-secondary">{subtitle}</p>
      </div>
      {children && <div className="flex items-center gap-3">{children}</div>}
    </div>
  );
}
```

- [ ] **Step 4: Verify build**

Run: `pnpm build`
Expected: Compiles without errors

- [ ] **Step 5: Commit**

```bash
git add components/GlassCard.tsx components/StatCard.tsx components/PageHeader.tsx
git commit -m "feat: add shared GlassCard, StatCard, and PageHeader components"
```

---

### Task 5: Sidebar & Dashboard Layout

**Files:**
- Create: `components/Sidebar.tsx`
- Create: `app/(dashboard)/layout.tsx`

- [ ] **Step 1: Create Sidebar component**

Client component with navigation. Uses `usePathname()` to highlight active item. 5 main nav items (Insights, Quoting, Knowledge Base, Documents, Agents) + Settings at bottom. FORGE logo with dark icon. User profile (JD avatar) at bottom.

```tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  FileText,
  Sparkles,
  FolderOpen,
  Bot,
  Settings,
  Cpu,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/insights', label: 'Insights', icon: LayoutDashboard },
  { href: '/quoting', label: 'Quoting', icon: FileText },
  { href: '/knowledge-base', label: 'Knowledge Base', icon: Sparkles },
  { href: '/documents', label: 'Documents', icon: FolderOpen },
  { href: '/agents', label: 'Agents', icon: Bot },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[260px] shrink-0 flex-col border-r border-forge-divider px-4 py-6">
      {/* Logo */}
      <Link href="/insights" className="mb-8 flex items-center gap-2 px-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-forge-primary">
          <Cpu className="h-4.5 w-4.5 text-white" />
        </div>
        <span className="text-base font-extrabold tracking-tight text-forge-primary">FORGE</span>
      </Link>

      {/* Nav Items */}
      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-forge-primary text-white'
                  : 'text-forge-secondary hover:bg-black/[0.03] hover:text-forge-primary',
              )}
            >
              <item.icon className="h-[18px] w-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="mt-auto rounded-2xl bg-black/[0.02] p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forge-primary text-xs font-semibold text-white">
            JD
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-forge-primary">Julian Detmer</p>
            <p className="truncate text-xs text-forge-hint">Plant Manager</p>
          </div>
          <Link href="/settings" className="text-forge-hint hover:text-forge-primary transition-colors">
            <Settings className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
```

- [ ] **Step 2: Create dashboard group layout**

```tsx
import { Sidebar } from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="forge-atmosphere flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-10 py-8">
        {children}
      </main>
    </div>
  );
}
```

- [ ] **Step 3: Create a placeholder insights page to test layout**

Create `app/(dashboard)/insights/page.tsx`:

```tsx
import { PageHeader } from '@/components/PageHeader';

export default function InsightsPage() {
  return (
    <div>
      <PageHeader
        title="Manufacturing Insights"
        subtitle="Real-time production intelligence and facility performance."
      />
    </div>
  );
}
```

- [ ] **Step 4: Verify navigation works**

Run: `pnpm dev`, navigate to `localhost:3000` — should redirect to `/insights` and show sidebar + page header.

- [ ] **Step 5: Commit**

```bash
git add components/Sidebar.tsx app/(dashboard)/layout.tsx app/(dashboard)/insights/page.tsx
git commit -m "feat: add sidebar navigation and dashboard layout shell"
```

---

### Task 6: Extend Mock Data

**Files:**
- Modify: `lib/mock-data.ts`

- [ ] **Step 1: Add quoting table data, document library data, agent workspace data, insights data, and knowledge chat data**

Append the following to `lib/mock-data.ts`:

```ts
/* ── Quoting Table (matches Quoting Tool design) ───────── */

export const quoteTableRows = [
  { client: 'Aerospace Dynamics', quoteId: 'QT-8821', project: 'Titanium Turbine Housing', date: 'Oct 24, 2023', amount: 12450, status: 'Draft' as const },
  { client: 'Precision Medical', quoteId: 'QT-8819', project: 'Surgical Grade Implants', date: 'Oct 22, 2023', amount: 4200, status: 'Pending' as const },
  { client: 'Global Robotics', quoteId: 'QT-8815', project: 'Custom Actuator Assembly', date: 'Oct 20, 2023', amount: 31000, status: 'Sent' as const },
  { client: 'Automotive Core', quoteId: 'QT-8812', project: 'Engine Block Prototype', date: 'Oct 18, 2023', amount: 8900, status: 'Expired' as const },
  { client: 'NextGen Energy', quoteId: 'QT-8804', project: 'Turbine Blade Refurbish', date: 'Oct 15, 2023', amount: 15600, status: 'Sent' as const },
]

export const quotingStats = {
  draftQuotes: 12,
  pendingApproval: 8,
  conversionRate: '64.2%',
}

/* ── Document Library (matches Document Library design) ── */

export const documentStats = {
  totalStorage: '1.2 GB / 5 GB',
  lastSync: '14 minutes ago',
  lastSyncStatus: 'All systems operational',
  knowledgeIndex: '842 Docs',
  knowledgeIndexDelta: '+12 this week',
}

export const pinnedDocuments = [
  { id: 'pd1', name: 'ISO-9001 Complian...', icon: 'FileText', updated: '2d ago', tag: 'Standards', size: '4.2 MB' },
  { id: 'pd2', name: 'Assembly Line V3', icon: 'Cog', updated: '5h ago', tag: 'Manual', size: '12.8 MB' },
  { id: 'pd3', name: 'Material Safety Data', icon: 'ClipboardList', updated: '1w ago', tag: 'Safety', size: '2.1 MB' },
  { id: 'pd4', name: 'Chassis Blueprint', icon: 'PenTool', updated: '1d ago', tag: 'Design', size: '45.0 MB' },
]

export const documentTableRows = [
  { name: 'Q4 Production Report.pdf', type: 'PDF Document', date: 'Oct 12, 2023', size: '1.4 MB', status: 'Indexed' },
  { name: 'Component_List_Master.xlsx', type: 'Spreadsheet', date: 'Oct 10, 2023', size: '842 KB', status: 'Indexed' },
  { name: 'Factory_Floor_Plan_B1.dwg', type: 'CAD Drawing', date: 'Oct 08, 2023', size: '15.2 MB', status: 'Processing' },
  { name: 'Operator_Training_Manual.pdf', type: 'PDF Document', date: 'Sep 28, 2023', size: '8.5 MB', status: 'Indexed' },
  { name: 'Calibration_Log_2023.csv', type: 'Data File', date: 'Sep 25, 2023', size: '124 KB', status: 'Indexed' },
  { name: 'Vendor_Agreement_Final.pdf', type: 'PDF Document', date: 'Sep 20, 2023', size: '2.2 MB', status: 'Indexed' },
]

/* ── Agent Workspace (matches Agent Workspace design) ──── */

export const agentWorkspaceStats = {
  activeTasks: 24,
  efficiencyGain: '+18.4%',
  computeUsage: '62%',
}

export const specializedAgents = [
  { id: 'sa1', name: 'QC Inspector', description: 'Monitors batch consistency and flags thermal anomalies.', icon: 'ScanSearch', status: 'Scanning', statusColor: 'green' as const, currentTask: 'Batch #882-A' },
  { id: 'sa2', name: 'Supply Chain', description: 'Optimizes lead times and manages raw material procurement.', icon: 'Container', status: 'Idle', statusColor: 'neutral' as const, currentTask: 'None' },
  { id: 'sa3', name: 'Maintenance', description: 'Predictive failure modeling for CNC and Lathe systems.', icon: 'Wrench', status: 'Analyzing', statusColor: 'amber' as const, currentTask: 'Vibration Data' },
  { id: 'sa4', name: 'Throughput', description: 'Real-time bottleneck identification in assembly line 4.', icon: 'Gauge', status: 'Optimizing', statusColor: 'green' as const, currentTask: 'Line 4 Shift B' },
]

export const agentLiveActivity = [
  { id: 'la1', text: 'QC Inspector flagged Batch #882-A', time: '2 mins ago', type: 'alert' as const },
  { id: 'la2', text: 'Maintenance Agent updated CNC mo...', time: '14 mins ago', type: 'update' as const },
  { id: 'la3', text: 'Throughput Agent resolved Line 4 del...', time: '28 mins ago', type: 'success' as const },
  { id: 'la4', text: 'Supply Chain Agent standby', time: '1 hr ago', type: 'idle' as const },
  { id: 'la5', text: 'New training data ingested', time: '3 hrs ago', type: 'system' as const },
]

/* ── Agent Configuration (matches Agent Config design) ──── */

export const agentConfigDefaults = {
  name: 'Quality Inspector AI',
  systemRole: 'You are an expert manufacturing quality control engineer.',
  model: 'Forge-Pro-V2 (Experimental)',
  humanInTheLoop: true,
  autonomousQuoting: false,
  directSlackAlerts: true,
  confidenceThreshold: 85,
  connectedDatabases: [
    { name: 'ISO-9001-Standard-2023.pdf', icon: 'FileText' },
    { name: 'Production_Log_H2_2023.csv', icon: 'Database' },
  ],
  currentPrecision: '95.2%',
  avgLatency: '1.2s',
}

/* ── Insights Chart Data ──────────────────────────────── */

export const productionOutputData = [
  { day: 'Mon', units: 142, efficiency: 78 },
  { day: 'Tue', units: 156, efficiency: 82 },
  { day: 'Wed', units: 138, efficiency: 76 },
  { day: 'Thu', units: 168, efficiency: 85 },
  { day: 'Fri', units: 172, efficiency: 84 },
  { day: 'Sat', units: 165, efficiency: 88 },
  { day: 'Sun', units: 178, efficiency: 90 },
]

export const energyAllocationData = [
  { name: 'Milling', value: 40, color: '#7C9CB4' },
  { name: 'Assembly', value: 35, color: '#4A6741' },
  { name: 'HVAC', value: 25, color: '#1A1A1A' },
]

export const insightsKpis = [
  { title: 'OEE Score', value: '84.2%', subtitle: 'Overall Equipment Effectiveness', badge: '+2.4%', badgeColor: 'green' as const },
  { title: 'Yield Rate', value: '98.1%', subtitle: 'Quality pass rate per unit', badge: '+0.8%', badgeColor: 'green' as const },
  { title: 'Down Time', value: '12h 4m', subtitle: 'Unplanned maintenance', badge: '-14%', badgeColor: 'red' as const },
  { title: 'Active Agents', value: '08/12', subtitle: 'AI workflow utilization', badge: 'Stable', badgeColor: 'neutral' as const },
]

export const forgeBrief = {
  title: 'Anomaly detected in Line 4 Hydraulic Pressure',
  description: "Our predictive model suggests a 70% probability of seal failure within the next 48 hours. Maintenance Agent 'Forge-Beta' has drafted a service ticket for your approval.",
}

/* ── Knowledge Base Chat (matches Technical Knowledge design) ── */

export const knowledgeSources = [
  { name: 'Safety Protocols', size: '2.4 MB', icon: 'FileText' },
  { name: 'Material Specs', size: '14.8 MB', icon: 'Database' },
  { name: 'Legacy Archive', size: '112 MB', icon: 'Archive' },
]

export const knowledgeChatMessages = [
  {
    id: 'kc1',
    role: 'user' as const,
    sender: 'Technical Lead',
    content: 'What are the specific heat treatment requirements for A36 structural steel according to our internal standards?',
  },
  {
    id: 'kc2',
    role: 'assistant' as const,
    sender: 'Forge Intelligence',
    content: `Based on the Internal Metallurgy Handbook (v4.2), A36 structural steel typically does not require heat treatment for standard applications. However, for stress-relieving in heavy weldments, the following protocol is specified:\n\n1. Heating Rate: Do not exceed 400°F per hour.\n2. Soak Temperature: 1100°F - 1250°F.\n3. Soak Time: 1 hour per inch of thickness.\n4. Cooling: Furnace cool to 600°F before air cooling.`,
  },
]

export const recentQueries = [
  'Alloy Stress Limits',
  'ISO 9001 Compliance',
]

/* ── Settings (matches Settings & Profile design) ────── */

export const userProfile = {
  initials: 'JD',
  fullName: 'Julian Detmer',
  email: 'julian@forge-intel.com',
  role: 'Production Manager',
  department: 'Assembly Line B',
}

export const aiSettings = {
  realTimeDocSync: true,
  agentAutonomy: false,
  technicalVerbosity: true,
}

export const connectedRepositories = [
  { name: 'ERP-Connector-v2', icon: 'Link' },
  { name: 'Technical_Manuals_2024', icon: 'Folder' },
]

/* ── Performance Chart Data (reusable) ─────────────────── */

export const performanceChartData = [
  { day: 'M', value: 91 },
  { day: 'T', value: 93 },
  { day: 'W', value: 92 },
  { day: 'T', value: 94 },
  { day: 'F', value: 95 },
  { day: 'S', value: 94 },
  { day: 'S', value: 95 },
]
```

- [ ] **Step 2: Verify types compile**

Run: `pnpm typecheck`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add lib/mock-data.ts
git commit -m "feat: add mock data for all 7 demo pages"
```

---

## Chunk 2: Insights Dashboard & Quoting Tool

### Task 7: Insights Dashboard — Full Page

**Files:**
- Modify: `app/(dashboard)/insights/page.tsx`
- Create: `components/insights/ProductionChart.tsx`
- Create: `components/insights/EnergyDonut.tsx`
- Create: `components/insights/IntelligenceBrief.tsx`

- [ ] **Step 1: Create ProductionChart (client component)**

Line/area chart using Recharts. Toggleable between "Units" and "Efficiency" data series. Styled with glass card wrapper, dark fill toggle buttons matching the design.

```tsx
'use client';

import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { productionOutputData } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export function ProductionChart() {
  const [mode, setMode] = useState<'units' | 'efficiency'>('units');

  return (
    <div className="glass rounded-2xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-forge-primary">Production Output Trend</h3>
        <div className="flex gap-2">
          {(['units', 'efficiency'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                'flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-colors',
                mode === m
                  ? 'bg-forge-primary text-white'
                  : 'bg-black/[0.03] text-forge-secondary hover:bg-black/[0.06]',
              )}
            >
              {mode === m && <Check className="h-3 w-3" />}
              {m === 'units' ? 'Units' : 'Efficiency'}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={productionOutputData}>
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A1A1A" stopOpacity={0.08} />
              <stop offset="100%" stopColor="#1A1A1A" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#0000000A" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#A0A0A0', fontSize: 12 }}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(0,0,0,0.04)',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              fontSize: '13px',
            }}
          />
          <Area
            type="monotone"
            dataKey={mode}
            stroke="#1A1A1A"
            strokeWidth={2}
            fill="url(#areaFill)"
            dot={{ fill: '#1A1A1A', r: 4, strokeWidth: 0 }}
            activeDot={{ fill: '#1A1A1A', r: 6, strokeWidth: 2, stroke: '#fff' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
```

- [ ] **Step 2: Create EnergyDonut (client component)**

Donut/pie chart for Energy Allocation. Shows Milling 40%, Assembly 35%, HVAC 25%.

```tsx
'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { energyAllocationData } from '@/lib/mock-data';

export function EnergyDonut() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="mb-4 text-lg font-semibold text-forge-primary">Energy Allocation</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={energyAllocationData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {energyAllocationData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 space-y-2">
        {energyAllocationData.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-forge-secondary">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-forge-primary">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create IntelligenceBrief component**

Alert card with sparkle icon, title, description, "Review Ticket" dark button and "Dismiss" text button.

```tsx
import { Sparkles } from 'lucide-react';
import { forgeBrief } from '@/lib/mock-data';

export function IntelligenceBrief() {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="mb-4 text-lg font-semibold text-forge-primary">Forge Intelligence Brief</h3>
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forge-primary/5">
          <Sparkles className="h-5 w-5 text-forge-primary" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-forge-primary">{forgeBrief.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-forge-secondary">
            {forgeBrief.description}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <button className="rounded-xl bg-forge-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
              Review Ticket
            </button>
            <button className="text-sm text-forge-secondary hover:text-forge-primary transition-colors">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Assemble Insights page**

Update `app/(dashboard)/insights/page.tsx` to combine all components:

```tsx
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { ProductionChart } from '@/components/insights/ProductionChart';
import { EnergyDonut } from '@/components/insights/EnergyDonut';
import { IntelligenceBrief } from '@/components/insights/IntelligenceBrief';
import { insightsKpis } from '@/lib/mock-data';
import { Calendar, Download } from 'lucide-react';

export default function InsightsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Manufacturing Insights"
        subtitle="Real-time production intelligence and facility performance."
      >
        <button className="flex items-center gap-2 rounded-xl border border-forge-divider bg-white px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]">
          <Calendar className="h-4 w-4" />
          Last 30 Days
        </button>
        <button className="flex items-center gap-2 rounded-xl bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
          <Download className="h-4 w-4" />
          Export Report
        </button>
      </PageHeader>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        {insightsKpis.map((kpi) => (
          <StatCard key={kpi.title} {...kpi} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-[1fr_320px] gap-4">
        <ProductionChart />
        <EnergyDonut />
      </div>

      {/* Intelligence Brief */}
      <IntelligenceBrief />
    </div>
  );
}
```

- [ ] **Step 5: Verify page renders correctly**

Run: `pnpm dev`, navigate to `/insights`.
Expected: Full Insights Dashboard matching the design — KPI cards, charts, intelligence brief.

- [ ] **Step 6: Commit**

```bash
git add components/insights/ app/(dashboard)/insights/page.tsx
git commit -m "feat: implement Insights Dashboard with charts and intelligence brief"
```

---

### Task 8: Quoting Tool — Full Page

**Files:**
- Create: `app/(dashboard)/quoting/page.tsx`
- Create: `components/quoting/QuoteTable.tsx`
- Create: `components/quoting/AiInsightBanner.tsx`

- [ ] **Step 1: Create QuoteTable component**

Table with columns: Client & ID, Project Name, Date, Total Amount, Status, actions. Status uses color-coded badges.

```tsx
import { quoteTableRows } from '@/lib/mock-data';
import { MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

const statusStyles = {
  Draft: 'text-forge-primary',
  Pending: 'text-forge-accent-warm',
  Sent: 'text-forge-success',
  Expired: 'text-forge-error',
};

export function QuoteTable() {
  return (
    <div className="glass-solid rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-[2fr_2fr_1.2fr_1.2fr_1fr_48px] gap-4 border-b border-forge-divider bg-black/[0.02] px-6 py-3">
        <span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Client & ID</span>
        <span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Project Name</span>
        <span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Date</span>
        <span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Total Amount</span>
        <span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Status</span>
        <span />
      </div>
      {/* Rows */}
      {quoteTableRows.map((row) => (
        <div
          key={row.quoteId}
          className="grid grid-cols-[2fr_2fr_1.2fr_1.2fr_1fr_48px] gap-4 items-center border-b border-forge-divider px-6 py-4 transition-colors hover:bg-black/[0.01]"
        >
          <div>
            <p className="font-medium text-forge-primary">{row.client}</p>
            <p className="text-xs text-forge-hint">{row.quoteId}</p>
          </div>
          <p className="text-sm text-forge-secondary">{row.project}</p>
          <p className="text-sm text-forge-secondary">{row.date}</p>
          <p className="text-sm font-medium text-forge-primary">
            ${row.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
          <span className={cn('text-sm font-medium', statusStyles[row.status])}>
            {row.status}
          </span>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-forge-hint hover:bg-black/[0.03] hover:text-forge-primary transition-colors">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create AiInsightBanner**

Dark banner at bottom of page with AI suggestion.

```tsx
import { Sparkles } from 'lucide-react';

export function AiInsightBanner() {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-forge-primary p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Sparkles className="h-5 w-5 text-white" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-white">Forge AI Insight</p>
        <p className="mt-0.5 text-sm text-white/70">
          Based on current material costs for Titanium Grade 5, we suggest increasing the margin on QT-8821 by 4% to maintain target profitability.
        </p>
      </div>
      <button className="shrink-0 rounded-xl border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20">
        Apply Suggestion
      </button>
    </div>
  );
}
```

- [ ] **Step 3: Assemble Quoting page**

```tsx
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { QuoteTable } from '@/components/quoting/QuoteTable';
import { AiInsightBanner } from '@/components/quoting/AiInsightBanner';
import { quotingStats } from '@/lib/mock-data';
import { Plus } from 'lucide-react';

export default function QuotingPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Quoting Tool"
        subtitle="Generate precise manufacturing estimates using Forge AI."
      >
        <button className="flex items-center gap-2 rounded-xl bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
          <Plus className="h-4 w-4" />
          New Quote
        </button>
      </PageHeader>

      <div className="grid grid-cols-3 gap-4">
        <StatCard title="Draft Quotes" value={String(quotingStats.draftQuotes).padStart(2, '0')} />
        <StatCard title="Pending Approval" value={String(quotingStats.pendingApproval).padStart(2, '0')} />
        <StatCard title="Conversion Rate" value={quotingStats.conversionRate} />
      </div>

      <QuoteTable />
      <AiInsightBanner />
    </div>
  );
}
```

- [ ] **Step 4: Verify page**

Run: `pnpm dev`, navigate to `/quoting`.
Expected: Full quoting tool page matching design.

- [ ] **Step 5: Commit**

```bash
git add components/quoting/ app/(dashboard)/quoting/page.tsx
git commit -m "feat: implement Quoting Tool with table and AI insight banner"
```

---

## Chunk 3: Knowledge Base Chat & Document Library

### Task 9: Technical Knowledge Chat — Full Page

**Files:**
- Create: `app/(dashboard)/knowledge-base/page.tsx`
- Create: `components/knowledge/ChatInterface.tsx`
- Create: `components/knowledge/SourceCards.tsx`

- [ ] **Step 1: Create SourceCards component**

Three knowledge source cards in a row — dark cards with icon, name, and size.

```tsx
import { FileText, Database, Archive } from 'lucide-react';
import { knowledgeSources } from '@/lib/mock-data';

const iconMap: Record<string, React.ElementType> = { FileText, Database, Archive };

export function SourceCards() {
  return (
    <div className="flex justify-center gap-4">
      {knowledgeSources.map((source) => {
        const Icon = iconMap[source.icon] || FileText;
        return (
          <div
            key={source.name}
            className="flex w-[180px] flex-col gap-2 rounded-2xl bg-forge-primary/[0.04] p-5 transition-colors hover:bg-forge-primary/[0.07]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forge-primary">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <p className="font-medium text-forge-primary">{source.name}</p>
            <p className="text-xs text-forge-hint">{source.size}</p>
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Create ChatInterface (client component)**

Interactive chat with pre-loaded messages from mock data. Users can type and submit — canned responses are shown. User messages appear in dark bubbles (right-aligned), AI responses in light bubbles (left-aligned) with "Forge Intelligence" label.

```tsx
'use client';

import { useState } from 'react';
import { ArrowUp, Paperclip } from 'lucide-react';
import { knowledgeChatMessages, cannedResponses } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  sender: string;
  content: string;
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(knowledgeChatMessages);
  const [input, setInput] = useState('');
  const [responseIndex, setResponseIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      sender: 'You',
      content: input,
    };

    const aiMsg: Message = {
      id: `a-${Date.now()}`,
      role: 'assistant',
      sender: 'Forge Intelligence',
      content: cannedResponses[responseIndex % cannedResponses.length],
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput('');
    setResponseIndex((i) => i + 1);
  };

  return (
    <div className="flex flex-1 flex-col">
      {/* Messages */}
      <div className="flex-1 space-y-6 overflow-y-auto pb-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn('flex flex-col', msg.role === 'user' ? 'items-end' : 'items-start')}
          >
            <p className="mb-1 text-xs text-forge-hint">{msg.sender}</p>
            <div
              className={cn(
                'max-w-[600px] rounded-2xl px-5 py-4 text-sm leading-relaxed',
                msg.role === 'user'
                  ? 'bg-forge-primary text-white'
                  : 'glass-solid text-forge-primary',
              )}
            >
              <p className="whitespace-pre-line">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSubmit} className="mt-auto">
        <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-white/80 to-white/60 p-2 shadow-glass-md backdrop-blur-xl border border-white/60">
          <button type="button" className="p-2 text-forge-hint hover:text-forge-primary transition-colors">
            <Paperclip className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a technical question..."
            className="flex-1 bg-transparent text-sm text-forge-primary placeholder:text-forge-hint outline-none"
          />
          <button
            type="submit"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-forge-primary text-white transition-colors hover:bg-forge-primary/90"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
```

- [ ] **Step 3: Assemble Knowledge Base page**

Full page with hero section ("How can I help you today?"), source cards, chat interface, and recent queries in the sidebar (shown via left sidebar in the design — but since we already have a global sidebar, we render recent queries inline below the knowledge sources or as a small left column within the main content).

Looking at the design more carefully: the recent queries appear at the bottom-left of the page, integrated into the main sidebar. We'll place them as a secondary section within the page layout.

```tsx
import { PageHeader } from '@/components/PageHeader';
import { SourceCards } from '@/components/knowledge/SourceCards';
import { ChatInterface } from '@/components/knowledge/ChatInterface';
import { recentQueries } from '@/lib/mock-data';
import { Plus, Settings, Clock } from 'lucide-react';

export default function KnowledgeBasePage() {
  return (
    <div className="flex h-[calc(100vh-64px)] flex-col">
      <PageHeader
        title="Technical Knowledge Base"
        subtitle="AI-powered documentation retrieval"
      >
        <button className="flex items-center gap-2 rounded-xl border border-forge-divider bg-white px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]">
          <Plus className="h-4 w-4" />
          Upload Docs
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-forge-hint hover:bg-black/[0.03] hover:text-forge-primary transition-colors">
          <Settings className="h-5 w-5" />
        </button>
      </PageHeader>

      {/* Hero */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold text-forge-primary">How can I help you today?</h2>
        <p className="mt-2 text-sm text-forge-secondary">
          Search across 1,240 technical manuals, safety protocols, and maintenance logs.
        </p>
      </div>

      {/* Source Cards */}
      <div className="mt-8">
        <SourceCards />
      </div>

      {/* Chat */}
      <div className="mt-8 flex flex-1 min-h-0">
        {/* Recent Queries sidebar */}
        <div className="w-48 shrink-0 pr-6">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-widest text-forge-hint">Recent Queries</p>
          <div className="space-y-2">
            {recentQueries.map((q) => (
              <button key={q} className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm text-forge-secondary hover:bg-black/[0.03] hover:text-forge-primary transition-colors">
                <Clock className="h-3.5 w-3.5 shrink-0 text-forge-hint" />
                {q}
              </button>
            ))}
          </div>
        </div>
        {/* Chat Interface */}
        <div className="flex-1">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify page**

Run: `pnpm dev`, navigate to `/knowledge-base`.
Expected: Full knowledge base chat page. Typing a message and pressing Enter/click should show a canned AI response.

- [ ] **Step 5: Commit**

```bash
git add components/knowledge/ app/(dashboard)/knowledge-base/page.tsx
git commit -m "feat: implement Technical Knowledge Base chat with interactive messaging"
```

---

### Task 10: Document Library — Full Page

**Files:**
- Create: `app/(dashboard)/documents/page.tsx`
- Create: `components/documents/PinnedDocs.tsx`
- Create: `components/documents/DocTable.tsx`

- [ ] **Step 1: Create PinnedDocs component**

4 pinned document cards in a row with icon, name, updated time, tag chip, and file size.

```tsx
import { FileText, Cog, ClipboardList, PenTool, MoreVertical } from 'lucide-react';
import { pinnedDocuments } from '@/lib/mock-data';

const iconMap: Record<string, React.ElementType> = { FileText, Cog, ClipboardList, PenTool };

export function PinnedDocs() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-forge-primary">Pinned Documents</h3>
      <div className="grid grid-cols-4 gap-4">
        {pinnedDocuments.map((doc) => {
          const Icon = iconMap[doc.icon] || FileText;
          return (
            <div key={doc.id} className="glass-solid rounded-2xl p-5 transition-shadow hover:shadow-glass-md">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.03]">
                  <Icon className="h-5 w-5 text-forge-primary" />
                </div>
                <button className="text-forge-hint hover:text-forge-primary transition-colors">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-4 font-medium text-forge-primary">{doc.name}</p>
              <p className="text-xs text-forge-hint">Updated {doc.updated}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full border border-forge-divider px-3 py-1 text-xs font-medium text-forge-secondary">
                  {doc.tag}
                </span>
                <span className="text-xs text-forge-hint">{doc.size}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create DocTable component with pagination**

Client component for the document file table with pagination controls.

```tsx
'use client';

import { useState } from 'react';
import { FileText, Table2, FileImage, FileCog, FileSpreadsheet, ChevronLeft, ChevronRight } from 'lucide-react';
import { documentTableRows } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const typeIcons: Record<string, React.ElementType> = {
  'PDF Document': FileText,
  'Spreadsheet': FileSpreadsheet,
  'CAD Drawing': FileImage,
  'Data File': FileCog,
};

const statusStyles: Record<string, string> = {
  Indexed: 'bg-forge-success/10 text-forge-success',
  Processing: 'bg-forge-accent-warm/10 text-forge-accent-warm',
};

export function DocTable() {
  const [page] = useState(1);

  return (
    <div className="glass-solid rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-[2fr_1.2fr_1fr_1fr] gap-4 border-b border-forge-divider bg-black/[0.02] px-6 py-3">
        <span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Name</span>
        <span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Date Modified</span>
        <span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Size</span>
        <span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Status</span>
      </div>
      {/* Rows */}
      {documentTableRows.map((row) => {
        const Icon = typeIcons[row.type] || FileText;
        return (
          <div
            key={row.name}
            className="grid grid-cols-[2fr_1.2fr_1fr_1fr] gap-4 items-center border-b border-forge-divider px-6 py-4 transition-colors hover:bg-black/[0.01]"
          >
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 shrink-0 text-forge-hint" />
              <div>
                <p className="text-sm font-medium text-forge-primary">{row.name}</p>
                <p className="text-xs text-forge-hint">{row.type}</p>
              </div>
            </div>
            <p className="text-sm text-forge-secondary">{row.date}</p>
            <p className="text-sm text-forge-secondary">{row.size}</p>
            <span className={cn('inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium', statusStyles[row.status])}>
              {row.status}
            </span>
          </div>
        );
      })}
      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 py-4">
        <button className="text-forge-hint hover:text-forge-primary transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm text-forge-secondary">Page {page} of 12</span>
        <button className="text-forge-hint hover:text-forge-primary transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Assemble Document Library page**

```tsx
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { PinnedDocs } from '@/components/documents/PinnedDocs';
import { DocTable } from '@/components/documents/DocTable';
import { documentStats } from '@/lib/mock-data';
import { Search, Plus } from 'lucide-react';

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Document Library"
        subtitle="Technical specifications and manufacturing manuals"
      >
        <div className="flex items-center gap-2 rounded-xl border border-forge-divider bg-white px-4 py-2">
          <Search className="h-4 w-4 text-forge-hint" />
          <input
            type="text"
            placeholder="Search files..."
            className="w-48 bg-transparent text-sm text-forge-primary placeholder:text-forge-hint outline-none"
          />
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
          <Plus className="h-4 w-4" />
          Upload File
        </button>
      </PageHeader>

      <div className="grid grid-cols-3 gap-4">
        <StatCard title="Total Storage" value={documentStats.totalStorage} />
        <StatCard title="Last Sync" value={documentStats.lastSync} subtitle={documentStats.lastSyncStatus} />
        <StatCard title="Knowledge Index" value={documentStats.knowledgeIndex} subtitle={documentStats.knowledgeIndexDelta} />
      </div>

      <PinnedDocs />
      <DocTable />
    </div>
  );
}
```

- [ ] **Step 4: Verify page**

Run: `pnpm dev`, navigate to `/documents`.
Expected: Full document library matching design.

- [ ] **Step 5: Commit**

```bash
git add components/documents/ app/(dashboard)/documents/page.tsx
git commit -m "feat: implement Document Library with pinned docs and file table"
```

---

## Chunk 4: Agents & Settings Pages

### Task 11: Agent Workspace — Full Page

**Files:**
- Create: `app/(dashboard)/agents/page.tsx`
- Create: `components/agents/AgentCard.tsx`
- Create: `components/agents/LiveActivity.tsx`
- Create: `components/agents/PerformanceChart.tsx`

- [ ] **Step 1: Create AgentCard component**

Card for each specialized agent — icon in colored circle, status badge, name, description, "Current Task" label with value, arrow link.

```tsx
import {
  ScanSearch,
  Container,
  Wrench,
  Gauge,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = { ScanSearch, Container, Wrench, Gauge };

const statusColorMap = {
  green: 'bg-forge-success/10 text-forge-success',
  neutral: 'bg-black/[0.04] text-forge-secondary',
  amber: 'bg-forge-accent-warm/10 text-forge-accent-warm',
};

type AgentCardProps = {
  name: string;
  description: string;
  icon: string;
  status: string;
  statusColor: 'green' | 'neutral' | 'amber';
  currentTask: string;
  id: string;
};

export function AgentCard({ name, description, icon, status, statusColor, currentTask, id }: AgentCardProps) {
  const Icon = iconMap[icon] || ScanSearch;

  return (
    <a
      href={`/agents/${id}`}
      className="glass-solid group flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-glass-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/[0.03]">
          <Icon className="h-6 w-6 text-forge-primary" />
        </div>
        <span className={cn('rounded-full px-3 py-1 text-xs font-medium', statusColorMap[statusColor])}>
          {status}
        </span>
      </div>
      <h4 className="mt-5 text-lg font-semibold text-forge-primary">{name}</h4>
      <p className="mt-1 text-sm leading-relaxed text-forge-secondary">{description}</p>
      <div className="mt-auto flex items-center justify-between border-t border-forge-divider pt-4 mt-5">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-widest text-forge-hint">Current Task</p>
          <p className="text-sm font-medium text-forge-primary">{currentTask}</p>
        </div>
        <ArrowRight className="h-5 w-5 text-forge-hint transition-transform group-hover:translate-x-1" />
      </div>
    </a>
  );
}
```

- [ ] **Step 2: Create LiveActivity component**

Feed of recent agent activity items with colored status dots and action icons.

```tsx
import { Eye, RefreshCw, CheckCircle, HelpCircle, List } from 'lucide-react';
import { agentLiveActivity } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const typeConfig = {
  alert: { dot: 'bg-forge-success', icon: Eye },
  update: { dot: 'bg-forge-primary', icon: RefreshCw },
  success: { dot: 'bg-forge-success', icon: CheckCircle },
  idle: { dot: 'bg-forge-hint', icon: HelpCircle },
  system: { dot: 'bg-forge-success', icon: List },
};

export function LiveActivity() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-forge-primary">Live Activity</h3>
        <div className="flex items-center gap-1.5 text-xs text-forge-success font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-forge-success" />
          Live
        </div>
      </div>
      <div className="space-y-4">
        {agentLiveActivity.map((item) => {
          const config = typeConfig[item.type];
          const Icon = config.icon;
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div className={cn('mt-1.5 h-2 w-2 shrink-0 rounded-full', config.dot)} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-forge-primary truncate">{item.text}</p>
                <p className="text-xs text-forge-hint">{item.time}</p>
              </div>
              <Icon className="h-4 w-4 shrink-0 text-forge-hint" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create PerformanceChart (mini sparkline)**

Small area chart for agent performance over the week.

```tsx
'use client';

import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';
import { performanceChartData } from '@/lib/mock-data';

export function PerformanceChart() {
  return (
    <div className="glass rounded-2xl p-5">
      <h4 className="mb-3 text-sm font-semibold text-forge-primary">Agent Performance</h4>
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={performanceChartData}>
          <defs>
            <linearGradient id="perfFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A1A1A" stopOpacity={0.06} />
              <stop offset="100%" stopColor="#1A1A1A" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#A0A0A0', fontSize: 10 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#1A1A1A"
            strokeWidth={1.5}
            fill="url(#perfFill)"
            dot={{ fill: '#1A1A1A', r: 3, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
```

- [ ] **Step 4: Assemble Agent Workspace page**

```tsx
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { AgentCard } from '@/components/agents/AgentCard';
import { LiveActivity } from '@/components/agents/LiveActivity';
import { PerformanceChart } from '@/components/agents/PerformanceChart';
import { agentWorkspaceStats, specializedAgents } from '@/lib/mock-data';
import { Plus } from 'lucide-react';

export default function AgentsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Agent Workspace"
        subtitle="Manage and deploy specialized intelligence units across your floor."
      >
        <button className="flex items-center gap-2 rounded-xl bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
          <Plus className="h-4 w-4" />
          Deploy New Agent
        </button>
      </PageHeader>

      <div className="grid grid-cols-3 gap-4">
        <StatCard title="Active Tasks" value={String(agentWorkspaceStats.activeTasks)} />
        <StatCard title="Efficiency Gain" value={agentWorkspaceStats.efficiencyGain} />
        <StatCard title="Compute Usage" value={agentWorkspaceStats.computeUsage} />
      </div>

      <div className="grid grid-cols-[1fr_340px] gap-6">
        {/* Left: Agent Cards */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-forge-primary">Active Specialized Units</h3>
          <div className="grid grid-cols-2 gap-4">
            {specializedAgents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </div>
        </div>
        {/* Right: Activity + Performance */}
        <div className="space-y-4">
          <LiveActivity />
          <PerformanceChart />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Verify page**

Run: `pnpm dev`, navigate to `/agents`.
Expected: Full agent workspace with 4 cards, activity feed, and chart.

- [ ] **Step 6: Commit**

```bash
git add components/agents/AgentCard.tsx components/agents/LiveActivity.tsx components/agents/PerformanceChart.tsx app/(dashboard)/agents/page.tsx
git commit -m "feat: implement Agent Workspace with cards, live activity, and performance chart"
```

---

### Task 12: Agent Configuration — Detail Page

**Files:**
- Create: `app/(dashboard)/agents/[id]/page.tsx`
- Create: `components/agents/ConfigForm.tsx`
- Create: `components/agents/Guardrails.tsx`
- Create: `components/agents/PerformanceAnalytics.tsx`

- [ ] **Step 1: Create ConfigForm (client component)**

Identity & Persona form — Agent Name input, System Role textarea, Model Selection dropdown.

```tsx
'use client';

import { useState } from 'react';
import { agentConfigDefaults } from '@/lib/mock-data';
import { ChevronDown } from 'lucide-react';

export function ConfigForm() {
  const [name, setName] = useState(agentConfigDefaults.name);
  const [role, setRole] = useState(agentConfigDefaults.systemRole);
  const [model] = useState(agentConfigDefaults.model);

  return (
    <div className="glass-solid rounded-2xl p-6">
      <h3 className="mb-6 text-lg font-semibold text-forge-primary">Identity & Persona</h3>
      <div className="space-y-5">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-forge-secondary">Agent Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-forge-divider bg-white px-4 py-3 text-sm text-forge-primary outline-none transition-colors focus:border-forge-accent-blue"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-forge-secondary">System Role</label>
          <textarea
            value={role}
            onChange={(e) => setRole(e.target.value)}
            rows={2}
            className="w-full resize-none rounded-xl border border-forge-divider bg-white px-4 py-3 text-sm text-forge-primary outline-none transition-colors focus:border-forge-accent-blue"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-center font-medium text-forge-secondary">Model Selection</label>
          <div className="relative">
            <select className="w-full appearance-none rounded-xl border border-forge-divider bg-white px-4 py-3 pr-10 text-sm text-forge-primary outline-none transition-colors focus:border-forge-accent-blue">
              <option>{model}</option>
              <option>Forge-Standard-V1</option>
              <option>Forge-Lite</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forge-hint" />
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create Guardrails (client component)**

Operational guardrails with 3 toggles and a confidence threshold slider.

```tsx
'use client';

import { useState } from 'react';
import { agentConfigDefaults } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn(
        'relative h-6 w-11 rounded-full transition-colors',
        checked ? 'bg-forge-primary' : 'bg-black/10',
      )}
    >
      <div
        className={cn(
          'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform',
          checked ? 'translate-x-[22px]' : 'translate-x-0.5',
        )}
      />
    </button>
  );
}

export function Guardrails() {
  const [hitl, setHitl] = useState(agentConfigDefaults.humanInTheLoop);
  const [autoQuote, setAutoQuote] = useState(agentConfigDefaults.autonomousQuoting);
  const [slack, setSlack] = useState(agentConfigDefaults.directSlackAlerts);
  const [threshold, setThreshold] = useState(agentConfigDefaults.confidenceThreshold);

  const toggles = [
    { label: 'Human-in-the-loop', description: 'Require approval for high-risk actions', checked: hitl, onChange: setHitl },
    { label: 'Autonomous Quoting', description: 'Allow agent to generate draft quotes', checked: autoQuote, onChange: setAutoQuote },
    { label: 'Direct Slack Alerts', description: 'Send anomalies to #production-floor', checked: slack, onChange: setSlack },
  ];

  return (
    <div className="glass-solid rounded-2xl p-6">
      <h3 className="mb-6 text-lg font-semibold text-forge-primary">Operational Guardrails</h3>
      <div className="space-y-5">
        {toggles.map((t) => (
          <div key={t.label} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-forge-primary">{t.label}</p>
              <p className="text-xs text-forge-hint">{t.description}</p>
            </div>
            <Toggle checked={t.checked} onChange={t.onChange} />
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-forge-divider pt-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-forge-secondary">Confidence Threshold</p>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={50}
            max={100}
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            className="flex-1 accent-forge-primary"
          />
          <span className="text-sm font-semibold text-forge-primary">{threshold}%</span>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create PerformanceAnalytics**

Accuracy line chart + precision/latency stats below.

```tsx
'use client';

import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';
import { performanceChartData, agentConfigDefaults } from '@/lib/mock-data';

export function PerformanceAnalytics() {
  return (
    <div className="glass-solid rounded-2xl p-6">
      <h3 className="mb-2 text-lg font-semibold text-forge-primary">Performance Analytics</h3>
      <p className="mb-4 text-xs text-forge-hint">Accuracy over last 48h</p>
      <ResponsiveContainer width="100%" height={140}>
        <AreaChart data={performanceChartData}>
          <defs>
            <linearGradient id="perfFillConfig" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C9CB4" stopOpacity={0.12} />
              <stop offset="100%" stopColor="#7C9CB4" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#A0A0A0', fontSize: 10 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#7C9CB4"
            strokeWidth={1.5}
            fill="url(#perfFillConfig)"
            dot={{ fill: '#7C9CB4', r: 3, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 flex justify-between border-t border-forge-divider pt-4">
        <div>
          <p className="text-2xl font-semibold text-forge-primary">{agentConfigDefaults.currentPrecision}</p>
          <p className="text-xs text-forge-hint">Current Precision</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold text-forge-primary">{agentConfigDefaults.avgLatency}</p>
          <p className="text-xs text-forge-hint">Avg Latency</p>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Assemble Agent Configuration page**

```tsx
import { PageHeader } from '@/components/PageHeader';
import { ConfigForm } from '@/components/agents/ConfigForm';
import { Guardrails } from '@/components/agents/Guardrails';
import { PerformanceAnalytics } from '@/components/agents/PerformanceAnalytics';
import { agentConfigDefaults } from '@/lib/mock-data';
import { FileText, Database, Plus } from 'lucide-react';

const dbIcons: Record<string, React.ElementType> = { FileText, Database };

export default function AgentConfigPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-forge-secondary">
        <a href="/agents" className="hover:text-forge-primary transition-colors">Agents</a>
        <span className="text-forge-hint">&gt;</span>
        <span className="text-forge-primary font-medium">{agentConfigDefaults.name}</span>
      </div>

      <PageHeader title="Agent Configuration" subtitle="">
        <button className="text-sm text-forge-secondary hover:text-forge-primary transition-colors">
          Discard
        </button>
        <button className="rounded-xl bg-forge-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
          Deploy Agent
        </button>
      </PageHeader>

      <div className="grid grid-cols-[1fr_380px] gap-6">
        {/* Left */}
        <div className="space-y-6">
          <ConfigForm />
          {/* Knowledge & Data Access */}
          <div className="glass-solid rounded-2xl p-6">
            <h3 className="mb-4 text-lg font-semibold text-forge-primary">Knowledge & Data Access</h3>
            <p className="mb-4 text-xs font-medium text-forge-secondary">Connected Databases</p>
            <div className="space-y-3">
              {agentConfigDefaults.connectedDatabases.map((db) => {
                const Icon = dbIcons[db.icon] || FileText;
                return (
                  <div
                    key={db.name}
                    className="flex items-center gap-3 rounded-xl bg-forge-primary/[0.04] px-4 py-3"
                  >
                    <Icon className="h-4 w-4 text-forge-secondary" />
                    <span className="text-sm text-forge-primary">{db.name}</span>
                    <div className="ml-auto h-2 w-2 rounded-full bg-forge-success" />
                  </div>
                );
              })}
            </div>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-forge-divider py-3 text-sm text-forge-secondary transition-colors hover:border-forge-primary/20 hover:text-forge-primary">
              <Plus className="h-4 w-4" />
              Add Knowledge Source
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <Guardrails />
          <PerformanceAnalytics />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Verify page**

Run: `pnpm dev`, navigate to `/agents/sa1`.
Expected: Full agent configuration page with form, guardrails, and analytics.

- [ ] **Step 6: Commit**

```bash
git add components/agents/ConfigForm.tsx components/agents/Guardrails.tsx components/agents/PerformanceAnalytics.tsx app/(dashboard)/agents/\\[id\\]/page.tsx
git commit -m "feat: implement Agent Configuration detail page"
```

---

### Task 13: Settings & Profile — Full Page

**Files:**
- Create: `app/(dashboard)/settings/page.tsx`
- Create: `components/settings/ProfileForm.tsx`
- Create: `components/settings/AiSettings.tsx`
- Create: `components/settings/SecuritySection.tsx`

- [ ] **Step 1: Create ProfileForm (client component)**

Profile avatar, Change Photo button, and 4 form fields (Full Name, Work Email, Role, Department).

```tsx
'use client';

import { useState } from 'react';
import { userProfile } from '@/lib/mock-data';

export function ProfileForm() {
  const [form, setForm] = useState(userProfile);

  const fields = [
    { label: 'FULL NAME', key: 'fullName' as const, half: true },
    { label: 'WORK EMAIL', key: 'email' as const, half: true },
    { label: 'ROLE', key: 'role' as const, half: true },
    { label: 'DEPARTMENT', key: 'department' as const, half: true },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-forge-primary">Profile Details</h2>
      <p className="mt-0.5 text-sm text-forge-secondary">Your personal information and identity.</p>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forge-primary text-lg font-semibold text-white">
          {form.initials}
        </div>
        <button className="rounded-xl border border-forge-divider px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]">
          Change Photo
        </button>
        <span className="text-xs text-forge-hint">JPG or PNG. Max 1MB.</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-forge-secondary">
              {f.label}
            </label>
            <input
              type="text"
              value={form[f.key]}
              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
              className="w-full rounded-xl border border-forge-divider bg-white px-4 py-3 text-sm text-forge-primary outline-none transition-colors focus:border-forge-accent-blue"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create AiSettings (client component)**

3 toggle switches + connected repositories chips.

```tsx
'use client';

import { useState } from 'react';
import { aiSettings, connectedRepositories } from '@/lib/mock-data';
import { Link as LinkIcon, Folder, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn(
        'relative h-6 w-11 rounded-full transition-colors',
        checked ? 'bg-forge-primary' : 'bg-black/10',
      )}
    >
      <div
        className={cn(
          'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform',
          checked ? 'translate-x-[22px]' : 'translate-x-0.5',
        )}
      />
    </button>
  );
}

const repoIcons: Record<string, React.ElementType> = { Link: LinkIcon, Folder };

export function AiSettings() {
  const [docSync, setDocSync] = useState(aiSettings.realTimeDocSync);
  const [autonomy, setAutonomy] = useState(aiSettings.agentAutonomy);
  const [verbosity, setVerbosity] = useState(aiSettings.technicalVerbosity);

  const toggles = [
    { label: 'Real-time Doc Sync', desc: 'Automatically index new technical manuals and PDFs.', checked: docSync, onChange: setDocSync },
    { label: 'Agent Autonomy', desc: 'Allow agents to initiate quoting drafts without approval.', checked: autonomy, onChange: setAutonomy },
    { label: 'Technical Verbosity', desc: 'AI responses will include deep engineering specifications.', checked: verbosity, onChange: setVerbosity },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-forge-primary">AI & Knowledge Base</h2>
      <p className="mt-0.5 text-sm text-forge-secondary">Control how agents access company documentation.</p>

      <div className="mt-6 space-y-5">
        {toggles.map((t) => (
          <div key={t.label} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-forge-primary">{t.label}</p>
              <p className="text-xs text-forge-hint">{t.desc}</p>
            </div>
            <Toggle checked={t.checked} onChange={t.onChange} />
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-forge-divider pt-5">
        <p className="mb-3 text-xs font-medium text-forge-secondary">Connected Repositories</p>
        <div className="flex flex-wrap items-center gap-2">
          {connectedRepositories.map((repo) => {
            const Icon = repoIcons[repo.icon] || LinkIcon;
            return (
              <span key={repo.name} className="flex items-center gap-2 rounded-full border border-forge-divider bg-white px-4 py-2 text-sm text-forge-primary">
                <Icon className="h-3.5 w-3.5 text-forge-hint" />
                {repo.name}
              </span>
            );
          })}
          <button className="flex items-center gap-1.5 text-sm text-forge-secondary hover:text-forge-primary transition-colors">
            <Plus className="h-3.5 w-3.5" />
            Add Source
          </button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create SecuritySection**

Two items: Two-Factor Authentication (with Enable button), Data Residency (with migration link).

```tsx
export function SecuritySection() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-forge-primary">Security</h2>
      <p className="mt-0.5 text-sm text-forge-secondary">Protect your manufacturing data.</p>

      <div className="mt-6 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-forge-primary">Two-Factor Authentication</p>
            <p className="text-xs text-forge-hint">Recommended for all manager accounts.</p>
          </div>
          <button className="rounded-xl border border-forge-divider px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]">
            Enable
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-forge-primary">Data Residency</p>
            <p className="text-xs text-forge-hint">Current: Frankfurt, Germany (EU-Central-1)</p>
          </div>
          <button className="text-sm text-forge-secondary hover:text-forge-primary transition-colors">
            Request Migration
          </button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Assemble Settings page**

```tsx
import { ProfileForm } from '@/components/settings/ProfileForm';
import { AiSettings } from '@/components/settings/AiSettings';
import { SecuritySection } from '@/components/settings/SecuritySection';

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-forge-primary">Settings</h1>
        <p className="mt-1 text-sm text-forge-secondary">
          Manage your manufacturing workspace and AI preferences.
        </p>
      </div>

      <ProfileForm />

      <div className="border-t border-forge-divider" />
      <AiSettings />

      <div className="border-t border-forge-divider" />
      <SecuritySection />

      {/* Footer Actions */}
      <div className="flex items-center justify-end gap-4 border-t border-forge-divider pt-6">
        <button className="text-sm text-forge-secondary hover:text-forge-primary transition-colors">
          Discard Changes
        </button>
        <button className="rounded-xl bg-forge-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
          Save Configuration
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Verify page**

Run: `pnpm dev`, navigate to `/settings`.
Expected: Full settings page with profile form, AI toggles, and security section.

- [ ] **Step 6: Commit**

```bash
git add components/settings/ app/(dashboard)/settings/page.tsx
git commit -m "feat: implement Settings & Profile page"
```

---

## Chunk 5: Final Polish & Build Verification

### Task 14: Build Verification & Final Fixes

- [ ] **Step 1: Run typecheck**

Run: `pnpm typecheck`
Expected: No TypeScript errors

- [ ] **Step 2: Run Biome check**

Run: `pnpm check:fix`
Expected: All auto-fixable issues resolved

- [ ] **Step 3: Run production build**

Run: `pnpm build`
Expected: All 7 pages build successfully

- [ ] **Step 4: Navigate through all pages**

Run: `pnpm dev` and manually verify:
1. `/insights` — KPI cards, charts, intelligence brief
2. `/quoting` — Stats, table, AI banner
3. `/knowledge-base` — Chat interface works, source cards, recent queries
4. `/documents` — Pinned docs, file table, pagination
5. `/agents` — Agent cards (clickable to config), activity feed, chart
6. `/agents/sa1` — Config form, guardrails, analytics
7. `/settings` — Profile form, toggles, security

- [ ] **Step 5: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve build and styling issues from verification pass"
```

---
