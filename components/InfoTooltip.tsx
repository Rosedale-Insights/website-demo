'use client';

import { CircleHelp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';

export function InfoTooltip({
	title,
	content,
	className,
}: {
	title: string;
	content: React.ReactNode;
	className?: string;
}) {
	const [open, setOpen] = useState(false);
	const [pos, setPos] = useState<{ top: number; right: number } | null>(null);
	const iconRef = useRef<HTMLButtonElement>(null);
	const popoverRef = useRef<HTMLDivElement>(null);

	// Position the popover when opening
	useEffect(() => {
		if (!open || !iconRef.current) return;

		function updatePos() {
			if (!iconRef.current) return;
			const rect = iconRef.current.getBoundingClientRect();
			setPos({
				top: rect.bottom + 6,
				right: window.innerWidth - rect.right,
			});
		}

		updatePos();
		window.addEventListener('scroll', updatePos, true);
		window.addEventListener('resize', updatePos);
		return () => {
			window.removeEventListener('scroll', updatePos, true);
			window.removeEventListener('resize', updatePos);
		};
	}, [open]);

	// Close on click outside
	useEffect(() => {
		if (!open) return;
		function handleClick(e: MouseEvent) {
			const target = e.target as Node;
			if (iconRef.current?.contains(target) || popoverRef.current?.contains(target)) return;
			setOpen(false);
		}
		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, [open]);

	return (
		<>
			<button
				ref={iconRef}
				type="button"
				onClick={() => setOpen((v) => !v)}
				className={cn(
					'rounded-full p-1 transition-colors',
					open
						? 'bg-forge-primary/10 text-forge-primary'
						: 'text-forge-hint hover:text-forge-secondary',
					className,
				)}
				aria-label={`Help: ${title}`}
			>
				<CircleHelp className="h-4 w-4" />
			</button>

			{open &&
				pos &&
				createPortal(
					<div
						ref={popoverRef}
						className="fixed z-[100] w-72 rounded-lg border border-black/[0.08] bg-white p-4 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)]"
						style={{ top: pos.top, right: pos.right }}
					>
						<p className="mb-2 text-xs font-semibold text-forge-primary">{title}</p>
						<div className="text-[11px] leading-relaxed text-forge-secondary">{content}</div>
					</div>,
					document.body,
				)}
		</>
	);
}
