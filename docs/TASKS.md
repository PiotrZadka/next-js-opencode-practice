# Learning Tasks & Roadmap (Senior Path)

Use this file to track specific implementation tasks. Mark them as complete (`[x]`) when you feel confident in the concept.

## Phase 1: The New Paradigm (RSC)

- [x] **Server vs Client Boundaries**: Implement a complex component tree, identifying exactly where `'use client'` is required and why (interactivity, hooks, browser APIs).
- [x] **Data Fetching**: Fetch data directly in `async` Server Components using native `fetch` with caching/revalidation strategies.
- [x] **Layouts & Composition**: Optimize layout shifts by using nested layouts and passing Client Components as children to Server Components to maintain server-side rendering for as much of the tree as possible.

## Phase 2: React 19 & Server Actions

- [x] **Server Actions**: Implement data mutations using Server Actions instead of traditional API Route Handlers.
- [x] **Enhanced Forms**: Use React 19 `useActionState` (formerly `useFormState`) for handling form response data and errors.
- [ ] **Pending States**: Implement `useFormStatus` to handle loading states in nested form elements.
- [ ] **Optimistic Updates**: Use `useOptimistic` to provide instant UI feedback during Server Action execution.

## Phase 3: Performance & Streaming

- [ ] **Streaming & Suspense**: Break down a heavy page into chunks using `<Suspense>` boundaries to improve Time to First Byte (TTFB).
- [x] **Loading UI**: Implement `loading.tsx` for route-level streaming and skeleton patterns.
- [ ] **Partial Prerendering (PPR)**: (Experimental) Explore combining static and dynamic content in the same route.

## Phase 4: Advanced Patterns & Infrastructure

- [ ] **Middleware**: Implement auth guards or header manipulation using Next.js Middleware.
- [ ] **Caching**: Master the four layers of Next.js caching (Request Memoization, Data Cache, Full Route Cache, Router Cache).
- [x] **Error Handling**: Use `error.tsx` for graceful degradation and `global-error.tsx` for root-level failures.
