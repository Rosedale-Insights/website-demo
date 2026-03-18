import { cn } from '@/lib/utils';
import { machines } from '@/lib/mock-data';
import type { Machine } from '@/lib/mock-data';

const statusDot: Record<Machine['status'], string> = {
	Running: 'bg-forge-success',
	Idle: 'bg-forge-accent-blue',
	Down: 'bg-forge-error',
	Setup: 'bg-forge-accent-warm',
	Maintenance: 'bg-forge-hint',
};

const statusText: Record<Machine['status'], string> = {
	Running: 'text-forge-success',
	Idle: 'text-forge-accent-blue',
	Down: 'text-forge-error',
	Setup: 'text-forge-accent-warm',
	Maintenance: 'text-forge-hint',
};

const healthColor = (score: number) => {
	if (score >= 80) return 'text-forge-success';
	if (score >= 60) return 'text-forge-accent-warm';
	return 'text-forge-error';
};

export function MachineStatusGrid() {
	// Sort: problems first, then running, then idle
	const statusOrder: Record<string, number> = {
		Down: 0,
		Maintenance: 1,
		Setup: 2,
		Running: 3,
		Idle: 4,
	};
	const sorted = [...machines].sort(
		(a, b) => (statusOrder[a.status] ?? 9) - (statusOrder[b.status] ?? 9),
	);

	return (
		<div className="glass-solid overflow-hidden rounded-2xl">
			<div className="flex items-center justify-between border-b border-forge-divider px-6 py-4">
				<div>
					<h3 className="text-sm font-semibold text-forge-primary">All Machines</h3>
					<p className="text-xs text-forge-hint">
						{machines.filter((m) => m.status === 'Running').length} running ·{' '}
						{machines.filter((m) => m.status === 'Idle').length} idle ·{' '}
						{machines.filter((m) => ['Down', 'Maintenance'].includes(m.status)).length} offline
					</p>
				</div>
				{/* Status legend */}
				<div className="flex gap-3">
					{(['Running', 'Setup', 'Idle', 'Down', 'Maintenance'] as const).map((s) => (
						<div key={s} className="flex items-center gap-1">
							<span className={cn('h-2 w-2 rounded-full', statusDot[s])} />
							<span className="text-[10px] text-forge-hint">{s}</span>
						</div>
					))}
				</div>
			</div>

			{/* Header row */}
			<div className="grid grid-cols-[32px_100px_1.5fr_80px_100px_80px_80px_80px] items-center gap-3 bg-black/[0.02] px-6 py-2">
				<span />
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">ID</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">Machine</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">Status</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">Job</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">OEE</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">Parts</span>
				<span className="text-right text-[10px] font-medium uppercase tracking-wider text-forge-hint">Health</span>
			</div>

			{/* Machine rows */}
			{sorted.map((m) => (
				<div
					key={m.id}
					className="grid grid-cols-[32px_100px_1.5fr_80px_100px_80px_80px_80px] items-center gap-3 border-t border-forge-divider px-6 py-2.5 transition-colors hover:bg-black/[0.01]"
				>
					<span className={cn('mx-auto h-2.5 w-2.5 rounded-full', statusDot[m.status])} />
					<span className="text-xs font-semibold text-forge-primary">{m.id}</span>
					<span className="truncate text-xs text-forge-secondary">{m.name}</span>
					<span className={cn('text-xs font-medium', statusText[m.status])}>{m.status}</span>
					<span className="text-xs text-forge-hint">{m.currentJobId ?? '—'}</span>
					<span className="text-xs text-forge-secondary">
						{m.oee ? `${Math.round(m.oee.overall)}%` : '—'}
					</span>
					<span className="text-xs text-forge-secondary">
						{m.shiftMetrics
							? `${m.shiftMetrics.partsProduced}/${m.shiftMetrics.partsGoal}`
							: '—'}
					</span>
					<span className={cn('text-right text-xs font-semibold', healthColor(m.healthScore))}>
						{m.healthScore}
					</span>
				</div>
			))}
		</div>
	);
}
