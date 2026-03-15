import { PageHeader } from '@/components/PageHeader';
import { ConfigForm } from '@/components/agents/ConfigForm';
import { Guardrails } from '@/components/agents/Guardrails';
import { PerformanceAnalytics } from '@/components/agents/PerformanceAnalytics';
import { agentConfigDefaults } from '@/lib/mock-data';
import { FileText, Database, Plus } from 'lucide-react';

const dbIcons: Record<string, React.ElementType> = { FileText, Database };

export default function AgentConfigPage() {
	return (
		<div className="space-y-8">
			{/* Breadcrumb */}
			<div className="flex items-center gap-2 text-sm text-forge-secondary">
				<a
					href="/agents"
					className="transition-colors hover:text-forge-primary"
				>
					Agents
				</a>
				<span className="text-forge-hint">&gt;</span>
				<span className="font-medium text-forge-primary">
					{agentConfigDefaults.name}
				</span>
			</div>

			<PageHeader title="Agent Configuration" subtitle="">
				<button className="text-sm text-forge-secondary transition-colors hover:text-forge-primary">
					Discard
				</button>
				<button className="rounded-xl bg-forge-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
					Deploy Agent
				</button>
			</PageHeader>

			<div className="grid grid-cols-[1fr_380px] gap-6">
				{/* Left */}
				<div className="space-y-6">
					<ConfigForm />
					{/* Knowledge & Data Access */}
					<div className="glass-solid rounded-2xl p-6">
						<h3 className="mb-4 text-lg font-semibold text-forge-primary">
							Knowledge & Data Access
						</h3>
						<p className="mb-4 text-xs font-medium text-forge-secondary">
							Connected Databases
						</p>
						<div className="space-y-3">
							{agentConfigDefaults.connectedDatabases.map((db) => {
								const Icon = dbIcons[db.icon] || FileText;
								return (
									<div
										key={db.name}
										className="flex items-center gap-3 rounded-xl bg-forge-primary/[0.04] px-4 py-3"
									>
										<Icon className="h-4 w-4 text-forge-secondary" />
										<span className="text-sm text-forge-primary">{db.name}</span>
										<div className="ml-auto h-2 w-2 rounded-full bg-forge-success" />
									</div>
								);
							})}
						</div>
						<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-forge-divider py-3 text-sm text-forge-secondary transition-colors hover:border-forge-primary/20 hover:text-forge-primary">
							<Plus className="h-4 w-4" />
							Add Knowledge Source
						</button>
					</div>
				</div>

				{/* Right */}
				<div className="space-y-6">
					<Guardrails />
					<PerformanceAnalytics />
				</div>
			</div>
		</div>
	);
}
