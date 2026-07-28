import {
  sharedIndustryEvidence,
  type IndustryLeadPageData,
} from '@/data/industry-lead-pages'

const content: IndustryLeadPageData = {
  slug: 'content',
  path: '/services/content',
  parentBreadcrumb: { name: 'Services', href: '/services' },
  name: 'SEO content',
  schemaName: 'SEO content strategy, production, optimization, and governance services',
  serviceType:
    'SEO content services for strategy, SERP research, content briefs, expert-led production, optimization, internal linking, refreshes, and AI search',
  schemaAudience:
    'Organizations that need search-led content tied to products, services, customer decisions, subject expertise, and measurable commercial outcomes',
  metaTitle: 'SEO Content Agency for Google & AI Search',
  metaDescription:
    'SEO content strategy, briefs, expert-led writing, optimization, refreshes and governance for Google and AI search—mapped to leads, pipeline or revenue.',
  eyebrow: 'SEO content agency · Research + expertise + conversion',
  title: 'Publish fewer generic pages.',
  titleAccent: 'Build useful search assets.',
  directAnswer:
    'TheProjectSEO plans, creates, improves, and governs content that answers real customer questions across Google, Bing, and AI-assisted search. The work begins with the business, SERP, customer language, existing pages, and product or service truth—not an article quota. Each asset receives clear search ownership, a content brief, source and expert requirements, an internal-link role, a commercial next step, quality review, and a maintenance decision.',
  primaryCta: 'Request a content opportunity review',
  bestFit:
    'Organizations with genuine expertise, products or services worth explaining, accountable reviewers, publishing access, and outcomes that distinguish useful demand from pageviews.',
  heroChecks: [
    'SERP and customer research, content strategy, page maps, and editorial roadmaps',
    'Service, product, category, comparison, industry, location, resource, and evidence content',
    'Subject-matter interviews, sources, author and reviewer signals, and claim governance',
    'Google, Bing, AI-answer visibility, assisted customer journeys, leads, and revenue cohorts',
  ],
  journeyTitle: 'What jobs should SEO content perform?',
  journeyLead:
    'Content earns value when it helps a defined audience make progress. Some pages explain a problem, others clarify an offer, compare choices, prove a claim, support implementation, or remove risk before a purchase.',
  searchJourneys: [
    {
      stage: 'Learn',
      intent: 'Understand a concept, problem, or task',
      explanation:
        'The searcher needs a clear answer, method, example, tool, or framework before the right commercial category is obvious.',
      examples: ['how to plan a Shopify migration', 'what is generative engine optimization'],
      conversion: 'deeper resource, tool, newsletter, relevant product or service route',
    },
    {
      stage: 'Solve',
      intent: 'Find a practical approach',
      explanation:
        'The user compares methods, requirements, costs, risks, workflows, and solution types for a more specific job.',
      examples: ['technical SEO audit checklist for ecommerce', 'reduce duplicate product pages'],
      conversion: 'solution, use-case, service, product, consultation, or trial exploration',
    },
    {
      stage: 'Compare',
      intent: 'Choose between options',
      explanation:
        'The buyer evaluates products, providers, platforms, alternatives, locations, and trade-offs using explicit criteria and evidence.',
      examples: ['Shopify vs WooCommerce SEO', 'AI SEO agency comparison criteria'],
      conversion: 'comparison, pricing, evidence, demo, shortlist, or qualified enquiry',
    },
    {
      stage: 'Validate',
      intent: 'Verify a company and act',
      explanation:
        'The buyer checks the offer, process, people, proof, implementation, limitations, policies, and fit before involving sales or purchasing.',
      examples: ['agency x SEO audit deliverables', 'product x implementation and support'],
      conversion: 'case study, methodology, service page, order, trial, or qualified opportunity',
    },
  ],
  obstaclesTitle: 'Why does SEO content fail to generate leads?',
  obstaclesLead:
    'The issue is rarely grammar. Content fails when it targets the wrong audience, duplicates existing pages, lacks real evidence, hides the offer, or becomes outdated without an owner.',
  obstacles: [
    {
      title: 'Volume is chosen before opportunity',
      problem:
        'A monthly article quota encourages low-value topics, repeated intent, shallow research, and publishing even when technical or commercial pages deserve priority.',
      response:
        'We build a demand and page map first, score new versus existing-page opportunities, and allocate effort to the asset most likely to help the customer and business.',
    },
    {
      title: 'The SERP is copied instead of interpreted',
      problem:
        'Combining competitor headings creates derivative content and can preserve their blind spots, unsupported claims, wrong audience, and weak commercial journey.',
      response:
        'SERP research identifies intent, formats, entities, sources, features, and minimum expectations. First-party expertise, product truth, customer evidence, and original utility create differentiation.',
    },
    {
      title: 'Writers cannot verify the claims',
      problem:
        'Subject expertise, statistics, product capabilities, legal or medical boundaries, locations, pricing, and case results may be invented, diluted, or copied without responsible review.',
      response:
        'Every brief states approved sources, first-party inputs, prohibited claims, reviewer, evidence needed, and update conditions. Missing proof becomes a visible gap rather than fictional copy.',
    },
    {
      title: 'Publishing has no maintenance system',
      problem:
        'Products, regulations, interfaces, prices, people, inventory, research, links, and search results change, leaving an expanding library of stale or conflicting pages.',
      response:
        'We assign ownership, review dates, risk and volatility levels, update triggers, and keep, refresh, merge, redirect, archive, or delete decisions to the content inventory.',
    },
  ],
  deliverablesTitle: 'What is included in SEO content services?',
  deliverablesLead:
    'The service can support an internal team or own a defined content program. Research, expertise, page architecture, editing, publishing, and measurement remain connected.',
  deliverables: [
    {
      title: 'Content and demand audit',
      description:
        'An inventory of existing pages, performance, intent ownership, quality, evidence, business role, internal links, and maintenance risk.',
      items: [
        'Search, customer, competitor, SERP, site-search, sales, and support evidence',
        'Page and query ownership, overlap, cannibalization, gaps, and orphaning',
        'Content quality, sourcing, authorship, claims, freshness, and conversion review',
        'Keep, improve, merge, redirect, archive, delete, and create decisions',
      ],
    },
    {
      title: 'Content strategy and roadmap',
      description:
        'A sequenced plan connecting customer questions and business priorities to the right page types and production dependencies.',
      items: [
        'Audience, journey, product, service, industry, location, and entity maps',
        'Topic clusters with canonical page ownership',
        'Value, confidence, effort, evidence, reviewer, and maintenance scoring',
        'Editorial calendar based on priorities rather than a fixed article quota',
      ],
    },
    {
      title: 'SERP-led content briefs',
      description:
        'Implementation-ready briefs that explain the purpose, differentiating value, search requirements, sources, experts, structure, links, and action.',
      items: [
        'Primary and supporting intent, audience, stage, page type, and success measure',
        'SERP formats, entities, questions, sources, competitor gaps, and risks',
        'Outline, direct answers, tables, media plan, internal links, and CTA',
        'Fact, evidence, author, reviewer, tone, accessibility, and update requirements',
      ],
    },
    {
      title: 'Expert-led production and editing',
      description:
        'Writing and revision built from interviews, approved first-party material, credible sources, and page-specific search and conversion needs.',
      items: [
        'Subject-matter interviews and source collection',
        'Drafting, developmental edit, fact check, SEO edit, and brand edit',
        'Clear citations, examples, definitions, limitations, and action paths',
        'Original visual brief with empty evidence slots until approved assets exist',
      ],
    },
    {
      title: 'On-page publishing and internal links',
      description:
        'Production support so the approved content reaches the right template, metadata, structure, schema, media, links, and conversion experience.',
      items: [
        'Title, description, headings, anchors, accessible HTML, and media context',
        'Canonical, indexability, breadcrumb, author, reviewer, and reviewed-date checks',
        'Structured data matching visible facts and eligibility policies',
        'Contextual internal links and post-publish QA',
      ],
    },
    {
      title: 'Refresh and performance program',
      description:
        'Page-cohort reporting and ongoing decisions that improve successful assets and reduce the cost of maintaining weak ones.',
      items: [
        'Search visibility, AI-answer, customer behavior, lead, and revenue cohorts',
        'Content decay, fact change, link, competitor, SERP, and product triggers',
        'Refresh, merge, expand, reposition, redirect, archive, or stop decisions',
        'Experiment log, annotations, reviewer status, and next roadmap',
      ],
    },
  ],
  aiVisibility: {
    title: 'How should content be optimized for AI search?',
    lead:
      'Content should make useful facts and answers explicit without becoming a stack of shallow questions. AI systems may retrieve owned pages or third-party sources, so clarity, evidence, entities, corroboration, and technical access matter together.',
    platforms: [
      'Google Search',
      'Google AI Overviews',
      'Google AI Mode',
      'Bing',
      'ChatGPT',
      'Gemini',
      'Claude',
      'Perplexity',
    ],
    boundary:
      'There is no writing template that guarantees a citation. Outputs vary and some platforms may not browse for a prompt. We improve the eligible source, record platform and prompt conditions, and separate observed inclusion from causality.',
    workstreams: [
      {
        title: 'Direct, bounded answers',
        description:
          'Answer the actual question early, define scope and terms, preserve exceptions, and connect summary passages to deeper evidence and action.',
        output: 'answer inventory, extractable passages, definitions, tables, and limitations',
      },
      {
        title: 'Source and expert signals',
        description:
          'Use accountable authors or reviewers, primary and credible sources, first-party evidence, clear dates, and documented claim ownership.',
        output: 'source map, expert inputs, fact register, and review workflow',
      },
      {
        title: 'Entity and page relationships',
        description:
          'Make relationships among organizations, people, products, services, places, concepts, and evidence clear across visible content and internal links.',
        output: 'entity map, canonical page roles, link plan, and structured-data recommendations',
      },
      {
        title: 'Prompt and citation monitoring',
        description:
          'Track stable customer questions, brand presence, cited pages and domains, factual accuracy, and whether the result supports a real decision.',
        output: 'versioned prompt set, source observations, accuracy log, and refresh priorities',
      },
    ],
  },
  architectureTitle: 'Which types of SEO content deserve investment?',
  architectureLead:
    'The strongest programs fund the pages customers need to understand, evaluate, and act—not only top-of-funnel articles.',
  architecture: [
    {
      pageType: 'Commercial pages',
      intent: 'Can this product or service solve my need?',
      examples: 'service, product, category, solution, use case, industry, and location',
      signal: 'explicit offer, audience, facts, proof, fit, boundaries, and action',
    },
    {
      pageType: 'Evaluation pages',
      intent: 'How should I choose?',
      examples: 'comparison, alternative, pricing, implementation, integration, and criteria',
      signal: 'declared method, balanced differences, current evidence, and decision path',
    },
    {
      pageType: 'Educational resources',
      intent: 'Help me understand or complete a task',
      examples: 'guides, tutorials, glossaries, research, checklists, and examples',
      signal: 'original utility, expert or source review, completeness, and relevant next step',
    },
    {
      pageType: 'Tools and original assets',
      intent: 'Help me calculate, diagnose, compare, or decide',
      examples: 'calculators, templates, datasets, benchmarks, audits, and interactive tools',
      signal: 'working utility, transparent method, inputs, limitations, ownership, and maintenance',
    },
    {
      pageType: 'Evidence and trust',
      intent: 'Can I verify the organization and claim?',
      examples: 'case studies, methodology, authors, reviews, policies, and source pages',
      signal: 'approved metrics, dates, source context, named responsibility, and limitations',
    },
  ],
  processTitle: 'How does an SEO content engagement work?',
  processLead:
    'Research and page ownership happen before drafting. Production is a controlled flow from evidence to expert review, publishing QA, measurement, and maintenance.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Business, audience, and expertise discovery',
      description:
        'Map offers, customers, journeys, sales questions, product truth, subject experts, approved sources, claims, publishing systems, brand voice, and outcomes.',
      output: 'source inventory, expert plan, audience map, claims, and measurement definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Content, SERP, and demand audit',
      description:
        'Inventory pages and performance; research search results, competitors, entities, questions, formats, citations, site search, and customer evidence.',
      output: 'page decisions, opportunity map, baseline, and content-quality gaps',
    },
    {
      number: '03',
      cadence: 'Weeks 3–4',
      title: 'Architecture and roadmap',
      description:
        'Assign canonical ownership across commercial, evaluation, educational, tool, and trust assets; prioritize by value, evidence, effort, and maintenance.',
      output: 'page map, internal links, production roadmap, and brief queue',
    },
    {
      number: '04',
      cadence: 'Per asset',
      title: 'Brief, interview, and draft',
      description:
        'Define search and customer requirements, gather approved sources and expert input, create the draft, and preserve uncertainty and limitations.',
      output: 'research pack, content brief, interview notes, and first draft',
    },
    {
      number: '05',
      cadence: 'Per asset',
      title: 'Review, publish, and QA',
      description:
        'Complete developmental, factual, brand, SEO, accessibility, legal or specialist review as needed, then publish and validate the page experience.',
      output: 'approved page, metadata, links, schema, visual brief, and QA record',
    },
    {
      number: '06',
      cadence: 'Monthly / quarterly',
      title: 'Measure and maintain',
      description:
        'Compare page cohorts with search, AI answers, customer progression, and business outcomes; refresh changed facts and consolidate weak assets.',
      output: 'content report, refresh decisions, experiment findings, and next roadmap',
    },
  ],
  measurementTitle: 'How should SEO content performance be measured?',
  measurementLead:
    'The metric should match the page’s job. A definition page, comparison, product page, local service page, and case study should not be judged by one traffic threshold.',
  measurementBoundary:
    'Content may assist a journey without receiving the last click. Consent, direct visits, AI answers, sales-cycle length, product changes, brand demand, and attribution models limit causal claims. We use page cohorts and defined next actions.',
  measurement: [
    {
      name: 'Search ownership',
      definition: 'Relevant impressions, clicks, query breadth, landing-page visibility, cannibalization, and eligible page types for the intended audience and task.',
      source: 'Google Search Console, Bing Webmaster Tools, SERP and page cohorts',
    },
    {
      name: 'Answer usefulness',
      definition: 'Whether the page answers the intended question clearly, covers decision criteria, uses valid sources, passes expert review, and offers a useful next step.',
      source: 'editorial QA, source register, reviewer record, and user evidence',
    },
    {
      name: 'Customer progression',
      definition: 'Relevant internal-link journeys, product or service exploration, tool completion, return visits, calls, forms, trials, bookings, or other page-specific actions.',
      source: 'consent-aware analytics and business systems',
    },
    {
      name: 'AI-answer presence and accuracy',
      definition: 'Page or brand inclusion, cited source, framing, and factual accuracy for a stable question set related to the asset.',
      source: 'versioned prompt observations',
    },
    {
      name: 'Commercial contribution',
      definition: 'Qualified leads, accepted opportunities, product use, orders, pipeline, revenue, or assisted outcomes associated with the page cohort.',
      source: 'approved CRM, commerce, product, or attribution data',
    },
  ],
  evidence: {
    title: 'What content evidence can you inspect?',
    lead:
      'The approved project snapshots below show search and AI-answer visibility for properties using this broader operating approach. They are not represented as content-only causation or universal client outcomes.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Content page cohort',
        description: 'Reserved for approved pages, publication dates, query or landing-page metrics, and business context.',
      },
      {
        label: 'Content citation example',
        description: 'Reserved for a dated platform, exact prompt, cited page, source role, and accuracy review.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right SEO content agency?',
  fitLead:
    'Fit is strongest when the business wants expert, maintainable search assets and can participate in source, product, and claim review.',
  goodFit: [
    'You have real product, service, customer, operational, or subject expertise to contribute',
    'Subject, product, legal, clinical, financial, or other qualified reviewers can approve relevant claims',
    'The website can support commercial, evaluation, resource, tool, and trust page types',
    'Publishing, internal links, media, and updates can be implemented and maintained',
    'You want content measured against search and commercial jobs—not word count',
  ],
  notFit: [
    'You need guaranteed rankings, citations, leads, or revenue per article',
    'The strategy is a fixed volume of generic AI-generated posts',
    'Claims, statistics, product facts, locations, or examples cannot be verified',
    'No reviewer or publishing owner can participate',
    'Success is defined only as words published or total sessions',
  ],
  sources: [
    {
      label: 'Google: creating helpful, reliable, people-first content',
      url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
      description: 'Google’s primary questions for useful, trustworthy content and self-assessment.',
    },
    {
      label: 'Google Search Quality Evaluator Guidelines',
      url: 'https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf',
      description: 'Public guidance used by raters; useful context, not a direct ranking checklist.',
    },
    {
      label: 'Google: AI-generated content guidance',
      url: 'https://developers.google.com/search/blog/2023/02/google-search-and-ai-content',
      description: 'Primary Google guidance emphasizing quality and purpose rather than production method.',
    },
    {
      label: 'W3C Web Content Accessibility Guidelines',
      url: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
      description: 'Primary accessibility standards informing semantic structure and usable content.',
    },
  ],
  faqTitle: 'Questions to ask before hiring an SEO content agency',
  faqs: [
    {
      question: 'What does an SEO content agency do?',
      answer:
        'An SEO content agency researches customer and search demand, audits existing pages, defines page ownership, creates content strategy and briefs, gathers expert and source evidence, writes and edits, supports on-page publishing and internal links, and measures and maintains content across Google and AI-assisted search.',
    },
    {
      question: 'Do you write only blog posts?',
      answer:
        'No. Commercial and evaluation pages often create more direct value. The program can include services, products, categories, use cases, industries, locations, comparisons, pricing, integrations, methodology, case studies, research, guides, glossaries, tools, and refreshes. Page type follows the customer task.',
    },
    {
      question: 'How do you use SERP research without copying competitors?',
      answer:
        'We use search results to understand dominant intent, page types, questions, entities, sources, SERP features, and minimum information expectations. Differentiation comes from first-party expertise, customer and product evidence, original examples or tools, clearer decisions, better sourcing, and honest boundaries.',
    },
    {
      question: 'Do you use AI to create content?',
      answer:
        'AI can assist research organization, transcription, analysis, and drafting, but it does not replace source collection, expert judgment, fact checking, brand decisions, originality, claim approval, or editorial accountability. The production method is subordinate to whether the final page is accurate, useful, distinctive, and maintainable.',
    },
    {
      question: 'Can you optimize existing content instead of creating more?',
      answer:
        'Yes. We inventory existing assets and decide whether to keep, improve, reposition, merge, redirect, archive, or delete before proposing new pages. Refreshing a page with existing authority and correct intent can be a better investment than adding another overlapping URL.',
    },
    {
      question: 'How do you optimize content for ChatGPT and AI Overviews?',
      answer:
        'We make answers and entities explicit, improve technical access and canonical ownership, use credible sources and accountable experts, connect facts to evidence, strengthen third-party corroboration, and monitor stable prompts for citations and accuracy. We do not guarantee that a model will retrieve or cite a page.',
    },
    {
      question: 'How long does SEO content take to work?',
      answer:
        'Research, interviews, writing, review, and publishing can be scheduled, but crawling, ranking, AI retrieval, authority, demand, and customer response vary. Timing depends on the topic, site, competition, evidence, review speed, existing authority, and page type. We use page cohorts and milestones rather than a universal promise.',
    },
    {
      question: 'What do SEO content services cost?',
      answer:
        'Ongoing TheProjectSEO engagements currently start from $3,500 per month. Scope depends on strategy, audit depth, page types, research, expert interviews, writing and editing, regulatory or specialist review, publishing, media, internal linking, markets, refresh work, and measurement.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/on-page-seo',
      label: 'On-page SEO',
      description: 'Page intent, titles, headings, copy, entities, schema, links, and conversion paths.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Prompt, source, entity, citation, answer, and accuracy work.',
    },
    {
      href: '/services/seo-audit',
      label: 'SEO audit services',
      description: 'Technical, content, authority, competitor, analytics, and AI-search diagnosis.',
    },
    {
      href: '/methodology',
      label: 'Our methodology',
      description: 'Evidence, prioritization, expert review, implementation, QA, and measurement.',
    },
  ],
  ctaEyebrow: 'Build content worth finding',
  ctaTitle: 'Find the pages your audience needs—and the content you should improve or retire.',
  ctaLead:
    'Share your products or services, audiences, existing content, subject experts, publishing stack, and commercial outcomes. We will identify the highest-value content decisions.',
  ctaBenefits: [
    'Content, demand, SERP, entity, source, and competitor assessment',
    'Commercial and educational page ownership priorities',
    'Expert, editorial, publishing, internal-link, and measurement plan',
  ],
}

