import {
  sharedIndustryEvidence,
  type IndustryLeadPageData,
} from '@/data/industry-lead-pages'

const food: IndustryLeadPageData = {
  slug: 'food',
  name: 'Food and beverage',
  serviceType: 'Food and beverage SEO and AI search optimization',
  schemaAudience:
    'Food and beverage brands, restaurants, restaurant groups, CPG companies, producers, distributors, and ecommerce businesses',
  metaTitle: 'Food & Beverage SEO Agency for Search & AI | TheProjectSEO',
  metaDescription:
    'Food and beverage SEO for restaurants, CPG brands, producers and ecommerce. Improve local, product, recipe and AI-search visibility with commercial measurement.',
  eyebrow: 'Food & beverage SEO agency · Local + product + AI search',
  title: 'Turn food discovery into',
  titleAccent: 'orders, visits, and demand.',
  directAnswer:
    'TheProjectSEO helps food and beverage companies become discoverable when people choose where to eat, what to cook, which product to buy, and which supplier to trust. We connect technical SEO, local and menu discovery, product and recipe content, accurate ingredient and claim governance, brand authority, and AI-answer monitoring to reservations, orders, store or distributor discovery, qualified trade enquiries, and ecommerce revenue.',
  primaryCta: 'Request a food and beverage SEO assessment',
  bestFit:
    'Food and beverage businesses with real products or locations, accurate operational data, accountable food and legal reviewers, implementation access, and measurable customer actions.',
  heroChecks: [
    'Restaurants, groups, CPG, DTC, producers, distributors, and food-service businesses',
    'Local, menu, product, recipe, dietary, ingredient, wholesale, and brand demand',
    'Google, Bing, maps, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity',
    'Measurement tied to reservations, orders, retail discovery, trade enquiries, and revenue',
  ],
  journeyTitle: 'How do food and beverage customers search before they act?',
  journeyLead:
    'The path differs by business model. A diner may decide within minutes, a consumer may compare ingredients and retailers, and a buyer may evaluate supply capability over weeks. The page system must make each route explicit.',
  searchJourneys: [
    {
      stage: 'Discover',
      intent: 'Find an occasion, dish, product, or supplier',
      explanation:
        'The search starts with hunger, occasion, cuisine, dietary preference, recipe, ingredient, business requirement, or a problem to solve.',
      examples: ['family restaurant in Makati with outdoor seating', 'low-sugar electrolyte drink'],
      conversion: 'menu or product exploration, recipe, retailer route, or supplier overview',
    },
    {
      stage: 'Validate',
      intent: 'Check fit and safety-relevant facts',
      explanation:
        'The customer verifies location, hours, availability, ingredients, allergens, nutrition, preparation, packaging, certifications, minimum order, or delivery.',
      examples: ['restaurant x allergen menu', 'product x ingredients and nutrition'],
      conversion: 'call, menu view, product detail, stockist lookup, or specification request',
    },
    {
      stage: 'Compare',
      intent: 'Choose between credible options',
      explanation:
        'The decision includes taste or use, price, reviews, provenance, dietary needs, convenience, shelf life, service, capacity, and commercial terms.',
      examples: ['best specialty coffee beans for espresso India', 'frozen food distributor Metro Manila'],
      conversion: 'reservation, order, sample, quote, or qualified trade enquiry',
    },
    {
      stage: 'Return',
      intent: 'Buy, visit, or cook again',
      explanation:
        'Repeat demand depends on current hours, menu, stock, delivery, recipes, store locations, subscriptions, support, and consistent product facts.',
      examples: ['brand x stockist near me', 'restaurant x online order'],
      conversion: 'repeat order, directions, booking, subscription, retailer click, or account action',
    },
  ],
  obstaclesTitle: 'Why does food and beverage SEO lose trust and conversions?',
  obstaclesLead:
    'Search visibility is fragile when menu, location, stock, ingredients, or regulated claims disagree. Fresh content cannot compensate for unreliable operational facts.',
  obstacles: [
    {
      title: 'Menus and hours are inconsistent',
      problem:
        'Website pages, PDFs, ordering platforms, local profiles, social accounts, and delivery marketplaces may show different hours, prices, dishes, locations, or availability.',
      response:
        'We establish the approved operational source, responsible owners, update cadence, profile rules, and visible HTML ownership for the facts customers need before acting.',
    },
    {
      title: 'Dietary and product claims lack governance',
      problem:
        'Allergen, nutrition, health, organic, sustainable, origin, or free-from language can be materially wrong when copied across recipes, products, and campaigns.',
      response:
        'Food, legal, quality, or regulatory owners approve material claims, applicable market, evidence, scope, and reviewed date. SEO does not replace professional safety or compliance review.',
    },
    {
      title: 'Recipes attract an audience but hide the product',
      problem:
        'Recipe content can grow broad traffic without explaining why the brand, ingredient, tool, venue, or product is relevant to the user’s next step.',
      response:
        'We build recipes around real expertise and utility, then connect ingredients, products, techniques, locations, retailers, or commercial routes without forcing an irrelevant sale.',
    },
    {
      title: 'Every conversion is reported as equivalent',
      problem:
        'A menu view, marketplace click, table booking, coupon, DTC order, stockist lookup, and wholesale form represent different intent and economics.',
      response:
        'We define outcomes by business model and location, deduplicate where possible, and report reservations, orders, retail discovery, subscriptions, trade qualification, and revenue separately.',
    },
  ],
  deliverablesTitle: 'What is included in food and beverage SEO?',
  deliverablesLead:
    'The engagement combines technical and local foundations with product, menu, recipe, entity, authority, AI-answer, and commercial measurement work.',
  deliverables: [
    {
      title: 'Technical and platform audit',
      description:
        'A review of restaurant, ecommerce, recipe, distributor, location, menu, product, ordering, and international templates.',
      items: [
        'Crawling, rendering, indexation, canonicals, redirects, and sitemaps',
        'Menu, product, variant, recipe, location, and campaign templates',
        'Mobile performance, media, Core Web Vitals, and ordering paths',
        'Migration, platform, feed, and release backlog',
      ],
    },
    {
      title: 'Demand and customer research',
      description:
        'A search model for cuisine, occasion, location, dish, ingredient, recipe, diet, product, retailer, supplier, and trade intent.',
      items: [
        'Customer language from search, reviews, site search, support, and sales',
        'Consumer, food-service, wholesale, distributor, and retailer journeys',
        'Local, evergreen, seasonal, and campaign demand',
        'Query-to-page ownership and cannibalization rules',
      ],
    },
    {
      title: 'Local, menu, and product architecture',
      description:
        'A connected system that routes customers to a real restaurant, dish, product, retailer, distributor, or contact.',
      items: [
        'Location, menu, cuisine, service, product, category, and stockist pages',
        'Product, merchant, recipe, organization, and local structured facts',
        'Current hours, service options, availability, and conversion paths',
        'Recipe-to-product, product-to-retailer, and location internal links',
      ],
    },
    {
      title: 'Expert content and claim governance',
      description:
        'Useful recipes, ingredient education, product guidance, sourcing stories, and trade resources with appropriate review.',
      items: [
        'Chef, product, food, quality, or subject-matter review',
        'Ingredient, allergen, nutrition, origin, and claim controls',
        'Source requirements, reviewed dates, and update triggers',
        'Original photography and rights requirements for later production',
      ],
    },
    {
      title: 'Brand and local authority',
      description:
        'Credible discovery through locations, chefs, products, producers, retailers, distributors, partners, and relevant publications.',
      items: [
        'Google Business Profile and Bing Places consistency for real locations',
        'Organization, brand, location, product, chef, and retailer entity mapping',
        'Food, local, trade, partner, and community publication opportunities',
        'Original assets and stories based on approved business knowledge',
      ],
    },
    {
      title: 'AI and commercial reporting',
      description:
        'A measurement system that separates discovery from meaningful restaurant, consumer, retail, and trade outcomes.',
      items: [
        'Visibility by location, cuisine, menu, product, recipe, and trade intent',
        'AI prompt, mention, citation, source, and factual-accuracy tracking',
        'Reservations, orders, retailer clicks, subscriptions, and qualified enquiries',
        'Location, product, and content cohort experiments',
      ],
    },
  ],
  aiVisibility: {
    title: 'How can food and beverage brands appear accurately in AI answers?',
    lead:
      'People ask complete questions about cuisine, location, diet, ingredients, preparation, products, and suppliers. Clear operational and product facts help retrieval systems, but safety-relevant and time-sensitive details need prominent source and freshness controls.',
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
      'AI answers can misstate ingredients, allergens, nutrition, opening hours, menu availability, stock, and medical suitability. The current approved business source remains authoritative. We cannot guarantee inclusion and do not use AI-generated advice as a substitute for food-safety, medical, or regulatory review.',
    workstreams: [
      {
        title: 'Operational and product facts',
        description:
          'Make locations, hours, menus, service options, products, ingredients, claims, retailers, and contacts explicit and consistent with approved sources.',
        output: 'fact model, owner matrix, discrepancy log, and freshness rules',
      },
      {
        title: 'Food-question coverage',
        description:
          'Map realistic local, product, ingredient, recipe, dietary, sourcing, and trade questions to reviewed answers and appropriate next steps.',
        output: 'prompt cohorts, answer gaps, content roadmap, and source requirements',
      },
      {
        title: 'Brand and place entities',
        description:
          'Clarify relationships among the company, brands, products, locations, chefs, retailers, distributors, and trusted third parties.',
        output: 'entity map, profile corrections, structured-data plan, and corroboration targets',
      },
      {
        title: 'Accuracy and freshness monitoring',
        description:
          'Record cited sources and material facts for stable prompts, with faster review for hours, menus, stock, ingredients, and claims.',
        output: 'dated observations, factual exceptions, and correction backlog',
      },
    ],
  },
  architectureTitle: 'Which pages should a food and beverage business prioritize?',
  architectureLead:
    'The right architecture follows the business model. Restaurant, CPG, ecommerce, and supplier pages can share an entity system without forcing every company into the same funnel.',
  architecture: [
    {
      pageType: 'Location and menu',
      intent: 'Where can I eat, order, or visit?',
      examples: 'restaurant, branch, cuisine, menu, dining service, delivery and booking',
      signal: 'current address or area, hours, menu access, services, contact, and action',
    },
    {
      pageType: 'Product and category',
      intent: 'Is this the right food or beverage product?',
      examples: 'individual product, format, flavor, pack, category, subscription',
      signal: 'approved facts, ingredients, claims, images, availability, retailer, and purchase route',
    },
    {
      pageType: 'Recipe and technique',
      intent: 'How can I make or use this?',
      examples: 'recipes, preparation, pairings, techniques, substitutions, serving ideas',
      signal: 'tested method or expert review, useful steps, product context, source, and date',
    },
    {
      pageType: 'Ingredient and responsibility',
      intent: 'What does it contain and can I trust the claim?',
      examples: 'ingredients, allergens, nutrition, sourcing, certification, packaging',
      signal: 'approved evidence, market scope, limitations, owner, and reviewed date',
    },
    {
      pageType: 'Trade and distribution',
      intent: 'Can this company supply my business?',
      examples: 'wholesale, food service, private label, distribution, export, retailer support',
      signal: 'real capability, markets, formats, capacity boundaries, documents, and contact',
    },
  ],
  processTitle: 'How does a food and beverage SEO engagement work?',
  processLead:
    'The first cycle reconciles website facts with real operations and approved claims. Implementation then follows location, catalog, menu, and campaign calendars.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Business and fact discovery',
      description:
        'Map business models, products, locations, menus, markets, channels, ordering systems, owners, approved sources, claim reviews, and outcomes.',
      output: 'operating map, fact owners, source hierarchy, and KPI definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Technical and demand baseline',
      description:
        'Audit templates, feeds, profiles, ordering routes, performance, local and product demand, competitors, and representative AI prompts.',
      output: 'defect backlog, demand model, entity discrepancies, and baseline',
    },
    {
      number: '03',
      cadence: 'Weeks 3–5',
      title: 'Customer-journey architecture',
      description:
        'Assign ownership across locations, menus, products, recipes, ingredients, retailers, and trade pages with links and freshness rules.',
      output: 'page map, fact model, briefs, internal links, and roadmap',
    },
    {
      number: '04',
      cadence: 'Monthly',
      title: 'Implementation and review',
      description:
        'Ship technical changes and priority pages with mobile, local, product, food, legal, quality, and conversion review as applicable.',
      output: 'released work, approved content, profile changes, and QA log',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Authority and answer work',
      description:
        'Strengthen local and brand entities, expert content, useful source assets, partner discovery, and AI-answer coverage.',
      output: 'source assets, relevant citations, entity fixes, and prompt experiments',
    },
    {
      number: '06',
      cadence: 'Quarterly / seasonal',
      title: 'Commercial and freshness review',
      description:
        'Compare page and prompt cohorts with reservations, orders, retail actions, trade stages, revenue, stock, and changing operational facts.',
      output: 'commercial report, fact refreshes, test findings, and next roadmap',
    },
  ],
  measurementTitle: 'How should food and beverage SEO be measured?',
  measurementLead:
    'The measurement model depends on whether the business needs restaurant visits, direct orders, retail discovery, ecommerce purchases, subscriptions, or qualified trade demand.',
  measurementBoundary:
    'Delivery platforms, retail sales, offline visits, call tracking, consent, promotions, stock, and multi-touch journeys limit attribution. We document observable actions and do not assign sales to organic search without an approved method.',
  measurement: [
    {
      name: 'Qualified discovery visibility',
      definition: 'Non-brand impressions, clicks, and landing-page visibility by location, cuisine, product, recipe, ingredient, retailer, and trade intent.',
      source: 'Google Search Console, Bing Webmaster Tools, and controlled cohorts',
    },
    {
      name: 'Local and restaurant actions',
      definition: 'Menu views, directions, calls, reservations, online orders, and location actions for verified restaurants and branches.',
      source: 'approved local-platform, booking, ordering, and web analytics',
    },
    {
      name: 'Product and retail progression',
      definition: 'Product views, retailer or stockist clicks, ecommerce actions, subscriptions, samples, and store-locator usage.',
      source: 'consent-aware web, ecommerce, and approved partner data',
    },
    {
      name: 'Qualified trade demand',
      definition: 'Relevant supplier, distributor, wholesale, food-service, export, or private-label enquiries and accepted opportunities.',
      source: 'CRM or approved sales-stage reporting',
    },
    {
      name: 'AI-answer accuracy',
      definition: 'Brand or location presence, cited sources, and accuracy for stable menu, product, ingredient, recipe, and supplier prompts.',
      source: 'dated observations by platform, market, and wording',
    },
  ],
  evidence: {
    title: 'What evidence is available to food and beverage teams?',
    lead:
      'Current public evidence demonstrates the broader Google and AI-search methodology. It is not represented as restaurant, food product, or distribution performance.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Food or restaurant case study image',
        description: 'Reserved for an approved period, location or product cohort, outcome, and method.',
      },
      {
        label: 'Food AI-answer example',
        description: 'Reserved for a dated prompt, source, approved fact, and freshness note.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right food and beverage SEO agency?',
  fitLead:
    'Fit depends on reliable operations and product facts as much as content ambition.',
  goodFit: [
    'You operate real products, restaurants, locations, suppliers, or distribution capabilities',
    'Operations, product, food, legal, quality, and technical owners can review relevant facts',
    'Menus, hours, ingredients, claims, stock, and conversion routes can be maintained',
    'The team can define useful customer or trade outcomes by business model',
    'You want local, product, Google, and AI discovery managed together',
  ],
  notFit: [
    'You need guaranteed rankings, citations, reservations, orders, or revenue',
    'Material ingredient, allergen, nutrition, origin, or health claims cannot be verified',
    'The plan depends on fake locations, copied recipes, or mass-generated product pages',
    'No owner can update profiles, menus, feeds, products, or website templates',
    'Every page view, menu click, or form must be counted as equivalent value',
  ],
  sources: [
    {
      label: 'Google Search Central: Local business structured data',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/local-business',
      description: 'Primary requirements for visible local business information.',
    },
    {
      label: 'Google Search Central: Recipe structured data',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/recipe',
      description: 'Primary guidance for recipe markup and visible recipe content.',
    },
    {
      label: 'Google Business Profile Help',
      url: 'https://support.google.com/business/',
      description: 'Primary guidance for locations, hours, categories, and profile representation.',
    },
    {
      label: 'U.S. FDA: Food labeling and nutrition',
      url: 'https://www.fda.gov/food/food-labeling-nutrition',
      description: 'An authoritative starting point for U.S. food-labeling topics; applicable rules vary by market.',
    },
  ],
  faqTitle: 'Questions food and beverage teams ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What does a food and beverage SEO agency do?',
      answer:
        'It helps relevant customers find a restaurant, menu, product, recipe, retailer, distributor, or supplier through technically sound and trustworthy search experiences. Work includes local SEO, product and menu architecture, content, entities, authority, AI-answer monitoring, and business-model-specific measurement.',
    },
    {
      question: 'Can you optimize restaurants and multi-location groups?',
      answer:
        'Yes. We align real locations, departments or concepts, profiles, menus, hours, reservation and ordering paths, reviews, local pages, and analytics. Each location needs operational truth and distinct value; fake listings and pages for places the business does not serve are not recommended.',
    },
    {
      question: 'Can you optimize food and beverage ecommerce products?',
      answer:
        'Yes. We review category, product, variant, feed, stock, structured data, media, ingredients, approved claims, retailers, performance, internal links, and purchase paths. Product and compliance owners remain responsible for factual and market-specific approval.',
    },
    {
      question: 'How do you handle allergen, nutrition, and health claims?',
      answer:
        'We require an approved source, applicable market, scope, reviewer, and update rule. We do not infer safety or health claims from keywords or AI output. The organization’s qualified food, medical, legal, quality, and regulatory owners decide what may be stated.',
    },
    {
      question: 'Are recipes still useful for food SEO?',
      answer:
        'They can be when they solve a real cooking task, reflect actual expertise, use clear tested or reviewed methods, provide original value, and connect naturally to relevant products or brand knowledge. Large volumes of copied or lightly rewritten recipes create maintenance and trust problems.',
    },
    {
      question: 'Do you optimize food brands for ChatGPT and AI Overviews?',
      answer:
        'Yes. We improve approved operational and product facts, useful answers, entities, sourcing, crawler access, and third-party corroboration, then monitor stable prompts. We cannot guarantee inclusion, and customers should verify time-sensitive or safety-relevant information with the current official source.',
    },
    {
      question: 'How long does food and beverage SEO take?',
      answer:
        'Timing depends on business model, site and location count, technical health, competition, authority, review requirements, implementation speed, seasonality, and sales cycle. We baseline cohorts and avoid fixed-date promises for rankings, orders, or revenue.',
    },
    {
      question: 'What does food and beverage SEO cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on locations, catalog or menu size, markets, platform and feed complexity, content and claim review, implementation ownership, local work, measurement, and AI-answer monitoring.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/local-seo',
      label: 'Local SEO',
      description: 'Real restaurant and retail locations, profiles, reviews, and local discovery.',
    },
    {
      href: '/services/ecommerce-seo',
      label: 'Ecommerce SEO',
      description: 'Food and beverage categories, products, feeds, stock, and commerce measurement.',
    },
    {
      href: '/services/content',
      label: 'SEO content systems',
      description: 'Recipes, product education, expert review, claims, and freshness governance.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Operational facts, product entities, source analysis, and answer monitoring.',
    },
  ],
  ctaEyebrow: 'Build trustworthy food discovery',
  ctaTitle: 'Find where locations, products, and approved facts lose customer demand.',
  ctaLead:
    'Share your business models, locations, products, markets, platforms, reviewers, and useful outcomes. We will identify the highest-priority Google and AI-search work.',
  ctaBenefits: [
    'Technical, local, menu, product, entity, and claim assessment',
    'Priority customer, trade, and AI-answer opportunities',
    'Business-model-specific measurement and freshness recommendations',
  ],
}

