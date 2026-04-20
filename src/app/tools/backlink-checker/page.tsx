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
  title: 'Backlink Checker -- Analyze Referring Domains, DR Distribution, Anchor Text | TheProjectSEO',
  description:
    'Check your backlink profile: referring domains count, Domain Rating distribution, anchor text breakdown, recent link velocity, and toxic link flags. Request early access.',
  alternates: {
    canonical: '/tools/backlink-checker',
  },
  openGraph: {
    title: 'Backlink Checker | TheProjectSEO',
    description: 'Analyze your backlink profile. Referring domains, DR distribution, anchor text, and toxic link detection.',
    url: 'https://theprojectseo.com/tools/backlink-checker',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

const metrics = [
  {
    title: 'Referring domains count',
    description:
      'Total unique domains linking to your site. This is the primary signal Google uses to evaluate off-page authority. Raw backlink count matters far less.',
  },
  {
    title: 'Domain Rating distribution',
    description:
      'How many of your referring domains fall into DR 0-20, 20-50, 50-70, and 70+ buckets. High-DR links from trusted sites carry disproportionate ranking weight.',
  },
  {
    title: 'Anchor text breakdown',
    description:
      'Ratio of branded, exact-match, partial-match, generic, and naked URL anchors. Over-optimized anchor profiles are a manual penalty risk.',
  },
  {
    title: 'Link velocity',
    description:
      'New and lost links per week over the last 90 days. A sudden spike or drop is often the first signal of a penalty, algorithm impact, or competitor attack.',
  },
  {
    title: 'Toxic link flags',
    description:
      'Links from known spam networks, PBNs, and low-quality directories. Identifying these lets you decide whether to disavow before Google acts on them.',
  },
  {
    title: 'Top linked pages',
    description:
      'Which pages on your site attract the most links. This shows where your organic authority concentrates and where internal linking should push equity.',
  },
]

export default function BacklinkCheckerPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Backlink Checker',
          description:
            'Analyze your backlink profile: referring domains, Domain Rating distribution, anchor text, link velocity, and toxic link detection.',
          applicationCategory: 'SEO Tool',
          operatingSystem: 'Web',
          url: 'https://theprojectseo.com/tools/backlink-checker',
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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Backlink Checker</span>
            </div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">Early Access</span>
              <span className="font-mono text-xs uppercase tracking-wider text-white bg-ink px-2 py-0.5">In Development</span>
            </div>
            <h1 className="font-display text-[clamp(40px,5.5vw,80px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              Backlink Checker
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              See every domain linking to your site, how authoritative they are, what anchor text they use,
              and which links are putting you at risk. The full backlink picture, in one place.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-20">
        <Container>
          <div className="mb-12">
            <Subheading as="h2">What It Measures</Subheading>
            <Heading as="h2" className="mt-2 max-w-2xl">
              Six backlink signals that define your off-page authority.
            </Heading>
            <Lead className="mt-4">
              Most backlink tools show a raw number. This checker contextualizes that number with quality
              signals, velocity trends, and risk flags that actually inform decisions.
            </Lead>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.title} className="bg-paper p-8">
                <h3 className="font-heading text-base font-semibold text-ink mb-3">{metric.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{metric.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-ink py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              Why Backlinks Still Matter
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-semibold text-white leading-tight mb-8">
              Links remain the strongest off-page ranking signal.
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-white/70">
              <p>
                Google has confirmed links as one of its top three ranking signals consistently since 2016.
                While the weight of any individual link has changed with the Helpful Content updates, the
                total pattern of who links to you and why still determines whether you can compete for
                competitive keywords.
              </p>
              <p>
                The problem is that most site owners only look at total backlink count. That number is
                nearly meaningless without knowing the DR distribution, the anchor text spread, and the
                velocity trend. A site with 200 high-quality referring domains consistently outranks a
                site with 2,000 low-quality links.
              </p>
              <p>
                This checker gives you the breakdown. The early access version will pull from a live
                backlink index updated daily, with the same data sources we use in client audits.
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
                Get first access when it launches.
              </Heading>
              <Lead className="mt-6">
                We are building the backlink index integration and scoring model now. Early access users
                get a free backlink audit report when the tool goes live.
              </Lead>
              <div className="mt-8 space-y-4">
                {[
                  'Full referring domain count and DR distribution',
                  'Anchor text breakdown with over-optimization risk flag',
                  '90-day link velocity chart (new and lost)',
                  'Toxic link detection and disavow file export',
                  'Top linked pages and equity distribution map',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-base text-stone">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <LeadForm variant="compact" submitText="Request Early Access" />
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
              { href: '/tools/seo-audit-tool', name: 'SEO Audit Tool', desc: 'On-page audit: title, meta, headings, schema, and more.' },
              { href: '/tools/keyword-difficulty-checker', name: 'Keyword Difficulty Checker', desc: 'Understand how hard it is to rank for any keyword.' },
              { href: '/tools/seo-roi-calculator', name: 'SEO ROI Calculator', desc: 'Forecast organic revenue from traffic growth.' },
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
