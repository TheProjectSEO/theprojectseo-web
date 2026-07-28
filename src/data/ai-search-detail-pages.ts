import {
  sharedIndustryEvidence,
  type IndustryLeadPageData,
} from '@/data/industry-lead-pages'

type AiSearchDetailSpec = {
  slug: string
  name: string
  schemaName: string
  serviceType: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  titleAccent: string
  definition: string
  bestFit: string
  heroChecks: string[]
  platforms: string[]
  mechanic: string
  technicalControl: string
  boundary: string
  promptExamples: [string, string, string, string]
  assetExamples: [string, string, string, string]
  platformWork: [string, string, string, string]
  measurementNuance: string
  sources: Array<{ label: string; url: string; description: string }>
  faqs: Array<{ question: string; answer: string }>
  relatedLinks: Array<{ href: string; label: string; description: string }>
}

const sharedSources = {
  googleAi: {
    label: 'Google Search Central: AI features and your website',
    url: 'https://developers.google.com/search/docs/appearance/ai-features',
    description:
      'Google’s requirements, controls, and measurement guidance for AI Overviews and AI Mode.',
  },
  searchEssentials: {
    label: 'Google Search Essentials',
    url: 'https://developers.google.com/search/docs/essentials',
    description:
      'The technical requirements, spam policies, and core practices that remain foundational to Google Search.',
  },
  structuredData: {
    label: 'Google structured data policies',
    url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies',
    description:
      'Google’s requirement that structured data represent visible, accurate page content.',
  },
  openAiBots: {
    label: 'OpenAI: overview of crawlers',
    url: 'https://platform.openai.com/docs/bots',
    description:
      'OpenAI’s current descriptions of OAI-SearchBot, GPTBot, ChatGPT-User, robots controls, and published IP information.',
  },
  anthropicBots: {
    label: 'Anthropic: web crawler controls',
    url: 'https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler',
    description:
      'Anthropic’s definitions of ClaudeBot, Claude-SearchBot, Claude-User, and the effect of blocking each crawler.',
  },
  perplexityBots: {
    label: 'Perplexity: crawler documentation',
    url: 'https://docs.perplexity.ai/docs/resources/perplexity-crawlers',
    description:
      'Perplexity’s official distinctions between PerplexityBot and Perplexity-User, including access and WAF guidance.',
  },
  schemaOrg: {
    label: 'Schema.org vocabulary',
    url: 'https://schema.org/docs/schemas.html',
    description:
      'The public vocabulary for describing visible organizations, people, products, services, places, and relationships.',
  },
}

