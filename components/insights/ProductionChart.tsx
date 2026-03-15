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
import { onTimeDeliveryData } from '@/lib/mock-data';

export function ProductionChart() {
	return (
		<div className="glass rounded-2xl p-6">
			<div className="mb-6 flex items-center justify-between">
				<h3 className="text-lg font-semibold text-forge-primary">On-Time Delivery Trend</h3>
				<span className="rounded-full bg-black/[0.03] px-3 py-1 text-xs font-medium text-forge-secondary">
					Last 12 Weeks
				</span>
			</div>
			<ResponsiveContainer width="100%" height={280}>
				<AreaChart data={onTimeDeliveryData}>
					<defs>
						<linearGradient id="otdFill" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#1A1A1A" stopOpacity={0.08} />
							<stop offset="100%" stopColor="#1A1A1A" stopOpacity={0.01} />
						</linearGradient>
					</defs>
					<CartesianGrid strokeDasharray="3 3" stroke="#0000000A" vertical={false} />
					<XAxis
						dataKey="week"
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#A0A0A0', fontSize: 12 }}
					/>
					<YAxis
						domain={[80, 100]}
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#A0A0A0', fontSize: 12 }}
						tickFormatter={(v: number) => `${v}%`}
						width={45}
					/>
					<Tooltip
						formatter={(value, name) => [
							`${value}%`,
							name === 'otd' ? 'On-Time Delivery' : 'Target',
						]}
						contentStyle={{
							background: 'rgba(255,255,255,0.9)',
							backdropFilter: 'blur(12px)',
							border: '1px solid rgba(0,0,0,0.04)',
							borderRadius: '12px',
							boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
							fontSize: '13px',
						}}
					/>
					<ReferenceLine
						y={95}
						stroke="#A0A0A0"
						strokeDasharray="6 4"
						strokeWidth={1.5}
						label={{
							value: '95% Target',
							position: 'right',
							fill: '#A0A0A0',
							fontSize: 11,
							fontWeight: 600,
						}}
					/>
					<Area
						type="monotone"
						dataKey="otd"
						stroke="#1A1A1A"
						strokeWidth={2}
						fill="url(#otdFill)"
						dot={{ fill: '#1A1A1A', r: 4, strokeWidth: 0 }}
						activeDot={{ fill: '#1A1A1A', r: 6, strokeWidth: 2, stroke: '#fff' }}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
