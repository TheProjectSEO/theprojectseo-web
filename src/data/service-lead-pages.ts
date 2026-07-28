import {
  sharedIndustryEvidence,
  type IndustryLeadPageData,
} from '@/data/industry-lead-pages'

const aiSearch: IndustryLeadPageData = {
  slug: 'ai-search',
  path: '/services/ai-search',
  parentBreadcrumb: {
    name: 'Services',
    href: '/services',
  },
  name: 'AI search optimization',
  schemaName: 'AI search optimization, GEO, AEO, and LLM visibility services',
  serviceType:
    'AI search optimization, generative engine optimization, answer engine optimization, and LLM visibility services',
  schemaAudience:
    'Organizations that need accurate, commercially relevant visibility across Google Search and AI-generated answers',
  metaTitle: 'AI Search Optimization Agency: GEO, AEO & LLM SEO',
  metaDescription:
    'AI search optimization for Google AI Overviews, AI Mode, ChatGPT, Gemini, Perplexity, Claude and Copilot. See the audit, execution, measurement and limitations.',
  eyebrow: 'AI search optimization agency · SEO + GEO + AEO',
  title: 'Be found in search.',
  titleAccent: 'Be chosen in AI answers.',
  directAnswer:
    'TheProjectSEO helps brands improve how accurately and often they are discovered across Google Search, Google AI Overviews and AI Mode, Bing, ChatGPT, Gemini, Perplexity, Claude, and Copilot. AI search optimization combines the parts of SEO that make pages accessible and competitive with prompt research, source analysis, entity clarity, explicit answer design, third-party corroboration, and repeatable visibility monitoring. The objective is commercially relevant inclusion and accurate representation—not a vanity citation count or a guaranteed recommendation.',
  primaryCta: 'Request an AI search assessment',
  bestFit:
    'Organizations with a clear offer, verifiable facts, access to subject experts, authority-building capacity, and enough data to distinguish useful buyer visibility from random brand mentions.',
  heroChecks: [
    'Google Search, AI Overviews, AI Mode, Bing, ChatGPT, Gemini, Claude, Perplexity, and Copilot',
    'SEO, generative engine optimization (GEO), answer engine optimization (AEO), and entity work',
    'Prompt sets organized by audience, intent, market, and buying stage',
    'Measurement of mentions, citations, accuracy, source influence, traffic, leads, and pipeline',
  ],
  journeyTitle: 'Where does AI search fit in a real buying journey?',
  journeyLead:
    'People use search engines and AI assistants together. A buyer may discover the category in Google, ask ChatGPT for options, verify a claim in Perplexity, visit a cited page, and return directly. A useful strategy covers the full journey instead of treating every platform as a separate trick.',
  searchJourneys: [
    {
      stage: 'Learn',
      intent: 'Understand a problem or concept',
      explanation:
        'The user asks a broad question and expects a concise explanation, useful framework, or next step. The brand may earn visibility as a cited source without being recommended.',
      examples: ['what is a technical SEO audit', 'how does zero trust access work'],
      conversion: 'qualified educational visit, deeper resource, newsletter, or relevant service path',
    },
    {
      stage: 'Explore',
      intent: 'Identify categories and approaches',
      explanation:
        'The user adds constraints and asks an AI system or search engine to compare methods, solution types, or trade-offs before selecting vendors.',
      examples: ['best approach to improve SaaS activation', 'GEO vs SEO for a B2B company'],
      conversion: 'category, solution, methodology, or use-case exploration',
    },
    {
      stage: 'Shortlist',
      intent: 'Find credible providers or products',
      explanation:
        'The prompt names a location, industry, budget, company type, requirement, or risk and asks which brands deserve consideration.',
      examples: ['AI search SEO agency for fintech', 'Shopify SEO agency for an international store'],
      conversion: 'brand search, service-page visit, comparison, enquiry, trial, or demo',
    },
    {
      stage: 'Validate',
      intent: 'Check a specific brand and reduce risk',
      explanation:
        'The buyer asks about reputation, proof, fit, pricing, implementation, alternatives, limitations, or a material claim before taking action.',
      examples: ['is agency x good for enterprise technical SEO', 'product x alternatives and limitations'],
      conversion: 'evidence review, sales conversation, product evaluation, or qualified opportunity',
    },
  ],
  obstaclesTitle: 'Why does AI search optimization fail?',
  obstaclesLead:
    'Most weak programs either rename ordinary content work as GEO or chase a black-box platform without fixing the sources those systems retrieve and trust.',
  obstacles: [
    {
      title: 'The prompt set has no commercial logic',
      problem:
        'Tracking hundreds of broad or synthetic questions can create an impressive dashboard while hiding whether the brand appears for real buyers, decision stages, locations, or products.',
      response:
        'We build a versioned prompt taxonomy from customer language, search demand, sales questions, use cases, comparisons, and market constraints. Each cohort has an audience, intent, business route, and measurement purpose.',
    },
    {
      title: 'Mentions, citations, and recommendations are mixed together',
      problem:
        'A model can name a brand negatively, cite it only as background, quote a third party, or recommend it without linking the company website. Those are not equivalent outcomes.',
      response:
        'Reporting separates presence, prominence, sentiment or framing, factual accuracy, cited domain, cited page, recommendation context, and the commercial relevance of the prompt.',
    },
    {
      title: 'The site makes facts difficult to retrieve',
      problem:
        'Important answers may be buried in vague prose, client-side interfaces, images, gated files, inconsistent product pages, unsupported schema, or content without a clear owner and date.',
      response:
        'We improve crawl access, indexation, internal links, page ownership, explicit answer passages, fact tables, structured visible data, source attribution, and review governance.',
    },
    {
      title: 'The strategy stops at the owned website',
      problem:
        'AI systems may synthesize search results, publishers, reviews, directories, communities, partners, documentation, videos, and other sources when describing a category or brand.',
      response:
        'We map sources used across important prompts, improve credible third-party corroboration, resolve entity inconsistencies, and create original assets worth citing. We do not manufacture reviews, citations, or consensus.',
    },
  ],
  deliverablesTitle: 'What is included in AI search optimization services?',
  deliverablesLead:
    'The engagement starts with observable baselines and an evidence-backed roadmap. Execution combines website, content, entity, authority, and measurement work rather than offering a single “LLM optimization” switch.',
  deliverables: [
    {
      title: 'AI visibility and source audit',
      description:
        'A repeatable baseline across commercially relevant prompts, competitors, platforms, cited domains, and material brand facts.',
      items: [
        'Prompt taxonomy by audience, stage, market, product, and use case',
        'Mention, citation, prominence, framing, and accuracy capture',
        'Cited-domain and cited-page source analysis',
        'Competitive share-of-answer observations with limitations',
      ],
    },
    {
      title: 'Technical retrieval audit',
      description:
        'A review of whether search and AI-related crawlers can access, render, interpret, and reach the pages that own important facts.',
      items: [
        'Robots, crawler controls, status, canonical, sitemap, and indexation checks',
        'JavaScript rendering, internal links, content extraction, and page performance',
        'Snippet, preview, paywall, gated-content, and documentation boundaries',
        'Log or crawler evidence where available',
      ],
    },
    {
      title: 'Answer and content architecture',
      description:
        'A page system that directly answers customer questions while preserving nuance, evidence, and a useful commercial journey.',
      items: [
        'Category, service, product, use-case, comparison, location, and evidence ownership',
        'Direct answer blocks, definitions, tables, decision criteria, and FAQs',
        'Source, author, reviewer, reviewed-date, and claim requirements',
        'Internal links from education to evaluation and conversion',
      ],
    },
    {
      title: 'Entity and structured-data work',
      description:
        'Clear, consistent relationships among the organization, people, products, services, locations, evidence, and credible external profiles.',
      items: [
        'Entity inventory and contradiction audit',
        'Organization, person, service, product, place, article, and breadcrumb relationships',
        'JSON-LD limited to facts visibly supported on the page',
        'sameAs and profile recommendations based on real identity',
      ],
    },
    {
      title: 'Authority and corroboration',
      description:
        'A source-led plan for earning relevant independent evidence rather than assuming the owned site can define its own reputation.',
      items: [
        'Publisher, partner, review, directory, community, research, and video source gaps',
        'Original data, tools, benchmarks, expert commentary, and evidence assets',
        'Digital PR and outreach tied to real expertise and newsworthiness',
        'Unlinked mention, inconsistent citation, and source-correction work',
      ],
    },
    {
      title: 'Monitoring and decision reporting',
      description:
        'Controlled rechecks that distinguish platform volatility from meaningful change and connect AI visibility to search and commercial outcomes.',
      items: [
        'Fixed prompt and platform observation schedule',
        'Source, citation, accuracy, and competitor movement',
        'Google Search Console, Bing, referral, direct, lead, and CRM context',
        'Experiment log, confidence notes, regressions, and next actions',
      ],
    },
  ],
  aiVisibility: {
    title: 'What can actually be optimized across AI search platforms?',
    lead:
      'There is no universal “AI ranking factor.” Each experience has different retrieval, indexing, browsing, citation, freshness, personalization, and product behavior. The controllable work is improving eligible sources, brand facts, corroboration, and measurement.',
    platforms: [
      'Google AI Overviews',
      'Google AI Mode',
      'Bing Copilot',
      'ChatGPT',
      'Gemini',
      'Claude',
      'Perplexity',
    ],
    boundary:
      'Model outputs are probabilistic and can change with wording, account state, model version, location, time, and search activation. No agency can guarantee indexing, retrieval, a citation, a recommendation, or direct traffic. We record the test conditions and report observations rather than manufacture certainty.',
    workstreams: [
      {
        title: 'Google and Bing foundations',
        description:
          'Preserve the crawling, indexing, relevance, quality, and authority foundations used by search-backed experiences and conventional results.',
        output: 'technical backlog, query and page map, search baseline, and implementation QA',
      },
      {
        title: 'Retrievable answers',
        description:
          'Make important definitions, facts, criteria, processes, comparisons, limitations, and next steps easy to locate and quote without stripping context.',
        output: 'answer inventory, page briefs, fact tables, and review requirements',
      },
      {
        title: 'Entity confidence',
        description:
          'Align what the site and credible external sources say about who the organization is, what it offers, where it operates, and why it is relevant.',
        output: 'entity map, inconsistency log, profile plan, and structured-data changes',
      },
      {
        title: 'Source influence',
        description:
          'Identify which third-party sources shape important answers and improve the company’s legitimate presence through evidence, expertise, partnerships, and reputation.',
        output: 'source graph, authority priorities, outreach angles, and correction opportunities',
      },
    ],
  },
  architectureTitle: 'Which pages support AI-search visibility and leads?',
  architectureLead:
    'AI-search work still needs clear page ownership. A site that cannot explain its services, products, evidence, and entities to a human buyer will not become more trustworthy by adding FAQ schema.',
  architecture: [
    {
      pageType: 'Category and definition',
      intent: 'Help me understand the problem and available approaches',
      examples: 'pillar pages, definitions, frameworks, glossaries, research, methodology',
      signal: 'direct answer, scope, distinctions, evidence, expert ownership, and next step',
    },
    {
      pageType: 'Product, service, and use case',
      intent: 'Can this brand solve my specific job?',
      examples: 'service, product, workflow, role, industry, integration, and location pages',
      signal: 'explicit offer, audience, process, boundaries, proof, and conversion route',
    },
    {
      pageType: 'Evaluation and comparison',
      intent: 'How should I choose?',
      examples: 'alternatives, versus pages, criteria, pricing, implementation, and fit',
      signal: 'declared criteria, balanced differences, sources, limitations, and decision path',
    },
    {
      pageType: 'Evidence and trust',
      intent: 'Can I verify the company and its claims?',
      examples: 'case studies, authors, reviewers, sources, policies, methodology, and company',
      signal: 'approved facts, periods, methods, named responsibility, and no invented proof',
    },
    {
      pageType: 'Third-party source assets',
      intent: 'Where else can the brand be verified?',
      examples: 'partner profiles, reviews, research citations, directories, publications, and video',
      signal: 'independent relevance, consistent identity, substantive evidence, and current facts',
    },
  ],
  processTitle: 'How does an AI search optimization engagement work?',
  processLead:
    'The first cycle establishes which prompts matter, what each platform currently returns, which sources shape the answer, and whether the website can support the required facts. Later cycles test prioritized changes.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Commercial and entity discovery',
      description:
        'Document audiences, products or services, markets, customer questions, material facts, existing entities, claim owners, conversion stages, competitors, and measurement access.',
      output: 'commercial prompt inputs, entity inventory, claim owners, and outcome definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Search, prompt, and source baseline',
      description:
        'Run a versioned prompt set across agreed platforms, capture answers and citations, inspect search demand and landing pages, and map the sources repeatedly used.',
      output: 'baseline, prompt taxonomy, source graph, competitor observations, and data limitations',
    },
    {
      number: '03',
      cadence: 'Weeks 2–4',
      title: 'Technical and content audit',
      description:
        'Review crawl access, rendering, indexation, page ownership, answer clarity, claims, structured data, entities, internal links, and conversion routes.',
      output: 'prioritized technical, content, entity, authority, and measurement backlog',
    },
    {
      number: '04',
      cadence: 'Monthly',
      title: 'Implementation and review',
      description:
        'Ship the highest-confidence technical changes, page improvements, new evidence-led assets, entity fixes, and structured data with subject-owner approval.',
      output: 'released changes, reviewed content, QA evidence, and decision log',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Authority and source development',
      description:
        'Strengthen credible third-party presence through original evidence, expert contributions, partners, profiles, relevant publications, and factual corrections.',
      output: 'source assets, earned placements, corrected profiles, and corroboration progress',
    },
    {
      number: '06',
      cadence: 'Monthly / quarterly',
      title: 'Recheck and commercial review',
      description:
        'Re-run controlled prompts, compare cited sources and accuracy, inspect search and conversion cohorts, and separate persistent movement from platform noise.',
      output: 'visibility report, experiment readout, confidence notes, and next roadmap',
    },
  ],
  measurementTitle: 'How should GEO, AEO, and LLM visibility be measured?',
  measurementLead:
    'AI visibility is multi-dimensional. A commercially useful dashboard distinguishes whether the brand was present, how it was framed, which source was cited, whether the facts were correct, and what users did next.',
  measurementBoundary:
    'AI assistants often do not pass a referrer, answers can vary between runs, and vendor tools use different prompt sets and scoring methods. We preserve prompts and test conditions, avoid adding incompatible platform counts, and do not claim direct causality without supporting data.',
  measurement: [
    {
      name: 'Prompt visibility',
      definition: 'The share of a fixed, commercially relevant prompt set in which the brand or approved page appears, segmented by platform and intent.',
      source: 'versioned prompt observations with platform, date, market, wording, and account state where known',
    },
    {
      name: 'Citation and source presence',
      definition: 'Whether the brand domain or a relevant third-party source is cited, which page supports the answer, and where it appears.',
      source: 'captured answer and citation URLs',
    },
    {
      name: 'Accuracy and framing',
      definition: 'Whether material company, product, service, location, price-boundary, and evidence statements are correct and contextually useful.',
      source: 'approved fact register and human review',
    },
    {
      name: 'Google and Bing search demand',
      definition: 'Impressions, clicks, page visibility, brand demand, and landing-page cohorts for related informational and commercial searches.',
      source: 'Google Search Console, Bing Webmaster Tools, and approved rank cohorts',
    },
    {
      name: 'Commercial outcomes',
      definition: 'Qualified visits, enquiries, trials, demos, accepted leads, opportunities, pipeline, or revenue associated with relevant organic and known AI referrals.',
      source: 'consent-aware analytics, self-reported attribution, and CRM where approved',
    },
  ],
  evidence: {
    title: 'What AI-search evidence can you review?',
    lead:
      'The current public proof is limited to approved, point-in-time screenshots. The values below are shown with their source context and are not presented as guaranteed outcomes or universal benchmarks.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Expressway.PH AI visibility',
        description:
          'Reserved for the approved Ahrefs AI responses and organic trend screenshots with the selected date range and metric labels visible.',
      },
      {
        label: 'Dated citation walkthrough',
        description:
          'Reserved for a platform, exact prompt, answer, cited page, capture date, and factual-accuracy commentary.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right AI search optimization agency?',
  fitLead:
    'The strongest programs treat AI-search visibility as an evidence, content, technical, entity, authority, and measurement problem—not as a shortcut around having a credible business.',
  goodFit: [
    'You have a clear product or service and can identify high-value customer questions',
    'Material company and offer facts can be verified by accountable owners',
    'Website and engineering teams can implement prioritized technical and page changes',
    'The brand can invest in legitimate expertise, evidence, partnerships, and authority',
    'You want Google and AI search measured together with commercial outcomes',
  ],
  notFit: [
    'You need guaranteed citations, recommendations, rankings, traffic, or leads',
    'The offer, location, product, evidence, or pricing claims cannot be verified',
    'The strategy depends on mass AI content, fake consensus, manipulated reviews, or schema spam',
    'No owner can update the site or correct inconsistent external facts',
    'Success is defined only as a proprietary visibility score without prompt and source transparency',
  ],
  sources: [
    {
      label: 'Google Search Central: AI features and your website',
      url: 'https://developers.google.com/search/docs/appearance/ai-features',
      description:
        'Google guidance on appearing in AI Overviews and AI Mode and the controls available to site owners.',
    },
    {
      label: 'Google Search Central: structured data policies',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies',
      description:
        'Primary policies requiring structured data to represent visible, accurate page content.',
    },
    {
      label: 'OpenAI: web crawler documentation',
      url: 'https://platform.openai.com/docs/bots',
      description:
        'OpenAI documentation for OAI-SearchBot, GPTBot, ChatGPT-User, and publisher controls.',
    },
    {
      label: 'Microsoft Bing Webmaster Guidelines',
      url: 'https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a',
      description:
        'Primary guidance for discovering, indexing, and presenting content in Bing-powered search experiences.',
    },
  ],
  faqTitle: 'Questions to ask before hiring a GEO or AI search agency',
  faqs: [
    {
      question: 'What is AI search optimization?',
      answer:
        'AI search optimization is the work of improving how a brand and its sources are discovered, retrieved, understood, cited, and represented in AI-generated search and answer experiences. It combines technical SEO, content and answer architecture, entity consistency, structured visible facts, authority, third-party corroboration, prompt monitoring, and commercial measurement.',
    },
    {
      question: 'What is the difference between SEO, GEO, AEO, and LLM SEO?',
      answer:
        'SEO is the broader discipline of earning visibility in search engines. GEO usually refers to visibility in generative responses; AEO emphasizes direct-answer experiences; LLM SEO describes work aimed at large-language-model interfaces. The labels overlap. We define the exact platforms, prompts, sources, deliverables, and measurements instead of selling the acronym.',
    },
    {
      question: 'Does traditional SEO still matter for AI search?',
      answer:
        'Yes. Search-backed AI experiences still depend on accessible pages, indexation, relevance, quality, authority, and reliable sources. AI optimization adds prompt and source analysis, entity and fact work, answer extraction, corroboration, and platform-specific monitoring; it does not make technical SEO or useful content obsolete.',
    },
    {
      question: 'Can you guarantee citations in ChatGPT or Google AI Overviews?',
      answer:
        'No. No agency controls whether a model searches, which index or source it retrieves, how it synthesizes an answer, or whether it cites a page. We can improve eligible sources, address gaps, run controlled tests, and report observed changes with limitations, but we do not guarantee inclusion or recommendations.',
    },
    {
      question: 'Do we need special schema for ChatGPT or other LLMs?',
      answer:
        'There is no universal LLM schema that guarantees retrieval or citation. Valid structured data can clarify visible entities and relationships for systems that use it, but it must match the page and platform policies. Clear HTML, accessible facts, crawlability, internal links, evidence, and corroboration remain essential.',
    },
    {
      question: 'How do you track AI-search visibility?',
      answer:
        'We agree on a stable prompt set and record platform, date, wording, market, answer, brand presence, prominence, framing, citations, cited pages, competitors, and material accuracy. Repeated runs are kept comparable, and different platform datasets are not combined as if they used one methodology.',
    },
    {
      question: 'How long does AI search optimization take?',
      answer:
        'A baseline can be created in weeks, but durable improvement depends on technical access, content and evidence gaps, current authority, third-party sources, implementation speed, and platform volatility. We report shipped work and controlled observations rather than promise a citation or commercial result by a fixed date.',
    },
    {
      question: 'What does AI search optimization cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on products, markets, prompt breadth, platform coverage, site and entity complexity, content and implementation ownership, authority requirements, measurement integration, and reporting cadence.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/ai-search/geo',
      label: 'Generative engine optimization',
      description: 'A focused explanation of GEO, retrieval, citations, sources, and execution.',
    },
    {
      href: '/services/ai-search/aeo',
      label: 'Answer engine optimization',
      description: 'Direct-answer architecture for search results and AI-generated responses.',
    },
    {
      href: '/services/ai-search/llm-visibility-tracking',
      label: 'LLM visibility tracking',
      description: 'Prompt cohorts, mentions, citations, sources, accuracy, and reporting.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Crawler access, rendering, indexation, internal links, performance, and release QA.',
    },
  ],
  ctaEyebrow: 'Build measurable AI-search visibility',
  ctaTitle: 'Find where your brand is absent, misrepresented, or supported by the wrong sources.',
  ctaLead:
    'Share your products or services, audiences, priority markets, competitors, and existing AI-search reporting. We will map the highest-value prompt, source, technical, content, entity, and authority gaps.',
  ctaBenefits: [
    'Commercial prompt and cross-platform visibility baseline',
    'Technical, content, entity, citation-source, and accuracy assessment',
    'Prioritized roadmap with transparent measurement boundaries',
  ],
}

export const serviceLeadPages = {
  aiSearch,
} as const satisfies Record<string, IndustryLeadPageData>
