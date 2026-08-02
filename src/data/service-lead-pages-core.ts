import {
  sharedIndustryEvidence,
  type IndustryLeadPageData,
} from "@/data/industry-lead-pages";

const seo: IndustryLeadPageData = {
  slug: "seo",
  path: "/services/seo",
  parentBreadcrumb: { name: "Services", href: "/services" },
  name: "Search engine optimization",
  schemaName: "SEO agency and search engine optimization services",
  serviceType:
    "Search engine optimization services across technical SEO, content, on-page SEO, authority, measurement, and AI search",
  schemaAudience:
    "Organizations that need qualified visibility and measurable business outcomes from Google, Bing, and AI-assisted search",
  metaTitle: "SEO Agency for Google, Bing & AI Search | TheProjectSEO",
  metaDescription:
    "SEO services that connect technical implementation, content, authority and AI-search visibility to qualified leads, sales and revenue. See the scope and process.",
  eyebrow: "SEO agency · Google + Bing + AI search",
  title: "Build search visibility that",
  titleAccent: "earns real business.",
  directAnswer:
    "TheProjectSEO is an SEO agency for organizations that need to be found on Google and Bing and represented accurately in AI-assisted search. We combine technical SEO, demand research, page and content architecture, on-page optimization, internal links, digital authority, entity clarity, AI-search monitoring, and commercial measurement. The aim is not to manufacture traffic; it is to help the right audience discover, evaluate, and choose the business.",
  primaryCta: "Request an SEO assessment",
  bestFit:
    "Companies with a credible offer, access to subject experts and website owners, implementation capacity, and useful sales or commerce stages beyond a form submission.",
  heroChecks: [
    "Technical SEO, content, on-page, internal linking, authority, local and international needs",
    "Google Search, Bing, AI Overviews, AI Mode, ChatGPT, Gemini, Claude, and Perplexity",
    "Strategies mapped to customer questions, page ownership, products, services, and markets",
    "Reporting tied to qualified leads, product actions, sales, pipeline, or revenue",
  ],
  journeyTitle: "What should a modern SEO strategy cover?",
  journeyLead:
    "Search is a customer-discovery system, not a keyword list. People move from learning to comparison, brand validation, and action across search results, maps, publishers, marketplaces, and AI answers. Each stage needs an eligible page and a measurable next step.",
  searchJourneys: [
    {
      stage: "Discover",
      intent: "Understand a need or possibility",
      explanation:
        "The searcher describes a problem, task, symptom, goal, or question before knowing the category or provider that can help.",
      examples: [
        "how to improve Shopify category visibility",
        "reduce month-end close time",
      ],
      conversion:
        "useful guide, tool, category education, or relevant solution path",
    },
    {
      stage: "Evaluate",
      intent: "Compare approaches and providers",
      explanation:
        "The buyer understands the problem and adds industry, location, platform, budget, capability, or risk constraints to build a shortlist.",
      examples: [
        "technical SEO agency for ecommerce",
        "best tax software for small business",
      ],
      conversion:
        "service, product, industry, location, comparison, trial, or consultation",
    },
    {
      stage: "Validate",
      intent: "Verify trust and fit",
      explanation:
        "The buyer checks evidence, experience, process, people, pricing logic, compatibility, reviews, alternatives, and what the provider will actually deliver.",
      examples: [
        "agency x case studies and pricing",
        "product x integrations and limitations",
      ],
      conversion:
        "case study, methodology, pricing, product evaluation, or qualified conversation",
    },
    {
      stage: "Act",
      intent: "Complete the commercial task",
      explanation:
        "The user needs a clear path to buy, book, apply, enquire, visit, call, start a trial, or involve the next member of the buying committee.",
      examples: ["book SEO consultation", "product x free trial"],
      conversion:
        "qualified lead, trial, appointment, order, opportunity, or revenue event",
    },
  ],
  obstaclesTitle: "Why do SEO campaigns produce activity without growth?",
  obstaclesLead:
    "The usual problem is fragmentation. Technical fixes, content, links, and reporting happen as separate outputs without clear page ownership or a shared definition of business value.",
  obstacles: [
    {
      title: "Keywords are selected without commercial context",
      problem:
        "High search volume can attract students, job seekers, hobbyists, or early learners while the business needs evaluators, local customers, product users, or qualified accounts.",
      response:
        "We group demand by audience, job, stage, market, product or service, evidence need, and next action. Search volume informs opportunity; it does not decide strategy alone.",
    },
    {
      title: "Technical defects remain in the release process",
      problem:
        "An audit can identify rendering, canonical, internal-link, template, performance, or migration issues, but rankings remain exposed if engineering never ships or monitors the fix.",
      response:
        "Recommendations include evidence, affected templates, acceptance criteria, priority, owner, dependencies, and QA. We work with development workflows rather than stop at a PDF.",
    },
    {
      title: "Content volume replaces information quality",
      problem:
        "Publishing large numbers of similar pages can create cannibalization, weak evidence, outdated claims, and an expensive maintenance backlog.",
      response:
        "Every page needs distinct intent, canonical ownership, first-party or sourced value, a reviewer, internal-link role, conversion purpose, and update or consolidation rule.",
    },
    {
      title: "Reporting equates rankings with revenue",
      problem:
        "A position, session, form, or AI citation is not automatically a qualified customer. Cross-device, offline, dark-social, and long-cycle journeys add uncertainty.",
      response:
        "We report visibility and implementation separately from customer progression, use cohorts and agreed attribution, and label evidence and inference rather than overclaim causality.",
    },
  ],
  deliverablesTitle: "What is included in full-service SEO?",
  deliverablesLead:
    "The scope is prioritized from the site, market, business model, and implementation reality. These six workstreams form one operating system rather than a bundle of disconnected tasks.",
  deliverables: [
    {
      title: "Technical SEO and release QA",
      description:
        "A crawl-to-render review of priority pages, templates, platforms, internal links, performance, and change processes.",
      items: [
        "Indexation, status, canonical, redirect, robots, sitemap, and pagination review",
        "JavaScript rendering, faceted navigation, international, structured data, and Core Web Vitals",
        "Migration and redesign planning where relevant",
        "Developer-ready tickets, acceptance criteria, and post-release validation",
      ],
    },
    {
      title: "Demand and competitor research",
      description:
        "A commercial map of the questions, entities, products, services, locations, and decision criteria the right audience searches.",
      items: [
        "Keyword, SERP, intent, entity, and competitor analysis",
        "Customer, sales, product, support, site-search, and first-party input",
        "Opportunity by audience, stage, market, and business value",
        "Query-to-page ownership and cannibalization controls",
      ],
    },
    {
      title: "Page and content architecture",
      description:
        "A maintainable system for service, product, category, industry, location, comparison, evidence, and educational pages.",
      items: [
        "Information architecture and canonical page map",
        "Content briefs, direct-answer structure, source and expert requirements",
        "Internal-link routes from discovery to evaluation and conversion",
        "New, refresh, merge, redirect, archive, and delete decisions",
      ],
    },
    {
      title: "On-page and entity optimization",
      description:
        "Page-level improvements that make the topic, offer, people, places, evidence, and next action clear to users and search systems.",
      items: [
        "Titles, headings, copy, media context, anchors, and snippets",
        "Organization, person, product, service, place, and article consistency",
        "Structured data that matches visible page facts",
        "Conversion paths and trust elements appropriate to intent",
      ],
    },
    {
      title: "Authority and off-page SEO",
      description:
        "Relevant, defensible third-party signals built through evidence, expertise, partnerships, digital PR, and useful assets.",
      items: [
        "Link and mention profile, competitors, risks, and gaps",
        "Original research, tools, data, expert commentary, and source assets",
        "Partner, industry, local, publication, and community opportunities",
        "No private link networks, invented consensus, or guaranteed placement claims",
      ],
    },
    {
      title: "Search and commercial measurement",
      description:
        "Reporting that connects shipped work and qualified visibility to the outcomes the business can responsibly observe.",
      items: [
        "Google Search Console, Bing, crawl, landing-page, and page-cohort reporting",
        "AI prompt, mention, citation, source, and accuracy observations",
        "Lead, product, sales, pipeline, commerce, or local-action stages",
        "Experiments, release annotations, confidence notes, and next decisions",
      ],
    },
  ],
  aiVisibility: {
    title: "How does SEO now include AI search?",
    lead: "AI-assisted search expands the surface area of discovery, but it does not replace the web. Eligible, useful, accessible pages and credible sources still underpin many generated answers. The added work is understanding prompts, retrieval sources, entities, citations, and factual representation.",
    platforms: [
      "Google Search",
      "Google AI Overviews",
      "Google AI Mode",
      "Bing",
      "ChatGPT",
      "Gemini",
      "Claude",
      "Perplexity",
    ],
    boundary:
      "No agency can guarantee a ranking, citation, recommendation, or traffic from a probabilistic AI system. Outputs vary by platform, time, location, wording, account, and model. We preserve test conditions and report observed evidence without inventing attribution.",
    workstreams: [
      {
        title: "Search foundations",
        description:
          "Maintain the crawl, index, relevance, quality, internal-link, page-experience, and authority conditions needed across conventional and search-backed AI results.",
        output:
          "technical backlog, page ownership map, search baseline, and release QA",
      },
      {
        title: "Answer and entity clarity",
        description:
          "Make important customer questions, facts, differences, evidence, people, products, services, and places explicit and consistent.",
        output:
          "answer inventory, entity map, claim register, and structured-data plan",
      },
      {
        title: "Source environment",
        description:
          "Identify which company and third-party sources shape important results and improve legitimate corroboration through useful evidence and expertise.",
        output:
          "citation-source graph, authority roadmap, and correction opportunities",
      },
      {
        title: "Visibility monitoring",
        description:
          "Track a stable commercial prompt set by platform and distinguish mentions, citations, framing, factual accuracy, and relevant next actions.",
        output:
          "versioned observations, competitor movement, accuracy log, and decisions",
      },
    ],
  },
  architectureTitle: "Which pages belong in a revenue-focused SEO system?",
  architectureLead:
    "The exact page types depend on the business model. Each indexable page should answer a distinct search job, expose real value, and move the visitor to a useful next step.",
  architecture: [
    {
      pageType: "Product, service, and category",
      intent: "What can solve my need?",
      examples:
        "product, category, service, capability, solution, and use-case pages",
      signal:
        "explicit offer, audience, facts, boundaries, proof, and conversion route",
    },
    {
      pageType: "Industry and location",
      intent: "Does it fit my context and market?",
      examples: "industry, role, country, city, service-area, and branch pages",
      signal:
        "real expertise or presence, distinct facts, appropriate proof, and local action",
    },
    {
      pageType: "Comparison and evaluation",
      intent: "How should I choose?",
      examples:
        "alternatives, versus, pricing, implementation, compatibility, and criteria",
      signal:
        "declared methodology, balanced differences, current sources, and next step",
    },
    {
      pageType: "Education and tools",
      intent: "Help me understand or complete the task",
      examples:
        "guides, research, calculators, checklists, templates, and glossaries",
      signal:
        "original utility, expert or source review, update rule, and relevant commercial path",
    },
    {
      pageType: "Evidence and trust",
      intent: "Can I verify the organization?",
      examples:
        "case studies, company, people, methodology, policies, reviews, and sources",
      signal:
        "approved facts, periods, methods, named ownership, limitations, and contact",
    },
  ],
  processTitle: "How does a full-service SEO engagement work?",
  processLead:
    "The first cycle builds a shared baseline and prioritization model. Later cycles ship, validate, measure, learn, and adjust instead of repeating a fixed monthly checklist.",
  process: [
    {
      number: "01",
      cadence: "Weeks 1–2",
      title: "Business and audience discovery",
      description:
        "Map offers, audiences, markets, sites, technology, sales or commerce stages, evidence, stakeholders, constraints, and previous search work.",
      output:
        "business map, stakeholder plan, data access, risks, and outcome definitions",
    },
    {
      number: "02",
      cadence: "Weeks 1–3",
      title: "Technical, demand, and visibility baseline",
      description:
        "Audit crawling, rendering, templates, pages, links, content, competitors, search demand, current performance, entities, and relevant AI prompts.",
      output:
        "evidence-backed findings, baseline, opportunity model, and data gaps",
    },
    {
      number: "03",
      cadence: "Weeks 3–5",
      title: "Architecture and prioritization",
      description:
        "Assign page ownership and score technical, content, authority, and measurement work by value, confidence, effort, dependencies, and risk.",
      output:
        "page map, briefs, developer tickets, internal links, and sequenced roadmap",
    },
    {
      number: "04",
      cadence: "Monthly",
      title: "Implementation and content",
      description:
        "Ship the highest-value fixes and pages with subject-owner review, technical acceptance criteria, conversion requirements, and production QA.",
      output:
        "released changes, reviewed pages, resolved defects, and decision log",
    },
    {
      number: "05",
      cadence: "Monthly",
      title: "Authority and distribution",
      description:
        "Create useful evidence assets and earn relevant discovery through experts, partners, publications, communities, local sources, and credible profiles.",
      output:
        "source assets, relevant mentions or links, entity fixes, and outreach learning",
    },
    {
      number: "06",
      cadence: "Monthly / quarterly",
      title: "Measurement and next decisions",
      description:
        "Compare shipped cohorts with search, AI-answer, customer, product, sales, and revenue evidence; account for releases and decide what to scale or stop.",
      output:
        "decision report, experiment readout, confidence notes, and updated roadmap",
    },
  ],
  measurementTitle: "How should an SEO agency report performance?",
  measurementLead:
    "A useful report separates controllable work, search visibility, customer behavior, and commercial outcomes. It also explains data limitations and what decision follows.",
  measurementBoundary:
    "SEO attribution is affected by consent, multiple sessions and devices, brand demand, offline interactions, direct visits, AI assistants, sales-cycle length, and CRM discipline. We use agreed definitions and do not present modeled or assisted influence as proven causality.",
  measurement: [
    {
      name: "Implementation and technical health",
      definition:
        "Priority recommendations shipped, affected templates validated, valuable pages indexable, regressions detected, and release defects resolved.",
      source:
        "tickets, crawl data, logs where available, Search Console, and QA records",
    },
    {
      name: "Qualified search visibility",
      definition:
        "Non-brand impressions, clicks, landing pages, and query cohorts for the right audience, stage, product, service, and market.",
      source:
        "Google Search Console, Bing Webmaster Tools, and controlled rank cohorts",
    },
    {
      name: "Customer progression",
      definition:
        "Meaningful page paths, calls, bookings, enquiries, trials, applications, product actions, store discovery, or other approved stages.",
      source: "consent-aware analytics and business systems",
    },
    {
      name: "AI-answer presence and accuracy",
      definition:
        "Brand presence, citations, cited sources, framing, and factual accuracy for a stable commercially relevant prompt set.",
      source: "versioned platform observations",
    },
    {
      name: "Commercial outcomes",
      definition:
        "Qualified leads, accepted opportunities, pipeline, orders, new customers, revenue, or other approved business outcomes by cohort.",
      source: "CRM, commerce, booking, product, or approved attribution data",
    },
  ],
  evidence: {
    title: "What SEO evidence can you review?",
    lead: "The figures below come from screenshots supplied and approved by the project owner. They are point-in-time observations with source context, not guarantees, universal averages, or proof that one tactic caused the result.",
    ...sharedIndustryEvidence,
    slots: [
      {
        label: "Expressway.PH trend evidence",
        description:
          "Reserved for the approved organic traffic and keyword trend with period and selected metrics visible.",
      },
      {
        label: "TaxCalculator.com.ph search evidence",
        description:
          "Reserved for the approved Google Search Console capture with period, clicks, and impressions visible.",
      },
    ],
  },
  fitTitle: "Is TheProjectSEO the right SEO agency?",
  fitLead:
    "Fit is strongest when the business wants a measurable search system and can provide the implementation, expertise, and operational truth required to build one.",
  goodFit: [
    "You have a credible product, service, location, marketplace, publisher, or ecommerce offer",
    "Website, engineering, content, product, subject, and sales owners can collaborate",
    "Important facts, evidence, claims, and customer outcomes can be reviewed",
    "The organization can implement prioritized changes and maintain successful pages",
    "You want Google, Bing, and AI-search visibility tied to business value",
  ],
  notFit: [
    "You need guaranteed rankings, citations, traffic, leads, sales, or revenue by a fixed date",
    "The plan depends on spam links, fake locations, copied content, or invented evidence",
    "No one can change the website, templates, content, profiles, or measurement setup",
    "The product or service claims cannot be verified by an accountable owner",
    "Success is defined only as publishing volume or a proprietary score",
  ],
  sources: [
    {
      label: "Google Search Essentials",
      url: "https://developers.google.com/search/docs/essentials",
      description:
        "Google’s primary technical requirements, spam policies, and key best practices.",
    },
    {
      label: "Google SEO Starter Guide",
      url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      description:
        "Primary guidance for crawlable, understandable, useful search experiences.",
    },
    {
      label: "Microsoft Bing Webmaster Guidelines",
      url: "https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a",
      description:
        "Primary guidance for eligible and discoverable content in Bing.",
    },
    {
      label: "Google: AI features and your website",
      url: "https://developers.google.com/search/docs/appearance/ai-features",
      description:
        "Google guidance for its AI search experiences and site-owner controls.",
    },
  ],
  faqTitle: "Questions to ask before hiring an SEO agency",
  faqs: [
    {
      question: "What does an SEO agency do?",
      answer:
        "An SEO agency improves the technical, page, content, internal-link, entity, authority, and measurement systems that help the right audience discover and evaluate a business in organic search. A modern engagement also monitors relevant AI-generated answers and connects visibility to commercial outcomes.",
    },
    {
      question: "What is included in your SEO services?",
      answer:
        "The scope can include technical auditing and implementation, search and customer research, information architecture, content briefs and production, on-page optimization, structured data, internal links, digital authority, local or international needs, AI-search work, analytics, and CRM or commerce reporting. Priorities depend on evidence rather than a fixed package checklist.",
    },
    {
      question: "How is SEO different from AI search optimization?",
      answer:
        "SEO is the broader foundation for earning search visibility through accessible pages, relevance, quality, authority, and user value. AI search optimization adds prompt and source analysis, explicit answer and entity work, third-party corroboration, citation and accuracy monitoring, and platform-specific measurement. The two disciplines overlap and should be coordinated.",
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer:
        "No. Search engines and AI systems control their results, competitors change, and outcomes depend on the site, market, authority, implementation, and time. We provide evidence, prioritize controllable work, validate releases, and report observable outcomes; we do not guarantee a position, citation, lead volume, or return.",
    },
    {
      question: "How long does SEO take?",
      answer:
        "Technical fixes can be shipped and validated quickly, while crawling, reprocessing, authority, content discovery, customer response, and long sales cycles take longer. The timeline depends on site condition, competition, implementation capacity, existing demand and authority, and scope. We set page-cohort milestones instead of using a universal promise.",
    },
    {
      question: "Can you work with our developers and internal content team?",
      answer:
        "Yes. We can provide developer tickets, acceptance criteria, design and template requirements, content briefs, source and review standards, QA, training, and decision support. Responsibility is agreed clearly so recommendations do not stall between teams.",
    },
    {
      question: "How do you measure SEO ROI?",
      answer:
        "We connect query and landing-page cohorts to meaningful actions such as qualified forms, calls, bookings, trials, applications, accepted leads, opportunities, orders, pipeline, or revenue where approved. We also report implementation, technical health, visibility, and AI-answer observations separately and document attribution limitations.",
    },
    {
      question: "How much do your SEO services cost?",
      answer:
        "Ongoing TheProjectSEO engagements currently start from $3,500 per month. Scope depends on site and template complexity, markets, content and implementation responsibility, technical debt, authority needs, local or international coverage, AI-search monitoring, and measurement integration.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/technical-seo",
      label: "Technical SEO",
      description:
        "Crawling, rendering, indexation, templates, migrations, performance, and release QA.",
    },
    {
      href: "/services/content",
      label: "SEO content services",
      description:
        "Demand research, briefs, expert review, production, refreshes, and governance.",
    },
    {
      href: "/services/ai-search",
      label: "AI search optimization",
      description:
        "Prompts, sources, entities, citations, answer accuracy, and platform monitoring.",
    },
    {
      href: '/industries/ai',
      label: 'SEO for artificial intelligence companies',
      description: 'Build category education, technical proof, entity clarity, and qualified AI-software demand.',
    },
    {
      href: '/industries/automotive',
      label: 'Automotive SEO services',
      description: 'Connect vehicle, ownership, route, marketplace, publishing, and local search journeys.',
    },
    {
      href: '/industries/cannabis',
      label: 'Dispensary SEO agency',
      description: 'Coordinate compliant discovery, product education, local eligibility, and policy-aware authority.',
    },
    {
      href: '/industries/cybersecurity',
      label: 'MSSP SEO agency',
      description: 'Translate technical expertise, trust, use cases, and buying-stage evidence into search demand.',
    },
    {
      href: '/industries/ecommerce',
      label: 'SEO for online stores',
      description: 'Improve category, product, catalog, merchandising, platform, and shopper discovery systems.',
    },
    {
      href: '/industries/education',
      label: 'Higher education SEO agency',
      description: 'Support program discovery, admissions research, student questions, and institutional trust.',
    },
    {
      href: '/industries/fashion',
      label: 'Fashion SEO services',
      description: 'Align collection, product, trend, brand, editorial, and visual-shopping discovery.',
    },
    {
      href: '/industries/finance',
      label: 'Finance SEO services',
      description: 'Build accurate, reviewed, evidence-led search journeys for high-trust financial decisions.',
    },
    {
      href: '/industries/food',
      label: 'Food AI search optimization',
      description: 'Connect products, recipes, menus, locations, distributors, and consumer questions.',
    },
    {
      href: '/industries/healthcare',
      label: 'Healthcare SEO services',
      description: 'Coordinate medically reviewed content, service discovery, local journeys, and patient trust.',
    },
    {
      href: '/industries/legal',
      label: 'Legal SEO services',
      description: 'Support practice-area, jurisdiction, local, informational, and consultation search journeys.',
    },
    {
      href: '/industries/nonprofit',
      label: 'Charity SEO agency',
      description: 'Improve mission, program, donation, volunteer, beneficiary, and grant-related discovery.',
    },
    {
      href: '/industries/realestate',
      label: 'Property SEO agency',
      description: 'Connect property, location, service, agent, developer, and high-intent local demand.',
    },
    {
      href: '/industries/saas',
      label: 'SaaS SEO services',
      description: 'Build problem, solution, comparison, integration, use-case, and product-led search systems.',
    },
    {
      href: '/industries/technology',
      label: 'SEO for technology companies',
      description: 'Turn complex products, services, documentation, expertise, and proof into qualified demand.',
    },
    {
      href: '/industries/travel',
      label: 'Travel AI search optimization',
      description: 'Coordinate destination, route, property, itinerary, booking, and seasonal discovery.',
    },
    {
      href: '/resources/glossary/seo',
      label: 'How SEO works',
      description: 'Use the practical definition of SEO, its operating layers, and its measurement boundaries.',
    },
    {
      href: '/blog/google-algorithm-updates-2024',
      label: 'Google core update recovery',
      description: 'Understand how to investigate ranking movement without reducing every change to one update.',
    },
    {
      href: '/pricing',
      label: 'SEO pricing',
      description: 'Starting investment, scope variables, engagement models, and fit.',
    },
  ],
  ctaEyebrow: "Build qualified search demand",
  ctaTitle:
    "Find the technical, content, authority, and measurement gaps holding search back.",
  ctaLead:
    "Share your website, products or services, audiences, markets, technical stack, and useful business stages. We will identify the highest-priority SEO and AI-search work.",
  ctaBenefits: [
    "Technical, content, entity, authority, and search-demand assessment",
    "Commercial page and opportunity priorities",
    "Measurement plan with clear attribution boundaries",
  ],
};

