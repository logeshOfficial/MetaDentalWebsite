'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { navigation } from '@/config/brand';
import { interfaceCopy } from '@/config/copy';
const copy = interfaceCopy.components_site_shell;
export function MobileMenu() {
  const details = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    details.current?.removeAttribute('open');
  }, [pathname]);
  return (
    <details
      className="mobile-menu"
      ref={details}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          details.current?.removeAttribute('open');
          details.current?.querySelector('summary')?.focus();
        }
      }}
    >
      <summary>{copy.menu}</summary>
      <nav aria-label={copy.mobile_navigation}>
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => details.current?.removeAttribute('open')}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/book-appointment/" onClick={() => details.current?.removeAttribute('open')}>
          {copy.book_a_visit}
        </Link>
      </nav>
    </details>
  );
}
