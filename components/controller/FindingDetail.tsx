import type { Finding } from '@/lib/mock-data';

export function FindingDetail({
	finding,
	onAction,
}: {
	finding: Finding;
	onAction: (action: 'dismiss' | 'confirm' | 'resolve') => void;
}) {
	return (
		<div className="border-t border-forge-divider bg-black/[0.01] px-6 py-5">
			{/* AI Summary */}
			<p className="mb-4 text-xs leading-relaxed text-forge-secondary">{finding.aiSummary}</p>

			{/* Evidence */}
			<dl className="mb-4 grid grid-cols-[140px_1fr] gap-x-4 gap-y-1.5">
				{finding.evidence.map((e) => (
					<div key={e.label} className="contents">
						<dt className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
							{e.label}
						</dt>
						<dd className="text-xs text-forge-primary">{e.value}</dd>
					</div>
				))}
			</dl>

			{/* Actions */}
			<div className="flex items-center gap-3">
				<button
					type="button"
					onClick={() => onAction('dismiss')}
					className="rounded-lg border border-forge-divider bg-white px-4 py-2 text-xs font-medium text-forge-secondary transition-colors hover:bg-black/[0.02]"
				>
					Dismiss
				</button>
				<button
					type="button"
					onClick={() => onAction('confirm')}
					className="rounded-lg border border-forge-divider bg-white px-4 py-2 text-xs font-medium text-forge-primary transition-colors hover:bg-black/[0.02]"
				>
					Confirm Finding
				</button>
				<button
					type="button"
					onClick={() => onAction('resolve')}
					className="rounded-lg bg-forge-primary px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-forge-primary/90"
				>
					Resolve
				</button>
			</div>
		</div>
	);
}
