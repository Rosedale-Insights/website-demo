'use client';

import {
	ChevronLeft,
	ChevronRight,
	FileCog,
	FileImage,
	FileSpreadsheet,
	FileText,
} from 'lucide-react';
import { useState } from 'react';
import { documentTableRows } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const typeIcons: Record<string, React.ElementType> = {
	'PDF Document': FileText,
	Spreadsheet: FileSpreadsheet,
	'CAD Drawing': FileImage,
	'Data File': FileCog,
};

const statusStyles: Record<string, string> = {
	Indexed: 'bg-forge-success/10 text-forge-success',
	Processing: 'bg-forge-accent-warm/10 text-forge-accent-warm',
};

export function DocTable() {
	const [page] = useState(1);

	return (
		<div className="glass-solid overflow-hidden rounded-2xl">
			{/* Header */}
			<div className="grid grid-cols-[2fr_1.2fr_1fr_1fr] gap-4 border-b border-forge-divider bg-black/[0.02] px-6 py-3">
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Name</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Date Modified
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Size</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Status</span>
			</div>
			{/* Rows */}
			{documentTableRows.map((row) => {
				const Icon = typeIcons[row.type] || FileText;
				return (
					<div
						key={row.name}
						className="grid grid-cols-[2fr_1.2fr_1fr_1fr] items-center gap-4 border-b border-forge-divider px-6 py-4 transition-colors hover:bg-black/[0.01]"
					>
						<div className="flex items-center gap-3">
							<Icon className="h-5 w-5 shrink-0 text-forge-hint" />
							<div>
								<p className="text-sm font-medium text-forge-primary">{row.name}</p>
								<p className="text-xs text-forge-hint">{row.type}</p>
							</div>
						</div>
						<p className="text-sm text-forge-secondary">{row.date}</p>
						<p className="text-sm text-forge-secondary">{row.size}</p>
						<span
							className={cn(
								'inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium',
								statusStyles[row.status],
							)}
						>
							{row.status}
						</span>
					</div>
				);
			})}
			{/* Pagination */}
			<div className="flex items-center justify-center gap-4 py-4">
				<button
					type="button"
					className="text-forge-hint transition-colors hover:text-forge-primary"
				>
					<ChevronLeft className="h-4 w-4" />
				</button>
				<span className="text-sm text-forge-secondary">Page {page} of 12</span>
				<button
					type="button"
					className="text-forge-hint transition-colors hover:text-forge-primary"
				>
					<ChevronRight className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}
