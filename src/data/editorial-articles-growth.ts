import type { EditorialArticle } from './editorial-article-types'

export const growthEditorialArticles: EditorialArticle[] = [
  {
    slug: 'local-seo-complete-guide',
    targetKeyword: 'local SEO guide',
    title: 'Local SEO Guide: Turn Nearby Search Demand Into Qualified Customers',
    metaTitle: 'Local SEO Guide: Google Maps, Profiles & Location Pages',
    description:
      'A complete local SEO guide covering Google Business Profile eligibility, Maps visibility, location pages, reviews, citations, links, measurement and multi-location governance.',
    category: 'Local SEO',
    publishedAt: '2024-12-05',
    updatedAt: '2026-07-28',
    readTime: '27 minute read',
    dek:
      'Local SEO works when a real, eligible business makes its services, service area, reputation and next action unambiguous across Google Business Profile and its own website.',
    directAnswer:
      'Local SEO improves a business’s visibility for searches connected to a place or nearby need. Build it by maintaining an eligible and accurate Google Business Profile, choosing the correct primary category, publishing complete service and location information on the website, earning and responding to genuine reviews, keeping core business details consistent, developing relevant local references and measuring calls, directions, bookings, leads and sales. Google describes local results as primarily based on relevance, distance and prominence; there is no setting that overrides the searcher’s location.',
    takeaways: [
      'Confirm Google Business Profile eligibility before optimizing a listing.',
      'Make each real location or service area useful on the website; never create fake offices or doorway city pages.',
      'Treat reviews as an operational feedback system, not a one-time ranking tactic.',
      'Build local prominence through relevant community, industry and editorial relationships.',
      'Measure qualified actions by location and landing page, not local rank-grid colors alone.',
    ],
    audience: [
      'Service-area businesses, clinics, professional firms, retailers and hospitality operators.',
      'Multi-location teams governing profiles and location pages at scale.',
      'Businesses in India or the Philippines that need country-aware local search execution.',
      'Marketing teams evaluating whether local SEO can produce trackable enquiries or visits.',
    ],
    sections: [
      {
        id: 'how-local-search-works',
        title: 'How does local SEO work?',
        answer:
          'Local SEO helps search systems connect a nearby need with an eligible business whose category, information and reputation fit the query.',
        paragraphs: [
          'Google says local results are primarily based on relevance, distance and prominence. Relevance reflects how well a Business Profile matches the search; distance considers how far each result is from the location term or searcher; prominence reflects how well known the business is, including information Google has from links, articles, directories and reviews.',
          'The local pack and Google Maps are not the entire system. Organic service pages, location pages, review sites, industry directories and local publications can also influence the journey. A prospective customer may encounter the business several times before calling, requesting directions or submitting a form.',
          'Distance cannot be “optimized away.” The controllable work is to make the business accurate, relevant, well represented and credible for the areas it genuinely serves. Fake locations and mass-produced city pages create policy and quality risk rather than sustainable coverage.',
        ],
        table: {
          headers: ['Local consideration', 'What it means', 'What the business can improve'],
          rows: [
            ['Relevance', 'Fit between the need and the business information', 'Categories, services, website content, attributes and completeness'],
            ['Distance', 'Proximity to the location used or inferred in the search', 'Accurate address or service area; not fabricated locations'],
            ['Prominence', 'How recognized and referenced the business is', 'Reviews, links, citations, press, community presence and brand demand'],
            ['Conversion', 'Whether the result helps a person choose and act', 'Photos, proof, hours, offers, calls, directions, booking and landing-page experience'],
          ],
        },
        sourceIds: ['local-ranking'],
      },
      {
        id: 'profile-eligibility',
        title: 'Is your business eligible for a Google Business Profile?',
        answer:
          'An eligible business generally makes in-person contact with customers during its stated hours and represents a real location or service-area operation.',
        paragraphs: [
          'Google’s guidelines distinguish storefront businesses, service-area businesses and hybrids. Online-only businesses, rental properties and lead-generation entities without the required customer-facing relationship are among the models that may be ineligible. Review the current official rules before creating a profile.',
          'A storefront should use the real-world address where customers can visit during stated hours. A service-area business that travels to customers should hide a residential address from customers and configure its actual service area. Virtual offices and coworking addresses are eligible only under specific staffed, signed and customer-facing conditions.',
          'Use one profile for one real business location unless the guidelines support distinct public-facing departments or practitioners. Duplicate listings divide reviews and create ownership problems. Record who controls each profile, the primary owner account and the recovery process.',
        ],
        sourceIds: ['profile-guidelines'],
      },
      {
        id: 'profile-optimization',
        title: 'How do you optimize a Google Business Profile?',
        answer:
          'Complete the profile with accurate real-world information, the most specific eligible category, useful service details and maintained customer-facing assets.',
        paragraphs: [
          'Use the business name exactly as customers encounter it in signage, stationery and branding; adding keywords to the name can violate guidelines. Choose the primary category that best represents the core business and add only genuinely relevant secondary categories. Categories affect feature availability and are more important than an inflated service list.',
          'Keep address or service area, phone, website, hours, holiday hours and attributes current. Add services, products or menus where the feature fits the business. Use original, representative photos and a landing-page link that continues the local intent instead of sending every customer to a generic homepage.',
          'Maintain the profile after verification. New services, relocations, temporary closures, rebrands and ownership changes need controlled updates. Monitor user-suggested edits and questions, and avoid giving several vendors uncontrolled access to the primary owner account.',
        ],
        steps: [
          { title: 'Verify identity and eligibility', detail: 'Document the legal and public-facing business, customer-contact model and permitted address display.' },
          { title: 'Choose the category deliberately', detail: 'Select the most specific primary category for the main business and only relevant secondary categories.' },
          { title: 'Complete decision information', detail: 'Publish correct hours, phone, URL, services, attributes, photos and other available facts.' },
          { title: 'Use the right landing page', detail: 'Send the user to the page for that location or service when it genuinely continues the search task.' },
          { title: 'Assign ongoing ownership', detail: 'Create a monthly review, change log and access policy for every profile.' },
        ],
        sourceIds: ['profile-guidelines', 'local-ranking'],
      },
      {
        id: 'location-pages',
        title: 'What should a local landing page contain?',
        answer:
          'A local landing page should prove that the business serves the location and help a nearby customer evaluate and contact it.',
        paragraphs: [
          'For a staffed location, include the exact name, address, local phone when available, hours, services, accessibility or visit details, map or directions, approved photos, local proof and a location-specific conversion path. Keep visible facts aligned with the Business Profile and structured data.',
          'For a service area, explain how service works in that area, response or delivery boundaries that the business can substantiate, relevant projects or customer questions and the correct contact path. Do not imply an office. A sentence that swaps a city name into an otherwise identical page is not local evidence.',
          'Only create a location page when there is a distinct user need and enough operational information to maintain it. TheProjectSEO itself maintains country location coverage only for India and the Philippines because those are the markets it represents; the principle is the same for any business.',
        ],
        bullets: [
          { title: 'Visible business facts', detail: 'Name, address or service-area explanation, phone, hours, services and eligibility-appropriate contact information.' },
          { title: 'Local proof', detail: 'Approved projects, team, partnerships, directions, customer questions or other facts specific to the market.' },
          { title: 'Useful decision detail', detail: 'Who the service fits, availability, process, constraints, pricing approach and next step.' },
          { title: 'Machine-readable consistency', detail: 'Canonical, metadata, breadcrumbs and supported LocalBusiness or Organization structured data.' },
          { title: 'Internal context', detail: 'Links from the locations hub, relevant services and nearby or parent market pages.' },
        ],
        sourceIds: ['profile-guidelines', 'structured-data'],
      },
      {
        id: 'local-keywords',
        title: 'How do you research local keywords?',
        answer:
          'Start with the service and decision, then evaluate how people express place, urgency, eligibility and comparison.',
        paragraphs: [
          'Collect service phrases from sales conversations, profile services, Search Console, paid-search queries, customer support and competitor result sets. Add explicit geography modifiers such as city, district, state, province or “near me,” but remember Google can infer local intent without a place name.',
          'Map the query to the right owner. A broad service need may belong to a service page; a visit or office decision belongs to a location page; a question belongs to a supporting guide; and a brand-location query should resolve cleanly to the correct Business Profile and page.',
          'Search volume tools can underrepresent granular local demand. Use impression data, profile interactions, paid-search tests and actual lead language alongside volume estimates. A small query family can be commercially important when every search represents an urgent local need.',
        ],
        sourceIds: ['performance-report'],
      },
      {
        id: 'reviews-reputation',
        title: 'How do reviews affect local SEO?',
        answer:
          'Reviews contribute to local prominence and, more importantly, give customers current evidence about the experience a business delivers.',
        paragraphs: [
          'Ask every eligible customer through a repeatable, policy-compliant workflow instead of selecting only happy customers. Make the request easy, do not offer incentives for Google reviews and do not ask employees to write customer reviews. Different platforms have different rules, so verify the platform used.',
          'Respond professionally to positive and negative feedback without disclosing private information. A response should acknowledge the experience, correct factual information when appropriate and move sensitive resolution to a private channel. Review themes are operational data: recurring delays, unclear pricing or service gaps belong in the business backlog.',
          'Do not fabricate reviews, purchase them or pressure a customer to use specific wording. Google may remove prohibited content or restrict profile features. A durable reputation system is slower than a review burst and much more valuable.',
        ],
        sourceIds: ['reviews-guidance', 'local-ranking'],
      },
      {
        id: 'citations-links',
        title: 'Do local citations and links still matter?',
        answer:
          'Accurate citations reduce identity ambiguity, while relevant local and industry links build discovery, context and prominence.',
        paragraphs: [
          'Maintain correct core information on authoritative platforms that customers actually use: major maps, industry associations, chambers, professional registers, trusted directories and important local publications. Perfect punctuation across thousands of low-quality directories is not the goal; a resolvable identity on meaningful sources is.',
          'Earn links through real participation: local research, expert commentary, community resources, sponsorships with genuine audience value, partnerships, events and useful public tools. The best opportunities differ by industry and country. A local legal practice and a retail chain should not share the same outreach list.',
          'Document alternate business names, former addresses and phone changes so cleanup is consistent. When the business relocates, update the website and profile first, then correct high-value external sources and monitor the old entity references.',
        ],
      },
      {
        id: 'local-technical-seo',
        title: 'Which technical SEO issues hurt local visibility?',
        answer:
          'Local pages fail when search systems cannot reach the preferred URL, reconcile its identity or connect it to the correct profile and service architecture.',
        paragraphs: [
          'Check responses, canonicals, robots controls, sitemaps, mobile rendering, internal links and structured data for every location template. Make phone numbers and addresses readable text. Each location should have a stable canonical URL and an indexation reason; tracking parameters and locator states should not create uncontrolled duplicates.',
          'Use structured data that matches the visible business type and facts. Markup does not create local eligibility or guarantee a result feature. Validate syntax, but also review whether the address, hours, URL, logo and identity agree with the page and Business Profile.',
          'Store-locator experiences need crawlable paths. A search box or client-side map alone may hide locations from bots and users with accessibility needs. Provide an indexable location hub, real links and useful individual pages.',
        ],
        sourceIds: ['structured-data', 'seo-starter'],
      },
      {
        id: 'multi-location',
        title: 'How do you manage local SEO for multiple locations?',
        answer:
          'Multi-location SEO needs a governed source of truth, a repeatable page model and local flexibility for facts that genuinely differ.',
        paragraphs: [
          'Create a registry for location ID, public name, status, address, coordinates, phone, hours, categories, services, profile URL, page URL, owners and verification state. Define which system is authoritative for each field and how changes propagate to the website, profile and external platforms.',
          'Use a shared quality standard without forcing identical copy. The template can standardize navigation, business facts, calls to action and structured data, while local teams contribute approved staff, visit information, service availability, proof and frequently asked questions.',
          'Plan openings, relocations, mergers and closures. A closed location needs a user-first destination and an evidence-based redirect or status decision. Never redirect every closed location to a homepage automatically; preserve the closest relevant path and explain what changed.',
        ],
        table: {
          headers: ['Governance item', 'Central owner', 'Local contribution'],
          rows: [
            ['Identity and eligibility', 'Naming rules, profile ownership and verification', 'Real-world signage and location evidence'],
            ['Business information', 'System of record and publishing workflow', 'Holiday hours, temporary changes and contacts'],
            ['Page quality', 'Template, metadata, analytics and QA', 'Staff, services, directions, photos and local proof'],
            ['Reviews', 'Policy, platform and reporting', 'Request execution and customer resolution'],
            ['Measurement', 'Definitions and dashboard', 'Lead quality, visits, bookings and operational context'],
          ],
        },
      },
      {
        id: 'measure-local-seo',
        title: 'How do you measure local SEO?',
        answer:
          'Measure discovery, profile actions, landing-page behavior and verified business outcomes by location.',
        paragraphs: [
          'Use Search Console for local query and page visibility, Business Profile performance for available interactions, analytics for landing-page journeys, call tracking with a safe implementation, and the CRM or booking system for qualified outcomes. Keep definitions consistent when platforms change their reporting.',
          'Local rank grids are diagnostic samples, not market share. Results vary by exact location, device, time and personalization. Use a stable set of points and queries to detect patterns, then confirm the finding with visibility and conversion data.',
          'Report brand and non-brand separately. Rising calls from people already searching the business name mean something different from gaining new discovery for a service. Review lead quality with the local team because an enquiry outside the service area is not a successful conversion.',
        ],
        sourceIds: ['performance-report', 'local-ranking'],
      },
      {
        id: 'local-ai-search',
        title: 'How does local SEO support AI search visibility?',
        answer:
          'Accurate entity information, clear local evidence and consistent service facts make a business easier to verify across search and AI-assisted discovery.',
        paragraphs: [
          'People now ask conversational questions about providers, areas served, opening hours, comparisons and suitability. Publish concise answers in visible HTML and support them with the business facts, policies and proof needed to remain correct when quoted outside the page.',
          'AI systems can draw from websites, profiles, directories, reviews and publications. Conflicting names, addresses and service claims reduce confidence. Maintain the underlying facts and monitor citations or referrals as a separate sample; do not assume a profile optimization guarantees an AI mention.',
          'The conversion still matters. A recommendation should lead to a useful location or service page, a clear contact method and an organization capable of serving the request.',
        ],
      },
      {
        id: 'local-seo-partner',
        title: 'When should a business hire a local SEO agency?',
        answer:
          'Hire support when profile governance, location-page quality, technical implementation, reputation or multi-location measurement cannot be coordinated internally.',
        paragraphs: [
          'Ask the agency how it handles profile eligibility, access, fake-location risk, review policy, local content evidence and outcome measurement. Avoid guaranteed local-pack positions or promises to rank the same business everywhere regardless of distance.',
          'TheProjectSEO supports local SEO in India and the Philippines with technical, content, entity and measurement work connected to the real operating footprint. The first step is confirming where the business is eligible and which locations or service areas have a qualified demand-and-delivery fit.',
        ],
      },
    ],
    faqs: [
      { question: 'How long does local SEO take?', answer: 'Timing depends on eligibility, competition, proximity, profile history, website condition, reputation and how quickly operational changes can be implemented. Track profile completeness, valid pages, discovery impressions and qualified actions as leading evidence rather than promising a fixed ranking date.' },
      { question: 'Can a service-area business rank without publishing its address?', answer: 'Eligible service-area businesses can hide their address and configure the areas they serve under Google’s guidelines. They still need a genuine operating business, accurate profile information and a website that explains the service and coverage honestly.' },
      { question: 'Should every city have a separate location page?', answer: 'No. Create a page when the business truly serves the area and can provide distinct operational information, proof and a useful conversion path. Near-duplicate city pages or pages that imply nonexistent offices can be low value and misleading.' },
      { question: 'Does adding keywords to a Google Business Profile name help?', answer: 'The name should reflect the real-world business name. Adding unnecessary service or location keywords can violate Google’s representation guidelines even if a short-term ranking test appears positive.' },
      { question: 'Are reviews a local ranking factor?', answer: 'Google says review count and score factor into local search ranking and that more reviews and positive ratings can help local ranking. Reviews are also customer decision evidence. Follow platform policies and never buy or fabricate them.' },
    ],
    sources: [
      { id: 'local-ranking', name: 'Tips to improve your local ranking on Google', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/7091?hl=en-GB', note: 'Google’s explanation of relevance, distance and prominence in local results.' },
      { id: 'profile-guidelines', name: 'Guidelines for representing your business on Google', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3038177?hl=en', note: 'Eligibility, name, address, service-area, category and representation rules.' },
      { id: 'reviews-guidance', name: 'Tips to get more Google reviews', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3474122?hl=en', note: 'Official methods and policy boundaries for review requests and replies.' },
      { id: 'structured-data', name: 'Local business structured data', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/local-business', note: 'Supported local business markup, required properties and validation.' },
      { id: 'seo-starter', name: 'SEO Starter Guide', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', note: 'Foundational crawling, organization, links and content guidance.' },
      { id: 'performance-report', name: 'Performance report', publisher: 'Google Search Console Help', url: 'https://support.google.com/webmasters/answer/7576553?hl=en', note: 'Definitions and dimensions for query, page, country and device reporting.' },
    ],
    relatedSlugs: ['dominate-search-rankings-2025', 'content-optimization-checklist'],
    primaryService: { href: '/services/local-seo', label: 'Local SEO services' },
    secondaryService: { href: '/locations/philippines', label: 'Philippines SEO services' },
    conversionTitle: 'Build local visibility around real locations and qualified demand',
    conversionBody:
      'TheProjectSEO can audit profile eligibility, location pages, reviews, citations, internal architecture and lead measurement, then build a prioritized local search plan for India or the Philippines.',
    visuals: [
      { afterSection: 2, label: 'Local search evidence system', description: 'Reserved for a diagram connecting Business Profile, website, reviews, citations, links and conversion evidence.', aspect: 'wide' },
      { afterSection: 8, label: 'Multi-location source-of-truth model', description: 'Reserved for a governance diagram covering profile and page ownership, business facts and change control.' },
    ],
  },
  {
    slug: 'e-commerce-seo-strategy',
    targetKeyword: 'ecommerce SEO strategy',
    title: 'Ecommerce SEO Strategy: Build a Store Search Engines Can Understand and Shoppers Can Buy From',
    metaTitle: 'Ecommerce SEO Strategy: Categories, Products & Technical SEO',
    description:
      'A comprehensive ecommerce SEO strategy for category architecture, product pages, faceted navigation, structured data, Merchant Center, content, links and revenue measurement.',
    category: 'Ecommerce SEO',
    publishedAt: '2024-11-20',
    updatedAt: '2026-07-28',
    readTime: '29 minute read',
    dek:
      'Ecommerce SEO is an inventory and architecture discipline. The goal is to give every valuable product need one stable owner while keeping filters, variants and stock changes from overwhelming the site.',
    directAnswer:
      'An ecommerce SEO strategy maps shopper demand to crawlable category, subcategory, product and guide pages; defines which filters and variants deserve indexable URLs; strengthens collection and product content with decision-ready facts; implements supported product structured data and Merchant Center feeds; protects internal links, canonical signals and performance as inventory changes; and measures organic revenue, margin and new-customer outcomes by landing-page cohort. The priority is not indexing every combination—it is making the commercially useful inventory easy to discover, evaluate and buy.',
    takeaways: [
      'Use categories to own durable demand and product pages to own specific item decisions.',
      'Create an explicit indexation policy for filters, sorting, search states and variants.',
      'Keep price, availability, shipping and return facts consistent across visible pages, structured data and feeds.',
      'Optimize the full shopping journey, including mobile performance and out-of-stock behavior.',
      'Measure revenue quality by page cohort, not traffic growth without commercial context.',
    ],
    audience: [
      'Ecommerce leaders building an organic-growth roadmap.',
      'Shopify and custom-platform teams managing categories, variants and faceted navigation.',
      'Merchandising, content and engineering teams that need a shared search model.',
      'Stores adapting product discovery for Google, Bing and AI shopping experiences.',
    ],
    sections: [
      {
        id: 'ecommerce-seo-system',
        title: 'What is ecommerce SEO?',
        answer:
          'Ecommerce SEO is the practice of making a store’s valuable inventory discoverable, understandable, competitive and purchasable from organic search.',
        paragraphs: [
          'The work spans demand research, taxonomy, crawling, canonicalization, internal links, product facts, category content, structured data, product feeds, media, performance, authority and measurement. The moving inventory makes maintenance as important as the initial optimization.',
          'A successful ecommerce website does not index every URL the platform can generate. It chooses stable owners for durable search needs. Category pages usually serve comparison and browsing; product pages serve a specific item; guides help customers understand use, fit or choice; store and policy pages resolve trust and fulfilment questions.',
          'Google can discover product information through web pages, Product structured data and Merchant Center feeds. Using both markup and a feed can maximize eligibility and help Google verify data, but neither replaces a useful product experience.',
        ],
        table: {
          headers: ['Page type', 'Primary shopper job', 'Search responsibility'],
          rows: [
            ['Category', 'Browse and compare a class of products', 'Own durable non-brand and attribute-led demand'],
            ['Product', 'Evaluate and buy a specific item', 'Own model, SKU, brand-product and exact item needs'],
            ['Guide', 'Learn how to choose or use a product', 'Own informational decisions and support commercial pages'],
            ['Brand', 'Browse a manufacturer or collection', 'Own justified brand-category combinations'],
            ['Policy/support', 'Resolve delivery, return, warranty or compatibility concern', 'Build trust and answer pre-purchase questions'],
          ],
        },
        sourceIds: ['google-ecommerce', 'product-data'],
      },
      {
        id: 'demand-taxonomy',
        title: 'How do you map ecommerce keyword demand to a category structure?',
        answer:
          'Group shopper language by product class, attribute, use, audience, brand and decision stage, then assign each valuable need to one stable page.',
        paragraphs: [
          'Start with catalog data and how customers actually ask: internal search, paid queries, Search Console, support tickets, reviews, marketplace language and competitor result sets. Search volume is useful, but commercial relevance, assortment depth, margin and stock stability decide whether a landing page deserves ownership.',
          'Build a taxonomy customers can navigate without knowing internal merchandising language. Categories should have enough meaningful inventory and a durable purpose. A single product or temporary campaign rarely justifies a permanent category unless the query and future assortment support it.',
          'Create an ownership map before publishing new pages. If a filter combination already satisfies a valuable query, decide whether it becomes a curated landing page, remains a crawlable non-indexed state or stays an interaction only. The answer should be explicit, not accidental platform behavior.',
        ],
        steps: [
          { title: 'Inventory demand', detail: 'Combine query tools with first-party search, conversion, support and catalog language.' },
          { title: 'Cluster by shopper job', detail: 'Separate browsing, exact-product, compatibility, use-case, comparison and informational needs.' },
          { title: 'Score commercial fit', detail: 'Add assortment, stock stability, margin, seasonality, differentiation and conversion evidence.' },
          { title: 'Assign the page owner', detail: 'Choose category, subcategory, product, brand, guide or no indexable page.' },
          { title: 'Design navigation and links', detail: 'Ensure the owner is reachable from parent categories and relevant product or guide pages.' },
        ],
      },
      {
        id: 'category-pages',
        title: 'What makes an ecommerce category page competitive?',
        answer:
          'A strong category page combines useful inventory, clear scope, decision support, crawlable products and a fast path to refinement.',
        paragraphs: [
          'Use a descriptive title and heading that reflect the collection’s actual scope. Introduce enough context to clarify who the products fit and how they differ, but do not push the inventory below a long generic essay. Filters, sorting, availability and merchandising should help a shopper narrow the choice.',
          'Product cards need crawlable links, understandable names, useful images and stable destinations. Surface distinguishing facts such as price, rating, key attribute or stock state when accurate. Pagination or load-more behavior must preserve discoverable paths beyond the first visible set.',
          'Add decision content where it reduces uncertainty: attribute definitions, selection criteria, compatibility, delivery, returns, common questions and links to deeper guides. The content should be specific to the category and supported by the assortment, not a keyword block copied across every collection.',
        ],
      },
      {
        id: 'product-pages',
        title: 'How do you optimize product pages?',
        answer:
          'Product pages should make identity, fit, price, availability, proof and purchase conditions explicit in visible and machine-readable content.',
        paragraphs: [
          'Use the exact product name, brand, model and differentiating attributes consistently. Write descriptions that explain what the item is, who it fits, how it differs, dimensions or specifications, materials, compatibility, care and limitations. Manufacturer copy can be a factual input, but identical syndicated text gives the page little independent value.',
          'Use original high-quality images, meaningful alt text and, where helpful, video or diagrams. Show current price, availability, delivery, returns, warranty and variant behavior. Reviews and questions can add experience evidence when moderated and represented accurately.',
          'Keep discontinued and out-of-stock handling deliberate. A temporarily unavailable product with demand, links or expected replenishment may remain useful with an honest status and alternatives. A permanently removed item may redirect to a true equivalent or parent category; unrelated homepage redirects frustrate shoppers and search systems.',
        ],
        sourceIds: ['product-data', 'product-structured-data'],
      },
      {
        id: 'faceted-navigation',
        title: 'How should an ecommerce site handle filters and faceted navigation?',
        answer:
          'Faceted navigation needs a URL policy that separates valuable landing pages from crawlable utility states and infinite combinations.',
        paragraphs: [
          'List every filter and sort parameter, estimate combinations and decide whether each state can be linked, crawled, indexed and included in a sitemap. Most sorting, view, session and internal-search states do not deserve indexation. Some attribute combinations can become curated pages when demand, inventory and unique value justify them.',
          'Use consistent canonicals, internal links and status behavior. A canonical hint alone does not prevent crawling, and blocking parameters in robots.txt can hide the signals Google needs to understand duplicates. The correct implementation depends on platform constraints and should be tested with real URL samples.',
          'Prevent empty and near-empty states from entering the architecture. When inventory changes, update navigation and sitemaps so the site does not keep promoting combinations that no longer help a shopper.',
        ],
        table: {
          headers: ['URL state', 'Default policy question', 'Typical treatment'],
          rows: [
            ['Curated category', 'Does it have durable demand, inventory and distinct value?', 'Indexable self-canonical with internal links'],
            ['Useful filter state', 'Does it help users but lack independent search value?', 'Crawlable interaction with controlled indexation'],
            ['Sort/view parameter', 'Does it change products or only order/presentation?', 'Avoid indexation and unnecessary internal links'],
            ['Internal search', 'Is it a controlled landing page or arbitrary query output?', 'Usually excluded from index; never mass-promoted'],
            ['Empty combination', 'Can it ever satisfy a shopper?', 'Remove links and return appropriate empty-state behavior'],
          ],
        },
        sourceIds: ['faceted-nav', 'canonical'],
      },
      {
        id: 'variants-canonicals',
        title: 'Should product variants have separate URLs?',
        answer:
          'Give a variant a separate indexable URL only when it represents a distinct search need and the site can maintain independent, consistent product facts.',
        paragraphs: [
          'Color, size, material, capacity and bundle selections can be represented on one product page or through variant URLs. The decision depends on demand, user expectations, media, pricing, availability and platform behavior. Do not index hundreds of variants whose visible content and purchase decision are effectively identical.',
          'When variants use separate URLs, make selection state, canonical strategy, structured data and internal links agree. When one canonical owns all variants, ensure the preferred URL exposes the available options and that shared links do not create unstable client-only states.',
          'Test social, ad, email and feed links as well as organic search. A technically clean canonical that forgets the shopper’s chosen variant can damage conversion.',
        ],
        sourceIds: ['product-variants'],
      },
      {
        id: 'structured-data-feeds',
        title: 'How do product structured data and Merchant Center work together?',
        answer:
          'Structured data describes products on the page, while Merchant Center feeds provide Google with a controlled product dataset; both must match the customer-visible facts.',
        paragraphs: [
          'Product structured data can make a page eligible for product snippets or merchant listing experiences when it follows requirements. Merchant Center feeds support richer product participation and update workflows. Google recommends unique product identifiers such as GTIN where applicable and truthful offer information.',
          'Choose a source of truth for price, availability, condition, identifiers, shipping and returns. Validate syntax, then monitor consistency and item diagnostics. A stale feed or mismatched markup can create disapprovals and poor user experiences even when the schema tester passes.',
          'Eligibility is not guaranteed display. Do not mark hidden reviews, invented aggregate ratings or unsupported claims. Machine-readable data should faithfully represent what the shopper can verify on the page.',
        ],
        sourceIds: ['product-structured-data', 'product-data'],
      },
      {
        id: 'content-system',
        title: 'What content should an ecommerce brand create?',
        answer:
          'Create content that resolves product decisions, demonstrates experience and routes qualified readers into the relevant category or item.',
        paragraphs: [
          'Prioritize buying guides, compatibility references, size or fit help, comparisons, use cases, care instructions, original tests and post-purchase support. Connect every guide to the products or categories it helps evaluate, and link commercial pages back when the resource adds confidence.',
          'Editorial volume is not the objective. A generic “what is” article may attract traffic that has no relationship to the assortment. Score topics by customer question frequency, commercial fit, product expertise, SERP opportunity and whether the brand can produce original evidence.',
          'For AI search, structure direct answers and named facts so passages remain meaningful when extracted. Identify products precisely, disclose testing or selection methods and update pages when inventory or specifications change.',
        ],
      },
      {
        id: 'performance-mobile',
        title: 'Why do performance and mobile UX matter for ecommerce SEO?',
        answer:
          'A store must render important content quickly and respond reliably during filtering, variant selection, cart and checkout entry.',
        paragraphs: [
          'Measure Core Web Vitals with field data by template. Category LCP can be delayed by hero media or client rendering; product INP can suffer from galleries, variants, recommendations, reviews and third-party scripts; banners and media without reserved space can cause CLS.',
          'Test the complete mobile journey under realistic networks: browse a category, apply a filter, open a product, change a variant, add to cart and begin checkout. Protect analytics and revenue events while optimizing; a faster page that breaks merchandising or purchase tracking is not a successful release.',
          'Assign owners to chat, experimentation, reviews, personalization, affiliate, advertising and consent scripts. Each vendor should have a loading condition, performance budget and removal criterion.',
        ],
        sourceIds: ['web-vitals'],
      },
      {
        id: 'internal-links-authority',
        title: 'How do internal links and backlinks support an ecommerce store?',
        answer:
          'Internal links distribute discovery and context through the catalog, while external references help establish why the store or resource deserves attention.',
        paragraphs: [
          'Use navigation, category parents, breadcrumbs, related categories, product alternatives and editorial links to create intentional paths. Avoid modules that link every product to every other product; relevance and stability matter more than raw link count.',
          'Earn external coverage through original product data, category expertise, useful tools, independent testing, expert commentary, partnerships and genuinely newsworthy launches. Product gifting and affiliate relationships require clear disclosure and should not be treated as purchased ranking authority.',
          'Monitor broken links created by stock changes, platform migrations and campaign URLs. Preserve valuable destinations when products move, and update internal links rather than relying on redirect chains forever.',
        ],
      },
      {
        id: 'measure-revenue',
        title: 'How do you measure ecommerce SEO performance?',
        answer:
          'Measure discovery, clicks and commercial outcomes by landing-page cohort while preserving margin, new-customer and inventory context.',
        paragraphs: [
          'Group organic landing pages into categories, products, guides, brands and support. Combine Search Console visibility with analytics product views, add-to-cart, checkout and purchase events. Reconcile with the commerce platform because consent, attribution and cross-domain checkout can create gaps.',
          'Revenue alone can be misleading when stock, discounting, average order value or margin changes. Track qualified organic revenue, transactions, conversion rate, new customers and contribution where the business can support those definitions. Separate brand demand from non-brand discovery.',
          'Annotate merchandising, pricing, feed, platform and SEO releases. Compare equivalent inventory cohorts when possible: a category with half its products unavailable should not be judged like the same category at full stock.',
        ],
        table: {
          headers: ['Cohort', 'Search measure', 'Commerce measure'],
          rows: [
            ['Category', 'Non-brand impressions, clicks and query coverage', 'Product views, assisted carts, transactions and revenue quality'],
            ['Product', 'Model/SKU/brand visibility and rich-result eligibility', 'Availability, add-to-cart, purchase and return context'],
            ['Guide', 'Informational visibility and qualified click paths', 'Category/product assists, email or consultation where relevant'],
            ['Technical template', 'Indexation and Core Web Vitals distribution', 'Journey completion, error rate and release impact'],
          ],
        },
      },
      {
        id: 'roadmap',
        title: 'What should an ecommerce SEO roadmap prioritize?',
        answer:
          'Prioritize the constraint affecting the largest commercially valuable inventory cohort, then sequence architecture, content and authority work around it.',
        paragraphs: [
          'Start with eligibility and ownership: canonical or rendering defects, missing crawl paths, uncontrolled facets and competing categories. Next improve category and product decision quality, structured data and feeds. Then build supporting resources and external authority where the underlying pages deserve promotion.',
          'Score backlog items by affected pages, demand, margin, stock stability, evidence confidence, development effort and release risk. Align the roadmap with merchandising and platform calendars so search work survives seasonal launches and migrations.',
          'TheProjectSEO works across ecommerce SEO and Shopify-specific execution. An engagement can begin with an inventory-and-indexation model, a category opportunity map or a template audit depending on the current constraint.',
        ],
      },
    ],
    faqs: [
      { question: 'How long does ecommerce SEO take?', answer: 'Timing depends on catalog size, platform constraints, current indexation, competition, development capacity, inventory and authority. Define leading indicators for each release—such as crawl reconciliation, valid product data and category query coverage—then measure revenue outcomes without promising a fixed ranking date.' },
      { question: 'Is Shopify good for SEO?', answer: 'Shopify provides a capable foundation, but themes, apps, navigation, product models, international setup and custom code determine the actual outcome. Audit the rendered store and URL behavior rather than relying on a platform label.' },
      { question: 'Should out-of-stock products stay indexed?', answer: 'Temporarily unavailable products with demand, links or expected replenishment can remain useful when the status and alternatives are clear. Permanently removed products need a case-by-case redirect, archive or removal decision based on equivalents, demand and user value.' },
      { question: 'Do product descriptions need to be unique?', answer: 'Descriptions should provide independent decision value. Manufacturer facts can remain accurate inputs, but a page should add useful fit, comparison, media, proof, service and purchase information rather than copying the same syndicated paragraph.' },
      { question: 'Does product schema guarantee rich results?', answer: 'No. Valid structured data makes a page eligible for supported experiences, but Google decides whether to display them. Markup must match visible content and comply with current requirements.' },
    ],
    sources: [
      { id: 'google-ecommerce', name: 'Ecommerce site structure', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure', note: 'Official guidance on navigation, links and product discovery.' },
      { id: 'product-data', name: 'Share your product data with Google', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/specialty/ecommerce/share-your-product-data-with-google', note: 'How webpages, structured data and Merchant Center feeds work together.' },
      { id: 'product-structured-data', name: 'Product structured data', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/product', note: 'Product snippet and merchant listing eligibility, properties and policy requirements.' },
      { id: 'faceted-nav', name: 'Managing crawling of faceted navigation URLs', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation', note: 'Official crawl-management considerations for faceted ecommerce URLs.' },
      { id: 'canonical', name: 'How to specify a canonical URL', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls', note: 'Canonical signals and duplicate URL consolidation.' },
      { id: 'product-variants', name: 'Product variant structured data', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/product-variants', note: 'Supported modeling for product groups and variants.' },
      { id: 'web-vitals', name: 'Web Vitals', publisher: 'web.dev', url: 'https://web.dev/articles/vitals', note: 'Official field metrics and thresholds for loading, interaction and visual stability.' },
    ],
    relatedSlugs: ['keyword-research-tools-2025', 'technical-seo-audit'],
    primaryService: { href: '/services/ecommerce-seo', label: 'Ecommerce SEO services' },
    secondaryService: { href: '/seo-for-shopify', label: 'SEO for Shopify' },
    conversionTitle: 'Turn catalog complexity into an ecommerce search model',
    conversionBody:
      'TheProjectSEO can map demand to category ownership, define faceted and variant URL policy, improve product-data consistency and build a measured roadmap around organic revenue—not unqualified traffic.',
    visuals: [
      { afterSection: 1, label: 'Ecommerce search architecture', description: 'Reserved for a diagram mapping shopper intent to categories, products, guides, feeds and conversion events.', aspect: 'wide' },
      { afterSection: 5, label: 'Faceted navigation decision matrix', description: 'Reserved for an indexation policy visual covering curated, useful, duplicate and empty URL states.' },
    ],
  },
]
