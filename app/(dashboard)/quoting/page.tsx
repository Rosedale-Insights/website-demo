'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { AiInsightBanner } from '@/components/quoting/AiInsightBanner';
import { QuoteBuilderModal } from '@/components/quoting/QuoteBuilderModal';
import { QuoteTable } from '@/components/quoting/QuoteTable';
import { StatCard } from '@/components/StatCard';
import { enhancedQuotingStats } from '@/lib/mock-data';

export default function QuotingPage() {
	const [showBuilder, setShowBuilder] = useState(false);

	return (
		<div className="space-y-8">
			<PageHeader
				title="Quoting Tool"
				subtitle="Generate precise manufacturing estimates using Forge AI."
			>
				<button
					type="button"
					onClick={() => setShowBuilder(true)}
					className="flex items-center gap-2 rounded-xl bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
				>
					<Plus className="h-4 w-4" />
					New Quote
				</button>
			</PageHeader>

			<div className="grid grid-cols-4 gap-4">
				{enhancedQuotingStats.map((stat) => (
					<StatCard key={stat.title} {...stat} />
				))}
			</div>

			<QuoteTable />
			<AiInsightBanner />

			{showBuilder && <QuoteBuilderModal onClose={() => setShowBuilder(false)} />}
		</div>
	);
}
