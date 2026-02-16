# Dependency Update Review

You are maintaining the Rosedale Template, a Claude Code-optimized Next.js starter repository.
Dependencies have just been updated via `pnpm update --latest`. Your job is to review
the changes and fix any breaking issues so the template builds and typechecks cleanly.

## Context

- This is a **template repository**, not a production application
- All deps in `package.json` use `latest` — the lockfile tracks actual versions
- The template must pass `pnpm check:fix`, `pnpm typecheck`, and `pnpm build` after updates
- The version diff is provided below your instructions

## Tasks

### 1. Identify Breaking Changes

Review the version diff. For any package with a **major version bump**:
- Search the web for that package's migration guide or changelog
- Apply all required code changes to maintain compatibility
- Pay special attention to: `next`, `react`, `ai`, `@ai-sdk/gateway`, `drizzle-orm`, `tailwindcss`, `@biomejs/biome`, `zod`

### 2. Handle Biome Updates

If `@biomejs/biome` was updated to a new version:
- Run `pnpm biome migrate --write` to update the config schema
- Run `pnpm check` and fix any new lint or format violations
- Verify `biome.json` `$schema` version matches the installed CLI version

### 3. Handle pnpm Updates

If the pnpm version has changed, update the `packageManager` field in `package.json`
to match the version currently installed (check with `pnpm --version`).

### 4. Fix TypeScript Errors

Run `pnpm typecheck`. If there are errors:
- Fix type incompatibilities introduced by updated `@types/*` packages
- Fix any API signature changes in library updates
- Never use `any` — use `unknown` and narrow, or find the correct type

### 5. Fix Build Errors

Run `pnpm build`. If it fails:
- Fix any Next.js configuration issues
- Fix any import/export changes
- Fix any runtime API changes

### 6. Run Final Checks

After all fixes:
- Run `pnpm check:fix` to auto-format everything
- Run `pnpm typecheck` to verify types
- Run `pnpm build` to verify the production build

## Rules

- Do NOT change the dependency version strategy (keep `latest` in `package.json`)
- Do NOT add new dependencies unless absolutely required by a migration
- Do NOT remove any dependencies
- Do NOT modify `.env` or `.env.example` files
- Do NOT modify `.claude/settings.json` or `.claude/.mcp.json`
- Use `pnpm` exclusively — never `npm` or `yarn`
- Make **minimal, targeted changes** — this is maintenance, not refactoring
- If a breaking change requires a large refactor, leave a `// TODO:` comment explaining what needs to change and why, rather than doing the refactor
