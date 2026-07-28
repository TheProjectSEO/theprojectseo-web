import {
  sharedIndustryEvidence,
  type IndustryLeadPageData,
} from '@/data/industry-lead-pages'

const ai: IndustryLeadPageData = {
  slug: 'ai',
  name: 'AI companies',
  serviceType: 'SEO and AI search optimization for AI companies',
  schemaAudience:
    'AI startups, machine-learning platforms, model providers, developer tools, AI applications, and enterprise AI companies',
  metaTitle: 'SEO Agency for AI Companies & Startups | TheProjectSEO',
  metaDescription:
    'SEO for AI companies across Google and AI search. Build demand with technical content, use cases, comparisons, documentation, entity clarity, and qualified pipeline measurement.',
  eyebrow: 'SEO for AI companies · Google + AI answer engines',
  title: 'Turn a complex AI product into',
  titleAccent: 'searchable buyer clarity.',
  directAnswer:
    'TheProjectSEO helps AI companies become discoverable when buyers define a workflow, compare approaches, test technical fit, and ask Google or AI assistants which products deserve a shortlist. We connect technical SEO, product and use-case architecture, developer documentation, evaluation content, credible claims, digital authority, and AI-answer monitoring to trials, qualified demos, product usage, and pipeline—not undifferentiated AI traffic.',
  primaryCta: 'Request an AI-company SEO assessment',
  bestFit:
    'AI companies with a usable product, a defined buyer or developer audience, access to technical experts, and evidence for the capabilities they want searchers to trust.',
  heroChecks: [
    'AI SaaS, model and API providers, developer tools, agents, and vertical AI products',
    'Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, Copilot, and Perplexity',
    'Use cases, workflows, integrations, documentation, evaluations, and alternatives',
    'Measurement tied to activation, qualified demos, opportunities, and pipeline',
  ],
  journeyTitle: 'How do people search for an AI product they can trust?',
  journeyLead:
    'An AI buyer rarely searches one category phrase and converts. Technical users, operators, executives, security teams, and procurement move between workflow pain, capability discovery, hands-on validation, and risk review. Each stage needs its own answer and next step.',
  searchJourneys: [
    {
      stage: 'Problem',
      intent: 'Define the workflow to improve',
      explanation:
        'The searcher starts with an expensive task, quality problem, or bottleneck and may not yet know whether an AI product, automation, or conventional software is the right answer.',
      examples: ['automate contract review with citations', 'reduce support ticket handling time'],
      conversion: 'workflow guide, benchmark, interactive demo, or relevant use-case path',
    },
    {
      stage: 'Capability',
      intent: 'Find a viable AI approach',
      explanation:
        'The buyer compares product categories, model types, deployment patterns, and vendors that can perform the job within cost, latency, quality, and governance constraints.',
      examples: ['enterprise RAG platforms for internal knowledge', 'best voice agents for clinics'],
      conversion: 'solution exploration, product tour, trial, or technical consultation',
    },
    {
      stage: 'Evaluation',
      intent: 'Test technical and operational fit',
      explanation:
        'Developers and operators inspect APIs, integrations, supported data, evaluation methods, failure modes, security, pricing units, and implementation effort.',
      examples: ['product x API rate limits', 'product x vs product y retrieval accuracy'],
      conversion: 'documentation visit, sandbox, benchmark review, proof of concept, or demo',
    },
    {
      stage: 'Decision',
      intent: 'Reduce adoption risk',
      explanation:
        'A buying committee verifies data handling, human oversight, procurement terms, support, migration, total cost, and the evidence behind performance claims.',
      examples: ['AI platform with private deployment and SSO', 'product x alternatives for enterprise'],
      conversion: 'qualified opportunity, security review, pilot, or sales-assisted trial',
    },
  ],
  obstaclesTitle: 'Why does SEO for AI companies attract curiosity instead of customers?',
  obstaclesLead:
    'The market moves quickly and the language is noisy. Publishing more definitions does not solve unclear positioning, inaccessible product evidence, or a missing evaluation path.',
  obstacles: [
    {
      title: 'The category changes faster than the website',
      problem:
        'Product capabilities, model providers, terminology, pricing, and buyer expectations can change between releases, leaving pages inaccurate or mapped to obsolete demand.',
      response:
        'We maintain an entity and claim register, assign product owners, connect releases to page reviews, and separate durable workflow demand from short-lived trend content.',
    },
    {
      title: 'Every feature is described as intelligent',
      problem:
        'Generic claims such as powerful, autonomous, accurate, or enterprise-ready do not explain inputs, outputs, boundaries, evaluation conditions, or business value.',
      response:
        'We translate product truth into explicit capability, workflow, integration, deployment, and limitation pages. Material claims require a named evidence source and owner.',
    },
    {
      title: 'Documentation is invisible or disconnected',
      problem:
        'Client-rendered docs, gated examples, orphaned API references, version drift, and separate subdomains can prevent developers and search systems from evaluating the product.',
      response:
        'Technical work covers rendering, indexation, version and canonical rules, navigation, code-example access, schema, performance, and links between marketing claims and implementation evidence.',
    },
    {
      title: 'AI visibility is treated as a citation counter',
      problem:
        'A brand mention for a broad prompt may create no qualified demand, and generated answers can vary by model, time, location, retrieval source, and wording.',
      response:
        'We monitor stable prompt cohorts by buying stage, record whether the brand is named and accurately represented, inspect cited sources, and connect relevant sessions to product and CRM outcomes.',
    },
  ],
  deliverablesTitle: 'What is included in SEO for an AI company?',
  deliverablesLead:
    'The work is organized around product truth and buyer evaluation. The exact sequence depends on the product, technical stack, category maturity, and sales motion.',
  deliverables: [
    {
      title: 'Technical and documentation audit',
      description:
        'A crawl-to-render review of the marketing site, docs, changelog, demo routes, and product-led acquisition surfaces.',
      items: [
        'Rendering, indexation, canonical, sitemap, and redirect review',
        'Documentation hierarchy, versions, code examples, and internal links',
        'Core Web Vitals and reusable template defects',
        'Release and migration checks for engineering',
      ],
    },
    {
      title: 'Buyer and developer demand model',
      description:
        'A search model separating workflow, category, capability, integration, technical evaluation, and commercial intent.',
      items: [
        'ICP, user, evaluator, security, and executive questions',
        'Sales calls, product analytics, support tickets, and community language',
        'Competitor, alternative, and build-versus-buy demand',
        'Query-to-page ownership and cannibalization rules',
      ],
    },
    {
      title: 'Product-led content architecture',
      description:
        'A connected system for explaining what the product does, who it helps, how it works, and where it does not fit.',
      items: [
        'Use-case, workflow, role, and industry pages',
        'Capability, integration, API, and documentation pages',
        'Comparison, alternative, evaluation, pricing, and migration content',
        'Educational clusters that lead to product evidence',
      ],
    },
    {
      title: 'Claim and entity governance',
      description:
        'A review system for product names, model relationships, performance statements, security facts, and rapidly changing capabilities.',
      items: [
        'Claim register with source, scope, owner, and reviewed date',
        'Organization, product, founder, author, and technology entity consistency',
        'Structured data limited to visible, supportable facts',
        'Release-triggered freshness and deprecation rules',
      ],
    },
    {
      title: 'Authority and technical distribution',
      description:
        'Credible third-party discovery through documentation ecosystems, integrations, research, communities, and practitioner-led contributions.',
      items: [
        'Integration, marketplace, partner, and developer-ecosystem opportunities',
        'Original evaluations, benchmarks, datasets, or research when defensible',
        'Expert commentary and digital PR tied to real product knowledge',
        'Unlinked mention, citation, and source-page analysis',
      ],
    },
    {
      title: 'Experiment and pipeline reporting',
      description:
        'A measurement model connecting page groups and prompt cohorts to useful product and revenue stages.',
      items: [
        'Google Search Console and landing-page cohorts',
        'AI-answer mention, citation, accuracy, and source tracking',
        'Trial, activation, demo, opportunity, and pipeline stages',
        'Annotated tests, releases, wins, losses, and next actions',
      ],
    },
  ],
  aiVisibility: {
    title: 'How do AI companies earn visibility in AI-generated answers?',
    lead:
      'Being an AI company does not make a product understandable to an answer engine. Models and retrieval systems still need accessible facts, clear category relationships, credible corroboration, and sources that answer the prompt better than marketing copy.',
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
      'No agency can force an AI system to cite or recommend a company. Outputs are probabilistic and platform access changes. We optimize the source environment, test stable prompts, and report observed inclusion and accuracy without presenting it as guaranteed attribution.',
    workstreams: [
      {
        title: 'Prompt and source mapping',
        description:
          'Group real workflow, category, comparison, integration, and risk questions; record the domains and page types repeatedly used as supporting sources.',
        output: 'commercial prompt set, source map, baseline, and priority gaps',
      },
      {
        title: 'Explicit product facts',
        description:
          'State supported inputs, outputs, users, integrations, deployment, pricing units, limitations, and verification details in retrievable passages.',
        output: 'answer blocks, fact tables, glossary, and page-level claim ledger',
      },
      {
        title: 'Entity and evidence consistency',
        description:
          'Align product and company descriptions across the site, documentation, partner listings, profiles, and credible independent mentions.',
        output: 'entity map, inconsistency log, structured-data plan, and corroboration targets',
      },
      {
        title: 'Accuracy monitoring',
        description:
          'Re-test controlled prompts after meaningful releases, separate citations from mentions, and flag outdated or materially wrong representations.',
        output: 'platform-by-platform observations, source changes, and correction backlog',
      },
    ],
  },
  architectureTitle: 'Which pages does an AI company need for organic demand?',
  architectureLead:
    'The architecture should mirror the questions buyers and developers must answer. Page count follows distinct intent and product evidence—not a programmatic target.',
  architecture: [
    {
      pageType: 'Workflow and use case',
      intent: 'Can this solve my exact job?',
      examples: 'support automation, document review, forecasting, agent workflows',
      signal: 'real inputs, steps, outputs, limits, product route, and role-specific value',
    },
    {
      pageType: 'Capability and product',
      intent: 'What does the product actually do?',
      examples: 'retrieval, evaluation, observability, voice, orchestration, fine-tuning',
      signal: 'supported behavior, interface, evidence, constraints, and demo or trial path',
    },
    {
      pageType: 'Integration and documentation',
      intent: 'Will it work in my stack?',
      examples: 'API reference, SDKs, data connectors, cloud and identity integrations',
      signal: 'current examples, prerequisites, version, errors, limits, and implementation path',
    },
    {
      pageType: 'Evaluation and comparison',
      intent: 'How should I assess the options?',
      examples: 'alternatives, versus pages, build vs buy, benchmark and security review',
      signal: 'declared criteria, balanced differences, source dates, and evidence',
    },
    {
      pageType: 'Trust and governance',
      intent: 'Can the organization adopt this responsibly?',
      examples: 'security, privacy, data handling, model policy, human review, reliability',
      signal: 'approved facts, scope, owner, reviewed date, and contact for validation',
    },
  ],
  processTitle: 'How does an AI-company SEO engagement work?',
  processLead:
    'The first cycle establishes product truth, search ownership, and measurement. Later cycles ship prioritized work and update it as the product and category change.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Product and evidence discovery',
      description:
        'Interview product, technical, marketing, sales, and customer-facing owners; document the buyer, workflow, capabilities, claims, review rules, releases, and conversion stages.',
      output: 'product truth map, claim register, dependencies, and KPI definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Technical and demand baseline',
      description:
        'Audit crawling, rendering, templates, documentation, performance, links, competitors, query groups, landing pages, and stable AI-answer prompts.',
      output: 'prioritized defect backlog, demand model, and baseline dashboard',
    },
    {
      number: '03',
      cadence: 'Weeks 3–5',
      title: 'Architecture and roadmap',
      description:
        'Assign canonical ownership across workflows, capabilities, integrations, docs, evaluations, and education; score work by value, confidence, effort, and evidence readiness.',
      output: 'page map, internal-link plan, briefs, and sequenced roadmap',
    },
    {
      number: '04',
      cadence: 'Monthly',
      title: 'Implementation and review',
      description:
        'Ship technical changes and product-led pages with expert review, source requirements, structured data, conversion paths, and release QA.',
      output: 'released changes, reviewed content, QA log, and updated claim register',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Authority and answer work',
      description:
        'Improve useful source assets, partner and integration discovery, practitioner distribution, explicit answers, entity consistency, and credible corroboration.',
      output: 'source assets, placements, entity fixes, and AI-answer experiments',
    },
    {
      number: '06',
      cadence: 'Quarterly',
      title: 'Commercial review',
      description:
        'Compare page cohorts and prompt observations with activation, opportunity, and pipeline data; retire weak assumptions and refresh changed product facts.',
      output: 'decision report, refresh list, experiment readout, and next-quarter roadmap',
    },
  ],
  measurementTitle: 'How should SEO for an AI company be measured?',
  measurementLead:
    'Traffic and citations describe exposure. The commercial question is whether the right users found the right evidence and progressed through product or sales evaluation.',
  measurementBoundary:
    'Attribution depends on consent, analytics, CRM discipline, and sales-cycle length. AI assistants may influence a decision without a referrer. We report observable evidence, use assisted indicators carefully, and do not claim causality the data cannot support.',
  measurement: [
    {
      name: 'Qualified non-brand visibility',
      definition: 'Search impressions, clicks, and landing-page visibility for workflow, category, capability, integration, and evaluation demand.',
      source: 'Google Search Console, Bing Webmaster Tools, rank cohorts, and landing pages',
    },
    {
      name: 'Developer and product progression',
      definition: 'Documentation depth, sandbox or trial starts, meaningful activation, integration activity, and product-qualified actions where available.',
      source: 'privacy-approved web and product analytics',
    },
    {
      name: 'AI-answer presence and accuracy',
      definition: 'Whether a controlled prompt names the product, cites a relevant source, describes it accurately, and places it in a commercially relevant answer.',
      source: 'versioned prompt observations by platform, date, location, and wording',
    },
    {
      name: 'Qualified pipeline',
      definition: 'Demos, pilots, security reviews, opportunities, pipeline, and revenue associated with organic landing-page cohorts.',
      source: 'CRM and approved attribution model',
    },
    {
      name: 'Technical and factual health',
      definition: 'Indexable priority pages, rendering defects, documentation freshness, broken paths, claim-review age, and release-related regressions.',
      source: 'crawler, monitoring, release log, and claim register',
    },
  ],
  evidence: {
    title: 'What first-party evidence is available today?',
    lead:
      'The current public proof demonstrates TheProjectSEO’s operating approach across Google and AI search. It is not presented as AI-industry client performance.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'AI-company case study image',
        description: 'Reserved for an approved analytics capture, product context, period, and methodology.',
      },
      {
        label: 'AI-answer citation example',
        description: 'Reserved for a dated prompt, platform, answer, cited source, and accuracy note.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right SEO agency for your AI company?',
  fitLead:
    'Fit depends less on company stage than on whether the team can expose product truth, ship changes, and agree on what qualified demand means.',
  goodFit: [
    'You have a working product and can identify users, evaluators, and economic buyers',
    'Product and technical experts can review capability and implementation claims',
    'Engineering can address rendering, documentation, and template priorities',
    'Marketing and sales can share objections and define qualified product or pipeline stages',
    'You want Google and AI-search work managed as one evidence-led system',
  ],
  notFit: [
    'You need guaranteed rankings, citations, demos, or pipeline by a fixed date',
    'The product is not usable and the website cannot state what is currently supported',
    'The strategy depends on mass-generated pages without expert review or distinct value',
    'No one can approve data, security, performance, or capability statements',
    'Success is defined only as publishing volume or a vanity traffic number',
  ],
  sources: [
    {
      label: 'Google Search Central: AI features and your website',
      url: 'https://developers.google.com/search/docs/appearance/ai-features',
      description: 'Google guidance on the technical requirements and controls relevant to AI search experiences.',
    },
    {
      label: 'Google Search Central: JavaScript SEO basics',
      url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics',
      description: 'Primary guidance for rendering and indexing JavaScript applications.',
    },
    {
      label: 'OpenAI: GPTBot documentation',
      url: 'https://platform.openai.com/docs/bots',
      description: 'Primary documentation for OpenAI web crawlers and publisher controls.',
    },
    {
      label: 'Schema.org: SoftwareApplication',
      url: 'https://schema.org/SoftwareApplication',
      description: 'The vocabulary for describing visible software application facts.',
    },
  ],
  faqTitle: 'Questions AI companies ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What does an SEO agency for AI companies do?',
      answer:
        'It connects technical search foundations with the way buyers and developers evaluate an AI product: workflows, capabilities, integrations, documentation, comparisons, risk, and proof. The work includes architecture, content, technical implementation, entities, authority, AI-answer monitoring, and measurement tied to product or pipeline stages.',
    },
    {
      question: 'How is SEO for AI companies different from ordinary SaaS SEO?',
      answer:
        'AI products often change faster, depend on technical documentation, face heightened skepticism, and require precise explanations of data, models, evaluations, limitations, and human oversight. The core SEO principles remain, but claim governance, release-triggered updates, developer discovery, and product evidence deserve more weight.',
    },
    {
      question: 'Can you optimize API documentation and developer content?',
      answer:
        'Yes. We review renderability, indexation, versions, navigation, code examples, error and limit coverage, canonical rules, internal links, and the route from product pages to implementation evidence. Technical owners remain responsible for validating examples and supported behavior.',
    },
    {
      question: 'Should an AI startup create hundreds of use-case pages?',
      answer:
        'Only when each page represents real product fit, distinct demand, useful evidence, and a maintainable owner. A smaller set of specific workflow pages usually beats a large collection that changes the industry name around generic claims. We define a threshold before scaling templates.',
    },
    {
      question: 'Do you optimize for ChatGPT, Gemini, Perplexity, and AI Overviews?',
      answer:
        'Yes. We map commercially relevant prompts, improve retrievable product facts and entity consistency, inspect cited source patterns, build credible corroboration, and monitor mentions and accuracy. We cannot guarantee that a model will cite or recommend the product.',
    },
    {
      question: 'How do you handle fast product releases?',
      answer:
        'We connect the release process to affected pages and claims, assign owners, maintain reviewed dates and deprecation rules, and prioritize facts that materially affect evaluation. Not every release needs a new page; important changes need consistent updates across marketing, documentation, structured data, and external profiles.',
    },
    {
      question: 'How long does AI-company SEO take?',
      answer:
        'Timing depends on technical health, category competition, current authority, product clarity, implementation speed, expert access, and sales cycle. We establish a baseline and measure controlled page cohorts. No responsible agency can guarantee a position, citation, or pipeline result by a fixed date.',
    },
    {
      question: 'What does SEO for an AI company cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on the site and documentation stack, product breadth, markets, content and review ownership, implementation responsibility, authority needs, measurement setup, and AI-answer monitoring.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Prompt research, source analysis, entity clarity, answer access, and monitoring.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Rendering, documentation, indexation, migrations, performance, and release QA.',
    },
    {
      href: '/services/content',
      label: 'SEO content systems',
      description: 'Product-led research, briefs, expert review, production, and maintenance.',
    },
    {
      href: '/industries/saas',
      label: 'SaaS SEO',
      description: 'A related strategy for software demand, trials, demos, and pipeline.',
    },
  ],
  ctaEyebrow: 'Build qualified discovery',
  ctaTitle: 'Find where your product story loses buyers, developers, and AI answers.',
  ctaLead:
    'Share your product, ICP, documentation, technical stack, releases, and conversion stages. We will identify the highest-priority Google and AI-search work.',
  ctaBenefits: [
    'Technical, documentation, product-page, and entity assessment',
    'Priority workflow, evaluation, and AI-answer opportunities',
    'Measurement recommendations for product usage and qualified pipeline',
  ],
}

