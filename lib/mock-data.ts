export type ChatMessage = {
	id: string;
	role: 'user' | 'assistant';
	content: string;
	timestamp: string;
};

export const documents = [
	{
		id: '1',
		name: 'CNC Machine Operating Manual',
		type: 'pdf',
		size: '2.4 MB',
		folder: 'Operations',
	},
	{ id: '2', name: 'Quality Control Checklist', type: 'pdf', size: '840 KB', folder: 'Operations' },
	{ id: '3', name: 'Safety Protocols 2024', type: 'pdf', size: '1.1 MB', folder: 'Operations' },
	{ id: '4', name: 'Customer Onboarding Guide', type: 'docx', size: '520 KB', folder: 'Sales' },
	{ id: '5', name: 'Pricing Matrix Q1 2024', type: 'xlsx', size: '380 KB', folder: 'Sales' },
	{ id: '6', name: 'Quoting Procedures', type: 'pdf', size: '640 KB', folder: 'Sales' },
	{ id: '7', name: 'Employee Handbook', type: 'pdf', size: '3.2 MB', folder: 'HR' },
	{ id: '8', name: 'Benefits Overview', type: 'docx', size: '290 KB', folder: 'HR' },
	{ id: '9', name: 'Material Specifications', type: 'pdf', size: '1.8 MB', folder: 'Engineering' },
	{ id: '10', name: 'Tolerance Standards', type: 'pdf', size: '950 KB', folder: 'Engineering' },
];

export const initialChatMessages: ChatMessage[] = [
	{
		id: '1',
		role: 'assistant',
		content:
			'Welcome to Rosedale AI. I have access to **10 indexed documents** across Operations, Sales, HR, and Engineering.\n\nAsk me anything about company procedures, specs, or policies.',
		timestamp: '9:00 AM',
	},
];

export const cannedResponses = [
	'According to the **Preventive Maintenance Schedule (Rev 7)**, the Mazak VTC-800 on Line 3 is due for a full spindle bearing inspection at **4,500 hours**. Current runtime is 4,312 hours.\n\n• Estimated time to threshold: ~8 operating days\n• Required parts: Angular contact bearing set (P/N MZ-SPB-4500)\n• Downtime estimate: 6–8 hours with pre-staged parts\n\nRecommendation: Schedule during the next planned weekend shutdown to avoid impacting WO-4821.',
	'The **Incoming Material Inspection Log** shows the Ti-6Al-4V bar stock for WO-4835 (Raytheon Avionics Housing) was received on March 10 and passed dimensional and chemical certification.\n\n• Mill cert: Heat #TI-2026-0441, meets AMS 4928 spec\n• Bar diameter: 4.500" ± 0.005" — within tolerance\n• Material status: Released to production, staged at raw stores Bay C\n\nNo holds or NCRs on this lot.',
	'Per the **Tooling Crib Inventory Report**, current insert stock for the Kennametal CNMG 432 carbide inserts is **24 units**.\n\n• Average consumption: 8 inserts/week on the 5-axis cells\n• Reorder point: 16 units (auto-PO triggers at this level)\n• Lead time from distributor: 3 business days\n\nYou have approximately 3 weeks of coverage. No action needed at this time.',
	'Based on the **First Article Inspection Report (FAIR)** for WO-4807 Hydraulic Manifold:\n\n• 14 of 16 critical dimensions passed on first measurement\n• Two features (bore ID and O-ring groove depth) required remeasurement after deburring\n• Both passed on second check — within ±0.001" tolerance\n• Surface finish: 32 Ra achieved vs. 63 Ra max callout\n\nFAIR is signed off. Job is cleared for full production run.',
	'The **ISO 9001:2015 Internal Audit Checklist** for Q1 2026 flagged two minor observations on the shop floor:\n\n1. Calibration sticker on Mitutoyo CMM #3 expires March 22 — schedule recalibration this week\n2. Two traveler cards on Line 2 were missing operator sign-off at Op 20\n\nNeither is a nonconformance, but both need corrective action documented before the external audit on April 8. See **Audit Finding Log AF-2026-011**.',
];

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
		description:
			'Quote QT-2024-0892 sent to Apex Manufacturing — $142,500 for CNC housing assembly',
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
		description:
			'Quality Agent flagged tolerance deviation on Part #HX-2290, routed for inspection',
		timestamp: '2 hours ago',
	},
	{
		id: 5,
		type: 'system',
		description: 'Nightly ERP sync completed — 23 new orders imported, 8 status updates applied',
		timestamp: '6 hours ago',
	},
];

/* ── Quoting ─────────────────────────────────────────── */

export const quoteLineItems = [
	{
		partNumber: 'HX-2290',
		description: 'Hydraulic Housing Assembly',
		material: '4140 Steel',
		qty: 24,
		unitPrice: 1850,
	},
	{
		partNumber: 'FLG-440',
		description: 'Precision Flange Adapter',
		material: '316 SS',
		qty: 48,
		unitPrice: 420,
	},
	{
		partNumber: 'SHF-112',
		description: 'Drive Shaft — Custom Length',
		material: '4340 Steel',
		qty: 12,
		unitPrice: 2200,
	},
	{
		partNumber: 'BRK-895',
		description: 'Mounting Bracket Kit',
		material: 'A36 Steel',
		qty: 96,
		unitPrice: 185,
	},
	{
		partNumber: 'VLV-220',
		description: 'Gate Valve Body (8")',
		material: 'CF8M',
		qty: 8,
		unitPrice: 3400,
	},
	{
		partNumber: 'PIN-067',
		description: 'Dowel Pin Set (12 pc)',
		material: 'Tool Steel',
		qty: 120,
		unitPrice: 45,
	},
];

/* ── Agents ──────────────────────────────────────────── */

export const agents = [
	{
		id: 'a1',
		name: 'Material Tracker',
		description:
			'Monitors raw material inventory levels and auto-generates POs when stock drops below safety thresholds.',
		icon: 'Search',
		status: 'Active',
		triggerType: 'Schedule',
		lastRun: '2h ago',
		runsToday: 4,
	},
	{
		id: 'a2',
		name: 'Delivery Monitor',
		description:
			'Tracks all in-transit shipments and flags delivery exceptions or delays before they impact production.',
		icon: 'Truck',
		status: 'Active',
		triggerType: 'Event',
		lastRun: '18m ago',
		runsToday: 12,
	},
	{
		id: 'a3',
		name: 'Quote Optimizer',
		description:
			'Analyzes historical quoting data to recommend optimal pricing based on material costs and margins.',
		icon: 'DollarSign',
		status: 'Active',
		triggerType: 'Manual',
		lastRun: '1d ago',
		runsToday: 0,
	},
	{
		id: 'a4',
		name: 'Quality Sentinel',
		description:
			'Runs continuous inspection analysis on production metrics, flagging drift before tolerance failures occur.',
		icon: 'Shield',
		status: 'Active',
		triggerType: 'Schedule',
		lastRun: '4h ago',
		runsToday: 3,
	},
	{
		id: 'a5',
		name: 'Capacity Planner',
		description:
			'Forecasts shop floor utilization and identifies scheduling conflicts across work centers.',
		icon: 'BarChart',
		status: 'Paused',
		triggerType: 'Schedule',
		lastRun: '3d ago',
		runsToday: 0,
	},
	{
		id: 'a6',
		name: 'Customer Liaison',
		description:
			'Generates weekly status digests for VIP customers and drafts proactive delay notifications.',
		icon: 'MessageSquare',
		status: 'Active',
		triggerType: 'Schedule',
		lastRun: '6h ago',
		runsToday: 2,
	},
];

/* ── Insights ────────────────────────────────────────── */

export const pipelineStats = [
	{ title: 'Total VIP Jobs', value: '38', subtitle: '6 added this week' },
	{ title: 'On-Time Rate', value: '76%', subtitle: 'Target: 90%' },
	{ title: 'Avg Lead Time', value: '4.2 wks', subtitle: '-0.3 vs last month' },
	{ title: 'Revenue at Risk', value: '$340K', subtitle: '3 past-due orders' },
];

export const pipelineStatusCounts = [
	{ label: 'Engineering', count: 5 },
	{ label: 'Awaiting Material', count: 3 },
	{ label: 'Manufacturing', count: 12 },
	{ label: 'QC / Inspection', count: 4 },
	{ label: 'Shipping', count: 6 },
	{ label: 'Complete', count: 5 },
	{ label: 'On Hold', count: 3 },
];

export const pastDueJobs = [
	{
		id: 'VIP-4801',
		customer: 'Northvane Aero',
		contractDate: '02/28/2026',
		leadTime: '6 wks',
		status: 'Past Due',
		progress: 65,
		remaining: 8,
	},
	{
		id: 'VIP-4812',
		customer: 'Trident Metalworks',
		contractDate: '03/04/2026',
		leadTime: '4 wks',
		status: 'Past Due',
		progress: 40,
		remaining: 14,
	},
	{
		id: 'VIP-4819',
		customer: 'Cascade Heavy Eng.',
		contractDate: '03/08/2026',
		leadTime: '3 wks',
		status: 'Past Due',
		progress: 0,
		remaining: 24,
	},
];

