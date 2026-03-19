import { AlertTriangle } from 'lucide-react';
import { MachineAlerts } from '@/components/shop-floor/MachineAlerts';
import { MachineStatusGrid } from '@/components/shop-floor/MachineStatusGrid';
import { MaintenanceTimeline } from '@/components/shop-floor/MaintenanceTimeline';
import { OeeBreakdown } from '@/components/shop-floor/OeeBreakdown';
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { shopFloorKpis } from '@/lib/mock-data';

export default function ShopFloorPage() {
	return (
		<div className="space-y-8">
			<PageHeader
				title="Shop Floor Monitor"
				subtitle="Real-time machine status, OEE, and workforce optimization."
			>
				<div className="flex items-center gap-2 rounded-lg border border-forge-divider bg-white px-4 py-2 text-sm font-medium text-forge-primary">
					Current Shift: Day
				</div>
				<button
					type="button"
					className="flex items-center gap-2 rounded-lg bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
				>
					<AlertTriangle className="h-4 w-4" />
					Alerts
				</button>
			</PageHeader>

			{/* KPI Cards */}
			<div className="grid grid-cols-4 gap-4">
				{shopFloorKpis.map((kpi) => (
					<StatCard key={kpi.title} {...kpi} />
				))}
			</div>

			{/* Hero row: Maintenance (primary) + OEE & Alerts (secondary) */}
			<div className="grid grid-cols-[1fr_340px] gap-6">
				<MaintenanceTimeline />
				<div className="space-y-4">
					<OeeBreakdown />
					<MachineAlerts />
				</div>
			</div>

			{/* Machine Status — compact table */}
			<MachineStatusGrid />
		</div>
	);
}
