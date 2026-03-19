'use client';

import { Area, AreaChart, ResponsiveContainer, XAxis } from 'recharts';
import { performanceChartData } from '@/lib/mock-data';

export function PerformanceChart() {
	return (
		<div className="glass rounded-lg p-5">
			<h4 className="mb-3 text-sm font-semibold text-forge-primary">Agent Performance</h4>
			<ResponsiveContainer width="100%" height={100}>
				<AreaChart data={performanceChartData}>
					<defs>
						<linearGradient id="perfFill" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#1A1A1A" stopOpacity={0.06} />
							<stop offset="100%" stopColor="#1A1A1A" stopOpacity={0.01} />
						</linearGradient>
					</defs>
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#A0A0A0', fontSize: 10 }}
					/>
					<Area
						type="monotone"
						dataKey="value"
						stroke="#1A1A1A"
						strokeWidth={1.5}
						fill="url(#perfFill)"
						dot={{ fill: '#1A1A1A', r: 3, strokeWidth: 0 }}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
