'use client';

import { ArrowUp, Paperclip } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cannedResponses, knowledgeChatMessages } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

type Message = {
	id: string;
	role: 'user' | 'assistant';
	sender: string;
	content: string;
};

export function ChatInterface() {
	const [messages, setMessages] = useState<Message[]>(knowledgeChatMessages);
	const [input, setInput] = useState('');
	const [responseIndex, setResponseIndex] = useState(0);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const messagesLength = messages.length;
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messagesLength]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim()) return;

		const userMsg: Message = {
			id: `u-${Date.now()}`,
			role: 'user',
			sender: 'You',
			content: input,
		};

		const aiMsg: Message = {
			id: `a-${Date.now()}`,
			role: 'assistant',
			sender: 'Forge Intelligence',
			content: cannedResponses[responseIndex % cannedResponses.length],
		};

		setMessages((prev) => [...prev, userMsg, aiMsg]);
		setInput('');
		setResponseIndex((i) => i + 1);
	};

	return (
		<div className="flex flex-1 flex-col">
			{/* Messages */}
			<div className="flex-1 space-y-6 overflow-y-auto pb-6">
				{messages.map((msg) => (
					<div
						key={msg.id}
						className={cn('flex flex-col', msg.role === 'user' ? 'items-end' : 'items-start')}
					>
						<p className="mb-1 text-xs text-forge-hint">{msg.sender}</p>
						<div
							className={cn(
								'max-w-[600px] rounded-2xl px-5 py-4 text-sm leading-relaxed',
								msg.role === 'user'
									? 'bg-forge-primary text-white'
									: 'glass-solid text-forge-primary',
							)}
						>
							<p className="whitespace-pre-line">{msg.content}</p>
						</div>
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>

			{/* Input Bar */}
			<form onSubmit={handleSubmit} className="mt-auto">
				<div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-gradient-to-r from-white/80 to-white/60 p-2 shadow-glass-md backdrop-blur-xl">
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
						className="flex h-10 w-10 items-center justify-center rounded-xl bg-forge-primary text-white transition-colors hover:bg-forge-primary/90"
					>
						<ArrowUp className="h-5 w-5" />
					</button>
				</div>
			</form>
		</div>
	);
}
