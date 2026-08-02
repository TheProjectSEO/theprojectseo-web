import {
  sharedIndustryEvidence,
  type IndustryLeadPageData,
} from "@/data/industry-lead-pages";

export type SearchServiceSpec = {
  slug: string;
  name: string;
  schemaName: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  definition: string;
  bestFit: string;
  heroChecks: string[];
  examples: [string, string, string, string];
  pageAssets: [string, string, string, string, string];
  technicalFocus: string;
  contentFocus: string;
  authorityFocus: string;
  operationsFocus: string;
  measurementFocus: string;
  boundary: string;
  sources: Array<{ label: string; url: string; description: string }>;
  customFaqs: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ href: string; label: string; description: string }>;
  path?: string;
  parentBreadcrumb?: { name: string; href: string };
};

const googleSources = {
  essentials: {
    label: "Google Search Essentials",
    url: "https://developers.google.com/search/docs/essentials",
    description:
      "Google’s technical requirements, spam policies, and foundational recommendations for Search.",
  },
  ai: {
    label: "Google: AI features and your website",
    url: "https://developers.google.com/search/docs/appearance/ai-features",
    description:
      "Google’s published eligibility, content, crawler, preview-control, and measurement guidance for AI Overviews and AI Mode.",
  },
  links: {
    label: "Google: link best practices",
    url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable",
    description:
      "Google’s guidance for crawlable links, descriptive anchor text, and internal and external link context.",
  },
  spam: {
    label: "Google Search spam policies",
    url: "https://developers.google.com/search/docs/essentials/spam-policies",
    description:
      "Google’s policies covering link spam, scaled content abuse, doorway abuse, cloaking, and other prohibited practices.",
  },
  localized: {
    label: "Google: localized versions of pages",
    url: "https://developers.google.com/search/docs/specialty/international/localized-versions",
    description:
      "Google’s hreflang, language and regional targeting implementation guidance.",
  },
  multilingual: {
    label: "Google: managing multi-regional and multilingual sites",
    url: "https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites",
    description:
      "Google’s site structure, locale, geotargeting, duplication, and user-experience guidance.",
  },
  titles: {
    label: "Google: title links in search results",
    url: "https://developers.google.com/search/docs/appearance/title-link",
    description:
      "Google’s recommendations for descriptive, concise titles and the sources used to generate title links.",
  },
  snippets: {
    label: "Google: snippets and meta descriptions",
    url: "https://developers.google.com/search/docs/appearance/snippet",
    description:
      "Google’s documentation for snippets, meta descriptions, and preview controls.",
  },
  structuredData: {
    label: "Google structured data policies",
    url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
    description:
      "Google’s requirement that structured data represent visible, accurate content and follow feature-specific policies.",
  },
  javascript: {
    label: "Google: JavaScript SEO basics",
    url: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics",
    description:
      "Google’s rendering, links, status code, canonical, and client-side application guidance.",
  },
  crawlBudget: {
    label: "Google: crawl budget management",
    url: "https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget",
    description:
      "Google’s crawl capacity, demand, duplicate URL, sitemap, error, and server-resource guidance for large sites.",
  },
  sitemaps: {
    label: "Google: build and submit a sitemap",
    url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap",
    description:
      "Google’s sitemap limits, canonical URL recommendations, and implementation options.",
  },
};