export const priorityJobs = [
	{
		id: 'VIP-4801',
		customer: 'Northvane Aero',
		received: '01/15/26',
		entered: '01/18/26',
		contractDate: '02/28/26',
		leadTime: 6,
		scheduledShop: '01/22/26',
		dateToShop: '01/25/26',
		category: 'A',
		status: 'ZEA',
		progress: 65,
		remaining: 8,
	},
	{
		id: 'VIP-4805',
		customer: 'Meridian Process',
		received: '01/20/26',
		entered: '01/22/26',
		contractDate: '03/14/26',
		leadTime: 8,
		scheduledShop: '01/28/26',
		dateToShop: '02/01/26',
		category: 'A',
		status: 'Manufacturing',
		progress: 82,
		remaining: 4,
	},
	{
		id: 'VIP-4812',
		customer: 'Trident Metalworks',
		received: '02/01/26',
		entered: '02/03/26',
		contractDate: '03/04/26',
		leadTime: 4,
		scheduledShop: '02/10/26',
		dateToShop: '02/12/26',
		category: 'B',
		status: 'HL',
		progress: 40,
		remaining: 14,
	},
	{
		id: 'VIP-4815',
		customer: 'Halvorsen Fab.',
		received: '02/05/26',
		entered: '02/07/26',
		contractDate: '03/20/26',
		leadTime: 6,
		scheduledShop: '02/14/26',
		dateToShop: '02/17/26',
		category: 'A',
		status: 'On Track',
		progress: 55,
		remaining: 10,
	},
	{
		id: 'VIP-4819',
		customer: 'Cascade Heavy Eng.',
		received: '02/10/26',
		entered: '02/12/26',
		contractDate: '03/08/26',
		leadTime: 3,
		scheduledShop: '02/18/26',
		dateToShop: '02/20/26',
		category: 'C',
		status: 'WG7',
		progress: 0,
		remaining: 24,
	},
	{
		id: 'VIP-4822',
		customer: 'Redline Precision',
		received: '02/14/26',
		entered: '02/16/26',
		contractDate: '03/28/26',
		leadTime: 5,
		scheduledShop: '02/22/26',
		dateToShop: '02/25/26',
		category: 'A',
		status: 'Manufacturing',
		progress: 30,
		remaining: 16,
	},
	{
		id: 'VIP-4825',
		customer: 'Summit Alloys',
		received: '02/18/26',
		entered: '02/20/26',
		contractDate: '04/02/26',
		leadTime: 6,
		scheduledShop: '02/26/26',
		dateToShop: '03/01/26',
		category: 'B',
		status: 'On Track',
		progress: 15,
		remaining: 20,
	},
	{
		id: 'VIP-4830',
		customer: 'Northvane Aero',
		received: '02/22/26',
		entered: '02/24/26',
		contractDate: '03/22/26',
		leadTime: 4,
		scheduledShop: '03/02/26',
		dateToShop: '03/04/26',
		category: 'A',
		status: 'Complete',
		progress: 100,
		remaining: 0,
	},
];

export const deliveryBriefPoints = [
	'**3 past-due VIP jobs** require immediate attention. VIP-4819 (Cascade Heavy Eng.) has zero progress with a contract date already passed — escalate to production manager.',
	'VIP-4805 for Meridian Process is at **82% completion** and on track for the Mar 14 contract date, but the remaining 4 units need QC signoff by end of day.',
	'**On-time delivery rate has dropped to 76%**, down from 84% last month. Primary driver: material delays on 316 SS affecting 3 jobs in the pipeline.',
	'Recommendation: Prioritize VIP-4801 (Northvane Aero) and VIP-4812 (Trident Metalworks) for overtime scheduling this week to recover delivery timeline.',
];

/* ── Customer Portal ─────────────────────────────────── */

export const customerProjects = [
	{
		id: 'cp1',
		name: 'Hydraulic Manifold Assembly — Phase 2',
		status: 'In Progress',
		progress: 72,
		lastUpdate: 'Mar 13, 2026',
		expectedDelivery: 'Mar 28, 2026',
		updateDescription:
			'Machining complete on 18 of 25 units. QC inspection passed on first batch. On schedule for delivery.',
	},
	{
		id: 'cp2',
		name: 'Custom Flange Set — PO #8891',
		status: 'Complete',
		progress: 100,
		lastUpdate: 'Mar 12, 2026',
		expectedDelivery: 'Mar 12, 2026',
		updateDescription:
			'All 48 flanges shipped via FedEx Freight. Tracking: 7892-4401-2938. Estimated arrival: Mar 15.',
	},
	{
		id: 'cp3',
		name: 'Pressure Vessel Internals — RFQ Response',
		status: 'Pending Review',
		progress: 30,
		lastUpdate: 'Mar 11, 2026',
		expectedDelivery: 'Apr 15, 2026',
		updateDescription:
			'Engineering review in progress. Material availability confirmed for 316L SS. Quote will be ready by Mar 18.',
	},
	{
		id: 'cp4',
		name: 'Drive Shaft Replacement Set',
		status: 'In Progress',
		progress: 45,
		lastUpdate: 'Mar 10, 2026',
		expectedDelivery: 'Apr 02, 2026',
		updateDescription:
			'Raw material received and cut to length. CNC rough machining scheduled for this week.',
	},
	{
		id: 'cp5',
		name: 'Valve Body Rebuild Kit',
		status: 'On Hold',
		progress: 15,
		lastUpdate: 'Mar 08, 2026',
		expectedDelivery: 'TBD',
		updateDescription:
			'Paused pending customer approval on revised material specification. Awaiting response from procurement team.',
	},
];

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
		description:
			'CRM integration for customer data, opportunity tracking, and pipeline management.',
		connected: false,
		lastSync: '',
		category: 'CRM',
	},
	{
		id: 'i5',
		name: 'Slack',
		description:
			'Real-time notifications for agent alerts, delivery updates, and team collaboration.',
		connected: false,
		lastSync: '',
		category: 'Communication',
	},
	{
		id: 'i6',
		name: 'Power BI',
		description:
			'Advanced analytics dashboards with production metrics and executive KPI reporting.',
		connected: false,
		lastSync: '',
		category: 'Analytics',
	},
];

/* ── Quoting Table (matches Quoting Tool design) ───────── */

export const quoteTableRows = [
	{
		client: 'Aerospace Dynamics',
		quoteId: 'QT-8821',
		project: 'Titanium Turbine Housing',
		date: 'Oct 24, 2023',
		amount: 12450,
		status: 'Draft' as const,
	},
	{
		client: 'Precision Medical',
		quoteId: 'QT-8819',
		project: 'Surgical Grade Implants',
		date: 'Oct 22, 2023',
		amount: 4200,
		status: 'Pending' as const,
	},
	{
		client: 'Global Robotics',
		quoteId: 'QT-8815',
		project: 'Custom Actuator Assembly',
		date: 'Oct 20, 2023',
		amount: 31000,
		status: 'Sent' as const,
	},
	{
		client: 'Automotive Core',
		quoteId: 'QT-8812',
		project: 'Engine Block Prototype',
		date: 'Oct 18, 2023',
		amount: 8900,
		status: 'Expired' as const,
	},
	{
		client: 'NextGen Energy',
		quoteId: 'QT-8804',
		project: 'Turbine Blade Refurbish',
		date: 'Oct 15, 2023',
		amount: 15600,
		status: 'Sent' as const,
	},
];

export const quotingStats = {
	draftQuotes: 12,
	pendingApproval: 8,
	conversionRate: '64.2%',
};

/* ── Document Library (matches Document Library design) ── */

export const documentStats = {
	totalStorage: '1.2 GB / 5 GB',
	lastSync: '14 minutes ago',
	lastSyncStatus: 'All systems operational',
	knowledgeIndex: '842 Docs',
	knowledgeIndexDelta: '+12 this week',
};

export const pinnedDocuments = [
	{
		id: 'pd1',
		name: 'ISO-9001 Complian...',
		icon: 'FileText',
		updated: '2d ago',
		tag: 'Standards',
		size: '4.2 MB',
	},
	{
		id: 'pd2',
		name: 'Assembly Line V3',
		icon: 'Cog',
		updated: '5h ago',
		tag: 'Manual',
		size: '12.8 MB',
	},
	{
		id: 'pd3',
		name: 'Material Safety Data',
		icon: 'ClipboardList',
		updated: '1w ago',
		tag: 'Safety',
		size: '2.1 MB',
	},
	{
		id: 'pd4',
		name: 'Chassis Blueprint',
		icon: 'PenTool',
		updated: '1d ago',
		tag: 'Design',
		size: '45.0 MB',
	},
];

export const documentTableRows = [
	{
		name: 'Q4 Production Report.pdf',
		type: 'PDF Document',
		date: 'Oct 12, 2023',
		size: '1.4 MB',
		status: 'Indexed',
	},
	{
		name: 'Component_List_Master.xlsx',
		type: 'Spreadsheet',
		date: 'Oct 10, 2023',
		size: '842 KB',
		status: 'Indexed',
	},
	{
		name: 'Factory_Floor_Plan_B1.dwg',
		type: 'CAD Drawing',
		date: 'Oct 08, 2023',
		size: '15.2 MB',
		status: 'Processing',
	},
	{
		name: 'Operator_Training_Manual.pdf',
		type: 'PDF Document',
		date: 'Sep 28, 2023',
		size: '8.5 MB',
		status: 'Indexed',
	},
	{
		name: 'Calibration_Log_2023.csv',
		type: 'Data File',
		date: 'Sep 25, 2023',
		size: '124 KB',
		status: 'Indexed',
	},
	{
		name: 'Vendor_Agreement_Final.pdf',
		type: 'PDF Document',
		date: 'Sep 20, 2023',
		size: '2.2 MB',
		status: 'Indexed',
	},
];

/* ── Agent Workspace (matches Agent Workspace design) ──── */

export const agentWorkspaceStats = {
	activeTasks: 24,
	efficiencyGain: '+18.4%',
	computeUsage: '62%',
};

