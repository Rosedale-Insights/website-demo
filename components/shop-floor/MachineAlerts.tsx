import { AlertTriangle, Wrench, PauseCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { machines } from '@/lib/mock-data';

const alertMachines = machines.filter((m) =>
	['Down', 'Maintenance'].includes(m.status) || m.healthScore < 70,
);

const statusIcon: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
	Down: { icon: AlertTriangle, color: 'text-forge-error', bg: 'bg-forge-error/10' },
	Maintenance: { icon: Wrench, color: 'text-forge-hint', bg: 'bg-black/[0.04]' },
	low_health: { icon: PauseCircle, color: 'text-forge-accent-warm', bg: 'bg-forge-accent-warm/10' },
};

export function MachineAlerts() {
	if (alertMachines.length === 0) return null;

	return (
		<div className="glass-solid rounded-2xl p-5">
			<div className="mb-3 flex items-center justify-between">
				<h3 className="text-sm font-semibold text-forge-primary">Needs Attention</h3>
				<span className="rounded-full bg-forge-error/10 px-2 py-0.5 text-[10px] font-semibold text-forge-error">
					{alertMachines.length} machines
				</span>
			</div>
			<div className="space-y-2">
				{alertMachines.map((m) => {
					const key =
						m.status === 'Down'
							? 'Down'
							: m.status === 'Maintenance'
								? 'Maintenance'
								: 'low_health';
					const config = statusIcon[key];
					const Icon = config.icon;
					const reason =
						m.status === 'Down'
							? 'Machine down — awaiting repair'
							: m.status === 'Maintenance'
								? 'Scheduled maintenance in progress'
								: `Health score ${m.healthScore} — trending low`;

					return (
						<div
							key={m.id}
							className="flex items-center gap-3 rounded-xl bg-black/[0.015] px-3 py-2.5"
						>
							<div
								className={cn(
									'flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
									config.bg,
								)}
							>
								<Icon className={cn('h-3.5 w-3.5', config.color)} />
							</div>
							<div className="min-w-0 flex-1">
								<div className="flex items-center gap-2">
									<span className="text-xs font-semibold text-forge-primary">{m.id}</span>
									<span className="truncate text-xs text-forge-hint">{m.name}</span>
								</div>
								<p className="text-[10px] text-forge-secondary">{reason}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