export function createSearchServicePage(
  spec: SearchServiceSpec,
): IndustryLeadPageData {
  return {
    slug: spec.slug,
    path: spec.path ?? `/services/${spec.slug}`,
    parentBreadcrumb: spec.parentBreadcrumb ?? {
      name: "Services",
      href: "/services",
    },
    name: spec.name,
    schemaName: spec.schemaName,
    serviceType: spec.serviceType,
    schemaAudience:
      "Founders, marketing leaders, SEO teams, content teams, product teams, engineering teams, communications teams, and organizations investing in qualified organic and AI-assisted discovery",
    metaTitle: spec.metaTitle,
    metaDescription: spec.metaDescription,
    eyebrow: spec.eyebrow,
    title: spec.title,
    titleAccent: spec.titleAccent,
    directAnswer: `${spec.definition} TheProjectSEO connects the work to Google, Bing, AI-assisted search, and measurable customer decisions. Each recommendation receives evidence, an owner, implementation requirements, QA conditions, and an outcome definition; we do not sell isolated checklists or unsupported ranking promises.`,
    primaryCta: `Request a ${spec.name} assessment`,
    bestFit: spec.bestFit,
    heroChecks: spec.heroChecks,
    journeyTitle: `Which customer decisions should ${spec.name} support?`,
    journeyLead:
      "Organic discovery is a sequence rather than one ranking. A prospect may learn the problem, evaluate possible approaches, compare companies, and verify a claim across Google, Bing, and AI-assisted research before converting.",
    searchJourneys: [
      {
        stage: "Discover",
        intent: "Understand the problem and available approaches",
        explanation:
          "The researcher needs a reliable definition, workflow, benchmark, example, or diagnostic before the appropriate solution category is clear.",
        examples: [
          spec.examples[0],
          `what does ${spec.name.toLowerCase()} include`,
        ],
        conversion:
          "relevant guide, tool, methodology, product, or service route",
      },
      {
        stage: "Evaluate",
        intent: "Find a suitable solution or provider",
        explanation:
          "The buyer adds context such as company size, platform, industry, location, risk, workflow, or desired outcome and begins building a shortlist.",
        examples: [
          spec.examples[1],
          `${spec.name.toLowerCase()} company for a growing business`,
        ],
        conversion: "service, industry, solution, comparison, or evidence page",
      },
      {
        stage: "Compare",
        intent: "Choose using explicit criteria",
        explanation:
          "The decision maker compares methods, scope, process, pricing, evidence, implementation ownership, reporting, and commercial fit.",
        examples: [
          spec.examples[2],
          `how to choose a ${spec.name.toLowerCase()} agency`,
        ],
        conversion:
          "pricing review, assessment, proposal request, or vendor shortlist",
      },
      {
        stage: "Validate",
        intent: "Reduce implementation and purchase risk",
        explanation:
          "Stakeholders verify the company, people, proof, policies, technical approach, limitations, and ability to work with internal teams.",
        examples: [
          spec.examples[3],
          `TheProjectSEO methodology and verified results`,
        ],
        conversion:
          "qualified enquiry, scoped workshop, sales opportunity, or approved pilot",
      },
    ],
    obstaclesTitle: `Why does ${spec.name} stall before it creates value?`,
    obstaclesLead:
      "Most programs do not fail because the team lacks recommendations. They fail because demand, technical systems, content ownership, authority, implementation, and measurement are managed as separate projects.",
    obstacles: [
      {
        title: "Activity replaces a decision model",
        problem:
          "A fixed quota of pages, links, audits, or reports can consume budget without clarifying which customer problem, URL system, or business outcome should change.",
        response:
          "We map demand and customer decisions to canonical pages, technical dependencies, evidence, owners, and outcome cohorts before sequencing work.",
      },
      {
        title: "Recommendations stop at the document",
        problem:
          "A correct recommendation still has no value when it lacks acceptance criteria, engineering context, editorial standards, risk controls, or a responsible owner.",
        response:
          "Every material recommendation becomes an implementation-ready ticket or brief with evidence, expected effect, dependencies, QA, rollback considerations, and measurement annotation.",
      },
      {
        title: "Google and AI visibility are treated as rival strategies",
        problem:
          "Teams may abandon search fundamentals for AI-search slogans or ignore generated answers even when customers use them to research and compare.",
        response:
          "We preserve one useful source foundation and add platform-specific access, prompt, citation, entity, and accuracy monitoring where it supports a real customer journey.",
      },
      {
        title: "Reports assign causality too easily",
        problem:
          "Traffic, rankings, links, prompts, leads, and revenue can move because of releases, brand demand, seasonality, campaigns, market changes, tracking changes, or unrelated product work.",
        response:
          "We use URL and query cohorts, annotations, comparison periods, raw source data, and stakeholder context. Findings distinguish observation, interpretation, and causal confidence.",
      },
    ],
    deliverablesTitle: `What is included in ${spec.name}?`,
    deliverablesLead:
      "Scope is prioritized from evidence. These workstreams cover discovery, implementation, governance, authority, AI-assisted discovery, and commercial measurement without turning the engagement into a generic bundle.",
    deliverables: [
      {
        title: "Demand and customer research",
        description:
          "A model of the questions, entities, competitors, journeys, markets, and page types that influence useful discovery and decisions.",
        items: [
          "Google and Bing SERPs, query data, site search, customer, sales, and support language",
          "AI prompt, answer, citation, source, competitor, and factual-accuracy observations",
          "Intent, audience, market, journey, page ownership, and commercial-priority mapping",
          `Priority assets including ${spec.pageAssets.slice(0, 2).join(" and ")}`,
        ],
      },
      {
        title: "Technical and page-system audit",
        description: spec.technicalFocus,
        items: [
          "Crawl, render, index, canonical, redirect, sitemap, robots, and internal-link evidence",
          "Template, parameter, navigation, structured data, performance, and accessibility review",
          "Defect cohorts ranked by value, confidence, risk, reach, and implementation effort",
          "Engineering tickets with acceptance tests and release QA",
        ],
      },
      {
        title: "Content and on-page system",
        description: spec.contentFocus,
        items: [
          "Canonical query-to-page ownership and cannibalization decisions",
          `Page systems such as ${spec.pageAssets.slice(2).join(", ")}`,
          "Titles, headings, direct answers, source requirements, media, links, and action paths",
          "Expert, author, reviewer, evidence, claim, and refresh governance",
        ],
      },
      {
        title: "Authority and external evidence",
        description: spec.authorityFocus,
        items: [
          "Backlink, mention, citation, review, profile, publication, and competitor-source audit",
          "Original research, data, tools, expert commentary, reference pages, and digital PR assets",
          "Editorial outreach with relevance, provenance, disclosure, and destination review",
          "No private blog networks, fake traffic, paid-link concealment, or guaranteed placements",
        ],
      },
      {
        title: "Operations and implementation",
        description: spec.operationsFocus,
        items: [
          "Roles, decision rights, handoffs, service levels, approvals, and escalation paths",
          "Brief, ticket, release, QA, annotation, and rollback templates",
          "Training, documentation, reusable patterns, and pre-publication safeguards",
          "Automated checks for repetitive defects with human review for consequential changes",
        ],
      },
      {
        title: "Measurement and iteration",
        description: spec.measurementFocus,
        items: [
          "Search visibility, AI answers, landing behavior, conversions, and commercial cohorts",
          "Brand versus non-brand, new versus existing, market, template, topic, and journey segments",
          "Release, campaign, product, tracking, seasonality, and market annotations",
          "Monthly decisions: scale, revise, consolidate, redirect, stop, or investigate",
        ],
      },
    ],
    aiVisibility: {
      title: `How does ${spec.name} support Google and AI search together?`,
      lead: "Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity do not expose one shared ranking system. The common foundation is an accessible, useful, corroborated source; the platform layer requires separate controls and measurement.",
      platforms: [
        "Google Search",
        "Bing",
        "AI Overviews",
        "AI Mode",
        "ChatGPT",
        "Gemini",
        "Claude",
        "Perplexity",
      ],
      boundary: spec.boundary,
      workstreams: [
        {
          title: "Search eligibility",
          description:
            "Protect crawl, render, index, snippet, canonical, internal-link, and page-experience fundamentals for the pages that should compete.",
          output:
            "technical baseline, eligible URL map, prioritized defects, and QA evidence",
        },
        {
          title: "Extractable, verifiable information",
          description:
            "State important facts and answers clearly, show responsible authorship, cite primary sources, preserve nuance, and connect summaries to deeper evidence.",
          output:
            "page briefs, source register, entity facts, expert review, and claim boundaries",
        },
        {
          title: "Independent authority",
          description:
            "Earn relevant references, coverage, reviews, citations, and brand mentions through work that has editorial value beyond the link itself.",
          output:
            "authority gap, asset roadmap, prospect rationale, outreach, and live-placement record",
        },
        {
          title: "Platform-specific observation",
          description:
            "Track stable prompts, linked sources, brand presence, factual accuracy, referral behavior, and the conditions under which the response was captured.",
          output:
            "versioned prompt set, response archive, source trends, accuracy log, and actions",
        },
      ],
    },
    architectureTitle: `Which page systems make ${spec.name} scalable?`,
    architectureLead:
      "A useful architecture gives every customer job and verified entity a clear owner while preventing thin programmatic growth, duplicate intent, and disconnected conversion paths.",
    architecture: [
      {
        pageType: "Commercial hubs",
        intent: "Can this organization solve my need?",
        examples: spec.pageAssets[0],
        signal:
          "clear offer, audience, facts, fit, proof, boundaries, and action",
      },
      {
        pageType: "Evaluation pages",
        intent: "How should I choose?",
        examples: spec.pageAssets[1],
        signal:
          "criteria, trade-offs, current facts, source method, and decision path",
      },
      {
        pageType: "Topic and task resources",
        intent: "Help me understand or complete the job",
        examples: spec.pageAssets[2],
        signal:
          "direct utility, expert input, sources, examples, and relevant next step",
      },
      {
        pageType: "Evidence assets",
        intent: "What supports the claim?",
        examples: spec.pageAssets[3],
        signal:
          "method, date, scope, definitions, raw context, and limitations",
      },
      {
        pageType: "Entity and trust pages",
        intent: "Who is responsible and can the facts be verified?",
        examples: spec.pageAssets[4],
        signal:
          "consistent people, organization, service, location, policy, and contact facts",
      },
    ],
    processTitle: `How does a ${spec.name} engagement move from audit to impact?`,
    processLead:
      "The sequence makes implementation and learning visible. We agree on decisions and outcomes, establish a baseline, design the operating system, pilot representative cohorts, and scale only after QA.",
    process: [
      {
        number: "01",
        cadence: "Align",
        title: "Define scope, customers, and outcomes",
        description:
          "Stakeholders agree on markets, offers, constraints, decision journeys, commercial definitions, access, risks, and what evidence will support prioritization.",
        output:
          "scope, audience and journey map, access plan, risks, and success definitions",
      },
      {
        number: "02",
        cadence: "Baseline",
        title: "Research demand and the current system",
        description:
          "We crawl and render the site, inspect search and analytics data, review competitors and sources, capture AI prompts where relevant, and document current operating constraints.",
        output:
          "baseline, page and query map, defect cohorts, authority gap, and opportunity model",
      },
      {
        number: "03",
        cadence: "Design",
        title: "Create specifications and governance",
        description:
          "Recommendations become page ownership rules, briefs, tickets, templates, evidence requirements, roles, approvals, acceptance tests, and measurement annotations.",
        output:
          "roadmap, specifications, briefs, governance, and implementation queue",
      },
      {
        number: "04",
        cadence: "Pilot",
        title: "Release representative cohorts",
        description:
          "A controlled set of pages, templates, technical fixes, or authority campaigns is implemented first and checked in rendered output, source systems, analytics, and search tools.",
        output:
          "pilot release, QA record, tracking annotation, and corrected pattern",
      },
      {
        number: "05",
        cadence: "Scale",
        title: "Apply verified patterns responsibly",
        description:
          "Approved rules expand through templates, content operations, development workflows, and outreach while automated checks identify drift and exceptions.",
        output:
          "scaled releases, operating documentation, training, and monitoring",
      },
      {
        number: "06",
        cadence: "Iterate",
        title: "Use evidence to make the next decision",
        description:
          "Search, AI-answer, behavior, lead, pipeline, revenue, quality, and operational data inform what to expand, revise, consolidate, stop, or investigate.",
        output:
          "decision report, updated roadmap, experiment log, and next cohort",
      },
    ],
    measurementTitle: `What should a ${spec.name} report prove?`,
    measurementLead:
      "A useful report shows whether intended pages became eligible, visible, useful, authoritative, and commercially productive—and whether the organization can repeat the improvement safely.",
    measurementBoundary:
      "No agency controls crawling, indexing, ranking, generated answers, journalist decisions, customer demand, or revenue. We annotate material changes and report confidence and limitations rather than attributing every movement to the latest task.",
    measurement: [
      {
        name: "Eligibility and quality",
        definition:
          "The intended URL and template cohorts that are crawlable, indexable, canonical, internally discoverable, performant, accurate, and compliant.",
        source:
          "crawls, rendered HTML, Search Console, Bing, logs, validators, and QA evidence",
      },
      {
        name: "Qualified visibility",
        definition:
          "Impressions, clicks, rankings, result features, and linked AI citations for relevant non-brand and brand query or prompt cohorts.",
        source:
          "Search Console, Bing, stable rank sets, stored responses, and cited-source records",
      },
      {
        name: "Authority and demand",
        definition:
          "Relevant referring sources, earned mentions, branded search, referral visits, source inclusion, and competitor movement.",
        source:
          "backlink index, publication records, Search Console, analytics, and response archives",
      },
      {
        name: "Customer progression",
        definition:
          "Landing engagement, product or service exploration, assisted journeys, qualified enquiries, trials, or orders by implemented cohort.",
        source:
          "analytics, consented event data, forms, product analytics, and commerce systems",
      },
      {
        name: "Commercial and operational result",
        definition:
          "Pipeline, revenue, margin or approved business value alongside release velocity, defect recurrence, adoption, and cost where data permits.",
        source:
          "CRM, commerce or finance-approved data, issue tracker, release log, and stakeholder review",
      },
    ],
    evidence: {
      title: `What evidence belongs on a ${spec.name} page?`,
      lead: "The final evidence should connect an approved implementation cohort to a dated search trend and an appropriate business outcome. Empty slots remain until the project owner supplies screenshots with enough context to review responsibly.",
      ...sharedIndustryEvidence,
      slots: [
        {
          label: `${spec.name} · implementation and search trend`,
          description:
            "Add an approved Search Console, Bing, Ahrefs, crawl, or rank view with URLs, date range, comparison period, release annotation, and material confounders.",
        },
        {
          label: `${spec.name} · authority, AI, or commercial evidence`,
          description:
            "Add an approved source, citation, referral, analytics, CRM, or commerce view with scope, methodology, denominator, and relevant tracking limitations.",
        },
      ],
    },
    fitTitle: `Is your organization ready for ${spec.name}?`,
    fitLead:
      "The engagement works when the business has a real offer, people who can verify claims, implementation access, and stakeholders willing to prioritize evidence over task volume.",
    goodFit: [
      "Customer demand and organic discovery matter to the business model",
      "Subject experts and accountable reviewers can approve important facts",
      "Technical, content, communications, and analytics owners can implement decisions",
      "Leadership accepts measurement boundaries and no ranking or revenue guarantee",
    ],
    notFit: [
      "You need guaranteed rankings, links, citations, traffic, or revenue by a fixed date.",
      "No one can change the website, supply evidence, or approve recommendations.",
      "The plan depends on doorway pages, scaled low-value content, fake authority, or concealed paid links.",
      "Success is defined only as activity volume or a proprietary score.",
    ],
    sources: spec.sources,
    faqTitle: `${spec.name} questions before you hire`,
    faqs: [
      { question: `What is ${spec.name}?`, answer: spec.definition },
      {
        question: `What does a ${spec.name} agency actually deliver?`,
        answer:
          "A credible agency should deliver research, a prioritized roadmap, implementation-ready specifications, page or campaign assets, QA evidence, transparent source data, governance, and reporting connected to customer and business outcomes. Exact scope depends on the site, opportunity, team, market, and implementation ownership.",
      },
      {
        question: `How long does ${spec.name} take to work?`,
        answer:
          "There is no universal timetable. Timing depends on crawl and index cycles, site authority, competition, engineering and editorial velocity, release quality, market demand, and the type of work. We establish leading indicators and cohort review windows during discovery rather than publish a fabricated typical range.",
      },
      {
        question: `Can TheProjectSEO guarantee ${spec.name} results?`,
        answer:
          "No. We do not guarantee rankings, links, citations, traffic, or revenue because those outcomes depend on systems and decisions outside agency control. We commit to the approved research, implementation, QA, and transparent measurement process.",
      },
      {
        question: `How does ${spec.name} support AI search?`,
        answer:
          "The service strengthens accessible pages, explicit facts, entity relationships, independent authority, source quality, and customer journeys. We add platform-specific prompt, citation, source, and accuracy monitoring where commercially relevant, without claiming a universal AI-ranking formula.",
      },
      {
        question: "Will AI automate the whole service?",
        answer:
          "Automation can collect data, identify repeated patterns, prepare drafts, run checks, and monitor changes. Humans still need to define the business decision, verify facts, judge intent, approve claims, assess editorial and reputational risk, design experiments, and own consequential releases.",
      },
      ...spec.customFaqs,
    ],
    relatedLinks: spec.relatedLinks,
    ctaEyebrow: `${spec.name} · Evidence before activity`,
    ctaTitle: `Find the highest-confidence ${spec.name} opportunities.`,
    ctaLead:
      "Share your site, products or services, priority markets, customer journeys, constraints, current data, and implementation team. We will identify the work most likely to improve qualified visibility across Google and AI-assisted search.",
    ctaBenefits: [
      "Live SERP, site, content, authority, and AI-search baseline",
      "Prioritized technical, page, evidence, and operating-system roadmap",
      "Transparent measurement tied to qualified customer and commercial outcomes",
    ],
  };
}

