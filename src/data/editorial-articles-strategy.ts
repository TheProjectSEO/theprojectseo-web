import type { EditorialArticle } from './editorial-article-types'

export const strategyEditorialArticles: EditorialArticle[] = [
  {
    slug: 'dominate-search-rankings-2025',
    targetKeyword: 'how to rank higher on Google',
    title: 'How to Rank Higher on Google: Build a Search System, Not a Bag of Tricks',
    metaTitle: 'How to Rank Higher on Google: A Practical SEO System',
    description:
      'Learn how to rank higher on Google by fixing eligibility, matching intent, building evidence, strengthening internal authority and measuring page cohorts instead of isolated positions.',
    category: 'SEO Strategy',
    publishedAt: '2024-12-15',
    updatedAt: '2026-07-28',
    readTime: '26 minute read',
    dek:
      'Higher rankings come from making the right page eligible, useful, understandable and credible for a specific search—not from adding one more keyword to every heading.',
    directAnswer:
      'To rank higher on Google, choose one page to own a clearly defined search need, make that page crawlable and indexable, answer the need more completely than competing results, support important claims with first-hand evidence and reliable sources, connect the page to a coherent topic through internal links, and earn the external recognition appropriate to the market. Measure impressions, clicks, position distribution and conversions by page-and-query cohort. There is no single setting or guaranteed timetable: ranking is the output of a maintained search system.',
    takeaways: [
      'Separate eligibility problems from competitive ranking problems before rewriting content.',
      'Assign every important search intent to one deliberate page owner.',
      'Use original evidence, clear entities and primary sources to make the page useful to people and extractable by AI systems.',
      'Build topic architecture with crawlable, contextual links instead of publishing disconnected articles.',
      'Judge progress by qualified visibility and conversion cohorts, not one vanity keyword.',
    ],
    audience: [
      'Founders and marketing leaders who need a defensible organic-growth plan.',
      'In-house SEO and content teams deciding what to fix or publish next.',
      'Businesses whose rankings have plateaued despite frequent content production.',
      'Teams adapting their Google strategy for AI Overviews and AI-assisted discovery.',
    ],
    sections: [
      {
        id: 'ranking-system',
        title: 'What actually makes a page rank higher on Google?',
        answer:
          'A page can compete when Google can access it, understand what it owns, find it useful for the query and trust the signals surrounding it.',
        paragraphs: [
          'Think in layers. The URL must first be discoverable, crawlable, renderable, canonical and indexable. It must then satisfy the search intent with enough specificity, evidence and usability to deserve selection. Internal links explain its place in the website; external references and brand signals help establish recognition. Search systems combine many signals, so a single “ranking factor” rarely explains the whole result.',
          'Relevance is query-specific. A detailed page about enterprise SEO procurement may be excellent yet wrong for someone who wants a beginner definition. Higher word count cannot repair an intent mismatch. Start by examining what the current results help a searcher do, then decide whether your business has a credible page and offer for that job.',
          'Google also changes how results are presented. A page may appear as a standard result, image, video, local result, product result or source used in an AI feature. The underlying requirement is still useful, accessible content, but the format and evidence needed to earn visibility differ by search experience.',
        ],
        table: {
          headers: ['Layer', 'Question to answer', 'Typical evidence'],
          rows: [
            ['Eligibility', 'Can the preferred URL be crawled, rendered and indexed?', 'HTTP response, directives, canonical, rendered HTML and Search Console'],
            ['Intent', 'Does this page solve the job behind the query?', 'SERP composition, query modifiers, user research and conversion path'],
            ['Quality', 'Is the answer clear, complete and demonstrably useful?', 'Original examples, expert review, sources, comparisons and task completion'],
            ['Authority', 'Why should this source be selected in this market?', 'Relevant links, citations, reputation, authorship and topic coverage'],
            ['Experience', 'Can users consume and act on the answer?', 'Mobile rendering, navigation, performance, accessibility and conversion behavior'],
          ],
        },
        sourceIds: ['seo-starter', 'ranking-systems'],
      },
      {
        id: 'eligibility-versus-ranking',
        title: 'Is the problem indexation or ranking?',
        answer:
          'Check whether the intended canonical is eligible and indexed before treating low visibility as a content competition.',
        paragraphs: [
          'Use URL Inspection and page indexing reports to identify the selected canonical, crawl state, directives and rendered output. Inspect the live page as well as the indexed record because a recent release may not have been processed. If the page is blocked, redirected, canonicalized elsewhere, returning the wrong status or missing essential rendered content, keyword edits are premature.',
          'An indexed page with a small number of impressions has a different problem. It may own a narrow topic, fail to match the dominant intent, lack internal prominence, compete with another URL or sit in a market where stronger sources satisfy the need. Segment queries instead of relying on the average position shown for the entire page.',
          'Indexation is not an entitlement. A technically valid URL can remain excluded when it duplicates another page or adds little independent value. The correct fix may be consolidation, stronger differentiation or removing the URL—not submitting it repeatedly.',
        ],
        sourceIds: ['search-console-indexing', 'seo-starter'],
      },
      {
        id: 'search-intent-owner',
        title: 'How do you match search intent without copying the SERP?',
        answer:
          'Identify the searcher’s task, expected format and decision stage, then build the most credible page your business can own.',
        paragraphs: [
          'Review the result types, titles, page formats, subtopics, entities, dates and commercial offers appearing for the target query. This reveals the consensus Google is testing, not a template you must copy. A result page dominated by definitions, guides and tools tells you more than a raw search-volume number.',
          'Write a one-sentence ownership statement: “This page helps this audience make this decision using this evidence.” Map close variants that share the same need to that owner. Split a new page only when the user task, required evidence or conversion path is materially different. This reduces cannibalization and gives internal links a clear destination.',
          'A business page can be comprehensive without disguising itself as neutral education. Explain the decision, show the process and make the relevant service easy to evaluate. The visitor should understand both the answer and whether TheProjectSEO is appropriate to implement it.',
        ],
        steps: [
          { title: 'Collect the query family', detail: 'Group the main phrase, modifiers, questions and Search Console variants by shared intent.' },
          { title: 'Classify the task', detail: 'Determine whether the searcher wants to learn, compare, diagnose, buy, visit or complete an action.' },
          { title: 'Inspect result formats', detail: 'Record guides, category pages, local packs, videos, products, discussions and AI answer patterns.' },
          { title: 'Choose one owner', detail: 'Assign the need to an existing page, consolidation target or justified new URL.' },
          { title: 'Define the next action', detail: 'Connect the answer to the service, proof, tool or contact step that continues the visitor’s job.' },
        ],
      },
      {
        id: 'helpful-evidence',
        title: 'What does useful, people-first content look like?',
        answer:
          'Useful content gives the audience a complete answer, shows how the conclusion was reached and contains evidence they could not obtain from a generic summary.',
        paragraphs: [
          'Lead with the answer, then provide the conditions and detail needed to apply it. Name the author or reviewer, disclose the method, date material changes and cite primary documentation for platform behavior. When giving practitioner advice, label it as judgment and explain the observations behind it.',
          'Original value can be a measurement method, decision framework, screenshot, template, experiment, dataset, comparison, implementation example or failure analysis. It does not require inventing a new theory. It requires doing some part of the work and showing enough of that work for a reader to trust and use it.',
          'Avoid mass-produced pages that merely exchange an industry name or city. A page should exist because the audience, constraints, proof and service are meaningfully different. Google’s guidance asks whether content was created primarily to help an existing or intended audience, not simply to capture search visits.',
        ],
        bullets: [
          { title: 'Answer before expanding', detail: 'Give a concise, quotable response near the beginning, then explain boundaries and implementation.' },
          { title: 'Show experience', detail: 'Use real workflows, examples, decisions and evidence generated while doing the work.' },
          { title: 'Use primary references', detail: 'Cite official documentation and original research for claims that can change or require verification.' },
          { title: 'State uncertainty', detail: 'Separate confirmed behavior, observed correlation and recommended practice.' },
          { title: 'Design for action', detail: 'Help the reader decide, diagnose or implement—not merely remain on the page longer.' },
        ],
        sourceIds: ['helpful-content', 'seo-starter'],
      },
      {
        id: 'entities-ai-search',
        title: 'How do entities and AI search change the work?',
        answer:
          'AI search increases the value of passages that clearly identify the subject, relationship, evidence and source while conventional Google eligibility still applies.',
        paragraphs: [
          'Use consistent names for the organization, services, people, products and markets. Explain unfamiliar acronyms, connect claims to named sources and keep important facts in visible HTML. Structured data can reinforce supported facts, but it must match what users can see and does not create authority by itself.',
          'Write sections that answer one real question directly. Descriptive headings, concise opening answers, comparison tables and explicit definitions make information easier for people to scan and for retrieval systems to extract. Follow the direct answer with nuance so the passage remains useful outside its original context.',
          'Do not create separate near-duplicate pages for “AI SEO,” “GEO,” “LLM SEO” and every phrase when the service and intent are the same. Build a strong owner that explains the terminology and the underlying search system, then create supporting pages only for genuinely distinct decisions or platforms.',
        ],
        sourceIds: ['ai-features', 'structured-data'],
      },
      {
        id: 'site-architecture',
        title: 'How do site architecture and internal links improve rankings?',
        answer:
          'Architecture improves visibility when it gives every important page a discoverable path, a clear topic parent and relevant contextual support.',
        paragraphs: [
          'Create durable hubs for services, industries, locations and editorial topics. Link from each hub to the pages it governs, and link supporting guides back to the relevant commercial page. Breadcrumbs clarify hierarchy; contextual links explain the specific relationship. Use real anchor text that tells the reader what comes next.',
          'Reconcile crawl URLs with sitemaps, Search Console landing pages, analytics and CMS records to find orphans. A URL present only in an XML sitemap may be discoverable, but it lacks the internal context and importance conveyed by editorial links.',
          'Internal links cannot make every page equally important. Decide which page should own each need and concentrate relevant paths there. When pages overlap, consolidate or reposition them before adding more links.',
        ],
        sourceIds: ['seo-starter'],
      },
      {
        id: 'authority-recognition',
        title: 'Do backlinks still matter?',
        answer:
          'Relevant external references remain valuable because they help search systems and people discover, contextualize and evaluate a source.',
        paragraphs: [
          'A useful link strategy starts with something worth referencing: original data, a public resource, a strong opinion supported by evidence, a genuinely useful tool, local expertise or a case study with an approved methodology. Outreach amplifies the asset; it cannot permanently rescue an empty one.',
          'Evaluate links by relevance, editorial independence, likely audience and placement—not only a vendor metric. Avoid schemes created primarily to manipulate rankings. Google’s spam policies specifically address link spam, scaled content abuse and other practices that can lead to lower visibility or manual action.',
          'Brand mentions, citations, reviews, expert participation and consistent entity information also support recognition. The mix differs for a local clinic, ecommerce brand and enterprise software company. Build authority in the places the intended audience and industry already trust.',
        ],
        sourceIds: ['spam-policies', 'seo-starter'],
      },
      {
        id: 'measure-improve',
        title: 'How should you measure SEO progress?',
        answer:
          'Measure the page-and-query cohort from visibility through conversion, annotate releases and compare equivalent periods before drawing conclusions.',
        paragraphs: [
          'Search Console supplies impressions, clicks, click-through rate and average position. Group queries by intent and pages by template or topic. A rising average can hide a valuable query cluster that fell, while a lower average may result from gaining new impressions at deeper positions.',
          'Connect organic landing pages to qualified actions in analytics or the CRM. Use conversions that represent the business journey: enquiries, booked consultations, sales, activated accounts or other verified outcomes. Do not declare success from traffic that never reaches a relevant offer.',
          'SEO processing is not instantaneous and demand changes independently of rankings. Record publication, internal-link, technical and promotion dates. Compare seasonality, brand versus non-brand demand and stable control cohorts where possible.',
        ],
        table: {
          headers: ['Stage', 'Metric', 'Diagnostic question'],
          rows: [
            ['Eligibility', 'Valid indexed pages and canonical state', 'Can the intended owner enter the competition?'],
            ['Visibility', 'Impressions and query coverage', 'Is the page being considered for the right needs?'],
            ['Selection', 'Clicks and CTR by position range', 'Does the result earn the visit when it appears?'],
            ['Engagement', 'Task and journey events', 'Can the visitor use the page and continue?'],
            ['Business', 'Qualified leads, revenue or activated accounts', 'Is organic visibility producing a relevant outcome?'],
          ],
        },
        sourceIds: ['search-console-performance'],
      },
      {
        id: 'prioritize-roadmap',
        title: 'What should you work on first?',
        answer:
          'Start with the constraint affecting the largest valuable page cohort that your team can change and verify confidently.',
        paragraphs: [
          'Technical eligibility on a revenue directory outranks polishing a low-demand article. Resolving three competing service pages may outrank publishing a fourth. Improving a weak page that already receives relevant impressions can produce evidence faster than launching an unrelated topic.',
          'Score opportunities by business value, affected demand, current visibility, evidence gap, implementation effort, dependency and risk. Keep technical, content, internal authority, external authority and measurement tasks in one roadmap so work is sequenced rather than performed in silos.',
          'Choose a focused first release and define what would confirm or disprove the hypothesis. SEO is cumulative, but the team still needs observable increments. The goal is not endless optimization; it is a maintained system that knows why each page exists and what decision comes next.',
        ],
      },
      {
        id: 'when-to-hire',
        title: 'When should you hire an SEO agency?',
        answer:
          'Hire specialist support when diagnosis, cross-team implementation or search measurement exceeds the capacity of the current team.',
        paragraphs: [
          'A useful agency should be able to identify page owners, show its evidence, distinguish confirmed issues from hypotheses, work with engineering and content teams, and define how releases will be validated. Ask for the actual output format—not only a promise to “improve rankings.”',
          'TheProjectSEO is designed for businesses that need Google SEO and AI-search visibility treated as one operating system. Engagements connect technical eligibility, content evidence, internal architecture, digital authority and measurement to a commercial page and conversion path.',
        ],
      },
    ],
    faqs: [
      { question: 'How long does it take to rank higher on Google?', answer: 'There is no universal timetable. Processing, competition, site history, demand, technical condition, content quality and authority all affect the result. Define leading indicators such as valid indexation and relevant impressions, then measure qualified clicks and conversions over an appropriate cohort window.' },
      { question: 'Can I pay Google for higher organic rankings?', answer: 'No. Google Ads can buy advertising placement, but it does not purchase higher organic positions. Organic and paid search can share query and conversion learning, but they use different systems.' },
      { question: 'How many keywords should one page target?', answer: 'A page should own one coherent search intent and the natural query variants that express it. The right count is determined by shared need, not an arbitrary keyword limit. Split pages when the task, audience, evidence or conversion path is materially different.' },
      { question: 'Does publishing more content increase rankings?', answer: 'Only when the additional content serves a real audience, fills a justified topic gap and strengthens the site’s architecture. Publishing overlapping or low-value pages can dilute ownership and create maintenance debt.' },
      { question: 'Will AI-generated content rank on Google?', answer: 'The production method alone does not determine usefulness. Content created with automation must still be accurate, original enough to add value, appropriately reviewed and compliant with spam policies. Scaled content made primarily to manipulate rankings is risky regardless of who or what wrote it.' },
    ],
    sources: [
      { id: 'seo-starter', name: 'SEO Starter Guide', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', note: 'Google’s foundational guidance on organization, content, links and search presentation.' },
      { id: 'ranking-systems', name: 'A guide to Google Search ranking systems', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/ranking-systems-guide', note: 'Official overview of automated ranking systems and how Google describes them.' },
      { id: 'helpful-content', name: 'Creating helpful, reliable, people-first content', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', note: 'Official self-assessment questions for usefulness, expertise and audience focus.' },
      { id: 'search-console-indexing', name: 'Page indexing report', publisher: 'Google Search Console Help', url: 'https://support.google.com/webmasters/answer/7440203?hl=en', note: 'How to investigate indexed and excluded URL states in Search Console.' },
      { id: 'search-console-performance', name: 'Performance report', publisher: 'Google Search Console Help', url: 'https://support.google.com/webmasters/answer/7576553?hl=en', note: 'Definitions and dimensions for clicks, impressions, CTR and position.' },
      { id: 'spam-policies', name: 'Spam policies for Google web search', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/essentials/spam-policies', note: 'Current policies covering link spam, scaled content abuse and other manipulative practices.' },
      { id: 'structured-data', name: 'Understand how structured data works', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data', note: 'Eligibility, accuracy and policy boundaries for machine-readable markup.' },
      { id: 'ai-features', name: 'AI features and your website', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/ai-features', note: 'Official guidance on how existing SEO fundamentals apply to Google AI experiences.' },
    ],
    relatedSlugs: ['content-optimization-checklist', 'technical-seo-audit'],
    primaryService: { href: '/services/seo', label: 'SEO services' },
    secondaryService: { href: '/services/ai-search', label: 'AI search optimization' },
    conversionTitle: 'Build a ranking system around your highest-value pages',
    conversionBody:
      'TheProjectSEO can map search demand to page ownership, diagnose the constraint holding each cohort back, and turn the evidence into a technical, content and authority roadmap your team can implement.',
    visuals: [
      { afterSection: 1, label: 'Search visibility system', description: 'Reserved for a layered diagram covering eligibility, intent, evidence, architecture, authority and measurement.', aspect: 'wide' },
      { afterSection: 7, label: 'SEO prioritization matrix', description: 'Reserved for a redacted opportunity matrix comparing business value, affected demand, confidence, effort and release risk.' },
    ],
  },
  {
    slug: 'google-algorithm-updates-2024',
    targetKeyword: 'Google algorithm updates',
    title: 'Google Algorithm Updates: Diagnose a Traffic Change Without Guessing',
    metaTitle: 'Google Algorithm Updates: Diagnosis & Recovery Guide',
    description:
      'A current, evidence-led guide to Google algorithm updates: verify confirmed updates, segment Search Console data, rule out technical and demand changes, and build a recovery plan.',
    category: 'Algorithm Updates',
    publishedAt: '2024-11-15',
    updatedAt: '2026-07-28',
    readTime: '24 minute read',
    dek:
      'A confirmed update gives you a date range, not a diagnosis. Recovery begins by identifying which pages, queries and search features changed—and which competing result became more useful.',
    directAnswer:
      'When organic traffic changes during a Google algorithm update, first verify the event on Google’s Search Status Dashboard. Annotate the rollout window, but do not assume causation. Segment Search Console by page group, query intent, country, device, search appearance and date; rule out tracking, demand, technical, migration and manual-action problems; then compare the losing pages with the results that gained. A recovery plan should address the site-wide or page-level quality gap revealed by the evidence. Reversing edits blindly or publishing more of the same content is not a diagnosis.',
    takeaways: [
      'Use Google’s Search Status Dashboard as the source of truth for confirmed update dates.',
      'Wait for a rollout to settle before treating daily volatility as a stable outcome.',
      'Separate demand, tracking, technical, manual-action and ranking-system explanations.',
      'Analyze winners and losers by page cohort and query intent, not domain-wide traffic alone.',
      'Recovery means improving the underlying system; it is not a request to undo an update.',
    ],
    audience: [
      'Businesses investigating a material organic traffic loss or gain.',
      'SEO teams preparing an algorithm-update impact report.',
      'Publishers deciding whether content, technical or authority work should lead recovery.',
      'Leaders evaluating an agency’s update-recovery claims.',
    ],
    sections: [
      {
        id: 'what-is-update',
        title: 'What is a Google algorithm update?',
        answer:
          'A Google algorithm update changes or refreshes one or more automated systems used to rank, classify or protect search results.',
        paragraphs: [
          'Google makes many changes that are not individually announced. The Search Status Dashboard records confirmed ranking incidents and named updates, including rollout dates and status. A broad core update changes how Google’s core systems assess content overall; a spam update improves systems used to detect practices that violate spam policies.',
          'An update is not necessarily a penalty against a page. Relative visibility changes because systems reassess results and competitors also change. A page can lose clicks because its position changed, a different result format appeared, demand moved, or a stronger answer began satisfying the query.',
          'Historical labels such as Panda or BERT are useful context, but an incident report should prioritize current official documentation and the measured cohort. Guessing which old system “hit” a site rarely produces an implementable fix.',
        ],
        table: {
          headers: ['Event', 'What it tells you', 'What it does not prove'],
          rows: [
            ['Confirmed core update', 'Google changed or refreshed broad ranking systems during a stated window', 'That every traffic change in the window was caused by the update'],
            ['Confirmed spam update', 'Spam-detection systems were updated or refreshed', 'That a site received a manual action'],
            ['Manual action', 'A human reviewer found a documented policy violation', 'That every ranking loss is manual'],
            ['Unconfirmed volatility', 'Tracking tools observed result movement', 'The cause, affected system or official rollout dates'],
          ],
        },
        sourceIds: ['status-dashboard', 'core-updates', 'spam-updates'],
      },
      {
        id: 'latest-confirmed-updates',
        title: 'What are the latest confirmed Google updates?',
        answer:
          'As of this page’s July 28, 2026 review, the latest completed ranking event on Google’s dashboard is the June 2026 spam update.',
        paragraphs: [
          'The table below is a dated snapshot, not a substitute for the live dashboard. The latest listed events include a June spam update, May and March core updates, a March spam update and a February Discover update. Google may add an event after this page is published, so verify the official incident history before correlating a new traffic change.',
          'The date shown is the dashboard start date. Duration matters because the result set can move during the rollout. Compare a stable period before the start with a stable period after completion; do not define “before” and “after” from two days inside the same rollout.',
          'A Discover update affects Google Discover and should not be assumed to explain an ordinary web-search cohort. Segment the product or search appearance first. Similarly, a spam update should prompt a policy review, but its presence does not prove that an affected site violated a policy.',
        ],
        table: {
          headers: ['Confirmed event', 'Started', 'Recorded duration'],
          rows: [
            ['June 2026 spam update', 'June 24, 2026', '2 days, 1 hour'],
            ['May 2026 core update', 'May 21, 2026', '11 days, 21 hours'],
            ['March 2026 core update', 'March 27, 2026', '12 days, 4 hours'],
            ['March 2026 spam update', 'March 24, 2026', '19 hours, 30 minutes'],
            ['February 2026 Discover update', 'February 5, 2026', '21 days, 17 hours'],
            ['December 2025 core update', 'December 11, 2025', '18 days, 2 hours'],
          ],
        },
        sourceIds: ['status-dashboard'],
      },
      {
        id: 'first-response',
        title: 'What should you do during a confirmed rollout?',
        answer:
          'Protect the evidence, check for catastrophic defects and avoid broad reactive changes while the result set is still moving.',
        paragraphs: [
          'Record the official start date, your local time zone and any internal releases, migrations, tracking changes, campaigns or outages. Export Search Console and analytics data before retention windows or reporting changes obscure the baseline.',
          'Check for urgent issues immediately: widespread server errors, accidental noindex, robots blocks, canonical changes, compromised pages, manual actions or analytics failure. Fix confirmed defects. Do not rewrite an entire site because a third-party sensor is volatile.',
          'Google recommends waiting until a core update finishes before analyzing the effect. Daily charts inside a rollout can reverse. Use the period to prepare cohorts and comparison windows rather than creating noise that makes the final diagnosis harder.',
        ],
        sourceIds: ['status-dashboard', 'core-updates'],
      },
      {
        id: 'diagnostic-tree',
        title: 'How do you diagnose an organic traffic drop?',
        answer:
          'Move through measurement, demand, access, policy and competition in that order so each explanation can be tested.',
        steps: [
          { title: 'Verify measurement', detail: 'Check analytics tags, consent, filters, channel definitions, Search Console property coverage and reporting delays.' },
          { title: 'Check search demand', detail: 'Compare impressions, seasonality, branded demand, news cycles and product availability—not only sessions.' },
          { title: 'Check technical access', detail: 'Review responses, robots rules, directives, canonicals, rendering, sitemaps, security and release changes.' },
          { title: 'Check Google messages', detail: 'Review manual actions, security issues, page indexing and confirmed status events.' },
          { title: 'Identify the losing cohort', detail: 'Segment pages, queries, country, device and search appearance until the affected pattern is specific.' },
          { title: 'Compare replacement results', detail: 'Record what gained, what search task it serves and which evidence or format differs.' },
        ],
        paragraphs: [
          'The order matters. If Search Console impressions are stable but analytics sessions collapse, the likely problem is not a core update. If impressions fall only for one seasonal product, demand may explain more than ranking. If one template disappears after a deployment, investigate the template before reassessing every article.',
          'Keep competing explanations alive until the evidence excludes them. A confirmed rollout can overlap a migration, a measurement bug and a demand shift. A professional diagnosis states confidence and uncertainty rather than choosing the most dramatic story.',
        ],
        sourceIds: ['debug-drops', 'performance-report'],
      },
      {
        id: 'segment-search-console',
        title: 'How should you segment Search Console data?',
        answer:
          'Segment until the change is tied to a repeatable page-and-query pattern that an owner can investigate.',
        paragraphs: [
          'Compare equivalent periods and include a longer trend. Separate brand from non-brand, informational from commercial, and stable from seasonal queries. Group pages by template, directory, topic, author, market, publish period and intended job. Add device, country and search appearance when the pattern suggests them.',
          'Use impressions to understand eligibility and demand, clicks to understand traffic, CTR within similar position ranges to inspect selection, and average position only as a distribution summary. A new set of low-position impressions can lower the average even while total visibility improves.',
          'Export the data for reproducible grouping. Search Console’s interface is useful for exploration, but an update analysis should preserve filters, definitions and cohorts so the team can repeat the comparison after the next release.',
        ],
        sourceIds: ['performance-report', 'debug-drops'],
      },
      {
        id: 'compare-winners',
        title: 'What should you compare on pages that gained?',
        answer:
          'Compare the search task, page format, evidence, scope, freshness, ownership and reputation—not superficial word counts.',
        paragraphs: [
          'Open the current result set for the affected queries. Identify whether Google now favors a different intent, such as a product category instead of a guide, a first-hand forum instead of a summary, or a current status page instead of an evergreen explainer. An intent shift requires repositioning, not keyword density.',
          'Review whether gaining pages provide original data, clearer definitions, expert authorship, primary sources, useful tools, media, transparent methods or a better decision path. Check whether they are supported by stronger topic architecture and relevant external references.',
          'Do not imitate irrelevant details merely because a winner contains them. Translate the comparison into a user or evidence gap your organization can credibly close. Sometimes the conclusion is that another site is the more appropriate answer and your page should target a different job.',
        ],
        sourceIds: ['helpful-content', 'core-updates'],
      },
      {
        id: 'core-versus-spam',
        title: 'How do core updates and spam updates differ?',
        answer:
          'Core updates broadly reassess result quality and relevance, while spam updates improve systems used to identify policy-violating behavior.',
        paragraphs: [
          'For a core update, Google recommends evaluating the content as a whole and avoiding quick fixes. Use its people-first content questions to review originality, completeness, sourcing, expertise, presentation and audience value. Improvements may help over time, but no single page change guarantees recovery at the next refresh.',
          'For a spam update, audit the documented policies directly. Relevant areas can include link spam, cloaking, hacked content, scaled content abuse, site reputation abuse or misleading functionality. Remove the underlying practice rather than disguising it.',
          'A manual action is different: Search Console names the issue and affected scope. Follow the stated policy, correct the problem completely and use the reconsideration process when applicable. An algorithmic loss has no reconsideration request.',
        ],
        sourceIds: ['core-updates', 'spam-updates', 'spam-policies'],
      },
      {
        id: 'recovery-plan',
        title: 'What belongs in an algorithm-update recovery plan?',
        answer:
          'A recovery plan should connect each affected cohort to a diagnosed gap, an owner, an implementable change and a validation method.',
        paragraphs: [
          'Start with ownership. Consolidate overlapping pages, remove unsupported claims and decide which URLs deserve maintenance. Improve the strongest owners with direct answers, first-hand evidence, primary sources, clear authorship and a path to the relevant service or product. Retire or redirect pages that no longer justify their existence.',
          'Fix structural issues that weaken the cohort: inaccessible content, unstable canonicals, thin taxonomy, orphaned pages, excessive faceted URLs, slow templates or inconsistent entity information. Strengthen internal links from relevant hubs and promote assets that genuinely deserve external citation.',
          'Sequence changes so the team can learn. Large undifferentiated rewrites make attribution difficult. Record the baseline, release date, affected URLs and expected leading indicator, then watch Google process the change without promising an exact recovery date.',
        ],
        table: {
          headers: ['Workstream', 'Example action', 'Validation'],
          rows: [
            ['Ownership', 'Consolidate competing URLs and update all internal references', 'Preferred canonical, crawl reconciliation and query concentration'],
            ['Evidence', 'Add original examples, method, reviewer and primary citations', 'Editorial QA and affected query impressions'],
            ['Architecture', 'Connect priority pages to topic and commercial hubs', 'Internal link graph, depth and crawl paths'],
            ['Technical', 'Correct template directives, rendering or performance defects', 'Staging assertions and production cohort crawl'],
            ['Authority', 'Promote a reference-worthy asset to relevant publications', 'Qualified referring sources and discovery—not purchased volume'],
          ],
        },
      },
      {
        id: 'avoid-mistakes',
        title: 'Which recovery tactics usually waste time?',
        answer:
          'Avoid tactics that change surface signals without resolving the affected audience, ownership, evidence or policy problem.',
        bullets: [
          { title: 'Changing every publication date', detail: 'A new date is not fresh information. Update the substance and explain material revisions.' },
          { title: 'Deleting content by traffic alone', detail: 'A low-traffic page may support a buyer journey or topic; evaluate intent, links, conversions and uniqueness before removal.' },
          { title: 'Adding words to match a competitor', detail: 'Length does not repair a different search task or missing first-hand evidence.' },
          { title: 'Buying emergency links', detail: 'Manipulative links introduce policy risk and do not resolve weak content ownership.' },
          { title: 'Reversing unrelated releases', detail: 'Rollback only when evidence connects a change to the affected cohort and the rollback is operationally safe.' },
          { title: 'Publishing at a higher volume', detail: 'More pages magnify a weak production system. Fix standards, ownership and maintenance first.' },
        ],
        sourceIds: ['helpful-content', 'spam-policies'],
      },
      {
        id: 'ai-search-impact',
        title: 'Can an update affect Google AI features and ordinary results differently?',
        answer:
          'Yes. Search appearance and click behavior can change even when a page retains conventional visibility, so analyze each experience separately where data permits.',
        paragraphs: [
          'AI Overviews and other result features can alter which sources are displayed and whether a user clicks. Google states that the same foundational SEO practices apply to its AI features and that pages must be indexed and eligible to appear with a snippet. There is no special AI markup required.',
          'Track ordinary web performance with Search Console and supplement it with approved third-party or referral evidence for AI platforms. Do not combine mentions, citations, impressions and clicks into one undocumented “AI visibility” score. Define each metric and preserve the underlying prompt or query sample.',
          'Improving extractable answers, entity clarity and source quality supports both human readers and retrieval systems, but it does not guarantee citation. The goal is to become the most useful and defensible source for a decision your business can serve.',
        ],
        sourceIds: ['ai-features'],
      },
      {
        id: 'specialist-help',
        title: 'When does an algorithm change need specialist help?',
        answer:
          'Specialist help is useful when the impact spans multiple directories, coincides with technical changes or cannot be separated from demand and measurement internally.',
        paragraphs: [
          'Ask a provider to show the affected cohort, competing explanations, official event timeline, result comparison and proposed validation plan. Be cautious with anyone who names a penalty without evidence or guarantees recovery on a particular date.',
          'TheProjectSEO combines technical diagnosis, content systems, entity and AI-search analysis, internal architecture and authority planning. The engagement is built to move from “traffic dropped” to an evidence-backed sequence your content, engineering and leadership teams can evaluate.',
        ],
      },
    ],
    faqs: [
      { question: 'How often does Google update its algorithm?', answer: 'Google makes many changes that are not individually announced. Named core and spam updates are recorded on the Search Status Dashboard. Use that official timeline for confirmed events rather than treating every third-party volatility alert as an announced update.' },
      { question: 'How long does a Google core update take?', answer: 'The rollout duration varies. The Search Status Dashboard records the start, completion and current status for each confirmed event. Wait for the specific rollout to complete before finalizing an impact comparison.' },
      { question: 'Can a website recover between core updates?', answer: 'Google says improvements can have an effect without waiting for the next major core update, while its systems continue changing. There is no guarantee or fixed processing date. Measure leading indicators and continue improving the underlying site.' },
      { question: 'Should I delete pages after a core update?', answer: 'Do not delete by traffic alone. Evaluate whether each page has a distinct audience and purpose, quality evidence, links, conversions and a clear owner. Consolidate or remove a page when that evidence shows it is redundant or unjustified.' },
      { question: 'Is a traffic loss during an update a Google penalty?', answer: 'Not necessarily. Most algorithmic ranking changes are not manual penalties. Check Search Console’s Manual Actions report, technical access, demand and page-query cohorts before assigning a cause.' },
    ],
    sources: [
      { id: 'status-dashboard', name: 'Google Search Status Dashboard', publisher: 'Google Search Central', url: 'https://status.search.google.com/', note: 'Official start, completion and incident status for confirmed Google Search ranking updates.' },
      { id: 'core-updates', name: 'Google Search core updates', publisher: 'Google Search Central', url: 'https://developers.google.com/search/updates/core-updates', note: 'Official guidance for assessing changes after a core update.' },
      { id: 'spam-updates', name: 'Google Search spam updates', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/spam-updates', note: 'How Google describes automated spam systems and spam updates.' },
      { id: 'spam-policies', name: 'Spam policies for Google web search', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/essentials/spam-policies', note: 'Current policy definitions and examples used when reviewing spam-related risk.' },
      { id: 'helpful-content', name: 'Creating helpful, reliable, people-first content', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', note: 'Official quality and audience self-assessment framework.' },
      { id: 'debug-drops', name: 'Debug drops in Google Search traffic', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops', note: 'Official diagnostic categories for technical, security, algorithmic, demand and reporting changes.' },
      { id: 'performance-report', name: 'Performance report', publisher: 'Google Search Console Help', url: 'https://support.google.com/webmasters/answer/7576553?hl=en', note: 'Definitions and dimensions for reproducible query and page analysis.' },
      { id: 'ai-features', name: 'AI features and your website', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/ai-features', note: 'Official eligibility and SEO guidance for Google’s AI search experiences.' },
    ],
    relatedSlugs: ['dominate-search-rankings-2025', 'content-optimization-checklist'],
    primaryService: { href: '/services/seo-consulting', label: 'SEO consulting' },
    secondaryService: { href: '/services/seo-audit', label: 'SEO audit services' },
    conversionTitle: 'Replace update speculation with a defensible diagnosis',
    conversionBody:
      'TheProjectSEO can reconstruct the event timeline, isolate affected page-and-query cohorts, rule out technical and demand changes, compare replacement results and turn the findings into a measured recovery roadmap.',
    visuals: [
      { afterSection: 2, label: 'Organic traffic loss diagnostic tree', description: 'Reserved for a decision tree separating measurement, demand, technical, policy and competitive explanations.', aspect: 'wide' },
      { afterSection: 6, label: 'Update recovery cohort report', description: 'Reserved for a redacted page-and-query cohort view with releases, official rollout dates and confidence levels.' },
    ],
  },
]
