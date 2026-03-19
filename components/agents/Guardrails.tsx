'use client';

import { useState } from 'react';
import { agentConfigDefaults } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
	return (
		<button
			type="button"
			onClick={() => onChange(!checked)}
			className={cn(
				'relative h-6 w-11 rounded-full transition-colors',
				checked ? 'bg-forge-primary' : 'bg-black/10',
			)}
		>
			<div
				className={cn(
					'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform',
					checked ? 'translate-x-[22px]' : 'translate-x-0.5',
				)}
			/>
		</button>
	);
}

export function Guardrails() {
	const [hitl, setHitl] = useState(agentConfigDefaults.humanInTheLoop);
	const [autoQuote, setAutoQuote] = useState(agentConfigDefaults.autonomousQuoting);
	const [slack, setSlack] = useState(agentConfigDefaults.directSlackAlerts);
	const [threshold, setThreshold] = useState(agentConfigDefaults.confidenceThreshold);

	const toggles = [
		{
			label: 'Human-in-the-loop',
			description: 'Require approval for high-risk actions',
			checked: hitl,
			onChange: setHitl,
		},
		{
			label: 'Autonomous Quoting',
			description: 'Allow agent to generate draft quotes',
			checked: autoQuote,
			onChange: setAutoQuote,
		},
		{
			label: 'Direct Slack Alerts',
			description: 'Send anomalies to #production-floor',
			checked: slack,
			onChange: setSlack,
		},
	];

	return (
		<div className="glass-solid rounded-lg p-6">
			<h3 className="mb-6 text-lg font-semibold text-forge-primary">Operational Guardrails</h3>
			<div className="space-y-5">
				{toggles.map((t) => (
					<div key={t.label} className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-forge-primary">{t.label}</p>
							<p className="text-xs text-forge-hint">{t.description}</p>
						</div>
						<Toggle checked={t.checked} onChange={t.onChange} />
					</div>
				))}
			</div>
			<div className="mt-6 border-t border-forge-divider pt-5">
				<div className="mb-3 flex items-center justify-between">
					<p className="text-sm text-forge-secondary">Confidence Threshold</p>
				</div>
				<div className="flex items-center gap-4">
					<input
						type="range"
						min={50}
						max={100}
						value={threshold}
						onChange={(e) => setThreshold(Number(e.target.value))}
						className="flex-1 accent-forge-primary"
					/>
					<span className="text-sm font-semibold text-forge-primary">{threshold}%</span>
				</div>
			</div>
		</div>
	);
}