const enterprise = createSearchServicePage({
  slug: "enterprise-seo",
  name: "Enterprise SEO",
  schemaName: "Enterprise SEO and AI search governance services",
  serviceType:
    "Enterprise technical SEO, content systems, governance, migrations, international architecture, automation, AI search, and executive measurement",
  metaTitle: "Enterprise SEO Agency for Governed Scale",
  metaDescription:
    "Enterprise SEO for complex sites, teams and platforms: technical architecture, templates, governance, content systems, AI search and executive reporting.",
  eyebrow: "Enterprise SEO · Architecture + governance + implementation",
  title: "Make search quality repeatable.",
  titleAccent: "Scale without losing control.",
  definition:
    "Enterprise SEO is the operating system for improving organic and AI-assisted discovery across large, complex websites, multiple platforms, many stakeholders, and high-consequence release cycles.",
  bestFit:
    "Organizations with large or complex URL inventories, multiple teams or markets, accumulated technical debt, significant migration risk, or a need for governed search execution.",
  heroChecks: [
    "Technical architecture, rendering, crawl, index, templates, and migrations",
    "Content governance across business units, products, countries, and teams",
    "Google, Bing, AI-search source quality, entities, and executive measurement",
    "Decision rights, acceptance tests, release QA, automation, and incident response",
  ],
  examples: [
    "how to govern SEO across multiple business units",
    "enterprise SEO agency for a headless platform",
    "enterprise SEO platform versus agency",
    "enterprise SEO migration risk assessment",
  ],
  pageAssets: [
    "enterprise service, solution, product, industry, and market hubs",
    "platform, integration, comparison, migration, and procurement pages",
    "documentation, standards, training, playbooks, and expert resources",
    "benchmark research, log analysis, experiments, and executive evidence",
    "organization, business-unit, product, people, location, policy, and contact pages",
  ],
  technicalFocus:
    "A cohort and template-level audit of rendering, crawl allocation, index quality, architecture, faceted navigation, JavaScript, platform constraints, international signals, migrations, and release risk.",
  contentFocus:
    "A governed system for mapping demand and entity ownership to templates, market teams, product experts, editorial standards, localization, evidence, approvals, and refresh rules.",
  authorityFocus:
    "An enterprise authority model covering corporate reputation, product expertise, research, publications, review ecosystems, digital PR, relevant links, and AI-answer source influence.",
  operationsFocus:
    "Decision rights and workflows that embed search requirements into product, engineering, design, legal, communications, analytics, and content releases instead of relying on post-launch audits.",
  measurementFocus:
    "Cohort reporting for templates, products, markets, brand and non-brand demand, migrations, AI citations, qualified journeys, pipeline or revenue, delivery velocity, and defect recurrence.",
  boundary:
    "Enterprise scale amplifies both improvements and mistakes. Automation and template changes require sampling, staged releases, rollback plans, monitoring, and accountable human approval.",
  sources: [
    googleSources.crawlBudget,
    googleSources.sitemaps,
    googleSources.javascript,
    googleSources.essentials,
    googleSources.ai,
  ],
  customFaqs: [
    {
      question: "What makes enterprise SEO different from a standard retainer?",
      answer:
        "The distinguishing problem is organizational and technical scale. Enterprise work needs template and cohort analysis, stakeholder governance, release integration, data engineering, market or business-unit ownership, risk controls, and executive decisions. A longer keyword list is not an enterprise strategy.",
    },
    {
      question: "Can enterprise SEO work without engineering support?",
      answer:
        "Some content and authority work can proceed, but material technical and template improvements usually require engineering or platform ownership. We surface the value, scope, risk, acceptance criteria, and implementation options so leadership can make an informed allocation decision.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/technical-seo",
      label: "Technical SEO",
      description:
        "Resolve rendering, crawl, index, architecture, and performance defects.",
    },
    {
      href: "/services/seo-automation",
      label: "SEO automation",
      description:
        "Automate repeatable checks with approval and rollback controls.",
    },
    {
      href: "/services/international-seo",
      label: "International SEO",
      description: "Govern language, market, URL, and localization systems.",
    },
    {
      href: "/services/ai-search",
      label: "AI search",
      description: "Measure generated-answer sources and brand representation.",
    },
  ],
});

