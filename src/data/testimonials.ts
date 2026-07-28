/**
 * Client testimonials already published on TheProjectSEO's public website.
 * Preserve the exact quote and attribution wording when reusing them.
 */

export type Testimonial = {
  id: string
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'james-lim',
    quote:
      'We hit our KPIs in less than 3 months. Moved key pages to #1 and #2.',
    author: 'James Lim',
    role: 'CEO',
    company: 'Helpling APAC',
    image: '/testimonials/james-lim.png',
  },
  {
    id: 'elizabeth-ching',
    quote:
      'We successfully migrated our blog from Medium to Goodnotes.com/blog without losing traffic. We also solved tech SEO problems for the Thailand, Japan, Taiwan, and Hong Kong sites, doubling the traffic with minimal efforts.',
    author: 'Elizabeth Ching',
    role: 'Marketing',
    company: 'Goodnotes',
  },
  {
    id: 'sho-dewan',
    quote:
      "There's not enough room here for me to write about all the amazing things Aditya did for our Workhap website & Marketing team! He's an expert when it comes to everything SEO-related and went above & beyond our initial scope of work. He is someone you can absolutely trust and know has your best interest in mind. 10/10 highly recommend Aditya for all your SEO and marketing needs.",
    author: 'Sho Dewan',
    role: 'CEO',
    company: 'Workhap',
  },
  {
    id: 'caleb-hoon',
    quote:
      'Working with Aditya in our journey to rank our website has been a great pleasure. Aditya possesses an exceptional skill set and a deep understanding of SEO strategies and techniques. He has an uncanny ability to analyze complex data and identify critical opportunities to improve organic search rankings and drive targeted website traffic. I wholeheartedly recommend Aditya for any SEO-related position or project.',
    author: 'Caleb Hoon',
    role: 'Head of Community and Operations',
    company: 'OFFEO',
  },
  {
    id: 'eyal-gerber',
    quote:
      'I had the pleasure of working with Aditya. He is a true SEO specialist. He knows how to layout the SEO strategy together with a timeline and a list of tasks to be done.',
    author: 'Eyal Gerber',
    role: 'Founder & CEO',
    company: 'Novodes',
  },
  {
    id: 'shubhangi',
    quote:
      'He helped us with market research, define the right topics along with the content brief and SEO framework. He did an extensive site audit and helped us weed out the loopholes. This helped us scale our traffic and also improved our Google ranking. Aditya was always ready to help and introduced me to a lot of concepts in SEO.',
    author: 'Shubhangi',
    role: 'Content',
    company: 'Adapt.io',
  },
  {
    id: 'frederick-jequier',
    quote:
      "Aditya was brought in as a consultant to help my department improve our SEO practices. His advice was invaluable and he was always on hand to answer questions, offer insights, and he gave us a number of great suggestions for SEO tools that would help us in our day to day SEO content production. I can't recommend Aditya's services highly enough. Very professional and reliable throughout our working relationship.",
    author: 'Frederick Jéquier',
    role: 'Senior Content Editor',
    company: 'GoTeamUp',
  },
  {
    id: 'randal-hung',
    quote:
      'Aditya is highly skilled in SEO and has a strong drive for making positive changes. He has successfully led SEO efforts for GrowthSpot and our clients. I highly recommend him to anyone seeking assistance with SEO.',
    author: 'Randal Hung',
    role: 'Founder',
    company: 'GrowthSpot',
  },
]
