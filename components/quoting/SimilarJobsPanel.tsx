import { CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { quoteDetail } from '@/lib/mock-data';

export function SimilarJobsPanel() {
	return (
		<div>
			<h4 className="mb-3 text-xs font-semibold text-forge-primary">Similar Historical Jobs</h4>
			<div className="space-y-2">
				{quoteDetail.similarJobs.map((job) => (
					<div
						key={job.jobId}
						className="rounded-lg border border-forge-divider bg-black/[0.01] p-3"
					>
						<div className="mb-1 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<span className="text-xs font-semibold text-forge-primary">{job.jobId}</span>
								<span
									className={cn(
										'inline-flex items-center gap-0.5 text-[10px] font-medium',
										job.outcome === 'Won' ? 'text-forge-success' : 'text-forge-error',
									)}
								>
									{job.outcome === 'Won' ? (
										<CheckCircle2 className="h-3 w-3" />
									) : (
										<XCircle className="h-3 w-3" />
									)}
									{job.outcome}
								</span>
							</div>
							<span className="rounded-full bg-forge-primary/10 px-2 py-0.5 text-[10px] font-semibold text-forge-primary">
								{job.similarity}% match
							</span>
						</div>
						<p className="text-xs text-forge-secondary">{job.partName}</p>
						<div className="mt-1 flex gap-3 text-[10px] text-forge-hint">
							<span>{job.material}</span>
							<span>Qty {job.quantity}</span>
							<span>${job.quotedPrice.toLocaleString()}/unit</span>
							<span>{job.margin}% margin</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
