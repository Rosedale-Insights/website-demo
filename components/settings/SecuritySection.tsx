export function SecuritySection() {
	return (
		<div>
			<h2 className="text-lg font-semibold text-forge-primary">Security</h2>
			<p className="mt-0.5 text-sm text-forge-secondary">Protect your manufacturing data.</p>

			<div className="mt-6 space-y-5">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-sm font-medium text-forge-primary">Two-Factor Authentication</p>
						<p className="text-xs text-forge-hint">Recommended for all manager accounts.</p>
					</div>
					<button
						type="button"
						className="rounded-lg border border-forge-divider px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]"
					>
						Enable
					</button>
				</div>
				<div className="flex items-center justify-between">
					<div>
						<p className="text-sm font-medium text-forge-primary">Data Residency</p>
						<p className="text-xs text-forge-hint">Current: Frankfurt, Germany (EU-Central-1)</p>
					</div>
					<button
						type="button"
						className="text-sm text-forge-secondary transition-colors hover:text-forge-primary"
					>
						Request Migration
					</button>
				</div>
			</div>
		</div>
	);
}
