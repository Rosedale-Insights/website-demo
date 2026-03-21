'use client';

import { useState } from 'react';
import type { Machine } from '@/lib/mock-data';
import { machines } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const statusDot: Record<Machine['status'], string> = {
	Active: 'bg-forge-success',
	Stalled: 'bg-forge-error',
	Setup: 'bg-forge-hint',
	Loading: 'bg-forge-accent-warm',
};

const statusText: Record<Machine['status'], string> = {
	Active: 'text-forge-success',
	Stalled: 'text-forge-error',
	Setup: 'text-forge-hint',
	Loading: 'text-forge-accent-warm',
};

function formatRemaining(minutes: number) {
	const h = Math.floor(minutes / 60);
	const m = minutes % 60;
	return `${h}h ${m}m remaining`;
}

const COL = 'grid grid-cols-[130px_1.2fr_repeat(5,_1fr)_1.1fr] items-center gap-3';

export function MachineStatusGrid() {
	const statusOrder: Record<string, number> = { Stalled: 0, Loading: 1, Setup: 2, Active: 3 };
	const sorted = [...machines].sort(
		(a, b) => (statusOrder[a.status] ?? 9) - (statusOrder[b.status] ?? 9),
	);

	const activeCount = machines.filter((m) => m.status === 'Active').length;
	const offlineCount = machines.length - activeCount;
	const [selected, setSelected] = useState<string | null>(null);

	return (
		<div className="glass-solid overflow-hidden rounded-lg">
			<div className="flex items-center justify-between px-6 py-4">
				<div>
					<h3 className="text-sm font-semibold text-forge-primary">All Machines</h3>
					<p className="text-xs text-forge-hint">
						{activeCount} active · {offlineCount} offline
					</p>
				</div>
				<div className="flex gap-3">
					{(['Active', 'Stalled', 'Setup', 'Loading'] as const).map((s) => (
						<div key={s} className="flex items-center gap-1">
							<span className={cn('h-2 w-2 rounded-full', statusDot[s])} />
							<span className="text-[10px] text-forge-hint">{s}</span>
						</div>
					))}
				</div>
			</div>

			{/* Header */}
			<div className={cn(COL, 'border-t border-forge-divider bg-black/[0.02] px-6 py-2')}>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Status
				</span>
				<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Machine
				</span>
				<span className="text-center text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					OEE
				</span>
				<span className="text-center text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Active
				</span>
				<span className="text-center text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Stalled
				</span>
				<span className="text-center text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Setup
				</span>
				<span className="text-center text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Loading
				</span>
				<span className="text-right text-[10px] font-medium uppercase tracking-wider text-forge-hint">
					Production
				</span>
			</div>

			{/* Rows */}
			{sorted.map((m) => {
				const isSelected = selected === m.id;
				const isDimmed = selected !== null && !isSelected;
				return (
					<div
						key={m.id}
						onClick={() => setSelected(isSelected ? null : m.id)}
						className={cn(
							COL,
							'cursor-pointer border-t border-forge-divider px-6 transition-all duration-200',
							isSelected
								? 'relative z-10 bg-white py-4 ring-1 ring-forge-primary/10 shadow-[0_0_12px_rgba(0,0,0,0.12)]'
								: 'py-2.5 hover:bg-black/[0.01]',
							isDimmed && 'opacity-40',
						)}
					>
						{/* Status + health score below */}
						<div>
							<div className="flex items-center gap-1.5">
								<span className={cn('h-2 w-2 shrink-0 rounded-full', statusDot[m.status])} />
								<span className={cn('text-xs font-medium', statusText[m.status])}>{m.status}</span>
							</div>
							<p className="mt-0.5 pl-3.5 whitespace-nowrap text-[10px] text-forge-hint">
								Health {m.healthScore}/100
							</p>
						</div>
						{/* Machine */}
						<div>
							<p className="text-xs font-semibold text-forge-primary">{m.id}</p>
							<p className="truncate text-[11px] text-forge-hint">{m.name}</p>
						</div>
						<span className="text-center text-xs text-forge-secondary">
							{m.oee ? `${Math.round(m.oee.overall)}%` : '—'}
						</span>
						<span className="text-center text-xs text-forge-secondary">{m.pctActive}%</span>
						<span className="text-center text-xs text-forge-secondary">{m.pctStalled}%</span>
						<span className="text-center text-xs text-forge-secondary">{m.pctSetup}%</span>
						<span className="text-center text-xs text-forge-secondary">{m.pctLoading}%</span>
						{/* Production */}
						{m.productionProgress != null ? (
							<div className="text-right">
								<p className="text-xs font-medium text-forge-primary">{m.productionProgress}%</p>
								{m.remainingMinutes != null && (
									<p className="text-[10px] text-forge-hint">{formatRemaining(m.remainingMinutes)}</p>
								)}
							</div>
						) : (
							<span className="text-right text-xs text-forge-hint">—</span>
						)}
					</div>
				);
			})}
		</div>
	);
}