const nonprofit: IndustryLeadPageData = {
  slug: 'nonprofit',
  name: 'Nonprofit',
  serviceType: 'Nonprofit SEO and AI search optimization',
  schemaAudience:
    'Nonprofits, charities, foundations, associations, social enterprises, and mission-driven organizations',
  metaTitle: 'Nonprofit SEO Agency for Mission & AI Search | TheProjectSEO',
  metaDescription:
    'SEO for nonprofits and charities across Google and AI search. Improve program, cause, donation and volunteer discovery with transparent impact measurement.',
  eyebrow: 'Nonprofit SEO agency · Mission + trust + AI search',
  title: 'Help the right people find',
  titleAccent: 'your mission and act.',
  directAnswer:
    'TheProjectSEO helps nonprofits and charities become discoverable when beneficiaries seek help, donors evaluate a cause, volunteers look for a role, partners research programs, and AI systems answer questions about trustworthy organizations. We connect technical SEO, program and cause architecture, accessible content, transparent impact evidence, digital authority, and AI-answer monitoring to service discovery, donations, volunteer applications, memberships, and qualified partner enquiries.',
  primaryCta: 'Request a nonprofit SEO assessment',
  bestFit:
    'Mission-driven organizations with real programs, accountable fact and safeguarding owners, implementation access, transparent evidence, and clear supporter or beneficiary actions.',
  heroChecks: [
    'Nonprofits, charities, foundations, associations, and mission-led organizations',
    'Beneficiary, donor, volunteer, member, partner, media, and funder journeys',
    'Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity',
    'Reporting tied to service discovery, donations, volunteers, members, and qualified partnerships',
  ],
  journeyTitle: 'How do different nonprofit audiences search?',
  journeyLead:
    'A nonprofit rarely has one funnel. Someone seeking urgent help, a prospective donor, a volunteer, and a funder need different facts, levels of privacy, and conversion routes.',
  searchJourneys: [
    {
      stage: 'Need',
      intent: 'Find appropriate help or a program',
      explanation:
        'A beneficiary, family member, or referring professional searches for eligibility, service area, availability, cost, confidentiality, and what happens next.',
      examples: ['free legal aid for tenants Manila', 'youth mental health support Pune'],
      conversion: 'safe contact, eligibility check, referral, appointment, or service guide',
    },
    {
      stage: 'Understand',
      intent: 'Learn about a cause and response',
      explanation:
        'A supporter, journalist, student, or policymaker wants reliable context, evidence, definitions, and the organization’s role.',
      examples: ['how food insecurity is measured Philippines', 'organizations supporting girls education India'],
      conversion: 'research, program page, newsletter, event, or supporter journey',
    },
    {
      stage: 'Trust',
      intent: 'Evaluate legitimacy and impact',
      explanation:
        'Donors, volunteers, partners, and funders verify governance, registration, leadership, finances, safeguarding, methods, impact, and independent recognition.',
      examples: ['charity x annual report and impact methodology', 'trusted disaster relief organizations'],
      conversion: 'impact or governance review, donation, due diligence, or partner contact',
    },
    {
      stage: 'Act',
      intent: 'Contribute in the right way',
      explanation:
        'The person decides how to donate, volunteer, fundraise, join, partner, refer, attend, or advocate, with clear terms and a low-friction accessible path.',
      examples: ['monthly donation for literacy program', 'weekend volunteer opportunities near me'],
      conversion: 'completed donation, volunteer application, membership, event, or qualified enquiry',
    },
  ],
  obstaclesTitle: 'Why does nonprofit SEO grow awareness without mission outcomes?',
  obstaclesLead:
    'The problem is often not a lack of stories. It is a lack of clear program ownership, audience routes, current eligibility, accessible action, and transparent evidence.',
  obstacles: [
    {
      title: 'One page speaks to every audience',
      problem:
        'Beneficiaries, donors, volunteers, funders, partners, and journalists ask different questions and may require different language, privacy, and next steps.',
      response:
        'We map audience tasks and create clear routes for programs, help, causes, impact, ways to act, governance, and resources without fragmenting the organization’s identity.',
    },
    {
      title: 'Program eligibility is unclear or outdated',
      problem:
        'Service area, criteria, availability, language, contact, cost, wait time, and referral details can change, creating risk for people seeking support.',
      response:
        'Program owners approve canonical facts, update triggers, visible reviewed dates, alternative support routes, and safeguards for urgent or sensitive journeys.',
    },
    {
      title: 'Impact language lacks a defined method',
      problem:
        'Large numbers and emotional claims can lose trust when the period, population, source, methodology, funding relationship, and limitations are not explained.',
      response:
        'We build an evidence register and place definitions, dates, source documents, owners, and limitations near material impact claims. SEO never turns an estimate into a verified outcome.',
    },
    {
      title: 'Donation and volunteer reporting hides quality',
      problem:
        'A button click is not a completed gift, and a volunteer form is not an accepted or retained volunteer. Awareness metrics alone cannot guide mission investment.',
      response:
        'We define privacy-conscious stages for donations, applications, referrals, memberships, events, and partnerships, then report outcomes by landing-page and audience cohort.',
    },
  ],
  deliverablesTitle: 'What is included in nonprofit SEO?',
  deliverablesLead:
    'The work combines technical and accessibility foundations with mission architecture, evidence governance, audience-specific content, authority, AI answers, and transparent measurement.',
  deliverables: [
    {
      title: 'Technical and accessibility audit',
      description:
        'A review of priority program, donation, volunteer, event, resource, multilingual, form, and document journeys.',
      items: [
        'Crawling, rendering, indexation, redirects, canonicals, and sitemaps',
        'Mobile, Core Web Vitals, semantic structure, forms, and WCAG risks',
        'PDF, report, archive, event, and campaign lifecycle',
        'Privacy, analytics, migration, and release dependencies',
      ],
    },
    {
      title: 'Audience and mission demand research',
      description:
        'A search model separating beneficiary, donor, volunteer, member, partner, media, advocate, and funder needs.',
      items: [
        'Program, eligibility, location, cause, evidence, and action questions',
        'Internal site search, helpline or service, fundraising, and volunteer language',
        'Local, seasonal, emergency, evergreen, and branded demand',
        'Query-to-page ownership and cannibalization rules',
      ],
    },
    {
      title: 'Program and action architecture',
      description:
        'A page system connecting causes and information to real programs, eligibility, locations, evidence, and appropriate actions.',
      items: [
        'Program, service, location, audience, cause, campaign, and resource pages',
        'Donate, volunteer, partner, membership, event, and referral journeys',
        'Governance, financial, safeguarding, leadership, and impact pages',
        'Internal links that respect urgent and sensitive user needs',
      ],
    },
    {
      title: 'Content and evidence governance',
      description:
        'Accessible, source-backed content with appropriate program, safeguarding, legal, research, and communications review.',
      items: [
        'Fact and impact registers with source, method, date, owner, and scope',
        'Trauma-aware and plain-language review where appropriate',
        'Author, reviewer, update, accessibility, and translation standards',
        'Campaign consolidation and emergency-update rules',
      ],
    },
    {
      title: 'Trust and mission authority',
      description:
        'Credible discovery through experts, partners, funders, research, community organizations, directories, and transparent institutional facts.',
      items: [
        'Organization, program, person, place, event, and report entity consistency',
        'Relevant nonprofit, government, academic, local, and partner citations',
        'Original data, reports, practitioner expertise, and media resources',
        'Unlinked mention, partner-link, and source-page analysis',
      ],
    },
    {
      title: 'AI and mission-outcome reporting',
      description:
        'A measurement model that respects privacy and distinguishes awareness from meaningful beneficiary and supporter actions.',
      items: [
        'Search visibility by audience, program, cause, location, and intent',
        'AI prompt, mention, citation, source, and factual-accuracy tracking',
        'Donation, volunteer, member, event, referral, and partner cohorts',
        'Accessible dashboards, decision notes, and learning agenda',
      ],
    },
  ],
  aiVisibility: {
    title: 'How can a nonprofit be represented accurately in AI answers?',
    lead:
      'People ask AI systems for organizations, services, donation options, evidence, and trustworthy guidance. Clear program facts, institutional transparency, accessible resources, and independent corroboration reduce ambiguity.',
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
      'AI answers can be outdated or unsafe for urgent, sensitive, eligibility, legal, medical, or safeguarding questions. The organization’s current official guidance and appropriate emergency or professional resources remain authoritative. Inclusion or recommendation cannot be guaranteed.',
    workstreams: [
      {
        title: 'Program fact clarity',
        description:
          'Expose what the program does, who it serves, where, eligibility, availability, cost, contact, privacy, and review date in accessible language.',
        output: 'canonical fact model, owner matrix, answer blocks, and update triggers',
      },
      {
        title: 'Audience prompt mapping',
        description:
          'Test beneficiary, donor, volunteer, partner, and evidence questions separately, including local and sensitive scenarios.',
        output: 'prompt cohorts, source map, safety notes, and priority gaps',
      },
      {
        title: 'Mission entity consistency',
        description:
          'Align legal and public names, programs, locations, leadership, reports, registrations, partners, and profiles with the visible site.',
        output: 'entity graph, discrepancy log, structured-data plan, and corroboration targets',
      },
      {
        title: 'Accuracy and safety monitoring',
        description:
          'Record cited sources and material facts, flag unsafe or outdated answers, and recheck after program, location, policy, or emergency changes.',
        output: 'dated observations, escalation rules, and correction backlog',
      },
    ],
  },
  architectureTitle: 'Which pages should a nonprofit prioritize?',
  architectureLead:
    'A useful nonprofit architecture makes it easy to understand the mission, find a relevant program, verify trust, and take the right action without exposing sensitive information.',
  architecture: [
    {
      pageType: 'Program and service',
      intent: 'Can this organization help me or someone I support?',
      examples: 'program, eligibility, service area, access, referral, language, availability',
      signal: 'current scope, owner, reviewed date, safe contact, and alternatives',
    },
    {
      pageType: 'Cause and resource',
      intent: 'Help me understand the issue',
      examples: 'definitions, research, guides, policy, community resources, data',
      signal: 'credible sources, expert review, plain language, scope, and program links',
    },
    {
      pageType: 'Impact and trust',
      intent: 'Is the organization legitimate and effective?',
      examples: 'impact, annual reports, finances, governance, registration, safeguarding',
      signal: 'method, period, source, limitations, responsible owner, and documents',
    },
    {
      pageType: 'Supporter action',
      intent: 'How can I contribute?',
      examples: 'donate, volunteer, membership, fundraising, event, advocacy',
      signal: 'clear use, terms, commitment, accessibility, privacy, and completion route',
    },
    {
      pageType: 'Partner and media',
      intent: 'Can we work with or accurately cover this organization?',
      examples: 'partnership, grants, corporate support, research, media, expert contact',
      signal: 'real capability, audience, evidence, contact, assets, and response process',
    },
  ],
  processTitle: 'How does a nonprofit SEO engagement work?',
  processLead:
    'The first cycle aligns mission outcomes, audience safety, program facts, accessibility, and technical reality. Later work follows program and campaign priorities.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Mission and governance discovery',
      description:
        'Map audiences, programs, locations, owners, sources, safeguarding and privacy constraints, donation and volunteer systems, partners, and outcomes.',
      output: 'mission map, owner matrix, evidence inventory, and outcome definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Technical and demand baseline',
      description:
        'Audit accessibility, rendering, documents, forms, program routes, search demand, competitors, entities, and representative AI prompts.',
      output: 'defect backlog, demand model, accessibility risks, and baseline',
    },
    {
      number: '03',
      cadence: 'Weeks 3–5',
      title: 'Audience and program architecture',
      description:
        'Assign ownership across program, cause, location, impact, resource, donate, volunteer, and partner journeys with safe links and updates.',
      output: 'page map, fact rules, briefs, internal links, and roadmap',
    },
    {
      number: '04',
      cadence: 'Monthly',
      title: 'Implementation and review',
      description:
        'Ship technical fixes and priority pages with program, accessibility, safeguarding, legal, research, and communications review as needed.',
      output: 'released changes, approved content, accessibility QA, and decision log',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Authority and answer improvement',
      description:
        'Strengthen institutional facts, expert resources, partner and community discovery, credible sources, and AI-answer accuracy.',
      output: 'source assets, citations, entity fixes, and prompt experiments',
    },
    {
      number: '06',
      cadence: 'Quarterly / by campaign',
      title: 'Mission-outcome review',
      description:
        'Compare page and prompt cohorts with service, donation, volunteer, member, event, and partner stages while refreshing changed program facts.',
      output: 'outcome report, evidence refreshes, learning notes, and next roadmap',
    },
  ],
  measurementTitle: 'How should nonprofit SEO be measured?',
  measurementLead:
    'Visibility is useful only when it helps the appropriate audience reach a safe, relevant program or supporter action. Different audiences need separate measures.',
  measurementBoundary:
    'Beneficiary privacy, sensitive services, consent, offline support, third-party donation platforms, long relationships, and multi-touch journeys constrain attribution. Aggregated, minimum-necessary reporting is often more appropriate than person-level tracking.',
  measurement: [
    {
      name: 'Mission visibility',
      definition: 'Non-brand impressions, clicks, and landing-page discovery by audience, program, cause, location, resource, and action intent.',
      source: 'Google Search Console, Bing Webmaster Tools, and page cohorts',
    },
    {
      name: 'Beneficiary service discovery',
      definition: 'Safe contact, eligibility, referral, appointment, resource, or program actions using minimum-necessary aggregated reporting.',
      source: 'approved web and service systems',
    },
    {
      name: 'Supporter progression',
      definition: 'Completed donations, recurring gifts, volunteer applications or acceptance, memberships, event registrations, and fundraising actions.',
      source: 'approved donation, volunteer, membership, event, and CRM systems',
    },
    {
      name: 'Trust and evidence health',
      definition: 'Priority claims and program pages with current source, method, scope, owner, reviewed date, and accessible supporting records.',
      source: 'evidence register, program inventory, and content QA',
    },
    {
      name: 'AI-answer accuracy',
      definition: 'Organization or program presence, cited sources, and factual and safety accuracy for stable audience-specific prompts.',
      source: 'dated observations by platform, location, and prompt wording',
    },
  ],
  evidence: {
    title: 'What evidence can nonprofit teams review?',
    lead:
      'The currently approved first-party proof demonstrates the operating approach across Google and AI search. It is not represented as donation, volunteer, or beneficiary performance.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Nonprofit case study image',
        description: 'Reserved for an approved program, audience, period, outcome definition, and privacy-safe method.',
      },
      {
        label: 'Nonprofit AI-answer example',
        description: 'Reserved for a dated prompt, cited source, fact review, and any safety context.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right nonprofit SEO agency?',
  fitLead:
    'Fit is strongest when the organization values accessibility, evidence, audience safety, and measurable mission action alongside visibility.',
  goodFit: [
    'You operate real programs, services, campaigns, memberships, or supporter activities',
    'Program, impact, safeguarding, legal, accessibility, and technical owners can review work',
    'Core eligibility, location, impact, governance, and action facts can be maintained',
    'You can define privacy-conscious beneficiary and supporter outcomes',
    'You want Google and AI visibility managed within mission and governance boundaries',
  ],
  notFit: [
    'You need guaranteed rankings, citations, donations, applications, or grants',
    'Impact or program claims cannot be sourced, scoped, and approved',
    'The plan depends on emotional manipulation, fake locations, or mass doorway pages',
    'No owner can update services, forms, reports, campaigns, or website templates',
    'Success is defined only as impressions, traffic, or donation-button clicks',
  ],
  sources: [
    {
      label: 'Google Search Central: Search Essentials',
      url: 'https://developers.google.com/search/docs/essentials',
      description: 'Primary technical and content eligibility guidance for Google Search.',
    },
    {
      label: 'W3C: Web Content Accessibility Guidelines',
      url: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
      description: 'Primary accessibility standards relevant to beneficiary and supporter journeys.',
    },
    {
      label: 'Google for Nonprofits',
      url: 'https://www.google.com/nonprofits/',
      description: 'Google’s official program and resources for eligible nonprofit organizations.',
    },
    {
      label: 'Schema.org: NGO',
      url: 'https://schema.org/NGO',
      description: 'A vocabulary for describing visible nonprofit organization facts.',
    },
  ],
  faqTitle: 'Questions nonprofits ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What does a nonprofit SEO agency do?',
      answer:
        'It helps beneficiaries, donors, volunteers, members, partners, funders, and other relevant audiences find accurate mission, program, trust, and action information. Work covers technical SEO, accessibility, program architecture, evidence, content, authority, entities, AI answers, and privacy-conscious outcome measurement.',
    },
    {
      question: 'Can nonprofit SEO support donations and fundraising?',
      answer:
        'Yes, by improving cause and program discovery, trust evidence, campaign consolidation, donation journeys, accessibility, and measurement. We distinguish a donation-page visit from a completed or recurring gift and avoid promising that a ranking will produce a specific fundraising result.',
    },
    {
      question: 'How do you balance donor and beneficiary content?',
      answer:
        'We map them as separate tasks with appropriate language, privacy, evidence, and next steps, then connect them through the same verified program and mission entities. Beneficiary access should not be buried beneath fundraising, and sensitive stories should not be used without proper rights and safeguarding review.',
    },
    {
      question: 'Can you improve volunteer recruitment through search?',
      answer:
        'Yes. We can clarify roles, locations, schedules, requirements, training, screening, commitment, accessibility, and application steps, then measure applications and later stages where approved. The organization remains responsible for volunteer suitability, safeguarding, and acceptance decisions.',
    },
    {
      question: 'How do you present impact claims responsibly?',
      answer:
        'Each material claim should identify the period, population, source, methodology, scope, owner, and important limitations. We connect summary statements to accessible reports and definitions. We do not convert outputs into outcomes or imply causation beyond the evidence.',
    },
    {
      question: 'Do you optimize nonprofits for ChatGPT and AI Overviews?',
      answer:
        'Yes. We improve program facts, institutional entities, accessible resources, evidence, crawler access, and credible corroboration, then monitor audience-specific prompts for inclusion and accuracy. We cannot guarantee a recommendation, and urgent or sensitive guidance must defer to current official and professional sources.',
    },
    {
      question: 'How long does nonprofit SEO take?',
      answer:
        'Timing depends on technical and accessibility health, existing authority, program and location breadth, implementation capacity, review governance, campaigns, and demand. We establish a baseline and avoid guarantees for rankings, donations, volunteers, or service outcomes.',
    },
    {
      question: 'What does nonprofit SEO cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on program, audience, language, location and campaign breadth; technical and accessibility needs; content and evidence ownership; implementation; measurement; and AI-answer monitoring.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/content',
      label: 'SEO content systems',
      description: 'Mission research, expert review, evidence, production, and freshness governance.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Accessibility, forms, documents, rendering, indexation, migrations, and performance.',
    },
    {
      href: '/services/local-seo',
      label: 'Local SEO',
      description: 'Real program locations, profiles, community entities, and local discovery.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Program facts, mission entities, source analysis, and safety-aware monitoring.',
    },
  ],
  ctaEyebrow: 'Improve mission discovery',
  ctaTitle: 'Find where programs, evidence, and audience journeys lose meaningful action.',
  ctaLead:
    'Share your programs, audiences, locations, evidence, website, governance, and mission outcomes. We will identify the highest-priority Google and AI-search work.',
  ctaBenefits: [
    'Technical, accessibility, program, entity, and evidence assessment',
    'Priority beneficiary, supporter, and AI-answer opportunities',
    'Privacy-conscious outcome and content-governance recommendations',
  ],
}

