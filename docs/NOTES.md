# Learning Notes

## When to use 'use client'

According to the Next.js documentation, you should use Client Components when you need interactivity, state, or browser-only APIs.

| Feature                                                         | Server Component | Client Component |
| :-------------------------------------------------------------- | :--------------: | :--------------: |
| **State** (`useState`, `useReducer`)                            |        No        |       Yes        |
| **Lifecycle** (`useEffect`, `useLayoutEffect`)                  |        No        |       Yes        |
| **Browser APIs** (window, localStorage, etc.)                   |        No        |       Yes        |
| **Events** (`onClick`, `onChange`, etc.)                        |        No        |       Yes        |
| **Specific Hooks** (any custom hook using client-only features) |        No        |       Yes        |
| Fetch data (directly)                                           |       Yes        |        No        |
| Access backend resources (directly)                             |       Yes        |        No        |
| Keep sensitive info (API keys, etc.)                            |       Yes        |        No        |
| Large dependencies (on server)                                  |       Yes        |        No        |

## Async Server Components

Server Components can be defined as `async` functions. This allows you to use `await` directly inside the component body to fetch data or perform other asynchronous operations before the component is rendered.

```tsx
async function MyComponent() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}
```

## Data Fetching in RSC

React Server Components (RSC) simplify data fetching:

- **No `useEffect` or `useState` required**: Data can be fetched directly in the component body using `async/await`.
- **Server-side execution**: Fetching happens on the server, reducing the amount of work the browser needs to do.
- **Zero Bundle Size**: The logic used for fetching (like `sql` queries or internal API calls) stays on the server. 0kb of JavaScript is sent to the client for the fetch logic itself.

## Special File Conventions

Next.js uses a file-system based router where specific filenames have special meanings:

- `page.tsx`: The main UI for a route.
- `loading.tsx`: Automatically shown by Next.js using React Suspense while `page.tsx` is fetching data.
- `error.tsx`: A Client Component Error Boundary that catches errors in that route segment and its children.

## Philosophy: Convention over Configuration

Next.js leans heavily on folder-based routing and specific file naming conventions (e.g., `layout.tsx`, `template.tsx`, `not-found.tsx`). This reduces boilerplate but requires strict adherence to naming and structure.

## Architectural Pattern: Client Leaves

To maximize the benefits of Server Components, aim to keep Client Components at the "leaves" of your component tree. Fetch data in the parent (Server Component) and pass it as props to interactive children (Client Components). This ensures that only the interactive parts of the UI send JavaScript to the browser.

## Developer Experience (DX) & Tooling

### Package Manager Standardization

Standardizing on a single package manager (`npm`) is critical to prevent lockfile conflicts. Mixing managers (like `npm` and `yarn`) leads to disparate dependency graphs, inconsistent environments, and elusive "it works on my machine" bugs.

### Automated Consistency

Code consistency is enforced automatically via ESLint and Prettier, configured to "Format on Save" in VSCode (defined in `.vscode/settings.json`). This removes the cognitive load of manual formatting and ensures that all contributions adhere to the project's stylistic standards without manual intervention.

### Focused Learning Environment

Removing unused boilerplate, such as Vercel-specific references and default assets, is essential for maintaining a focused learning environment. By stripping away non-essential clutter, the codebase remains intentional, making it easier to track changes and understand the core architecture without distraction.

## Testing Server Actions (The "Mock" Reality)

When learning Server Actions, avoid using read-only APIs like JSONPlaceholder for mutations. Because they don't persist data, `revalidatePath` won't update the UI, leading to confusion. Use a local file (e.g., `db.json`) or a real database to properly test the full mutation lifecycle of "Mutate -> Revalidate -> Refetch".

## Session End Workflow: Git vs MCP

Automating "session end" code pushes is best handled via standard Git commands (`git add`, `commit`, `push`) rather than specialized tools like GitHub MCP.

- **Standard Git**: Preserves commit history, handles merges/rebases naturally, and works with the local repository state.
- **GitHub MCP**: Designed for API interactions (Issues, PRs) or cloud-based agents. Pushing files via MCP creates new commits on the remote without local context, leading to history divergence.

## Prisma in Next.js

### The Singleton Pattern

In development, Next.js clears the Node.js cache on every rebuild. This causes `const prisma = new PrismaClient()` to run repeatedly, exhausting the database connection pool.
**Solution**: Attach the instance to `globalThis` so it survives hot reloads.

### Prisma 7 & SQLite

Prisma 7 introduces strict "Driver Adapters". For SQLite, the standard binary engine is being phased out in favor of `@prisma/adapter-better-sqlite3` or `@prisma/adapter-libsql`.
We used **Better SQLite 3** for this project. This requires:

1. `npm i better-sqlite3 @prisma/adapter-better-sqlite3`
2. Configuring a custom `adapter` in the `PrismaClient` constructor.

## React 19 / Next.js Patterns

### Component Composition for Form Status

`useFormStatus` is a hook that must be used inside a component rendered **within** the `<form>` element. To access the pending state of a form from its submit button, the button must be extracted into its own component (e.g., `<SubmitButton />`) and rendered inside the form.

### Uncontrolled Form Reset

In React 19/Next.js, forms using Server Actions (`action={formAction}`) are often uncontrolled. They do not automatically reset after submission.
**The Key Hack**: A robust way to reset the form is to use a `key` prop on the `<form>` element. By changing this key (e.g., using a timestamp from the server response) upon successful submission, React forces the form component to remount, clearing all input fields.

### Optimistic Updates with "Bridge Components"

To implement `useOptimistic` (a Client Hook) in a Server Component architecture:

1.  **The Bridge**: Create a Client Component (e.g., `PostsFeed`) that accepts initial server data.
2.  **The Interceptor**: Inside the Bridge, create a wrapper function (`handleAction`) that calls `addOptimistic` _before_ calling the real Server Action.
3.  **The Injection**: Pass this wrapper function to the Form component via props. This connects the Form (Trigger) to the Bridge (State) to the Server (Persistence).

## Type Centralization Strategy

### Why Centralize Types?

1. **Single Source of Truth (DRY)**: Schema changes propagate automatically.
2. **Type Safety Across Boundaries**: Server and Client components agree on data shapes.
3. **Decoupling from Prisma**: A "view model" layer lets you transform DB output before exposing to UI.
4. **IDE Experience**: "Go to Definition" lands in canonical location.

### Implementation

```typescript
// src/lib/types.ts
export interface Post {
  id: number;
  title: string;
  body: string;
}

// Usage: import type { Post } from '@/lib/types';
// The `type` keyword signals to bundler this can be erased at build time.
```

## OpenCode Agent Modes

### Primary vs Subagent

| Aspect      | Primary Agent     | Subagent                |
| ----------- | ----------------- | ----------------------- |
| Invocation  | `Tab` key cycling | `@mention` in message   |
| Purpose     | Main conversation | Specialized tasks       |
| Auto-invoke | No                | Yes (by primary agents) |

### Agent Workflow Pattern

```
Planning → @architect ("How should I structure X?")
Learning → @tutor ("Why does this pattern exist?")
Building → @coder ("Implement this feature")
Debugging → @debugger ("Why is this failing?")
Review → @reviewer ("Audit my Server Action")
```
