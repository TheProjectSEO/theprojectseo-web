import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import { HeroAnimation } from '@/components/hero-animation'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { IndustryProcessVisual } from '@/components/industry-process-visual'
import { CTAFormSection } from '@/components/service-page-sections'
import {
  ShieldCheckIcon,
  ScaleIcon,
  BuildingLibraryIcon,
  ChartBarSquareIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Services SEO | Finance & Wealth Management SEO | TheProjectSEO',
  description:
    'Specialized SEO services for financial services companies. Compliance-safe strategies for wealth management firms, fintech, insurance, and banking that build authority and drive qualified leads.',
  alternates: {
    canonical: '/industries/finance',
  },
  openGraph: {
    title: 'Financial Services SEO | Finance & Wealth Management SEO',
    description:
      'Specialized SEO services for financial services companies. Compliance-safe strategies for wealth management firms, fintech, insurance, and banking that build authority and drive qualified leads.',
    url: '/industries/finance',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Services SEO | Finance & Wealth Management SEO',
    description:
      'Specialized SEO services for financial services companies. Compliance-safe strategies for wealth management firms, fintech, insurance, and banking that build authority and drive qualified leads.',
  },
}

const challenges = [
  {
    challenge: 'FINRA/SEC Compliance',
    description:
      'Financial services content must comply with strict FINRA, SEC, and state regulations. One misstep can trigger audits, fines, or reputational damage.',
    solution:
      'Every piece of content passes through our compliance review workflow, ensuring your SEO strategy never puts your licenses or reputation at risk.',
    icon: ScaleIcon,
  },
  {
    challenge: 'YMYL Content Standards',
    description:
      'Google classifies finance as "Your Money or Your Life" content, applying the highest E-E-A-T scrutiny to every page you publish.',
    solution:
      'We build author authority signals, cite credible sources, and structure content to exceed Google&apos;s YMYL quality thresholds.',
    icon: ShieldCheckIcon,
  },
  {
    challenge: 'Trust & Authority Building',
    description:
      'Consumers are cautious with financial decisions. Building the trust signals Google and prospects require takes deliberate, sustained effort.',
    solution:
      'Our strategy combines thought leadership content, client testimonials, third-party validation, and schema markup to establish irrefutable authority.',
    icon: BuildingLibraryIcon,
  },
  {
    challenge: 'Competitive Financial Keywords',
    description:
      'Large banks, national brokerages, and well-funded fintechs dominate financial SERPs with massive content teams and link profiles.',
    solution:
      'We identify high-intent, long-tail keyword opportunities and geographic modifiers that bypass the mega-competitors and connect you with ready-to-act prospects.',
    icon: ChartBarSquareIcon,
  },
]