const international = createSearchServicePage({
  slug: "international-seo",
  name: "International SEO",
  schemaName: "International and multilingual SEO services",
  serviceType:
    "International SEO for India and the Philippines, multilingual research, market architecture, localization, hreflang, entities, authority, and AI search",
  metaTitle: "International SEO Agency for India & Philippines",
  metaDescription:
    "International SEO for India and the Philippines: market demand, localization, URL architecture, hreflang, technical QA, authority and AI search.",
  eyebrow: "International SEO · India + Philippines only",
  title: "Win the right market.",
  titleAccent: "Respect how people search there.",
  definition:
    "International SEO helps a business earn qualified discovery in more than one market by aligning local demand, language, culture, offer, URL architecture, technical signals, content, authority, and measurement.",
  bestFit:
    "Companies entering or growing in India and the Philippines with a locally viable offer, market reviewers, implementation access, and the ability to support customers in each target market.",
  heroChecks: [
    "Only India and the Philippines are in TheProjectSEO’s active location scope",
    "Local demand and customer language before translation volume",
    "URL architecture, hreflang, canonical, sitemap, redirect, and localization QA",
    "Google, Bing, local entities, AI answers, leads, pipeline, and revenue by market",
  ],
  examples: [
    "how do customers search for this service in India",
    "international SEO agency for India and Philippines",
    "subdirectory versus country domain SEO",
    "hreflang implementation for English market variants",
  ],
  pageAssets: [
    "India and Philippines country, city, service, and industry hubs",
    "localized product, service, pricing, policy, support, and comparison pages",
    "market guides, terminology, FAQs, examples, tools, and customer education",
    "local research, case evidence, experts, reviews, publications, and partnerships",
    "local organization, contact, people, address, service-area, policy, and profile pages",
  ],
  technicalFocus:
    "A market-aware audit of domain and subdirectory choices, locale URLs, hreflang, canonicalization, sitemaps, redirects, crawl paths, rendering, duplication, geolocation behavior, and migration risk.",
  contentFocus:
    "Local research and transcreation that adapts intent, terminology, examples, proof, commercial terms, customer support, policies, and conversion paths for India and the Philippines.",
  authorityFocus:
    "Credible market signals through relevant local publications, associations, partners, directories, experts, reviews, citations, links, and community sources rather than generic global placements.",
  operationsFocus:
    "A central standard with accountable market reviewers, translation memory, fact ownership, local approvals, update synchronization, exception rules, and pre-publication technical QA.",
  measurementFocus:
    "Market, language, landing-page, query, lead-quality, pipeline or revenue, local authority, and AI-answer cohorts kept separate so one country cannot hide another’s problems.",
  boundary:
    "Hreflang is not a ranking boost and translation is not localization. A market page should exist only when the business can provide a useful, accurate, supported experience for that audience.",
  sources: [
    googleSources.localized,
    googleSources.multilingual,
    googleSources.essentials,
    googleSources.ai,
    googleSources.sitemaps,
  ],
  customFaqs: [
    {
      question: "Which countries does TheProjectSEO serve with location pages?",
      answer:
        "The active location strategy is limited to India and the Philippines. We do not create United States, United Kingdom, Australia, Singapore, Hong Kong, UAE, Canada, Germany, or translated pseudo-location pages merely to appear global.",
    },
    {
      question: "Should India and the Philippines use separate websites?",
      answer:
        "It depends on operating model, domain equity, platform, governance, localization depth, and customer experience. Subdirectories are often easier to consolidate and govern, while separate country domains carry different ownership and authority requirements. We document the trade-off before changing architecture.",
    },
  ],
  relatedLinks: [
    { href: '/locations/india', label: 'SEO in India', description: 'Review the active India market and city architecture.' },
    { href: '/locations/philippines', label: 'SEO in the Philippines', description: 'Review the active Philippines market and city architecture.' },
    { href: '/services/local-seo', label: 'Local SEO', description: 'Align profiles, listings, location pages, and local demand.' },
    { href: '/services/technical-seo', label: 'Technical SEO', description: 'Implement hreflang, canonicals, sitemaps, and migration QA.' },
    { href: '/resources/glossary/hreflang', label: 'Hreflang in SEO', description: 'Review hreflang purpose, implementation, validation, and common international SEO mistakes.' },
  ],
});

