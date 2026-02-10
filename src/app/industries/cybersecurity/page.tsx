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
import { CTAFormSection } from '@/components/service-page-sections'
import {
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentMagnifyingGlassIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cybersecurity SEO Services | Organic Growth for Security Companies | TheProjectSEO',
  description:
    'Specialized cybersecurity SEO strategies that build authority, generate qualified leads, and establish thought leadership. Expert SEO for cybersecurity vendors, MSSPs, and security consultancies.',
  alternates: {
    canonical: '/industries/cybersecurity',
  },
  openGraph: {
    title: 'Cybersecurity SEO Services | Organic Growth for Security Companies',
    description:
      'Specialized cybersecurity SEO strategies that build authority, generate qualified leads, and establish thought leadership. Expert SEO for cybersecurity vendors, MSSPs, and security consultancies.',
    url: '/industries/cybersecurity',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity SEO Services | Organic Growth for Security Companies',
    description:
      'Specialized cybersecurity SEO strategies that build authority, generate qualified leads, and establish thought leadership. Expert SEO for cybersecurity vendors, MSSPs, and security consultancies.',
  },
}

const challenges = [
  {
    challenge: 'E-E-A-T and Trust Signals',
    description:
      'Cybersecurity is a YMYL (Your Money or Your Life) category where Google demands exceptional expertise, experience, authoritativeness, and trustworthiness. Content that lacks credible sourcing, technical depth, or recognized authorship will not rank, regardless of on-page optimization.',
    solution:
      'We build E-E-A-T into every layer of your SEO strategy, from author bios with verifiable credentials to technically rigorous content reviewed by subject matter experts. We establish your brand as a trusted authority through structured data, citation networks, and expert-driven thought leadership.',
    icon: ShieldCheckIcon,
  },
  {
    challenge: 'Competing Against Enterprise Vendors',
    description:
      'The cybersecurity search landscape is dominated by well-funded vendors like CrowdStrike, Palo Alto Networks, and Fortinet who invest millions in content marketing. Smaller security firms struggle to gain visibility against these entrenched incumbents with massive domain authority.',
    solution:
      'We identify high-intent niche keyword clusters that enterprise vendors overlook or under-serve. By building deep topical authority in specific threat categories, compliance frameworks, and vertical-specific security topics, we carve out organic territory your competitors cannot easily reclaim.',
    icon: LockClosedIcon,
  },
  {
    challenge: 'Technical Content Complexity',
    description:
      'Cybersecurity content must serve dual audiences: technical practitioners evaluating solutions and C-suite decision-makers approving budgets. Creating content that satisfies both the CISO searching for threat intelligence and the CFO researching breach costs requires specialized expertise.',
    solution:
      'Our team creates layered content strategies with technical deep-dives for practitioners and executive-focused content for business buyers. We map content to both technical evaluation and business justification stages of the procurement cycle.',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    challenge: 'Rapidly Evolving Threat Landscape',
    description:
      'The cybersecurity industry moves faster than almost any other vertical. New vulnerabilities, attack vectors, and compliance mandates emerge weekly. SEO strategies that rely on static evergreen content quickly become outdated and lose rankings to more current coverage.',
    solution:
      'We implement a dual content strategy combining evergreen pillar content with rapid-response threat advisory content. Our process includes monitoring CVE databases, regulatory announcements, and threat intelligence feeds to publish timely, search-optimized content that captures trending queries.',
    icon: GlobeAltIcon,
  },
]

