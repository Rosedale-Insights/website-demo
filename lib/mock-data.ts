export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export const documents = [
  { id: '1', name: 'CNC Machine Operating Manual', type: 'pdf', size: '2.4 MB', folder: 'Operations' },
  { id: '2', name: 'Quality Control Checklist', type: 'pdf', size: '840 KB', folder: 'Operations' },
  { id: '3', name: 'Safety Protocols 2024', type: 'pdf', size: '1.1 MB', folder: 'Operations' },
  { id: '4', name: 'Customer Onboarding Guide', type: 'docx', size: '520 KB', folder: 'Sales' },
  { id: '5', name: 'Pricing Matrix Q1 2024', type: 'xlsx', size: '380 KB', folder: 'Sales' },
  { id: '6', name: 'Quoting Procedures', type: 'pdf', size: '640 KB', folder: 'Sales' },
  { id: '7', name: 'Employee Handbook', type: 'pdf', size: '3.2 MB', folder: 'HR' },
  { id: '8', name: 'Benefits Overview', type: 'docx', size: '290 KB', folder: 'HR' },
  { id: '9', name: 'Material Specifications', type: 'pdf', size: '1.8 MB', folder: 'Engineering' },
  { id: '10', name: 'Tolerance Standards', type: 'pdf', size: '950 KB', folder: 'Engineering' },
]

export const initialChatMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Welcome to Rosedale AI. I have access to **10 indexed documents** across Operations, Sales, HR, and Engineering.\n\nAsk me anything about company procedures, specs, or policies.",
    timestamp: '9:00 AM',
  },
]

export const cannedResponses = [
  "Based on the **CNC Machine Operating Manual**, the recommended spindle speed for aluminum alloys is **8,000–12,000 RPM** depending on the tooling diameter.\n\n• For end mills under 1/2\", use the higher range\n• For face mills, stay closer to 8,000 RPM\n• Always verify with the **Tolerance Standards** document for your specific part.",
  "According to the **Quality Control Checklist**, every batch requires:\n\n• First-article inspection before full production\n• Dimensional verification at 10% sample rate\n• Surface finish measurement per **Material Specifications** doc\n• Sign-off from shift lead before shipping",
  "The **Pricing Matrix Q1 2024** shows our standard markup tiers:\n\n• Under $10K: 35% margin\n• $10K–$50K: 28% margin\n• Over $50K: custom quote required\n\nSee the **Quoting Procedures** document for volume discount guidelines.",
  "Per the **Employee Handbook**, PTO policy is:\n\n• 15 days for 0–3 years tenure\n• 20 days for 3–7 years\n• 25 days for 7+ years\n\nAll requests go through the HR portal. The **Benefits Overview** has details on carryover limits.",
  "The **Safety Protocols 2024** document requires:\n\n• PPE check before entering any machining area\n• Lockout/tagout procedures for all maintenance\n• Incident reporting within 24 hours\n• Monthly safety audits by floor supervisors",
]

export const recentActivity = [
  {
    id: 1,
    type: 'agent',
    description: 'Scheduling Agent rescheduled Job #4892 to avoid machine conflict on Line 3',
    timestamp: '12 minutes ago',
  },
  {
    id: 2,
    type: 'quote',
    description: 'Quote QT-2024-0892 sent to Apex Manufacturing — $142,500 for CNC housing assembly',
    timestamp: '34 minutes ago',
  },
  {
    id: 3,
    type: 'delivery',
    description: 'VIP order #4710 for Northwind Industries marked as shipped — on-time',
    timestamp: '1 hour ago',
  },
  {
    id: 4,
    type: 'agent',
    description: 'Quality Agent flagged tolerance deviation on Part #HX-2290, routed for inspection',
    timestamp: '2 hours ago',
  },
  {
    id: 5,
    type: 'system',
    description: 'Nightly ERP sync completed — 23 new orders imported, 8 status updates applied',
    timestamp: '6 hours ago',
  },
]

