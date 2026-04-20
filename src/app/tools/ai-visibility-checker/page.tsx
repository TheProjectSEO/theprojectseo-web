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
  title: 'AI Visibility Checker — See If Your Brand Appears in ChatGPT, Perplexity, Gemini | TheProjectSEO',
  description:
    'Check how visible your brand is in AI-generated answers from ChatGPT, Perplexity, and Google Gemini. Request early access to the AI Visibility Checker.',
  alternates: {
    canonical: '/tools/ai-visibility-checker',
  },
  openGraph: {
    title: 'AI Visibility Checker | TheProjectSEO',
    description:
      'See if your brand appears in AI-generated answers from ChatGPT, Perplexity, and Gemini. Early access available.',
    url: 'https://theprojectseo.com/tools/ai-visibility-checker',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

const platforms = [
  {
    name: 'ChatGPT',
    description:
      'OpenAI\'s conversational AI. Used by 180M+ people monthly. Brand mentions here drive direct consideration during research phases.',
  },
  {
    name: 'Perplexity',
    description:
      'AI search engine that cites sources directly. Growing rapidly with technically sophisticated audiences. Citation here builds authority signals.',
  },
  {
    name: 'Google AI Overviews',
    description:
      'Google\'s AI-generated summaries at the top of search results. Appears for ~15% of queries. Displacing traditional position 1 visibility.',
  },
  {
    name: 'Claude',
    description:
      'Anthropic\'s AI assistant. Growing enterprise and developer adoption. Frequently used for vendor research and technical buying decisions.',
  },
]

const signals = [
  {
    title: 'Citation frequency',
    description: 'How often your domain is cited as a source in AI-generated responses.',
  },
  {
    title: 'Brand mention rate',
    description: 'How often your brand name appears in answers, even without a link.',
  },
  {
    title: 'Topic association',
    description: 'Whether LLMs associate your brand with the categories and problems you solve.',
  },
  {
    title: 'Sentiment in answers',
    description: 'How your brand is described when AI models do mention it.',
  },
  {
    title: 'Competitor share',
    description: 'How your AI visibility compares against named competitors for the same queries.',
  },
  {
    title: 'Query coverage',
    description: 'Which buyer-intent queries trigger mentions of your brand vs. which do not.',
  },
]

export default function AiVisibilityCheckerPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'AI Visibility Checker',
          description:
            'Check how visible your brand is in AI-generated answers from ChatGPT, Perplexity, Gemini, and Claude.',
          applicationCategory: 'SEO Tool',
          operatingSystem: 'Web',
          url: 'https://theprojectseo.com/tools/ai-visibility-checker',
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

      {/* Hero */}
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/tools"
                className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent"
              >
                Tools
              </Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">
                AI Visibility Checker
              </span>
            </div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                Early Access
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-white bg-ink px-2 py-0.5">
                In Development
              </span>
            </div>
            <h1 className="font-display text-[clamp(40px,5.5vw,80px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              AI Visibility Checker
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              See if your brand is being cited in ChatGPT, Perplexity, Google AI Overviews, and
              Claude. Most brands have zero AI visibility. Knowing your baseline is the first step
              to fixing it.
            </p>
          </div>
        </Container>
      </div>

      {/* What it measures */}
      <div className="bg-paper py-20">
        <Container>
          <div className="mb-12">
            <Subheading as="h2">What It Measures</Subheading>
            <Heading as="h2" className="mt-2 max-w-2xl">
              Six signals that determine your AI search presence.
            </Heading>
            <Lead className="mt-4">
              AI visibility is not a single number. It is a combination of citation rate, brand
              association, topic coverage, and competitive share across each platform.
            </Lead>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
            {signals.map((signal) => (
              <div key={signal.title} className="bg-paper p-8">
                <h3 className="font-heading text-base font-semibold text-ink mb-3">
                  {signal.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate">{signal.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Platforms */}
      <div className="bg-cream py-20">
        <Container>
          <div className="mb-12">
            <Subheading as="h2">Platforms Covered</Subheading>
            <Heading as="h2" className="mt-2">
              Four AI platforms. Four separate visibility scores.
            </Heading>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-paper p-8">
                <h3 className="font-heading text-lg font-semibold text-ink mb-3">
                  {platform.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate">{platform.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Why it matters */}
      <div className="bg-ink py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              Why This Matters
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-semibold text-white leading-tight mb-8">
              AI answer engines are changing how buyers research.
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-white/70">
              <p>
                Google AI Overviews now appear on roughly 15% of all search queries. Perplexity
                serves millions of research-intent users daily. ChatGPT is used for product
                comparisons and vendor shortlisting. These platforms do not rank pages. They cite
                sources, mention brands, and shape buyer perception before a single organic click
                happens.
              </p>
              <p>
                A brand with strong traditional SEO rankings but zero AI visibility is losing
                ground in the research phase. The AI Visibility Checker quantifies that gap so you
                can act on it.
              </p>
              <p>
                This is what we call AEO — Answer Engine Optimization. We build it into every SEO
                engagement. The checker is the diagnostic layer.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Early access form */}
      <div className="bg-cream py-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div className="lg:sticky lg:top-8">
              <Subheading>Early Access</Subheading>
              <Heading as="h2" className="mt-2">
                The checker is in development. Get notified first.
              </Heading>
              <Lead className="mt-6">
                We are building the query engine, LLM-probing layer, and scoring model now. Early
                access users will get a free baseline visibility audit when it launches.
              </Lead>
              <div className="mt-8 space-y-4">
                {[
                  'Free baseline visibility report across 4 AI platforms',
                  'Competitor AI visibility comparison',
                  'Actionable AEO recommendations based on your score',
                  'Monthly re-check to track improvement',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-base text-stone">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <LeadForm
              variant="compact"
              submitText="Request Early Access"
            />
          </div>
        </Container>
      </div>

      {/* Related */}
      <div className="bg-paper py-16 border-t border-border">
        <Container>
          <div className="text-center mb-10">
            <Subheading>Related</Subheading>
            <h2 className="font-heading text-2xl font-semibold text-ink mt-2">
              More from the tools hub
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-3">
            {[
              { href: '/tools/schema-generator', name: 'Schema Generator', desc: 'JSON-LD for Organization, Service, FAQ, HowTo, LocalBusiness.' },
              { href: '/tools/meta-tag-generator', name: 'Meta Tag Generator', desc: 'Title, description, OG tags, Twitter Card, and canonical.' },
              { href: '/tools/seo-roi-calculator', name: 'SEO ROI Calculator', desc: 'Forecast organic revenue from traffic growth.' },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-heading text-base font-semibold text-ink group-hover:text-accent mb-2">
                  {tool.name}
                </h3>
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
