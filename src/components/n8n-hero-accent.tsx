/**
 * N8n Automation Hero Section - Accent Background Variant
 *
 * Full terracotta orange background with white text.
 * Bold, eye-catching alternative to the standard light hero.
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { N8nWorkflowInteractive } from '@/components/n8n-workflow-interactive'
import { Navbar } from '@/components/navbar'

interface N8nHeroAccentProps {
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

export function N8nHeroAccent({
  label,
  title,
  accentWord,
  titleAfterAccent = '',
  description,
  ctaPrimaryText,
  ctaPrimaryHref,
  ctaSecondaryText,
  ctaSecondaryHref,
}: N8nHeroAccentProps) {
  return (
    <div className="relative overflow-hidden bg-accent">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          {/* Two-column grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column: Text content */}
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-white/90 mb-6">
                {label}
              </p>
              <h1 className="font-display text-[clamp(48px,6vw,96px)] font-bold leading-[0.95] tracking-[-0.02em] text-white">
                {title}{' '}
                <span className="inline-block bg-white text-accent px-3 py-1 italic font-black">
                  {accentWord}
                </span>
                {titleAfterAccent && ` ${titleAfterAccent}`}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/90">
                {description}
              </p>
              <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button
                  href={ctaPrimaryHref}
                  className="bg-white text-accent hover:bg-white/90 shadow-xl font-semibold"
                >
                  {ctaPrimaryText}
                </Button>
                <Button
                  variant="outline"
                  href={ctaSecondaryHref}
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  {ctaSecondaryText}
                </Button>
              </div>
            </div>

            {/* Right column: Interactive workflow visualization */}
            <div className="hidden lg:block">
              <N8nWorkflowInteractive />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
