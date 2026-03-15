import { CheckCircle2, Clock, FileEdit, MoreVertical, XCircle } from 'lucide-react';
import { quoteTableRows } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const statusConfig: Record<string, { icon: typeof CheckCircle2; iconColor: string }> = {
	Draft: { icon: FileEdit, iconColor: 'text-forge-primary' },
	Pending: { icon: Clock, iconColor: 'text-forge-accent-warm' },
	Sent: { icon: CheckCircle2, iconColor: 'text-forge-success' },
	Expired: { icon: XCircle, iconColor: 'text-forge-error' },
};

export function QuoteTable() {
	return (
		<div className="glass-solid overflow-hidden rounded-2xl">
			{/* Header */}
			<div className="grid grid-cols-[2fr_2fr_1.2fr_1.2fr_1fr_48px] gap-4 border-b border-forge-divider bg-black/[0.02] px-6 py-3">
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Client & ID
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Project Name
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Date</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Total Amount
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Status</span>
				<span />
			</div>
			{/* Rows */}
			{quoteTableRows.map((row) => {
				const status = statusConfig[row.status];
				const StatusIcon = status.icon;
				return (
					<div
						key={row.quoteId}
						className="grid grid-cols-[2fr_2fr_1.2fr_1.2fr_1fr_48px] items-center gap-4 border-b border-forge-divider px-6 py-4 transition-colors hover:bg-black/[0.01]"
					>
						<div>
							<p className="font-medium text-forge-primary">{row.client}</p>
							<p className="text-xs text-forge-hint">{row.quoteId}</p>
						</div>
						<p className="text-sm text-forge-secondary">{row.project}</p>
						<p className="text-sm text-forge-secondary">{row.date}</p>
						<p className="text-sm font-medium text-forge-primary">
							${row.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
						</p>
						<div className="flex items-center gap-1.5">
							<StatusIcon className={cn('h-3.5 w-3.5', status.iconColor)} />
							<span className="text-xs font-medium text-forge-secondary">{row.status}</span>
						</div>
						<button
							type="button"
							className="flex h-8 w-8 items-center justify-center rounded-lg text-forge-hint transition-colors hover:bg-black/[0.03] hover:text-forge-primary"
						>
							<MoreVertical className="h-4 w-4" />
						</button>
					</div>
				);
			})}
		</div>
	);
}
