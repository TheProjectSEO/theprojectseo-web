import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { glossary, getGlossaryTermBySlug } from '@/data/glossary'
import type { GlossaryTerm } from '@/data/glossary'

/* -------------------------------------------------------------------------- */
/* Static params                                                               */
/* -------------------------------------------------------------------------- */

export const dynamicParams = false

export function generateStaticParams() {
  return glossary.map((t) => ({ term: t.slug }))
}

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>
}): Promise<Metadata> {
  const { term } = await params
  const entry = getGlossaryTermBySlug(term)
  if (!entry) return {}

  return {
    title: `${entry.term} — SEO Glossary | TheProjectSEO`,
    description: entry.shortDefinition,
    alternates: {
      canonical: `/resources/glossary/${entry.slug}`,
    },
    openGraph: {
      title: `${entry.term}: Definition and Examples | TheProjectSEO`,
      description: entry.shortDefinition,
      url: `https://theprojectseo.com/resources/glossary/${entry.slug}`,
      siteName: 'TheProjectSEO',
      locale: 'en_US',
      type: 'article',
    },
  }
}

/* -------------------------------------------------------------------------- */
/* Full definitions — keyed by slug                                           */
/* -------------------------------------------------------------------------- */

const fullDefinitions: Record<string, { body: string[]; examples?: string; relatedService?: { href: string; label: string } }> = {
  'seo': {
    body: [
      'SEO (Search Engine Optimization) is the practice of improving a website\'s visibility in unpaid (organic) search results. The goal is to rank higher for queries your target audience is searching for, which brings more qualified traffic without paying per click.',
      'Modern SEO has three interconnected layers. Technical SEO ensures search engines can crawl, index, and understand your pages. On-page SEO aligns your content with the intent behind target keywords. Off-page SEO builds authority through backlinks and external signals.',
      'Google\'s algorithm uses hundreds of signals to determine rankings. The core ones include content relevance, page experience (Core Web Vitals), site authority (measured by backlinks), and entity clarity (how well Google understands who or what your site represents).',
      'Effective SEO compounds over time. A well-optimized page continues to earn traffic months or years after publication, making it one of the highest-ROI channels for businesses with 6+ month investment horizons.',
    ],
    examples: 'A SaaS company ranks on page 1 for "project management software for agencies" without paying for that click. That is SEO at work.',
    relatedService: { href: '/services', label: 'Our SEO Services' },
  },
  'serp': {
    body: [
      'A SERP (Search Engine Results Page) is the page Google displays in response to a user query. Modern SERPs are complex: they include organic listings, paid ads, featured snippets, People Also Ask boxes, image packs, video carousels, knowledge panels, and AI Overviews.',
      'The layout of a SERP varies by query type. Informational queries (how to...) tend to trigger featured snippets and PAA boxes. Navigational queries surface brand-specific results. Transactional queries show ads and product carousels prominently.',
      'Understanding the SERP for your target keyword is essential before creating content. If Google shows 10 listicles, publishing a single-answer page will likely underperform. SERP analysis reveals format intent, content depth requirements, and which features are contestable.',
    ],
    examples: 'When you search "best CRM for small business", the SERP shows ads at the top, followed by a featured snippet, then organic listings, and often a PAA box. Each position type requires a different optimization approach.',
  },
  'keyword': {
    body: [
      'A keyword (also called a search query or search term) is the word or phrase a user types into a search engine. In SEO, keywords are the bridge between what your audience is searching for and the content you create.',
      'Keywords are characterized by search volume (monthly searches), keyword difficulty (how hard it is to rank), and search intent (what the user is trying to do). These three dimensions determine whether a keyword is worth targeting.',
      'Keyword research is the process of identifying which terms your target audience uses, how competitive they are, and how they map to your business goals. The output is a keyword map that assigns terms to specific pages.',
    ],
    examples: '"SEO agency India" (850/mo, high competition) and "technical SEO audit checklist" (600/mo, medium competition) are keywords with different profiles requiring different strategies.',
  },
  'long-tail-keyword': {
    body: [
      'A long-tail keyword is a query with three or more words that targets a specific intent. The term comes from the "long tail" of the search demand curve — most queries are unique or near-unique, while a small number of head terms dominate volume.',
      'Long-tail keywords individually have low search volume (often under 100 searches/month), but collectively they make up roughly 70% of all search queries. They convert better than head terms because the intent is more specific.',
      'For new or low-authority domains, long-tail keywords are often the practical entry point into organic traffic. A page targeting "technical SEO audit for SaaS companies" is easier to rank than "technical SEO" and attracts more qualified visitors.',
    ],
    examples: '"Schema markup generator for WooCommerce" is long-tail. "Schema markup" is a head term. The long-tail version has lower volume but higher commercial intent from a specific audience.',
  },
  'search-intent': {
    body: [
      'Search intent (also called query intent or user intent) is the underlying goal behind a search query. Google\'s primary job is matching results to intent, so understanding intent is the foundation of effective SEO.',
      'The four main intent categories are: Informational (the user wants to learn something), Navigational (the user wants to reach a specific site or brand), Transactional (the user wants to buy or sign up), and Commercial Investigation (the user is researching before a decision).',
      'Mismatching intent is one of the most common reasons a well-written page fails to rank. A transactional-intent keyword like "buy SEO services" should not be answered with a blog post. An informational keyword like "what is keyword difficulty" should not be a product page.',
    ],
    examples: '"SEO agency pricing" shows commercial investigation intent — users want to compare costs before committing. Creating a transparent pricing page for this query aligns with that intent.',
  },
  'keyword-difficulty': {
    body: [
      'Keyword difficulty (KD) is a metric that estimates how hard it is to rank in the top 10 organic results for a given keyword. Most tools express this as a score from 0 to 100, where higher means more competitive.',
      'Difficulty scores are calculated from the link profiles of pages currently ranking. A keyword with all top-10 results having high Domain Rating (DR) scores and many referring domains is genuinely hard to displace.',
      'KD is directional, not absolute. A page can rank for a high-KD keyword with exceptional content that exactly matches search intent — particularly if current results are thin or poorly aligned. Conversely, a low-KD keyword with strong incumbent pages may be harder in practice than the score suggests.',
    ],
    examples: '"SEO" has a KD of 100 in most tools. "SEO for Shopify stores" might be KD 40-60. Targeting the second creates a realistic path to page 1 for a newer domain.',
  },
  'backlink': {
    body: [
      'A backlink is an inbound link from one website to another. When Site A links to Site B, that is a backlink for Site B. Google uses backlinks as a signal of authority and relevance: a page linked to by many trusted sites is more likely to rank well.',
      'Not all backlinks are equal. Links from high-authority, topically relevant domains carry more weight. Links from low-quality or spammy sites carry less or can be actively harmful. The quality, relevance, and anchor text of backlinks collectively determine their ranking impact.',
      'Building backlinks (link building) is one of the highest-ROI but most time-intensive aspects of SEO. Tactics include digital PR, guest posting, linkable asset creation, and competitor backlink prospecting.',
    ],
    examples: 'A link from Search Engine Journal to your SEO case study carries far more weight than 100 links from unrelated directory sites.',
    relatedService: { href: '/services/link-building', label: 'Our Link Building Service' },
  },
  'referring-domain': {
    body: [
      'A referring domain is a unique domain that links to your site. If a domain links to you 50 times, it counts as one referring domain but 50 backlinks. Referring domain count is generally a more meaningful signal than raw backlink count.',
      'Google treats each domain as a single vote of confidence, regardless of how many individual pages on that domain link to you. Growing your referring domain count — particularly from high-authority, relevant sites — is the primary link building objective.',
      'Referring domain growth rate is a useful SEO health metric. Steady monthly growth of new referring domains signals active link building and editorial interest. A flat or declining trend may indicate link rot or stagnating authority.',
    ],
    examples: 'A site with 500 backlinks from 10 referring domains is typically weaker than a site with 200 backlinks from 150 referring domains.',
  },
  'anchor-text': {
    body: [
      'Anchor text is the visible, clickable text of a hyperlink. It tells both users and search engines what the linked page is about. Google uses anchor text as a relevance signal: if many sites link to a page with the anchor "best project management software," that reinforces the page\'s relevance for that topic.',
      'There are several anchor text types: exact-match (the keyword you target), partial-match (variation of the keyword), branded (your brand name), generic ("click here", "learn more"), and naked URL (the URL itself). A healthy backlink profile includes a natural mix of all types.',
      'Over-optimizing anchor text — too many exact-match anchors pointing to a single page — is a pattern Google\'s Penguin algorithm targets. Natural link profiles have predominantly branded and generic anchors, with exact-match making up a small percentage.',
    ],
    examples: 'A link with anchor "technical SEO audit" pointing to a service page is exact-match. A link saying "TheProjectSEO" is branded. "Learn more here" is generic.',
  },
  'domain-rating': {
    body: [
      'Domain Rating (DR) is Ahrefs\' metric for the overall strength of a website\'s backlink profile, on a logarithmic scale from 0 to 100. A DR of 70 is dramatically stronger than a DR of 35 — the scale is not linear.',
      'DR is calculated based on the quantity and quality of referring domains pointing to a site. It is useful for comparing relative authority between domains and for assessing the difficulty of outranking a competitor.',
      'DR is Ahrefs-specific. Moz uses Domain Authority (DA), Semrush uses Authority Score. These metrics are directionally similar but use different algorithms and data sets, so comparing DR on one site to DA on another is not meaningful.',
    ],
    examples: 'A DR of 6 (like theprojectseo.com\'s current baseline) means the site is building authority. Linkgraph.com at DR 60+ has a large authority advantage that requires sustained link building to close.',
  },
  'internal-link': {
    body: [
      'An internal link is a hyperlink between two pages on the same domain. Internal linking serves multiple purposes: it helps users navigate your site, distributes PageRank (link equity) between pages, and signals to Google which pages are most important.',
      'Strategic internal linking accelerates rankings. A new page with no external backlinks can still rank well if many high-traffic, high-authority pages on your site link to it. This is how large sites with mature topical authority launch new pages successfully.',
      'Common internal linking patterns include hub-and-spoke (a pillar page links to cluster pages and vice versa), contextual links (linking from body copy to related pages), and breadcrumb navigation (showing the page hierarchy).',
    ],
    examples: 'A blog post about "technical SEO audits" that links to your Technical SEO service page transfers relevance and PageRank to that page, helping it rank for commercial terms.',
  },
  'canonical-tag': {
    body: [
      'A canonical tag (rel="canonical") is an HTML element that tells search engines which version of a URL is the "authoritative" or "preferred" version. It is used to prevent duplicate content from diluting ranking signals across multiple similar URLs.',
      'Common scenarios requiring canonicalization: paginated content (page 1 vs page 2), parameter-based URLs (product pages with sort/filter parameters), HTTP vs HTTPS versions, www vs non-www, and content syndicated to multiple domains.',
      'Canonical tags are a hint, not a directive. Google may override them if it determines the tag is incorrect or if another signal (like a redirect) contradicts it. Canonical errors are one of the most common findings in technical SEO audits.',
    ],
    examples: 'Your product page is accessible at /products/widget/, /products/widget?color=red, and /products/widget?ref=homepage. A canonical pointing all variants to /products/widget/ consolidates their signals.',
  },
  'duplicate-content': {
    body: [
      'Duplicate content refers to blocks of content that appear on multiple URLs, either within the same domain or across different domains. Google does not want to serve the same content twice, so it attempts to identify the canonical version and may suppress duplicates in results.',
      'Duplicate content rarely results in a penalty unless it is clearly manipulative. More commonly, it causes ranking dilution — multiple pages competing for the same query split the signals that would otherwise concentrate on one page.',
      'Internal duplication often occurs due to CMS settings (mobile versions, printer-friendly pages, session IDs in URLs, tag and category pages with overlapping content). External duplication occurs when content is syndicated or scraped.',
    ],
    examples: 'An e-commerce site with 10 color variants of a product each on their own URL, all with identical product descriptions, has duplicate content. Canonicalizing to the main variant URL resolves this.',
  },
  'hreflang': {
    body: [
      'Hreflang is an HTML attribute (rel="alternate" hreflang="x") that tells Google a page\'s language and regional target. It is used on international sites to ensure each locale sees the correct language version in search results.',
      'Implementing hreflang requires every page in a language cluster to link to every other variant in that cluster, and to include an x-default tag for the fallback URL. Common errors include missing return tags, incorrect locale codes, and pointing to redirects rather than canonical URLs.',
      'Hreflang is complex to implement at scale and is one of the most error-prone areas of technical SEO. A site with 10 language variants and 500 pages has 5,000 individual hreflang relationships to maintain.',
    ],
    examples: 'A site with English (US), English (UK), and Spanish (Mexico) versions uses hreflang to ensure US visitors see /en-us/page/, UK visitors see /en-gb/page/, and Mexican visitors see /es-mx/page/.',
    relatedService: { href: '/tools/hreflang-generator', label: 'Free Hreflang Generator' },
  },
  'schema-markup': {
    body: [
      'Schema markup is structured data added to HTML pages in JSON-LD (or Microdata/RDFa) format that helps search engines understand the content and context of a page. It comes from Schema.org, a vocabulary developed collaboratively by Google, Bing, Yahoo, and Yandex.',
      'Schema markup does not directly improve rankings, but it can significantly impact how your pages appear in search results. Properly implemented schema enables rich results: star ratings, FAQs, How-To steps, event dates, recipe details, and more.',
      'The most impactful schema types for most sites are Organization (for the homepage), Service or Product (for service/product pages), FAQPage (for Q&A sections), BreadcrumbList (for navigation structure), and Article (for blog content).',
    ],
    examples: 'A software product page with Product schema and AggregateRating can appear with star ratings in the SERP, significantly increasing CTR compared to a plain listing.',
    relatedService: { href: '/tools/schema-generator', label: 'Free Schema Generator' },
  },
  'core-web-vitals': {
    body: [
      'Core Web Vitals are Google\'s set of page experience metrics used as a ranking signal. The three metrics are: LCP (Largest Contentful Paint) — how long it takes for the main content to load, INP (Interaction to Next Paint) — how responsive the page is to user interactions, and CLS (Cumulative Layout Shift) — how stable the layout is as the page loads.',
      'Google\'s target thresholds: LCP under 2.5 seconds (good), under 4 seconds (needs improvement), over 4 seconds (poor). INP under 200ms (good). CLS under 0.1 (good). Pages passing all three are considered to have a good page experience.',
      'Core Web Vitals are measured using real-user data from Chrome (CrUX data), not just lab-based testing tools. A page can score well in PageSpeed Insights but still fail in the field if real users experience slower loads due to network conditions or device capabilities.',
    ],
    examples: 'A page with a hero image that is not properly preloaded may have an LCP of 5+ seconds. Fixing the image delivery typically cuts LCP by 40-60% on mobile.',
  },
  'crawl-budget': {
    body: [
      'Crawl budget refers to the number of pages Googlebot will crawl on your site within a given timeframe. It is determined by crawl rate limit (how fast Google can crawl without overloading your server) and crawl demand (how much Google wants to crawl your content).',
      'Crawl budget matters for large sites (10,000+ pages) where Google may not crawl every page regularly. Sites with significant crawl waste — low-value URLs like faceted navigation combinations, parameter spam, soft 404s, and thin pages — spend their budget on pages that add no ranking value.',
      'Improving crawl efficiency means ensuring robots.txt, canonical tags, and your sitemap are aligned so Googlebot focuses on your highest-value pages. For most sites under 1,000 pages, crawl budget is rarely a practical constraint.',
    ],
    examples: 'An e-commerce site with 15,000 category filter combinations (color+size+material) can waste most of its crawl budget on non-indexable URLs. Disallowing these in robots.txt or using canonical tags concentrates crawling on core category pages.',
  },
  'indexability': {
    body: [
      'Indexability is the ability of a page to be stored in Google\'s search index and potentially appear in search results. A page must be crawlable (accessible to Googlebot) and indexable (not blocked by noindex, canonical pointing elsewhere, or HTTP errors) to rank.',
      'Common indexability issues include noindex tags accidentally applied in staging environments and pushed to production, orphan pages not linked from anywhere on the site, soft 404s that return a 200 status but show "page not found" content, and canonical tags pointing to incorrect URLs.',
      'Monitoring index coverage in Google Search Console is the primary way to identify indexability problems. The Coverage report shows indexed pages, excluded pages, and the reasons for exclusion.',
    ],
    examples: 'A site migrated from HTTP to HTTPS but left noindex tags on the HTTPS pages. All 500 pages are technically crawlable but none will appear in search results until the noindex tags are removed.',
  },
  'robots-txt': {
    body: [
      'The robots.txt file is a text file at the root of a domain (e.g., example.com/robots.txt) that gives crawlers instructions about which URLs they can and cannot access. It uses the Robots Exclusion Protocol standard.',
      'robots.txt controls crawl access, not indexation. Disallowing a URL prevents Google from crawling it, but if the URL is linked to from other pages, Google may still index it based on those external signals — it just will not have read the page content.',
      'Common legitimate uses of robots.txt include blocking /admin/, /staging/, /api/ endpoints, duplicate parameter-based URLs, and internal search results. A poorly configured robots.txt that blocks CSS or JavaScript files can prevent Google from rendering your pages correctly.',
    ],
    examples: 'TheProjectSEO\'s robots.txt intentionally allows AI training bots (no Disallow for GPTBot, ClaudeBot, etc.) as part of an AEO strategy. Most sites block these by default.',
    relatedService: { href: '/tools/schema-generator', label: 'Free Schema Generator' },
  },
  'featured-snippet': {
    body: [
      'A featured snippet is a selected search result that appears in a box at the top of Google\'s results page (often called "Position Zero") that directly answers the query. It is extracted from a page that Google determines gives the best direct answer.',
      'The three main featured snippet formats are paragraph (a short text answer), list (ordered or unordered steps or items), and table (data in tabular format). The format Google selects depends on the query type.',
      'Winning featured snippets requires content that explicitly answers the target question, is well-structured (with headings, lists, and concise paragraphs), and comes from a page already ranking in the top 10. Featured snippets are contested positions — creating content specifically structured for snippet capture is a viable tactic.',
    ],
    examples: 'Searching "how many pages should a sitemap have" may trigger a featured snippet from a page that has a clear paragraph answering the question followed by supporting context.',
  },
  'people-also-ask': {
    body: [
      'People Also Ask (PAA) is a SERP feature showing expandable question-and-answer boxes related to the original query. Clicking one question expands its answer and dynamically loads more related questions.',
      'PAA boxes appear in the majority of Google searches and represent a significant visibility opportunity. The questions in PAA often reflect informational queries that sit around a transactional keyword, making them valuable for content planning.',
      'Winning a PAA box requires content that concisely answers the specific question, typically within 40-60 words, followed by fuller context. FAQ-formatted content with concise answers and schema markup increases PAA eligibility.',
    ],
    examples: 'A search for "enterprise SEO" might show PAA questions including "What does enterprise SEO include?", "How much does enterprise SEO cost?", and "What is the difference between SMB and enterprise SEO?"',
  },
  'rich-result': {
    body: [
      'Rich results are Google search results that display additional visual elements beyond a standard title, URL, and description. They are powered by structured data (schema markup) implemented on the page.',
      'Common rich result types include review stars, product prices and availability, FAQ dropdowns, How-To steps, event dates and locations, recipe details, and breadcrumb paths. Rich results improve click-through rates by making listings more visually prominent and informative.',
      'Google\'s Rich Results Test tool validates whether a page\'s structured data qualifies for rich result features. Not all correctly implemented schema will display as rich results — Google reserves the right to show them selectively based on quality signals.',
    ],
    examples: 'A product page with Product and AggregateRating schema may show as a rich result with star ratings (e.g., 4.7/5 from 312 reviews), dramatically improving CTR compared to a standard listing.',
  },
  'topical-authority': {
    body: [
      'Topical authority is a site\'s demonstrated expertise on a subject area, measured by the breadth and depth of content coverage and the quality of internal linking that connects related content. Google uses topical authority as a proxy for expertise and trustworthiness on a given topic.',
      'Building topical authority requires creating a comprehensive content architecture: a pillar page that covers the topic at a high level, supported by cluster pages that cover sub-topics in depth, all interconnected with strategic internal links. Gaps in coverage represent weaknesses that competitors can exploit.',
      'Topical authority compounds. A site that has been consistently covering "technical SEO" for three years — with deep guides on crawl budget, Core Web Vitals, log file analysis, schema, and hreflang — will outrank a newer site on any given technical SEO keyword even with fewer backlinks to that specific page.',
    ],
    examples: 'Moz has built topical authority in SEO over 15+ years. Any new article they publish on an SEO topic inherits credibility from their established authority, ranking faster than a similar article on a new domain.',
  },
  'pillar-page': {
    body: [
      'A pillar page is a comprehensive, high-level overview of a broad topic that serves as the hub in a topic cluster. It covers the topic at breadth (not depth) and links out to cluster pages that cover individual sub-topics in detail.',
      'Pillar pages typically target high-volume, competitive head keywords. Their authority comes from the internal links they receive from cluster pages, the external links they attract due to their comprehensive coverage, and the topical authority signals built across the entire cluster.',
      'An effective pillar page answers the core question about a topic, provides a structured overview that signals breadth, and clearly links to more detailed resources. Length matters less than comprehensiveness — a well-structured 3,000-word pillar page outperforms a padded 10,000-word document.',
    ],
    examples: 'A pillar page titled "The Complete Guide to Technical SEO" covers crawling, indexing, structured data, Core Web Vitals, and international SEO at the overview level, with each section linking to a dedicated cluster page.',
  },
  'content-pruning': {
    body: [
      'Content pruning is the deliberate process of removing, consolidating, or redirecting low-value content from a site. The theory is that thin, outdated, or irrelevant content can drag down site-wide quality signals, so removing it benefits the remaining content.',
      'Candidates for pruning include thin pages with less than 300 words of unique content, pages with zero or near-zero organic traffic over 12 months, duplicate or near-duplicate content, outdated articles no longer relevant to the audience, and content targeting no viable keyword.',
      'Pruning decisions require data. A page with zero traffic but significant referring domains should be consolidated (redirect to a stronger page), not deleted. A page with thin content but growing clicks should be expanded, not removed. Tools like Google Search Console and Ahrefs provide the traffic and backlink data needed to make evidence-based decisions.',
    ],
    examples: 'A blog with 400 posts where 280 have received zero organic clicks in the past 12 months is a strong candidate for content pruning. Consolidating the best material and redirecting or removing the rest often produces measurable ranking improvements within 60-90 days.',
  },
  'aeo': {
    body: [
      'AEO (Answer Engine Optimization) is the practice of optimizing content and brand presence to appear in AI-generated answers from platforms like ChatGPT, Perplexity, Google AI Overviews, and Claude. It is the natural evolution of SEO as AI answer engines displace traditional search results for a growing share of queries.',
      'AEO differs from traditional SEO in that it targets citations and brand mentions in AI responses, not ranked positions in a results list. The factors that drive AEO visibility include being cited by authoritative sources, having structured and citation-friendly content, building entity clarity in Google\'s Knowledge Graph, and maintaining consistent brand signals across the web.',
      'For most businesses, AEO is not a replacement for SEO — it is a layer on top of it. The same technical foundations (indexability, structured data, strong backlink profile) that support organic rankings also support AI citation probability. AEO adds specific tactics: citation capsule content formats, direct answer structures, and brand mention tracking across AI platforms.',
    ],
    examples: 'A company that consistently appears in Perplexity responses for "best B2B SaaS SEO agency" has strong AEO visibility for that category. A competitor with better Google rankings but no AI citations is losing consideration from AI-first researchers.',
    relatedService: { href: '/services/ai-search', label: 'Our AEO Services' },
  },
  'geo': {
    body: [
      'GEO (Generative Engine Optimization) is a related term to AEO, focusing specifically on optimizing content for retrieval and use by large language models. It emphasizes structuring content so LLMs can extract, synthesize, and cite it accurately in generated responses.',
      'GEO principles include writing factual, verifiable statements rather than vague claims, using clear entity references (company names, product names, locations), structuring content with explicit answers before elaboration, and building citation trails that lead back to primary sources.',
      'The distinction between AEO and GEO is largely academic — practitioners use both terms for overlapping optimization work. Some use "AEO" for optimizing answers in search-like contexts (Perplexity, AI Overviews) and "GEO" for optimizing for open-ended LLM conversations (ChatGPT, Claude without search).',
    ],
    examples: 'A landing page written in GEO format states "TheProjectSEO is an AI-native SEO agency founded in 2023, based in Ranchi, India, operating on the Anthropic Claude stack." This entity-dense, factual sentence is exactly what LLMs extract for brand summary responses.',
  },
  'llm-visibility': {
    body: [
      'LLM visibility (also called AI visibility or AI share of voice) measures how often a brand, product, or company is mentioned or cited in responses generated by large language models. It is the AI-era equivalent of organic search ranking.',
      'LLM visibility is measured by systematically querying AI platforms with target questions and recording how often your brand appears, in what context, with what sentiment, and compared to which competitors. This is what our AI Visibility Checker is designed to quantify.',
      'Improving LLM visibility requires building brand signals that LLMs train on: authoritative mentions in high-quality publications, consistent structured data that clarifies your entity, citation-worthy content that answers the questions LLMs are frequently asked, and a strong Wikipedia or Knowledge Graph entity.',
    ],
    examples: 'A brand that appears in ChatGPT responses for "top AEO agencies" 60% of the time, versus a competitor that appears 20% of the time, has 3x the LLM visibility for that category.',
    relatedService: { href: '/tools/ai-visibility-checker', label: 'AI Visibility Checker (early access)' },
  },
  'entity-seo': {
    body: [
      'Entity SEO is the practice of optimizing your brand, products, and people as entities in Google\'s Knowledge Graph. An entity is any real-world object — a person, place, organization, concept, or product — that Google can uniquely identify and relate to other entities.',
      'When Google understands your brand as a clear entity, it can confidently surface you in branded searches, knowledge panels, and entity-based featured snippets. Poorly defined entities get confused with other entities sharing similar names or attributes.',
      'Entity optimization involves: creating a complete, consistent Google Business Profile, claiming a Knowledge Panel, building structured data that describes your organization clearly, ensuring consistent Name/Address/Phone (NAP) across the web, and publishing entity-defining content on your site and high-authority third-party sites.',
    ],
    examples: 'Google treats "Apple" as an entity with clear knowledge: it is a technology company, founded by Steve Jobs, headquartered in Cupertino, making iPhones and MacBooks. Entity SEO for a new company means building that same definitional clarity.',
  },
  'knowledge-graph': {
    body: [
      'Google\'s Knowledge Graph is a large-scale database of entities and the relationships between them. It stores facts about people, places, organizations, events, products, and concepts, and uses this information to enhance search results with knowledge panels, entity boxes, and direct answers.',
      'The Knowledge Graph is built from multiple sources: Wikipedia, Wikidata, official websites (using schema markup), Google Business profiles, social media profiles, and patterns extracted from the broader web. Google continuously updates it as new information is published and validated.',
      'For SEO purposes, the Knowledge Graph matters because entities with strong Knowledge Graph representations rank more confidently, appear in knowledge panels, get disambiguated correctly in search results, and are more likely to be cited by AI systems that draw from Knowledge Graph data.',
    ],
    examples: 'When you search for a public company, Google\'s right-side knowledge panel (showing founding date, headquarters, CEO, and stock ticker) is pulled directly from the Knowledge Graph. Building your brand\'s Knowledge Graph presence starts with consistent structured data and Wikipedia-level factual content.',
  },
}