const ecommerceSeo: IndustryLeadPageData = {
  slug: 'ecommerce-seo',
  path: '/services/ecommerce-seo',
  parentBreadcrumb: { name: 'Services', href: '/services' },
  name: 'Ecommerce SEO',
  schemaName: 'Ecommerce SEO agency services',
  serviceType:
    'Ecommerce SEO services for technical catalogs, collections, categories, products, facets, feeds, international stores, content, authority, AI product discovery, and revenue measurement',
  schemaAudience:
    'DTC, retail, marketplace, B2B ecommerce, Shopify, Shopify Plus, Magento, Adobe Commerce, WooCommerce, BigCommerce, and headless commerce teams',
  metaTitle: 'Ecommerce SEO Agency for Organic Revenue & AI',
  metaDescription:
    'Ecommerce SEO for Shopify, Magento, WooCommerce, BigCommerce and headless stores—catalogs, facets, products, feeds, content, migrations and revenue.',
  eyebrow: 'Ecommerce SEO agency · Catalog + products + revenue',
  title: 'Turn product discovery into',
  titleAccent: 'qualified organic revenue.',
  directAnswer:
    'TheProjectSEO helps ecommerce businesses make useful categories, collections, products, brands, buying guides, and store entities discoverable across Google, Bing, shopping surfaces, and AI-assisted product research. We connect catalog and technical SEO, faceted navigation, product lifecycle, merchant facts, content, internal links, authority, migrations, and measurement to qualified product views, new customers, orders, and revenue—with stock, returns, and margin context where available.',
  primaryCta: 'Request an ecommerce SEO assessment',
  bestFit:
    'Stores with differentiated products, reliable catalog and inventory data, access to merchandising and development, and ecommerce analytics beyond sessions.',
  heroChecks: [
    'Shopify, Shopify Plus, Magento, Adobe Commerce, WooCommerce, BigCommerce, and headless stores',
    'Category, collection, facet, brand, product, variant, marketplace, and content systems',
    'Google Search, Bing, merchant surfaces, AI Overviews, ChatGPT, Gemini, and Perplexity',
    'Measurement tied to product discovery, new customers, orders, revenue, stock, and returns',
  ],
  journeyTitle: 'How do ecommerce customers search before purchasing?',
  journeyLead:
    'A shopper moves from a need or use case to category, attributes, brand, product, availability, delivery, price, and trust. The website must support exploration without exposing every filter state to search engines.',
  searchJourneys: [
    {
      stage: 'Explore',
      intent: 'Find a suitable product category',
      explanation:
        'The shopper begins with a task, recipient, problem, style, compatibility need, ingredient, material, or product type.',
      examples: ['running shoes for flat feet', 'standing desk for a small apartment'],
      conversion: 'category, collection, guide, finder, or relevant product exploration',
    },
    {
      stage: 'Narrow',
      intent: 'Filter by important attributes',
      explanation:
        'The query adds brand, size, color, material, model, compatibility, price, rating, delivery, or other decisive constraints.',
      examples: ['waterproof trail shoes size 8', 'USB-C dock for MacBook dual monitor'],
      conversion: 'curated category or useful filter landing page with available products',
    },
    {
      stage: 'Evaluate',
      intent: 'Choose a product and seller',
      explanation:
        'The shopper checks specifications, images, variants, fit, reviews, comparison, warranty, stock, delivery, returns, seller trust, and total price.',
      examples: ['product x vs product y', 'product x reviews and warranty'],
      conversion: 'qualified product view, comparison, wishlist, add to cart, or store lookup',
    },
    {
      stage: 'Buy',
      intent: 'Complete the order confidently',
      explanation:
        'Current inventory, variant, shipping, tax, payment, promotion, return policy, mobile performance, and checkout handoff determine whether demand becomes revenue.',
      examples: ['product x in stock India', 'brand x delivery Philippines'],
      conversion: 'checkout, order, new customer, subscription, or B2B enquiry',
    },
  ],
  obstaclesTitle: 'Why does ecommerce SEO grow traffic without profitable orders?',
  obstaclesLead:
    'Catalog size creates technical and measurement complexity. Search performance can look healthy while customers land on unavailable products, duplicate facets, weak categories, or low-margin demand.',
  obstacles: [
    {
      title: 'Facets decide the index',
      problem:
        'Filters, sorts, internal search, parameters, pagination, tags, collections, currencies, and app routes can create near-infinite duplicate or empty states.',
      response:
        'We classify states by demand, inventory depth, uniqueness, customer value, crawl path, canonical behavior, and maintenance. Only qualified combinations receive search ownership.',
    },
    {
      title: 'Product lifecycle destroys or traps value',
      problem:
        'Temporary stock-outs, discontinued products, replacements, variants, seasonal items, and marketplace sellers often use one blunt redirect or deletion rule.',
      response:
        'Lifecycle states receive distinct expectations for status, visible messaging, canonicals, internal links, alternatives, sitemaps, structured data, and retention.',
    },
    {
      title: 'Category pages have no merchandising value',
      problem:
        'A title and generic paragraph cannot compensate for poor taxonomy, thin assortment, unavailable products, weak filters, missing attributes, or a confusing mobile experience.',
      response:
        'SEO requirements are designed with merchandising: collection purpose, selection, order, attribute coverage, copy, media, links, filters, stock thresholds, and conversion routes work together.',
    },
    {
      title: 'Revenue reporting ignores commercial quality',
      problem:
        'Last-click revenue can hide new versus returning customers, discounting, returns, cancellations, stock, margin, marketplace overlap, and assisted research.',
      response:
        'We report search and landing cohorts with new-customer, order, revenue, stock, return, and approved margin context where available, and document the attribution model.',
    },
  ],
  deliverablesTitle: 'What is included in ecommerce SEO services?',
  deliverablesLead:
    'The work integrates platform and catalog engineering with search demand, merchandising, product information, content, authority, AI discovery, and commercial reporting.',
  deliverables: [
    {
      title: 'Catalog and technical audit',
      description:
        'A crawl-to-render review of category, collection, product, variant, facet, search, locale, currency, app, and checkout-adjacent routes.',
      items: [
        'Indexation, status, canonical, redirect, sitemap, pagination, and parameter states',
        'JavaScript, internal links, navigation, media, Core Web Vitals, and mobile behavior',
        'Duplicate content, orphans, product lifecycle, and search-result quality',
        'Platform, theme, app, feed, and release dependencies',
      ],
    },
    {
      title: 'Customer demand and taxonomy',
      description:
        'A model for category, use case, attribute, brand, compatibility, product, problem, comparison, and post-purchase search.',
      items: [
        'Search, site search, customer support, reviews, returns, sales, and merchandising language',
        'Category, collection, brand, product, facet, guide, and comparison ownership',
        'Competitor taxonomy, SERP, product, content, and authority gaps',
        'Cannibalization and generated-page publication thresholds',
      ],
    },
    {
      title: 'Category and merchandising SEO',
      description:
        'Search requirements for collections that remain useful as inventory, seasons, campaigns, and customer behavior change.',
      items: [
        'Category purpose, assortment, attributes, filters, order, copy, media, and links',
        'Indexable facet and landing-page rules',
        'Out-of-stock, low-stock, empty, campaign, and seasonal behavior',
        'Related categories, guides, brands, products, and store routes',
      ],
    },
    {
      title: 'Product, feed, and structured data',
      description:
        'Consistent visible and machine-readable product facts across pages, variants, merchant feeds, availability, and approved channels.',
      items: [
        'Titles, identifiers, brand, categories, attributes, descriptions, media, and reviews',
        'Variant, price, availability, shipping, return, warranty, and offer consistency',
        'Product and merchant structured-data eligibility and validation',
        'Feed-to-page discrepancies and ownership',
      ],
    },
    {
      title: 'Content, links, and authority',
      description:
        'Buying guides, comparisons, use cases, original assets, and credible third-party discovery that support product decisions.',
      items: [
        'Research-to-category and category-to-product internal links',
        'Expert, customer, product, and source-led editorial content',
        'Digital PR, partner, brand, manufacturer, publication, and community opportunities',
        'No copied manufacturer content, fake reviews, or mass-generated thin pages',
      ],
    },
    {
      title: 'AI and ecommerce measurement',
      description:
        'Reporting that connects search and AI product discovery to available inventory and commercially meaningful outcomes.',
      items: [
        'Visibility by category, attribute, brand, product, market, and intent',
        'AI prompt, product mention, citation, source, fact, and availability tracking',
        'Product views, add to cart, orders, new customers, revenue, returns, and stock',
        'Template, category, product, and content cohort experiments',
      ],
    },
  ],
  aiVisibility: {
    title: 'How should ecommerce stores prepare for AI product discovery?',
    lead:
      'AI answers and shopping experiences may compare products by use case, attribute, price, availability, reviews, and seller trust. Clear product data and useful category context matter, but current inventory and merchant systems remain authoritative.',
    platforms: [
      'Google Search',
      'Google AI Overviews',
      'Google AI Mode',
      'Bing',
      'ChatGPT',
      'Gemini',
      'Claude',
      'Perplexity',
    ],
    boundary:
      'AI systems can misstate product specifications, compatibility, price, stock, shipping, reviews, and returns. No agency can guarantee product inclusion or recommendation. We monitor observed answers and point time-sensitive facts back to current product and merchant sources.',
    workstreams: [
      {
        title: 'Product fact integrity',
        description:
          'Align identifiers, brand, variant, attributes, compatibility, price, stock, shipping, returns, reviews, media, and merchant data.',
        output: 'product fact requirements, feed discrepancy log, schema plan, and freshness rules',
      },
      {
        title: 'Conversational product demand',
        description:
          'Map realistic prompts combining use case, constraints, attributes, compatibility, budget, location, and availability to useful pages.',
        output: 'prompt taxonomy, category gaps, comparison roadmap, and source map',
      },
      {
        title: 'Brand and seller entities',
        description:
          'Clarify relationships among the organization, stores, brands, products, categories, sellers, manufacturers, and credible external sources.',
        output: 'entity graph, profile corrections, internal links, and corroboration targets',
      },
      {
        title: 'Product-answer monitoring',
        description:
          'Record inclusion, citations, facts, availability state, destination quality, and competitor context for stable commercial prompts.',
        output: 'dated platform observations, discrepancies, and priority corrections',
      },
    ],
  },
  architectureTitle: 'Which ecommerce pages should be indexable?',
  architectureLead:
    'Search ownership should follow stable customer demand and useful inventory. The platform can generate a route; that does not mean the route deserves indexing.',
  architecture: [
    {
      pageType: 'Category and collection',
      intent: 'Show me a useful group of products',
      examples: 'department, category, subcategory, collection, brand, use case',
      signal: 'distinct demand, sufficient inventory, curation, filters, context, links, and maintenance',
    },
    {
      pageType: 'Approved facet landing',
      intent: 'Show me products meeting an important constraint',
      examples: 'material, size, compatibility, audience, price band, feature combination',
      signal: 'stable demand, useful results, unique value, crawl control, and no empty state',
    },
    {
      pageType: 'Product and variant',
      intent: 'Is this exact item right and available?',
      examples: 'product, model, SKU, variant, bundle, subscription, seller offer',
      signal: 'specific facts, original value, current offer, media, reviews, policy, and purchase route',
    },
    {
      pageType: 'Guide and comparison',
      intent: 'Help me choose or use a product',
      examples: 'buying guide, compatibility, how-to, alternatives, versus, care, troubleshooting',
      signal: 'expert or source evidence, decision criteria, relevant available products, and date',
    },
    {
      pageType: 'Store and trust',
      intent: 'Can I buy from this seller confidently?',
      examples: 'store, location, about, delivery, returns, warranty, contact, support',
      signal: 'verified identity, current terms, real location or coverage, proof, and support route',
    },
  ],
  processTitle: 'How does an ecommerce SEO engagement work?',
  processLead:
    'The first cycle maps platform states, catalog truth, search demand, merchandising, and commercial outcomes. Releases then move through controlled template and page cohorts.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Platform and catalog discovery',
      description:
        'Map platforms, themes, apps, feeds, catalogs, attributes, variants, markets, stock and product states, merchandising, releases, and measurement.',
      output: 'system diagram, catalog and lifecycle map, owners, and outcome definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Technical and demand baseline',
      description:
        'Crawl and render templates and facets, inspect Search Console and commerce data, analyze customer demand, competitors, feeds, entities, and AI prompts.',
      output: 'defect backlog, demand and taxonomy map, product discrepancies, and baseline',
    },
    {
      number: '03',
      cadence: 'Weeks 3–5',
      title: 'Search and merchandising architecture',
      description:
        'Assign category, facet, brand, product, guide, comparison, and trust ownership with index, lifecycle, internal-link, and inventory rules.',
      output: 'page map, template requirements, facet rules, briefs, and roadmap',
    },
    {
      number: '04',
      cadence: 'Monthly / by release',
      title: 'Implementation and QA',
      description:
        'Ship technical fixes, template changes, category improvements, product requirements, and content with mobile, feed, stock, and conversion validation.',
      output: 'released cohorts, QA evidence, resolved discrepancies, and decision log',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Content and authority',
      description:
        'Create expert buying assets, strengthen internal links and product entities, and earn relevant partner, publication, brand, and customer discovery.',
      output: 'content assets, relevant citations, entity fixes, and AI-answer experiments',
    },
    {
      number: '06',
      cadence: 'Monthly / quarterly',
      title: 'Commerce review',
      description:
        'Compare template and page cohorts with stock, product discovery, new customers, orders, revenue, returns or margin context, and changing demand.',
      output: 'commercial report, lifecycle decisions, experiment findings, and next roadmap',
    },
  ],
  measurementTitle: 'How should ecommerce SEO be measured?',
  measurementLead:
    'Search visibility has commercial value when customers reach suitable, available products and complete profitable orders. Catalog and merchandising context belongs in the report.',
  measurementBoundary:
    'Consent, cross-device journeys, marketplaces, promotions, returns, cancellations, attribution windows, inventory, and offline stores affect causality. We use agreed definitions and separate observed search cohorts from modeled or assisted influence.',
  measurement: [
    {
      name: 'Qualified catalog visibility',
      definition: 'Non-brand impressions, clicks, landing pages, and query coverage by category, attribute, brand, product, market, and purchase stage.',
      source: 'Google Search Console, Bing Webmaster Tools, and controlled cohorts',
    },
    {
      name: 'Product discovery',
      definition: 'Category engagement, product views, filter and site-search success, variant selection, wishlist, and add-to-cart behavior.',
      source: 'consent-aware ecommerce analytics',
    },
    {
      name: 'Organic commerce outcomes',
      definition: 'Orders, new customers, revenue, average order value, cancellations, returns, and approved margin context by landing cohort.',
      source: 'ecommerce platform and approved attribution model',
    },
    {
      name: 'Catalog search health',
      definition: 'Valuable indexable pages, duplicate or empty states, stock and lifecycle accuracy, product-feed consistency, and regressions.',
      source: 'crawler, Search Console, catalog and feed data, logs, and release QA',
    },
    {
      name: 'AI product visibility',
      definition: 'Brand or product presence, cited sources, facts, availability, and buyable destination for stable commercial prompts.',
      source: 'dated platform observations by market and wording',
    },
  ],
  evidence: {
    title: 'What ecommerce SEO evidence can you inspect?',
    lead:
      'The current approved results demonstrate search and AI visibility in other business models. They are not presented as ecommerce revenue performance or proof that a single ecommerce tactic caused an outcome.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Ecommerce cohort evidence',
        description: 'Reserved for approved categories or products, dates, stock, search, orders, revenue, and attribution context.',
      },
      {
        label: 'Catalog technical example',
        description: 'Reserved for an approved facet, lifecycle, feed, render, or migration before-and-after with validation.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right ecommerce SEO agency?',
  fitLead:
    'Fit is strongest when SEO can work with catalog, merchandising, product, development, operations, and analytics.',
  goodFit: [
    'You operate a real DTC, retail, marketplace, B2B, subscription, or ecommerce catalog',
    'Catalog, product, inventory, feed, merchandising, and technical owners can participate',
    'Product, price, stock, delivery, return, and claim facts can be maintained',
    'The team can measure product discovery, new customers, orders, and revenue cohorts',
    'You want Google and AI product discovery tied to commercial quality',
  ],
  notFit: [
    'You need guaranteed rankings, citations, orders, revenue, or return on investment',
    'Inventory, products, prices, variants, and policies cannot stay accurate',
    'The plan depends on unlimited thin facets, copied manufacturer content, or fake reviews',
    'No one can change templates, apps, feeds, catalogs, or measurement',
    'Success is defined only as sessions without stock and order context',
  ],
  sources: [
    {
      label: 'Google: ecommerce site structure',
      url: 'https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure',
      description: 'Primary guidance for navigation, links, categories, and product discovery.',
    },
    {
      label: 'Google: product structured data',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/product',
      description: 'Primary requirements for visible, accurate product and offer information.',
    },
    {
      label: 'Google: faceted navigation',
      url: 'https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation',
      description: 'Primary technical guidance for managing filtered URL spaces.',
    },
    {
      label: 'Google Merchant Center product data specification',
      url: 'https://support.google.com/merchants/answer/7052112',
      description: 'Primary definitions for common merchant product data fields.',
    },
  ],
  faqTitle: 'Questions to ask before hiring an ecommerce SEO agency',
  faqs: [
    {
      question: 'What does an ecommerce SEO agency do?',
      answer:
        'An ecommerce SEO agency improves the technical catalog, taxonomy, categories, collections, facets, brands, products, feeds, content, internal links, authority, AI product discovery, and measurement systems that help relevant shoppers find and buy available products.',
    },
    {
      question: 'Which ecommerce platforms do you support?',
      answer:
        'We can work with Shopify, Shopify Plus, Magento or Adobe Commerce, WooCommerce, BigCommerce, headless commerce, marketplaces, and custom platforms. The work adapts to the real templates, apps, feeds, rendering, international setup, release process, and operational constraints rather than assume platform defaults are correct.',
    },
    {
      question: 'How do you manage faceted navigation?',
      answer:
        'We inventory filter and parameter states and evaluate demand, inventory depth, uniqueness, customer value, crawl paths, canonicals, links, results quality, and maintenance. Qualified combinations may receive curated indexable ownership; duplicate, empty, sort, session, and low-value states usually need control.',
    },
    {
      question: 'What should happen to out-of-stock and discontinued products?',
      answer:
        'Temporary stock-outs, returning items, discontinued products, replacements, variants, seasonal products, and marketplace offers need different rules. We define visible messaging, status, canonical, structured data, internal links, alternatives, sitemap, archive, and redirect behavior with catalog and product owners.',
    },
    {
      question: 'Can you help with an ecommerce migration?',
      answer:
        'Yes. We can support inventory and URL mapping, content and metadata parity, redirects, canonicals, category and navigation preservation, product states, structured data, feeds, international signals, staging QA, launch monitoring, and post-launch validation. No migration can be promised zero fluctuation.',
    },
    {
      question: 'How do you optimize ecommerce for ChatGPT and AI search?',
      answer:
        'We improve product and merchant fact integrity, category and comparison answers, crawler access, entities, source quality, and third-party corroboration, then monitor stable product prompts for inclusion and accuracy. We cannot guarantee recommendations, and live price and stock must defer to current commerce systems.',
    },
    {
      question: 'How long does ecommerce SEO take?',
      answer:
        'Timing depends on catalog and market size, platform and technical debt, competition, authority, inventory, implementation speed, seasonality, and customer cycle. We use template and page cohorts with commercial checkpoints rather than guarantee rankings or revenue by a fixed date.',
    },
    {
      question: 'What does ecommerce SEO cost?',
      answer:
        'Ongoing TheProjectSEO engagements currently start from $3,500 per month. Scope depends on catalog, market and language count, platform and feed complexity, facets and product lifecycle, content ownership, implementation, migration or authority needs, analytics, and AI-product monitoring.',
    },
  ],
  relatedLinks: [
    {
      href: '/seo-for-shopify',
      label: 'Shopify SEO',
      description: 'A focused Shopify and Shopify Plus page for themes, collections, markets, apps, and growth.',
    },
    {
      href: '/industries/ecommerce',
      label: 'SEO for ecommerce companies',
      description: 'Industry strategy across shopper journeys, merchandising, operations, and AI discovery.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Facets, rendering, indexation, migrations, performance, and release QA.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Product prompts, facts, entities, sources, citations, and accuracy monitoring.',
    },
  ],
  ctaEyebrow: 'Build profitable organic discovery',
  ctaTitle: 'Find where your catalog, products, and platform lose qualified shoppers.',
  ctaLead:
    'Share your platform, catalog, markets, feeds, inventory lifecycle, merchandising, and commerce reporting. We will identify the highest-priority ecommerce SEO work.',
  ctaBenefits: [
    'Catalog, facet, product, feed, lifecycle, and technical assessment',
    'Category, content, internal-link, authority, and AI-product opportunities',
    'Stock-aware order, new-customer, revenue, and measurement plan',
  ],
}