export const specializedAgents = [
	{
		id: 'sa1',
		name: 'QC Inspector',
		description: 'Monitors batch consistency and flags thermal anomalies.',
		icon: 'ScanSearch',
		status: 'Scanning',
		statusColor: 'green' as const,
		currentTask: 'Batch #882-A',
	},
	{
		id: 'sa2',
		name: 'Supply Chain',
		description: 'Optimizes lead times and manages raw material procurement.',
		icon: 'Container',
		status: 'Active',
		statusColor: 'neutral' as const,
		currentTask: 'None',
	},
	{
		id: 'sa3',
		name: 'Maintenance',
		description: 'Predictive failure modeling for CNC and Lathe systems.',
		icon: 'Wrench',
		status: 'Analyzing',
		statusColor: 'amber' as const,
		currentTask: 'Vibration Data',
	},
	{
		id: 'sa4',
		name: 'Throughput',
		description: 'Real-time bottleneck identification in assembly line 4.',
		icon: 'Gauge',
		status: 'Optimizing',
		statusColor: 'green' as const,
		currentTask: 'Line 4 Shift B',
	},
];

export const agentLiveActivity = [
	{
		id: 'la1',
		text: 'QC Inspector flagged Batch #882-A',
		time: '2 mins ago',
		type: 'alert' as const,
	},
	{
		id: 'la2',
		text: 'Maintenance Agent updated CNC mo...',
		time: '14 mins ago',
		type: 'update' as const,
	},
	{
		id: 'la3',
		text: 'Throughput Agent resolved Line 4 del...',
		time: '28 mins ago',
		type: 'success' as const,
	},
	{ id: 'la4', text: 'Supply Chain Agent standby', time: '1 hr ago', type: 'idle' as const },
	{ id: 'la5', text: 'New training data ingested', time: '3 hrs ago', type: 'system' as const },
];

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
};

/* ── Home Page Data ──────────────────────────────── */

export const homeKpis = [
	{
		title: 'OEE Score',
		value: '84.2%',
		subtitle: 'Shop floor effectiveness',
		badge: '+2.4%',
		badgeColor: 'green' as const,
	},
	{
		title: 'On-Time Delivery',
		value: '91.2%',
		subtitle: '3 POs at risk this week',
		badge: '-1.1%',
		badgeColor: 'red' as const,
	},
	{
		title: 'Open Quotes',
		value: '$1.2M',
		subtitle: '4 pending review',
		badge: '+3',
		badgeColor: 'neutral' as const,
	},
	{
		title: 'Active Alerts',
		value: '7',
		subtitle: '2 critical, 5 warnings',
		badgeColor: 'neutral' as const,
	},
];

export const homeBriefItems = [
	{
		title: 'Seal Failure Risk on Line 4',
		description:
			'Hydraulic pressure trending 12% below threshold — 70% probability of seal failure within 48h. Maintenance ticket drafted for your approval.',
		action: 'Review Ticket',
	},
	{
		title: '2 Deliveries at Risk This Week',
		description:
			'Apex Industrial delayed due to port congestion. Pacific Fasteners unresponsive on PO-7198 — recommend dual-sourcing AN hardware.',
		action: 'View POs',
	},
	{
		title: 'Increase Margin on QT-8821 by 4%',
		description:
			'Based on current Titanium Grade 5 costs, target profitability requires a margin adjustment. Wilson Manufacturing quote ($142K) in review for 5 days.',
		action: 'Apply Suggestion',
	},
	{
		title: '3 Corrective Actions from ISO Audit',
		description:
			'Q1 ISO 9001 findings indexed. Documentation updates required in the quality management section.',
		action: 'View Findings',
	},
];

/* ── Knowledge Base Chat (matches Technical Knowledge design) ── */

export const knowledgeSources = [
	{ name: 'Safety Protocols', size: '2.4 MB', icon: 'FileText' },
	{ name: 'Material Specs', size: '14.8 MB', icon: 'Database' },
	{ name: 'Legacy Archive', size: '112 MB', icon: 'Archive' },
];

export const knowledgeChatMessages = [
	{
		id: 'kc1',
		role: 'user' as const,
		sender: 'You',
		content: 'When is the Mazak VTC-800 on Line 3 due for its next spindle service?',
	},
	{
		id: 'kc2',
		role: 'assistant' as const,
		sender: 'Forge Intelligence',
		content:
			'According to the Preventive Maintenance Schedule (Rev 7), the Mazak VTC-800 on Line 3 is due for a full spindle bearing inspection at 4,500 hours. Current runtime is 4,312 hours.\n\n• Estimated time to threshold: ~8 operating days\n• Required parts: Angular contact bearing set (P/N MZ-SPB-4500)\n• Downtime estimate: 6–8 hours with pre-staged parts\n\nRecommendation: Schedule during the next planned weekend shutdown to avoid impacting WO-4821.',
	},
	{
		id: 'kc3',
		role: 'user' as const,
		sender: 'You',
		content:
			"What's the material status on the Ti-6Al-4V stock for the Raytheon avionics housing job?",
	},
	{
		id: 'kc4',
		role: 'assistant' as const,
		sender: 'Forge Intelligence',
		content:
			'The Incoming Material Inspection Log shows the Ti-6Al-4V bar stock for WO-4835 (Raytheon Avionics Housing) was received on March 10 and passed dimensional and chemical certification.\n\n• Mill cert: Heat #TI-2026-0441, meets AMS 4928 spec\n• Bar diameter: 4.500" ± 0.005" — within tolerance\n• Material status: Released to production, staged at raw stores Bay C\n\nNo holds or NCRs on this lot.',
	},
	{
		id: 'kc5',
		role: 'user' as const,
		sender: 'You',
		content: 'Did the first article pass on WO-4807?',
	},
	{
		id: 'kc6',
		role: 'assistant' as const,
		sender: 'Forge Intelligence',
		content:
			'Based on the First Article Inspection Report (FAIR) for WO-4807 Hydraulic Manifold:\n\n• 14 of 16 critical dimensions passed on first measurement\n• Two features (bore ID and O-ring groove depth) required remeasurement after deburring\n• Both passed on second check — within ±0.001" tolerance\n• Surface finish: 32 Ra achieved vs. 63 Ra max callout\n\nFAIR is signed off. Job is cleared for full production run.',
	},
];

export const recentQueries = [
	'Mazak Line 3 spindle service',
	'Ti-6Al-4V material status',
	'WO-4807 first article',
	'ISO 9001 audit findings',
];

/* ── Settings (matches Settings & Profile design) ────── */

export const userProfile = {
	initials: 'JD',
	fullName: 'Julian Detmer',
	email: 'julian@forge-intel.com',
	role: 'Production Manager',
	department: 'Assembly Line B',
};

export const aiSettings = {
	realTimeDocSync: true,
	agentAutonomy: false,
	technicalVerbosity: true,
};

export const connectedRepositories = [
	{ name: 'ERP-Connector-v2', icon: 'Link' },
	{ name: 'Technical_Manuals_2024', icon: 'Folder' },
];

/* ── Performance Chart Data (reusable) ─────────────────── */

export const performanceChartData = [
	{ day: 'M', value: 91 },
	{ day: 'T', value: 93 },
	{ day: 'W', value: 92 },
	{ day: 'T2', value: 94 },
	{ day: 'F', value: 95 },
	{ day: 'S', value: 94 },
	{ day: 'S2', value: 95 },
];

/* ══════════════════════════════════════════════════════════
   DELIVERY INTELLIGENCE
   ══════════════════════════════════════════════════════════ */

export type PurchaseOrder = {
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
	status:
		| 'Created'
		| 'Acknowledged'
		| 'In Production'
		| 'Shipped'
		| 'In Transit'
		| 'Delivered'
		| 'Delayed';
	riskLevel: 'On Track' | 'Watch' | 'At Risk';
	riskScore: number;
	riskReason: string | null;
	carrier: string | null;
	trackingNumber: string | null;
	aiConfidence: number;
};

