---
paths:
  - "lib/db/**/*.ts"
  - "lib/actions/**/*.ts"
---

# Database Rules (Drizzle + Neon)

- All schema definitions go in `lib/db/schema.ts`
- Use `serial('id').primaryKey()` for auto-incrementing IDs
- Always export inferred types: `type InsertX = typeof table.$inferInsert`
- Use `drizzle-orm/neon-http` driver for serverless/edge compatibility
- Database client is in `lib/db/index.ts` — import `db` from there
- Never construct raw SQL — always use Drizzle query builder
- After schema changes: `pnpm db:generate` then `pnpm db:migrate`
- Use `pnpm db:push` only in development for rapid iteration
- Foreign keys should specify `onDelete` behavior (`cascade` or `set null`)
- Add `.notNull()` to all required columns
- Use `timestamp('created_at').notNull().defaultNow()` for audit columns
- Use `.$onUpdate(() => new Date())` for `updated_at` columns
- Always validate inputs with Zod in server actions before database operations
- Use `revalidatePath()` or `revalidateTag()` after successful mutations
