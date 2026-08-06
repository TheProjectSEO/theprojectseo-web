import type { Metadata } from 'next'

export type IndustryLeadPageData = {
  slug: string
  path?: string
  parentBreadcrumb?: {
    name: string
    href: string
  }
  name: string
  schemaName?: string
  serviceType: string
  schemaAudience: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  titleAccent: string
  directAnswer: string
  primaryCta: string
  bestFit: string
  heroChecks: string[]
  journeyTitle: string
  journeyLead: string
  searchJourneys: Array<{
    stage: string
    intent: string
    explanation: string
    examples: string[]
    conversion: string
  }>
  obstaclesTitle: string
  obstaclesLead: string
  obstacles: Array<{
    title: string
    problem: string
    response: string
  }>
  deliverablesTitle: string
  deliverablesLead: string
  deliverables: Array<{
    title: string
    description: string
    items: string[]
  }>
  aiVisibility: {
    title: string
    lead: string
    platforms: string[]
    boundary: string
    workstreams: Array<{
      title: string
      description: string
      output: string
    }>
  }
  architectureTitle: string
  architectureLead: string
  architecture: Array<{
    pageType: string
    intent: string
    examples: string
    signal: string
  }>
  processTitle: string
  processLead: string
  process: Array<{
    number: string
    cadence: string
    title: string
    description: string
    output: string
  }>
  measurementTitle: string
  measurementLead: string
  measurementBoundary: string
  measurement: Array<{
    name: string
    definition: string
    source: string
  }>
  evidence: {
    title: string
    lead: string
    verifiedMetrics: Array<{ value: string; label: string }>
    note: string
    slots: Array<{ label: string; description: string }>
  }
  fitTitle: string
  fitLead: string
  goodFit: string[]
  notFit: string[]
  sources: Array<{ label: string; url: string; description: string }>
  faqTitle: string
  faqs: Array<{ question: string; answer: string }>
  relatedLinks: Array<{ href: string; label: string; description: string }>
  /** Real, Wikidata/Wikipedia-linked entities mentioned on the page, surfaced in schema
   * as `mentions` with `sameAs`. Optional -- only populate with entities actually grounded
   * against verified data (e.g. TextRazor wikidataId), never invented. */
  entityMentions?: Array<{ name: string; sameAs: string[] }>
  ctaEyebrow: string
  ctaTitle: string
  ctaLead: string
  ctaBenefits: string[]
}

export const sharedIndustryEvidence = {
  verifiedMetrics: [
    {
      value: '49.2K',
      label: 'estimated monthly organic traffic for Expressway.PH in the supplied July 2026 Ahrefs snapshot',
    },
    {
      value: '6.8K',
      label: 'organic keywords for Expressway.PH in the same Ahrefs snapshot',
    },
    {
      value: '3.4K / 2.4K',
      label: 'AI Overview responses / ChatGPT responses reported in that supplied Ahrefs snapshot',
    },
    {
      value: '32.3K',
      label: 'Google Search impressions for TaxCalculator.com.ph in the supplied three-month GSC view',
    },
  ],
  note:
    'These are point-in-time measurements from screenshots supplied by the project owner, not promises or typical-client averages. Search and AI-response datasets use different collection methods and should not be added together.',
}

