import { Calendar, Download } from 'lucide-react';
import { DueJobsTable } from '@/components/insights/DueJobsTable';
import { EnergyDonut } from '@/components/insights/EnergyDonut';
import { IntelligenceBrief } from '@/components/insights/IntelligenceBrief';
import { ProductionChart } from '@/components/insights/ProductionChart';
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { insightsKpis } from '@/lib/mock-data';

export default function InsightsPage() {
	return (
		<div className="space-y-8">
			<PageHeader
				title="Manufacturing Insights"
				subtitle="Real-time production intelligence and facility performance."
			>
				<button
					type="button"
					className="flex items-center gap-2 rounded-xl border border-forge-divider bg-white px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]"
				>
					<Calendar className="h-4 w-4" />
					Last 30 Days
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

			{/* Due Jobs */}
			<DueJobsTable />
		</div>
	);
}