const technology: IndustryLeadPageData = {
  slug: 'technology',
  name: 'Technology',
  serviceType: 'Technology SEO and AI search optimization',
  schemaAudience:
    'B2B technology companies, enterprise software, hardware, IT services, cloud, infrastructure, developer platforms, and technical solution providers',
  metaTitle: 'Technology SEO Agency for B2B Pipeline & AI | TheProjectSEO',
  metaDescription:
    'Technology SEO for B2B software, hardware, cloud, IT and developer platforms. Improve Google and AI-search visibility with technical content and pipeline measurement.',
  eyebrow: 'Technology SEO agency · B2B buyers + AI search',
  title: 'Technology SEO Agency: make complex technology',
  titleAccent: 'easier to discover and buy.',
  entityMentions: [
    { name: 'Search engine optimization', sameAs: ['https://www.wikidata.org/wiki/Q180711', 'https://en.wikipedia.org/wiki/Search_engine_optimization'] },
    { name: 'Google Search', sameAs: ['https://www.wikidata.org/wiki/Q9366', 'https://en.wikipedia.org/wiki/Google_Search'] },
    { name: 'JavaScript', sameAs: ['https://www.wikidata.org/wiki/Q2005', 'https://en.wikipedia.org/wiki/JavaScript'] },
    { name: 'Software as a service', sameAs: ['https://www.wikidata.org/wiki/Q1254596', 'https://en.wikipedia.org/wiki/Software_as_a_service'] },
    { name: 'Content strategy', sameAs: ['https://www.wikidata.org/wiki/Q4353935', 'https://en.wikipedia.org/wiki/Content_strategy'] },
  ],
  directAnswer:
    'TheProjectSEO helps B2B technology companies become discoverable when practitioners define a problem, buying committees compare solutions, developers validate implementation, and AI systems assemble vendor shortlists. We connect technical SEO, product and solution architecture, documentation, expert content, entity clarity, digital authority, and AI-answer monitoring to qualified demos, evaluations, opportunities, and pipeline.',
  primaryCta: 'Request a technology SEO assessment',
  bestFit:
    'Technology companies with a real product or service, a defined buying committee, access to technical experts, implementation capacity, and pipeline stages that separate interest from qualification.',
  heroChecks: [
    'B2B software, hardware, cloud, infrastructure, IT services, data, and developer platforms',
    'Practitioner, developer, business buyer, security, procurement, and executive intent',
    'Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, Copilot, and Perplexity',
    'Reporting tied to evaluations, demos, qualified opportunities, pipeline, and revenue',
  ],
  journeyTitle: 'How do technology buyers search before engaging sales?',
  journeyLead:
    'Complex technology purchases are group decisions. A practitioner, technical evaluator, business owner, security team, finance, and procurement can visit different pages before the account becomes visible in the CRM.',
  searchJourneys: [
    {
      stage: 'Problem',
      intent: 'Diagnose a technical or operational need',
      explanation:
        'The searcher investigates a failure, bottleneck, architecture decision, modernization need, or business constraint before selecting a category.',
      examples: ['reduce Kubernetes observability costs', 'modernize legacy data integration'],
      conversion: 'technical guide, assessment, benchmark, or solution path',
    },
    {
      stage: 'Category',
      intent: 'Identify viable approaches and vendors',
      explanation:
        'The buying group compares categories, architectures, deployment models, managed versus in-house options, and providers for its environment.',
      examples: ['enterprise integration platforms comparison', 'managed SOC provider for SaaS'],
      conversion: 'category or solution exploration, consultation, or demo interest',
    },
    {
      stage: 'Validate',
      intent: 'Confirm implementation fit',
      explanation:
        'Practitioners inspect features, APIs, integrations, compatibility, security, performance, support, migration, and total operating effort.',
      examples: ['product x Terraform integration', 'platform x private cloud deployment'],
      conversion: 'documentation, architecture call, trial, workshop, or proof of concept',
    },
    {
      stage: 'Select',
      intent: 'Reduce commercial and vendor risk',
      explanation:
        'The committee verifies pricing logic, evidence, references, implementation, support, procurement, alternatives, and the provider’s ability to deliver.',
      examples: ['product x vs product y enterprise', 'technology consulting partner for migration'],
      conversion: 'qualified demo, RFP, technical evaluation, or opportunity creation',
    },
  ],
  obstaclesTitle: 'Why does technology SEO produce content but not pipeline?',
  obstaclesLead:
    'The common failure is a gap between marketing keywords and the technical evidence buyers need. High-volume thought leadership cannot replace clear product, implementation, and trust routes.',
  obstacles: [
    {
      title: 'The website uses internal product language',
      problem:
        'Feature names and invented categories may make sense inside the company while buyers search by operational problem, established category, architecture, or integration.',
      response:
        'We reconcile customer, sales, support, product, and SERP language, then preserve differentiated terminology within pages that first make the buyer’s task clear.',
    },
    {
      title: 'One solution page targets every buyer',
      problem:
        'A practitioner, developer, IT leader, business owner, security reviewer, and procurement team need different depth and evidence.',
      response:
        'We assign ownership across product, capability, use case, industry, integration, documentation, comparison, security, and service pages with audience-specific paths.',
    },
    {
      title: 'Documentation and marketing disagree',
      problem:
        'Version drift, gated docs, client-side rendering, separate domains, stale compatibility, and unqualified performance claims can undermine both discovery and trust.',
      response:
        'Technical and governance work links public claims to current implementation evidence, with rendering, version, canonical, internal-link, ownership, and release controls.',
    },
    {
      title: 'Lead reports ignore the buying committee',
      problem:
        'A whitepaper download or individual demo request may not represent an account with fit, authority, urgency, technical readiness, or budget.',
      response:
        'We segment content and conversion events by intent and connect landing-page cohorts to accepted leads, evaluations, opportunities, account engagement, pipeline, and revenue where the stack permits.',
    },
  ],
  deliverablesTitle: 'What is included in a technology SEO engagement?',
  deliverablesLead:
    'The work joins technical foundations, buyer demand, product truth, expert content, AI-answer visibility, authority, and commercial reporting.',
  deliverables: [
    {
      title: 'Technical and documentation audit',
      description:
        'A crawl-to-render review of marketing sites, product templates, documentation, developer routes, regional sites, and conversion journeys.',
      items: [
        'Rendering, indexation, canonicals, redirects, sitemaps, and robots',
        'Documentation versions, code examples, subdomains, and internal links',
        'Core Web Vitals, performance, accessibility, and reusable template defects',
        'Migration, release, and engineering QA safeguards',
      ],
    },
    {
      title: 'Buying-committee demand model',
      description:
        'A search model separating operational problems, category, role, use case, technology, integration, implementation, and decision intent.',
      items: [
        'Sales calls, support issues, documentation search, and customer language',
        'Practitioner, developer, business, security, procurement, and executive questions',
        'Competitor, alternative, build-versus-buy, and partner demand',
        'Query-to-page ownership and cannibalization rules',
      ],
    },
    {
      title: 'Product and solution architecture',
      description:
        'A connected page system that lets each evaluator understand fit and move to the right depth.',
      items: [
        'Product, capability, use-case, industry, role, and solution pages',
        'Integration, compatibility, API, migration, and documentation pages',
        'Comparison, alternative, pricing, security, and implementation content',
        'Internal links from education to product evidence and conversion',
      ],
    },
    {
      title: 'Expert content and governance',
      description:
        'Practitioner-led content with defined evidence, reviewers, sources, technical depth, and update triggers.',
      items: [
        'Technical guides, architecture decisions, benchmarks, and implementation resources',
        'Claim register for performance, compatibility, security, and outcome statements',
        'Author and reviewer signals, source hierarchy, and reviewed dates',
        'Release-linked updates and deprecation rules',
      ],
    },
    {
      title: 'Technology authority and entities',
      description:
        'Credible discovery through partners, integrations, communities, publications, research, standards, and expert participation.',
      items: [
        'Organization, product, service, technology, founder, and expert consistency',
        'Partner, marketplace, integration, developer, and industry opportunities',
        'Original research and technical assets when evidence supports them',
        'Digital PR, unlinked mentions, and cited-source analysis',
      ],
    },
    {
      title: 'AI and pipeline reporting',
      description:
        'A measurement system connecting search and answer visibility to the buying committee and accepted commercial stages.',
      items: [
        'Visibility by problem, category, product, integration, role, and decision intent',
        'AI prompt, mention, citation, source, and factual-accuracy observations',
        'Demo, evaluation, accepted lead, opportunity, pipeline, and revenue cohorts',
        'Technical releases, page experiments, and decision reporting',
      ],
    },
  ],
  aiVisibility: {
    title: 'How can a technology company enter AI-generated vendor shortlists?',
    lead:
      'Buyers ask AI systems to explain categories, compare architectures, recommend vendors, and validate integrations. Clear product facts and third-party evidence matter because a model may rely on sources beyond the company’s website.',
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
      'No agency controls an AI system’s retrieval, synthesis, or recommendation. Outputs vary, and an observed citation does not prove pipeline influence. We improve the source environment and report stable prompt observations with clear dates and limitations.',
    workstreams: [
      {
        title: 'Commercial prompt mapping',
        description:
          'Group problem, category, use-case, integration, architecture, comparison, and implementation questions by buyer and stage.',
        output: 'prompt set, source map, competitor baseline, and priority gaps',
      },
      {
        title: 'Explicit technology facts',
        description:
          'State capabilities, users, deployment, integrations, compatibility, data handling, implementation, support, and boundaries in retrievable passages.',
        output: 'answer modules, fact tables, glossary, and claim requirements',
      },
      {
        title: 'Entity and source consistency',
        description:
          'Align company, product, service, expert, technology, and partner descriptions across the site and credible external sources.',
        output: 'entity graph, discrepancy log, structured-data plan, and corroboration targets',
      },
      {
        title: 'Citation and accuracy monitoring',
        description:
          'Track stable prompt cohorts, cited sources, competitive inclusion, and whether generated product or implementation statements are materially correct.',
        output: 'dated platform observations, source changes, and correction backlog',
      },
    ],
  },
  architectureTitle: 'Which pages does a B2B technology company need?',
  architectureLead:
    'The architecture should help each member of the buying committee answer a distinct question while maintaining one coherent product and company entity.',
  architecture: [
    {
      pageType: 'Problem and solution',
      intent: 'Can this address our operational need?',
      examples: 'modernization, automation, security, cost, reliability, data, productivity',
      signal: 'specific environment, workflow, outcome logic, limits, and product route',
    },
    {
      pageType: 'Product and capability',
      intent: 'What does the technology actually do?',
      examples: 'platform, module, feature, service, hardware, cloud capability',
      signal: 'supported behavior, architecture, evidence, boundaries, and demo path',
    },
    {
      pageType: 'Integration and documentation',
      intent: 'Will it work in our environment?',
      examples: 'API, SDK, connector, compatibility, deployment, migration, implementation',
      signal: 'current examples, prerequisites, versions, limits, errors, and support',
    },
    {
      pageType: 'Industry and role',
      intent: 'Does the company understand our context?',
      examples: 'industry solution, developer, operator, IT leader, finance, security',
      signal: 'real workflow, constraints, proof, relevant capabilities, and next step',
    },
    {
      pageType: 'Evaluation and trust',
      intent: 'How do we compare and reduce risk?',
      examples: 'alternatives, versus, pricing, security, procurement, evidence, services',
      signal: 'declared criteria, approved facts, scope, limitations, and contact route',
    },
  ],
  processTitle: 'How does a technology SEO engagement work?',
  processLead:
    'The first cycle maps the product, buying committee, technical systems, claims, and pipeline. Later cycles ship controlled product and content cohorts.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Product and GTM discovery',
      description:
        'Map products, services, buyers, users, environments, claims, releases, websites, documentation, reviews, sales stages, and implementation owners.',
      output: 'product map, claim inventory, stakeholder matrix, and KPI definitions',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Technical and demand baseline',
      description:
        'Audit rendering, templates, docs, links, performance, search demand, competitors, landing pages, entities, and representative AI prompts.',
      output: 'defect backlog, demand model, visibility baseline, and measurement gaps',
    },
    {
      number: '03',
      cadence: 'Weeks 3–5',
      title: 'Buying-journey architecture',
      description:
        'Assign page ownership across problems, products, industries, roles, integrations, docs, comparisons, trust, and services.',
      output: 'page map, internal-link plan, briefs, templates, and roadmap',
    },
    {
      number: '04',
      cadence: 'Monthly',
      title: 'Implementation and expert review',
      description:
        'Ship technical fixes and priority pages with product, technical, security, legal, brand, and conversion review appropriate to each claim.',
      output: 'released work, approved content, QA log, and updated claims',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Authority and AI-answer work',
      description:
        'Build credible technical assets, partner and integration discovery, expert distribution, entity consistency, and answer-source coverage.',
      output: 'source assets, relevant citations, entity fixes, and prompt experiments',
    },
    {
      number: '06',
      cadence: 'Quarterly',
      title: 'Pipeline and product review',
      description:
        'Compare page and prompt cohorts with evaluations, accepted leads, opportunities, pipeline, releases, and sales feedback.',
      output: 'commercial report, content refreshes, experiment findings, and next roadmap',
    },
  ],
  measurementTitle: 'How should technology SEO be measured?',
  measurementLead:
    'Technology SEO should show whether relevant practitioners and buying committees found enough evidence to progress—not only whether a keyword moved.',
  measurementBoundary:
    'Long sales cycles, dark social, multi-person accounts, consent, self-reported attribution, and AI assistants limit direct causality. We combine observable search and page cohorts with approved product and CRM stages and label inference.',
  measurement: [
    {
      name: 'Qualified technology visibility',
      definition: 'Non-brand impressions, clicks, and landing-page visibility by problem, category, product, role, industry, integration, and evaluation intent.',
      source: 'Google Search Console, Bing Webmaster Tools, rank cohorts, and landing pages',
    },
    {
      name: 'Technical evaluation',
      definition: 'Documentation depth, integration views, architecture or security actions, trials, workshops, and proof-of-concept progression.',
      source: 'privacy-approved web, product, and sales systems',
    },
    {
      name: 'Accepted pipeline',
      definition: 'Qualified demos, accepted leads, evaluations, opportunities, pipeline, and revenue associated with organic page cohorts.',
      source: 'CRM and approved attribution model',
    },
    {
      name: 'AI-answer presence and accuracy',
      definition: 'Brand inclusion, cited sources, competitive context, and factual accuracy for stable problem, product, and vendor prompts.',
      source: 'versioned observations by platform, date, location, and wording',
    },
    {
      name: 'Technical and claim health',
      definition: 'Priority indexable pages, rendering and performance defects, documentation freshness, and approved claim review status.',
      source: 'crawler, monitoring, documentation inventory, release log, and claim register',
    },
  ],
  evidence: {
    title: 'What evidence can technology buyers review?',
    lead:
      'Current approved proof demonstrates TheProjectSEO’s ability to build organic and AI-search visibility. It is not represented as a B2B technology pipeline benchmark.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Technology pipeline case study image',
        description: 'Reserved for an approved client, period, page cohort, qualification rule, and attribution method.',
      },
      {
        label: 'Technology AI-answer example',
        description: 'Reserved for a dated vendor prompt, cited source, and product-fact review.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right technology SEO agency?',
  fitLead:
    'Fit is strongest when product, engineering, subject experts, marketing, and sales can work from the same definitions.',
  goodFit: [
    'You sell a real B2B technology product or service to a defined buying committee',
    'Product and technical experts can validate capabilities, integrations, and claims',
    'Engineering or website owners can implement prioritized technical changes',
    'Marketing and sales can define accepted evaluations, opportunities, and pipeline',
    'You want SEO and AI-search visibility managed as one commercial system',
  ],
  notFit: [
    'You need guaranteed rankings, citations, demos, pipeline, or revenue',
    'The product or service cannot be described with current verifiable facts',
    'The plan depends on mass AI content without technical or product review',
    'No owner can change the site, documentation, templates, or claims',
    'Success is defined only as publishing volume, impressions, or traffic',
  ],
  sources: [
    {
      label: 'Google Search Central: JavaScript SEO basics',
      url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics',
      description: 'Primary guidance for rendering and indexing JavaScript technology sites.',
    },
    {
      label: 'Google Search Central: AI features and your website',
      url: 'https://developers.google.com/search/docs/appearance/ai-features',
      description: 'Google’s primary guidance for websites appearing in its AI search experiences.',
    },
    {
      label: 'OpenAI: GPTBot documentation',
      url: 'https://platform.openai.com/docs/bots',
      description: 'Primary documentation for OpenAI web crawlers and publisher controls.',
    },
    {
      label: 'Schema.org: SoftwareApplication',
      url: 'https://schema.org/SoftwareApplication',
      description: 'A vocabulary for describing visible software application facts.',
    },
  ],
  faqTitle: 'Questions technology companies ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What does a technology SEO agency do?',
      answer:
        'It helps practitioners and buying committees discover, understand, validate, and compare a technology product or service. Work covers technical SEO, documentation, product and solution architecture, expert content, entities, authority, AI-answer monitoring, and measurement tied to evaluations and pipeline.',
    },
    {
      question: 'How is B2B technology SEO different from general B2B SEO?',
      answer:
        'Complex technology usually requires more technical and implementation evidence, documentation and integration discovery, multiple evaluator roles, release-triggered updates, and precise claims about compatibility, security, performance, and deployment. The core SEO principles remain, but the evidence and review system is more demanding.',
    },
    {
      question: 'Can you optimize product documentation and developer pages?',
      answer:
        'Yes. We review rendering, indexation, versions, navigation, code examples, errors and limits, internal links, canonical behavior, and the route between product claims and implementation proof. Technical owners validate the examples and supported behavior.',
    },
    {
      question: 'Should we create separate pages for every industry and use case?',
      answer:
        'Only when the page reflects a distinct workflow, buyer, constraint, product fit, evidence set, and conversion path. Swapping an industry name around generic copy creates little value. We establish a publication threshold and consolidate overlapping intent.',
    },
    {
      question: 'How do you connect SEO to B2B pipeline?',
      answer:
        'We group landing pages by intent, define conversion and qualification stages with sales, and connect cohorts to accepted leads, evaluations, opportunities, pipeline, and revenue where the stack and consent permit. We also report gaps and assisted influence without treating every visit as attributable revenue.',
    },
    {
      question: 'Do you optimize technology companies for ChatGPT and AI Overviews?',
      answer:
        'Yes. We map commercial prompts, improve explicit product facts and entities, inspect cited sources, build credible corroboration, and monitor inclusion and accuracy. No agency can guarantee a model citation, recommendation, or direct traffic.',
    },
    {
      question: 'How long does technology SEO take?',
      answer:
        'Timing depends on technical health, category competition, current authority, product clarity, expert access, implementation speed, and sales cycle. We establish a baseline and report controlled cohorts rather than promise a fixed ranking or pipeline date.',
    },
    {
      question: 'What does technology SEO cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on products, services, markets, site and documentation complexity, content and review ownership, implementation responsibility, authority requirements, CRM integration, and AI-answer monitoring.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Rendering, documentation, indexation, migrations, performance, and release QA.',
    },
    {
      href: '/services/content',
      label: 'SEO content systems',
      description: 'Product-led research, expert review, production, and update governance.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Prompt research, source analysis, entity clarity, and accuracy monitoring.',
    },
    {
      href: '/industries/saas',
      label: 'SaaS SEO',
      description: 'A related system for software trials, demos, opportunities, and pipeline.',
    },
  ],
  ctaEyebrow: 'Build qualified technology demand',
  ctaTitle: 'Find where product complexity and technical evidence lose buyers.',
  ctaLead:
    'Share your products, buyers, documentation, website stack, claims, and pipeline stages. We will identify the highest-priority Google and AI-search work.',
  ctaBenefits: [
    'Technical, documentation, product-page, entity, and claim assessment',
    'Priority buying-journey and AI-answer opportunities',
    'Evaluation and pipeline measurement recommendations',
  ],
}