const automotive: IndustryLeadPageData = {
  slug: 'automotive',
  name: 'Automotive',
  serviceType: 'Automotive SEO and AI search optimization',
  schemaAudience:
    'Automotive dealerships, dealer groups, OEMs, service centers, parts sellers, marketplaces, EV companies, and mobility brands',
  metaTitle: 'Automotive SEO Agency for Dealers & Brands | TheProjectSEO',
  metaDescription:
    'Automotive SEO for dealers, OEMs, service centers, parts and mobility brands. Improve inventory, local, service and AI-search discovery with lead-quality reporting.',
  eyebrow: 'Automotive SEO agency · Inventory + local + AI search',
  title: 'Turn automotive search into',
  titleAccent: 'qualified local demand.',
  directAnswer:
    'TheProjectSEO helps automotive dealers, brands, service businesses, parts sellers, marketplaces, and mobility companies become discoverable across Google, Bing, maps, and AI-assisted vehicle research. We connect inventory and template SEO, local entities, model and service content, structured product facts, authority, and lead-quality measurement to calls, appointments, enquiries, test drives, and sales-qualified opportunities.',
  primaryCta: 'Request an automotive SEO assessment',
  bestFit:
    'Automotive businesses with real inventory or services, accountable location owners, access to feed and website teams, and a process for identifying lead quality.',
  heroChecks: [
    'Dealers, dealer groups, OEMs, service centers, parts, EV, and mobility companies',
    'Inventory, vehicle detail pages, model research, ownership, parts, and repair intent',
    'Google Search, Bing, local profiles, AI Overviews, ChatGPT, Gemini, and Perplexity',
    'Reporting tied to calls, appointments, test drives, enquiries, and qualified sales stages',
  ],
  journeyTitle: 'How does an automotive customer search before making contact?',
  journeyLead:
    'Vehicle and service decisions combine research, location, availability, price, trust, and urgency. A useful automotive SEO system must support both long consideration cycles and immediate local needs.',
  searchJourneys: [
    {
      stage: 'Research',
      intent: 'Choose a vehicle, part, or service',
      explanation:
        'A customer compares models, ownership costs, features, parts, symptoms, or maintenance needs before selecting a provider.',
      examples: ['hybrid SUV for family city driving', 'signs brake pads need replacement'],
      conversion: 'model guide, ownership article, service explanation, or inventory path',
    },
    {
      stage: 'Availability',
      intent: 'Find a suitable option now',
      explanation:
        'The search becomes specific to make, model, trim, condition, price range, stock, part compatibility, or appointment availability.',
      examples: ['used Toyota Fortuner automatic near me', 'Honda City brake pads in stock'],
      conversion: 'vehicle detail, stock enquiry, parts check, or appointment selection',
    },
    {
      stage: 'Local',
      intent: 'Validate a nearby business',
      explanation:
        'The customer checks distance, hours, reviews, service capability, showroom or workshop details, directions, and whether the location is legitimate.',
      examples: ['EV service center in Cebu', 'car dealership in Pune open Sunday'],
      conversion: 'call, directions, messaging, booking, or location-page visit',
    },
    {
      stage: 'Decision',
      intent: 'Reduce price and provider risk',
      explanation:
        'The buyer evaluates finance, warranty, trade-in, maintenance, inspection, delivery, reputation, and the truth of the advertised inventory or offer.',
      examples: ['dealer x reviews and warranty', 'new vs certified used SUV total cost'],
      conversion: 'test drive, valuation, finance enquiry, service booking, or sales opportunity',
    },
  ],
  obstaclesTitle: 'Why does automotive SEO generate poor-quality leads?',
  obstaclesLead:
    'Automotive search fails when inventory, location, and offer data disagree. A content campaign cannot compensate for expired vehicles, duplicate pages, or unclear service coverage.',
  obstacles: [
    {
      title: 'Inventory creates index bloat',
      problem:
        'Feed imports can produce duplicate vehicle detail pages, empty search results, endless filters, inconsistent canonicals, and expired stock that remains indexed without value.',
      response:
        'We define indexable inventory states, parameter rules, canonical ownership, internal-link paths, expired-vehicle treatments, sitemap logic, and feed QA with the inventory and website teams.',
    },
    {
      title: 'Every dealership location looks identical',
      problem:
        'Location pages that only swap a city name do not explain actual inventory, services, brands, facilities, staff, hours, reviews, or the area served.',
      response:
        'We build each real location from operational facts, unique stock and services, local proof, clear entity relationships, profile consistency, and conversion routes owned by that branch.',
    },
    {
      title: 'Model research never reaches current stock',
      problem:
        'Evergreen model and ownership content can attract valuable demand while leaving customers unable to find matching vehicles, variants, parts, or service options.',
      response:
        'Internal links connect research to model hubs, inventory cohorts, comparable options, service schedules, parts, finance, and nearby locations without pretending unavailable stock exists.',
    },
    {
      title: 'All calls and forms are counted equally',
      problem:
        'Spam, wrong-location calls, unavailable-stock requests, recruitment, support, and duplicate portal leads can obscure whether organic search creates commercial value.',
      response:
        'We agree on non-sensitive lead stages, source and location rules, duplicate handling, stock context, and qualified outcomes such as attended appointments, test drives, valuations, or sales opportunities.',
    },
  ],
  deliverablesTitle: 'What does an automotive SEO agency deliver?',
  deliverablesLead:
    'The engagement combines technical inventory control, local discovery, vehicle and service content, AI-answer readiness, and lead-quality reporting.',
  deliverables: [
    {
      title: 'Inventory and template audit',
      description:
        'A technical review of search results, category pages, vehicle detail pages, feeds, parameters, sitemaps, rendering, and expired inventory.',
      items: [
        'VDP, SRP, model, location, part, and service template analysis',
        'Filter, sort, map, canonical, pagination, and crawl rules',
        'Stock-state, redirect, archive, and replacement logic',
        'Performance and release defects for development',
      ],
    },
    {
      title: 'Automotive demand mapping',
      description:
        'A search model spanning vehicle research, stock, local dealers, repair, maintenance, parts, ownership, financing, and commercial fleets.',
      items: [
        'Make, model, trim, year, condition, fuel, body, and price demand',
        'Service, symptom, maintenance, part, and compatibility queries',
        'Location, dealership, showroom, workshop, and route intent',
        'Query-to-page ownership and cannibalization controls',
      ],
    },
    {
      title: 'Inventory and service architecture',
      description:
        'A maintainable page and link system that helps customers move from research to a real vehicle, part, service, or branch.',
      items: [
        'Model, inventory cohort, vehicle, service, and parts pages',
        'Location and dealer-group entity relationships',
        'Research-to-stock and symptom-to-service internal links',
        'Structured facts consistent with visible inventory and offers',
      ],
    },
    {
      title: 'Local automotive SEO',
      description:
        'Location-specific work for real showrooms, workshops, service areas, and dealership entities.',
      items: [
        'Google Business Profile and Bing Places consistency',
        'Hours, departments, categories, services, inventory, and contact paths',
        'Review acquisition and response workflows within platform rules',
        'Local landing pages built from real branch differences',
      ],
    },
    {
      title: 'Content and authority',
      description:
        'Useful vehicle, ownership, service, and market content reviewed by people who understand the products and operations.',
      items: [
        'Model comparisons, buying guides, maintenance, and ownership costs',
        'Expert bylines, sources, reviewed dates, and update triggers',
        'OEM, partner, local, industry, and automotive publication opportunities',
        'Assets that earn citations without invented test data',
      ],
    },
    {
      title: 'AI and lead-quality measurement',
      description:
        'Reporting that separates visibility from meaningful customer action across inventory, location, service, and answer-engine journeys.',
      items: [
        'Search visibility by make, model, service, location, and intent',
        'AI prompt, mention, citation, source, and factual-accuracy tracking',
        'Call, form, booking, directions, test-drive, and CRM stage reporting',
        'Inventory-aware experiment and release annotations',
      ],
    },
  ],
  aiVisibility: {
    title: 'How can an automotive brand appear in AI-assisted vehicle research?',
    lead:
      'AI answers may synthesize model specifications, ownership advice, dealer options, and service recommendations from several sources. The underlying vehicle, location, service, and availability facts need to be explicit, current, accessible, and corroborated.',
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
      'Generated answers can be outdated, incomplete, or wrong—especially for live inventory, prices, finance, recall, warranty, and safety information. We monitor observed answers and improve source clarity, but cannot guarantee inclusion or treat an AI answer as a live stock system.',
    workstreams: [
      {
        title: 'Vehicle and service facts',
        description:
          'Expose makes, models, trims, condition, availability state, locations, services, hours, contacts, and source dates in visible, consistent formats.',
        output: 'fact templates, field requirements, freshness rules, and discrepancy log',
      },
      {
        title: 'Customer-question coverage',
        description:
          'Answer model comparison, ownership, maintenance, part compatibility, local dealer, and service questions with clear scope and qualified review.',
        output: 'prompt clusters, answer modules, reviewer rules, and page roadmap',
      },
      {
        title: 'Entity and local consistency',
        description:
          'Align brands, dealer groups, branches, departments, inventory, and service capabilities across the site, profiles, directories, and trusted partners.',
        output: 'entity map, profile corrections, schema plan, and corroboration targets',
      },
      {
        title: 'Citation and accuracy tracking',
        description:
          'Record which sources answer stable vehicle and local prompts, whether the business is named, and whether material facts remain correct.',
        output: 'dated platform observations, source changes, and factual correction backlog',
      },
    ],
  },
  architectureTitle: 'Which pages make an automotive SEO system work?',
  architectureLead:
    'Every indexable page needs stable demand, real inventory or service value, and a maintenance rule. Feeds should support the architecture—not decide it.',
  architecture: [
    {
      pageType: 'Model and vehicle research',
      intent: 'Which vehicle suits my needs?',
      examples: 'model hubs, trims, comparisons, ownership, charging, fuel and maintenance',
      signal: 'accurate specs, use-case explanation, source date, alternatives, and stock links',
    },
    {
      pageType: 'Inventory and vehicle detail',
      intent: 'Is this exact option available?',
      examples: 'new, used, certified, make/model cohorts, individual VDPs',
      signal: 'current status, price context, location, identifiers, media, and enquiry route',
    },
    {
      pageType: 'Dealership and location',
      intent: 'Where can I buy or service locally?',
      examples: 'showrooms, workshops, service departments, branches, service areas',
      signal: 'real address or coverage, hours, staff, inventory, services, reviews, and contact',
    },
    {
      pageType: 'Service and parts',
      intent: 'Who can fix, maintain, or supply this?',
      examples: 'scheduled service, repair, symptoms, parts, accessories, compatibility',
      signal: 'supported vehicles, process, evidence, location, price boundaries, and booking',
    },
    {
      pageType: 'Commercial and trust',
      intent: 'Can I reduce purchase risk?',
      examples: 'finance, warranty, trade-in, fleet, inspection, delivery, reviews',
      signal: 'clear terms, eligibility, limitations, responsible owner, and next step',
    },
  ],
  processTitle: 'How does an automotive SEO engagement work?',
  processLead:
    'The first cycle maps inventory, locations, customers, feeds, and lead stages. Implementation then moves in controlled template and location cohorts.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Inventory and operation discovery',
      description:
        'Document the business model, brands, stock sources, locations, services, feeds, website vendors, owners, lead routes, and inventory lifecycle.',
      output: 'operating map, access list, inventory states, and lead definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Technical and local baseline',
      description:
        'Crawl templates and parameters, inspect rendering and feeds, review profiles and entities, segment search demand, and baseline relevant AI prompts.',
      output: 'defect backlog, local consistency log, demand model, and baseline',
    },
    {
      number: '03',
      cadence: 'Weeks 3–5',
      title: 'Architecture and lifecycle rules',
      description:
        'Define ownership for model, inventory, vehicle, service, parts, and location pages, including indexation, internal links, and expired-stock behavior.',
      output: 'page map, lifecycle specification, template requirements, and roadmap',
    },
    {
      number: '04',
      cadence: 'Monthly',
      title: 'Template and location implementation',
      description:
        'Release the highest-value technical fixes and pages in controlled cohorts, validate feeds and profiles, and test customer paths on real devices.',
      output: 'released cohorts, QA evidence, profile changes, and defect resolution',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Research, service, and authority work',
      description:
        'Publish reviewed model and ownership content, strengthen service and location evidence, and earn relevant local, partner, and automotive citations.',
      output: 'reviewed content, internal links, authority assets, and entity improvements',
    },
    {
      number: '06',
      cadence: 'Quarterly',
      title: 'Lead and inventory review',
      description:
        'Compare visibility and page cohorts with stock, calls, appointments, test drives, qualified stages, and data-quality issues.',
      output: 'commercial review, stock-state findings, experiments, and next roadmap',
    },
  ],
  measurementTitle: 'How should automotive SEO performance be measured?',
  measurementLead:
    'Rankings and sessions only show part of the journey. Reporting needs inventory, location, service, and CRM context to distinguish interest from a real opportunity.',
  measurementBoundary:
    'Call tracking, consent, CRM integration, marketplace duplication, offline sales, and changing inventory affect attribution. We document what can be observed and do not assign revenue to organic search without an agreed method.',
  measurement: [
    {
      name: 'Inventory and service visibility',
      definition: 'Non-brand impressions, clicks, and landing-page visibility by make, model, trim, stock type, service, part, and customer intent.',
      source: 'Google Search Console, Bing Webmaster Tools, rank cohorts, and page data',
    },
    {
      name: 'Local discovery',
      definition: 'Profile views, calls, directions, website actions, and location-page engagement for verified branches and departments.',
      source: 'approved local-platform and website reporting',
    },
    {
      name: 'Inventory quality',
      definition: 'Indexable valuable VDPs, duplicate or empty pages, feed mismatches, expired-stock handling, and search-to-stock success.',
      source: 'crawler, inventory feed, website logs, and template QA',
    },
    {
      name: 'Qualified automotive actions',
      definition: 'Appointments, test drives, valuations, finance enquiries, parts checks, and service bookings segmented by page and location.',
      source: 'approved call, form, booking, and CRM systems',
    },
    {
      name: 'AI-answer visibility and accuracy',
      definition: 'Brand or location presence, cited sources, and factual accuracy for stable model, service, dealer, and ownership prompts.',
      source: 'versioned prompt observations with date, platform, and location',
    },
  ],
  evidence: {
    title: 'What relevant first-party proof is available?',
    lead:
      'Expressway.PH is an automotive information project and the strongest current public evidence. Its supplied snapshot is a point-in-time visibility record, not a dealer lead or sales case study.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Expressway organic trend',
        description: 'Reserved for the approved Ahrefs organic traffic and keyword trend screenshot.',
      },
      {
        label: 'Automotive lead-quality example',
        description: 'Reserved for an approved client example with period, source, lead definition, and method.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right automotive SEO agency?',
  fitLead:
    'The strongest fit is an operator prepared to fix inventory and lead systems, not only commission articles.',
  goodFit: [
    'You control real automotive inventory, services, products, locations, or a useful marketplace',
    'Website, feed, inventory, and branch owners can implement agreed changes',
    'Locations and departments can provide accurate operating facts and proof',
    'Sales or service teams can define qualified calls, bookings, and opportunities',
    'You want search, local, and AI discovery measured as one customer journey',
  ],
  notFit: [
    'You need guaranteed rankings, citations, calls, test drives, or sales',
    'Inventory and prices cannot be kept current on the website',
    'The plan depends on fake locations, doorway pages, or copied model text',
    'No owner can change templates, feeds, profiles, or expired-stock behavior',
    'Every call or form must be reported as a qualified lead regardless of outcome',
  ],
  sources: [
    {
      label: 'Google Search Central: Search Essentials',
      url: 'https://developers.google.com/search/docs/essentials',
      description: 'Primary requirements and guidance for eligible, people-first search content.',
    },
    {
      label: 'Google Business Profile Help',
      url: 'https://support.google.com/business/',
      description: 'Primary guidance for business information, representation, profiles, and local features.',
    },
    {
      label: 'Google Search Central: faceted navigation',
      url: 'https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation',
      description: 'Technical guidance relevant to large filtered inventory systems.',
    },
    {
      label: 'Schema.org: Vehicle',
      url: 'https://schema.org/Vehicle',
      description: 'The vocabulary for describing visible vehicle facts where implementation is appropriate.',
    },
  ],
  faqTitle: 'Questions automotive teams ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What does an automotive SEO agency do?',
      answer:
        'It improves the technical, local, inventory, content, entity, authority, and measurement systems that help vehicle buyers and service customers discover a real business. The work may cover vehicle detail pages, search-result pages, model hubs, branches, service pages, parts, profiles, structured facts, AI answers, and lead quality.',
    },
    {
      question: 'Can you optimize dealership inventory and vehicle detail pages?',
      answer:
        'Yes. We review feed quality, renderability, unique value, canonicals, indexation, sitemaps, internal links, media, structured facts, conversion routes, and stock-state changes. The right treatment varies by platform and inventory volume; not every filter or expired vehicle should remain indexable.',
    },
    {
      question: 'What happens to sold or unavailable vehicle pages?',
      answer:
        'The treatment depends on demand, links, replacement inventory, template capability, and user value. A page may show the accurate status with close alternatives, redirect to a genuinely relevant replacement, remain as a useful archive, or return an appropriate status. Blanket homepage redirects are not a sound default.',
    },
    {
      question: 'Do you manage local SEO for dealer groups and service centers?',
      answer:
        'Yes. We align real branches and departments with their profiles, website entities, categories, services, hours, contact paths, reviews, and location pages. We do not recommend virtual-office listings, fake service areas, or pages for places the business cannot legitimately serve.',
    },
    {
      question: 'How do you connect model content to inventory?',
      answer:
        'We design model and ownership pages around durable research intent, then create inventory-aware links to relevant stock, comparable models, finance, service, parts, and nearby locations. When inventory is unavailable, the page should say so and provide honest alternatives rather than creating a dead end.',
    },
    {
      question: 'Can you optimize automotive brands for ChatGPT and AI Overviews?',
      answer:
        'Yes. We improve accessible vehicle, service, location, and ownership facts; entity consistency; source quality; and third-party corroboration, then monitor stable prompts. Live price and availability must still be verified against the business’s current system, and no AI citation or recommendation can be guaranteed.',
    },
    {
      question: 'How long does automotive SEO take?',
      answer:
        'Timing depends on platform and feed quality, inventory size, location count, competition, existing authority, implementation speed, and lead cycle. We use a baseline and controlled cohorts rather than promise a universal date for rankings or sales.',
    },
    {
      question: 'What does automotive SEO cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on inventory and location volume, platform and feed complexity, local-profile ownership, content needs, implementation responsibility, authority work, CRM integration, and AI-answer monitoring.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/local-seo',
      label: 'Local SEO',
      description: 'Verified locations, profiles, reviews, entities, and local discovery.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Inventory templates, parameters, rendering, indexation, migrations, and performance.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Answer access, vehicle and location facts, citations, and accuracy monitoring.',
    },
    {
      href: '/case-studies/expressway-ph',
      label: 'Expressway.PH case study',
      description: 'Approved first-party evidence for a Philippine automotive information project.',
    },
  ],
  ctaEyebrow: 'Improve automotive discovery',
  ctaTitle: 'Find where inventory, locations, and customer journeys lose qualified demand.',
  ctaLead:
    'Share your business model, locations, inventory platform, feeds, services, and lead stages. We will identify the highest-priority Google, local, and AI-search work.',
  ctaBenefits: [
    'Inventory, template, location, profile, and entity assessment',
    'Priority vehicle, service, local, and AI-answer opportunities',
    'Lead-quality and inventory-aware measurement recommendations',
  ],
}

