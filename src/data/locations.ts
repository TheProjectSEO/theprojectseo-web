import type { Country } from './types';

// 10 countries + dynamic cities.
// Dynamic /locations/[country]/[city]/[service]/ generates from cities x priorityServiceSlugs.
// /usa-seo-services, /philippines-seo-services 301 redirect to /locations/<country>/.
//
// serviceContent on City entries: top 10 highest-commercial-intent city-service
// combinations are enriched with unique heroDescription, valueProps, and faqs.
// Remaining ~130 combinations fall back to generic copy in entity-page-template.tsx.

export const countries: Country[] = [
  {
    slug: 'india',
    name: 'India',
    cities: [
      {
        slug: 'ranchi',
        name: 'Ranchi',
        isHQ: true,
        serviceContent: {
          seo: {
            heroDescription:
              'We are headquartered in Ranchi, which means our Jharkhand clients get senior SEO strategy without the markup that Delhi or Bangalore agencies add for regional clients. Local businesses, Tier-2 ecommerce, and Jharkhand SaaS founders get enterprise-grade SEO at regional rates.',
            valueProps: [
              'Local presence: we are a Ranchi-registered OPC Pvt Ltd with Jharkhand clients already ranking in Indian SERPs',
              'Regional pricing with enterprise output: same playbook we run for US SaaS clients, priced for the Indian market',
              'Hindi + English content strategy: optimised for both language variants where the SERP shows mixed-language results',
              'Same-timezone collaboration: Ranchi-based team available for in-person strategy sessions with Jharkhand clients',
            ],
            faqs: [
              {
                question: 'Why hire an SEO agency based in Ranchi rather than Delhi or Bangalore?',
                answer:
                  'You get senior strategists on your account instead of junior executives. Delhi and Bangalore agencies load their rates to cover office overhead in those cities, then assign your account to a 1-2 year executive. We run the same playbooks at regional rates with the founder and senior consultants personally involved. For Jharkhand businesses specifically, we understand local SERP behaviour and can meet in person.',
              },
              {
                question: 'Do you work with businesses outside Ranchi?',
                answer:
                  'Yes. Most of our clients are outside Ranchi: US SaaS companies, Singapore e-commerce, UK fintech. We are simply headquartered here. For local Ranchi and Jharkhand businesses, our geographic proximity is a bonus; for clients anywhere else, we deliver the same output remotely.',
              },
              {
                question: 'What industries in Ranchi do you serve?',
                answer:
                  'We work with Jharkhand-based e-commerce brands, local service businesses, coaching institutes, and regional SaaS startups. Our playbook covers both Hindi and English search intent which matters for Tier-2 and Tier-3 Indian markets.',
              },
            ],
          },
        },
      },
      {
        slug: 'bangalore',
        name: 'Bangalore',
        serviceContent: {
          seo: {
            heroDescription:
              'Bangalore SaaS founders compete against global players on the same SERPs. We build SEO programmes that target the US and EU buyer directly, not just local Bangalore searches. Our Bangalore SaaS clients typically see 3-5x organic demo requests within 9 months.',
            valueProps: [
              'US + EU buyer targeting: most Bangalore SaaS sells internationally; we optimise for that SERP, not Indian local search',
              'Developer-audience content: Bangalore products often target engineers; our content strategy respects how developers actually search',
              'Competitor playbook: we know the top-ranking SaaS agencies in your category and exactly where their content is thin',
              'Bootstrap-friendly pricing with India headquarters: enterprise output at a margin Bangalore founders can afford pre-Series A',
            ],
            faqs: [
              {
                question: 'I am a Bangalore-based SaaS company. Should I target Indian or global keywords?',
                answer:
                  'Global, unless your product is specifically for the Indian market. Most Bangalore SaaS sells to US and EU buyers. The SERP you compete on is the US SERP, not the Indian one. We set up your domain structure, hreflang, and content strategy around that buyer from day one.',
              },
              {
                question: 'How long does SEO take to produce pipeline for a Bangalore SaaS startup?',
                answer:
                  'Most of our Bangalore SaaS clients see their first trial signups attributable to organic search within 4-6 months. Meaningful pipeline contribution (10%+ of new trials) typically lands at 8-12 months. Comparison pages and integration pages rank faster than blog content.',
              },
              {
                question: 'Do you work in Koramangala or Indiranagar in person?',
                answer:
                  'Most engagements are remote. We have founders and senior leads in Ranchi and occasional trips to Bangalore for kickoff sessions if needed. Day-to-day collaboration is over Slack, Linear, and weekly video calls.',
              },
            ],
          },
        },
      },
      { slug: 'mumbai', name: 'Mumbai' },
      { slug: 'delhi', name: 'Delhi' },
      { slug: 'hyderabad', name: 'Hyderabad' },
      { slug: 'pune', name: 'Pune' },
      { slug: 'chennai', name: 'Chennai' },
    ],
    priorityServiceSlugs: ['seo', 'aeo', 'content', 'google-ads'],
    status: 'planned',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'usa',
    name: 'United States',
    cities: [
      {
        slug: 'new-york',
        name: 'New York',
        serviceContent: {
          seo: {
            heroDescription:
              'New York SEO competition is the most brutal in North America: finance, legal, agency services, and B2B SaaS all fight for the same commercial queries. We win in this market by pairing bottom-of-funnel content with high-authority digital PR, not link farms that Google discounts.',
            valueProps: [
              'Manhattan-grade competitive rigor: we audit the top 20 competitors for every target keyword before proposing content',
              'Tier-1 publication backlinks: we target Forbes, Inc, Entrepreneur, WSJ via data-driven digital PR campaigns',
              'Financial services expertise: we understand YMYL constraints, E-E-A-T signals, and the FCA/SEC-adjacent content that NY fintechs need',
              'Pipeline-tracked reporting: NY clients require revenue attribution, not vanity metrics; we wire organic sessions to closed-won in CRM',
            ],
            faqs: [
              {
                question: 'What makes SEO harder in New York than other US markets?',
                answer:
                  'Search volume is high but competition is at the absolute top. For commercial keywords like "new york seo agency" or "manhattan law firm seo", the top 10 is held by agencies with 8-10 year domain histories, 1000+ referring domains, and dedicated NY content teams. Winning requires either a 12-month commitment to catching up on authority, a different angle (vertical specialisation), or paid amplification to cover the ramp.',
              },
              {
                question: 'How much do NY companies typically spend on SEO per month?',
                answer:
                  'Our NY clients spend between $2,500 and $15,000 per month depending on vertical and scope. Competitive verticals (finance, legal, real estate) sit at the higher end because link-building and digital PR costs are higher in those spaces. Mid-market B2B SaaS typically runs $3,500-$6,000.',
              },
              {
                question: 'Do you work with New York law firms or financial services clients?',
                answer:
                  'Yes. We have experience with the YMYL (Your Money or Your Life) constraints that apply to finance and legal content. Our approach involves author schema with verified credentials, citation-heavy content, and a content review cadence with your compliance team before publish.',
              },
            ],
          },
        },
      },
      {
        slug: 'los-angeles',
        name: 'Los Angeles',
        serviceContent: {
          'google-ads': {
            heroDescription:
              'LA Google Ads costs are inflated by agencies bidding on their own client keywords and broad-match settings nobody audits. We run LA accounts with aggressive negative keywords, search-term-level bid management, and conversion-value bidding tied to customer LTV instead of lead count.',
            valueProps: [
              'LA-specific negatives: we build negative keyword lists around Hollywood, entertainment industry, and tourist queries that inflate spend without producing customers',
              'Entertainment-vertical experience: our LA clients include talent agencies, production companies, and DTC consumer brands; we know which keywords attract noise',
              'Daypart-aware bidding: LA time zone meets US nationwide traffic, so we adjust bids by hour-of-day based on your actual conversion patterns, not guesswork',
              'iOS + DTC optimisation: LA skews iOS-heavy; our creative and landing pages are optimised for iOS browser behaviour, not Android defaults',
            ],
            faqs: [
              {
                question: 'Why is LA Google Ads more expensive than other US metros?',
                answer:
                  'Two reasons. First, LA has concentration in entertainment, DTC e-commerce, and talent services where CPCs run 30-50% above national average. Second, many LA agencies run broad-match keywords without tight negatives, so their own bids inflate the auction for everyone. We run exact and phrase match only, with negative keyword lists built from your actual search-term reports, which typically cuts wasted spend by 25-40% in the first 90 days.',
              },
              {
                question: 'Do you manage Google Ads for DTC e-commerce LA brands?',
                answer:
                  'Yes, we work with LA-based DTC brands on Google Shopping, Performance Max, and standard Search campaigns. We set up proper product feed optimisation, merchant centre reporting, and LTV-based smart bidding so you are not optimising for first-order revenue when your category has strong repeat-purchase economics.',
              },
              {
                question: 'How quickly can an LA client see PPC improvements?',
                answer:
                  'Within the first 30 days we typically cut wasted spend by 20-35% through negative keyword mining, match-type tightening, and landing page improvements. ROI improvements on the positive side take 60-90 days as we gather conversion data and scale what works.',
              },
            ],
          },
        },
      },
      {
        slug: 'san-francisco',
        name: 'San Francisco',
        serviceContent: {
          seo: {
            heroDescription:
              'SF SaaS founders already understand SEO intellectually. What they lack is bandwidth: engineering, product, and GTM all fight for the same 24-hour day. We bolt on as an outsourced SEO function that plugs into your existing data stack (BigQuery, GA4, Segment) instead of asking you to babysit our reports.',
            valueProps: [
              'BigQuery-native reporting: we pull from your GSC + GA4 exports and build dashboards you can access anytime, not PDF reports we email monthly',
              'Founder-friendly collaboration: weekly async loom updates, Slack channel for synchronous escalation, zero mandatory meetings',
              'YC and A16Z portfolio experience: we know how SF-style Series A and B companies think about CAC, payback, and attribution',
              'Product-led SEO specifically: if your growth motion is product-led, our SEO strategy is built around free-tier sign-ups, not demo requests',
            ],
            faqs: [
              {
                question: 'We already have a data team. How do you avoid duplicating our work?',
                answer:
                  'We plug into your data infrastructure instead of running a parallel one. If you have GSC exports in BigQuery, we query them. If you have GA4 exported to BigQuery, we use your schema, not ours. Our reporting is a layer on top of your existing data, not a separate tool that needs to be reconciled monthly.',
              },
              {
                question: 'Do you work with product-led SaaS companies specifically?',
                answer:
                  'Yes, this is a significant chunk of our SF client base. Product-led SEO is structurally different: we optimise around use-case terms that bring in qualified free-tier signups, and we measure success in activation and upgrade rates, not demo requests. Our playbook covers this.',
              },
              {
                question: 'How do you handle velocity for an SF-style startup that ships weekly?',
                answer:
                  'We match your cadence. No monthly retainer reports you ignore. Weekly async updates, bi-weekly sprint planning with your growth or product team, and Slack-native escalation for anything that needs a decision within 24 hours.',
              },
            ],
          },
        },
      },
      { slug: 'chicago', name: 'Chicago' },
      { slug: 'austin', name: 'Austin' },
      { slug: 'miami', name: 'Miami' },
      { slug: 'seattle', name: 'Seattle' },
    ],
    priorityServiceSlugs: ['seo', 'aeo', 'google-ads', 'abm'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    cities: [
      {
        slug: 'london',
        name: 'London',
        serviceContent: {
          seo: {
            heroDescription:
              'London SEO means competing against agency clusters in Shoreditch and Fitzrovia that have Fortune 500 retainers funding their domain authority. We win for London clients by finding SERP gaps the big agencies have ignored: vertical sub-niches, programmatic opportunities, and the "long tail" they cannot afford to touch.',
            valueProps: [
              'FinTech + legal expertise: London is the EU hub for both verticals; our team has specific YMYL-compliant content experience',
              'Post-Brexit content targeting: we adjust for UK-only regulations, keyword spelling (optimise vs optimize), and the EU queries that now need separate treatment',
              'Digital PR through UK tier-1: The Guardian, FT, The Times, Wired UK are all in our outreach network for data-driven stories',
              'Multi-market strategy: many London clients need both UK and US SEO; we run both from one strategy rather than two agencies duplicating work',
            ],
            faqs: [
              {
                question: 'What should a London business look for in an SEO agency?',
                answer:
                  'Look for three things: demonstrated experience in your vertical (fintech, legal, e-commerce, SaaS behave very differently), transparent attribution (do they tie organic traffic to revenue or just report rankings), and honest assessment of timelines (anyone promising top-3 for competitive London keywords in under 6 months is either lying or targeting keywords nobody searches). We are happy to share referenceable case studies.',
              },
              {
                question: 'How do London SEO rates compare to US or Indian agencies?',
                answer:
                  'London-based agencies typically charge £3,000-£10,000 per month for mid-market retainers due to London office overhead and salary costs. We deliver at the lower end of that range because we are India-headquartered with a London-facing client team, which means 30-40% lower operational costs passed through to the client. Output is equivalent or better.',
              },
              {
                question: 'Do you understand post-Brexit content and keyword targeting?',
                answer:
                  'Yes. Post-Brexit, UK and EU search behaviour diverges on regulated queries (financial services, healthcare, data privacy). Spelling conventions, currency formatting, and legal compliance language all need explicit UK treatment. We set up hreflang and content-variant strategy to handle this from day one.',
              },
            ],
          },
        },
      },
      { slug: 'manchester', name: 'Manchester' },
    ],
    priorityServiceSlugs: ['seo', 'aeo', 'digital-pr', 'content'],
    status: 'planned',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'canada',
    name: 'Canada',
    cities: [
      { slug: 'toronto', name: 'Toronto' },
      { slug: 'vancouver', name: 'Vancouver' },
    ],
    priorityServiceSlugs: ['seo', 'google-ads', 'content', 'aeo'],
    status: 'planned',
    launchPhase: 'M1',
    locales: ['en', 'fr'],
  },
  {
    slug: 'australia',
    name: 'Australia',
    cities: [
      { slug: 'sydney', name: 'Sydney' },
      { slug: 'melbourne', name: 'Melbourne' },
    ],
    priorityServiceSlugs: ['seo', 'local-seo', 'google-ads', 'content'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    cities: [
      {
        slug: 'singapore',
        name: 'Singapore',
        serviceContent: {
          seo: {
            heroDescription:
              'Singapore SEO is a regional hub play: most Singapore businesses serve APAC, not just the local 5.9M market. We build SEO strategies that rank in Singapore while also capturing Malaysia, Indonesia, Thailand, and Philippines buyer traffic through smart hreflang and content localisation.',
            valueProps: [
              'APAC regional reach: most Singapore clients sell to the broader region; we optimise for Singapore + 4-5 APAC markets from one domain',
              'Bilingual search: Singapore SERPs mix English and Chinese; we handle both without requiring a separate content team',
              'Enterprise + government expertise: Singapore has unique procurement requirements; our content respects IMDA, PDPA, and MAS compliance constraints',
              'Singapore-Philippines integration: we also work in the Philippines market; many Singapore clients expand there first and we handle both from one engagement',
            ],
            faqs: [
              {
                question: 'Should a Singapore business build content in English, Chinese, or both?',
                answer:
                  'Depends on your ICP. Singapore government and enterprise deals happen in English almost exclusively. Consumer and SMB in Singapore increasingly involves Mandarin Chinese, especially if you serve the hawker, F&B, or local retail verticals. We usually start English-first and layer Chinese on top once the English SEO is stable.',
              },
              {
                question: 'Do you help Singapore businesses rank in Malaysia or Indonesia?',
                answer:
                  'Yes, through either a localised sub-folder (/my/, /id/) with hreflang or a separate ccTLD if your content meaningfully differs. For most Singapore B2B clients, a Singapore-domain strategy with regional targeting is enough to capture APAC search volume because the commercial queries are largely in English.',
              },
              {
                question: 'Do you have Singapore-based clients we can speak to?',
                answer:
                  'Yes. We work with Helpling Singapore and Pigeon Singapore, among others. We can provide referenceable case studies after signing an NDA.',
              },
            ],
          },
        },
      },
    ],
    priorityServiceSlugs: ['seo', 'aeo', 'content', 'linkedin-ads'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'germany',
    name: 'Germany',
    cities: [
      {
        slug: 'berlin',
        name: 'Berlin',
        serviceContent: {
          'technical-seo': {
            heroDescription:
              'Berlin tech buyers are the most technically-literate SEO clients we work with. German buyers expect detailed audit deliverables, benchmarked data, and engineering-grade implementation plans rather than high-level strategy decks. Our Technical SEO service is built for that standard.',
            valueProps: [
              'Engineering-first deliverables: our audits include CWV traces, server-log waterfalls, and implementation pull requests, not just PDF summaries',
              'German-market nuance: we handle UTF-8 encoding, ß/ss variants, and DACH-specific structured data without workarounds',
              'DSGVO/GDPR-aware tracking: our GA4 and server-side implementations are designed to pass German data protection audits from day one',
              'Direct developer collaboration: we work in your GitHub and Jira, not over CC-everyone emails',
            ],
            faqs: [
              {
                question: 'Why do Berlin clients often prefer technical SEO over content-heavy SEO?',
                answer:
                  'Berlin has a high concentration of technically-skilled product teams (SaaS, fintech, enterprise software) where the leadership already understands content value but needs someone who can actually fix site speed, crawl budget, and structured data at engineering depth. They want a senior technical SEO who can write pull requests, not a strategist who writes briefs.',
                },
              {
                question: 'Do you handle GDPR and DSGVO compliance in your analytics setup?',
                answer:
                  'Yes. Our GA4 implementations for German clients use server-side tracking via Google Tag Manager server container, cookie-less measurement where possible, and IP anonymisation as a default. We work with your DPO or legal team to validate the setup meets Bundesdatenschutzgesetz requirements.',
              },
              {
                question: 'Can you write Technical SEO deliverables in German?',
                answer:
                  'Audit summaries and strategic documents we produce in English by default. Implementation tickets, code comments, and technical documentation we can produce in German upon request. Day-to-day Slack and email communication is typically in English.',
              },
            ],
          },
        },
      },
      { slug: 'munich', name: 'Munich' },
    ],
    priorityServiceSlugs: ['seo', 'technical-seo', 'aeo', 'seo-reporting'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en', 'de'],
  },
  {
    slug: 'philippines',
    name: 'Philippines',
    cities: [
      { slug: 'manila', name: 'Manila' },
      { slug: 'cebu', name: 'Cebu' },
    ],
    priorityServiceSlugs: ['seo', 'content', 'ecommerce-seo', 'google-ads'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'hongkong',
    name: 'Hong Kong',
    cities: [{ slug: 'hongkong', name: 'Hong Kong' }],
    priorityServiceSlugs: ['seo', 'aeo', 'ecommerce-seo', 'content'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'uae',
    name: 'UAE',
    cities: [
      {
        slug: 'dubai',
        name: 'Dubai',
        serviceContent: {
          content: {
            heroDescription:
              'Dubai content SEO requires dual-audience thinking: Arabic-speaking local searchers and English-speaking expat/tourist audiences. We run content programmes that cover both without treating one as a translation of the other, because they search completely differently.',
            valueProps: [
              'Dual-language strategy: Arabic and English content built as separate native-market strategies, not translations',
              'Tourism + real estate expertise: two of Dubai\'s highest-volume SEO verticals, both requiring location-specific content rigor',
              'Ramadan and regional event awareness: our content calendar respects regional buying cycles, religious observances, and event-driven search spikes',
              'GCC-wide reach from Dubai: UAE content often ranks across Saudi, Qatar, and Kuwait; we structure for that multi-market reach',
            ],
            faqs: [
              {
                question: 'Should I produce Arabic or English content first for the Dubai market?',
                answer:
                  'English first if you serve expats, B2B buyers, or tourists. Arabic first if you serve local UAE nationals or Gulf-nationals specifically. For most of our Dubai clients the answer is "both in parallel" because the audiences overlap very little. We never machine-translate English into Arabic; we commission native Arabic writers because search behaviour in Arabic is structurally different.',
              },
              {
                question: 'Do you have experience with Dubai tourism, real estate, or F&B SEO?',
                answer:
                  'Yes. These are three of the highest-volume UAE SEO verticals. Each has specific SERP features (Google Maps integration for tourism and F&B, rich snippets for real estate listings) and we have playbooks for each.',
              },
              {
                question: 'How do you handle Arabic RTL content and technical SEO together?',
                answer:
                  'Arabic RTL implementation on a Next.js or similar modern site requires explicit dir="rtl" on the html tag when the locale is Arabic, mirrored CSS for layout, and careful handling of mixed-script content (Arabic + Latin brand names). We set this up at the template level so individual pages do not need per-page RTL fixes.',
              },
            ],
          },
        },
      },
      { slug: 'abu-dhabi', name: 'Abu Dhabi' },
    ],
    priorityServiceSlugs: ['seo', 'content', 'ecommerce-seo', 'google-ads'],
    status: 'planned',
    launchPhase: 'M1',
    locales: ['en', 'ar'],
  },
];

export const countrySlugs = countries.map((c) => c.slug);

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}
