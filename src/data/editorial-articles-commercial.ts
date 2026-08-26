import type { EditorialArticle } from './editorial-article-types'

export const commercialEditorialArticles: EditorialArticle[] = [
  {
    slug: 'seo-cost-2026',
    targetKeyword: 'how much does SEO cost',
    title: 'How Much Does SEO Cost in 2026? Price the Work, Not the Promise',
    metaTitle: 'How Much Does SEO Cost in 2026? Pricing Guide',
    description:
      'Understand what determines SEO cost, compare retainers, projects and performance models, and evaluate whether a proposal covers the work required to produce qualified growth.',
    category: 'SEO Buying Guides',
    publishedAt: '2026-08-26',
    updatedAt: '2026-08-26',
    readTime: '13 minute read',
    dek:
      'A credible SEO price is the cost of diagnosing and improving a specific search system. It should be traceable to people, deliverables, implementation and measurement—not a guaranteed ranking.',
    directAnswer:
      'SEO cost depends on the size and condition of the website, the markets and page types in scope, the strength of competitors, the evidence and content that must be created, the technical implementation required, and the reporting or attribution needed to prove business impact. Compare proposals by scope and ownership rather than headline price. A useful quote names the pages, workstreams, dependencies, people, release cadence and success measures it includes. TheProjectSEO’s full-service engagements currently start from $3,500 per month, with final scope set after the website and growth opportunity are reviewed.',
    takeaways: [
      'A price without a page, market and implementation scope is not comparable.',
      'Retainers suit continuous systems; projects suit bounded outcomes; hourly support suits specialist access.',
      'Content production is only one cost—technical delivery, authority, analytics and coordination matter too.',
      'Guaranteed rankings and undisclosed link tactics are commercial and policy risks.',
      'Judge value by qualified outcomes and durable assets, not by a monthly task count.',
    ],
    audience: [
      'Founders building an organic-growth budget for the first time.',
      'Marketing leaders comparing agency, consultant and in-house proposals.',
      'Procurement teams that need a defensible SEO scope and scorecard.',
      'Businesses deciding whether a low-cost package covers the work they actually need.',
    ],
    sections: [
      {
        id: 'why-prices-vary',
        title: 'Why do SEO prices vary so much?',
        answer:
          'The label “SEO” can describe anything from advice for one page to an international program spanning engineering, content, digital authority and revenue measurement.',
        paragraphs: [
          'A five-page professional-services site and a marketplace with millions of indexable combinations do not present the same problem. Neither do a local business in one city and a software company competing across countries. The larger or more complex the search system, the more research, prioritization, production, quality assurance and coordination the engagement requires.',
          'Current condition also matters. One site may need only better page ownership and conversion paths; another may have rendering failures, duplicate templates, a migration, weak content, untrusted claims and no lead attribution. A responsible provider investigates the constraint before prescribing the volume of work.',
        ],
        table: {
          headers: ['Scope driver', 'What changes the workload', 'What a proposal should define'],
          rows: [
            ['Website', 'URL count, templates, platforms, languages and release risk', 'Audited cohorts, templates and environments'],
            ['Demand', 'Markets, query families, search features and competitive strength', 'Priority topics, countries and page owners'],
            ['Production', 'Pages to create, consolidate, update or support with evidence', 'Quality standard, approvals and monthly capacity'],
            ['Authority', 'Existing reputation, link gap and assets worth referencing', 'Permitted methods, targets and review process'],
            ['Measurement', 'Analytics maturity, CRM stages and sales-cycle length', 'Events, dashboards, attribution and outcome definition'],
          ],
        },
      },
      {
        id: 'pricing-models',
        title: 'Which SEO pricing model should you choose?',
        answer:
          'Choose the model that matches the duration, uncertainty and ownership of the work—not the model with the smallest opening number.',
        paragraphs: [
          'A monthly retainer works when research, technical releases, content, internal linking, authority and reporting must operate together over time. A fixed project works when the deliverable and acceptance criteria are bounded, such as a migration plan or technical audit. Hourly consulting is useful when an internal team needs senior review, diagnosis or training without outsourced execution.',
          'Performance-linked pricing can align incentives, but only when the metric, baseline, attribution, exclusions and tactics are explicit. Rankings and traffic can move without creating revenue, while revenue can be influenced by brand demand, paid media, pricing, sales and product changes. Never let a simple fee formula hide who owns implementation or how risk will be managed.',
        ],
        table: {
          headers: ['Model', 'Best fit', 'Main question'],
          rows: [
            ['Monthly retainer', 'Continuous, cross-functional growth program', 'Which capabilities and implementation capacity are included each month?'],
            ['Fixed project', 'Defined audit, migration, research or build', 'What marks completion and who implements the recommendations?'],
            ['Hourly advisory', 'Specialist access for an established team', 'Is the team ready to act on the advice?'],
            ['Performance-linked', 'A measurable program with agreed controls', 'Can the outcome be attributed fairly without encouraging shortcuts?'],
          ],
        },
      },
      {
        id: 'included-work',
        title: 'What should an SEO fee include?',
        answer:
          'The fee should cover the capabilities needed to move the priority pages from search eligibility to qualified business outcomes.',
        paragraphs: [
          'For a full-service program, that commonly means technical diagnosis, page and keyword ownership, content research and production, on-page implementation, internal linking, digital authority, AI-search visibility, analytics and reporting. It should also include the coordination required to turn findings into releases. An audit that never reaches the site is not equivalent to implementation.',
          'Ask which work is performed by the named team, which is subcontracted, which requires your developers or subject-matter experts, and which costs are separate. Content, outreach, engineering and measurement often have different capacity constraints. The proposal should make those constraints visible before the work starts.',
        ],
        bullets: [
          { title: 'Diagnosis', detail: 'Current search demand, technical eligibility, page ownership, competitive evidence and conversion paths.' },
          { title: 'Production', detail: 'Approved pages, briefs, content, structured data, internal links and supporting assets.' },
          { title: 'Implementation', detail: 'CMS or code changes, release coordination, quality assurance and post-release verification.' },
          { title: 'Authority', detail: 'Legitimate promotion and link acquisition with the tactics and targets disclosed.' },
          { title: 'Measurement', detail: 'Search visibility, qualified conversions, annotations, CRM outcomes and clear limitations.' },
        ],
      },
      {
        id: 'compare-proposals',
        title: 'How do you compare two SEO proposals?',
        answer:
          'Normalize each proposal into outcomes, page cohorts, deliverables, ownership, capacity, evidence and measurement before comparing price.',
        paragraphs: [
          'One provider may quote “four articles” while another proposes two decision pages, a template fix and conversion tracking. Task counts make the first proposal look larger even when the second addresses a more valuable constraint. Map every deliverable to the audience, page and business decision it is intended to change.',
          'Request a sample roadmap, audit finding, brief and report. Look for clear prioritization, source handling, uncertainty and acceptance criteria. A good sample distinguishes confirmed facts from hypotheses and shows how work reaches implementation. It should not expose another client’s confidential data.',
        ],
        steps: [
          { title: 'Define the business outcome', detail: 'State the qualified lead, sale, application or adoption event SEO should support.' },
          { title: 'Name the page cohorts', detail: 'Identify the services, products, locations or resources in scope.' },
          { title: 'Separate advice from execution', detail: 'Record who researches, writes, develops, publishes, promotes and verifies each release.' },
          { title: 'Compare monthly capacity', detail: 'Translate vague access into realistic delivery and review capacity.' },
          { title: 'Evaluate evidence and risk', detail: 'Check sources, link methods, claims, dependencies and what happens when a hypothesis fails.' },
          { title: 'Compare measurement', detail: 'Confirm the baseline, reporting source, attribution approach and sales-quality feedback loop.' },
        ],
      },
      {
        id: 'red-flags',
        title: 'What SEO pricing red flags should you avoid?',
        answer:
          'Avoid guaranteed rankings, secret tactics, unmanaged mass production and packages that cannot explain how activity connects to an approved business outcome.',
        paragraphs: [
          'Google explicitly says nobody can guarantee a number-one ranking. A guarantee can shift attention toward an easy, irrelevant query or tactics that create policy risk. Google’s spam policies cover practices such as link spam and scaled content abuse; the commercial agreement should not reward them.',
          'A very low fee is not automatically poor, and a high fee is not automatically capable. The red flag is a mismatch between promised scope and credible capacity. Ask who will do the work, how many sites that person supports, how quality is reviewed and what is deliberately out of scope.',
        ],
        sourceIds: ['google-hire-seo', 'spam-policies'],
      },
      {
        id: 'budget-decision',
        title: 'How should you set an SEO budget?',
        answer:
          'Start from the opportunity and the work required to test it, then fund a focused program that can reach implementation and measurement.',
        paragraphs: [
          'Estimate the value of qualified organic demand, not just traffic volume. Prioritize a coherent cohort—such as high-intent service pages or a product category—where technical, content, authority and conversion work can reinforce each other. Define leading indicators and the business event that ultimately matters.',
          'TheProjectSEO begins full-service engagements from $3,500 per month. That is a starting point, not a universal recommendation. The right scope is established after reviewing the site, markets, implementation resources and measurement maturity. A smaller, executable program is more useful than a broad plan nobody can ship.',
        ],
      },
    ],
    faqs: [
      { question: 'How much does TheProjectSEO cost?', answer: 'Full-service engagements currently start from $3,500 per month. Final pricing depends on the website, markets, page cohorts, production needs, implementation responsibilities and measurement scope.' },
      { question: 'Is monthly SEO worth it?', answer: 'It can be when the site needs continuing research, releases, content, authority and measurement. A bounded project may be more appropriate when the outcome and acceptance criteria are finite.' },
      { question: 'Why do some SEO agencies charge much less?', answer: 'Scope, experience, location, automation, staffing and implementation ownership differ. Compare what will actually be researched, produced, shipped and measured instead of assuming two offers use the same definition of SEO.' },
      { question: 'Should SEO fees include link building?', answer: 'Only when the proposal defines the permitted methods, quality standard, targets, approval process and reporting. Paying for undisclosed or manipulative placement creates avoidable brand and search-policy risk.' },
      { question: 'Can an SEO agency guarantee results?', answer: 'No provider controls organic rankings or demand. A capable agency can guarantee its process, transparency, deliverables and quality controls, but not a specific position or revenue outcome.' },
    ],
    sources: [
      { id: 'google-hire-seo', name: 'Do you need an SEO?', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo', note: 'Official guidance for evaluating SEO providers, including the warning that nobody can guarantee a number-one ranking.' },
      { id: 'spam-policies', name: 'Spam policies for Google web search', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/essentials/spam-policies', note: 'Official policy definitions for link spam, scaled content abuse and other manipulative practices.' },
    ],
    relatedSlugs: ['how-to-choose-seo-company', 'pay-for-performance-seo', 'tracking-seo-conversions'],
    primaryService: { href: '/pricing', label: 'Review SEO pricing' },
    secondaryService: { href: '/services/seo', label: 'Explore full-service SEO' },
    conversionTitle: 'Price the program your growth opportunity actually needs',
    conversionBody:
      'TheProjectSEO can review your site, identify the highest-value constraint and scope the technical, content, authority and measurement work required to move it.',
    visuals: [],
  },
  {
    slug: 'google-analytics-for-seo',
    targetKeyword: 'Google Analytics for SEO',
    title: 'Google Analytics for SEO: Measure Leads, Not Just Organic Traffic',
    metaTitle: 'Google Analytics for SEO: GA4 Setup & Reporting Guide',
    description:
      'Set up GA4 for SEO with Search Console linking, meaningful events, attribution context, landing-page reporting and lead-quality feedback.',
    category: 'SEO Analytics',
    publishedAt: '2026-08-26',
    updatedAt: '2026-08-26',
    readTime: '14 minute read',
    dek:
      'GA4 becomes useful for SEO when organic landing pages are connected to meaningful funnel actions and qualified outcomes—not when every click is promoted to a conversion.',
    directAnswer:
      'Use Google Analytics 4 for SEO by linking the verified Search Console property, defining a small event taxonomy for meaningful funnel actions, marking only true business outcomes as key events, preserving campaign and referrer information, and reporting organic landing pages through engagement to qualified lead or revenue stages. Search Console explains how people found the site in Google Search; GA4 explains what measurable activity happened after the visit. The two systems use different data and should be reconciled, not expected to match exactly.',
    takeaways: [
      'Search Console and GA4 answer different parts of the search journey.',
      'Track form starts, successful submissions, calls and bookings as distinct events.',
      'Use recommended event names such as generate_lead when they fit the business action.',
      'Keep attribution settings, consent behavior, filters and channel definitions documented.',
      'Feed qualified and closed outcomes back from the CRM so SEO is not optimized for spam leads.',
    ],
    audience: [
      'Marketing teams setting up GA4 for organic acquisition.',
      'SEO practitioners building landing-page and conversion reports.',
      'Lead-generation businesses preparing measurement before paid campaigns begin.',
      'Leaders who need to reconcile Search Console traffic with analytics outcomes.',
    ],
    sections: [
      {
        id: 'gsc-versus-ga4',
        title: 'What is the difference between Search Console and GA4?',
        answer:
          'Search Console measures Google Search visibility and clicks; GA4 measures configured activity on the website and in connected digital properties.',
        paragraphs: [
          'Search Console provides queries, pages, countries, devices, search appearances, impressions, clicks, click-through rate and average position. GA4 begins after measurement code receives a visit or event. It can connect a landing page to engagement, navigation, lead actions, ecommerce activity and audiences.',
          'The numbers will not match perfectly. The products apply different processing, identity, attribution, time-zone and privacy rules. Consent choices, tag loading, redirects and channel classification can widen the gap. Use each product for the question it is designed to answer and investigate material discontinuities rather than forcing equality.',
        ],
        table: {
          headers: ['Question', 'Primary source', 'Useful dimensions'],
          rows: [
            ['Did Google show and send traffic?', 'Search Console', 'Query, page, country, device and search appearance'],
            ['What happened after the visit?', 'GA4', 'Landing page, session source, event, device and audience'],
            ['Did the lead become qualified or closed?', 'CRM or revenue system', 'Lead stage, value, owner, outcome and reason'],
          ],
        },
        sourceIds: ['link-gsc'],
      },
      {
        id: 'link-search-console',
        title: 'How do you connect Search Console to GA4?',
        answer:
          'Link an eligible Search Console property to the correct GA4 web stream, then publish and validate the Search Console report collection.',
        paragraphs: [
          'Google’s linking process requires suitable permissions in both products. Choose the web data stream that measures the same site and confirm that the property variants and canonical host are understood. The link makes Search Console data available in Analytics reports; it does not change collection on the website.',
          'After linking, verify the query and Google organic search traffic reports over a suitable date range. Record the property, stream, time zone and account owner. Access should belong to the business, with agency users added through appropriate permissions rather than shared credentials.',
        ],
        steps: [
          { title: 'Confirm ownership', detail: 'Use the intended Search Console property and the GA4 property measuring the same public website.' },
          { title: 'Select the web stream', detail: 'Choose the production stream, not a test or retired stream.' },
          { title: 'Create the link', detail: 'Complete the product link with an account that has the required permissions.' },
          { title: 'Publish the reports', detail: 'Expose the Search Console collection to relevant users in the GA4 reporting navigation.' },
          { title: 'Validate dates and landing pages', detail: 'Check that data appears after processing and that landing URLs resolve to the preferred site versions.' },
        ],
        sourceIds: ['link-gsc'],
      },
      {
        id: 'event-taxonomy',
        title: 'Which GA4 events should SEO teams track?',
        answer:
          'Track the smallest set of events needed to describe meaningful progress through the actual customer journey.',
        paragraphs: [
          'For lead generation, separate form visibility, form start, validation failure and successful submission. Track booked consultations, phone-link clicks and other high-intent actions only when they are relevant. A success event should fire after confirmed completion, not on a button click that may fail.',
          'Google recommends generate_lead for a submitted form or request for information and provides additional lead events for later lifecycle stages. Use recommended names where their meaning fits, add parameters for useful context, and document every event. Mark only outcomes that deserve business attention as key events.',
        ],
        table: {
          headers: ['Journey point', 'Example event', 'Validation rule'],
          rows: [
            ['Interest', 'form_start', 'A person begins interacting with the lead form'],
            ['Lead created', 'generate_lead', 'The server or success state confirms a valid submission'],
            ['Meeting booked', 'appointment_booked', 'The scheduling system confirms a time'],
            ['Qualified lead', 'qualify_lead', 'The defined qualification rule is met'],
            ['Revenue', 'purchase or closed_won', 'The system of record confirms value and outcome'],
          ],
        },
        sourceIds: ['recommended-events'],
      },
      {
        id: 'organic-report',
        title: 'What should an SEO report in GA4 contain?',
        answer:
          'Report organic landing-page cohorts from acquisition through key events, qualification and value, with release dates and known limitations.',
        paragraphs: [
          'Start with landing pages, because they connect a search visit to a page the SEO team can improve. Segment brand and non-brand discovery in Search Console, then use GA4 to compare engagement and funnel events by landing-page family. Service, product, location and editorial pages should not be blended when they serve different journeys.',
          'Annotate important releases outside or alongside GA4 so the team can relate changes to technical fixes, content updates, internal links and campaigns. Show counts and rates together: ten leads from twenty visits and ten leads from two thousand visits require different decisions. Add qualification or revenue where the sales cycle permits it.',
        ],
        bullets: [
          { title: 'Acquisition', detail: 'Organic users or sessions and their landing pages, with channel rules documented.' },
          { title: 'Engagement', detail: 'Useful diagnostic events such as content depth, key navigation and form starts.' },
          { title: 'Conversion', detail: 'Successful leads, bookings, purchases or other key events and their rates.' },
          { title: 'Quality', detail: 'Qualified leads, pipeline, revenue or rejection reasons from the system of record.' },
          { title: 'Change context', detail: 'Release, campaign, outage and tracking annotations that explain discontinuities.' },
        ],
      },
      {
        id: 'attribution',
        title: 'How should attribution be handled in GA4?',
        answer:
          'Treat attribution as a documented model for assigning credit, not as a perfect reconstruction of every person’s journey.',
        paragraphs: [
          'GA4 attribution settings affect how credit is assigned in reports. Review the selected reporting model and lookback windows, then explain them beside performance claims. A last-touch view answers a different question from a cross-channel model, and neither captures every offline conversation or privacy-restricted interaction.',
          'Preserve landing-page, source, medium and campaign parameters through the journey. Avoid cross-domain or referral configurations that replace the original acquisition source when someone moves through a scheduler, payment provider or another owned domain. Compare analytics with CRM and advertising records before using a number for investment decisions.',
        ],
        sourceIds: ['attribution-settings'],
      },
      {
        id: 'qa',
        title: 'How do you test an SEO analytics setup?',
        answer:
          'Run controlled journeys from organic-style landing pages to every important outcome and verify the browser, GA4 and destination system agree.',
        paragraphs: [
          'Test production after consent choices, on common devices and across every form, call, booking or checkout path. Confirm that the event fires once, includes the intended parameters and appears in DebugView or Realtime before relying on standard reports. Check that internal traffic and test leads are identified without removing legitimate users.',
          'Repeat the test after tag, form, router, cookie banner and deployment changes. Automated monitoring can detect whether endpoints or tags are present, but a human journey is still needed to catch broken success states and lost acquisition data. Maintain a measurement specification so the setup can be audited before paid media increases the cost of missing data.',
        ],
      },
    ],
    faqs: [
      { question: 'Is GA4 enough for SEO reporting?', answer: 'No. Combine GA4 with Search Console for search visibility and a CRM or revenue system for lead quality and commercial outcomes. Each source answers a different part of the journey.' },
      { question: 'Why are Search Console clicks higher than GA4 organic sessions?', answer: 'The products use different collection and processing rules. Consent, blocked tags, redirects, time zones, session definitions and channel attribution can all contribute. Investigate the gap, but do not expect exact equality.' },
      { question: 'Should every form click be a conversion?', answer: 'No. A click can occur without a successful submission. Track diagnostic interactions separately and reserve the lead outcome for a confirmed success state or server-side record.' },
      { question: 'What is a key event in GA4?', answer: 'A key event is an event the business marks as particularly important. Use it for meaningful outcomes and keep diagnostic events available without promoting every interaction.' },
      { question: 'Can GA4 track lead quality?', answer: 'GA4 can receive later-stage events or audiences, but the CRM or sales system should remain the system of record. Define privacy-safe identifiers and a controlled method for connecting stages.' },
    ],
    sources: [
      { id: 'link-gsc', name: 'Link Search Console and Google Analytics', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/10737381?hl=en', note: 'Official requirements and steps for associating Search Console data with a GA4 property.' },
      { id: 'recommended-events', name: 'Recommended events', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/9267735?hl=en', note: 'Official event naming guidance, including lead-generation lifecycle events.' },
      { id: 'attribution-settings', name: 'Select attribution settings', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/10597962?hl=en', note: 'Official explanation of reporting attribution models and lookback windows.' },
    ],
    relatedSlugs: ['tracking-seo-conversions', 'seo-cost-2026', 'technical-seo-audit'],
    primaryService: { href: '/services/analytics/seo-attribution', label: 'SEO attribution services' },
    secondaryService: { href: '/services/analytics', label: 'Explore SEO analytics' },
    conversionTitle: 'Turn organic traffic into a measurable lead system',
    conversionBody:
      'TheProjectSEO can audit GA4, Search Console and your lead journey, repair the event model and connect landing pages to qualified business outcomes before additional acquisition spend begins.',
    visuals: [],
  },
  {
    slug: 'pay-for-performance-seo',
    targetKeyword: 'pay for performance SEO',
    title: 'Pay-for-Performance SEO: Pricing Models, Risks and a Better Contract',
    metaTitle: 'Pay-for-Performance SEO: Models, Risks & Contract Guide',
    description:
      'Evaluate pay-for-performance SEO models, define fair metrics and baselines, avoid misaligned incentives, and structure an accountable engagement.',
    category: 'SEO Buying Guides',
    publishedAt: '2026-08-26',
    updatedAt: '2026-08-26',
    readTime: '13 minute read',
    dek:
      'Performance pricing is not automatically aligned. The metric and contract determine whether the provider is rewarded for durable business value or for gaming an easy proxy.',
    directAnswer:
      'Pay-for-performance SEO ties some or all fees to an agreed result such as rankings, organic traffic, qualified leads or revenue. It can work when the metric is valuable, independently measurable and influenced by the provider, and when the contract defines the baseline, attribution, brand demand, seasonality, implementation responsibilities, policy limits and outcome window. It becomes risky when payment rewards irrelevant keywords, low-quality traffic, undisclosed links or lead volume without qualification. A base fee plus a carefully defined performance component is often more workable than zero-fee-until-result arrangements because real research and implementation costs exist before results are processed.',
    takeaways: [
      'Choose a business metric before choosing a fee formula.',
      'Rankings are volatile and query-specific; traffic can rise without producing qualified demand.',
      'The contract must separate provider work from implementation, product, sales and demand factors.',
      'Permitted link and content methods should be explicit and comply with search policies.',
      'A hybrid model can preserve delivery capacity while sharing upside for verified outcomes.',
    ],
    audience: [
      'Companies considering a results-based SEO proposal.',
      'Marketing leaders designing an agency incentive plan.',
      'Procurement and finance teams reviewing performance clauses.',
      'Providers that want a fair, measurable commercial structure.',
    ],
    sections: [
      {
        id: 'models',
        title: 'What does pay-for-performance SEO mean?',
        answer:
          'It is a family of pricing models in which fees depend on a defined organic-search result, not one standard product.',
        paragraphs: [
          'A provider might charge for keywords entering an agreed position range, incremental non-brand clicks, qualified organic leads, revenue attributed to organic search, or an uplift above a baseline. These models carry very different incentives and measurement requirements. “No results, no fee” is incomplete until the result and calculation are written down.',
          'SEO outcomes are delayed and shared. Search systems control rankings, while the client controls many releases, offers, sales processes and website changes. A fair model identifies what each party controls and does not treat every external movement as the provider’s performance.',
        ],
        table: {
          headers: ['Performance unit', 'Advantage', 'Main risk'],
          rows: [
            ['Keyword position', 'Simple to observe for a defined query and market', 'Rewards easy or irrelevant terms and ignores conversion'],
            ['Organic traffic', 'Broader than one ranking', 'Can reward low-value demand, seasonality or brand growth'],
            ['Qualified lead', 'Closer to business value', 'Needs a stable qualification rule and reliable CRM source'],
            ['Revenue', 'Direct commercial alignment', 'Influenced by price, sales, retention, brand and multi-channel journeys'],
            ['Cohort uplift', 'Can focus on agreed pages and queries', 'Requires a sound baseline, control of changes and enough data'],
          ],
        },
      },
      {
        id: 'ranking-risk',
        title: 'Why is ranking-based SEO pricing risky?',
        answer:
          'A position is a changing observation for a query, location, device and result type—not a complete measure of business performance.',
        paragraphs: [
          'A contract can be satisfied by targeting a low-demand phrase or counting a brief position spike. It may also create disputes over personalization, local results, AI features and tracking-provider differences. If rankings are used, define the exact query set, country, device, data source, observation frequency and minimum sustained period.',
          'Google tells businesses that nobody can guarantee a number-one ranking. Providers can control their research, implementation quality and methods, but they cannot purchase or promise an organic position. Treat guaranteed rankings as a diligence issue, not a transferable risk.',
        ],
        sourceIds: ['google-hire-seo'],
      },
      {
        id: 'traffic-lead-risk',
        title: 'Are traffic or lead guarantees better?',
        answer:
          'They are closer to commercial value, but only if the increment, source and quality rule are defined and protected against manipulation.',
        paragraphs: [
          'Organic traffic can grow because of brand campaigns, seasonality, news, product launches or irrelevant informational content. Establish a baseline by page and query cohort, separate brand and non-brand demand, and define how major site or marketing changes will be handled. Raw percentage growth without a cohort can reward the wrong work.',
          'Lead pricing requires deduplication, spam control and a qualification standard. Decide whether an existing customer, job applicant, vendor enquiry or wrong-market submission counts. State which system records the outcome and when disputes close. A lead that never matched the target customer should not be treated like one accepted by sales.',
        ],
      },
      {
        id: 'contract',
        title: 'What should a performance SEO contract define?',
        answer:
          'The contract should make the metric, baseline, ownership, permitted methods, timing, data access and payment calculation independently auditable.',
        paragraphs: [
          'Start with a schedule that lists the page and query cohorts, geographies, measurement platforms and historical baseline. Define implementation service levels because recommendations cannot perform while they wait indefinitely for approval or development. Record material changes to domains, templates, offers, paid campaigns and analytics.',
          'Include quality and policy protections. The client should know how links are acquired, how content is produced and reviewed, and what practices are prohibited. Ownership of content, accounts, code, data and relationships should survive termination. A performance model should increase transparency, not justify secrecy.',
        ],
        bullets: [
          { title: 'Metric definition', detail: 'Exact event, cohort, qualification rule, value and exclusions.' },
          { title: 'Baseline and adjustment', detail: 'Historical window, seasonality, brand demand, migrations and extraordinary changes.' },
          { title: 'Attribution', detail: 'System of record, model, lookback period, deduplication and offline outcomes.' },
          { title: 'Responsibilities', detail: 'Research, approvals, engineering, publishing, sales follow-up and service levels.' },
          { title: 'Policy and quality', detail: 'Approved methods for content, links, automation, claims and data handling.' },
          { title: 'Payment mechanics', detail: 'Calculation date, verification, caps, floors, dispute process and termination.' },
        ],
        sourceIds: ['spam-policies'],
      },
      {
        id: 'hybrid',
        title: 'What is a better alternative to pure performance pricing?',
        answer:
          'Use a base scope for the work the program must perform and a bonus for a narrow, verified outcome both parties can influence.',
        paragraphs: [
          'The base component funds research, technical work, content, implementation support, legitimate promotion and measurement. The performance component can reward qualified non-brand pipeline or a defined cohort improvement above a baseline. Caps and review points keep the model viable when the market or website changes.',
          'This structure does not fit every program. New sites, small datasets, long sales cycles and major migrations may not produce a stable short-term baseline. In those cases, begin with a fixed diagnostic or retainer, create reliable measurement and introduce an incentive only after the data can support it.',
        ],
      },
      {
        id: 'evaluate',
        title: 'How do you evaluate a pay-for-performance SEO offer?',
        answer:
          'Model the incentive under successful, unsuccessful and ambiguous scenarios, then inspect whether the provider still benefits from work that is good for the business.',
        paragraphs: [
          'Ask which keywords, pages, leads and revenue qualify; how brand traffic is handled; which tactics will be used; and what happens when your team delays a release. Request examples of the actual deliverables and reports. The provider should be comfortable showing how a calculation can be reproduced.',
          'TheProjectSEO normally scopes SEO around the work and implementation required, with measurement tied to qualified outcomes. If a performance component is appropriate, it should follow a measurement audit and a shared definition of value—not replace them.',
        ],
        steps: [
          { title: 'Test the metric', detail: 'Would improvement still matter if every other number stayed flat?' },
          { title: 'Test attribution', detail: 'Can both parties reproduce the result from an agreed system?' },
          { title: 'Test incentives', detail: 'Could the provider earn more by targeting low-quality demand or risky tactics?' },
          { title: 'Test dependencies', detail: 'What happens when engineering, content approval, product or sales changes?' },
          { title: 'Test the downside', detail: 'Who owns assets and remediation if a tactic creates harm?' },
        ],
      },
    ],
    faqs: [
      { question: 'Is pay-for-performance SEO legitimate?', answer: 'It can be a legitimate commercial model when the metric, methods, attribution and responsibilities are transparent. The pricing label alone does not establish quality or risk.' },
      { question: 'Can an SEO company guarantee first-page rankings?', answer: 'No company controls Google’s organic rankings. A contract can define payment against observed positions, but that is not the same as guaranteeing Google will rank the page.' },
      { question: 'Should I pay per keyword?', answer: 'Only with great caution. Define valuable queries, markets, tracking methods and sustained position rules, and keep qualified business outcomes visible. Otherwise the model can reward irrelevant or easy keywords.' },
      { question: 'What is the best performance metric for SEO?', answer: 'Use the closest reliable metric to business value that the provider can materially influence. Qualified non-brand pipeline is often more meaningful than rankings, but it requires accurate tracking and a stable definition.' },
      { question: 'Why would an agency require a base fee?', answer: 'Research, production, implementation and measurement require capacity before search systems process the result. A base fee can fund that work while a bonus shares upside for verified outcomes.' },
    ],
    sources: [
      { id: 'google-hire-seo', name: 'Do you need an SEO?', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo', note: 'Official hiring guidance and the warning against guaranteed number-one rankings.' },
      { id: 'spam-policies', name: 'Spam policies for Google web search', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/essentials/spam-policies', note: 'Official policies used to evaluate risky content and link incentives.' },
    ],
    relatedSlugs: ['seo-cost-2026', 'how-to-choose-seo-company', 'tracking-seo-conversions'],
    primaryService: { href: '/services/seo-consulting', label: 'Discuss an accountable SEO scope' },
    secondaryService: { href: '/pricing', label: 'Review engagement options' },
    conversionTitle: 'Build incentives around qualified growth—not a fragile proxy',
    conversionBody:
      'TheProjectSEO can audit the opportunity and measurement model, define an executable scope and create a commercial structure that protects quality, transparency and business value.',
    visuals: [],
  },
  {
    slug: 'how-to-choose-seo-company',
    targetKeyword: 'how to choose an SEO company',
    title: 'How to Choose an SEO Company: 12 Questions Before You Sign',
    metaTitle: 'How to Choose an SEO Company: 12 Questions to Ask',
    description:
      'Choose an SEO company by evaluating diagnosis, implementation, evidence, measurement, policy risk and fit—not rankings promises or a polished sales deck.',
    category: 'SEO Buying Guides',
    publishedAt: '2026-08-26',
    updatedAt: '2026-08-26',
    readTime: '15 minute read',
    dek:
      'The best selection process makes an agency show how it thinks, ships and measures before you entrust it with your website, brand and search demand.',
    directAnswer:
      'Choose an SEO company by giving finalists the same business context and asking them to explain the site’s likely constraints, the pages they would prioritize, the evidence they still need, who will implement each change, how they handle content and links, and how success reaches qualified leads or revenue. Review sample deliverables, references, access practices and contract ownership. Avoid providers that guarantee rankings, hide tactics, prescribe high-volume output before diagnosis, or report only traffic. Select the team whose method, capacity and communication fit the work your organization can actually release.',
    takeaways: [
      'Shortlist against your problem: local, ecommerce, technical, international, content or full-service execution.',
      'Evaluate a real diagnosis and sample outputs, not only case-study headlines.',
      'Confirm who implements recommendations and how work passes quality assurance.',
      'Require transparent content, link, data-access and AI-use policies.',
      'Tie reporting to qualified outcomes and define ownership before signing.',
    ],
    audience: [
      'Founders hiring their first SEO partner.',
      'Marketing leaders replacing an agency or expanding scope.',
      'Procurement teams creating an SEO evaluation scorecard.',
      'In-house teams looking for specialist implementation support.',
    ],
    sections: [
      {
        id: 'define-need',
        title: 'What should you decide before contacting SEO companies?',
        answer:
          'Define the business outcome, website scope, internal resources, constraints and decision process so every provider responds to the same problem.',
        paragraphs: [
          'State which markets, products or services matter and what a valuable organic outcome looks like. Share known migrations, platform limits, approval requirements and analytics gaps. Decide whether you need an audit, senior advisory, production capacity, implementation or an end-to-end program.',
          'Do not write the technical solution for the agency. Give enough context for candidates to diagnose and ask good questions. A provider that immediately sells the same article or backlink package to every site has not demonstrated that its scope follows the evidence.',
        ],
      },
      {
        id: 'questions',
        title: 'What questions should you ask an SEO agency?',
        answer:
          'Ask questions that reveal how the agency diagnoses, prioritizes, implements, verifies and learns—not whether it knows fashionable terminology.',
        steps: [
          { title: 'What business outcome will guide the roadmap?', detail: 'Listen for qualified demand and page ownership, not traffic in isolation.' },
          { title: 'What do you know and what still needs investigation?', detail: 'A strong provider separates evidence, inference and missing access.' },
          { title: 'Which page cohort would you inspect first, and why?', detail: 'The answer should connect demand, current visibility, technical condition and value.' },
          { title: 'Who will work on the account?', detail: 'Meet the people responsible for strategy, production, technical delivery and reporting.' },
          { title: 'Who implements recommendations?', detail: 'Clarify CMS, code, design, content, analytics and release ownership.' },
          { title: 'How do you research and review content?', detail: 'Look for search evidence, primary sources, subject expertise, originality and editorial accountability.' },
          { title: 'How do you acquire links and mentions?', detail: 'Require permitted methods, quality criteria and full disclosure.' },
          { title: 'How do you use AI and automation?', detail: 'The provider should explain quality controls, data handling and human responsibility.' },
          { title: 'How will you measure qualified impact?', detail: 'Expect Search Console, analytics and downstream outcome definitions.' },
          { title: 'What could prevent results?', detail: 'Good partners name dependencies, uncertainty and risks before the contract.' },
          { title: 'What will we own?', detail: 'Confirm access, content, accounts, code, data, relationships and post-termination handoff.' },
          { title: 'How do you communicate and escalate?', detail: 'Agree on cadence, decision owners, change logs and what happens when priorities shift.' },
        ],
      },
      {
        id: 'evaluate-diagnosis',
        title: 'How do you evaluate an agency’s SEO diagnosis?',
        answer:
          'A credible diagnosis connects observed evidence to an affected page cohort, business consequence, recommended action and validation method.',
        paragraphs: [
          'Request a short sample based on public information or appropriately granted read-only access. It does not need to be a free full audit. The goal is to see whether the team finds a specific constraint, explains its confidence and chooses a sensible next check. Screenshots and tool scores without interpretation are not enough.',
          'The provider should distinguish eligibility from ranking, and demand from conversion. It should be willing to say when a new page is unnecessary, when two pages should be consolidated, or when measurement must be repaired before performance claims can be made.',
        ],
        table: {
          headers: ['Strong finding', 'Weak finding'],
          rows: [
            ['Names the affected URLs and intended owner', 'Says the domain has “technical issues”'],
            ['Shows the source, date and limitation', 'Uses a score without the underlying evidence'],
            ['Connects the issue to demand or conversion', 'Assumes every warning affects revenue'],
            ['Defines action, owner and acceptance criteria', 'Ends with an unprioritized task list'],
            ['Explains how the release will be verified', 'Assumes publication equals completion'],
          ],
        },
      },
      {
        id: 'proof-trust',
        title: 'What proof and trust signals should an SEO company provide?',
        answer:
          'Look for accountable people, verifiable experience, approved evidence, clear methodology, candid limitations and business-owned access.',
        paragraphs: [
          'Case studies should identify the metric source, period, work performed and relevant context. Testimonials should be attributable and permitted. A company can also demonstrate expertise through useful analysis, technical contributions, training and transparent examples without exposing client-confidential information.',
          'Verify the legal entity, website policies, named team, contact path and references appropriate to the engagement. Trust does not require publishing every client detail. It requires that public claims are supportable and that private evidence can be reviewed responsibly during diligence.',
        ],
      },
      {
        id: 'red-flags',
        title: 'What are the biggest SEO agency red flags?',
        answer:
          'Guaranteed rankings, secret link networks, unexplained automation, account lock-in and activity-only reporting all deserve scrutiny.',
        paragraphs: [
          'Google’s own hiring guidance warns that nobody can guarantee a number-one ranking. Google’s spam policies also identify manipulative link and scaled-content practices. Ask a provider to explain how its methods remain useful even if a loophole closes. Brand-safe work should not depend on concealment.',
          'Be cautious when the sales promise greatly exceeds the visible team and capacity, when every recommendation requires a proprietary account you cannot access, or when the agency will not identify who writes or approves content. A polished dashboard does not compensate for unclear data definitions or missing implementation.',
        ],
        bullets: [
          { title: 'Ranking guarantees', detail: 'No agency controls Google’s organic result selection.' },
          { title: 'Undisclosed links', detail: 'You should know how mentions are earned and where your brand appears.' },
          { title: 'Output before diagnosis', detail: 'A fixed volume of pages or links may not address the site’s constraint.' },
          { title: 'Shared credentials', detail: 'Your business should own primary accounts and grant individual access.' },
          { title: 'Vanity reporting', detail: 'Traffic and keyword totals without qualified outcomes can hide poor fit.' },
          { title: 'No implementation path', detail: 'Recommendations need owners, acceptance criteria and release verification.' },
        ],
        sourceIds: ['google-hire-seo', 'spam-policies'],
      },
      {
        id: 'scorecard',
        title: 'How should you score SEO companies?',
        answer:
          'Weight strategic fit, diagnostic quality, implementation capacity, evidence, measurement, risk and working relationship against your actual need.',
        paragraphs: [
          'Use the same scorecard and scenario for every finalist. Score the written proposal and the people who will deliver it. Ask internal stakeholders to record scores before a group discussion so a persuasive presentation does not erase operational concerns.',
          'Price belongs in the decision, but compare normalized scope and expected internal burden. A lower external fee can be more expensive if your team must write, develop and manage everything. A full-service partner may cost more while reducing handoffs and time to implementation.',
        ],
        table: {
          headers: ['Criterion', 'Suggested weight', 'Evidence to review'],
          rows: [
            ['Problem and market fit', '20%', 'Relevant diagnosis, questions and experience'],
            ['Strategy and prioritization', '20%', 'Page ownership, roadmap and trade-offs'],
            ['Delivery capacity', '20%', 'Named team, production, engineering and QA'],
            ['Measurement', '15%', 'Event definitions, reporting sample and outcome loop'],
            ['Trust and risk', '15%', 'References, policies, methods and access model'],
            ['Commercial and working fit', '10%', 'Scope, terms, communication and change process'],
          ],
        },
      },
      {
        id: 'first-90-days',
        title: 'What should happen after you hire an SEO company?',
        answer:
          'The first phase should establish access, baselines, page ownership, priority releases, measurement and a shared operating cadence.',
        paragraphs: [
          'Expect a discovery and verification period, but not an endless audit. The team should convert early findings into a prioritized release with a defined owner and acceptance criteria. At the same time, repair gaps that would prevent outcomes from being measured.',
          'TheProjectSEO works across technical SEO, content, authority, AI-search visibility and analytics so recommendations can move into implementation. The right fit is a business that wants an accountable search program connected to qualified growth, not a monthly packet of disconnected tasks.',
        ],
      },
    ],
    faqs: [
      { question: 'How many SEO agencies should I interview?', answer: 'A focused shortlist of three to five providers is usually enough to compare approaches without making the process unmanageable. Give each finalist the same context and scoring criteria.' },
      { question: 'Should an SEO agency offer a free audit?', answer: 'A short public-data assessment can reveal how the agency thinks, but a rigorous audit requires access and specialist time. Evaluate the quality of the sample rather than demanding a complete strategy before engagement.' },
      { question: 'Is a specialist or full-service SEO company better?', answer: 'Choose based on the constraint and your internal capacity. A specialist fits a narrow need; a full-service team fits work that must coordinate technical, content, authority, AI search and measurement.' },
      { question: 'How long should an SEO contract be?', answer: 'The term should reflect the scope, implementation cycle and measurement window. Require clear deliverables, review points, termination terms, data ownership and handoff regardless of length.' },
      { question: 'What should an SEO company report each month?', answer: 'Report what was learned, shipped and verified, plus page-and-query visibility and qualified outcomes. Include decisions, dependencies, risks and the next priority—not only activity totals.' },
    ],
    sources: [
      { id: 'google-hire-seo', name: 'Do you need an SEO?', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo', note: 'Google’s official questions and cautions for businesses evaluating an SEO.' },
      { id: 'spam-policies', name: 'Spam policies for Google web search', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/essentials/spam-policies', note: 'Official definitions for link spam, scaled content abuse and other practices relevant to vendor diligence.' },
    ],
    relatedSlugs: ['seo-cost-2026', 'pay-for-performance-seo', 'technical-seo-audit'],
    primaryService: { href: '/services/seo', label: 'Explore full-service SEO' },
    secondaryService: { href: '/company', label: 'Meet TheProjectSEO' },
    conversionTitle: 'Evaluate TheProjectSEO against the same questions',
    conversionBody:
      'Bring us the website, target market and business outcome. We will explain what we can verify, what needs investigation, who would own the work and how the program would reach implementation.',
    visuals: [],
  },
  {
    slug: 'tracking-seo-conversions',
    targetKeyword: 'track SEO conversions',
    title: 'How to Track SEO Conversions From Search Query to Qualified Lead',
    metaTitle: 'How to Track SEO Conversions: Query to Qualified Lead',
    description:
      'Build an end-to-end SEO conversion system across Search Console, GA4, forms, calls, scheduling and CRM outcomes without double-counting leads.',
    category: 'SEO Analytics',
    publishedAt: '2026-08-26',
    updatedAt: '2026-08-26',
    readTime: '15 minute read',
    dek:
      'A lead count is trustworthy only when the team can explain where the journey began, which event confirmed success, how duplicates were removed and whether sales accepted the enquiry.',
    directAnswer:
      'Track SEO conversions by mapping each valuable journey from Google impression and click to organic landing page, on-site action, confirmed lead record, qualification and revenue. Use Search Console for query and search-page visibility, GA4 for landing-page and event behavior, and the CRM or transaction system for lead quality and value. Define one success event per outcome, persist acquisition context where appropriate, deduplicate browser and server signals, test every form, call and scheduler path, and document attribution limits. Report page-and-query cohorts alongside qualified outcomes rather than claiming one platform contains the entire journey.',
    takeaways: [
      'Define the funnel and system of record before creating tags.',
      'A successful submission or booking is different from a button click.',
      'Search Console, GA4 and the CRM should be connected conceptually without being forced to match row for row.',
      'Deduplication, consent, cross-domain journeys and referral exclusions require explicit tests.',
      'Lead quality and revenue feedback protect SEO and paid media from optimizing toward spam.',
    ],
    audience: [
      'Lead-generation businesses that need reliable organic attribution.',
      'Marketing teams preparing their site for paid search or paid social.',
      'SEO and analytics teams reconciling platform reports.',
      'Sales leaders who want marketing conversion counts tied to accepted leads.',
    ],
    sections: [
      {
        id: 'measurement-plan',
        title: 'What should an SEO conversion measurement plan contain?',
        answer:
          'It should name the business outcome, journey steps, event definitions, required parameters, systems of record, owners, privacy rules and quality checks.',
        paragraphs: [
          'Begin with the decision the business wants to make. If the goal is more qualified consultations, define what makes a consultation qualified and where that status is recorded. Then map the forms, calls, chat, schedulers and offline handoffs a visitor can use. Tagging without this map produces events that look precise but answer no agreed question.',
          'Assign a single authoritative source at each stage. Search Console owns Google Search impressions and clicks; GA4 owns the events it receives; the CRM owns sales stages; the revenue system owns completed value. Dashboards can join or compare those sources, but should preserve their definitions and processing differences.',
        ],
        table: {
          headers: ['Stage', 'Definition', 'System of record'],
          rows: [
            ['Search visibility', 'Eligible query-page impression or click', 'Google Search Console'],
            ['Organic visit', 'Session or user classified under documented channel rules', 'GA4'],
            ['Lead', 'Confirmed valid submission, call or booking', 'Form, call or booking system plus GA4 event'],
            ['Qualified lead', 'Meets the agreed fit and intent criteria', 'CRM'],
            ['Revenue', 'Accepted transaction or closed opportunity value', 'CRM, billing or commerce platform'],
          ],
        },
      },
      {
        id: 'event-design',
        title: 'How should conversion events be designed?',
        answer:
          'Create events around confirmed state changes, use consistent names and attach only the context needed for analysis and activation.',
        paragraphs: [
          'A form button click is a diagnostic interaction, not proof that a lead exists. Fire the lead event when the form service confirms success or the visitor reaches a success state that cannot be reached accidentally. Do the same for a scheduler or purchase. When browser and server systems both send an event, use a stable event identifier and documented deduplication logic.',
          'Google’s recommended events include generate_lead and later lead-stage events such as qualify_lead. Use them when the official meaning matches your journey. Useful parameters can describe the form, service, location or content group, but avoid collecting personal information in analytics fields.',
        ],
        sourceIds: ['recommended-events'],
      },
      {
        id: 'acquisition-context',
        title: 'How do you preserve the original organic source?',
        answer:
          'Keep landing, referrer and campaign context intact across owned domains and conversion tools, then store permitted acquisition fields with the lead record.',
        paragraphs: [
          'Cross-domain schedulers, payment providers and authentication flows can create new referrals or sessions if they are not configured correctly. Test the full journey and confirm that returning to the site does not replace the original acquisition context. Use first-party, privacy-aware fields where the business needs lead-level reconciliation.',
          'Do not infer a Search Console query for an individual lead. Search Console query data is aggregated and privacy-filtered. Analyze query and page cohorts at the search layer, then connect the landing page and subsequent outcome at an appropriate aggregate level.',
        ],
        sourceIds: ['link-gsc'],
      },
      {
        id: 'calls-bookings',
        title: 'How do you track phone calls and booked meetings?',
        answer:
          'Track the interaction in analytics and confirm the actual call or booking in the provider or CRM before treating it as a lead.',
        paragraphs: [
          'A phone-link click proves only that the link was activated. If calls are important, use an approved call-tracking setup or phone system that can record answered calls, duration and qualification without exposing sensitive content. Keep number insertion, consent, local listings and business continuity in scope.',
          'For scheduling tools, test the embedded and redirect journeys, cross-domain measurement, rescheduling and cancellation states. A calendar view is not a booking. Send the business event after confirmation and reconcile it with the appointment record.',
        ],
      },
      {
        id: 'crm-loop',
        title: 'How do you connect SEO leads to CRM outcomes?',
        answer:
          'Pass a privacy-safe lead identifier and permitted acquisition context into the CRM, then return standardized qualification and revenue stages for cohort reporting.',
        paragraphs: [
          'Marketing and sales must agree on stage names, entry rules and rejection reasons. Common reasons include spam, vendor outreach, job applications, existing customers, wrong geography and no purchase intent. Those outcomes reveal whether a page attracts the right demand and whether forms make qualification clear.',
          'Do not upload personal data indiscriminately or expose it in analytics URLs and parameters. Document consent, retention, access and deletion. Where platform conversion imports are used for advertising, keep the CRM as the source of truth and monitor match or processing failures.',
        ],
        bullets: [
          { title: 'Stable identifier', detail: 'Use a controlled lead or transaction key suitable for reconciliation and deduplication.' },
          { title: 'Acquisition fields', detail: 'Store only the source, landing and campaign context the business is permitted to retain.' },
          { title: 'Lifecycle stages', detail: 'Define created, contacted, qualified, opportunity, won and lost consistently.' },
          { title: 'Rejection taxonomy', detail: 'Record why leads are invalid or unqualified so acquisition can improve.' },
          { title: 'Value', detail: 'Use an agreed pipeline or revenue value, currency and recognition rule.' },
        ],
      },
      {
        id: 'attribution-limits',
        title: 'Which attribution model should SEO use?',
        answer:
          'Use more than one view when the buying journey spans channels, and state the model and lookback window beside every claim.',
        paragraphs: [
          'Landing-page conversion reports are useful for page optimization. First-touch views help explain discovery, while cross-channel models distribute credit under a defined rule. None recreates every private, offline or cross-device interaction. Treat the result as a model for a decision, not an objective ledger of human influence.',
          'Review GA4 attribution settings and compare material investments with CRM and advertising reports. Brand demand may be influenced by organic content without producing an organic last-touch session, while an organic visit may follow paid or referral discovery. Show assisted and direct outcomes where the data supports them.',
        ],
        sourceIds: ['attribution-settings'],
      },
      {
        id: 'live-test',
        title: 'How do you run a live conversion-tracking test?',
        answer:
          'Use a uniquely identifiable test journey, verify every system in sequence and record the result in a repeatable quality-assurance log.',
        paragraphs: [
          'Start on a production landing page with controlled acquisition parameters or a documented organic simulation. Make the consent choice, complete the journey once, and capture timestamps. Confirm the browser event, GA4 Realtime or DebugView signal, lead destination, CRM record, source fields and any downstream stage event.',
          'Repeat across devices, browsers, consent states and every conversion route. Test validation errors, duplicate submissions, scheduler returns and cross-domain transitions. Re-run the matrix after releases affecting tags, forms, navigation, consent or the CRM. This is the same foundation paid campaigns need; fixing it before launch prevents paid and organic leads from disappearing into separate reporting gaps.',
        ],
        steps: [
          { title: 'Prepare', detail: 'Define the expected event, parameters, lead record and qualification outcome.' },
          { title: 'Execute once', detail: 'Complete the real production journey with a unique test marker that does not contain sensitive data.' },
          { title: 'Verify collection', detail: 'Check the tag and GA4 event name, count and parameters.' },
          { title: 'Verify delivery', detail: 'Confirm the form, call or scheduler created the expected destination record.' },
          { title: 'Verify attribution', detail: 'Check landing, source, medium, campaign and cross-domain continuity.' },
          { title: 'Verify lifecycle', detail: 'Move the test record through qualification and confirm downstream reporting.' },
          { title: 'Record and repeat', detail: 'Log the date, environment, result and owner; retest after relevant changes.' },
        ],
      },
    ],
    faqs: [
      { question: 'What counts as an SEO conversion?', answer: 'Any meaningful business action completed after an organic-search journey can count, but define primary outcomes separately from diagnostic interactions. For lead generation, a confirmed valid enquiry or booking is stronger than a button click.' },
      { question: 'Can I see the exact Google query for every lead?', answer: 'Generally no. Search Console query data is aggregated and privacy-filtered. Analyze query-to-page performance in Search Console and landing-page-to-lead outcomes in analytics and the CRM.' },
      { question: 'How do I prevent duplicate lead events?', answer: 'Fire on a confirmed state change, use stable event or lead identifiers when browser and server signals overlap, and test refreshes, retries and repeated submissions. Keep the destination system as the authoritative lead count.' },
      { question: 'Should phone-link clicks be counted as leads?', answer: 'Treat them as high-intent interactions unless a call system confirms that a valid call occurred. A click alone does not prove the call connected or qualified.' },
      { question: 'Will this tracking also work for paid ads?', answer: 'A reliable site and CRM event model provides the foundation for paid media. Paid platforms may need additional tags or conversion imports, but the core success definitions and quality loop should remain consistent.' },
    ],
    sources: [
      { id: 'recommended-events', name: 'Recommended events', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/9267735?hl=en', note: 'Official event naming guidance for lead generation and lifecycle measurement.' },
      { id: 'link-gsc', name: 'Link Search Console and Google Analytics', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/10737381?hl=en', note: 'Official guidance for making Search Console data available in GA4.' },
      { id: 'attribution-settings', name: 'Select attribution settings', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/10597962?hl=en', note: 'Official explanation of GA4 reporting attribution and lookback settings.' },
    ],
    relatedSlugs: ['google-analytics-for-seo', 'seo-cost-2026', 'how-to-choose-seo-company'],
    primaryService: { href: '/services/analytics/seo-attribution', label: 'Build reliable SEO attribution' },
    secondaryService: { href: '/services/analytics/seo-reporting', label: 'Explore SEO reporting' },
    conversionTitle: 'Make every qualified search lead traceable',
    conversionBody:
      'TheProjectSEO can map and test your entire conversion journey across Search Console, GA4, forms, calls, scheduling and CRM outcomes—then give SEO and paid media one defensible measurement foundation.',
    visuals: [],
  },
]
