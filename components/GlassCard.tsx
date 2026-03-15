import { cn } from '@/lib/utils';

export function GlassCard({
	children,
	className,
	solid = false,
}: {
	children: React.ReactNode;
	className?: string;
	solid?: boolean;
}) {
	return (
		<div className={cn(solid ? 'glass-solid' : 'glass', 'rounded-2xl p-6', className)}>
			{children}
		</div>
	);
}
