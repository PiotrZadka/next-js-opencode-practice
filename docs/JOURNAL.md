# Engineering Journal

## 2025-12-22
- **Setup**: Configured `opencode.json` with `gemini-3-pro`.
- **Scaffold**: Initialized Next.js project (App Router, TS, Tailwind).
- **Environment**: Updated `AGENTS.md` with build/lint commands.
- **Organization**: Separated high-level plan (`PLAN.md`) from specific actionable items (`TASKS.md`).

## 2025-12-23
- **Infrastructure**: Explained Subagents (Architect, Mentor, Reviewer) and their roles.
- **Customization**: Updated custom agent definitions in `.opencode/agent/` with strict context-awareness rules.
- **Context Strategy**: Implemented a "Read-Before-Act" strategy for all agents to ensure alignment with project goals.
- **Reorganization**: Moved project management files (`PLAN.md`, `TASKS.md`, `JOURNAL.md`) to the `docs/` directory for better root cleanliness.
- **Maintenance**: Updated all agent guidelines and documentation to reflect the new file structure.

## 2025-12-27
- **RSC vs Client Boundaries**: Deep dive into the separation of concerns between Server Components (fetching, security) and Client Components (interactivity, hooks). Identified the "leaves" of the component tree as the ideal place for `'use client'`.
- **Routing & Philosophy**: Discussion on Next.js File-system routing and 'Convention over Configuration'. Explored how the folder structure dictates the application's URL hierarchy and layout nesting.
- **Safe Data Fetching**: Implementation of robust fetching patterns using `async` components. Integrated `loading.tsx` for streaming UI, `error.tsx` for boundary-level recovery, and manual `throw new Error` patterns to trigger failure states during development.
- **Agent Alignment**: Synced instructions across `AGENTS.md` and `mentor.md` to ensure consistent behavior, focusing on approval-first workflows and architectural transparency.
- **Roadmap Update**: Refactored `TASKS.md` into a "Senior Path". Pivoted focus toward React 19 (Server Actions, `useActionState`, `useFormStatus`), RSC boundaries, and Streaming/Suspense, moving away from legacy API Route patterns.
- **Components & Pages**: Created `Navbar` (Server), `NavLink` (Client), and `/posts` route to demonstrate these concepts in practice.
