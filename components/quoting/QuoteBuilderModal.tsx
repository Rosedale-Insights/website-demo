'use client';

import { useState, useEffect } from 'react';
import { Check, Loader2, Sparkles, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { quoteBuilderDefaults, quoteBuilderSteps, quoteDetail } from '@/lib/mock-data';
import { CostBreakdownChart } from './CostBreakdownChart';
import { OperationsRouting } from './OperationsRouting';
import { SimilarJobsPanel } from './SimilarJobsPanel';
import { ConfidenceGauge } from './ConfidenceGauge';

type Step = 'form' | 'processing' | 'review';

export function QuoteBuilderModal({ onClose }: { onClose: () => void }) {
	const [step, setStep] = useState<Step>('form');
	const [processingStep, setProcessingStep] = useState(0);
	const [margin, setMargin] = useState(quoteDetail.targetMargin);

	// Calculate price based on margin
	const subtotal = quoteDetail.totalPrice - quoteDetail.costBreakdown.margin;
	const adjustedTotal = Math.round(subtotal / (1 - margin / 100));
	const adjustedMarginDollar = adjustedTotal - subtotal;
	const adjustedUnitPrice = Math.round(adjustedTotal / quoteDetail.quantity);

	// AI Processing animation
	useEffect(() => {
		if (step !== 'processing') return;
		if (processingStep >= quoteBuilderSteps.length) {
			const timer = setTimeout(() => setStep('review'), 400);
			return () => clearTimeout(timer);
		}
		const timer = setTimeout(
			() => setProcessingStep((s) => s + 1),
			processingStep === 0 ? 1000 : 800,
		);
		return () => clearTimeout(timer);
	}, [step, processingStep]);

	return (
		<div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 px-4 py-8 backdrop-blur-sm">
			<div className="glass-solid relative w-full max-w-4xl rounded-2xl shadow-glass-xl">
				{/* Close button */}
				<button
					type="button"
					onClick={onClose}
					className="absolute top-4 right-4 z-10 text-forge-hint transition-colors hover:text-forge-primary"
				>
					<X className="h-5 w-5" />
				</button>

				{step === 'form' && <FormStep onGenerate={() => setStep('processing')} />}
				{step === 'processing' && <ProcessingStep currentStep={processingStep} />}
				{step === 'review' && (
					<ReviewStep
						margin={margin}
						onMarginChange={setMargin}
						adjustedTotal={adjustedTotal}
						adjustedUnitPrice={adjustedUnitPrice}
						adjustedMarginDollar={adjustedMarginDollar}
						onBack={() => {
							setStep('form');
							setProcessingStep(0);
						}}
						onClose={onClose}
					/>
				)}
			</div>
		</div>
	);
}

/* ── Step 1: RFQ Form ────────────────────────────────── */

function FormStep({ onGenerate }: { onGenerate: () => void }) {
	return (
		<div className="p-8">
			<h2 className="mb-1 text-lg font-semibold text-forge-primary">New Quote — RFQ Details</h2>
			<p className="mb-6 text-sm text-forge-hint">Enter the request details to generate an AI-assisted quote.</p>

			<div className="grid grid-cols-2 gap-x-6 gap-y-4">
				<div>
					<label className="mb-1 block text-xs font-medium text-forge-secondary">Customer</label>
					<input
						type="text"
						defaultValue={quoteBuilderDefaults.customer}
						className="w-full rounded-xl border border-forge-divider bg-white px-4 py-2.5 text-sm text-forge-primary outline-none focus:border-forge-primary/20"
					/>
				</div>
				<div>
					<label className="mb-1 block text-xs font-medium text-forge-secondary">Material</label>
					<input
						type="text"
						defaultValue={quoteBuilderDefaults.material}
						className="w-full rounded-xl border border-forge-divider bg-white px-4 py-2.5 text-sm text-forge-primary outline-none focus:border-forge-primary/20"
					/>
				</div>
				<div className="col-span-2">
					<label className="mb-1 block text-xs font-medium text-forge-secondary">Part Description</label>
					<input
						type="text"
						defaultValue={quoteBuilderDefaults.partDescription}
						className="w-full rounded-xl border border-forge-divider bg-white px-4 py-2.5 text-sm text-forge-primary outline-none focus:border-forge-primary/20"
					/>
				</div>
				<div>
					<label className="mb-1 block text-xs font-medium text-forge-secondary">Quantity</label>
					<input
						type="number"
						defaultValue={quoteBuilderDefaults.quantity}
						className="w-full rounded-xl border border-forge-divider bg-white px-4 py-2.5 text-sm text-forge-primary outline-none focus:border-forge-primary/20"
					/>
				</div>
				<div>
					<label className="mb-1 block text-xs font-medium text-forge-secondary">Urgency</label>
					<div className="flex gap-2">
						{(['Standard', 'Rush', 'AOG'] as const).map((u) => (
							<button
								key={u}
								type="button"
								className={cn(
									'rounded-lg px-3 py-2 text-xs font-medium transition-colors',
									u === quoteBuilderDefaults.urgency
										? 'bg-forge-primary text-white'
										: 'border border-forge-divider bg-white text-forge-secondary hover:bg-black/[0.02]',
								)}
							>
								{u}
							</button>
						))}
					</div>
				</div>
				<div className="col-span-2">
					<label className="mb-1 block text-xs font-medium text-forge-secondary">Certifications</label>
					<div className="flex gap-3">
						{['AS9100', 'ITAR', 'NADCAP', 'ISO 9001'].map((cert) => (
							<label key={cert} className="flex items-center gap-1.5 text-xs text-forge-secondary">
								<input
									type="checkbox"
									defaultChecked={quoteBuilderDefaults.certifications.includes(cert)}
									className="rounded"
								/>
								{cert}
							</label>
						))}
					</div>
				</div>
			</div>

			{/* Upload area (decorative) */}
			<div className="mt-4 rounded-xl border-2 border-dashed border-forge-divider p-6 text-center">
				<p className="text-xs text-forge-hint">Drag drawings or specs here, or click to upload</p>
			</div>

			<div className="mt-6 flex justify-end gap-3">
				<button
					type="button"
					onClick={onGenerate}
					className="flex items-center gap-2 rounded-xl bg-forge-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
				>
					<Sparkles className="h-4 w-4" />
					Generate Quote
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
			<h2 className="mb-6 text-lg font-semibold text-forge-primary">Generating Quote</h2>
			<div className="w-full max-w-md space-y-3">
				{quoteBuilderSteps.map((label, i) => {
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

/* ── Step 3: Quote Review ────────────────────────────── */

function ReviewStep({
	margin,
	onMarginChange,
	adjustedTotal,
	adjustedUnitPrice,
	adjustedMarginDollar,
	onBack,
	onClose,
}: {
	margin: number;
	onMarginChange: (v: number) => void;
	adjustedTotal: number;
	adjustedUnitPrice: number;
	adjustedMarginDollar: number;
	onBack: () => void;
	onClose: () => void;
}) {
	return (
		<div className="p-8">
			<h2 className="mb-1 text-lg font-semibold text-forge-primary">
				Quote {quoteDetail.quoteId} — Review
			</h2>
			<p className="mb-6 text-sm text-forge-hint">
				{quoteDetail.client} · {quoteDetail.project} · {quoteDetail.quantity} units
			</p>

			<div className="grid grid-cols-[1fr_320px] gap-8">
				{/* Left: Charts + Routing */}
				<div className="space-y-6">
					<CostBreakdownChart marginOverride={adjustedMarginDollar} />
					<OperationsRouting />
				</div>

				{/* Right: Confidence + AI + Similar + Slider */}
				<div className="space-y-5">
					{/* Confidence */}
					<div className="rounded-xl border border-forge-divider p-4 text-center">
						<ConfidenceGauge score={quoteDetail.confidenceScore} />
					</div>

					{/* AI Recommendation */}
					<div className="rounded-xl bg-forge-primary/[0.03] p-4">
						<div className="mb-2 flex items-center gap-1.5">
							<Sparkles className="h-3.5 w-3.5 text-forge-primary" />
							<span className="text-xs font-semibold text-forge-primary">AI Recommendation</span>
						</div>
						<p className="text-xs leading-relaxed text-forge-secondary">
							{quoteDetail.aiRecommendation}
						</p>
					</div>

					{/* Similar Jobs */}
					<SimilarJobsPanel />

					{/* Margin Slider */}
					<div className="rounded-xl border border-forge-divider p-4">
						<div className="mb-2 flex items-center justify-between">
							<span className="text-xs font-semibold text-forge-primary">Target Margin</span>
							<span className="text-xs font-bold text-forge-primary">{margin}%</span>
						</div>
						<input
							type="range"
							min={10}
							max={45}
							value={margin}
							onChange={(e) => onMarginChange(Number(e.target.value))}
							className="w-full accent-forge-primary"
						/>
						<div className="mt-2 flex items-center justify-between text-[10px] text-forge-hint">
							<span>10%</span>
							<span>45%</span>
						</div>
					</div>

					{/* Price summary */}
					<div className="rounded-xl bg-forge-primary p-4 text-white">
						<div className="flex items-center justify-between">
							<span className="text-xs">Total Quote</span>
							<span className="text-lg font-bold">${adjustedTotal.toLocaleString()}</span>
						</div>
						<div className="mt-1 flex items-center justify-between text-xs opacity-70">
							<span>{quoteDetail.quantity} units × ${adjustedUnitPrice.toLocaleString()}/unit</span>
							<span>{margin}% margin</span>
						</div>
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
					← Back to Form
				</button>
				<div className="flex gap-3">
					<button
						type="button"
						onClick={onClose}
						className="rounded-xl border border-forge-divider bg-white px-4 py-2 text-sm font-medium text-forge-primary transition-colors hover:bg-black/[0.02]"
					>
						Save as Draft
					</button>
					<button
						type="button"
						onClick={onClose}
						className="rounded-xl bg-forge-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-forge-primary/90"
					>
						Send to Customer
					</button>
				</div>
			</div>
		</div>
	);
}
