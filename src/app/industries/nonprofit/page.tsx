import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import {
  HeartIcon,
  MegaphoneIcon,
  UserGroupIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import { CheckIcon } from '@/components/check-icon'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import { HeroAnimation } from '@/components/hero-animation'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { CTAFormSection } from '@/components/service-page-sections'

export const metadata: Metadata = {
  title: 'Nonprofit SEO Services | NGO & Charity SEO | TheProjectSEO',
  description:
    'Specialized SEO services for nonprofits and NGOs. Amplify your mission, increase donations, and grow volunteer engagement with cause-driven SEO strategies.',
  alternates: {
    canonical: '/industries/nonprofit',
  },
  keywords: 'nonprofit SEO, NGO SEO, charity SEO, nonprofit marketing, donation page optimization, Google Ad Grants',
  openGraph: {
    title: 'Nonprofit SEO Services | NGO & Charity SEO',
    description:
      'Specialized SEO services for nonprofits and NGOs. Amplify your mission, increase donations, and grow volunteer engagement with cause-driven SEO strategies.',
    url: '/industries/nonprofit',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nonprofit SEO Services | NGO & Charity SEO',
    description:
      'Specialized SEO services for nonprofits and NGOs. Amplify your mission, increase donations, and grow volunteer engagement with cause-driven SEO strategies.',
  },
}

const challenges = [
  {
    challenge: 'Limited Marketing Budgets',
    description: 'Nonprofits often operate with tight marketing budgets, making it difficult to compete for visibility against well-funded organizations.',
    solution: 'We maximize every dollar with high-impact, low-cost SEO strategies including Google Ad Grants and organic content that compounds over time.',
    icon: HeartIcon
  },
  {
    challenge: 'Cause Awareness vs Fundraising',
    description: 'Balancing content that educates audiences about your cause while also driving donations and fundraising goals is a constant challenge.',
    solution: 'Our dual-funnel content strategy builds awareness at the top while guiding engaged supporters toward donation and action pages.',
    icon: MegaphoneIcon
  },
  {
    challenge: 'Volunteer & Donor Acquisition',
    description: 'Attracting new volunteers and donors through organic search requires specialized keyword targeting and compelling calls to action.',
    solution: 'We optimize for volunteer and donor intent keywords, creating landing pages that convert searchers into active supporters.',
    icon: UserGroupIcon
  },
  {
    challenge: 'Grant & Impact Reporting',
    description: 'Demonstrating measurable digital impact to grantors and stakeholders requires transparent, data-driven reporting.',
    solution: 'Our reporting frameworks tie SEO metrics directly to mission outcomes, giving you clear data for grant applications and board presentations.',
    icon: DocumentTextIcon
  }
]

const services = [
  {
    name: 'Nonprofit Keyword Research',
    description: 'Specialized keyword research that targets mission-related search queries and donor intent terms.',
    features: [
      'Cause-specific keyword mapping',
      'Donor intent keyword identification',
      'Volunteer search term analysis',
      'Grant opportunity keyword targeting',
    ]
  },
  {
    name: 'Cause-Driven Content Strategy',
    description: 'Content strategies that tell your story, educate audiences, and inspire action around your mission.',
    features: [
      'Mission storytelling content',
      'Impact report optimization',
      'Educational resource creation',
      'Supporter journey content mapping',
    ]
  },
  {
    name: 'Donation Page Optimization',
    description: 'Optimize donation pages and fundraising campaigns for maximum conversions from organic traffic.',
    features: [
      'Donation page UX optimization',
      'Fundraising campaign landing pages',
      'Trust signal implementation',
      'Conversion rate optimization',
    ]
  },
  {
    name: 'Google Ad Grants Management',
    description: 'Maximize your $10,000/month Google Ad Grant to drive qualified traffic to your nonprofit website.',
    features: [
      'Ad Grant application support',
      'Campaign setup and management',
      'Keyword bidding optimization',
      'Compliance and reporting',
    ]
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Mission Discovery & Audit',
    description: 'We begin by understanding your nonprofit&apos;s mission, audience, and goals. A comprehensive SEO audit reveals opportunities to increase your digital visibility and supporter engagement.'
  },
  {
    number: '02',
    title: 'Cause-Aligned Strategy',
    description: 'We develop a tailored SEO strategy that aligns with your mission, targeting keywords and content themes that attract donors, volunteers, and advocates.'
  },
  {
    number: '03',
    title: 'Content & Optimization',
    description: 'Our team creates and optimizes mission-driven content, donation pages, and campaign landing pages to maximize organic reach and conversions.'
  },
  {
    number: '04',
    title: 'Impact Reporting & Growth',
    description: 'Ongoing monitoring and transparent reporting tie SEO performance directly to mission outcomes, helping you demonstrate digital impact to stakeholders.'
  }
]

const caseStudy = {
  client: 'Environmental Nonprofit',
  industry: 'Environmental Conservation',
  challenge: 'A mid-sized environmental nonprofit struggled to reach new supporters online, relying heavily on direct mail and events for fundraising.',
  solution: 'We implemented a comprehensive SEO strategy focused on cause-related keywords, optimized their donation funnel, and launched a Google Ad Grants campaign to amplify reach.',
  results: [
    { metric: 'Organic Traffic', improvement: '+340%', timeframe: '10 months' },
    { metric: 'Mission Keywords', improvement: '100+ rankings', timeframe: 'Top 10' },
    { metric: 'Online Donations', improvement: '+220%', timeframe: 'Year-over-year' },
    { metric: 'Volunteer Signups', improvement: '+180%', timeframe: 'From organic search' }
  ]
}

const nonprofitFAQs = [
  {
    question: 'How is nonprofit SEO different from regular SEO?',
    answer: 'Nonprofit SEO focuses on mission-driven keywords, donor and volunteer intent, and cause awareness rather than purely commercial goals. It also leverages unique opportunities like Google Ad Grants, which provide up to $10,000/month in free advertising for eligible nonprofits.'
  },
  {
    question: 'What is the Google Ad Grant and how can it help our nonprofit?',
    answer: 'The Google Ad Grant provides eligible nonprofits with up to $10,000 per month in free Google Ads spend. We help you apply for the grant, set up compliant campaigns, and optimize your ad spend to drive qualified traffic to your website for donations, volunteer signups, and cause awareness.'
  },
  {
    question: 'How long does it take to see SEO results for a nonprofit?',
    answer: 'Most nonprofits begin seeing improvements in organic visibility within 60-90 days, with significant growth in traffic and donations typically appearing within 6-8 months. Google Ad Grants campaigns can drive immediate traffic while organic SEO builds long-term momentum.'
  },
  {
    question: 'Can SEO really help increase donations?',
    answer: 'Absolutely. With 64% of donors researching causes online before giving, appearing in search results for mission-related queries directly impacts your fundraising. Our donation page optimization and cause-driven content strategies are designed to convert organic visitors into donors.'
  },
  {
    question: 'Do you offer discounted pricing for nonprofits?',
    answer: 'Yes, we offer nonprofit-friendly pricing that reflects the budget realities of mission-driven organizations. Our packages are designed to deliver maximum impact within nonprofit marketing budgets, and we work with you to prioritize the highest-ROI activities first.'
  },
  {
    question: 'How do you measure the success of nonprofit SEO?',
    answer: 'We track mission-aligned metrics including organic traffic growth, donation conversions, volunteer signups, email list growth, and keyword rankings for cause-related terms. Our reporting connects SEO performance directly to your organizational goals and can support grant applications.'
  },
  {
    question: 'How do I do keyword research for nonprofit organizations?',
    answer: 'Nonprofit keyword research targets three key areas: cause-related informational keywords (e.g., "climate change solutions"), donor intent keywords (e.g., "best environmental charities to donate to"), and volunteer keywords (e.g., "volunteer opportunities for conservation"). We use tools like Google Keyword Planner, Ahrefs, and SEMrush to identify high-value terms that align with your mission while balancing search volume with conversion potential.'
  },
  {
    question: 'What are backlinks and why do they matter for nonprofit SEO?',
    answer: 'Backlinks are links from other websites to your nonprofit site. They matter because Google views backlinks as votes of confidence—when reputable sites link to you, it signals that your content is trustworthy and authoritative. For nonprofits, backlinks from news sites, educational institutions, government agencies, and other respected nonprofits are particularly valuable. We build backlinks through strategic outreach, partnership announcements, grant press releases, and creating linkable impact reports.'
  },
  {
    question: 'How important are Core Web Vitals for nonprofit websites?',
    answer: 'Core Web Vitals are critical for nonprofits because page speed and user experience directly impact donation conversions. Google PageSpeed Insights data shows that for every second of delay in page load time, donation conversion rates can drop by up to 7%. We optimize Core Web Vitals by improving server response times, optimizing images, reducing JavaScript, and ensuring donation forms load quickly on all devices.'
  },
  {
    question: 'Should nonprofits invest in local SEO?',
    answer: 'Yes, especially if your nonprofit serves a specific geographic area, hosts local events, or has physical locations. Local SEO helps you appear in "near me" searches, Google Maps results, and local volunteer searches. We optimize your Google Business Profile, build local citations, create location-specific content, and target geo-modified keywords like "food bank in [city]" or "volunteer opportunities [location]" to attract local supporters and volunteers.'
  },
  {
    question: 'How do I track SEO performance for my nonprofit organization?',
    answer: 'We track nonprofit SEO using Google Analytics 4 to monitor organic traffic, donation conversions, and volunteer signups; Google Search Console to track keyword rankings and click-through rates; and specialized tools like Ahrefs or SEMrush for backlink analysis and competitor research. We create custom dashboards that connect SEO metrics to mission outcomes, making it easy to demonstrate digital impact to your board, stakeholders, and grant committees.'
  }
]

function Header() {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            Nonprofit & NGO
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Nonprofit SEO that amplifies your mission and increases donations
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Purpose-built SEO strategies for nonprofits that grow your online presence, attract donors and volunteers, and amplify the causes you champion.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Nonprofit SEO Strategy</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: '$471B', label: 'US CHARITABLE GIVING' },
            { value: '64%', label: 'DONORS RESEARCH ONLINE' },
            { value: '890/mo', label: 'AVG. SEARCH VOLUME' },
            { value: '3.8%', label: 'DONATION CONVERSION' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ChallengesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Nonprofit SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Unique SEO challenges for mission-driven organizations.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {challenges.map((item, index) => (
            <div key={index} className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <item.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">{item.challenge}</h3>
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

function ServicesSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Specialized Nonprofit SEO Services</Subheading>
        <Heading as="h2" className="mt-2">
          Tailored strategies for mission-driven organizations.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">{service.name}</h3>
            <p className="text-sm leading-relaxed text-slate mb-6">{service.description}</p>

            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we grow your nonprofit&apos;s digital presence.
          </Heading>
          <p className="mt-6 text-lg leading-[1.65] text-slate max-w-3xl mx-auto">
            A proven methodology designed for nonprofits that delivers measurable
            impact while respecting your budget and mission priorities.
          </p>
        </div>

        <div className="space-y-0">
          {processSteps.map((step, index) => (
            <div key={index} className="border-b border-border py-8">
              <div className="flex gap-6">
                <span className="font-mono text-sm font-semibold text-accent flex-shrink-0 mt-1">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink mb-3">{step.title}</h3>
                  <p className="font-sans text-ash">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Technical SEO for Nonprofits</Subheading>
          <Heading as="h2" className="mt-2">
            Technical excellence that supports your mission.
          </Heading>
          <p className="mt-6 text-lg leading-[1.65] text-slate max-w-3xl mx-auto">
            Behind-the-scenes optimization that ensures your nonprofit website is fast,
            accessible, and fully optimized for search engines and donor conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">
              Core Web Vitals & Site Performance
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Optimize your nonprofit website&apos;s speed and user experience to maximize donation
              conversions and supporter engagement.
            </p>
            <ul className="space-y-3">
              {[
                'Google PageSpeed Insights optimization',
                'GTmetrix performance monitoring',
                'Donation form load time optimization',
                'Mobile-first responsive design',
                'Image compression and lazy loading',
                'Server response time improvement',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">
              Nonprofit Schema Markup
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Implement structured data that helps search engines understand your nonprofit
              mission, impact, and donation opportunities.
            </p>
            <ul className="space-y-3">
              {[
                'NonprofitOrganization schema implementation',
                'DonateAction schema for donation pages',
                'Event schema for fundraising events',
                'JSON-LD structured data markup',
                'Schema.org compliance and validation',
                'Rich snippets for impact stories',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">
              Link Building for Nonprofits
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Strategic backlink acquisition from reputable sources that boost your nonprofit&apos;s
              domain authority and search visibility.
            </p>
            <ul className="space-y-3">
              {[
                'Ahrefs and SEMrush backlink analysis',
                'Grant announcement press releases',
                'Partnership and collaboration outreach',
                'Impact report link building campaigns',
                'Moz domain authority improvement',
                'Educational institution outreach',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">
              Nonprofit Analytics & Donation Tracking
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Comprehensive tracking and reporting that connects SEO performance to mission
              outcomes and donor conversions.
            </p>
            <ul className="space-y-3">
              {[
                'Google Analytics 4 event tracking',
                'Google Search Console monitoring',
                'Donation conversion tracking setup',
                'Screaming Frog technical audits',
                'Custom SEO performance dashboards',
                'Grant-ready impact reporting',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Nonprofit Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped an environmental nonprofit amplify its mission.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">The Challenge</h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">{caseStudy.challenge}</p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">Our Solution</h3>
              <p className="text-sm leading-relaxed text-white/60">{caseStudy.solution}</p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">Results Achieved</h3>
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-2xl font-bold text-white">{result.improvement}</div>
                    <div className="text-sm text-white/80">{result.metric}</div>
                    <div className="text-xs text-white/40">{result.timeframe}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function KeywordsSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Nonprofit Industry Keywords</Subheading>
        <Heading as="h2" className="mt-2">
          Examples of nonprofit keywords we target.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            category: 'Cause Keywords',
            keywords: ['environmental conservation nonprofit', 'children&apos;s education charity', 'hunger relief organization', 'animal welfare nonprofit']
          },
          {
            category: 'Donation Intent',
            keywords: ['donate to clean water charity', 'best nonprofits to donate to', 'tax deductible donations', 'monthly giving programs']
          },
          {
            category: 'Volunteer',
            keywords: ['volunteer opportunities near me', 'nonprofit volunteer programs', 'virtual volunteering', 'corporate volunteer partnerships']
          },
          {
            category: 'Grant',
            keywords: ['nonprofit grant applications', 'foundation grants for nonprofits', 'government grants for NGOs', 'grant writing resources']
          },
          {
            category: 'Awareness',
            keywords: ['climate change solutions', 'food insecurity statistics', 'education equity initiatives', 'mental health awareness']
          },
          {
            category: 'Impact',
            keywords: ['nonprofit impact report', 'charity effectiveness rating', 'social impact measurement', 'nonprofit transparency']
          }
        ].map((group, index) => (
          <div key={index} className="text-center">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">{group.category}</h3>
            <ul className="space-y-2">
              {group.keywords.map((keyword, keywordIndex) => (
                <li key={keywordIndex} className="text-sm text-slate bg-cream px-3 py-1.5 rounded-none">
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}

function TestimonialSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Subheading>What Our Clients Say</Subheading>
          <div className="mt-8">
            <div className="mb-4 font-display text-4xl leading-none text-accent">&ldquo;</div>
            <blockquote className="font-display text-xl italic leading-relaxed text-ink">
              TheProjectSEO transformed our online presence. Within eight months, we went from being virtually invisible in search results to ranking for over 100 mission-related keywords. Our online donations have more than tripled, and we&apos;re reaching supporters we never could have found through traditional outreach alone.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center">
                <span className="font-heading text-sm font-medium text-accent">RM</span>
              </div>
              <div className="text-left">
                <div className="font-heading text-sm font-semibold text-ink">Rachel Martinez</div>
                <div className="text-xs text-ash">Executive Director, GreenFuture Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function PricingSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Nonprofit-Friendly Pricing</Subheading>
        <Heading as="h2" className="mt-2">
          SEO that fits your nonprofit&apos;s budget.
        </Heading>
        <p className="mt-6 text-lg leading-[1.65] text-slate max-w-3xl mx-auto">
          We believe every mission-driven organization deserves strong search visibility.
          Our nonprofit pricing is designed to deliver maximum impact within your budget.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="rounded-none border border-border-strong bg-paper p-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-4">Nonprofit SEO</p>
          <div className="font-mono text-4xl font-bold text-ink mb-2">Starting at $997/month</div>
          <p className="text-sm text-ash mb-8">Nonprofit-friendly pricing with flexible packages</p>

          <ul className="space-y-3 text-left max-w-md mx-auto mb-10">
            {[
              'Nonprofit keyword research & strategy',
              'Cause-driven content optimization',
              'Donation page conversion optimization',
              'Google Ad Grants setup & management',
              'Monthly impact reporting',
              'Dedicated nonprofit SEO specialist',
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Get Nonprofit SEO Proposal</Button>
            <Button variant="outline" href="/pricing">
              Compare All Plans
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="Nonprofit SEO FAQs" items={nonprofitFAQs} />
    </>
  )
}

function RelatedIndustriesSection() {
  const industries = [
    { name: 'Education', href: '/industries/education' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Legal', href: '/industries/legal' },
    { name: 'Technology', href: '/industries/technology' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'AI & Machine Learning', href: '/industries/ai' },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Related Industries</Subheading>
          <Heading as="h2" className="mt-2">
            SEO for other industries.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <a
              key={index}
              href={industry.href}
              className="bg-paper p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">{industry.name}</h3>
              <p className="mt-2 text-sm text-accent font-medium">View Industry SEO &rarr;</p>
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}


export default function NonprofitSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Nonprofit SEO Services | NGO & Charity SEO',
          description:
            'Specialized SEO services for nonprofits and NGOs. Amplify your mission, increase donations, and grow volunteer engagement with cause-driven SEO strategies.',
          url: 'https://theprojectseo.com/industries/nonprofit',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Nonprofit organization, Backlink, Google PageSpeed Tools, Non-governmental organization',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Nonprofit organization',
              sameAs: 'https://www.wikidata.org/wiki/Q163740',
            },
            {
              '@type': 'Thing',
              name: 'Backlink',
              sameAs: 'https://www.wikidata.org/wiki/Q373952',
            },
            {
              '@type': 'Thing',
              name: 'Google PageSpeed Tools',
              sameAs: 'https://www.wikidata.org/wiki/Q1537678',
            },
            {
              '@type': 'Thing',
              name: 'Non-governmental organization',
              sameAs: 'https://www.wikidata.org/wiki/Q79913',
            }
          ],
        }}
      />
      {/* Section 1: Hero */}
      <Header />
      {/* Section 2: Stats Bar */}
      <StatsSection />
      {/* Section 3: Challenges */}
      <ChallengesSection />
      {/* Section 4: Services */}
      <ServicesSection />
      {/* Section 5: Process */}
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we grow your nonprofit's digital presence"
        steps={processSteps}
      />
      {/* Section 6: Technical SEO */}
      <TechnicalSEOSection />
      {/* Section 7: Case Study (dark) */}
      <CaseStudySection />
      {/* Section 8: Keywords */}
      <KeywordsSection />
      {/* Section 9: Testimonial */}
      <TestimonialSection />
      {/* Section 10: Pricing */}
      <PricingSection />
      {/* Section 11: FAQ */}
      <TestimonialAndFAQSection />
      {/* Section 12: Related Industries */}
      <RelatedIndustriesSection />
      {/* Section 13: CTA */}
      <CTAFormSection subheading="Ready to Amplify Your Nonprofit's Impact?" heading="Let's grow your mission's online presence." lead="Partner with SEO experts who understand the nonprofit space. We'll help you reach more donors, attract volunteers, and amplify the causes that matter most to your organization." submitText="Get Nonprofit SEO Strategy" />
      <Footer />
    </main>
  )
}
