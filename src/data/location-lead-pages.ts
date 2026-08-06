import { createSearchServicePage } from '@/data/service-lead-pages-scale'

const commonSources = [
  {
    label: 'Google Search Essentials',
    url: 'https://developers.google.com/search/docs/essentials',
    description:
      'Google’s technical requirements, spam policies, and foundational Search recommendations.',
  },
  {
    label: 'Google: AI features and your website',
    url: 'https://developers.google.com/search/docs/appearance/ai-features',
    description:
      'Google’s published requirements and measurement guidance for AI Overviews and AI Mode.',
  },
  {
    label: 'Google Business Profile guidelines',
    url: 'https://support.google.com/business/answer/3038177',
    description:
      'Google’s eligibility and representation rules for businesses, addresses, service areas, names, categories, and profiles.',
  },
  {
    label: 'Google: localized versions of pages',
    url: 'https://developers.google.com/search/docs/specialty/international/localized-versions',
    description:
      'Google’s implementation guidance for language and regional page variants.',
  },
  {
    label: 'Bing Webmaster Guidelines',
    url: 'https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a',
    description:
      'Microsoft Bing’s technical, content, link, quality, and abuse guidance.',
  },
]

const india = createSearchServicePage({
  slug: 'locations/india',
  path: '/locations/india',
  name: 'SEO Agency in India',
  schemaName: 'SEO and AI search services in India',
  serviceType:
    'SEO services in India covering technical SEO, content, ecommerce, local and enterprise search, analytics, authority, and AI search',
  metaTitle: 'SEO Agency in India for Google & AI Search',
  metaDescription:
    'India-based SEO agency and SEO company for technical SEO, content, ecommerce, local and enterprise search, analytics, authority, AI SEO and AI search.',
  eyebrow: 'SEO agency in India · Headquartered in Ranchi',
  title: 'SEO Agency India: build search demand.',
  titleAccent: 'Compete wherever your buyers are.',
  entityMentions: [
    { name: 'India', sameAs: ['https://www.wikidata.org/wiki/Q668', 'https://en.wikipedia.org/wiki/India'] },
    { name: 'Search engine optimization', sameAs: ['https://www.wikidata.org/wiki/Q180711', 'https://en.wikipedia.org/wiki/Search_engine_optimization'] },
    { name: 'Google', sameAs: ['https://www.wikidata.org/wiki/Q95', 'https://en.wikipedia.org/wiki/Google'] },
    { name: 'Digital marketing', sameAs: ['https://www.wikidata.org/wiki/Q1323528', 'https://en.wikipedia.org/wiki/Digital_marketing'] },
    { name: 'E-commerce', sameAs: ['https://www.wikidata.org/wiki/Q484847', 'https://en.wikipedia.org/wiki/E-commerce'] },
  ],
  definition:
    'TheProjectSEO is an India-based SEO agency headquartered in Ranchi, Jharkhand. We help Indian organizations and India-based teams improve qualified discovery across Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity using technical SEO, content and page architecture, entities, authority, analytics, and implementation governance.',
  bestFit:
    'Indian businesses and India-based global teams with a proven offer, accountable experts, implementation access, and customer journeys that can be measured beyond pageviews.',
  heroChecks: [
    'India headquarters in Ranchi; remote delivery across listed Indian city markets',
    'Indian and global buyer-market research rather than headquarters-based assumptions',
    'Technical, content, ecommerce, local, enterprise, authority, analytics, and AI search',
    'No claim of an office in Bangalore, Mumbai, Delhi, Hyderabad, Pune, or Chennai',
  ],
  examples: ['SEO agency in India for AI search', 'SEO company in India for ecommerce and enterprise search', 'AI SEO agency and AI SEO services for Indian businesses', 'how to choose an SEO company in India'],
  pageAssets: ['India service, industry, solution, product, ecommerce, and country-market pages', 'city and service pages only where the business can provide distinct, useful market information', 'buyer guides, comparisons, tools, definitions, documentation, and expert resources', 'approved India project evidence, research methods, datasets, and visual proof', 'organization, Ranchi headquarters, people, services, policies, contact, and verified profile pages'],
  technicalFocus:
    'A review of crawl, rendering, indexation, architecture, templates, ecommerce parameters, performance, structured data, internal links, analytics, migrations, and language or market variants.',
  contentFocus:
    'Research that separates Indian demand from the global markets India-based companies may sell into, then maps each customer decision to a useful page with approved expertise, sources, internal links, and conversion paths.',
  authorityFocus:
    'Relevant Indian and industry publications, associations, partners, experts, reviews, citations, research, and editorial links—without fake offices, mass directories, paid-link concealment, or “best agency” list manipulation.',
  operationsFocus:
    'Senior strategy with documented briefs, tickets, reviewers, acceptance tests, release QA, weekly collaboration, market or language approval, reporting, and accountable implementation ownership.',
  measurementFocus:
    'India and export-market query, landing, city, industry, product, lead, pipeline, order, revenue, and AI-answer cohorts kept separate so one audience cannot hide another’s performance.',
  boundary:
    'A location page should represent a real service relationship or market capability. TheProjectSEO’s verified headquarters is in Ranchi; other Indian city pages describe markets served remotely and must not imply a local office or Google Business Profile.',
  sources: commonSources,
  customFaqs: [
    {
      question: 'Where is TheProjectSEO located in India?',
      answer:
        'TheProjectSEO is headquartered in Ranchi, Jharkhand. Engagements elsewhere in India are delivered remotely unless an in-person session is agreed. The website does not claim local offices in Bangalore, Mumbai, Delhi, Hyderabad, Pune, or Chennai.',
    },
    {
      question: 'Should an India-based company target Indian or global keywords?',
      answer:
        'Target the markets where qualified buyers search and the business can sell, support, price, and comply. Headquarters does not determine search intent. We separate country, language, product, industry, and buyer-stage research before choosing architecture or content.',
    },
    {
      question: 'Are you an SEO company or an SEO agency in India?',
      answer:
        'Both. TheProjectSEO is an India-headquartered SEO company and SEO agency in Ranchi, delivering the same technical SEO, content, local, and AI-search scope regardless of which term you search.',
    },
    {
      question: 'Do you offer AI SEO services in India?',
      answer:
        'Yes. AI SEO services and AI SEO agency work, generative engine optimization (GEO), answer engine optimization (AEO), and AI Overviews visibility sit alongside the core Google program rather than replacing it. This is one of the fastest-growing search categories in the Indian market, and we hold it to the same evidence standard as traditional rankings.',
    },
  ],
  relatedLinks: [
    { href: '/services/local-seo', label: 'Local SEO', description: 'Build eligible local discovery without invented offices or profiles.' },
    { href: '/services/seo', label: 'SEO services', description: 'See the integrated Google and AI-search engagement.' },
    { href: '/services/ai-search', label: 'AI search optimization', description: 'Measure prompts, citations, sources, and accuracy.' },
    { href: '/pricing', label: 'Pricing', description: 'Review starting investment and scope factors.' },
  ],
})

