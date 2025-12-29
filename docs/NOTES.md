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
