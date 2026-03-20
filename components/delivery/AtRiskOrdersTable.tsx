import { AlertTriangle, CheckCircle2, Eye } from 'lucide-react';
import type { PurchaseOrder } from '@/lib/mock-data';
import { purchaseOrders } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

const riskConfig: Record<
	PurchaseOrder['riskLevel'],
	{ icon: React.ElementType; colorClass: string; bgClass: string }
> = {
	'At Risk': {
		icon: AlertTriangle,
		colorClass: 'text-forge-accent-warm',
		bgClass: 'bg-forge-accent-warm/10',
	},
	Watch: { icon: Eye, colorClass: 'text-forge-hint', bgClass: 'bg-forge-hint/10' },
	'On Track': {
		icon: CheckCircle2,
		colorClass: 'text-forge-success',
		bgClass: 'bg-forge-success/10',
	},
};

export function AtRiskOrdersTable() {
	const activeOrders = purchaseOrders.filter((po) => po.actualDelivery === null);

	return (
		<div className="glass-solid overflow-hidden rounded-lg">
			<div className="border-b border-forge-divider px-6 py-4">
				<h3 className="text-sm font-semibold text-forge-primary">At-Risk Purchase Orders</h3>
				<p className="text-xs text-forge-hint">
					{activeOrders.length} active POs requiring attention
				</p>
			</div>

			{/* Header */}
			<div className="grid grid-cols-[1fr_1.2fr_1.5fr_1fr_1fr_1fr_80px] items-center gap-4 border-b border-forge-divider bg-black/[0.02] px-6 py-3">
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">PO #</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Supplier
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Material
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Promised
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">
					Predicted
				</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Risk</span>
				<span className="text-xs font-medium uppercase tracking-wider text-forge-hint">Conf.</span>
			</div>

			{/* Rows */}
			{activeOrders.map((po) => {
				const risk = riskConfig[po.riskLevel];
				const RiskIcon = risk.icon;
				return (
					<div
						key={po.poNumber}
						className="grid grid-cols-[1fr_1.2fr_1.5fr_1fr_1fr_1fr_80px] items-center gap-4 border-b border-forge-divider px-6 py-4 transition-colors hover:bg-black/[0.01]"
					>
						<span className="text-sm font-medium text-forge-primary">{po.poNumber}</span>
						<span className="truncate text-sm text-forge-secondary">{po.supplier}</span>
						<span className="truncate text-sm text-forge-secondary">{po.material}</span>
						<span className="text-sm text-forge-secondary">
							{new Date(po.promisedDelivery).toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
							})}
						</span>
						<span className="text-sm text-forge-secondary">
							{new Date(po.predictedDelivery).toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
							})}
						</span>
						<div className="flex items-center gap-1.5">
							<span
								className={cn(
									'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
									risk.bgClass,
									risk.colorClass,
								)}
							>
								<RiskIcon className="h-3 w-3" />
								{po.riskLevel}
							</span>
						</div>
						<span className="text-sm text-forge-hint">{Math.round(po.aiConfidence * 100)}%</span>
					</div>
				);
			})}
		</div>
	);
}
