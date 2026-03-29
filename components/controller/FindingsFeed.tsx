'use client';

import { useState } from 'react';
import { InfoTooltip } from '@/components/InfoTooltip';
import type { Finding, FindingStatus } from '@/lib/mock-data';
import { findings as initialFindings } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { FindingDetail } from './FindingDetail';

const severityStyle: Record<string, string> = {
	Critical: 'text-forge-error font-medium',
	High: 'text-forge-primary font-medium',
	Medium: 'text-forge-secondary',
	Low: 'text-forge-hint',
};

const statusStyle: Record<string, string> = {
	New: 'text-forge-primary',
	'Under Review': 'text-forge-secondary',
	Confirmed: 'text-forge-accent-warm',
	Dismissed: 'text-forge-hint',
	Resolved: 'text-forge-success',
};

const actionMap: Record<string, FindingStatus> = {
	dismiss: 'Dismissed',
	confirm: 'Confirmed',
	resolve: 'Resolved',
};

export function FindingsFeed() {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [findingsState, setFindingsState] = useState<Finding[]>(initialFindings);

	function handleAction(findingId: string, action: 'dismiss' | 'confirm' | 'resolve') {
		setFindingsState((prev) =>
			prev.map((f) => (f.id === findingId ? { ...f, status: actionMap[action] } : f)),
		);
		setSelectedId(null);
	}

	return (
		<div className="glass-solid overflow-hidden rounded-lg">
			{/* Header */}
			<div className="flex items-center justify-between border-b border-forge-divider px-6 py-4">
				<h3 className="text-sm font-semibold text-forge-primary">Anomaly Feed</h3>
				<div className="flex items-center gap-3">
					<span className="text-xs text-forge-hint">{findingsState.length} findings</span>
					<InfoTooltip
						title="Anomaly Feed"
						content={
							<>
								<p className="mb-2">
									AI-detected financial anomalies across purchasing, freight, and vendor contracts.
									Click a finding to expand evidence and take action.
								</p>
								<p className="mb-1 font-medium text-forge-primary">Key terms</p>
								<ul className="mb-2 list-inside list-disc space-y-0.5">
									<li>
										<strong>Severity</strong> - Critical, High, Medium, or Low based on dollar
										impact and urgency
									</li>
									<li>
										<strong>Dollar Impact</strong> - estimated savings if the finding is resolved
									</li>
									<li>
										<strong>Status</strong> - New (unreviewed), Under Review, Confirmed, Dismissed,
										or Resolved
									</li>
								</ul>
								<p className="mb-1 font-medium text-forge-primary">How to read</p>
								<p>
									Start with Critical findings at the top. Expand a finding to see the AI
									explanation and evidence, then Dismiss, Confirm, or Resolve it.
								</p>
							</>
						}
					/>
				</div>
			</div>

			{/* Findings list */}
			{findingsState.map((finding) => {
				const isSelected = selectedId === finding.id;

				return (
					<div key={finding.id}>
						<div
							className={cn(
								'cursor-pointer border-b border-forge-divider px-6 py-4 transition-all',
								isSelected
									? 'bg-white ring-1 ring-forge-primary/10 shadow-sm'
									: selectedId
										? 'opacity-40 hover:opacity-70'
										: 'hover:bg-black/[0.01]',
							)}
							onClick={() => setSelectedId(isSelected ? null : finding.id)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') setSelectedId(isSelected ? null : finding.id);
							}}
							role="button"
							tabIndex={0}
						>
							{/* Top row: title + status */}
							<div className="mb-1 flex items-start justify-between gap-3">
								<p className="text-sm font-medium text-forge-primary">{finding.title}</p>
								<span
									className={cn(
										'shrink-0 rounded-full bg-black/[0.04] px-2.5 py-0.5 text-xs font-medium',
										statusStyle[finding.status],
									)}
								>
									{finding.status}
								</span>
							</div>

							{/* Bottom row: severity, impact, date */}
							<div className="flex items-center gap-4">
								<span className={cn('text-xs', severityStyle[finding.severity])}>
									{finding.severity}
								</span>
								<span className="text-xs font-semibold text-forge-primary">
									${finding.dollarImpact.toLocaleString()}
								</span>
								<span className="text-xs text-forge-hint">{finding.type}</span>
								<span className="ml-auto text-xs text-forge-hint">{finding.detectedDate}</span>
							</div>
						</div>

						{/* Expanded detail */}
						{isSelected && (
							<FindingDetail
								finding={finding}
								onAction={(action) => handleAction(finding.id, action)}
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}
