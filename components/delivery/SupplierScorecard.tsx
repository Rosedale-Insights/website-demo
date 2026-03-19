'use client';

import { TrendingDown, TrendingUp, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { suppliers } from '@/lib/mock-data';

const trendIcons = {
	up: TrendingUp,
	down: TrendingDown,
	stable: Minus,
};

const riskColors = {
	Low: 'text-forge-success',
	Medium: 'text-forge-accent-warm',
	High: 'text-forge-error',
};

const barColors = {
	Low: 'bg-forge-success',
	Medium: 'bg-forge-accent-warm',
	High: 'bg-forge-error',
};

export function SupplierScorecard() {
	const sorted = [...suppliers].sort((a, b) => a.onTimeRate - b.onTimeRate);

	return (
		<div className="glass-solid overflow-hidden rounded-lg">
			<div className="border-b border-forge-divider px-6 py-4">
				<h3 className="text-sm font-semibold text-forge-primary">Supplier Scorecard</h3>
				<p className="text-xs text-forge-hint">Ranked by on-time delivery rate</p>
			</div>

			<div className="divide-y divide-forge-divider">
				{sorted.map((supplier) => {
					const TrendIcon = trendIcons[supplier.reliabilityTrend];
					return (
						<div
							key={supplier.id}
							className="flex items-center gap-4 px-6 py-3 transition-colors hover:bg-black/[0.01]"
						>
							{/* Name + location */}
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-forge-primary">
									{supplier.name}
								</p>
								<p className="text-xs text-forge-hint">{supplier.location}</p>
							</div>

							{/* OTD rate bar */}
							<div className="w-24">
								<div className="mb-0.5 flex items-center justify-between">
									<span className={cn('text-xs font-semibold', riskColors[supplier.riskLevel])}>
										{supplier.onTimeRate}%
									</span>
								</div>
								<div className="h-1.5 w-full rounded-full bg-black/[0.04]">
									<div
										className={cn('h-full rounded-r-sm', barColors[supplier.riskLevel])}
										style={{ width: `${supplier.onTimeRate}%` }}
									/>
								</div>
							</div>

							{/* Trend icon */}
							<TrendIcon
								className={cn(
									'h-3.5 w-3.5 shrink-0',
									supplier.reliabilityTrend === 'up' && 'text-forge-success',
									supplier.reliabilityTrend === 'down' && 'text-forge-error',
									supplier.reliabilityTrend === 'stable' && 'text-forge-hint',
								)}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
