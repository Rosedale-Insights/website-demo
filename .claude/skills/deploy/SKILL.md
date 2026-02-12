---
name: deploy
description: Run checks and deploy the application to Vercel
disable-model-invocation: true
---

Deploy the application to Vercel:

1. Run `pnpm typecheck` to verify no type errors
2. Run `pnpm check` to verify formatting and linting pass
3. Run `pnpm build` to verify the production build succeeds
4. Run `git status` to check for uncommitted changes
5. If there are uncommitted changes, ask the user before proceeding
6. Push the current branch to the remote
7. Vercel will auto-deploy from the push — report the deployment status
