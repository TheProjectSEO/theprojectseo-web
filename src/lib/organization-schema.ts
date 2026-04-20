/**
 * Shared Organization schema constants for TheProjectSEO.
 *
 * Used by EntityPageTemplate and any JSON-LD injection that needs a consistent
 * Organization node. All page-level schemas embed this as their `provider` or
 * `organizer` node so Google's Knowledge Graph sees a single, coherent entity.
 *
 * TODO (data enrichment):
 * - Add 30+ sameAs touchpoints once profiles are claimed:
 *   LinkedIn company page, Crunchbase, AngelList, G2, Clutch, GoodFirms,
 *   Trustpilot, Facebook Business, Instagram, YouTube, GitHub org,
 *   Google Business Profile, Wikidata entity, DBpedia, ProductHunt,
 *   IndiaMART, Justdial, UrbanClap/Urban Company, Glassdoor, Indeed,
 *   Twitter/X, Pinterest, Reddit community, Quora space,
 *   AppSumo, SemRush Agency Partner directory, HubSpot Agency Marketplace,
 *   Moz Recommended Agency list, Search Engine Journal contributor,
 *   Ahrefs Academy, GrowthHackers, Indie Hackers, BrightLocal directory.
 * - Populate `foundingDate`, `numberOfEmployees` once verified.
 * - Add `areaServed` array once priority geos are confirmed with founder.
 * - Add `hasOfferCatalog` with top-level service slugs.
 */

export const SITE_URL = 'https://theprojectseo.com'

export const ORGANIZATION_SCHEMA = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'TheProjectSEO',
  legalName: 'TheProjectSEO Digital (OPC) Private Limited',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: 300,
    height: 60,
  },
  description:
    'AI-native SEO agency specialising in technical SEO, AEO, content engineering, and automation for B2B SaaS, e-commerce, and marketplace businesses.',
  foundingDate: '2023', // TODO: confirm exact founding date with Aditya
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ranchi',
    addressRegion: 'Jharkhand',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@theprojectseo.com',
    url: `${SITE_URL}/contact`,
  },
  // TODO: expand to 30+ verified profiles — see file-level TODO above
  sameAs: [
    'https://www.linkedin.com/company/theprojectseo',
    'https://twitter.com/theprojectseo',
    'https://github.com/TheProjectSEO',
    // TODO: Clutch, G2, GoodFirms, Crunchbase, AngelList once claimed
  ],
} as const

/**
 * Minimal Organization reference used inside nested schema nodes.
 * Avoids bloat when embedding inside Service / LocalBusiness schemas.
 */
export const ORGANIZATION_REF = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'TheProjectSEO',
  url: SITE_URL,
} as const
