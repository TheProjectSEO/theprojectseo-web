/**
 * Real client testimonials. Add new entries only with explicit client sign-off.
 * TODO: add elizabeth-ching and sho-dewan once their quotes are approved.
 */

export type Testimonial = {
  id: string
  quote: string
  author: string
  role: string
  company: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'james-lim',
    quote: 'We hit our KPIs in less than 3 months. Moved key pages to #1 and #2.',
    author: 'James Lim',
    role: 'CEO',
    company: 'Helpling APAC',
    image: '/testimonials/james-lim.png',
  },
]
