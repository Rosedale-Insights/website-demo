export function OeeBreakdown() {
	const bars = [
		{ label: 'Quality', value: 97.6 },
		{ label: 'Performance', value: 94.3 },
		{ label: 'Availability', value: 91.5 },
	];

	return (
		<div className="glass-solid rounded-lg p-5">
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
								className="h-full rounded-r-sm bg-forge-primary"
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
