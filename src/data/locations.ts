import type { Country } from './types';

// 10 countries + dynamic cities.
// Dynamic /locations/[country]/[city]/[service]/ generates from cities x priorityServiceSlugs.
// /usa-seo-services, /philippines-seo-services 301 redirect to /locations/<country>/.

export const countries: Country[] = [
  {
    slug: 'india',
    name: 'India',
    cities: [
      { slug: 'ranchi', name: 'Ranchi', isHQ: true },
      { slug: 'bangalore', name: 'Bangalore' },
      { slug: 'mumbai', name: 'Mumbai' },
      { slug: 'delhi', name: 'Delhi' },
      { slug: 'hyderabad', name: 'Hyderabad' },
      { slug: 'pune', name: 'Pune' },
      { slug: 'chennai', name: 'Chennai' },
    ],
    priorityServiceSlugs: ['seo', 'ai-search', 'content', 'google-ads'],
    status: 'planned',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'usa',
    name: 'United States',
    cities: [
      { slug: 'new-york', name: 'New York' },
      { slug: 'los-angeles', name: 'Los Angeles' },
      { slug: 'san-francisco', name: 'San Francisco' },
      { slug: 'chicago', name: 'Chicago' },
      { slug: 'austin', name: 'Austin' },
      { slug: 'miami', name: 'Miami' },
      { slug: 'seattle', name: 'Seattle' },
    ],
    priorityServiceSlugs: ['seo', 'ai-search', 'google-ads', 'abm'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    cities: [
      { slug: 'london', name: 'London' },
      { slug: 'manchester', name: 'Manchester' },
    ],
    priorityServiceSlugs: ['seo', 'ai-search', 'digital-pr', 'content'],
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
    priorityServiceSlugs: ['seo', 'google-ads', 'content', 'ai-search'],
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
    cities: [{ slug: 'singapore', name: 'Singapore' }],
    priorityServiceSlugs: ['seo', 'ai-search', 'content', 'linkedin-ads'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'germany',
    name: 'Germany',
    cities: [
      { slug: 'berlin', name: 'Berlin' },
      { slug: 'munich', name: 'Munich' },
    ],
    priorityServiceSlugs: ['seo', 'technical-seo', 'ai-search', 'analytics'],
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
    priorityServiceSlugs: ['seo', 'ai-search', 'ecommerce-seo', 'content'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'uae',
    name: 'UAE',
    cities: [
      { slug: 'dubai', name: 'Dubai' },
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
