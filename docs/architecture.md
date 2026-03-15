# Architecture

## Overview

FORGE is a manufacturing intelligence demo app built for Playwright recording. All data is mocked via `lib/mock-data.ts` — no database or API calls are used at runtime.

The app uses a **route group layout** pattern: all pages live under `app/(dashboard)/` which provides a shared sidebar + atmospheric background. The root `/` redirects to `/insights`.

## Routes

| Route | Page | Type |
|-------|------|------|
| `/insights` | Manufacturing Insights Dashboard | Static |
| `/quoting` | Quoting Tool | Static |
| `/knowledge-base` | Technical Knowledge Chat | Client (interactive chat) |
| `/documents` | Document Library | Client (pagination) |
| `/agents` | Agent Workspace | Static |
| `/agents/[id]` | Agent Configuration | Client (forms, toggles) |
| `/settings` | Settings & Profile | Client (forms, toggles) |

## Design System

- **Background**: Radial gradient (`#E0E7FF` → `#F2F4F5`) via `.forge-atmosphere`
- **Surfaces**: Glass panels (`.glass` = white 70% opacity + backdrop blur) and solid cards (`.glass-solid`)
- **Colors**: Defined as `--color-forge-*` CSS custom properties in `globals.css`
- **Typography**: Inter via `next/font/google`
- **Charts**: Recharts with custom dark styling (area charts, donut chart, sparklines)

## Component Structure

Shared components in `components/`: `Sidebar`, `GlassCard`, `StatCard`, `PageHeader`.
Page-specific components in `components/{page-name}/` subdirectories.

## Key Flows

- **Chat**: `/knowledge-base` uses client-side state. User input triggers a canned response from `cannedResponses` array, cycling through available responses.
- **Navigation**: Sidebar uses `usePathname()` to highlight the active route. All navigation is via Next.js `<Link>`.
- **Agent Config**: Clicking an agent card on `/agents` navigates to `/agents/[id]` with pre-filled form data from `agentConfigDefaults`.

## Integrations

None — this is a self-contained demo with mocked data.
