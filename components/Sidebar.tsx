'use client';

import { Cpu, Factory, FileText, Home, Lightbulb, Package, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { recentQueries } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const navItems = [
	{ href: '/insights', label: 'Home', icon: Home },
	{ href: '/delivery', label: 'Delivery', icon: Package },
	{ href: '/shop-floor', label: 'Shop Floor', icon: Factory },
	{ href: '/quoting', label: 'Quoting', icon: FileText },
	{ href: '/knowledge-base', label: 'Knowledge Base', icon: Lightbulb },
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="group/sidebar sticky top-0 flex h-screen w-16 shrink-0 flex-col border-r border-forge-divider bg-white px-2 py-6 transition-all duration-200 hover:w-[260px] hover:px-4">
			{/* Logo */}
			<Link href="/insights" className="mb-8 flex items-center gap-2 px-1 group-hover/sidebar:px-3">
				<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forge-primary">
					<Cpu className="h-4 w-4 text-white" />
				</div>
				<span className="hidden text-base font-extrabold tracking-tight text-forge-primary group-hover/sidebar:block">
					FORGE
				</span>
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
									'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
									isActive
										? 'bg-forge-primary text-white'
										: 'text-forge-secondary hover:bg-black/[0.03] hover:text-forge-primary',
								)}
							>
								<item.icon className="h-[18px] w-[18px] shrink-0" />
								<span className="hidden truncate group-hover/sidebar:block">{item.label}</span>
							</Link>
							{isKB && isActive && (
								<div className="mt-2 ml-1 hidden group-hover/sidebar:block">
									<p className="px-2 text-[10px] font-medium uppercase tracking-widest text-forge-hint">
										Your chats
									</p>
									<div className="mt-1 space-y-0.5">
										{recentQueries.map((q) => (
											<button
												type="button"
												key={q}
												className="w-full truncate rounded-lg px-2 py-1.5 text-left text-xs text-forge-secondary transition-colors hover:bg-black/[0.04]"
											>
												{q}
											</button>
										))}
									</div>
								</div>
							)}
						</div>
					);
				})}
			</nav>

			{/* User Profile */}
			<div className="mt-auto rounded-lg bg-black/[0.02] p-2 group-hover/sidebar:p-3">
				<div className="flex items-center gap-3">
					<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forge-primary text-xs font-semibold text-white">
						JD
					</div>
					<div className="hidden min-w-0 flex-1 group-hover/sidebar:block">
						<p className="truncate text-sm font-medium text-forge-primary">Julian Detmer</p>
						<p className="truncate text-xs text-forge-hint">Plant Manager</p>
					</div>
					<Link
						href="/settings"
						className="hidden text-forge-hint transition-colors hover:text-forge-primary group-hover/sidebar:block"
					>
						<Settings className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</aside>
	);
}