export type Supplier = {
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

export type DeliveryAlert = {
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

export const deliveryKpis = [
	{
		title: 'On-Time Delivery',
		value: '87.3%',
		subtitle: 'Supplier OTD rate',
		badge: '-3.1%',
		badgeColor: 'red' as const,
	},
	{
		title: 'At-Risk Orders',
		value: '7',
		subtitle: 'of 42 active POs',
		badge: '+2',
		badgeColor: 'red' as const,
	},
	{
		title: 'Avg Lead Variance',
		value: '+2.4d',
		subtitle: 'vs. promised date',
		badge: '-0.6d',
		badgeColor: 'green' as const,
	},
	{
		title: 'Revenue at Risk',
		value: '$482K',
		subtitle: '3 critical, 4 high',
		badge: '+$58K',
		badgeColor: 'red' as const,
	},
];

export const supplierOtdTrendData = [
	{ week: 'W1', otd: 92, target: 95 },
	{ week: 'W2', otd: 90, target: 95 },
	{ week: 'W3', otd: 93, target: 95 },
	{ week: 'W4', otd: 89, target: 95 },
	{ week: 'W5', otd: 86, target: 95 },
	{ week: 'W6', otd: 84, target: 95 },
	{ week: 'W7', otd: 87, target: 95 },
	{ week: 'W8', otd: 85, target: 95 },
	{ week: 'W9', otd: 88, target: 95 },
	{ week: 'W10', otd: 86, target: 95 },
	{ week: 'W11', otd: 89, target: 95 },
	{ week: 'W12', otd: 87, target: 95 },
];

export const delayRootCauseData = [
	{ name: 'Supplier Production', value: 34 },
	{ name: 'Shipping / Logistics', value: 24 },
	{ name: 'Material Unavailability', value: 19 },
	{ name: 'Quality Rejection', value: 13 },
	{ name: 'Customs / Documentation', value: 10 },
];

export const purchaseOrders: PurchaseOrder[] = [
	{
		poNumber: 'PO-7234',
		supplier: 'Acme Metals',
		supplierId: 'sup-01',
		material: '316 SS Bar Stock',
		partNumber: 'MAT-316SS-4.5',
		quantity: 12,
		unitCost: 840,
		totalCost: 10080,
		forWorkOrder: 'WO-4835',
		forCustomer: 'Raytheon',
		dateCreated: '2026-02-28',
		promisedDelivery: '2026-03-15',
		predictedDelivery: '2026-03-18',
		actualDelivery: null,
		status: 'In Transit',
		riskLevel: 'At Risk',
		riskScore: 62,
		riskReason: 'Customs hold — documentation review',
		carrier: 'FedEx Freight',
		trackingNumber: '7892-4401-2938',
		aiConfidence: 0.87,
	},
	{
		poNumber: 'PO-7198',
		supplier: 'Pacific Fasteners',
		supplierId: 'sup-02',
		material: 'AN Bolts & Hardware Kit',
		partNumber: 'HW-AN-KIT-24',
		quantity: 200,
		unitCost: 12,
		totalCost: 2400,
		forWorkOrder: 'WO-4821',
		forCustomer: 'Northrop Grumman',
		dateCreated: '2026-02-20',
		promisedDelivery: '2026-03-08',
		predictedDelivery: '2026-03-22',
		actualDelivery: null,
		status: 'Delayed',
		riskLevel: 'At Risk',
		riskScore: 89,
		riskReason: 'Supplier unresponsive for 52 hours',
		carrier: null,
		trackingNumber: null,
		aiConfidence: 0.72,
	},
	{
		poNumber: 'PO-7256',
		supplier: 'Summit Alloys',
		supplierId: 'sup-03',
		material: 'Ti-6Al-4V Bar Stock',
		partNumber: 'MAT-TI64-3.0',
		quantity: 8,
		unitCost: 2400,
		totalCost: 19200,
		forWorkOrder: 'WO-4842',
		forCustomer: 'GE Aerospace',
		dateCreated: '2026-03-02',
		promisedDelivery: '2026-03-18',
		predictedDelivery: '2026-03-24',
		actualDelivery: null,
		status: 'In Production',
		riskLevel: 'At Risk',
		riskScore: 78,
		riskReason: 'Supplier reliability score dropped 14 pts in 30 days',
		carrier: null,
		trackingNumber: null,
		aiConfidence: 0.65,
	},
	{
		poNumber: 'PO-7245',
		supplier: 'Midwest Steel Supply',
		supplierId: 'sup-04',
		material: '4140 Steel Plate',
		partNumber: 'MAT-4140-PL-1.5',
		quantity: 6,
		unitCost: 620,
		totalCost: 3720,
		forWorkOrder: 'WO-4850',
		forCustomer: 'Lockheed Martin',
		dateCreated: '2026-03-05',
		promisedDelivery: '2026-03-14',
		predictedDelivery: '2026-03-14',
		actualDelivery: null,
		status: 'Shipped',
		riskLevel: 'On Track',
		riskScore: 12,
		riskReason: null,
		carrier: 'ABF Freight',
		trackingNumber: '5501-2290-8841',
		aiConfidence: 0.96,
	},
	{
		poNumber: 'PO-7261',
		supplier: 'Kennametal',
		supplierId: 'sup-05',
		material: 'CNMG 432 Carbide Inserts',
		partNumber: 'TL-CNMG-432-KC',
		quantity: 48,
		unitCost: 18,
		totalCost: 864,
		forWorkOrder: 'WO-4835',
		forCustomer: 'Raytheon',
		dateCreated: '2026-03-08',
		promisedDelivery: '2026-03-12',
		predictedDelivery: '2026-03-11',
		actualDelivery: '2026-03-11',
		status: 'Delivered',
		riskLevel: 'On Track',
		riskScore: 0,
		riskReason: null,
		carrier: 'UPS Ground',
		trackingNumber: '1Z999AA10123456784',
		aiConfidence: 1.0,
	},
	{
		poNumber: 'PO-7270',
		supplier: 'Cascade Coatings',
		supplierId: 'sup-06',
		material: 'Type III Anodize Service',
		partNumber: 'SVC-ANOD-III',
		quantity: 24,
		unitCost: 90,
		totalCost: 2160,
		forWorkOrder: 'WO-4819',
		forCustomer: 'Honeywell',
		dateCreated: '2026-03-10',
		promisedDelivery: '2026-03-17',
		predictedDelivery: '2026-03-19',
		actualDelivery: null,
		status: 'In Production',
		riskLevel: 'Watch',
		riskScore: 38,
		riskReason: 'Vendor capacity tight at month-end',
		carrier: null,
		trackingNumber: null,
		aiConfidence: 0.81,
	},
	{
		poNumber: 'PO-7278',
		supplier: 'Acme Metals',
		supplierId: 'sup-01',
		material: '4340 Steel Round Bar',
		partNumber: 'MAT-4340-RB-2.0',
		quantity: 20,
		unitCost: 280,
		totalCost: 5600,
		forWorkOrder: 'WO-4807',
		forCustomer: 'Boeing Defense',
		dateCreated: '2026-03-01',
		promisedDelivery: '2026-03-10',
		predictedDelivery: '2026-03-10',
		actualDelivery: '2026-03-10',
		status: 'Delivered',
		riskLevel: 'On Track',
		riskScore: 0,
		riskReason: null,
		carrier: 'FedEx Freight',
		trackingNumber: '7892-4401-3102',
		aiConfidence: 1.0,
	},
	{
		poNumber: 'PO-7282',
		supplier: 'Summit Alloys',
		supplierId: 'sup-03',
		material: 'Inconel 718 Bar',
		partNumber: 'MAT-IN718-2.5',
		quantity: 4,
		unitCost: 3200,
		totalCost: 12800,
		forWorkOrder: 'WO-4842',
		forCustomer: 'GE Aerospace',
		dateCreated: '2026-03-06',
		promisedDelivery: '2026-03-20',
		predictedDelivery: '2026-03-23',
		actualDelivery: null,
		status: 'Acknowledged',
		riskLevel: 'At Risk',
		riskScore: 55,
		riskReason: 'Supplier historically 3 days late on Inconel',
		carrier: null,
		trackingNumber: null,
		aiConfidence: 0.74,
	},
];

export const suppliers: Supplier[] = [
	{
		id: 'sup-01',
		name: 'Acme Metals',
		location: 'Cleveland, OH',
		specialty: 'Stainless & alloy bar stock',
		reliabilityScore: 91,
		reliabilityTrend: 'stable',
		onTimeRate: 94.2,
		avgLeadTimeDays: 8,
		totalPOs: 142,
		activePOs: 3,
		trendData: [92, 94, 93, 95, 94, 93, 94, 94],
		riskLevel: 'Low',
	},
	{
		id: 'sup-02',
		name: 'Pacific Fasteners',
		location: 'Portland, OR',
		specialty: 'AN/MS hardware & fasteners',
		reliabilityScore: 58,
		reliabilityTrend: 'down',
		onTimeRate: 71.4,
		avgLeadTimeDays: 12,
		totalPOs: 89,
		activePOs: 2,
		trendData: [82, 78, 75, 74, 71, 68, 72, 71],
		riskLevel: 'High',
	},
	{
		id: 'sup-03',
		name: 'Summit Alloys',
		location: 'Houston, TX',
		specialty: 'Titanium & nickel alloys',
		reliabilityScore: 72,
		reliabilityTrend: 'down',
		onTimeRate: 82.1,
		avgLeadTimeDays: 14,
		totalPOs: 67,
		activePOs: 4,
		trendData: [90, 88, 86, 85, 83, 80, 82, 82],
		riskLevel: 'Medium',
	},
	{
		id: 'sup-04',
		name: 'Midwest Steel Supply',
		location: 'Chicago, IL',
		specialty: 'Carbon & alloy plate/sheet',
		reliabilityScore: 95,
		reliabilityTrend: 'up',
		onTimeRate: 96.8,
		avgLeadTimeDays: 5,
		totalPOs: 210,
		activePOs: 2,
		trendData: [95, 96, 96, 97, 96, 97, 97, 97],
		riskLevel: 'Low',
	},
	{
		id: 'sup-05',
		name: 'Kennametal',
		location: 'Latrobe, PA',
		specialty: 'Cutting tools & inserts',
		reliabilityScore: 98,
		reliabilityTrend: 'stable',
		onTimeRate: 99.1,
		avgLeadTimeDays: 3,
		totalPOs: 324,
		activePOs: 1,
		trendData: [99, 99, 98, 99, 99, 99, 99, 99],
		riskLevel: 'Low',
	},
	{
		id: 'sup-06',
		name: 'Cascade Coatings',
		location: 'Seattle, WA',
		specialty: 'Anodize, plating, coatings',
		reliabilityScore: 79,
		reliabilityTrend: 'stable',
		onTimeRate: 88.4,
		avgLeadTimeDays: 7,
		totalPOs: 118,
		activePOs: 2,
		trendData: [87, 89, 88, 86, 88, 90, 88, 88],
		riskLevel: 'Medium',
	},
];

export const deliveryAlerts: DeliveryAlert[] = [
	{
		id: 'da-1',
		timestamp: '12m ago',
		severity: 'critical',
		type: 'delay',
		title: 'PO-7198 — Supplier unresponsive',
		description:
			'Pacific Fasteners has not responded to PO-7198 for 52 hours. Historical pattern: silence precedes 2-week delay.',
		affectedWorkOrders: ['WO-4821'],
		suggestedAction: 'Escalate to vendor manager. Source AN bolts from alternate supplier.',
		status: 'new',
	},
	{
		id: 'da-2',
		timestamp: '34m ago',
		severity: 'high',
		type: 'logistics',
		title: 'PO-7234 — Customs hold',
		description:
			'FedEx Freight reports shipment held at customs for documentation review. Predicted 3-day delay.',
		affectedWorkOrders: ['WO-4835'],
		suggestedAction: 'Contact customs broker to expedite clearance.',
		status: 'acknowledged',
	},
	{
		id: 'da-3',
		timestamp: '1h ago',
		severity: 'high',
		type: 'supplier',
		title: 'Summit Alloys — Reliability declining',
		description:
			'Supplier reliability score dropped from 88 to 72 over past 30 days. 3 of last 5 deliveries were late.',
		affectedWorkOrders: ['WO-4842'],
		suggestedAction: 'Add backup supplier for Ti-6Al-4V and Inconel.',
		status: 'new',
	},
	{
		id: 'da-4',
		timestamp: '2h ago',
		severity: 'medium',
		type: 'logistics',
		title: 'I-70 corridor weather delay',
		description: 'Winter storm warning affecting 2 inbound shipments routed through Columbus, OH.',
		affectedWorkOrders: ['WO-4850'],
		suggestedAction: 'Monitor tracking. No action needed yet — buffer in schedule.',
		status: 'acknowledged',
	},
	{
		id: 'da-5',
		timestamp: '3h ago',
		severity: 'medium',
		type: 'delay',
		title: 'PO-7270 — Cascade Coatings capacity',
		description:
			'Vendor reports tight capacity at month-end. Anodize turnaround may slip from 5 to 7 days.',
		affectedWorkOrders: ['WO-4819'],
		suggestedAction: 'Request priority slot. Offer to consolidate with PO-7234 parts.',
		status: 'new',
	},
	{
		id: 'da-6',
		timestamp: '4h ago',
		severity: 'low',
		type: 'delay',
		title: 'PO-7261 — Delivered early',
		description:
			'Kennametal tooling inserts arrived 1 day ahead of schedule. Inventory updated: 24 → 48 units.',
		affectedWorkOrders: ['WO-4835'],
		suggestedAction: 'No action needed. Reorder point coverage extended to 6 weeks.',
		status: 'resolved',
	},
	{
		id: 'da-7',
		timestamp: '6h ago',
		severity: 'low',
		type: 'supplier',
		title: 'Cascade Coatings — Ship date confirmed',
		description: 'Vendor confirmed anodized parts for WO-4819 will ship March 17 as scheduled.',
		affectedWorkOrders: ['WO-4819'],
		suggestedAction: 'No action needed. On track.',
		status: 'resolved',
	},
];

export const deliveryBrief = {
	title: 'Delivery Risk Summary',
	description:
		'Three inbound material POs are delayed, affecting 4 customer work orders worth $482K in revenue. The primary bottleneck is titanium supply from Summit Alloys, whose reliability score has dropped 14 points in 30 days. Pacific Fasteners remains unresponsive on PO-7198 — recommend dual-sourcing AN hardware immediately. Midwest Steel Supply continues to outperform at 96.8% OTD; consider increasing allocation for 4140 plate.',
};

/* ══════════════════════════════════════════════════════════
   SHOP FLOOR MONITOR
   ══════════════════════════════════════════════════════════ */

export type Machine = {
	id: string;
	name: string;
	type: string;
	location: string;
	status: 'Active' | 'Stalled' | 'Setup' | 'Loading';
	currentJobId: string | null;
	currentOperator: string | null;
	healthScore: number;
	oee: { overall: number; availability: number; performance: number; quality: number } | null;
	shiftMetrics: { partsProduced: number; partsGoal: number; scrapCount: number } | null;
	maintenance: { lastService: string; nextScheduled: string; hoursToService: number };
	pctActive: number;
	pctStalled: number;
	pctSetup: number;
	pctLoading: number;
	productionProgress: number | null;
	remainingMinutes: number | null;
};

export type Operator = {
	id: string;
	name: string;
	initials: string;
	shift: 'Day' | 'Swing' | 'Night';
	role: string;
	certifications: { machine: string; level: 0 | 1 | 2 | 3 }[];
	currentMachine: string | null;
	overtimeHours: number;
};

export type MaintenanceEvent = {
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

export const shopFloorKpis = [
	{
		title: 'OEE',
		value: '84.2%',
		subtitle: 'Overall Equipment Effectiveness',
		badge: '+2.4%',
		badgeColor: 'green' as const,
	},
	{
		title: 'Utilization',
		value: '78.4%',
		subtitle: 'Machine capacity in use',
		badge: '+4.1%',
		badgeColor: 'green' as const,
	},
	{
		title: 'Active WOs',
		value: '14',
		subtitle: 'Work orders in progress',
		badge: '+3',
		badgeColor: 'neutral' as const,
	},
	{
		title: 'Shift Coverage',
		value: '92%',
		subtitle: 'Certified operator ratio',
		badge: '-2%',
		badgeColor: 'red' as const,
	},
];

export const machines: Machine[] = [
	{
		id: 'CNC-01',
		name: 'Mazak VTC-800/30',
		type: 'CNC Mill',
		location: 'Line 3, Bay A',
		status: 'Active',
		currentJobId: 'WO-4821',
		currentOperator: 'Marcus Chen',
		healthScore: 92,
		oee: { overall: 87.4, availability: 93.2, performance: 95.1, quality: 98.5 },
		shiftMetrics: { partsProduced: 142, partsGoal: 160, scrapCount: 2 },
		maintenance: { lastService: '2026-03-01', nextScheduled: '2026-03-22', hoursToService: 188 },
		pctActive: 82,
		pctStalled: 4,
		pctSetup: 8,
		pctLoading: 6,
		productionProgress: 74,
		remainingMinutes: 156,
	},
	{
		id: 'CNC-02',
		name: 'Haas VF-4SS',
		type: 'CNC Mill',
		location: 'Line 3, Bay B',
		status: 'Active',
		currentJobId: 'WO-4842',
		currentOperator: 'Sarah Torres',
		healthScore: 68,
		oee: { overall: 79.1, availability: 88.4, performance: 91.2, quality: 98.1 },
		shiftMetrics: { partsProduced: 98, partsGoal: 140, scrapCount: 5 },
		maintenance: { lastService: '2026-02-15', nextScheduled: '2026-03-18', hoursToService: 42 },
		pctActive: 88,
		pctStalled: 2,
		pctSetup: 5,
		pctLoading: 5,
		productionProgress: 91,
		remainingMinutes: 42,
	},
	{
		id: 'CNC-03',
		name: 'Haas VF-2',
		type: 'CNC Mill',
		location: 'Line 2, Bay A',
		status: 'Setup',
		currentJobId: null,
		currentOperator: 'Derek Okafor',
		healthScore: 95,
		oee: null,
		shiftMetrics: null,
		maintenance: { lastService: '2026-03-10', nextScheduled: '2026-04-10', hoursToService: 480 },
		pctActive: 76,
		pctStalled: 8,
		pctSetup: 10,
		pctLoading: 6,
		productionProgress: 58,
		remainingMinutes: 210,
	},
	{
		id: '5AX-01',
		name: 'DMG Mori DMU 50',
		type: '5-Axis Mill',
		location: 'Line 1, Bay A',
		status: 'Active',
		currentJobId: 'WO-4835',
		currentOperator: 'Marcus Chen',
		healthScore: 88,
		oee: { overall: 91.2, availability: 95.8, performance: 96.4, quality: 98.7 },
		shiftMetrics: { partsProduced: 4, partsGoal: 6, scrapCount: 0 },
		maintenance: { lastService: '2026-03-05', nextScheduled: '2026-03-28', hoursToService: 220 },
		pctActive: 71,
		pctStalled: 12,
		pctSetup: 9,
		pctLoading: 8,
		productionProgress: 45,
		remainingMinutes: 280,
	},
	{
		id: '5AX-02',
		name: 'Hermle C400',
		type: '5-Axis Mill',
		location: 'Line 1, Bay B',
		status: 'Stalled',
		currentJobId: null,
		currentOperator: null,
		healthScore: 34,
		oee: null,
		shiftMetrics: null,
		maintenance: { lastService: '2026-02-28', nextScheduled: '2026-03-16', hoursToService: 0 },
		pctActive: 0,
		pctStalled: 68,
		pctSetup: 18,
		pctLoading: 14,
		productionProgress: null,
		remainingMinutes: null,
	},
	{
		id: 'LAT-01',
		name: 'Okuma LB3000',
		type: 'CNC Lathe',
		location: 'Line 2, Bay C',
		status: 'Active',
		currentJobId: 'WO-4850',
		currentOperator: 'Sarah Torres',
		healthScore: 90,
		oee: { overall: 85.6, availability: 92.0, performance: 94.8, quality: 98.0 },
		shiftMetrics: { partsProduced: 36, partsGoal: 40, scrapCount: 1 },
		maintenance: { lastService: '2026-03-08', nextScheduled: '2026-04-05', hoursToService: 340 },
		pctActive: 84,
		pctStalled: 3,
		pctSetup: 7,
		pctLoading: 6,
		productionProgress: 82,
		remainingMinutes: 95,
	},
	{
		id: 'LAT-02',
		name: 'Doosan Puma 2600',
		type: 'CNC Lathe',
		location: 'Line 2, Bay D',
		status: 'Active',
		currentJobId: null,
		currentOperator: null,
		healthScore: 82,
		oee: null,
		shiftMetrics: null,
		maintenance: { lastService: '2026-03-02', nextScheduled: '2026-03-30', hoursToService: 260 },
		pctActive: 79,
		pctStalled: 6,
		pctSetup: 9,
		pctLoading: 6,
		productionProgress: 63,
		remainingMinutes: 184,
	},
	{
		id: 'LAS-01',
		name: 'Trumpf TruLaser 3030',
		type: 'Laser Cutter',
		location: 'Line 4, Bay A',
		status: 'Active',
		currentJobId: 'WO-4850',
		currentOperator: 'Lisa Pham',
		healthScore: 97,
		oee: { overall: 93.1, availability: 97.2, performance: 96.8, quality: 99.0 },
		shiftMetrics: { partsProduced: 58, partsGoal: 60, scrapCount: 0 },
		maintenance: { lastService: '2026-03-12', nextScheduled: '2026-04-12', hoursToService: 520 },
		pctActive: 91,
		pctStalled: 1,
		pctSetup: 4,
		pctLoading: 4,
		productionProgress: 96,
		remainingMinutes: 18,
	},
	{
		id: 'CMM-01',
		name: 'Zeiss Contura',
		type: 'CMM',
		location: 'QC Lab',
		status: 'Active',
		currentJobId: 'WO-4807',
		currentOperator: 'James Wilson',
		healthScore: 99,
		oee: null,
		shiftMetrics: { partsProduced: 12, partsGoal: 15, scrapCount: 0 },
		maintenance: { lastService: '2026-03-10', nextScheduled: '2026-06-10', hoursToService: 1800 },
		pctActive: 73,
		pctStalled: 5,
		pctSetup: 14,
		pctLoading: 8,
		productionProgress: 37,
		remainingMinutes: 312,
	},
	{
		id: 'HT-01',
		name: 'Lindberg Blue M',
		type: 'Heat Treat Oven',
		location: 'Heat Treat Bay',
		status: 'Active',
		currentJobId: 'WO-4835',
		currentOperator: null,
		healthScore: 76,
		oee: null,
		shiftMetrics: { partsProduced: 6, partsGoal: 6, scrapCount: 0 },
		maintenance: { lastService: '2026-02-20', nextScheduled: '2026-03-20', hoursToService: 48 },
		pctActive: 86,
		pctStalled: 3,
		pctSetup: 6,
		pctLoading: 5,
		productionProgress: 88,
		remainingMinutes: 62,
	},
	{
		id: 'GRN-01',
		name: 'Okamoto ACC-820',
		type: 'Surface Grinder',
		location: 'Line 4, Bay B',
		status: 'Active',
		currentJobId: null,
		currentOperator: null,
		healthScore: 91,
		oee: null,
		shiftMetrics: null,
		maintenance: { lastService: '2026-03-06', nextScheduled: '2026-04-06', hoursToService: 400 },
		pctActive: 80,
		pctStalled: 5,
		pctSetup: 8,
		pctLoading: 7,
		productionProgress: 55,
		remainingMinutes: 225,
	},
	{
		id: 'EDM-01',
		name: 'Sodick ALC600G',
		type: 'EDM Wire',
		location: 'Line 4, Bay C',
		status: 'Setup',
		currentJobId: null,
		currentOperator: null,
		healthScore: 45,
		oee: null,
		shiftMetrics: null,
		maintenance: { lastService: '2026-03-14', nextScheduled: '2026-03-16', hoursToService: 0 },
		pctActive: 0,
		pctStalled: 0,
		pctSetup: 72,
		pctLoading: 28,
		productionProgress: null,
		remainingMinutes: null,
	},
];

export const operators: Operator[] = [
	{
		id: 'OP-101',
		name: 'Marcus Chen',
		initials: 'MC',
		shift: 'Day',
		role: 'Lead Machinist',
		certifications: [
			{ machine: 'CNC Mill', level: 3 },
			{ machine: '5-Axis Mill', level: 3 },
			{ machine: 'CMM', level: 2 },
		],
		currentMachine: 'CNC-01',
		overtimeHours: 4.5,
	},
	{
		id: 'OP-102',
		name: 'Sarah Torres',
		initials: 'ST',
		shift: 'Day',
		role: 'Machinist',
		certifications: [
			{ machine: 'CNC Mill', level: 2 },
			{ machine: 'CNC Lathe', level: 3 },
		],
		currentMachine: 'LAT-01',
		overtimeHours: 8.0,
	},
	{
		id: 'OP-103',
		name: 'James Wilson',
		initials: 'JW',
		shift: 'Day',
		role: 'QC Inspector',
		certifications: [
			{ machine: 'CMM', level: 3 },
			{ machine: 'Surface Grinder', level: 1 },
		],
		currentMachine: 'CMM-01',
		overtimeHours: 2.0,
	},
	{
		id: 'OP-104',
		name: 'Ana Rivera',
		initials: 'AR',
		shift: 'Swing',
		role: 'Machinist',
		certifications: [
			{ machine: 'CNC Mill', level: 2 },
			{ machine: '5-Axis Mill', level: 1 },
		],
		currentMachine: null,
		overtimeHours: 0,
	},
	{
		id: 'OP-105',
		name: 'Derek Okafor',
		initials: 'DO',
		shift: 'Swing',
		role: 'Setup Technician',
		certifications: [
			{ machine: 'CNC Mill', level: 3 },
			{ machine: '5-Axis Mill', level: 2 },
			{ machine: 'CNC Lathe', level: 2 },
		],
		currentMachine: 'CNC-03',
		overtimeHours: 6.0,
	},
	{
		id: 'OP-106',
		name: 'Lisa Pham',
		initials: 'LP',
		shift: 'Swing',
		role: 'Machinist',
		certifications: [
			{ machine: 'Laser Cutter', level: 3 },
			{ machine: 'CNC Mill', level: 2 },
		],
		currentMachine: 'LAS-01',
		overtimeHours: 1.5,
	},
	{
		id: 'OP-107',
		name: 'Robert Martinez',
		initials: 'RM',
		shift: 'Night',
		role: 'Lead Machinist',
		certifications: [
			{ machine: 'CNC Mill', level: 3 },
			{ machine: '5-Axis Mill', level: 3 },
			{ machine: 'CNC Lathe', level: 2 },
		],
		currentMachine: null,
		overtimeHours: 10.5,
	},
	{
		id: 'OP-108',
		name: 'Karen Dubois',
		initials: 'KD',
		shift: 'Night',
		role: 'Machinist',
		certifications: [
			{ machine: 'CNC Mill', level: 2 },
			{ machine: 'Surface Grinder', level: 2 },
		],
		currentMachine: null,
		overtimeHours: 3.0,
	},
];

export const maintenanceEvents: MaintenanceEvent[] = [
	{
		id: 'MT-001',
		machineId: '5AX-02',
		machineName: 'Hermle C400',
		type: 'Corrective',
		status: 'In Progress',
		priority: 'Critical',
		description: 'Spindle motor replacement — bearing seizure detected',
		scheduledDate: '2026-03-16',
		aiGenerated: false,
	},
	{
		id: 'MT-002',
		machineId: 'CNC-02',
		machineName: 'Haas VF-4SS',
		type: 'Predictive',
		status: 'Scheduled',
		priority: 'High',
		description: 'Spindle bearing inspection — vibration trending high',
		scheduledDate: '2026-03-20',
		aiGenerated: true,
		confidenceScore: 87,
	},
	{
		id: 'MT-003',
		machineId: 'CNC-01',
		machineName: 'Mazak VTC-800/30',
		type: 'Preventive',
		status: 'Scheduled',
		priority: 'Medium',
		description: 'Scheduled spindle bearing inspection at 4,500 hours',
		scheduledDate: '2026-03-22',
		aiGenerated: false,
	},
	{
		id: 'MT-004',
		machineId: 'HT-01',
		machineName: 'Lindberg Blue M',
		type: 'Predictive',
		status: 'Scheduled',
		priority: 'Medium',
		description: 'Heating element degradation — output variance increasing',
		scheduledDate: '2026-03-20',
		aiGenerated: true,
		confidenceScore: 74,
	},
	{
		id: 'MT-005',
		machineId: 'EDM-01',
		machineName: 'Sodick ALC600G',
		type: 'Corrective',
		status: 'In Progress',
		priority: 'High',
		description: 'Wire guide replacement and realignment',
		scheduledDate: '2026-03-16',
		aiGenerated: false,
	},
	{
		id: 'MT-006',
		machineId: 'LAT-01',
		machineName: 'Okuma LB3000',
		type: 'Preventive',
		status: 'Complete',
		priority: 'Low',
		description: 'Coolant system flush and concentration reset',
		scheduledDate: '2026-03-15',
		aiGenerated: false,
	},
	{
		id: 'MT-007',
		machineId: 'LAS-01',
		machineName: 'Trumpf TruLaser 3030',
		type: 'Preventive',
		status: 'Complete',
		priority: 'Low',
		description: 'Lens cleaning and assist gas calibration',
		scheduledDate: '2026-03-12',
		aiGenerated: false,
	},
	{
		id: 'MT-008',
		machineId: 'CNC-02',
		machineName: 'Haas VF-4SS',
		type: 'Predictive',
		status: 'Scheduled',
		priority: 'Medium',
		description: 'Coolant pump seal — flow rate declining 8% over 2 weeks',
		scheduledDate: '2026-03-25',
		aiGenerated: true,
		confidenceScore: 69,
	},
];

export const shopFloorAlerts = [
	{
		id: 'sfa-1',
		text: 'Hermle C400 spindle motor failed — corrective maintenance in progress',
		time: '45m ago',
		type: 'alert' as const,
		agent: 'Machine Health',
	},
	{
		id: 'sfa-2',
		text: 'Rescheduled WO-4835 from 5AX-02 to 5AX-01 to avoid downtime conflict',
		time: '1h ago',
		type: 'success' as const,
		agent: 'Scheduler',
	},
	{
		id: 'sfa-3',
		text: 'Haas VF-4SS vibration trending 2.3σ above baseline — maintenance scheduled',
		time: '2h ago',
		type: 'update' as const,
		agent: 'Machine Health',
	},
	{
		id: 'sfa-4',
		text: 'Bore ID on Part HX-2290 trending toward UCL — recommend tool offset adjustment',
		time: '3h ago',
		type: 'alert' as const,
		agent: 'Quality',
	},
	{
		id: 'sfa-5',
		text: 'Night shift: no certified 5-axis operator Thursday — flag for shift lead',
		time: '4h ago',
		type: 'update' as const,
		agent: 'Workforce',
	},
	{
		id: 'sfa-6',
		text: 'Overtime for Torres (Day shift) at 8.0h — approaching weekly limit',
		time: '5h ago',
		type: 'idle' as const,
		agent: 'Workforce',
	},
];

/* ══════════════════════════════════════════════════════════
   ENHANCED QUOTING
   ══════════════════════════════════════════════════════════ */

export type CostBreakdown = {
	material: number;
	labor: number;
	machineTime: number;
	setup: number;
	tooling: number;
	outsideServices: number;
	overhead: number;
	margin: number;
};

export type QuoteOperation = {
	opNumber: number;
	name: string;
	machine: string;
	setupMinutes: number;
	cycleMinutes: number;
	costPerPart: number;
};

export type SimilarJob = {
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

export type EnhancedQuoteRow = {
	client: string;
	quoteId: string;
	project: string;
	date: string;
	amount: number;
	status: 'Draft' | 'Review' | 'Sent' | 'Won' | 'Lost' | 'Expired';
	margin: number;
	confidenceScore: number;
};

export const enhancedQuotingStats = [
	{
		title: 'Win Rate',
		value: '64.2%',
		subtitle: 'Last 90 days',
		badge: '+6.1%',
		badgeColor: 'green' as const,
	},
	{
		title: 'Avg Turnaround',
		value: '2.4 hrs',
		subtitle: 'RFQ to quote sent',
		badge: '-86%',
		badgeColor: 'green' as const,
	},
	{
		title: 'Pipeline Value',
		value: '$482K',
		subtitle: '18 active quotes',
		badge: '+$64K',
		badgeColor: 'green' as const,
	},
	{
		title: 'Margin Health',
		value: '28.4%',
		subtitle: 'Avg across active',
		badge: '+1.2%',
		badgeColor: 'green' as const,
	},
];

export const enhancedQuoteTableRows: EnhancedQuoteRow[] = [
	{
		client: 'Aerospace Dynamics',
		quoteId: 'QT-2026-0891',
		project: 'Titanium Turbine Housing',
		date: 'Mar 14, 2026',
		amount: 14528,
		status: 'Draft',
		margin: 28.4,
		confidenceScore: 84,
	},
	{
		client: 'Precision Medical',
		quoteId: 'QT-2026-0887',
		project: 'Surgical Grade Implant Pins',
		date: 'Mar 12, 2026',
		amount: 8400,
		status: 'Review',
		margin: 22.1,
		confidenceScore: 91,
	},
	{
		client: 'Global Robotics',
		quoteId: 'QT-2026-0882',
		project: 'Custom Actuator Assembly',
		date: 'Mar 10, 2026',
		amount: 31000,
		status: 'Sent',
		margin: 31.5,
		confidenceScore: 78,
	},
	{
		client: 'Northrop Grumman',
		quoteId: 'QT-2026-0876',
		project: 'Titanium Bracket Assembly',
		date: 'Mar 06, 2026',
		amount: 42800,
		status: 'Won',
		margin: 26.8,
		confidenceScore: 88,
	},
	{
		client: 'GE Aerospace',
		quoteId: 'QT-2026-0871',
		project: 'Turbine Blade Root Fittings',
		date: 'Mar 04, 2026',
		amount: 67200,
		status: 'Won',
		margin: 34.2,
		confidenceScore: 92,
	},
	{
		client: 'Automotive Core',
		quoteId: 'QT-2026-0865',
		project: 'Engine Block Prototype',
		date: 'Mar 01, 2026',
		amount: 8900,
		status: 'Lost',
		margin: 18.4,
		confidenceScore: 65,
	},
	{
		client: 'NextGen Energy',
		quoteId: 'QT-2026-0858',
		project: 'Turbine Blade Refurbish',
		date: 'Feb 26, 2026',
		amount: 15600,
		status: 'Sent',
		margin: 29.1,
		confidenceScore: 82,
	},
	{
		client: 'Boeing Defense',
		quoteId: 'QT-2026-0851',
		project: 'Hydraulic Manifold Assembly',
		date: 'Feb 22, 2026',
		amount: 52400,
		status: 'Won',
		margin: 32.6,
		confidenceScore: 94,
	},
];

export const quoteDetail = {
	quoteId: 'QT-2026-0891',
	client: 'Aerospace Dynamics',
	project: 'Titanium Turbine Housing',
	material: 'Ti-6Al-4V',
	quantity: 6,
	unitPrice: 2421,
	totalPrice: 14528,
	targetMargin: 28,
	confidenceScore: 84,
	aiRecommendation:
		'Ti-6Al-4V pricing is up 8% from Q4. Similar jobs quoted at $2,200–$2,500/unit had a 68% win rate. Recommend holding at $2,421/unit.',
	costBreakdown: {
		material: 2220,
		machineTime: 4290,
		labor: 1140,
		setup: 680,
		tooling: 390,
		outsideServices: 540,
		overhead: 2106,
		margin: 3162,
	} satisfies CostBreakdown,
	operations: [
		{
			opNumber: 10,
			name: 'Rough Mill',
			machine: 'DMG Mori DMU 50',
			setupMinutes: 45,
			cycleMinutes: 150,
			costPerPart: 412,
		},
		{
			opNumber: 20,
			name: 'Finish Mill',
			machine: 'DMG Mori DMU 50',
			setupMinutes: 30,
			cycleMinutes: 108,
			costPerPart: 297,
		},
		{
			opNumber: 30,
			name: 'Drill/Tap',
			machine: 'Haas VF-4SS',
			setupMinutes: 20,
			cycleMinutes: 24,
			costPerPart: 48,
		},
		{
			opNumber: 40,
			name: 'Deburr',
			machine: 'Manual',
			setupMinutes: 0,
			cycleMinutes: 18,
			costPerPart: 23,
		},
		{
			opNumber: 50,
			name: 'CMM Inspect',
			machine: 'Zeiss Contura',
			setupMinutes: 15,
			cycleMinutes: 30,
			costPerPart: 58,
		},
		{
			opNumber: 60,
			name: 'Anodize',
			machine: 'Cascade Coatings (Outside)',
			setupMinutes: 0,
			cycleMinutes: 0,
			costPerPart: 90,
		},
	] satisfies QuoteOperation[],
	similarJobs: [
		{
			jobId: 'WO-4207',
			partName: 'Hydraulic Housing',
			material: '4140 Steel',
			quantity: 24,
			quotedPrice: 1720,
			actualCost: 1580,
			margin: 8.1,
			outcome: 'Won' as const,
			similarity: 87,
			dateQuoted: 'Nov 2025',
		},
		{
			jobId: 'WO-3982',
			partName: 'Actuator Body',
			material: 'Ti-6Al-4V',
			quantity: 8,
			quotedPrice: 2340,
			actualCost: 1890,
			margin: 19.2,
			outcome: 'Won' as const,
			similarity: 82,
			dateQuoted: 'Sep 2025',
		},
		{
			jobId: 'WO-4401',
			partName: 'Sensor Bracket',
			material: 'Ti-6Al-4V',
			quantity: 12,
			quotedPrice: 2580,
			actualCost: 2100,
			margin: 18.6,
			outcome: 'Lost' as const,
			similarity: 74,
			dateQuoted: 'Jan 2026',
		},
	] satisfies SimilarJob[],
};

export const quoteBuilderDefaults = {
	customer: 'Aerospace Dynamics',
	partDescription: 'Titanium Turbine Housing',
	material: 'Ti-6Al-4V',
	quantity: 6,
	certifications: ['AS9100', 'ITAR'],
	urgency: 'Standard' as const,
};

export const quoteBuilderSteps = [
	'Analyzing part specifications...',
	'Matching 847 historical jobs...',
	'Calculating material costs (Ti-6Al-4V: $18.50/lb)...',
	'Generating manufacturing routing...',
	'Optimizing pricing for 68% win probability...',
];

/* ══════════════════════════════════════════════════════════
   ENHANCED KNOWLEDGE BASE
   ══════════════════════════════════════════════════════════ */

export type CitationSource = {
	id: string;
	docTitle: string;
	docType:
		| 'SOP'
		| 'Work Instruction'
		| 'Troubleshooting Guide'
		| 'Process Parameters'
		| 'Tribal Knowledge';
	docId: string;
	revision: string;
	author: string;
	lastUpdated: string;
	highlightedPassage: string;
	relevanceScore: number;
};

export type KnowledgeContributor = {
	name: string;
	initials: string;
	role: string;
	yearsExperience: number;
};

export type EnhancedChatResponse = {
	content: string;
	confidenceScore: number;
	sourcesMatched: number;
	citations: CitationSource[];
	contributors: KnowledgeContributor[];
};

export const querySuggestions = [
	"What's the setup procedure for the Mazak VTC-800?",
	'Troubleshoot surface finish issues on 4140 steel',
	'Approved feed rate for Ti-6Al-4V on 5-axis?',
	'Show inspection checklist for aerospace housings',
];

export const enhancedChatResponses: EnhancedChatResponse[] = [
	{
		content:
			'The approved setup procedure for the Mazak VTC-800 when running Ti-6Al-4V [1] requires a 15-minute warm-up spindle rotation at 2,000 RPM before engaging the workpiece. Our shop runs this material at 180 SFM rather than the handbook-recommended 220 SFM [2] because of premature edge buildup on KC5010 inserts.\n\nKey parameters for roughing [3]:\n• Speed: 150–200 SFM\n• Feed: 0.008–0.012 IPR\n• Depth of cut: 0.100–0.250"\n• Coolant: High-pressure flood, 10% concentration minimum\n\nAlways verify spindle runout reads < 0.0005" before loading material.',
		confidenceScore: 96,
		sourcesMatched: 4,
		citations: [
			{
				id: 'cs-1',
				docTitle: 'Mazak VTC-800 Setup for Titanium Roughing',
				docType: 'Work Instruction',
				docId: 'WI-L3-001',
				revision: 'Rev 3',
				author: 'Jim Torres',
				lastUpdated: 'Feb 2026',
				highlightedPassage:
					'Warm up spindle for minimum 15 minutes at 2,000 RPM before engaging workpiece. Check runout indicator reads < 0.0005" on all axes.',
				relevanceScore: 98,
			},
			{
				id: 'cs-2',
				docTitle: 'Why we run Ti-6Al-4V at 180 SFM instead of 220',
				docType: 'Tribal Knowledge',
				docId: 'TK-042',
				revision: '—',
				author: 'Mike Rodriguez',
				lastUpdated: 'Jan 2026',
				highlightedPassage:
					'At 220 SFM we were getting premature edge buildup on the KC5010 inserts in the Mazak. Dropped to 180 and tool life doubled from ~45 min to ~90 min per edge.',
				relevanceScore: 94,
			},
			{
				id: 'cs-3',
				docTitle: 'Ti-6Al-4V Machining Parameters',
				docType: 'Process Parameters',
				docId: 'PP-TI64-001',
				revision: 'Rev 5',
				author: 'Sarah Chen',
				lastUpdated: 'Mar 2026',
				highlightedPassage:
					'Roughing: 150–200 SFM, 0.008–0.012 IPR, DOC 0.100–0.250". Use Kennametal KC5010 or equivalent coated carbide. Flood coolant required.',
				relevanceScore: 91,
			},
		],
		contributors: [
			{ name: 'Mike Rodriguez', initials: 'MR', role: 'Senior Machinist', yearsExperience: 22 },
			{ name: 'Sarah Chen', initials: 'SC', role: 'Process Engineer', yearsExperience: 8 },
			{ name: 'Jim Torres', initials: 'JT', role: 'Manufacturing Lead', yearsExperience: 15 },
		],
	},
	{
		content:
			'Surface finish defects on 4140 steel are most commonly caused by three factors [1]:\n\n1. **Chatter marks** — Check tool overhang length. On the Haas VF-4SS, overhang beyond 4:1 L/D ratio causes regenerative chatter at our typical feed rates [2].\n\n2. **Tool wear** — Inspect insert edge. At 32 HRC, CNMG 432 inserts last approximately 45 minutes per edge. Our insert tracking shows replacement should happen at Op 30 for parts over 6" length.\n\n3. **Coolant contamination** — Concentration below 8% causes tearing on 4140. Check refractometer reading weekly per SOP-415 [1].\n\nIf the issue persists after checking all three, the Y-axis backlash on the VF-4 may need the 0.002" compensation documented in TK-067.',
		confidenceScore: 91,
		sourcesMatched: 3,
		citations: [
			{
				id: 'cs-4',
				docTitle: 'Surface Finish Defects — Root Cause Matrix',
				docType: 'Troubleshooting Guide',
				docId: 'TSG-CNC-01',
				revision: 'Rev 2',
				author: 'Mike Rodriguez',
				lastUpdated: 'Dec 2025',
				highlightedPassage:
					'For 4140 at 28–32 HRC: chatter → reduce overhang or increase spindle speed 10%. Tearing → check coolant concentration (must be ≥ 8%). Tool marks → inspect insert edge wear land width.',
				relevanceScore: 96,
			},
			{
				id: 'cs-5',
				docTitle: 'Haas VF-4 Y-axis Backlash Workaround',
				docType: 'Tribal Knowledge',
				docId: 'TK-067',
				revision: '—',
				author: 'Sarah Chen',
				lastUpdated: 'Nov 2025',
				highlightedPassage:
					'The VF-4 in Bay B has 0.002" backlash on Y-axis that is not in any manual. Apply +0.002 compensation in parameter 1851. Re-check after each service.',
				relevanceScore: 82,
			},
		],
		contributors: [
			{ name: 'Mike Rodriguez', initials: 'MR', role: 'Senior Machinist', yearsExperience: 22 },
			{ name: 'Sarah Chen', initials: 'SC', role: 'Process Engineer', yearsExperience: 8 },
		],
	},
	{
		content:
			'For Ti-6Al-4V on the DMG Mori DMU 50 (5-axis), the approved parameters are [1]:\n\n**Roughing:**\n• Speed: 180 SFM (see TK-042 for why not 220)\n• Feed: 0.010 IPR\n• Axial DOC: 0.200"\n• Radial DOC: 40% of tool diameter\n• Insert: Kennametal KC5010 CNMG 432\n\n**Finishing:**\n• Speed: 200 SFM\n• Feed: 0.006 IPR\n• DOC: 0.030–0.050"\n• Use fresh edge — maximum 20 min finishing per edge\n\nCritical: Use high-pressure coolant (1,000+ PSI) through spindle. Low-pressure flood is insufficient for titanium chip evacuation on the 5-axis [2].',
		confidenceScore: 94,
		sourcesMatched: 3,
		citations: [
			{
				id: 'cs-6',
				docTitle: 'Ti-6Al-4V Machining Parameters',
				docType: 'Process Parameters',
				docId: 'PP-TI64-001',
				revision: 'Rev 5',
				author: 'Sarah Chen',
				lastUpdated: 'Mar 2026',
				highlightedPassage:
					'5-Axis finishing: 200 SFM, 0.006 IPR, DOC 0.030–0.050". Fresh edge mandatory — max 20 min per edge. Through-spindle coolant at 1,000+ PSI required.',
				relevanceScore: 97,
			},
			{
				id: 'cs-7',
				docTitle: 'DMG MORI 5-Axis Fixturing for Aerospace Housing',
				docType: 'Work Instruction',
				docId: 'WI-5X-010',
				revision: 'Rev 2',
				author: 'Jim Torres',
				lastUpdated: 'Feb 2026',
				highlightedPassage:
					'Datum setup: Use A-axis home position for initial probe cycle. Verify B-axis center of rotation within 0.0003" before starting. Coolant must be through-spindle — flood only is NOT acceptable for titanium.',
				relevanceScore: 88,
			},
		],
		contributors: [
			{ name: 'Sarah Chen', initials: 'SC', role: 'Process Engineer', yearsExperience: 8 },
			{ name: 'Jim Torres', initials: 'JT', role: 'Manufacturing Lead', yearsExperience: 15 },
		],
	},
	{
		content:
			'The inspection checklist for aerospace housings follows the First Article Inspection Report (FAIR) procedure [1]. For the current WO-4835 (Raytheon Avionics Housing):\n\n**Required checks (16-point dimensional):**\n• All GD&T callouts per balloon drawing\n• Bore IDs to ±0.001"\n• O-ring groove depth and width\n• Surface finish: 32 Ra or better on sealing surfaces\n• Thread gauging (Go/No-Go) on all tapped holes\n\n**Material traceability:**\n• Mill cert must match AMS 4928 spec [2]\n• Heat lot traceability from raw stock to finished part\n• Chemical composition verification\n\n**Certification requirements:**\n• AS9100 documentation package\n• ITAR compliance stamp\n• Customer source inspection notification (48-hour advance)',
		confidenceScore: 89,
		sourcesMatched: 3,
		citations: [
			{
				id: 'cs-8',
				docTitle: 'First Article Inspection Report (FAIR) Procedure',
				docType: 'SOP',
				docId: 'SOP-310',
				revision: 'Rev 4',
				author: 'James Wilson',
				lastUpdated: 'Jan 2026',
				highlightedPassage:
					'16-point dimensional check required for all aerospace housings. All GD&T callouts must be verified against balloon drawing. Surface finish verification: 32 Ra or better on all sealing surfaces.',
				relevanceScore: 95,
			},
			{
				id: 'cs-9',
				docTitle: 'Incoming Material Inspection — Bar Stock',
				docType: 'SOP',
				docId: 'SOP-205',
				revision: 'Rev 6',
				author: 'James Wilson',
				lastUpdated: 'Mar 2026',
				highlightedPassage:
					'All titanium bar stock must include mill cert with heat lot number. Verify chemical composition meets AMS 4928. Record heat lot on traveler card for full traceability.',
				relevanceScore: 84,
			},
		],
		contributors: [
			{ name: 'James Wilson', initials: 'JW', role: 'QC Lead', yearsExperience: 12 },
			{ name: 'Jim Torres', initials: 'JT', role: 'Manufacturing Lead', yearsExperience: 15 },
		],
	},
];
