import Link from 'next/link'
import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { LeadForm } from '@/components/lead-form'
import { JsonLd } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Keyword Difficulty Checker — Free Early Access | TheProjectSEO',
  description: 'Measure keyword difficulty with a proprietary score combining Ahrefs KD, SERP feature saturation, and content depth. Request early access.',
  alternates: { canonical: '/tools/keyword-difficulty-checker' },
}

export default function KeywordDifficultyCheckerPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Keyword Difficulty Checker',
        applicationCategory: 'SEOTool',
        operatingSystem: 'Web',
        url: 'https://theprojectseo.com/tools/keyword-difficulty-checker',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      }} />

      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/tools" className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent">Tools</Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Keyword Difficulty Checker</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Early Access</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">Keyword Difficulty Checker</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">Most KD scores are misleading because they only measure backlink strength of the top 10. We combine Ahrefs KD, SERP feature saturation (featured snippets, PAA, local pack), content depth, and brand concentration into one honest difficulty signal.</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-ink mb-6">Why standard KD scores are wrong</h2>
              <div className="space-y-4 text-sm leading-relaxed text-slate">
                <p>Ahrefs KD, SEMrush KD, and Moz Keyword Difficulty all look at one variable: how many backlinks the top 10 results have. They miss four things that actually determine whether you can rank:</p>
                <ul className="list-disc list-outside pl-5 space-y-2">
                  <li><strong className="text-ink">SERP feature saturation.</strong> If Google shows a Featured Snippet, PAA, Knowledge Panel, and local pack for your keyword, the organic blue links start at position 5 at best. KD 20 with four SERP features is harder than KD 60 with none.</li>
                  <li><strong className="text-ink">Content depth of top 10.</strong> Ten 3,000-word guides with original research are harder to outrank than ten 500-word thin pages, even at equal backlink counts.</li>
                  <li><strong className="text-ink">Brand concentration.</strong> If the top 10 are all Wikipedia, Forbes, Wirecutter, and Reddit, you are competing against domain authority a new site cannot match. Same KD against 10 smaller domains is winnable.</li>
                  <li><strong className="text-ink">Commercial intent mismatch.</strong> A commercial query where 6 of the top 10 are informational shows Google is not serving the transactional buyer. Winnable if you provide the commercial answer.</li>
                </ul>
                <p>Our checker combines all four into a single score from 1-100. It is the KD we use internally before taking on a new engagement, because it predicts real ranking outcomes rather than just backlink counts.</p>
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-3">What you get in the report</h3>
              <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-slate">
                <li>Composite difficulty score (1-100)</li>
                <li>SERP feature breakdown with visibility impact</li>
                <li>Top 10 content depth analysis</li>
                <li>Brand concentration signal</li>
                <li>Recommended content depth and link targets to compete</li>
                <li>Estimated months to rank on page 1 given your current domain authority</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-ink mb-6">Request early access</h2>
              <LeadForm variant="compact" submitText="Request Early Access" />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