const saas: IndustryLeadPageData = {
  slug: 'saas',
  name: 'SaaS',
  serviceType: 'B2B SaaS SEO and AI search optimization',
  schemaAudience: 'SaaS founders, product marketers, demand generation leaders, and in-house SEO teams',
  metaTitle: 'SaaS SEO Agency for Pipeline & AI Search | TheProjectSEO',
  metaDescription:
    'SaaS SEO services for qualified demos, trials, pipeline, Google visibility, AI Overviews, ChatGPT, Gemini and Perplexity. See the strategy, deliverables and measurement model.',
  eyebrow: 'SaaS SEO agency · Google + AI search',
  title: 'SaaS SEO Agency: turn product expertise into',
  titleAccent: 'qualified SaaS demand.',
  entityMentions: [
    { name: 'Search engine optimization', sameAs: ['https://www.wikidata.org/wiki/Q180711', 'https://en.wikipedia.org/wiki/Search_engine_optimization'] },
    { name: 'Software as a service', sameAs: ['https://www.wikidata.org/wiki/Q1254596', 'https://en.wikipedia.org/wiki/Software_as_a_service'] },
    { name: 'Content marketing', sameAs: ['https://www.wikidata.org/wiki/Q558685', 'https://en.wikipedia.org/wiki/Content_marketing'] },
    { name: 'Google', sameAs: ['https://www.wikidata.org/wiki/Q95', 'https://en.wikipedia.org/wiki/Google'] },
    { name: 'Link building', sameAs: ['https://www.wikidata.org/wiki/Q1569371', 'https://en.wikipedia.org/wiki/Link_building'] },
  ],
  directAnswer:
    'TheProjectSEO helps B2B and product-led SaaS companies become discoverable when buyers define a problem, compare solutions, validate technical requirements, and ask AI systems for a shortlist. We connect technical SEO, product-led content, comparison and integration pages, digital authority, structured data, and AI-search monitoring to commercial outcomes such as qualified demos, trials, pipeline, and assisted revenue—not traffic in isolation.',
  primaryCta: 'Request a SaaS SEO assessment',
  bestFit:
    'SaaS teams with a working product, clear ICP, access to product experts, and enough conversion data to distinguish attention from demand.',
  heroChecks: [
    'B2B SaaS, product-led SaaS, vertical software, and technical platforms',
    'Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity',
    'Content mapped to use cases, roles, integrations, alternatives, and buying stages',
    'Reporting tied to demos, trials, opportunities, and CRM outcomes',
  ],
  journeyTitle: 'How does a SaaS buyer actually search?',
  journeyLead:
    'A SaaS decision rarely begins with a branded demo request. The same buying committee moves through problem education, category discovery, product validation, and risk reduction. The page system has to answer each job while keeping a clear route to product value.',
  searchJourneys: [
    {
      stage: 'Problem',
      intent: 'Name the operational problem',
      explanation:
        'The buyer is trying to understand a broken workflow, benchmark a process, or find a practical way to remove friction before they know the right software category.',
      examples: ['how to reduce month-end close time', 'automate customer onboarding workflow'],
      conversion: 'newsletter, template, benchmark, or relevant product education',
    },
    {
      stage: 'Category',
      intent: 'Build a shortlist',
      explanation:
        'The buyer has learned the category language and now compares approaches, deployment models, and vendors that suit a company size, role, or use case.',
      examples: ['best onboarding software for B2B SaaS', 'enterprise spend management platforms'],
      conversion: 'category-to-solution visit, trial, or demo exploration',
    },
    {
      stage: 'Validation',
      intent: 'Check product fit',
      explanation:
        'A practitioner or technical evaluator verifies features, integrations, security, implementation effort, and whether the product works in the existing stack.',
      examples: ['product x Salesforce integration', 'SOC 2 workflow software with SSO'],
      conversion: 'documentation visit, integration view, solution consultation, or trial',
    },
    {
      stage: 'Decision',
      intent: 'Reduce purchase risk',
      explanation:
        'The committee compares alternatives, pricing logic, migration paths, support, and proof before involving procurement or signing an agreement.',
      examples: ['product x vs product y', 'product x alternatives for enterprise teams'],
      conversion: 'qualified demo, sales-assisted trial, or opportunity creation',
    },
  ],
  obstaclesTitle: 'Why does SaaS SEO produce traffic without pipeline?',
  obstaclesLead:
    'The failure is usually structural. The company publishes broad education while product, positioning, technical documentation, and attribution remain disconnected.',
  obstacles: [
    {
      title: 'The content calendar is detached from the product',
      problem:
        'High-volume editorial topics can inflate sessions while leaving buyers unable to evaluate features, use cases, integrations, or a meaningful reason to choose the product.',
      response:
        'We build the keyword and page roadmap from product capabilities, ICP pain, sales objections, support questions, and competitor positioning. Informational content earns attention; product-led clusters carry that attention toward a decision.',
    },
    {
      title: 'One page is expected to rank for every segment',
      problem:
        'A generic features page cannot fully answer the needs of different roles, industries, company sizes, workflows, and integration environments without becoming vague.',
      response:
        'We define a controlled solution architecture with clear canonical ownership: feature, use-case, industry, integration, comparison, and documentation pages each answer a distinct search job.',
    },
    {
      title: 'The marketing site and application behave like separate systems',
      problem:
        'JavaScript rendering, app-shell routes, gated documentation, parameter growth, and release velocity can create crawl and indexing problems that content alone will not solve.',
      response:
        'Technical work covers rendering, indexability, canonicalization, internal links, sitemaps, structured data, Core Web Vitals, documentation boundaries, and release QA with the development team.',
    },
    {
      title: 'Reporting stops at rankings and form fills',
      problem:
        'A demo is not automatically qualified pipeline, and a trial is not automatically an activated account. Optimizing to the wrong proxy can attract the wrong audience.',
      response:
        'We agree on stage definitions with marketing, sales, and product analytics, then connect landing pages and query groups to activation, opportunity, pipeline, and revenue data where the stack permits.',
    },
  ],
  deliverablesTitle: 'What is included in a SaaS SEO engagement?',
  deliverablesLead:
    'The scope is prioritized from evidence rather than a fixed checklist. These six workstreams cover the system needed to earn qualified visibility and keep it maintainable as the product changes.',
  deliverables: [
    {
      title: 'Technical and rendering audit',
      description:
        'A crawl-to-render review of the public marketing site, documentation, templates, and critical conversion routes.',
      items: [
        'Indexation, canonical, redirect, sitemap, and robots review',
        'JavaScript rendering and internal-link validation',
        'Core Web Vitals and template-level defect backlog',
        'Migration and release safeguards for engineering',
      ],
    },
    {
      title: 'ICP and intent research',
      description:
        'A demand model that separates learner, practitioner, evaluator, buyer, and branded-navigation intent.',
      items: [
        'Sales-call and objection mining',
        'Competitor, category, and alternative demand',
        'Role, use-case, industry, and integration clusters',
        'Query-to-page ownership and cannibalization rules',
      ],
    },
    {
      title: 'Product-led content system',
      description:
        'Briefs and pages that translate product capability into precise, useful answers without turning every article into a sales pitch.',
      items: [
        'Feature, use-case, solution, and integration pages',
        'Comparison and alternative pages with fair criteria',
        'Templates, workflows, glossaries, and technical education',
        'Expert interviews and editorial review workflow',
      ],
    },
    {
      title: 'On-page and entity optimization',
      description:
        'Clear information retrieval for people, crawlers, and systems that synthesize answers from multiple sources.',
      items: [
        'Titles, headings, direct answers, and passage structure',
        'Organization, SoftwareApplication, article, and FAQ markup where eligible',
        'Consistent product, feature, audience, and category entities',
        'Descriptive internal links and breadcrumb relationships',
      ],
    },
    {
      title: 'Authority development',
      description:
        'A link-earning and third-party presence program built from assets the market has a reason to reference.',
      items: [
        'Original benchmarks, templates, data studies, and tools',
        'Integration and technology-partner opportunities',
        'Unlinked mention and digital PR prospecting',
        'Review-site and category-profile consistency',
      ],
    },
    {
      title: 'Measurement and iteration',
      description:
        'A decision system for seeing which topics and landing pages influence real commercial movement.',
      items: [
        'Google Search Console, analytics, and rank tracking',
        'CRM and product-event mapping where access allows',
        'AI answer sampling, citation checks, and prompt-set monitoring',
        'Monthly experiments, refreshes, pruning, and reporting',
      ],
    },
  ],
  aiVisibility: {
    title: 'How do we optimize SaaS content for Google and AI answers?',
    lead:
      'Google results, AI Overviews, ChatGPT search, Gemini, Claude, and Perplexity do not expose one shared ranking system. We improve the underlying evidence each system can discover and interpret, then measure each surface separately.',
    platforms: ['Google', 'Bing', 'AI Overviews', 'ChatGPT', 'Gemini', 'Claude', 'Perplexity'],
    boundary:
      'No agency can guarantee inclusion in an AI answer. Model outputs vary by prompt, location, freshness, retrieval index, and product release. Our work increases eligibility and evidence quality; it does not manufacture a guaranteed citation.',
    workstreams: [
      {
        title: 'Answer-ready product knowledge',
        description:
          'We turn product claims into explicit, supportable passages: what the product does, who it is for, how it works, when it is not a fit, and what evidence supports the statement.',
        output: 'answer blocks, comparison criteria, definitions, limitations, and reviewed claims',
      },
      {
        title: 'Entity consistency',
        description:
          'Product name, company identity, category, features, integrations, leadership, and third-party profiles should describe the same real-world entity without contradictory positioning.',
        output: 'entity map, schema plan, profile alignment, and ambiguity fixes',
      },
      {
        title: 'Retrieval access',
        description:
          'Important answers must be available in rendered HTML, linked from the site, indexable where intended, and not hidden only inside video, client-side interactions, or gated PDFs.',
        output: 'crawl/access audit, rendered-content checks, and internal-link repairs',
      },
      {
        title: 'Prompt-set monitoring',
        description:
          'We track stable prompt groups around category, use case, comparison, implementation, and risk—then record whether the brand appears, is cited, is described correctly, and changes over time.',
        output: 'versioned prompts, response archive, citation share, and accuracy notes',
      },
    ],
  },
  architectureTitle: 'Which SaaS pages create qualified search demand?',
  architectureLead:
    'The right mix depends on the product and market. This model prevents the common mistake of treating a blog as the whole organic strategy.',
  architecture: [
    {
      pageType: 'Category and solution',
      intent: 'Define the category and connect it to a costly business problem.',
      examples: 'core category, department solution, industry solution, company-size solution',
      signal: 'qualified solution views and demo-assisted sessions',
    },
    {
      pageType: 'Feature and use case',
      intent: 'Show how a specific capability completes a real workflow.',
      examples: 'feature pages, workflow guides, role-based use cases, outcome pages',
      signal: 'feature engagement, activation, and sales acceptance',
    },
    {
      pageType: 'Integration and documentation',
      intent: 'Help technical evaluators confirm compatibility and implementation.',
      examples: 'integration pages, API guides, migration docs, security and governance',
      signal: 'technical validation and reduced pre-sales friction',
    },
    {
      pageType: 'Comparison and alternatives',
      intent: 'Support an informed shortlist with explicit, defensible criteria.',
      examples: 'brand versus brand, category alternatives, migration comparisons',
      signal: 'high-intent conversions and opportunity creation',
    },
    {
      pageType: 'Education and original assets',
      intent: 'Teach the market and earn references before the buyer is in a shortlist.',
      examples: 'benchmarks, templates, methods, research, glossaries, calculators',
      signal: 'assisted conversions, links, citations, and returning users',
    },
  ],
  processTitle: 'How do we build a SaaS organic growth system?',
  processLead:
    'The sequence creates a baseline before production begins, so the team can distinguish shipped work from measurable impact.',
  process: [
    {
      number: '01',
      cadence: 'Discovery',
      title: 'Align product, ICP, and revenue definitions',
      description:
        'We interview the people closest to product truth and customer objections, review analytics and search data, and document which conversions count as meaningful demand.',
      output: 'source-of-truth brief, KPI definitions, access map, and assumptions register',
    },
    {
      number: '02',
      cadence: 'Baseline',
      title: 'Audit technical access and search coverage',
      description:
        'We crawl the site, validate rendered pages, inspect indexation and templates, map existing queries, and compare the current page set with real competitors and answer surfaces.',
      output: 'technical backlog, content inventory, gap map, and measurement baseline',
    },
    {
      number: '03',
      cadence: 'Roadmap',
      title: 'Prioritize pages by impact and dependency',
      description:
        'High-intent fixes and existing-page opportunities usually come before net-new editorial scale. Engineering dependencies, expert review, and internal links are scheduled together.',
      output: '90-day roadmap, page briefs, owners, acceptance criteria, and release order',
    },
    {
      number: '04',
      cadence: 'Execution',
      title: 'Ship, validate, and connect the system',
      description:
        'Content, technical fixes, schema, and links are implemented with QA. Each page is checked in rendered HTML and connected to the next useful buyer action.',
      output: 'production releases, QA evidence, updated sitemaps, and conversion annotations',
    },
    {
      number: '05',
      cadence: 'Learning',
      title: 'Measure cohorts, not isolated keyword wins',
      description:
        'We evaluate topic and page cohorts against visibility, engagement, conversions, qualification, and AI-answer presence rather than celebrating a single ranking.',
      output: 'monthly decision memo, experiment results, refresh queue, and forecast changes',
    },
    {
      number: '06',
      cadence: 'Scale',
      title: 'Expand only after the pattern is proven',
      description:
        'Winning templates are extended to adjacent use cases, roles, industries, or integrations. Weak pages are consolidated, reframed, or removed before they create index bloat.',
      output: 'scaled page system, governance rules, and ongoing technical monitoring',
    },
  ],
  measurementTitle: 'How should SaaS SEO performance be measured?',
  measurementLead:
    'Search visibility is an input. The commercial model connects queries and landing pages to product behavior and pipeline while preserving the limits of attribution.',
  measurementBoundary:
    'Multi-touch journeys, dark social, privacy controls, sales follow-up, and long buying cycles make exact single-channel attribution unreliable. We report observed data, agreed attribution rules, and uncertainty instead of presenting an estimated pipeline number as fact.',
  measurement: [
    {
      name: 'Qualified visibility',
      definition: 'Impressions and rankings for approved ICP, use-case, integration, comparison, and category query groups.',
      source: 'Google Search Console, Bing Webmaster Tools, and a stable rank set',
    },
    {
      name: 'Product engagement',
      definition: 'Movement from organic landing pages into feature, documentation, integration, pricing, or signup routes.',
      source: 'analytics events and product analytics where available',
    },
    {
      name: 'Demand conversion',
      definition: 'Trials, demos, contact requests, and other conversion events segmented by landing page and intent cluster.',
      source: 'analytics, form systems, and server-side records',
    },
    {
      name: 'Pipeline quality',
      definition: 'Sales acceptance, opportunities, pipeline, and revenue influenced under a documented attribution rule.',
      source: 'CRM stages and finance-approved revenue fields',
    },
    {
      name: 'AI answer presence',
      definition: 'Brand mentions, linked citations, inclusion rate, answer accuracy, and competitor share across a versioned prompt set.',
      source: 'stored responses with model, date, prompt, location, and citation evidence',
    },
  ],
  evidence: {
    title: 'What proof will you be able to inspect?',
    lead:
      'We use screenshots and source-linked reporting to show what moved. The examples below demonstrate our ability to grow search visibility and earn inclusion in AI-answer datasets; they are not presented as a SaaS-specific case study.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Expressway.PH · organic traffic and keyword trend',
        description:
          'Add the Ahrefs two-year organic traffic and organic keyword trend with the current metric selected, visible date range, domain, and legend.',
      },
      {
        label: 'Expressway.PH · AI response visibility',
        description:
          'Add the Ahrefs AI responses panel showing AI Overviews, ChatGPT, platforms, response counts, page counts, and capture date.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right SaaS SEO agency for you?',
  fitLead:
    'The engagement works best when the agency can access product truth and the client can implement changes. We make that operating requirement explicit before a retainer begins.',
  goodFit: [
    'You have a working product and a defined customer profile',
    'Product, sales, support, or subject experts can review claims',
    'Engineering or CMS resources can implement prioritized fixes',
    'You will share conversion and qualification data under appropriate access controls',
  ],
  notFit: [
    'You need guaranteed rankings, citations, or pipeline by a fixed date.',
    'You want hundreds of unreviewed AI articles without product input.',
    'No one can implement technical or template changes.',
    'The product and audience are still changing every week with no stable positioning.',
  ],
  sources: [
    {
      label: 'Google Search Central: JavaScript SEO basics',
      url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics',
      description: 'Primary guidance used for rendering, crawl access, titles, canonical tags, and client-side routing.',
    },
    {
      label: 'Google Search Central: Software app structured data',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/software-app',
      description: 'Eligibility and required properties for software application rich-result markup.',
    },
    {
      label: 'OpenAI crawler documentation',
      url: 'https://platform.openai.com/docs/bots',
      description: 'Official distinctions between OpenAI user, search, and training crawlers and the relevant controls.',
    },
    {
      label: 'Bing Webmaster Guidelines',
      url: 'https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a',
      description: 'Primary Bing guidance on discovery, content, links, markup, and abusive practices.',
    },
  ],
  faqTitle: 'Questions SaaS teams ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What does a SaaS SEO agency do differently from a general SEO agency?',
      answer:
        'A SaaS specialist connects search demand to product capabilities, roles, use cases, integrations, comparisons, documentation, trials, demos, and pipeline. Technical work must also account for JavaScript marketing sites, application boundaries, documentation platforms, frequent releases, and long or product-led conversion journeys. The difference should be visible in the roadmap and measurement model, not just in industry wording.',
    },
    {
      question: 'How long does SaaS SEO take?',
      answer:
        'There is no honest universal timeline. Existing authority, technical health, market competition, publishing capacity, implementation speed, and the type of query all affect when movement appears. We establish a baseline, separate leading indicators from commercial outcomes, and forecast ranges only after the audit. Existing-page improvements may move before new clusters, while competitive category terms can require sustained work.',
    },
    {
      question: 'Do you optimize for ChatGPT, AI Overviews, Gemini, Claude, and Perplexity?',
      answer:
        'Yes. We improve crawlable answer passages, entity consistency, technical access, source quality, structured data where eligible, and third-party corroboration. We also monitor versioned prompts separately by platform. We do not claim that one tactic controls every model or guarantee a citation, because answer generation varies by retrieval source, prompt, model, location, and time.',
    },
    {
      question: 'Which SaaS pages should be prioritized first?',
      answer:
        'The priority usually comes from existing demand and business value: technical blockers, underperforming category and solution pages, feature and integration pages, high-intent comparisons, and content already earning impressions often precede broad top-of-funnel publishing. The audit determines where an incremental page or fix can influence a qualified user rather than merely add another URL.',
    },
    {
      question: 'Can you work with our existing content and product marketing teams?',
      answer:
        'Yes. We can own research, technical direction, briefs, editing, implementation QA, and measurement while product marketing or internal experts own final claims. We define who supplies product evidence, who approves language, who publishes, and who validates conversion tracking so work does not stall between teams.',
    },
    {
      question: 'How do you attribute trials and pipeline to SEO?',
      answer:
        'We combine landing-page and source data with product events and CRM stages where access permits. The reporting can include first-touch, last-touch, and influenced views, but the attribution rule is documented because none is a perfect representation of a multi-touch buying journey. We also report qualification and opportunity outcomes so a rise in low-fit trials is not mislabeled as success.',
    },
    {
      question: 'Do you create comparison and alternative pages?',
      answer:
        'Yes, when they help a real buyer make a decision. We use explicit comparison criteria, verify claims, state important limitations, and avoid made-up ratings or unfair competitor descriptions. A useful comparison page should help the wrong buyer rule your product out as confidently as it helps the right buyer proceed.',
    },
    {
      question: 'What does a SaaS SEO engagement cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Final scope depends on technical complexity, number of markets and templates, content ownership, implementation responsibility, and reporting integrations. The assessment defines the work and dependencies before a proposal is issued.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Rendering, indexation, architecture, migrations, and template QA.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Answer visibility, entity clarity, citations, and prompt-set monitoring.',
    },
    {
      href: '/services/content',
      label: 'SEO content systems',
      description: 'Research, briefs, expert input, production, and refresh governance.',
    },
    {
      href: '/services/analytics',
      label: 'SEO analytics',
      description: 'Search, conversion, product-event, and CRM measurement design.',
    },
  ],
  ctaEyebrow: 'Build qualified search demand',
  ctaTitle: 'Find the SaaS pages most likely to influence pipeline.',
  ctaLead:
    'Share your site, product category, priority market, and current measurement setup. We will identify the most important technical, content, and AI-search questions to answer first.',
  ctaBenefits: [
    'Initial technical and search-demand assessment',
    'Priority page and intent opportunities',
    'Google and AI-search measurement recommendations',
  ],
}