/* -------------------------------------------------------------------------- */
/* Service link map for related terms                                         */
/* -------------------------------------------------------------------------- */

const relatedServiceMap: Record<string, { href: string; label: string }> = {
  'schema-markup': { href: '/tools/schema-generator', label: 'Free Schema Generator' },
  'hreflang': { href: '/tools/hreflang-generator', label: 'Free Hreflang Generator' },
  'aeo': { href: '/services/ai-search', label: 'Our AEO Services' },
  'backlink': { href: '/services/link-building', label: 'Our Link Building Service' },
  'llm-visibility': { href: '/tools/ai-visibility-checker', label: 'AI Visibility Checker' },
  'seo': { href: '/services', label: 'Our SEO Services' },
}

/* -------------------------------------------------------------------------- */
/* Page component                                                             */
/* -------------------------------------------------------------------------- */

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>
}) {
  const { term } = await params
  const entry = getGlossaryTermBySlug(term)
  if (!entry) notFound()

  const definition = fullDefinitions[entry.slug]
  const relatedTerms = entry.relatedSlugs
    .map((slug) => glossary.find((g) => g.slug === slug))
    .filter((t): t is GlossaryTerm => Boolean(t))

  const relatedService = relatedServiceMap[entry.slug] || definition?.relatedService

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          '@id': `https://theprojectseo.com/resources/glossary/${entry.slug}`,
          name: entry.term,
          description: entry.shortDefinition,
          url: `https://theprojectseo.com/resources/glossary/${entry.slug}`,
          inDefinedTermSet: {
            '@type': 'DefinedTermSet',
            '@id': 'https://theprojectseo.com/resources/glossary',
            name: 'TheProjectSEO SEO Glossary',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: `What is ${entry.term}?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: entry.shortDefinition,
              },
            },
          ],
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/resources" className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent">
                Resources
              </Link>
              <span className="text-ash">/</span>
              <Link href="/resources/glossary" className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent">
                Glossary
              </Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">{entry.term}</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              SEO Glossary
            </p>
            <h1 className="font-display text-[clamp(40px,5.5vw,80px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              {entry.term}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              {entry.shortDefinition}
            </p>
          </div>
        </Container>
      </div>

      {/* Definition body */}
      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {definition ? (
                <div className="prose-style space-y-6 text-base leading-relaxed text-slate">
                  {definition.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {definition.examples && (
                    <div className="mt-8 bg-cream border-l-4 border-accent pl-6 py-4 pr-4">
                      <p className="font-mono text-xs uppercase tracking-wider text-ash mb-2">Example</p>
                      <p className="text-base text-slate">{definition.examples}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6 text-base leading-relaxed text-slate">
                  <p>{entry.shortDefinition}</p>
                  <p className="text-ash text-sm">
                    Extended definition coming soon. This entry currently shows the short
                    definition.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Category badge */}
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ash mb-2">Category</p>
                <Link
                  href="/resources/glossary"
                  className="inline-block font-mono text-xs uppercase tracking-wider text-accent border border-accent px-3 py-1 hover:bg-accent hover:text-white transition-colors"
                >
                  {entry.category.replace('-', ' ')}
                </Link>
              </div>

              {/* Related service CTA */}
              {relatedService && (
                <div className="bg-cream border border-border p-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-ash mb-3">Related</p>
                  <Link
                    href={relatedService.href}
                    className="font-heading text-sm font-semibold text-accent hover:underline"
                  >
                    {relatedService.label} &rarr;
                  </Link>
                </div>
              )}

              {/* Related terms */}
              {relatedTerms.length > 0 && (
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ash mb-3">
                    Related terms
                  </p>
                  <div className="space-y-2">
                    {relatedTerms.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/resources/glossary/${related.slug}`}
                        className="block p-3 border border-border bg-paper hover:border-accent hover:bg-cream transition-colors"
                      >
                        <span className="font-heading text-sm font-semibold text-ink hover:text-accent">
                          {related.term}
                        </span>
                        <p className="mt-1 text-xs text-slate line-clamp-1">
                          {related.shortDefinition}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Browse full glossary */}
              <div>
                <Link
                  href="/resources/glossary"
                  className="font-mono text-xs uppercase tracking-wider text-ash hover:text-accent"
                >
                  &larr; Back to glossary
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <div className="bg-cream py-16 border-t border-border">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <Subheading>Apply this in practice</Subheading>
            <Heading as="h2" className="mt-2">
              Definitions are step one.
            </Heading>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Our team implements {entry.term} correctly for clients across 15 active engagements.
              If you want a technical SEO audit that covers this and 100+ other checkpoints,
              talk to us.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-heading font-semibold text-base transition-all duration-200 hover:bg-accent/90"
              >
                Get a Free SEO Audit
              </Link>
              <Link
                href="/resources/glossary"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border-emphasis text-stone font-heading font-medium text-base transition-all duration-200 hover:bg-paper"
              >
                Browse All Terms
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
