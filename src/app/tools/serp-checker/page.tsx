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
  title: 'SERP Checker -- Top 10 Results, Featured Snippets, PAA, Local Pack | TheProjectSEO',
  description:
    'Check what actually ranks for any keyword. See the top 10 results, featured snippets, People Also Ask, local pack, ad count, and all active SERP features.',
  alternates: {
    canonical: '/tools/serp-checker',
  },
  openGraph: {
    title: 'SERP Checker | TheProjectSEO',
    description: 'See top 10 results, featured snippets, PAA, local pack, and SERP features for any keyword.',
    url: 'https://theprojectseo.com/tools/serp-checker',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

const features = [
  {
    title: 'Top 10 organic results',
    description: 'The full top 10 with URL, title, estimated traffic, Domain Rating, and referring domains. See who you are actually competing against.',
  },
  {
    title: 'Featured snippet',
    description: 'Whether a featured snippet exists, what format it is (paragraph, list, table), and which page holds it. This is position zero.',
  },
  {
    title: 'People Also Ask',
    description: 'All PAA questions triggered by the keyword. Each one is a content opportunity where you can capture additional SERP real estate.',
  },
  {
    title: 'Local pack',
    description: 'Whether a map pack appears and how many listings it contains. If present, your content strategy needs a local angle.',
  },
  {
    title: 'Ad count and positions',
    description: 'Number of paid ads above and below organic results. High ad count confirms commercial intent. It also signals organic competition from paid-heavy categories.',
  },
  {
    title: 'Other SERP features',
    description: 'Image packs, video carousels, shopping results, knowledge panels, site links, and AI overviews. Each feature that appears reduces organic click share.',
  },
]

export default function SerpCheckerPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'SERP Checker',
          description:
            'Check what ranks for any keyword: top 10 results, featured snippets, People Also Ask, local pack, ad count, and all SERP features.',
          applicationCategory: 'SEO Tool',
          operatingSystem: 'Web',
          url: 'https://theprojectseo.com/tools/serp-checker',
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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">SERP Checker</span>
            </div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">Early Access</span>
              <span className="font-mono text-xs uppercase tracking-wider text-white bg-ink px-2 py-0.5">In Development</span>
            </div>
            <h1 className="font-display text-[clamp(40px,5.5vw,80px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              SERP Checker
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              See the full picture for any keyword: who ranks, what SERP features appear, how many ads
              run, and whether a featured snippet is up for grabs. Your content strategy starts here.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-20">
        <Container>
          <div className="mb-12">
            <Subheading as="h2">What It Shows</Subheading>
            <Heading as="h2" className="mt-2 max-w-2xl">
              Six SERP layers that define what you are competing against.
            </Heading>
            <Lead className="mt-4">
              A keyword with 10,000 monthly searches sounds attractive. But if it has a featured snippet,
              5 ads, an image pack, and a local pack, organic position 1 might get 8% of clicks. The
              SERP checker quantifies that before you commit to a content investment.
            </Lead>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="bg-paper p-8">
                <h3 className="font-heading text-base font-semibold text-ink mb-3">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="bg-ink py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              Why SERP Analysis Matters Before You Write
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-semibold text-white leading-tight mb-8">
              The SERP tells you what format to write before keyword volume does.
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-white/70">
              <p>
                Content that ranks is not just well-written and keyword-optimized. It matches what Google
                already rewards for that query. If the top 10 results are all long-form guides, a short
                product page will not compete. If a video carousel dominates, text content is fighting
                for below-the-fold visibility.
              </p>
              <p>
                SERP analysis tells you the format (guide, listicle, product page, tool), the depth
                (word count signal), and the features to target (featured snippet format, PAA angles).
                Skipping this step is the most common reason good content fails to rank.
              </p>
              <p>
                Every piece of content we create starts with a SERP analysis. The checker makes that
                process fast and repeatable.
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
                Get notified when the SERP Checker launches.
              </Heading>
              <Lead className="mt-6">
                We are building the SERP retrieval layer and feature extraction model. Early access
                users will get 50 free SERP checks when it launches.
              </Lead>
              <div className="mt-8 space-y-4">
                {[
                  'Full top 10 with DR, traffic, and backlinks per page',
                  'Featured snippet detection and format classification',
                  'All PAA questions extracted and grouped',
                  'Local pack, image pack, video carousel detection',
                  'Ad density score and click share estimate',
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
              { href: '/tools/keyword-research-tool', name: 'Keyword Research Tool', desc: 'Volume, difficulty, CPC, and keyword ideas.' },
              { href: '/tools/content-brief-generator', name: 'Content Brief Generator', desc: 'Turn a keyword into a full content brief.' },
              { href: '/tools/readability-checker', name: 'Readability Checker', desc: 'Score your content across five readability indexes.' },
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
