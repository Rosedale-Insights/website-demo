'use client';

import { cn } from '@/lib/utils';

const tabs = ['All', 'Draft', 'Review', 'Sent', 'Won', 'Lost'] as const;

export function QuoteFilterTabs({
	active,
	onChange,
}: {
	active: string;
	onChange: (tab: string) => void;
}) {
	return (
		<div className="flex gap-1">
			{tabs.map((tab) => (
				<button
					key={tab}
					type="button"
					onClick={() => onChange(tab)}
					className={cn(
						'rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
						active === tab
							? 'bg-forge-primary text-white'
							: 'bg-black/[0.02] text-forge-secondary hover:bg-black/[0.04] hover:text-forge-primary',
					)}
				>
					{tab}
				</button>
			))}
		</div>
	);
}