/* ── Quoting ─────────────────────────────────────────── */

export const quoteLineItems = [
  { partNumber: 'HX-2290', description: 'Hydraulic Housing Assembly', material: '4140 Steel', qty: 24, unitPrice: 1850 },
  { partNumber: 'FLG-440', description: 'Precision Flange Adapter', material: '316 SS', qty: 48, unitPrice: 420 },
  { partNumber: 'SHF-112', description: 'Drive Shaft — Custom Length', material: '4340 Steel', qty: 12, unitPrice: 2200 },
  { partNumber: 'BRK-895', description: 'Mounting Bracket Kit', material: 'A36 Steel', qty: 96, unitPrice: 185 },
  { partNumber: 'VLV-220', description: 'Gate Valve Body (8")', material: 'CF8M', qty: 8, unitPrice: 3400 },
  { partNumber: 'PIN-067', description: 'Dowel Pin Set (12 pc)', material: 'Tool Steel', qty: 120, unitPrice: 45 },
]

/* ── Agents ──────────────────────────────────────────── */

export const agents = [
  {
    id: 'a1',
    name: 'Material Tracker',
    description: 'Monitors raw material inventory levels and auto-generates POs when stock drops below safety thresholds.',
    icon: 'Search',
    status: 'Active',
    triggerType: 'Schedule',
    lastRun: '2h ago',
    runsToday: 4,
  },
  {
    id: 'a2',
    name: 'Delivery Monitor',
    description: 'Tracks all in-transit shipments and flags delivery exceptions or delays before they impact production.',
    icon: 'Truck',
    status: 'Active',
    triggerType: 'Event',
    lastRun: '18m ago',
    runsToday: 12,
  },
  {
    id: 'a3',
    name: 'Quote Optimizer',
    description: 'Analyzes historical quoting data to recommend optimal pricing based on material costs and margins.',
    icon: 'DollarSign',
    status: 'Active',
    triggerType: 'Manual',
    lastRun: '1d ago',
    runsToday: 0,
  },
  {
    id: 'a4',
    name: 'Quality Sentinel',
    description: 'Runs continuous inspection analysis on production metrics, flagging drift before tolerance failures occur.',
    icon: 'Shield',
    status: 'Active',
    triggerType: 'Schedule',
    lastRun: '4h ago',
    runsToday: 3,
  },
  {
    id: 'a5',
    name: 'Capacity Planner',
    description: 'Forecasts shop floor utilization and identifies scheduling conflicts across work centers.',
    icon: 'BarChart',
    status: 'Paused',
    triggerType: 'Schedule',
    lastRun: '3d ago',
    runsToday: 0,
  },
  {
    id: 'a6',
    name: 'Customer Liaison',
    description: 'Generates weekly status digests for VIP customers and drafts proactive delay notifications.',
    icon: 'MessageSquare',
    status: 'Active',
    triggerType: 'Schedule',
    lastRun: '6h ago',
    runsToday: 2,
  },
]

/* ── Insights ────────────────────────────────────────── */

export const pipelineStats = [
  { title: 'Total VIP Jobs', value: '38', subtitle: '6 added this week' },
  { title: 'On-Time Rate', value: '76%', subtitle: 'Target: 90%' },
  { title: 'Avg Lead Time', value: '4.2 wks', subtitle: '-0.3 vs last month' },
  { title: 'Revenue at Risk', value: '$340K', subtitle: '3 past-due orders' },
]

export const pipelineStatusCounts = [
  { label: 'Engineering', count: 5 },
  { label: 'Awaiting Material', count: 3 },
  { label: 'Manufacturing', count: 12 },
  { label: 'QC / Inspection', count: 4 },
  { label: 'Shipping', count: 6 },
  { label: 'Complete', count: 5 },
  { label: 'On Hold', count: 3 },
]

