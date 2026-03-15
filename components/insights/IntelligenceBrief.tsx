import { Sparkles } from 'lucide-react';
import { forgeBrief } from '@/lib/mock-data';

export function IntelligenceBrief() {
	return (
		<div className="glass rounded-2xl p-6">
			<h3 className="mb-4 text-lg font-semibold text-forge-primary">
				Forge Intelligence Brief
			</h3>
			<div className="flex gap-4">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forge-primary/5">
					<Sparkles className="h-5 w-5 text-forge-primary" />
				</div>
				<div className="flex-1">
					<p className="font-semibold text-forge-primary">{forgeBrief.title}</p>
					<p className="mt-1 text-sm leading-relaxed text-forge-secondary">
						{forgeBrief.description}
					</p>
					<div className="mt-4 flex items-center gap-4">
						<button className="rounded-xl bg-forge-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
							Review Ticket
						</button>
						<button className="text-sm text-forge-secondary transition-colors hover:text-forge-primary">
							Dismiss
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