const education: IndustryLeadPageData = {
  slug: 'education',
  name: 'Education',
  serviceType: 'Education SEO and AI search optimization',
  schemaAudience:
    'Universities, colleges, schools, training providers, online learning platforms, and education organizations',
  metaTitle: 'Education SEO Agency for Enrollment & AI Search | TheProjectSEO',
  metaDescription:
    'Education SEO for schools, universities, courses and training providers. Improve program, admissions, local and AI-search visibility with application-quality measurement.',
  eyebrow: 'Education SEO agency · Programs + enrollment + AI search',
  title: 'Help prospective students find',
  titleAccent: 'the right next step.',
  directAnswer:
    'TheProjectSEO helps universities, colleges, schools, training providers, and learning platforms become discoverable when prospective students and families compare programs, eligibility, cost, location, outcomes, and application requirements. We connect technical SEO, program architecture, admissions content, institutional entities, accessibility, authority, and AI-answer monitoring to qualified enquiries, applications, and enrollment stages.',
  primaryCta: 'Request an education SEO assessment',
  bestFit:
    'Education organizations with approved program facts, accountable admissions and academic owners, implementation access, and a way to distinguish enquiries from eligible applications.',
  heroChecks: [
    'Universities, colleges, schools, courses, training, and online education',
    'Program, admissions, eligibility, fees, scholarship, outcome, campus, and location intent',
    'Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity',
    'Reporting tied to qualified enquiries, applications, offers, and enrollment where available',
  ],
  journeyTitle: 'How do prospective students search before applying?',
  journeyLead:
    'Education choices involve the student, family, academic interests, eligibility, finance, location, career goals, and trust. The same person may return for months before submitting an application.',
  searchJourneys: [
    {
      stage: 'Explore',
      intent: 'Understand subjects and possible paths',
      explanation:
        'A student begins with an interest, career, problem, or learning goal and needs to understand which credential or pathway fits.',
      examples: ['courses for a career in data analytics', 'what can I do after commerce'],
      conversion: 'subject guide, pathway tool, event registration, or program exploration',
    },
    {
      stage: 'Compare',
      intent: 'Build an institution and program shortlist',
      explanation:
        'The student compares curriculum, mode, duration, location, cost, intake, recognition, support, and credible outcomes.',
      examples: ['online MBA Philippines tuition', 'best nursing colleges in Pune'],
      conversion: 'program comparison, prospectus, open day, or enquiry',
    },
    {
      stage: 'Qualify',
      intent: 'Check eligibility and practical fit',
      explanation:
        'The prospective applicant verifies prerequisites, grades, exams, documents, language requirements, deadlines, fees, scholarships, and delivery format.',
      examples: ['BSc computer science eligibility requirements', 'student visa documents for course x'],
      conversion: 'eligibility check, counselor call, application guide, or started application',
    },
    {
      stage: 'Decide',
      intent: 'Reduce enrollment risk',
      explanation:
        'Students and families validate faculty, facilities, student support, accreditation, outcomes, accommodation, refund terms, and what happens after an offer.',
      examples: ['institution x placement outcomes methodology', 'course x student support and refund policy'],
      conversion: 'completed application, accepted offer, deposit, or enrollment stage',
    },
  ],
  obstaclesTitle: 'Why does education SEO create traffic without applications?',
  obstaclesLead:
    'Most failures come from fragmented program data and unclear ownership. Prospective students cannot act confidently when facts differ across departments, PDFs, portals, and third-party listings.',
  obstacles: [
    {
      title: 'Program facts disagree across the site',
      problem:
        'Titles, duration, fees, eligibility, intake, delivery mode, deadlines, and outcomes often drift between program pages, admissions pages, PDFs, portals, and external listings.',
      response:
        'We define a canonical program fact set, responsible owners, approved sources, reviewed dates, and event-triggered updates so searchers and AI systems see consistent information.',
    },
    {
      title: 'The site mirrors the organization chart',
      problem:
        'Department-led navigation can force prospective students to understand internal structures before they can compare subjects, credentials, campuses, or career paths.',
      response:
        'We model discovery around student tasks while preserving academic governance: subject, program, credential, campus, mode, audience, and admissions routes receive clear ownership and links.',
    },
    {
      title: 'Critical information lives in inaccessible PDFs',
      problem:
        'Prospectuses and policy files may be hard to navigate on mobile, poorly linked, outdated, or inaccessible to students and retrieval systems.',
      response:
        'Important facts receive accessible HTML ownership with descriptive links and source files as supporting records. We include WCAG, mobile, rendering, and document-index checks in technical QA.',
    },
    {
      title: 'Marketing reports enquiries, not eligible demand',
      problem:
        'Brochure downloads and forms do not show whether a prospect meets criteria, starts an application, receives an offer, or enrolls.',
      response:
        'We agree on privacy-conscious stages with admissions, segment by program and market, and use aggregated application and enrollment outcomes where governance permits.',
    },
  ],
  deliverablesTitle: 'What is included in an education SEO engagement?',
  deliverablesLead:
    'The scope aligns program facts, technical infrastructure, prospective-student content, institutional trust, accessibility, and enrollment measurement.',
  deliverables: [
    {
      title: 'Technical and accessibility audit',
      description:
        'A review of templates, portals, program finders, JavaScript, documents, international routes, forms, and priority student journeys.',
      items: [
        'Crawling, rendering, canonicals, redirects, sitemaps, and indexation',
        'Program filters, parameters, duplicate routes, and search pages',
        'Mobile usability, Core Web Vitals, semantic structure, and WCAG risks',
        'Migration, intake, and release QA requirements',
      ],
    },
    {
      title: 'Student demand and journey research',
      description:
        'A model separating exploration, subject, program, eligibility, cost, location, outcome, and application intent.',
      items: [
        'Prospective-student, parent, counselor, and international-student questions',
        'Program, credential, career, campus, mode, and intake demand',
        'Admissions calls, site search, events, and application-friction evidence',
        'Query-to-page ownership and cannibalization rules',
      ],
    },
    {
      title: 'Program and admissions architecture',
      description:
        'A coherent system connecting subjects and career paths to canonical program facts and the correct admissions action.',
      items: [
        'Program, subject, credential, campus, mode, and audience pages',
        'Eligibility, fees, scholarships, deadlines, documents, and application guides',
        'Program finder and comparison requirements',
        'Internal links across exploration, validation, and decision stages',
      ],
    },
    {
      title: 'Content governance and production',
      description:
        'Source-backed content with academic, admissions, legal, and student-support review appropriate to each fact.',
      items: [
        'Fact owners, source hierarchy, reviewed dates, and intake triggers',
        'Faculty, curriculum, facility, support, and outcome evidence',
        'Accessible page briefs, author or reviewer signals, and update rules',
        'International and multilingual controls where needed',
      ],
    },
    {
      title: 'Institutional and local authority',
      description:
        'Clear relationships among the institution, schools, campuses, programs, faculty, credentials, and credible third-party references.',
      items: [
        'Campus and local-profile consistency for real locations',
        'Accreditor, partner, research, alumni, employer, and community opportunities',
        'Organization, course, place, person, and event entity mapping',
        'Digital PR based on approved research and institutional expertise',
      ],
    },
    {
      title: 'AI and enrollment reporting',
      description:
        'A measurement system for student discovery across search, AI answers, enquiries, applications, and enrollment stages.',
      items: [
        'Search visibility by subject, program, market, location, and intent',
        'AI prompt, mention, citation, source, and accuracy observations',
        'Event, enquiry, application, offer, and enrollment cohorts',
        'Intake-aware tests, updates, and next actions',
      ],
    },
  ],
  aiVisibility: {
    title: 'How can an institution be represented accurately in AI answers?',
    lead:
      'Prospective students ask conversational questions that combine subject, eligibility, budget, location, career, and personal constraints. AI systems need accessible canonical facts and credible supporting sources to answer responsibly.',
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
      'An AI-generated answer is not an admissions decision. Entry requirements, fees, deadlines, accreditation, immigration, and financial-aid information can change and must point to the institution’s current approved source. Inclusion and recommendation cannot be guaranteed.',
    workstreams: [
      {
        title: 'Program fact clarity',
        description:
          'Expose approved program title, credential, duration, delivery, campus, intake, fees, eligibility, deadlines, and contact routes in accessible HTML.',
        output: 'canonical fact model, owner matrix, answer blocks, and freshness rules',
      },
      {
        title: 'Student-question mapping',
        description:
          'Test realistic subject, comparison, eligibility, cost, location, and outcome prompts rather than isolated institution-name queries.',
        output: 'prompt cohorts, source map, baseline, and priority gaps',
      },
      {
        title: 'Institutional entities',
        description:
          'Clarify relationships among the institution, campus, faculty, program, credential, event, and approved external authorities.',
        output: 'entity graph, structured-data plan, profile corrections, and corroboration targets',
      },
      {
        title: 'Accuracy and intake monitoring',
        description:
          'Record cited sources and material facts for stable prompts, then recheck around intake, policy, fee, and program changes.',
        output: 'dated observations, discrepancy log, and update backlog',
      },
    ],
  },
  architectureTitle: 'Which pages should an education website prioritize?',
  architectureLead:
    'The page system should let a prospective student move from “what could I study?” to “am I eligible and how do I apply?” without resolving internal departmental complexity.',
  architecture: [
    {
      pageType: 'Subject and pathway',
      intent: 'Which field or credential fits my goal?',
      examples: 'subjects, careers, qualifications, undergraduate, postgraduate, vocational',
      signal: 'clear pathway, related programs, honest prerequisites, and next step',
    },
    {
      pageType: 'Program and course',
      intent: 'What exactly will I study?',
      examples: 'degree, diploma, certificate, short course, online program',
      signal: 'canonical title, curriculum, duration, mode, campus, intake, owner, and source date',
    },
    {
      pageType: 'Admissions and cost',
      intent: 'Can I apply and afford it?',
      examples: 'eligibility, deadlines, fees, scholarships, documents, application process',
      signal: 'current requirements, scope, exceptions, official source, and action',
    },
    {
      pageType: 'Campus and student life',
      intent: 'Will this environment work for me?',
      examples: 'campus, accommodation, facilities, support, international students, accessibility',
      signal: 'real location and services, evidence, policies, transport, and contacts',
    },
    {
      pageType: 'Outcome and trust',
      intent: 'Is the institution and program credible?',
      examples: 'faculty, accreditation, research, placements, alumni, policies',
      signal: 'defined methodology, approved evidence, responsible owner, and limitations',
    },
  ],
  processTitle: 'How does an education SEO engagement work?',
  processLead:
    'The program starts by reconciling student demand with program truth and institutional governance. Shipping then follows intake and review calendars.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Institution and admissions discovery',
      description:
        'Map programs, credentials, campuses, audiences, markets, owners, sources, intakes, application systems, reviews, and privacy constraints.',
      output: 'program inventory, owner matrix, source hierarchy, and outcome definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Technical and demand baseline',
      description:
        'Audit templates, finders, documents, international routes, performance, accessibility, search demand, competitors, and student AI prompts.',
      output: 'defect backlog, demand model, accessibility risks, and baseline',
    },
    {
      number: '03',
      cadence: 'Weeks 3–5',
      title: 'Student-first architecture',
      description:
        'Assign ownership across subject, program, admissions, cost, campus, outcome, and support journeys with clear internal links and fact rules.',
      output: 'page map, fact model, content briefs, and sequenced roadmap',
    },
    {
      number: '04',
      cadence: 'Monthly',
      title: 'Implementation and review',
      description:
        'Release technical fixes and priority pages with academic, admissions, accessibility, legal, and support review appropriate to the content.',
      output: 'released changes, approved pages, accessibility QA, and decision log',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Authority and answer improvement',
      description:
        'Strengthen institutional entities, research and faculty signals, campus discovery, student answers, and credible third-party corroboration.',
      output: 'entity improvements, source assets, profile changes, and prompt experiments',
    },
    {
      number: '06',
      cadence: 'Each intake / quarterly',
      title: 'Application-quality review',
      description:
        'Compare page and prompt cohorts with events, enquiries, application progression, offers, and enrollment while refreshing changed facts.',
      output: 'intake report, fact refreshes, experiment findings, and next roadmap',
    },
  ],
  measurementTitle: 'How should education SEO be measured?',
  measurementLead:
    'The aim is not simply more student traffic. The useful question is whether qualified prospective students can find accurate information and progress toward an appropriate program.',
  measurementBoundary:
    'Student privacy, consent, application systems, cross-device research, agents, offline events, and long decision cycles limit attribution. Reporting should be aggregated and governed; sensitive application data is not required for page-level optimization.',
  measurement: [
    {
      name: 'Program and subject visibility',
      definition: 'Non-brand impressions, clicks, and landing-page visibility by program, subject, credential, market, location, and intent.',
      source: 'Google Search Console, Bing Webmaster Tools, and controlled cohorts',
    },
    {
      name: 'Prospective-student progression',
      definition: 'Program views, finder usage, event registration, prospectus or guide actions, enquiries, and started applications.',
      source: 'privacy-approved web analytics and admissions systems',
    },
    {
      name: 'Application quality',
      definition: 'Aggregated progression from enquiry or start to eligible application, offer, acceptance, deposit, or enrollment where approved.',
      source: 'governed admissions or CRM cohorts',
    },
    {
      name: 'Program fact health',
      definition: 'Priority pages with current owner, source, reviewed date, intake, fees, requirements, and no material contradictions.',
      source: 'program inventory, content governance log, and site QA',
    },
    {
      name: 'AI-answer presence and accuracy',
      definition: 'Whether stable student prompts surface the institution or pages and represent program, eligibility, cost, and location facts correctly.',
      source: 'dated prompt observations by platform, market, and wording',
    },
  ],
  evidence: {
    title: 'What evidence can education teams review today?',
    lead:
      'Current public proof demonstrates the broader Google and AI-search operating system. It is not represented as student recruitment or enrollment performance.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Education case study image',
        description: 'Reserved for approved program, period, analytics, and application-stage context.',
      },
      {
        label: 'Student AI-answer example',
        description: 'Reserved for a dated prompt, platform, source, and program-fact accuracy review.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right education SEO agency?',
  fitLead:
    'The strongest programs have an owner for program truth, access to implementation, and a shared definition of useful student demand.',
  goodFit: [
    'You operate real programs, courses, campuses, or education services with approved facts',
    'Academic, admissions, legal, accessibility, and technical owners can review relevant work',
    'The website and application journey can be improved, not only reported on',
    'You can measure aggregated enquiry and application stages by program or cohort',
    'You want Google and AI discovery managed within institutional governance',
  ],
  notFit: [
    'You need guaranteed rankings, citations, application volume, or enrollment',
    'Program, fee, eligibility, outcome, or accreditation claims cannot be verified',
    'The plan depends on mass location or program pages without distinct offerings',
    'No owner can update templates, program facts, PDFs, or application routes',
    'Success is defined only as more traffic or brochure downloads',
  ],
  sources: [
    {
      label: 'Google Search Central: SEO Starter Guide',
      url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
      description: 'Primary guidance for useful, understandable, crawlable websites.',
    },
    {
      label: 'W3C: Web Content Accessibility Guidelines',
      url: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
      description: 'The primary accessibility standard referenced in education-site QA.',
    },
    {
      label: 'Schema.org: Course',
      url: 'https://schema.org/Course',
      description: 'A vocabulary for describing visible course information where appropriate.',
    },
    {
      label: 'Google Search Central: localized versions',
      url: 'https://developers.google.com/search/docs/specialty/international/localized-versions',
      description: 'Primary technical guidance for multilingual and multi-regional education content.',
    },
  ],
  faqTitle: 'Questions education teams ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What does an education SEO agency do?',
      answer:
        'It helps prospective students find and understand an institution’s real programs, admissions requirements, costs, locations, outcomes, and support. The work covers technical SEO, program architecture, content governance, accessibility, institutional entities, local and international discovery, AI answers, and application-quality measurement.',
    },
    {
      question: 'Can you optimize university, college, school, and course pages?',
      answer:
        'Yes. The demand and governance differ, but the core job is the same: establish canonical program facts, match pages to student intent, improve technical access and internal links, provide credible evidence, and connect each journey to an appropriate enquiry or application step.',
    },
    {
      question: 'How do you handle changing fees, deadlines, and eligibility?',
      answer:
        'We assign an approved source and owner, show the applicable intake or period, record reviewed dates, define update triggers, and align dependent pages and external listings. Material admissions facts should not be inferred or copied from an old prospectus without owner confirmation.',
    },
    {
      question: 'Should we convert prospectus PDFs into web pages?',
      answer:
        'Important decision facts should normally have accessible HTML ownership because it is easier to navigate, update, link, measure, and retrieve. PDFs can remain useful supporting documents, but they should not be the only usable source for core program, eligibility, cost, or application information.',
    },
    {
      question: 'Can you support international student SEO?',
      answer:
        'Yes, when the institution has real market-specific information and governance. Work may cover language and regional targeting, visas and documents with appropriate official sources, fees, scholarships, time zones, intake, agents, and country-specific conversion routes. We do not recommend translated doorway pages.',
    },
    {
      question: 'Do you optimize education brands for ChatGPT and AI Overviews?',
      answer:
        'Yes. We improve canonical program facts, accessible answers, institutional entities, sourcing, corroboration, and crawler access, then monitor stable student prompts for inclusion and accuracy. We cannot guarantee a recommendation, and the official admissions source remains authoritative.',
    },
    {
      question: 'How long does education SEO take?',
      answer:
        'Timing depends on program breadth, technical and accessibility debt, current authority, competition, review cycles, implementation capacity, and intake calendar. We baseline cohorts and report progress without promising a ranking, application, or enrollment by a fixed date.',
    },
    {
      question: 'What does education SEO cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on program and market count, platform complexity, accessibility needs, content and review ownership, local or international work, implementation responsibility, application measurement, and AI monitoring.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/content',
      label: 'SEO content systems',
      description: 'Research, briefs, institutional review, production, and freshness governance.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Program finders, rendering, documents, accessibility, migrations, and performance.',
    },
    {
      href: '/services/international-seo',
      label: 'International SEO',
      description: 'Language, regional targeting, hreflang, governance, and market-specific routes.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Program facts, institutional entities, source analysis, and answer monitoring.',
    },
  ],
  ctaEyebrow: 'Improve student discovery',
  ctaTitle: 'Find where program facts and student journeys lose qualified applicants.',
  ctaLead:
    'Share your programs, markets, intakes, website, application process, and review owners. We will identify the highest-priority Google and AI-search work.',
  ctaBenefits: [
    'Program, technical, accessibility, entity, and admissions assessment',
    'Priority student-intent and AI-answer opportunities',
    'Application-quality and content-governance recommendations',
  ],
}