const services = [
  {
    name: 'Cybersecurity Keyword Research',
    description:
      'In-depth keyword research calibrated for the cybersecurity buyer journey. We map keywords across threat categories, compliance frameworks, and solution types to capture demand from both technical evaluators and business decision-makers.',
    features: [
      'Threat-category and attack-vector keyword mapping',
      'Compliance-driven keyword clusters (SOC 2, HIPAA, NIST, ISO 27001)',
      'Competitor keyword gap analysis against enterprise vendors',
      'Buyer-intent scoring across technical and executive audiences',
    ],
  },
  {
    name: 'Thought Leadership & Whitepaper SEO',
    description:
      'Position your firm as the authoritative voice in cybersecurity. We optimize research reports, whitepapers, and threat advisories for search while maintaining the technical rigor your audience demands.',
    features: [
      'Whitepaper and research report landing page optimization',
      'Threat intelligence blog and advisory content strategy',
      'Expert author profile and E-E-A-T signal building',
      'Gated content SEO with ungated summary page strategies',
    ],
  },
  {
    name: 'Technical Cybersecurity SEO',
    description:
      'Enterprise-grade technical SEO for security company websites. We ensure your knowledge base, documentation, and product pages are fully crawlable, fast, and structured for maximum search visibility.',
    features: [
      'Security knowledge base and documentation SEO audits',
      'Core Web Vitals optimization for resource-heavy pages',
      'Structured data for software, FAQ, and organization schema',
      'International SEO for global cybersecurity vendors',
    ],
  },
  {
    name: 'Cybersecurity Link Building & Digital PR',
    description:
      'Build domain authority through strategic relationships with cybersecurity publications, analyst firms, and industry organizations. We earn links from the sources your buyers already trust.',
    features: [
      'Guest contributions to cybersecurity publications and media',
      'Analyst firm and industry report citation building',
      'Vulnerability disclosure and threat research PR campaigns',
      'Conference and event-driven link acquisition strategies',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Security SEO Audit',
    description:
      'We conduct a comprehensive audit of your current SEO performance within the cybersecurity landscape. This includes analyzing your site architecture, content authority signals, keyword rankings against competitors like CrowdStrike and Palo Alto, backlink profile quality, and E-E-A-T compliance. We identify gaps in your threat coverage, compliance content, and product positioning that represent immediate opportunities.',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description:
      'Based on audit findings, we develop a cybersecurity-specific SEO strategy aligned with your go-to-market goals. This includes a prioritized keyword roadmap organized by threat category and buyer stage, a content calendar balancing evergreen pillars with rapid-response advisory content, a technical optimization plan, and a link building strategy targeting high-authority security publications.',
  },
  {
    number: '03',
    title: 'Content & Authority Building',
    description:
      'We execute the strategy with technically rigorous content creation, on-page optimization, and authority building. Content spans threat advisories, compliance guides, product comparison pages, and executive-focused business case content. Every piece is reviewed for technical accuracy and optimized for search intent, building your reputation as a trusted cybersecurity resource.',
  },
  {
    number: '04',
    title: 'Monitor, Adapt & Scale',
    description:
      'Using real-time data and threat landscape monitoring, we continuously refine your strategy. We track organic lead generation, pipeline influence, and keyword movement against enterprise competitors. Monthly reporting covers organic demo requests, content engagement, and authority growth. We adapt rapidly to new threats, vulnerabilities, and compliance changes to maintain rankings.',
  },
]

const caseStudy = {
  client: 'Mid-Market Cybersecurity Vendor',
  industry: 'Endpoint Detection & Response (EDR)',
  challenge:
    'A mid-market EDR vendor with a strong product but limited organic visibility was losing ground to established competitors in search results. Their website ranked for fewer than 50 keywords in the top 10, and organic traffic accounted for only 8% of their pipeline. Their content library consisted primarily of product documentation with minimal thought leadership or threat-focused content. Enterprise competitors dominated the top positions for every core keyword, and the company was spending over $45,000 per month on paid search to compensate for the lack of organic presence.',
  solution:
    'We implemented a comprehensive cybersecurity SEO strategy starting with a full technical audit and site restructure to improve crawlability and E-E-A-T signals. We built a threat intelligence content hub with 60+ articles covering specific attack vectors, malware families, and incident response playbooks. We created 25 compliance-focused landing pages targeting regulated industries, and launched 35 competitor comparison pages targeting "vs" and "alternative to" queries. Our link building campaign secured placements in Dark Reading, SC Magazine, and CSO Online, along with 40+ guest contributions to cybersecurity blogs and industry publications.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+520%', timeframe: '12 months' },
    { metric: 'Keywords in Top 10', improvement: '280+', timeframe: 'From 47 to 327' },
    { metric: 'Organic Demo Requests', improvement: '+380%', timeframe: 'Monthly qualified leads' },
    { metric: 'Paid Search Spend Reduction', improvement: '-58%', timeframe: 'Shifted to organic' },
  ],
}

