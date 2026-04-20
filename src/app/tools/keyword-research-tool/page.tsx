import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { LeadForm } from '@/components/lead-form'

export const metadata: Metadata = {
  title: 'Keyword Research Tool -- Volume, Difficulty, CPC, SERP Features | TheProjectSEO',
  description:
    'Find keyword ideas with search volume estimates, keyword difficulty scores, SERP features, CPC data, and related terms. Request early access to the keyword research tool.',
  alternates: {
    canonical: '/tools/keyword-research-tool',
  },
  openGraph: {
    title: 'Keyword Research Tool | TheProjectSEO',
    description: 'Keyword ideas, volume, difficulty, CPC, and SERP features. Early access available.',
    url: 'https://theprojectseo.com/tools/keyword-research-tool',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

const deliverables = [
  {
    title: 'Keyword ideas',
    description:
      'Hundreds of keyword ideas generated from your seed term: questions, modifiers, related topics, and long-tail variations your competitors are probably missing.',
  },
  {
    title: 'Search volume estimates',
    description:
      'Monthly search volume based on real clickstream data, not Google\'s sampled Keyword Planner numbers. Broken down by country where relevant.',
  },
  {
    title: 'Keyword difficulty score',
    description:
      'A 0-100 score based on the Domain Rating and backlink counts of the top 10 ranking pages. Tells you how many links you need to realistically compete.',
  },
  {
    title: 'SERP features',
    description:
      'Which SERP features appear for each keyword: featured snippet, People Also Ask, image pack, local pack, video carousel, shopping ads. Shapes your content format.',
  },
  {
    title: 'CPC data',
    description:
      'Cost-per-click from Google Ads auction data. High CPC = high commercial intent. Use this to prioritize keywords where organic traffic has real revenue value.',
  },
  {
    title: 'Related terms and clusters',
    description:
      'Semantically related keywords grouped by topic cluster. Helps you plan content at the cluster level, not just the individual keyword level.',
  },
]

export default function KeywordResearchToolPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Keyword Research Tool',
          description:
            'Find keyword ideas with search volume, difficulty scores, SERP features, CPC data, and related terms.',
          applicationCategory: 'SEO Tool',
          operatingSystem: 'Web',
          url: 'https://theprojectseo.com/tools/keyword-research-tool',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        }}
      />

      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/tools" className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent">
                Tools
              </Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Keyword Research Tool</span>
            </div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">Early Access</span>
              <span className="font-mono text-xs uppercase tracking-wider text-white bg-ink px-2 py-0.5">In Development</span>
            </div>
            <h1 className="font-display text-[clamp(40px,5.5vw,80px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              Keyword Research Tool
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              Enter a seed keyword and get hundreds of ideas with volume, difficulty, CPC, and SERP features.
              Everything you need to build a content plan that targets terms you can actually rank for.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-20">
        <Container>
          <div className="mb-12">
            <Subheading as="h2">What You Get</Subheading>
            <Heading as="h2" className="mt-2 max-w-2xl">
              Six data points per keyword, not just volume.
            </Heading>
            <Lead className="mt-4">
              Volume alone tells you nothing. A keyword with 5,000 searches per month and KD 80 is
              worthless if you have a DR 20 site. This tool gives you the full picture to make the right
              call.
            </Lead>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div key={item.title} className="bg-paper p-8">
                <h3 className="font-heading text-base font-semibold text-ink mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-ink py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              How We Think About Keyword Research
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-semibold text-white leading-tight mb-8">
              Target keywords you can rank for, not just keywords you want to rank for.
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-white/70">
              <p>
                Most keyword research starts with aspirational terms and works backwards. The result is
                a content plan full of DR 70+ required keywords that a site with DR 30 has zero chance
                of ranking for in the next 12 months. We do the opposite.
              </p>
              <p>
                Start with your current Domain Rating. Find every keyword where the top 10 pages have
                an average DR below yours plus 10 points. That is your realistic target set. Within that
                set, prioritize by commercial intent (CPC as a proxy) and SERP feature opportunity.
              </p>
              <p>
                The keyword research tool automates this filter. You get a shortlist of winnable keywords
                with real traffic potential, not a vanity list of high-volume terms you cannot touch.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-cream py-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div className="lg:sticky lg:top-8">
              <Subheading>Early Access</Subheading>
              <Heading as="h2" className="mt-2">
                Join the waitlist. Get a free keyword report.
              </Heading>
              <Lead className="mt-6">
                Early access users will receive a free 50-keyword research report for their site when
                the tool launches. We will also share the methodology we use for client engagements.
              </Lead>
              <div className="mt-8 space-y-4">
                {[
                  'Unlimited keyword ideas from any seed term',
                  'Volume, difficulty, CPC per keyword',
                  'SERP features map for each term',
                  'Topic cluster grouping for content planning',
                  'Export to CSV for use in any planning tool',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-base text-stone">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <LeadForm variant="compact" submitText="Join the Waitlist" />
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16 border-t border-border">
        <Container>
          <div className="text-center mb-10">
            <Subheading>Related Tools</Subheading>
            <h2 className="font-heading text-2xl font-semibold text-ink mt-2">More from the tools hub</h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-3">
            {[
              { href: '/tools/keyword-difficulty-checker', name: 'Keyword Difficulty Checker', desc: 'Understand the competitive bar for any keyword.' },
              { href: '/tools/serp-checker', name: 'SERP Checker', desc: 'See what actually ranks and which features appear.' },
              { href: '/tools/content-brief-generator', name: 'Content Brief Generator', desc: 'Turn a keyword into a complete content brief.' },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-heading text-base font-semibold text-ink group-hover:text-accent mb-2">{tool.name}</h3>
                <p className="text-sm text-slate">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
