import { AiSettings } from '@/components/settings/AiSettings';
import { ProfileForm } from '@/components/settings/ProfileForm';
import { SecuritySection } from '@/components/settings/SecuritySection';

export default function SettingsPage() {
	return (
		<div className="mx-auto max-w-2xl space-y-10">
			<div>
				<h1 className="text-3xl font-semibold tracking-tight text-forge-primary">Settings</h1>
				<p className="mt-1 text-sm text-forge-secondary">
					Manage your manufacturing workspace and AI preferences.
				</p>
			</div>

			<ProfileForm />

			<div className="border-t border-forge-divider" />
			<AiSettings />

			<div className="border-t border-forge-divider" />
			<SecuritySection />

			{/* Footer Actions */}
			<div className="flex items-center justify-end gap-4 border-t border-forge-divider pt-6">
				<button
					type="button"
					className="text-sm text-forge-secondary transition-colors hover:text-forge-primary"
				>
					Discard Changes
				</button>
				<button
					type="button"
					className="rounded-xl bg-forge-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
				>
					Save Configuration
				</button>
			</div>
		</div>
	);
}