const keywordCategories = [
  {
    category: 'Core Security Terms',
    keywords: ['endpoint detection and response', 'SIEM platform', 'managed security services', 'zero trust architecture'],
  },
  {
    category: 'Threat & Attack Keywords',
    keywords: ['ransomware prevention', 'phishing detection tools', 'supply chain attack protection', 'advanced persistent threat defense'],
  },
  {
    category: 'Compliance Keywords',
    keywords: ['SOC 2 compliance software', 'HIPAA security solutions', 'NIST framework implementation', 'ISO 27001 certification tools'],
  },
  {
    category: 'Comparison Keywords',
    keywords: ['CrowdStrike vs SentinelOne', 'best Palo Alto alternatives', 'Splunk competitor comparison', 'Fortinet vs Check Point'],
  },
  {
    category: 'Business Security',
    keywords: ['cost of data breach', 'cybersecurity ROI calculator', 'CISO buying guide', 'cybersecurity budget planning'],
  },
  {
    category: 'Long-tail Security',
    keywords: ['best EDR for mid-size companies', 'how to choose a MSSP provider', 'cybersecurity for healthcare organizations', 'cloud security posture management tools'],
  },
]

const faqItems = [
  {
    question: 'How long does it take to see results from cybersecurity SEO?',
    answer:
      'Cybersecurity SEO typically shows measurable traffic improvements within 3-4 months, with significant lead generation gains by month 6-9. The timeline depends on your starting authority, competitive landscape, and content investment. Because E-E-A-T is critical in cybersecurity, building topical authority takes longer than in less specialized industries, but the moat you create is also more defensible. We prioritize quick wins early, such as optimizing existing high-potential pages and targeting lower-competition compliance keywords.',
  },
  {
    question: 'How do you handle the technical accuracy of cybersecurity content?',
    answer:
      'Every piece of content goes through a rigorous review process. We work with your internal subject matter experts and our network of cybersecurity professionals to ensure technical accuracy. Our content team includes writers with backgrounds in information security, and all content is fact-checked against current CVE databases, vendor documentation, and industry frameworks before publication. We never sacrifice accuracy for SEO optimization.',
  },
  {
    question: 'Can you help us compete against much larger cybersecurity vendors?',
    answer:
      'Absolutely. While CrowdStrike and Palo Alto have massive domain authority, they often produce broad, surface-level content across hundreds of topics. Our strategy for mid-market and emerging vendors focuses on building deep topical authority in specific niches, threat categories, compliance frameworks, or industry verticals where enterprise vendors are weakest. By owning these focused clusters, you can outrank larger competitors for the high-intent queries that drive qualified pipeline.',
  },
  {
    question: 'How does cybersecurity SEO differ from standard B2B SEO?',
    answer:
      'Cybersecurity SEO requires understanding threat landscapes, compliance mandates, and the dual-audience challenge of serving both technical practitioners and business buyers. Unlike standard B2B SEO, we must maintain exceptional E-E-A-T signals because Google treats security content as YMYL. Content must be technically rigorous, regularly updated as threats evolve, and attributed to credible authors. We also leverage rapid-response content strategies for emerging vulnerabilities and threats that standard B2B SEO does not require.',
  },
  {
    question: 'What types of content perform best for cybersecurity companies?',
    answer:
      'The highest-performing cybersecurity content includes threat intelligence articles and attack analysis, compliance framework implementation guides, vendor comparison and alternative pages, incident response playbooks and templates, CISO-focused business case content, and technical how-to guides for security practitioners. We create a balanced content mix that captures demand across the full buyer journey, from awareness through vendor evaluation to purchase decision.',
  },
  {
    question: 'Do you work with MSSPs and security consultancies, or only product vendors?',
    answer:
      'We work with the full spectrum of cybersecurity businesses, including product vendors, managed security service providers (MSSPs), security consultancies, compliance firms, and cybersecurity training companies. Each business model has unique SEO requirements. MSSPs need local and service-area SEO alongside thought leadership, while product vendors focus on comparison content and technical documentation. We tailor our approach to your specific business model and growth objectives.',
  },
  {
    question: 'How do I do keyword research for cybersecurity companies?',
    answer:
      'Cybersecurity keyword research requires understanding both technical security terminology and buyer intent. Use tools like Ahrefs, SEMrush, and Moz to identify high-intent keywords with manageable competition. Focus on threat-specific terms ("ransomware prevention solutions"), compliance-driven queries ("SOC 2 compliance tools"), comparison keywords ("CrowdStrike alternatives"), and long-tail technical queries that signal purchase intent. Target keywords that match your specific security offerings and the problems your buyers are actively trying to solve.',
  },
  {
    question: 'What are backlinks and why do they matter for cybersecurity SEO?',
    answer:
      'Backlinks are links from other websites pointing to yours. They serve as trust signals to search engines like Google, indicating that your content is valuable and authoritative. For cybersecurity companies, backlinks from respected security publications like Dark Reading, SC Magazine, CSO Online, and industry analyst sites dramatically improve domain authority and rankings. Quality matters more than quantity—one link from a respected cybersecurity publication is worth hundreds of low-quality directory links. We use Ahrefs, SEMrush, and Moz to identify link opportunities and track backlink profile growth.',
  },
  {
    question: 'How important are Core Web Vitals for cybersecurity websites?',
    answer:
      'Core Web Vitals (LCP, INP, CLS) are critical Google ranking factors that measure page speed and user experience. Cybersecurity websites often struggle with heavy JavaScript, security widgets, and complex product demos that slow page load times. Poor Core Web Vitals lead to higher bounce rates, lower rankings, and lost conversions. We use Google PageSpeed Insights and GTmetrix to optimize your site, achieving "Good" ratings across all Core Web Vitals metrics. This includes image optimization, JavaScript minification, CDN implementation, and lazy loading strategies.',
  },
  {
    question: 'Should cybersecurity firms invest in local SEO?',
    answer:
      'If your cybersecurity firm has a physical office, serves specific geographic markets, or operates as a managed security service provider (MSSP) with local clients, local SEO is essential. Optimize your Google Business Profile, build local citations with consistent NAP (Name, Address, Phone) information, and create location-specific content. Local SEO helps cybersecurity companies appear in "near me" searches and Google&apos;s local pack, especially important for security consultancies, penetration testing firms, and regional MSSPs targeting local enterprise clients.',
  },
  {
    question: 'How do I track SEO performance for my cybersecurity business?',
    answer:
      'Use Google Analytics 4 to track organic traffic, user behavior, conversion rates, and lead generation from organic search. Google Search Console shows keyword rankings, click-through rates, indexation status, and technical issues. Tools like Ahrefs, SEMrush, and Moz provide competitor analysis, backlink monitoring, and keyword rank tracking. Set up custom events in GA4 to track cybersecurity-specific actions (demo requests, whitepaper downloads, contact form submissions) and tie them back to organic search channels. We also recommend using Screaming Frog for technical SEO audits and crawl analysis.',
  },
]

