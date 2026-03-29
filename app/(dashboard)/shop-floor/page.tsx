'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';
import { MachineHealthGrid } from '@/components/maintenance/MachineHealthGrid';
import { PmScheduleTimeline } from '@/components/maintenance/PmScheduleTimeline';
import { SchedulePmModal } from '@/components/maintenance/SchedulePmModal';
import { AnimatedGroup } from '@/components/motion/AnimatedGroup';
import { AnimatedItem } from '@/components/motion/AnimatedItem';
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import type { PmScheduleEntry } from '@/lib/mock-data';
import { maintenanceKpis } from '@/lib/mock-data';

export default function MaintenancePage() {
	const [showScheduler, setShowScheduler] = useState(false);
	const [addedEntries, setAddedEntries] = useState<PmScheduleEntry[]>([]);

	function handleConfirm(entry: PmScheduleEntry) {
		setAddedEntries((prev) => [...prev, entry]);
		setShowScheduler(false);
	}

	return (
		<div className="space-y-8">
			<PageHeader
				title="Maintenance Intelligence"
				subtitle="PM scheduling, machine health, and maintenance optimization."
			>
				<button
					type="button"
					onClick={() => setShowScheduler(true)}
					className="flex items-center gap-2 rounded-lg bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
				>
					<Plus className="h-4 w-4" />
					Schedule PM
				</button>
			</PageHeader>

			<AnimatedGroup className="space-y-8">
				<AnimatedItem>
					<div className="grid grid-cols-4 gap-4">
						{maintenanceKpis.map((kpi) => (
							<StatCard key={kpi.title} {...kpi} />
						))}
					</div>
				</AnimatedItem>

				<AnimatedItem>
					<PmScheduleTimeline extraEntries={addedEntries} />
				</AnimatedItem>

				<AnimatedItem>
					<MachineHealthGrid />
				</AnimatedItem>
			</AnimatedGroup>

			{showScheduler && (
				<SchedulePmModal onClose={() => setShowScheduler(false)} onConfirm={handleConfirm} />
			)}
		</div>
	);
}
