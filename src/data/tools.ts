import type { Tool } from './types';

// 20 free tools — feed leads into retainer services.
// Each has its own static page under /tools/[slug]/.

export const tools: Tool[] = [
  // Checkers
  { slug: 'seo-audit-tool', name: 'Free SEO Audit Tool', type: 'checker', shortDescription: 'Instant technical + on-page audit.', status: 'planned', launchPhase: 'M2' },
  { slug: 'ai-visibility-checker', name: 'AI Visibility Checker', type: 'checker', shortDescription: 'See if your brand is cited in ChatGPT, Perplexity, Gemini.', status: 'planned', launchPhase: 'M2' },
  { slug: 'keyword-research-tool', name: 'Keyword Research Tool', type: 'checker', shortDescription: 'Find keywords, volumes, difficulty instantly.', status: 'planned', launchPhase: 'M2' },
  { slug: 'backlink-checker', name: 'Backlink Checker', type: 'checker', shortDescription: 'Audit your backlink profile.', status: 'planned', launchPhase: 'M2' },
  { slug: 'serp-checker', name: 'SERP Checker', type: 'checker', shortDescription: 'See the live SERP for any keyword.', status: 'planned', launchPhase: 'M2' },
  { slug: 'readability-checker', name: 'Readability Checker', type: 'checker', shortDescription: 'Flesch-Kincaid, Gunning Fog, SMOG.', status: 'planned', launchPhase: 'M2' },
  { slug: 'core-web-vitals-checker', name: 'Core Web Vitals Checker', type: 'checker', shortDescription: 'LCP, INP, CLS for any URL.', status: 'planned', launchPhase: 'M2' },
  { slug: 'keyword-difficulty-checker', name: 'Keyword Difficulty Checker', type: 'checker', shortDescription: 'Ranking difficulty score for any keyword.', status: 'planned', launchPhase: 'M2' },
  { slug: 'domain-authority-checker', name: 'Domain Authority Checker', type: 'checker', shortDescription: 'DR/DA + key SEO metrics.', status: 'planned', launchPhase: 'M3' },

  // Generators
  { slug: 'schema-generator', name: 'Schema Markup Generator', type: 'generator', shortDescription: 'JSON-LD for Organization, Service, FAQ, HowTo.', status: 'planned', launchPhase: 'M2' },
  { slug: 'robots-txt-generator', name: 'Robots.txt Generator', type: 'generator', shortDescription: 'Custom robots.txt with AI-bot controls.', status: 'planned', launchPhase: 'M2' },
  { slug: 'hreflang-generator', name: 'Hreflang Tag Generator', type: 'generator', shortDescription: 'Multi-language hreflang tags done right.', status: 'planned', launchPhase: 'M2' },
  { slug: 'meta-tag-generator', name: 'Meta Tag Generator', type: 'generator', shortDescription: 'Title, description, OG, Twitter Card.', status: 'planned', launchPhase: 'M2' },
  { slug: 'content-brief-generator', name: 'Content Brief Generator', type: 'generator', shortDescription: 'AI-assisted SEO content briefs.', status: 'planned', launchPhase: 'M3' },
  { slug: 'sitemap-generator', name: 'Sitemap Generator', type: 'generator', shortDescription: 'Generate sitemap.xml for any site.', status: 'planned', launchPhase: 'M3' },

  // Calculators
  { slug: 'seo-roi-calculator', name: 'SEO ROI Calculator', type: 'calculator', shortDescription: 'Forecast organic traffic revenue.', status: 'planned', launchPhase: 'M2' },
  { slug: 'cac-calculator', name: 'CAC Calculator', type: 'calculator', shortDescription: 'Customer acquisition cost for SaaS.', status: 'planned', launchPhase: 'M2' },
  { slug: 'roas-calculator', name: 'ROAS Calculator', type: 'calculator', shortDescription: 'Return on ad spend calculator.', status: 'planned', launchPhase: 'M2' },
  { slug: 'ltv-calculator', name: 'LTV Calculator', type: 'calculator', shortDescription: 'Customer lifetime value.', status: 'planned', launchPhase: 'M2' },
  { slug: 'churn-rate-calculator', name: 'Churn Rate Calculator', type: 'calculator', shortDescription: 'SaaS churn and retention math.', status: 'planned', launchPhase: 'M3' },
  { slug: 'arpu-calculator', name: 'ARPU Calculator', type: 'calculator', shortDescription: 'Average revenue per user.', status: 'planned', launchPhase: 'M3' },
];

export const toolSlugs = tools.map((t) => t.slug);

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
