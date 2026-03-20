import { AlertTriangle, Wrench } from 'lucide-react';
import { machines } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const alertMachines = machines.filter(
	(m) => ['Stalled', 'Setup'].includes(m.status) || m.healthScore < 70,
);

const statusIcon: Record<string, { icon: React.ElementType; color: string }> = {
	Stalled: { icon: AlertTriangle, color: 'text-forge-primary' },
	Setup: { icon: Wrench, color: 'text-forge-primary' },
	low_health: { icon: AlertTriangle, color: 'text-forge-primary' },
};

export function MachineAlerts() {
	if (alertMachines.length === 0) return null;

	return (
		<div className="glass-solid rounded-lg p-5">
			<div className="mb-3 flex items-center justify-between">
				<h3 className="text-sm font-semibold text-forge-primary">Needs Attention</h3>
				<span className="rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-semibold text-forge-secondary">
					{alertMachines.length} machines
				</span>
			</div>
			<div className="space-y-2">
				{alertMachines.map((m) => {
					const key =
						m.status === 'Stalled' ? 'Stalled' : m.status === 'Setup' ? 'Setup' : 'low_health';
					const config = statusIcon[key];
					const Icon = config.icon;
					const reason =
						m.status === 'Stalled'
							? 'Machine stalled — awaiting repair'
							: m.status === 'Setup'
								? 'Setup in progress'
								: `Health score ${m.healthScore} — trending low`;

					return (
						<div
							key={m.id}
							className="flex items-center gap-3 rounded-lg bg-black/[0.015] px-3 py-2.5"
						>
							<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/[0.04]">
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