const services = [
  {
    name: 'Financial Keyword Research',
    description:
      'Deep keyword intelligence tailored to financial services terminology, buyer intent, and regulatory language.',
    features: [
      'Financial product & service keyword mapping',
      'High-intent investor & client query analysis',
      'Competitor keyword gap identification',
      'Geographic & demographic modifier research',
    ],
  },
  {
    name: 'Compliance-Safe Content Strategy',
    description:
      'Content frameworks that satisfy both search algorithms and regulatory requirements without sacrificing engagement.',
    features: [
      'FINRA/SEC-reviewed content workflows',
      'Disclosures & disclaimers integration',
      'E-E-A-T author authority building',
      'Regulatory update content calendars',
    ],
  },
  {
    name: 'Wealth Management SEO',
    description:
      'Targeted strategies for RIAs, financial advisors, and wealth management firms looking to attract high-net-worth clients.',
    features: [
      'Local SEO for advisory offices',
      'High-net-worth audience targeting',
      'Retirement planning content clusters',
      'Financial planning calculator optimization',
    ],
  },
  {
    name: 'Fintech Product SEO',
    description:
      'Growth-focused SEO for fintech platforms, payment processors, and digital banking products competing for market share.',
    features: [
      'SaaS landing page optimization',
      'API documentation SEO',
      'Product comparison & alternative pages',
      'Integration partner content strategy',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Financial SEO Audit',
    description:
      'We conduct a comprehensive audit of your current search presence, analyzing technical health, content quality, backlink profile, and competitive positioning within financial services SERPs.',
  },
  {
    number: '02',
    title: 'Compliance Review',
    description:
      'Every strategy element is reviewed against FINRA, SEC, and applicable state regulations. We establish content approval workflows that keep your marketing team agile without risking compliance violations.',
  },
  {
    number: '03',
    title: 'Content & Optimization',
    description:
      'We execute your strategy with compliance-safe content creation, on-page optimization, technical SEO improvements, and authority-building link acquisition tailored to the finance vertical.',
  },
  {
    number: '04',
    title: 'Monitor & Refine',
    description:
      'Continuous monitoring of rankings, traffic quality, lead generation metrics, and regulatory changes. We refine the strategy monthly to maximize ROI and stay ahead of algorithm updates.',
  },
]

const caseStudy = {
  client: 'Wealth Management Firm',
  industry: 'Registered Investment Advisory',
  challenge:
    'A mid-size RIA with $2.1B in assets under management was almost invisible in organic search. Their website ranked for fewer than 40 keywords, and the firm relied almost entirely on referrals and paid advertising to generate new client inquiries. Compliance concerns had previously paralyzed their content marketing efforts, leaving them with a thin, outdated website that failed to reflect their expertise.',
  solution:
    'We developed a compliance-first SEO strategy that included a full technical audit, a FINRA-reviewed content framework, and a 12-month editorial calendar focused on retirement planning, tax-efficient investing, and estate planning topics. Each article was structured to meet Google&apos;s YMYL quality standards while passing the firm&apos;s compliance review. We simultaneously rebuilt their local SEO presence across three office locations and implemented financial advisor schema markup.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+380%', timeframe: '12 months' },
    { metric: 'Keywords in Top 10', improvement: '180+', timeframe: 'From 12 initial' },
    { metric: 'Qualified Lead Increase', improvement: '+290%', timeframe: 'Year over year' },
    { metric: 'Cost per Acquisition', improvement: '-40%', timeframe: 'Vs. paid channels' },
  ],
}

const keywordGroups = [
  {
    category: 'Core Finance',
    keywords: [
      'financial advisor near me',
      'wealth management services',
      'financial planning firm',
      'certified financial planner',
    ],
  },
  {
    category: 'Investment',
    keywords: [
      'investment management services',
      'portfolio management advisor',
      'retirement investment strategy',
      'ESG investing advisor',
    ],
  },
  {
    category: 'Insurance',
    keywords: [
      'life insurance advisor',
      'insurance broker near me',
      'business insurance consultant',
      'health insurance comparison',
    ],
  },
  {
    category: 'Banking',
    keywords: [
      'private banking services',
      'commercial lending solutions',
      'business banking comparison',
      'high-yield savings account',
    ],
  },
  {
    category: 'Fintech',
    keywords: [
      'robo advisor platform',
      'digital payment solutions',
      'neobank comparison',
      'cryptocurrency exchange platform',
    ],
  },
  {
    category: 'Regulatory',
    keywords: [
      'SEC compliance consulting',
      'FINRA registration guide',
      'financial regulation updates',
      'fiduciary duty requirements',
    ],
  },
]