export const pastDueJobs = [
  { id: 'VIP-4801', customer: 'Northvane Aero', contractDate: '02/28/2026', leadTime: '6 wks', status: 'Past Due', progress: 65, remaining: 8 },
  { id: 'VIP-4812', customer: 'Trident Metalworks', contractDate: '03/04/2026', leadTime: '4 wks', status: 'Past Due', progress: 40, remaining: 14 },
  { id: 'VIP-4819', customer: 'Cascade Heavy Eng.', contractDate: '03/08/2026', leadTime: '3 wks', status: 'Past Due', progress: 0, remaining: 24 },
]

export const priorityJobs = [
  { id: 'VIP-4801', customer: 'Northvane Aero', received: '01/15/26', entered: '01/18/26', contractDate: '02/28/26', leadTime: 6, scheduledShop: '01/22/26', dateToShop: '01/25/26', category: 'A', status: 'ZEA', progress: 65, remaining: 8 },
  { id: 'VIP-4805', customer: 'Meridian Process', received: '01/20/26', entered: '01/22/26', contractDate: '03/14/26', leadTime: 8, scheduledShop: '01/28/26', dateToShop: '02/01/26', category: 'A', status: 'Manufacturing', progress: 82, remaining: 4 },
  { id: 'VIP-4812', customer: 'Trident Metalworks', received: '02/01/26', entered: '02/03/26', contractDate: '03/04/26', leadTime: 4, scheduledShop: '02/10/26', dateToShop: '02/12/26', category: 'B', status: 'HL', progress: 40, remaining: 14 },
  { id: 'VIP-4815', customer: 'Halvorsen Fab.', received: '02/05/26', entered: '02/07/26', contractDate: '03/20/26', leadTime: 6, scheduledShop: '02/14/26', dateToShop: '02/17/26', category: 'A', status: 'On Track', progress: 55, remaining: 10 },
  { id: 'VIP-4819', customer: 'Cascade Heavy Eng.', received: '02/10/26', entered: '02/12/26', contractDate: '03/08/26', leadTime: 3, scheduledShop: '02/18/26', dateToShop: '02/20/26', category: 'C', status: 'WG7', progress: 0, remaining: 24 },
  { id: 'VIP-4822', customer: 'Redline Precision', received: '02/14/26', entered: '02/16/26', contractDate: '03/28/26', leadTime: 5, scheduledShop: '02/22/26', dateToShop: '02/25/26', category: 'A', status: 'Manufacturing', progress: 30, remaining: 16 },
  { id: 'VIP-4825', customer: 'Summit Alloys', received: '02/18/26', entered: '02/20/26', contractDate: '04/02/26', leadTime: 6, scheduledShop: '02/26/26', dateToShop: '03/01/26', category: 'B', status: 'On Track', progress: 15, remaining: 20 },
  { id: 'VIP-4830', customer: 'Northvane Aero', received: '02/22/26', entered: '02/24/26', contractDate: '03/22/26', leadTime: 4, scheduledShop: '03/02/26', dateToShop: '03/04/26', category: 'A', status: 'Complete', progress: 100, remaining: 0 },
]

export const deliveryBriefPoints = [
  "**3 past-due VIP jobs** require immediate attention. VIP-4819 (Cascade Heavy Eng.) has zero progress with a contract date already passed — escalate to production manager.",
  "VIP-4805 for Meridian Process is at **82% completion** and on track for the Mar 14 contract date, but the remaining 4 units need QC signoff by end of day.",
  "**On-time delivery rate has dropped to 76%**, down from 84% last month. Primary driver: material delays on 316 SS affecting 3 jobs in the pipeline.",
  "Recommendation: Prioritize VIP-4801 (Northvane Aero) and VIP-4812 (Trident Metalworks) for overtime scheduling this week to recover delivery timeline.",
]

/* ── Customer Portal ─────────────────────────────────── */

