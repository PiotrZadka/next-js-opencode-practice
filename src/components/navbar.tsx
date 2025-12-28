import NavLink from './nav-link';

/**
 * Navbar component - Server Component
 * 
 * By default, components in the App Router are Server Components. 
 * This component remains a Server Component because it doesn't use hooks or 
 * browser APIs. It imports and renders NavLink, which is a Client Component, 
 * effectively establishing the client boundary at the NavLink level.
 */
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="flex gap-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/posts">Posts</NavLink>
      </div>
    </nav>
  );
}
