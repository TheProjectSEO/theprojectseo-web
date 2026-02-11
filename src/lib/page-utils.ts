/**
 * Page type classifier for TheProjectSEO routes.
 * Used by session tracker to categorize page views.
 */
export function getPageType(path: string): string {
  if (path === '/') return 'home'
  if (path === '/blog') return 'blog'
  if (path.startsWith('/blog/')) return 'blog-post'
  if (path.startsWith('/services/')) return 'service'
  if (path === '/services') return 'service'
  if (path.startsWith('/industries/')) return 'industry'
  if (path.startsWith('/locations/')) return 'location'
  if (path.endsWith('-seo-services')) return 'country-seo'
  if (path === '/pricing') return 'pricing'
  if (path === '/contact') return 'contact'
  if (path === '/company') return 'company'
  if (path === '/privacy' || path === '/terms') return 'legal'
  return 'other'
}

/**
 * Detect device type from screen width.
 */
export function getDeviceType(width: number): string {
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}