function createAiSearchDetailPage(spec: AiSearchDetailSpec): IndustryLeadPageData {
  const primaryCta = `Request a ${spec.name} assessment`

  return {
    slug: spec.slug,
    path: `/services/ai-search/${spec.slug}`,
    parentBreadcrumb: {
      name: 'AI search optimization',
      href: '/services/ai-search',
    },
    name: spec.name,
    schemaName: spec.schemaName,
    serviceType: spec.serviceType,
    schemaAudience:
      'Marketing leaders, founders, SEO teams, content teams, product marketers, and organizations evaluating visibility in Google and AI-assisted search',
    metaTitle: spec.metaTitle,
    metaDescription: spec.metaDescription,
    eyebrow: spec.eyebrow,
    title: spec.title,
    titleAccent: spec.titleAccent,
    directAnswer: `${spec.definition} TheProjectSEO treats this as a search, content, entity, authority, and measurement problem—not a secret prompt hack. We establish a reproducible baseline, verify crawler and index access, improve the pages and third-party evidence that can support an answer, and connect observed visibility to qualified visits, leads, pipeline, or revenue where the data allows.`,
    primaryCta,
    bestFit: spec.bestFit,
    heroChecks: spec.heroChecks,
    journeyTitle: `Where does ${spec.name} enter the customer journey?`,
    journeyLead:
      'AI-assisted discovery is not one keyword list. The same prospect may ask a broad question, request a shortlist, compare alternatives, and verify a provider before visiting a website. A useful program models those decisions and the sources needed to support each one.',
    searchJourneys: [
      {
        stage: 'Understand',
        intent: 'Get a direct, bounded explanation',
        explanation:
          'The researcher asks a factual, educational, or diagnostic question. The best source states the answer clearly, defines its scope, supports material claims, and makes deeper evidence easy to reach.',
        examples: [spec.promptExamples[0], `what is ${spec.name.toLowerCase()} and when is it useful`],
        conversion: 'supporting guide, methodology, evidence page, or relevant service route',
      },
      {
        stage: 'Explore',
        intent: 'Discover approaches and providers',
        explanation:
          'The buyer wants possible methods, tools, categories, or companies. Brand inclusion may depend on owned content, current third-party sources, entity clarity, market context, and the system’s ability to retrieve the web.',
        examples: [spec.promptExamples[1], `companies that provide ${spec.name.toLowerCase()}`],
        conversion: 'qualified visit to a service, comparison, industry, or proof page',
      },
      {
        stage: 'Compare',
        intent: 'Evaluate a shortlist',
        explanation:
          'The user adds constraints such as industry, location, budget, platform, risk, or integration. The answer needs criteria and trade-offs rather than an unsupported list of “best” brands.',
        examples: [spec.promptExamples[2], `compare ${spec.name.toLowerCase()} approaches for a growing company`],
        conversion: 'pricing review, consultation, case evidence, or vendor shortlist',
      },
      {
        stage: 'Validate',
        intent: 'Check a claim before acting',
        explanation:
          'A prospect tests whether the company is credible, suitable, current, and able to deliver. First-party pages and independent sources should agree on material facts such as services, locations, people, proof, and limitations.',
        examples: [spec.promptExamples[3], `is TheProjectSEO suitable for Google and AI search optimization`],
        conversion: 'contact, proposal request, scoped assessment, or sales-qualified opportunity',
      },
    ],
    obstaclesTitle: `Why does ${spec.name} fail to create useful visibility?`,
    obstaclesLead:
      'The common failure is to optimize slogans rather than the retrieval and decision system. A dashboard can show mentions while the cited facts are wrong, the prompts are commercially irrelevant, or the website cannot convert the interest.',
    obstacles: [
      {
        title: 'The prompt set is chosen for flattering reports',
        problem:
          'Broad branded prompts usually return the brand and create an impressive percentage without revealing whether an unbranded buyer would discover, compare, or trust it.',
        response:
          'We version prompts by audience, task, journey stage, market, language, and commercial relevance. Branded diagnostics are separated from unbranded discovery and comparison prompts.',
      },
      {
        title: 'Platform mechanics are reduced to one checklist',
        problem: `${spec.mechanic} Treating every system as the same crawler, index, model, and interface produces confident recommendations that cannot be verified.`,
        response:
          'We document what the platform publishes, what a captured response actually shows, and what remains unknown. Platform-specific controls sit on top of a shared foundation of useful content, technical access, entities, corroboration, and authority.',
      },
      {
        title: 'Schema and answer blocks are sold as shortcuts',
        problem:
          'Structured data can clarify visible facts and direct answers can improve usability, but neither creates missing expertise, third-party corroboration, index eligibility, or guaranteed citations.',
        response:
          'We use the most specific supported markup only when it matches the page, then improve the underlying facts, sources, authorship, architecture, internal links, and experience that the markup describes.',
      },
      {
        title: 'Mentions are reported without business context',
        problem:
          'A brand can appear frequently for low-value prompts or be mentioned inaccurately. It can also gain AI referrals while analytics groups them into incomplete or changing channel labels.',
        response:
          'Reporting preserves raw responses and sources, audits factual accuracy, distinguishes mentions from citations, and connects referral or assisted journeys to commercial outcomes without claiming unsupported causality.',
      },
    ],
    deliverablesTitle: `What is included in ${spec.name} services?`,
    deliverablesLead:
      'The engagement combines a platform-specific research layer with the technical, content, entity, authority, and analytics work required to improve the underlying source system.',
    deliverables: [
      {
        title: 'Prompt, answer, and source baseline',
        description:
          'A reproducible view of how relevant questions are answered now, where the brand appears, which pages or domains are cited, and what the answer gets right or wrong.',
        items: [
          'Prompt set segmented by audience, intent, market, and buying stage',
          'Brand, product, competitor, citation, link, and accuracy capture',
          'Platform, model or interface, location, date, and response conditions',
          'Baseline limitations and rerun protocol',
        ],
      },
      {
        title: 'Technical access and index review',
        description:
          'A review of whether important public content is crawlable, indexable where relevant, rendered in accessible text, internally discoverable, and available through the intended controls.',
        items: [
          spec.technicalControl,
          'Robots, CDN, WAF, status code, canonical, and snippet-control checks',
          'Rendered HTML, navigation, internal links, sitemaps, and performance',
          'Separation of search retrieval, user-requested fetches, and model training controls',
        ],
      },
      {
        title: 'Question and topic architecture',
        description:
          'A page system that owns the questions buyers ask while avoiding hundreds of thin prompt pages or overlapping articles.',
        items: [
          'Problem, category, comparison, validation, support, and branded questions',
          'Canonical query-to-page ownership and consolidation decisions',
          `Priority assets such as ${spec.assetExamples.join(', ')}`,
          'Passage, table, definition, example, limitation, and next-step requirements',
        ],
      },
      {
        title: 'Entity and factual consistency',
        description:
          'Clear, consistent relationships among the organization, people, products, services, locations, expertise, evidence, and independent sources.',
        items: [
          'Entity inventory and conflicting-fact audit',
          'Organization, Person, Service, Product, and other applicable markup',
          'Visible author, reviewer, date, source, and claim ownership',
          'Profiles, listings, publications, reviews, and first-party pages aligned to verified facts',
        ],
      },
      {
        title: 'Source-worthy content and authority',
        description:
          'Pages and external evidence that add something a system can responsibly use: original facts, experience, tools, examples, methods, or current primary-source synthesis.',
        items: [
          spec.platformWork[0],
          spec.platformWork[1],
          spec.platformWork[2],
          spec.platformWork[3],
        ],
      },
      {
        title: 'Monitoring and commercial reporting',
        description:
          'A decision report that turns changing answer observations into technical fixes, content work, authority priorities, and conversion improvements.',
        items: [
          'Mention, citation, source-domain, linked-page, prominence, and accuracy trends',
          'Competitor and topic gaps without combining unlike platforms into a false rank',
          'AI referral, landing-page, lead-quality, pipeline, and revenue cohorts where available',
          'Experiment log, release annotations, uncertainty, and next actions',
        ],
      },
    ],
    aiVisibility: {
      title: `How does ${spec.name} relate to Google and other AI systems?`,
      lead:
        'A platform page needs a narrow operational focus without pretending the rest of search disappears. We build one source foundation, then apply the access, research, and measurement details that differ by product.',
      platforms: spec.platforms,
      boundary: spec.boundary,
      workstreams: [
        {
          title: 'Owned-source eligibility',
          description:
            'Make useful public pages technically accessible, textually clear, internally connected, current, and eligible for the search or retrieval layer relevant to the platform.',
          output: 'access matrix, crawl evidence, rendered-page QA, and prioritized defects',
        },
        {
          title: 'Answer and citation analysis',
          description:
            'Inspect the actual response, cited URLs or source domains, answer claims, missing perspectives, and changes across repeat runs rather than inferring a universal formula.',
          output: 'stored responses, source map, accuracy review, and opportunity notes',
        },
        {
          title: 'Entity and corroboration work',
          description:
            'Align first-party facts with credible independent coverage and remove contradictions that make a brand, offer, person, or location hard to identify confidently.',
          output: 'entity register, fact corrections, source priorities, and appropriate markup',
        },
        {
          title: 'Search-to-conversion integration',
          description:
            'Ensure a person who follows a supporting link or later searches the brand can validate the promise, understand fit, see evidence, and take the right commercial next step.',
          output: 'landing-page improvements, internal journeys, conversion events, and CRM cohort plan',
        },
      ],
    },
    architectureTitle: `Which pages support a ${spec.name} program?`,
    architectureLead:
      'The right architecture reflects customer decisions and evidence types. It does not create a new URL for every prompt variation.',
    architecture: [
      {
        pageType: 'Definitive service and product pages',
        intent: 'What does this company provide, for whom, and under what conditions?',
        examples: spec.assetExamples[0],
        signal: 'clear offer, audience, features, facts, limitations, evidence, and conversion path',
      },
      {
        pageType: 'Question and task resources',
        intent: 'Can this source explain or help me complete the job?',
        examples: spec.assetExamples[1],
        signal: 'direct answer, method, example, source, update date, and deeper supporting detail',
      },
      {
        pageType: 'Comparison and evaluation',
        intent: 'How should I choose among approaches or providers?',
        examples: spec.assetExamples[2],
        signal: 'declared criteria, balanced trade-offs, current facts, and transparent commercial relationship',
      },
      {
        pageType: 'Evidence and research',
        intent: 'What supports this claim?',
        examples: spec.assetExamples[3],
        signal: 'method, sample or scope, date, definitions, raw context, limitations, and accountable author',
      },
      {
        pageType: 'Entity and trust surfaces',
        intent: 'Who is responsible and can the facts be corroborated?',
        examples: 'about, people, author, contact, location, policy, profile, publication, and review pages',
        signal: 'consistent names, roles, credentials, locations, ownership, policies, and independent references',
      },
    ],
    processTitle: `How does a ${spec.name} engagement work?`,
    processLead:
      'The sequence protects against optimizing anecdotes. We establish the commercial questions and measurement conditions first, repair the source system, then observe what changes.',
    process: [
      {
        number: '01',
        cadence: 'Align',
        title: 'Define buyers, markets, and decisions',
        description:
          'We interview stakeholders, review customer and sales language, identify high-value decisions, and agree on what a qualified outcome means before selecting prompts.',
        output: 'audience map, journey, commercial questions, exclusions, and success definitions',
      },
      {
        number: '02',
        cadence: 'Baseline',
        title: 'Capture prompts, answers, sources, and access',
        description:
          'We run the versioned prompt set, store answer conditions, inspect citations and linked pages, crawl the site, and document relevant robots, CDN, WAF, index, and rendering behavior.',
        output: 'baseline dataset, access matrix, source gap, accuracy log, and technical backlog',
      },
      {
        number: '03',
        cadence: 'Design',
        title: 'Map questions to pages and evidence',
        description:
          'Each priority question receives a canonical page owner, source requirements, subject expert, external corroboration need, internal links, and a useful next action.',
        output: 'content architecture, briefs, entity map, authority plan, and specifications',
      },
      {
        number: '04',
        cadence: 'Implement',
        title: 'Improve the highest-confidence source cohort',
        description:
          'Technical fixes, page rewrites, new evidence, structured data, internal links, profiles, and legitimate outreach are released as an annotated cohort.',
        output: 'implemented cohort, QA evidence, release notes, and measurement annotation',
      },
      {
        number: '05',
        cadence: 'Observe',
        title: 'Rerun under comparable conditions',
        description:
          'We repeat the prompt set, preserve raw outputs, compare source and answer changes, inspect Search and analytics data, and avoid converting correlation into a causal claim.',
        output: 'comparative response set, search trend, referral cohort, and finding log',
      },
      {
        number: '06',
        cadence: 'Iterate',
        title: 'Scale what improves customer discovery',
        description:
          'Work expands only when the evidence supports it. Weak assets are revised, merged, repositioned, or stopped; useful patterns become templates and governance rules.',
        output: 'next roadmap, repeatable standards, refreshed priorities, and stakeholder report',
      },
    ],
    measurementTitle: `How should ${spec.name} performance be measured?`,
    measurementLead:
      'The report should preserve platform-specific observations and connect them to the broader search and revenue system. A single blended “AI visibility score” can hide prompt bias and changing product behavior.',
    measurementBoundary: `${spec.measurementNuance} Answer outputs vary by prompt wording, interface, market, model, time, personalization, and web access. Movement after an implementation is evidence for investigation, not automatic proof that one tactic caused the change.`,
    measurement: [
      {
        name: 'Answer presence',
        definition:
          'The proportion of a fixed, commercially relevant prompt set in which the brand, product, person, or approved fact appears.',
        source: 'stored responses with prompt, platform, market, date, interface, and run conditions',
      },
      {
        name: 'Citation and source share',
        definition:
          'Linked citations, cited domains, cited pages, prominence, and competitor inclusion, reported separately from unlinked brand mentions.',
        source: 'captured source lists, destination URLs, screenshots or exports, and repeat runs',
      },
      {
        name: 'Factual accuracy',
        definition:
          'Whether material claims about the organization, offer, people, location, price, suitability, or evidence are correct, current, and sufficiently qualified.',
        source: 'approved fact register, response audit, source review, and correction log',
      },
      {
        name: 'Search and referral behavior',
        definition:
          'Changes in relevant Google and Bing demand, branded discovery, AI-referred sessions, landing behavior, and assisted journeys around the implemented cohort.',
        source: 'Search Console, Bing data, analytics, server or referral data, and release annotations',
      },
      {
        name: 'Commercial outcome',
        definition:
          'Qualified enquiries, trials, opportunities, pipeline, orders, or revenue connected to relevant landing and assisted cohorts where tracking and consent permit.',
        source: 'analytics, CRM, commerce or product data, attribution notes, and stakeholder validation',
      },
    ],
    evidence: {
      title: `What proof belongs on a ${spec.name} page?`,
      lead:
        'The final evidence should show the prompt conditions, cited sources, search trend, implementation date, and commercial context. The spaces remain intentionally empty until approved screenshots can be added.',
      ...sharedIndustryEvidence,
      slots: [
        {
          label: `${spec.name} · prompt and citation cohort`,
          description:
            'Add an approved before-and-after response export or screenshot with the exact prompt set, platform, market, dates, sample size, citations, and accuracy notes.',
        },
        {
          label: `${spec.name} · search and commercial trend`,
          description:
            'Add an approved Search Console, Ahrefs, analytics, or CRM view with date range, comparison period, implemented URL cohort, and material tracking or campaign changes.',
        },
      ],
    },
    fitTitle: `Is ${spec.name} the right next investment?`,
    fitLead:
      'The service is valuable when the audience uses the platform for meaningful research and the organization can improve the sources, facts, product experience, and authority that shape discovery.',
    goodFit: [
      'Customers ask research, comparison, recommendation, or validation questions online',
      'The site has a legitimate offer and access to subject-matter experts',
      'Technical, content, communications, product, and analytics owners can collaborate',
      'The team accepts transparent testing without guaranteed citations or fixed timelines',
    ],
    notFit: [
      'You need a guaranteed mention, citation, ranking, or revenue number by a fixed date.',
      'The plan is to mass-produce thin prompt pages without expert or source review.',
      'No one can approve facts, implement site changes, or supply commercial context.',
      'The only objective is a larger dashboard score for branded prompts.',
    ],
    sources: spec.sources,
    faqTitle: `${spec.name} questions, answered plainly`,
    faqs: [
      {
        question: `What is ${spec.name}?`,
        answer: spec.definition,
      },
      {
        question: `Is ${spec.name} separate from traditional SEO?`,
        answer:
          'It has platform-specific research and measurement, but it is not independent of SEO. Crawl access, index eligibility where applicable, clear information architecture, useful content, internal links, recognized entities, reputable external references, and strong landing experiences support both classic and AI-assisted discovery.',
      },
      {
        question: `Can TheProjectSEO guarantee ${spec.name} mentions or citations?`,
        answer:
          'No. TheProjectSEO does not guarantee inclusion, citations, rankings, or a fixed result date because answer systems and search features are not controlled by an agency. We guarantee a documented process: reproducible baselines, approved implementations, transparent observations, and reporting that preserves limitations.',
      },
      {
        question: `How long does ${spec.name} take?`,
        answer:
          'There is no universal timetable. Discovery can change after a crawl, index update, source change, product release, model or interface update, or a shift in the competitive source set. We establish the relevant cycles during the audit and report observed movement by implementation cohort instead of publishing a fabricated “typical” range.',
      },
      {
        question: `How is ${spec.name} measured?`,
        answer:
          'We use a fixed and versioned prompt set, save response conditions, separate mentions from linked citations, audit answer accuracy, track cited domains and pages, and compare Google, Bing, referral, conversion, and CRM cohorts where available. Each platform remains separate unless the methodology supports a comparison.',
      },
      {
        question: 'Does adding FAQ schema or an llms.txt file guarantee AI visibility?',
        answer:
          'No. Structured data should describe visible content using supported types, and no markup can guarantee selection. Google explicitly says no special schema or AI text file is required for AI Overviews or AI Mode. An llms.txt file may document preferred resources for systems that choose to use it, but it does not replace crawl access, indexability, useful pages, or authority.',
      },
      ...spec.faqs,
    ],
    relatedLinks: spec.relatedLinks,
    ctaEyebrow: `${spec.name} · Research before promises`,
    ctaTitle: `Find out where ${spec.name} can create qualified visibility.`,
    ctaLead:
      'Share the products or services you sell, priority markets, customer questions, competitors, current measurement, and any approved examples. We will identify the highest-confidence technical, content, entity, authority, and reporting work.',
    ctaBenefits: [
      'Live answer, citation, competitor, and source baseline',
      'Technical access, content architecture, entity, and authority priorities',
      'Measurement plan tied to search behavior and qualified commercial outcomes',
    ],
  }
}

