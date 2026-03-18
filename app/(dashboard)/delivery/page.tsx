import { Download, PackageSearch } from 'lucide-react';
import { AtRiskOrdersTable } from '@/components/delivery/AtRiskOrdersTable';
import { DelayRootCauseDonut } from '@/components/delivery/DelayRootCauseDonut';
import { DeliveryAgentFeed } from '@/components/delivery/DeliveryAgentFeed';
import { DeliveryBrief } from '@/components/delivery/DeliveryBrief';
import { SupplierOtdChart } from '@/components/delivery/SupplierOtdChart';
import { SupplierScorecard } from '@/components/delivery/SupplierScorecard';
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { deliveryKpis } from '@/lib/mock-data';

export default function DeliveryPage() {
	return (
		<div className="space-y-8">
			<PageHeader
				title="Delivery Intelligence"
				subtitle="AI-predicted delivery risks and supplier performance."
			>
				<button
					type="button"
					className="flex items-center gap-2 rounded-xl border border-forge-divider bg-white px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]"
				>
					<PackageSearch className="h-4 w-4" />
					Track Shipment
				</button>
				<button
					type="button"
					className="flex items-center gap-2 rounded-xl bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
				>
					<Download className="h-4 w-4" />
					Export Report
				</button>
			</PageHeader>

			{/* KPI Cards */}
			<div className="grid grid-cols-4 gap-4">
				{deliveryKpis.map((kpi) => (
					<StatCard key={kpi.title} {...kpi} />
				))}
			</div>

			{/* Charts Row */}
			<div className="grid grid-cols-[1fr_340px] gap-6">
				<SupplierOtdChart />
				<DelayRootCauseDonut />
			</div>

			{/* At-Risk Orders Table */}
			<AtRiskOrdersTable />

			{/* Bottom Row: Scorecard + Agent Feed */}
			<div className="grid grid-cols-[1fr_340px] gap-6">
				<SupplierScorecard />
				<DeliveryAgentFeed />
			</div>

			{/* Intelligence Brief */}
			<DeliveryBrief />
		</div>
	);
}
