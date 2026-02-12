---
name: pr
description: Create a pull request for the current branch
argument-hint: base-branch (default: main)
disable-model-invocation: true
---

Create a pull request:

1. Verify current branch is not main/master
2. Run `pnpm typecheck` and `pnpm check` to verify code quality
3. Run `pnpm build` to verify the build succeeds
4. Review all commits on this branch vs `$ARGUMENTS` (default: main) using `git log`
5. Review the full diff using `git diff $ARGUMENTS...HEAD`
6. Generate a concise PR title (under 70 characters) summarizing the changes
7. Generate a PR body with:
   - ## Summary (3-5 bullet points of what changed and why)
   - ## Test plan (how to verify the changes work)
8. Push the branch with `git push -u origin HEAD`
9. Create the PR using `gh pr create --title "..." --body "..."`
10. Report the PR URL
