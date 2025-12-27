# Learning Notes

## When to use 'use client'

According to the Next.js documentation, you should use Client Components when you need interactivity, state, or browser-only APIs.

| Feature | Server Component | Client Component |
| :--- | :---: | :---: |
| **State** (`useState`, `useReducer`) | No | Yes |
| **Lifecycle** (`useEffect`, `useLayoutEffect`) | No | Yes |
| **Browser APIs** (window, localStorage, etc.) | No | Yes |
| **Events** (`onClick`, `onChange`, etc.) | No | Yes |
| **Specific Hooks** (any custom hook using client-only features) | No | Yes |
| Fetch data (directly) | Yes | No |
| Access backend resources (directly) | Yes | No |
| Keep sensitive info (API keys, etc.) | Yes | No |
| Large dependencies (on server) | Yes | No |

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
