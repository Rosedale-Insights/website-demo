---
name: new-feature
description: Scaffold a new feature with route, component, server action, and optional DB schema
argument-hint: feature-name
disable-model-invocation: true
---

Scaffold a new feature called `$ARGUMENTS`:

1. Create route at `app/$ARGUMENTS/page.tsx` as a Server Component
2. Create layout at `app/$ARGUMENTS/layout.tsx` if the feature needs a custom layout
3. Create loading state at `app/$ARGUMENTS/loading.tsx` with a skeleton/spinner
4. Create server action at `lib/actions/$ARGUMENTS.ts` with `'use server'` directive and Zod validation
5. Create any needed components in `components/` using shadcn/ui and Tailwind CSS
6. If database schema is needed, add table to `lib/db/schema.ts` with typed exports ($inferInsert, $inferSelect)
7. After schema changes, run `pnpm db:generate` to create migration
8. Run `pnpm check:fix` to format all new files
9. Run `pnpm typecheck` to verify no type errors
