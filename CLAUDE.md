# Project: FORGE Manufacturing Demo

## Overview
FORGE is a manufacturing intelligence demo application built to showcase Rosedale's AI-powered platform. It is a **self-contained, mocked demo** — no database, no API calls, no auth at runtime. All data comes from `lib/mock-data.ts`.

The app is designed to be **recorded as a video walkthrough** using Playwright, producing a polished demo reel of each page.

## Tech Stack
- **Framework**: Next.js (App Router, Turbopack, React 19)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + custom FORGE design tokens (`--color-forge-*`)
- **Charts**: Recharts (area charts, donut chart, sparklines)
- **Icons**: Lucide React
- **Testing/Recording**: Playwright (demo video recording, not traditional tests)
- **Video Processing**: ffmpeg-static (converts Playwright .webm to .mp4)
- **Package Manager**: pnpm (enforced — do NOT use npm or yarn)
- **Formatting/Linting**: Biome (auto-runs via PostToolUse hook)

## Pages (9 routes)
All pages live under `app/(dashboard)/` which provides a shared sidebar + atmospheric background. Root `/` redirects to `/insights`.

| Route | Page | Description |
|-------|------|-------------|
| `/insights` | Insights Dashboard | Production charts, energy donut, due jobs table, intelligence brief |
| `/delivery` | Delivery Intelligence | Supplier OTD chart, delay root cause donut, at-risk PO table, supplier scorecard, agent feed |
| `/shop-floor` | Shop Floor Monitor | Machine status table, OEE breakdown, maintenance timeline, shift overview, machine alerts |
| `/quoting` | Quoting Tool | Enhanced quote table with filters/margins, Quote Builder modal (3-step: form → AI processing → review with cost breakdown, routing, similar jobs, margin slider) |
| `/knowledge-base` | Knowledge Base | Enhanced chat with inline citations [1][2][3], source citation cards, confidence badges, contributor attribution, query suggestions |
| `/documents` | Document Library | Paginated doc table, pinned documents |
| `/agents` | Agent Workspace | Agent cards with live activity and performance analytics |
| `/agents/[id]` | Agent Config | Config form, guardrails toggles |
| `/settings` | Settings | Profile form, AI settings, security section |

## Commands
- `pnpm dev` — Start dev server with Turbopack
- `pnpm build` — Production build
- `pnpm start` — Start production server
- `pnpm check:fix` — Biome check with auto-fix
- `pnpm typecheck` — TypeScript type checking
- `pnpm record-demo` — Full pipeline: build → start server → Playwright recording → ffmpeg conversion to MP4

## Demo Recording System

### How it works
1. `scripts/record-demo.sh` builds the app, starts a production server on :3000, runs Playwright, and converts the output to MP4
2. `playwright.config.ts` is configured for 1920×1080 video recording with `slowMo: 50` for smooth animations
3. `tests/demo-recording.spec.ts` drives a scripted walkthrough of every page with:
   - A **fake cursor** (20px dot) injected into the DOM to replace the invisible Playwright cursor
   - **Click ripple** animations for visual feedback
   - Smooth mouse movements between elements
   - Timed pauses to let the viewer absorb each page

### Key files
- `scripts/record-demo.sh` — Orchestration script (build → serve → record → convert)
- `playwright.config.ts` — Playwright config (video on, 1080p, chromium only)
- `tests/demo-recording.spec.ts` — The scripted walkthrough
- `demo-recording.mp4` — Output artifact (committed to repo)

## Design System
- **Background**: Radial gradient (`#E0E7FF` → `#F2F4F5`) via `.forge-atmosphere`
- **Surfaces**: Glass panels (`.glass` = white 70% opacity + backdrop blur) and solid cards (`.glass-solid`)
- **Colors**: Defined as `--color-forge-*` CSS custom properties in `globals.css`
- **Typography**: Inter via `next/font/google`

## Directory Structure
- `app/` — Routes, layouts (all under `(dashboard)` route group)
- `components/` — Shared: `Sidebar`, `GlassCard`, `StatCard`, `PageHeader`
- `components/{page}/` — Page-specific: `insights/`, `delivery/`, `shop-floor/`, `quoting/`, `knowledge/`, `documents/`, `agents/`, `settings/`
- `lib/mock-data.ts` — All mock data (documents, chat messages, agents, quotes, etc.)
- `lib/utils.ts` — `cn()` helper
- `scripts/` — Demo recording shell script
- `tests/` — Playwright demo recording spec
- `docs/` — Architecture docs, design prompt, recording prompt

## Code Style
- Server Components by default — only add `'use client'` when using hooks/event handlers/browser APIs
- Named exports for components; default exports only for `page.tsx` and `layout.tsx`
- `@/` path alias for all imports
- Use `cn()` from `@/lib/utils` for conditional classNames

## Data
All data is mocked in `lib/mock-data.ts`. There is **no database, no API, no server actions** in this demo. The following are present in `package.json` from the template but unused:
- `drizzle-orm` / `drizzle-kit` / `@neondatabase/serverless` (database)
- `@ai-sdk/gateway` / `ai` (AI SDK)
- `@vercel/blob` (blob storage)
- `zod` (validation)

## GitHub
- **Org**: Rosedale-Insights
- **Repo**: `website-demo`
- **Remote**: `origin` → `https://github.com/Rosedale-Insights/website-demo.git`

## IMPORTANT
- Do NOT use `npm` or `yarn` — pnpm only
- Do NOT read `.env` or `.env.local` files
- Do NOT use `any` type — prefer `unknown` and narrow
- Do NOT install ESLint or Prettier — this project uses Biome
- This is a **demo app** — all data is mocked, no real integrations
