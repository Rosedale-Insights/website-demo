import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { QuoteTable } from '@/components/quoting/QuoteTable';
import { AiInsightBanner } from '@/components/quoting/AiInsightBanner';
import { quotingStats } from '@/lib/mock-data';
import { Plus } from 'lucide-react';

export default function QuotingPage() {
	return (
		<div className="space-y-8">
			<PageHeader
				title="Quoting Tool"
				subtitle="Generate precise manufacturing estimates using Forge AI."
			>
				<button className="flex items-center gap-2 rounded-xl bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90">
					<Plus className="h-4 w-4" />
					New Quote
				</button>
			</PageHeader>

			<div className="grid grid-cols-3 gap-4">
				<StatCard
					title="Draft Quotes"
					value={String(quotingStats.draftQuotes).padStart(2, '0')}
				/>
				<StatCard
					title="Pending Approval"
					value={String(quotingStats.pendingApproval).padStart(2, '0')}
				/>
				<StatCard title="Conversion Rate" value={quotingStats.conversionRate} />
			</div>

			<QuoteTable />
			<AiInsightBanner />
		</div>
	);
}