export const customerProjects = [
  {
    id: 'cp1',
    name: 'Hydraulic Manifold Assembly — Phase 2',
    status: 'In Progress',
    progress: 72,
    lastUpdate: 'Mar 13, 2026',
    expectedDelivery: 'Mar 28, 2026',
    updateDescription: 'Machining complete on 18 of 25 units. QC inspection passed on first batch. On schedule for delivery.',
  },
  {
    id: 'cp2',
    name: 'Custom Flange Set — PO #8891',
    status: 'Complete',
    progress: 100,
    lastUpdate: 'Mar 12, 2026',
    expectedDelivery: 'Mar 12, 2026',
    updateDescription: 'All 48 flanges shipped via FedEx Freight. Tracking: 7892-4401-2938. Estimated arrival: Mar 15.',
  },
  {
    id: 'cp3',
    name: 'Pressure Vessel Internals — RFQ Response',
    status: 'Pending Review',
    progress: 30,
    lastUpdate: 'Mar 11, 2026',
    expectedDelivery: 'Apr 15, 2026',
    updateDescription: 'Engineering review in progress. Material availability confirmed for 316L SS. Quote will be ready by Mar 18.',
  },
  {
    id: 'cp4',
    name: 'Drive Shaft Replacement Set',
    status: 'In Progress',
    progress: 45,
    lastUpdate: 'Mar 10, 2026',
    expectedDelivery: 'Apr 02, 2026',
    updateDescription: 'Raw material received and cut to length. CNC rough machining scheduled for this week.',
  },
  {
    id: 'cp5',
    name: 'Valve Body Rebuild Kit',
    status: 'On Hold',
    progress: 15,
    lastUpdate: 'Mar 08, 2026',
    expectedDelivery: 'TBD',
    updateDescription: 'Paused pending customer approval on revised material specification. Awaiting response from procurement team.',
  },
]

/* ── Integrations ────────────────────────────────────── */

export const integrations = [
  {
    id: 'i1',
    name: 'Epicor ERP',
    description: 'Two-way sync for jobs, inventory levels, purchase orders, and shipping data.',
    connected: true,
    lastSync: '2 min ago',
    category: 'ERP',
  },
  {
    id: 'i2',
    name: 'Google Workspace',
    description: 'Access Drive documents, Sheets data, and Gmail for AI knowledge base indexing.',
    connected: true,
    lastSync: '15 min ago',
    category: 'Productivity',
  },
  {
    id: 'i3',
    name: 'QuickBooks Online',
    description: 'Sync invoices, payments, and customer billing data for quoting accuracy.',
    connected: true,
    lastSync: '1 hr ago',
    category: 'Finance',
  },
  {
    id: 'i4',
    name: 'Salesforce',
    description: 'CRM integration for customer data, opportunity tracking, and pipeline management.',
    connected: false,
    lastSync: '',
    category: 'CRM',
  },
  {
    id: 'i5',
    name: 'Slack',
    description: 'Real-time notifications for agent alerts, delivery updates, and team collaboration.',
    connected: false,
    lastSync: '',
    category: 'Communication',
  },
  {
    id: 'i6',
    name: 'Power BI',
    description: 'Advanced analytics dashboards with production metrics and executive KPI reporting.',
    connected: false,
    lastSync: '',
    category: 'Analytics',
  },
]

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
    content: 'Based on the Internal Metallurgy Handbook (v4.2), A36 structural steel typically does not require heat treatment for standard applications. However, for stress-relieving in heavy weldments, the following protocol is specified:\n\n1. Heating Rate: Do not exceed 400\u00b0F per hour.\n2. Soak Temperature: 1100\u00b0F - 1250\u00b0F.\n3. Soak Time: 1 hour per inch of thickness.\n4. Cooling: Furnace cool to 600\u00b0F before air cooling.',
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
  { day: 'T2', value: 94 },
  { day: 'F', value: 95 },
  { day: 'S', value: 94 },
  { day: 'S2', value: 95 },
]
