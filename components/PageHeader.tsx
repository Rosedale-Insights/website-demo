export function PageHeader({
	title,
	subtitle,
	children,
}: {
	title: string;
	subtitle: string;
	children?: React.ReactNode;
}) {
	return (
		<div className="flex items-start justify-between">
			<div>
				<h1 className="text-3xl font-semibold tracking-tight text-forge-primary">{title}</h1>
				<p className="mt-1 text-sm text-forge-secondary">{subtitle}</p>
			</div>
			{children && <div className="flex items-center gap-3">{children}</div>}
		</div>
	);
}