const technicalSeo: IndustryLeadPageData = {
  slug: "technical-seo",
  path: "/services/technical-seo",
  parentBreadcrumb: { name: "Services", href: "/services" },
  name: "Technical SEO",
  schemaName:
    "Technical SEO audit, implementation, migration, and monitoring services",
  serviceType:
    "Technical SEO services for crawling, rendering, indexation, site architecture, migrations, Core Web Vitals, structured data, and monitoring",
  schemaAudience:
    "Organizations with complex websites, ecommerce catalogs, JavaScript applications, migrations, international sites, publishers, and enterprise platforms",
  metaTitle: "Technical SEO Agency for Audits & Implementation",
  metaDescription:
    "Technical SEO services for crawling, rendering, indexing, migrations, Core Web Vitals, ecommerce, international sites and developer-ready implementation.",
  eyebrow: "Technical SEO agency · Audit + implementation + monitoring",
  title: "Make every valuable page",
  titleAccent: "crawlable, renderable, and durable.",
  directAnswer:
    "TheProjectSEO identifies and resolves the technical conditions that prevent valuable pages from being discovered, rendered, indexed, consolidated, understood, or preserved through change. Technical SEO services cover crawl and index control, JavaScript rendering, internal architecture, templates, faceted navigation, sitemaps, canonicals, redirects, structured data, Core Web Vitals, international signals, migrations, log evidence, release QA, and monitoring. Recommendations are prioritized for implementation—not measured by the length of an audit.",
  primaryCta: "Request a technical SEO assessment",
  bestFit:
    "Teams with material organic-search exposure, access to developers and platform owners, and technical complexity such as large templates, JavaScript, ecommerce, migrations, internationalization, or multiple domains.",
  heroChecks: [
    "Crawling, rendering, indexation, canonicals, sitemaps, redirects, and internal links",
    "JavaScript, headless, ecommerce facets, international, publishers, marketplaces, and enterprise sites",
    "Migration and redesign planning, pre-launch QA, launch monitoring, and recovery",
    "Developer tickets with evidence, affected scope, acceptance criteria, and validation",
  ],
  journeyTitle: "Where does technical SEO affect the search journey?",
  journeyLead:
    "A relevant page cannot compete if systems fail before or after ranking. Search engines must discover the URL, fetch allowed resources, render meaningful content, select the right canonical, index and process it, understand its relationships, and keep that state stable through releases.",
  searchJourneys: [
    {
      stage: "Discover",
      intent: "Can crawlers reach the page efficiently?",
      explanation:
        "Internal links, sitemaps, robots controls, status codes, parameters, pagination, orphaning, and crawl demand determine what is found and revisited.",
      examples: ["orphan product categories", "faceted navigation crawl traps"],
      conversion:
        "crawler evidence, log investigation, and prioritized discovery fixes",
    },
    {
      stage: "Render",
      intent: "Does the fetched response expose useful content?",
      explanation:
        "Server output, JavaScript, hydration, lazy loading, blocked resources, errors, timeouts, and user-agent differences can change what systems see.",
      examples: [
        "React pages not indexed",
        "product links only available after interaction",
      ],
      conversion:
        "render comparison, template requirements, and engineering ticket",
    },
    {
      stage: "Index",
      intent: "Is the correct URL selected and retained?",
      explanation:
        "Canonicals, duplicates, thin states, redirects, status, language and regional signals, quality, and content consistency affect index selection.",
      examples: [
        "duplicate locale pages",
        "canonical chosen differently by Google",
      ],
      conversion:
        "URL-state model, canonical and consolidation fix, and validation",
    },
    {
      stage: "Perform",
      intent: "Can the page remain useful and stable?",
      explanation:
        "Internal architecture, structured visible facts, page experience, mobile usability, Core Web Vitals, and release regressions affect discovery and conversion.",
      examples: [
        "LCP regression after redesign",
        "structured data no longer matches product page",
      ],
      conversion:
        "release safeguard, monitoring rule, and measurable page improvement",
    },
  ],
  obstaclesTitle: "Why do technical SEO audits fail to produce results?",
  obstaclesLead:
    "Tools find symptoms. Implementation requires proving the mechanism, quantifying the affected templates and commercial pages, designing a safe solution, and validating the release.",
  obstacles: [
    {
      title: "Every crawler warning becomes a priority",
      problem:
        "A site can have thousands of technically imperfect URLs while a small number of template, rendering, canonical, or internal-link defects cause most of the commercial risk.",
      response:
        "We reproduce findings, segment by URL and template, compare with search and business data, estimate affected value, identify the owner and dependency, and score priority.",
    },
    {
      title: "Recommendations do not match the platform",
      problem:
        "A generic instruction such as “add schema,” “improve speed,” or “fix canonicals” does not tell developers which component, state, field, route, or test must change.",
      response:
        "Tickets document the evidence, current and expected behavior, affected patterns, examples, edge cases, acceptance criteria, instrumentation, and rollback or monitoring needs.",
    },
    {
      title: "Migration SEO starts after launch",
      problem:
        "URL inventories, redirect logic, content parity, robots, canonicals, analytics, sitemaps, hreflang, navigation, and performance may already be lost by the time traffic drops.",
      response:
        "We join discovery and design early, define preservation requirements, test staging safely, crawl release candidates, validate redirects and signals, and monitor launch cohorts.",
    },
    {
      title: "The fix ships once and regresses",
      problem:
        "Themes, applications, feeds, CMS rules, experiments, localization, releases, and content workflows can reintroduce the same defect.",
      response:
        "High-risk conditions become automated checks, release criteria, alerts, dashboards, regression samples, or operating rules owned by the appropriate team.",
    },
  ],
  deliverablesTitle: "What is included in technical SEO services?",
  deliverablesLead:
    "The scope follows the platform and risk. A useful engagement combines diagnostics, specifications, implementation support, validation, and monitoring.",
  deliverables: [
    {
      title: "Crawl and index diagnostics",
      description:
        "Evidence-led analysis of discovery, access, URL states, index selection, and consolidation across valuable page cohorts.",
      items: [
        "Status codes, robots, sitemaps, canonicals, redirects, pagination, and parameters",
        "Orphans, depth, internal-link distribution, duplicates, and indexable thin states",
        "Search Console index reports and URL inspection samples",
        "Server log analysis where available and useful",
      ],
    },
    {
      title: "Rendering and application SEO",
      description:
        "Comparison of server responses, rendered DOM, user experience, crawler access, and route behavior for JavaScript and headless systems.",
      items: [
        "SSR, SSG, ISR, hydration, client-only content, and navigation",
        "Lazy-loaded content, links, images, errors, resources, and user-agent differences",
        "App shell, soft 404, status, metadata, and canonical behavior",
        "Framework- and component-level requirements with reproducible examples",
      ],
    },
    {
      title: "Template and architecture review",
      description:
        "Technical ownership and link design across product, category, service, location, article, profile, search, and filter templates.",
      items: [
        "Information hierarchy and internal-link paths",
        "Faceted navigation, sort, filter, search, map, and no-result controls",
        "Product or listing lifecycle and archive behavior",
        "Duplicate and cannibalization risks across generated templates",
      ],
    },
    {
      title: "Performance and structured data",
      description:
        "Page-experience and machine-readable fact improvements tied to real templates and visible content.",
      items: [
        "Core Web Vitals field and lab evidence by template",
        "LCP, INP, CLS, media, script, font, and rendering-path diagnosis",
        "Structured-data eligibility, accuracy, graph relationships, and validation",
        "Priorities aligned with user and commercial impact",
      ],
    },
    {
      title: "Migration and international safeguards",
      description:
        "Requirements and QA for redesigns, replatforming, domain or URL changes, mergers, language and region systems, and site consolidation.",
      items: [
        "URL and content inventory, parity, mapping, redirects, and signal preservation",
        "Hreflang, locale, country, canonical, and navigation relationships",
        "Staging, pre-launch, launch-day, and post-launch crawl checklists",
        "Traffic, indexation, status, redirect, and template cohort monitoring",
      ],
    },
    {
      title: "Engineering enablement and monitoring",
      description:
        "Implementation support that turns recommendations into safe releases and prevents recurrence.",
      items: [
        "Tickets, diagrams, examples, edge cases, and acceptance criteria",
        "Sprint support, design and PR review where agreed",
        "Automated crawls, Search Console checks, alerts, and release annotations",
        "Training, ownership matrix, runbooks, and incident response rules",
      ],
    },
  ],
  aiVisibility: {
    title: "Does technical SEO affect AI-search visibility?",
    lead: "Yes, when an AI experience relies on web search, retrieval, crawling, or accessible page content. Technical SEO cannot guarantee citation, but blocked resources, client-only facts, weak internal links, duplicate ownership, and stale or inaccessible sources can reduce eligibility and clarity.",
    platforms: [
      "Google Search",
      "Google AI Overviews",
      "Google AI Mode",
      "Bing",
      "ChatGPT search",
      "Gemini",
      "Claude",
      "Perplexity",
    ],
    boundary:
      "Crawler access and indexation do not prove that a platform will retrieve, cite, or recommend a page. Different systems and product modes use different sources. We validate what can be observed and avoid inventing a universal LLM crawl or ranking rule.",
    workstreams: [
      {
        title: "Crawler controls",
        description:
          "Review robots directives, bot-specific controls, preview settings, status, canonicals, sitemaps, and accessible page resources against business policy.",
        output: "crawler-control matrix, conflict log, and recommended rules",
      },
      {
        title: "Extractable content",
        description:
          "Compare source and rendered output so important answers, product facts, authorship, sources, and internal links are available without fragile interaction.",
        output:
          "render samples, content-access requirements, and template tickets",
      },
      {
        title: "Canonical source ownership",
        description:
          "Reduce ambiguous duplicates and establish stable page ownership for the questions, products, services, entities, and evidence the business wants represented.",
        output: "URL-state and canonical map with consolidation actions",
      },
      {
        title: "Technical monitoring",
        description:
          "Watch priority templates, crawler access, indexation, sitemaps, performance, and critical content after releases that may affect search or AI retrieval.",
        output: "monitors, samples, alert thresholds, and regression runbook",
      },
    ],
  },
  architectureTitle: "Which technical systems should be documented?",
  architectureLead:
    "A durable technical SEO program defines expected behavior for recurring URL and template states. Documentation reduces dependence on one audit or one person.",
  architecture: [
    {
      pageType: "URL and index state",
      intent: "What should happen to each route?",
      examples:
        "indexable, canonicalized, redirected, archived, unavailable, noindex, blocked",
      signal:
        "business purpose, status, canonical, internal links, sitemap, and lifecycle rule",
    },
    {
      pageType: "Rendering contract",
      intent: "What must appear without fragile client behavior?",
      examples:
        "metadata, headings, content, links, product facts, status, error state",
      signal:
        "server and rendered expectations, resources, timeout, fallback, and test",
    },
    {
      pageType: "Template and facet rules",
      intent: "Which generated states deserve search ownership?",
      examples:
        "category, product, filter, sort, search, map, profile, tag, pagination",
      signal:
        "demand, uniqueness, inventory, crawl path, canonical, and no-result behavior",
    },
    {
      pageType: "International relationships",
      intent: "Which audience does each version serve?",
      examples:
        "language, region, currency, country, global, translated, localized",
      signal:
        "URL, locale, hreflang, canonical, navigation, content, and fallback rules",
    },
    {
      pageType: "Release and incident controls",
      intent: "How do we prevent and respond to regressions?",
      examples:
        "pre-launch tests, alerts, migration checks, rollback, traffic incident",
      signal:
        "owner, threshold, evidence, escalation, acceptance, and recovery procedure",
    },
  ],
  processTitle: "How does a technical SEO engagement work?",
  processLead:
    "The work moves from reproduction to prioritization, specification, implementation, and monitoring. Large sites are sampled and segmented so conclusions can be tested rather than assumed.",
  process: [
    {
      number: "01",
      cadence: "Week 1",
      title: "System and risk discovery",
      description:
        "Map platforms, domains, templates, rendering, releases, infrastructure, teams, migrations, international behavior, feeds, search exposure, and constraints.",
      output:
        "system diagram, access plan, template inventory, and risk register",
    },
    {
      number: "02",
      cadence: "Weeks 1–2",
      title: "Evidence collection",
      description:
        "Crawl representative states, compare source and rendered HTML, inspect Search Console and logs where useful, test page experience, and review recent changes.",
      output:
        "reproducible findings, affected cohorts, evidence files, and data limitations",
    },
    {
      number: "03",
      cadence: "Weeks 2–3",
      title: "Root cause and priority",
      description:
        "Distinguish symptoms from causes and score work by commercial exposure, affected templates, confidence, risk, effort, dependency, and reversibility.",
      output:
        "prioritized backlog, decision rationale, and implementation sequence",
    },
    {
      number: "04",
      cadence: "Weeks 2–5",
      title: "Developer specifications",
      description:
        "Translate priorities into expected states, examples, edge cases, technical options, acceptance criteria, instrumentation, and rollout guidance.",
      output:
        "developer tickets, diagrams, test cases, and stakeholder walkthrough",
    },
    {
      number: "05",
      cadence: "By sprint / launch",
      title: "Implementation and validation",
      description:
        "Support delivery, test staging safely, validate production across representative states, compare expected and actual outcomes, and record exceptions.",
      output:
        "QA results, resolved defects, exceptions, and release annotations",
    },
    {
      number: "06",
      cadence: "Ongoing",
      title: "Monitoring and enablement",
      description:
        "Automate high-risk checks, review trend and index evidence, train owners, maintain runbooks, and respond to material changes and incidents.",
      output:
        "monitors, alerts, runbooks, training, and quarterly technical roadmap",
    },
  ],
  measurementTitle: "How should technical SEO impact be measured?",
  measurementLead:
    "Technical work should be evaluated at the affected URL and template cohort. A sitewide average can hide both a successful fix and a serious regression.",
  measurementBoundary:
    "Crawling, indexing, ranking, traffic, and conversion occur at different stages and speeds. A released fix does not guarantee a ranking change, and simultaneous content, authority, algorithm, season, and market changes affect outcomes.",
  measurement: [
    {
      name: "Implementation",
      definition:
        "Priority tickets accepted, shipped, and validated against stated acceptance criteria across representative edge cases.",
      source:
        "project tracker, release records, test evidence, and production QA",
    },
    {
      name: "Crawl and index state",
      definition:
        "Discovery, fetch, status, canonical selection, valuable indexed pages, excluded states, crawl demand, and sitemap consistency.",
      source: "crawler, logs where available, Search Console, and URL samples",
    },
    {
      name: "Rendering and performance",
      definition:
        "Critical content and links present, render failures resolved, and Core Web Vitals or user-impact metrics improved by template cohort.",
      source:
        "render tests, browser monitoring, CrUX or field data, and lab diagnostics",
    },
    {
      name: "Search visibility cohort",
      definition:
        "Impressions, clicks, queries, and landing-page changes for the exact templates or routes affected by the release.",
      source:
        "Google Search Console, Bing Webmaster Tools, and annotated cohorts",
    },
    {
      name: "Commercial protection or growth",
      definition:
        "Preserved or improved qualified actions and revenue exposure associated with priority templates, especially through migrations.",
      source: "approved analytics, commerce, booking, product, or CRM data",
    },
  ],
  evidence: {
    title: "What technical SEO evidence can you review?",
    lead: "Current public results show the scale of search and AI visibility on owner-approved projects. They do not isolate technical SEO as the sole cause. Technical case evidence will be added only with an approved before state, release, period, and method.",
    ...sharedIndustryEvidence,
    slots: [
      {
        label: "Technical before-and-after",
        description:
          "Reserved for an approved crawl, render, index, or Core Web Vitals cohort with release context.",
      },
      {
        label: "Migration or release validation",
        description:
          "Reserved for an approved URL sample, redirect or template result, date, and acceptance criteria.",
      },
    ],
  },
  fitTitle: "Is TheProjectSEO the right technical SEO agency?",
  fitLead:
    "Fit is strongest when the organization wants findings translated into production behavior and gives technical owners time to act.",
  goodFit: [
    "Your organic exposure depends on complex templates, JavaScript, ecommerce, publishing, international, marketplace, or enterprise systems",
    "Developers, platform owners, analysts, and product stakeholders can participate",
    "The team can provide staging, crawl, Search Console, analytics, or log access where appropriate",
    "You need migration, redesign, implementation, release QA, monitoring, or incident support",
    "Priorities can be evaluated against real search and business value",
  ],
  notFit: [
    "You need guaranteed indexation, rankings, traffic recovery, or migration results",
    "No developer or platform owner can implement a change",
    "The request is only for a generic tool export or cosmetic site-health score",
    "Production and staging behavior cannot be tested safely or ethically",
    "The organization will not distinguish a crawler warning from a proven business issue",
  ],
  sources: [
    {
      label: "Google: crawling and indexing",
      url: "https://developers.google.com/search/docs/crawling-indexing/overview",
      description:
        "Primary overview of Google discovery, crawling, rendering, and indexing.",
    },
    {
      label: "Google: JavaScript SEO basics",
      url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
      description:
        "Primary guidance for JavaScript rendering, links, status, and content.",
    },
    {
      label: "Google: site moves with URL changes",
      url: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
      description: "Primary migration guidance for URL changes and monitoring.",
    },
    {
      label: "web.dev: Core Web Vitals",
      url: "https://web.dev/articles/vitals",
      description:
        "Primary definitions and measurement guidance for Core Web Vitals.",
    },
  ],
  faqTitle: "Questions to ask before hiring a technical SEO agency",
  faqs: [
    {
      question: "What does a technical SEO agency do?",
      answer:
        "A technical SEO agency diagnoses and improves how search systems discover, fetch, render, index, consolidate, understand, and revisit valuable pages. Work can include crawling, JavaScript, canonicals, redirects, sitemaps, internal links, facets, structured data, page experience, international signals, migrations, developer specifications, QA, and monitoring.",
    },
    {
      question: "What is included in a technical SEO audit?",
      answer:
        "The scope depends on the platform, but a useful audit identifies reproducible issues, affected URL and template cohorts, root causes, search and business impact, evidence, priority, owner, dependencies, recommended behavior, edge cases, acceptance criteria, and validation steps. A crawler export alone is not a complete audit.",
    },
    {
      question: "Can you implement technical SEO fixes?",
      answer:
        "We can implement or support implementation when access, platform, and scope allow, and we can work directly with internal or external developers. At minimum, recommendations are translated into developer-ready requirements and validated after release. Responsibility and change control are agreed before work begins.",
    },
    {
      question: "Do you work with JavaScript and headless websites?",
      answer:
        "Yes. We compare server responses and rendered output; inspect routing, status, metadata, links, hydration, lazy loading, errors, and resources; and design requirements for SSR, SSG, ISR, or hybrid systems based on the actual framework and user experience. Dynamic rendering is not treated as a universal default.",
    },
    {
      question: "Can you help with a website migration or redesign?",
      answer:
        "Yes. We can support discovery, preservation requirements, URL and content inventory, redirect design, staging QA, internal links, sitemaps, canonicals, hreflang, structured data, analytics, performance, launch checks, and post-launch monitoring. Early involvement reduces avoidable risk but does not guarantee unchanged traffic.",
    },
    {
      question: "How do you prioritize technical SEO issues?",
      answer:
        "We consider evidence and confidence, affected templates and valuable pages, search and commercial exposure, severity, recurrence, user impact, implementation effort, dependencies, risk, reversibility, and whether the proposed fix can be validated. Tool severity labels are inputs, not the final priority.",
    },
    {
      question: "How long does technical SEO take?",
      answer:
        "Diagnostics can begin immediately, but timing depends on site size, access, platform complexity, evidence availability, sprint capacity, release process, and search-engine reprocessing. We provide milestone and cohort expectations rather than guarantee indexation, rankings, or recovery by a fixed date.",
    },
    {
      question: "What does technical SEO cost?",
      answer:
        "Ongoing TheProjectSEO engagements currently start from $3,500 per month. Project scope depends on domains, page and template count, JavaScript and platform complexity, international or ecommerce systems, migration risk, log and data analysis, implementation ownership, QA, and monitoring.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/seo-audit",
      label: "SEO audit services",
      description:
        "A broader technical, content, authority, competitor, and measurement diagnostic.",
    },
    {
      href: "/services/ecommerce-seo",
      label: "Ecommerce SEO",
      description:
        "Catalogs, facets, product lifecycle, feeds, migrations, and revenue cohorts.",
    },
    {
      href: "/services/enterprise-seo",
      label: "Enterprise SEO",
      description:
        "Governance, automation, cross-team implementation, and large-scale monitoring.",
    },
    {
      href: "/services/ai-search",
      label: "AI search optimization",
      description:
        "Crawler controls, retrievable answers, canonical sources, and AI visibility.",
    },
    {
      href: "/resources/glossary/core-web-vitals",
      label: "What is Core Web Vitals?",
      description:
        "Review the field metrics, thresholds, measurement sources, and practical SEO boundaries.",
    },
    {
      href: '/resources/glossary/core-web-vitals',
      label: 'Core Web Vitals meaning',
      description: 'Review the field metrics, thresholds, measurement sources, and practical SEO boundaries.',
    },
  ],
  ctaEyebrow: "Resolve technical search risk",
  ctaTitle:
    "Turn crawler warnings and search symptoms into implementable technical decisions.",
  ctaLead:
    "Share your platform, templates, current issue, release process, Search Console access, and any upcoming migration. We will define the evidence and highest-priority technical work.",
  ctaBenefits: [
    "Crawl, render, index, template, performance, and migration assessment",
    "Developer-ready priorities with acceptance criteria",
    "Validation and monitoring plan for critical releases",
  ],
};

