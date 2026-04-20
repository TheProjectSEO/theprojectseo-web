import type { Industry } from './types';

// 20 industries. Current 16 live + 4 new to build in M1.
// Dynamic /industries/[industry]/[service]/ consumes priorityServiceSlugs
// to generate the industry x service matrix.
//
// serviceContent: top 20 highest-commercial-intent combinations are enriched with
// unique heroDescription, valueProps, and faqs. Remaining ~60 combinations fall
// back to generic copy in entity-page-template.tsx.

export const industries: Industry[] = [
  {
    slug: 'saas',
    name: 'SaaS',
    priorityServiceSlugs: ['seo', 'google-ads', 'aeo', 'content'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'seo': {
        heroDescription: 'SaaS companies that invest in organic search reduce CAC by 35-60% compared to paid-only acquisition. We build keyword architectures around your product\'s job-to-be-done terms, comparison queries, and integration pages that capture buyers at every funnel stage.',
        valueProps: [
          'Product-led keyword mapping: integrations, use cases, and competitor alternative pages drive 40-60% of SaaS organic demo requests',
          'Bottom-of-funnel first: "/best [tool] alternative" and "[competitor] vs [your tool]" pages convert at 3-5x the rate of top-of-funnel blog posts',
          'Trial and demo conversion tracking wired to GSC and GA4 so you see organic pipeline, not just sessions',
          'Content cluster architecture built around your ICP\'s job titles and pain points, not generic software keywords',
        ],
        faqs: [
          {
            question: 'How is SEO different for SaaS versus traditional software?',
            answer: 'SaaS buyers research heavily before starting a trial. They search for comparisons ("[your product] vs [competitor]"), integrations ("does [product] connect with Salesforce"), use-case fit ("best [category] tool for [team type]"), and pricing. We structure your keyword architecture around these intent layers, not just broad category terms, which is why SaaS SEO produces pipeline rather than just traffic.',
          },
          {
            question: 'Should we prioritise blog content or product pages for SEO?',
            answer: 'Product and comparison pages first, always. "/alternatives-to-[competitor]" and "/[feature]-software" pages sit 2-3 steps from a trial start. Blog content is valuable for top-of-funnel awareness and topical authority, but we do not start there. In the first 90 days we focus on your bottom-funnel pages, then layer content clusters on top once those pages are indexed and ranking.',
          },
          {
            question: 'How do you measure SEO ROI for a SaaS product?',
            answer: 'We connect Google Search Console to your analytics and trial/demo events so you see: organic sessions by landing page type, trial starts attributed to organic, MRR from organically-acquired trials (if CRM data is available), and organic CAC versus paid CAC. Most SaaS clients see their organic CAC drop below $400 within 9-12 months compared to $1,200+ for paid acquisition in competitive categories.',
          },
        ],
      },
      'google-ads': {
        heroDescription: 'SaaS Google Ads campaigns fail when they target awareness keywords and hope for trial conversions. We build tightly segmented campaigns around high-intent queries: competitor comparisons, integration searches, and bottom-of-funnel use-case terms that signal active evaluation.',
        valueProps: [
          'Bottom-of-funnel campaign structure: separate ad groups for each competitor comparison term, each integration search, and each use-case keyword',
          'Trial-start conversion tracking with LTV attribution so bids optimise toward customers, not just signups',
          'Negative keyword lists built from your churned-customer data to exclude low-fit segments that inflate trial counts',
          'Remarketing sequences targeting users who visited pricing or comparison pages but did not convert',
        ],
        faqs: [
          {
            question: 'What keywords should a SaaS company bid on in Google Ads?',
            answer: 'Three categories drive the best return for SaaS: (1) competitor brand terms like "[competitor] alternatives" or "[competitor] pricing" where searchers are already evaluating options; (2) high-intent use-case terms like "project management software for agencies"; and (3) integration queries like "[product] Salesforce integration". Generic category terms like "project management software" are expensive and attract low-fit signups. We audit your keyword list against trial-to-paid conversion data to cut spend on terms that produce signups but not customers.',
          },
          {
            question: 'How do you track Google Ads ROI for a SaaS business?',
            answer: 'We set up conversion tracking at three points: trial start (or free signup), trial-to-paid conversion (via server-side event or CRM webhook), and MRR attribution. This lets us calculate cost-per-customer and payback period by campaign. Most SaaS companies running Google Ads without this visibility are optimising for trial volume, not revenue — and paying 2-3x more than they should.',
          },
          {
            question: 'How much should a SaaS company spend on Google Ads per month?',
            answer: 'It depends on your average contract value and payback tolerance. A rule of thumb: if your ACV is $3,000 and you close 20% of trials, you can justify spending up to $600 per trial start (at a 1-year payback). We model this before launch so your starting budget is tied to a specific CAC target, not an arbitrary number. Typical early-stage SaaS clients start at $5,000-$15,000 per month and scale once the trial-to-paid rate is proven.',
          },
        ],
      },
      'aeo': {
        heroDescription: 'AI search tools now answer 30-40% of SaaS research queries without a click. We build structured content, entity profiles, and citation-worthy data assets that get your product cited in ChatGPT, Perplexity, and Google\'s AI Overviews when buyers ask which tool to use.',
        valueProps: [
          'Entity-first architecture: your product is structured as a named entity with clear attributes, use cases, and differentiated claims that AI models can cite',
          'Citation-ready content: comparison articles, data studies, and methodology pages written in the format AI citation systems favour',
          'AI Overview optimisation: structured FAQ and feature comparison blocks that appear in Google\'s AI Overviews for product category searches',
          'Monitoring: weekly tracking of how many AI-generated answers mention your product versus competitors',
        ],
        faqs: [
          {
            question: 'Why does AEO matter specifically for SaaS companies?',
            answer: 'SaaS buyers increasingly start their research with AI prompts like "what is the best CRM for small B2B teams" rather than Google searches. If your product is not cited in these AI-generated answers, you are invisible to a growing segment of evaluators before they even reach your website. AEO is the discipline of making your product\'s claims, data, and differentiation legible to these AI systems so you show up in the answer, not just in the search results.',
          },
          {
            question: 'How is AEO different from standard SEO for a SaaS product?',
            answer: 'Standard SEO optimises for ranking in the 10 blue links. AEO optimises for being cited inside AI-generated answers, which often appear above organic results. For SaaS, this means: (1) building dedicated "what is [product]" and "[product] vs [competitor]" pages with structured data; (2) publishing original research and benchmark data that AI tools treat as authoritative; (3) registering your product entity in Wikidata and Crunchbase so AI models have verified facts to cite. These are different deliverables from standard content SEO.',
          },
          {
            question: 'How do you measure whether our SaaS product is appearing in AI answers?',
            answer: 'We track this through a combination of prompt monitoring (running weekly queries in ChatGPT, Perplexity, and Claude that your buyers are likely to ask), Google Search Console AI Overview impression data, and third-party tools like Ahrefs Brand Radar that track AI mention frequency. We baseline your visibility on day one and report monthly on citation share versus your top 3 competitors.',
          },
        ],
      },
    },
  },
  {
    slug: 'fintech',
    name: 'Fintech',
    priorityServiceSlugs: ['seo', 'technical-seo', 'digital-pr', 'abm'],
    status: 'planned',
    launchPhase: 'M1',
    serviceContent: {
      'seo': {
        heroDescription: 'Fintech SEO operates under Google\'s Your Money or Your Life (YMYL) standards, meaning thin content or weak E-E-A-T signals result in algorithmic suppression. We build authority-first programmes: expert-authored content, clear authorship markup, and regulatory-compliant copy that ranks without Google penalty risk.',
        valueProps: [
          'E-E-A-T architecture: author pages, credentials, editorial process documentation, and fact-checking disclosures that satisfy Google\'s YMYL quality signals',
          'Regulatory-aware content: every piece reviewed against applicable financial disclosure requirements before publication',
          'Comparison and calculator pages: high-converting content formats that capture "best savings account" and "credit card comparison" traffic with genuine utility',
          'Trust signal audit: identifying and fixing the E-E-A-T gaps that cause fintech content to underperform algorithmically',
        ],
        faqs: [
          {
            question: 'Why is fintech SEO harder than SEO in other industries?',
            answer: 'Google classifies financial content as YMYL — meaning a bad recommendation could harm users financially. As a result, Google applies stricter quality signals: author expertise, editorial standards, site reputation, and factual accuracy. Fintech sites that publish generic keyword content without strong E-E-A-T signals routinely get downranked in core algorithm updates. Our fintech SEO programmes start with an E-E-A-T audit before touching a single keyword.',
          },
          {
            question: 'How do you handle regulatory compliance in fintech content?',
            answer: 'We research applicable regulations (FCA, SEC, CFPB, RBI, or others depending on market) before content planning. Content that could be interpreted as financial advice is clearly disclaimed, attributed to licensed professionals where required, and reviewed by your compliance team before publication. We treat regulatory review as a standard step in the content workflow, not an afterthought.',
          },
          {
            question: 'What keywords drive the most qualified leads for a fintech company?',
            answer: 'This depends on your product segment. For B2C fintech: product-specific comparison terms ("best high-yield savings accounts 2025"), calculator queries ("how much should I save per month"), and rate-based searches drive high-intent traffic. For B2B fintech: integration and API queries, compliance workflow searches, and payment volume tier terms signal buying intent. We map keywords to your specific product before proposing any content plan.',
          },
        ],
      },
      'digital-pr': {
        heroDescription: 'Fintech companies need authoritative backlinks from financial media to build the domain trust Google requires for YMYL rankings. We place original research, data stories, and expert commentary in Forbes, Business Insider, TechCrunch, and sector-specific publications that move your domain rating and establish regulatory credibility.',
        valueProps: [
          'Data-led story pitches: consumer spending studies, interest rate analyses, and payment behaviour reports that financial journalists want to cover',
          'Regulatory commentary placement: your leadership positioned as expert sources on compliance changes, rate decisions, and product regulation',
          'Tier-1 financial media outreach: relationships with fintech editors at Financial Times, Bloomberg, and sector trades',
          'E-E-A-T backlink targeting: prioritising links from credentialed financial sites (banks, regulators, academic institutions) that carry maximum trust weight',
        ],
        faqs: [
          {
            question: 'Why do fintech companies need digital PR specifically for SEO?',
            answer: 'Fintech is a YMYL category where domain authority and editorial trust signals directly influence how Google ranks your content. A fintech site with DR 40 and backlinks from PaymentsSource, Banking Dive, and the Financial Times will outrank a competitor with DR 60 but links only from guest posts and directories. Digital PR in fintech is not about brand awareness — it is about acquiring the specific backlink types that Google weights most heavily for financial content.',
          },
          {
            question: 'What types of stories get fintech companies covered in major publications?',
            answer: 'Original data is the strongest hook: consumer survey data on payment habits, analysis of central bank decisions, or anonymised transaction data that reveals a spending trend. Expert commentary on regulatory changes (new open banking rules, crypto regulation, BNPL guidelines) also gets consistent pickup from financial journalists. We build a 6-month story calendar around your data assets and business calendar so pitches are timely and relevant.',
          },
          {
            question: 'How long does it take to see the SEO impact from digital PR in fintech?',
            answer: 'Backlink impact on domain authority takes 60-90 days to register in tools like Ahrefs and to influence rankings. A single placement in a high-DR publication (Forbes, Bloomberg) can move your domain rating by 2-4 points. For competitive fintech keywords, you typically need 15-25 strong editorial backlinks before you see page-one movement. We target 2-4 placements per month, so the compound effect shows in rankings within 6-9 months.',
          },
        ],
      },
    },
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce',
    priorityServiceSlugs: ['ecommerce-seo', 'google-ads', 'cro', 'content'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'ecommerce-seo': {
        heroDescription: 'Ecommerce SEO fails when it treats product pages like blog posts. We build technical architecture, faceted navigation controls, and category-level keyword strategies that drive organic revenue — tracked from click to purchase with attribution you can verify.',
        valueProps: [
          'Category page optimisation: the highest-volume ecommerce traffic sits at category level, not product level. We target "women\'s running shoes" before "Nike Pegasus 41"',
          'Faceted navigation control: crawl budget protection through canonical tags, noindex rules, and parameter handling that most ecommerce stores get wrong',
          'Schema markup: Product, AggregateRating, Offer, and BreadcrumbList schema that triggers rich results and increases CTR by 15-25%',
          'Revenue attribution: organic sessions mapped to transactions and revenue in GA4 so you know the exact return on each SEO investment',
        ],
        faqs: [
          {
            question: 'Why do ecommerce stores struggle with SEO despite having hundreds of pages?',
            answer: 'Most ecommerce stores create crawlability problems at scale: duplicate content from faceted navigation (colour, size, and price filter URLs), thin product pages with only manufacturer descriptions, and category pages with no unique copy. Google\'s crawl budget gets wasted on thousands of low-value filter URLs instead of indexing your best product and category pages. We audit and fix these structural issues before adding any new content.',
          },
          {
            question: 'Should I focus on product pages or category pages for SEO?',
            answer: 'Category pages first. They target higher-volume keywords ("men\'s leather wallets" vs "Bellroy Note Sleeve wallet") and earn more backlinks naturally. A well-optimised category page can drive 10x the organic sessions of a single product page. We structure your category hierarchy to cover all your important keyword clusters, then optimise individual product pages for long-tail and branded terms.',
          },
          {
            question: 'How do you measure ecommerce SEO ROI?',
            answer: 'We set up GA4 ecommerce tracking with organic channel attribution so you see: organic revenue by landing page, organic sessions-to-transaction rate, average order value for organic versus paid traffic, and keyword-to-revenue mapping. For clients with 12+ months of data, we can also show organic revenue trajectory versus marketing spend. Most ecommerce clients achieve a 4-8x return on their SEO retainer cost within 18 months.',
          },
        ],
      },
      'google-ads': {
        heroDescription: 'Ecommerce Google Ads waste budget on broad match and auto-applied recommendations that favour Google\'s revenue over your ROAS. We run Shopping and Search campaigns with tight keyword control, product-level bid adjustments, and conversion tracking that measures revenue, not just clicks.',
        valueProps: [
          'Shopping campaign structure: product groups segmented by margin and conversion rate, not just category',
          'Search campaign architecture: branded, competitor, and generic campaigns separated so bids optimise toward actual purchase intent',
          'ROAS tracking: Google Ads conversion values wired to your actual product margins, not just transaction count',
          'Cart abandonment remarketing: RLSA campaigns targeting high-intent users who visited cart or product pages within 7-30 days',
        ],
        faqs: [
          {
            question: 'What is a realistic ROAS target for ecommerce Google Ads?',
            answer: 'This depends on your margins and competitive category. For apparel and accessories (30-50% margins), a well-managed account targeting 3-5x ROAS is achievable. For consumer electronics (10-20% margins), 6-8x ROAS is needed to break even. We calculate your target ROAS before campaign launch based on your product margins and blended cost of goods, so you have a number tied to profitability rather than an industry benchmark that may not apply to your business.',
          },
          {
            question: 'Should ecommerce stores run Smart Shopping or Standard Shopping campaigns?',
            answer: 'Standard Shopping with manual segmentation, at least initially. Smart Shopping and Performance Max campaigns consolidate control with Google\'s algorithm and make it difficult to identify which products are driving results and which are wasting budget. We use Standard Shopping to build data, identify your best-performing product groups, and establish baseline ROAS, then selectively test Performance Max on proven segments once we know what converts.',
          },
          {
            question: 'How do you prevent Google Ads from cannibalising organic traffic?',
            answer: 'We set up brand keyword exclusions in non-brand campaigns and track branded versus non-branded traffic separately in GA4. We also run SERP share analysis to identify keywords where you rank organically in positions 1-3, which typically means paid spend there produces minimal incremental conversions. The goal is to use paid only where organic is not winning, which often cuts ad spend by 20-30% without reducing total conversions.',
          },
        ],
      },
      'cro': {
        heroDescription: 'Getting more from your existing organic traffic is faster than ranking for new keywords. We run structured A/B tests on your highest-traffic ecommerce pages — product listings, category pages, and checkout flow — to increase conversion rate by 15-40% within 90 days.',
        valueProps: [
          'Heatmap + session recording analysis on your top 10 organic landing pages to find friction points before designing tests',
          'Product page testing: image order, social proof placement, urgency signals, and add-to-cart button variants that each move conversion rate measurably',
          'Category page CRO: filter placement, product card layout, and sort order defaults that reduce bounce rate and increase pages-per-session',
          'Checkout flow audit: identifying the specific step where 60-80% of would-be buyers abandon, then testing fixes',
        ],
        faqs: [
          {
            question: 'What is a realistic CRO lift for an ecommerce store?',
            answer: 'Stores converting below 1% on organic traffic typically reach 1.5-2.5% within 3-6 months of structured testing. Stores already at 2% can often reach 3-4% with product page and checkout optimisation. A 1 percentage point improvement on a store doing 50,000 organic sessions per month at a $50 AOV adds $25,000 per month in revenue without acquiring a single new visitor. That is why CRO often delivers a faster payback than additional content or link building.',
          },
          {
            question: 'How do you run A/B tests on an ecommerce store without disrupting existing SEO?',
            answer: 'Server-side A/B testing with canonical tags pointing to the original URL, no JavaScript-based redirects that confuse crawlers, and test durations that do not outlast a crawl cycle. We also avoid testing elements that change meta titles, H1s, or structured data during the test. Google has published guidelines on A/B testing and SEO compatibility, and we follow them on every test.',
          },
          {
            question: 'Which pages should we prioritise for CRO testing on an ecommerce site?',
            answer: 'The pages with the most sessions and the lowest conversion rates. For most ecommerce stores, this is category pages (high traffic, browsing intent) and product pages with more than 200 sessions per month (enough volume to reach significance in a reasonable timeframe). Cart and checkout pages are high-value but low-traffic, so tests take longer to reach significance. We build a testing priority matrix from your GA4 data before running a single test.',
          },
        ],
      },
    },
  },
  {
    slug: 'fashion',
    name: 'Fashion',
    priorityServiceSlugs: ['ecommerce-seo', 'image-seo', 'content', 'meta-ads'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'ecommerce-seo': {
        heroDescription: 'Fashion ecommerce faces two SEO problems most other industries do not: seasonal inventory turnover that creates thin-content URLs, and Google Images being a primary discovery channel. We build SEO architecture that handles both — preserving ranking authority through seasonal transitions and capturing visual search traffic at scale.',
        valueProps: [
          'Seasonal URL strategy: we handle out-of-stock and end-of-season product pages with redirect, consolidation, or evergreen restructuring — not deletion that destroys accumulated ranking authority',
          'Image SEO at scale: alt text, file naming, structured data markup, and Google Discover optimisation for your product photography',
          'Category architecture for trend cycles: "spring dresses 2025" vs "dresses" — how to capture trend searches without cannibalising evergreen category pages',
          'Lookbook and editorial content optimised to rank for style inspiration queries that sit upstream of purchase intent',
        ],
        faqs: [
          {
            question: 'How do fashion brands handle SEO for out-of-season products?',
            answer: 'This is the most common technical mistake in fashion ecommerce SEO. Deleting or 404-ing out-of-stock seasonal URLs destroys backlinks and ranking history. The correct approach: redirect sold-out individual product pages to their parent category; keep seasonal category pages live year-round with evergreen copy and 301-redirect from last year\'s URL to the current season\'s version. We build a URL governance policy in month one so your team knows exactly what to do when inventory changes.',
          },
          {
            question: 'How important is Google Images for fashion SEO?',
            answer: 'For fashion, Google Images and Discover drive 20-40% of organic sessions on many sites, compared to under 10% for non-visual industries. This means image alt text, file naming, page speed for image-heavy pages, and structured data for Product images are not optional. We audit your image SEO separately and typically find 30-50% of product images have missing or keyword-stuffed alt text, which is both a rankings miss and an accessibility failure.',
          },
          {
            question: 'How do you target seasonal trend keywords without creating thin pages?',
            answer: 'We build trend content as editorial articles ("/the-best-summer-dresses-2025") that link to the relevant product categories, rather than creating separate product category pages for every micro-trend. This captures trend search volume through content that has enough depth to rank, while routing traffic to the category pages that hold the real commercial value. It avoids the thin-content trap that hits fashion brands who create a new category page for every trend.',
          },
        ],
      },
      'meta-ads': {
        heroDescription: 'Fashion brands that treat Meta Ads as a brand awareness channel leave 40-60% of their revenue potential on the table. We build performance-first campaigns with creative frameworks, audience segmentation, and attribution that connect ad spend to product revenue at the SKU level.',
        valueProps: [
          'Catalogue ads: dynamic product ads pulling directly from your product feed with automated creative refresh tied to inventory availability',
          'Creative testing framework: systematic A/B testing of lifestyle vs product-on-white imagery, short-form video versus static, and copy hooks tied to real revenue outcomes',
          'Audience segmentation: prospecting campaigns for cold audiences versus retargeting sequences for site visitors, cart abandoners, and past purchasers — each with different creative and bids',
          'Attribution setup: Meta conversions API connected to Shopify or WooCommerce for accurate revenue tracking that does not rely solely on pixel data',
        ],
        faqs: [
          {
            question: 'What types of creative work best for fashion brands on Meta Ads?',
            answer: 'In our experience across fashion clients, lifestyle imagery outperforms product-on-white for cold prospecting (higher thumb-stop rate, lower CPM), while product-on-white with clear pricing and offer copy converts better for retargeting. Short-form video (6-15 seconds) showing a product being styled or worn drives higher engagement than static for awareness campaigns. We build a creative testing matrix in month one to find the specific combination that works for your brand and audience, since fashion ad performance is highly brand-specific.',
          },
          {
            question: 'How do you measure ROAS accurately for a fashion brand on Meta?',
            answer: 'Meta\'s pixel under-reports conversions by 20-40% due to iOS privacy changes and cross-device journeys. We implement the Conversions API (server-side) connected to your ecommerce platform to recover attributed revenue that pixel misses. We also set up a blended ROAS view in your dashboard that combines Meta-reported conversions with your CRM\'s last-click attribution so you see the real return, not just what Meta claims.',
          },
          {
            question: 'How much should a fashion brand spend on Meta Ads to see results?',
            answer: 'At minimum $3,000-$5,000 per month to generate enough data for the algorithm to exit the learning phase across multiple ad sets. Below this threshold, campaigns do not accumulate the 50+ conversion events per week needed for Meta\'s automated bidding to work correctly. Early spend should concentrate on your highest-margin or best-selling products, not spread evenly across the catalogue. We model the minimum viable budget for your specific product mix and margin structure before recommending a number.',
          },
        ],
      },
    },
  },
  {
    slug: 'travel',
    name: 'Travel',
    priorityServiceSlugs: ['content', 'technical-seo', 'aeo', 'programmatic-seo'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'content': {
        heroDescription: 'Travel content that ranks in 2025 is written for humans who use AI assistants to plan trips. We produce destination guides, itinerary content, and comparison articles that satisfy Google\'s E-E-A-T requirements for travel, earn citations in AI planning tools, and convert readers into bookers.',
        valueProps: [
          'First-person experience signals: content with first-hand travel knowledge, specific hotel names, real price ranges, and practical logistics — not generic destination summaries',
          'AI-citeable format: structured itineraries, "best X in Y" lists, and FAQ blocks written in the format that Perplexity, ChatGPT, and Google AI Overviews cite most frequently',
          'Intent mapping: "travel to [destination]" (awareness) versus "[destination] itinerary 7 days" (planning) versus "[hotel] vs [hotel]" (booking) each require different content formats and CTAs',
          'Seasonal content calendar: content planned around booking lead times (ski season searches peak 3-4 months before travel) to capture demand before competitors publish',
        ],
        faqs: [
          {
            question: 'What type of travel content ranks best in Google today?',
            answer: 'Google\'s travel SERP has shifted toward content that demonstrates genuine first-hand experience: articles that mention specific restaurants by name, include real photos, give honest assessments of budget ranges, and address practical logistics like visa requirements and transport options. AI-generated generic destination overviews are getting filtered out by quality raters. We produce content with original research, writer-sourced experiences, and specific enough detail that it cannot be reproduced by an AI working from Wikipedia.',
          },
          {
            question: 'How does travel content need to be different for AI search tools?',
            answer: 'When someone asks ChatGPT "best 7-day Italy itinerary," the AI looks for structured, specific content it can synthesise. This means: day-by-day breakdowns, city-to-city logistics, specific accommodation tiers with price ranges, and common practical questions addressed (how to get from Rome airport to centre, is Florence walkable). We write travel content to this specification so it gets cited both in traditional search and in AI-generated travel plans.',
          },
          {
            question: 'How long does travel content take to rank and drive bookings?',
            answer: 'Destination guides and itinerary content typically take 3-6 months to reach page one for competitive queries, and 6-12 months for heavily competitive terms like "best beaches in Thailand." However, long-tail itinerary content ("10 days Sri Lanka itinerary budget traveller") can rank within 4-6 weeks and drives highly qualified traffic with clear booking intent. We build a content calendar that mixes quick-win long-tail targets with longer-term authority-building pieces.',
          },
        ],
      },
      'programmatic-seo': {
        heroDescription: 'Travel companies sit on structured datasets — destinations, hotels, flights, activities — that are perfect inputs for programmatic SEO. We build database-driven page systems that create thousands of unique, rankable URLs covering destination combinations, comparison pages, and geographic long-tail queries.',
        valueProps: [
          'Dataset audit: identifying which of your structured data assets (destinations, departure cities, hotels, activity types) can generate rankable page combinations',
          'Template architecture: page templates with enough unique data per URL to avoid thin-content penalties, combining structured data with AI-assisted editorial enrichment',
          'Crawl budget management: ensuring Google indexes your high-value programmatic pages first through sitemap priority, internal linking structure, and page speed optimisation',
          'Revenue tracking per page cluster: knowing which programmatic page types drive bookings, not just sessions, so you invest in building more of what converts',
        ],
        faqs: [
          {
            question: 'What travel data can be turned into programmatic SEO pages?',
            answer: 'The most effective programmatic travel pages are: route pages ("flights from London to Bangkok"), destination comparison pages ("Bali vs Thailand for families"), hotel category pages ("family resorts in Maldives with kids club"), activity pages by destination ("snorkelling tours in Cancun"), and seasonal guides ("shoulder season in Japan"). Each of these combines structured data from your database with enough editorial content to provide genuine value and avoid Google\'s thin-content filter.',
          },
          {
            question: 'How do you avoid thin content penalties with programmatic travel pages?',
            answer: 'The failure mode for programmatic travel SEO is launching hundreds of pages that differ only by destination name, with identical copy otherwise. Google is very good at identifying this pattern and applying sitewide quality penalties. Our approach: each page template must include at least 4-6 data-driven unique content fields (destination-specific climate data, visa requirements, price indices, activity availability by season) plus an AI-assisted editorial intro that is then human-reviewed for accuracy. We run pages through our content quality gate before going live.',
          },
          {
            question: 'How many pages can realistically rank from a travel programmatic SEO build?',
            answer: 'A well-built travel programmatic page system typically gets 30-50% of pages indexed within 6 months, with 10-20% of indexed pages driving meaningful traffic. On a 5,000-page build, that is 500-1,000 pages generating organic sessions. The long tail arithmetic is powerful: if each page drives an average of 3 sessions per month and 2% book, 1,000 pages produces 60 bookings per month from content that requires no ongoing management cost once built.',
          },
        ],
      },
    },
  },
  {
    slug: 'finance',
    name: 'Finance',
    priorityServiceSlugs: ['seo', 'digital-pr', 'content', 'e-e-a-t-audit'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'digital-pr': {
        heroDescription: 'Finance brands need media coverage from credentialed sources — not generic guest posts. We place original financial research, data stories, and expert commentary in publications that carry the E-E-A-T trust signals Google assigns maximum weight to in YMYL categories.',
        valueProps: [
          'Original data creation: consumer finance surveys, cost-of-living analyses, and market data stories that financial journalists cover without being pitched repeatedly',
          'Expert commentary placement: your leadership quoted in response to Fed decisions, budget announcements, and regulatory changes within 24-48 hours of news breaking',
          'High-authority backlink targeting: links from .gov financial literacy resources, university economics departments, and national news publications',
          'E-E-A-T link audit: identifying which of your existing backlinks carry the most authority weight and which backlink types you still need to satisfy Google\'s quality evaluator guidelines',
        ],
        faqs: [
          {
            question: 'What kinds of data stories get finance companies covered in major media?',
            answer: 'The most consistently placed finance PR stories are: consumer behaviour data (how spending habits changed by income bracket or age group), cost analyses (average cost of homeownership by city, cost to retire in different countries), market timing stories tied to economic events (how rate changes affect mortgage payments by loan size), and warnings or tips stories framed around financial risks most readers have. Original survey data with 500+ respondents is the most reliable hook across all finance verticals.',
          },
          {
            question: 'How does digital PR improve SEO specifically for a finance website?',
            answer: 'Finance is a YMYL category where Google applies its highest quality standards. Domain authority from editorial backlinks directly influences where your YMYL content ranks. A finance site with DR 55 and backlinks from Bloomberg, Reuters, and NerdWallet will outrank a DR 70 site whose backlinks come from generic guest posts. Beyond domain authority, named authorship on credentialed publications creates the author E-E-A-T signals that Google looks for on money-related content.',
          },
          {
            question: 'How many PR placements does a finance company need per month?',
            answer: 'For a new finance brand targeting competitive keywords, 3-5 authoritative placements per month is a meaningful pace. Each Tier-1 placement (Forbes, Bloomberg, Financial Times) typically adds 2-4 DR points over 3 months as link equity flows. To move from DR 30 to DR 55 — a threshold where competitive finance keywords become reachable — typically requires 18-24 months of consistent Tier-1 and Tier-2 placement activity, combined with technical SEO and content foundation work.',
          },
        ],
      },
    },
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    priorityServiceSlugs: ['local-seo', 'content', 'digital-pr', 'technical-seo'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'local-seo': {
        heroDescription: 'Healthcare practices fill appointment books from Google Maps, not page-one rankings. We build the GBP profiles, local citation networks, and review management systems that put your practice in the map pack for "near me" and specialty searches in your area.',
        valueProps: [
          'GBP optimisation for healthcare: specialty categories, services, accepted insurance, and Q&A populated to the level that drives map pack visibility',
          'Review acquisition system: a structured process for requesting reviews from satisfied patients at the right moment in the patient journey, compliant with HIPAA',
          'Local citation audit: NAP consistency across Google, Bing, Yelp, Healthgrades, WebMD, Zocdoc, and 30+ healthcare directories that serve as local ranking signals',
          'Location-specific landing pages: separate SEO-optimised pages for each practice location with unique local copy, map embeds, and structured data',
        ],
        faqs: [
          {
            question: 'How do healthcare practices rank in Google Maps for medical specialties?',
            answer: 'Google Maps rankings for medical searches depend on three factors: proximity (distance from the searcher), prominence (review count, review score, citation consistency, and backlink authority), and relevance (how clearly your GBP profile communicates your specialty). The most impactful actions are: optimising your GBP specialty categories and services, building a review acquisition process that generates a consistent flow of new reviews (not a burst), and cleaning up NAP inconsistencies across medical directories like Healthgrades and Vitals.',
          },
          {
            question: 'How do you generate reviews for a healthcare practice without violating HIPAA?',
            answer: 'HIPAA prohibits acknowledging that someone was a patient in any public response or request for reviews. Our compliant approach: review requests are sent to patients who have explicitly opted into practice communications, ask for their general experience (not about their condition), and do not reference their visit details. Response templates are reviewed to avoid acknowledging medical details. We also help practices respond to negative reviews in ways that protect patient privacy while addressing concerns.',
          },
          {
            question: 'Should each doctor in a practice have their own Google Business Profile?',
            answer: 'Individual practitioners can have their own GBP profiles if they have an independent client base and are publicly listed. For group practices, a single practice GBP profile is usually correct, with individual practitioner profiles only for physicians who have strong personal brand recognition. Duplicate or conflicting GBP listings for the same physical location harm local ranking. We audit your current GBP setup and recommend the right structure before making changes.',
          },
        ],
      },
    },
  },
  {
    slug: 'legal',
    name: 'Legal',
    priorityServiceSlugs: ['local-seo', 'content', 'digital-pr', 'seo'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'local-seo': {
        heroDescription: 'Legal clients search locally and decide fast. A personal injury firm or family lawyer that ranks in the top 3 of the local map pack for their practice area receives 40-60% of local clicks. We build GBP profiles, local citation authority, and review systems that deliver that visibility within 90-120 days.',
        valueProps: [
          'Practice area GBP optimisation: categories, services, and description structured for the specific queries your potential clients use, not generic "law firm" terms',
          'Review acquisition for legal: a structured process for requesting reviews at case resolution, compliant with bar association advertising rules in your jurisdiction',
          'Local content strategy: practice-area FAQ pages and local case study content that rank for "[city] + [practice area] + attorney" searches',
          'Legal directory presence: Avvo, Martindale-Hubbell, Justia, FindLaw citation consistency that Google treats as legal-vertical trust signals',
        ],
        faqs: [
          {
            question: 'What local SEO factors matter most for law firms?',
            answer: 'For law firms specifically: (1) GBP practice area categories — there are specific legal categories in Google that significantly improve relevance; (2) review velocity — a consistent flow of 2-4 new reviews per month outperforms a burst of 20 reviews followed by months of nothing; (3) legal directory citation consistency — Avvo, Martindale, Justia, and Nolo are signals Google weights for legal verticals; (4) hyperlocal content — pages targeting "[city] [practice area] attorney" with genuine local content, not just city name insertions.',
          },
          {
            question: 'How do bar association rules affect SEO and content marketing for law firms?',
            answer: 'Bar advertising rules vary by jurisdiction but generally prohibit: guaranteeing outcomes ("we win 98% of cases"), certain types of testimonials (in some states), and misleading descriptions of services. We research the advertising rules for your jurisdiction before writing any SEO content or GBP profiles. Content is framed around educational information and client experience rather than outcome guarantees — which also happens to be better SEO content since it is more useful to searchers.',
          },
          {
            question: 'How long does it take for a law firm to rank in the local map pack?',
            answer: 'For a new GBP profile or a previously unoptimised one, 60-90 days to see initial map pack appearances for less competitive queries, and 4-6 months for primary practice area searches in mid-size cities. In major markets (New York, Los Angeles, Chicago), timeline extends to 9-18 months due to high competition. We build a competitive analysis in month one that shows you exactly which queries are achievable in 90 days versus 12 months, so resources go to the right targets first.',
          },
        ],
      },
    },
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    priorityServiceSlugs: ['local-seo', 'content', 'programmatic-seo', 'google-ads'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'local-seo': {
        heroDescription: 'Real estate buyers start their search online 3-6 months before contacting an agent. We build local search visibility that puts your brokerage or agency in front of buyers and sellers researching neighbourhoods, pricing, and agents in specific areas.',
        valueProps: [
          'Neighbourhood-level content: dedicated pages for each geographic area you serve, combining school data, price trends, and neighbourhood character that captures hyperlocal search intent',
          'Google Business Profile management for real estate: multi-location GBP setups for agencies with multiple offices, with category and attribute optimisation for buyer vs seller services',
          'Review strategy for real estate: post-closing review request sequences via email and SMS that drive review volume without violating NAR ethical guidelines',
          'Local listing schema: RealEstateAgent and RealEstateListing schema markup that improves visibility in property-related rich results',
        ],
        faqs: [
          {
            question: 'How can a real estate agency compete with Zillow and Realtor.com for local SEO?',
            answer: 'You cannot outrank Zillow for generic property search terms — they have 10 years of domain authority and billions in backlinks. The winning strategy is hyperlocal content that Zillow does not produce: neighbourhood guides with genuine local insight, school district analyses, "things to consider when buying in [specific neighbourhood]" content, and agent-specific pages that target "[agent name] [city]" branded searches. These long-tail local queries have lower competition and higher buying intent than "homes for sale in [city]".',
          },
          {
            question: 'Should real estate agents build their own website or rely on their brokerage site?',
            answer: 'Both, if possible. A brokerage-level website targets the broadest local keywords and carries more domain authority. An agent-specific website captures personal brand searches and allows complete control over content and positioning. For agents at larger brokerages where the brokerage site does not let them publish their own content, a personal site is essential for building individual search visibility. We have built both types and can advise on the right structure for your situation.',
          },
          {
            question: 'What content drives the most leads for a real estate agency from organic search?',
            answer: 'In our experience, the highest-converting real estate content types are: specific neighbourhood guides with price range data (captures research-phase buyers), "how much is my home worth in [neighbourhood]" content (captures sellers in valuation mode), first-time buyer guides targeted by city (captures buyers who are educating themselves 3-6 months before working with an agent), and agent testimonial and case study pages (converts buyers and sellers who have already found you and are deciding whether to reach out).',
          },
        ],
      },
    },
  },
  {
    slug: 'technology',
    name: 'Technology',
    priorityServiceSlugs: ['seo', 'aeo', 'content', 'digital-pr'],
    status: 'live',
    launchPhase: 'M1',
  },
  {
    slug: 'education',
    name: 'Education',
    priorityServiceSlugs: ['content', 'seo', 'local-seo', 'programmatic-seo'],
    status: 'live',
    launchPhase: 'M1',
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    priorityServiceSlugs: ['local-seo', 'seo', 'google-ads', 'content'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'local-seo': {
        heroDescription: 'Automotive buyers search locally before walking into a dealership or booking a service appointment. We build GBP profiles, citation networks, and inventory-linked local pages that drive 30-50% more walk-ins and service bookings from organic search within 6 months.',
        valueProps: [
          'Dealership GBP optimisation: make-specific categories, inventory attributes, financing and service department profiles, and Q&A for the most common buyer questions',
          'Review management for automotive: systematic review acquisition post-sale and post-service, with response protocols that protect reputation and satisfy Google\'s freshness signals',
          'Vehicle landing pages: individual pages for high-volume model searches ("used Toyota Camry [city]") that capture in-market buyers researching specific vehicles',
          'Service department SEO: separate keyword targeting and content for service, parts, and collision — each with distinct search intent and customer value',
        ],
        faqs: [
          {
            question: 'How do car dealerships improve their Google Maps ranking?',
            answer: 'Dealership map pack rankings are driven by: (1) GBP profile completeness — make categories, inventory types (new/used/certified), and service offerings fully populated; (2) review velocity — dealerships with 10+ new reviews per month consistently outrank those with higher total counts but no recent reviews; (3) local inventory pages — model-specific landing pages that link from your GBP and give Google additional relevance signals; (4) citations on automotive directories — CarGurus, Cars.com, DealerRater, and AutoTrader are trust signals the automotive SERP algorithm weights.',
          },
          {
            question: 'Should automotive dealerships create separate pages for each vehicle model?',
            answer: 'Yes, for high-search-volume models in your inventory. A page targeting "used Toyota Camry [city]" will outrank your generic inventory page for that specific query because it is more relevant. We identify the 10-20 models with the highest local search volume in your market and build dedicated landing pages with inventory integration, model-specific content, and local schema markup. These pages typically start ranking within 60-90 days and drive the highest-intent traffic.',
          },
          {
            question: 'How do you track which SEO activities drive actual vehicle sales?',
            answer: 'We set up conversion tracking at multiple touchpoints: phone call attribution (numbers on organic landing pages tied to a call tracking system), form submissions tagged by organic source, and if your DMS integrates, lead-to-sale attribution. We also run a monthly blended analysis comparing organic session volume to sales velocity to identify the contribution of organic traffic even where individual-session attribution is not possible. This gives your sales manager a quarterly organic ROI number they can defend to ownership.',
          },
        ],
      },
    },
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    priorityServiceSlugs: ['seo', 'content', 'abm', 'digital-pr'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'abm': {
        heroDescription: 'Cybersecurity buying decisions involve 6-10 stakeholders and take 6-18 months. We build account-based marketing programmes that keep your brand visible to every decision-maker at your target accounts across paid search, LinkedIn, and organic content throughout the entire buying cycle.',
        valueProps: [
          'Target account list development: 200-500 accounts identified from your ICP criteria with buying signal data from intent platforms',
          'Multi-stakeholder content: separate content tracks for CISOs (strategic risk framing), IT managers (technical implementation), and procurement (ROI and compliance)',
          'Matched audience activation: target accounts served your content on LinkedIn and Google simultaneously to build brand recognition before outbound touches',
          'Pipeline attribution: ABM touchpoints tracked against CRM opportunities so you see which accounts engaged with content before becoming pipeline',
        ],
        faqs: [
          {
            question: 'How is ABM different from standard demand generation for a cybersecurity vendor?',
            answer: 'Standard demand gen casts a wide net and optimises for lead volume. ABM inverts the process: you start with the 200-500 accounts you want to close, then focus all your marketing activity on those specific accounts. For cybersecurity, this matters because a single enterprise deal can be worth $500K-$5M and requires 9-12 months of multi-stakeholder influence. A $30,000 ABM programme that influences 5 enterprise deals is a better use of budget than $30,000 in broad demand gen that produces 200 SMB leads.',
          },
          {
            question: 'What content does a cybersecurity ABM programme need?',
            answer: 'You need content for each stakeholder in the buying committee: CISO-level content addresses board reporting, regulatory risk, and strategic security posture. IT/security team content addresses technical architecture, integration complexity, and implementation. Procurement content addresses TCO, vendor risk, and compliance certification. We map content to stakeholder and buying stage, then identify which formats work for each (exec reports for CISOs, technical whitepapers for engineers, ROI calculators for finance).',
          },
          {
            question: 'How long does a cybersecurity ABM programme take to generate pipeline?',
            answer: 'First intent signals from target accounts typically appear within 60-90 days as accounts begin engaging with content. Pipeline from ABM-influenced accounts typically takes 6-9 months to materialise given the length of cybersecurity buying cycles. However, the quality of pipeline is significantly higher: our cybersecurity ABM clients typically see 25-40% higher close rates and 2-3x higher ACV on ABM-influenced deals versus inbound-only opportunities.',
          },
        ],
      },
    },
  },
  {
    slug: 'cannabis',
    name: 'Cannabis',
    priorityServiceSlugs: ['local-seo', 'content', 'seo', 'digital-pr'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'local-seo': {
        heroDescription: 'Cannabis dispensaries cannot run Google or Meta ads, making organic and local search the primary acquisition channel. We build GBP profiles, citation authority, and local SEO infrastructure that drives foot traffic to your dispensary within the strict advertising guidelines applicable to the cannabis industry.',
        valueProps: [
          'Cannabis-specific GBP setup: correct business categories, age verification attributes, and compliance-safe descriptions that Google allows for licensed dispensaries',
          'Leafly, Weedmaps, and directory citation management: the cannabis-specific directories that serve as both direct referral channels and local SEO signals',
          'Compliance-first content: menu pages, strain guides, and educational content written within state-specific regulations, with no medical claims that risk legal exposure',
          'Review acquisition for dispensaries: post-purchase review request flows compliant with both Google\'s review policies and applicable cannabis marketing regulations',
        ],
        faqs: [
          {
            question: 'Why can\'t cannabis dispensaries use Google Ads, and how does SEO fill the gap?',
            answer: 'Google\'s advertising policies prohibit ads for recreational cannabis sales in all markets. This makes organic and local search the only scalable paid-free acquisition channel for most dispensaries. Dispensaries that invest in GBP optimisation, local citations, and menu page SEO capture the "dispensary near me" search traffic that Google Ads would otherwise buy. Our dispensary clients typically attribute 40-70% of new customer acquisition to organic search, making SEO their highest-ROI marketing channel by a significant margin.',
          },
          {
            question: 'What are the most important local SEO factors for cannabis dispensaries?',
            answer: 'Three factors dominate: (1) GBP completeness — dispensaries with fully populated profiles (hours, attributes, photos, Q&A) consistently outrank sparse profiles; (2) review quantity and recency — cannabis buyers heavily rely on reviews, and Google weights fresh reviews in map pack rankings; (3) Leafly and Weedmaps presence — these platforms serve as both citation signals and direct booking channels, and consistent NAP across them improves local authority. Strain-specific menu pages with SEO optimisation are also a significant organic traffic driver for dispensaries with strong menus.',
          },
          {
            question: 'How do you write cannabis SEO content within legal advertising constraints?',
            answer: 'Cannabis advertising rules vary by state but generally prohibit: health or medical claims, marketing to minors, and misleading statements about potency or effects. We research the specific regulations for your state before writing anything. SEO content is framed as educational (how cannabinoids work, strain characteristics, consumption methods) rather than promotional, with no medical claims and clear age disclaimers. This approach satisfies both regulators and Google\'s content quality guidelines.',
          },
        ],
      },
    },
  },
  {
    slug: 'nonprofit',
    name: 'Nonprofit',
    priorityServiceSlugs: ['content', 'seo', 'google-ads', 'local-seo'],
    status: 'live',
    launchPhase: 'M1',
  },
  {
    slug: 'ai',
    name: 'AI Companies',
    priorityServiceSlugs: ['aeo', 'entity-seo', 'digital-pr', 'content'],
    status: 'live',
    launchPhase: 'M1',
    serviceContent: {
      'entity-seo': {
        heroDescription: 'AI companies are in a race to establish entity recognition before their category crystallises. We build structured entity profiles, Wikipedia and Wikidata presence, and citation networks that make your company, product, and founders legible to Google\'s Knowledge Graph and to the AI models that increasingly determine who gets cited in answers.',
        valueProps: [
          'Knowledge Panel acquisition: structured Wikipedia page, Wikidata entity record, and authoritative citation network that triggers a Google Knowledge Panel for your company',
          'Entity attribute definition: clear, structured claims about your product\'s capabilities, differentiators, and category membership that AI models can accurately retrieve',
          'Founder entity building: individual Knowledge Graph entries for your founding team that establish expertise signals Google and AI tools use to assess credibility',
          'Category positioning: content and structured data that places your product in the correct AI category taxonomy before that taxonomy becomes dominated by competitors',
        ],
        faqs: [
          {
            question: 'Why does entity SEO matter specifically for AI companies?',
            answer: 'When someone asks ChatGPT or Google "what is the best [AI category] tool," the answer is constructed from the model\'s entity knowledge — what it knows about your company, product capabilities, and how you compare to competitors. If your entity is poorly defined, ambiguous, or missing from the knowledge graph, you simply do not appear in these answers. Entity SEO for AI companies is about registering your product\'s existence, capabilities, and differentiation in the data sources that LLMs and Google\'s Knowledge Graph use to form answers.',
          },
          {
            question: 'How do you get a Wikipedia page for an AI startup?',
            answer: 'Wikipedia has notability requirements: an AI company typically needs coverage in 3+ independent, reliable publications before a Wikipedia page is defensible. This means digital PR comes first — securing coverage in TechCrunch, VentureBeat, The Verge, or similar outlets that Wikipedia considers reliable sources. Once notability is established, we draft the Wikipedia page to the neutral point of view standard, attribute all claims to published sources, and handle the editorial review process. Attempting a Wikipedia page before notability is established results in deletion.',
          },
          {
            question: 'How long does it take to get a Google Knowledge Panel for an AI company?',
            answer: 'With an active Wikipedia page, Wikidata entry, and consistent citation across Crunchbase, LinkedIn, and major tech publications, Knowledge Panels typically appear within 3-6 months of entity records being established. The trigger is Google\'s entity recognition confidence crossing a threshold — there is no single action that guarantees it. The fastest path is: Wikipedia page (if notability exists) plus Wikidata entry plus consistent brand name and description across 20+ authoritative references.',
          },
        ],
      },
    },
  },
  {
    slug: 'food',
    name: 'Food & Beverage',
    priorityServiceSlugs: ['local-seo', 'content', 'image-seo', 'ecommerce-seo'],
    status: 'live',
    launchPhase: 'M1',
  },
  // 4 new
  { slug: 'hrtech', name: 'HRTech', priorityServiceSlugs: ['seo', 'abm', 'content', 'linkedin-ads'], status: 'planned', launchPhase: 'M1' },
  { slug: 'martech', name: 'Martech', priorityServiceSlugs: ['seo', 'aeo', 'abm', 'content'], status: 'planned', launchPhase: 'M1' },
  { slug: 'manufacturing', name: 'Manufacturing', priorityServiceSlugs: ['seo', 'technical-seo', 'programmatic-seo', 'abm'], status: 'planned', launchPhase: 'M1' },
];

export const industrySlugs = industries.map((i) => i.slug);

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
