/**
 * Centralized Type Definitions
 *
 * WHY CENTRALIZE TYPES?
 *
 * 1. Single Source of Truth (DRY):
 *    When the same type is defined in multiple files, any schema change
 *    (e.g., adding `createdAt` to Post) requires updating every duplicate.
 *    Centralizing means one change propagates everywhere.
 *
 * 2. Type Safety Across Boundaries:
 *    In Next.js, data flows from Server Components → Client Components.
 *    Both sides need to agree on the shape. A shared type ensures the
 *    Server Component's return matches the Client Component's props.
 *
 * 3. Prisma Integration:
 *    We COULD import types directly from Prisma (`import type { Post } from '@prisma/client'`),
 *    but that couples our UI layer to the database schema. This intermediate
 *    types file acts as a "contract" - we can transform Prisma's output
 *    before exposing it to components (e.g., omit sensitive fields, rename props).
 *
 * 4. IDE Experience:
 *    Centralized types improve autocomplete and "Go to Definition" navigation.
 *    Instead of jumping to a random component, you land in the canonical types file.
 *
 * USAGE:
 *    import type { Post } from '@/lib/types';
 *
 *    The `type` keyword in the import is intentional - it signals to the bundler
 *    that this import can be erased at build time (no runtime cost).
 */

/**
 * Post - represents a blog post entity
 *
 * This is a "view model" - the shape we expose to the UI.
 * It may differ from Prisma's internal schema (e.g., we exclude `createdAt` here
 * for simplicity, but could add it when needed).
 */
export interface Post {
  id: number;
  title: string;
  body: string;
}
