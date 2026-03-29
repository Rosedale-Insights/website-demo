import { IntelligenceBrief } from '@/components/insights/IntelligenceBrief';
import { AnimatedGroup } from '@/components/motion/AnimatedGroup';
import { AnimatedItem } from '@/components/motion/AnimatedItem';
import { StatCard } from '@/components/StatCard';
import { homeKpis } from '@/lib/mock-data';

export default function HomePage() {
	return (
		<AnimatedGroup className="space-y-8">
			{/* Greeting */}
			<AnimatedItem>
				<div>
					<h1 className="text-2xl font-semibold tracking-tight text-forge-primary">
						Good morning, Julian
					</h1>
					<p className="mt-1 text-sm text-forge-secondary">
						Wednesday, March 19 &middot; Day Shift
					</p>
				</div>
			</AnimatedItem>

			{/* Intelligence Brief */}
			<AnimatedItem>
				<IntelligenceBrief />
			</AnimatedItem>

			{/* Key Metrics */}
			<AnimatedItem>
				<div className="grid grid-cols-4 gap-4">
					{homeKpis.map((kpi) => (
						<StatCard key={kpi.title} {...kpi} />
					))}
				</div>
			</AnimatedItem>
		</AnimatedGroup>
	);
}
