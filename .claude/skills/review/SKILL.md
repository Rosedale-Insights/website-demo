---
name: review
description: Review code changes on the current branch or a specific PR
argument-hint: pr-number (optional)
---

Review the code changes:

1. If a PR number is provided (`$ARGUMENTS`), fetch the diff with `gh pr diff $ARGUMENTS`
2. Otherwise, review changes on the current branch with `git diff main...HEAD`
3. For each changed file, check:
   - Does it follow project code style (see CLAUDE.md)?
   - Are Server Components and Client Components used correctly?
   - Are server actions validated with Zod before DB operations?
   - Are Drizzle ORM queries correct (no raw SQL)?
   - Are there security concerns (exposed secrets, injection, XSS)?
   - Are types properly defined (no `any` types)?
   - Are Tailwind classes used correctly? Is `cn()` used for conditionals?
   - Are shadcn/ui components used where appropriate?
4. Provide a structured review:
   - **Issues** — Problems that must be fixed before merging
   - **Suggestions** — Improvements that would be beneficial
   - **Good** — Things done well worth highlighting
