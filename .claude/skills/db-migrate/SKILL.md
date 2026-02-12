---
name: db-migrate
description: Create and apply a database migration after schema changes
disable-model-invocation: true
---

Create and apply a database migration:

1. Review current schema in `lib/db/schema.ts`
2. Apply the requested schema changes to `lib/db/schema.ts`
3. Export inferred types: `type InsertX = typeof table.$inferInsert` and `type SelectX = typeof table.$inferSelect`
4. Run `pnpm db:generate` to create migration SQL
5. Review the generated migration file in `lib/db/migrations/`
6. Run `pnpm db:migrate` to apply the migration
7. Update any affected server actions or queries in `lib/actions/`
8. Run `pnpm typecheck` to ensure type safety across all affected files