const linkBuilding = createSearchServicePage({
  slug: "link-building",
  name: "Link Building",
  schemaName: "Editorial link building and digital PR services",
  serviceType:
    "Editorial link building, backlink audits, linkable assets, source reclamation, digital PR, brand mentions, and AI search authority",
  metaTitle: "Link Building Services Without Shortcuts",
  metaDescription:
    "Editorial link building and digital PR based on relevance, real audiences, useful assets, transparent outreach and Google spam-policy boundaries.",
  eyebrow: "Link building agency · Editorial relevance + useful assets",
  title: "Earn references worth having.",
  titleAccent: "Know where every link came from.",
  definition:
    "Link building is the deliberate work of earning or reclaiming relevant editorial references to useful pages through research, assets, expert contributions, partnerships, publicity, and relationship-based outreach.",
  bestFit:
    "Organizations with technically sound pages, real expertise or data, a defensible offer, transparent review standards, and patience for editorial outcomes rather than a monthly link quota.",
  heroChecks: [
    "Backlink, competitor, lost-link, destination, and risk audit before outreach",
    "Original research, tools, reference assets, expert commentary, and digital PR",
    "Topical relevance, real audiences, editorial context, referral value, and provenance",
    "No PBNs, fake traffic, scaled guest-post farms, concealed paid links, or placement guarantees",
  ],
  examples: [
    "how to earn links to a technical product page",
    "link building agency for B2B SaaS",
    "digital PR versus guest post link building",
    "how to audit a link building vendor",
  ],
  pageAssets: [
    "commercial destinations that already satisfy search and customer intent",
    "original research, data studies, tools, calculators, templates, and reference assets",
    "expert guides, definitions, technical resources, and current statistics",
    "methods, datasets, visual assets, press materials, and case evidence",
    "organization, author, expert, editorial, disclosure, contact, and policy pages",
  ],
  technicalFocus:
    "A backlink and destination audit covering crawl and index status, redirects, canonicals, lost and broken links, internal distribution, anchor context, spam patterns, manual-action history, and pages that do or do not deserve authority.",
  contentFocus:
    "A source-worthy asset and destination plan that gives editors, journalists, practitioners, and partners a real reason to reference the site beyond an exchange or payment.",
  authorityFocus:
    "Editorial outreach and digital PR judged by relevance, source quality, audience, placement context, disclosure, destination usefulness, referral potential, and long-term reputational fit.",
  operationsFocus:
    "Prospect sourcing, qualification, conflict and payment disclosure, pitch review, follow-up limits, live-link QA, relationship records, lost-link monitoring, and escalation for risky requests.",
  measurementFocus:
    "Earned source quality, topical relevance, target-page visibility, referral journeys, brand demand, AI citation sources, lost links, and commercial cohorts—not raw link count or third-party domain metrics alone.",
  boundary:
    "Links intended to manipulate rankings can violate Google’s policies. Payment, sponsorship, affiliate relationships, and user-generated placements require appropriate qualification and disclosure; no agency controls whether an editor publishes or retains a link.",
  sources: [
    googleSources.spam,
    googleSources.links,
    googleSources.essentials,
    googleSources.ai,
    googleSources.snippets,
  ],
  customFaqs: [
    {
      question: "Does TheProjectSEO sell a fixed number of backlinks?",
      answer:
        "No. A quota encourages weak prospecting, repeated footprints, paid placement pressure, and links that exist only to satisfy a report. We scope the research, asset, outreach, and quality-review work, then report editorial outcomes honestly.",
    },
    {
      question: "Do nofollow or sponsored links have value?",
      answer:
        "They can have audience, referral, brand, citation, and relationship value. The rel attribute communicates the nature of the link and should be used correctly. A useful campaign is not judged solely by whether every placement passes ranking signals.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/off-page-seo",
      label: "Off-page SEO",
      description:
        "Coordinate links with reputation, entities, reviews, and sources.",
    },
    {
      href: "/services/content",
      label: "SEO content",
      description: "Create research and reference assets worth citing.",
    },
    {
      href: "/services/ai-search",
      label: "AI search",
      description: "Map the sources shaping generated answers.",
    },
    {
      href: "/services/seo",
      label: "SEO services",
      description: "Strengthen the technical and page foundation first.",
    },
  ],
});

