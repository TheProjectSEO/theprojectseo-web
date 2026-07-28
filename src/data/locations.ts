import type { Country } from './types';

// TheProjectSEO serves two country markets only.
// Dynamic city and city-service routes are generated exclusively from this list.
export const countries: Country[] = [
  {
    slug: 'india',
    name: 'India',
    cities: [],
    priorityServiceSlugs: ['seo', 'aeo', 'content', 'technical-seo'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en'],
  },
  {
    slug: 'philippines',
    name: 'Philippines',
    cities: [],
    priorityServiceSlugs: ['seo', 'content', 'ecommerce-seo', 'local-seo'],
    status: 'live',
    launchPhase: 'M1',
    locales: ['en'],
  },
];

export const countrySlugs = countries.map((country) => country.slug);

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((country) => country.slug === slug);
}
