# AGENTS.md — Compressed Stack Documentation

> Loaded automatically by AI coding agents. Do not modify unless updating stack versions.

## Next.js App Router

### Routing
- File-based routing in `app/` directory
- `page.tsx` = route, `layout.tsx` = shared layout, `loading.tsx` = Suspense fallback
- `error.tsx` = error boundary, `not-found.tsx` = 404, `route.ts` = API endpoint
- Dynamic: `[param]`, catch-all: `[...param]`, optional: `[[...param]]`
- Route groups: `(groupname)` — organization without affecting URL

### Data Fetching
- Server Components fetch data directly with `async/await`
- `fetch()` caching: `force-cache` (default), `no-store`, `{ next: { revalidate: N } }`
- Server Actions for mutations: `'use server'` directive
- `revalidatePath('/path')` or `revalidateTag('tag')` after mutations
- `cookies()` and `headers()` from `next/headers` are async — must `await`

### Server Actions
- Define in separate files with `'use server'` at top
- Accept `FormData` or typed arguments — must be serializable
- For `useActionState`: first param is `prevState`, second is `formData`
- Always validate inputs with Zod before DB operations
- Use `revalidatePath` or `redirect` after successful mutations

### Rendering
- Server Components default — no directive needed
- `'use client'` only for hooks, event handlers, or browser APIs
- Pass server data as props to client components
- `loading.tsx` provides automatic Suspense boundary per route

### Metadata
- Export `metadata` object or `generateMetadata` function from page/layout
- Supports `title`, `description`, `openGraph`, `twitter`

## Drizzle ORM + Neon Postgres

### Schema (`lib/db/schema.ts`)
- Define tables with `pgTable` from `drizzle-orm/pg-core`
- Column types: `serial`, `text`, `integer`, `boolean`, `timestamp`, `jsonb`, `uuid`
- Constraints: `.primaryKey()`, `.notNull()`, `.unique()`, `.default()`
- Foreign keys: `.references(() => table.column, { onDelete: 'cascade' })`
- Export types: `type InsertX = typeof table.$inferInsert`

### Client (`lib/db/index.ts`)
- Driver: `drizzle-orm/neon-http` for serverless/edge
- Init: `const db = drizzle(process.env.DATABASE_URL!)`

### Queries
- Select: `db.select().from(table).where(eq(table.col, val))`
- Insert: `db.insert(table).values({ ... }).returning()`
- Update: `db.update(table).set({ ... }).where(eq(table.id, id))`
- Delete: `db.delete(table).where(eq(table.id, id))`
- Joins: `.innerJoin(other, eq(table.id, other.tableId))`
- Operators: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `like`, `ilike`, `and`, `or` from `drizzle-orm`

### Migrations
- `pnpm db:generate` — create SQL migration from schema diff
- `pnpm db:migrate` — apply migrations
- `pnpm db:push` — push schema directly (dev only)

## Vercel AI SDK + AI Gateway

### Gateway Setup
- Import: `import { gateway } from '@ai-sdk/gateway'`
- Model: `gateway('provider/model')` e.g. `gateway('anthropic/claude-sonnet-4.5')`
- Env: `AI_GATEWAY_API_KEY` in `.env.local`

### Core Functions
- `generateText({ model, prompt, system })` — single response
- `streamText({ model, prompt, system })` — streaming response
- `generateObject({ model, prompt, schema })` — structured JSON via Zod schema
- `streamObject({ model, prompt, schema })` — streaming structured output
- `convertToModelMessages(uiMessages)` — convert UI messages for model

### Route Handler Pattern
```typescript
import { type UIMessage, convertToModelMessages, streamText } from 'ai';
import { gateway } from '@ai-sdk/gateway';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model: gateway('anthropic/claude-sonnet-4.5'),
    messages: await convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
}
```

### Provider Options
- Routing: `providerOptions: { gateway: { order: ['vertex', 'anthropic'] } }`
- Tools: define with `tool()` from `ai`

## Vercel Blob Storage

### Upload
- `import { put } from '@vercel/blob'`
- `const blob = await put('path/file.txt', content, { access: 'public' })`
- Options: `addRandomSuffix`, `cacheControlMaxAge`, `multipart`, `contentType`

### Read/List/Delete
- `head(url)` — get metadata
- `list({ prefix, limit, cursor })` — paginated listing
- `del(url)` or `del([url1, url2])` — delete blobs
- `copy(fromUrl, toPath, { access: 'public' })` — copy

### Environment
- `BLOB_READ_WRITE_TOKEN` auto-detected on Vercel

## Vercel Edge Functions

- Export `export const runtime = 'edge'` in route handlers
- `export const maxDuration = 30` for streaming timeouts
- Use standard Web APIs — avoid Node.js-specific packages
- `waitUntil()` from `@vercel/functions` for post-response tasks

## Tailwind CSS v4

### Setup
- Import in `app/globals.css`: `@import 'tailwindcss'`
- PostCSS plugin: `@tailwindcss/postcss` in `postcss.config.mjs`
- No `tailwind.config.ts` needed — v4 uses CSS-based configuration

### Theme Customization (in globals.css)
```css
@import 'tailwindcss';

@theme {
  --color-primary: #your-color;
  --font-sans: 'Inter', sans-serif;
}
```

### Key Differences from v3
- CSS-first configuration — `@theme` directive replaces `tailwind.config`
- Automatic content detection — no `content` array needed
- CSS variables for all design tokens

## shadcn/ui

### Usage
- Components live in `components/ui/`
- Add components: `pnpm dlx shadcn@latest add button`
- Use `cn()` from `@/lib/utils` for conditional classNames
- Components are copied into your project — fully customizable
- Config in `components.json`

### Pattern
```typescript
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

## Biome

### Commands
- `pnpm check` — check formatting + linting
- `pnpm check:fix` — auto-fix all issues
- `pnpm format` — format only
- `pnpm lint` — lint only
- Auto-runs via Claude Code PostToolUse hook on file edits
