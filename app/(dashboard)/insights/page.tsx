import { IntelligenceBrief } from '@/components/insights/IntelligenceBrief';
import { StatCard } from '@/components/StatCard';
import { homeKpis } from '@/lib/mock-data';

export default function HomePage() {
	return (
		<div className="space-y-8">
			{/* Greeting */}
			<div>
				<h1 className="text-2xl font-semibold tracking-tight text-forge-primary">
					Good morning, Julian
				</h1>
				<p className="mt-1 text-sm text-forge-secondary">Wednesday, March 19 &middot; Day Shift</p>
			</div>

			{/* Intelligence Brief */}
			<IntelligenceBrief />

			{/* Key Metrics */}
			<div className="grid grid-cols-4 gap-4">
				{homeKpis.map((kpi) => (
					<StatCard key={kpi.title} {...kpi} />
				))}
			</div>
		</div>
	);
}
