---
description: Summarise changes, update docs, and prepare for PR
---

You are finishing the current task. Follow these steps in order:

## 1. Summarise Changes
- List what changed in 5–10 bullets
- Note any new files, deleted files, or significant refactors

## 2. Check Documentation
Review which docs need updating based on what changed:
- **Data model changes** (new tables, columns, relations) → update `docs/data-model.md`
- **Architecture changes** (new flows, integrations, key patterns) → update `docs/architecture.md`
- **New major app area** → consider whether a new doc is needed

## 3. Update Docs
Execute any documentation updates identified above. Keep docs concise and factual — describe what exists, not aspirations.

## 4. PR Checklist
Output a checklist for the PR:
- [ ] Code follows project conventions (`CLAUDE.md`)
- [ ] `pnpm check:fix` passes
- [ ] `pnpm typecheck` passes
- [ ] Relevant docs updated
- [ ] No `.env` values or secrets committed
- [ ] Feature branch — not committing to `main`
