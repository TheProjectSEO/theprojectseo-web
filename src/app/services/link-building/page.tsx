import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import { Footer } from '@/components/footer'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  FeatureCardsSection,
  PricingSection,
  TestimonialSection,
  CTAFormSection,
} from '@/components/service-page-sections'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import {
  Link2,
  Newspaper,
  Search,
  FileText,
  Users,
  BookOpen,
  Target,
  Shield,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Link Building Services | White Hat Backlinks, Digital PR & HARO | TheProjectSEO',
  description:
    'Expert white hat link building services. Digital PR, HARO/Connectively outreach, niche edits, resource page link building, competitor backlink analysis, and anchor text optimization. Dofollow links from DR 60+ sites.',
  openGraph: {
    title: 'Link Building Services | High-Quality Backlinks That Actually Rank',
    description:
      'Expert white hat link building services. Digital PR, guest posts, niche edits, HARO outreach, and competitor link gap analysis. Average DR 65+ link authority.',
    url: 'https://theprojectseo.com/services/link-building',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Link Building Services | High-Quality Backlinks That Rank',
    description:
      'Expert white hat link building. Digital PR, HARO, niche edits, resource page outreach. 100% Google link guidelines compliant.',
  },
  alternates: {
    canonical: 'https://theprojectseo.com/services/link-building',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                 */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Link Building Services',
  title: 'Build high-quality backlinks that actually',
  accentWord: 'rank',
  titleAfterAccent: '',
  description:
    'White hat link building from high-authority, editorially controlled websites. We acquire dofollow backlinks through digital PR, HARO outreach, strategic guest posting, niche edits, and resource page building. Every link complies with Google guidelines and targets DR 60+ sites.',
  ctaPrimaryText: 'Get Your Link Building Strategy',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '150+', label: 'High-DR Links per Campaign' },
  { value: 'DR 65+', label: 'Average Link Authority' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'White Hat Methods' },
]

