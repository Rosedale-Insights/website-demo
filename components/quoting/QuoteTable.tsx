import { MoreVertical } from 'lucide-react';
import { quoteTableRows } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const statusStyles: Record<string, string> = {
	Draft: 'bg-forge-primary/[0.08] text-forge-primary',
	Pending: 'bg-forge-accent-warm/[0.12] text-forge-accent-warm',
	Sent: 'bg-forge-success/[0.12] text-forge-success',
	Expired: 'bg-forge-error/[0.12] text-forge-error',
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
			{quoteTableRows.map((row) => (
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
					<span className={cn('inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-semibold', statusStyles[row.status])}>{row.status}</span>
					<button
						type="button"
						className="flex h-8 w-8 items-center justify-center rounded-lg text-forge-hint transition-colors hover:bg-black/[0.03] hover:text-forge-primary"
					>
						<MoreVertical className="h-4 w-4" />
					</button>
				</div>
			))}
		</div>
	);
}
