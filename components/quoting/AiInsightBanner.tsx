import { Sparkles } from 'lucide-react';

export function AiInsightBanner() {
	return (
		<div className="flex items-center gap-4 rounded-2xl bg-forge-primary p-6">
			<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
				<Sparkles className="h-5 w-5 text-white" />
			</div>
			<div className="flex-1">
				<p className="font-semibold text-white">Forge AI Insight</p>
				<p className="mt-0.5 text-sm text-white/70">
					Based on current material costs for Titanium Grade 5, we suggest increasing the margin on
					QT-8821 by 4% to maintain target profitability.
				</p>
			</div>
			<button
				type="button"
				className="shrink-0 rounded-xl border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
			>
				Apply Suggestion
			</button>
		</div>
	);
}
