import { PageHeader } from '@/components/PageHeader';
import { SourceCards } from '@/components/knowledge/SourceCards';
import { ChatInterface } from '@/components/knowledge/ChatInterface';
import { recentQueries } from '@/lib/mock-data';
import { Plus, Settings, Clock } from 'lucide-react';

export default function KnowledgeBasePage() {
	return (
		<div className="flex h-[calc(100vh-64px)] flex-col">
			<PageHeader
				title="Technical Knowledge Base"
				subtitle="AI-powered documentation retrieval"
			>
				<button className="flex items-center gap-2 rounded-xl border border-forge-divider bg-white px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]">
					<Plus className="h-4 w-4" />
					Upload Docs
				</button>
				<button className="flex h-10 w-10 items-center justify-center rounded-xl text-forge-hint transition-colors hover:bg-black/[0.03] hover:text-forge-primary">
					<Settings className="h-5 w-5" />
				</button>
			</PageHeader>

			{/* Hero */}
			<div className="mt-8 text-center">
				<h2 className="text-3xl font-semibold text-forge-primary">
					How can I help you today?
				</h2>
				<p className="mt-2 text-sm text-forge-secondary">
					Search across 1,240 technical manuals, safety protocols, and maintenance logs.
				</p>
			</div>

			{/* Source Cards */}
			<div className="mt-8">
				<SourceCards />
			</div>

			{/* Chat */}
			<div className="mt-8 flex min-h-0 flex-1">
				{/* Recent Queries sidebar */}
				<div className="w-48 shrink-0 pr-6">
					<p className="mb-3 text-[10px] font-medium uppercase tracking-widest text-forge-hint">
						Recent Queries
					</p>
					<div className="space-y-2">
						{recentQueries.map((q) => (
							<button
								key={q}
								className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm text-forge-secondary transition-colors hover:bg-black/[0.03] hover:text-forge-primary"
							>
								<Clock className="h-3.5 w-3.5 shrink-0 text-forge-hint" />
								{q}
							</button>
						))}
					</div>
				</div>
				{/* Chat Interface */}
				<div className="flex-1">
					<ChatInterface />
				</div>
			</div>
		</div>
	);
}
