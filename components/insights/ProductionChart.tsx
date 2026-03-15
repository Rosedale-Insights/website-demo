'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { productionOutputData } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export function ProductionChart() {
	const [mode, setMode] = useState<'units' | 'efficiency'>('units');

	return (
		<div className="glass rounded-2xl p-6">
			<div className="mb-6 flex items-center justify-between">
				<h3 className="text-lg font-semibold text-forge-primary">Production Output Trend</h3>
				<div className="flex gap-2">
					{(['units', 'efficiency'] as const).map((m) => (
						<button
							type="button"
							key={m}
							onClick={() => setMode(m)}
							className={cn(
								'flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-colors',
								mode === m
									? 'bg-forge-primary text-white'
									: 'bg-black/[0.03] text-forge-secondary hover:bg-black/[0.06]',
							)}
						>
							{mode === m && <Check className="h-3 w-3" />}
							{m === 'units' ? 'Units' : 'Efficiency'}
						</button>
					))}
				</div>
			</div>
			<ResponsiveContainer width="100%" height={280}>
				<AreaChart data={productionOutputData}>
					<defs>
						<linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#1A1A1A" stopOpacity={0.08} />
							<stop offset="100%" stopColor="#1A1A1A" stopOpacity={0.01} />
						</linearGradient>
					</defs>
					<CartesianGrid strokeDasharray="3 3" stroke="#0000000A" vertical={false} />
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tick={{ fill: '#A0A0A0', fontSize: 12 }}
					/>
					<YAxis hide />
					<Tooltip
						contentStyle={{
							background: 'rgba(255,255,255,0.9)',
							backdropFilter: 'blur(12px)',
							border: '1px solid rgba(0,0,0,0.04)',
							borderRadius: '12px',
							boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
							fontSize: '13px',
						}}
					/>
					<Area
						type="monotone"
						dataKey={mode}
						stroke="#1A1A1A"
						strokeWidth={2}
						fill="url(#areaFill)"
						dot={{ fill: '#1A1A1A', r: 4, strokeWidth: 0 }}
						activeDot={{ fill: '#1A1A1A', r: 6, strokeWidth: 2, stroke: '#fff' }}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
