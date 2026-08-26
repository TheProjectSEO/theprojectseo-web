import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/button'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { EvidencePlaceholder } from '@/components/evidence-placeholder'
import { JsonLd } from '@/components/json-ld'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import { CTAFormSection } from '@/components/service-page-sections'
import { Search, Tag, Wrench, FileText, Link2, Sparkles } from 'lucide-react'

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'SEO for Shopify: The 2026 Guide (DIY + Done-for-You) | TheProjectSEO',
  description:
    'Rank your Shopify store on Google and in AI search. Complete SEO guide with checklist, real costs, and a done-for-you option from TheProjectSEO.',
  alternates: { canonical: 'https://theprojectseo.com/seo-for-shopify' },
  openGraph: {
    title: 'SEO for Shopify: The Complete 2026 Guide (and When to Get Help)',
    description:
      'The full DIY framework for Shopify SEO, an honest answer on costs, and a clear line for when hiring help beats doing it yourself.',
    url: 'https://theprojectseo.com/seo-for-shopify',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO for Shopify: The Complete 2026 Guide',
    description:
      'Keyword-mapped pages, the technical fixes Shopify does not automate, content, links, and AI search visibility.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const steps = [
  { id: 'step-1', icon: Search, title: 'Keyword research for Shopify stores' },
  { id: 'step-2', icon: Tag, title: 'On-page SEO: products, collections, metadata' },
  { id: 'step-3', icon: Wrench, title: 'Technical SEO on Shopify' },
  { id: 'step-4', icon: FileText, title: 'Content and blogging' },
  { id: 'step-5', icon: Link2, title: 'Link building' },
  { id: 'step-6', icon: Sparkles, title: 'Getting cited in AI search' },
]

const shopifyHandles = [
  'Canonical tags on products and collections',
  'sitemap.xml generation and updates',
  'CDN delivery and WebP image compression',
  'Mobile-responsive themes',
  'SSL and clean HTML from standard themes',
  'Basic structured data in free themes',
]

const youHandle = [
  'Keyword research and page mapping',
  'Titles, meta descriptions, unique product copy',
  'Site architecture and internal linking',
  'Content and blogging',
  'Link building',
  'AI search visibility (AEO)',
]

const appsAutomate = [
  'Bulk meta title and description templates',
  'Alt text generation',
  'Broken link and 404 scans',
  'Schema injection',
  'Image compression',
]

const appsCannot = [
  'Keyword-to-page mapping',
  'Site architecture decisions',
  'Unique product copy that converts',
  'Link building',
  'AI search strategy',
]

const stageDecision = [
  { stage: 'Pre-launch / validating', action: 'DIY. Follow Steps 1–2 here, spend nothing on apps yet.' },
  { stage: 'Early sales, founder-run', action: 'DIY plus one utility app. Your hours are the constraint.' },
  { stage: 'Growing, organic matters', action: 'Freelancer or agency audit; execute internally.' },
  { stage: 'Scaling, organic is a channel', action: 'Agency retainer. Architecture, links, and AEO now need specialists.' },
]