const ecommerce: IndustryLeadPageData = {
  slug: 'ecommerce',
  name: 'Ecommerce',
  serviceType: 'Ecommerce SEO and AI shopping discovery optimization',
  schemaAudience: 'Ecommerce founders, merchandising leaders, growth teams, and online retailers',
  metaTitle: 'SEO for Ecommerce Websites: The Playbook + Real Results | TheProjectSEO',
  metaDescription:
    'How SEO works for online stores: the systems that make categories, collections and products rank across Google, Bing and AI search, and the results ecommerce brands see when they run them.',
  eyebrow: 'SEO for online stores · Playbook and proven results',
  title: 'Ecommerce SEO Agency: the playbook behind',
  titleAccent: 'stores that rank and sell.',
  entityMentions: [
    { name: 'Search engine optimization', sameAs: ['https://www.wikidata.org/wiki/Q180711', 'https://en.wikipedia.org/wiki/Search_engine_optimization'] },
    { name: 'E-commerce', sameAs: ['https://www.wikidata.org/wiki/Q484847', 'https://en.wikipedia.org/wiki/E-commerce'] },
    { name: 'Google Search', sameAs: ['https://www.wikidata.org/wiki/Q9366', 'https://en.wikipedia.org/wiki/Google_Search'] },
    { name: 'Shopify', sameAs: ['https://www.wikidata.org/wiki/Q7501150', 'https://en.wikipedia.org/wiki/Shopify'] },
    { name: 'Keyword research', sameAs: ['https://www.wikidata.org/wiki/Q6398555', 'https://en.wikipedia.org/wiki/Keyword_research'] },
  ],
  directAnswer:
    'If you run an online store, SEO is a system, not a checklist. This is the playbook we use to make categories, collections, products, brands, and buying guides discoverable across Google, Bing, shopping surfaces, and AI-assisted product research, plus the results ecommerce brands see once the system is in place. It covers catalog architecture, product templates, structured product data, faceted navigation, internal links, editorial guidance, and merchant feeds, and it ties each to organic revenue, new customers, and margin-aware priorities rather than a bigger index for its own sake.',
  primaryCta: 'See the ecommerce SEO playbook',
  bestFit:
    'Stores with product-market fit, reliable catalog and revenue data, implementation support, and a need to grow non-paid discovery without sacrificing merchandising control.',
  heroChecks: [
    'Shopify, Shopify Plus, WooCommerce, Magento, headless, and custom commerce',
    'Category, collection, product, brand, filter, and editorial page systems',
    'Google Search, Merchant Center, Bing, AI Overviews, ChatGPT, and Perplexity',
    'Revenue and new-customer reporting segmented by landing-page cohort',
  ],
  journeyTitle: 'Where does ecommerce search demand convert?',
  journeyLead:
    'Shopping intent is not one keyword class. A buyer can discover a need, narrow a category, validate a product, and return through a branded query. Each stage needs a useful landing page and accurate product information.',
  searchJourneys: [
    {
      stage: 'Discover',
      intent: 'Explore a need or style',
      explanation:
        'The shopper starts with a problem, occasion, preference, or inspiration query. Editorial guidance can introduce the right category without forcing a premature product decision.',
      examples: ['what to wear for a monsoon wedding', 'best desk setup for small apartment'],
      conversion: 'category exploration, email signup, or assisted product view',
    },
    {
      stage: 'Narrow',
      intent: 'Choose a product category',
      explanation:
        'Attributes such as material, fit, compatibility, price, use case, and delivery constraint shape which collection or filter combination deserves an indexable page.',
      examples: ['waterproof trail shoes for wide feet', 'solid wood standing desk under 120 cm'],
      conversion: 'qualified collection visit or product-list engagement',
    },
    {
      stage: 'Validate',
      intent: 'Confirm the exact product',
      explanation:
        'The shopper checks specifications, variants, reviews, availability, shipping, returns, compatibility, and whether the seller is trustworthy.',
      examples: ['model name size guide', 'product name compatibility and reviews'],
      conversion: 'add to cart, store locator, or high-intent product event',
    },
    {
      stage: 'Compare',
      intent: 'Resolve the final trade-off',
      explanation:
        'The last search may compare products, brands, retailers, or an alternative material. Clear criteria and current facts reduce the need to leave the site.',
      examples: ['product x vs product y', 'best alternative to product x in India'],
      conversion: 'purchase, assisted conversion, or saved basket',
    },
  ],
  obstaclesTitle: 'Why do large catalogs lose organic revenue?',
  obstaclesLead:
    'Commerce sites create URLs faster than most teams can govern them. The result is often duplicated inventory, weak collection ownership, and crawler attention spent on pages that cannot satisfy a shopper.',
  obstacles: [
    {
      title: 'Facets create an uncontrolled URL universe',
      problem:
        'Size, color, brand, price, sort order, availability, tracking parameters, and internal search can generate many near-duplicate combinations with little independent demand.',
      response:
        'We inventory parameter behavior, query demand, crawl paths, canonical rules, internal links, and indexation. Valuable combinations become intentional landing pages; low-value combinations remain usable for shoppers without becoming index bloat.',
    },
    {
      title: 'Product detail pages repeat supplier copy',
      problem:
        'Manufacturer descriptions do not explain the retailer’s expertise, fit guidance, compatibility, shipping, service, bundles, or reasons a buyer should trust this specific offer.',
      response:
        'We define product-template fields and enrichment priorities around unique facts: specifications, expert guidance, media, verified reviews, availability, returns, FAQs, comparisons, and complementary products.',
    },
    {
      title: 'Collections compete instead of forming a hierarchy',
      problem:
        'Merchandising, navigation, search demand, and platform defaults can produce overlapping collections with unclear parent-child relationships and duplicate targeting.',
      response:
        'We map taxonomy to shopper language, assign canonical page ownership, improve breadcrumbs and contextual links, and decide which filters deserve static, optimized collections.',
    },
    {
      title: 'Revenue reporting hides margin and customer quality',
      problem:
        'A channel can show more revenue while over-indexing on discounts, existing customers, low-margin products, returns, or categories with availability problems.',
      response:
        'Where data permits, reporting separates new and returning customers, product margin, discounts, cancellations, returns, category cohorts, and assisted conversions rather than optimizing to gross revenue alone.',
    },
  ],
  deliverablesTitle: 'What does ecommerce SEO include?',
  deliverablesLead:
    'The engagement connects technical controls, catalog information, merchandising, content, feeds, and measurement. Recommendations are translated into template rules and tickets a commerce team can maintain.',
  deliverables: [
    {
      title: 'Catalog crawl and index audit',
      description:
        'A full review of how products, categories, parameters, pagination, search, and platform routes are discovered and indexed.',
      items: [
        'Status, canonical, robots, sitemap, and redirect review',
        'Faceted navigation and parameter decision table',
        'Pagination, infinite scroll, and product-grid validation',
        'Orphan, duplicate, thin, and discontinued URL handling',
      ],
    },
    {
      title: 'Taxonomy and category strategy',
      description:
        'A search-informed hierarchy that supports both browsing and landing-page ownership.',
      items: [
        'Category, subcategory, brand, and attribute demand map',
        'Indexable filter and static-collection recommendations',
        'Breadcrumb, navigation, and contextual-link design',
        'Cannibalization and naming rules for merchandising teams',
      ],
    },
    {
      title: 'Product template optimization',
      description:
        'Reusable page requirements for richer product understanding and conversion confidence.',
      items: [
        'Title, specification, variant, media, and FAQ fields',
        'Product, offer, shipping, return, and review markup review',
        'Out-of-stock, discontinued, replacement, and variant logic',
        'Image filenames, alt text, dimensions, and performance',
      ],
    },
    {
      title: 'Commercial content system',
      description:
        'Useful shopping guidance that connects discovery queries to a current, relevant assortment.',
      items: [
        'Collection introductions and decision support',
        'Buying guides, comparisons, sizing, and compatibility content',
        'Seasonal hubs with reusable URLs and planned lead time',
        'Expert, customer, and merchandising input workflow',
      ],
    },
    {
      title: 'Feed and search-surface alignment',
      description:
        'Consistency between visible pages, structured data, merchant feeds, inventory, price, and availability.',
      items: [
        'Google Merchant Center and free-listing diagnostics',
        'Price, availability, identifier, and variant consistency',
        'Landing-page and feed policy issue triage',
        'Bing and AI-shopping discovery readiness',
      ],
    },
    {
      title: 'Revenue measurement',
      description:
        'Landing-page and query cohorts connected to transactions and meaningful customer economics.',
      items: [
        'Search Console and ecommerce analytics integration',
        'New versus returning customer segmentation',
        'Category, product, and editorial landing cohorts',
        'Revenue, margin, return, and assisted-conversion views where available',
      ],
    },
  ],
  aiVisibility: {
    title: 'How does ecommerce SEO support AI shopping discovery?',
    lead:
      'AI answers need clear facts about products, categories, compatibility, availability, policies, and the retailer entity. Those facts still depend on accessible pages and consistent data across the site and relevant external sources.',
    platforms: ['Google', 'Google Shopping', 'Bing', 'AI Overviews', 'ChatGPT', 'Gemini', 'Perplexity'],
    boundary:
      'AI shopping experiences and retrieval sources change quickly. We can improve factual consistency, crawl access, product data, and source quality, but we cannot guarantee that a model recommends a product or preserves a current price in every answer.',
    workstreams: [
      {
        title: 'Product fact completeness',
        description:
          'Names, identifiers, variants, dimensions, materials, compatibility, price, availability, shipping, returns, and review provenance need explicit, current representation.',
        output: 'catalog field requirements and product-page enrichment rules',
      },
      {
        title: 'Page-feed consistency',
        description:
          'Visible details, structured data, merchant feeds, and checkout reality must agree. Mismatches reduce trust and can create search-surface eligibility problems.',
        output: 'consistency audit, issue queue, and monitoring checks',
      },
      {
        title: 'Decision-support passages',
        description:
          'Category and guide content should explain who a product suits, important trade-offs, comparison criteria, maintenance, sizing, and limitations with sources or expert input.',
        output: 'answer blocks, comparison tables, buyer FAQs, and review workflow',
      },
      {
        title: 'Retailer entity trust',
        description:
          'Policies, contact routes, locations, customer service, brand relationships, and third-party profiles help a system distinguish a real retailer from an interchangeable product page.',
        output: 'trust-content inventory, organization markup, and profile alignment',
      },
    ],
  },
  architectureTitle: 'Which ecommerce pages deserve organic visibility?',
  architectureLead:
    'Indexability is a business decision. A page should exist in search because it answers distinct demand with a useful assortment or factual product offer.',
  architecture: [
    {
      pageType: 'Category and collection',
      intent: 'Serve commercial category demand and help a shopper narrow the assortment.',
      examples: 'department, category, subcategory, brand, use case, curated collection',
      signal: 'product-list engagement, assisted revenue, and new customers',
    },
    {
      pageType: 'Product and variant',
      intent: 'Validate the exact item, offer, availability, and purchase conditions.',
      examples: 'product detail, valid variant, bundle, replacement, store availability',
      signal: 'add-to-cart, purchase, margin, and return behavior',
    },
    {
      pageType: 'Indexable attribute landing',
      intent: 'Answer a recurring filtered need with enough products and unique guidance.',
      examples: 'material, compatibility, fit, style, condition, or use-case collection',
      signal: 'qualified collection sessions and incremental non-brand demand',
    },
    {
      pageType: 'Buying and comparison guide',
      intent: 'Help the shopper make a defensible choice before selecting an item.',
      examples: 'best-for guides, product comparisons, sizing, care, compatibility',
      signal: 'assisted product views, links, citations, and returning users',
    },
    {
      pageType: 'Policy and trust',
      intent: 'Resolve purchase risk and explain the retailer’s real service.',
      examples: 'shipping, returns, warranty, authenticity, contact, store locations',
      signal: 'checkout completion and fewer pre-purchase support gaps',
    },
  ],
  processTitle: 'How do we improve ecommerce SEO without breaking the store?',
  processLead:
    'Commerce changes affect discovery, merchandising, inventory, feeds, analytics, and conversion. Work is staged with validation before broad template release.',
  process: [
    {
      number: '01',
      cadence: 'Discovery',
      title: 'Align catalog, customer, and commercial priorities',
      description:
        'We review revenue distribution, margin where available, seasonality, inventory behavior, markets, new-customer goals, merchandising ownership, and the technical platform.',
      output: 'commercial priorities, access map, seasonal constraints, and KPI definitions',
    },
    {
      number: '02',
      cadence: 'Baseline',
      title: 'Crawl the URL and product-data system',
      description:
        'We inspect templates, parameters, internal search, navigation, sitemaps, structured data, feeds, rendering, performance, and current query-to-page ownership.',
      output: 'catalog index map, technical defects, template gaps, and measurement baseline',
    },
    {
      number: '03',
      cadence: 'Design',
      title: 'Define taxonomy and template rules',
      description:
        'Category ownership, filter indexation, product fields, discontinued-product behavior, internal links, and editorial patterns become documented operating rules.',
      output: 'decision tables, specifications, wireframes, and implementation tickets',
    },
    {
      number: '04',
      cadence: 'Pilot',
      title: 'Test a controlled product and category cohort',
      description:
        'We implement a representative set first, validate rendered HTML and feed consistency, monitor conversion behavior, and correct problems before scaling.',
      output: 'pilot release, QA evidence, cohort dashboard, and revision log',
    },
    {
      number: '05',
      cadence: 'Scale',
      title: 'Roll improvements across the catalog',
      description:
        'Approved rules are deployed through templates, catalog operations, feeds, and editorial workflows with automated checks for new and changed inventory.',
      output: 'scaled templates, catalog workflows, monitoring, and training',
    },
    {
      number: '06',
      cadence: 'Iterate',
      title: 'Refresh around demand, stock, and commercial outcome',
      description:
        'Queries, assortment, rankings, revenue, new customers, margin signals, returns, and AI-answer presence inform the next technical and content decisions.',
      output: 'monthly decisions, seasonal roadmap, refresh queue, and index cleanup',
    },
  ],
  measurementTitle: 'What should an ecommerce SEO report show?',
  measurementLead:
    'A useful report explains which landing-page systems create discoverability, qualified product exploration, and commercially healthy orders.',
  measurementBoundary:
    'Revenue can move because of stock, price, promotion, merchandising, brand demand, seasonality, site speed, or channel mix. We annotate major changes and compare cohorts; we do not automatically attribute every order increase to SEO.',
  measurement: [
    {
      name: 'Index quality',
      definition: 'Valid indexed categories and products relative to intended inventory, plus duplicate and low-value URL control.',
      source: 'crawl data, Search Console indexing reports, sitemaps, and log data where available',
    },
    {
      name: 'Commercial visibility',
      definition: 'Impressions, clicks, rankings, and rich-result eligibility for category, product, brand, and attribute cohorts.',
      source: 'Search Console, Merchant Center, Bing, and a stable rank set',
    },
    {
      name: 'Shopping behavior',
      definition: 'Product-list views, product views, search refinement, add-to-cart, checkout, and purchase by organic landing cohort.',
      source: 'ecommerce analytics and consented event data',
    },
    {
      name: 'Customer economics',
      definition: 'Revenue, new customers, discounts, margin, cancellations, and returns where the commerce data model exposes them.',
      source: 'commerce platform, analytics, order system, and finance-approved fields',
    },
    {
      name: 'AI discovery',
      definition: 'Brand and product inclusion, linked citations, factual accuracy, and competitor presence for stable shopping prompts.',
      source: 'stored responses with prompt, date, model, market, and linked evidence',
    },
  ],
  evidence: {
    title: 'What ecommerce proof belongs on this page?',
    lead:
      'The final version will pair commercial reporting with technical evidence. Until approved ecommerce screenshots are supplied, these labeled spaces remain empty rather than being filled with a fictional retailer case study.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Ecommerce · organic revenue and non-brand trend',
        description:
          'Add an approved analytics view showing organic revenue, non-brand visibility, date range, comparison period, and material campaign or tracking changes.',
      },
      {
        label: 'Ecommerce · category or product cohort evidence',
        description:
          'Add a Search Console or reporting view for an implemented cohort, including URLs, query class, clicks, impressions, and deployment annotation.',
      },
    ],
  },
  fitTitle: 'Is your store ready for an ecommerce SEO engagement?',
  fitLead:
    'The work creates the most value when catalog operations, development, merchandising, and analytics can act as one system.',
  goodFit: [
    'The store has product-market fit and reliable inventory operations',
    'A developer or platform partner can implement template changes',
    'Merchandising can approve taxonomy and catalog-field requirements',
    'Transaction and product data can be segmented under appropriate controls',
  ],
  notFit: [
    'You need a guaranteed revenue number or ranking by a fixed date.',
    'The store cannot change templates, navigation, product fields, or feeds.',
    'Most products are unavailable and catalog data is not maintained.',
    'The only requested tactic is mass-generated product copy with no unique facts.',
  ],
  sources: [
    {
      label: 'Google Search Central: Ecommerce site structure',
      url: 'https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure',
      description: 'Primary guidance on navigation, links, page importance, categories, and products.',
    },
    {
      label: 'Google Search Central: Product structured data',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/product',
      description: 'Eligibility and data guidance for product snippets and merchant listing experiences.',
    },
    {
      label: 'Google Search Central: Faceted navigation',
      url: 'https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation',
      description: 'Primary technical guidance for managing filtered URL spaces and crawl behavior.',
    },
    {
      label: 'Google Merchant Center product data specification',
      url: 'https://support.google.com/merchants/answer/7052112',
      description: 'Official product attribute definitions used when reviewing page and feed consistency.',
    },
  ],
  faqTitle: 'Questions ecommerce teams ask before hiring an SEO agency',
  faqs: [
    {
      question: 'How is ecommerce SEO different from regular SEO?',
      answer:
        'Ecommerce SEO must govern a changing catalog, category hierarchy, product variants, filters, pagination, internal search, availability, discontinued items, structured product data, merchant feeds, reviews, images, and transaction tracking. The work affects merchandising and conversion as well as crawl and content, so template and operational rules matter more than one-off page edits.',
    },
    {
      question: 'Should every product filter be indexed?',
      answer:
        'No. A filter combination should be indexable only when it represents distinct, recurring demand and can offer a useful, stable assortment with a clear landing experience. Many sort orders, price combinations, session parameters, or zero-result states should remain usable for shoppers without being search landing pages. The decision is based on demand, inventory, uniqueness, crawl impact, and maintenance.',
    },
    {
      question: 'Do you optimize Shopify and Shopify Plus stores?',
      answer:
        'Yes. The scope can include collection and product templates, canonical behavior, faceted URLs, internal links, structured data, sitemaps, redirects, international storefronts, performance, and app-generated output. We also work with WooCommerce, Magento, headless commerce, and custom platforms, adapting implementation tickets to the actual stack.',
    },
    {
      question: 'Can AI write all of our product descriptions?',
      answer:
        'AI can assist with transforming approved catalog facts into a consistent draft, but it cannot invent materials, specifications, compatibility, claims, policies, or first-hand experience. Scalable product content requires reliable source fields, rules by product type, review, exception handling, and quality sampling. Unique evidence and accurate data matter more than automated word volume.',
    },
    {
      question: 'How do you measure ecommerce SEO ROI?',
      answer:
        'We connect organic landing cohorts to product-list and product views, add-to-cart, checkout, transactions, revenue, and new customers. When data allows, we also examine margin, discounts, cancellations, returns, and assisted conversions. Changes in price, stock, promotion, seasonality, tracking, and brand demand are annotated so correlation is not presented as causal proof.',
    },
    {
      question: 'What happens to discontinued products?',
      answer:
        'The correct response depends on whether the product will return, has demand or links, has a direct replacement, belongs in an archive, or has no continuing value. Options include keeping an informative unavailable page, linking to a replacement, redirecting to a close equivalent, or returning an appropriate status. Blanket redirects to a category or home page are not a universal solution.',
    },
    {
      question: 'Do you optimize for Google Shopping and AI shopping answers?',
      answer:
        'We review product pages, structured data, Merchant Center feeds, identifiers, variants, price, availability, shipping, returns, crawl access, and retailer trust content. We also monitor stable prompts where useful. We cannot guarantee a free listing, rich result, or AI recommendation because each surface has eligibility, policy, retrieval, and ranking systems outside an agency’s control.',
    },
    {
      question: 'What does ecommerce SEO cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on catalog size, platform complexity, markets, templates, feed issues, content ownership, implementation responsibility, and analytics maturity. A store with a small stable catalog has different needs from a multi-market catalog with millions of generated URLs.',
    },
  ],
  relatedLinks: [
    {
      href: '/seo-for-shopify',
      label: 'Shopify SEO',
      description: 'A dedicated view of Shopify architecture, collections, products, and growth.',
    },
    {
      href: '/services/ecommerce-seo',
      label: 'Ecommerce SEO service',
      description: 'The core service scope across platforms, templates, content, and reporting.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Crawl control, faceted navigation, migrations, rendering, and performance.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Entity clarity, answer passages, citation tracking, and discovery monitoring.',
    },
  ],
  ctaEyebrow: 'Grow discoverable revenue',
  ctaTitle: 'Find where your catalog is losing qualified organic demand.',
  ctaLead:
    'Share your platform, catalog size, priority categories, markets, and current reporting. We will identify the highest-impact technical, category, product, and AI-discovery questions.',
  ctaBenefits: [
    'Catalog crawl and index-quality assessment',
    'Category, product, and template opportunity map',
    'Revenue and AI-discovery measurement recommendations',
  ],
}