const relatedIndustries = [
  { name: 'SaaS', href: '/industries/saas' },
  { name: 'AI & Machine Learning', href: '/industries/ai' },
  { name: 'Finance', href: '/industries/finance' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'Legal', href: '/industries/legal' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Header / Hero                                                   */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            Cybersecurity Industry
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            SEO that builds authority for{' '}
            <em className="text-accent italic">cybersecurity companies</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Establish thought leadership, outrank enterprise competitors, and generate qualified leads through organic search. We help cybersecurity firms turn expertise into search visibility.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Cybersecurity SEO Strategy</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 2: Industry Statistics Bar                                         */
/* -------------------------------------------------------------------------- */

function StatsBar() {
  const stats = [
    { value: '$185B', label: 'Global cybersecurity market size' },
    { value: '3.5M', label: 'Unfilled cybersecurity jobs worldwide' },
    { value: '9-14 mo', label: 'Average B2B security sales cycle' },
    { value: '$4.45M', label: 'Average cost of a data breach' },
  ]

  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 3: Industry SEO Challenges                                         */
/* -------------------------------------------------------------------------- */

function ChallengesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Cybersecurity SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Why cybersecurity companies need specialized SEO.
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
/*  Section 4: Services Tailored for Industry                                  */
/* -------------------------------------------------------------------------- */

function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Cybersecurity SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for cybersecurity growth.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">
                {service.name}
              </h3>
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

/* -------------------------------------------------------------------------- */
/*  Section 5: Technical SEO Foundations                                       */
/* -------------------------------------------------------------------------- */

function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Technical Excellence</Subheading>
          <Heading as="h2" className="mt-2">
            Core technical SEO for cybersecurity companies
          </Heading>
          <Lead className="mt-6">
            Cybersecurity firms need rock-solid technical foundations. We optimize Core Web Vitals, implement schema markup, build authoritative backlink profiles, and ensure comprehensive tracking to measure SEO performance and ROI.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals & Security Performance</h3>
            <p className="text-slate mb-4">
              Page speed and user experience directly impact rankings and conversions. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) using Google PageSpeed Insights and GTmetrix to ensure your cybersecurity site loads fast, even with security widgets and trust badges.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Image optimization and lazy loading for threat intelligence content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">JavaScript optimization for security demos and interactive tools</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">CDN implementation for global security content delivery</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Cybersecurity Schema Markup</h3>
            <p className="text-slate mb-4">
              We implement JSON-LD schema markup from schema.org to help search engines understand your cybersecurity products, services, and expertise. Proper structured data enables rich snippets, knowledge panels, and better visibility in ChatGPT, Perplexity, and Google SGE, establishing your authority in the security space.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">SoftwareApplication schema for security products and platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Organization markup with security certifications and credentials</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">FAQ and HowTo schemas for threat advisories and security guides</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Link Building for Cybersecurity Firms</h3>
            <p className="text-slate mb-4">
              Quality backlinks from authoritative cybersecurity publications and industry organizations build domain authority and E-E-A-T signals. We use Ahrefs, SEMrush, and Moz to identify link opportunities, analyze competitor backlink profiles, and execute white-hat link acquisition strategies that earn trust from both search engines and security buyers.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Guest contributions to Dark Reading, SC Magazine, CSO Online</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Digital PR campaigns around vulnerability disclosures and threat research</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Industry analyst citations and cybersecurity directory listings</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Cybersecurity Analytics & Tracking</h3>
            <p className="text-slate mb-4">
              We set up comprehensive tracking using Google Analytics 4, Google Search Console, and Screaming Frog to monitor keyword rankings, organic lead generation, conversion rates, and SEO ROI. You&apos;ll get monthly reports showing exactly how SEO drives qualified demos, enterprise inquiries, and pipeline growth for your cybersecurity business.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Custom GA4 event tracking for demo requests and whitepaper downloads</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Search Console monitoring for threat advisory and compliance content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Pipeline attribution tracking and organic lead quality analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 6: Process Steps                                                   */
/* -------------------------------------------------------------------------- */

// Process section now uses ProcessSectionAnimated component with slide-from-left animation

/* -------------------------------------------------------------------------- */
/*  Section 7: Case Study + Results (Dark Section)                             */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Cybersecurity Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a cybersecurity vendor dominate organic search.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">
                {caseStudy.challenge}
              </p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Our Solution
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {caseStudy.solution}
              </p>
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 8: Industry Keyword Examples                                       */
/* -------------------------------------------------------------------------- */

function KeywordsSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Cybersecurity Keyword Examples</Subheading>
          <Heading as="h2" className="mt-2">
            The types of keywords we target for cybersecurity companies.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keywordCategories.map((group, index) => (
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

/* -------------------------------------------------------------------------- */
/*  Section 9: Client Testimonial                                              */
/* -------------------------------------------------------------------------- */

function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-8">
            Client Testimonial
          </p>
          <blockquote className="font-display text-xl italic leading-relaxed text-ink">
            &ldquo;TheProjectSEO understood our space from day one. They didn&apos;t just write generic
            security content; they built a content engine that our own threat researchers respect.
            Within 10 months, organic became our largest pipeline source, surpassing paid search and
            events combined. Their approach to E-E-A-T and technical authority is exactly what
            cybersecurity companies need.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">Marcus Torres</p>
            <p className="text-sm text-slate mt-1">VP of Marketing, ShieldLayer Security</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: Pricing Context                                                */
/* -------------------------------------------------------------------------- */

function PricingContextSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <Subheading>Cybersecurity SEO Investment</Subheading>
            <Heading as="h2" className="mt-2">
              Built for cybersecurity growth metrics.
            </Heading>
          </div>

          <p className="text-sm leading-relaxed text-slate text-center mb-8">
            Our cybersecurity SEO engagements are structured to deliver measurable pipeline growth and
            reduce dependence on paid acquisition. We price based on scope, competitive intensity, and
            growth objectives, ensuring the investment delivers clear ROI against your lead generation targets.
          </p>

          <div className="border border-border-strong rounded-none p-8 mb-8">
            <p className="font-heading text-lg font-semibold text-ink mb-4">
              Investment starts at $1,997/month
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Cybersecurity keyword research, threat-focused content strategy, and monthly content creation
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Technical SEO audits, E-E-A-T optimization, and structured data implementation
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Monthly reporting with organic lead tracking, pipeline attribution, and competitor ranking analysis
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button href="/pricing">View Full Pricing Details</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 11: FAQ                                                            */
/* -------------------------------------------------------------------------- */

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="Cybersecurity SEO frequently asked questions" items={faqItems} />
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 12: Related Industries                                             */
/* -------------------------------------------------------------------------- */

function RelatedIndustriesSection() {
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
          {relatedIndustries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              className="bg-paper p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">{industry.name}</h3>
              <p className="mt-2 text-sm text-accent font-medium">View Industry SEO &rarr;</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 13: Industry-Specific CTA                                          */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function CybersecurityIndustrySEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Cybersecurity SEO Services | Organic Growth for Security Companies',
          description:
            'Specialized cybersecurity SEO strategies that build authority, generate qualified leads, and establish thought leadership. Expert SEO for cybersecurity vendors, MSSPs, and security consultancies.',
          url: 'https://theprojectseo.com/industries/cybersecurity',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Computer security, Computing, Technology, Information technology',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Computer security',
              sameAs: 'https://www.wikidata.org/wiki/Q3510521',
            },
            {
              '@type': 'Thing',
              name: 'Computing',
              sameAs: 'https://www.wikidata.org/wiki/Q5330456',
            },
            {
              '@type': 'Thing',
              name: 'Technology',
              sameAs: 'https://www.wikidata.org/wiki/Q4884546',
            },
            {
              '@type': 'Thing',
              name: 'Information technology',
              sameAs: 'https://www.wikidata.org/wiki/Q7214259',
            }
          ],
        }}
      />
      <Header />
      <StatsBar />
      <ChallengesSection />
      <ServicesSection />
      <TechnicalSEOSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we drive cybersecurity SEO results"
        steps={processSteps}
      />
      <CaseStudySection />
      <KeywordsSection />
      <TestimonialSection />
      <PricingContextSection />
      <TestimonialAndFAQSection />
      <RelatedIndustriesSection />
      <CTAFormSection
        subheading="Ready to Dominate Cybersecurity Search?"
        heading="Let's build your cybersecurity SEO authority."
        lead="Partner with SEO experts who understand threat landscapes, compliance frameworks, and the cybersecurity buyer journey. We'll help you turn organic search into your most efficient and defensible lead generation channel."
        submitText="Get Cybersecurity SEO Strategy"
      />
      <Footer />
    </main>
  )
}
