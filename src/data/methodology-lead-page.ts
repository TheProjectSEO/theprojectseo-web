import { createSearchServicePage } from '@/data/service-lead-pages-scale'

export const methodologyLeadPage = createSearchServicePage({
  slug: 'methodology',
  path: '/methodology',
  parentBreadcrumb: { name: 'Company', href: '/company' },
  name: 'SEO Delivery Methodology',
  schemaName: 'TheProjectSEO SEO and AI-search delivery methodology',
  serviceType:
    'SEO delivery methodology covering research, technical SEO, content, entity development, authority, AI-search measurement, implementation, and quality assurance',
  metaTitle: 'Our SEO & AI Search Methodology | TheProjectSEO',
  metaDescription:
    'See how TheProjectSEO researches, prioritizes, implements, verifies, and measures technical SEO, content, authority, analytics, and AI-search work.',
  eyebrow: 'Our process · SEO and AI-search delivery',
  title: 'Turn search evidence into',
  titleAccent: 'implemented, verified change.',
  definition:
    'TheProjectSEO uses a research-to-release methodology for Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity. We establish the business question and baseline, study search demand and source behavior, prioritize the constraint, translate findings into tickets and briefs, support implementation, verify production, and measure the relevant query, page, citation, conversion, or revenue cohorts.',
  bestFit:
    'Organizations that can share commercial context, provide access to the appropriate systems and experts, assign implementation owners, review consequential claims, and use measurement to change priorities rather than defend a fixed activity plan.',
  heroChecks: [
    'Business question and baseline before recommendations',
    'Live SERP, customer, competitor, site, and AI-answer evidence',
    'Implementation briefs, tickets, owners, acceptance tests, and release QA',
    'No unverified internal statistics, ranking guarantees, or invented causality',
  ],
  examples: [
    'how does an AI-native SEO agency work',
    'SEO agency process from audit to implementation',
    'SEO and GEO methodology for Google and ChatGPT',
    'how an SEO agency measures AI search visibility',
  ],
  pageAssets: [
    'opportunity models, baselines, query cohorts, page ownership, and implementation backlogs',
    'technical findings, template decisions, release tickets, acceptance tests, and production evidence',
    'decision pages, supporting resources, definitions, comparisons, evidence pages, and refresh plans',
    'approved expert inputs, first-party data, source notes, claim records, and visual evidence',
    'organization, service, author, reviewer, policy, methodology, pricing, and case-study entities',
  ],
  technicalFocus:
    'A reproducible inspection of crawl access, rendering, indexation, canonicalization, information architecture, templates, internal links, performance, structured data, analytics, releases, and platform-specific crawler or preview controls. Findings are grouped into affected cohorts and translated into implementation-ready decisions rather than exported as a raw issue count.',
  contentFocus:
    'A research and editorial system that maps customer decisions to canonical pages, direct answers, entities, claims, sources, expert review, internal links, visual evidence, action paths, and update ownership. The process consolidates or redirects pages when a unique and useful purpose cannot be defended.',
  authorityFocus:
    'A source and reputation programme built around original evidence, expert commentary, independent publications, relevant links, mentions, reviews, profiles, citations, and consistent entity facts. It excludes fake proof, paid-link concealment, guaranteed placements, private blog networks, and third-party metrics used as substitutes for editorial judgment.',
  operationsFocus:
    'A delivery loop with named owners, briefs, tickets, dependencies, approval rules, claim and source checks, release acceptance criteria, QA evidence, annotations, rollback considerations, decision logs, and a regular priority review. Automation assists repeatable analysis and checks; consequential claims and changes retain accountable human review.',
  measurementFocus:
    'Query, URL, template, market, journey, conversion, revenue, prompt, answer, citation, source, accuracy, and competitor cohorts selected for the business question. Reports separate observed movement from interpretation and causal confidence, and annotate releases, campaigns, seasonality, tracking changes, product work, and external events.',
  boundary:
    'The method improves the quality, eligibility, usefulness, corroboration, and measurement of a brand’s sources. It does not provide access to private ranking or retrieval systems, reveal every real user prompt, or guarantee that Google, Bing, OpenAI, Anthropic, Google Gemini, or Perplexity will crawl, index, rank, cite, mention, recommend, or send traffic.',
  sources: [
    {
      label: 'Google Search Essentials',
      url: 'https://developers.google.com/search/docs/essentials',
      description:
        'Google’s technical requirements, spam policies, and core practices, including the boundary between eligibility and guaranteed appearance.',
    },
    {
      label: 'Google: AI features and your website',
      url: 'https://developers.google.com/search/docs/appearance/ai-features',
      description:
        'Google’s published eligibility, crawler, preview-control, content, and measurement guidance for AI Overviews and AI Mode.',
    },
    {
      label: 'Google: creating helpful, reliable content',
      url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
      description:
        'Google’s self-assessment guidance for people-first content, expertise, sourcing, authorship, trust, and appropriate automation.',
    },
    {
      label: 'Bing Webmaster Guidelines',
      url: 'https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a',
      description:
        'Microsoft Bing’s published technical, content, link, quality, and abuse guidance.',
    },
    {
      label: 'OpenAI crawler documentation',
      url: 'https://platform.openai.com/docs/bots',
      description:
        'OpenAI’s documentation for OAI-SearchBot, GPTBot, ChatGPT-User, robots controls, and published IP ranges.',
    },
    {
      label: 'Schema.org documentation',
      url: 'https://schema.org/docs/documents.html',
      description:
        'The open vocabulary and documentation used to describe visible entities and relationships in structured data.',
    },
  ],
  customFaqs: [
    {
      question: 'Does TheProjectSEO use AI and automation in delivery?',
      answer:
        'Yes. We use software, scripts, language models, and repeatable workflows for research support, extraction, classification, comparison, quality checks, monitoring, and drafting assistance. We do not publish a fictional count of agents, skills, models, workflows, or success rates. Material strategy, claims, sources, approvals, releases, and conclusions retain accountable human review.',
    },
    {
      question: 'What happens in the first stage of the methodology?',
      answer:
        'We define the commercial question, customers, markets, offers, conversions, existing baselines, implementation environment, and decision rights. Then we inspect the live site, search results, available first-party data, competitors, and representative AI answers. The first deliverable is a prioritized model of opportunities, constraints, evidence, owners, and dependencies—not a generic checklist.',
    },
    {
      question: 'How are SEO recommendations implemented?',
      answer:
        'A material recommendation becomes a brief or ticket that includes the affected page or template cohort, evidence, expected effect, requirements, owner, dependencies, risk, acceptance criteria, analytics annotation, and release QA. TheProjectSEO can implement within the agreed scope or work with the client’s engineering, editorial, analytics, product, communications, and compliance teams.',
    },
    {
      question: 'How does the methodology account for AI-search volatility?',
      answer:
        'We use versioned prompt cohorts, repeated observations, platform and market separation, saved outputs, source and citation capture, factual-accuracy review, and explicit limitations. A synthetic prompt panel is a research instrument, not a complete record of every customer question or a direct view into a model’s private retrieval process.',
    },
    {
      question: 'How are content and technical SEO prioritized?',
      answer:
        'We compare potential customer and business value, affected reach, evidence strength, implementation effort, dependency order, risk, measurement quality, and reversibility. The most visible deliverable is not always the highest-priority constraint. A template defect, internal-link bottleneck, unclear page purpose, or broken conversion event may deserve priority over publishing another article.',
    },
    {
      question: 'What does quality assurance cover?',
      answer:
        'QA can cover crawl and render behavior, status codes, canonicals, index directives, structured data, internal links, titles, headings, direct answers, claims, sources, entities, accessibility, responsive layout, conversion paths, tracking, deployment evidence, and regressions. The applicable acceptance tests are written before release.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/seo',
      label: 'SEO services',
      description:
        'See how the delivery method becomes an integrated technical, content, authority, and measurement engagement.',
    },
    {
      href: '/services/ai-search',
      label: 'AI-search optimization',
      description:
        'Review the platform-specific source, entity, citation, accuracy, and measurement work.',
    },
    {
      href: '/pricing',
      label: 'Pricing and scope',
      description:
        'Understand the $3,500 monthly starting point and the variables that change a proposal.',
    },
    {
      href: '/case-studies',
      label: 'Approved case-study evidence',
      description:
        'Inspect the first-party project observations that are approved for public reporting.',
    },
  ],
})