const finance: IndustryLeadPageData = {
  slug: 'finance',
  name: 'Financial services',
  serviceType: 'Financial services SEO and AI search optimization',
  schemaAudience: 'Financial services, fintech, tax, accounting, lending, insurance, and investment marketing teams',
  metaTitle: 'Financial Services SEO Agency for Trust & Leads | TheProjectSEO',
  metaDescription:
    'SEO for financial services, fintech and tax brands across Google and AI search. See the compliance-aware content, technical, entity and qualified-lead framework.',
  eyebrow: 'Financial services SEO agency · Trust before traffic',
  title: 'Finance SEO Agency: earn visibility where financial decisions',
  titleAccent: 'need evidence.',
  entityMentions: [
    { name: 'Search engine optimization', sameAs: ['https://www.wikidata.org/wiki/Q180711', 'https://en.wikipedia.org/wiki/Search_engine_optimization'] },
    { name: 'Financial services', sameAs: ['https://www.wikidata.org/wiki/Q837171', 'https://en.wikipedia.org/wiki/Financial_services'] },
    { name: 'Google', sameAs: ['https://www.wikidata.org/wiki/Q95', 'https://en.wikipedia.org/wiki/Google'] },
    { name: 'Financial technology', sameAs: ['https://www.wikidata.org/wiki/Q16319025', 'https://en.wikipedia.org/wiki/Financial_technology'] },
    { name: 'Link building', sameAs: ['https://www.wikidata.org/wiki/Q1569371', 'https://en.wikipedia.org/wiki/Link_building'] },
  ],
  directAnswer:
    'TheProjectSEO helps financial services, fintech, tax, accounting, lending, insurance, and investment brands build discoverability without separating growth from trust. We combine technical SEO, intent-led service and product pages, expert-reviewed education, transparent authorship, structured entities, digital authority, and AI-answer monitoring. Claims, rates, eligibility, tax rules, and regulated language remain subject to client compliance review; our role is to make approved expertise findable, understandable, and measurable.',
  primaryCta: 'Request a financial SEO assessment',
  bestFit:
    'Finance teams with named subject experts, a real compliance or legal review path, clear product eligibility, and access to qualified-lead or application outcomes.',
  heroChecks: [
    'Fintech, tax, accounting, payments, lending, insurance, and investment education',
    'Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity',
    'Explicit authorship, reviewed claims, dates, sources, and change control',
    'Reporting beyond traffic: eligibility, applications, qualified leads, and funded or completed outcomes',
  ],
  journeyTitle: 'How do people search before a financial decision?',
  journeyLead:
    'Financial queries combine information need, personal circumstances, product eligibility, cost, risk, and trust. A strong architecture helps users understand the subject before asking them to convert.',
  searchJourneys: [
    {
      stage: 'Understand',
      intent: 'Learn the rule or concept',
      explanation:
        'The user may be clarifying a tax term, payment process, insurance concept, fee, or financial calculation. The answer needs definitions, scope, date, source, and exceptions.',
      examples: ['how capital gains tax works in India', 'what is an insurance deductible'],
      conversion: 'calculator use, guide progression, or relevant service exploration',
    },
    {
      stage: 'Assess',
      intent: 'Determine personal or business fit',
      explanation:
        'The search moves from general education to eligibility, thresholds, documentation, timelines, or whether a product fits a specific situation.',
      examples: ['business loan eligibility for new company', 'tax filing requirements for freelancer'],
      conversion: 'eligibility check, calculator completion, or qualified content path',
    },
    {
      stage: 'Compare',
      intent: 'Evaluate providers and products',
      explanation:
        'The user compares cost, risk, features, exclusions, service, security, and consequences. Fair criteria and current disclosures matter more than promotional adjectives.',
      examples: ['best accounting software for small business India', 'term insurance comparison'],
      conversion: 'product detail, consultation, or application start',
    },
    {
      stage: 'Act',
      intent: 'Complete a high-stakes task',
      explanation:
        'The user is ready to apply, file, transfer, insure, invest, or speak with an expert and needs exact requirements plus a credible route to completion.',
      examples: ['file income tax return online', 'apply for business account Philippines'],
      conversion: 'qualified lead, completed application, appointment, or transaction',
    },
  ],
  obstaclesTitle: 'Why does financial SEO fail even when content is accurate?',
  obstaclesLead:
    'Accuracy is necessary but not enough. The page also needs ownership, context, freshness, discoverability, technical integrity, and a conversion route appropriate to the user’s risk.',
  obstacles: [
    {
      title: 'Approved claims lose their conditions',
      problem:
        'Rates, fees, returns, tax guidance, eligibility, and product benefits can become misleading when dates, markets, assumptions, exclusions, or approval language are separated from the claim.',
      response:
        'We design reusable claim and disclosure patterns, source fields, effective dates, expert ownership, and review checkpoints. Compliance approval remains with the client’s qualified team.',
    },
    {
      title: 'Educational pages and products are disconnected',
      problem:
        'A user can learn for twenty minutes and still have no clear, non-coercive route to an eligible product, calculator, advisor, or next step.',
      response:
        'We map education, calculators, product pages, eligibility, documentation, and application routes by intent, adding contextual links that help rather than forcing every visitor into the same CTA.',
    },
    {
      title: 'Templates create outdated or duplicate advice',
      problem:
        'Rates, annual rules, city pages, product variants, and programmatic calculators can multiply stale pages or produce conflicting answers after a policy change.',
      response:
        'We establish canonical ownership, shared data sources, last-reviewed fields, expiry and update workflows, redirect rules, and monitoring for facts that change.',
    },
    {
      title: 'Lead volume is confused with qualified demand',
      problem:
        'Financial products often have eligibility, geography, risk, documentation, and affordability constraints. More form submissions can increase operational cost without creating approved customers.',
      response:
        'The measurement model follows lead eligibility, document completion, application progress, approval or completion, and product outcome where lawful and appropriate—not raw forms alone.',
    },
  ],
  deliverablesTitle: 'What does financial services SEO include?',
  deliverablesLead:
    'The scope pairs search growth with content governance. Every recommendation identifies the required source, reviewer, date, market, and technical owner when those controls matter.',
  deliverables: [
    {
      title: 'Technical and index audit',
      description:
        'A review of crawl access, rendering, page ownership, security-sensitive boundaries, calculators, parameters, and changing financial content.',
      items: [
        'Indexation, canonical, sitemap, redirect, and robots diagnostics',
        'Calculator output, JavaScript rendering, and internal-link checks',
        'Duplicate market, product, rate, and annual-page analysis',
        'Structured data eligibility and template QA',
      ],
    },
    {
      title: 'Financial intent model',
      description:
        'Research organized around learning, eligibility, comparison, transaction, and support—not volume alone.',
      items: [
        'Product, service, problem, and audience query clusters',
        'Eligibility, fee, rate, document, and risk modifiers',
        'Competitor and answer-surface analysis',
        'Query-to-page ownership and conversion mapping',
      ],
    },
    {
      title: 'Expert-reviewed content',
      description:
        'A production workflow that makes real subject expertise visible and keeps time-sensitive facts reviewable.',
      items: [
        'Author, reviewer, credentials, scope, and reviewed-date fields',
        'Primary-source research and citation requirements',
        'Claim, example, calculator, and disclosure patterns',
        'Change log and update queue for time-sensitive topics',
      ],
    },
    {
      title: 'Product and service optimization',
      description:
        'Commercial pages that explain suitability, requirements, cost, process, evidence, limitations, and next steps.',
      items: [
        'Product, service, eligibility, and documentation pages',
        'Comparison criteria and transparent methodology',
        'Local and market-specific content only where operationally real',
        'Conversion paths aligned to user readiness and risk',
      ],
    },
    {
      title: 'Entity and authority development',
      description:
        'Consistent representation of the company, experts, products, licenses or registrations, and independent references.',
      items: [
        'Organization, person, service, article, and FAQ markup where eligible',
        'Expert profile and authorship connections',
        'Digital PR, original data, and reference-worthy tools',
        'Third-party profile and factual consistency audit',
      ],
    },
    {
      title: 'Qualified-outcome analytics',
      description:
        'Measurement that respects privacy and follows the commercial funnel past the first form event.',
      items: [
        'Search and landing-page cohort reporting',
        'Eligibility and qualified-lead stage definitions',
        'Application or appointment funnel mapping',
        'AI answer presence and factual-accuracy monitoring',
      ],
    },
  ],
  aiVisibility: {
    title: 'How should a finance brand appear in AI answers?',
    lead:
      'Financial answers should be attributable, current, scoped to the right market, and explicit about assumptions. We structure approved knowledge so retrieval systems can find the answer and a user can inspect the source.',
    platforms: ['Google', 'Bing', 'AI Overviews', 'ChatGPT', 'Gemini', 'Claude', 'Perplexity'],
    boundary:
      'AI-generated financial answers can be incomplete or wrong. We do not position AI visibility as professional advice, guarantee a citation, or hide uncertainty. High-stakes decisions should direct users to current primary sources and qualified professionals.',
    workstreams: [
      {
        title: 'Source-backed answer units',
        description:
          'Definitions, thresholds, calculations, examples, and product claims include jurisdiction, effective date, assumptions, source, reviewer, and relevant exceptions.',
        output: 'claim inventory, answer templates, citations, and review status',
      },
      {
        title: 'Expert and organization entities',
        description:
          'Authors, reviewers, credentials, company identity, products, and official registrations are connected consistently on the site and appropriate external profiles.',
        output: 'entity graph, expert profiles, schema, and factual alignment',
      },
      {
        title: 'Freshness and contradiction control',
        description:
          'Time-sensitive information is connected to a source and update owner so outdated annual guides, rates, and calculator explanations do not conflict.',
        output: 'freshness tiers, expiry rules, monitoring, and update queue',
      },
      {
        title: 'Answer accuracy monitoring',
        description:
          'Stable prompt sets track whether the brand is cited and whether systems state rates, eligibility, process, location, and limitations accurately.',
        output: 'response archive, citation share, error log, and correction priorities',
      },
    ],
  },
  architectureTitle: 'Which financial pages build trust and qualified leads?',
  architectureLead:
    'The architecture should let a user move from understanding to action without blurring education, product promotion, and professional advice.',
  architecture: [
    {
      pageType: 'Product and service',
      intent: 'Explain the offer, eligibility, cost, risk, process, documents, and next step.',
      examples: 'account, loan, insurance, payment, tax, accounting, or advisory service',
      signal: 'eligible leads, applications, appointments, and completed outcomes',
    },
    {
      pageType: 'Eligibility and process',
      intent: 'Help a user determine fit and prepare before starting a regulated or document-heavy task.',
      examples: 'requirements, eligibility, documents, timelines, application or filing steps',
      signal: 'qualified starts and reduced incomplete submissions',
    },
    {
      pageType: 'Calculator and methodology',
      intent: 'Support a transparent estimate with assumptions, formulas, scope, and limitations.',
      examples: 'tax, loan, savings, fee, premium, or return calculator',
      signal: 'completed calculations, assisted conversions, links, and citations',
    },
    {
      pageType: 'Education and glossary',
      intent: 'Explain concepts with current sources, examples, reviewer ownership, and relevant context.',
      examples: 'guides, definitions, annual rule updates, market explainers',
      signal: 'qualified progression, returning users, citations, and branded demand',
    },
    {
      pageType: 'Trust and governance',
      intent: 'Show who is responsible, how information is reviewed, and where the service operates.',
      examples: 'expert profiles, editorial policy, methodology, registrations, complaints, contact',
      signal: 'brand validation and lower decision friction',
    },
  ],
  processTitle: 'How is compliance-aware financial SEO delivered?',
  processLead:
    'SEO does not replace legal, regulatory, tax, investment, or compliance advice. The operating model creates a traceable path from source to reviewer to published claim.',
  process: [
    {
      number: '01',
      cadence: 'Governance',
      title: 'Define markets, products, reviewers, and claims',
      description:
        'We document where the service operates, who is qualified to review each topic, which statements require approval, and what data can enter analytics or content systems.',
      output: 'scope, responsibility matrix, claim classes, and data-handling boundaries',
    },
    {
      number: '02',
      cadence: 'Baseline',
      title: 'Audit search, content, entities, and technical access',
      description:
        'The review covers indexed pages, templates, authorship, dates, sources, competing answers, product paths, calculators, schema, links, and current performance.',
      output: 'risk register, technical backlog, content inventory, and visibility baseline',
    },
    {
      number: '03',
      cadence: 'Plan',
      title: 'Prioritize by user risk and commercial value',
      description:
        'Outdated high-traffic advice and critical product pages are handled before low-value expansion. Every page receives a source, reviewer, conversion role, and refresh expectation.',
      output: '90-day roadmap, page briefs, source requirements, and approval checkpoints',
    },
    {
      number: '04',
      cadence: 'Produce',
      title: 'Create and review attributable content',
      description:
        'Writers and strategists work from primary sources and expert interviews. Claims and examples are reviewed, dated, and published with appropriate context and links.',
      output: 'approved pages, author/reviewer records, schema, links, and QA evidence',
    },
    {
      number: '05',
      cadence: 'Measure',
      title: 'Connect search visibility to qualified outcomes',
      description:
        'We segment demand and landing pages, monitor user progression, and follow leads or applications to agreed stages without collecting unnecessary sensitive data.',
      output: 'cohort dashboard, qualification view, AI-answer checks, and decision memo',
    },
    {
      number: '06',
      cadence: 'Maintain',
      title: 'Monitor changes and retire stale answers',
      description:
        'Scheduled reviews, source changes, product changes, and performance signals create update tasks. Contradictory, expired, or unsupported pages are corrected, merged, redirected, or removed.',
      output: 'freshness calendar, alert workflow, revision history, and governance report',
    },
  ],
  measurementTitle: 'How do we separate finance traffic from financial outcomes?',
  measurementLead:
    'The report follows a user from eligible search demand to a meaningful stage while minimizing sensitive-data exposure.',
  measurementBoundary:
    'Access and event design must follow the client’s legal, privacy, security, and compliance requirements. TheProjectSEO does not need account balances, health data, identity documents, or other sensitive application fields to report organic acquisition.',
  measurement: [
    {
      name: 'Approved demand',
      definition: 'Impressions and clicks for query groups that match permitted products, markets, audiences, and educational scope.',
      source: 'Search Console, Bing Webmaster Tools, and approved rank tracking',
    },
    {
      name: 'Trust engagement',
      definition: 'Use of methodology, author, source, fee, eligibility, risk, policy, and documentation content before conversion.',
      source: 'privacy-reviewed analytics events',
    },
    {
      name: 'Qualified lead',
      definition: 'A contact or application meeting agreed non-sensitive eligibility and market criteria.',
      source: 'CRM or application stage fields approved for marketing reporting',
    },
    {
      name: 'Completed outcome',
      definition: 'Appointment, filed return, approved application, activated account, funded product, or another business-defined completion.',
      source: 'aggregated downstream stage data under client controls',
    },
    {
      name: 'AI answer quality',
      definition: 'Linked citations, brand presence, factual accuracy, date and jurisdiction correctness, and competitor inclusion.',
      source: 'stored prompt responses with capture context and manual fact checks',
    },
  ],
  evidence: {
    title: 'What verified financial-search proof do we have?',
    lead:
      'TaxCalculator.com.ph is an early project showing measurable Google visibility after launching in June 2026. We will add the owner-approved Search Console trend here; we will not convert a short observation window into a guaranteed growth forecast.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'TaxCalculator.com.ph · Google Search Console performance',
        description:
          'Add the approved three-month GSC view showing 32,300 impressions, 335 clicks, the exact date range, query or page context, and launch annotation.',
      },
      {
        label: 'TaxCalculator.com.ph · organic visibility trend',
        description:
          'Add an approved Ahrefs or Search Console trend with the active metric, current keyword count, country database, date range, and capture date.',
      },
    ],
  },
  fitTitle: 'Is your financial organization ready for SEO?',
  fitLead:
    'Growth depends on access to approved expertise and a real review path. We will not publish high-stakes financial claims that no qualified person owns.',
  goodFit: [
    'A qualified internal expert or compliance reviewer can approve content',
    'Products, markets, eligibility, and prohibited claims are documented',
    'Technical and content changes can be implemented',
    'Qualified lead or application stages can be reported without exposing sensitive fields',
  ],
  notFit: [
    'You want guaranteed rankings, AI citations, applications, or approvals.',
    'You expect the agency to provide legal, tax, investment, or compliance approval.',
    'There is no owner for rates, rules, eligibility, disclosures, or annual updates.',
    'The requested strategy relies on fake experts, fabricated reviews, or unsupported return claims.',
  ],
  sources: [
    {
      label: 'Google Search Central: Creating helpful, reliable, people-first content',
      url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
      description: 'Primary Google guidance on sourcing, expertise, authorship, purpose, and content quality.',
    },
    {
      label: 'Google Search Central: Article structured data',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/article',
      description: 'Primary markup guidance for article authorship, dates, headlines, and images.',
    },
    {
      label: 'OpenAI crawler documentation',
      url: 'https://platform.openai.com/docs/bots',
      description: 'Official controls and distinctions for OpenAI search, user, and training crawlers.',
    },
    {
      label: 'Schema.org FinancialService',
      url: 'https://schema.org/FinancialService',
      description: 'Vocabulary reference for describing a financial service entity; use does not create a rich-result guarantee.',
    },
  ],
  faqTitle: 'Questions finance teams ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What is financial services SEO?',
      answer:
        'Financial services SEO is the work of making approved financial products, services, education, experts, tools, and trust information discoverable and useful in search. It combines technical access, intent research, content governance, authorship, source quality, entity clarity, links, conversion design, and qualified-outcome measurement. It does not replace compliance, legal, tax, or investment review.',
    },
    {
      question: 'How do you handle YMYL financial content?',
      answer:
        'We define who can author or review each subject, use primary sources where possible, include dates, markets, assumptions, examples, and limitations, and maintain an update workflow for changing facts. The client’s qualified legal or compliance team retains approval responsibility. We avoid invented expertise, unsupported promises, and content that obscures commercial intent.',
    },
    {
      question: 'Can you guarantee rankings or inclusion in AI answers?',
      answer:
        'No. Search rankings and generated answers depend on systems outside an agency’s control, and they change by query, model, location, time, and competition. We can improve technical eligibility, content quality, sourcing, entity consistency, and external corroboration, then measure observed movement. A guarantee would misrepresent that uncertainty.',
    },
    {
      question: 'Do you work with fintech and tax websites?',
      answer:
        'Yes. The framework applies to fintech, tax, accounting, payments, lending, insurance, and investment education, but the exact scope depends on market and product. TaxCalculator.com.ph is an owner-supplied example of an early-stage search project. Its current results are reported as point-in-time observations, not as a promise for another domain.',
    },
    {
      question: 'How do you keep financial content current?',
      answer:
        'Time-sensitive pages receive a source, responsible reviewer, effective date, review frequency, and trigger conditions. Annual pages, rate information, product eligibility, calculators, and policy guides can be monitored separately. When facts change, shared data and canonical ownership help prevent conflicting versions from remaining indexed.',
    },
    {
      question: 'How is financial SEO performance measured?',
      answer:
        'We begin with approved query groups and landing-page cohorts, then follow privacy-reviewed events into eligibility, qualified leads, applications, appointments, or completed outcomes as the client’s systems allow. Traffic, rankings, and AI mentions remain leading indicators; they are not substituted for approved customers or completed services.',
    },
    {
      question: 'Do you need access to sensitive customer data?',
      answer:
        'No. Organic acquisition reporting can normally use aggregated stage outcomes and non-sensitive identifiers or campaign fields. Data access and event collection must follow the client’s privacy, security, legal, and compliance controls. We do not need identity documents, balances, medical details, or full application records to evaluate landing-page performance.',
    },
    {
      question: 'What does financial services SEO cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Cost depends on the number of products and markets, technical complexity, content and expert-review ownership, compliance workflow, implementation responsibility, and analytics integrations. The assessment defines required controls before scope is priced.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/seo-audit',
      label: 'SEO audit',
      description: 'Technical, content, entity, internal-link, and measurement diagnosis.',
    },
    {
      href: '/services/content',
      label: 'SEO content systems',
      description: 'Source-backed briefs, expert workflows, production, and freshness control.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Answer passages, entity consistency, citation checks, and prompt monitoring.',
    },
    {
      href: '/services/analytics',
      label: 'SEO analytics',
      description: 'Qualified demand, application stages, and privacy-conscious reporting.',
    },
  ],
  ctaEyebrow: 'Make approved expertise discoverable',
  ctaTitle: 'Find the trust and search gaps in your financial journey.',
  ctaLead:
    'Share your market, product, review process, site, and the outcomes you can measure. We will identify the highest-risk and highest-value technical, content, and AI-answer priorities.',
  ctaBenefits: [
    'Technical, content, and trust-control assessment',
    'Priority intent and page-system opportunities',
    'Qualified-lead and AI-answer measurement recommendations',
  ],
}