const faqs = [
  {
    question: 'How do you handle YMYL content requirements for financial services SEO?',
    answer:
      'Google classifies financial content as "Your Money or Your Life," meaning it applies the highest quality standards. We address this by building robust E-E-A-T signals: credentialed author bios, citations from authoritative sources like the SEC and FINRA, transparent editorial policies, and structured data markup. Every piece of content is reviewed for accuracy before publication.',
  },
  {
    question: 'Can you create SEO content that passes FINRA compliance review?',
    answer:
      'Yes. We have extensive experience working within FINRA and SEC content guidelines. Our workflow includes pre-publication compliance checkpoints, proper disclaimer integration, and language that avoids promissory or misleading claims. We collaborate directly with your compliance team to ensure every page meets regulatory requirements.',
  },
  {
    question: 'What kind of ROI can financial services firms expect from SEO?',
    answer:
      'Financial services SEO typically delivers strong ROI because the client lifetime value is high. Most of our finance clients see measurable traffic improvements within 90-120 days and significant lead generation gains within 6-9 months. One wealth management client reduced their cost per acquisition by 40% compared to paid advertising within the first year.',
  },
  {
    question: 'How long does it take to rank for competitive financial keywords?',
    answer:
      'Competitive head terms like "financial advisor" can take 9-18 months depending on your domain authority and geographic market. However, we prioritize high-intent long-tail keywords and local modifiers that can generate qualified leads much sooner, often within 3-6 months of campaign launch.',
  },
  {
    question: 'Do you work with both traditional finance and fintech companies?',
    answer:
      'Absolutely. We serve the full spectrum of financial services: RIAs, broker-dealers, insurance agencies, banks, credit unions, fintech startups, payment processors, and cryptocurrency platforms. Each sub-vertical has unique keyword landscapes and compliance requirements that we tailor our strategy around.',
  },
  {
    question: 'Why is financial services SEO more expensive than standard SEO?',
    answer:
      'The premium reflects the added complexity of compliance review, YMYL content standards, and the specialized expertise required. Financial content must be accurate, properly disclaimed, and authored or reviewed by credentialed professionals. The investment pays for itself quickly given the high lifetime value of financial services clients.',
  },
  {
    question: 'How do I do keyword research for financial services?',
    answer:
      'Financial services keyword research focuses on transactional and informational queries with compliance-safe language. Use Ahrefs, SEMrush, and Google Keyword Planner to identify keywords like "financial advisor near me", "wealth management services", and "retirement planning consultant". Focus on long-tail keywords that signal purchase intent and analyze competitor rankings using tools like Moz to identify keyword gaps.',
  },
  {
    question: 'What are backlinks and why do they matter for finance SEO?',
    answer:
      'Backlinks are links from other websites to yours. They signal authority and trustworthiness to search engines like Google—especially critical for YMYL (Your Money or Your Life) financial content. Quality backlinks from authoritative financial publications, industry associations, and trusted news sites improve domain authority and rankings. Use Ahrefs or SEMrush to analyze your backlink profile and identify opportunities.',
  },
  {
    question: 'How important are Core Web Vitals for fintech and financial sites?',
    answer:
      'Core Web Vitals (LCP, INP, CLS) are Google ranking factors that measure page speed and user experience. Financial sites with secure login portals, calculators, and interactive tools must optimize aggressively. Poor Core Web Vitals lead to higher bounce rates and lost conversions—critical for high-value financial services leads. Use Google PageSpeed Insights to achieve "Good" ratings across all metrics.',
  },
  {
    question: 'Should financial advisors invest in local SEO?',
    answer:
      'Absolutely. If you serve clients in specific geographic markets, local SEO is critical. Optimize your Google Business Profile, build local citations with consistent NAP (Name, Address, Phone), and create location-specific landing pages. Local SEO helps financial advisors appear in "near me" searches and Google\'s local pack, especially important for capturing high-intent local prospects.',
  },
  {
    question: 'How do I track SEO performance for my financial services business?',
    answer:
      'Use Google Analytics 4 to track organic traffic, user behavior, and conversion events (consultation requests, form fills, phone calls). Google Search Console shows keyword rankings, click-through rates, and indexation status. Tools like Ahrefs and SEMrush provide competitor analysis and backlink monitoring. Set up custom GA4 events to track financial-specific actions and tie them back to organic search channels for full ROI attribution.',
  },
]

const relatedIndustries = [
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Legal', href: '/industries/legal' },
  { name: 'Real Estate', href: '/industries/realestate' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'AI & Machine Learning', href: '/industries/ai' },
]

