import { Button } from '@/components/button'
import { JsonLd } from '@/components/json-ld'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Pricing | TheProjectSEO',
  description:
    'Transparent SEO pricing that delivers results. Choose from Starter, Growth, or Enterprise SEO packages designed to boost your rankings.',
  alternates: {
    canonical: '/pricing',
  },
}

const tiers = [
  {
    name: 'Starter' as const,
    slug: 'starter',
    description: 'Perfect for small businesses starting their SEO journey.',
    priceMonthly: 997,
    href: '/contact',
    highlights: [
      { description: 'Complete SEO audit' },
      { description: 'Keyword research (50 keywords)' },
      { description: 'On-page optimization (5 pages)' },
      { description: 'Monthly progress reports' },
      { description: 'Technical SEO fixes', disabled: true },
      { description: 'Content creation', disabled: true },
    ],
    features: [
      { section: 'SEO Services', name: 'SEO Audit', value: 'Complete' },
      { section: 'SEO Services', name: 'Keyword Research', value: '50 keywords' },
      { section: 'SEO Services', name: 'On-page Optimization', value: '5 pages' },
      { section: 'SEO Services', name: 'Technical SEO', value: false },
      { section: 'SEO Services', name: 'Link Building', value: false },
      { section: 'Content', name: 'Content Strategy', value: false },
      { section: 'Content', name: 'Content Creation', value: false },
      { section: 'Content', name: 'Content Optimization', value: '5 pages' },
      { section: 'Reporting', name: 'Monthly Reports', value: true },
      { section: 'Reporting', name: 'Real-time Dashboard', value: false },
      { section: 'Reporting', name: 'Competitor Analysis', value: false },
      { section: 'Support', name: 'Email Support', value: true },
      { section: 'Support', name: 'Phone Support', value: false },
      { section: 'Support', name: 'Dedicated SEO Manager', value: false },
    ],
  },
  {
    name: 'Growth' as const,
    slug: 'growth',
    description: 'Comprehensive SEO for growing businesses.',
    priceMonthly: 1997,
    href: '/contact',
    featured: true,
    highlights: [
      { description: 'Everything in Starter' },
      { description: 'Technical SEO optimization' },
      { description: 'Content creation (4 articles/month)' },
      { description: 'Link building (10 links/month)' },
      { description: 'Local SEO optimization' },
    ],
    features: [
      { section: 'SEO Services', name: 'SEO Audit', value: 'Complete' },
      { section: 'SEO Services', name: 'Keyword Research', value: '200 keywords' },
      { section: 'SEO Services', name: 'On-page Optimization', value: '20 pages' },
      { section: 'SEO Services', name: 'Technical SEO', value: true },
      { section: 'SEO Services', name: 'Link Building', value: '10 links/month' },
      { section: 'Content', name: 'Content Strategy', value: true },
      { section: 'Content', name: 'Content Creation', value: '4 articles/month' },
      { section: 'Content', name: 'Content Optimization', value: '20 pages' },
      { section: 'Reporting', name: 'Monthly Reports', value: true },
      { section: 'Reporting', name: 'Real-time Dashboard', value: true },
      { section: 'Reporting', name: 'Competitor Analysis', value: true },
      { section: 'Support', name: 'Email Support', value: true },
      { section: 'Support', name: 'Phone Support', value: true },
      { section: 'Support', name: 'Dedicated SEO Manager', value: false },
    ],
  },
  {
    name: 'Enterprise' as const,
    slug: 'enterprise',
    description: 'Advanced SEO solutions for large organizations.',
    priceMonthly: 4997,
    href: '/contact',
    highlights: [
      { description: 'Everything in Growth' },
      { description: 'Dedicated SEO manager' },
      { description: 'Custom content strategy' },
      { description: 'Advanced link building' },
      { description: 'Multi-location SEO' },
    ],
    features: [
      { section: 'SEO Services', name: 'SEO Audit', value: 'Complete' },
      { section: 'SEO Services', name: 'Keyword Research', value: 'Unlimited' },
      { section: 'SEO Services', name: 'On-page Optimization', value: 'Unlimited' },
      { section: 'SEO Services', name: 'Technical SEO', value: true },
      { section: 'SEO Services', name: 'Link Building', value: '25 links/month' },
      { section: 'Content', name: 'Content Strategy', value: 'Custom' },
      { section: 'Content', name: 'Content Creation', value: '8 articles/month' },
      { section: 'Content', name: 'Content Optimization', value: 'Unlimited' },
      { section: 'Reporting', name: 'Monthly Reports', value: true },
      { section: 'Reporting', name: 'Real-time Dashboard', value: true },
      { section: 'Reporting', name: 'Competitor Analysis', value: 'Advanced' },
      { section: 'Support', name: 'Email Support', value: true },
      { section: 'Support', name: 'Phone Support', value: true },
      { section: 'Support', name: 'Dedicated SEO Manager', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">SEO pricing that delivers results.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Transparent SEO pricing with no hidden fees. Choose the plan that fits
        your business goals and start dominating search rankings today.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <div className="absolute inset-x-2 top-48 bottom-0 rounded-none border border-border-strong bg-cream" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <div className="mt-24 text-center">
          <p className="text-sm text-ash mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate">
            <span>&#10003; No setup fees</span>
            <span>&#10003; Cancel anytime</span>
            <span>&#10003; 30-day money-back guarantee</span>
            <span>&#10003; Free consultation</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div
      className={`grid grid-cols-1 rounded-none border border-border-strong bg-white max-lg:mx-auto max-lg:w-full max-lg:max-w-md ${
        tier.featured
          ? 'relative transform lg:scale-105 border-t-[3px] border-t-accent shadow-lg'
          : ''
      }`}
    >
      {tier.featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="font-mono text-xs font-medium tracking-[0.1em] uppercase bg-accent text-white px-4 py-1.5">
            Popular
          </span>
        </div>
      )}
      <div className="p-10 pb-9">
        <Subheading>{tier.name}</Subheading>
        <p className="mt-2 text-sm/6 text-stone">{tier.description}</p>
        <div className="mt-8 flex items-center gap-4">
          <div className="font-mono text-[40px] font-medium text-ink">
            ${tier.priceMonthly}
          </div>
          <div className="text-sm/5 text-stone">
            <p>USD</p>
            <p>per month</p>
          </div>
        </div>
        <div className="mt-8">
          {tier.featured ? (
            <Button variant="solid" href={tier.href}>
              Get started
            </Button>
          ) : (
            <Button variant="ghost" href={tier.href}>
              Get started
            </Button>
          )}
        </div>
        <div className="mt-8">
          <h3 className="text-sm/6 font-medium text-ink">
            What&apos;s included:
          </h3>
          <ul className="mt-3 space-y-3">
            {tier.highlights.map((props, featureIndex) => (
              <FeatureItem key={featureIndex} {...props} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function PricingTable({
  selectedTier,
}: {
  selectedTier: (typeof tiers)[number]
}) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">SEO pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-ink" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-none bg-white p-1 shadow-lg border border-border-strong [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 px-2 py-1 data-focus:bg-cream"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 bg-cream px-4 py-3 text-sm/6 font-semibold font-heading">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-border last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-slate"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      const value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-accent" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-ash" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6 font-sans">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-stone data-disabled:text-ash/50"
    >
      <span className="inline-flex h-6 items-center">
        <CheckIcon
          className={`size-4 shrink-0 ${disabled ? 'fill-ash/30' : 'fill-accent'}`}
        />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 bg-ink bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 border border-white/20 bg-white/10 max-lg:mx-auto max-lg:max-w-xs">
              <div className="p-2">
                <div className="overflow-hidden outline outline-1 -outline-offset-1 outline-white/10">
                  <div className="aspect-3/4 w-full bg-ink/80 flex items-center justify-center">
                    <span className="text-white/40 font-sans">Client Photo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative font-display text-3xl tracking-tight text-white lg:text-4xl">
                  TheProjectSEO increased our organic traffic by 340% in just 8 months.
                  The ROI has been incredible.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">David Thompson</p>
                <p className="text-sm/6 font-medium text-white/60">
                  CEO, GrowthTech Solutions
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your SEO questions answered.
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold font-heading text-ink">
              How long does it take to see SEO results?
            </dt>
            <dd className="mt-4 text-sm/6 text-slate font-sans">
              Most clients start seeing improvements within 30-60 days, with significant
              ranking improvements typically occurring within 3-6 months. SEO is a
              long-term strategy that builds momentum over time.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold font-heading text-ink">
              Do you guarantee first page rankings?
            </dt>
            <dd className="mt-4 text-sm/6 text-slate font-sans">
              While we cannot guarantee specific rankings due to Google&apos;s ever-changing
              algorithm, we do guarantee significant improvements in your organic visibility
              and traffic when you follow our strategy.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold font-heading text-ink">
              What makes TheProjectSEO different from other agencies?
            </dt>
            <dd className="mt-4 text-sm/6 text-slate font-sans">
              We focus on data-driven strategies that deliver measurable ROI. Our team
              stays ahead of algorithm updates, uses cutting-edge tools, and provides
              transparent reporting so you always know what we&apos;re working on.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold font-heading text-ink">
              Can I cancel my SEO service anytime?
            </dt>
            <dd className="mt-4 text-sm/6 text-slate font-sans">
              Yes, all our plans are month-to-month with no long-term contracts.
              We believe in earning your business every month through results,
              not locking you into lengthy agreements.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold font-heading text-ink">
              Do you work with businesses in my industry?
            </dt>
            <dd className="mt-4 text-sm/6 text-slate font-sans">
              We have experience across virtually every industry, from B2B SaaS and
              e-commerce to healthcare and professional services. Our strategies are
              customized based on your specific industry and target audience.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default async function Pricing({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const tier =
    typeof params.tier === 'string'
      ? tiers.find(({ slug }) => slug === params.tier)!
      : tiers[0]

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'SEO Pricing',
          description: 'Transparent SEO pricing plans...',
          url: 'https://theprojectseo.com/pricing',
        }}
      />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={tier} />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