const offPage = createSearchServicePage({
  slug: "off-page-seo",
  name: "Off-Page SEO",
  schemaName:
    "Off-page SEO, digital PR, authority, reputation, and entity services",
  serviceType:
    "Off-page SEO covering editorial links, digital PR, brand mentions, entities, reviews, profiles, partnerships, citations, and AI source influence",
  metaTitle: "Off-Page SEO for Authority & AI Search",
  metaDescription:
    "Off-page SEO across editorial links, digital PR, entities, reviews, profiles, source influence and AI search—measured beyond domain metrics.",
  eyebrow: "Off-page SEO · Authority + reputation + source influence",
  title: "Build authority outside your domain.",
  titleAccent: "Keep it credible on arrival.",
  definition:
    "Off-page SEO improves the external evidence that helps people and search systems evaluate a brand: editorial links, mentions, reviews, profiles, citations, partnerships, expert participation, digital PR, and factual consistency.",
  bestFit:
    "Brands with a sound offer and website that need stronger independent corroboration, reputation, category presence, local or industry authority, and visibility in the sources buyers and AI systems consult.",
  heroChecks: [
    "Authority mapped across links, mentions, reviews, profiles, publications, and communities",
    "Digital PR and expert contribution rooted in useful evidence",
    "Entity and fact consistency across owned and independent sources",
    "Google, Bing, AI citations, referrals, branded demand, and qualified outcomes",
  ],
  examples: [
    "how to build independent authority for a new category",
    "off-page SEO agency for a regulated brand",
    "digital PR versus link building",
    "which sources influence AI recommendations",
  ],
  pageAssets: [
    "credible commercial and organization pages that can receive and convert attention",
    "industry profiles, local listings, review surfaces, partnerships, and associations",
    "expert commentary, reference guides, communities, podcasts, events, and publications",
    "original data, newsworthy research, tools, visuals, and case evidence",
    "organization, people, credentials, policies, locations, disclosures, and contact facts",
  ],
  technicalFocus:
    "An off-site and destination audit covering entity inconsistencies, review and profile gaps, backlink provenance, lost links, redirects, reputation risks, referral landing quality, and source access for search and AI systems.",
  contentFocus:
    "Expert and evidence assets designed for real editorial and audience needs, with accurate claims, source notes, spokesperson preparation, reusable data, and strong destination pages.",
  authorityFocus:
    "A coordinated plan for earned media, editorial links, brand mentions, profiles, reviews, associations, partners, events, expert communities, and source correction rather than one metric-driven backlink channel.",
  operationsFocus:
    "Shared governance across SEO, communications, leadership, legal, customer success, and subject experts for claims, outreach, review responses, profiles, disclosures, source corrections, and incident escalation.",
  measurementFocus:
    "Source relevance, entity accuracy, sentiment context, branded demand, referral behavior, linked and unlinked mentions, AI citations, review quality, qualified journeys, and reputational risk.",
  boundary:
    "Off-page work cannot ethically guarantee editorial coverage, positive reviews, knowledge panels, links, or AI recommendations. Paid and commercial relationships must be disclosed and qualified appropriately.",
  sources: [
    googleSources.spam,
    googleSources.links,
    googleSources.essentials,
    googleSources.ai,
    googleSources.structuredData ?? googleSources.essentials,
  ],
  customFaqs: [
    {
      question:
        "What is the difference between off-page SEO and link building?",
      answer:
        "Link building focuses on references between web pages. Off-page SEO is broader: it includes links, brand mentions, reviews, local and industry citations, profiles, partnerships, expert visibility, reputation, entity consistency, and the external sources that shape search and AI-assisted decisions.",
    },
    {
      question: "Can unlinked brand mentions help?",
      answer:
        "They can improve discovery, corroboration, referral behavior, and entity context even when they do not pass a conventional link signal. Their value depends on relevance, credibility, accuracy, audience, and whether the mention supports a real customer decision.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/link-building",
      label: "Link building",
      description:
        "Run transparent editorial outreach and source-worthy assets.",
    },
    {
      href: "/services/ai-search/entity-seo",
      label: "Entity SEO",
      description: "Correct and align brand facts across the web.",
    },
    {
      href: "/services/ai-search/geo",
      label: "GEO services",
      description: "Analyze third-party sources in generated answers.",
    },
    {
      href: "/services/content",
      label: "SEO content",
      description: "Create evidence and expertise worth referencing.",
    },
  ],
});

