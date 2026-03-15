import { cn } from '@/lib/utils';

export function StatCard({
	title,
	value,
	subtitle,
	badge,
	badgeColor = 'green',
	className,
}: {
	title: string;
	value: string;
	subtitle?: string;
	badge?: string;
	badgeColor?: 'green' | 'red' | 'neutral';
	className?: string;
}) {
	const badgeColors = {
		green: 'bg-forge-success/10 text-forge-success',
		red: 'bg-forge-error/10 text-forge-error',
		neutral: 'bg-forge-primary/5 text-forge-secondary',
	};

	return (
		<div className={cn('glass rounded-2xl px-6 py-5', className)}>
			<div className="flex items-center justify-between">
				<p className="text-xs font-medium tracking-wide text-forge-secondary">{title}</p>
				{badge && (
					<span
						className={cn(
							'rounded-full px-2.5 py-0.5 text-xs font-medium',
							badgeColors[badgeColor],
						)}
					>
						{badge}
					</span>
				)}
			</div>
			<p className="mt-1 text-3xl font-semibold tracking-tight text-forge-primary">{value}</p>
			{subtitle && <p className="mt-0.5 text-xs text-forge-hint">{subtitle}</p>}
		</div>
	);
}