const aeo = createAiSearchDetailPage({
  slug: 'aeo',
  name: 'Answer Engine Optimization',
  schemaName: 'Answer Engine Optimization (AEO) services',
  serviceType:
    'Answer Engine Optimization for direct answers, featured snippets, Google AI features, AI assistants, source citations, entities, and conversion measurement',
  metaTitle: 'Answer Engine Optimization (AEO) Agency',
  metaDescription:
    'AEO services for useful answers, source citations and qualified discovery across Google, Bing, ChatGPT, Gemini, Claude and Perplexity—without guarantees.',
  eyebrow: 'AEO agency · Answers + sources + commercial intent',
  title: 'Become a useful answer.',
  titleAccent: 'Earn the next step.',
  definition:
    'Answer Engine Optimization (AEO) is the practice of making accurate, useful answers easy to retrieve, understand, verify, and connect to a responsible source across search features and AI-assisted interfaces.',
  bestFit:
    'Organizations with recurring customer questions, credible expertise, reviewable facts, and a need to improve discovery in both classic search and generated answers.',
  heroChecks: [
    'Question research grounded in sales, support, SERPs, prompts, and customer decisions',
    'Direct answers with depth, examples, sources, exceptions, and clear page ownership',
    'Google, Bing, featured snippets, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity',
    'Mentions, citations, accuracy, referrals, leads, and assisted outcomes kept distinct',
  ],
  platforms: ['Google Search', 'Bing', 'AI Overviews', 'ChatGPT', 'Gemini', 'Claude', 'Perplexity'],
  mechanic:
    'AEO can include classic result features, search-grounded summaries, and assistants that may or may not retrieve the live web.',
  technicalControl:
    'Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot, and user-requested fetch access as relevant',
  boundary:
    'A concise answer is not automatically a cited answer, and a cited answer is not automatically a commercial visit. We preserve depth and verification instead of writing a site as hundreds of context-free FAQ snippets.',
  promptExamples: [
    'what should an SEO audit include',
    'which agencies optimize for Google and AI search',
    'AEO agency for a technical B2B company',
    'does this agency publish verifiable SEO evidence',
  ],
  assetExamples: [
    'service and capability pages',
    'definitions, how-to guides, calculators, and troubleshooting resources',
    'provider criteria, alternatives, comparisons, and pricing explanations',
    'original research, methods, case evidence, and source libraries',
  ],
  platformWork: [
    'Direct answers connected to complete explanations and primary evidence',
    'Question clusters consolidated into authoritative page systems',
    'Featured-snippet and generated-answer source analysis',
    'Independent corroboration and digital PR tied to real expertise',
  ],
  measurementNuance:
    'AEO spans answer surfaces with different retrieval and reporting systems, so a featured snippet, an AI Overview link, an unlinked ChatGPT mention, and a Perplexity citation must not be counted as the same event.',
  sources: [
    sharedSources.googleAi,
    sharedSources.searchEssentials,
    sharedSources.structuredData,
    sharedSources.openAiBots,
    sharedSources.anthropicBots,
    sharedSources.perplexityBots,
  ],
  faqs: [
    {
      question: 'What is the difference between AEO and GEO?',
      answer:
        'The terms overlap. AEO emphasizes becoming a useful direct answer, while GEO emphasizes visibility and citations within generated responses. In practice, both depend on technical access, content quality, entities, sources, authority, and measurement. We use the label that clarifies the client’s actual problem rather than selling two duplicate retainers.',
    },
    {
      question: 'Should every page use a question-and-answer format?',
      answer:
        'No. A service page, comparison, product specification, methodology, case study, and research report have different jobs. Questions are useful when they match customer language, but forcing every heading into a question can make the page repetitive. The answer architecture should fit the task and page type.',
    },
  ],
  relatedLinks: [
    { href: '/services/ai-search/geo', label: 'GEO services', description: 'Plan visibility and citations in generated answers.' },
    { href: '/services/ai-search/entity-seo', label: 'Entity SEO', description: 'Clarify organizations, people, products, and relationships.' },
    { href: '/services/content', label: 'SEO content', description: 'Build expert-led search assets and governance.' },
    { href: '/services/ai-search/llm-visibility-tracking', label: 'LLM tracking', description: 'Measure prompts, mentions, sources, and accuracy.' },
  ],
})

