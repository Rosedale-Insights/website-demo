'use client';

import { Download } from 'lucide-react';
import { AtRiskOrdersTable } from '@/components/delivery/AtRiskOrdersTable';
import { DelayRootCauseChart } from '@/components/delivery/DelayRootCauseChart';
import { DeliveryAgentFeed } from '@/components/delivery/DeliveryAgentFeed';
import { DeliveryBrief } from '@/components/delivery/DeliveryBrief';
import { SupplierOtdChart } from '@/components/delivery/SupplierOtdChart';
import { SupplierScorecard } from '@/components/delivery/SupplierScorecard';
import { AnimatedGroup } from '@/components/motion/AnimatedGroup';
import { AnimatedItem } from '@/components/motion/AnimatedItem';
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { deliveryKpis, purchaseOrders, suppliers } from '@/lib/mock-data';

function exportDeliveryPdf() {
	// Build a printable HTML document with delivery data
	const atRiskPOs = purchaseOrders.filter((po) => po.actualDelivery === null);
	const sortedSuppliers = [...suppliers].sort((a, b) => a.onTimeRate - b.onTimeRate);

	const html = `
<!DOCTYPE html>
<html>
<head>
	<title>FORGE - Delivery Intelligence Report</title>
	<style>
		body { font-family: 'Inter', system-ui, sans-serif; color: #1A1A1A; padding: 40px; max-width: 900px; margin: 0 auto; }
		h1 { font-size: 22px; margin-bottom: 4px; }
		h2 { font-size: 16px; margin-top: 32px; margin-bottom: 12px; border-bottom: 1px solid #eee; padding-bottom: 6px; }
		.subtitle { color: #666; font-size: 13px; margin-bottom: 24px; }
		.kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
		.kpi { border: 1px solid #eee; border-radius: 8px; padding: 16px; }
		.kpi-title { font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 0.05em; }
		.kpi-value { font-size: 24px; font-weight: 600; margin-top: 4px; }
		table { width: 100%; border-collapse: collapse; font-size: 12px; }
		th { text-align: left; padding: 8px 12px; background: #f9f9f9; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: #999; border-bottom: 1px solid #eee; }
		td { padding: 8px 12px; border-bottom: 1px solid #f0f0f0; }
		.risk-high { color: #BC4B41; font-weight: 500; }
		.risk-med { color: #C4836A; font-weight: 500; }
		.risk-low { color: #4A6741; font-weight: 500; }
		.footer { margin-top: 40px; font-size: 11px; color: #999; text-align: center; }
		@media print { body { padding: 20px; } }
	</style>
</head>
<body>
	<h1>Delivery Intelligence Report</h1>
	<p class="subtitle">Generated ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} - FORGE Manufacturing Platform</p>

	<div class="kpis">
		${deliveryKpis
			.map(
				(kpi) => `
			<div class="kpi">
				<div class="kpi-title">${kpi.title}</div>
				<div class="kpi-value">${kpi.value}</div>
			</div>`,
			)
			.join('')}
	</div>

	<h2>At-Risk Purchase Orders</h2>
	<table>
		<thead>
			<tr><th>PO</th><th>Supplier</th><th>Part #</th><th>Promise Date</th><th>Risk</th><th>AI Conf.</th></tr>
		</thead>
		<tbody>
			${atRiskPOs
				.map(
					(po) => `
				<tr>
					<td>${po.poNumber}</td>
					<td>${po.supplier}</td>
					<td>${po.partNumber}</td>
					<td>${po.promisedDelivery}</td>
					<td class="${po.riskLevel === 'At Risk' ? 'risk-high' : po.riskLevel === 'Watch' ? 'risk-med' : 'risk-low'}">${po.riskLevel}</td>
					<td>${po.aiConfidence}%</td>
				</tr>`,
				)
				.join('')}
		</tbody>
	</table>

	<h2>Supplier Scorecard</h2>
	<table>
		<thead>
			<tr><th>Supplier</th><th>OTD %</th><th>Active POs</th><th>Risk</th><th>Trend</th></tr>
		</thead>
		<tbody>
			${sortedSuppliers
				.map(
					(s) => `
				<tr>
					<td>${s.name}</td>
					<td>${s.onTimeRate}%</td>
					<td>${s.activePOs}</td>
					<td class="${s.riskLevel === 'High' ? 'risk-high' : s.riskLevel === 'Medium' ? 'risk-med' : 'risk-low'}">${s.riskLevel}</td>
					<td>${s.reliabilityTrend === 'up' ? '↑' : s.reliabilityTrend === 'down' ? '↓' : '→'}</td>
				</tr>`,
				)
				.join('')}
		</tbody>
	</table>

	<div class="footer">FORGE Manufacturing Intelligence Platform - Rosedale Insights</div>
</body>
</html>`;

	// Use a hidden iframe so the current page isn't affected
	const iframe = document.createElement('iframe');
	iframe.style.position = 'fixed';
	iframe.style.right = '0';
	iframe.style.bottom = '0';
	iframe.style.width = '0';
	iframe.style.height = '0';
	iframe.style.border = 'none';
	document.body.appendChild(iframe);

	const doc = iframe.contentDocument ?? iframe.contentWindow?.document;
	if (!doc) return;
	doc.open();
	doc.write(html);
	doc.close();

	iframe.onload = () => {
		iframe.contentWindow?.print();
		// Clean up after print dialog closes
		setTimeout(() => iframe.remove(), 1000);
	};
}

export default function DeliveryPage() {
	return (
		<div className="space-y-8">
			<PageHeader
				title="Delivery Intelligence"
				subtitle="AI-predicted delivery risks and supplier performance."
			>
				<button
					type="button"
					onClick={exportDeliveryPdf}
					className="flex items-center gap-2 rounded-lg bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
				>
					<Download className="h-4 w-4" />
					Export Report
				</button>
			</PageHeader>

			<AnimatedGroup className="space-y-8">
				{/* KPI Cards */}
				<AnimatedItem>
					<div className="grid grid-cols-4 gap-4">
						{deliveryKpis.map((kpi) => (
							<StatCard key={kpi.title} {...kpi} />
						))}
					</div>
				</AnimatedItem>

				{/* Charts Row */}
				<AnimatedItem>
					<div className="grid grid-cols-[1fr_340px] gap-6">
						<SupplierOtdChart />
						<DelayRootCauseChart />
					</div>
				</AnimatedItem>

				{/* Intelligence Brief */}
				<AnimatedItem>
					<DeliveryBrief />
				</AnimatedItem>

				{/* At-Risk Orders Table */}
				<AnimatedItem>
					<AtRiskOrdersTable />
				</AnimatedItem>

				{/* Bottom Row: Scorecard + Agent Feed */}
				<AnimatedItem>
					<div className="grid grid-cols-2 gap-6">
						<SupplierScorecard />
						<DeliveryAgentFeed />
					</div>
				</AnimatedItem>
			</AnimatedGroup>
		</div>
	);
}
