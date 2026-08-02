import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/output/',
          '/scripts/',
          '/new design system/',
          '/*.md',
          '/.claude/',
        ],
      },
      // AI search discovery and user-requested fetches
      {
        userAgent: [
          'OAI-SearchBot',
          'ChatGPT-User',
          'Claude-SearchBot',
          'Claude-User',
          'PerplexityBot',
          'Perplexity-User',
        ],
        allow: '/',
        disallow: ['/admin/', '/api/', '/output/', '/scripts/'],
      },
      // Optional model-development crawlers. Search access is controlled above.
      {
        userAgent: [
          'GPTBot',
          'Google-Extended',
          'ClaudeBot',
          'CCBot',
          'Bytespider',
        ],
        allow: '/',
        disallow: ['/admin/', '/api/', '/output/', '/scripts/'],
      },
      // Google and Bing crawlers
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
        disallow: ['/admin/', '/api/', '/output/', '/scripts/'],
      },
    ],
    sitemap: 'https://theprojectseo.com/sitemap.xml',
  }
}
