import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  CTAFormSection,
} from '@/components/service-page-sections'
import { Layers, TrendingUp, Search, Shield, BarChart3, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Paid Search + SEO Integration | Combined PPC & Organic Strategy | TheProjectSEO',
  description:
    'Combined PPC and SEO strategy for SERP dominance. Ad CTR rises from 5.66% to 18.06% when paired with organic listing. Use paid to test, organic to own, both to defend.',
  alternates: {
    canonical: '/services/paid-media/paid-search-seo-integration',
  },
  openGraph: {
    title: 'Paid Search + SEO Integration | TheProjectSEO',
    description:
      'When your ad and organic listing appear together for the same query, total CTR rises from 5.66% to 18.06%. We coordinate paid and organic so both channels compound.',
    url: 'https://theprojectseo.com/services/paid-media/paid-search-seo-integration',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Paid + Organic Integration',
  title: 'The SEO agency that',
  accentWord: 'also runs',
  titleAfterAccent: 'your paid search',
  description:
    'Running paid and organic separately means two teams working on the same SERP with different data and conflicting priorities. Running them together means ad copy informs meta descriptions, organic ranking data drives bid decisions, and paid spend tests content ideas before SEO investment commits. Moz data shows the combined effect: ad CTR rises from 5.66% to 18.06% when a paid and organic listing appear together for the same query.',
  ctaPrimaryText: 'Build a Combined Strategy',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See Google Ads Services',
  ctaSecondaryHref: '/services/paid-media/google-ads',
}

const statsData = [
  { value: '18.06%', label: 'Ad CTR with organic listing also present (Moz)' },
  { value: '5.66%', label: 'Ad CTR without organic presence (Moz baseline)' },
  { value: '3.2x', label: 'CTR increase from coordinated paid + organic' },
  { value: '40%', label: 'Organic content investment validated by paid data first' },
]

const servicesGridData = {
  subheading: 'Integration Services',
  heading: 'Six ways paid and organic amplify each other.',
  lead: 'The compounding effect only happens when both channels share data and strategy. These are the six integration points we build for every combined client.',
  services: [
    {
      icon: Search,
      title: 'Shared Keyword Priority Matrix',
      description:
        'We build one keyword matrix that serves both channels. Keywords where you rank in positions one through three organically get low bid priority in paid. Keywords where you rank on page two or lower, or do not rank at all, get higher paid priority. The matrix is updated monthly as organic rankings shift.',
      features: [
        'Combined keyword view from Ahrefs + Google Ads',
        'Bid priority by organic ranking position',
        'Monthly matrix refresh as rankings change',
        'Cannibalization prevention by keyword type',
      ],
    },
    {
      icon: Zap,
      title: 'Paid Testing Before SEO Investment',
      description:
        'SEO content takes three to six months to generate meaningful traffic data. Paid search generates conversion data in two to three weeks. We run paid campaigns on target keywords before committing SEO resources, identifying which keywords actually convert at the CPL target. Only after paid validation do we commission the long-form content.',
      features: [
        '2-week paid test on candidate organic keywords',
        'Conversion rate and CPL threshold by keyword',
        'Content brief informed by paid ad copy winners',
        'SEO investment prioritised by paid-validated demand',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Ad Copy Feeds Organic Meta Data',
      description:
        'Your Google Ads account contains thousands of A/B tested headlines and descriptions. The ones with the highest CTR are telling you exactly what language works for a specific query intent. We systematically pull the top-performing ad copy for each keyword cluster and use it to rewrite organic title tags and meta descriptions.',
      features: [
        'Monthly export of top-CTR ad copy by keyword cluster',
        'Meta description rewrite based on paid CTR winners',
        'Title tag testing framework informed by ad headline data',
        'Organic CTR improvement tracked in GSC',
      ],
    },
    {
      icon: Shield,
      title: 'Branded PPC to Defend SERP Position',
      description:
        'When you rank organically for your brand terms, competitors will bid on your brand name. Without branded PPC, a competitor ad appears above your organic listing. Branded CPCs are extremely low (often $0.10-0.50) and the defence value is disproportionate. We manage branded PPC as a defensive layer, not an optional extra.',
      features: [
        'Brand term monitoring for competitor bidding',
        'Branded campaign at defensive bid levels',
        'Competitor conquesting identification and response',
        'Brand impression share reporting and alerts',
      ],
    },
    {
      icon: BarChart3,
      title: 'Unified Attribution and Reporting',
      description:
        'When paid and organic are managed separately, you get two reports that do not talk to each other. We build one reporting layer in BigQuery that shows paid and organic side by side: blended CPC equivalent, combined impression share, cross-channel conversion paths, and the incremental value of paid presence alongside organic.',
      features: [
        'BigQuery data join: Google Ads + GSC + GA4',
        'Blended CPL across paid and organic',
        'Cross-channel conversion path analysis',
        'Incremental paid value calculation where organic exists',
      ],
    },
    {
      icon: Layers,
      title: 'Content-Led Campaign Architecture',
      description:
        'For content-heavy SEO programs, we build paid campaigns that support organic content at each funnel stage. Paid amplifies top-performing organic content to new audiences. Organic ranks for informational queries paid cannot target cost-effectively. Each channel fills the gaps the other leaves. The result is full-funnel SERP coverage with no dead zones.',
      features: [
        'Content amplification campaigns for top organic pages',
        'Paid targeting for informational queries with high organic cost',
        'Content retargeting: paid ads to organic content visitors',
        'SERP coverage report showing paid + organic gaps by query',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'SERP audit. map the current state of paid vs organic',
    description:
      'Before we build the integration, we need to know where you currently stand for every target keyword: organic position, paid impression share, competitors on paid, competitors on organic, and the gap between paid CTR where organic is present versus absent. This audit typically takes one week and produces the priority matrix that guides everything else.',
  },
  {
    number: '02',
    title: 'Keyword matrix. one source of truth for both channels',
    description:
      'We build a shared keyword matrix that shows organic position, paid impression share, monthly search volume, current CPL on paid, and content status for each keyword cluster. This becomes the operating document for both teams. Priority column: rank below 10 and not running paid means add to paid immediately. Rank 1-3 organically and running paid means reduce bid or pause.',
  },
  {
    number: '03',
    title: 'Data infrastructure. one reporting layer',
    description:
      'We connect Google Ads, GSC, and GA4 into a shared BigQuery warehouse. This gives us a unified view of search performance where organic and paid data live in the same tables. The first major insight from unified data is always the same: paid is wasting budget on keywords where organic already dominates, and organic has left high-converting keywords untouched.',
  },
  {
    number: '04',
    title: 'Ongoing co-management. monthly joint review',
    description:
      'Monthly review covers both channels with integrated data: which keywords have shifted ranking (requiring bid change), which ad copy winners should be tested as organic meta descriptions, which content pieces drove enough organic traffic to allow paid budget reduction, and which competitor moves in paid or organic require strategic response.',
  },
]

const caseStudyData = {
  subheading: 'Combined Channel Case',
  heading: 'From two separate reports to one compounding strategy. Blended CPL down 38%.',
  challenge:
    'A B2B SaaS company had a Google Ads agency and an SEO agency working independently. The Google Ads team was bidding on keywords where organic already ranked in the top three. The SEO agency was producing content on informational keywords with no commercial conversion potential. Neither team had visibility into the other\'s work. Combined spend was $22,000 per month with a blended CPL of $320.',
  solution:
    'Built a unified BigQuery reporting layer combining Google Ads, GSC, and GA4 data. Identified 23 keywords where paid was running above $2 CPC and organic ranked in positions one through three (estimated wasted spend: $4,200 per month). Redirected that budget to keywords with strong commercial intent and no organic ranking. Used top-CTR ad copy from paid to rewrite meta descriptions on the top 12 organic pages. Built a paid testing framework to validate 8 new organic content targets before commissioning long-form pieces.',
  results: [
    { metric: 'Blended CPL improvement', improvement: '-38%', timeframe: 'Month 3 vs baseline' },
    { metric: 'Wasted paid spend recovered', improvement: '$4,200/mo', timeframe: 'From keyword overlap' },
    { metric: 'Organic CTR improvement', improvement: '+22%', timeframe: 'After meta rewrites from paid data' },
    { metric: 'Content validated before investment', improvement: '8 pieces', timeframe: 'Paid test first' },
  ],
}

const faqItems = [
  {
    question: 'What does the Moz data on CTR actually show?',
    answer:
      'Moz research found that when a brand has both a paid ad and an organic listing for the same query, the ad CTR rises from 5.66% (paid only) to 18.06% (paid + organic). This is the reinforcement effect: users see your brand in two positions, which increases trust and the probability of clicking on either. The total SERP share is also higher because you occupy more visual real estate. This effect is strongest for branded queries and high-intent commercial queries.',
  },
  {
    question: 'Do SEO agencies usually manage PPC as well?',
    answer:
      'Rarely. Most SEO agencies focus purely on organic and refer paid work to a separate agency. The problem with that arrangement is that neither agency has full visibility into both channels, so the integration never happens. We manage both specifically because the compounding effect requires a single team with shared data and shared strategy. If you already have a PPC agency you are happy with, we can work in a coordination role instead.',
  },
  {
    question: 'What is the risk of bidding on keywords where we already rank organically?',
    answer:
      'The risk is wasted spend without incremental return. If you rank number one organically for a keyword and you are also running paid, research shows you capture most of the combined clicks anyway. The question is whether the paid portion adds enough additional clicks to justify the cost. For branded terms, the answer is almost always yes because the incremental cost is very low. For informational queries where you rank number one, paid usually does not add enough to justify the cost.',
  },
  {
    question: 'How do you use paid data to improve organic content strategy?',
    answer:
      'Three ways. First, ad copy A/B testing reveals which language converts for specific queries, and that language feeds into organic title tags and meta descriptions. Second, conversion rate data from paid landing pages shows which offers and formats convert, informing organic content structure. Third, paid campaigns on candidate organic keywords generate conversion data in 2-3 weeks, letting us validate whether a keyword is worth a 6-month organic content investment before committing.',
  },
  {
    question: 'Can you take over both channels if we currently have separate agencies?',
    answer:
      'Yes. We can run a parallel period where we audit both channels while existing agencies continue, identify the integration opportunities, and then transition both channels to unified management. The transition typically takes 60-90 days to execute cleanly without disrupting live campaigns. We handle the off-boarding from previous agencies as part of our onboarding process.',
  },
]

/* -------------------------------------------------------------------------- */
/* Process Section */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>How We Work</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages to a unified paid and organic system.
          </Heading>
        </div>
        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`py-8 ${index < processSteps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* FAQ Section */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="Paid + organic integration: frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function PaidSearchSEOIntegrationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/paid-media/paid-search-seo-integration',
          name: 'Paid Search and SEO Integration',
          description:
            'Combined PPC and SEO strategy for SERP dominance. Shared keyword matrix, unified BigQuery reporting, ad copy to organic meta description transfer, and branded PPC defence.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: { '@type': 'Country', name: 'Worldwide' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesGridData} />
      <ProcessSection />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Stop Running Two Separate Strategies"
        heading="One team. One data layer. Both channels compounding."
        lead="The 18.06% CTR number is real. But it only materialises when both channels share data and strategy."
        benefits={[
          'Free SERP audit showing paid vs organic overlap',
          'Keyword matrix identifying wasted spend immediately',
          'Unified reporting setup within the first 2 weeks',
        ]}
        submitText="Build a Combined Strategy"
      />
      <Footer />
    </main>
  )
}
