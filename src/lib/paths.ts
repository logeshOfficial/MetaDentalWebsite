const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

export function assetPath(pathname: string) {
  if (!basePath || !pathname.startsWith('/')) return pathname;
  return `${basePath}${pathname}`;
}
