---
paths:
  - "app/**/*.{ts,tsx}"
  - "components/**/*.{ts,tsx}"
---

# Next.js App Router Rules

- Components in `app/` are Server Components by default
- Only add `'use client'` when the component uses hooks, event handlers, or browser APIs
- Page components (`page.tsx`) should be async Server Components that fetch data
- Layout components (`layout.tsx`) receive `{ children }` and wrap pages
- Use `<Suspense>` with `fallback` for streaming data
- API routes in `app/api/` export named HTTP methods: `GET`, `POST`, `PUT`, `DELETE`
- Use `NextRequest` and `NextResponse` for API route types
- For forms, prefer Server Actions over API routes
- Use `useActionState` for form state management with server actions
- Metadata: export `metadata` object or `generateMetadata` async function
- Images: use `<Image>` from `next/image` with explicit `width`/`height` or `fill`
- Links: use `<Link>` from `next/link` for client-side navigation
- Use Tailwind CSS utility classes for styling
- Use shadcn/ui components from `@/components/ui/` when available
- Use `cn()` from `@/lib/utils` for conditional classNames
