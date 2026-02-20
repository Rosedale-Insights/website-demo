---
description: Read context, check branch hygiene, and plan before coding
---

You are starting a new task: `$ARGUMENTS`

Follow these steps in order:

## 1. Branch Hygiene
- Show the current branch with `git branch --show-current`
- If on `main`, create a feature branch: `git checkout -b feat/<short-description>`
- If already on a feature branch, confirm it's the right one

## 2. Read Context
Always read these files first:
- `CLAUDE.md` — project standards and conventions
- Any `.claude/rules/` files relevant to the task area

Then read additional context based on the task:
- **Database work** (schema, migrations, queries): also read `docs/data-model.md`
- **AI/API work** (AI SDK, API routes, integrations): also read `docs/architecture.md`
- **New app area** (new routes, major features): read both `docs/architecture.md` and `docs/data-model.md`

## 3. Plan
Output a plan with:
- **Goal**: One sentence describing what this task achieves
- **Steps**: 5–10 bullet points of what you'll do
- **Files**: List of files likely to be created or modified
- **Docs**: Which docs (if any) will need updating when done

Wait for confirmation before starting implementation.
