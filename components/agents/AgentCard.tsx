import { ArrowRight, Container, Gauge, ScanSearch, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = { ScanSearch, Container, Wrench, Gauge };

const statusColorMap = {
	green: 'bg-forge-success/10 text-forge-success',
	neutral: 'bg-black/[0.04] text-forge-secondary',
	amber: 'bg-forge-accent-warm/10 text-forge-accent-warm',
};

type AgentCardProps = {
	name: string;
	description: string;
	icon: string;
	status: string;
	statusColor: 'green' | 'neutral' | 'amber';
	currentTask: string;
	id: string;
};

export function AgentCard({
	name,
	description,
	icon,
	status,
	statusColor,
	currentTask,
	id,
}: AgentCardProps) {
	const Icon = iconMap[icon] || ScanSearch;

	return (
		<a
			href={`/agents/${id}`}
			className="glass-solid group flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-glass-md"
		>
			<div className="flex items-start justify-between">
				<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/[0.03]">
					<Icon className="h-6 w-6 text-forge-primary" />
				</div>
				<span
					className={cn('rounded-full px-3 py-1 text-xs font-medium', statusColorMap[statusColor])}
				>
					{status}
				</span>
			</div>
			<h4 className="mt-5 text-lg font-semibold text-forge-primary">{name}</h4>
			<p className="mt-1 text-sm leading-relaxed text-forge-secondary">{description}</p>
			<div className="mt-auto flex items-center justify-between border-t border-forge-divider pt-4 mt-5">
				<div>
					<p className="text-[10px] font-medium uppercase tracking-widest text-forge-hint">
						Current Task
					</p>
					<p className="text-sm font-medium text-forge-primary">{currentTask}</p>
				</div>
				<ArrowRight className="h-5 w-5 text-forge-hint transition-transform group-hover:translate-x-1" />
			</div>
		</a>
	);
}
