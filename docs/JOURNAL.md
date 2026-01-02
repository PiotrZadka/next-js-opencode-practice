# Engineering Journal

## 2025-12-22

- **Setup**: Configured `opencode.json` with `gemini-3-pro`.
- **Scaffold**: Initialized Next.js project (App Router, TS, Tailwind).
- **Environment**: Updated `AGENTS.md` with build/lint commands.
- **Organization**: Separated high-level plan (`PLAN.md`) from specific actionable items (`TASKS.md`).

## 2025-12-23

- **Infrastructure**: Explained Subagents (Architect, Tutor, Reviewer, Coder) and their roles.
- **Customization**: Updated custom agent definitions in `.opencode/agent/` with strict context-awareness rules.
- **Context Strategy**: Implemented a "Read-Before-Act" strategy for all agents to ensure alignment with project goals.
- **Reorganization**: Moved project management files (`PLAN.md`, `TASKS.md`, `JOURNAL.md`) to the `docs/` directory for better root cleanliness.
- **Maintenance**: Updated all agent guidelines and documentation to reflect the new file structure.

## 2025-12-27

- **RSC vs Client Boundaries**: Deep dive into the separation of concerns between Server Components (fetching, security) and Client Components (interactivity, hooks). Identified the "leaves" of the component tree as the ideal place for `'use client'`.
- **Routing & Philosophy**: Discussion on Next.js File-system routing and 'Convention over Configuration'. Explored how the folder structure dictates the application's URL hierarchy and layout nesting.
- **Safe Data Fetching**: Implementation of robust fetching patterns using `async` components. Integrated `loading.tsx` for streaming UI, `error.tsx` for boundary-level recovery, and manual `throw new Error` patterns to trigger failure states during development.
- **Agent Alignment**: Synced instructions across `AGENTS.md` and `tutor.md` to ensure consistent behavior, focusing on approval-first workflows and architectural transparency.
- **Roadmap Update**: Refactored `TASKS.md` into a "Senior Path". Pivoted focus toward React 19 (Server Actions, `useActionState`, `useFormStatus`), RSC boundaries, and Streaming/Suspense, moving away from legacy API Route patterns.
- **Components & Pages**: Created `Navbar` (Server), `NavLink` (Client), and `/posts` route to demonstrate these concepts in practice.

## 2025-12-28

- **UI & Accessibility**: Migrated from high-contrast black/white to a professional "Stone" toned palette to reduce eye strain. Updated `globals.css`, `Navbar`, and `NavLink` to use CSS variables for theme consistency.
- **Enhanced Routing**: Implemented a custom `not-found.tsx` at the root to handle 404 errors gracefully within the application layout.
- **Component Refinement**: Refactored the `/posts` page to eliminate hardcoded colors, ensuring cards and text inherit from the theme variables (`bg-card`, `border-border`).
- **Standardized Styling**: Aligned active states in navigation with an orange accent color for better visual feedback.
- **Documentation Alignment**: Updated README.md and AGENTS.md to remove unused configuration references (Cursor/Copilot) and standardize on npm.
- **DX Standardization**: Documented the VSCode ESLint/Prettier auto-format-on-save setup to ensure consistent code style across the project.
- **Boilerplate Cleanup**: Removed Vercel-specific links, buttons, and assets (`vercel.svg`) from the landing page and public directory to focus on the learning environment.
- **Server Actions**: Implemented data mutations (`createPost`).
- **Uncontrolled Forms**: Refactored form to be Uncontrolled using `FormData`.
- **React 19 Forms**: Upgraded to `useActionState` for validation errors and pending states.
- **Pattern Discussion**: Discussed the "Reducer" pattern of Server Actions (`prevState`).
- **Cache Management**: Fixed caching issues with `revalidatePath`.
- **Observation**: Piotr grasped the Uncontrolled Component shift quickly. He correctly identified that `prevState` was unused.

## 2025-12-29

- **Curriculum Audit**: Reviewed progress with `@architect` and `@tutor`. Identified a critical gap in learning Server Actions: JSONPlaceholder does not persist data, making `revalidatePath` ineffective for demonstrating UI updates.
- **Strategy Shift**: Revised `TASKS.md` to include building a local file-based mock DB. This will allow for true persistence and better testing of "Mutate -> Revalidate -> Refetch" flows.
- **React 19 Focus**: Added specific tasks for `useFormStatus` (Component Composition) and Form Reset patterns to deepen understanding of the new hooks.

## 2025-12-31

- **Persistence Integration**: Replaced JSONPlaceholder with local SQLite + Prisma. Fixed a "race condition" in the Server Action by adding `await` to the DB call.
- **Component Composition**: Extracted `SubmitButton` to utilize `useFormStatus` correctly (accessing the parent form's context).
- **Form Reset**: Implemented the "Key Hack" pattern (using `successKey`) to reliably reset uncontrolled forms after submission.
- **Optimistic UI**: Implemented `useOptimistic` via a "Bridge Component" (`PostsFeed`). Connected the Client Form to the Optimistic State by passing a wrapped action prop.

## 2026-01-01

- **Project Audit**: New model conducted comprehensive audit of agent setup, documentation structure, and codebase quality. Overall score: 8.5/10.
- **Type Centralization**: Created `src/lib/types.ts` to consolidate the `Post` interface. Eliminates duplication across `page.tsx` and `posts-feed.tsx`. Added detailed JSDoc explaining the "why" (DRY, type safety across boundaries, Prisma decoupling).
- **Optimistic ID Fix**: Changed `id: -1` to `id: -Date.now()` to prevent React key collisions on rapid form submissions.
- **Agent Enhancement**: Created `@debugger` agent for runtime error investigation. Updated `AGENTS.md` with usage table and primary/subagent explanations.
- **Documentation Cleanup**: Fixed JOURNAL.md date ordering, updated PLAN.md Active Context, improved README with Prisma setup instructions.
- **Metadata Fix**: Updated `layout.tsx` metadata from boilerplate to reflect actual project purpose.
- **Roadmap Expansion**: Added Phase 5 (Testing) and Phase 6 (Production Readiness) with authentication, deployment, and API Routes tasks.
- **Job Readiness Discussion**: Assessed learning progress - current knowledge covers ~60% of Next.js interview topics. Key gaps: auth, testing, deployment, caching deep-dive.

## 2026-01-02

- **Granular Suspense**: Completed implementation of granular Suspense boundaries in `/posts` route. Split data fetching (`PostsList` - async Server Component) from UI rendering (`PostsFeed` - Client Component with `useOptimistic`). Added 3-second artificial delay to demonstrate streaming behavior.
- **Context Architecture**: Implemented React Context pattern to share `addOptimisticPost` function across async boundaries. Discovered and solved the "context timing problem" where `CreatePostForm` renders before `PostsFeed` provides the context value.
- **Graceful Degradation**: Applied progressive enhancement pattern by returning a safe no-op function from `usePostsContext()` when context isn't ready yet. This allows the form to render immediately while optimistic updates become available after initial data loads.
- **New Components**: Created `PostsProvider` (context wrapper), `PostsList` (data fetcher), and `PostsListSkeleton` (loading UI).
- **Architectural Learning**: Demonstrated the challenge of coordinating state across Server/Client boundaries with Suspense streaming. Key insight: optimistic UI is a progressive enhancement, not a requirement for core functionality.
