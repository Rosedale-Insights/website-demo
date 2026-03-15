import { ClipboardList, Cog, FileText, MoreVertical, PenTool } from 'lucide-react';
import { pinnedDocuments } from '@/lib/mock-data';

const iconMap: Record<string, React.ElementType> = { FileText, Cog, ClipboardList, PenTool };

export function PinnedDocs() {
	return (
		<div>
			<h3 className="mb-4 text-lg font-semibold text-forge-primary">Pinned Documents</h3>
			<div className="grid grid-cols-4 gap-4">
				{pinnedDocuments.map((doc) => {
					const Icon = iconMap[doc.icon] || FileText;
					return (
						<div
							key={doc.id}
							className="glass-solid rounded-2xl p-5 transition-shadow hover:shadow-glass-md"
						>
							<div className="flex items-start justify-between">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.03]">
									<Icon className="h-5 w-5 text-forge-primary" />
								</div>
								<button
									type="button"
									className="text-forge-hint transition-colors hover:text-forge-primary"
								>
									<MoreVertical className="h-4 w-4" />
								</button>
							</div>
							<p className="mt-4 font-medium text-forge-primary">{doc.name}</p>
							<p className="text-xs text-forge-hint">Updated {doc.updated}</p>
							<div className="mt-4 flex items-center justify-between">
								<span className="rounded-full border border-forge-divider px-3 py-1 text-xs font-medium text-forge-secondary">
									{doc.tag}
								</span>
								<span className="text-xs text-forge-hint">{doc.size}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