const travel: IndustryLeadPageData = {
  slug: 'travel',
  name: 'Travel',
  serviceType: 'Travel SEO and AI search optimization',
  schemaAudience:
    'Travel brands, hotels, tour operators, destination companies, booking platforms, OTAs, transport providers, and travel technology businesses',
  metaTitle: 'Travel SEO Agency for Bookings & AI Search | TheProjectSEO',
  metaDescription:
    'Travel SEO for hotels, tours, destinations, booking platforms and travel brands. Improve direct booking, local and AI-itinerary discovery with commercial measurement.',
  eyebrow: 'Travel SEO agency · Destinations + bookings + AI search',
  title: 'Turn travel inspiration into',
  titleAccent: 'confident direct bookings.',
  directAnswer:
    'TheProjectSEO helps travel brands become discoverable from early trip inspiration through destination comparison, availability checks, and booking decisions across Google, Bing, local results, and AI-generated itineraries. We connect technical SEO, destination and inventory architecture, local entities, expert travel content, product and availability facts, authority, and AI-answer monitoring to qualified enquiries, direct bookings, assisted revenue, and partner opportunities.',
  primaryCta: 'Request a travel SEO assessment',
  bestFit:
    'Travel companies with real inventory, destinations, properties, tours, routes, or expertise; reliable availability sources; implementation access; and a measurable booking journey.',
  heroChecks: [
    'Hotels, tours, destinations, booking platforms, OTAs, transport, and travel technology',
    'Inspiration, destination, accommodation, itinerary, activity, route, and booking intent',
    'Google, Bing, maps, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity',
    'Measurement tied to availability, qualified enquiries, direct bookings, and revenue',
  ],
  journeyTitle: 'How do travelers search from inspiration to booking?',
  journeyLead:
    'Travel research is iterative. Dates, origin, destination, budget, party, weather, visa, route, availability, and personal preferences can change the answer at every stage.',
  searchJourneys: [
    {
      stage: 'Dream',
      intent: 'Choose where and when to travel',
      explanation:
        'The traveler explores destinations, seasons, experiences, budgets, trip lengths, and suitability before a fixed itinerary exists.',
      examples: ['best islands in the Philippines in February', 'one-week Rajasthan trip with family'],
      conversion: 'destination guide, itinerary inspiration, trip planner, or relevant product route',
    },
    {
      stage: 'Plan',
      intent: 'Build a workable itinerary',
      explanation:
        'The search becomes specific to neighborhoods, routes, transport, attractions, days, accessibility, weather, visas, and combinations of places.',
      examples: ['three-day Cebu itinerary without a car', 'Delhi to Jaipur route and stops'],
      conversion: 'itinerary, map, route, property, tour, or availability exploration',
    },
    {
      stage: 'Compare',
      intent: 'Evaluate products and providers',
      explanation:
        'Travelers compare location, inclusions, exclusions, room or tour type, reviews, cancellation, safety, guide quality, transport, and total cost.',
      examples: ['hotel x vs hotel y location', 'small-group Palawan tours with transfers'],
      conversion: 'property or tour detail, availability check, enquiry, or shortlist',
    },
    {
      stage: 'Book',
      intent: 'Confirm current terms and availability',
      explanation:
        'The final decision depends on live dates, party size, price, taxes, inventory, payment, cancellation, support, and whether direct booking is trustworthy.',
      examples: ['hotel x availability December 12', 'tour x cancellation policy and pickup'],
      conversion: 'direct booking, completed enquiry, call, account, or assisted revenue',
    },
  ],
  obstaclesTitle: 'Why does travel SEO traffic fail to become direct bookings?',
  obstaclesLead:
    'Travel pages can attract broad inspiration while hiding the actual product, availability, and commercial route. Technical inventory systems add another layer of duplication and freshness risk.',
  obstacles: [
    {
      title: 'Destination content competes with itself',
      problem:
        'Multiple blogs, tags, landing pages, packages, properties, and seasonal campaigns may target the same destination without a clear canonical owner.',
      response:
        'We map destination, neighborhood, route, attraction, itinerary, property, tour, and campaign intent, then consolidate overlaps and define internal-link roles.',
    },
    {
      title: 'Availability systems are hard to crawl',
      problem:
        'Client-rendered calendars, parameter combinations, session URLs, empty results, currency and locale variants, and separate booking engines can disconnect search pages from live products.',
      response:
        'We define indexable landing states, rendering and link requirements, parameter controls, structured visible facts, availability handoff, and no-result behavior with product and engineering teams.',
    },
    {
      title: 'Travel facts become outdated quickly',
      problem:
        'Opening times, transport, fees, visa rules, weather events, routes, inclusions, policies, and property details can change after a guide is published.',
      response:
        'We classify facts by risk and volatility, assign sources and owners, show reviewed dates, add verification language, and trigger updates around product and destination changes.',
    },
    {
      title: 'Bookings are over-attributed to the last click',
      problem:
        'Travelers research across devices, sessions, publishers, maps, OTAs, AI assistants, and direct visits before booking, while cancellation changes realized value.',
      response:
        'We separate discovery, availability, enquiry, booking, cancellation, and stay or travel completion; use landing-page cohorts and an agreed attribution model; and report assisted influence carefully.',
    },
  ],
  deliverablesTitle: 'What does a travel SEO agency deliver?',
  deliverablesLead:
    'The engagement connects destination expertise, technical inventory, local and product entities, AI itinerary discovery, authority, and booking measurement.',
  deliverables: [
    {
      title: 'Technical and booking audit',
      description:
        'A review of destination, property, tour, route, search-result, filter, availability, locale, currency, and booking-engine journeys.',
      items: [
        'Rendering, indexation, canonicals, redirects, sitemaps, and parameters',
        'Inventory, search, calendar, no-result, session, and booking handoff behavior',
        'Mobile performance, Core Web Vitals, media, maps, and conversion friction',
        'International, migration, platform, and release backlog',
      ],
    },
    {
      title: 'Traveler demand mapping',
      description:
        'A search model for inspiration, destination, season, itinerary, route, accommodation, activity, accessibility, comparison, and booking intent.',
      items: [
        'Traveler language from search, site search, reviews, support, and sales',
        'Origin, destination, party, duration, budget, transport, and preference clusters',
        'Evergreen, seasonal, event, disruption, and campaign demand',
        'Query-to-page ownership and cannibalization rules',
      ],
    },
    {
      title: 'Destination and product architecture',
      description:
        'A page and link system that moves travelers from useful planning information to available properties, tours, routes, or services.',
      items: [
        'Destination, neighborhood, route, itinerary, attraction, and theme hubs',
        'Property, room, tour, activity, package, and transport pages',
        'Research-to-product and destination-to-availability internal links',
        'Visible product, place, offer, review, and policy facts',
      ],
    },
    {
      title: 'Expert travel content and freshness',
      description:
        'First-hand or properly sourced planning content with clear scope, original value, review ownership, and update rules.',
      items: [
        'Destination, itinerary, route, season, accessibility, and practical guides',
        'Author experience, source, original imagery, map, and rights requirements',
        'High-volatility fact register and disruption update process',
        'Programmatic thresholds that prevent thin destination expansion',
      ],
    },
    {
      title: 'Local, brand, and destination authority',
      description:
        'Credible discovery through real places, properties, operators, guides, partners, tourism bodies, publications, and original assets.',
      items: [
        'Organization, place, property, tour, route, event, and expert entities',
        'Google Business Profile and Bing Places work for eligible real locations',
        'Tourism, partner, local, transport, media, and industry citations',
        'Digital PR based on real destination and traveler expertise',
      ],
    },
    {
      title: 'AI and booking reporting',
      description:
        'A measurement system connecting search and AI itinerary visibility to availability, direct booking, and commercial outcomes.',
      items: [
        'Visibility by destination, product, market, season, and journey stage',
        'AI prompt, itinerary inclusion, citation, source, and accuracy tracking',
        'Availability checks, enquiries, bookings, cancellations, and revenue cohorts',
        'Destination, template, and content experiments with season context',
      ],
    },
  ],
  aiVisibility: {
    title: 'How can a travel brand appear in AI-generated itineraries?',
    lead:
      'Travelers ask conversational questions that combine dates, budget, party, interests, route, weather, and constraints. AI systems may blend official sources, publishers, maps, reviews, and travel products when producing an answer.',
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
      'Generated itineraries may use outdated opening times, routes, visa information, availability, prices, safety conditions, or policies. Travelers must verify current material facts with authoritative and live sources. We cannot guarantee itinerary inclusion or recommendation.',
    workstreams: [
      {
        title: 'Traveler prompt mapping',
        description:
          'Group inspiration, itinerary, destination, route, accommodation, activity, comparison, and practical prompts with realistic constraints.',
        output: 'prompt cohorts, source map, baseline, and priority destination gaps',
      },
      {
        title: 'Place and product facts',
        description:
          'Make locations, coordinates, areas, product types, inclusions, access, duration, schedules, policies, contacts, and verification dates explicit.',
        output: 'fact templates, structured-data plan, discrepancy log, and freshness rules',
      },
      {
        title: 'Destination entity relationships',
        description:
          'Clarify connections among the brand, places, properties, tours, routes, attractions, transport, experts, and credible external sources.',
        output: 'entity graph, profile fixes, internal links, and corroboration targets',
      },
      {
        title: 'Itinerary accuracy monitoring',
        description:
          'Record brand or product inclusion, cited sources, route logic, and material fact accuracy for stable prompts before and during important seasons.',
        output: 'dated observations, source changes, risk flags, and correction backlog',
      },
    ],
  },
  architectureTitle: 'Which pages should a travel website prioritize?',
  architectureLead:
    'Travel architecture should connect useful destination knowledge to a real, current product or service while avoiding thin pages for every place-and-filter combination.',
  architecture: [
    {
      pageType: 'Destination and neighborhood',
      intent: 'Is this place right for my trip?',
      examples: 'country, region, city, island, district, neighborhood, theme',
      signal: 'first-hand or sourced utility, season, transport, map, products, and reviewed date',
    },
    {
      pageType: 'Itinerary and route',
      intent: 'How should I structure the trip?',
      examples: 'one day, three days, road trip, transfer, multi-city, public transport',
      signal: 'workable sequence, time, logistics, alternatives, verification, and product links',
    },
    {
      pageType: 'Property, tour, and activity',
      intent: 'What exactly can I book?',
      examples: 'hotel, room, tour, ticket, package, cruise, transfer, experience',
      signal: 'specific location, inclusions, exclusions, duration, policy, media, and availability route',
    },
    {
      pageType: 'Practical planning',
      intent: 'What do I need to know before going?',
      examples: 'season, weather, visa, cost, safety, accessibility, connectivity, etiquette',
      signal: 'authoritative sources, applicable market, scope, date, limitations, and update trigger',
    },
    {
      pageType: 'Brand and booking trust',
      intent: 'Can I book directly and confidently?',
      examples: 'about, reviews, guides, licenses, support, payment, cancellation, contact',
      signal: 'verified identity, clear terms, responsible owner, evidence, and support route',
    },
  ],
  processTitle: 'How does a travel SEO engagement work?',
  processLead:
    'The first cycle maps destinations, inventory, traveler journeys, platforms, sources, and booking stages. Shipping then follows season and availability reality.',
  process: [
    {
      number: '01',
      cadence: 'Weeks 1–2',
      title: 'Travel product discovery',
      description:
        'Map destinations, properties, tours, routes, inventory, markets, seasons, sources, booking systems, partners, reviewers, and commercial stages.',
      output: 'product and destination map, owner matrix, fact inventory, and KPIs',
    },
    {
      number: '02',
      cadence: 'Weeks 1–3',
      title: 'Technical and demand baseline',
      description:
        'Audit templates, availability, parameters, locales, booking handoff, performance, destination demand, competitors, entities, and AI itinerary prompts.',
      output: 'defect backlog, demand model, source risks, and baseline',
    },
    {
      number: '03',
      cadence: 'Weeks 3–5',
      title: 'Destination and booking architecture',
      description:
        'Assign ownership across places, routes, itineraries, practical guides, properties, tours, and trust pages with product-aware links.',
      output: 'page map, template and fact rules, briefs, internal links, and roadmap',
    },
    {
      number: '04',
      cadence: 'Monthly / seasonal',
      title: 'Implementation and expert review',
      description:
        'Ship technical fixes and priority pages with destination, product, operations, legal, localization, media, and mobile booking QA.',
      output: 'released cohorts, reviewed content, template changes, and QA log',
    },
    {
      number: '05',
      cadence: 'Monthly',
      title: 'Authority and itinerary work',
      description:
        'Strengthen place and brand entities, original travel assets, partner and local discovery, credible citations, and AI-answer source coverage.',
      output: 'source assets, relevant citations, entity fixes, and prompt experiments',
    },
    {
      number: '06',
      cadence: 'Quarterly / by season',
      title: 'Booking and freshness review',
      description:
        'Compare page and prompt cohorts with availability, enquiries, bookings, cancellations, completed travel, revenue, and changed destination facts.',
      output: 'commercial report, freshness backlog, experiment findings, and next roadmap',
    },
  ],
  measurementTitle: 'How should travel SEO performance be measured?',
  measurementLead:
    'The useful question is whether travelers found accurate planning information, reached available products, and completed a valuable direct or assisted booking.',
  measurementBoundary:
    'Cross-device research, maps, publishers, OTAs, AI assistants, calls, offline agents, attribution windows, cancellations, and travel completion affect causality. We use an agreed model and distinguish bookings from realized travel value.',
  measurement: [
    {
      name: 'Destination and product visibility',
      definition: 'Non-brand impressions, clicks, and landing-page discovery by destination, market, season, product, route, and journey stage.',
      source: 'Google Search Console, Bing Webmaster Tools, rank cohorts, and landing pages',
    },
    {
      name: 'Planning-to-availability progression',
      definition: 'Destination depth, itinerary and route engagement, product views, availability checks, and booking-engine handoff.',
      source: 'consent-aware web and product analytics',
    },
    {
      name: 'Direct travel outcomes',
      definition: 'Qualified enquiries, completed bookings, booking value, cancellations, and completed stays or trips where available.',
      source: 'booking platform, CRM, property system, and approved attribution model',
    },
    {
      name: 'Technical inventory health',
      definition: 'Valuable indexable products and destinations, empty or duplicate states, availability handoff, locale consistency, and regressions.',
      source: 'crawler, inventory system, logs, and release QA',
    },
    {
      name: 'AI itinerary visibility and accuracy',
      definition: 'Brand or product inclusion, cited sources, route logic, and factual accuracy for stable traveler prompts.',
      source: 'dated observations by platform, market, season, and wording',
    },
  ],
  evidence: {
    title: 'What evidence can travel teams review?',
    lead:
      'Current approved proof demonstrates strong search and AI-answer visibility in other categories. It is not represented as travel booking or destination performance.',
    ...sharedIndustryEvidence,
    slots: [
      {
        label: 'Travel booking case study image',
        description: 'Reserved for an approved destination, period, booking cohort, cancellation context, and method.',
      },
      {
        label: 'AI itinerary example',
        description: 'Reserved for a dated prompt, cited source, included product, route, and fact review.',
      },
    ],
  },
  fitTitle: 'Is TheProjectSEO the right travel SEO agency?',
  fitLead:
    'Fit is strongest when destination expertise, product availability, technical access, and booking measurement can work together.',
  goodFit: [
    'You operate real properties, tours, routes, destinations, booking products, or travel expertise',
    'Product, operations, destination, legal, localization, and technical owners can review work',
    'Availability, policies, prices or price boundaries, and conversion routes can stay current',
    'You can measure availability, enquiry, booking, cancellation, and revenue stages',
    'You want Google, local, and AI itinerary discovery managed as one system',
  ],
  notFit: [
    'You need guaranteed rankings, citations, itinerary inclusion, bookings, or revenue',
    'Inventory, destination facts, policies, or availability cannot be maintained',
    'The plan depends on scraped itineraries or thin pages for every place combination',
    'No owner can change templates, booking handoff, content, locales, or technical systems',
    'Success is defined only as inspiration traffic without product and booking context',
  ],
  sources: [
    {
      label: 'Google Search Central: localized versions',
      url: 'https://developers.google.com/search/docs/specialty/international/localized-versions',
      description: 'Primary technical guidance for multi-language and multi-region travel content.',
    },
    {
      label: 'Google Hotel Center Help',
      url: 'https://support.google.com/hotelprices/',
      description: 'Primary guidance for hotel data, prices, availability, and Google travel surfaces.',
    },
    {
      label: 'Google Business Profile Help',
      url: 'https://support.google.com/business/',
      description: 'Primary guidance for eligible properties, operators, offices, and local representation.',
    },
    {
      label: 'Schema.org: TouristTrip',
      url: 'https://schema.org/TouristTrip',
      description: 'A vocabulary for describing visible tourist trip information where appropriate.',
    },
  ],
  faqTitle: 'Questions travel brands ask before hiring an SEO agency',
  faqs: [
    {
      question: 'What does a travel SEO agency do?',
      answer:
        'It helps travelers discover destinations, routes, properties, tours, activities, and trustworthy booking information across search and AI-assisted planning. Work covers technical inventory, page architecture, expert content, international and local SEO, entities, authority, AI itinerary monitoring, and booking measurement.',
    },
    {
      question: 'Can you optimize hotels, tour operators, and booking platforms?',
      answer:
        'Yes. Each has different inventory and commercial systems, so the audit adapts to property, room, tour, date, route, filter, availability, locale, feed, and booking-engine behavior. The shared goal is to connect useful search pages to current bookable products.',
    },
    {
      question: 'How do you compete with OTAs for travel searches?',
      answer:
        'A direct brand should not copy an OTA’s breadth. It can win through first-hand destination expertise, specific product facts, local and brand authority, superior practical content, distinctive packages or service, clear policies, strong entity signals, and a trustworthy direct-booking experience.',
    },
    {
      question: 'How do you keep destination content current?',
      answer:
        'We classify facts by volatility and risk, assign authoritative sources and responsible owners, show reviewed dates, and define update triggers. Hours, routes, visa rules, fees, weather disruption, safety, and availability need more active verification than durable history or geography.',
    },
    {
      question: 'Can you support multilingual and international travel SEO?',
      answer:
        'Yes, when each market has real traveler demand, accurate local information, suitable products, and translation or localization ownership. Work covers URL structure, hreflang, canonicals, localized facts, currency and booking routes, internal links, and governance—not automated translation alone.',
    },
    {
      question: 'Do you optimize travel brands for ChatGPT and AI itineraries?',
      answer:
        'Yes. We map realistic traveler prompts, improve place and product facts, entities, useful source content, and corroboration, then monitor inclusion, citations, route logic, and accuracy. We cannot guarantee a recommendation, and travelers must verify time-sensitive facts and availability.',
    },
    {
      question: 'How long does travel SEO take?',
      answer:
        'Timing depends on destination competition, current authority, technical and inventory health, market and language count, implementation speed, product availability, seasonality, and booking cycle. We use baselines and seasonal cohorts rather than fixed-date ranking or booking promises.',
    },
    {
      question: 'What does travel SEO cost?',
      answer:
        'TheProjectSEO engagements currently start from $3,500 per month. Scope depends on destinations, products, markets, languages, inventory and booking platforms, technical implementation, content and review ownership, authority work, analytics, and AI-itinerary monitoring.',
    },
  ],
  relatedLinks: [
    {
      href: '/services/international-seo',
      label: 'International SEO',
      description: 'Markets, languages, hreflang, local facts, governance, and booking routes.',
    },
    {
      href: '/services/technical-seo',
      label: 'Technical SEO',
      description: 'Inventory, filters, rendering, indexation, migrations, performance, and release QA.',
    },
    {
      href: '/services/local-seo',
      label: 'Local SEO',
      description: 'Eligible properties, operators, profiles, reviews, and place discovery.',
    },
    {
      href: '/services/ai-search',
      label: 'AI search optimization',
      description: 'Traveler prompts, place entities, source analysis, and itinerary monitoring.',
    },
  ],
  ctaEyebrow: 'Improve travel discovery',
  ctaTitle: 'Find where destinations, inventory, and booking journeys lose travelers.',
  ctaLead:
    'Share your destinations, products, markets, platforms, availability, sources, and booking stages. We will identify the highest-priority Google and AI-search work.',
  ctaBenefits: [
    'Technical, inventory, destination, international, and entity assessment',
    'Priority traveler-intent and AI-itinerary opportunities',
    'Booking, cancellation, freshness, and measurement recommendations',
  ],
}

export const missionIndustryLeadPages = {
  food,
  nonprofit,
  technology,
  travel,
} as const satisfies Record<string, IndustryLeadPageData>
