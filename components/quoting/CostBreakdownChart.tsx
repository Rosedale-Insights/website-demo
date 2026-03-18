'use client';

import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { quoteDetail } from '@/lib/mock-data';

const colorMap: Record<string, string> = {
	Material: '#7C9CB4',
	'Machine Time': '#1A1A1A',
	Labor: '#4A6741',
	Setup: '#C4836A',
	Tooling: '#666666',
	'Outside Svc': '#A0A0A0',
	Overhead: '#BC4B41',
	Margin: '#E0E7FF',
};

export function CostBreakdownChart({ marginOverride }: { marginOverride?: number }) {
	const cb = quoteDetail.costBreakdown;
	const marginValue = marginOverride ?? cb.margin;
	const data = [
		{ name: 'Material', value: cb.material },
		{ name: 'Machine Time', value: cb.machineTime },
		{ name: 'Labor', value: cb.labor },
		{ name: 'Setup', value: cb.setup },
		{ name: 'Tooling', value: cb.tooling },
		{ name: 'Outside Svc', value: cb.outsideServices },
		{ name: 'Overhead', value: cb.overhead },
		{ name: 'Margin', value: marginValue },
	];

	return (
		<div>
			<h4 className="mb-3 text-xs font-semibold text-forge-primary">Cost Breakdown</h4>
			<ResponsiveContainer width="100%" height={260}>
				<BarChart data={data} layout="vertical" margin={{ top: 0, right: 40, bottom: 0, left: 0 }}>
					<XAxis
						type="number"
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#A0A0A0', fontSize: 10 }}
						tickFormatter={(v: number) => `$${(v / 1000).toFixed(1)}K`}
					/>
					<YAxis
						type="category"
						dataKey="name"
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#666666', fontSize: 11 }}
						width={80}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: 'rgba(255,255,255,0.9)',
							backdropFilter: 'blur(12px)',
							border: '1px solid rgba(0,0,0,0.06)',
							borderRadius: '12px',
							boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
							fontSize: '12px',
						}}
						formatter={(value) => [`$${Number(value).toLocaleString()}`, '']}
					/>
					<Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={18}>
						{data.map((entry) => (
							<Cell key={entry.name} fill={colorMap[entry.name] ?? '#A0A0A0'} />
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
