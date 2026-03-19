import { AlertTriangle, CheckCircle2, Sparkles, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import { maintenanceEvents } from '@/lib/mock-data';

const statusBadge: Record<string, string> = {
	Scheduled: 'bg-black/[0.04] text-forge-secondary',
	'In Progress': 'bg-black/[0.04] text-forge-secondary',
	Complete: 'bg-black/[0.04] text-forge-secondary',
	Overdue: 'bg-black/[0.04] text-forge-secondary',
};

export function MaintenanceTimeline() {
	const sorted = [...maintenanceEvents].sort(
		(a, b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime(),
	);

	return (
		<div className="glass-solid rounded-lg p-6">
			<h3 className="mb-1 text-sm font-semibold text-forge-primary">Maintenance Schedule</h3>
			<p className="mb-4 text-xs text-forge-hint">Upcoming and recent events</p>

			<div className="relative pl-4">
				<div className="absolute top-0 bottom-0 left-[7px] w-px bg-forge-divider" />

				<div className="space-y-4">
					{sorted.map((event) => {
						const badge = statusBadge[event.status] ?? statusBadge.Scheduled;
						const isComplete = event.status === 'Complete';
						const isInProgress = event.status === 'In Progress';
						const Icon = isComplete ? CheckCircle2 : isInProgress ? Wrench : AlertTriangle;

						return (
							<div key={event.id} className="relative flex gap-3">
								<div className="relative z-10 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
									<div className="absolute inset-0 rounded-full bg-white" />
									<Icon
										className={cn(
											'relative h-3.5 w-3.5',
											isComplete ? 'text-forge-success' : 'text-forge-primary',
										)}
									/>
								</div>

								<div className="min-w-0 flex-1">
									<div className="mb-0.5 flex items-center gap-2">
										<span className="text-xs font-medium text-forge-primary">
											{new Date(event.scheduledDate).toLocaleDateString('en-US', {
												month: 'short',
												day: 'numeric',
											})}
										</span>
										<span className="text-xs text-forge-hint">—</span>
										<span className="truncate text-xs font-medium text-forge-secondary">
											{event.machineName}
										</span>
									</div>
									<p className="text-xs text-forge-secondary">{event.description}</p>
									<div className="mt-1 flex flex-wrap items-center gap-1.5">
										<span
											className={cn(
												'inline-block rounded-full px-2 py-0.5 text-[10px] font-medium',
												badge,
											)}
										>
											{event.status}
										</span>
										<span className="inline-block text-[10px] font-medium text-forge-hint">
											{event.type}
										</span>
										{event.aiGenerated && (
											<span className="inline-flex items-center gap-0.5 rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium text-forge-secondary">
												<Sparkles className="h-2.5 w-2.5" />
												AI — {event.confidenceScore}%
											</span>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