const faqData = [
  {
    question: 'How do I SEO my Shopify store?',
    answer:
      'Six steps: research keywords and map them to collection, product, and blog pages. Write unique titles and meta descriptions. Fix what Shopify does not automate, including architecture, internal links, and duplicate collection URLs. Publish content that answers buyer questions. Build links from suppliers and press. Then structure your answers so AI search can cite you.',
  },
  {
    question: 'Can I do Shopify SEO myself?',
    answer:
      'Yes. Shopify automates most of the technical layer, so a store owner can handle keyword research and metadata alone, and write the content too. Three jobs usually justify hiring help: site architecture at scale, link building, and AI search optimization. If organic revenue matters to your store, those three decide whether you plateau.',
  },
  {
    question: 'Which SEO tool is best for Shopify?',
    answer:
      'There is no single best tool. SEO apps can help with tasks such as metadata, alt text, broken-link scans, structured data, or image workflows, but their features and prices change. No app can choose your commercial page architecture, validate product facts, secure editorial authority, or own implementation decisions. Audit the need before adding another app.',
  },
  {
    question: 'How much does Shopify SEO cost?',
    answer:
      'DIY cost includes the owner or team’s time plus any theme, development, research, content, data, or app expense. External pricing scales with site size, markets, competition, implementation, content, authority, analytics, and AI-search measurement. TheProjectSEO’s ongoing engagements start at $3,500 per month; final Shopify scope is custom.',
  },
  {
    question: 'Does Yoast SEO work on Shopify?',
    answer:
      'Yes, as a paid app built for Shopify, not the WordPress plugin. It adds metadata templating, schema output, and readability checks. Shopify already covers part of that natively: canonicals and sitemaps are built in, and title and description fields are editable without an app. Yoast is a convenience layer, not a requirement, and it will not move rankings by itself.',
  },
  {
    question: 'How do I make my Shopify store show up in ChatGPT and AI search?',
    answer:
      'Publish accurate, useful product and collection information; keep Product and Offer structured data consistent with visible price and availability; establish clear brand and product entities; earn corroboration from relevant external sources; and measure representative prompts, citations, sources, factual accuracy, and referral traffic separately. Review Shopify Catalog and robots.txt.liquid controls before changing crawler access. No setting guarantees a ChatGPT mention or citation.',
  },
  {
    question: 'How long does Shopify SEO take to show results?',
    answer:
      'Plan in quarters, not weeks. Metadata and technical fixes get recrawled fast, but rankings compound with content, internal links, and referring domains. A new store on a fresh domain moves slower than an established one. Judge progress by impressions and indexed-page growth first, then clicks, then revenue.',
  },
  {
    question: 'Is Shopify or WooCommerce better for SEO?',
    answer:
      'WooCommerce gives you full control: URL structure, robots.txt, server, everything is editable, and everything is your responsibility. Shopify trades that control for reliability: hosting, speed, and technical basics are handled, with URL and robots constraints. Well-executed stores rank on both. The platform matters less than the execution.',
  },
]

/* -------------------------------------------------------------------------- */
/*  Small presentational helpers (site idioms)                                 */
/* -------------------------------------------------------------------------- */

function TwoColTable({
  leftHead,
  rightHead,
  left,
  right,
}: {
  leftHead: string
  rightHead: string
  left: string[]
  right: string[]
}) {
  const rows = Math.max(left.length, right.length)
  return (
    <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-border-strong bg-border-strong md:grid-cols-2">
      <div className="bg-cream px-6 py-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ash">{leftHead}</p>
      </div>
      <div className="bg-accent-soft px-6 py-4">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">{rightHead}</p>
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={`row-${i}`} className="contents">
          <div className="bg-paper px-6 py-3 text-sm text-slate">{left[i] ?? ''}</div>
          <div className="bg-paper px-6 py-3 text-sm font-medium text-ink">{right[i] ?? ''}</div>
        </div>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Sections                                                                   */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <Container className="mt-24 lg:mt-32">
      <p className="mb-6 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">
        Shopify SEO — DIY + Done-for-You
      </p>
      <h1 className="max-w-4xl font-display text-[clamp(40px,5.5vw,84px)] font-medium leading-[0.98] tracking-[-0.02em] text-ink">
        SEO for Shopify: the complete 2026 guide <em className="text-accent not-italic">and when to get help</em>
      </h1>
      <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
        Shopify SEO is the work of making a Shopify store rank in Google and get cited in AI
        search: keyword-mapped collection and product pages, clean metadata, the technical fixes
        the platform does not automate, plus content and links. Shopify handles much of the
        technical layer for you. The rest is your job, and it is the part that decides rankings.
      </p>
      <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
        <Button href="/contact">Request a Shopify SEO proposal</Button>
        <Button variant="ghost" href="#diy-vs-hire">
          DIY or hire? Read first
        </Button>
      </div>
      <div className="mt-8 text-sm text-ash">
        <span className="font-medium text-accent">—</span> Full DIY framework
        <span className="mx-3">|</span>
        <span className="font-medium text-accent">—</span> Honest cost breakdown
        <span className="mx-3">|</span>
        <span className="font-medium text-accent">—</span> AI-search (AEO) built in
      </div>
    </Container>
  )
}

function QuickAnswer() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl border-l-4 border-accent bg-cream px-8 py-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          Quick answer
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold text-ink">
          How do I SEO my Shopify store?
        </h2>
        <p className="mt-4 leading-relaxed text-stone">
          Six steps. Research keywords and map them to collection, product, and blog pages. Write
          unique titles and meta descriptions. Fix what Shopify does not automate: architecture,
          internal links, duplicate collection URLs. Publish content that answers buyer questions.
          Build links from suppliers and press. Then structure answers so AI search can cite you.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {steps.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex items-center gap-3 border border-border bg-paper px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
            >
              <span className="flex size-8 shrink-0 items-center justify-center bg-accent-soft font-mono text-sm font-semibold text-accent">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-ink">{s.title}</span>
            </a>
          ))}
        </div>
      </div>
    </Container>
  )
}

function ShopifyDoesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mb-4 text-center">
          <Subheading>What Shopify does — and doesn&apos;t</Subheading>
          <Heading as="h2" className="mt-2">
            The platform gives every store the same head start.
          </Heading>
        </div>
        <Lead className="mx-auto max-w-3xl text-center">
          Shopify automates a large share of technical SEO. Everything that separates ranked stores
          from invisible ones sits in the right-hand column. Google ranks web pages, not platforms.
        </Lead>
        <TwoColTable
          leftHead="Shopify handles automatically"
          rightHead="You handle"
          left={shopifyHandles}
          right={youHandle}
        />
        <div className="mt-8 border border-border-strong bg-cream p-6">
          <p className="text-sm leading-relaxed text-stone">
            <span className="font-semibold text-ink">The trap:</span> because the left column works
            out of the box, store owners assume SEO is done. Shopify provides every store with the
            same left column, so search engines cannot use it to tell one website from another. What
            moves a store up is the right column: relevant content, deliberate internal links, and
            backlinks from other websites.
          </p>
        </div>
      </Container>
    </div>
  )
}

function StepsSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Subheading>The six-step framework</Subheading>
          <Heading as="h2" className="mt-2">
            The DIY playbook, in order.
          </Heading>

          {/* Step 1 */}
          <div id="step-1" className="mt-14 scroll-mt-24">
            <StepHead n={1} title="Keyword research for Shopify stores" />
            <p className="mt-4 leading-relaxed text-stone">
              The Shopify-specific move is not finding keywords. It is mapping each keyword to the
              right page type. Commercial short-tail terms belong on collection pages. Long-tail
              modified terms belong on product pages. Informational questions belong on the blog, so
              they earn links and assist sales without cannibalizing your commercial pages.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              Validate demand with volume data before building pages, favor high-intent terms over
              big numbers, and check margins before scaling a product category so the traffic you win
              is worth having. Build the keyword map before touching the store.
            </p>
          </div>

          {/* Step 2 */}
          <div id="step-2" className="mt-14 scroll-mt-24">
            <StepHead n={2} title="On-page SEO: products, collections, metadata" />
            <ul className="mt-4 space-y-3">
              {[
                'Descriptive, concise title tags that distinguish the product or collection and remain useful when Google rewrites a title link.',
                'Specific meta descriptions that summarize the visible offer and help a shopper decide whether the page matches the query.',
                'Useful product descriptions based on approved product facts, questions, differentiators, limitations, delivery, returns, and care—not undifferentiated manufacturer copy.',
                'Alt text on every product image, written to describe the image for search engines and screen-reader users.',
                'Readable handles chosen before launch where practical; later changes require a tested redirect and internal-link update.',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-1 size-4 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-stone">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 leading-relaxed text-stone">
              Accurate Product and Offer structured data can make a page eligible for supported
              Google product experiences, but valid markup does not guarantee a rich result or
              AI-generated placement. The visible page, feed, structured data, price, currency,
              availability, shipping, returns, reviews, and variants should agree before release.
            </p>
          </div>

          {/* Step 3 */}
          <div id="step-3" className="mt-14 scroll-mt-24">
            <StepHead n={3} title="Technical SEO on Shopify" />
            <p className="mt-4 leading-relaxed text-stone">
              Site architecture first. Home links to collections, collections link to products, and
              important pages stay within a short, crawlable path from the homepage wherever
              practical. Your navigation menus are your
              internal linking system on Shopify, so structure them around your keyword map, not your
              org chart. A product linked from a relevant, high-traffic collection carries more
              authority than the same product buried six clicks deep.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              Then the basics that still get skipped: submit sitemap.xml in Search Console and use the
              coverage report monthly; compress images before upload even though Shopify serves WebP;
              and verify canonical, pagination, filter, internal-link, and duplicate URL behavior
              after theme or app changes. Architecture matters because one template or navigation
              decision can affect a large product and collection cohort at once.
            </p>
          </div>

          {/* Step 4 */}
          <div id="step-4" className="mt-14 scroll-mt-24">
            <StepHead n={4} title="Content and blogging for Shopify stores" />
            <p className="mt-4 leading-relaxed text-stone">
              Product and collection pages have a ceiling on what they can rank for. Content extends
              the store into every search a buyer runs before they know what to buy. Create posts from
              the informational queries in your Step 1 map, answer them better than the pages currently
              ranking, and let each post pass authority to the products it supports. Collection-page
              descriptions are often underused. Add the amount of useful copy the shopper and
              category require; a fixed word count does not make a collection page rank.
            </p>
          </div>

          {/* Step 5 */}
          <div id="step-5" className="mt-14 scroll-mt-24">
            <StepHead n={5} title="Link building for a Shopify store" />
            <p className="mt-4 leading-relaxed text-stone">
              Start with the links you already deserve: suppliers and manufacturers you stock usually
              maintain stockist or partner pages. Chase unlinked brand mentions next. Then digital PR:
              original data, a genuinely useful free tool, or a strong visual asset earns coverage
              generic outreach never will. Skip paid link networks entirely. Link acquisition is one
              of the three jobs that most often justifies hiring help, and it is a standing workstream
              in our Shopify SEO service.
            </p>
          </div>

          {/* Step 6 */}
          <div id="step-6" className="mt-14 scroll-mt-24">
            <StepHead n={6} title="Getting your store cited in AI search (AEO)" />
            <p className="mt-4 leading-relaxed text-stone">
              Give answer systems accurate, useful sources to retrieve: consistent product facts,
              complete visible descriptions, valid Product and Offer structured data, clear brand
              and product entities, direct answers where a shopper genuinely asks a question, and
              deliberate crawler or catalog controls. Benchmark
              where you stand with a repeatable{' '}
              <Link
                href="/services/ai-search/llm-visibility-tracking"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                LLM visibility tracking programme
              </Link>
              .
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              AI answers can change the discovery journey without producing a conventional click.
              Track Google performance, AI-answer observations, citations, source eligibility,
              factual accuracy, recognized referral traffic, and commercial outcomes as separate
              evidence layers. The example below explains the measurement framework without exposing
              unpublished client data.
            </p>

            <EvidencePlaceholder
              label="Shopify search and AI visibility evidence"
              description="Add an approved, privacy-safe view showing the Shopify store, reporting window, Google query or landing-page cohort, representative AI-answer cohort, and metric definitions."
            />

            <p className="mt-4 leading-relaxed text-stone">
              Shopify documents that product data shared through activated agentic storefronts can
              be distributed through Shopify Catalog independently of open-web robots.txt controls.
              Review catalog settings and direct crawler access separately, keep visible and
              machine-readable product facts aligned, and avoid treating a crawler rule as a
              recommendation guarantee. The full methodology lives in our{' '}
              <Link
                href="/services/ai-search"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                AI SEO work
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StepHead({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-center gap-4 border-b border-border-strong pb-4">
      <span className="flex size-11 shrink-0 items-center justify-center bg-ink font-display text-xl font-medium text-white">
        {n}
      </span>
      <h3 className="font-heading text-2xl font-semibold text-ink">{title}</h3>
    </div>
  )
}

function AppsSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Subheading>Apps and tools</Subheading>
          <Heading as="h2" className="mt-2">
            Which SEO apps are actually worth it?
          </Heading>
          <Lead className="mt-6">
            App counts, features, and prices change. Use an app only when it solves a documented
            requirement better than the theme, Shopify&apos;s native controls, or a maintainable
            implementation. No app can own your commercial architecture, product truth, editorial
            judgment, authority, or measurement decisions.
          </Lead>
        </div>
        <div className="mx-auto max-w-3xl">
          <TwoColTable
            leftHead="What apps automate well"
            rightHead="What no app can do"
            left={appsAutomate}
            right={appsCannot}
          />
        </div>
      </Container>
    </div>
  )
}