const healthcare: IndustryLeadPageData = {
  slug: 'healthcare',
  name: 'Healthcare',
  serviceType: 'Healthcare SEO and AI search optimization',
  schemaAudience: 'Healthcare providers, clinics, health platforms, medical groups, and patient acquisition teams',
  metaTitle: 'Healthcare SEO Agency for Patient Discovery | TheProjectSEO',
  metaDescription:
    'Healthcare SEO for providers, treatments, locations and trusted education across Google and AI search. See the medical review, local, technical and lead framework.',
  eyebrow: 'Healthcare SEO agency · Patient discovery with safeguards',
  title: 'Healthcare SEO Agency: help the right patients find',
  titleAccent: 'credible care information.',
  entityMentions: [
    { name: 'Google Search', sameAs: ['https://www.wikidata.org/wiki/Q9366', 'https://en.wikipedia.org/wiki/Google_Search'] },
    { name: 'Search engine optimization', sameAs: ['https://www.wikidata.org/wiki/Q180711', 'https://en.wikipedia.org/wiki/Search_engine_optimization'] },
    { name: 'Health care', sameAs: ['https://www.wikidata.org/wiki/Q31207', 'https://en.wikipedia.org/wiki/Health_care'] },
    { name: 'Link building', sameAs: ['https://www.wikidata.org/wiki/Q1569371', 'https://en.wikipedia.org/wiki/Link_building'] },
    { name: 'Local search (Internet)', sameAs: ['https://www.wikidata.org/wiki/Q616553', 'https://en.wikipedia.org/wiki/Local_search_(Internet)'] },
  ],
  directAnswer:
    'TheProjectSEO helps healthcare providers, clinics, medical groups, and health platforms improve discovery across Google, local search, Bing, AI Overviews, ChatGPT, Gemini, and Perplexity. The work connects provider, treatment, condition, location, and patient-education pages with technical access, medical review, explicit authorship, structured entities, local profiles, and privacy-conscious measurement. Clinical claims and patient guidance remain owned and approved by qualified healthcare professionals.',
  primaryCta: 'Request a healthcare SEO assessment',
  bestFit:
    'Healthcare organizations with qualified clinical reviewers, real providers and locations, implementation support, and a patient journey that can be measured without exposing protected or sensitive information.',
  heroChecks: [
    'Clinics, provider groups, hospitals, specialty practices, and health platforms',
    'Treatment, condition, provider, location, insurance, and patient-education discovery',
    'Google Search, Maps, Bing, AI Overviews, ChatGPT, Gemini, and Perplexity',
    'Medical review, source visibility, update ownership, and privacy-aware analytics',
  ],
  journeyTitle: 'How does a patient search before choosing care?',
  journeyLead:
    'A healthcare search can move from symptoms to conditions, treatment options, provider validation, location, insurance, and appointment logistics. The content must support informed next steps without diagnosing an individual.',
  searchJourneys: [
    {
      stage: 'Understand',
      intent: 'Learn about a symptom or condition',
      explanation:
        'The user may be anxious, uncertain, or researching for someone else. Clear scope, warning signs, sources, reviewer identity, and when to seek urgent help are essential.',
      examples: ['what causes persistent knee pain', 'when is a fever an emergency'],
      conversion: 'relevant education, emergency guidance, or appropriate care pathway',
    },
    {
      stage: 'Explore',
      intent: 'Compare treatment approaches',
      explanation:
        'The user evaluates available treatments, risks, recovery, candidacy, alternatives, and questions to ask a clinician before making an appointment.',
      examples: ['physical therapy vs surgery for knee pain', 'treatment options for sleep apnea'],
      conversion: 'treatment detail, provider exploration, or appointment readiness',
    },
    {
      stage: 'Validate',
      intent: 'Choose a provider or facility',
      explanation:
        'Credentials, specialty, experience, location, availability, language, insurance, accessibility, and the real care process help the patient assess fit.',
      examples: ['cardiologist in Manila accepting insurance x', 'orthopedic clinic near me open Saturday'],
      conversion: 'call, directions, appointment request, or provider-profile view',
    },
    {
      stage: 'Prepare',
      intent: 'Understand the next step',
      explanation:
        'Once a provider is selected, the patient needs documents, preparation, cost or insurance context, appointment expectations, and reliable follow-up information.',
      examples: ['what to bring to first dermatology visit', 'MRI preparation instructions'],
      conversion: 'completed booking, prepared visit, or reduced support friction',
    },
  ],
  obstaclesTitle: 'Why does healthcare SEO lose patient trust?',
  obstaclesLead:
    'The most damaging gaps often sit between clinical accuracy, local operations, templates, and marketing measurement.',
  obstacles: [
    {
      title: 'Generic health content has no accountable reviewer',
      problem:
        'A medically plausible article can still be unsafe or unhelpful when it lacks scope, sources, review date, clinician ownership, limitations, and guidance on when professional care is needed.',
      response:
        'We define a clinical review workflow with named reviewers, credentials, primary sources, review dates, update triggers, and content patterns for safety language. The agency does not approve clinical claims.',
    },
    {
      title: 'Provider and location facts disagree',
      problem:
        'Names, specialties, hours, phone numbers, addresses, insurance, and appointment availability can conflict across location pages, provider profiles, directories, and Google Business Profiles.',
      response:
        'We create a source-of-truth inventory, align site entities and relevant profiles, connect providers to real locations and services, and establish ownership for operational changes.',
    },
    {
      title: 'One treatment page serves every patient need',
      problem:
        'A page can become promotional and incomplete when it tries to cover candidacy, diagnosis, alternatives, preparation, procedure, recovery, risks, cost, and local availability in one vague block.',
      response:
        'We map the patient journey into treatment, condition, provider, location, preparation, recovery, and FAQ assets with clear internal links and clinical review appropriate to each topic.',
    },
    {
      title: 'Analytics capture more data than marketing needs',
      problem:
        'Free-text forms, call recordings, URLs, and event parameters can accidentally expose symptoms, diagnoses, appointment details, or other sensitive information.',
      response:
        'Measurement uses the minimum necessary marketing events and aggregated stages. The client’s privacy, security, and legal teams approve tools, fields, retention, and access; we do not require clinical details to evaluate acquisition.',
    },
  ],
  deliverablesTitle: 'What does a healthcare SEO engagement include?',
  deliverablesLead:
    'The program integrates clinical review, local operations, technical implementation, patient-centered content, entity clarity, and safe measurement.',
  deliverables: [
    {
      title: 'Technical health check',
      description:
        'A crawl and rendering audit across treatment, condition, provider, location, portal boundaries, appointment routes, and templates.',
      items: [
        'Indexation, canonical, redirect, sitemap, and robots review',
        'Provider, location, treatment, and duplicate-template analysis',
        'Core Web Vitals, mobile, and rendered-content validation',
        'Migration, platform, and release QA requirements',
      ],
    },
    {
      title: 'Patient-intent research',
      description:
        'Search demand organized around education, treatment exploration, provider validation, location, preparation, and support.',
      items: [
        'Condition, symptom, treatment, specialty, and location clusters',
        'Insurance, language, accessibility, and appointment modifiers',
        'Competitor, local-pack, and AI-answer research',
        'Query-to-page ownership and patient-path mapping',
      ],
    },
    {
      title: 'Medically reviewed content system',
      description:
        'Production controls that make clinical responsibility, sourcing, scope, and freshness visible.',
      items: [
        'Named author and clinical reviewer requirements',
        'Primary-source citations and review-date fields',
        'Risk, limitation, emergency, and when-to-seek-care patterns',
        'Update tiers for stable and changing medical information',
      ],
    },
    {
      title: 'Provider and local search',
      description:
        'Accurate pages and profiles for real clinicians, specialties, facilities, and service areas.',
      items: [
        'Provider biographies, credentials, specialties, and affiliations',
        'Location pages with unique operations and available care',
        'Google Business Profile and relevant directory consistency',
        'Review acquisition guidance without gating or fabricated feedback',
      ],
    },
    {
      title: 'Treatment and education architecture',
      description:
        'A connected page system that answers the patient’s next question and routes to appropriate care.',
      items: [
        'Treatment, condition, preparation, recovery, and FAQ pages',
        'Provider-treatment-location internal relationships',
        'On-page answers, headings, tables, and accessible media',
        'Relevant schema without unsupported ratings or claims',
      ],
    },
    {
      title: 'Patient-acquisition measurement',
      description:
        'Privacy-conscious reporting that connects search visibility to appropriate non-clinical conversion stages.',
      items: [
        'Search Console and local visibility reporting',
        'Call, directions, appointment, and form event design',
        'Aggregated booked or attended stages where approved',
        'AI answer citations, brand presence, and factual-accuracy checks',
      ],
    },
  ],
  aiVisibility: {
    title: 'How should healthcare content be prepared for AI answers?',
    lead:
      'Health answers need attributable medical review, current sources, clear scope, and language that distinguishes general education from individual diagnosis or treatment advice.',
    platforms: ['Google', 'Google Maps', 'Bing', 'AI Overviews', 'ChatGPT', 'Gemini', 'Perplexity'],
    boundary:
      'An AI citation is not clinical validation. We cannot guarantee inclusion, and we do not optimize by exaggerating certainty. Emergency, diagnosis, treatment, and eligibility content must be reviewed by qualified professionals and direct users to appropriate care.',
    workstreams: [
      {
        title: 'Clinically attributable answers',
        description:
          'Condition and treatment passages identify reviewer credentials, sources, review dates, intended audience, limitations, and situations requiring urgent or professional care.',
        output: 'reviewed answer blocks, source notes, safety patterns, and update status',
      },
      {
        title: 'Provider and facility entities',
        description:
          'Clinician name, credentials, specialty, affiliation, location, services, and contact details should form a consistent, verifiable relationship.',
        output: 'entity map, profile fixes, schema, and source-of-truth ownership',
      },
      {
        title: 'Accessible patient knowledge',
        description:
          'Important guidance should exist in crawlable HTML, use plain language, explain medical terms, and not depend only on video, PDF, portal content, or an interactive widget.',
        output: 'content accessibility audit and page-level remediation',
      },
      {
        title: 'Answer safety and accuracy monitoring',
        description:
          'Prompt sets track provider and service facts, general education, citations, outdated information, and material omissions that could mislead a patient.',
        output: 'response archive, factual-error log, citation evidence, and correction plan',
      },
    ],
  },
  architectureTitle: 'Which healthcare pages support patient discovery?',
  architectureLead:
    'Each page has a defined medical, operational, and conversion role. Connections between those pages matter as much as isolated optimization.',
  architecture: [
    {
      pageType: 'Treatment and service',
      intent: 'Explain what the care is, who may be considered, process, risks, alternatives, recovery, and next step.',
      examples: 'procedure, therapy, diagnostic service, program, specialty care',
      signal: 'qualified treatment views and appointment progression',
    },
    {
      pageType: 'Condition and education',
      intent: 'Provide reviewed general information, warning signs, evaluation context, options, and sources.',
      examples: 'condition guide, symptom education, prevention, test explanation',
      signal: 'appropriate care-path progression, links, and citations',
    },
    {
      pageType: 'Provider',
      intent: 'Help a patient validate credentials, specialty, experience, philosophy, location, and availability.',
      examples: 'physician, therapist, dentist, clinician, care-team profile',
      signal: 'provider selection, calls, and appointments',
    },
    {
      pageType: 'Location',
      intent: 'Represent a real facility with accurate services, providers, hours, directions, accessibility, and contact routes.',
      examples: 'clinic, hospital, practice, diagnostic center, service location',
      signal: 'local visibility, directions, calls, and booked visits',
    },
    {
      pageType: 'Preparation and support',
      intent: 'Reduce uncertainty before and after care with approved practical guidance.',
      examples: 'appointment preparation, test instructions, recovery, billing, insurance, records',
      signal: 'completed visits and reduced operational friction',
    },
  ],
  processTitle: 'How do we deliver healthcare SEO responsibly?',
  processLead:
    'The workflow separates SEO expertise from clinical approval and protects patient privacy while keeping implementation moving.',
  process: [
    {
      number: '01',
      cadence: 'Governance',
      title: 'Define services, locations, reviewers, and safeguards',
      description:
        'We identify real care offerings, provider-location relationships, qualified reviewers, emergency-content requirements, privacy boundaries, and prohibited or sensitive claims.',
      output: 'responsibility matrix, entity source of truth, content rules, and data boundaries',
    },
    {
      number: '02',
      cadence: 'Baseline',
      title: 'Audit technical, local, content, and answer visibility',
      description:
        'The review covers templates, indexation, provider and location entities, reviews, citations, medical sourcing, current rankings, local results, and AI answer samples.',
      output: 'risk register, opportunity map, technical backlog, and visibility baseline',
    },
    {
      number: '03',
      cadence: 'Prioritize',
      title: 'Sequence patient-critical and commercial work',
      description:
        'Incorrect operational facts, unsafe or outdated high-traffic pages, and broken booking routes are handled before expanding into lower-priority content.',
      output: '90-day roadmap, page briefs, clinical inputs, and implementation dependencies',
    },
    {
      number: '04',
      cadence: 'Review',
      title: 'Produce with clinical and operational approval',
      description:
        'SEO researchers and writers work from approved sources and expert input. Clinical claims, safety language, provider facts, and facility operations are reviewed by the appropriate owner.',
      output: 'approved pages, reviewer records, schema, internal links, and QA evidence',
    },
    {
      number: '05',
      cadence: 'Measure',
      title: 'Track discovery and appropriate patient action',
      description:
        'We monitor query and page cohorts, local actions, appointments or aggregated downstream stages where approved, and AI-answer accuracy without collecting unnecessary health details.',
      output: 'privacy-reviewed dashboard, local report, AI checks, and monthly decisions',
    },
    {
      number: '06',
      cadence: 'Maintain',
      title: 'Keep medical and operational facts current',
      description:
        'Clinical review dates, provider changes, service availability, hours, insurance, locations, and source updates create owned tasks rather than lingering contradictions.',
      output: 'freshness calendar, operational update workflow, and revision history',
    },
  ],
  measurementTitle: 'How is healthcare SEO measured without exposing patient details?',
  measurementLead:
    'The acquisition view uses search and non-clinical conversion stages. It does not require diagnoses, symptoms, treatment notes, or other protected details.',
  measurementBoundary:
    'The client’s privacy, security, legal, and clinical teams must approve analytics, forms, call tools, fields, access, retention, and integrations. If HIPAA or another health-privacy regime applies, the client determines required agreements and controls.',
  measurement: [
    {
      name: 'Relevant visibility',
      definition: 'Impressions, clicks, rankings, and local presence for approved treatment, condition, provider, and location groups.',
      source: 'Search Console, Business Profile reporting, Bing, and stable rank tracking',
    },
    {
      name: 'Care-path engagement',
      definition: 'Movement from education into relevant treatment, provider, location, preparation, and contact information.',
      source: 'privacy-reviewed, non-clinical analytics events',
    },
    {
      name: 'Patient action',
      definition: 'Calls, directions, appointment requests, online bookings, or another approved acquisition event.',
      source: 'approved form, scheduling, call, and local-action systems',
    },
    {
      name: 'Aggregated outcome',
      definition: 'Booked or attended stages reported in aggregate where the organization approves that marketing view.',
      source: 'minimum-necessary downstream stage data under client controls',
    },
    {
      name: 'AI answer safety',
      definition: 'Provider and service fact accuracy, linked sources, reviewer representation, material omissions, and competitor presence.',
      source: 'stored prompt responses and manual review by the appropriate subject owner',
    },
  ],
  evidence: {
    title: 'What healthcare evidence will be shown?',
    lead:
      'The final page should show anonymized, owner-approved visibility and patient-acquisition evidence with date ranges and measurement definitions. We are leaving the evidence frames empty until those assets are supplied.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Healthcare · treatment and local visibility trend',
        description:
          'Add an approved Search Console or local-rank view with market, date range, query cohort, provider or location scope, and implementation annotation.',
      },
      {
        label: 'Healthcare · privacy-approved acquisition outcome',
        description:
          'Add an aggregated, anonymized view of calls, bookings, or another approved non-clinical stage with the attribution definition and comparison period.',
      },
    ],
  },
  fitTitle: 'Is your healthcare organization ready for SEO?',
  fitLead:
    'The program needs real clinical ownership and operational accuracy. Marketing cannot safely substitute for either.',
  goodFit: [
    'Qualified clinicians can review medical information and claims',
    'Provider, service, location, and operational facts have owners',
    'A developer or platform team can implement prioritized fixes',
    'Privacy and security stakeholders can approve measurement design',
  ],
  notFit: [
    'You want guaranteed rankings, AI citations, appointments, or patient outcomes.',
    'No clinician can review medical content.',
    'The strategy depends on fake reviews, fake providers, or unsupported treatment claims.',
    'You expect the agency to collect sensitive patient details for marketing reporting.',
  ],
  sources: [
    {
      label: 'Google Search Central: Creating helpful, reliable, people-first content',
      url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
      description: 'Primary Google guidance on expertise, authorship, sourcing, purpose, and trust.',
    },
    {
      label: 'Google Business Profile guidelines',
      url: 'https://support.google.com/business/answer/3038177',
      description: 'Official requirements used when reviewing real-world business representation and local profiles.',
    },
    {
      label: 'U.S. HHS: HIPAA for professionals',
      url: 'https://www.hhs.gov/hipaa/for-professionals/index.html',
      description: 'Primary U.S. reference where HIPAA applies; the client determines applicable law and required controls.',
    },
    {
      label: 'Schema.org medical vocabulary',
      url: 'https://schema.org/docs/meddocs.html',
      description: 'Vocabulary reference for medical entities; markup must reflect visible facts and does not guarantee a search feature.',
    },
  ],
  faqTitle: 'Questions healthcare teams ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What is healthcare SEO?',
      answer:
        'Healthcare SEO makes approved treatment, condition, provider, location, and patient-support information discoverable and useful across search surfaces. It combines technical access, local profiles, patient-intent research, medically reviewed content, entity consistency, internal links, appropriate markup, authority development, and privacy-conscious measurement. Clinical accuracy and care decisions remain the responsibility of qualified professionals.',
    },
    {
      question: 'Who reviews medical content?',
      answer:
        'The client assigns a qualified clinician or appropriate subject expert based on the topic. We provide research, structure, source requirements, editing, SEO, and review workflows, but the agency does not impersonate a clinician or approve diagnosis and treatment claims. Published pages can identify the reviewer, credentials, review date, and sources when the client approves.',
    },
    {
      question: 'Can you guarantee patient leads or AI citations?',
      answer:
        'No. Visibility, generated answers, local results, and patient decisions depend on many factors outside agency control. We improve eligibility, factual quality, technical access, local consistency, sourcing, and conversion routes, then report observed outcomes and uncertainty. Guarantees would be inappropriate for both search systems and healthcare acquisition.',
    },
    {
      question: 'Do you work on local SEO for clinics and providers?',
      answer:
        'Yes. Work can include real location pages, provider profiles, service-location relationships, Google Business Profiles, relevant directories, name-address-phone consistency, hours, appointment routes, reviews, and local query tracking. We do not create virtual or doorway locations that do not represent real operations.',
    },
    {
      question: 'How do you protect patient privacy in SEO analytics?',
      answer:
        'We design around minimum-necessary, non-clinical marketing events such as an appointment button, call, directions request, or aggregated booking stage. The client’s legal, privacy, security, and clinical teams approve tools, fields, retention, access, and any required agreements. We do not need symptoms, diagnoses, notes, or identity documents to report acquisition.',
    },
    {
      question: 'How often should healthcare content be updated?',
      answer:
        'The review frequency depends on clinical risk, source stability, treatment change, operational change, and traffic. Provider availability, hours, locations, insurance, and preparation instructions may need operational triggers. Medical education receives a named reviewer, source set, reviewed date, and update conditions rather than an arbitrary promise to change text every month.',
    },
    {
      question: 'How do you optimize healthcare content for AI search?',
      answer:
        'We make reviewed answers explicit, attributable, accessible, sourced, and connected to the relevant clinician, provider, treatment, and location entities. We also check crawler access and monitor stable prompts for citations and factual accuracy. We do not treat AI inclusion as clinical endorsement or guarantee a model will use a particular source.',
    },
    {
      question: 'What does healthcare SEO cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on provider and location count, specialties, technical platform, review workflow, content ownership, local-profile work, implementation responsibility, and measurement requirements. The assessment identifies clinical and privacy dependencies before pricing the program.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/local-seo',
      label: 'Local SEO',
      description: 'Real locations, profiles, local entities, reviews, and discovery reporting.',
    },
    {
      href: '/services/content',
      label: 'SEO content systems',
      description: 'Source-backed research, expert review, production, and freshness governance.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Indexation, templates, rendering, migrations, performance, and release QA.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Answer access, entity consistency, citation checks, and factual monitoring.',
    },
  ],
  ctaEyebrow: 'Improve responsible patient discovery',
  ctaTitle: 'Find the technical, trust, local, and content gaps in your patient journey.',
  ctaLead:
    'Share your services, locations, clinical review process, technical platform, and approved acquisition stages. We will identify the highest-priority Google and AI-search work.',
  ctaBenefits: [
    'Technical, local, and patient-journey assessment',
    'Clinical review and content-governance recommendations',
    'Privacy-conscious search and AI-answer measurement plan',
  ],
}

