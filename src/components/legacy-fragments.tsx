'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const legacy: Record<string, string> = {
  '#contact': '/contact/',
  '#booking': '/book-appointment/',
  '#appointment': '/book-appointment/',
  '#results': '/results/',
};
export function LegacyFragments() {
  const router = useRouter();
  useEffect(() => {
    const follow = () => {
      if (location.pathname === '/') {
        const target = legacy[location.hash];
        if (target) router.replace(target);
      }
    };
    follow();
    window.addEventListener('hashchange', follow);
    return () => window.removeEventListener('hashchange', follow);
  }, [router]);
  return null;
}
