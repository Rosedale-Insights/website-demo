import { Sparkles } from 'lucide-react';
import { homeBriefItems } from '@/lib/mock-data';

export function IntelligenceBrief() {
	return (
		<div className="space-y-3">
			{homeBriefItems.map((item) => (
				<div
					key={item.title}
					className="flex items-center gap-4 rounded-lg border border-white/10 bg-forge-primary p-5"
				>
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
						<Sparkles className="h-5 w-5 text-white" />
					</div>
					<div className="min-w-0 flex-1">
						<p className="font-semibold text-white">{item.title}</p>
						<p className="mt-0.5 text-sm text-white/70">{item.description}</p>
					</div>
					<button
						type="button"
						className="w-40 shrink-0 rounded-lg border border-white/20 bg-white/10 px-5 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-white/20"
					>
						{item.action}
					</button>
				</div>
			))}
		</div>
	);
}