const geo = createAiSearchDetailPage({
  slug: 'geo',
  name: 'Generative Engine Optimization',
  schemaName: 'Generative Engine Optimization (GEO) services',
  serviceType:
    'Generative Engine Optimization for retrieval, citations, brand representation, source authority, Google and AI-assisted search',
  metaTitle: 'Generative Engine Optimization (GEO) Agency',
  metaDescription:
    'GEO services for brand visibility, citations and accurate representation in Google AI features, ChatGPT, Gemini, Claude and Perplexity.',
  eyebrow: 'GEO agency · Retrieval + citations + authority',
  title: 'Be present in generated research.',
  titleAccent: 'Stay verifiable.',
  definition:
    'Generative Engine Optimization (GEO) improves the probability that a brand, page, or verified fact is retrieved, represented accurately, and cited when a generative system assembles an answer from available knowledge and sources.',
  bestFit:
    'Brands whose customers use generated answers to define problems, build shortlists, compare providers, or validate claims before contacting sales.',
  heroChecks: [
    'Prompt and source research by audience, market, journey, and commercial decision',
    'Technical SEO, source-worthy content, entity clarity, authority, and digital PR',
    'Google AI Overviews and AI Mode, ChatGPT, Gemini, Claude, and Perplexity',
    'Transparent mention, citation, accuracy, referral, and business-outcome reporting',
  ],
  platforms: ['Google AI Mode', 'AI Overviews', 'ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'Bing'],
  mechanic:
    'Generative systems may synthesize model knowledge, search results, databases, and user-provided context; the mixture and cited source set can change between interfaces and runs.',
  technicalControl:
    'Search and AI crawler access matrix, including training controls kept separate from search and user-requested retrieval',
  boundary:
    'There is no universal “GEO ranking factor” list. We distinguish published platform controls from observed source patterns and run controlled cohorts rather than treating correlation studies as platform documentation.',
  promptExamples: [
    'how should a company measure AI search visibility',
    'recommend an AI-native SEO agency',
    'GEO agency for a regulated financial brand',
    'what evidence supports this SEO provider',
  ],
  assetExamples: [
    'service, product, industry, location, and solution pages',
    'topic guides, glossaries, workflows, tools, and technical documentation',
    'comparison criteria, alternatives, implementation, pricing, and risk pages',
    'first-party data, expert commentary, methods, case evidence, and research',
  ],
  platformWork: [
    'Source-gap analysis across owned and independent domains',
    'Original evidence, expert commentary, tools, and reference assets',
    'Entity-consistent service, people, profile, and location information',
    'Relevant outreach, publications, reviews, partnerships, and digital PR',
  ],
  measurementNuance:
    'GEO studies and vendor tools use different prompt sets, markets, models, and definitions of visibility. We keep the raw observations available and do not present a blended proprietary score as an objective market rank.',
  sources: [
    {
      label: 'GEO research paper',
      url: 'https://arxiv.org/abs/2311.09735',
      description:
        'The research paper that introduced the term and tested visibility interventions in a defined experimental setting.',
    },
    sharedSources.googleAi,
    sharedSources.openAiBots,
    sharedSources.anthropicBots,
    sharedSources.perplexityBots,
    sharedSources.structuredData,
  ],
  faqs: [
    {
      question: 'Is GEO just SEO with a new name?',
      answer:
        'The implementation overlaps heavily with SEO, content, digital PR, and entity work, but the research unit differs: generated answers, prompts, cited sources, and factual representation are measured directly. A serious GEO program should add that layer without discarding the Google and Bing foundation that often supplies discovery and evidence.',
    },
    {
      question: 'Can a company influence what AI systems say about it?',
      answer:
        'A company can improve accessible first-party facts, publish genuinely useful evidence, correct conflicting profiles, earn independent coverage, and make its expertise easier to verify. It cannot control every answer, force a model to use a page, or guarantee that a system will adopt the preferred wording.',
    },
  ],
  relatedLinks: [
    { href: '/services/ai-search/aeo', label: 'AEO services', description: 'Structure useful direct answers and supporting evidence.' },
    { href: '/services/ai-search/chatgpt-seo', label: 'ChatGPT SEO', description: 'Audit OpenAI crawler access, sources, and responses.' },
    { href: '/services/ai-search/google-ai-overviews-optimization', label: 'Google AI Overviews', description: 'Apply Google’s published Search requirements.' },
    { href: '/services/ai-search/llm-visibility-tracking', label: 'Visibility tracking', description: 'Build a reproducible prompt and citation dataset.' },
  ],
})

const chatgpt = createAiSearchDetailPage({
  slug: 'chatgpt-seo',
  name: 'ChatGPT SEO',
  schemaName: 'ChatGPT Search SEO and brand visibility services',
  serviceType:
    'ChatGPT Search optimization, OAI-SearchBot access, source analysis, entity consistency, content and AI visibility measurement',
  metaTitle: 'ChatGPT SEO Agency for Search & Citations',
  metaDescription:
    'ChatGPT SEO services for OAI-SearchBot access, useful sources, accurate brand representation, citations and qualified referral measurement.',
  eyebrow: 'ChatGPT SEO agency · Search access + source quality',
  title: 'Make your brand easier to find.',
  titleAccent: 'Give ChatGPT evidence.',
  definition:
    'ChatGPT SEO is the platform-specific practice of improving a site’s eligibility and usefulness for ChatGPT Search and user-directed retrieval, while measuring how the brand and its sources appear for relevant prompts.',
  bestFit:
    'Companies whose prospects use ChatGPT to research problems, compare products or providers, validate a shortlist, or ask follow-up questions before a commercial visit.',
  heroChecks: [
    'OAI-SearchBot, GPTBot, and ChatGPT-User treated as different controls',
    'Prompt, answer, citation, linked-page, entity, and accuracy baseline',
    'Source-worthy pages, independent corroboration, and conversion journeys',
    'ChatGPT observations reported alongside Google, Bing, analytics, and CRM data',
  ],
  platforms: ['ChatGPT Search', 'ChatGPT', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'Bing', 'Google'],
  mechanic:
    'OpenAI documents separate user agents for search, user-requested page visits, and potential model training; allowing one does not mean the others perform the same job.',
  technicalControl:
    'OAI-SearchBot, ChatGPT-User, and GPTBot directives reviewed separately against OpenAI’s current documentation',
  boundary:
    'Not every ChatGPT response uses live web search or displays citations. We record whether retrieval occurred and never claim that changing GPTBot training access will create a prompt-level mention.',
  promptExamples: [
    'how do I choose an SEO agency for AI search',
    'recommend SEO agencies in India or the Philippines',
    'compare AI-native SEO agency approaches',
    'what results has TheProjectSEO documented',
  ],
  assetExamples: [
    'clear service, product, location, about, and contact pages',
    'answer-led guides, documentation, tools, and troubleshooting pages',
    'transparent comparisons, provider criteria, pricing, and implementation',
    'original datasets, annotated screenshots, methods, and case evidence',
  ],
  platformWork: [
    'OAI-SearchBot access and cited-destination QA',
    'Pages that answer follow-up questions without losing commercial context',
    'Brand and offer facts aligned across owned and independent sources',
    'ChatGPT Search referral landing pages instrumented for qualified actions',
  ],
  measurementNuance:
    'A ChatGPT conversation without web search, a Search response with linked sources, and a ChatGPT-User page request are different observations. The report records the interface and retrieval conditions available at capture time.',
  sources: [
    sharedSources.openAiBots,
    sharedSources.searchEssentials,
    sharedSources.structuredData,
    sharedSources.anthropicBots,
    sharedSources.perplexityBots,
  ],
  faqs: [
    {
      question: 'Should a website allow GPTBot to appear in ChatGPT Search?',
      answer:
        'OpenAI describes GPTBot as a control related to potential model training and OAI-SearchBot as the crawler used for Search. They are separate decisions. A publisher can evaluate training policy independently from search discovery and should review OpenAI’s current documentation before changing robots rules.',
    },
    {
      question: 'Does ranking in Bing guarantee a ChatGPT citation?',
      answer:
        'No. Strong search visibility and technically accessible pages can support discoverability, but OpenAI does not publish a rule that every ChatGPT Search citation comes from a particular Bing ranking. We inspect the actual cited sources and optimize the broader search and source system without inventing a deterministic dependency.',
    },
  ],
  relatedLinks: [
    { href: '/services/ai-search/geo', label: 'GEO services', description: 'Improve retrieval, citations, and brand representation broadly.' },
    { href: '/services/ai-search/perplexity-seo', label: 'Perplexity SEO', description: 'Work with Perplexity’s published crawler controls.' },
    { href: '/services/technical-seo', label: 'Technical SEO', description: 'Repair crawl, rendering, index, and template foundations.' },
    { href: '/services/ai-search/llm-visibility-tracking', label: 'LLM tracking', description: 'Version prompts and preserve answer conditions.' },
  ],
})

const claude = createAiSearchDetailPage({
  slug: 'claude-seo',
  name: 'Claude SEO',
  schemaName: 'Claude web search visibility and source optimization services',
  serviceType:
    'Claude-SearchBot and Claude-User access review, source optimization, brand accuracy, AI search monitoring, and conversion measurement',
  metaTitle: 'Claude SEO for Web Search Visibility',
  metaDescription:
    'Claude SEO services for Claude-SearchBot and Claude-User access, useful web sources, accurate brand answers and transparent prompt monitoring.',
  eyebrow: 'Claude SEO · Search access + factual representation',
  title: 'Help Claude retrieve better facts.',
  titleAccent: 'Keep claims accurate.',
  definition:
    'Claude SEO is the focused work of making approved public information accessible and useful for Claude’s web-search and user-directed retrieval experiences, then monitoring whether relevant responses represent the brand accurately.',
  bestFit:
    'Organizations whose technical, research, procurement, or knowledge-work audiences use Claude to investigate complex topics, compare approaches, or validate detailed claims.',
  heroChecks: [
    'Claude-SearchBot, Claude-User, and ClaudeBot controls kept separate',
    'Complex research prompts, source inspection, and factual accuracy review',
    'Technical documentation, expert content, entity facts, and independent references',
    'No claims about forcing training inclusion or a universal Claude ranking system',
  ],
  platforms: ['Claude', 'Claude web search', 'Claude-SearchBot', 'Claude-User', 'ClaudeBot', 'Google', 'Bing'],
  mechanic:
    'Anthropic publishes separate agents for model-training crawl, search-result quality, and user-directed retrieval, so robots decisions have different effects and policy implications.',
  technicalControl:
    'Claude-SearchBot, Claude-User, and ClaudeBot access evaluated separately using Anthropic’s published descriptions',
  boundary:
    'A site cannot submit a page into Claude’s model knowledge or guarantee that a response will search the web. We optimize accessible sources and measure observable web-search behavior without confusing it with model training.',
  promptExamples: [
    'explain how entity SEO supports AI search',
    'find agencies with an evidence-led GEO process',
    'compare technical SEO and AI search services',
    'verify the methodology and claims of this agency',
  ],
  assetExamples: [
    'technical services, documentation, methods, and implementation pages',
    'deep guides, definitions, worked examples, and troubleshooting resources',
    'approach comparisons, requirements, risks, and vendor evaluation',
    'research methods, datasets, changelogs, case evidence, and expert reviews',
  ],
  platformWork: [
    'Claude-SearchBot and user-requested retrieval access validation',
    'Technically complete explanations with explicit assumptions and limitations',
    'Current documentation, changelogs, methods, and accountable expert review',
    'Response accuracy monitoring for complex and follow-up prompt sequences',
  ],
  measurementNuance:
    'Claude may answer from model knowledge, retrieve the web, use user-provided files, or combine tools. Only observations with captured conditions belong in a platform visibility trend.',
  sources: [
    sharedSources.anthropicBots,
    sharedSources.searchEssentials,
    sharedSources.structuredData,
    sharedSources.openAiBots,
    sharedSources.perplexityBots,
  ],
  faqs: [
    {
      question: 'What is the difference between ClaudeBot and Claude-SearchBot?',
      answer:
        'Anthropic describes ClaudeBot as a crawler used for model development and Claude-SearchBot as a crawler used to improve search-result quality. Claude-User covers user-initiated page access. Because the purposes differ, each robots decision should be reviewed independently.',
    },
    {
      question: 'Can Claude SEO make a page part of Claude’s training data?',
      answer:
        'No ethical agency can promise that. Training datasets and model-update decisions are controlled by Anthropic, and a crawl permission is not a guarantee of collection, training use, memorization, or a later answer. The service focuses on public source accessibility and observable search responses.',
    },
  ],
  relatedLinks: [
    { href: '/services/ai-search/chatgpt-seo', label: 'ChatGPT SEO', description: 'Review OpenAI-specific search and crawler controls.' },
    { href: '/services/ai-search/entity-seo', label: 'Entity SEO', description: 'Align factual identity across owned and external sources.' },
    { href: '/services/content', label: 'SEO content', description: 'Create expert-led technical and commercial sources.' },
    { href: '/services/ai-search/llm-visibility-tracking', label: 'LLM tracking', description: 'Measure response conditions, citations, and accuracy.' },
  ],
})

const gemini = createAiSearchDetailPage({
  slug: 'gemini-seo',
  name: 'Gemini SEO',
  schemaName: 'Gemini and Google AI search visibility services',
  serviceType:
    'Gemini brand visibility, Google Search eligibility, source optimization, entity consistency, prompt monitoring, and commercial measurement',
  metaTitle: 'Gemini SEO for Google & AI Visibility',
  metaDescription:
    'Gemini SEO services grounded in Google Search eligibility, useful sources, entity accuracy and transparent prompt monitoring—without special-schema myths.',
  eyebrow: 'Gemini SEO · Google foundation + AI answer research',
  title: 'Build sources Google can understand.',
  titleAccent: 'Measure Gemini separately.',
  definition:
    'Gemini SEO improves the web sources, entity facts, and search foundation that may support discovery in Gemini experiences, while measuring Gemini answers as a distinct product rather than assuming they duplicate Google Search.',
  bestFit:
    'Brands that already care about Google visibility and need a defensible way to study how Gemini represents their products, services, expertise, and market category.',
  heroChecks: [
    'Google Search fundamentals retained as the technical and content foundation',
    'Gemini prompts, responses, sources, accuracy, and market conditions recorded separately',
    'No fabricated Gemini-specific schema, crawler, or guaranteed citation recipe',
    'Service, product, entity, evidence, authority, and conversion work connected',
  ],
  platforms: ['Gemini', 'Google Search', 'AI Overviews', 'AI Mode', 'Googlebot', 'Bing', 'ChatGPT'],
  mechanic:
    'Gemini and Google Search AI features can use different interfaces, models, techniques, and source displays; an observation in one surface should not be copied into the other’s report.',
  technicalControl:
    'Googlebot crawl, index, snippet eligibility, preview controls, rendered content, and structured-data consistency',
  boundary:
    'Google publishes requirements for AI features in Search, but it does not publish a special Gemini website ranking checklist. We use Search fundamentals where applicable and label Gemini response analysis as observation.',
  promptExamples: [
    'what does an AI-native SEO agency do',
    'find SEO agencies for India and the Philippines',
    'compare GEO, AEO, and traditional SEO',
    'is this SEO agency transparent about measurement',
  ],
  assetExamples: [
    'service, product, industry, location, organization, and people pages',
    'definitions, task guides, tools, examples, and support resources',
    'comparison criteria, alternatives, fit, pricing, and methodology',
    'first-party data, case evidence, source notes, and expert research',
  ],
  platformWork: [
    'Google-indexable pages with clear visible facts and useful supporting media',
    'Gemini prompt and source observations stored apart from AI Overview data',
    'Entity-consistent Organization, Person, Service, and Product information',
    'Google Business Profile and Merchant Center accuracy where applicable',
  ],
  measurementNuance:
    'Gemini answer observations, Google AI Overview impressions, and classic Search performance are separate datasets. We may analyze their relationship, but we do not merge them into one pseudo-ranking.',
  sources: [
    sharedSources.googleAi,
    sharedSources.searchEssentials,
    sharedSources.structuredData,
    sharedSources.schemaOrg,
    sharedSources.openAiBots,
  ],
  faqs: [
    {
      question: 'Is there a special schema type for Gemini SEO?',
      answer:
        'No published special Gemini schema exists. Use relevant Schema.org types that accurately describe visible page content, follow Google’s structured-data policies, and avoid marking up claims or entities that users cannot verify on the page.',
    },
    {
      question: 'Is Gemini visibility the same as Google AI Overviews visibility?',
      answer:
        'No. Both are Google products, but their interfaces, response conditions, and source displays differ. Google also says AI Overviews and AI Mode can use different models and techniques. A Gemini monitoring result should not be presented as an AI Overview result.',
    },
  ],
  relatedLinks: [
    { href: '/services/ai-search/google-ai-overviews-optimization', label: 'Google AI Overviews', description: 'Follow Google’s published Search eligibility guidance.' },
    { href: '/services/ai-search/entity-seo', label: 'Entity SEO', description: 'Clarify facts and relationships across the web.' },
    { href: '/services/seo', label: 'SEO services', description: 'Strengthen the full Google and Bing search system.' },
    { href: '/services/ai-search/llm-visibility-tracking', label: 'LLM tracking', description: 'Keep Gemini observations methodologically separate.' },
  ],
})

const entity = createAiSearchDetailPage({
  slug: 'entity-seo',
  name: 'Entity SEO',
  schemaName: 'Entity SEO and knowledge graph optimization services',
  serviceType:
    'Entity SEO for organizations, people, products, services, locations, structured data, factual consistency, knowledge panels, and AI search',
  metaTitle: 'Entity SEO & Knowledge Graph Services',
  metaDescription:
    'Entity SEO services to clarify organizations, people, products, services and locations across visible pages, structured data and credible sources.',
  eyebrow: 'Entity SEO · Facts + relationships + corroboration',
  title: 'Make the right entity unmistakable.',
  titleAccent: 'Keep every fact defensible.',
  definition:
    'Entity SEO makes a real organization, person, product, service, place, or concept easier to identify by clarifying its attributes and relationships consistently across visible pages, structured data, profiles, and credible external sources.',
  bestFit:
    'Organizations with ambiguous names, conflicting web facts, multiple products or locations, expert-led content, knowledge-panel issues, or AI answers that confuse the brand.',
  heroChecks: [
    'Entity inventory covering organizations, brands, people, products, services, and places',
    'Visible facts aligned with appropriate Schema.org types and identifiers',
    'Conflicting profiles, listings, author information, and third-party references corrected',
    'Google, Bing, knowledge surfaces, and AI-answer accuracy measured without markup myths',
  ],
  platforms: ['Google Search', 'Google Knowledge Graph', 'Bing', 'ChatGPT', 'Gemini', 'Claude', 'Perplexity'],
  mechanic:
    'Search and AI systems infer entities from names, attributes, relationships, context, and corroborating sources; a sameAs array cannot repair inconsistent or unsupported facts by itself.',
  technicalControl:
    'Rendered visible facts, canonical entity pages, supported structured data, stable identifiers, internal links, and profile consistency',
  boundary:
    'Entity SEO does not mean creating fake knowledge-base entries, manipulating Wikipedia, or adding every possible sameAs URL. We document real facts and pursue independent references only when editorially justified.',
  promptExamples: [
    'who is the founder of TheProjectSEO',
    'SEO agencies serving India and the Philippines',
    'which services does TheProjectSEO provide',
    'is TheProjectSEO connected to Expressway.PH',
  ],
  assetExamples: [
    'organization, brand, service, product, person, author, and location pages',
    'definitions, glossaries, documentation, and subject-expert resources',
    'brand comparisons, relationship explanations, and official fact pages',
    'credentials, publications, methods, datasets, case evidence, and policies',
  ],
  platformWork: [
    'Canonical entity pages with stable, visible, approved facts',
    'Schema.org types and properties chosen for the actual page and entity',
    'Profile, directory, publication, review, and owned-page conflict resolution',
    'Knowledge-panel, branded SERP, and AI-answer factual accuracy monitoring',
  ],
  measurementNuance:
    'Knowledge panels, structured-data validation, branded rankings, and AI answer accuracy are different signals. Entity work is evaluated through error reduction, consistency, eligible features, discovery, and business journeys—not a invented “entity score.”',
  sources: [
    sharedSources.schemaOrg,
    sharedSources.structuredData,
    {
      label: 'Google: Organization structured data',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/organization',
      description:
        'Google’s supported Organization properties and guidance for administrative details and identifiers.',
    },
    sharedSources.googleAi,
    sharedSources.searchEssentials,
  ],
  faqs: [
    {
      question: 'Does entity SEO require a Wikipedia or Wikidata page?',
      answer:
        'No. Those projects have their own notability, sourcing, and community rules and should never be treated as agency-controlled profile directories. Many entities can be understood through strong official pages, consistent structured data, reputable profiles, publications, listings, and independent coverage without a Wikipedia article.',
    },
    {
      question: 'What should sameAs markup contain?',
      answer:
        'Use sameAs for URLs that unambiguously identify the same entity, such as authoritative official profiles or identifiers. It should not be used as a generic list of every mention, article, directory, or loosely related page. The visible page and markup must still communicate the entity accurately.',
    },
  ],
  relatedLinks: [
    { href: '/services/ai-search/geo', label: 'GEO services', description: 'Apply entity clarity to generated-answer discovery.' },
    { href: '/services/ai-search/aeo', label: 'AEO services', description: 'Connect facts to useful, verifiable answers.' },
    { href: '/services/local-seo', label: 'Local SEO', description: 'Align location entities, listings, profiles, and landing pages.' },
    { href: '/services/ai-search/llm-visibility-tracking', label: 'LLM tracking', description: 'Audit how AI systems represent the entity.' },
  ],
})

const googleAiOverviews = createAiSearchDetailPage({
  slug: 'google-ai-overviews-optimization',
  name: 'Google AI Overviews Optimization',
  schemaName: 'Google AI Overviews and AI Mode SEO services',
  serviceType:
    'Google AI Overviews optimization using Search eligibility, technical SEO, helpful content, source quality, structured data accuracy, and measurement',
  metaTitle: 'Google AI Overviews Optimization Services',
  metaDescription:
    'Google AI Overviews optimization grounded in Google’s published guidance: Search eligibility, crawl access, useful content, accurate schema and measurement.',
  eyebrow: 'Google AI Overviews · Search fundamentals, honestly applied',
  title: 'Qualify for Google Search.',
  titleAccent: 'Build a source worth showing.',
  definition:
    'Google AI Overviews optimization applies Google Search fundamentals to pages that should be eligible and useful as supporting links in AI Overviews and AI Mode, then measures visibility without inventing special technical requirements.',
  bestFit:
    'Organizations already investing in Google Search that need to diagnose AI-feature visibility, protect traffic quality, improve supporting pages, and connect Search performance to outcomes.',
  heroChecks: [
    'Indexed, snippet-eligible pages and Googlebot access verified first',
    'No special-schema, llms.txt, or separate AI-markup requirement claimed',
    'Query fan-out, supporting links, content, entities, media, and page experience considered',
    'Search Console, AI-feature observations, landing behavior, and conversions interpreted together',
  ],
  platforms: ['Google Search', 'AI Overviews', 'AI Mode', 'Googlebot', 'Search Console', 'Gemini', 'Bing'],
  mechanic:
    'Google says AI Overviews and AI Mode may use query fan-out across related searches and sources, but supporting pages still need to be indexed and eligible to appear in Search with a snippet.',
  technicalControl:
    'Googlebot crawl, index and snippet eligibility, preview controls, internal discoverability, rendered text, media, Merchant Center, and Business Profile data as applicable',
  boundary:
    'Google explicitly states there are no additional technical requirements, special schema types, or new machine-readable AI files needed for AI Overviews or AI Mode. Compliance and best practices still do not guarantee inclusion.',
  promptExamples: [
    'how much does an SEO audit cost',
    'best AI search SEO agencies for a B2B company',
    'SEO agency in India versus Philippines',
    'what should I ask before hiring an SEO agency',
  ],
  assetExamples: [
    'indexable service, product, industry, location, and category pages',
    'direct explanations, how-to resources, tools, definitions, and support',
    'comparisons, alternatives, criteria, implementation, pricing, and risk',
    'original research, expert review, high-quality images, videos, and evidence',
  ],
  platformWork: [
    'Search-eligible source pages with important content in accessible text',
    'Coverage of related subtopics and follow-up questions without doorway pages',
    'High-quality supporting images and videos where they improve understanding',
    'Structured data, Merchant Center, and Business Profile facts aligned to visible content',
  ],
  measurementNuance:
    'Google states that AI-feature traffic is included in Search Console’s Web reporting; available dedicated generative-AI reporting should be treated according to its documented rollout and definitions. We annotate SERP observations instead of reverse-engineering a guaranteed inclusion score.',
  sources: [
    sharedSources.googleAi,
    {
      label: 'Google: generative AI performance reports',
      url: 'https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports',
      description:
        'Google’s June 2026 announcement and rollout details for dedicated generative AI feature reporting in Search Console.',
    },
    sharedSources.searchEssentials,
    sharedSources.structuredData,
    {
      label: 'Google: robots meta and snippet controls',
      url: 'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
      description:
        'Google’s supported controls for indexing, snippets, and preview limits.',
    },
  ],
  faqs: [
    {
      question: 'What are the technical requirements for Google AI Overviews?',
      answer:
        'Google says a page must be indexed and eligible to appear in Google Search with a snippet, meeting Search technical requirements. Google also says there are no additional technical requirements for AI Overviews or AI Mode. The practical work is therefore rigorous SEO, useful content, accurate data, and measurement—not a hidden AIO tag.',
    },
    {
      question: 'Can FAQ schema make a page appear in an AI Overview?',
      answer:
        'No. Relevant structured data can help Google understand visible content and may support eligible search features, but Google does not say FAQ schema triggers AI Overviews. Markup must follow supported feature policies and cannot guarantee crawling, indexing, ranking, or selection as a supporting link.',
    },
  ],
  relatedLinks: [
    { href: '/services/seo', label: 'SEO services', description: 'Build the complete Google and Bing visibility system.' },
    { href: '/services/technical-seo', label: 'Technical SEO', description: 'Repair crawl, index, rendering, and template issues.' },
    { href: '/services/ai-search/gemini-seo', label: 'Gemini SEO', description: 'Measure Gemini answers as a separate Google product.' },
    { href: '/services/ai-search/llm-visibility-tracking', label: 'Visibility tracking', description: 'Preserve prompts, sources, SERP features, and conditions.' },
  ],
})

const tracking = createAiSearchDetailPage({
  slug: 'llm-visibility-tracking',
  name: 'LLM Visibility Tracking',
  schemaName: 'LLM and AI search visibility tracking services',
  serviceType:
    'LLM visibility tracking for prompts, brand mentions, citations, source domains, factual accuracy, competitors, referrals, and commercial outcomes',
  metaTitle: 'LLM Visibility Tracking for AI Search',
  metaDescription:
    'Track brand mentions, citations, sources, accuracy and competitors across ChatGPT, Gemini, Claude, Perplexity and Google AI features.',
  eyebrow: 'LLM visibility tracking · Reproducible prompts, useful decisions',
  title: 'Measure the answer.',
  titleAccent: 'Preserve the conditions.',
  definition:
    'LLM visibility tracking is the repeated capture and analysis of how defined AI systems answer a stable set of commercially relevant prompts, including brand presence, linked citations, source domains, competitors, prominence, and factual accuracy.',
  bestFit:
    'Teams that need evidence for AI-search investment decisions and are willing to define a stable prompt methodology instead of buying a context-free visibility score.',
  heroChecks: [
    'Prompts versioned by audience, intent, stage, market, language, and priority',
    'Platform, interface, model when available, date, location, and retrieval conditions retained',
    'Mentions, recommendations, linked citations, cited pages, and accuracy kept separate',
    'Observations converted into technical, content, authority, and conversion decisions',
  ],
  platforms: ['ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'AI Overviews', 'AI Mode', 'Google', 'Bing'],
  mechanic:
    'Generated answers can vary between repeated runs and product interfaces, while vendors use different prompt libraries, sampling schedules, markets, and composite-score formulas.',
  technicalControl:
    'Tracking access, crawler access, analytics referral rules, raw-response retention, and source destination validation',
  boundary:
    'A visibility score is a sample, not a census of everything customers ask. We publish the prompt universe, sampling choices, denominators, platform conditions, and changes that affect comparability.',
  promptExamples: [
    'what should an enterprise SEO audit include',
    'recommend AI search SEO agencies',
    'compare SEO agencies serving India and the Philippines',
    'is this agency experienced with AI visibility tracking',
  ],
  assetExamples: [
    'prompt taxonomy, brand and competitor dictionaries, and approved fact register',
    'response archive, citation extraction, source validation, and accuracy reviews',
    'topic, intent, market, platform, and journey comparison dashboards',
    'experiment annotations, landing cohorts, lead quality, and revenue context',
  ],
  platformWork: [
    'Prompt sampling plan with a documented inclusion method and denominator',
    'Response and citation records retained for audit and reruns',
    'Entity aliases, products, competitors, false positives, and sentiment reviewed',
    'Platform changes, model changes, releases, and external campaigns annotated',
  ],
  measurementNuance:
    'Tracking is the measurement service itself. We report sample size, prompt stability, repeat variance, missing data, and platform changes alongside every trend so stakeholders can tell a durable signal from a collection artifact.',
  sources: [
    sharedSources.googleAi,
    sharedSources.openAiBots,
    sharedSources.anthropicBots,
    sharedSources.perplexityBots,
    {
      label: 'Google Search Console performance documentation',
      url: 'https://support.google.com/webmasters/answer/7576553',
      description:
        'Google’s definitions and filters for Search performance data used alongside AI-answer observations.',
    },
  ],
  faqs: [
    {
      question: 'How many prompts should an LLM visibility tracker use?',
      answer:
        'There is no universal number. The set should be large enough to represent priority audiences, tasks, stages, markets, and products without padding it with irrelevant variations. We document the prompt selection method and add prompts through versioned cohorts so the denominator does not change silently.',
    },
    {
      question: 'What is the difference between a mention and a citation?',
      answer:
        'A mention names or clearly identifies the brand in the response. A citation or supporting link points to a source. A recommendation adds a stronger evaluative claim. These events should be recorded separately because a brand can be mentioned without a source, cited without being recommended, or linked while the answer remains factually wrong.',
    },
  ],
  relatedLinks: [
    { href: '/services/ai-search', label: 'AI search optimization', description: 'Turn visibility observations into implementation work.' },
    { href: '/services/ai-search/chatgpt-seo', label: 'ChatGPT SEO', description: 'Apply OpenAI-specific access and source analysis.' },
    { href: '/services/ai-search/google-ai-overviews-optimization', label: 'Google AI Overviews', description: 'Connect observations to Search eligibility and reporting.' },
    { href: '/services/analytics/seo-reporting', label: 'SEO reporting', description: 'Integrate search, analytics, CRM, and commercial context.' },
  ],
})

const perplexity = createAiSearchDetailPage({
  slug: 'perplexity-seo',
  name: 'Perplexity SEO',
  schemaName: 'Perplexity SEO and citation visibility services',
  serviceType:
    'PerplexityBot access, citation source optimization, answer accuracy, prompt tracking, referral measurement, content and entity services',
  metaTitle: 'Perplexity SEO Agency for Citations',
  metaDescription:
    'Perplexity SEO services for PerplexityBot access, source-worthy pages, citations, accurate brand answers and qualified referral measurement.',
  eyebrow: 'Perplexity SEO · Crawl access + cited sources',
  title: 'Create a source worth citing.',
  titleAccent: 'Track the actual link.',
  definition:
    'Perplexity SEO improves the accessibility, usefulness, authority, and factual clarity of pages that may appear as sources in Perplexity answers, then measures citations, linked destinations, answer accuracy, and resulting customer journeys.',
  bestFit:
    'Brands whose customers use citation-led research to investigate complex topics, build provider or product shortlists, and follow sources before making a decision.',
  heroChecks: [
    'PerplexityBot and Perplexity-User purposes understood and reviewed separately',
    'Citation, linked URL, source-domain, answer-accuracy, and competitor baseline',
    'Current source pages, original evidence, entity facts, and legitimate authority',
    'Perplexity referrals tied to landing behavior and qualified outcomes where possible',
  ],
  platforms: ['Perplexity', 'PerplexityBot', 'Perplexity-User', 'Google', 'Bing', 'ChatGPT', 'Claude'],
  mechanic:
    'Perplexity documents PerplexityBot for surfacing and linking websites in search results and Perplexity-User for user-requested page access; it states that the two serve different purposes.',
  technicalControl:
    'PerplexityBot robots access, published IP allowlisting where required, Perplexity-User behavior, WAF logs, and cited destination availability',
  boundary:
    'Perplexity citations can change with the prompt, date, model, source freshness, and available web results. Allowing a crawler is an eligibility decision, not a promise that a page will be selected.',
  promptExamples: [
    'how do AI search agencies measure citations',
    'SEO agencies with experience in GEO and AEO',
    'compare technical SEO and AI visibility services',
    'show sources for this agency’s reported results',
  ],
  assetExamples: [
    'precise service, product, company, people, and location sources',
    'current guides, definitions, tools, documentation, and troubleshooting',
    'cited comparisons, provider criteria, implementation, pricing, and risks',
    'original data, transparent methods, expert commentary, and case evidence',
  ],
  platformWork: [
    'PerplexityBot and WAF access verified against official IP and agent guidance',
    'Current, fact-checked pages with claims connected to primary sources',
    'Original evidence and expert contributions useful beyond brand promotion',
    'Citation destination QA and referral landing-page improvement',
  ],
  measurementNuance:
    'Perplexity makes linked sources visible in many answer experiences, which supports direct citation audits. We still preserve prompt and product conditions and distinguish a domain citation from a brand recommendation or a qualified visit.',
  sources: [
    sharedSources.perplexityBots,
    sharedSources.searchEssentials,
    sharedSources.structuredData,
    sharedSources.openAiBots,
    sharedSources.anthropicBots,
  ],
  faqs: [
    {
      question: 'What is the difference between PerplexityBot and Perplexity-User?',
      answer:
        'Perplexity says PerplexityBot is designed to surface and link websites in search results and is not used to crawl content for foundation-model training. Perplexity-User supports user-initiated page access and may visit a page in response to a question. The company also notes that user-requested fetch behavior differs from ordinary robots crawling.',
    },
    {
      question: 'Does allowing PerplexityBot guarantee citations?',
      answer:
        'No. It can remove one access barrier, but selection still depends on the question, available sources, relevance, quality, freshness, authority, and product behavior. A WAF can also block a documented crawler even when robots.txt permits it, so server-side access should be verified rather than assumed.',
    },
  ],
  relatedLinks: [
    { href: '/services/ai-search/chatgpt-seo', label: 'ChatGPT SEO', description: 'Compare OpenAI-specific retrieval and crawler controls.' },
    { href: '/services/ai-search/geo', label: 'GEO services', description: 'Improve the wider source and authority system.' },
    { href: '/services/content', label: 'SEO content', description: 'Create current, useful, source-worthy assets.' },
    { href: '/services/ai-search/llm-visibility-tracking', label: 'LLM tracking', description: 'Store prompts, citations, URLs, and response conditions.' },
  ],
})

export const aiSearchDetailPages = {
  aeo,
  geo,
  chatgpt,
  claude,
  gemini,
  entity,
  googleAiOverviews,
  tracking,
  perplexity,
} as const satisfies Record<string, IndustryLeadPageData>
