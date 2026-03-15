import { AlertTriangle, CheckCircle2, CircleX } from 'lucide-react';
import { dueJobsData } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const riskConfig: Record<string, { icon: typeof CheckCircle2; iconColor: string }> = {
	'On Track': { icon: CheckCircle2, iconColor: 'text-forge-success' },
	'At Risk': { icon: AlertTriangle, iconColor: 'text-forge-accent-warm' },
	'Past Due': { icon: CircleX, iconColor: 'text-forge-error' },
};

export function DueJobsTable() {
	return (
		<div className="glass-solid overflow-hidden rounded-2xl">
			<div className="flex items-center justify-between border-b border-forge-divider px-6 py-4">
				<h3 className="text-lg font-semibold text-forge-primary">Due Jobs</h3>
				<span className="text-xs font-medium text-forge-hint">
					{dueJobsData.filter((j) => j.daysLeft < 0).length} past due
				</span>
			</div>

			{/* Header */}
			<div className="grid grid-cols-[100px_1.4fr_1.4fr_100px_80px_1.5fr_100px_100px] gap-4 border-b border-forge-divider bg-black/[0.02] px-6 py-3">
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Job ID</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Customer
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Part</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Due Date
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Days Left
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Current Op
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Progress
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Risk</span>
			</div>

			{/* Rows */}
			{dueJobsData.map((job) => {
				const risk = riskConfig[job.risk];
				const RiskIcon = risk.icon;
				return (
					<div
						key={job.jobId}
						className="grid grid-cols-[100px_1.4fr_1.4fr_100px_80px_1.5fr_100px_100px] items-center gap-4 border-b border-forge-divider px-6 py-3.5 transition-colors hover:bg-black/[0.01]"
					>
						<span className="text-sm font-medium text-forge-primary">{job.jobId}</span>
						<span className="truncate text-sm text-forge-secondary">{job.customer}</span>
						<span className="truncate text-sm text-forge-secondary">{job.part}</span>
						<span className="text-sm text-forge-secondary">
							{new Date(job.dueDate).toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
							})}
						</span>
						<span className="text-sm font-semibold text-forge-primary">
							{job.daysLeft < 0 ? `${job.daysLeft}d` : `${job.daysLeft}d`}
						</span>
						<span className="truncate text-sm text-forge-secondary">{job.currentOp}</span>
						{/* Progress bar */}
						<div className="flex items-center gap-2">
							<div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/[0.06]">
								<div
									className="h-full rounded-full bg-forge-primary"
									style={{ width: `${job.percentComplete}%` }}
								/>
							</div>
							<span className="text-xs tabular-nums text-forge-hint">
								{job.percentComplete}%
							</span>
						</div>
						{/* Risk */}
						<div className="flex items-center gap-1.5">
							<RiskIcon className={cn('h-3.5 w-3.5', risk.iconColor)} />
							<span className="text-xs font-medium text-forge-secondary">{job.risk}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}
