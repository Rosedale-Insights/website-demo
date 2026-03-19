'use client';

import {
	Area,
	AreaChart,
	CartesianGrid,
	ReferenceLine,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { supplierOtdTrendData } from '@/lib/mock-data';

export function SupplierOtdChart() {
	return (
		<div className="glass rounded-lg p-6">
			<h3 className="mb-1 text-sm font-semibold text-forge-primary">Supplier On-Time Delivery</h3>
			<p className="mb-4 text-xs text-forge-hint">12-week trend vs. 95% target</p>
			<ResponsiveContainer width="100%" height={280}>
				<AreaChart data={supplierOtdTrendData} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
					<defs>
						<linearGradient id="otdGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#1A1A1A" stopOpacity={0.08} />
							<stop offset="95%" stopColor="#1A1A1A" stopOpacity={0.01} />
						</linearGradient>
					</defs>
					<CartesianGrid stroke="#0000000A" vertical={false} />
					<XAxis
						dataKey="week"
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#A0A0A0', fontSize: 11 }}
					/>
					<YAxis
						domain={[75, 100]}
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#A0A0A0', fontSize: 11 }}
						tickFormatter={(v: number) => `${v}%`}
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
						formatter={(value) => [`${value}%`, 'OTD Rate']}
					/>
					<ReferenceLine
						y={95}
						stroke="#4A6741"
						strokeDasharray="6 4"
						strokeWidth={1.5}
						label={{
							value: '95% Target',
							position: 'right',
							fill: '#4A6741',
							fontSize: 10,
						}}
					/>
					<Area
						type="monotone"
						dataKey="otd"
						stroke="#1A1A1A"
						strokeWidth={2}
						fill="url(#otdGradient)"
						dot={{ r: 4, fill: '#1A1A1A', strokeWidth: 0 }}
						activeDot={{ r: 6, fill: '#1A1A1A', strokeWidth: 0 }}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
