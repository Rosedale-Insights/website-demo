import { quoteDetail } from '@/lib/mock-data';

export function OperationsRouting() {
	return (
		<div>
			<h4 className="mb-3 text-xs font-semibold text-forge-primary">Operations Routing</h4>
			<div className="overflow-hidden rounded-lg border border-forge-divider">
				{/* Header */}
				<div className="grid grid-cols-[40px_1.5fr_2fr_80px_80px_80px] items-center gap-2 bg-black/[0.02] px-4 py-2">
					<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">Op</span>
					<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">Name</span>
					<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">Machine</span>
					<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">Setup</span>
					<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">Cycle</span>
					<span className="text-right text-[10px] font-medium uppercase tracking-wider text-forge-hint">$/Part</span>
				</div>
				{/* Rows */}
				{quoteDetail.operations.map((op) => (
					<div
						key={op.opNumber}
						className="grid grid-cols-[40px_1.5fr_2fr_80px_80px_80px] items-center gap-2 border-t border-forge-divider px-4 py-2.5"
					>
						<span className="text-xs font-medium text-forge-primary">{op.opNumber}</span>
						<span className="text-xs text-forge-secondary">{op.name}</span>
						<span className="truncate text-xs text-forge-hint">{op.machine}</span>
						<span className="text-xs text-forge-hint">
							{op.setupMinutes > 0 ? `${op.setupMinutes}m` : '—'}
						</span>
						<span className="text-xs text-forge-hint">
							{op.cycleMinutes > 0
								? op.cycleMinutes >= 60
									? `${(op.cycleMinutes / 60).toFixed(1)}h`
									: `${op.cycleMinutes}m`
								: '—'}
						</span>
						<span className="text-right text-xs font-medium text-forge-primary">
							${op.costPerPart}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
