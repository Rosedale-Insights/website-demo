'use client';

import { Check, Loader2, Sparkles, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { PmScheduleEntry } from '@/lib/mock-data';
import { machines, pmImpactAnalyses, pmProcessingSteps } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

type Step = 'form' | 'processing' | 'review';
type PmType = 'Preventive' | 'Predictive' | 'Inspection';
type Provider = 'In-House' | 'OEM' | 'Third-Party';
type Duration = '4 hrs' | '8 hrs' | '1 day' | '2 days';

export function SchedulePmModal({
	onClose,
	onConfirm,
}: {
	onClose: () => void;
	onConfirm: (entry: PmScheduleEntry) => void;
}) {
	const [step, setStep] = useState<Step>('form');
	const [processingStep, setProcessingStep] = useState(0);
	const [selectedMachineId, setSelectedMachineId] = useState(machines[0].id);
	const [pmType, setPmType] = useState<PmType>('Preventive');
	const [provider, setProvider] = useState<Provider>('In-House');
	const [startDate, setStartDate] = useState('2026-04-01');
	const [endDate, setEndDate] = useState('2026-04-02');
	const [duration, setDuration] = useState<Duration>('1 day');

	// AI Processing animation — same pattern as QuoteBuilderModal
	useEffect(() => {
		if (step !== 'processing') return;
		if (processingStep >= pmProcessingSteps.length) {
			const timer = setTimeout(() => setStep('review'), 400);
			return () => clearTimeout(timer);
		}
		const timer = setTimeout(
			() => setProcessingStep((s) => s + 1),
			processingStep === 0 ? 1000 : 800,
		);
		return () => clearTimeout(timer);
	}, [step, processingStep]);

	function handleConfirm() {
		const machine = machines.find((m) => m.id === selectedMachineId) ?? machines[0];
		const analysis = pmImpactAnalyses.find((a) => a.machineId === selectedMachineId);
		const newEntry: PmScheduleEntry = {
			id: `PM-NEW-${Date.now()}`,
			machineId: selectedMachineId,
			machineName: machine.name,
			pmType,
			status: 'Scheduled',
			priority: 'Medium',
			startDate,
			endDate,
			duration,
			serviceProvider: provider,
			technician: null,
			jobConflicts: analysis?.jobsAffected.length ?? 0,
			aiRecommended: false,
			description: `${pmType} maintenance — ${machine.name}`,
		};
		onConfirm(newEntry);
	}

	return (
		<div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 px-4 py-8 backdrop-blur-sm">
			<div className="glass-solid relative w-full max-w-3xl rounded-lg shadow-glass-xl">
				{/* Close button */}
				<button
					type="button"
					onClick={onClose}
					className="absolute top-4 right-4 z-10 text-forge-hint transition-colors hover:text-forge-primary"
				>
					<X className="h-5 w-5" />
				</button>

				{step === 'form' && (
					<FormStep
						selectedMachineId={selectedMachineId}
						onMachineChange={setSelectedMachineId}
						pmType={pmType}
						onPmTypeChange={setPmType}
						provider={provider}
						onProviderChange={setProvider}
						startDate={startDate}
						onStartDateChange={setStartDate}
						endDate={endDate}
						onEndDateChange={setEndDate}
						duration={duration}
						onDurationChange={setDuration}
						onAnalyze={() => setStep('processing')}
					/>
				)}
				{step === 'processing' && <ProcessingStep currentStep={processingStep} />}
				{step === 'review' && (
					<ReviewStep
						machineId={selectedMachineId}
						onBack={() => {
							setStep('form');
							setProcessingStep(0);
						}}
						onConfirm={handleConfirm}
					/>
				)}
			</div>
		</div>
	);
}

/* ── Step 1: Configure PM ────────────────────────────── */

function FormStep({
	selectedMachineId,
	onMachineChange,
	pmType,
	onPmTypeChange,
	provider,
	onProviderChange,
	startDate,
	onStartDateChange,
	endDate,
	onEndDateChange,
	duration,
	onDurationChange,
	onAnalyze,
}: {
	selectedMachineId: string;
	onMachineChange: (id: string) => void;
	pmType: PmType;
	onPmTypeChange: (t: PmType) => void;
	provider: Provider;
	onProviderChange: (p: Provider) => void;
	startDate: string;
	onStartDateChange: (d: string) => void;
	endDate: string;
	onEndDateChange: (d: string) => void;
	duration: Duration;
	onDurationChange: (d: Duration) => void;
	onAnalyze: () => void;
}) {
	return (
		<div className="p-8">
			<h2 className="mb-1 text-lg font-semibold text-forge-primary">Schedule PM</h2>
			<p className="mb-6 text-sm text-forge-hint">
				Configure maintenance parameters for AI-powered schedule optimization.
			</p>

			<div className="grid grid-cols-2 gap-x-6 gap-y-4">
				<div>
					<label className="mb-1 block text-xs font-medium text-forge-secondary">Machine</label>
					<select
						value={selectedMachineId}
						onChange={(e) => onMachineChange(e.target.value)}
						className="w-full rounded-lg border border-forge-divider bg-white px-4 py-2.5 text-sm text-forge-primary outline-none focus:border-forge-primary/20"
					>
						{machines.map((m) => (
							<option key={m.id} value={m.id}>
								{m.id} — {m.name}
							</option>
						))}
					</select>
				</div>

				<div>
					<label className="mb-1 block text-xs font-medium text-forge-secondary">PM Type</label>
					<div className="flex gap-2">
						{(['Preventive', 'Predictive', 'Inspection'] as const).map((t) => (
							<button
								key={t}
								type="button"
								onClick={() => onPmTypeChange(t)}
								className={cn(
									'rounded-lg px-3 py-2 text-xs font-medium transition-colors',
									t === pmType
										? 'bg-forge-primary text-white'
										: 'border border-forge-divider bg-white text-forge-secondary hover:bg-black/[0.02]',
								)}
							>
								{t}
							</button>
						))}
					</div>
				</div>

				<div>
					<label className="mb-1 block text-xs font-medium text-forge-secondary">Start Date</label>
					<input
						type="date"
						value={startDate}
						onChange={(e) => onStartDateChange(e.target.value)}
						className="w-full rounded-lg border border-forge-divider bg-white px-4 py-2.5 text-sm text-forge-primary outline-none focus:border-forge-primary/20"
					/>
				</div>

				<div>
					<label className="mb-1 block text-xs font-medium text-forge-secondary">End Date</label>
					<input
						type="date"
						value={endDate}
						onChange={(e) => onEndDateChange(e.target.value)}
						className="w-full rounded-lg border border-forge-divider bg-white px-4 py-2.5 text-sm text-forge-primary outline-none focus:border-forge-primary/20"
					/>
				</div>

				<div>
					<label className="mb-1 block text-xs font-medium text-forge-secondary">
						Estimated Duration
					</label>
					<select
						value={duration}
						onChange={(e) => onDurationChange(e.target.value as Duration)}
						className="w-full rounded-lg border border-forge-divider bg-white px-4 py-2.5 text-sm text-forge-primary outline-none focus:border-forge-primary/20"
					>
						<option>4 hrs</option>
						<option>8 hrs</option>
						<option>1 day</option>
						<option>2 days</option>
					</select>
				</div>

				<div>
					<label className="mb-1 block text-xs font-medium text-forge-secondary">
						Service Provider
					</label>
					<div className="flex gap-2">
						{(['In-House', 'OEM', 'Third-Party'] as const).map((p) => (
							<button
								key={p}
								type="button"
								onClick={() => onProviderChange(p)}
								className={cn(
									'rounded-lg px-3 py-2 text-xs font-medium transition-colors',
									p === provider
										? 'bg-forge-primary text-white'
										: 'border border-forge-divider bg-white text-forge-secondary hover:bg-black/[0.02]',
								)}
							>
								{p}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className="mt-6 flex justify-end">
				<button
					type="button"
					onClick={onAnalyze}
					className="flex items-center gap-2 rounded-lg bg-forge-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
				>
					<Sparkles className="h-4 w-4" />
					Analyze Schedule
				</button>
			</div>
		</div>
	);
}

/* ── Step 2: AI Processing Animation ─────────────────── */

function ProcessingStep({ currentStep }: { currentStep: number }) {
	return (
		<div className="flex min-h-[400px] flex-col items-center justify-center p-8">
			<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-forge-primary/10">
				<Sparkles className="h-6 w-6 animate-pulse text-forge-primary" />
			</div>
			<h2 className="mb-6 text-lg font-semibold text-forge-primary">Analyzing Schedule Impact</h2>
			<div className="w-full max-w-md space-y-3">
				{pmProcessingSteps.map((label, i) => {
					const done = i < currentStep;
					const active = i === currentStep;
					return (
						<div
							key={label}
							className={cn(
								'flex items-center gap-3 transition-opacity',
								!done && !active && 'opacity-30',
							)}
						>
							{done ? (
								<Check className="h-4 w-4 shrink-0 text-forge-success" />
							) : active ? (
								<Loader2 className="h-4 w-4 shrink-0 animate-spin text-forge-primary" />
							) : (
								<div className="h-4 w-4 shrink-0" />
							)}
							<span
								className={cn(
									'text-sm',
									done && 'text-forge-success',
									active && 'font-medium text-forge-primary',
									!done && !active && 'text-forge-hint',
								)}
							>
								{label}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

/* ── Step 3: Review & Confirm ────────────────────────── */

const checklistItems = [
	'Spindle bearing inspection',
	'Lubrication system check',
	'Axis alignment verification',
	'Coolant system flush',
	'Safety interlock test',
];

function ReviewStep({
	machineId,
	onBack,
	onConfirm,
}: {
	machineId: string;
	onBack: () => void;
	onConfirm: () => void;
}) {
	const machine = machines.find((m) => m.id === machineId) ?? machines[0];
	const analysis = pmImpactAnalyses.find((a) => a.machineId === machineId) ?? pmImpactAnalyses[0];
	const [checked, setChecked] = useState<boolean[]>(checklistItems.map(() => false));

	function toggleCheck(idx: number) {
		setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
	}

	return (
		<div className="p-8">
			<h2 className="mb-1 text-lg font-semibold text-forge-primary">PM Analysis — {machine.id}</h2>
			<p className="mb-6 text-sm text-forge-hint">
				{machine.name} · {machine.type}
			</p>

			{/* AI Recommendation */}
			<div className="mb-6 rounded-lg bg-forge-primary/[0.03] p-4">
				<div className="mb-2 flex items-center gap-1.5">
					<Sparkles className="h-3.5 w-3.5 text-forge-primary" />
					<span className="text-xs font-semibold text-forge-primary">AI Recommendation</span>
				</div>
				<p className="text-xs leading-relaxed text-forge-secondary">{analysis.aiRecommendation}</p>
			</div>

			<div className="grid grid-cols-2 gap-6">
				{/* Jobs affected */}
				<div>
					<h3 className="mb-2 text-xs font-semibold text-forge-primary">Jobs Affected</h3>
					{analysis.jobsAffected.length === 0 ? (
						<p className="text-xs text-forge-hint">No jobs affected in this window.</p>
					) : (
						<div className="rounded-lg border border-forge-divider">
							<div className="grid grid-cols-[1fr_1fr_60px_60px] gap-2 border-b border-forge-divider bg-black/[0.02] px-3 py-2">
								<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
									Job
								</span>
								<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
									Customer
								</span>
								<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
									Delay
								</span>
								<span className="text-[10px] font-medium uppercase tracking-wider text-forge-hint">
									Reroute
								</span>
							</div>
							{analysis.jobsAffected.map((job) => (
								<div
									key={job.jobId}
									className="grid grid-cols-[1fr_1fr_60px_60px] gap-2 border-b border-forge-divider px-3 py-2 last:border-b-0"
								>
									<span className="text-xs font-medium text-forge-primary">{job.jobId}</span>
									<span className="truncate text-xs text-forge-secondary">{job.customer}</span>
									<span className="text-xs text-forge-secondary">{job.delayDays}d</span>
									<span
										className={cn(
											'text-xs font-medium',
											job.canReroute ? 'text-forge-success' : 'text-forge-error',
										)}
									>
										{job.canReroute ? `→ ${job.rerouteTo}` : 'No'}
									</span>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Cost summary */}
				<div>
					<h3 className="mb-2 text-xs font-semibold text-forge-primary">Cost Summary</h3>
					<div className="space-y-2">
						<div className="flex items-center justify-between rounded-lg border border-forge-divider px-3 py-2">
							<span className="text-xs text-forge-secondary">Planned PM Cost</span>
							<span className="text-xs font-medium text-forge-primary">
								${analysis.costImpact.toLocaleString()}
							</span>
						</div>
						<div className="flex items-center justify-between rounded-lg border border-forge-divider px-3 py-2">
							<span className="text-xs text-forge-secondary">Unplanned Downtime Risk</span>
							<span className="text-xs font-medium text-forge-error">
								${machine.costUnplannedDowntime.toLocaleString()}/hr
							</span>
						</div>
						<div className="flex items-center justify-between rounded-lg bg-forge-primary p-3 text-white">
							<span className="text-xs">Total Delay</span>
							<span className="text-sm font-bold">
								{analysis.totalDelayDays} day{analysis.totalDelayDays !== 1 ? 's' : ''}
							</span>
						</div>
					</div>

					{/* PM checklist */}
					<h3 className="mt-4 mb-2 text-xs font-semibold text-forge-primary">PM Checklist</h3>
					<div className="space-y-1.5">
						{checklistItems.map((item, idx) => (
							<button
								key={item}
								type="button"
								onClick={() => toggleCheck(idx)}
								className="flex w-full items-center gap-2 text-left"
							>
								<div
									className={cn(
										'flex h-4 w-4 shrink-0 items-center justify-center rounded border',
										checked[idx]
											? 'border-forge-primary bg-forge-primary'
											: 'border-forge-secondary/40 bg-white',
									)}
								>
									{checked[idx] && <Check className="h-2.5 w-2.5 text-white" />}
								</div>
								<span
									className={cn(
										'text-xs',
										checked[idx] ? 'text-forge-primary line-through' : 'text-forge-secondary',
									)}
								>
									{item}
								</span>
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Bottom actions */}
			<div className="mt-6 flex items-center justify-between border-t border-forge-divider pt-6">
				<button
					type="button"
					onClick={onBack}
					className="text-sm font-medium text-forge-secondary transition-colors hover:text-forge-primary"
				>
					← Try Different Window
				</button>
				<button
					type="button"
					onClick={onConfirm}
					className="rounded-lg bg-forge-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
				>
					Confirm Schedule
				</button>
			</div>
		</div>
	);
}
