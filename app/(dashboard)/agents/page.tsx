import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { AgentCard } from '@/components/agents/AgentCard';
import { LiveActivity } from '@/components/agents/LiveActivity';
import { PerformanceChart } from '@/components/agents/PerformanceChart';
import { agentWorkspaceStats, specializedAgents } from '@/lib/mock-data';
import { Plus } from 'lucide-react';

export default function AgentsPage() {
	return (
		<div className="space-y-8">
			<PageHeader
				title="Agent Workspace"
				subtitle="Manage and deploy specialized intelligence units across your floor."
			>
				<button className="flex items-center gap-2 rounded-xl bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
					<Plus className="h-4 w-4" />
					Deploy New Agent
				</button>
			</PageHeader>

			<div className="grid grid-cols-3 gap-4">
				<StatCard
					title="Active Tasks"
					value={String(agentWorkspaceStats.activeTasks)}
				/>
				<StatCard title="Efficiency Gain" value={agentWorkspaceStats.efficiencyGain} />
				<StatCard title="Compute Usage" value={agentWorkspaceStats.computeUsage} />
			</div>

			<div className="grid grid-cols-[1fr_340px] gap-6">
				{/* Left: Agent Cards */}
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
				{/* Right: Activity + Performance */}
				<div className="space-y-4">
					<LiveActivity />
					<PerformanceChart />
				</div>
			</div>
		</div>
	);
}
