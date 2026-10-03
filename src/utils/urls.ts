// Public assets and page links must include the repository path on GitHub Pages.
export function siteUrl(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
}
