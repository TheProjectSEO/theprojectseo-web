import type { GlossaryTerm } from './glossary-types'

const updatedAt = '2026-07-28'

export const glossaryFundamentals: GlossaryTerm[] = [
  {
    slug: 'seo',
    term: 'SEO',
    category: 'seo',
    shortDefinition:
      'SEO, or search engine optimization, is the work of improving a website so relevant people can discover, select and use its pages in unpaid search results.',
    plainEnglish:
      'SEO connects a real audience need to the best page a business can credibly provide. It includes making the page accessible to search engines, matching the search intent, proving the answer, building clear site relationships and measuring whether visibility produces a useful business outcome.',
    whyItMatters: [
      'Google, Bing and AI-assisted search systems are important discovery layers. A business that is absent when customers research a problem, compare providers or look for a local service gives that demand to another source.',
      'SEO can compound because a maintained page can keep earning relevant impressions and clicks without paying for every visit. It is not free traffic: research, engineering, content, promotion and measurement all require investment.',
      'Modern SEO also improves the underlying website. Clear page ownership, stable URLs, accurate content, accessible navigation and useful conversion paths help users whether they arrive from search, a referral or an AI citation.',
    ],
    howItWorks: [
      { title: 'Technical eligibility', detail: 'Search engines must be able to discover, crawl, render, canonicalize and index the intended URL.' },
      { title: 'Intent and content', detail: 'The page must solve the task behind the query in an appropriate format with accurate, useful and original evidence.' },
      { title: 'Architecture and entities', detail: 'Internal links, navigation, named entities and supported structured data explain what the page and organization represent.' },
      { title: 'External recognition', detail: 'Relevant links, citations, reviews and brand references help establish discovery, reputation and prominence.' },
      { title: 'Measurement and maintenance', detail: 'Teams track visibility through qualified actions, validate releases and update pages when facts or demand change.' },
    ],
    example: {
      scenario:
        'A software company has three pages describing the same enterprise reporting service. None ranks consistently, and every article links to a generic homepage.',
      interpretation:
        'SEO work would identify one commercial page owner, consolidate or reposition the overlap, link relevant guides to that owner, strengthen proof and technical eligibility, and measure the enterprise query cohort through qualified demos.',
    },
    mistakes: [
      { title: 'Treating SEO as keyword insertion', detail: 'Repeating phrases cannot repair a blocked page, wrong intent, weak evidence or unclear page ownership.' },
      { title: 'Promising a ranking position', detail: 'No agency controls Google, competitors or demand. SEO can improve conditions and measure change, not guarantee #1.' },
      { title: 'Separating traffic from the offer', detail: 'A high-volume topic has little business value when the organization cannot serve the searcher or provide a relevant next step.' },
      { title: 'Publishing without maintenance', detail: 'Outdated platform claims, broken links and stale product information erode usefulness after the initial launch.' },
    ],
    actionSteps: [
      { title: 'Define commercial page owners', detail: 'Map priority audiences and search tasks to one intended URL and conversion path.' },
      { title: 'Audit eligibility and overlap', detail: 'Review indexation, canonicals, rendering, internal links and competing pages before producing more content.' },
      { title: 'Research current results', detail: 'Inspect the live SERP, primary sources, competing evidence and formats for each important need.' },
      { title: 'Build and promote the better answer', detail: 'Improve content, experience, architecture and reference-worthy evidence, then earn relevant recognition.' },
      { title: 'Measure page-and-query cohorts', detail: 'Connect impressions and clicks to qualified leads, sales or other approved outcomes.' },
    ],
    measurement: [
      'Eligibility: valid canonical pages, indexation state, crawl and rendering evidence.',
      'Visibility: impressions, query coverage and search appearance by page cohort.',
      'Selection: clicks and CTR compared within similar query and position groups.',
      'Business: qualified enquiries, sales, activated users or another verified conversion.',
    ],
    relatedSlugs: ['serp', 'search-intent', 'internal-link'],
    relatedService: { href: '/services/seo', label: 'SEO services' },
    relatedGuide: { href: '/blog/dominate-search-rankings-2025', label: 'How to rank higher on Google' },
    faqs: [
      { question: 'What does SEO stand for?', answer: 'SEO stands for search engine optimization. It describes work that improves discovery and performance in unpaid search experiences.' },
      { question: 'Is SEO the same as Google Ads?', answer: 'No. Ads buy placements under an advertising auction. SEO improves eligibility and competitiveness in organic results. The channels can share query and conversion learning but use different systems.' },
      { question: 'How long does SEO take?', answer: 'There is no universal timetable. Technical condition, demand, competition, authority, release capacity and processing all matter. Use leading indicators and measured cohorts rather than a guaranteed date.' },
      { question: 'Does SEO also help AI search?', answer: 'The same accessible, clear, well-sourced content and entity consistency support retrieval by AI systems. AI visibility also needs platform-specific sampling because citations and referrals are not reported like ordinary rankings.' },
    ],
    sources: [
      { name: 'SEO Starter Guide', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', note: 'Google’s foundational guide to website organization, content, links and search presentation.' },
      { name: 'Do you need an SEO?', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo', note: 'Official guidance for understanding SEO services, expectations and risk.' },
    ],
    updatedAt,
  },
  {
    slug: 'serp',
    term: 'SERP',
    category: 'seo',
    shortDefinition:
      'SERP means search engine results page: the page of organic results, ads and search features returned for a query.',
    plainEnglish:
      'A SERP is the competitive environment for one search. It shows what Google or another engine believes the user may need and which result formats—web pages, local listings, products, images, videos, discussions or AI answers—can satisfy that need.',
    whyItMatters: [
      'Keyword data without the result page hides intent. The SERP reveals whether a query currently favors a guide, commercial category, local business, tool, video or another format.',
      'Search features affect clicks. A page can keep the same position while ads, AI Overviews, maps or product modules change how much attention ordinary organic results receive.',
      'SERPs vary by country, language, device, time and location. Research must record the collection context rather than assuming one screenshot represents every searcher.',
    ],
    howItWorks: [
      { title: 'Query interpretation', detail: 'The engine interprets words, entities, context, freshness and possible intent.' },
      { title: 'Candidate retrieval', detail: 'Eligible documents and specialized indexes provide pages, products, places, media and other candidates.' },
      { title: 'Ranking and assembly', detail: 'Automated systems order candidates and assemble features appropriate to the query.' },
      { title: 'Presentation', detail: 'Titles, snippets, rich results and modules are generated from supported page and platform information.' },
    ],
    example: {
      scenario:
        'The query “technical SEO audit” returns agency service pages, guides, software pages, People Also Ask questions and an AI answer.',
      interpretation:
        'The mixed SERP indicates several possible jobs. A service page should own buying intent, while an in-depth guide can own the audit process and route qualified readers to the service. One page does not need to imitate every format.',
    },
    mistakes: [
      { title: 'Checking only blue links', detail: 'Ignoring ads, maps, products, videos and AI features produces an incomplete click and format model.' },
      { title: 'Copying the ranking pages', detail: 'The SERP provides intent evidence, not permission to reproduce competitors’ structure or claims.' },
      { title: 'Using an unlocalized result', detail: 'A US desktop SERP may be irrelevant for a mobile customer in India or the Philippines.' },
      { title: 'Treating one result as permanent', detail: 'Results change with demand, updates, inventory, location and competing pages.' },
    ],
    actionSteps: [
      { title: 'Set the research context', detail: 'Record query, country, language, device, engine and collection date.' },
      { title: 'Classify result types', detail: 'Note organic formats, ads, local, product, video, discussion and AI features.' },
      { title: 'Compare the leading pages', detail: 'Review audience, task, depth, entities, evidence, freshness and offer.' },
      { title: 'Choose the intended owner', detail: 'Select the page format and conversion path your business can credibly support.' },
    ],
    measurement: [
      'SERP composition and feature changes for the monitored query set.',
      'Impressions, clicks and CTR by search appearance where reporting supports it.',
      'Result overlap between keyword variants used for page clustering.',
      'Qualified conversion rate for the page format selected from the analysis.',
    ],
    relatedSlugs: ['search-intent', 'featured-snippet', 'rich-result'],
    relatedService: { href: '/services/seo-consulting', label: 'SEO research and consulting' },
    relatedGuide: { href: '/blog/keyword-research-tools-2025', label: 'Keyword research tools and workflow' },
    faqs: [
      { question: 'What does SERP stand for?', answer: 'SERP stands for search engine results page.' },
      { question: 'What is a SERP feature?', answer: 'A SERP feature is a result format beyond or enhancing a standard web listing, such as a local pack, product module, featured snippet, knowledge panel or AI Overview.' },
      { question: 'Why do two people see different SERPs?', answer: 'Location, language, device, time, search history, experiments and available inventory can change result composition.' },
      { question: 'Does ranking position equal traffic?', answer: 'No. Query demand, position, snippet appeal, ads and other features all affect clicks. Measure actual impressions and clicks for your property.' },
    ],
    sources: [
      { name: 'Visual Elements gallery', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/visual-elements-gallery', note: 'Official reference for common visual elements in Google Search results.' },
      { name: 'Performance report', publisher: 'Google Search Console Help', url: 'https://support.google.com/webmasters/answer/7576553?hl=en', note: 'Definitions for impressions, clicks, CTR, position and search appearance.' },
    ],
    updatedAt,
  },
  {
    slug: 'keyword',
    term: 'Keyword',
    category: 'seo',
    shortDefinition:
      'An SEO keyword is a word or phrase used to represent a search need and connect that need to an intended page.',
    plainEnglish:
      'People type or speak queries; SEO tools call the researched phrases keywords. The useful unit is not a string by itself but the audience, intent, result set and page ownership behind it.',
    whyItMatters: [
      'Keyword research exposes the language customers use instead of the terminology a company assumes they use.',
      'A keyword map prevents several pages from competing for the same task and makes content, internal linking and conversion planning more deliberate.',
      'Volume and difficulty can prioritize research, but relevance and the organization’s ability to serve the searcher determine business value.',
    ],
    howItWorks: [
      { title: 'Discovery', detail: 'Collect language from Search Console, customers, sales, paid queries, tools, competitors and live results.' },
      { title: 'Qualification', detail: 'Add intent, location, demand, commercial fit, seasonality and source context.' },
      { title: 'Clustering', detail: 'Group phrases that share the same result intent and expected page.' },
      { title: 'Mapping', detail: 'Assign each cluster to an existing owner, consolidation or justified new page.' },
      { title: 'Measurement', detail: 'Track the query family through relevant visibility and qualified outcomes.' },
    ],
    example: {
      scenario:
        '“SEO agency,” “SEO company” and “search optimization agency” return materially similar service results in the target country.',
      interpretation:
        'The phrases likely belong to one service page owner. Creating three near-duplicate pages would divide internal signals and give users no distinct value.',
    },
    mistakes: [
      { title: 'Using volume as a forecast', detail: 'Tool volume is an estimate and does not equal future clicks or sales.' },
      { title: 'One page per phrase', detail: 'Close variants commonly share intent; forced separation creates overlap.' },
      { title: 'Ignoring the live SERP', detail: 'A semantic cluster can still contain phrases with different expected formats or tasks.' },
      { title: 'Targeting outside the offer', detail: 'Traffic is not qualified when the business cannot deliver the searched product, market or outcome.' },
    ],
    actionSteps: [
      { title: 'List customer problems and offers', detail: 'Start with actual products, services, objections, alternatives and locations.' },
      { title: 'Expand with several datasets', detail: 'Combine first-party queries, customer language, market tools and result pages.' },
      { title: 'Cluster by intent', detail: 'Use language similarity as a start and SERP overlap as a check.' },
      { title: 'Map and prioritize', detail: 'Add page owner, commercial fit, current visibility, evidence advantage and effort.' },
    ],
    measurement: [
      'Relevant query impressions and coverage for the intended page owner.',
      'Share of clicks and conversions across brand and non-brand query groups.',
      'Overlap: how often multiple URLs receive impressions for the same need.',
      'Qualified outcome per cluster rather than total keyword count.',
    ],
    relatedSlugs: ['search-intent', 'long-tail-keyword', 'keyword-difficulty'],
    relatedService: { href: '/services/seo-consulting', label: 'Keyword research and SEO consulting' },
    relatedGuide: { href: '/blog/keyword-research-tools-2025', label: 'Best keyword research tools' },
    faqs: [
      { question: 'Is a keyword the same as a search query?', answer: 'In everyday SEO they are often used interchangeably. Query usually describes what a person actually searched, while keyword can describe the phrase an advertiser or SEO team researches and targets.' },
      { question: 'How many keywords should a page target?', answer: 'One coherent intent and the natural variants that express it. There is no useful fixed count.' },
      { question: 'Where can I find keywords for free?', answer: 'Use Search Console for existing visibility, customer and site-search language, Google Trends, Keyword Planner access and manual result research.' },
      { question: 'Does exact-match wording need to appear repeatedly?', answer: 'No. Use terminology clearly and naturally. Complete intent, evidence and entity relationships matter more than a density formula.' },
    ],
    sources: [
      { name: 'Performance report', publisher: 'Google Search Console Help', url: 'https://support.google.com/webmasters/answer/7576553?hl=en', note: 'First-party query, page, country and device reporting.' },
      { name: 'About Keyword Planner forecasts', publisher: 'Google Ads Help', url: 'https://support.google.com/google-ads/answer/3022575', note: 'Official context for Google Ads keyword ideas and forecasts.' },
    ],
    updatedAt,
  },
  {
    slug: 'long-tail-keyword',
    term: 'Long-tail Keyword',
    category: 'seo',
    shortDefinition:
      'A long-tail keyword is a relatively specific, lower-frequency search query, often expressing a narrow problem, attribute or decision.',
    plainEnglish:
      '“Long tail” describes the demand distribution, not a rule that every phrase must contain three or more words. A short query can be rare and specific; a long phrase can still be popular. The strategic value is clearer intent, not word count.',
    whyItMatters: [
      'Specific queries often expose the audience, use case, location, constraint or product attribute needed to build a more relevant page.',
      'Individually small query groups can create meaningful aggregate demand and may convert well when they map closely to an offer.',
      'Long-tail visibility commonly comes from a strong page covering the underlying topic, not hundreds of pages created for every phrase.',
    ],
    howItWorks: [
      { title: 'Specific modifiers', detail: 'Audience, location, feature, problem, comparison and urgency narrow the need.' },
      { title: 'Demand distribution', detail: 'A small set of head terms has high volume while many distinct queries occur less often.' },
      { title: 'Shared ownership', detail: 'Related long-tail phrases often resolve to one comprehensive category, service or guide.' },
      { title: 'First-party discovery', detail: 'Search Console, site search and sales language reveal variants absent from commercial tools.' },
    ],
    example: {
      scenario:
        '“SEO” is broad. “Technical SEO audit for a multilingual Shopify store” identifies service type, platform and site constraint.',
      interpretation:
        'The specific phrase can inform a section, case example or landing-page decision. It does not automatically justify a separate page unless the intent and offer differ from the existing owner.',
    },
    mistakes: [
      { title: 'Defining it as 3+ words', detail: 'Word count is a common shortcut, but specificity and demand distribution are the meaningful properties.' },
      { title: 'Mass-producing exact-match pages', detail: 'Near-duplicate pages for every modifier create thin content and ownership conflict.' },
      { title: 'Assuming low volume means easy', detail: 'Specialized queries can have strong incumbents, limited inventory or high trust requirements.' },
      { title: 'Ignoring zero-volume language', detail: 'Tools may not report granular queries that still appear in first-party data and convert.' },
    ],
    actionSteps: [
      { title: 'Mine first-party language', detail: 'Review Search Console, paid terms, support, sales, reviews and internal search.' },
      { title: 'Group modifiers', detail: 'Organize audience, problem, feature, location, comparison and urgency patterns.' },
      { title: 'Check result overlap', detail: 'See whether variants return the same page type and leading URLs.' },
      { title: 'Strengthen the owner', detail: 'Add the missing decision detail and internal links to the page that already owns the task.' },
    ],
    measurement: [
      'Growth in relevant low-frequency query coverage for the owner page.',
      'Aggregate impressions, clicks and conversions from the long-tail cluster.',
      'Number of competing internal URLs for the cluster.',
      'Lead quality or revenue by modifier when sample size is sufficient.',
    ],
    relatedSlugs: ['keyword', 'search-intent', 'keyword-difficulty'],
    relatedService: { href: '/services/content', label: 'SEO content strategy' },
    relatedGuide: { href: '/blog/keyword-research-tools-2025', label: 'Keyword research workflow' },
    faqs: [
      { question: 'How many words are in a long-tail keyword?', answer: 'There is no required count. Many are long phrases, but long tail refers to demand distribution and specificity rather than a 3-word rule.' },
      { question: 'Do long-tail keywords have lower competition?', answer: 'Often, but not always. Evaluate the actual result set, intent and evidence required.' },
      { question: 'Should each long-tail keyword have its own page?', answer: 'No. Map phrases that share the same task to one comprehensive owner. Create a separate page only when the user need and value are distinct.' },
      { question: 'Where do long-tail ideas come from?', answer: 'Search Console, customer conversations, paid queries, site search, reviews, autocomplete, forums and related-question research.' },
    ],
    sources: [
      { name: 'Performance report', publisher: 'Google Search Console Help', url: 'https://support.google.com/webmasters/answer/7576553?hl=en', note: 'First-party query evidence for a verified website.' },
      { name: 'Think with Google: the long tail', publisher: 'Google', url: 'https://www.thinkwithgoogle.com/marketing-strategies/search/long-tail-keyword-search/', note: 'Background on specific queries and the long tail of search demand.' },
    ],
    updatedAt,
  },
  {
    slug: 'search-intent',
    term: 'Search Intent',
    category: 'seo',
    shortDefinition:
      'Search intent is the task or outcome a person is trying to achieve with a query.',
    plainEnglish:
      'Intent explains why the search happened. Common labels such as informational, navigational, commercial and transactional are useful summaries, but the practical job is more specific: learn a definition, diagnose a loss, compare providers, find a nearby clinic or buy a compatible product.',
    whyItMatters: [
      'A technically perfect page can fail when its format and offer do not match the job represented by the current results.',
      'Intent determines page ownership. A service page, category, product, location, guide and tool serve different decisions even when they use similar words.',
      'Intent can be mixed or change over time. Live SERP research and first-party query data reveal which task Google currently prioritizes.',
    ],
    howItWorks: [
      { title: 'Language signals', detail: 'Modifiers such as how, near me, price, best, versus and buy suggest a task but do not prove it alone.' },
      { title: 'Result consensus', detail: 'Ranking page types and features reveal the formats currently satisfying the query.' },
      { title: 'Audience context', detail: 'Country, device, prior knowledge and market can change the expected answer.' },
      { title: 'Journey connection', detail: 'The right next step follows the completed task rather than interrupting it.' },
    ],
    example: {
      scenario:
        '“SEO audit” may return audit service pages, software and educational checklists.',
      interpretation:
        'The SERP contains mixed commercial and informational intent. A site can use a service page for buyers and a detailed guide for self-assessment, with clear internal links between the distinct owners.',
    },
    mistakes: [
      { title: 'Relying on one label', detail: '“Informational” is too broad to specify the answer, evidence and next decision.' },
      { title: 'Forcing a commercial page', detail: 'A hard sales page rarely satisfies a query that expects an independent definition or workflow.' },
      { title: 'Copying the dominant format', detail: 'Format fit matters, but the page still needs original evidence and relevance to the business.' },
      { title: 'Ignoring query drift', detail: 'Events, platform changes and result features can change the job represented by a phrase.' },
    ],
    actionSteps: [
      { title: 'Write the searcher’s job', detail: 'Describe what the person wants to know, decide, find or complete.' },
      { title: 'Inspect result and feature types', detail: 'Record guides, products, local, video, discussion, tools and AI answers.' },
      { title: 'Define the evidence', detail: 'List the facts, examples, comparisons or proof needed to complete the task.' },
      { title: 'Choose the page and next action', detail: 'Assign one owner and a conversion appropriate to the completed job.' },
    ],
    measurement: [
      'Query-to-page concentration and result switching between internal URLs.',
      'Qualified engagement events that show the task was completed.',
      'CTR within comparable position ranges and result formats.',
      'Conversion quality for the intended journey stage.',
    ],
    relatedSlugs: ['keyword', 'serp', 'long-tail-keyword'],
    relatedService: { href: '/services/on-page-seo', label: 'On-page SEO services' },
    relatedGuide: { href: '/blog/content-optimization-checklist', label: 'SEO content optimization checklist' },
    faqs: [
      { question: 'What are the main types of search intent?', answer: 'Informational, navigational, commercial investigation and transactional are common labels. Local and task-specific intent often needs more precise description.' },
      { question: 'How can I identify search intent?', answer: 'Combine query language with the current result types, features, leading pages and customer context.' },
      { question: 'Can one keyword have mixed intent?', answer: 'Yes. Google may show several formats when people use the same phrase for different jobs.' },
      { question: 'Can search intent change?', answer: 'Yes. Demand, events, products, language and search-system testing can change result composition over time.' },
    ],
    sources: [
      { name: 'SEO Starter Guide', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', note: 'Google’s guidance on anticipating search terms and creating useful content.' },
      { name: 'Creating helpful, reliable content', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', note: 'Audience-first questions used to evaluate whether a page serves its intended visitors.' },
    ],
    updatedAt,
  },
  {
    slug: 'keyword-difficulty',
    term: 'Keyword Difficulty',
    category: 'seo',
    shortDefinition:
      'Keyword difficulty is a third-party tool score estimating how competitive it may be to rank for a query, usually on a 0–100 scale.',
    plainEnglish:
      'Difficulty is a vendor model, not a Google metric or a probability. Many tools emphasize the backlink strength of current results; some add authority, intent or SERP factors. Scores from different providers are not directly interchangeable.',
    whyItMatters: [
      'The score can quickly sort a large keyword list and highlight result sets that deserve manual review.',
      'It cannot decide whether your page matches intent, offers better evidence, has internal support or can convert the audience.',
      'A high-value query with a high score may remain strategically important, while an easy query outside the offer is still a poor investment.',
    ],
    howItWorks: [
      { title: 'Result collection', detail: 'The provider identifies the pages ranking for the selected country and query.' },
      { title: 'Competitive inputs', detail: 'Models commonly analyze referring domains, page or domain authority and result composition.' },
      { title: 'Normalized score', detail: 'The inputs become a proprietary scale, often 0–100.' },
      { title: 'Manual qualification', detail: 'An SEO reviews intent, content gaps, brand fit, current visibility and the real competitors.' },
    ],
    example: {
      scenario:
        'A tool reports KD 70 for “enterprise SEO agency” and KD 15 for a broad marketing definition unrelated to the company’s services.',
      interpretation:
        'The harder enterprise term may be the better investment because one qualified lead matters commercially. The roadmap can build its page, evidence and authority over time while using nearer-term supporting opportunities.',
    },
    mistakes: [
      { title: 'Comparing vendors directly', detail: 'Ahrefs KD, Moz Keyword Difficulty and Semrush KD use different data and formulas.' },
      { title: 'Using a universal cutoff', detail: 'A DR 10 and DR 80 site should not automatically pursue the same “under 30” list.' },
      { title: 'Ignoring the page type', detail: 'A guide cannot displace a product category when the query expects shopping.' },
      { title: 'Calling the score Google competition', detail: 'Google does not publish or use the vendor’s difficulty score.' },
    ],
    actionSteps: [
      { title: 'Choose one provider for comparison', detail: 'Keep the data source and country consistent across the opportunity set.' },
      { title: 'Inspect the top results', detail: 'Review format, intent, authority, evidence, freshness and result features.' },
      { title: 'Add site-specific advantage', detail: 'Score current visibility, relevant expertise, internal links, assets and commercial value.' },
      { title: 'Sequence the roadmap', detail: 'Balance quick evidence opportunities with strategic queries that require cumulative authority.' },
    ],
    measurement: [
      'Use difficulty only as a planning input and retain provider/date metadata.',
      'Measure actual impressions and position distributions after the page enters results.',
      'Compare effort and qualified outcomes across difficulty bands.',
      'Review whether score changes reflect the SERP or a vendor model update.',
    ],
    relatedSlugs: ['keyword', 'serp', 'backlink'],
    relatedService: { href: '/services/seo-consulting', label: 'SEO opportunity research' },
    relatedGuide: { href: '/blog/keyword-research-tools-2025', label: 'Keyword tool comparison' },
    faqs: [
      { question: 'What is a good keyword difficulty score?', answer: 'There is no universal threshold. Evaluate the provider, current site, intent, leading results, evidence advantage and business value.' },
      { question: 'Is keyword difficulty a Google metric?', answer: 'No. It is a proprietary metric created by SEO tool providers.' },
      { question: 'Can a new site rank for a difficult keyword?', answer: 'It is possible, but the result depends on intent fit, page quality, authority, market and time. A roadmap often builds supporting evidence and recognition first.' },
      { question: 'Why do Ahrefs and Semrush show different scores?', answer: 'They use different indexes, formulas and update schedules. Compare opportunities within one consistent dataset.' },
    ],
    sources: [
      { name: 'What does KD stand for?', publisher: 'Ahrefs Help Center', url: 'https://help.ahrefs.com/en/articles/72265-what-does-kd-stand-for-in-keywords-explorer', note: 'Current provider documentation for how Ahrefs describes its KD score.' },
      { name: 'Keyword Difficulty score', publisher: 'Semrush Knowledge Base', url: 'https://www.semrush.com/kb/1158-what-is-kd', note: 'Current provider documentation for Semrush keyword difficulty and related fields.' },
    ],
    updatedAt,
  },
]
