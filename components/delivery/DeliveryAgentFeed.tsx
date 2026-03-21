import { AlertTriangle, CheckCircle2, Eye } from 'lucide-react';
import { deliveryAlerts } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const severityConfig = {
	critical: {
		icon: AlertTriangle,
		colorClass: 'text-forge-accent-warm',
		bgClass: 'bg-forge-accent-warm/10',
	},
	high: {
		icon: AlertTriangle,
		colorClass: 'text-forge-accent-warm',
		bgClass: 'bg-forge-accent-warm/10',
	},
	medium: { icon: Eye, colorClass: 'text-forge-hint', bgClass: 'bg-forge-hint/10' },
	low: { icon: CheckCircle2, colorClass: 'text-forge-success', bgClass: 'bg-forge-success/10' },
};

export function DeliveryAgentFeed() {
	return (
		<div className="glass-solid overflow-hidden rounded-lg">
			<div className="border-b border-forge-divider px-6 py-4">
				<h3 className="text-sm font-semibold text-forge-primary">Agent Activity</h3>
				<p className="text-xs text-forge-hint">Delivery Monitor AI actions</p>
			</div>

			<div className="divide-y divide-forge-divider">
				{deliveryAlerts.slice(0, 5).map((alert) => {
					const config = severityConfig[alert.severity];
					const Icon = config.icon;
					return (
						<div
							key={alert.id}
							className="flex gap-3 px-6 py-3 transition-colors hover:bg-black/[0.01]"
						>
							<div
								className={cn(
									'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
									config.bgClass,
								)}
							>
								<Icon className={cn('h-3.5 w-3.5', config.colorClass)} />
							</div>
							<div className="min-w-0 flex-1">
								<p className="text-sm font-medium text-forge-primary">{alert.title}</p>
								<p className="mt-0.5 line-clamp-2 text-xs text-forge-secondary">
									{alert.suggestedAction}
								</p>
							</div>
							<span className="shrink-0 text-xs text-forge-hint">{alert.timestamp}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
