'use client';

import { useState } from 'react';
import { userProfile } from '@/lib/mock-data';

export function ProfileForm() {
	const [form, setForm] = useState(userProfile);

	const fields: { label: string; key: keyof typeof userProfile }[] = [
		{ label: 'FULL NAME', key: 'fullName' },
		{ label: 'WORK EMAIL', key: 'email' },
		{ label: 'ROLE', key: 'role' },
		{ label: 'DEPARTMENT', key: 'department' },
	];

	return (
		<div>
			<h2 className="text-lg font-semibold text-forge-primary">Profile Details</h2>
			<p className="mt-0.5 text-sm text-forge-secondary">
				Your personal information and identity.
			</p>

			<div className="mt-6 flex items-center gap-4">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-forge-primary text-lg font-semibold text-white">
					{form.initials}
				</div>
				<button className="rounded-xl border border-forge-divider px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]">
					Change Photo
				</button>
				<span className="text-xs text-forge-hint">JPG or PNG. Max 1MB.</span>
			</div>

			<div className="mt-6 grid grid-cols-2 gap-4">
				{fields.map((f) => (
					<div key={f.key}>
						<label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-widest text-forge-secondary">
							{f.label}
						</label>
						<input
							type="text"
							value={form[f.key]}
							onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
							className="w-full rounded-xl border border-forge-divider bg-white px-4 py-3 text-sm text-forge-primary outline-none transition-colors focus:border-forge-accent-blue"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
