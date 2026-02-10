import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import { Footer } from '@/components/footer'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  ProcessSection,
  CaseStudyDark,
  FeatureCardsSection,
  PricingSection,
  TestimonialSection,
  CTAFormSection,
} from '@/components/service-page-sections'
import {
  Link2,
  Megaphone,
  Bell,
  FileText,
  Users,
  TrendingUp,
  Search,
  Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Off-Page SEO Services | Link Building, Digital PR & Brand Authority | TheProjectSEO',
  description: 'Expert off-page SEO services: strategic link building, digital PR, brand mention monitoring, unlinked mention outreach, E-E-A-T authority signals. 100% white-hat strategies.',
  openGraph: {
    title: 'Off-Page SEO Services | Link Building, Digital PR & Brand Authority',
    description: 'Expert off-page SEO services. Link building, digital PR, brand mentions, E-E-A-T authority signals. 100% white-hat strategies.',
    url: 'https://theprojectseo.com/services/off-page-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Off-Page SEO Services | Link Building, Digital PR & Brand Authority',
    description: 'Expert off-page SEO services. Link building, digital PR, brand mentions. 100% white-hat strategies.',
  },
  alternates: {
    canonical: 'https://theprojectseo.com/services/off-page-seo',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                 */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Off-Page SEO Services',
  title: 'Build authority and trust beyond your',
  accentWord: 'website',
  titleAfterAccent: '',
  description:
    'Off-page SEO has evolved far beyond link building. We build domain authority through strategic backlink acquisition, digital PR campaigns, brand mention monitoring, unlinked mention outreach, and E-E-A-T authority signals that establish your brand as the trusted industry leader.',
  ctaPrimaryText: 'Get Your Off-Page SEO Strategy',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: 'DA 45', label: 'Avg Authority Growth (from 15)' },
  { value: '280%', label: 'Avg Traffic Increase' },
  { value: 'DR 65', label: 'Avg Backlink Quality' },
  { value: '100%', label: 'White-Hat Strategies' },
]

