/**
 * Service Page Template Sections
 *
 * Standardized section components that enforce TheProjectSEO design system.
 * These components ensure consistent visual hierarchy, spacing, typography,
 * and background rhythm across all service pages.
 *
 * Design Principles:
 * - Background rhythm: paper → cream → paper → cream → INK (dark) → paper
 * - Typography: font-display with font-light for headings, elegant and spacious
 * - Cards: gap-px borderless grids for premium feel
 * - Spacing: py-24 standard, generous whitespace
 * - Hover effects: subtle -translate-y-1 + shadow-lg
 */

import { Button } from '@/components/button'
import { CheckIcon } from '@/components/check-icon'
import { Container } from '@/components/container'
import { HeroAnimation } from '@/components/hero-animation'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { ReactNode } from 'react'

/* -------------------------------------------------------------------------- */
/*  1. Hero Section (Light background, always first)                         */
/* -------------------------------------------------------------------------- */

interface ServiceHeroProps {
  label: string
  title: string
  accentWord: string
  titleAfterAccent?: string
  description: string
  ctaPrimaryText: string
  ctaPrimaryHref: string
  ctaSecondaryText: string
  ctaSecondaryHref: string
}

export function ServiceHero({
  label,
  title,
  accentWord,
  titleAfterAccent = '',
  description,
  ctaPrimaryText,
  ctaPrimaryHref,
  ctaSecondaryText,
  ctaSecondaryHref,
}: ServiceHeroProps) {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-6">
            {label}
          </p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.1] tracking-tight text-ink max-w-3xl">
            {title} <em className="text-accent italic">{accentWord}</em>
            {titleAfterAccent && ` ${titleAfterAccent}`}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-[1.65] text-slate">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href={ctaPrimaryHref}>{ctaPrimaryText}</Button>
            <Button variant="outline" href={ctaSecondaryHref}>
              {ctaSecondaryText}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  2. Stats Bar (Cream background, border-y)                                */
/* -------------------------------------------------------------------------- */

interface Stat {
  value: string
  label: string
}

