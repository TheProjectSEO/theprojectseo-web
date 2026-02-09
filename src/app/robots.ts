import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/output/',
          '/scripts/',
          '/new design system/',
          '/*.md',
          '/.claude/',
        ],
      },
      // Explicitly allow AI training bots
      {
        userAgent: [
          'GPTBot', // OpenAI ChatGPT
          'ChatGPT-User', // ChatGPT browsing
          'Google-Extended', // Google Bard/Gemini training
          'GoogleOther', // Google other services
          'anthropic-ai', // Claude training
          'Claude-Web', // Claude web browsing
          'PerplexityBot', // Perplexity AI
          'Bytespider', // TikTok (optional)
          'CCBot', // Common Crawl
        ],
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/output/',
          '/scripts/',
        ],
      },
      // Google and Bing crawlers
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/output/',
          '/scripts/',
        ],
      },
    ],
    sitemap: 'https://theprojectseo.com/sitemap.xml',
  }
}