const seoAudit: IndustryLeadPageData = {
  slug: "seo-audit",
  path: "/services/seo-audit",
  parentBreadcrumb: { name: "Services", href: "/services" },
  name: "SEO audit",
  schemaName: "Comprehensive SEO audit services",
  serviceType:
    "Comprehensive SEO audit services across technical SEO, content, on-page optimization, authority, competitors, analytics, conversions, and AI search",
  schemaAudience:
    "Organizations that need an evidence-backed SEO diagnosis, prioritized implementation roadmap, migration review, traffic-drop analysis, or independent second opinion",
  metaTitle: "Comprehensive SEO Audit Services & Roadmap",
  metaDescription:
    "An evidence-led SEO audit covering technical, content, authority, analytics, competitors and AI search—with priorities, developer tickets and an implementation roadmap.",
  eyebrow: "SEO audit services · Diagnosis + roadmap + handoff",
  title: "Find what is holding search back.",
  titleAccent: "Know what to fix first.",
  directAnswer:
    "A TheProjectSEO audit is an evidence-backed diagnosis of the technical, content, page, authority, competitor, analytics, conversion, and AI-search conditions affecting qualified organic visibility. The deliverable is not a generic site-health export. Each material finding states what was observed, how it was tested, which pages or templates are affected, why it matters, how confident we are, what should change, who needs to act, and how the fix will be validated.",
  primaryCta: "Scope an SEO audit",
  bestFit:
    "Teams facing stalled growth, a traffic decline, migration or redesign risk, an unclear backlog, conflicting agency advice, or a need for an independent search roadmap before implementation.",
  heroChecks: [
    "Technical, content, on-page, internal-link, authority, competitor, analytics, and AI-search review",
    "Findings grouped by root cause, affected cohort, business exposure, confidence, and effort",
    "Executive narrative plus supporting evidence, page lists, developer tickets, and decision log",
    "Walkthrough, stakeholder handoff, validation plan, and optional implementation support",
  ],
  journeyTitle: "What business questions should an SEO audit answer?",
  journeyLead:
    "A comprehensive audit starts with the decision the organization needs to make. “Find every SEO issue” is not a useful boundary; the audit should explain current performance, material constraints, priority opportunities, and the safest route to improvement.",
  searchJourneys: [
    {
      stage: "Diagnose",
      intent: "Why is visibility or traffic underperforming?",
      explanation:
        "The team needs to separate technical access, page relevance, quality, cannibalization, authority, demand, algorithm, season, tracking, and conversion causes.",
      examples: [
        "organic traffic dropped after redesign",
        "valuable pages not indexed",
      ],
      conversion: "validated root-cause hypotheses and evidence requirements",
    },
    {
      stage: "Prioritize",
      intent: "Which fixes or opportunities matter most?",
      explanation:
        "Stakeholders need to compare many possible technical, content, page, link, and measurement actions against value, confidence, effort, dependency, and risk.",
      examples: ["SEO backlog prioritization", "content refresh vs new pages"],
      conversion: "sequenced roadmap, owner, timing, and acceptance criteria",
    },
    {
      stage: "Protect",
      intent: "How do we reduce migration or release risk?",
      explanation:
        "A redesign, replatform, domain change, information-architecture change, merger, or international expansion may alter URLs and signals that already create value.",
      examples: ["pre-migration SEO audit", "Shopify redesign SEO checklist"],
      conversion:
        "preservation requirements, pre-launch tests, and monitoring plan",
    },
    {
      stage: "Validate",
      intent: "Is current strategy and reporting credible?",
      explanation:
        "Leaders may need a second opinion on agency work, content plans, attribution, link risk, AI-search claims, or whether a reported win connects to business outcomes.",
      examples: [
        "independent SEO audit for board review",
        "validate AI SEO agency reporting",
      ],
      conversion:
        "independent findings, data limitations, decision options, and governance",
    },
  ],
  obstaclesTitle: "Why are many SEO audits not implemented?",
  obstaclesLead:
    "The audit fails when it optimizes for issue count or presentation volume instead of evidence, decisions, ownership, and a feasible route to production.",
  obstacles: [
    {
      title: "The report repeats tool warnings",
      problem:
        "Automated crawlers can flag missing fields and unusual states without proving that they affect valuable pages, search behavior, users, or business outcomes.",
      response:
        "We reproduce the issue, segment affected URLs and templates, inspect source systems and search evidence, estimate exposure, and record confidence and exceptions.",
    },
    {
      title: "Symptoms are listed without root causes",
      problem:
        "Thousands of duplicate titles, canonical conflicts, thin pages, or broken links may result from one template, feed, CMS, or lifecycle rule.",
      response:
        "Findings are grouped into causes and systems. The roadmap prioritizes the change that resolves the recurring pattern, with examples and safeguards for edge cases.",
    },
    {
      title: "Everything is marked urgent",
      problem:
        "A flat list makes it impossible to balance commercial value, user risk, search exposure, implementation effort, team dependency, and confidence.",
      response:
        "Each recommendation is scored and sequenced. Critical protection, high-confidence growth, enabling work, tests, monitoring, and low-value hygiene are distinguished.",
    },
    {
      title: "The handoff ends with a presentation",
      problem:
        "Teams leave the walkthrough understanding the issue but without developer tickets, page lists, owners, acceptance criteria, a release order, or a way to validate impact.",
      response:
        "The deliverable includes an implementation backlog, affected cohorts, specifications, stakeholder actions, validation plan, and an agreed decision and follow-up session.",
    },
  ],
  deliverablesTitle: "What does a comprehensive SEO audit include?",
  deliverablesLead:
    "Modules are selected for the site and business question. The audit connects them so technical, content, authority, and measurement findings do not contradict one another.",
  deliverables: [
    {
      title: "Technical SEO audit",
      description:
        "Discovery, crawling, rendering, index selection, consolidation, templates, internal architecture, performance, and change risk.",
      items: [
        "Status, robots, sitemaps, canonicals, redirects, pagination, and parameters",
        "JavaScript rendering, source-versus-DOM evidence, and resource access",
        "Facets, generated pages, duplicates, orphans, lifecycle, and internal links",
        "Core Web Vitals, structured data, international, and migration risks",
      ],
    },
    {
      title: "Content and page audit",
      description:
        "How well existing pages satisfy distinct search jobs, demonstrate expertise and evidence, remain current, and lead to useful action.",
      items: [
        "Query and page ownership, cannibalization, gaps, and overlaps",
        "Service, product, category, location, comparison, educational, and trust templates",
        "Quality, originality, sourcing, authorship, claims, dates, and maintenance",
        "Keep, improve, merge, redirect, archive, delete, and create decisions",
      ],
    },
    {
      title: "Authority and entity audit",
      description:
        "The independent signals and consistent facts that help search systems and customers verify the organization and its claims.",
      items: [
        "Link, mention, anchor, referring-domain, lost-link, and competitor patterns",
        "Risk and manipulation review without pretending every weak link is toxic",
        "Organization, people, products, services, locations, and profile consistency",
        "Evidence assets, digital PR, partner, local, and publication opportunities",
      ],
    },
    {
      title: "Competitor and SERP analysis",
      description:
        "What currently earns visibility for the target audience and where the business has credible, differentiated opportunity.",
      items: [
        "Page types, formats, entities, sources, features, authority, and intent patterns",
        "Direct business competitors versus organic-search competitors",
        "Market, language, location, device, and query-stage differences",
        "Opportunity gaps interpreted alongside product and operational truth",
      ],
    },
    {
      title: "Analytics and conversion audit",
      description:
        "Whether search performance and customer outcomes are captured consistently enough to make decisions.",
      items: [
        "Search Console, analytics, consent, events, forms, calls, commerce, and CRM alignment",
        "Brand and non-brand, landing-page, market, device, and page-cohort segmentation",
        "Conversion and qualification definitions, duplicates, spam, and attribution boundaries",
        "Dashboard, annotation, retention, ownership, and data-quality recommendations",
      ],
    },
    {
      title: "AI-search visibility audit",
      description:
        "A controlled review of how important questions are answered across agreed AI platforms and which sources shape the result.",
      items: [
        "Prompt taxonomy by audience, product, market, and buying stage",
        "Brand presence, prominence, citation, framing, source, and factual accuracy",
        "Technical retrieval, answer, entity, evidence, and corroboration gaps",
        "Versioned baseline and monitoring recommendations—not guaranteed inclusion",
      ],
    },
  ],
  aiVisibility: {
    title: "What should an AI-search audit examine?",
    lead: "An AI-search audit should be reproducible enough to guide work. A screenshot of one flattering ChatGPT answer is not a baseline. The prompt, platform, model or mode where known, market, date, answer, sources, competitors, and facts must be recorded.",
    platforms: [
      "Google AI Overviews",
      "Google AI Mode",
      "Bing Copilot",
      "ChatGPT",
      "Gemini",
      "Claude",
      "Perplexity",
    ],
    boundary:
      "AI outputs are probabilistic, product behavior changes, and third-party visibility tools use different prompts and scoring methods. An audit describes observed conditions and controllable source gaps; it cannot prove a universal ranking factor or guarantee a citation.",
    workstreams: [
      {
        title: "Prompt and competitor baseline",
        description:
          "Define a stable set of informational, category, comparison, provider, local, product, and branded validation prompts tied to real customer stages.",
        output:
          "prompt inventory, test conditions, answer captures, and competitor observations",
      },
      {
        title: "Citation-source analysis",
        description:
          "Map the company and third-party domains and pages repeatedly cited or used to frame important answers.",
        output:
          "source graph, cited-page patterns, gaps, and correction opportunities",
      },
      {
        title: "Entity and fact review",
        description:
          "Compare generated claims with the approved organization, person, product, service, location, price-boundary, and evidence facts.",
        output:
          "accuracy log, entity contradictions, claim owners, and priority corrections",
      },
      {
        title: "Technical and content readiness",
        description:
          "Review crawler controls, renderability, canonical ownership, direct answers, sourcing, structured visible facts, internal links, and corroboration.",
        output:
          "AI-search backlog integrated with technical, content, and authority priorities",
      },
    ],
  },
  architectureTitle: "What should the SEO audit deliverable look like?",
  architectureLead:
    "Different stakeholders need different levels of detail, but they should all trace back to the same evidence and recommendation ID.",
  architecture: [
    {
      pageType: "Executive diagnosis",
      intent: "What is happening and what decision matters?",
      examples:
        "performance narrative, major causes, risks, opportunities, and choices",
      signal:
        "plain language, evidence, materiality, uncertainty, and recommended direction",
    },
    {
      pageType: "Finding register",
      intent: "What exactly was observed?",
      examples:
        "finding ID, category, evidence, affected cohort, impact, confidence",
      signal:
        "reproducible test, examples, scope, exceptions, and source files",
    },
    {
      pageType: "Implementation backlog",
      intent: "What must each team do?",
      examples:
        "owner, recommendation, priority, dependency, effort, acceptance, validation",
      signal:
        "specific expected behavior, affected patterns, edge cases, and release order",
    },
    {
      pageType: "Page and URL decisions",
      intent: "Which assets should change?",
      examples:
        "keep, improve, create, merge, redirect, archive, delete, or monitor",
      signal:
        "URL list, intent owner, evidence, destination, content requirement, and risk",
    },
    {
      pageType: "Measurement and follow-up",
      intent: "How will we know the work shipped and mattered?",
      examples:
        "baseline, cohort, event, search metric, commercial stage, checkpoint",
      signal:
        "source, definition, owner, cadence, limitation, and next decision",
    },
  ],
  processTitle: "How is an SEO audit conducted?",
  processLead:
    "The sequence protects against premature tool output. We first define the business question and systems, then collect and triangulate evidence before building the roadmap.",
  process: [
    {
      number: "01",
      cadence: "Days 1–3",
      title: "Scope and decision discovery",
      description:
        "Agree on sites, markets, products, audiences, business questions, recent changes, constraints, stakeholders, data sources, outcomes, and excluded work.",
      output:
        "audit charter, access list, stakeholder plan, assumptions, and success criteria",
    },
    {
      number: "02",
      cadence: "Week 1",
      title: "Data and system baseline",
      description:
        "Collect crawl, rendering, index, search, analytics, content, link, competitor, platform, release, and conversion evidence with date ranges and definitions.",
      output:
        "evidence inventory, baseline views, data-quality issues, and sampling plan",
    },
    {
      number: "03",
      cadence: "Weeks 1–2",
      title: "Investigation and reproduction",
      description:
        "Test hypotheses across representative URLs, templates, queries, markets, devices, and customer stages; distinguish correlation, symptom, and likely cause.",
      output:
        "finding register with evidence, affected cohorts, confidence, and exceptions",
    },
    {
      number: "04",
      cadence: "Weeks 2–3",
      title: "Prioritization and solution design",
      description:
        "Score findings by value, exposure, confidence, risk, effort, dependency, recurrence, and reversibility; design feasible target states with owners.",
      output:
        "sequenced roadmap, developer tickets, page decisions, and decision options",
    },
    {
      number: "05",
      cadence: "Week 3",
      title: "Stakeholder walkthrough",
      description:
        "Present the diagnosis at the right level for leadership, marketing, content, product, engineering, analytics, and agency partners; resolve questions and ownership.",
      output:
        "executive deck, working session, updated decisions, and assigned backlog",
    },
    {
      number: "06",
      cadence: "30–90 day checkpoints",
      title: "Validation and iteration",
      description:
        "Review what shipped, validate acceptance criteria, compare affected cohorts with the baseline, record external changes, and adjust the roadmap.",
      output:
        "implementation review, validation results, exceptions, and next decisions",
    },
  ],
  measurementTitle: "How do you know an SEO audit was useful?",
  measurementLead:
    "The immediate success of an audit is decision quality and implementation readiness. Search and commercial outcomes are evaluated later against the cohorts affected by shipped changes.",
  measurementBoundary:
    "An audit itself does not change the website. Outcome timing depends on implementation, release quality, crawling and reprocessing, demand, competition, authority, algorithms, content, seasonality, and attribution. We distinguish recommendation, shipment, technical validation, visibility, and business impact.",
  measurement: [
    {
      name: "Evidence quality",
      definition:
        "Material findings have reproducible tests, affected cohorts, examples, sources, confidence, exceptions, and a clear causal hypothesis.",
      source: "finding register and supporting evidence files",
    },
    {
      name: "Decision and ownership",
      definition:
        "Priority work has an agreed outcome, owner, dependency, sequence, acceptance criteria, and explicit decision to ship, test, defer, or reject.",
      source: "roadmap, decision log, and project system",
    },
    {
      name: "Implementation progress",
      definition:
        "Recommendations accepted, released, and validated across representative pages and templates without material regression.",
      source:
        "tickets, release records, crawler, Search Console, and QA evidence",
    },
    {
      name: "Search cohort change",
      definition:
        "Index, impressions, clicks, landing pages, and query visibility for the pages and templates affected by implemented work.",
      source:
        "Google Search Console, Bing Webmaster Tools, and annotated cohorts",
    },
    {
      name: "Commercial cohort change",
      definition:
        "Qualified actions, leads, product usage, bookings, orders, pipeline, or revenue for affected landing-page and customer cohorts.",
      source:
        "approved analytics and business systems with attribution limitations",
    },
  ],
  evidence: {
    title: "What audit evidence can you inspect?",
    lead: "The public numbers below are approved project snapshots used to demonstrate source context and measurement discipline. An audit sample will be added only after confidential data is removed and every finding, screenshot, date, and permission is approved.",
    ...sharedIndustryEvidence,
    slots: [
      {
        label: "Redacted audit finding",
        description:
          "Reserved for evidence, affected cohort, priority, recommendation, owner, and acceptance criteria.",
      },
      {
        label: "Roadmap and validation sample",
        description:
          "Reserved for a redacted priority board or released-fix validation with date and method.",
      },
    ],
  },
  fitTitle: "Is a TheProjectSEO audit the right engagement?",
  fitLead:
    "The strongest fit is a team that needs an independent, implementation-ready diagnosis and can provide the access and stakeholders needed to test it.",
  goodFit: [
    "Organic growth has stalled, declined, become unpredictable, or lacks a coherent roadmap",
    "A migration, redesign, replatform, domain change, merger, or international expansion is planned",
    "Technical, content, authority, analytics, and agency advice conflict",
    "Leadership needs an independent view with business priorities and data limitations",
    "Engineering, content, marketing, and analytics owners can join the handoff",
  ],
  notFit: [
    "You only want a generic automated PDF or a higher tool health score",
    "You need guaranteed rankings, traffic recovery, citations, leads, or revenue",
    "No stakeholder can provide access, answer factual questions, or implement work",
    "The engagement is expected to validate a predetermined conclusion regardless of evidence",
    "Unsafe testing, unauthorized access, or fabricated competitor and link tactics are required",
  ],
  sources: [
    {
      label: "Google Search Essentials",
      url: "https://developers.google.com/search/docs/essentials",
      description:
        "Primary requirements and policies used when evaluating search eligibility and spam risk.",
    },
    {
      label: "Google: debugging traffic drops",
      url: "https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops",
      description:
        "Primary framework for investigating technical, algorithmic, demand, and reporting causes.",
    },
    {
      label: "Google: crawling and indexing",
      url: "https://developers.google.com/search/docs/crawling-indexing/overview",
      description:
        "Primary overview used to distinguish discovery, crawling, rendering, and indexing conditions.",
    },
    {
      label: "Microsoft Bing Webmaster Guidelines",
      url: "https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a",
      description:
        "Primary Bing guidance considered in cross-engine technical and content review.",
    },
  ],
  faqTitle: "Questions to ask before buying SEO audit services",
  faqs: [
    {
      question: "What is an SEO audit?",
      answer:
        "An SEO audit is a structured investigation of the conditions affecting organic-search visibility and business outcomes. A comprehensive audit can cover technical access and indexation, pages and content, internal links, authority and entities, competitors and SERPs, analytics and conversion data, and AI-search visibility. It should result in evidence-backed decisions and a prioritized roadmap.",
    },
    {
      question: "What should an SEO audit include?",
      answer:
        "It should include the agreed scope and questions, dated data sources, reproducible findings, affected pages and templates, root-cause analysis, priority and confidence, business impact, recommendations, owners, dependencies, edge cases, acceptance criteria, page or URL decisions, and a validation plan. Modules vary by the site and purpose.",
    },
    {
      question: "How is a professional audit different from a free audit tool?",
      answer:
        "A tool detects predefined patterns. A professional audit verifies whether they matter, integrates multiple data sources, understands templates and business context, investigates causes, evaluates competitors and customer intent, designs feasible solutions, prioritizes trade-offs, and prepares implementation and validation. Tools remain useful evidence sources.",
    },
    {
      question: "Can you audit a traffic drop or migration?",
      answer:
        "Yes. We build a change timeline and segment the loss by page, query, device, market, template, directory, and date; investigate technical, content, demand, algorithm, tracking, and competitor hypotheses; and compare pre- and post-change behavior. Recovery cannot be guaranteed, but causes and controllable work can be assessed.",
    },
    {
      question: "Does the audit include AI-search and GEO visibility?",
      answer:
        "It can. We define commercially relevant prompts, capture platform and test conditions, separate mentions from citations and recommendations, map cited sources, verify material facts, and review technical, content, entity, and authority readiness. Because outputs vary, the report describes observations and limitations rather than promise inclusion.",
    },
    {
      question: "Will developers know how to implement the recommendations?",
      answer:
        "That is the goal. Priority technical findings include affected patterns, current and expected behavior, examples, evidence, edge cases, dependencies, acceptance criteria, instrumentation, and validation. We also provide a walkthrough and can support sprint planning, implementation, and QA if scoped.",
    },
    {
      question: "How long does an SEO audit take?",
      answer:
        "Timing depends on domains, templates, page scale, data access, JavaScript and platform complexity, markets, migration history, stakeholder availability, and required modules. A focused audit can be faster than a complex enterprise review. Scope and milestones are agreed before work begins.",
    },
    {
      question: "What does an SEO audit cost?",
      answer:
        "Pricing is scoped to the investigation rather than a fixed page-count package. Variables include domains, templates, rendering, ecommerce or international complexity, data and log analysis, traffic-drop or migration work, content and link review, AI-search baseline, stakeholder sessions, and implementation support. Ongoing TheProjectSEO engagements start from $3,500 per month.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/technical-seo",
      label: "Technical SEO",
      description:
        "Deep crawl, render, index, template, performance, migration, and implementation work.",
    },
    {
      href: "/services/seo-consulting",
      label: "SEO consulting",
      description:
        "Independent strategy, prioritization, stakeholder guidance, and ongoing decision support.",
    },
    {
      href: "/methodology",
      label: "Our methodology",
      description:
        "How evidence, confidence, prioritization, review, implementation, and measurement work.",
    },
    {
      href: "/pricing",
      label: "SEO pricing",
      description:
        "Engagement models, starting investment, scope variables, and fit.",
    },
  ],
  ctaEyebrow: "Get a decision-ready diagnosis",
  ctaTitle:
    "Find the causes, risks, and opportunities your next SEO roadmap should address.",
  ctaLead:
    "Share your website, business questions, recent changes, markets, platforms, stakeholders, and available data. We will define an audit scope that produces implementable decisions.",
  ctaBenefits: [
    "Technical, content, authority, competitor, analytics, and AI-search scope",
    "Evidence-backed findings with affected cohorts and confidence",
    "Prioritized roadmap, owner handoff, acceptance criteria, and validation plan",
  ],
};

export const coreServiceLeadPages = {
  seo,
  technicalSeo,
  seoAudit,
} as const satisfies Record<string, IndustryLeadPageData>;
