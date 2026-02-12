# Rosedale Template

A Claude Code-optimized template for Next.js projects on the Vercel stack.

## Stack

- **Framework**: Next.js (App Router, Turbopack, React 19)
- **Language**: TypeScript (strict mode)
- **Database**: Neon Postgres via Drizzle ORM
- **AI**: Vercel AI SDK + AI Gateway
- **Storage**: Vercel Blob
- **Hosting**: Vercel
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Formatting**: Biome (auto-runs via Claude Code hook)
- **Package Manager**: pnpm (enforced)

## Getting Started

```bash
# 1. Clone and rename
git clone <repo-url> my-project
cd my-project

# 2. Enable corepack for pnpm
corepack enable

# 3. Install dependencies
pnpm install

# 4. Set up environment
cp .env.example .env.local
# Fill in DATABASE_URL, AI_GATEWAY_API_KEY, BLOB_READ_WRITE_TOKEN

# 5. Push schema to database (dev only)
pnpm db:push

# 6. Start dev server
pnpm dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm check` | Run Biome checks |
| `pnpm check:fix` | Auto-fix Biome issues |
| `pnpm format` | Format with Biome |
| `pnpm lint` | Lint with Biome |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm db:generate` | Generate Drizzle migration |
| `pnpm db:migrate` | Apply migrations |
| `pnpm db:push` | Push schema directly (dev) |
| `pnpm db:studio` | Open Drizzle Studio |

## Claude Code

This template is configured for optimal Claude Code usage.

### What's Included

- **CLAUDE.md** — Project context loaded every session
- **AGENTS.md** — Compressed stack docs for all AI agents
- **.claude/settings.json** — Shared permissions and auto-formatting hook
- **.claude/.mcp.json** — MCP servers (GitHub, Neon, Context7)
- **.claude/rules/** — Path-scoped rules for Next.js, database, and AI SDK
- **.claude/skills/** — Slash commands for common workflows

### Slash Commands

| Command | Description |
|---------|-------------|
| `/new-feature [name]` | Scaffold a new feature |
| `/db-migrate` | Create and apply a migration |
| `/deploy` | Check and deploy to Vercel |
| `/pr [base]` | Create a pull request |
| `/review [pr#]` | Review code changes |

### MCP Servers

Set these environment variables for MCP server access:

```bash
# In your shell profile (~/.zshrc or ~/.bashrc)
export GITHUB_TOKEN="ghp_..."
export NEON_API_KEY="..."
```

### Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add input
```

## Directory Structure

```
app/                    # Next.js App Router
  api/                  # API route handlers
  globals.css           # Tailwind CSS entry point
  layout.tsx            # Root layout
  page.tsx              # Home page
components/
  ui/                   # shadcn/ui components
lib/
  actions/              # Server actions
  ai/                   # AI Gateway utilities
  blob/                 # Blob storage utilities
  db/
    index.ts            # Drizzle client
    schema.ts           # Database schema
    migrations/         # Generated migrations
  utils.ts              # cn() helper
hooks/                  # Custom React hooks
public/                 # Static assets
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Neon Postgres connection string |
| `AI_GATEWAY_API_KEY` | Vercel AI Gateway key |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob storage token |