const localSeo: IndustryLeadPageData = {
  slug: 'local-seo',
  path: '/services/local-seo',
  parentBreadcrumb: { name: 'Services', href: '/services' },
  name: 'Local SEO',
  schemaName: 'Local SEO and Google Business Profile optimization services',
  serviceType:
    'Local SEO services for Google Business Profile, Bing Places, location pages, local entities, reviews, citations, maps, local content, and lead measurement',
  schemaAudience:
    'Businesses with verified physical locations or legitimate service areas in India and the Philippines',
  metaTitle: 'Local SEO Agency for India & Philippines',
  metaDescription:
    'Local SEO for verified locations and service areas in India and the Philippines—profiles, location pages, reviews, citations, maps and qualified local leads.',
  eyebrow: 'Local SEO agency · India + Philippines',
  title: 'Be found where you',
  titleAccent: 'actually operate.',
  directAnswer:
    'TheProjectSEO helps businesses with real locations or legitimate service areas in India and the Philippines improve discovery across Google Search, Google Maps, Bing, local directories, and AI-assisted local questions. We align business profiles, location and service pages, categories, services, hours, reviews, citations, local entities, structured visible facts, and call or booking measurement. We do not create fake offices, virtual-location footprints, or doorway pages for places a business cannot serve.',
  primaryCta: 'Request a local SEO assessment',
  bestFit:
    'Businesses with verified branches, offices, stores, clinics, dealerships, restaurants, or legitimate service areas, plus local owners who can maintain operational facts and respond to customers.',
  heroChecks: [
    'India and the Philippines only for dedicated country and city location strategy',
    'Google Business Profile, Bing Places, maps, local packs, organic results, and AI local answers',
    'Locations, departments, practitioners, services, areas, reviews, citations, and local pages',
    'Reporting tied to calls, directions, appointments, bookings, visits, and qualified leads',
  ],
  journeyTitle: 'How do customers search for a local business?',
  journeyLead:
    'Local intent is more than “near me.” Customers combine a service or product with place, urgency, availability, language, price boundaries, attributes, reviews, directions, and trust before acting.',
  searchJourneys: [
    {
      stage: 'Need',
      intent: 'Find a relevant service or product nearby',
      explanation:
        'The customer searches by task, condition, category, product, or problem and expects locally eligible options.',
      examples: ['technical SEO consultant in Manila', 'car service center in Pune'],
      conversion: 'local result, service page, category page, or relevant branch',
    },
    {
      stage: 'Qualify',
      intent: 'Check location and service fit',
      explanation:
        'The user verifies whether the business serves the area, offers the exact service, is open, has availability, speaks the language, and suits the situation.',
      examples: ['clinic x open Sunday', 'agency serving SaaS companies in Bangalore'],
      conversion: 'profile action, location page, service detail, call, message, or booking',
    },
    {
      stage: 'Trust',
      intent: 'Compare nearby providers',
      explanation:
        'The customer evaluates reviews, recency, responses, photos, staff, credentials, prices or boundaries, accessibility, policies, and evidence.',
      examples: ['business x reviews', 'best-rated service x in Cebu'],
      conversion: 'review and evidence visit, directions, call, appointment, or shortlist',
    },
    {
      stage: 'Act',
      intent: 'Reach the right local team',
      explanation:
        'The final step depends on accurate address or service area, hours, phone, directions, branch or department, appointment, inventory, and contact routing.',
      examples: ['directions to business x', 'book service x near me'],
      conversion: 'qualified call, route request, booking, visit, order, or accepted local lead',
    },
  ],
  obstaclesTitle: 'Why does local SEO produce visibility without customers?',
  obstaclesLead:
    'Local performance depends on operational truth. Profile optimization cannot compensate for wrong hours, duplicate listings, fake locations, weak service routing, or calls that reach the wrong branch.',
  obstacles: [
    {
      title: 'Profiles and website entities disagree',
      problem:
        'Names, categories, addresses, service areas, hours, phone numbers, departments, practitioners, and services can drift across the site, profiles, directories, and partners.',
      response:
        'We establish approved source ownership, map each real entity, correct high-value inconsistencies, and define update workflows across website and eligible platforms.',
    },
    {
      title: 'Location pages are interchangeable',
      problem:
        'Mass pages that swap a city name without real presence, people, services, proof, operational detail, or local usefulness create poor customer and search experiences.',
      response:
        'Each dedicated page must represent a real branch, office, practitioner, store, or legitimate service context with distinct facts, evidence, coverage, and action.',
    },
    {
      title: 'Review activity is manipulated or unmanaged',
      problem:
        'Review gating, incentives, fake reviews, selective requests, or unanswered operational issues create platform risk and mislead customers.',
      response:
        'We design compliant, consistent review requests, response roles, escalation, insight tagging, and website evidence while leaving the customer free to describe the experience.',
    },
    {
      title: 'Calls and directions are treated as revenue',
      problem:
        'Wrong numbers, spam, job seekers, existing customers, unsupported areas, unavailable services, and duplicate leads can inflate reports.',
      response:
        'We define minimum-necessary call, booking, visit, and qualification stages by location and service, respect consent, and report profile and website actions separately.',
    },
  ],
  deliverablesTitle: 'What is included in local SEO services?',
  deliverablesLead:
    'The scope connects platform eligibility, website entities, real location and service facts, reputation, authority, local content, AI answers, and customer measurement.',
  deliverables: [
    {
      title: 'Local entity and profile audit',
      description:
        'An inventory of real businesses, branches, departments, practitioners, service areas, profiles, duplicates, ownership, and material facts.',
      items: [
        'Google Business Profile and Bing Places eligibility and access',
        'Name, category, address, area, hours, phone, website, services, and attributes',
        'Duplicates, moved, closed, merged, department, practitioner, and suspension risks',
        'Source-of-truth and update-owner matrix',
      ],
    },
    {
      title: 'Local demand and competitor research',
      description:
        'A model of service, product, problem, brand, attribute, urgency, area, city, and “near me” demand across eligible markets.',
      items: [
        'Local pack, organic, directory, marketplace, and AI-answer patterns',
        'Profile categories, services, reviews, links, pages, and competitor coverage',
        'India and Philippines market, language, city, and neighborhood context',
        'Query-to-profile, location, service, and content ownership',
      ],
    },
    {
      title: 'Location and service architecture',
      description:
        'A website system that connects real geographic entities to the products, services, people, proof, and actions available there.',
      items: [
        'Country, city, branch, department, practitioner, and service-page roles',
        'Address or service area, hours, contacts, maps, staff, access, and local proof',
        'LocalBusiness and related structured visible facts where eligible',
        'Internal links among services, industries, locations, people, and evidence',
      ],
    },
    {
      title: 'Profile optimization and operations',
      description:
        'Accurate, policy-aligned setup and maintenance for eligible business profiles and the actions customers take from them.',
      items: [
        'Categories, services, attributes, descriptions, links, photos, and updates',
        'Hours, holidays, closures, moves, departments, and practitioner changes',
        'UTM and destination consistency where supported',
        'Owner training, permissions, escalation, and change log',
      ],
    },
    {
      title: 'Reviews, citations, and local authority',
      description:
        'Legitimate reputation and local corroboration through customer experience, relevant listings, partners, community sources, and evidence.',
      items: [
        'Compliant review request and response workflows',
        'Review-topic insight without manipulation or gating',
        'Priority directory, partner, professional, local, and industry citations',
        'Local digital PR and community assets based on real involvement',
      ],
    },
    {
      title: 'Local and AI-answer measurement',
      description:
        'Reporting that separates platform exposure from qualified customer action and local commercial outcomes.',
      items: [
        'Local pack, organic, profile, page, service, location, and query cohorts',
        'AI local prompt, recommendation, citation, source, and accuracy observations',
        'Calls, messages, directions, appointments, bookings, visits, and accepted leads',
        'Spam, wrong-area, existing-customer, recruitment, and duplicate handling',
      ],
    },
  ],
  aiVisibility: {
    title: 'How do local businesses appear in AI answers?',
    lead:
      'AI assistants may combine search results, maps, profiles, reviews, directories, publishers, and website pages when answering local questions. Consistent business, place, service, and reputation facts reduce ambiguity.',
    platforms: [
      'Google Search',
      'Google Maps',
      'Google AI Overviews',
      'Google AI Mode',
      'Bing',
      'ChatGPT',
      'Gemini',
      'Perplexity',
    ],
    boundary:
      'Local answers can be personalized, outdated, or wrong. Platforms control eligibility and recommendations, and no agency can guarantee a local-pack position or AI mention. Official profile and business information should remain the current operational source.',
    workstreams: [
      {
        title: 'Place and service facts',
        description:
          'Make legal and public name, real location or area, categories, services, hours, phone, contacts, and operational boundaries explicit and current.',
        output: 'local fact model, owner matrix, profile and website discrepancy log',
      },
      {
        title: 'Local prompt mapping',
        description:
          'Test realistic service, city, neighborhood, urgency, attribute, comparison, and branded validation questions in India and the Philippines.',
        output: 'prompt cohorts, source map, competitor observations, and answer gaps',
      },
      {
        title: 'Entity and reputation consistency',
        description:
          'Align the business, branches, departments, practitioners, services, reviews, profiles, website, and credible local sources.',
        output: 'entity graph, citation priorities, review insights, and structured-data plan',
      },
      {
        title: 'Accuracy and change monitoring',
        description:
          'Record recommended businesses and sources, verify material facts, and recheck after hours, location, service, phone, or ownership changes.',
        output: 'dated observations, factual exceptions, and priority corrections',
      },
    ],
  },
  architectureTitle: 'Which location pages should a business create?',
  architectureLead:
    'A page should exist because the business has a real geographic entity or materially distinct service context—not because a keyword tool produced a city list.',
  architecture: [
    {
      pageType: 'Country and market',
      intent: 'Does the company serve this country credibly?',
      examples: 'India and Philippines service-market hubs',
      signal: 'real operating knowledge, market facts, services, cities, evidence, and contact path',
    },
    {
      pageType: 'City or service area',
      intent: 'Can this business serve my city?',
      examples: 'city hub, legitimate service area, market-specific service route',
      signal: 'real coverage, service details, local context, proof, limitations, and next action',
    },
    {
      pageType: 'Branch or store',
      intent: 'Can I visit or contact this exact location?',
      examples: 'office, clinic, dealership, restaurant, shop, center, campus',
      signal: 'verified address, hours, phone, services, people, media, access, reviews, and map',
    },
    {
      pageType: 'Department or practitioner',
      intent: 'Who provides this specialized service here?',
      examples: 'eligible department, professional, doctor, lawyer, agent, service team',
      signal: 'platform eligibility, real affiliation, schedule, expertise, location, and booking route',
    },
    {
      pageType: 'Location-specific service',
      intent: 'Is this exact service available in the area?',
      examples: 'service + city when offer, audience, proof, process, or constraints differ',
      signal: 'distinct local value, responsible location, evidence, availability, and conversion path',
    },
  ],
  processTitle: 'How does a local SEO engagement work?',
  processLead:
    'The first cycle verifies the real-world entity and platform eligibility. Publishing and profile work follow only after locations, areas, services, and owners are confirmed.',
  process: [
    {
      number: '01',
      cadence: 'Week 1',
      title: 'Business and location verification',
      description:
        'Document the organization, branches, service areas, departments, practitioners, categories, services, owners, evidence, customers, and local outcomes.',
      output: 'verified entity inventory, owner matrix, eligibility notes, and outcome definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–2',
      title: 'Profile, website, and demand baseline',
      description:
        'Audit eligible profiles, duplicates, citations, reviews, location and service pages, structured facts, competitors, local demand, and AI prompts.',
      output: 'discrepancy log, local baseline, demand map, and priority risks',
    },
    {
      number: '03',
      cadence: 'Weeks 2–4',
      title: 'Local architecture and source rules',
      description:
        'Assign country, city, branch, department, practitioner, service, and evidence ownership with profile, page, link, and update rules.',
      output: 'entity and page map, content requirements, citation plan, and roadmap',
    },
    {
      number: '04',
      cadence: 'Monthly',
      title: 'Profile and website implementation',
      description:
        'Correct priority facts and profiles, improve location and service pages, add valid structured data, strengthen links, and validate customer routes.',
      output: 'profile changes, released pages, corrected facts, and QA record',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Reputation and local authority',
      description:
        'Operate compliant review workflows, resolve customer and listing issues, and earn relevant directory, partner, professional, and community corroboration.',
      output: 'review process, citation improvements, local assets, and entity consistency',
    },
    {
      number: '06',
      cadence: 'Monthly / quarterly',
      title: 'Lead and accuracy review',
      description:
        'Compare local visibility with calls, directions, bookings, visits, accepted leads, spam, service or hour changes, and AI-answer accuracy.',
      output: 'local commercial report, fact refreshes, experiments, and next roadmap',
    },
  ],
  measurementTitle: 'How should local SEO performance be measured?',
  measurementLead:
    'Local visibility is useful when the right customer reaches the right branch or service team. Profile actions, website actions, and business outcomes should remain distinct.',
  measurementBoundary:
    'Local results vary by searcher location, device, time, language, history, and platform. Calls, directions, offline visits, consent, duplicate leads, existing customers, and AI assistants limit attribution. We report defined observations and qualified stages.',
  measurement: [
    {
      name: 'Local search visibility',
      definition: 'Profile, local-pack, organic, and landing-page visibility by service, location, city, market, device, and query cohort.',
      source: 'Google Search Console, Bing, eligible profile data, and controlled local observations',
    },
    {
      name: 'Profile and entity health',
      definition: 'Eligible claimed profiles with correct categories, services, hours, address or area, phone, website, ownership, and no material duplicates.',
      source: 'profile inventory, website facts, platform records, and change log',
    },
    {
      name: 'Local customer actions',
      definition: 'Calls, messages, directions, bookings, appointments, orders, store-locator use, and location-page actions by branch and service.',
      source: 'approved platform, call, booking, website, and commerce systems',
    },
    {
      name: 'Qualified local outcomes',
      definition: 'Accepted leads, attended appointments, visits, qualified calls, sales, or revenue after excluding spam, duplicates, jobs, and unsupported demand.',
      source: 'CRM, booking, call review, POS, or approved business system',
    },
    {
      name: 'AI local answer accuracy',
      definition: 'Business inclusion, cited sources, and accuracy for service, location, hours, contact, category, and reputation prompts.',
      source: 'dated platform observations by market and wording',
    },
  ],
  evidence: {
    title: 'What local SEO evidence can you inspect?',
    lead:
      'The current approved examples demonstrate strong search and AI visibility in the Philippines. They are not represented as local-pack, call, booking, or store-visit performance unless that specific evidence is later approved.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Local profile and lead example',
        description: 'Reserved for an approved location, period, profile or page actions, qualification rules, and method.',
      },
      {
        label: 'Local AI-answer example',
        description: 'Reserved for a dated service-and-place prompt, cited source, business fact, and accuracy check.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right local SEO agency?',
  fitLead:
    'Fit depends on legitimate local operations and the ability to keep customer-facing facts accurate.',
  goodFit: [
    'You have verified physical locations or legitimate service areas in India or the Philippines',
    'Location and operational owners can maintain hours, contacts, categories, services, and availability',
    'The business can follow platform policies and respond to customer issues and reviews',
    'Website and profile changes can be implemented',
    'You can distinguish calls, bookings, visits, and accepted local leads',
  ],
  notFit: [
    'You need guaranteed map rankings, reviews, calls, appointments, or revenue',
    'The strategy depends on virtual offices, fake listings, or service areas the business cannot serve',
    'Review gating, fabricated reviews, or incentives for positive sentiment are required',
    'No owner can keep locations, hours, phones, services, or profiles current',
    'You want dedicated location pages outside India and the Philippines',
  ],
  sources: [
    {
      label: 'Google Business Profile guidelines',
      url: 'https://support.google.com/business/answer/3038177',
      description: 'Primary guidelines for representing eligible businesses, locations, and service areas.',
    },
    {
      label: 'Google: improve local ranking',
      url: 'https://support.google.com/business/answer/7091',
      description: 'Primary guidance on local information, relevance, distance, and prominence.',
    },
    {
      label: 'Google Maps user-contributed content policy',
      url: 'https://support.google.com/contributionpolicy/answer/7400114',
      description: 'Primary policies relevant to reviews and prohibited manipulation.',
    },
    {
      label: 'Google: LocalBusiness structured data',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/local-business',
      description: 'Primary requirements for visible local business structured information.',
    },
  ],
  faqTitle: 'Questions to ask before hiring a local SEO agency',
  faqs: [
    {
      question: 'What does a local SEO agency do?',
      answer:
        'A local SEO agency aligns real business entities across profiles, maps, website location and service pages, categories, hours, contacts, reviews, citations, local authority, structured visible facts, and customer measurement so relevant people can find and contact eligible locations or service areas.',
    },
    {
      question: 'Which countries do you create local SEO pages for?',
      answer:
        'TheProjectSEO’s dedicated location strategy is limited to India and the Philippines. We can serve international clients on broader SEO engagements, but we do not claim offices or create dedicated local-presence pages for the United States, Hong Kong, Singapore, Australia, or other countries where we do not have the required operating basis.',
    },
    {
      question: 'Do you manage Google Business Profiles?',
      answer:
        'Yes, for eligible businesses and agreed access. Work can cover ownership, duplicates, names, categories, address or service area, hours, contacts, services, attributes, links, photos, updates, reviews, move or closure states, tracking, policy issues, and operating workflows. Platform approval and rankings cannot be guaranteed.',
    },
    {
      question: 'How many city or location pages should we create?',
      answer:
        'Only pages backed by real presence or legitimate, materially distinct service context should be considered. Each needs useful local facts, services, evidence, ownership, internal links, and a conversion route. We do not recommend generating pages for every city simply because a keyword exists.',
    },
    {
      question: 'Can you help get more reviews?',
      answer:
        'We can design consistent, policy-aligned review request and response workflows and help the business learn from review themes. Customers must remain free to describe their experience. We do not fabricate reviews, gate unhappy customers, or offer prohibited incentives for positive ratings.',
    },
    {
      question: 'How does local SEO work with ChatGPT and AI search?',
      answer:
        'We improve business, place, service, hours, contact, profile, page, review, and third-party source consistency, then monitor stable local prompts for inclusion and accuracy. AI recommendations vary and can be wrong, so no local mention, map position, or citation can be guaranteed.',
    },
    {
      question: 'How long does local SEO take?',
      answer:
        'Timing depends on profile eligibility and history, website quality, competition, distance and service area, reviews, current citations, implementation speed, and customer operations. We can track shipped changes and cohorts but cannot promise a map position, call, visit, or booking by a fixed date.',
    },
    {
      question: 'What does local SEO cost?',
      answer:
        'Ongoing TheProjectSEO engagements currently start from $3,500 per month. Scope depends on eligible location, department and practitioner count; profile complexity; services and markets; website and content work; reputation and citation needs; implementation; call or booking measurement; and AI-local monitoring.',
    },
  ],
  relatedLinks: [
    {
      href: '/locations/india',
      label: 'SEO in India',
      description: 'Country and city discovery grounded in real operating knowledge.',
    },
    {
      href: '/locations/philippines',
      label: 'SEO in the Philippines',
      description: 'Country and city discovery grounded in Philippine search and market experience.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Local prompts, sources, entities, recommendations, and accuracy monitoring.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Location templates, rendering, indexation, structured data, performance, and QA.',
    },
  ],
  ctaEyebrow: 'Build legitimate local discovery',
  ctaTitle: 'Find where profiles, location pages, reviews, and lead routing lose customers.',
  ctaLead:
    'Share your verified India or Philippines locations or service areas, services, profiles, website, review process, and local lead stages. We will identify the highest-priority work.',
  ctaBenefits: [
    'Profile, entity, location-page, citation, review, and policy assessment',
    'India and Philippines local demand and AI-answer opportunities',
    'Qualified call, booking, direction, visit, and lead measurement plan',
  ],
}

const seoConsulting: IndustryLeadPageData = {
  slug: 'seo-consulting',
  path: '/services/seo-consulting',
  parentBreadcrumb: { name: 'Services', href: '/services' },
  name: 'SEO consulting',
  schemaName: 'Independent SEO consulting and strategy services',
  serviceType:
    'SEO consulting for strategy, audits, roadmaps, stakeholder alignment, migrations, technical decisions, content systems, AI search, measurement, and team enablement',
  schemaAudience:
    'Founders, marketing leaders, product and engineering teams, in-house SEO teams, investors, and organizations needing independent senior search guidance',
  metaTitle: 'SEO Consulting Services for Strategy & AI Search',
  metaDescription:
    'Independent SEO consulting for audits, strategy, migrations, content systems, AI search, stakeholder alignment, implementation and commercial measurement.',
  eyebrow: 'SEO consulting · Independent strategy + implementation guidance',
  title: 'Make better search decisions.',
  titleAccent: 'Build a system your team owns.',
  directAnswer:
    'TheProjectSEO provides independent SEO consulting for leaders and teams that need diagnosis, strategy, prioritization, technical or content decisions, migration oversight, AI-search guidance, stakeholder alignment, and commercial measurement without outsourcing every task. The consultant’s job is to improve the quality and speed of decisions, translate evidence across marketing, content, product, engineering, analytics, and leadership, and leave the organization with clear ownership and operating capability.',
  primaryCta: 'Request an SEO consulting scope',
  bestFit:
    'Organizations with internal or partner execution capacity that need senior, evidence-led guidance across teams, complex decisions, important launches, or a changing Google and AI-search landscape.',
  heroChecks: [
    'Strategy, audit, roadmap, migration, technical, content, authority, local, international, and AI-search decisions',
    'Direct collaboration with founders, executives, marketing, SEO, product, engineering, data, and agencies',
    'Workshops, specifications, decision memos, reviews, QA, training, and operating models',
    'Measurement tied to implementation, qualified visibility, customer progression, pipeline, or revenue',
  ],
  journeyTitle: 'When does SEO consulting create the most value?',
  journeyLead:
    'Consulting is useful when the problem is not simply a lack of hands. The team needs an independent view, a decision framework, specialist depth, cross-functional translation, risk control, or a way to make internal execution more effective.',
  searchJourneys: [
    {
      stage: 'Diagnose',
      intent: 'Understand what is actually wrong',
      explanation:
        'Traffic, rankings, leads, indexation, content output, migrations, or AI visibility underperform and internal explanations conflict.',
      examples: ['independent SEO second opinion', 'organic traffic drop consultant'],
      conversion: 'focused audit, diagnostic workshop, evidence plan, or decision memo',
    },
    {
      stage: 'Decide',
      intent: 'Choose a strategy or technical direction',
      explanation:
        'The organization needs to prioritize markets, architecture, platform, migration, programmatic pages, content, authority, measurement, or team investment.',
      examples: ['SEO strategy for international expansion', 'SSR vs client rendering SEO'],
      conversion: 'options analysis, recommendation, roadmap, and executive alignment',
    },
    {
      stage: 'Deliver',
      intent: 'Help teams implement correctly',
      explanation:
        'Developers, content teams, designers, agencies, and analysts need requirements, review, acceptance criteria, quality control, and decisions during execution.',
      examples: ['SEO consultant for website migration', 'technical SEO sprint support'],
      conversion: 'tickets, brief standards, sprint guidance, QA, and release validation',
    },
    {
      stage: 'Enable',
      intent: 'Build repeatable internal capability',
      explanation:
        'The goal is to reduce repeated mistakes, clarify ownership, train teams, standardize workflows, and make search part of product and content operations.',
      examples: ['enterprise SEO governance consultant', 'SEO training for content team'],
      conversion: 'playbook, training, monitoring, operating cadence, and internal ownership',
    },
  ],
  obstaclesTitle: 'Why does SEO consulting become expensive advice?',
  obstaclesLead:
    'Consulting fails when it stays abstract, cannot access the evidence, does not understand implementation constraints, or creates dependence instead of organizational capability.',
  obstacles: [
    {
      title: 'The brief is “tell us what to do”',
      problem:
        'Without a defined business question, decision owner, scope, data, constraints, and success condition, the consultant can produce broad recommendations that no one can evaluate.',
      response:
        'We establish a decision charter: what must be decided, why now, who owns it, what evidence exists, which constraints matter, and what outcome or risk will be evaluated.',
    },
    {
      title: 'Strategy ignores execution capacity',
      problem:
        'A theoretically correct roadmap can fail if it conflicts with product releases, CMS limits, legal review, developer capacity, merchandising, localization, or sales ownership.',
      response:
        'Stakeholders and dependencies are mapped early. Recommendations include feasible options, trade-offs, owners, acceptance criteria, and a release or production sequence.',
    },
    {
      title: 'The consultant becomes a permanent bottleneck',
      problem:
        'If every title, ticket, page, and launch requires one external person, the team cannot scale and knowledge disappears when the engagement ends.',
      response:
        'We document decision rules, train owners, create templates and checks, delegate routine judgments, and reserve specialist review for material risk and ambiguity.',
    },
    {
      title: 'Reports avoid commercial accountability',
      problem:
        'Rankings and traffic can improve while customer quality, pipeline, ecommerce value, or local outcomes remain unclear.',
      response:
        'We agree on search and business cohorts, audit measurement quality, state attribution limitations, and connect recommendations to observable customer progression and decisions.',
    },
  ],
  deliverablesTitle: 'What can SEO consulting include?',
  deliverablesLead:
    'The engagement can be a focused decision sprint, independent audit, ongoing advisory relationship, migration oversight, or fractional search leadership.',
  deliverables: [
    {
      title: 'Independent audit and second opinion',
      description:
        'Evidence-led review of performance, technical systems, pages, content, authority, analytics, AI search, or existing agency recommendations.',
      items: [
        'Scope and decision question',
        'Data and implementation evidence',
        'Root-cause hypotheses and confidence',
        'Prioritized actions, risks, options, and validation',
      ],
    },
    {
      title: 'SEO strategy and roadmap',
      description:
        'A commercial search plan connecting audiences, products, services, markets, page systems, authority, AI visibility, teams, and outcomes.',
      items: [
        'Demand, competitor, SERP, entity, and customer evidence',
        'Technical, content, authority, local, international, and AI-search workstreams',
        'Value, confidence, effort, dependency, and risk scoring',
        'Sequenced roadmap, owners, milestones, and decision cadence',
      ],
    },
    {
      title: 'Technical and migration advisory',
      description:
        'Senior search input for architecture, JavaScript, platforms, templates, migrations, redesigns, international systems, and releases.',
      items: [
        'Options, trade-offs, technical requirements, and risk controls',
        'URL and signal preservation, staging, launch, and monitoring',
        'Developer tickets, design review, sprint support, and acceptance criteria',
        'Production validation and incident investigation',
      ],
    },
    {
      title: 'Content and information architecture',
      description:
        'Governance for demand research, page ownership, briefs, expert input, editorial quality, internal links, tools, programmatic systems, and maintenance.',
      items: [
        'Content audit, taxonomy, page map, and cannibalization rules',
        'Brief and review standards for commercial and educational assets',
        'Expert, source, claim, author, reviewer, and update requirements',
        'Production QA, refresh, merge, redirect, archive, and delete decisions',
      ],
    },
    {
      title: 'AI search and measurement advisory',
      description:
        'A grounded program for prompts, sources, entities, citations, accuracy, platform evaluation, vendor selection, and connection to SEO and commercial data.',
      items: [
        'Prompt and platform scope',
        'Visibility-tool methodology and metric review',
        'Technical, content, entity, source, and authority roadmap',
        'Reporting with volatility and attribution boundaries',
      ],
    },
    {
      title: 'Team enablement and governance',
      description:
        'Operating structures that make search knowledge reusable across internal teams and partners.',
      items: [
        'Roles, ownership, escalation, and decision rights',
        'Checklists, templates, playbooks, training, and office hours',
        'Release gates, content reviews, dashboards, alerts, and incident runbooks',
        'Agency brief, review, performance, and transition support',
      ],
    },
  ],
  aiVisibility: {
    title: 'What does an AI-search consultant advise on?',
    lead:
      'AI search introduces new vendor claims, metrics, platform behavior, and organizational questions. Consulting should help the team distinguish controllable source work from black-box volatility and integrate it with established SEO, content, authority, and analytics.',
    platforms: [
      'Google Search',
      'Google AI Overviews',
      'Google AI Mode',
      'Bing Copilot',
      'ChatGPT',
      'Gemini',
      'Claude',
      'Perplexity',
    ],
    boundary:
      'No consultant controls a model’s retrieval, citation, or recommendation. Tool scores can differ because prompt sets and methods differ. We ask for transparent test conditions, preserve observations, and do not present correlation or a citation screenshot as guaranteed commercial impact.',
    workstreams: [
      {
        title: 'Strategy and ownership',
        description:
          'Define which customer prompts, platforms, markets, products, sources, facts, and business outcomes matter and which team owns each response.',
        output: 'AI-search charter, owners, prompt taxonomy, and measurement boundaries',
      },
      {
        title: 'Vendor and tool evaluation',
        description:
          'Assess prompt sampling, geographic and model coverage, repeatability, metrics, citations, exports, privacy, integrations, and decision usefulness.',
        output: 'requirements, comparison framework, test plan, and procurement questions',
      },
      {
        title: 'Execution roadmap',
        description:
          'Integrate technical access, answer content, entities, sources, authority, and monitoring into existing SEO and communication work.',
        output: 'prioritized backlog, dependencies, owners, and controlled experiments',
      },
      {
        title: 'Executive interpretation',
        description:
          'Explain what observed visibility does and does not prove, how platforms differ, and where investment or risk is justified.',
        output: 'decision memo, confidence notes, risks, and next-quarter choices',
      },
    ],
  },
  architectureTitle: 'What should an SEO consultant leave behind?',
  architectureLead:
    'The output should make the next decision and implementation easier. Documentation is useful when it reduces ambiguity, preserves rationale, and gives the team ownership.',
  architecture: [
    {
      pageType: 'Decision charter',
      intent: 'What are we deciding and why now?',
      examples: 'question, owner, context, scope, constraints, evidence, deadline, success',
      signal: 'clear authority, excluded work, assumptions, and decision criteria',
    },
    {
      pageType: 'Evidence and options',
      intent: 'What do we know and what choices exist?',
      examples: 'data, tests, affected cohorts, hypotheses, alternatives, risks, trade-offs',
      signal: 'sources, confidence, limitations, feasibility, and reversible tests',
    },
    {
      pageType: 'Roadmap and specifications',
      intent: 'What happens next?',
      examples: 'priority, owner, dependency, milestone, ticket, brief, acceptance, validation',
      signal: 'implementation-ready details and agreed sequence',
    },
    {
      pageType: 'Operating playbook',
      intent: 'How will the team repeat the decision?',
      examples: 'roles, workflow, checklist, template, review, escalation, release, incident',
      signal: 'usable by named owners without permanent consultant dependency',
    },
    {
      pageType: 'Measurement and learning',
      intent: 'What evidence changes the plan?',
      examples: 'baseline, cohort, event, dashboard, prompt, checkpoint, experiment',
      signal: 'definition, source, cadence, limitation, threshold, and next decision',
    },
  ],
  processTitle: 'How does an SEO consulting engagement work?',
  processLead:
    'The process is designed around the decision, not a recurring deliverable list. A focused sprint can end after the handoff; ongoing advisory continues only where it adds value.',
  process: [
    {
      number: '01',
      cadence: 'Days 1–3',
      title: 'Decision and scope alignment',
      description:
        'Define the business question, owner, stakeholders, urgency, sites, markets, systems, constraints, data, previous work, and expected decision.',
      output: 'consulting charter, access, interview plan, assumptions, and milestones',
    },
    {
      number: '02',
      cadence: 'Week 1',
      title: 'Evidence and stakeholder discovery',
      description:
        'Review search, technical, content, authority, customer, product, sales, analytics, release, competitor, and AI-search evidence; interview responsible teams.',
      output: 'evidence inventory, stakeholder map, contradictions, and hypotheses',
    },
    {
      number: '03',
      cadence: 'Weeks 1–2',
      title: 'Analysis and options',
      description:
        'Test important hypotheses, identify root causes and opportunities, quantify affected cohorts, and compare feasible options and risks.',
      output: 'findings, confidence, decision options, trade-offs, and recommendation',
    },
    {
      number: '04',
      cadence: 'Weeks 2–3',
      title: 'Roadmap and alignment',
      description:
        'Translate the recommendation into priorities, owners, dependencies, specifications, page or process decisions, milestones, and measurement.',
      output: 'roadmap, decision memo, tickets or briefs, and stakeholder workshop',
    },
    {
      number: '05',
      cadence: 'By sprint / release',
      title: 'Implementation support',
      description:
        'Answer delivery questions, review designs and technical options, support internal and agency teams, resolve edge cases, and validate production.',
      output: 'review notes, accepted decisions, QA evidence, and updated playbook',
    },
    {
      number: '06',
      cadence: 'Monthly / quarterly',
      title: 'Learning and enablement',
      description:
        'Review affected cohorts and organizational friction, train owners, improve repeatable processes, and decide whether continued advisory is needed.',
      output: 'decision report, training, process changes, and next priorities or handoff',
    },
  ],
  measurementTitle: 'How should SEO consulting success be measured?',
  measurementLead:
    'Consulting should improve decisions and implementation first. Search and commercial outcomes follow only after the organization ships work and the market responds.',
  measurementBoundary:
    'A consultant influences but does not control product, engineering, content, authority, sales, algorithms, demand, and attribution. We record which advice was accepted and implemented before evaluating related outcomes.',
  measurement: [
    {
      name: 'Decision quality and speed',
      definition: 'Material questions reach an evidence-backed decision with stated confidence, trade-offs, ownership, scope, and timing.',
      source: 'decision memos, meeting records, and stakeholder sign-off',
    },
    {
      name: 'Implementation readiness',
      definition: 'Priority work has feasible specifications or briefs, owners, dependencies, acceptance criteria, and validation plans.',
      source: 'roadmap, tickets, briefs, and project system',
    },
    {
      name: 'Shipped and validated change',
      definition: 'Recommendations are implemented and confirmed across representative pages, templates, markets, or workflows.',
      source: 'release record, crawl, Search Console, content QA, and production checks',
    },
    {
      name: 'Team capability',
      definition: 'Named owners can apply documented decision rules, run checks, maintain standards, and escalate material exceptions.',
      source: 'playbooks, training, workflow adoption, and error recurrence',
    },
    {
      name: 'Search and commercial outcomes',
      definition: 'Qualified visibility, customer progression, leads, pipeline, orders, revenue, or risk protection for affected cohorts after implementation.',
      source: 'approved search, analytics, product, CRM, commerce, or booking data',
    },
  ],
  evidence: {
    title: 'What consulting evidence can you inspect?',
    lead:
      'The approved project figures below demonstrate hands-on operating experience, not guaranteed consulting outcomes. Redacted decision and implementation artifacts will be added only after client permission and factual review.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Consulting decision artifact',
        description: 'Reserved for a redacted decision, evidence, options, recommendation, owner, and accepted outcome.',
      },
      {
        label: 'Implementation validation',
        description: 'Reserved for an approved release, affected cohort, expected behavior, and measured validation.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right SEO consultant?',
  fitLead:
    'Fit is strongest when the organization has people who can act and needs senior, independent search judgment to make that action more effective.',
  goodFit: [
    'You have internal or partner teams for engineering, content, product, analytics, or implementation',
    'A material SEO, migration, content, AI-search, platform, or organizational decision needs evidence',
    'Leadership and delivery teams can share goals, constraints, data, and implementation reality',
    'You want documentation, training, and ownership rather than permanent consultant dependence',
    'Commercial outcomes and attribution limitations can be discussed honestly',
  ],
  notFit: [
    'You need guaranteed rankings, citations, traffic, leads, pipeline, or revenue',
    'The consultant is expected to approve a predetermined strategy regardless of evidence',
    'No stakeholder can provide access, decide, implement, or validate',
    'The plan depends on spam links, fake locations, mass low-value content, or invented proof',
    'You want advice without changing decisions, workflows, pages, or systems',
  ],
  sources: [
    {
      label: 'Google Search Essentials',
      url: 'https://developers.google.com/search/docs/essentials',
      description: 'Primary Google technical requirements, policies, and best practices.',
    },
    {
      label: 'Google: debugging traffic drops',
      url: 'https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops',
      description: 'Primary framework for investigating search performance changes.',
    },
    {
      label: 'Google: managing multi-regional and multilingual sites',
      url: 'https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites',
      description: 'Primary context for international architecture and geographic targeting decisions.',
    },
    {
      label: 'Google: AI features and your website',
      url: 'https://developers.google.com/search/docs/appearance/ai-features',
      description: 'Primary Google guidance relevant to AI-search strategy and site controls.',
    },
  ],
  faqTitle: 'Questions to ask before hiring an SEO consultant',
  faqs: [
    {
      question: 'What does an SEO consultant do?',
      answer:
        'An SEO consultant helps an organization diagnose search problems, evaluate evidence, choose strategy, prioritize work, design technical and content requirements, guide migrations and releases, review implementation, improve measurement, train teams, and build governance across conventional and AI-assisted search.',
    },
    {
      question: 'What is the difference between an SEO consultant and an SEO agency?',
      answer:
        'A consultant often focuses on diagnosis, decisions, senior guidance, specifications, review, enablement, and independent oversight while internal or partner teams execute. An agency may own broader recurring execution. TheProjectSEO can provide either model; responsibility is made explicit so work does not fall between teams.',
    },
    {
      question: 'Can you work with our existing SEO agency?',
      answer:
        'Yes. We can provide an independent audit, help leadership define goals and evaluation criteria, review strategy and evidence, support technical or content decisions, improve reporting, and coordinate a clear handoff. The objective is better outcomes and accountability, not unnecessary conflict.',
    },
    {
      question: 'Can you advise on a migration or redesign?',
      answer:
        'Yes. Consulting can cover preservation requirements, URL and content inventory, redirects, canonicals, internal links, navigation, rendering, structured data, international signals, analytics, staging QA, launch checks, incident response, and post-launch validation. Early involvement reduces avoidable risk but does not guarantee unchanged traffic.',
    },
    {
      question: 'Do you provide AI-search and GEO consulting?',
      answer:
        'Yes. We help define prompt and platform scope, evaluate vendors and metrics, map citations and sources, improve technical and content readiness, clarify entities and facts, build authority, and integrate AI visibility into SEO and commercial reporting. We do not guarantee citations or recommendations.',
    },
    {
      question: 'Will you help our team implement recommendations?',
      answer:
        'Yes, if scoped. Support can include tickets, content briefs, design and architecture review, sprint or editorial sessions, office hours, stakeholder decisions, QA, production validation, training, and playbooks. We aim to remove ambiguity and build team ownership.',
    },
    {
      question: 'How long does SEO consulting last?',
      answer:
        'A focused diagnostic or decision sprint may last several weeks. Migration and implementation support follows release milestones. Ongoing advisory may continue monthly or quarterly where complex decisions remain. The engagement should end or reduce when the team can own the operating system.',
    },
    {
      question: 'What does SEO consulting cost?',
      answer:
        'Ongoing TheProjectSEO engagements currently start from $3,500 per month. Project pricing depends on the decision, domains and markets, technical and data complexity, audit depth, stakeholder count, migration or incident risk, documentation, workshops, implementation review, AI-search scope, and cadence.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/seo-audit',
      label: 'SEO audit services',
      description: 'Independent evidence, root-cause analysis, priorities, specifications, and validation.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Crawl, render, index, migration, platform, performance, and release decisions.',
    },
    {
      href: '/methodology',
      label: 'Our methodology',
      description: 'Evidence, confidence, prioritization, review, implementation, and learning.',
    },
    {
      href: '/pricing',
      label: 'Consulting and SEO pricing',
      description: 'Starting investment, engagement models, scope variables, and fit.',
    },
  ],
  ctaEyebrow: 'Make the next search decision clear',
  ctaTitle: 'Bring us the SEO question your team cannot resolve with another dashboard.',
  ctaLead:
    'Share the decision, websites, markets, stakeholders, constraints, existing evidence, and implementation options. We will propose a consulting scope built around the outcome.',
  ctaBenefits: [
    'Independent evidence and options—not predetermined validation',
    'Roadmap, specifications, owners, acceptance criteria, and handoff',
    'Implementation review, team enablement, and measurable decision follow-through',
  ],
}

export const growthServiceLeadPages = {
  content,
  ecommerceSeo,
  localSeo,
  seoConsulting,
} as const satisfies Record<string, IndustryLeadPageData>