/* ─── Section 1: Hero (bg-paper) ─── */
function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            Finance & Financial Services
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Financial services SEO that builds authority and drives qualified leads
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Compliance-safe SEO strategies for wealth management firms, fintech companies, insurance agencies, and banking institutions that turn organic search into your most reliable growth channel.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Financial SEO Strategy</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ─── Section 2: Stats (bg-cream) ─── */
function StatsSection() {
  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: '$26.5T', label: 'Global Financial Services Market' },
            { value: '68%', label: 'Research Online First' },
            { value: '2.4K', label: 'Monthly Search Volume' },
            { value: '4.8%', label: 'Avg. Conversion Rate' },
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

/* ─── Section 3: Challenges (bg-paper) ─── */
function ChallengesSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Financial SEO Challenges</Subheading>
        <Heading as="h2" className="mt-2">
          Unique challenges in financial services SEO.
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
  )
}

/* ─── Section 4: Services (bg-cream) ─── */
function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Financial SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for financial services.
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
    </div>
  )
}

/* ─── Section 5: Process (bg-paper) ─── */
function ProcessSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Our Process</Subheading>
        <Heading as="h2" className="mt-2">
          A proven process for financial services SEO.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-4">
        {processSteps.map((item, index) => (
          <div key={index} className="bg-paper p-8">
            <div className="font-mono text-3xl font-bold text-accent mb-4">{item.number}</div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-3">{item.title}</h3>
            <p className="text-sm leading-relaxed text-slate">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

/* ─── Section 5.5: Financial Services Technical SEO ─── */
function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Technical Excellence</Subheading>
          <Heading as="h2" className="mt-2">
            Financial services technical SEO foundations
          </Heading>
          <Lead className="mt-6">
            Financial institutions require exceptional technical SEO. We optimize Core Web Vitals for secure portals, implement financial schema markup from schema.org, build high-quality backlinks from trusted publications, and set up comprehensive tracking using Google Analytics 4 and Google Search Console.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals & Site Security</h3>
            <p className="text-slate mb-4">
              Financial sites with secure portals, calculators, and interactive tools must load fast while maintaining HTTPS and SSL security. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) using Google PageSpeed Insights to ensure mobile-first performance that builds trust and converts high-value leads.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">HTTPS/SSL implementation and security optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Calculator and portal page speed optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Mobile-first indexing for financial content</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Financial Schema Markup</h3>
            <p className="text-slate mb-4">
              Structured data from schema.org helps search engines understand your financial services. We implement JSON-LD FinancialService schema with service descriptions, FAQPage markup for common questions, and Organization schema with trust signals. Proper markup enables rich snippets, knowledge panels, and better E-E-A-T signals for YMYL content.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">FinancialService schema for advisory services</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">FAQPage and HowTo rich snippets for trust building</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Organization markup with compliance credentials</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Finance Link Building</h3>
            <p className="text-slate mb-4">
              Quality backlinks from authoritative financial publications, industry associations, and trusted news sites are critical for YMYL content. We use Ahrefs, SEMrush, and Moz to identify link opportunities from financial blogs, industry directories, and editorial publications that build domain authority and topical relevance in the finance vertical.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Guest posting on financial publications and industry blogs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Digital PR and media outreach to finance news outlets</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Industry association and regulatory body listings</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Financial Analytics & Compliance Tracking</h3>
            <p className="text-slate mb-4">
              We set up comprehensive tracking using Google Analytics 4 and Google Search Console to monitor keyword rankings, organic lead generation, and conversion events. Track consultation requests, form submissions, and phone calls from organic search. Monthly reports show compliance-safe attribution and ROI using Screaming Frog for technical audits.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">GA4 event tracking for consultation requests and form fills</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Search Console monitoring for financial keyword performance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Conversion tracking and ROI attribution for compliance reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ─── Section 6: Case Study (bg-ink) ─── */
function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Financial Services Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a wealth management firm dominate organic search.
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

/* ─── Section 7: Keywords (bg-paper) ─── */
function KeywordsSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Financial Keywords We Target</Subheading>
        <Heading as="h2" className="mt-2">
          Examples of high-value financial keywords.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {keywordGroups.map((group, index) => (
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

/* ─── Section 8: Testimonial (bg-cream) ─── */
function TestimonialSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Subheading>Client Testimonial</Subheading>
          <blockquote className="mt-8">
            <p className="font-heading text-xl leading-relaxed text-ink sm:text-2xl">
              &ldquo;TheProjectSEO understood the compliance constraints we operate under and still delivered exceptional results. Our organic leads have tripled, and every piece of content passes our compliance review on the first submission. They&apos;re not just an SEO agency &mdash; they&apos;re a strategic partner who speaks the language of financial services.&rdquo;
            </p>
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-sm font-semibold text-ink">Managing Partner</p>
            <p className="text-sm text-ash">Registered Investment Advisory Firm &middot; $2.1B AUM</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ─── Section 9: Pricing (bg-paper) ─── */
function PricingSection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Subheading>Financial Services SEO Investment</Subheading>
        <Heading as="h2" className="mt-2">
          Investment starts at $2,997/month.
        </Heading>
        <Lead className="mt-6">
          Financial services SEO commands a premium because of the compliance workflows, YMYL content standards, and specialized expertise required. The investment pays for itself quickly given the high lifetime value of financial services clients.
        </Lead>
        <div className="mt-8 border-l-4 border-border-emphasis pl-6 text-left">
          <p className="text-sm font-medium text-ink mb-2">What&apos;s included:</p>
          <ul className="space-y-2">
            {[
              'Compliance-safe content strategy & production',
              'FINRA/SEC content review workflow',
              'Technical SEO & site architecture optimization',
              'Local SEO for office locations',
              'Monthly reporting with lead attribution',
              'Dedicated financial services SEO strategist',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Get Custom Proposal</Button>
          <Button variant="outline" href="/pricing">
            Compare Plans
          </Button>
        </div>
      </div>
    </Container>
  )
}

/* ─── Section 10: FAQ (bg-paper) ─── */
function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="Financial services SEO questions" items={faqs} />
    </>
  )
}

/* ─── Section 11: Related Industries (bg-cream) ─── */
function RelatedIndustriesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Related Industries</Subheading>
          <Heading as="h2" className="mt-2">
            SEO for other regulated & competitive industries.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
          {relatedIndustries.map((industry, index) => (
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

/* ─── Section 12: CTA (bg-paper) ─── */

export default function FinanceSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Financial Services SEO',
          description:
            'Specialized SEO services for financial services companies. Compliance-safe strategies for wealth management firms, fintech, insurance, and banking that build authority and drive qualified leads.',
          url: 'https://theprojectseo.com/industries/finance',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Search engine results page, Backlink, Business, Regulatory compliance',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Search engine results page',
              sameAs: 'https://www.wikidata.org/wiki/Q2704141',
            },
            {
              '@type': 'Thing',
              name: 'Backlink',
              sameAs: 'https://www.wikidata.org/wiki/Q373952',
            },
            {
              '@type': 'Thing',
              name: 'Business',
              sameAs: 'https://www.wikidata.org/wiki/Q6353120',
            },
            {
              '@type': 'Thing',
              name: 'Regulatory compliance',
              sameAs: 'https://www.wikidata.org/wiki/Q626741',
            }
          ],
        }}
      />
      <HeroSection />
      <StatsSection />
      <ChallengesSection />
      <ServicesSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="A proven process for financial services SEO"
        steps={processSteps}
        visual={<IndustryProcessVisual type="finance" />}
        visualBg="ink"
      />
      <TechnicalSEOSection />
      <CaseStudySection />
      <KeywordsSection />
      <TestimonialSection />
      <PricingSection />
      <TestimonialAndFAQSection />
      <RelatedIndustriesSection />
      <CTAFormSection
        subheading="Ready to dominate financial search results?"
        heading="Let's build your financial services SEO strategy."
        lead="Partner with SEO experts who understand FINRA compliance, YMYL standards, and the nuances of marketing financial services. We'll help you turn organic search into your most predictable growth channel."
        submitText="Get Financial SEO Strategy"
      />
      <Footer />
    </main>
  )
}
