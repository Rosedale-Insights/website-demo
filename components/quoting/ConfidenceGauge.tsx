const gaugeColor = (score: number) => {
	if (score >= 80) return '#4A6741';
	if (score >= 60) return '#C4836A';
	return '#BC4B41';
};

const gaugeLabel = (score: number) => {
	if (score >= 80) return 'High Confidence';
	if (score >= 60) return 'Medium';
	return 'Low';
};

export function ConfidenceGauge({ score }: { score: number }) {
	const color = gaugeColor(score);

	return (
		<div className="flex flex-col items-center">
			<div
				className="relative flex h-20 w-20 items-center justify-center rounded-full"
				style={{
					background: `conic-gradient(${color} ${score * 3.6}deg, rgba(0,0,0,0.04) 0deg)`,
				}}
			>
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
					<span className="text-lg font-bold text-forge-primary">{score}%</span>
				</div>
			</div>
			<p className="mt-2 text-xs font-medium" style={{ color }}>
				{gaugeLabel(score)}
			</p>
		</div>
	);
}
