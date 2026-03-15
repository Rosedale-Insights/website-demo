'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { agentConfigDefaults } from '@/lib/mock-data';

export function ConfigForm() {
	const [name, setName] = useState(agentConfigDefaults.name);
	const [role, setRole] = useState(agentConfigDefaults.systemRole);
	const [model] = useState(agentConfigDefaults.model);

	return (
		<div className="glass-solid rounded-2xl p-6">
			<h3 className="mb-6 text-lg font-semibold text-forge-primary">Identity & Persona</h3>
			<div className="space-y-5">
				<div>
					<label className="mb-1.5 block text-xs font-medium text-forge-secondary">
						Agent Name
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="mt-1.5 w-full rounded-xl border border-forge-divider bg-white px-4 py-3 text-sm text-forge-primary outline-none transition-colors focus:border-forge-accent-blue"
						/>
					</label>
				</div>
				<div>
					<label className="mb-1.5 block text-xs font-medium text-forge-secondary">
						System Role
						<textarea
							value={role}
							onChange={(e) => setRole(e.target.value)}
							rows={2}
							className="mt-1.5 w-full resize-none rounded-xl border border-forge-divider bg-white px-4 py-3 text-sm text-forge-primary outline-none transition-colors focus:border-forge-accent-blue"
						/>
					</label>
				</div>
				<div>
					<label className="mb-1.5 block text-center text-xs font-medium text-forge-secondary">
						Model Selection
						<div className="relative">
							<select className="w-full appearance-none rounded-xl border border-forge-divider bg-white px-4 py-3 pr-10 text-sm text-forge-primary outline-none transition-colors focus:border-forge-accent-blue">
								<option>{model}</option>
								<option>Forge-Standard-V1</option>
								<option>Forge-Lite</option>
							</select>
							<ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forge-hint" />
						</div>
					</label>
				</div>
			</div>
		</div>
	);
}
