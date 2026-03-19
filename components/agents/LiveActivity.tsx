import { CheckCircle, Eye, HelpCircle, List, RefreshCw } from 'lucide-react';
import { agentLiveActivity } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const typeConfig = {
	alert: { dot: 'bg-forge-success', icon: Eye },
	update: { dot: 'bg-forge-primary', icon: RefreshCw },
	success: { dot: 'bg-forge-success', icon: CheckCircle },
	idle: { dot: 'bg-forge-hint', icon: HelpCircle },
	system: { dot: 'bg-forge-success', icon: List },
};

export function LiveActivity() {
	return (
		<div className="glass rounded-lg p-6">
			<div className="mb-4 flex items-center justify-between">
				<h3 className="text-lg font-semibold text-forge-primary">Live Activity</h3>
				<div className="flex items-center gap-1.5 text-xs font-medium text-forge-success">
					<span className="h-1.5 w-1.5 rounded-full bg-forge-success" />
					Live
				</div>
			</div>
			<div className="space-y-4">
				{agentLiveActivity.map((item) => {
					const config = typeConfig[item.type];
					const Icon = config.icon;
					return (
						<div key={item.id} className="flex items-start gap-3">
							<div className={cn('mt-1.5 h-2 w-2 shrink-0 rounded-full', config.dot)} />
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm text-forge-primary">{item.text}</p>
								<p className="text-xs text-forge-hint">{item.time}</p>
							</div>
							<Icon className="h-4 w-4 shrink-0 text-forge-hint" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
