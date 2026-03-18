import { cn } from '@/lib/utils';

const bars = [
	{ label: 'Availability', value: 91.5 },
	{ label: 'Performance', value: 94.3 },
	{ label: 'Quality', value: 97.6 },
];

const barColor = (value: number) => {
	if (value >= 85) return 'bg-forge-success';
	if (value >= 70) return 'bg-forge-accent-warm';
	return 'bg-forge-error';
};

export function OeeBreakdown() {
	return (
		<div className="glass-solid rounded-2xl p-5">
			<div className="mb-4 flex items-center justify-between">
				<h3 className="text-sm font-semibold text-forge-primary">OEE Breakdown</h3>
				<span className="text-lg font-bold text-forge-primary">84.2%</span>
			</div>
			<div className="space-y-2.5">
				{bars.map((bar) => (
					<div key={bar.label} className="flex items-center gap-3">
						<span className="w-20 text-xs text-forge-secondary">{bar.label}</span>
						<div className="h-2 flex-1 rounded-full bg-black/[0.04]">
							<div
								className={cn('h-full rounded-full', barColor(bar.value))}
								style={{ width: `${bar.value}%` }}
							/>
						</div>
						<span className="w-10 text-right text-xs font-semibold text-forge-primary">
							{bar.value}%
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