const onPage = createSearchServicePage({
  slug: "on-page-seo",
  name: "On-Page SEO",
  schemaName: "On-page SEO and content optimization services",
  serviceType:
    "On-page SEO for intent, titles, headings, content, entities, internal links, media, structured data, snippets, UX, and conversion paths",
  metaTitle: "On-Page SEO Services for Google & AI",
  metaDescription:
    "On-page SEO for intent ownership, titles, headings, content depth, entities, internal links, schema, snippets, UX and conversion paths.",
  eyebrow: "On-page SEO · Intent + usefulness + clear action",
  title: "Give every page one clear job.",
  titleAccent: "Make the answer worth reading.",
  definition:
    "On-page SEO improves an individual page and its relationship to the site so that people and search systems can understand its purpose, evaluate its usefulness, navigate its evidence, and take the appropriate next step.",
  bestFit:
    "Sites with existing pages, expertise, offers, or search visibility that need clearer intent ownership, stronger content, better snippets, internal links, entities, media, and conversion journeys.",
  heroChecks: [
    "Query and intent ownership before keyword placement",
    "Titles, H1s, headings, passages, entities, sources, media, and internal links",
    "Visible facts aligned with appropriate structured data and snippet controls",
    "Google, Bing, AI-answer sources, landing behavior, leads, and revenue cohorts",
  ],
  examples: [
    "how to improve a service page that ranks but does not convert",
    "on-page SEO services for ecommerce categories",
    "merge pages versus optimize them separately",
    "why Google rewrites a title link",
  ],
  pageAssets: [
    "service, product, category, solution, industry, location, and home pages",
    "comparison, alternative, pricing, integration, implementation, and evidence pages",
    "guides, definitions, tutorials, tools, examples, and support resources",
    "original research, expert review, annotated evidence, images, tables, and video",
    "organization, people, author, reviewer, contact, policy, and location pages",
  ],
  technicalFocus:
    "A rendered page and template audit covering indexability, canonical ownership, title and meta output, heading semantics, structured data, internal links, media, JavaScript, performance, accessibility, and duplicate variants.",
  contentFocus:
    "A SERP, customer, entity, and conversion-led revision that answers the page’s primary job completely, covers necessary subquestions, shows evidence, removes overlap, and gives the reader a useful next action.",
  authorityFocus:
    "Page-level evidence through accountable experts, primary sources, original examples, internal supporting pages, credible external references, and relevant inbound links rather than decorative trust badges.",
  operationsFocus:
    "Optimization briefs, editor and reviewer roles, template rules, metadata safeguards, internal-link updates, publishing QA, experiment annotations, and refresh triggers for facts, products, SERPs, and performance.",
  measurementFocus:
    "URL and query cohorts covering index eligibility, impressions, click-through rate, rankings, AI citations, engagement, conversions, lead quality, and assisted outcomes with release annotations.",
  boundary:
    "No target word count, exact-match density, schema type, or heading formula guarantees a ranking. The page must satisfy the customer job while remaining technically eligible and distinct from competing URLs on the same site.",
  sources: [
    googleSources.titles,
    googleSources.snippets,
    googleSources.links,
    googleSources.essentials,
    googleSources.ai,
  ],
  customFaqs: [
    {
      question: "Is on-page SEO just adding keywords?",
      answer:
        "No. Keywords help identify language and intent, but the work also includes canonical ownership, information architecture, titles, headings, source quality, entity clarity, examples, internal links, media, structured data, accessibility, page experience, and the conversion path.",
    },
    {
      question: "Should every page be long?",
      answer:
        "No. Length should follow the job, evidence, risk, and complexity. A concise definition may be sufficient for one intent, while a regulated service, technical comparison, or enterprise implementation page may need much more depth. We use live SERP research as a diagnostic, not a mandatory word quota.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/content",
      label: "SEO content",
      description:
        "Research, write, review, publish, and maintain search assets.",
    },
    {
      href: "/services/technical-seo",
      label: "Technical SEO",
      description:
        "Resolve index, rendering, template, and performance constraints.",
    },
    {
      href: "/services/seo-audit",
      label: "SEO audit",
      description: "Prioritize page and site-system issues from evidence.",
    },
    {
      href: "/services/ai-search/aeo",
      label: "AEO services",
      description: "Make answers explicit, bounded, and verifiable.",
    },
  ],
});

