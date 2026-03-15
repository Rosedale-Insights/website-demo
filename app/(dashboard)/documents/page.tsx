import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { PinnedDocs } from '@/components/documents/PinnedDocs';
import { DocTable } from '@/components/documents/DocTable';
import { documentStats } from '@/lib/mock-data';
import { Search, Plus } from 'lucide-react';

export default function DocumentsPage() {
	return (
		<div className="space-y-8">
			<PageHeader
				title="Document Library"
				subtitle="Technical specifications and manufacturing manuals"
			>
				<div className="flex items-center gap-2 rounded-xl border border-forge-divider bg-white px-4 py-2">
					<Search className="h-4 w-4 text-forge-hint" />
					<input
						type="text"
						placeholder="Search files..."
						className="w-48 bg-transparent text-sm text-forge-primary outline-none placeholder:text-forge-hint"
					/>
				</div>
				<button className="flex items-center gap-2 rounded-xl bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
					<Plus className="h-4 w-4" />
					Upload File
				</button>
			</PageHeader>

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
	);
}