const servicesData = {
  subheading: 'What We Deliver',
  heading: 'Comprehensive off-page SEO services.',
  lead: 'Off-page SEO in 2026 goes beyond backlinks. We build domain authority through strategic link acquisition, digital PR, brand signals, and E-E-A-T development.',
  services: [
    {
      icon: Link2,
      title: 'Strategic Link Building',
      description:
        'White-hat link acquisition from high-authority, editorially controlled websites. Average link quality targets DR 50+ with contextual placement in relevant, real-traffic publications.',
      features: [
        'DR 50+ editorial links',
        'Contextual anchor text',
        'Real traffic publications',
        'White-hat acquisition only',
      ],
    },
    {
      icon: Megaphone,
      title: 'Digital PR Campaigns',
      description:
        'Secure editorial coverage in major publications, industry blogs, and news sites through newsworthy campaigns built on original research, data studies, and expert commentary.',
      features: [
        '20-50 links per campaign',
        'Forbes, TechCrunch coverage',
        'Original research studies',
        'Journalist relationship building',
      ],
    },
    {
      icon: Bell,
      title: 'Brand Mention Monitoring & Outreach',
      description:
        'Monitor brand mentions across the web using Brand24 and Ahrefs. Convert unlinked mentions into backlinks through attribution outreach.',
      features: [
        'Real-time mention tracking',
        'Unlinked mention conversion',
        'Brand sentiment monitoring',
        'NLP-detected trust signals',
      ],
    },
    {
      icon: FileText,
      title: 'Guest Blogging Strategy',
      description:
        'Strategic guest posting on high-DR sites with genuine editorial standards and engaged audiences. Position your team as industry experts while earning contextual backlinks.',
      features: [
        'High-DR site placement',
        'Editorial oversight required',
        'Bylined expert articles',
        'Target audience alignment',
      ],
    },
    {
      icon: Users,
      title: 'E-E-A-T Authority Building',
      description:
        'Google measures E-E-A-T largely through off-page signals. Build authority through expert contributions, conference speaking, podcast appearances, and industry awards.',
      features: [
        'Publication contributions',
        'Conference placements',
        'Podcast appearances',
        'Industry recognition',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Content Promotion & Amplification',
      description:
        'Amplify your best content through strategic outreach to journalists, bloggers, and influencers. Content promotion includes social seeding, email outreach, and community distribution.',
      features: [
        'Journalist outreach',
        'Social amplification',
        'Community distribution',
        'Reddit, Quora seeding',
      ],
    },
    {
      icon: Search,
      title: 'Link Gap Analysis',
      description:
        'Analyze where competitors earn backlinks you do not. Identify specific domains linking to competitors, evaluate attainability, and develop targeted outreach campaigns.',
      features: [
        'Competitor backlink research',
        'Opportunity identification',
        'Attainability assessment',
        'Targeted acquisition campaigns',
      ],
    },
    {
      icon: Award,
      title: 'Review & Reputation Management',
      description:
        'Online reviews directly impact E-E-A-T trust signals. Implement review generation campaigns, respond to reviews, monitor brand sentiment, and build positive reputation signals.',
      features: [
        'Review generation',
        'Cross-platform management',
        'Sentiment monitoring',
        'Trust signal development',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Methodology',
  heading: 'How we build off-page authority.',
  steps: [
    {
      number: '01',
      title: 'Authority & Competitive Audit',
      description:
        'Profile your current backlink portfolio, brand mention landscape, and competitive positioning. Using Ahrefs and Semrush, analyze referring domain quality, anchor text distribution, link velocity, and toxic link exposure. Link gap analysis against top competitors reveals exactly which domains link to them but not to you.',
    },
    {
      number: '02',
      title: 'Strategy & Target Development',
      description:
        'Develop custom off-page strategy covering link acquisition channels (guest posting, digital PR, resource pages, broken link building), brand building activities (podcast placements, speaking opportunities, community engagement), target publication lists with contact data, and content assets needed for outreach.',
    },
    {
      number: '03',
      title: 'Content Asset Creation',
      description:
        'Create linkable assets: original research and data studies that earn editorial citations, expert roundup contributions, guest article content tailored to each target publication, infographics and visual content for social amplification, and resource content designed to attract natural link acquisition.',
    },
    {
      number: '04',
      title: 'Outreach & Relationship Building',
      description:
        'Personalized outreach to journalists, editors, bloggers, and influencers. Build genuine relationships through value-first communication, not transactional link requests. HARO/Connectively responses provide expert commentary. Digital PR pitches deliver newsworthy data. Every touchpoint builds long-term relationships.',
    },
    {
      number: '05',
      title: 'Brand Signal Development',
      description:
        'Beyond link acquisition, build broader brand signals Google evaluates: monitoring and converting unlinked mentions, securing podcast and speaking placements, managing review profiles, building community presence on Reddit and industry forums, and tracking brand search volume growth.',
    },
    {
      number: '06',
      title: 'Monitoring & Reporting',
      description:
        'Track domain authority growth, new referring domain acquisition, backlink quality metrics, brand mention volume and sentiment, referral traffic from acquired links, and ranking improvements correlated with off-page activities. Monthly reports connect every action to measurable authority and ranking outcomes.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'SaaS startup: DA 15 to DA 45 in 12 months with 280% traffic growth.',
  challenge:
    'A B2B SaaS startup with innovative technology had virtually no domain authority (DA 15), minimal brand recognition, and could not compete with established competitors (DA 50-70) for target keywords. Their content was strong but invisible because the site lacked off-page authority signals. Organic traffic contributed less than 5% of total leads.',
  solution:
    'Multi-channel off-page strategy. Digital PR campaigns leveraged product usage data to create industry benchmark studies earning editorial coverage in 15+ major publications. Strategic guest posting on high-DR industry blogs (Semrush, HubSpot, MarketingProfs) positioned the founder as thought leader. Monitored brand mentions using Brand24 and converted 40+ unlinked mentions into backlinks. Podcast appearances on 12 relevant shows built E-E-A-T signals. Broken link building campaign targeting resource pages earned additional 35 contextual links.',
  results: [
    {
      metric: 'Domain Authority',
      improvement: 'DA 15 → 45',
      timeframe: 'In 12 months',
    },
    {
      metric: 'Quality Backlinks',
      improvement: '200+',
      timeframe: 'Averaging DR 65',
    },
    {
      metric: 'Organic Traffic',
      improvement: '+280%',
      timeframe: 'Year-over-year growth',
    },
    {
      metric: 'Pipeline Contribution',
      improvement: '42%',
      timeframe: 'From <5% to primary channel',
    },
  ],
}

const toolsData = {
  subheading: 'Tools & Technologies',
  heading: 'The off-page SEO stack that drives results.',
  lead: 'We use industry-leading tools for backlink analysis, outreach management, brand monitoring, and digital PR campaigns.',
  cards: [
    {
      title: 'Backlink Analysis',
      items: [
        'Ahrefs',
        'Semrush Backlink Analytics',
        'Moz Link Explorer',
        'Majestic SEO',
      ],
    },
    {
      title: 'Outreach & PR',
      items: [
        'BuzzStream',
        'Pitchbox',
        'HARO / Connectively',
        'Respona',
      ],
    },
    {
      title: 'Brand Monitoring',
      items: [
        'Brand24',
        'Google Alerts',
        'Coverage Book',
      ],
    },
    {
      title: 'Contact Finding',
      items: [
        'Hunter.io',
        'Clearbit',
        'LinkedIn Sales Navigator',
      ],
    },
  ],
}

const pricingData = {
  subheading: 'Cost & Pricing Guide',
  heading: 'How much does off-page SEO cost?',
  tiers: [
    {
      name: 'Starter',
      price: '$2,200',
      period: '/month',
      description: 'For startups and small businesses building initial authority.',
      features: [
        '8-12 high-quality backlinks/month',
        'Brand mention monitoring',
        'Unlinked mention outreach',
        'Basic digital PR outreach',
        'Competitor backlink analysis',
        'Anchor text strategy',
        'Monthly reporting',
      ],
    },
    {
      name: 'Professional',
      price: '$4,800',
      period: '/month',
      description: 'For established brands scaling authority and market share.',
      features: [
        'Everything in Starter',
        '20-30 high-quality backlinks/month',
        'Digital PR campaigns (data studies)',
        'Guest posting on DR 50+ sites',
        'HARO/Connectively campaigns',
        'Podcast placement outreach',
        'Review management',
        'Link gap analysis (quarterly)',
        'Weekly reporting',
        'Dedicated off-page strategist',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For competitive industries requiring aggressive authority growth.',
      features: [
        'Everything in Professional',
        '40+ high-quality backlinks/month',
        'Custom digital PR campaigns',
        'Influencer partnership development',
        'Community building strategy',
        'Crisis reputation management',
        'International link building',
        'Priority support',
        'Quarterly strategy sessions',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What our clients say.',
  testimonials: [
    {
      quote:
        'They built our domain authority from scratch. We went from invisible to ranking alongside industry giants in under a year. The link quality is genuinely exceptional -- real publications, real traffic.',
      author: 'Kevin Patterson',
      role: 'Founder',
      company: 'B2B SaaS Startup',
    },
    {
      quote:
        'The digital PR campaigns got us featured in publications we never thought would cover us. Brand awareness and authority both skyrocketed. Our competitors are still trying to figure out how we did it.',
      author: 'Nicole Chen',
      role: 'CMO',
      company: 'B2B Technology Company',
    },
    {
      quote:
        'Finally an agency that focuses on sustainable, white-hat off-page SEO. No spam, no shortcuts, no PBNs. Just genuine relationship building and quality content that earns real links.',
      author: 'Robert Martinez',
      role: 'Director of Marketing',
      company: 'E-commerce Brand',
    },
  ],
}

const faqData = [
  {
    question: 'What are off-page SEO services?',
    answer: 'Off-page SEO services encompass everything done outside your website to build authority and improve rankings. This includes strategic link building, digital PR, brand mention monitoring, unlinked mention outreach, guest blogging, E-E-A-T authority building, community engagement, review management, and reputation building. Off-page SEO determines how high you rank by building the external trust signals Google uses to evaluate your site&apos;s credibility relative to competitors.',
  },
  {
    question: 'What is the difference between on-page and off-page SEO?',
    answer: 'On-page SEO optimizes elements on your website: content quality, keywords, meta tags, header structure, schema markup, and user experience. Off-page SEO builds signals outside your website: backlinks from other sites, brand mentions across the web, social signals, E-E-A-T evidence, and online reputation. On-page determines what you rank for. Off-page determines how high you rank. Both are essential. Think of on-page as the product and off-page as the reputation that makes people choose it.',
  },
  {
    question: 'How much does off-page SEO cost?',
    answer: 'Off-page SEO retainers typically range from $1,000-$5,000 per month for comprehensive services. Individual high-quality links cost $500-$1,250 each on average. Digital PR campaigns run $5,000-$15,000 per month. Our Starter plan begins at $2,200/month (8-12 links), Professional at $4,800/month (20-30 links + digital PR), and Enterprise is custom-quoted. The investment reflects the real cost of quality outreach, content creation, and relationship building required for white-hat link acquisition.',
  },
  {
    question: 'What are unlinked mentions and why do they matter?',
    answer: 'Unlinked mentions are references to your brand on other websites that do not include a hyperlink. Google uses NLP (natural language processing) to detect and evaluate these mentions as trust signals, even without links. A brand frequently mentioned across industry publications is recognized as more authoritative. Additionally, unlinked mentions represent conversion opportunities: we reach out to site owners to request adding a hyperlink, converting a brand signal into a direct ranking factor. Most brands have dozens of unlinked mentions they are unaware of.',
  },
  {
    question: 'Is link building still important for SEO in 2026?',
    answer: 'Yes. Backlinks remain one of Google&apos;s top 3 ranking factors. However, the emphasis has shifted from quantity to quality and context. A single editorial link from a relevant, high-authority publication is worth more than 100 links from low-quality directories. Additionally, Google now evaluates brand signals, unlinked mentions, and E-E-A-T evidence alongside traditional backlinks. The most effective off-page strategy combines quality link building with broader authority development.',
  },
  {
    question: 'What is digital PR and how does it help SEO?',
    answer: 'Digital PR secures editorial coverage in publications and news sites through newsworthy content: original research, data studies, expert commentary, and trend analysis. It is one of the most effective off-page strategies because it earns high-authority backlinks through genuine editorial value rather than solicitation. A single successful digital PR campaign can generate 20-50 links from DR 70+ publications. Digital PR also builds brand awareness, drives referral traffic, and creates the kind of editorial citations that strengthen E-E-A-T signals.',
  },
  {
    question: 'Do backlinks still matter for SEO?',
    answer: 'Absolutely. Google has confirmed that backlinks remain a significant ranking signal. The key difference in 2026 is that quality matters far more than quantity. Links from real publications with editorial standards, genuine traffic, and topical relevance carry substantial weight. Links from PBNs, link farms, and irrelevant sites carry zero or negative value. Our approach focuses exclusively on earning links that Google values: editorial, contextual, and from sites with real audiences.',
  },
  {
    question: 'How long does it take to build domain authority?',
    answer: 'Building meaningful domain authority takes 6-12 months of consistent effort. Initial improvements (DA 10 to DA 25) happen relatively quickly with quality link acquisition. Moving from DA 25 to DA 50+ takes longer as each authority point becomes progressively harder to earn. The key is consistency. One-off campaigns produce temporary spikes. Sustained monthly link building and brand development creates compounding authority growth that accelerates over time.',
  },
  {
    question: 'Is off-page SEO safe? Will it get me penalized?',
    answer: 'When executed with white-hat methods, off-page SEO is completely safe and essential for ranking success. We use only ethical strategies: editorial link building through genuine content value, relationship-based outreach, legitimate digital PR, and authentic brand development. We never use PBNs, link farms, paid links that violate Google guidelines, or any tactic that risks algorithmic or manual penalties. Our link profiles mirror natural editorial patterns that Google expects to see for legitimate, authoritative brands.',
  },
  {
    question: 'How do you measure off-page SEO success?',
    answer: 'We track multiple authority metrics: Domain Authority/Domain Rating growth, number and quality of new referring domains, backlink quality distribution (DR scores), brand mention volume and sentiment, referral traffic from acquired links, and most importantly, keyword ranking improvements and organic traffic growth correlated with off-page activities. Monthly reports show exactly how each off-page activity contributes to authority growth and ranking performance, connecting actions to measurable business outcomes.',
  },
  {
    question: 'What is the difference between off-page SEO and link building?',
    answer: 'Link building is a subset of off-page SEO focused specifically on acquiring backlinks from other websites. Off-page SEO is the broader discipline that includes link building plus brand mention development, digital PR, E-E-A-T authority signals, social media presence, community engagement, review management, podcast appearances, and online reputation building. While link building directly transfers link equity, the broader off-page activities build the brand trust signals that Google increasingly weighs alongside traditional backlinks.',
  },
  {
    question: 'Do I need off-page SEO if I have great content?',
    answer: 'Yes, especially for competitive keywords. Great content is necessary but not sufficient. Without domain authority from backlinks and brand signals, even perfect content will not rank in competitive spaces. Think of it as: technical SEO gets you in the game (crawlability), on-page SEO makes your content rankable (relevance), and off-page SEO determines how high you rank (authority). All three work together. Sites with strong content but weak off-page authority consistently underperform against competitors with balanced SEO strategies.',
  },
]

const ctaData = {
  subheading: 'Ready to Build Real Authority?',
  heading: 'Get your free off-page SEO strategy.',
  lead: 'Discover your backlink gaps, unlinked mention opportunities, and the off-page strategy needed to outrank your competitors. Our free audit includes a competitive link gap analysis and actionable recommendations.',
  submitText: 'Get Your Free Strategy',
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                               */
/* -------------------------------------------------------------------------- */

export default function OffPageSEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Off-Page SEO Services',
          description: 'Professional off-page SEO services including strategic link building, digital PR, brand mention monitoring, unlinked mention outreach, guest blogging, E-E-A-T authority building, and reputation management.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/off-page-seo',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessSection {...processData} />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <Container className="py-24">
        <FAQAccordion title="Off-page SEO frequently asked questions" items={faqData} />
      </Container>
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
