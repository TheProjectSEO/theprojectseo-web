import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theprojectseo.com'

  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/company`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Service pages
  const services = [
    'services', // Index page
    // Development Services
    'services/web-app-development',
    'services/ai-development',
    'services/mvp-development',
    'services/ecommerce-development',
    'services/n8n-automation',
    // N8n Automation Subpages
    'services/n8n-automation/marketing-automation',
    'services/n8n-automation/sales-automation',
    'services/n8n-automation/crm-automation',
    'services/n8n-automation/reporting-automation',
    'services/n8n-automation/data-pipeline-automation',
    'services/n8n-automation/customer-service-automation',
    // Core SEO Services
    'services/seo',
    'services/seo-consulting',
    'services/local-seo',
    'services/link-building',
    'services/seo-audit',
    'services/technical-seo',
    'services/on-page-seo',
    'services/off-page-seo',
    'services/ecommerce-seo',
    'services/enterprise-seo',
    'services/international-seo',
    // Automation & AI
    'services/seo-automation',
    'services/ai-seo-agent',
    // Specialized Services
    'services/data-visualization',
    'services/data-engineering',
    'services/aeo',
    'services/content',
    'services/web',
  ]

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: service === 'services' ? 0.9 : 0.8,
  }))

  // Industry pages
  const industries = [
    'ai',
    'automotive',
    'cannabis',
    'cybersecurity',
    'ecommerce',
    'education',
    'fashion',
    'finance',
    'food',
    'healthcare',
    'legal',
    'nonprofit',
    'realestate',
    'saas',
    'technology',
    'travel',
  ]

  const industryPages = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Location pages
  const locations = ['usa', 'philippines', 'hongkong', 'singapore', 'australia', 'germany']

  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Country SEO pages
  const countrySEOPages = [
    {
      url: `${baseUrl}/usa-seo-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/philippines-seo-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/india-seo-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Blog pages
  const blogPosts = [
    'dominate-search-rankings-2025',
    'content-optimization-checklist',
    'core-web-vitals-optimization',
    'e-commerce-seo-strategy',
    'google-algorithm-updates-2024',
    'keyword-research-tools-2025',
    'local-seo-complete-guide',
    'technical-seo-audit',
  ]

  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return [
    ...corePages,
    ...servicePages,
    ...industryPages,
    ...locationPages,
    ...countrySEOPages,
    ...blogPages,
    ...legalPages,
  ]
}
