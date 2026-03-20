'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { AgentCard } from '@/components/agents/AgentCard';
import { LiveActivity } from '@/components/agents/LiveActivity';
import { PerformanceChart } from '@/components/agents/PerformanceChart';
import { DocTable } from '@/components/documents/DocTable';
import { PinnedDocs } from '@/components/documents/PinnedDocs';
import { StatCard } from '@/components/StatCard';
import { AiSettings } from '@/components/settings/AiSettings';
import { ProfileForm } from '@/components/settings/ProfileForm';
import { SecuritySection } from '@/components/settings/SecuritySection';
import { agentWorkspaceStats, documentStats, specializedAgents } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const tabs = [
	{ key: 'profile', label: 'Profile' },
	{ key: 'ai', label: 'AI Settings' },
	{ key: 'agents', label: 'Agents' },
	{ key: 'documents', label: 'Documents' },
	{ key: 'security', label: 'Security' },
] as const;

type TabKey = (typeof tabs)[number]['key'];

function SettingsContent() {
	const searchParams = useSearchParams();
	const activeTab = (searchParams.get('tab') as TabKey) || 'profile';

	const isWideTab = activeTab === 'agents' || activeTab === 'documents';

	return (
		<div className={cn('space-y-8', !isWideTab && 'mx-auto max-w-2xl')}>
			<div>
				<h1 className="text-3xl font-semibold tracking-tight text-forge-primary">Settings</h1>
				<p className="mt-1 text-sm text-forge-secondary">
					Manage your manufacturing workspace and AI preferences.
				</p>
			</div>

			{/* Tab Bar */}
			<div className="flex gap-1 border-b border-forge-divider">
				{tabs.map((tab) => (
					<Link
						key={tab.key}
						href={`/settings?tab=${tab.key}`}
						className={cn(
							'px-4 py-2.5 text-sm font-medium transition-colors',
							activeTab === tab.key
								? 'border-b-2 border-forge-primary text-forge-primary'
								: 'text-forge-secondary hover:text-forge-primary',
						)}
					>
						{tab.label}
					</Link>
				))}
			</div>

			{/* Tab Content */}
			{activeTab === 'profile' && (
				<>
					<ProfileForm />
					<SettingsFooter />
				</>
			)}

			{activeTab === 'ai' && (
				<>
					<AiSettings />
					<SettingsFooter />
				</>
			)}

			{activeTab === 'agents' && (
				<div className="space-y-6">
					<div className="grid grid-cols-3 gap-4">
						<StatCard title="Active Tasks" value={String(agentWorkspaceStats.activeTasks)} />
						<StatCard title="Efficiency Gain" value={agentWorkspaceStats.efficiencyGain} />
						<StatCard title="Compute Usage" value={agentWorkspaceStats.computeUsage} />
					</div>
					<div className="grid grid-cols-[1fr_340px] gap-6">
						<div>
							<h3 className="mb-4 text-lg font-semibold text-forge-primary">
								Active Specialized Units
							</h3>
							<div className="grid grid-cols-2 gap-4">
								{specializedAgents.map((agent) => (
									<AgentCard key={agent.id} {...agent} />
								))}
							</div>
						</div>
						<div className="space-y-4">
							<LiveActivity />
							<PerformanceChart />
						</div>
					</div>
				</div>
			)}

			{activeTab === 'documents' && (
				<div className="space-y-6">
					<div className="grid grid-cols-3 gap-4">
						<StatCard title="Total Storage" value={documentStats.totalStorage} />
						<StatCard
							title="Last Sync"
							value={documentStats.lastSync}
							subtitle={documentStats.lastSyncStatus}
						/>
						<StatCard
							title="Knowledge Index"
							value={documentStats.knowledgeIndex}
							subtitle={documentStats.knowledgeIndexDelta}
						/>
					</div>
					<PinnedDocs />
					<DocTable />
				</div>
			)}

			{activeTab === 'security' && (
				<>
					<SecuritySection />
					<SettingsFooter />
				</>
			)}
		</div>
	);
}

function SettingsFooter() {
	return (
		<div className="flex items-center justify-end gap-4 border-t border-forge-divider pt-6">
			<button
				type="button"
				className="text-sm text-forge-secondary transition-colors hover:text-forge-primary"
			>
				Discard Changes
			</button>
			<button
				type="button"
				className="rounded-lg bg-forge-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
			>
				Save Configuration
			</button>
		</div>
	);
}

export default function SettingsPage() {
	return (
		<Suspense>
			<SettingsContent />
		</Suspense>
	);
}
