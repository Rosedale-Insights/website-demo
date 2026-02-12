import { gateway } from '@ai-sdk/gateway';
import { convertToModelMessages, streamText, type UIMessage } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages }: { messages: UIMessage[] } = await req.json();

	const result = streamText({
		model: gateway('anthropic/claude-sonnet-4-5-20250929'),
		messages: await convertToModelMessages(messages),
	});

	return result.toUIMessageStreamResponse();
}
