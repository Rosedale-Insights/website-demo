'use client';

import { useState } from 'react';
import { aiSettings, connectedRepositories } from '@/lib/mock-data';
import { Link as LinkIcon, Folder, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

function Toggle({
	checked,
	onChange,
}: { checked: boolean; onChange: (v: boolean) => void }) {
	return (
		<button
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

const repoIcons: Record<string, React.ElementType> = { Link: LinkIcon, Folder };

export function AiSettings() {
	const [docSync, setDocSync] = useState(aiSettings.realTimeDocSync);
	const [autonomy, setAutonomy] = useState(aiSettings.agentAutonomy);
	const [verbosity, setVerbosity] = useState(aiSettings.technicalVerbosity);

	const toggles = [
		{
			label: 'Real-time Doc Sync',
			desc: 'Automatically index new technical manuals and PDFs.',
			checked: docSync,
			onChange: setDocSync,
		},
		{
			label: 'Agent Autonomy',
			desc: 'Allow agents to initiate quoting drafts without approval.',
			checked: autonomy,
			onChange: setAutonomy,
		},
		{
			label: 'Technical Verbosity',
			desc: 'AI responses will include deep engineering specifications.',
			checked: verbosity,
			onChange: setVerbosity,
		},
	];

	return (
		<div>
			<h2 className="text-lg font-semibold text-forge-primary">AI & Knowledge Base</h2>
			<p className="mt-0.5 text-sm text-forge-secondary">
				Control how agents access company documentation.
			</p>

			<div className="mt-6 space-y-5">
				{toggles.map((t) => (
					<div key={t.label} className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium text-forge-primary">{t.label}</p>
							<p className="text-xs text-forge-hint">{t.desc}</p>
						</div>
						<Toggle checked={t.checked} onChange={t.onChange} />
					</div>
				))}
			</div>

			<div className="mt-6 border-t border-forge-divider pt-5">
				<p className="mb-3 text-xs font-medium text-forge-secondary">
					Connected Repositories
				</p>
				<div className="flex flex-wrap items-center gap-2">
					{connectedRepositories.map((repo) => {
						const Icon = repoIcons[repo.icon] || LinkIcon;
						return (
							<span
								key={repo.name}
								className="flex items-center gap-2 rounded-full border border-forge-divider bg-white px-4 py-2 text-sm text-forge-primary"
							>
								<Icon className="h-3.5 w-3.5 text-forge-hint" />
								{repo.name}
							</span>
						);
					})}
					<button className="flex items-center gap-1.5 text-sm text-forge-secondary transition-colors hover:text-forge-primary">
						<Plus className="h-3.5 w-3.5" />
						Add Source
					</button>
				</div>
			</div>
		</div>
	);
}