const startups: IndustryLeadPageData = {
  slug: 'startups',
  name: 'Startups',
  serviceType: 'Startup SEO and AI search foundations for early-stage companies',
  schemaAudience: 'Startup founders, first marketing hires, growth leads, and early-stage operators',
  metaTitle: 'SEO for Startups: Build a Compounding Channel Early | TheProjectSEO',
  metaDescription:
    'SEO for startups that need a durable, low-CAC channel: foundational technical setup, category education, and AI-search visibility scoped to an early-stage budget and team.',
  eyebrow: 'Startup SEO · Foundations before scale',
  title: 'Startup SEO Agency: make search a channel',
  titleAccent: 'you own before you scale.',
  entityMentions: [
    { name: 'Search engine optimization', sameAs: ['https://www.wikidata.org/wiki/Q180711', 'https://en.wikipedia.org/wiki/Search_engine_optimization'] },
    { name: 'Startup company', sameAs: ['https://www.wikidata.org/wiki/Q129238', 'https://en.wikipedia.org/wiki/Startup_company'] },
    { name: 'Google', sameAs: ['https://www.wikidata.org/wiki/Q95', 'https://en.wikipedia.org/wiki/Google'] },
    { name: 'Content strategy', sameAs: ['https://www.wikidata.org/wiki/Q4353935', 'https://en.wikipedia.org/wiki/Content_strategy'] },
    { name: 'Link building', sameAs: ['https://www.wikidata.org/wiki/Q1569371', 'https://en.wikipedia.org/wiki/Link_building'] },
  ],
  directAnswer:
    'TheProjectSEO helps early-stage startups build organic search into a compounding, low-cost acquisition channel instead of a task that waits until after the next raise. We focus on the foundations that decide whether SEO ever works: a crawlable and fast site, a clear category and positioning that people and AI systems can understand, a small set of pages that match real buyer questions, and honest measurement. The work is scoped to an early-stage budget and team, and it is sequenced so a founder can see leading signals before committing to scale.',
  primaryCta: 'Request a startup SEO assessment',
  bestFit:
    'Startups with a live product, a defined first customer, someone who can ship site and content changes, and a reason to build organic demand rather than rent every visit through ads.',
  heroChecks: [
    'Pre-seed to Series B startups building a first durable channel',
    'Founders and first marketers who need scope matched to budget and time',
    'Google, Bing, AI Overviews, ChatGPT, Gemini, and Perplexity',
    'Measurement tied to signups, qualified conversations, and payback, not vanity traffic',
  ],
  journeyTitle: 'How do buyers find a startup they have never heard of?',
  journeyLead:
    'Early-stage companies rarely have brand demand yet. The first customers arrive by searching the problem, discovering a new category, checking whether the product is real, and asking other people or an AI assistant for a recommendation. Each of those moments needs one clear, trustworthy page.',
  searchJourneys: [
    {
      stage: 'Problem',
      intent: 'Describe a painful problem in plain words',
      explanation:
        'Before anyone knows your product exists, they search the problem itself. A startup wins here by answering the question better and more honestly than incumbents who stopped trying.',
      examples: ['how to speed up a slow manual process', 'why does our current workflow keep breaking'],
      conversion: 'email capture, useful template, or a short product-aware explainer',
    },
    {
      stage: 'Category',
      intent: 'Understand a new or renamed category',
      explanation:
        'Many startups create or rename a category. Buyers need to learn what it is, when it applies, and how it differs from the tool they use today before they will consider switching.',
      examples: ['what is a new category term', 'new approach versus the old way'],
      conversion: 'category explainer to product, or a trial exploration',
    },
    {
      stage: 'Validation',
      intent: 'Confirm a small company is safe to trust',
      explanation:
        'Evaluators check that the product is real, maintained, and safe: pricing, security basics, documentation, founders, and whether anyone credible references it.',
      examples: ['product pricing', 'is this product legit', 'product reviews'],
      conversion: 'pricing view, documentation visit, or signup',
    },
    {
      stage: 'Decision',
      intent: 'Choose between a startup and a known name',
      explanation:
        'The buyer weighs a nimble newcomer against an established vendor. Fair comparison and clear positioning decide whether an unknown brand makes the shortlist.',
      examples: ['startup product versus incumbent', 'best option in the category for small teams'],
      conversion: 'signup, demo, or sales conversation',
    },
  ],
  obstaclesTitle: 'Why does SEO stall at most startups?',
  obstaclesLead:
    'The problem is rarely effort. It is usually sequence, scope, and patience colliding with a runway clock.',
  obstacles: [
    {
      title: 'SEO is treated as a later problem',
      problem:
        'Founders often postpone SEO until after product-market fit, then discover that a channel which compounds over months cannot be switched on the quarter a raise runs low.',
      response:
        'We start the foundations early and cheaply: clean technical setup, a defensible category story, and a handful of pages tied to real demand, so the compounding clock starts before you urgently need results.',
    },
    {
      title: 'The scope copies a late-stage company',
      problem:
        'A startup with one marketer cannot run the same forty-page-a-month program as a funded competitor, and copying it burns runway on content no one links to or reads.',
      response:
        'We size the program to the team and budget, prioritize the few pages that can actually rank and convert now, and defer scale until a repeatable pattern is proven.',
    },
    {
      title: 'A new category has no existing search demand',
      problem:
        'If you invented the category, few people search for it yet, so ranking for your own term brings little traffic while the real buyers search the old problem.',
      response:
        'We map demand to the problem and adjacent categories buyers already search, then use those pages to introduce the new category and route interest toward the product.',
    },
    {
      title: 'Founders cannot tell signal from noise',
      problem:
        'Early traffic is small and volatile, so a good month and a lucky month look identical, and it is easy to kill a working channel too soon or scale a fluke.',
      response:
        'We set a baseline, separate leading indicators from revenue, and report ranges and uncertainty so a founder can make a calm keep-or-cut decision instead of reacting to a single spike.',
    },
  ],
  deliverablesTitle: 'What does an early-stage SEO engagement include?',
  deliverablesLead:
    'Scope is set by evidence and runway, not a fixed checklist. These workstreams build a foundation a small team can maintain and a later hire can scale.',
  deliverables: [
    {
      title: 'Foundation and technical setup',
      description:
        'The unglamorous work that decides whether anything you publish can rank at all.',
      items: [
        'Indexation, canonical, sitemap, and robots setup',
        'Rendering, speed, and Core Web Vitals on the marketing site',
        'Analytics and Search Console configured with clean events',
        'A simple, extensible URL and internal-link structure',
      ],
    },
    {
      title: 'Category and positioning clarity',
      description:
        'A story that people and AI systems can repeat accurately about who you are and when to use you.',
      items: [
        'Category definition and plain-language positioning',
        'Entity setup: consistent name, founders, and profiles',
        'Messaging that separates your product from the old approach',
        'Homepage and core-page narrative aligned to search demand',
      ],
    },
    {
      title: 'A small, high-intent page set',
      description:
        'A short list of pages that match real questions and can realistically rank on a startup timeline.',
      items: [
        'Problem-aware explainers that route to the product',
        'Pricing, security-basics, and trust pages evaluators need',
        'One or two honest comparison or alternative pages',
        'A repeatable brief a founder or writer can reuse',
      ],
    },
    {
      title: 'AI-search readiness',
      description:
        'Making the few facts about your product easy for answer engines to find, quote, and get right.',
      items: [
        'Clear answer passages for what the product is and is not',
        'Structured data where eligible',
        'Consistent third-party mentions and profiles',
        'A small versioned prompt set to watch how AI describes you',
      ],
    },
    {
      title: 'Early authority',
      description:
        'A lightweight way to earn references without a full PR budget.',
      items: [
        'One or two linkable assets built from real founder knowledge',
        'Relevant directory, review-site, and profile consistency',
        'Founder-led mention and relationship prospecting',
        'Cleanup of inaccurate or missing brand information',
      ],
    },
    {
      title: 'Measurement and honest reporting',
      description:
        'A simple decision system a founder can read in five minutes.',
      items: [
        'Baseline and leading-indicator tracking',
        'Signup and qualified-conversation events by landing page',
        'AI answer sampling for a core prompt set',
        'Monthly keep, refine, or cut recommendations',
      ],
    },
  ],
  aiVisibility: {
    title: 'How do we make a startup visible in AI answers?',
    lead:
      'AI Overviews, ChatGPT, Gemini, Claude, and Perplexity increasingly stand between an unknown startup and its first customers. We improve the evidence each system can find and interpret, then watch each surface separately.',
    platforms: ['Google', 'Bing', 'AI Overviews', 'ChatGPT', 'Gemini', 'Claude', 'Perplexity'],
    boundary:
      'No agency can guarantee that an AI system will mention a young brand. Outputs vary by prompt, location, freshness, and retrieval index, and new companies have little corroborating data yet. Our work raises eligibility and accuracy; it does not manufacture a citation.',
    workstreams: [
      {
        title: 'Answer-ready product facts',
        description:
          'We turn the core claims about a young product into explicit, supportable passages: what it does, who it is for, how it differs, and when it is not the right choice.',
        output: 'answer blocks, definitions, honest limitations, and reviewed claims',
      },
      {
        title: 'Entity consistency',
        description:
          'A new company must describe itself the same way across its site, profiles, and directories so systems can connect the dots into one trustworthy entity.',
        output: 'entity map, schema plan, and profile cleanup',
      },
      {
        title: 'Retrieval access',
        description:
          'The few important answers must live in rendered HTML, be linked, and be indexable rather than trapped in a client-side app, a video, or a gated PDF.',
        output: 'crawl and rendered-content checks and internal-link fixes',
      },
      {
        title: 'Prompt-set monitoring',
        description:
          'We track a small set of prompts a real buyer would ask and record whether the startup appears, is described correctly, and improves over time.',
        output: 'versioned prompts, stored responses, and accuracy notes',
      },
    ],
  },
  architectureTitle: 'Which pages should a startup build first?',
  architectureLead:
    'Resist the urge to launch a large blog. Early on, a few pages that match real intent beat a content calendar no one asked for.',
  architecture: [
    {
      pageType: 'Problem explainers',
      intent: 'Answer the problem buyers search before they know your category.',
      examples: 'how-to and why guides tied to the job your product does',
      signal: 'email capture and product-aware sessions',
    },
    {
      pageType: 'Category and positioning',
      intent: 'Teach a new or renamed category and connect it to the product.',
      examples: 'category explainer, new-vs-old approach, use-case pages',
      signal: 'category-to-product visits and trial starts',
    },
    {
      pageType: 'Trust and evaluation',
      intent: 'Give evaluators the proof a small company is safe to adopt.',
      examples: 'pricing, security basics, documentation, about and founders',
      signal: 'signup, documentation, and pricing engagement',
    },
    {
      pageType: 'Comparison',
      intent: 'Help a buyer weigh a startup against a known incumbent, fairly.',
      examples: 'product vs incumbent, best options for small teams',
      signal: 'high-intent signups and sales conversations',
    },
    {
      pageType: 'One original asset',
      intent: 'Earn a few early links and citations from real founder knowledge.',
      examples: 'a benchmark, template, calculator, or small data study',
      signal: 'links, citations, and returning visitors',
    },
  ],
  processTitle: 'How do we start SEO at an early-stage company?',
  processLead:
    'The sequence protects runway: prove the foundations and a repeatable page before spending on scale.',
  process: [
    {
      number: '01',
      cadence: 'Discovery',
      title: 'Agree the first customer and the honest goal',
      description:
        'We define who the first buyers are, the problem they search, and what a meaningful result looks like on your timeline and budget before any production begins.',
      output: 'positioning brief, KPI definitions, and a runway-aware scope',
    },
    {
      number: '02',
      cadence: 'Baseline',
      title: 'Fix the foundations and set a baseline',
      description:
        'We audit technical access, rendering, and existing coverage, clean up analytics, and record where you start so future change is provable.',
      output: 'technical fixes, tracking setup, and a measurement baseline',
    },
    {
      number: '03',
      cadence: 'Roadmap',
      title: 'Pick the few pages that can win now',
      description:
        'We prioritize a small page set by demand, intent, and feasibility, with briefs a founder or a junior writer can execute without guesswork.',
      output: 'short prioritized roadmap, page briefs, and acceptance criteria',
    },
    {
      number: '04',
      cadence: 'Execution',
      title: 'Ship, connect, and QA the first pages',
      description:
        'Content, technical fixes, schema, and internal links go live with checks in rendered HTML, each page routed to a clear next step.',
      output: 'live pages, QA evidence, and updated sitemaps',
    },
    {
      number: '05',
      cadence: 'Learning',
      title: 'Read the signal and decide',
      description:
        'We evaluate the page set against leading indicators and conversions, separate luck from pattern, and recommend what to keep, refine, or cut.',
      output: 'monthly decision memo and a refined next step',
    },
    {
      number: '06',
      cadence: 'Scale',
      title: 'Scale only a proven pattern',
      description:
        'Once a page type reliably ranks and converts, we extend it to adjacent problems and categories, and hand a repeatable system to your growing team.',
      output: 'a scalable template, simple governance, and a hiring-ready playbook',
    },
  ],
  measurementTitle: 'How should startup SEO be measured?',
  measurementLead:
    'At small volumes, the wrong metric misleads. We track signals that map to survival and payback, not raw sessions.',
  measurementBoundary:
    'Early traffic is small and noisy, buying journeys cross many touches, and privacy controls limit attribution. We report observed data, agreed rules, and uncertainty rather than presenting an estimated pipeline number as fact.',
  measurement: [
    {
      name: 'Foundation health',
      definition: 'Indexation, rendering, speed, and coverage for the pages that matter.',
      source: 'Search Console, crawl data, and Core Web Vitals',
    },
    {
      name: 'Qualified visibility',
      definition: 'Impressions and rankings for the specific problem, category, and comparison queries you chose.',
      source: 'Google Search Console and a small stable rank set',
    },
    {
      name: 'Activation signals',
      definition: 'Signups, trials, and qualified conversations by landing page and intent.',
      source: 'analytics events and your signup or CRM system',
    },
    {
      name: 'Payback view',
      definition: 'Organic acquisition cost and payback compared with paid, under a documented rule.',
      source: 'analytics, finance inputs, and agreed attribution',
    },
    {
      name: 'AI answer presence',
      definition: 'Whether and how the startup appears and is described across a versioned prompt set.',
      source: 'stored responses with model, date, prompt, and citation evidence',
    },
  ],
  evidence: {
    title: 'What proof will you be able to inspect?',
    lead:
      'We use screenshots and source-linked reporting to show what moved. The examples below demonstrate our ability to grow search visibility and earn inclusion in AI-answer datasets; they are not presented as a startup-specific case study.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Expressway.PH · organic traffic and keyword trend',
        description:
          'Add the Ahrefs two-year organic traffic and organic keyword trend with the current metric selected, visible date range, domain, and legend.',
      },
      {
        label: 'Expressway.PH · AI response visibility',
        description:
          'Add the Ahrefs AI responses panel showing AI Overviews, ChatGPT, platforms, response counts, page counts, and capture date.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right SEO partner for your startup?',
  fitLead:
    'The engagement works when a founder wants a durable channel and someone can ship changes. We make that requirement explicit before any retainer.',
  goodFit: [
    'You have a live product and a defined first customer',
    'Someone can implement site and content changes without long delays',
    'You want a compounding channel, not only short-term paid spikes',
    'You will share signup and conversion data under appropriate access',
  ],
  notFit: [
    'You need guaranteed rankings or revenue by a fixed fundraising date.',
    'You want hundreds of unreviewed AI articles with no founder input.',
    'The product and audience change completely every few weeks.',
    'No one has time to publish or approve anything for months.',
  ],
  sources: [
    {
      label: 'Google Search Central: SEO Starter Guide',
      url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
      description: 'Primary guidance on the fundamentals every new site should get right first.',
    },
    {
      label: 'Google Search Central: Creating helpful, reliable content',
      url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
      description: 'Google guidance on content quality, expertise, and helpfulness signals.',
    },
    {
      label: 'Google Search Central: Page experience',
      url: 'https://developers.google.com/search/docs/appearance/page-experience',
      description: 'Reference for speed and experience signals that early sites often fail.',
    },
    {
      label: 'OpenAI crawler documentation',
      url: 'https://platform.openai.com/docs/bots',
      description: 'Official distinctions between OpenAI user, search, and training crawlers and the relevant controls.',
    },
  ],
  faqTitle: 'Questions founders ask before investing in SEO',
  faqs: [
    {
      question: 'Is it too early for my startup to do SEO?',
      answer:
        'Usually the opposite. SEO compounds over months, so the cheapest time to start the foundations is before you urgently need the channel. Early on this does not mean a large content program. It means a fast, crawlable site, a clear category story, correct tracking, and a few pages tied to real demand. That work protects you from having to switch on a slow channel in the quarter your runway gets tight.',
    },
    {
      question: 'Should we do SEO or just run paid ads?',
      answer:
        'Most startups need both, for different reasons. Paid buys immediate, rented traffic you can test with. SEO builds an owned channel whose cost per visit falls over time. The honest answer depends on your margins, sales cycle, and runway. We help you set a baseline and a payback view so the decision is based on your numbers rather than a general rule.',
    },
    {
      question: 'How long until SEO works for a startup?',
      answer:
        'There is no honest universal timeline. It depends on your existing authority, technical health, competition, and how quickly you can publish and implement. Foundational fixes and existing-page improvements can move first, while a new category or competitive term can take sustained work. We establish a baseline, separate leading indicators from revenue, and only forecast ranges after the audit.',
    },
    {
      question: 'We created a new category that no one searches for yet. Can SEO help?',
      answer:
        'Yes, but not by ranking only for your invented term. We map the demand that already exists around the problem and adjacent categories buyers search today, rank for those, and use those pages to teach the new category and route interest to your product. As real demand for the category grows, you are already the reference for it.',
    },
    {
      question: 'Do we need a big content team?',
      answer:
        'No. Early-stage SEO is about a small number of correct pages, not volume. We can own research, technical direction, briefs, and QA while a founder or one writer supplies product truth and approves claims. The goal is a repeatable brief and template a small team can maintain, and that a later hire can scale.',
    },
    {
      question: 'Do you optimize for ChatGPT, AI Overviews, and Perplexity?',
      answer:
        'Yes. We make the core facts about your product easy for answer engines to find and quote, keep your entity consistent across the web, and monitor a small prompt set by platform. We do not claim to control any model or guarantee a mention, because answer generation varies by retrieval source, prompt, model, location, and time, and new companies start with little corroborating data.',
    },
    {
      question: 'What does startup SEO cost at TheProjectSEO?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. For early-stage companies we scope a focused foundational engagement rather than a large content program, and expand only once a repeatable pattern is proven. The assessment defines the work and dependencies before a proposal is issued.',
    },
  ],
  relatedLinks: [
    {
      href: '/industries/saas',
      label: 'SaaS SEO',
      description: 'For product-led and B2B SaaS teams focused on demos, trials, and pipeline.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Rendering, indexation, speed, and the foundations new sites often miss.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Answer visibility, entity clarity, and prompt-set monitoring.',
    },
    {
      href: '/services/content',
      label: 'SEO content systems',
      description: 'Research, briefs, expert input, and a repeatable production model.',
    },
  ],
  ctaEyebrow: 'Start the channel early',
  ctaTitle: 'Find the few SEO moves that matter for your startup now.',
  ctaLead:
    'Share your site, your first customer, and your current tracking. We will identify the foundational technical, positioning, and AI-search steps to take first, scoped to your stage.',
  ctaBenefits: [
    'Initial technical and foundation assessment',
    'The few priority pages worth building first',
    'Google and AI-search measurement recommendations',
  ],
}

export const industryLeadPages = {
  saas,
  startups,
  ecommerce,
  finance,
  healthcare,
} as const satisfies Record<string, IndustryLeadPageData>

export function getIndustryLeadMetadata(page: IndustryLeadPageData): Metadata {
  const canonical = page.path ?? `/industries/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: 'TheProjectSEO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    },
  }
}
