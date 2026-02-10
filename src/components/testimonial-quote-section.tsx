/**
 * Testimonial Quote Section
 *
 * Large impactful testimonial with gradient background (orange to black).
 * Used across all page types for social proof and visual rhythm.
 *
 * Design: Gradient bg-accent → bg-ink, large italic quote, author attribution
 */

interface TestimonialQuoteSectionProps {
  quote: string
  author: string
  role: string
  company?: string
}

export function TestimonialQuoteSection({
  quote,
  author,
  role,
  company,
}: TestimonialQuoteSectionProps) {
  return (
    <div
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #D16847 0%, #0A0A0A 100%)',
      }}
    >
      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Quote */}
        <blockquote className="font-display text-[clamp(28px,4vw,56px)] font-light italic leading-[1.2] text-white mb-12">
          {quote}
        </blockquote>

        {/* Divider */}
        <div className="w-24 h-px bg-white/30 mx-auto mb-8" />

        {/* Author */}
        <div className="space-y-1">
          <div className="font-heading text-xl font-semibold text-white">
            {author}
          </div>
          <div className="font-mono text-sm text-white/70 tracking-wide">
            {role}
            {company && `, ${company}`}
          </div>
        </div>
      </div>
    </div>
  )
}