const automation = createSearchServicePage({
  slug: "seo-automation",
  name: "SEO Automation",
  schemaName: "SEO automation and quality-control services",
  serviceType:
    "SEO automation for crawling, monitoring, QA, internal links, metadata, structured data, content operations, reporting, alerts, and governed AI workflows",
  metaTitle: "SEO Automation With Human QA",
  metaDescription:
    "SEO automation for crawling, monitoring, QA, internal links, metadata, content operations and reporting—with approval, sampling and rollback controls.",
  eyebrow: "SEO automation · Repeatable checks + accountable decisions",
  title: "Automate repetition.",
  titleAccent: "Keep judgment accountable.",
  definition:
    "SEO automation uses code, APIs, workflows, templates, and controlled AI assistance to collect data, identify repeated conditions, prepare or apply low-risk changes, run quality checks, and alert owners at a scale manual work cannot sustain.",
  bestFit:
    "Organizations with recurring SEO work, reliable source data, clear decision rules, implementation access, and owners who can approve exceptions, monitor releases, and reverse harmful changes.",
  heroChecks: [
    "Automate high-volume, rule-based collection and QA before generation",
    "Human approval for claims, strategy, high-risk URLs, and consequential releases",
    "Sampling, test environments, logs, alerts, rate limits, and rollback plans",
    "Measure time saved, defects prevented, search quality, AI visibility, and commercial outcomes",
  ],
  examples: [
    "how to automate SEO checks across thousands of pages",
    "SEO automation service for a product catalog",
    "AI-generated metadata with human approval",
    "automated internal linking quality controls",
  ],
  pageAssets: [
    "template-driven service, product, category, location, and integration systems",
    "automated briefs, metadata suggestions, internal-link opportunities, and refresh queues",
    "crawl monitors, release checks, change detection, anomaly alerts, and QA dashboards",
    "experiment logs, data dictionaries, rule documentation, and exception reports",
    "source-of-truth entity, product, organization, policy, and ownership records",
  ],
  technicalFocus:
    "A workflow audit of data sources, APIs, crawlers, rendering, CMS, deployment, analytics, permissions, rate limits, error handling, security, privacy, monitoring, and rollback capability.",
  contentFocus:
    "Controlled assistance for inventories, clustering, briefs, metadata, internal links, structured fields, refresh detection, and QA—with approved sources, fact validation, editorial review, and page-level ownership.",
  authorityFocus:
    "Automation may discover prospects, mentions, lost links, source gaps, and expert opportunities, but editorial relevance, relationships, disclosure, pitch quality, and reputational judgment remain human responsibilities.",
  operationsFocus:
    "Risk tiers, test cases, sampling, approvals, audit logs, secrets management, permissions, dry runs, canary releases, exception queues, alerts, rollback, and named ownership for each workflow.",
  measurementFocus:
    "Time and cost saved, coverage, false positives, reviewer overrides, defects prevented or introduced, release velocity, search and AI visibility, conversion effects, and incident recovery.",
  boundary:
    "Automation scales the quality of its rules and inputs—including their mistakes. No workflow should mass-publish unverified claims, create doorway pages, manipulate links, expose sensitive data, or make irreversible changes without appropriate controls.",
  sources: [
    googleSources.javascript,
    googleSources.spam,
    googleSources.essentials,
    googleSources.ai,
    googleSources.sitemaps,
  ],
  customFaqs: [
    {
      question: "Which SEO tasks are safest to automate first?",
      answer:
        "Start with read-only collection and checks: crawling, status monitoring, change detection, sitemap comparison, metadata and schema validation, orphan detection, internal-link suggestions, anomaly alerts, and reporting preparation. Automating production changes should follow only after rules and review accuracy are proven.",
    },
    {
      question: "Can generative AI publish SEO pages automatically?",
      answer:
        "It can generate drafts, but unattended publishing creates factual, legal, brand, duplication, and search-quality risk. High-scale content needs approved source data, clear page value, expert and editorial review, duplicate-intent controls, validation, staged release, monitoring, and a removal or rollback process.",
    },
  ],
  relatedLinks: [
    {
      href: "/services/enterprise-seo",
      label: "Enterprise SEO",
      description: "Embed automation inside governance and release systems.",
    },
    {
      href: "/services/technical-seo",
      label: "Technical SEO",
      description: "Define the technical rules and validation conditions.",
    },
    {
      href: "/services/content",
      label: "SEO content",
      description: "Govern expert review, claims, briefs, and refreshes.",
    },
    {
      href: "/services/analytics/automated-technical-reporting",
      label: "Automated reporting",
      description: "Turn repeatable checks into decision-ready monitoring.",
    },
  ],
});

export const scaleServiceLeadPages = {
  enterprise,
  international,
  linkBuilding,
  offPage,
  onPage,
  automation,
} as const satisfies Record<string, IndustryLeadPageData>;
