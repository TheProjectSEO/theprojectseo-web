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
import { JsonLd } from '@/components/json-ld'
import {
  ScaleIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Law Firm SEO Services | Legal Industry SEO | TheProjectSEO',
  description:
    'Specialized SEO services for law firms and legal practices. Drive high-value client acquisition with ethical, bar-compliant digital marketing strategies.',
  alternates: {
    canonical: '/industries/legal',
  },
  keywords:
    'law firm SEO, legal SEO, attorney SEO, lawyer SEO, legal marketing, law firm digital marketing',
  openGraph: {
    title: 'Law Firm SEO Services | Legal Industry SEO',
    description:
      'Specialized SEO services for law firms and legal practices. Drive high-value client acquisition with ethical, bar-compliant digital marketing strategies.',
    url: '/industries/legal',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Law Firm SEO Services | Legal Industry SEO',
    description:
      'Specialized SEO services for law firms and legal practices. Drive high-value client acquisition with ethical, bar-compliant digital marketing strategies.',
  },
}

const challenges = [
  {
    challenge: 'Bar Association Advertising Rules',
    description:
      'Every state bar has unique advertising rules that govern how attorneys can market their services online. Non-compliant content can result in disciplinary action, fines, or even disbarment.',
    solution:
      'We maintain up-to-date knowledge of ABA Model Rules and state-specific advertising guidelines, ensuring every page, blog post, and meta description meets ethical standards.',
    icon: ScaleIcon,
  },
  {
    challenge: 'High CPC Competition',
    description:
      'Legal keywords are among the most expensive in Google Ads, with personal injury terms exceeding $150 per click. Firms that rely solely on PPC burn through budgets fast.',
    solution:
      'Our organic SEO strategies deliver qualified leads at a fraction of PPC cost, building sustainable traffic that compounds over time.',
    icon: MagnifyingGlassIcon,
  },
  {
    challenge: 'Practice Area Specialization',
    description:
      'A family law firm and a patent attorney have completely different audiences, search intent, and content needs. Generic SEO approaches fail to capture niche legal queries.',
    solution:
      'We build practice-area-specific keyword maps and content silos that position your firm as the authority in your exact areas of expertise.',
    icon: DocumentTextIcon,
  },
  {
    challenge: 'Local Court Jurisdiction SEO',
    description:
      'Clients search for attorneys near specific courts, counties, and jurisdictions. Ranking for "DUI lawyer near [courthouse]" requires hyper-local optimization.',
    solution:
      'We optimize for jurisdiction-level searches, county court pages, and local legal directories to capture clients in your exact service area.',
    icon: MapPinIcon,
  },
]

