import { Sparkles } from 'lucide-react';
import { quoteDetail } from '@/lib/mock-data';
import { CostBreakdownChart } from './CostBreakdownChart';
import { OperationsRouting } from './OperationsRouting';
import { SimilarJobsPanel } from './SimilarJobsPanel';

export function QuoteDetailPanel() {
	return (
		<div className="grid grid-cols-[1fr_280px] gap-6">
			{/* Left */}
			<div className="space-y-5">
				<CostBreakdownChart />
				<OperationsRouting />
			</div>

			{/* Right */}
			<div className="space-y-4">
				<div className="rounded-lg bg-forge-primary/[0.03] p-3">
					<div className="mb-1.5 flex items-center gap-1.5">
						<Sparkles className="h-3 w-3 text-forge-primary" />
						<span className="text-[10px] font-semibold text-forge-primary">AI Recommendation</span>
					</div>
					<p className="text-xs leading-relaxed text-forge-secondary">
						{quoteDetail.aiRecommendation}
					</p>
				</div>

				<SimilarJobsPanel />
			</div>
		</div>
	);
}
