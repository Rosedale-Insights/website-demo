'use client';

import { useState } from 'react';
import {
	CheckCircle2,
	ChevronDown,
	ChevronRight,
	Clock,
	Eye,
	FileEdit,
	Trophy,
	XCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { enhancedQuoteTableRows } from '@/lib/mock-data';
import type { EnhancedQuoteRow } from '@/lib/mock-data';
import { QuoteFilterTabs } from './QuoteFilterTabs';
import { QuoteDetailPanel } from './QuoteDetailPanel';

const statusConfig: Record<
	EnhancedQuoteRow['status'],
	{ icon: typeof CheckCircle2; iconColor: string }
> = {
	Draft: { icon: FileEdit, iconColor: 'text-forge-primary' },
	Review: { icon: Eye, iconColor: 'text-forge-secondary' },
	Sent: { icon: Clock, iconColor: 'text-forge-accent-warm' },
	Won: { icon: Trophy, iconColor: 'text-forge-success' },
	Lost: { icon: XCircle, iconColor: 'text-forge-error' },
	Expired: { icon: XCircle, iconColor: 'text-forge-hint' },
};

const marginColor = (m: number) => {
	if (m >= 25) return 'bg-forge-success';
	if (m >= 15) return 'bg-forge-accent-warm';
	return 'bg-forge-error';
};

export function QuoteTable() {
	const [filter, setFilter] = useState('All');
	const [expandedId, setExpandedId] = useState<string | null>(null);

	const filtered =
		filter === 'All'
			? enhancedQuoteTableRows
			: enhancedQuoteTableRows.filter((r) => r.status === filter);

	return (
		<div>
			<div className="mb-4">
				<QuoteFilterTabs active={filter} onChange={setFilter} />
			</div>

			<div className="glass-solid overflow-hidden rounded-lg">
				{/* Header */}
				<div className="grid grid-cols-[24px_1.8fr_2fr_1fr_1fr_80px_1fr] items-center gap-4 border-b border-forge-divider bg-black/[0.02] px-6 py-3">
					<span />
					<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
						Client & ID
					</span>
					<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
						Project
					</span>
					<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
						Amount
					</span>
					<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
						Margin
					</span>
					<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
						Conf.
					</span>
					<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
						Status
					</span>
				</div>

				{/* Rows */}
				{filtered.map((row) => {
					const status = statusConfig[row.status];
					const StatusIcon = status.icon;
					const isExpanded = expandedId === row.quoteId;

					return (
						<div key={row.quoteId}>
							<div
								className="grid cursor-pointer grid-cols-[24px_1.8fr_2fr_1fr_1fr_80px_1fr] items-center gap-4 border-b border-forge-divider px-6 py-4 transition-colors hover:bg-black/[0.01]"
								onClick={() => setExpandedId(isExpanded ? null : row.quoteId)}
								onKeyDown={(e) => {
									if (e.key === 'Enter') setExpandedId(isExpanded ? null : row.quoteId);
								}}
								role="button"
								tabIndex={0}
							>
								{isExpanded ? (
									<ChevronDown className="h-3.5 w-3.5 text-forge-hint" />
								) : (
									<ChevronRight className="h-3.5 w-3.5 text-forge-hint" />
								)}
								<div>
									<p className="font-medium text-forge-primary">{row.client}</p>
									<p className="text-xs text-forge-hint">{row.quoteId}</p>
								</div>
								<p className="truncate text-sm text-forge-secondary">{row.project}</p>
								<p className="text-sm font-medium text-forge-primary">
									${row.amount.toLocaleString()}
								</p>
								{/* Margin bar */}
								<div className="flex items-center gap-2">
									<div className="h-1.5 w-12 rounded-full bg-black/[0.04]">
										<div
											className={cn('h-full rounded-r-sm', marginColor(row.margin))}
											style={{ width: `${Math.min((row.margin / 40) * 100, 100)}%` }}
										/>
									</div>
									<span className="text-xs text-forge-secondary">{row.margin}%</span>
								</div>
								<span className="text-xs text-forge-hint">{row.confidenceScore}%</span>
								<div className="flex items-center gap-1.5">
									<StatusIcon className={cn('h-3.5 w-3.5', status.iconColor)} />
									<span className="text-xs font-medium text-forge-secondary">
										{row.status}
									</span>
								</div>
							</div>

							{/* Expandable detail */}
							{isExpanded && (
								<div className="border-b border-forge-divider bg-black/[0.01] px-6 py-6">
									<QuoteDetailPanel />
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
