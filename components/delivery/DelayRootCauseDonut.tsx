'use client';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { delayRootCauseData } from '@/lib/mock-data';

export function DelayRootCauseDonut() {
	const total = delayRootCauseData.reduce((sum, d) => sum + d.value, 0);

	return (
		<div className="glass rounded-2xl p-6">
			<h3 className="mb-1 text-sm font-semibold text-forge-primary">Delay Root Causes</h3>
			<p className="mb-4 text-xs text-forge-hint">Percentage by category</p>
			<ResponsiveContainer width="100%" height={200}>
				<PieChart>
					<Pie
						data={delayRootCauseData}
						cx="50%"
						cy="50%"
						innerRadius={55}
						outerRadius={90}
						paddingAngle={2}
						dataKey="value"
						stroke="none"
					>
						{delayRootCauseData.map((entry) => (
							<Cell key={entry.name} fill={entry.color} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			{/* Legend */}
			<div className="mt-2 space-y-1.5">
				{delayRootCauseData.map((entry) => (
					<div key={entry.name} className="flex items-center justify-between text-xs">
						<div className="flex items-center gap-2">
							<span
								className="inline-block h-2.5 w-2.5 rounded-full"
								style={{ backgroundColor: entry.color }}
							/>
							<span className="text-forge-secondary">{entry.name}</span>
						</div>
						<span className="font-medium text-forge-primary">
							{Math.round((entry.value / total) * 100)}%
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
