import { FindingsFeed } from '@/components/controller/FindingsFeed';
import { SavingsSummary } from '@/components/controller/SavingsSummary';
import { AnimatedGroup } from '@/components/motion/AnimatedGroup';
import { AnimatedItem } from '@/components/motion/AnimatedItem';
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { controllerKpis } from '@/lib/mock-data';

export default function ControllerPage() {
	return (
		<div className="space-y-8">
			<PageHeader
				title="Vigilant Controller"
				subtitle="AI-powered financial anomaly detection and spend intelligence."
			/>

			<AnimatedGroup className="space-y-8">
				<AnimatedItem>
					<div className="grid grid-cols-4 gap-4">
						{controllerKpis.map((kpi) => (
							<StatCard key={kpi.title} {...kpi} />
						))}
					</div>
				</AnimatedItem>

				<AnimatedItem>
					<div className="grid grid-cols-[1fr_340px] gap-6">
						<FindingsFeed />
						<SavingsSummary />
					</div>
				</AnimatedItem>
			</AnimatedGroup>
		</div>
	);
}