const fashion: IndustryLeadPageData = {
  slug: 'fashion',
  name: 'Fashion',
  serviceType: 'Fashion SEO and AI search optimization',
  schemaAudience:
    'Fashion brands, apparel ecommerce stores, footwear, accessories, luxury, marketplaces, and fashion retailers',
  metaTitle: 'Fashion SEO Agency for Ecommerce & AI Search | TheProjectSEO',
  metaDescription:
    'Fashion SEO for apparel, footwear, accessories and luxury brands. Improve collection, product, editorial and AI-search visibility with organic revenue measurement.',
  eyebrow: 'Fashion SEO agency · Collections + commerce + AI search',
  title: 'Make fashion discovery lead to',
  titleAccent: 'products people can buy.',
  directAnswer:
    'TheProjectSEO helps fashion brands and retailers earn discovery across Google, Bing, shopping surfaces, and AI-assisted product research. We connect collection and product SEO, faceted navigation, seasonal editorial, product facts, brand entities, digital authority, and merchandising-aware measurement to qualified product views, add-to-cart activity, new customers, and organic revenue.',
  primaryCta: 'Request a fashion SEO assessment',
  bestFit:
    'Fashion businesses with a differentiated product, reliable catalog data, merchandising and development access, approved brand assets, and useful ecommerce outcomes.',
  heroChecks: [
    'Apparel, footwear, accessories, luxury, DTC, multi-brand retail, and marketplaces',
    'Collection, style, occasion, material, fit, size, trend, and product intent',
    'Google, Bing, shopping results, AI Overviews, ChatGPT, Gemini, and Perplexity',
    'Measurement tied to product discovery, new customers, margin-aware revenue, and stock',
  ],
  journeyTitle: 'How do fashion customers search from inspiration to purchase?',
  journeyLead:
    'Fashion discovery moves between identity, occasion, trend, category, material, fit, price, stock, and brand trust. Search pages need to support exploration without producing millions of thin filter combinations.',
  searchJourneys: [
    {
      stage: 'Inspire',
      intent: 'Find a look or solve an occasion',
      explanation:
        'The customer starts with an aesthetic, season, body or fit need, destination, culture, or event rather than a specific product name.',
      examples: ['linen outfits for humid weather', 'minimalist wedding guest dress ideas'],
      conversion: 'editorial guide, curated collection, style quiz, or category exploration',
    },
    {
      stage: 'Narrow',
      intent: 'Choose category and attributes',
      explanation:
        'The search becomes more specific around garment, color, material, length, size, silhouette, price, ethics, or delivery need.',
      examples: ['black wide-leg trousers petite', 'vegan leather work tote India'],
      conversion: 'collection or filter landing page with useful, available products',
    },
    {
      stage: 'Evaluate',
      intent: 'Check product and brand fit',
      explanation:
        'Customers inspect images, measurements, size and fit guidance, materials, care, origin, reviews, availability, delivery, returns, and brand credibility.',
      examples: ['brand x sizing review', 'product x material and care'],
      conversion: 'qualified product view, size selection, wishlist, or add to cart',
    },
    {
      stage: 'Buy',
      intent: 'Complete the purchase confidently',
      explanation:
        'The decision depends on current stock, variant, price, promotion, delivery date, duty, returns, payment, and a low-friction mobile experience.',
      examples: ['product x size medium in stock', 'brand x delivery to Manila and returns'],
      conversion: 'checkout, purchase, new customer, or store visit',
    },
  ],
  obstaclesTitle: 'Why does fashion SEO traffic fail to become revenue?',
  obstaclesLead:
    'Fashion sites often have enough pages but weak page ownership. Collections, filters, variants, campaigns, and editorial compete while stock and seasonality change underneath them.',
  obstacles: [
    {
      title: 'Filters create uncontrolled indexation',
      problem:
        'Size, color, price, material, fit, brand, sort, and campaign parameters can generate duplicate or empty combinations that consume crawl and compete with curated collections.',
      response:
        'We inventory facets, demand, inventory depth, uniqueness, internal links, canonicals, and crawl paths; only stable combinations with a useful experience receive indexable ownership.',
    },
    {
      title: 'Product pages disappear with the season',
      problem:
        'Deleting out-of-stock or discontinued products can waste links and demand, while keeping every unavailable item creates frustrating dead ends.',
      response:
        'Lifecycle rules distinguish temporary stock-outs, returning items, permanent discontinuation, successor products, archives, and collections so value and customer expectations are handled honestly.',
    },
    {
      title: 'Editorial inspiration is disconnected from commerce',
      problem:
        'Trend and styling content may attract visitors but fail to connect them to available collections, products, alternatives, or a clear merchandising story.',
      response:
        'We build editorial-to-collection and collection-to-guide links around the same attributes, occasions, and customer tasks, with stock-aware curation and update triggers.',
    },
    {
      title: 'Revenue reporting ignores stock and margin',
      problem:
        'A ranking can look successful while the promoted products are unavailable, heavily discounted, frequently returned, or unprofitable.',
      response:
        'We segment cohorts by collection, product state, new versus returning customer, revenue, and approved commercial context such as margin or return rate where the business can share it.',
    },
  ],
  deliverablesTitle: 'What does a fashion SEO agency deliver?',
  deliverablesLead:
    'The engagement connects technical commerce, search demand, merchandising, content, brand authority, AI product discovery, and commercial measurement.',
  deliverables: [
    {
      title: 'Catalog and technical audit',
      description:
        'A review of collection, filter, product, variant, locale, campaign, internal search, rendering, performance, and product lifecycle behavior.',
      items: [
        'Indexation, canonicals, parameters, pagination, sitemaps, and redirects',
        'Variant, stock, discontinued product, and collection rules',
        'JavaScript, mobile, Core Web Vitals, and media performance',
        'Platform and release backlog for Shopify, Magento, or custom stacks',
      ],
    },
    {
      title: 'Fashion demand and merchandising map',
      description:
        'A model for category, garment, style, occasion, material, color, fit, size, brand, trend, and product demand.',
      items: [
        'Customer language from search, site search, support, reviews, and merchandising',
        'Evergreen, seasonal, campaign, and emerging-trend separation',
        'Competitor collection and editorial gaps',
        'Query-to-page ownership and cannibalization rules',
      ],
    },
    {
      title: 'Collection and product system',
      description:
        'A scalable hierarchy that gives valuable categories and curated attribute combinations clear ownership.',
      items: [
        'Category, subcategory, collection, brand, and approved facet pages',
        'Product titles, descriptions, variant facts, media, size, fit, and care',
        'Product and merchant structured-data consistency',
        'Research-to-collection and collection-to-product internal links',
      ],
    },
    {
      title: 'Editorial and seasonal content',
      description:
        'Brand-aligned content for style, occasion, material, care, fit, trend, and culture that leads naturally to current merchandise.',
      items: [
        'Evergreen guides and controlled seasonal refreshes',
        'Expert or stylist review and original visual requirements',
        'Source, image-rights, claim, and cultural-review controls',
        'Campaign launch, consolidation, and archive rules',
      ],
    },
    {
      title: 'Brand authority and entities',
      description:
        'Credible discovery beyond the store through designers, collections, stockists, partners, publications, and useful original assets.',
      items: [
        'Organization, brand, designer, collection, and product consistency',
        'Digital PR tied to real launches, craft, research, and expertise',
        'Stockist, marketplace, partner, and publication citation opportunities',
        'Unlinked mention and source-page analysis',
      ],
    },
    {
      title: 'AI and commerce reporting',
      description:
        'Reporting that joins search and AI discovery to merchandise availability and meaningful ecommerce outcomes.',
      items: [
        'Visibility by category, attribute, season, brand, and intent',
        'AI prompt, product mention, citation, source, and accuracy checks',
        'Product views, add to cart, new customers, revenue, and stock context',
        'Collection and content cohort experiments',
      ],
    },
  ],
  aiVisibility: {
    title: 'How can fashion products appear in AI-assisted shopping research?',
    lead:
      'People increasingly ask complete questions about style, occasion, fit, material, price, ethics, and availability. AI systems need explicit product facts, strong collection context, recognizable brand entities, useful imagery, and credible sources.',
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
      'Models can misstate stock, price, sizing, materials, sustainability, delivery, or returns. Current product and merchant data remains authoritative. We improve source clarity and monitor observations but cannot guarantee a product mention, citation, or recommendation.',
    workstreams: [
      {
        title: 'Product fact consistency',
        description:
          'Align names, categories, variants, color, size, fit, material, care, price, stock, brand, imagery, delivery, and return facts across visible pages and approved feeds.',
        output: 'field requirements, discrepancy log, structured-data plan, and freshness rules',
      },
      {
        title: 'Conversational product demand',
        description:
          'Map real prompts combining occasion, aesthetic, climate, fit, budget, material, availability, and location to useful collection and guide pages.',
        output: 'prompt cohorts, answer gaps, collection roadmap, and source map',
      },
      {
        title: 'Brand and collection entities',
        description:
          'Clarify relationships among the company, brand, designer, collection, product, stockists, and approved third-party coverage.',
        output: 'entity map, profile corrections, corroboration targets, and schema recommendations',
      },
      {
        title: 'Shopping-answer accuracy',
        description:
          'Track stable discovery prompts and record product inclusion, cited sources, material facts, and whether the destination remains buyable.',
        output: 'dated observations, source changes, stock notes, and correction backlog',
      },
    ],
  },
  architectureTitle: 'Which pages should a fashion ecommerce site prioritize?',
  architectureLead:
    'Pages earn indexable ownership when they represent real customer demand, distinct merchandising value, sufficient products, and a clear maintenance rule.',
  architecture: [
    {
      pageType: 'Category and collection',
      intent: 'Show me the right product group',
      examples: 'dresses, trainers, work bags, summer linen, petite trousers',
      signal: 'available assortment, useful curation, unique context, filters, and internal links',
    },
    {
      pageType: 'Product and variant',
      intent: 'Will this exact item work for me?',
      examples: 'individual style, size, color, material, care, fit, stock',
      signal: 'specific facts, original media, reviews, current variants, delivery, and returns',
    },
    {
      pageType: 'Style and occasion',
      intent: 'How should I choose or wear it?',
      examples: 'workwear, wedding guest, travel capsule, climate, body and fit guides',
      signal: 'expert guidance, original visuals, relevant available products, and review date',
    },
    {
      pageType: 'Material and responsibility',
      intent: 'What is it made from and what does the claim mean?',
      examples: 'fabric, sourcing, care, durability, repair, sustainability statements',
      signal: 'defined terms, evidence, scope, owner, limitations, and product links',
    },
    {
      pageType: 'Brand and trust',
      intent: 'Can I buy from this brand confidently?',
      examples: 'story, designers, sizing, shipping, returns, stores, stockists, contact',
      signal: 'consistent identity, policies, proof, real locations, and support route',
    },
  ],
  processTitle: 'How does a fashion SEO engagement work?',
  processLead:
    'The first cycle aligns search ownership with catalog and merchandising reality. Later cycles follow product drops, seasons, and measured collection performance.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Catalog and merchandising discovery',
      description:
        'Map platforms, feeds, categories, attributes, variants, markets, seasons, launches, stock states, owners, creative rights, and commercial outcomes.',
      output: 'catalog map, lifecycle states, owner matrix, and KPI definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Technical and demand baseline',
      description:
        'Crawl collections, products, facets, locales, campaigns, and internal links; analyze customer demand, competitors, analytics, and AI product prompts.',
      output: 'defect backlog, demand model, indexation inventory, and baseline',
    },
    {
      number: '03',
      cadence: 'Weeks 3–5',
      title: 'Collection architecture',
      description:
        'Assign canonical ownership across categories, approved facets, products, brands, style guides, and campaigns with stock and lifecycle thresholds.',
      output: 'page map, facet rules, internal links, briefs, and roadmap',
    },
    {
      number: '04',
      cadence: 'Monthly / by drop',
      title: 'Implementation and merchandising',
      description:
        'Release technical fixes, collection improvements, product requirements, and editorial content with mobile, feed, visual, stock, and brand QA.',
      output: 'released cohorts, QA log, updated templates, and reviewed content',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Authority and answer improvement',
      description:
        'Build useful brand assets, stylist-led guidance, publication and partner discovery, entity consistency, and AI-answer source coverage.',
      output: 'source assets, citations, entity fixes, and prompt experiments',
    },
    {
      number: '06',
      cadence: 'Seasonal / quarterly',
      title: 'Commerce review',
      description:
        'Compare collection and content cohorts with stock, new customers, revenue, returns or margin context, and changing demand.',
      output: 'season review, consolidation list, test findings, and next roadmap',
    },
  ],
  measurementTitle: 'How should fashion SEO performance be measured?',
  measurementLead:
    'Fashion visibility has value when customers reach suitable, available products and buy on acceptable commercial terms. Search reporting must be read alongside merchandising.',
  measurementBoundary:
    'Consent, cross-device journeys, marketplaces, offline stores, promotions, returns, attribution windows, and stock changes affect reporting. We use an agreed model and separate observed association from proven causality.',
  measurement: [
    {
      name: 'Non-brand fashion visibility',
      definition: 'Impressions, clicks, and landing-page visibility by category, attribute, occasion, style, material, brand, and season.',
      source: 'Google Search Console, Bing Webmaster Tools, and rank cohorts',
    },
    {
      name: 'Qualified product discovery',
      definition: 'Collection engagement, product views, size and variant interaction, site search success, wishlist, and add-to-cart behavior.',
      source: 'consent-aware ecommerce analytics',
    },
    {
      name: 'Organic commerce outcomes',
      definition: 'Purchases, new customers, revenue, average order value, and approved margin or return context by landing-page cohort.',
      source: 'ecommerce platform and approved attribution model',
    },
    {
      name: 'Catalog search health',
      definition: 'Valuable indexable collections and products, duplicate facets, empty pages, stock-state accuracy, and technical regressions.',
      source: 'crawler, catalog feed, site logs, and release QA',
    },
    {
      name: 'AI product discovery',
      definition: 'Brand or product presence, cited sources, fact accuracy, and buyable destination for stable fashion prompts.',
      source: 'dated prompt observations by platform, market, and wording',
    },
  ],
  evidence: {
    title: 'What evidence can fashion teams review?',
    lead:
      'Current first-party proof demonstrates search and AI-visibility work in other categories. It is not presented as fashion ecommerce revenue or product performance.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Fashion ecommerce case study image',
        description: 'Reserved for approved collection, revenue, stock, period, and attribution context.',
      },
      {
        label: 'Fashion AI-shopping example',
        description: 'Reserved for a dated prompt, product facts, source, and availability check.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right fashion SEO agency?',
  fitLead:
    'Fit is strongest when SEO can work with merchandising, catalog, creative, development, and analytics—not as a separate publishing queue.',
  goodFit: [
    'You sell differentiated fashion products with reliable catalog and stock information',
    'Merchandising and development can change collections, facets, products, and templates',
    'Brand, product, material, sizing, and responsibility claims can be verified',
    'The team can evaluate organic outcomes with stock and ecommerce context',
    'You want Google and AI product discovery managed as one system',
  ],
  notFit: [
    'You need guaranteed rankings, citations, revenue, or a fixed return',
    'Products, prices, variants, and availability cannot be kept accurate',
    'The plan depends on copied manufacturer text or unlimited thin filter pages',
    'No one can approve creative rights, product facts, or material claims',
    'Success is defined only as publishing trend articles or increasing traffic',
  ],
  sources: [
    {
      label: 'Google Search Central: ecommerce site structure',
      url: 'https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure',
      description: 'Primary guidance for ecommerce navigation and product discovery.',
    },
    {
      label: 'Google Search Central: product structured data',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/product',
      description: 'Requirements for visible, accurate product and merchant information.',
    },
    {
      label: 'Google Search Central: faceted navigation',
      url: 'https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation',
      description: 'Technical guidance for large filtered catalog systems.',
    },
    {
      label: 'Google Merchant Center product data specification',
      url: 'https://support.google.com/merchants/answer/7052112',
      description: 'Primary definitions for product data fields used across shopping surfaces.',
    },
  ],
  faqTitle: 'Questions fashion brands ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What does a fashion SEO agency do?',
      answer:
        'It makes a fashion catalog, collections, products, editorial expertise, and brand facts discoverable to relevant customers. Work covers technical commerce, facets, product lifecycle, collection architecture, content, entities, authority, AI product research, and measurement tied to stock-aware ecommerce outcomes.',
    },
    {
      question: 'How do you decide which fashion filters should be indexed?',
      answer:
        'We evaluate search demand, product depth, stability, customer value, uniqueness, internal links, crawl cost, and whether the combination deserves a curated landing experience. Useful combinations may receive ownership; sort orders, empty results, session states, and near-duplicate combinations normally need control.',
    },
    {
      question: 'What should happen to out-of-stock fashion products?',
      answer:
        'Temporary stock-outs, returning products, permanent discontinuation, successor styles, and one-off items need different treatments. The page should state the truth, preserve value when useful, offer genuinely relevant alternatives, and avoid misleading availability. We define rules with merchandising and platform owners.',
    },
    {
      question: 'Can fashion editorial content drive sales without sounding generic?',
      answer:
        'Yes, when it uses the brand’s real design, product, stylist, material, customer, and climate knowledge; answers a specific task; includes original or licensed visuals; and connects to available merchandise. Generic trend summaries produced at scale are easy to replicate and difficult to maintain.',
    },
    {
      question: 'Do you work with Shopify and Magento fashion stores?',
      answer:
        'Yes. The audit adapts to the actual theme, apps, markets, feeds, rendering, collection logic, and deployment process. Platform defaults do not remove the need to define page ownership, product lifecycle, performance, structured data, and QA.',
    },
    {
      question: 'Can you optimize fashion brands for ChatGPT and AI Overviews?',
      answer:
        'Yes. We improve product and collection facts, conversational demand coverage, brand entities, useful imagery and text, credible sources, and third-party corroboration, then monitor stable prompts. We cannot guarantee a mention, citation, recommendation, price, or stock statement.',
    },
    {
      question: 'How long does fashion SEO take?',
      answer:
        'Timing depends on catalog size, technical debt, competition, current authority, release speed, stock and seasonality, and creative and merchandising resources. We use controlled cohorts and seasonal reviews rather than promise rankings or revenue by a universal date.',
    },
    {
      question: 'What does fashion SEO cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on catalog and market size, platform and feed complexity, content and creative ownership, technical implementation, authority needs, ecommerce measurement, and AI-product monitoring.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/ecommerce-seo',
      label: 'Ecommerce SEO',
      description: 'Catalog, collection, product, feed, lifecycle, and commerce measurement.',
    },
    {
      href: '/seo-for-shopify',
      label: 'Shopify SEO',
      description: 'A dedicated approach to Shopify themes, collections, markets, apps, and growth.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Facets, rendering, indexation, migrations, performance, and release QA.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Product facts, brand entities, source analysis, and answer monitoring.',
    },
  ],
  ctaEyebrow: 'Improve fashion discovery',
  ctaTitle: 'Find where collections, products, and merchandising lose organic demand.',
  ctaLead:
    'Share your platform, catalog, markets, seasons, merchandising process, and ecommerce measurement. We will identify the highest-priority Google and AI-search work.',
  ctaBenefits: [
    'Catalog, collection, facet, product, and technical assessment',
    'Priority fashion demand, editorial, and AI-product opportunities',
    'Stock-aware commerce and content-governance recommendations',
  ],
}

export const growthIndustryLeadPages = {
  ai,
  automotive,
  education,
  fashion,
} as const satisfies Record<string, IndustryLeadPageData>
