import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ChartBarIcon,
  GlobeAltIcon,
  TrophyIcon,
  UsersIcon,
  BoltIcon,
  LanguageIcon,
  DevicePhoneMobileIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Philippines SEO Services | Top-Ranked SEO Agency | TheProjectSEO',
  description:
    'Leading SEO agency in Philippines helping businesses dominate Google search results. Expert SEO services for Manila, Cebu, Davao & nationwide. Get results that drive revenue.',
  keywords: 'Philippines SEO, Manila SEO services, Cebu SEO agency, Davao SEO expert, Philippine digital marketing, Google Philippines ranking',
  alternates: { canonical: '/philippines-seo-services' },
  openGraph: {
    title: 'Philippines SEO Services | Top-Ranked SEO Agency',
    description: 'Leading SEO agency in Philippines helping businesses dominate Google search results nationwide.',
    url: 'https://theprojectseo.com/philippines-seo-services',
  },
}

const philippinesCities = [
  'Manila', 'Cebu City', 'Davao City', 'Quezon City', 'Makati', 'Pasig',
  'Taguig', 'Antipolo', 'Zamboanga City', 'Cagayan de Oro', 'Paranaque',
  'Dasmarinas', 'Valenzuela', 'Bacoor', 'General Santos', 'Las Pinas'
]

const localStats = [
  { metric: '500+', label: 'Philippine Businesses Ranked #1' },
  { metric: '180%', label: 'Average Traffic Increase' },
  { metric: '25+', label: 'Cities Served Nationwide' },
  { metric: '95%', label: 'Client Retention Rate' }
]

const challenges = [
  {
    challenge: 'Growing Digital Competition',
    description:
      'The Philippines digital market is exploding, with internet penetration surpassing 73% and over 85 million active users. Filipino businesses are rapidly investing in online visibility, making organic search more competitive than ever across industries.',
    solution:
      'We leverage deep Philippine market intelligence to identify untapped keyword opportunities and build content strategies that outpace your local and international competitors.',
    icon: BoltIcon,
  },
  {
    challenge: 'Multilingual Market',
    description:
      'The Philippines is a linguistically diverse nation with English, Filipino, and over 180 regional languages. Users search in Taglish (Tagalog-English mix), pure Filipino, or English depending on intent and context, making keyword research uniquely complex.',
    solution:
      'Our team crafts multilingual SEO strategies that target English, Filipino, and Taglish search queries, ensuring you capture traffic across all language preferences in your target market.',
    icon: LanguageIcon,
  },
  {
    challenge: 'Mobile-First Market',
    description:
      'With 98% of Filipino internet users accessing the web via mobile devices, the Philippines is one of the most mobile-dominant markets in the world. Slow-loading or non-responsive sites are penalized heavily in both rankings and user engagement.',
    solution:
      'We prioritize mobile-first technical SEO, optimizing Core Web Vitals, page speed, and responsive design to ensure your site delivers a seamless experience on the devices Filipinos actually use.',
    icon: DevicePhoneMobileIcon,
  },
  {
    challenge: 'Local vs International Competition',
    description:
      'Philippine businesses face a dual challenge: competing against well-funded global brands entering the local market while also battling established domestic players. International companies often have larger SEO budgets and domain authority advantages.',
    solution:
      'We help Philippine businesses build local authority through hyper-targeted content, local link building, Google Business Profile optimization, and location-specific landing pages that outperform generic global competitors.',
    icon: BuildingOffice2Icon,
  },
]

