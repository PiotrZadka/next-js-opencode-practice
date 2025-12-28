'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

/**
 * NavLink component - Client Component
 * 
 * We use 'use client' here because this component interacts with the browser-only 
 * Next.js navigation hooks (usePathname) to determine the current route.
 * This creates a Client Boundary, meaning this component and any children it 
 * renders (that aren't passed as props) will be bundled for the client.
 */
export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md transition-colors ${
        isActive 
          ? 'text-orange-600 dark:text-orange-500 font-semibold' 
          : 'text-foreground/60 hover:text-orange-600 dark:hover:text-orange-500'
      }`}
    >
      {children}
    </Link>
  );
}
