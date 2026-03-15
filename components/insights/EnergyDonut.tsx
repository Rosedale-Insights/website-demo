'use client';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { energyAllocationData } from '@/lib/mock-data';

export function EnergyDonut() {
	return (
		<div className="glass rounded-2xl p-6">
			<h3 className="mb-4 text-lg font-semibold text-forge-primary">Energy Allocation</h3>
			<ResponsiveContainer width="100%" height={200}>
				<PieChart>
					<Pie
						data={energyAllocationData}
						cx="50%"
						cy="50%"
						innerRadius={55}
						outerRadius={90}
						paddingAngle={2}
						dataKey="value"
						stroke="none"
					>
						{energyAllocationData.map((entry) => (
							<Cell key={entry.name} fill={entry.color} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<div className="mt-4 space-y-2">
				{energyAllocationData.map((item) => (
					<div key={item.name} className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
							<span className="text-sm text-forge-secondary">{item.name}</span>
						</div>
						<span className="text-sm font-semibold text-forge-primary">{item.value}%</span>
					</div>
				))}
			</div>
		</div>
	);
}
