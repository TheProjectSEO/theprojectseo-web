/**
 * N8n Automation Hero Section
 *
 * Custom hero with workflow visualization on the right side.
 * Two-column layout: text content (left) + workflow visual (right).
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { HeroAnimation } from '@/components/hero-animation'
import { Navbar } from '@/components/navbar'
import { N8nWorkflowVisual } from '@/components/n8n-workflow-visual'

interface N8nHeroProps {
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

export function N8nHero({
  label,
  title,
  accentWord,
  titleAfterAccent = '',
  description,
  ctaPrimaryText,
  ctaPrimaryHref,
  ctaSecondaryText,
  ctaSecondaryHref,
}: N8nHeroProps) {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          {/* Two-column grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column: Text content */}
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
                {label}
              </p>
              <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
                {title} <em className="text-accent italic">{accentWord}</em>
                {titleAfterAccent && ` ${titleAfterAccent}`}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
                {description}
              </p>
              <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button href={ctaPrimaryHref}>{ctaPrimaryText}</Button>
                <Button variant="outline" href={ctaSecondaryHref}>
                  {ctaSecondaryText}
                </Button>
              </div>
            </div>

            {/* Right column: Workflow visualization */}
            <div className="hidden lg:block">
              <N8nWorkflowVisual />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
