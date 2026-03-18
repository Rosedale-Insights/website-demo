import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { operators } from '@/lib/mock-data';

const shiftOrder: Record<string, number> = { Day: 0, Swing: 1, Night: 2 };

function SkillStars({ level }: { level: number }) {
	return (
		<span className="text-[10px] text-forge-accent-warm">
			{'★'.repeat(level)}
			<span className="text-forge-divider">{'★'.repeat(3 - level)}</span>
		</span>
	);
}

export function ShiftOverview() {
	const grouped = operators.reduce(
		(acc, op) => {
			const shift = op.shift;
			if (!acc[shift]) acc[shift] = [];
			acc[shift].push(op);
			return acc;
		},
		{} as Record<string, typeof operators>,
	);

	const shifts = Object.entries(grouped).sort(
		([a], [b]) => (shiftOrder[a] ?? 0) - (shiftOrder[b] ?? 0),
	);

	return (
		<div className="glass-solid rounded-2xl p-6">
			<h3 className="mb-1 text-sm font-semibold text-forge-primary">Shift Overview</h3>
			<p className="mb-4 text-xs text-forge-hint">Operator assignments and coverage</p>

			<div className="space-y-5">
				{shifts.map(([shift, ops]) => (
					<div key={shift}>
						<p className="mb-2 text-xs font-semibold uppercase tracking-wider text-forge-hint">
							{shift} Shift — {ops.length} operators
						</p>
						<div className="space-y-2">
							{ops.map((op) => {
								const topCert = op.certifications.reduce(
									(best, c) => (c.level > best.level ? c : best),
									op.certifications[0],
								);
								return (
									<div
										key={op.id}
										className="flex items-center gap-3 rounded-xl bg-black/[0.015] px-3 py-2"
									>
										{/* Avatar */}
										<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forge-primary/10 text-[10px] font-semibold text-forge-primary">
											{op.initials}
										</div>

										{/* Name + role */}
										<div className="min-w-0 flex-1">
											<p className="truncate text-xs font-medium text-forge-primary">
												{op.name}
											</p>
											<p className="text-[10px] text-forge-hint">{op.role}</p>
										</div>

										{/* Machine assignment */}
										<span className="text-[10px] font-medium text-forge-secondary">
											{op.currentMachine ?? '—'}
										</span>

										{/* Skill level */}
										{topCert && <SkillStars level={topCert.level} />}

										{/* Overtime warning */}
										{op.overtimeHours > 0 && (
											<span
												className={cn(
													'flex items-center gap-0.5 text-[10px] font-medium',
													op.overtimeHours >= 8
														? 'text-forge-error'
														: 'text-forge-hint',
												)}
											>
												{op.overtimeHours >= 8 && (
													<AlertTriangle className="h-2.5 w-2.5" />
												)}
												{op.overtimeHours}h OT
											</span>
										)}
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
