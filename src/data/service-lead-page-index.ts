import { createSearchServicePage } from '@/data/service-lead-pages-scale'

export const servicesLeadPage = createSearchServicePage({
  slug: 'services',
  path: '/services',
  name: 'SEO Services',
  schemaName: 'SEO and AI search services',
  serviceType:
    'SEO services covering strategy, technical SEO, content, on-page optimization, authority, local and international search, ecommerce, enterprise, analytics, automation, and AI search',
  metaTitle: 'SEO Services for Google & AI Search',
  metaDescription:
    'SEO services spanning strategy, technical SEO, content, authority, analytics, automation and AI search—connected to qualified leads, pipeline or revenue.',
  eyebrow: 'SEO services · Google + Bing + AI-assisted discovery',
  title: 'Fix the whole search system.',
  titleAccent: 'Prioritize what creates demand.',
  definition:
    'SEO services improve how a business is discovered, understood, evaluated, and chosen across Google, Bing, and AI-assisted search by coordinating technical eligibility, page architecture, useful content, entities, independent authority, analytics, and implementation.',
  bestFit:
    'Organizations with a real product or service, accountable experts, implementation access, and a need to turn organic and AI-assisted discovery into qualified customer outcomes.',
  heroChecks: [
    'Strategy, audits, technical SEO, content, on-page, local, ecommerce, and enterprise programs',
    'Authority, link building, entities, digital PR, and off-page source influence',
    'AI Overviews, ChatGPT, Gemini, Claude, Perplexity, prompt and citation measurement',
    'Search Console, Bing, analytics, CRM or commerce outcomes with transparent limitations',
  ],
  examples: ['which SEO services does a growing company need', 'SEO agency for Google and AI search', 'technical SEO versus content and authority', 'how to evaluate an AI-native SEO agency'],
  pageAssets: ['home, service, product, category, solution, industry, and location pages', 'comparison, alternative, pricing, methodology, evidence, and case-study pages', 'guides, definitions, tools, documentation, examples, and support resources', 'original research, data, expert commentary, visual evidence, and reference assets', 'organization, people, author, reviewer, contact, location, policy, and profile pages'],
  technicalFocus:
    'A crawl-to-conversion audit of rendering, indexability, architecture, templates, internal links, performance, structured data, migrations, international signals, analytics, and release risk.',
  contentFocus:
    'A demand and page system built from customer decisions, live SERPs, first-party expertise, product or service truth, sources, clear ownership, internal journeys, and refresh governance.',
  authorityFocus:
    'A responsible authority program across relevant editorial links, brand mentions, reviews, profiles, publications, partnerships, entities, original assets, digital PR, and AI-answer source influence.',
  operationsFocus:
    'Implementation-ready briefs and tickets, named owners, approvals, acceptance tests, release QA, annotations, monitoring, training, decision rights, and escalation instead of an agency-only task list.',
  measurementFocus:
    'Query, URL, template, market, journey, lead, pipeline, order, revenue, and AI-answer cohorts reported with source definitions, confounders, implementation context, and decision recommendations.',
  boundary:
    'No package or agency controls crawling, indexing, rankings, citations, customer demand, or revenue. TheProjectSEO does not publish invented average growth, retention, timetable, or case-study claims; scope and expectations follow the audited opportunity and implementation reality.',
  sources: [
    {
      label: 'Google Search Essentials',
      url: 'https://developers.google.com/search/docs/essentials',
      description:
        'Google’s technical requirements, spam policies, and foundational Search recommendations.',
    },
    {
      label: 'Google SEO Starter Guide',
      url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
      description:
        'Google’s guide to site organization, useful content, links, promotion, and performance analysis.',
    },
    {
      label: 'Google: AI features and your website',
      url: 'https://developers.google.com/search/docs/appearance/ai-features',
      description:
        'Google’s published requirements, controls, and measurement guidance for AI Overviews and AI Mode.',
    },
    {
      label: 'Bing Webmaster Guidelines',
      url: 'https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a',
      description:
        'Microsoft Bing’s quality, technical, content, link, and abuse guidance for webmasters.',
    },
    {
      label: 'Google Search Console performance reports',
      url: 'https://support.google.com/webmasters/answer/7576553',
      description:
        'Google’s definitions and limitations for clicks, impressions, CTR, position, dimensions, and filters.',
    },
  ],
  customFaqs: [
    {
      question: 'Which SEO service should a company start with?',
      answer:
        'Start with the constraint that prevents qualified growth. That may be technical eligibility, unclear positioning, missing commercial pages, weak content, poor local or product architecture, insufficient authority, unreliable analytics, or slow implementation. A scoped assessment should rank these by value, confidence, effort, risk, and dependency before prescribing a package.',
    },
    {
      question: 'How much do TheProjectSEO engagements cost?',
      answer:
        'Ongoing engagements currently start at $3,500 per month. Audits, projects, workshops, and larger programs are scoped separately based on site size, markets, platforms, risk, data, content and engineering needs, authority work, implementation ownership, and reporting requirements. The pricing page explains the structure without promising a result.',
    },
  ],
  relatedLinks: [
    { href: '/services/seo', label: 'SEO agency service', description: 'Review the integrated Google and AI-search engagement.' },
    { href: '/services/ai-search', label: 'AI search optimization', description: 'Measure and improve generated-answer discovery.' },
    { href: '/services/technical-seo', label: 'Technical SEO', description: 'Resolve crawl, render, index, architecture, and performance constraints.' },
    { href: '/services/ai-agents/ai-seo-agent', label: 'AI agent for SEO', description: 'Use governed agents for repeatable research, monitoring, briefs, and QA.' },
    { href: '/services/analytics', label: 'Organic search analytics', description: 'Connect search visibility, implementation, and customer outcomes with governed data.' },
    { href: '/services/claude/agentic-seo-systems', label: 'AI agents for SEO', description: 'Design controlled Claude workflows with human approvals, evidence, and rollback.' },
    { href: '/services/content', label: 'AI search content agency', description: 'Build researched commercial and editorial assets with clear ownership and conversion paths.' },
    { href: '/services/ecommerce-seo', label: 'AI SEO for ecommerce', description: 'Improve product, collection, catalog, platform, and shopper discovery systems.' },
    { href: '/services/enterprise-seo', label: 'Large scale SEO', description: 'Coordinate templates, governance, releases, data, and search risk at scale.' },
    { href: '/services/international-seo', label: 'International SEO services', description: 'Align India and Philippines market demand, localization, and technical signals.' },
    { href: '/services/link-building', label: 'SEO link building services', description: 'Earn relevant editorial references through useful assets, expertise, and digital PR.' },
    { href: '/services/local-seo', label: 'Local SEO services', description: 'Improve legitimate location, profile, review, citation, and local lead journeys.' },
    { href: '/services/off-page-seo', label: 'SEO authority building', description: 'Strengthen corroboration across publications, profiles, reviews, links, and entities.' },
    { href: '/services/on-page-seo', label: 'Website SEO optimization', description: 'Clarify page intent, titles, headings, entities, evidence, links, and conversion routes.' },
    { href: '/services/seo-audit', label: 'Website SEO audit', description: 'Turn technical, content, authority, analytics, and AI-search evidence into priorities.' },
    { href: '/services/seo-automation', label: 'SEO automation services', description: 'Automate repeatable checks and workflows with controls, QA, and accountable owners.' },
    { href: '/services/seo-consulting', label: 'SEO consulting agency', description: 'Resolve high-stakes search decisions with independent evidence and implementation support.' },
    { href: '/pricing', label: 'Pricing', description: 'Understand starting investment and scope factors.' },
  ],
})
