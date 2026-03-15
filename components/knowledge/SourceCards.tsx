import { Archive, Database, FileText } from 'lucide-react';
import { knowledgeSources } from '@/lib/mock-data';

const iconMap: Record<string, React.ElementType> = { FileText, Database, Archive };

export function SourceCards() {
	return (
		<div className="flex justify-center gap-4">
			{knowledgeSources.map((source) => {
				const Icon = iconMap[source.icon] || FileText;
				return (
					<div
						key={source.name}
						className="flex w-[180px] flex-col gap-2 rounded-2xl bg-forge-primary/[0.04] p-5 transition-colors hover:bg-forge-primary/[0.07]"
					>
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forge-primary">
							<Icon className="h-5 w-5 text-white" />
						</div>
						<p className="font-medium text-forge-primary">{source.name}</p>
						<p className="text-xs text-forge-hint">{source.size}</p>
					</div>
				);
			})}
		</div>
	);
}