const servicesData = {
  subheading: 'What We Deliver',
  heading: 'Comprehensive white hat link building services.',
  lead: 'Link building remains one of Google&apos;s top 3 ranking factors. We build domain authority through strategic, compliant backlink acquisition that delivers sustainable ranking improvements.',
  services: [
    {
      icon: Newspaper,
      title: 'Digital PR Link Building',
      description:
        'Create and distribute newsworthy content that earns editorial dofollow links from major publications, news sites, and industry magazines. Original research studies, data-driven content, and expert commentary.',
      features: [
        '20-50 links per campaign',
        'Forbes, TechCrunch coverage',
        'Original research studies',
        'Journalist relationships',
      ],
    },
    {
      icon: Users,
      title: 'HARO / Connectively Outreach',
      description:
        'Systematic media outreach through HARO (now Connectively) and similar journalist query platforms. Secure editorial placements in publications like Forbes, Business Insider, and industry-specific media.',
      features: [
        'Daily journalist monitoring',
        'Expert response crafting',
        'Major publication placements',
        'High-authority dofollow links',
      ],
    },
    {
      icon: Link2,
      title: 'Niche Edits & Link Insertions',
      description:
        'Acquire contextual niche edits (link insertions into existing high-authority content) on relevant, indexed pages with established traffic and authority. Immediate link equity transfer.',
      features: [
        'Existing high-DR content',
        'Immediate equity transfer',
        'Contextual placement',
        'Established traffic pages',
      ],
    },
    {
      icon: Search,
      title: 'Competitor Backlink & Link Gap Analysis',
      description:
        'Reverse engineer competitor backlink profiles using Ahrefs, SEMrush, Majestic, and Moz. Link gap analysis reveals sites linking to competitors but not to you, providing prioritized prospecting list.',
      features: [
        'Competitor link research',
        'Gap opportunity identification',
        'Prioritized target list',
        'Data-driven strategy',
      ],
    },
    {
      icon: BookOpen,
      title: 'Resource Page & Broken Link Building',
      description:
        'Identify curated resource pages in your industry and pitch your content for inclusion. Find dead links on authority sites and offer your relevant content as replacement.',
      features: [
        'Resource page outreach',
        'Broken link discovery',
        'High-conversion targets',
        'Editorial link placements',
      ],
    },
    {
      icon: FileText,
      title: 'Guest Post Outreach',
      description:
        'Strategic guest posting on high-DR sites with genuine editorial standards and engaged audiences. Original article ideas tailored to each outlet that provide genuine value to readers.',
      features: [
        'DR 60+ publications',
        'Editorial standards',
        'Original content',
        'Contextual dofollow links',
      ],
    },
    {
      icon: Target,
      title: 'Anchor Text Strategy & Optimization',
      description:
        'Natural anchor text optimization strategies that build topical relevance without triggering spam filters. Diverse mix of branded, naked URL, generic, topical, and partial-match anchors.',
      features: [
        'Natural distribution',
        'Over-optimization prevention',
        'Topical relevance',
        'Google compliance',
      ],
    },
    {
      icon: Shield,
      title: 'Link Quality Audit & Toxic Link Removal',
      description:
        'Comprehensive audit of existing backlink profile identifying toxic links from spam sites, PBNs, and low-quality directories. Contact site owners for removal and submit disavow files.',
      features: [
        'Toxic link identification',
        'Manual removal outreach',
        'Disavow file submission',
        'Profile cleaning',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Methodology',
  heading: 'How we build high-quality backlinks.',
  steps: [
    {
      number: '01',
      title: 'Backlink Audit & Competitor Link Gap Analysis',
      description:
        'Comprehensive audit of existing backlink profile analyzing referring domains, anchor text distribution, dofollow vs. nofollow ratio, link quality metrics, and toxic link identification. Simultaneously, conduct competitor backlink analysis using Ahrefs and SEMrush to identify every site linking to competitors but not to you. Link gap analysis produces prioritized prospecting list.',
    },
    {
      number: '02',
      title: 'Link Building Strategy & Anchor Text Planning',
      description:
        'Develop custom link building strategy that defines target pages (which pages need the most link equity), link types (digital PR, guest posts, niche edits, resource page outreach, HARO/Connectively), anchor text optimization plan (natural distribution across branded, topical, and generic anchors), and monthly link velocity targets. Every strategy aligned with Google link guidelines.',
    },
    {
      number: '03',
      title: 'Outreach & Link Acquisition',
      description:
        'Execute personalized outreach campaigns across all planned link building channels. Digital PR campaigns create and distribute data-driven content to journalists. HARO/Connectively outreach monitors daily journalist queries. Guest post outreach pitches original article ideas to high-DR publications. Niche edit campaigns identify existing content for link insertion. Every outreach email personalized.',
    },
    {
      number: '04',
      title: 'Link Quality Verification & Monitoring',
      description:
        'Every acquired link manually verified: confirm the link is live, dofollow (where applicable), contextually placed, uses the planned anchor text, and appears on a page indexed by Google. Monitor referring domains growth, track link velocity to ensure natural acquisition patterns, and alert immediately if any acquired links removed or changed.',
    },
    {
      number: '05',
      title: 'Reporting & Strategy Refinement',
      description:
        'Monthly reporting includes all acquired backlinks with DR, anchor text, and placement context, referring domain growth trajectory, Domain Authority/Rating changes, keyword ranking improvements correlated with link acquisition, and ROI analysis comparing link building investment to organic traffic and revenue gains. Continuously refine strategy based on which channels deliver highest-quality links.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'B2B SaaS: 150+ high-DR links and DA 28 to 52 in 6 months.',
  challenge:
    'A B2B SaaS startup with innovative technology had Domain Authority of 28 and struggled to rank for competitive industry keywords. Existing backlink profile consisted primarily of low-quality directory listings and a handful of nofollow social links, with only 45 referring domains total. Competitor backlink analysis revealed competitors averaged 400+ referring domains with links from major tech publications. Link gap analysis showed 200+ high-DR sites linking to competitors but not to client.',
  solution:
    'Multi-channel link building strategy combining digital PR (original research reports on industry trends earning coverage in TechCrunch, VentureBeat, and industry publications), HARO/Connectively outreach (positioning CEO as expert source for journalist queries), strategic guest posting on high-DR industry blogs (DR 60+), and broken link building targeting competitor content that had gone offline. Maintained natural anchor text optimization with 40% branded, 25% topical, 20% URL, and 15% generic distribution. Link velocity carefully managed at 25-30 new referring domains per month.',
  results: [
    {
      metric: 'High-DR Backlinks',
      improvement: '150+',
      timeframe: 'Over 6 months',
    },
    {
      metric: 'Domain Authority',
      improvement: 'DA 52',
      timeframe: 'From DA 28',
    },
    {
      metric: 'Organic Traffic',
      improvement: '+340%',
      timeframe: 'Year-over-year growth',
    },
    {
      metric: 'Keywords in Top 10',
      improvement: '85',
      timeframe: 'From 12 keywords',
    },
  ],
}

const toolsData = {
  subheading: 'Tools & Technologies',
  heading: 'The link building stack that drives results.',
  lead: 'We use industry-leading tools for backlink analysis, outreach management, and link quality assessment.',
  cards: [
    {
      title: 'Backlink Analysis',
      items: [
        'Ahrefs',
        'SEMrush',
        'Majestic',
        'Moz Link Explorer',
      ],
    },
    {
      title: 'Outreach & PR',
      items: [
        'BuzzStream',
        'Pitchbox',
        'HARO / Connectively',
        'Hunter.io',
      ],
    },
    {
      title: 'Verification',
      items: [
        'Google Search Console',
        'Screaming Frog',
        'Google Disavow Tool',
      ],
    },
    {
      title: 'Reporting',
      items: [
        'Google Looker Studio',
        'Ahrefs',
        'Google Analytics 4',
      ],
    },
  ],
}

const pricingData = {
  subheading: 'Cost & Pricing Guide',
  heading: 'How much does link building cost?',
  tiers: [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'For small businesses building initial backlink profile.',
      features: [
        '5-10 high-quality backlinks/month',
        'Competitor backlink analysis',
        'Link gap analysis',
        'Anchor text strategy',
        'Basic HARO outreach',
        'Monthly reporting',
      ],
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'For established brands scaling link acquisition.',
      features: [
        'Everything in Starter',
        '15-25 high-quality backlinks/month',
        'Digital PR campaigns',
        'Guest post outreach (DR 60+)',
        'Niche edit placements',
        'Resource page building',
        'HARO/Connectively campaigns',
        'Weekly reporting',
        'Dedicated link strategist',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For competitive industries requiring aggressive link acquisition.',
      features: [
        'Everything in Professional',
        '30+ high-quality backlinks/month',
        'Custom digital PR campaigns',
        'Multi-campaign strategies',
        'International link building',
        'Crisis link management',
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
        'They built our backlink profile from nothing. The quality of links is exceptional -- real DR 60+ publications with actual traffic. We jumped from DA 18 to DA 48 in less than a year.',
      author: 'Sarah Mitchell',
      role: 'Founder',
      company: 'SaaS Startup',
    },
    {
      quote:
        'The digital PR campaigns secured coverage in publications we never dreamed would feature us. TechCrunch, Forbes, VentureBeat. Each campaign generates 30-40 high-quality backlinks.',
      author: 'Michael Torres',
      role: 'VP Marketing',
      company: 'B2B Technology Company',
    },
    {
      quote:
        'Finally a link building agency that actually follows white hat methods. No PBNs, no spam, just genuine outreach and relationship building. Our rankings improved without any penalty risk.',
      author: 'Jessica Park',
      role: 'Director of SEO',
      company: 'E-commerce Brand',
    },
  ],
}

const faqData = [
  {
    question: 'Why are backlinks important for SEO?',
    answer: 'Backlinks remain one of Google&apos;s top 3 ranking signals. They act as editorial votes of confidence from other websites, telling search engines that your content is valuable, trustworthy, and authoritative. High-quality dofollow backlinks from authoritative referring domains increase your Domain Authority, improve keyword rankings, and drive referral traffic. According to industry research, 78% of SEO professionals report that link building delivers positive ROI, and 89.2% see ranking improvements within 1-6 months of acquiring new backlinks.',
  },
  {
    question: 'How much do link building services cost?',
    answer: 'Link building pricing varies by method and quality. Industry benchmarks from a survey of 518 SEO experts show: average cost per paid link is $83, average guest post cost is $609, average niche edit (link insertion) cost is $361, and digital PR campaigns range from $2,000-$10,000+ per campaign. Our packages start at $2,500/month for 5-10 high-quality links and $5,000/month for 15-25 links with digital PR. Link building typically represents 32-36% of total SEO budget. Costs have increased 20-35% since 2022 due to rising content creation and outreach expenses.',
  },
  {
    question: 'What is the difference between dofollow and nofollow links?',
    answer: 'Dofollow links pass link equity (ranking power) from the linking site to your site, directly influencing your Domain Authority and keyword rankings. Nofollow links include a rel="nofollow" attribute that tells search engines not to pass link equity. While dofollow links are more valuable for SEO, a natural link profile contains both. Google has stated that nofollow is now a "hint" rather than a directive, meaning some nofollow links may still provide SEO value. Our link building focuses primarily on dofollow links but maintains natural diversity.',
  },
  {
    question: 'What is digital PR and why is it effective for link building?',
    answer: 'Digital PR involves creating newsworthy content (original research, data studies, expert commentary, trend analysis) and pitching it to journalists and publications to earn editorial backlinks. It is the most effective scalable link building tactic because: links are genuinely earned through valuable content rather than paid placement, editorial links from news sites carry high authority, coverage generates brand awareness beyond just SEO value, and links appear natural to Google because they are natural. 48.6% of SEO experts choose digital PR as the most effective link building tactic.',
  },
  {
    question: 'What is competitor backlink analysis and link gap analysis?',
    answer: 'Competitor backlink analysis involves using tools like Ahrefs, SEMrush, and Majestic to examine every referring domain linking to your top competitors. Link gap analysis identifies sites linking to one or more competitors but not to you. This provides a prioritized list of proven link prospects because these sites have already demonstrated willingness to link to content in your space. We typically find 100-300 link gap opportunities per competitor analyzed, providing months of prospecting targets.',
  },
  {
    question: 'What are niche edits and how do they compare to guest posts?',
    answer: 'Niche edits (also called link insertions) are contextual links placed into existing, published content on authority sites. Unlike guest posts where you create new content, niche edits go into pages that already have established rankings, traffic, and their own backlinks. This means they often pass more immediate link equity. Average niche edit cost is $361 versus $609 for guest posts. Both are white hat when the content is relevant and the placement is editorial. We use both methods strategically based on the target page and anchor text requirements.',
  },
  {
    question: 'What is HARO / Connectively and how does it help link building?',
    answer: 'HARO (Help A Reporter Out), now rebranded as Connectively, is a platform connecting journalists with expert sources. Journalists post queries seeking expert quotes and data for their articles. We monitor these daily, identify queries relevant to your expertise, and craft compelling responses that position your brand as an authoritative source. When journalists use your quotes, they typically include a dofollow backlink to your website. HARO/Connectively outreach earns links from publications like Forbes, Business Insider, Inc., and industry-specific media.',
  },
  {
    question: 'What makes a backlink "high-quality"?',
    answer: 'High-quality backlinks share several characteristics: they come from sites with high Domain Rating (DR 50+, ideally 60+), are dofollow and pass link equity, are contextually placed within relevant content (not footer or sidebar), use natural anchor text optimization, come from websites with real organic traffic and engagement, are topically relevant to your industry, and comply with Google link guidelines. A single link from a DR 70+ site can be more valuable for rankings than 100 links from low-quality directories. Our link quality metrics evaluation includes DR, traffic, relevance, and spam score.',
  },
  {
    question: 'How do you ensure links comply with Google link guidelines?',
    answer: 'We follow 100% white hat SEO practices. This means: no private blog networks (PBNs), no link farms or link exchanges, no paid links without proper nofollow attribution, no manipulative anchor text optimization, no link schemes of any kind. All links are earned through genuine outreach, valuable content creation, and relationship building. We regularly audit our link building partners and immediately stop working with any site that shows signs of manipulative practices. Our clients have never received a Google manual action from our link building.',
  },
  {
    question: 'What is link velocity and why does it matter?',
    answer: 'Link velocity is the rate at which new referring domains are acquired over time. It matters because sudden spikes in new backlinks can appear unnatural to Google, potentially triggering algorithmic scrutiny. A natural link profile shows steady, gradual growth in referring domains. We carefully manage link velocity to match realistic acquisition patterns: a new blog might naturally earn 5-10 new links per month, while an established brand might earn 20-30. Our campaigns build gradually and maintain consistent velocity rather than front-loading all links in month one.',
  },
  {
    question: 'Can you remove toxic backlinks from my site?',
    answer: 'Yes. As part of our backlink audit, we identify toxic links from spam sites, PBNs, hacked sites, and low-quality directories using Ahrefs, SEMrush, and Moz spam scores. We first attempt manual removal by contacting site owners. For links that cannot be removed, we submit a disavow file through Google&apos;s Disavow Tool to neutralize their negative impact. Cleaning your backlink profile is essential before investing in new link building to ensure maximum impact from new dofollow links.',
  },
  {
    question: 'How do you measure link building ROI?',
    answer: 'We measure link building ROI through multiple metrics: referring domain growth (total unique domains linking to you), Domain Rating/Authority changes over time, keyword ranking improvements correlated with new link acquisition dates, organic traffic growth attributed to link building efforts, and ultimately organic revenue attribution. Monthly reports show clear correlation between link acquisition and ranking improvements. According to industry data, 78% of link building campaigns deliver positive ROI, with most clients seeing meaningful ranking lifts within 3-6 months.',
  },
]

const ctaData = {
  subheading: 'Ready to Build Authority?',
  heading: 'Get your free link building strategy.',
  lead: 'Discover your backlink profile weaknesses, competitive link gaps, and the exact link building strategy needed to outrank your competitors. Our free audit includes competitor backlink analysis and actionable recommendations.',
  submitText: 'Get Your Free Strategy',
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                               */
/* -------------------------------------------------------------------------- */

export default function LinkBuildingPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Link Building Services',
          description: 'Professional white hat link building services including digital PR, HARO outreach, guest posting, niche edits, resource page link building, competitor backlink analysis, and anchor text optimization.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/link-building',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} visual={<ServiceProcessVisual type="optimization" />} visualBg="ink" />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <Container className="py-24">
        <FAQAccordion title="Link building frequently asked questions" items={faqData} />
      </Container>
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
