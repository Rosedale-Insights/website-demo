---
paths:
  - "lib/ai/**/*.ts"
  - "app/api/**/*.ts"
---

# AI SDK and Gateway Rules

- Always use `gateway()` from `@ai-sdk/gateway` for model access
- Model identifier format: `'provider/model-name'` (e.g., `'anthropic/claude-sonnet-4.5'`)
- Use `streamText` for chat/streaming, `generateText` for single responses
- Use `streamObject`/`generateObject` with Zod schemas for structured output
- Convert UI messages: `await convertToModelMessages(messages)` before passing to model
- Return streams: `result.toUIMessageStreamResponse()` from route handlers
- Set `export const maxDuration = 30` in streaming API routes
- For edge execution: `export const runtime = 'edge'`
- Environment variable: `AI_GATEWAY_API_KEY` must be set
- Use `providerOptions.gateway.order` array for provider routing preferences
- Define tools with `tool()` from `ai` package
