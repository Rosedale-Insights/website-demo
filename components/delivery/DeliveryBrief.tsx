import { Sparkles } from 'lucide-react';
import { deliveryBrief } from '@/lib/mock-data';

export function DeliveryBrief() {
	return (
		<div className="glass-solid rounded-2xl p-6">
			<div className="mb-3 flex items-center gap-2">
				<div className="flex h-6 w-6 items-center justify-center rounded-full bg-forge-primary/10">
					<Sparkles className="h-3.5 w-3.5 text-forge-primary" />
				</div>
				<h3 className="text-sm font-semibold text-forge-primary">{deliveryBrief.title}</h3>
			</div>
			<p className="text-sm leading-relaxed text-forge-secondary">{deliveryBrief.description}</p>
		</div>
	);
}
