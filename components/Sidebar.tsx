'use client';

import { Bot, Cpu, FileText, FolderOpen, LayoutDashboard, Lightbulb, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { recentQueries } from '@/lib/mock-data';

const navItems = [
	{ href: '/insights', label: 'Insights', icon: LayoutDashboard },
	{ href: '/quoting', label: 'Quoting', icon: FileText },
	{ href: '/knowledge-base', label: 'Knowledge Base', icon: Lightbulb },
	{ href: '/documents', label: 'Documents', icon: FolderOpen },
	{ href: '/agents', label: 'Agents', icon: Bot },
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="flex h-screen w-[260px] shrink-0 flex-col border-r border-forge-divider bg-white px-4 py-6">
			{/* Logo */}
			<Link href="/insights" className="mb-8 flex items-center gap-2 px-3">
				<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-forge-primary">
					<Cpu className="h-4 w-4 text-white" />
				</div>
				<span className="text-base font-extrabold tracking-tight text-forge-primary">FORGE</span>
			</Link>

			{/* Nav Items */}
			<nav className="flex flex-1 flex-col gap-1">
				{navItems.map((item) => {
					const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
					const isKB = item.href === '/knowledge-base';
					return (
						<div key={item.href}>
							<Link
								href={item.href}
								className={cn(
									'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
									isActive
										? 'bg-forge-primary text-white'
										: 'text-forge-secondary hover:bg-black/[0.03] hover:text-forge-primary',
								)}
							>
								<item.icon className="h-[18px] w-[18px]" />
								{item.label}
							</Link>
							{isKB && isActive && (
								<div className="mt-2 ml-3 flex flex-wrap gap-1.5">
									{recentQueries.map((q) => (
										<button
											type="button"
											key={q}
											className="rounded-full border border-forge-divider bg-black/[0.02] px-3 py-1 text-[11px] font-medium text-forge-secondary transition-colors hover:border-forge-primary/20 hover:bg-forge-primary/[0.06] hover:text-forge-primary"
										>
											{q}
										</button>
									))}
								</div>
							)}
						</div>
					);
				})}
			</nav>

			{/* User Profile */}
			<div className="mt-auto rounded-2xl bg-black/[0.02] p-3">
				<div className="flex items-center gap-3">
					<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forge-primary text-xs font-semibold text-white">
						JD
					</div>
					<div className="min-w-0 flex-1">
						<p className="truncate text-sm font-medium text-forge-primary">Julian Detmer</p>
						<p className="truncate text-xs text-forge-hint">Plant Manager</p>
					</div>
					<Link
						href="/settings"
						className="text-forge-hint transition-colors hover:text-forge-primary"
					>
						<Settings className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</aside>
	);
}
