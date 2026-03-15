'use client';

import { Area, AreaChart, ResponsiveContainer, XAxis } from 'recharts';
import { agentConfigDefaults, performanceChartData } from '@/lib/mock-data';

export function PerformanceAnalytics() {
	return (
		<div className="glass-solid rounded-2xl p-6">
			<h3 className="mb-2 text-lg font-semibold text-forge-primary">Performance Analytics</h3>
			<p className="mb-4 text-xs text-forge-hint">Accuracy over last 48h</p>
			<ResponsiveContainer width="100%" height={140}>
				<AreaChart data={performanceChartData}>
					<defs>
						<linearGradient id="perfFillConfig" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#7C9CB4" stopOpacity={0.12} />
							<stop offset="100%" stopColor="#7C9CB4" stopOpacity={0.02} />
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
						stroke="#7C9CB4"
						strokeWidth={1.5}
						fill="url(#perfFillConfig)"
						dot={{ fill: '#7C9CB4', r: 3, strokeWidth: 0 }}
					/>
				</AreaChart>
			</ResponsiveContainer>
			<div className="mt-4 flex justify-between border-t border-forge-divider pt-4">
				<div>
					<p className="text-2xl font-semibold text-forge-primary">
						{agentConfigDefaults.currentPrecision}
					</p>
					<p className="text-xs text-forge-hint">Current Precision</p>
				</div>
				<div className="text-right">
					<p className="text-2xl font-semibold text-forge-primary">
						{agentConfigDefaults.avgLatency}
					</p>
					<p className="text-xs text-forge-hint">Avg Latency</p>
				</div>
			</div>
		</div>
	);
}
