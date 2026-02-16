# Stack Documentation & Implementation Review

You are maintaining the Rosedale Template, a Claude Code-optimized Next.js starter repository.
Your job is to ensure the template's code and documentation reflect the **latest best practices**
from all stack components.

## Context

This template uses:
- **Next.js** (App Router, Turbopack, React 19)
- **Vercel AI SDK** with AI Gateway (`@ai-sdk/gateway`)
- **Drizzle ORM** with Neon Postgres (`drizzle-orm`, `@neondatabase/serverless`)
- **Tailwind CSS v4** (CSS-first config, `@tailwindcss/postcss`)
- **shadcn/ui** (New York style, `components/ui/`)
- **Vercel Blob Storage** (`@vercel/blob`)
- **Biome** (formatter + linter, replaces ESLint/Prettier)

Key files you will update:
- `AGENTS.md` — compressed stack docs (the primary target)
- Source files in `app/`, `lib/` — example implementations
- `next.config.ts`, `drizzle.config.ts`, `postcss.config.mjs` — config files

## Tasks

### 1. Review Next.js Documentation

Search the web for the latest Next.js documentation (nextjs.org/docs). Check:
- Has the App Router API changed? New conventions, deprecated patterns?
- Are there new recommended patterns for Server Components or Server Actions?
- Has the metadata API changed?
- Are there new special file conventions (e.g., new files like `forbidden.tsx`)?
- Has `next.config.ts` gained new recommended options?

Update if needed: `app/layout.tsx`, `app/page.tsx`, `next.config.ts`, AGENTS.md "Next.js App Router" section.

### 2. Review Vercel AI SDK Documentation

Search the web for the latest Vercel AI SDK docs (ai-sdk.dev). Check:
- Has the `streamText` / `generateText` API changed?
- Has the Gateway API (`@ai-sdk/gateway`) changed?
- Has the `UIMessage` type or `convertToModelMessages` changed?
- Are there new recommended patterns for route handlers?
- Are there new model identifiers or provider options?
- Has the `tool()` API changed?

Update if needed: `app/api/chat/route.ts`, `lib/ai/index.ts`, AGENTS.md "Vercel AI SDK + AI Gateway" section.

### 3. Review Drizzle ORM Documentation

Search the web for the latest Drizzle ORM docs (orm.drizzle.team). Check:
- Has the `drizzle-orm/neon-http` driver API changed?
- Are there new column types or schema definition patterns?
- Has the query builder API changed?
- Has `drizzle-kit` configuration format changed?
- Are there new recommended patterns for Neon Postgres?

Update if needed: `lib/db/index.ts`, `lib/db/schema.ts`, `drizzle.config.ts`, AGENTS.md "Drizzle ORM + Neon Postgres" section.

### 4. Review Tailwind CSS v4 Documentation

Search the web for the latest Tailwind CSS v4 docs (tailwindcss.com). Check:
- Has the CSS-first configuration approach changed?
- Are there new `@theme` directive features?
- Has the PostCSS plugin setup changed?
- Are there new utility classes or breaking changes?

Update if needed: `app/globals.css`, `postcss.config.mjs`, AGENTS.md "Tailwind CSS v4" section.

### 5. Review shadcn/ui Documentation

Search the web for the latest shadcn/ui docs (ui.shadcn.com). Check:
- Has `components.json` schema changed?
- Is the CLI command still `pnpm dlx shadcn@latest add`?
- Are there new recommended component patterns?
- Has the `cn()` utility pattern changed?

Update if needed: `components.json`, `lib/utils.ts`, AGENTS.md "shadcn/ui" section.

### 6. Review Vercel Blob Storage Documentation

Search the web for the latest `@vercel/blob` docs. Check:
- Has the `put` / `del` / `head` / `list` / `copy` API changed?
- Are there new features worth adding to the re-exports?
- Has the environment variable name changed?

Update if needed: `lib/blob/index.ts`, AGENTS.md "Vercel Blob Storage" section.

### 7. Review Biome Documentation

Search the web for the latest Biome docs (biomejs.dev). Check:
- Has the config schema changed?
- Are there new recommended rules?
- Has the CSS/Tailwind support improved?
- Are there new formatter or linter options?

Update if needed: `biome.json`, AGENTS.md "Biome" section.

## Rules

- Only make changes when you have **high confidence** that documentation has changed
- If you are unsure whether something changed, **leave it as-is**
- Preserve the **compressed/concise style** of AGENTS.md — it is a quick-reference, not a tutorial
- Code examples in AGENTS.md must be **correct and runnable**
- Do NOT modify `.env` or `.env.example` files
- Do NOT modify `.claude/settings.json` or `.claude/.mcp.json` (that's Job 3's responsibility)
- Use `pnpm` exclusively — never `npm` or `yarn`
- Run `pnpm check:fix` after making any code changes
- Keep template code **minimal** — this is a starter, not a full application
- Every code change must pass `pnpm typecheck` and `pnpm build`