const services = [
  {
    name: 'Legal Keyword Research',
    description:
      'In-depth keyword analysis tailored to legal search intent, practice areas, and local jurisdictions your firm serves.',
    icon: MagnifyingGlassIcon,
    features: [
      'Practice-area keyword mapping',
      'Legal intent classification (informational vs. transactional)',
      'Competitor keyword gap analysis',
      'Long-tail legal phrase discovery',
      'Jurisdiction-specific keyword targeting',
      'Search volume and CPC benchmarking',
    ],
  },
  {
    name: 'Practice Area Content Strategy',
    description:
      'Bar-compliant content that establishes authority, answers client questions, and converts visitors into consultations.',
    icon: DocumentTextIcon,
    features: [
      'Practice area pillar pages',
      'Legal blog and FAQ content',
      'Case result pages (compliant formatting)',
      'Attorney bio optimization',
      'Client testimonial strategy (bar-compliant)',
      'Legal guide and resource creation',
    ],
  },
  {
    name: 'Local Law Firm SEO',
    description:
      'Dominate local search results in your city, county, and court jurisdiction with targeted local optimization.',
    icon: MapPinIcon,
    features: [
      'Google Business Profile optimization',
      'Local legal directory citations',
      'Court jurisdiction landing pages',
      'Multi-office location SEO',
      'Local review generation strategy',
      'Map pack ranking optimization',
    ],
  },
  {
    name: 'Legal Schema & Citations',
    description:
      'Structured data and citation building designed specifically for law firms to maximize SERP visibility.',
    icon: ScaleIcon,
    features: [
      'Attorney schema markup',
      'LegalService structured data',
      'Legal directory submissions (Avvo, Justia, FindLaw)',
      'NAP consistency management',
      'Review schema implementation',
      'FAQ schema for legal questions',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Legal Market Audit & Compliance Review',
    description:
      'We analyze your current online presence, review competitor positioning, audit your site for bar advertising compliance, and identify the highest-value keyword opportunities in your practice areas and jurisdiction.',
  },
  {
    number: '02',
    title: 'Strategy Development & Content Planning',
    description:
      'Based on audit findings, we build a custom SEO roadmap with practice-area content silos, local landing page architecture, technical fixes, and a 12-month editorial calendar aligned with your firm&apos;s growth goals.',
  },
  {
    number: '03',
    title: 'Implementation & On-Page Optimization',
    description:
      'Our team executes on-page optimization, publishes bar-compliant content, builds legal citations, implements schema markup, and optimizes your Google Business Profile for maximum local visibility.',
  },
  {
    number: '04',
    title: 'Monitoring, Reporting & Continuous Growth',
    description:
      'Monthly reporting tracks rankings, traffic, leads, and cost-per-case metrics. We continuously refine strategy based on performance data, algorithm updates, and shifts in your competitive landscape.',
  },
]

const caseStudy = {
  client: 'Mid-Size Personal Injury Law Firm',
  industry: 'Personal Injury Law',
  location: 'Major US Metro Area',
  duration: '12 months',
  challenge:
    'A 6-attorney personal injury firm was spending over $45,000 per month on Google Ads with diminishing returns. Their organic presence was virtually nonexistent — ranking for fewer than 30 keywords total. Meanwhile, competitors dominated the first page for high-value terms like "car accident lawyer," "slip and fall attorney," and "wrongful death lawyer." The firm needed a sustainable acquisition channel that could reduce dependence on paid advertising while increasing overall case volume.',
  solution:
    'We executed a comprehensive SEO strategy that included building 35+ practice-area landing pages optimized for specific injury types and jurisdictions, creating a legal resource hub with 60+ educational articles, optimizing their Google Business Profile across three office locations, and building 200+ legal directory citations. Every piece of content was reviewed for bar advertising compliance before publication.',
  results: [
    { metric: 'Organic Traffic', improvement: '+560%', timeframe: '12 months' },
    { metric: 'Keywords in Top 10', improvement: '250+', timeframe: 'From 28 to 250+' },
    { metric: 'Case Inquiries', improvement: '+320%', timeframe: 'From organic search' },
    { metric: 'Cost Per Lead vs PPC', improvement: '-55%', timeframe: 'Organic vs. paid' },
  ],
  benchmarks: [
    'Average time on site increased from 1:20 to 4:45 for organic visitors',
    'Consultation booking rate from organic traffic reached 8.2% (industry avg: 3.1%)',
    'Firm reduced Google Ads spend by 40% while total lead volume increased 25%',
    'Achieved #1 rankings for 12 high-value personal injury keywords in target metro',
  ],
}

const keywordGroups = [
  {
    category: 'Practice Areas',
    keywords: [
      'personal injury lawyer [city]',
      'divorce attorney near me',
      'criminal defense lawyer',
      'estate planning attorney',
    ],
  },
  {
    category: 'Local Legal',
    keywords: [
      'lawyer near [courthouse]',
      'best attorney in [county]',
      '[city] law firm',
      'legal help [zip code]',
    ],
  },
  {
    category: 'Client Intent',
    keywords: [
      'how much does a lawyer cost',
      'free legal consultation near me',
      'do I need an attorney for',
      'best rated lawyers in [city]',
    ],
  },
  {
    category: 'Legal Questions',
    keywords: [
      'how to file for divorce in [state]',
      'what to do after a car accident',
      'statute of limitations [state]',
      'how long does probate take',
    ],
  },
  {
    category: 'Competitor',
    keywords: [
      '[competitor firm] reviews',
      'best personal injury firm [city]',
      'top rated criminal lawyers',
      '[practice area] lawyer vs attorney',
    ],
  },
  {
    category: 'Specialized',
    keywords: [
      'medical malpractice attorney',
      'immigration lawyer [city]',
      'patent attorney for startups',
      'class action lawsuit lawyer',
    ],
  },
]

const legalFAQs = [
  {
    question: 'Is law firm SEO compliant with bar association advertising rules?',
    answer:
      'Yes. We build every campaign with bar advertising compliance as a foundational requirement. Our team stays current on ABA Model Rules of Professional Conduct (particularly Rules 7.1-7.5) and state-specific advertising guidelines. All content is reviewed for prohibited claims, misleading statements, and required disclaimers before publication. We also help firms implement proper disclaimer language, avoid guaranteed outcome claims, and structure testimonial pages in accordance with their jurisdiction&apos;s rules.',
  },
  {
    question: 'How does legal SEO differ from standard SEO?',
    answer:
      'Legal SEO requires specialized knowledge of bar advertising regulations, practice-area search intent, and local jurisdiction targeting that general SEO agencies lack. Law firm keywords are among the most competitive and expensive in any industry, requiring sophisticated strategies. We also handle unique challenges like attorney bio optimization, case results pages that comply with ethical rules, and structured data specific to legal services. Our team understands how potential clients search for legal help and the decision-making process they go through.',
  },
  {
    question: 'What ROI can a law firm expect from SEO compared to PPC?',
    answer:
      'Most law firms see a 40-60% lower cost per lead from organic SEO compared to Google Ads within 6-12 months. While PPC delivers immediate visibility, the costs are unsustainable — personal injury clicks can exceed $150, and family law clicks often top $50. SEO compounds over time: once you rank for a high-value keyword, you receive that traffic without paying per click. Our clients typically achieve break-even on their SEO investment within 4-6 months and see 3-5x ROI by month 12.',
  },
  {
    question: 'How long does it take for a law firm to see SEO results?',
    answer:
      'Law firm SEO typically shows initial improvements within 60-90 days, with meaningful lead generation starting around month 4-6. Competitive practice areas like personal injury or criminal defense in major metros may take 6-9 months for significant rankings. However, local SEO improvements (Google Business Profile optimization, citations) often produce results faster. We provide monthly progress reports so you can track keyword movements, traffic growth, and lead generation from day one.',
  },
  {
    question: 'Can you handle SEO for multiple practice areas within one firm?',
    answer:
      'Absolutely. Multi-practice firms are one of our specialties. We create dedicated content silos for each practice area — family law, criminal defense, personal injury, estate planning, and so on — with unique keyword strategies, landing pages, and blog content for each. This siloed approach ensures Google understands your firm&apos;s depth of expertise in each area while preventing content cannibalization between practice areas.',
  },
  {
    question: 'Do you work with solo practitioners or only large law firms?',
    answer:
      'We work with legal practices of all sizes, from solo practitioners to Am Law 200 firms. Our strategies scale to match your firm&apos;s size, budget, and growth goals. Solo attorneys often see the fastest relative improvement because they can be more agile with content production and local SEO. We offer packages specifically designed for smaller practices that focus on the highest-impact activities first.',
  },
  {
    question: 'How do I do keyword research for law firms?',
    answer:
      'Legal keyword research requires understanding the intersection of practice area terminology, client intent, and local jurisdiction. Start by mapping your core practice areas (personal injury, family law, criminal defense, etc.) and the specific case types within each. Use tools like Google Keyword Planner, Ahrefs, and SEMrush to identify search volume and competition levels. Focus on long-tail keywords that indicate high intent (e.g., "hire DUI lawyer in [city]" vs. "DUI laws"). Analyze competitor rankings to find keyword gaps, and pay special attention to question-based queries that potential clients search (e.g., "how much does a divorce cost"). Local modifiers (city, county, courthouse names) are critical for law firms since most clients search for nearby attorneys.',
  },
  {
    question: 'What are backlinks and why do they matter for legal SEO?',
    answer:
      'Backlinks are links from other websites pointing to your law firm&apos;s site. They act as "votes of confidence" that signal to Google your site is trustworthy and authoritative. For law firms, high-quality backlinks from legal directories (Avvo, Justia, FindLaw), bar associations, legal publications, and local news sites significantly boost rankings. The quality of backlinks matters more than quantity — one link from a state bar association website is worth more than 100 links from low-quality directories. Backlinks also drive referral traffic and help Google discover your content faster. However, avoid black-hat link-building tactics like buying links or participating in link schemes, as these can result in Google penalties that destroy your rankings.',
  },
  {
    question: 'How important are Core Web Vitals for law firm websites?',
    answer:
      'Core Web Vitals are critical ranking factors and directly impact client conversion rates. Google measures three key metrics: Largest Contentful Paint (LCP) for loading performance, First Input Delay (FID) for interactivity, and Cumulative Layout Shift (CLS) for visual stability. Law firm websites with poor Core Web Vitals see higher bounce rates and lower conversion rates — potential clients won&apos;t wait for a slow site when competitors load instantly. Mobile performance is especially crucial, as over 60% of legal searches happen on mobile devices. Use Google PageSpeed Insights and GTmetrix to audit your site. Common fixes include optimizing images, enabling browser caching, reducing server response time, and eliminating render-blocking JavaScript. A fast, mobile-optimized site improves user experience and gives you a ranking advantage over slower competitors.',
  },
  {
    question: 'Should law firms invest in local SEO?',
    answer:
      'Absolutely. Most legal clients search for attorneys within their geographic area, making local SEO one of the highest-ROI investments for law firms. Local SEO includes optimizing your Google Business Profile, building citations in legal directories, creating location-specific landing pages, and earning reviews from past clients. When done correctly, local SEO helps your firm appear in the Google Map Pack (the top 3 local results) for searches like "personal injury lawyer near me" or "divorce attorney in [city]." Even if you rank well organically, Map Pack placement often captures more clicks. Local SEO is especially valuable for multi-location firms, solo practitioners, and firms serving specific court jurisdictions. It&apos;s also faster to see results from local SEO compared to broader organic strategies.',
  },
  {
    question: 'How do I track SEO performance for my law firm?',
    answer:
      'Tracking legal SEO performance requires monitoring multiple metrics across several platforms. Set up Google Analytics 4 to track organic traffic, user behavior, and consultation form submissions. Use Google Search Console to monitor keyword rankings, impressions, click-through rates, and technical issues. Track specific conversion actions like phone calls, form fills, and live chat inquiries to measure lead generation. Monitor rankings for target keywords using tools like Ahrefs, SEMrush, or Moz. Calculate cost-per-lead from SEO vs. PPC to demonstrate ROI. Review metrics like average time on site, bounce rate, and pages per session to gauge content quality. For law firms, the most important metrics are consultation requests from organic search, cost-per-case compared to paid advertising, and rankings for high-value keywords in your practice areas. Monthly reporting should tie SEO activities directly to business outcomes.',
  },
]

const relatedIndustries = [
  { name: 'Finance', href: '/industries/finance' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Real Estate', href: '/industries/realestate' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'AI & Machine Learning', href: '/industries/ai' },
]

function HeroSection() {
  return (
    <div className="bg-paper">
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            Legal Industry
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Law firm SEO that drives{' '}
            <em className="text-accent not-italic font-display font-light italic">
              high-value client acquisition
            </em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Ethical, bar-compliant SEO strategies that position your law firm in front of clients
            actively searching for legal representation. Turn organic search into your most
            reliable and cost-effective client acquisition channel.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Your Law Firm SEO Audit</Button>
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
  const stats = [
    { metric: '$300B+', label: 'US Legal Services Market' },
    { metric: '96%', label: 'Of People Seek a Lawyer Online' },
    { metric: '5.6K/mo', label: 'Avg. Search Volume per Legal Keyword' },
    { metric: '$15+', label: 'Average CPC for Legal Terms' },
  ]

  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">
                {stat.metric}
              </div>
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
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Legal Industry Challenges</Subheading>
        <Heading as="h2" className="mt-2">
          Why law firm SEO requires specialized expertise.
        </Heading>
        <p className="mt-6 text-lg leading-[1.65] text-slate max-w-3xl mx-auto">
          The legal industry operates under strict regulatory oversight that affects every
          aspect of digital marketing. From state bar advertising rules to ethical guidelines
          governing client testimonials and outcome claims, law firm SEO demands a level of
          compliance awareness that general agencies simply do not possess. A single
          non-compliant page can trigger a bar complaint — and a poorly optimized site means
          your competitors capture the clients searching for your exact services.
        </p>
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

function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Legal SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Comprehensive SEO for law firms and attorneys.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="rounded-none border border-border-strong bg-white p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center">
                  <service.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-base font-semibold text-ink">{service.name}</h3>
              </div>

              <p className="text-sm/6 text-slate mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm/6 text-slate">
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

function ProcessSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we grow your law firm&apos;s organic presence.
          </Heading>
          <p className="mt-6 text-lg leading-[1.65] text-slate max-w-3xl mx-auto">
            A proven four-step methodology refined across dozens of law firm engagements,
            designed to deliver measurable results while maintaining full bar compliance.
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
                  <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                    {step.title}
                  </h3>
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
          <Subheading>Technical SEO for Law Firms</Subheading>
          <Heading as="h2" className="mt-2">
            Advanced optimization for competitive legal markets.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">
              Core Web Vitals &amp; Site Performance
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Page speed directly impacts rankings and client conversions. We optimize your law
              firm website to load under 2 seconds on mobile and desktop.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Core Web Vitals optimization (LCP, FID, CLS)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Google PageSpeed Insights monitoring
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Mobile-first responsive design optimization
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  GTmetrix performance testing and fixes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Image optimization and lazy loading implementation
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">
              Legal Schema Markup
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Structured data helps Google understand your practice areas, attorney profiles, and
              services, improving rich snippet visibility in search results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Attorney and LegalService schema.org markup
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  JSON-LD structured data implementation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Practice area and jurisdiction schema tagging
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Review and rating schema for testimonials
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  FAQ schema for legal question pages
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">
              Link Building for Law Firms
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              High-quality backlinks from legal directories, bar associations, and authoritative
              legal content sites signal expertise and boost domain authority.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Legal directory submissions (Avvo, Justia, FindLaw)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Competitor backlink analysis using Ahrefs and SEMrush
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Bar association and legal publication outreach
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Moz Domain Authority monitoring
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Disavow toxic backlinks that harm rankings
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">
              Legal Analytics &amp; Lead Tracking
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Comprehensive tracking and reporting on keyword rankings, organic traffic, and
              lead-to-client conversion metrics.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Google Analytics 4 setup and event tracking
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Google Search Console integration and monitoring
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Conversion tracking for consultations and calls
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Screaming Frog technical SEO audits
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-sm text-slate">
                  Monthly reporting on cost-per-lead vs. PPC benchmarks
                </span>
              </li>
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
          <Subheading dark>Legal SEO Case Study</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a personal injury firm dominate organic search.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center rounded-none bg-white/10 px-3 py-1 text-sm font-mono font-medium text-white/80">
                  {caseStudy.industry}
                </span>
                <span className="ml-3 text-xs text-white/40">{caseStudy.duration}</span>
              </div>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">
                {caseStudy.challenge}
              </p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Our Solution
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{caseStudy.solution}</p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Results Achieved
              </h3>
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-2xl font-bold text-white">
                      {result.improvement}
                    </div>
                    <div className="text-sm text-white/80">{result.metric}</div>
                    <div className="text-xs text-white/40">{result.timeframe}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <h4 className="font-heading text-sm font-semibold text-white/80 mb-4">
                  Key Benchmarks
                </h4>
                <ul className="space-y-3">
                  {caseStudy.benchmarks.map((benchmark, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent font-heading font-bold">--</span>
                      <span className="text-xs leading-relaxed text-white/50">{benchmark}</span>
                    </li>
                  ))}
                </ul>
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
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Legal Keywords We Target</Subheading>
          <Heading as="h2" className="mt-2">
            Examples of high-value legal search terms.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keywordGroups.map((group, index) => (
            <div key={index} className="text-center">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.keywords.map((keyword, keywordIndex) => (
                  <li
                    key={keywordIndex}
                    className="text-sm text-slate bg-cream px-3 py-1.5 rounded-none"
                  >
                    {keyword}
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

function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 font-display text-4xl leading-none text-accent">&ldquo;</div>
          <blockquote className="font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
            Working with Aditya in our journey to rank our website has been a great pleasure.
            Aditya possesses an exceptional skill set and a deep understanding of SEO strategies
            and techniques. He has an uncanny ability to analyze complex data and identify critical
            opportunities to improve organic search rankings and drive targeted website traffic.
            I wholeheartedly recommend Aditya for any SEO-related position or project.
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="size-12 rounded-none bg-ink flex items-center justify-center">
              <span className="font-heading text-sm font-medium text-white">CH</span>
            </div>
            <div className="text-left">
              <div className="font-heading text-sm font-semibold text-ink">Caleb Hoon</div>
              <div className="text-sm text-slate">Head of Community and Operations, OFFEO</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function PricingSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Subheading>Legal SEO Pricing</Subheading>
          <Heading as="h2" className="mt-2">
            Invest in sustainable client acquisition.
          </Heading>
          <Lead className="mt-6">
            Our law firm SEO packages are designed to deliver measurable ROI through organic
            search, reducing your dependence on expensive pay-per-click campaigns.
          </Lead>

          <div className="mt-12 rounded-none border border-border-strong bg-white p-10">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-3">
              Law Firm SEO
            </p>
            <div className="font-display text-5xl font-medium text-ink">
              Starting at $2,497
              <span className="text-lg text-slate font-normal">/month</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate max-w-lg mx-auto">
              Includes practice area keyword research, bar-compliant content creation, local
              SEO optimization, technical audits, monthly reporting, and dedicated account
              management. Custom packages available for multi-location firms.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact">Get Custom Quote</Button>
              <Button variant="outline" href="/pricing">
                Compare All Plans
              </Button>
            </div>
          </div>

          <p className="mt-6 text-xs text-ash">
            All packages include bar advertising compliance review. No long-term contracts required.
          </p>
        </div>
      </Container>
    </div>
  )
}

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="I had the pleasure of working with Aditya. He is a true SEO specialist. He knows how to layout the SEO strategy together with a timeline and a list of tasks to be done."
        author="Eyal Gerber"
        role="Founder &amp; CEO"
        company="Novodes"
      />
      <FAQDarkSection title="Legal SEO frequently asked questions" items={legalFAQs} />
    </>
  )
}

function RelatedIndustriesSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Related Industries</Subheading>
          <Heading as="h2" className="mt-2">
            SEO expertise across regulated industries.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {relatedIndustries.map((industry) => (
            <a
              key={industry.name}
              href={industry.href}
              className="text-center p-6 rounded-none border border-border-strong bg-white hover:bg-cream transition-colors"
            >
              <div className="text-sm font-heading font-medium text-ink">{industry.name}</div>
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}


export default function LegalSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Law Firm SEO Services | Legal Industry SEO',
          description:
            'Specialized SEO services for law firms and legal practices. Drive high-value client acquisition with ethical, bar-compliant digital marketing strategies.',
          url: 'https://theprojectseo.com/industries/legal',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Pay-per-click, Search engine results page, Google Ads, Computing',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Pay-per-click',
              sameAs: 'https://www.wikidata.org/wiki/Q29778',
            },
            {
              '@type': 'Thing',
              name: 'Search engine results page',
              sameAs: 'https://www.wikidata.org/wiki/Q2704141',
            },
            {
              '@type': 'Thing',
              name: 'Google Ads',
              sameAs: 'https://www.wikidata.org/wiki/Q271982',
            },
            {
              '@type': 'Thing',
              name: 'Computing',
              sameAs: 'https://www.wikidata.org/wiki/Q5330456',
            }
          ],
        }}
      />
      {/* Section 1: Hero */}
      <HeroSection />
      {/* Section 2: Stats Bar */}
      <StatsSection />
      {/* Section 3: Challenges */}
      <ChallengesSection />
      {/* Section 4: Services */}
      <ServicesSection />
      {/* Section 5: Process */}
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we grow your law firm's organic presence"
        steps={processSteps}
        visual={<IndustryProcessVisual type="legal" />}
        visualBg="ink"
      />
      {/* Section 6: Technical SEO */}
      <TechnicalSEOSection />
      {/* Section 7: Case Study */}
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
      <CTAFormSection subheading="Ready to grow your legal practice with SEO?" heading="Let's build your law firm's SEO strategy." lead="Partner with SEO experts who understand bar advertising rules, legal search intent, and the competitive landscape of law firm marketing. Get a free audit and custom strategy tailored to your practice areas and jurisdiction." submitText="Get Free Legal SEO Audit" />
      <Footer />
    </main>
  )
}