const services = [
  {
    icon: ChartBarIcon,
    title: 'Philippine Market SEO Audit',
    description: 'Comprehensive analysis of your website\'s performance in Philippine search results, including local competitors and market opportunities.',
    features: [
      'Local SERP analysis for Philippine keywords',
      'Competitor analysis vs. top PH companies',
      'Technical SEO assessment',
      'Mobile-first optimization review',
      'Local search visibility analysis'
    ]
  },
  {
    icon: GlobeAltIcon,
    title: 'Local Philippines SEO',
    description: 'Dominate local search results in Manila, Cebu, Davao, and other major Philippine cities.',
    features: [
      'Google My Business optimization',
      'Local citation building (PH directories)',
      'Filipino keyword optimization',
      'Location-based landing pages',
      'Local review management'
    ]
  },
  {
    icon: TrophyIcon,
    title: 'E-commerce SEO Philippines',
    description: 'Specialized SEO for Philippine e-commerce businesses competing against Shopee, Lazada, and local stores.',
    features: [
      'Product page optimization',
      'Category page SEO strategy',
      'Shopping keyword targeting',
      'Conversion rate optimization',
      'Local delivery area targeting'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Enterprise SEO Philippines',
    description: 'Advanced SEO strategies for large Philippine corporations and multinational companies.',
    features: [
      'Multi-location SEO management',
      'International SEO (PH + global)',
      'Large-scale content optimization',
      'Technical SEO at scale',
      'Corporate brand visibility'
    ]
  }
]

const industries = [
  { name: 'BPO & Outsourcing', description: 'SEO for call centers, KPO, and outsourcing firms across Metro Manila and Cebu.' },
  { name: 'E-commerce & Retail', description: 'Product SEO for online stores competing with Shopee, Lazada, and local marketplaces.' },
  { name: 'Tourism & Hospitality', description: 'Destination and hotel SEO for Boracay, Palawan, Cebu, and other tourist destinations.' },
  { name: 'Real Estate', description: 'Property listing SEO for condos, houses, and commercial real estate across Philippine cities.' },
  { name: 'Healthcare & Clinics', description: 'Medical SEO for hospitals, dental clinics, and healthcare providers nationwide.' },
  { name: 'Education & EdTech', description: 'SEO for universities, online learning platforms, and training centers in the Philippines.' },
  { name: 'Financial Services', description: 'SEO for banks, fintech, insurance, and lending companies in the Philippine market.' },
  { name: 'Food & Restaurant', description: 'Local SEO for restaurants, food delivery services, and F&B brands across the Philippines.' },
]

const testimonials = [
  {
    quote: "TheProjectSEO helped our Manila-based startup achieve #1 rankings for competitive keywords. Our organic traffic increased 320% in 8 months, leading to \u20B12.5M in additional revenue.",
    author: "Maria Santos",
    company: "TechStart Manila",
    role: "CEO & Founder"
  },
  {
    quote: "As a Cebu-based e-commerce company, we needed SEO experts who understood the Philippine market. TheProjectSEO delivered beyond expectations - we now outrank national competitors.",
    author: "Carlos Reyes",
    company: "Island Commerce Co.",
    role: "Marketing Director"
  },
  {
    quote: "Working with TheProjectSEO transformed our Davao law firm's online presence. We now dominate local legal searches and get 50+ qualified leads monthly from Google.",
    author: "Attorney Jennifer Cruz",
    company: "Cruz & Associates Law",
    role: "Senior Partner"
  }
]

const caseStudies = [
  {
    client: "Philippine E-commerce Retailer",
    industry: "Online Retail",
    challenge: "Competing against Shopee and Lazada for product searches",
    results: [
      "340% increase in organic traffic",
      "\u20B15.2M additional revenue in 12 months",
      "#1 rankings for 150+ product keywords",
      "2.5x improvement in conversion rate"
    ]
  },
  {
    client: "Manila Real Estate Agency",
    industry: "Real Estate",
    challenge: "Dominating competitive Manila property market",
    results: [
      "280% increase in local search visibility",
      "600+ qualified property leads monthly",
      "#1 for 'Manila condos for sale'",
      "45% increase in property inquiries"
    ]
  }
]

const faqItems = [
  {
    question: 'Why outsource SEO to the Philippines?',
    answer:
      'The Philippines offers a unique combination of high English proficiency, cost-effective services, and deep BPO expertise that makes it an ideal partner for SEO. Filipino SEO professionals are well-versed in Western search behavior while offering rates significantly lower than US or European agencies. The country&apos;s BPO industry has cultivated a workforce that excels at process-driven, quality-focused digital services, making Philippine SEO teams exceptionally reliable and results-oriented.',
  },
  {
    question: 'How much does SEO cost in the Philippines?',
    answer:
      'SEO costs in the Philippines vary based on scope and competitiveness. Local small business SEO typically ranges from PHP 15,000 to PHP 50,000 per month, while comprehensive enterprise SEO campaigns can range from PHP 80,000 to PHP 250,000+ monthly. Compared to US agencies where similar services cost $3,000-$10,000+/month, Philippine SEO delivers excellent value without compromising quality. Our pricing is transparent and tailored to your specific market and growth objectives.',
  },
  {
    question: 'How do you handle timezone differences?',
    answer:
      'We maintain dedicated overlap hours with clients across all major time zones. The Philippines (GMT+8) shares business hours with most of Asia-Pacific, and our team schedules overlap windows during US and European mornings. All clients receive a dedicated project manager available during agreed-upon hours, plus asynchronous communication via Slack, email, and project management tools to ensure nothing falls through the cracks regardless of time zone.',
  },
  {
    question: 'Is Philippine SEO quality comparable to US agencies?',
    answer:
      'Absolutely. Our Philippine-based SEO team delivers results on par with top US agencies. Many of our strategists have worked with Fortune 500 companies and hold certifications from Google, SEMrush, and Ahrefs. We follow the same data-driven methodologies, use enterprise-grade tools, and maintain rigorous quality standards. The difference is cost efficiency, not quality. Our case studies consistently show traffic growth of 200-400% for Philippine and international clients alike.',
  },
  {
    question: 'What industries do you serve in the Philippines?',
    answer:
      'We serve a wide range of industries across the Philippines, with particular expertise in BPO and outsourcing companies, e-commerce and online retail, tourism and hospitality, real estate, healthcare, education, financial services, and food and restaurant businesses. Our strategies are customized for each industry&apos;s unique search landscape, competitive dynamics, and customer behavior patterns in the Philippine market.',
  },
  {
    question: 'How long does SEO take for Philippine businesses?',
    answer:
      'Most Philippine businesses begin seeing measurable improvements within 3 to 6 months, with significant results materializing by month 6 to 12. The timeline depends on factors like your current website authority, competition level, and target keywords. Local SEO for less competitive markets can yield faster results (2-3 months), while national campaigns targeting high-competition keywords typically require 6+ months to build sustainable rankings. We focus on quick wins early while building long-term organic growth.',
  },
]

const relatedLocations = [
  { name: 'USA SEO', href: '/usa-seo-services' },
  { name: 'India SEO', href: '/india-seo-services' },
  { name: 'Philippines Locations', href: '/locations/philippines' },
  { name: 'Singapore', href: '/locations/singapore' },
  { name: 'Hong Kong', href: '/locations/hongkong' },
  { name: 'Australia', href: '/locations/australia' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Hero                                                            */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <Container className="mt-24 lg:mt-32">
      <div className="flex items-center gap-2 mb-6">
        <span className="font-mono text-xs font-medium tracking-[0.1em] text-accent uppercase">
          #1 SEO Agency in Philippines
        </span>
      </div>

      <h1 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
        Philippines SEO Services That Drive Results
      </h1>

      <Lead className="mt-6 max-w-lg">
        Help your Philippine business dominate Google search results nationwide.
        From Manila to Cebu to Davao - we get you found by your customers.
      </Lead>

      <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
        <Button href="/contact">Get Free Philippines SEO Audit</Button>
        <Button variant="ghost" href="/pricing">
          View Pricing Plans
        </Button>
      </div>

      <div className="mt-8 text-sm text-ash">
        <span className="font-medium text-accent">--</span> Serving businesses across all Philippine regions
        <span className="mx-3">|</span>
        <span className="font-medium text-accent">--</span> Local market expertise since 2012
        <span className="mx-3">|</span>
        <span className="font-medium text-accent">--</span> Filipino & English SEO specialists
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 2: Stats                                                           */
/* -------------------------------------------------------------------------- */

function StatsSection() {
  return (
    <div className="bg-ink py-24 mt-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Philippine SEO Success</Subheading>
          <Heading as="h2" dark className="mt-2">
            Trusted by 500+ Philippine businesses.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {localStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-5xl font-medium text-white">{stat.metric}</div>
              <div className="mt-2 text-sm font-mono uppercase tracking-[0.1em] text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 3: Challenges                                                      */
/* -------------------------------------------------------------------------- */

function ChallengesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Philippine SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Why the Philippine market needs specialized SEO.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <item.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {item.challenge}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate mb-4">{item.description}</p>

              <div className="border-l-4 border-border-emphasis pl-4">
                <p className="text-sm font-medium text-ink mb-1">Our Solution:</p>
                <p className="text-sm text-stone">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 4: Services                                                        */
/* -------------------------------------------------------------------------- */

function ServicesSection() {
  return (
    <Container className="py-24">
      <Subheading>SEO Services</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        Specialized SEO services for the Philippine market.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our deep understanding of Philippine search behavior, local competition,
        and market dynamics gives your business the edge it needs to succeed.
      </Lead>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <div key={index} className="rounded-none border border-border-strong bg-white p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center">
                  <IconComponent className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">{service.title}</h3>
              </div>

              <p className="text-sm/6 text-slate mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm/6 text-slate">
                    <span className="inline-block w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 5: Industries                                                      */
/* -------------------------------------------------------------------------- */

function IndustriesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Industries We Serve</Subheading>
          <Heading as="h2" className="mt-2">
            SEO expertise across Philippine industries.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-base font-semibold text-ink mb-2">
                {industry.name}
              </h3>
              <p className="text-sm leading-relaxed text-slate">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 6: Testimonials                                                    */
/* -------------------------------------------------------------------------- */

function TestimonialsSection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <Subheading dark className="text-center">Client Success Stories</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          Philippine businesses that dominate search.
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-none border border-white/10 p-8">
              <blockquote className="text-lg text-white mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="size-12 rounded-none bg-accent flex items-center justify-center">
                  <span className="text-white font-heading font-medium text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-heading font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/50">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 7: Case Studies                                                    */
/* -------------------------------------------------------------------------- */

function CaseStudiesSection() {
  return (
    <Container className="py-24">
      <Subheading>Case Studies</Subheading>
      <Heading as="h2" className="mt-2">
        Real results for Philippine businesses.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <div key={index} className="rounded-none border border-border-strong bg-cream p-8">
            <div className="mb-6">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">{study.client}</h3>
              <span className="inline-flex items-center rounded-none bg-accent-soft px-3 py-1 text-sm font-mono uppercase tracking-[0.1em] text-accent">
                {study.industry}
              </span>
            </div>

            <div className="mb-6">
              <h4 className="font-heading font-medium text-ink mb-2">Challenge:</h4>
              <p className="text-sm/6 text-slate">{study.challenge}</p>
            </div>

            <div>
              <h4 className="font-heading font-medium text-ink mb-3">Results:</h4>
              <ul className="space-y-2">
                {study.results.map((result, resultIndex) => (
                  <li key={resultIndex} className="flex items-start gap-3">
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                    <span className="text-sm/6 text-stone">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 8: Locations                                                       */
/* -------------------------------------------------------------------------- */

function LocationsSection() {
  return (
    <Container className="py-24">
      <Subheading>Service Areas</Subheading>
      <Heading as="h2" className="mt-2">
        SEO services across the Philippines.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We serve businesses in all major Philippine cities and provinces, with specialized
        local SEO strategies for each market.
      </Lead>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {philippinesCities.map((city) => (
          <div key={city} className="text-center p-4 rounded-none border border-border bg-white hover:bg-cream transition-colors">
            <div className="text-sm font-heading font-medium text-ink">{city}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-ash">
          Don&apos;t see your city? We serve businesses nationwide across all Philippine regions.
        </p>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: FAQ                                                             */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion
          title="Philippines SEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: Related Locations                                              */
/* -------------------------------------------------------------------------- */

function RelatedLocationsSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Explore More Locations</Subheading>
          <Heading as="h2" className="mt-2">
            SEO services around the world.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-strong md:grid-cols-3 lg:grid-cols-6">
          {relatedLocations.map((location, index) => (
            <Link
              key={index}
              href={location.href}
              className="bg-paper p-4 text-center text-sm font-heading font-medium text-stone transition-colors hover:text-accent hover:bg-cream"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 11: CTA                                                            */
/* -------------------------------------------------------------------------- */

function CTASection() {
  return (
    <div className="bg-cream">
      <Container className="py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Ready to dominate Philippine search results?</Subheading>
          <Heading as="h2" className="mt-2">
            Get your free Philippines SEO audit today.
          </Heading>
          <Lead className="mt-6">
            Discover exactly what it takes to outrank your competitors and dominate
            Google search results for your target Philippine market.
          </Lead>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Get Free SEO Audit</Button>
            <Button variant="outline" href="/pricing">
              View Pricing Plans
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-ash">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span>
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span>
              No obligations
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent"></span>
              Results within 30 days
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function PhilippinesSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Philippines SEO Services',
          description:
            'Leading SEO agency in Philippines helping businesses dominate Google search results. Expert SEO services for Manila, Cebu, Davao & nationwide. Get results that drive revenue.',
          url: 'https://theprojectseo.com/philippines-seo-services',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Philippines',
          },
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Philippines, Business, Technology, Davao City',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Philippines',
              sameAs: 'https://www.wikidata.org/wiki/Q928',
            },
            {
              '@type': 'Thing',
              name: 'Business',
              sameAs: 'https://www.wikidata.org/wiki/Q6353120',
            },
            {
              '@type': 'Thing',
              name: 'Technology',
              sameAs: 'https://www.wikidata.org/wiki/Q4884546',
            },
            {
              '@type': 'Thing',
              name: 'Davao City',
              sameAs: 'https://www.wikidata.org/wiki/Q1473',
            }
          ],
        }}
      />
      <Container>
        <Navbar />
      </Container>
      <Hero />
      <StatsSection />
      <ChallengesSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <LocationsSection />
      <FAQSection />
      <RelatedLocationsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
