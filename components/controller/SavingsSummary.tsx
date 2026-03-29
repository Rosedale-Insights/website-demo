import { InfoTooltip } from '@/components/InfoTooltip';
import { savingsBreakdown } from '@/lib/mock-data';

export function SavingsSummary() {
	return (
		<div className="glass-solid rounded-lg p-6">
			<div className="mb-4 flex items-center justify-between">
				<h3 className="text-sm font-semibold text-forge-primary">Savings Summary</h3>
				<InfoTooltip
					title="Savings Summary"
					content={
						<>
							<p className="mb-2">
								Tracks savings identified and realized through the Vigilant Controller's anomaly
								detection over the current year.
							</p>
							<p className="mb-1 font-medium text-forge-primary">Key terms</p>
							<ul className="mb-2 list-inside list-disc space-y-0.5">
								<li>
									<strong>YTD Realized</strong> - confirmed savings already captured
								</li>
								<li>
									<strong>Identified</strong> - potential savings from open findings not yet acted
									on
								</li>
							</ul>
							<p className="mb-1 font-medium text-forge-primary">How to read</p>
							<p>
								The breakdown shows which finding categories contribute most to savings. Focus on
								the largest categories for maximum ROI.
							</p>
						</>
					}
				/>
			</div>

			{/* YTD Realized */}
			<div className="mb-1">
				<p className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					YTD Realized
				</p>
				<p className="text-3xl font-semibold tracking-tight text-forge-primary">$284.9K</p>
			</div>

			{/* Identified */}
			<div className="mb-5">
				<p className="text-[10px] text-forge-hint">
					Identified (not yet acted on):{' '}
					<span className="font-medium text-forge-secondary">$127.4K</span>
				</p>
			</div>

			{/* Breakdown */}
			<div className="space-y-2">
				<p className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Breakdown by Type
				</p>
				{savingsBreakdown.map((item) => (
					<div
						key={item.type}
						className="flex items-center justify-between border-b border-forge-divider pb-2 last:border-b-0"
					>
						<span className="text-xs text-forge-secondary">{item.type}</span>
						<span className="text-xs font-medium text-forge-primary">
							${(item.amount / 1000).toFixed(1)}K
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