interface StatsBarProps {
  stats: Stat[]
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[32px] font-semibold text-ink">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  3. Services Grid (Paper background, gap-px pattern)                      */
/* -------------------------------------------------------------------------- */

interface Service {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
}

interface ServicesGridProps {
  subheading: string
  heading: string
  lead?: string
  services: Service[]
}

export function ServicesGrid({ subheading, heading, lead, services }: ServicesGridProps) {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>{subheading}</Subheading>
          <Heading as="h2" className="mt-2 max-w-3xl mx-auto">
            {heading}
          </Heading>
          {lead && (
            <Lead className="mt-6 max-w-2xl mx-auto">
              {lead}
            </Lead>
          )}
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <Icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate">
                      <CheckIcon className="size-3.5 shrink-0 fill-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  4. Process Section (Cream background)                                    */
/* -------------------------------------------------------------------------- */

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ProcessSectionProps {
  subheading: string
  heading: string
  steps: ProcessStep[]
}

export function ProcessSection({ subheading, heading, steps }: ProcessSectionProps) {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>{subheading}</Subheading>
          <Heading as="h2" className="mt-2">
            {heading}
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`py-8 ${index < steps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  5. Case Study Dark (INK background - use once per page at ~60% scroll)   */
/* -------------------------------------------------------------------------- */

interface CaseStudyResult {
  metric: string
  improvement: string
  timeframe: string
}

interface CaseStudyDarkProps {
  subheading: string
  heading: string
  challenge: string
  solution: string
  results: CaseStudyResult[]
}

export function CaseStudyDark({
  subheading,
  heading,
  challenge,
  solution,
  results,
}: CaseStudyDarkProps) {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>{subheading}</Subheading>
          <Heading as="h2" dark className="mt-2">
            {heading}
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold text-white mb-4">
                  The Challenge
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {challenge}
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-white mb-4">
                  Our Solution
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {solution}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Results Achieved
              </h3>
              <div className="space-y-6">
                {results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-3xl font-bold text-white">
                      {result.improvement}
                    </div>
                    <div className="text-sm text-white/80 mt-1">{result.metric}</div>
                    <div className="text-xs text-white/40 mt-1">
                      {result.timeframe}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  6. Pricing Section (Paper background, gap-px cards)                      */
/* -------------------------------------------------------------------------- */

interface PricingTier {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  featured?: boolean
}

interface PricingSectionProps {
  subheading: string
  heading: string
  tiers: PricingTier[]
}

export function PricingSection({ subheading, heading, tiers }: PricingSectionProps) {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>{subheading}</Subheading>
          <Heading as="h2" className="mt-2">
            {heading}
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-paper p-8 ${
                tier.featured ? 'ring-2 ring-accent' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-mono text-[36px] font-bold text-ink">
                    {tier.price}
                  </span>
                  {tier.period && <span className="text-ash">{tier.period}</span>}
                </div>
                <p className="text-sm text-slate mt-4">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-stone">
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button href="/contact" className="w-full">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  7. Testimonial Section (Cream background)                                */
/* -------------------------------------------------------------------------- */

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

interface TestimonialSectionProps {
  subheading: string
  heading: string
  testimonials: Testimonial[]
}

export function TestimonialSection({
  subheading,
  heading,
  testimonials,
}: TestimonialSectionProps) {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="text-center mb-16">
          <Subheading>{subheading}</Subheading>
          <Heading as="h2" className="mt-2">
            {heading}
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-border-strong p-8">
              <div className="mb-4 font-display text-2xl leading-none text-accent">
                &ldquo;
              </div>
              <blockquote className="font-display text-lg italic leading-relaxed text-ink mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-cream" />
                <div>
                  <div className="font-heading text-sm font-semibold text-ink">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-ash">
                    {testimonial.role} &bull; {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  8. Text Content Section (Paper background - for short explanations)      */
/* -------------------------------------------------------------------------- */

interface TextContentSectionProps {
  subheading: string
  heading: string
  paragraphs: string[]
  children?: ReactNode
}

export function TextContentSection({
  subheading,
  heading,
  paragraphs,
  children,
}: TextContentSectionProps) {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Subheading>{subheading}</Subheading>
          <Heading as="h2" className="mt-2">
            {heading}
          </Heading>
          <div className="mt-10 space-y-6 text-base/7 text-slate">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {children && <div className="mt-12">{children}</div>}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  9. Feature Cards Section (Cream background, gap-px grid)                 */
/* -------------------------------------------------------------------------- */

interface FeatureCard {
  title: string
  items: string[]
}

interface FeatureCardsSectionProps {
  subheading: string
  heading: string
  lead?: string
  cards: FeatureCard[]
}

export function FeatureCardsSection({
  subheading,
  heading,
  lead,
  cards,
}: FeatureCardsSectionProps) {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Subheading>{subheading}</Subheading>
          <Heading as="h2" className="mt-2">
            {heading}
          </Heading>
          {lead && (
            <Lead className="mt-6">
              {lead}
            </Lead>
          )}

          <div className="mt-12 grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div key={index} className="bg-paper p-8">
                <h3 className="font-heading text-lg font-semibold text-ink mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate">
                      <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  10. Related Services Section (Cream background, gap-px grid)             */
/* -------------------------------------------------------------------------- */

interface RelatedService {
  title: string
  description: string
  href: string
}

interface RelatedServicesSectionProps {
  subheading: string
  heading: string
  services: RelatedService[]
}

export function RelatedServicesSection({
  subheading,
  heading,
  services,
}: RelatedServicesSectionProps) {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>{subheading}</Subheading>
          <Heading as="h2" className="mt-2">
            {heading}
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-accent">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{service.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                Learn more
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  11. CTA Section (Paper background, final section before Footer)          */
/* -------------------------------------------------------------------------- */

interface CTASectionProps {
  subheading: string
  heading: string
  lead: string
  ctaPrimaryText: string
  ctaPrimaryHref: string
  ctaSecondaryText: string
  ctaSecondaryHref: string
  note?: string
}

export function CTASection({
  subheading,
  heading,
  lead,
  ctaPrimaryText,
  ctaPrimaryHref,
  ctaSecondaryText,
  ctaSecondaryHref,
  note,
}: CTASectionProps) {
  return (
    <div className="bg-paper py-16 border-t border-border">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <Subheading>{subheading}</Subheading>
            <Heading as="h2" className="mt-2">
              {heading}
            </Heading>
            <Lead className="mt-6">{lead}</Lead>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row shrink-0">
            <Button href={ctaPrimaryHref}>{ctaPrimaryText}</Button>
            <Button variant="outline" href={ctaSecondaryHref}>
              {ctaSecondaryText}
            </Button>
          </div>
        </div>
        {note && (
          <p className="mt-6 text-xs text-ash text-center lg:text-left">
            {note}
          </p>
        )}
      </Container>
    </div>
  )
}
