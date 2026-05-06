import { InfoTooltip } from '@/components/InfoTooltip';
import type { PmScheduleEntry } from '@/lib/mock-data';
import { pmSchedule } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const statusStyle: Record<PmScheduleEntry['status'], string> = {
	Completed: 'bg-forge-primary/5 text-forge-secondary',
	'In Progress': 'bg-forge-primary text-white',
	Scheduled: 'bg-black/[0.04] text-forge-secondary',
	Overdue: 'bg-forge-error/10 text-forge-error',
};

const priorityStyle: Record<PmScheduleEntry['priority'], string> = {
	Critical: 'text-forge-error font-medium',
	High: 'text-forge-primary font-medium',
	Medium: 'text-forge-secondary',
	Low: 'text-forge-hint',
};

function formatDateRange(start: string, end: string) {
	const s = new Date(start);
	const e = new Date(end);
	const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
	if (start === end) return fmt(s);
	return `${fmt(s)} – ${fmt(e)}`;
}

export function PmScheduleTimeline({ extraEntries = [] }: { extraEntries?: PmScheduleEntry[] }) {
	const allEntries = [...pmSchedule, ...extraEntries];

	// Sort: Overdue first, then In Progress, Scheduled, Completed
	const statusOrder: Record<string, number> = {
		Overdue: 0,
		'In Progress': 1,
		Scheduled: 2,
		Completed: 3,
	};
	const sorted = [...allEntries].sort(
		(a, b) => (statusOrder[a.status] ?? 4) - (statusOrder[b.status] ?? 4),
	);

	return (
		<div className="glass-solid overflow-hidden rounded-lg">
			<div className="flex items-center justify-between border-b border-forge-divider px-6 py-4">
				<h3 className="text-sm font-semibold text-forge-primary">PM Schedule</h3>
				<div className="flex items-center gap-3">
					<span className="text-xs text-forge-hint">{sorted.length} entries</span>
					<InfoTooltip
						title="PM Schedule"
						content={
							<>
								<p className="mb-2">
									All planned and completed preventive maintenance events across your machine fleet.
									Sorted by urgency -overdue and in-progress PMs appear first.
								</p>
								<p className="mb-1 font-medium text-forge-primary">Key terms</p>
								<ul className="mb-2 list-inside list-disc space-y-0.5">
									<li>
										<strong>Preventive</strong> -scheduled routine maintenance at a fixed hour
										interval
									</li>
									<li>
										<strong>Predictive</strong> -triggered by sensor data (vibration, temperature)
										trending out of spec
									</li>
									<li>
										<strong>Inspection</strong> -alignment or calibration verification
									</li>
									<li>
										<strong>Conflicts</strong> -active jobs that overlap with the PM window and may
										need rerouting
									</li>
								</ul>
								<p className="mb-1 font-medium text-forge-primary">How to read</p>
								<p>
									Red <strong>Overdue</strong> entries need immediate attention. Check the Conflicts
									column -if jobs are affected, use Schedule PM to find a lower-impact window.
								</p>
							</>
						}
					/>
				</div>
			</div>

			{/* Table header */}
			<div className="grid grid-cols-[120px_1fr_100px_70px_70px_70px_90px] items-center gap-4 border-b border-forge-divider bg-black/[0.02] px-6 py-2.5">
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Machine
				</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Description
				</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Window
				</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Duration
				</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Priority
				</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Conflicts
				</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Status
				</span>
			</div>

			{/* Rows */}
			{sorted.map((pm) => (
				<div
					key={pm.id}
					className="grid grid-cols-[120px_1fr_100px_70px_70px_70px_90px] items-center gap-4 border-b border-forge-divider px-6 py-3 last:border-b-0"
				>
					<div>
						<p className="text-xs font-medium text-forge-primary">{pm.machineId}</p>
						<p className="truncate text-[10px] text-forge-hint">{pm.machineName}</p>
					</div>
					<div className="min-w-0" title={pm.description}>
						<p className="truncate text-xs text-forge-secondary">{pm.description}</p>
						<p className="text-[10px] text-forge-hint">
							{pm.pmType}
							{pm.aiRecommended && ' · AI recommended'}
						</p>
					</div>
					<span className="text-xs text-forge-secondary">
						{formatDateRange(pm.startDate, pm.endDate)}
					</span>
					<span className="text-xs text-forge-secondary">{pm.duration}</span>
					<span className={cn('text-xs', priorityStyle[pm.priority])}>{pm.priority}</span>
					<span className="text-xs text-forge-secondary">
						{pm.jobConflicts > 0 ? (
							<span className="font-medium text-forge-error">{pm.jobConflicts} jobs</span>
						) : (
							<span className="text-forge-hint">None</span>
						)}
					</span>
					<span
						className={cn(
							'inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-medium',
							statusStyle[pm.status],
						)}
					>
						{pm.status}
					</span>
				</div>
			))}
		</div>
	);
}
