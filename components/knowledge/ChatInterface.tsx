'use client';

import {
	ArrowUp,
	Brain,
	ClipboardList,
	Paperclip,
	Search,
	Sparkles,
	Table2,
	Wrench,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { CitationSource, EnhancedChatResponse, KnowledgeContributor } from '@/lib/mock-data';
import { enhancedChatResponses, querySuggestions } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

type Message = {
	id: string;
	role: 'user' | 'assistant';
	sender: string;
	content: string;
	citations?: CitationSource[];
	contributors?: KnowledgeContributor[];
	confidenceScore?: number;
	sourcesMatched?: number;
};

const docTypeIcon: Record<string, React.ElementType> = {
	SOP: ClipboardList,
	'Work Instruction': Wrench,
	'Troubleshooting Guide': Search,
	'Process Parameters': Table2,
	'Tribal Knowledge': Brain,
};

function CitationBadge({ number }: { number: number }) {
	return (
		<span className="mx-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-forge-primary/10 px-1 text-[10px] font-bold text-forge-primary">
			{number}
		</span>
	);
}

function renderCitedText(text: string) {
	return text.split(/(\[\d+\])/).map((part, i) => {
		const match = part.match(/\[(\d+)\]/);
		if (match) return <CitationBadge key={`c-${i}`} number={Number(match[1])} />;
		return <span key={`t-${i}`}>{part}</span>;
	});
}

function SourceCitationCard({ citation }: { citation: CitationSource }) {
	const Icon = docTypeIcon[citation.docType] ?? ClipboardList;
	return (
		<div className="rounded-lg border border-forge-divider bg-white p-3">
			<div className="mb-1.5 flex items-center gap-2">
				<Icon className="h-3.5 w-3.5 text-forge-secondary" />
				<span className="text-xs font-semibold text-forge-primary">
					{citation.docId}: {citation.docTitle}
				</span>
				<span className="text-[10px] text-forge-hint">{citation.revision}</span>
			</div>
			<div className="mb-2 rounded-lg border-l-2 border-forge-accent-warm bg-forge-accent-warm/5 px-3 py-2">
				<p className="text-xs leading-relaxed text-forge-secondary">
					{citation.highlightedPassage}
				</p>
			</div>
			<div className="flex gap-2 text-[10px] text-forge-hint">
				<span>{citation.docType}</span>
				<span>·</span>
				<span>{citation.author}</span>
				<span>·</span>
				<span>Updated {citation.lastUpdated}</span>
			</div>
		</div>
	);
}

function KnowledgeAttribution({ contributors }: { contributors: KnowledgeContributor[] }) {
	return (
		<div className="mt-3 flex items-center gap-2">
			<span className="text-[10px] text-forge-hint">Knowledge from:</span>
			<div className="flex items-center gap-1.5">
				{contributors.map((c) => (
					<div key={c.initials} className="flex items-center gap-1">
						<div className="flex h-5 w-5 items-center justify-center rounded-full bg-forge-primary/10 text-[8px] font-semibold text-forge-primary">
							{c.initials}
						</div>
						<span className="text-[10px] text-forge-secondary">
							{c.name}, {c.yearsExperience} yrs
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

function ConfidenceBadge({ score, sources }: { score: number; sources: number }) {
	return (
		<div className="mt-2 flex items-center gap-1.5">
			<Sparkles className="h-3 w-3 text-forge-secondary" />
			<span className="text-[10px] font-medium text-forge-secondary">
				{score}% confidence · {sources} sources matched
			</span>
		</div>
	);
}

export function ChatInterface() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState('');
	const [responseIndex, setResponseIndex] = useState(0);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const messagesLength = messages.length;
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messagesLength]);

	const submitQuery = (text: string) => {
		if (!text.trim()) return;

		const response: EnhancedChatResponse =
			enhancedChatResponses[responseIndex % enhancedChatResponses.length];

		const userMsg: Message = {
			id: `u-${Date.now()}`,
			role: 'user',
			sender: 'You',
			content: text,
		};

		const aiMsg: Message = {
			id: `a-${Date.now()}`,
			role: 'assistant',
			sender: 'Forge Intelligence',
			content: response.content,
			citations: response.citations,
			contributors: response.contributors,
			confidenceScore: response.confidenceScore,
			sourcesMatched: response.sourcesMatched,
		};

		// Show user message immediately, AI response after 1s simulated delay
		setMessages((prev) => [...prev, userMsg]);
		setInput('');
		setResponseIndex((i) => i + 1);
		setTimeout(() => {
			setMessages((prev) => [...prev, aiMsg]);
		}, 1000);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		submitQuery(input);
	};

	const isEmpty = messages.length === 0;

	return (
		<div className="flex flex-1 flex-col">
			{/* Messages */}
			<div className="flex-1 space-y-6 overflow-y-auto pb-6">
				{isEmpty && (
					<div className="flex flex-col items-center justify-center pt-16">
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-forge-primary/10">
							<Sparkles className="h-6 w-6 text-forge-primary" />
						</div>
						<p className="mb-6 text-sm text-forge-hint">
							Ask a question or choose a suggestion below
						</p>
						<div className="flex flex-wrap justify-center gap-2">
							{querySuggestions.map((q) => (
								<button
									key={q}
									type="button"
									onClick={() => submitQuery(q)}
									className="rounded-full border border-forge-divider bg-white px-4 py-2 text-xs text-forge-secondary transition-colors hover:bg-black/[0.02] hover:text-forge-primary"
								>
									{q}
								</button>
							))}
						</div>
					</div>
				)}

				{messages.map((msg) => (
					<div
						key={msg.id}
						className={cn('flex flex-col', msg.role === 'user' ? 'items-end' : 'items-start')}
					>
						<p className="mb-1 text-xs text-forge-hint">{msg.sender}</p>
						<div
							className={cn(
								'max-w-[640px] rounded-lg px-5 py-4 text-sm leading-relaxed',
								msg.role === 'user'
									? 'bg-forge-primary text-white'
									: 'glass-solid text-forge-primary',
							)}
						>
							{msg.role === 'user' ? (
								<p className="whitespace-pre-line">{msg.content}</p>
							) : (
								<div>
									<div className="whitespace-pre-line">{renderCitedText(msg.content)}</div>

									{msg.confidenceScore != null && msg.sourcesMatched != null && (
										<ConfidenceBadge score={msg.confidenceScore} sources={msg.sourcesMatched} />
									)}
								</div>
							)}
						</div>

						{/* Citation cards + attribution (outside bubble) */}
						{msg.role === 'assistant' && msg.citations && msg.citations.length > 0 && (
							<div className="mt-3 w-full max-w-[640px] space-y-2">
								{msg.citations.map((c) => (
									<SourceCitationCard key={c.id} citation={c} />
								))}
								{msg.contributors && msg.contributors.length > 0 && (
									<KnowledgeAttribution contributors={msg.contributors} />
								)}
							</div>
						)}
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>

			{/* Input Bar */}
			<form onSubmit={handleSubmit} className="mt-auto">
				<div className="flex items-center gap-3 rounded-lg border border-black/[0.08] bg-white p-2 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
					<button
						type="button"
						className="p-2 text-forge-hint transition-colors hover:text-forge-primary"
					>
						<Paperclip className="h-5 w-5" />
					</button>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Ask a technical question..."
						className="flex-1 bg-transparent text-sm text-forge-primary outline-none placeholder:text-forge-hint"
					/>
					<button
						type="submit"
						className="flex h-10 w-10 items-center justify-center rounded-lg bg-forge-primary text-white transition-colors hover:bg-forge-primary/90"
					>
						<ArrowUp className="h-5 w-5" />
					</button>
				</div>
			</form>
		</div>
	);
}
