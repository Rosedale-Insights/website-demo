import { Plus, Settings } from 'lucide-react';
import { ChatInterface } from '@/components/knowledge/ChatInterface';
import { PageHeader } from '@/components/PageHeader';

export default function KnowledgeBasePage() {
	return (
		<div className="flex h-[calc(100vh-64px)] flex-col">
			<PageHeader title="Technical Knowledge Base" subtitle="AI-powered documentation retrieval">
				<button
					type="button"
					className="flex items-center gap-2 rounded-xl border border-forge-divider bg-white px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]"
				>
					<Plus className="h-4 w-4" />
					Upload Docs
				</button>
				<button
					type="button"
					className="flex h-10 w-10 items-center justify-center rounded-xl text-forge-hint transition-colors hover:bg-black/[0.03] hover:text-forge-primary"
				>
					<Settings className="h-5 w-5" />
				</button>
			</PageHeader>

			{/* Chat */}
			<div className="mt-8 flex min-h-0 flex-1">
				<div className="flex-1">
					<ChatInterface />
				</div>
			</div>
		</div>
	);
}
