# Project: [PROJECT_NAME]

## Overview
Next.js application using the App Router, deployed on Vercel.

## Tech Stack
- **Framework**: Next.js (App Router, Turbopack, React 19)
- **Language**: TypeScript (strict mode)
- **Database**: Neon Postgres via Drizzle ORM
- **AI**: Vercel AI SDK with AI Gateway
- **Storage**: Vercel Blob Storage
- **Hosting**: Vercel (Edge Functions supported)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Package Manager**: pnpm (enforced — do NOT use npm or yarn)
- **Formatting/Linting**: Biome (auto-runs via PostToolUse hook)

## Commands
- `pnpm dev` — Start dev server with Turbopack
- `pnpm build` — Production build
- `pnpm check:fix` — Biome check with auto-fix
- `pnpm typecheck` — TypeScript type checking
- `pnpm db:generate` — Generate Drizzle migration from schema changes
- `pnpm db:migrate` — Apply migrations to Neon
- `pnpm db:push` — Push schema directly (dev only)
- `pnpm db:studio` — Open Drizzle Studio

## Code Style
- Server Components by default — only add `'use client'` when using hooks/event handlers/browser APIs
- `'use server'` directive at top of server action files
- Named exports for components; default exports only for `page.tsx` and `layout.tsx`
- Zod for all input validation in server actions
- All database queries through Drizzle ORM — never raw SQL
- `@/` path alias for all imports
- Use `cn()` from `@/lib/utils` for conditional classNames

## Directory Structure
- `app/` — Routes, layouts, API routes
- `app/api/` — API route handlers
- `components/ui/` — shadcn/ui components
- `components/` — App-specific components
- `hooks/` — Custom React hooks
- `lib/db/` — Database schema and client
- `lib/actions/` — Server actions
- `lib/ai/` — AI Gateway utilities
- `lib/blob/` — Blob storage utilities
- `lib/utils.ts` — `cn()` helper and general utilities

## File Naming
- Routes: `app/**/page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`
- API routes: `app/api/**/route.ts`
- Server actions: `lib/actions/*.ts`
- Components: PascalCase in `components/`
- Utilities: camelCase in `lib/`

## Patterns
- Use `gateway('provider/model')` from `@ai-sdk/gateway` for AI model access
- Use `streamText` / `generateText` from `ai` for AI operations
- Blob uploads: `put()` from `@vercel/blob`
- Edge functions: `export const runtime = 'edge'`
- After mutations: `revalidatePath()` or `revalidateTag()`
- Drizzle typed exports: `$inferInsert` and `$inferSelect`

## Working Loop
1. **Read context first** — always read `CLAUDE.md` and relevant docs before coding
2. **Plan before implementing** — outline steps and files before writing code
3. **Code** — implement the plan, following project conventions
4. **Update docs before finishing** — any changed data model or architecture must be reflected in `docs/`
5. Use `/start-task` at the beginning of work to read context and create a plan
6. Use `/finish-task` at the end of work to summarise changes, update docs, and prepare the PR

## Documentation Rules

**When to create a new doc:**
- A new major app area is added (e.g. `app/billing/`)
- A new external integration is introduced (e.g. Stripe, email provider)
- A significant new system is built (auth, background jobs, etc.)

**How to keep docs updated:**
- `/finish-task` always checks which docs need updating
- Any PR that changes the data model must update `docs/data-model.md`
- Any PR that changes system architecture or key flows must update `docs/architecture.md`
- New docs should follow the same heading structure as the starter placeholders
- Docs should be concise and factual — describe what exists, not aspirations

## IMPORTANT
- Do NOT use `npm` or `yarn` — pnpm only
- Do NOT read `.env` or `.env.local` files
- Do NOT use `any` type — prefer `unknown` and narrow
- Do NOT install ESLint or Prettier — this project uses Biome
- Do NOT push to main directly — use feature branches
