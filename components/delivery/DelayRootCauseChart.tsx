import { delayRootCauseData } from '@/lib/mock-data';

export function DelayRootCauseChart() {
	const total = delayRootCauseData.reduce((sum, d) => sum + d.value, 0);
	const maxValue = Math.max(...delayRootCauseData.map((d) => d.value));

	return (
		<div className="glass rounded-lg p-6">
			<h3 className="mb-1 text-sm font-semibold text-forge-primary">Delay Root Causes</h3>
			<p className="mb-6 text-xs text-forge-hint">Percentage by category</p>

			<div className="space-y-4">
				{delayRootCauseData.map((entry) => {
					const pct = Math.round((entry.value / total) * 100);
					return (
						<div key={entry.name}>
							<div className="mb-1.5 flex items-baseline justify-between">
								<span className="text-xs text-forge-secondary">{entry.name}</span>
								<span className="text-sm font-semibold text-forge-primary">{pct}%</span>
							</div>
							<div className="h-2 w-full rounded-full bg-black/[0.04]">
								<div
									className="h-full rounded-r-sm bg-forge-primary"
									style={{ width: `${(entry.value / maxValue) * 100}%` }}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
