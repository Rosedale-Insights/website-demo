import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { maintenanceEvents } from '@/lib/mock-data';

const typeColors: Record<string, { dot: string; text: string }> = {
	Preventive: { dot: 'bg-forge-accent-blue', text: 'text-forge-accent-blue' },
	Predictive: { dot: 'bg-forge-accent-warm', text: 'text-forge-accent-warm' },
	Corrective: { dot: 'bg-forge-error', text: 'text-forge-error' },
};

const statusBadge: Record<string, string> = {
	Scheduled: 'bg-forge-accent-blue/10 text-forge-accent-blue',
	'In Progress': 'bg-forge-accent-warm/10 text-forge-accent-warm',
	Complete: 'bg-forge-success/10 text-forge-success',
	Overdue: 'bg-forge-error/10 text-forge-error',
};

export function MaintenanceTimeline() {
	const sorted = [...maintenanceEvents].sort(
		(a, b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime(),
	);

	return (
		<div className="glass-solid rounded-2xl p-6">
			<h3 className="mb-1 text-sm font-semibold text-forge-primary">Maintenance Schedule</h3>
			<p className="mb-4 text-xs text-forge-hint">Upcoming and recent events</p>

			<div className="relative pl-4">
				{/* Vertical line */}
				<div className="absolute top-0 bottom-0 left-[7px] w-px bg-forge-divider" />

				<div className="space-y-4">
					{sorted.map((event) => {
						const colors = typeColors[event.type] ?? typeColors.Preventive;
						const badge = statusBadge[event.status] ?? statusBadge.Scheduled;
						return (
							<div key={event.id} className="relative flex gap-3">
								{/* Dot */}
								<div
									className={cn(
										'relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full ring-2 ring-white',
										event.status === 'Complete' ? 'bg-forge-success' : colors.dot,
									)}
								/>

								{/* Content */}
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
										<span
											className={cn(
												'inline-block text-[10px] font-medium',
												colors.text,
											)}
										>
											{event.type}
										</span>
										{event.aiGenerated && (
											<span className="inline-flex items-center gap-0.5 rounded-full bg-forge-accent-warm/10 px-2 py-0.5 text-[10px] font-medium text-forge-accent-warm">
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
