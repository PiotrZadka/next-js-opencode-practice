# Learning Tasks & Roadmap (Senior Path)

Use this file to track specific implementation tasks. Mark them as complete (`[x]`) when you feel confident in the concept.

## Phase 1: The New Paradigm (RSC)

- [x] **Server vs Client Boundaries**: Implement a complex component tree, identifying exactly where `'use client'` is required and why (interactivity, hooks, browser APIs).
- [x] **Data Fetching**: Fetch data directly in `async` Server Components using native `fetch` with caching/revalidation strategies.
- [x] **Layouts & Composition**: Optimize layout shifts by using nested layouts and passing Client Components as children to Server Components to maintain server-side rendering for as much of the tree as possible.

## Phase 2: React 19 & Server Actions (The "Mutations" Chapter)

- [x] **Server Actions**: Implement data mutations using Server Actions instead of traditional API Route Handlers.
- [x] **Enhanced Forms**: Use React 19 `useActionState` (formerly `useFormState`) for handling form response data and errors.
- [ ] **Real Persistence (SQLite + Prisma)**:
  - [x] **Setup**: Initialize Prisma (`npm i -D prisma` & `npx prisma init`) with SQLite provider.
  - [x] **Schema**: Define a `Post` model (id, title, body, createdAt) in `prisma/schema.prisma`.
  - [x] **Client**: Generate the Prisma Client (`npx prisma generate`) and create a singleton instance to prevent connection warnings in dev.
  - [x] **Migration**: Run `npx prisma migrate dev` to create the local `dev.db`.
  - [x] **Integration**: Refactor `src/app/posts/actions.ts` to use `prisma.post.create` instead of `fetch`.
- [x] **Component Composition & `useFormStatus`**: Refactor the submit button into a separate component. _Why?_ To understand how to access pending state in child components without prop drilling.
- [x] **Form Reset Patterns**: Implement a strategy to clear the form after a successful submission. _Why?_ "Uncontrolled" forms don't reset automatically.
  > **Note**: Current implementation resets seemingly "magically" or via browser default behavior on successful navigation/revalidation. Requires further investigation to confirm exact mechanism. We have set a key to form so taht when it changes it will clear input fields.
- [x] **Optimistic Updates**: Use `useOptimistic` to provide instant UI feedback during Server Action execution.

## Phase 3: Performance & Streaming (The "UX" Chapter)

- [x] **Loading UI**: Implement `loading.tsx` for route-level streaming and skeleton patterns.
- [ ] **Granular Suspense**: Add artificial delays to your data fetching. Refactor `page.tsx` to not block the whole page, but use `<Suspense>` boundaries around just the list. _Why?_ To understand "Streaming HTML".
- [ ] **Partial Prerendering (PPR)**: (Experimental) Explore combining static and dynamic content in the same route.

## Phase 4: Advanced Patterns & Infrastructure

- [ ] **Middleware**: Implement auth guards or header manipulation using Next.js Middleware.
- [ ] **Caching**: Master the four layers of Next.js caching (Request Memoization, Data Cache, Full Route Cache, Router Cache).
- [x] **Error Handling**: Use `error.tsx` for graceful degradation and `global-error.tsx` for root-level failures.
