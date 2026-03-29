import { InfoTooltip } from '@/components/InfoTooltip';
import { machines } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export function MachineHealthGrid() {
	return (
		<div className="glass-solid overflow-hidden rounded-lg p-6">
			<div className="mb-4 flex items-center justify-between">
				<h3 className="text-sm font-semibold text-forge-primary">Machine Health</h3>
				<InfoTooltip
					title="Machine Health"
					content={
						<>
							<p className="mb-2">
								Real-time health snapshot for each CNC machine. The progress bar shows how close the
								spindle is to its next PM threshold.
							</p>
							<p className="mb-1 font-medium text-forge-primary">Key terms</p>
							<ul className="mb-2 list-inside list-disc space-y-0.5">
								<li>
									<strong>Spindle Hours</strong> -running hours since last PM. When the bar fills
									up, PM is due.
								</li>
								<li>
									<strong>Health Score</strong> -0-100 composite of vibration, temperature, and
									maintenance history
								</li>
								<li>
									<strong>Vibration</strong> -Normal (ok), Attention (trending), Alarm (immediate
									action)
								</li>
								<li>
									<strong>WOs</strong> -work orders queued for this machine
								</li>
							</ul>
							<p className="mb-1 font-medium text-forge-primary">How to read</p>
							<p>
								Watch for machines where the spindle bar is nearly full or vibration shows Alarm
								-these need PM scheduling soon. High WO counts mean more disruption if the machine
								goes down.
							</p>
						</>
					}
				/>
			</div>

			<div className="grid grid-cols-4 gap-4">
				{machines.map((m) => {
					const pct = Math.min((m.spindleHoursSinceLastPm / m.pmThresholdHours) * 100, 100);
					const nextPm = new Date(m.maintenance.nextScheduled).toLocaleDateString('en-US', {
						month: 'short',
						day: 'numeric',
					});

					return (
						<div key={m.id} className="rounded-lg border border-forge-divider bg-white p-4">
							{/* Header */}
							<div className="mb-3">
								<p className="text-xs font-semibold text-forge-primary">
									{m.id} · {m.name}
								</p>
								<p className="text-[10px] text-forge-hint">{m.type}</p>
							</div>

							{/* Spindle hours bar */}
							<div className="mb-2">
								<div className="mb-1 flex items-center justify-between">
									<span className="text-[10px] text-forge-hint">Spindle Hours</span>
									<span className="text-[10px] font-medium text-forge-secondary">
										{m.spindleHoursSinceLastPm.toLocaleString()} /{' '}
										{m.pmThresholdHours.toLocaleString()}
									</span>
								</div>
								<div className="h-1.5 w-full rounded-full bg-black/[0.04]">
									<div
										className="h-full rounded-full bg-forge-primary"
										style={{ width: `${pct}%` }}
									/>
								</div>
							</div>

							{/* Metrics row */}
							<div className="flex items-center justify-between text-[10px]">
								<div>
									<span className="text-forge-hint">Health </span>
									<span className="font-medium text-forge-primary">{m.healthScore}</span>
								</div>
								<div>
									<span className="text-forge-hint">Vibration </span>
									<span
										className={cn(
											'font-medium',
											m.vibrationStatus === 'Alarm'
												? 'text-forge-error'
												: m.vibrationStatus === 'Attention'
													? 'text-forge-accent-warm'
													: 'text-forge-secondary',
										)}
									>
										{m.vibrationStatus}
									</span>
								</div>
							</div>

							{/* Footer */}
							<div className="mt-2 flex items-center justify-between border-t border-forge-divider pt-2 text-[10px]">
								<span className="text-forge-hint">Next PM: {nextPm}</span>
								<span className="text-forge-hint">
									{m.jobBacklog.woCount} WOs · {m.jobBacklog.hours}h
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