function CostSection() {
  return (
    <div id="diy-vs-hire" className="scroll-mt-24 bg-ink py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Subheading dark>Cost &amp; the DIY-vs-hire line</Subheading>
          <Heading as="h2" dark className="mt-2">
            How much does Shopify SEO cost, and should you do it yourself?
          </Heading>
          <p className="mt-6 leading-relaxed text-white/70">
            DIY cost includes your team&apos;s time plus any theme, development, content, research,
            data, or app expense. Paid help prices by scope, from a defined audit to an ongoing
            engagement covering architecture, products and collections, technical systems, content,
            authority, analytics, and AI-search measurement. TheProjectSEO&apos;s ongoing work starts
            at $3,500 per month; a Shopify proposal states what fits within the agreed capacity.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2">
            {stageDecision.map((row) => (
              <div key={row.stage} className="bg-ink p-6">
                <p className="font-heading text-base font-semibold text-white">{row.stage}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{row.action}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 leading-relaxed text-white/70">
            Before deciding either way, model the likely organic revenue against your margins,
            conversion rate, and the time required to reach meaningful traffic.
          </p>

          <div className="mt-10 border-l-4 border-accent bg-white/5 p-6">
            <p className="leading-relaxed text-white/80">
              <span className="font-semibold text-white">TheProjectSEO&apos;s Shopify SEO service</span>{' '}
              covers the full stack this guide describes: technical audit, site architecture, content
              and product information, AI-search optimization, authority, and implementation
              governance. Measurement uses first-party Search Console, analytics, commerce, and CRM
              data where access and data quality allow, with third-party estimates labeled separately.
            </p>
            <div className="mt-6">
              <Button href="/contact">Request a Shopify SEO proposal</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const sources = [
  {
    label: 'Shopify SEO overview',
    href: 'https://help.shopify.com/en/manual/promoting-marketing/seo/seo-overview',
    note: 'Shopify’s current documentation for built-in canonical tags, sitemaps, robots.txt, SSL, editable metadata, URLs, and image alt text.',
  },
  {
    label: 'Shopify: optimizing site structure',
    href: 'https://help.shopify.com/en/manual/promoting-marketing/seo/optimize-site',
    note: 'Shopify’s guidance for menus, descriptive links, image file names, hierarchy, and keeping important pages within a short click path where possible.',
  },
  {
    label: 'Shopify: robots.txt and AI crawler access',
    href: 'https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt',
    note: 'Shopify’s documentation for default rules, customization risk, AI crawler controls, and the distinction between open-web access and Shopify Catalog distribution.',
  },
  {
    label: 'Google product structured data',
    href: 'https://developers.google.com/search/docs/appearance/structured-data/product',
    note: 'Google’s supported Product and Offer properties, merchant-listing requirements, eligibility language, and validation guidance.',
  },
  {
    label: 'Google: AI features and your website',
    href: 'https://developers.google.com/search/docs/appearance/ai-features',
    note: 'Google’s published eligibility, content, crawler, preview-control, and measurement guidance for AI Overviews and AI Mode.',
  },
]

function SourcesSection() {
  return (
    <section className="bg-paper py-20">
      <Container>
        <div className="max-w-3xl">
          <Subheading>Sources and review</Subheading>
          <Heading as="h2" className="mt-3">
            Shopify and Google documentation behind the guide.
          </Heading>
          <p className="mt-5 text-sm leading-7 text-slate">
            Platform behavior changes. This page was reviewed against the live SERP and official
            documentation on July 28, 2026. Validate theme, app, catalog, market, and crawler behavior
            on the actual store before implementation.
          </p>
        </div>
        <div className="mt-10 grid gap-px bg-border-strong lg:grid-cols-2">
          {sources.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="bg-paper p-6 transition-colors hover:bg-cream"
            >
              <h3 className="font-heading text-base font-semibold text-ink">{source.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate">{source.note}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function SEOForShopify() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Shopify SEO Services',
          serviceType: 'Shopify SEO',
          description:
            'Done-for-you SEO for Shopify stores: technical audit, site architecture, content engineering, AI search optimization (AEO), and link building.',
          url: 'https://theprojectseo.com/seo-for-shopify',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: [
            { '@type': 'Country', name: 'India' },
            { '@type': 'Country', name: 'Philippines' },
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Shopify SEO service scope',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical SEO audit for Shopify' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site architecture and collection structure' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content engineering for product, collection, and blog pages' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI search optimization (AEO) for ecommerce' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Link building for Shopify stores' } },
            ],
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theprojectseo.com/' },
            { '@type': 'ListItem', position: 2, name: 'SEO for Ecommerce', item: 'https://theprojectseo.com/services/ecommerce-seo' },
            { '@type': 'ListItem', position: 3, name: 'SEO for Shopify', item: 'https://theprojectseo.com/seo-for-shopify' },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <Container>
        <Navbar />
      </Container>

      <Hero />
      <QuickAnswer />
      <ShopifyDoesSection />
      <StepsSection />
      <AppsSection />
      <CostSection />
      <SourcesSection />

      <TestimonialQuoteSection
        quote="We hit our KPIs in less than 3 months. Moved key pages to #1 and #2."
        author="James Lim"
        role="CEO"
        company="Helpling APAC"
      />

      <FAQDarkSection title="Shopify SEO questions answered" items={faqData} />

      <CTAFormSection
        subheading="Ready to grow Shopify organic revenue?"
        heading="Send us your store URL and we'll audit it properly."
        lead="A scoped Shopify SEO audit with findings tied to your revenue pages, not a boilerplate PDF."
        submitText="Request your Shopify SEO audit"
      />

      <Footer />
    </main>
  )
}