const philippines = createSearchServicePage({
  slug: 'locations/philippines',
  path: '/locations/philippines',
  name: 'SEO Agency for the Philippines',
  schemaName: 'SEO and AI search services for the Philippines',
  serviceType:
    'SEO services for Philippine organizations covering technical SEO, content, ecommerce, local search, analytics, authority, and AI search',
  metaTitle: 'SEO Agency Philippines for Google & AI Search',
  metaDescription:
    'SEO Philippines services for Philippine businesses: technical SEO, content, ecommerce, local search, analytics, authority and AI search from an SEO company and agency built for the market.',
  eyebrow: 'SEO agency for Philippine businesses · Remote specialist delivery',
  title: 'SEO Agency Philippines: turn search demand into action.',
  titleAccent: 'Build sources AI can verify.',
  entityMentions: [
    { name: 'Philippines', sameAs: ['https://www.wikidata.org/wiki/Q928', 'https://en.wikipedia.org/wiki/Philippines'] },
    { name: 'Search engine optimization', sameAs: ['https://www.wikidata.org/wiki/Q180711', 'https://en.wikipedia.org/wiki/Search_engine_optimization'] },
    { name: 'Google', sameAs: ['https://www.wikidata.org/wiki/Q95', 'https://en.wikipedia.org/wiki/Google'] },
    { name: 'Digital marketing', sameAs: ['https://www.wikidata.org/wiki/Q1323528', 'https://en.wikipedia.org/wiki/Digital_marketing'] },
    { name: 'Content marketing', sameAs: ['https://www.wikidata.org/wiki/Q558685', 'https://en.wikipedia.org/wiki/Content_marketing'] },
  ],
  definition:
    'TheProjectSEO helps Philippine businesses improve qualified discovery across Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity. Delivery is remote from our India headquarters and combines Philippine SERP and customer research with technical SEO, content and page architecture, local and ecommerce systems, authority, analytics, and transparent AI-search measurement.',
  bestFit:
    'Philippine businesses with a proven offer, access to local customer and subject expertise, implementation ownership, and outcomes such as qualified enquiries, bookings, orders, pipeline, or revenue.',
  heroChecks: [
    'Philippine SERP, customer, language, city, industry, platform, and competitor research',
    'Technical, content, ecommerce, local, authority, analytics, generative engine optimization (GEO), answer engine optimization (AEO), and AI-search work',
    'Remote delivery from India with accountable local fact and market review',
    'No invented Manila or Cebu office, project metric, citation rate, or result timetable',
  ],
  examples: ['SEO Philippines for Google and AI search', 'SEO company Philippines for ecommerce and local businesses', 'SEO services Philippines for growing brands', 'local SEO Philippines for Manila and Cebu businesses'],
  pageAssets: ['Philippines service, industry, ecommerce, solution, and country-market pages', 'Manila and Cebu pages only with distinct customer, service, and market value', 'local guides, comparisons, tools, definitions, documentation, and customer resources', 'approved Philippine project evidence, methods, screenshots, data, and expert commentary', 'organization, people, remote-delivery facts, services, policies, contact, and verified profiles'],
  technicalFocus:
    'A review of crawl, rendering, indexation, architecture, templates, ecommerce and marketplace relationships, performance, structured data, internal links, analytics, migrations, and local or international variants.',
  contentFocus:
    'Research grounded in Philippine SERPs, customer language, cities, industries, competitors, platforms, sales questions, and approved local reviewers—not global copy with the country name inserted.',
  authorityFocus:
    'Relevant Philippine publications, associations, directories, partners, experts, reviews, citations, research, and editorial links with accurate business facts and transparent relationships.',
  operationsFocus:
    'A remote workflow with stakeholder interviews, local fact approval, implementation briefs and tickets, editorial review, release QA, weekly collaboration, evidence capture, and decision reporting.',
  measurementFocus:
    'Philippine query, landing, city, product, service, lead, booking, order, pipeline, revenue, local-profile, and AI-answer cohorts with source and tracking limitations documented.',
  boundary:
    'TheProjectSEO serves Philippine clients remotely and does not claim a staffed Philippine office. Google Business Profile or address-based tactics are recommended only when the client’s own eligible real-world operations meet Google’s guidelines.',
  sources: commonSources,
  customFaqs: [
    {
      question: 'Does TheProjectSEO have an office in the Philippines?',
      answer:
        'No. TheProjectSEO is headquartered in Ranchi, India and serves Philippine organizations remotely. Manila and Cebu pages describe markets served, not office locations. We do not create fake addresses or profiles.',
    },
    {
      question: 'What Philippine projects can TheProjectSEO show?',
      answer:
        'The project owner has supplied point-in-time evidence for Expressway.PH and TaxCalculator.com.ph. Expressway.PH showed 49.2K estimated monthly organic traffic, 6.8K organic keywords, 3.4K AI Overview responses, and 2.4K ChatGPT responses in a July 2026 Ahrefs snapshot. TaxCalculator.com.ph showed 32.3K Search impressions over a supplied three-month Search Console view. These are project-specific observations, not promised client averages.',
    },
    {
      question: 'Is TheProjectSEO an SEO company in the Philippines or an SEO agency?',
      answer:
        'Both terms are used interchangeably by Philippine buyers, and we answer to either. We are an SEO company and SEO agency serving the Philippines remotely from our India headquarters, covering the same technical SEO, content, local search, and AI-search scope regardless of which term you search.',
    },
    {
      question: 'Do you offer local SEO for Philippine businesses?',
      answer:
        'Yes. Local SEO Philippines work covers Google Business Profile eligibility, city and service-area pages only where the business has a genuine footprint, and local citation and review signals, without inventing an office or profile that does not exist.',
    },
  ],
  relatedLinks: [
    { href: '/case-studies/expressway-ph', label: 'Expressway.PH evidence', description: 'Review the approved Philippine organic and AI-search snapshot.' },
    { href: '/case-studies/taxcalculator-com-ph', label: 'TaxCalculator.com.ph evidence', description: 'Review the supplied Search Console growth context.' },
    { href: '/services/seo', label: 'SEO services', description: 'See the integrated Google and AI-search engagement.' },
    { href: '/pricing', label: 'Pricing', description: 'Review starting investment and scope factors.' },
  ],
})

export const locationLeadPages = { india, philippines } as const
