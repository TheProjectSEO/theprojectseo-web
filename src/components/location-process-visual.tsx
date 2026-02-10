/**
 * Location Process Visualization Component
 *
 * Displays location-specific workflow diagrams for regional SEO processes.
 * Used in the process section of location pages.
 *
 * Design: rounded-none borders, accent/ink colors, geographic visualizations
 */

interface LocationProcessVisualProps {
  type: 'singapore' | 'australia' | 'usa' | 'philippines' | 'germany' | 'hongkong'
}

export function LocationProcessVisual({ type }: LocationProcessVisualProps) {
  // Get location-specific flag emoji or icon
  const getLocationIcon = () => {
    switch (type) {
      case 'singapore':
        return (
          <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        )
      case 'australia':
        return (
          <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        )
      case 'usa':
        return (
          <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        )
      case 'philippines':
        return (
          <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        )
      case 'germany':
        return (
          <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        )
      case 'hongkong':
        return (
          <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        )
      default:
        return (
          <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        )
    }
  }

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="space-y-6">
        {/* Market Research & Audit */}
        <div className="relative">
          <div className="rounded-none border-2 border-accent bg-accent p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-none bg-ink flex items-center justify-center flex-shrink-0">
                {getLocationIcon()}
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-paper mb-1">Research</div>
                <div className="text-sm font-medium text-paper">Market Research & Audit</div>
                <div className="text-xs text-ash mt-1">Local landscape analysis</div>
              </div>
            </div>
          </div>
          <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/20" />
        </div>

        {/* Localization Strategy */}
        <div className="relative">
          <div className="rounded-none border border-accent bg-ink p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center flex-shrink-0 border border-accent">
                <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Localize</div>
                <div className="text-sm font-medium text-paper">Localization Strategy</div>
                <div className="text-xs text-ash mt-1">Cultural adaptation</div>
              </div>
            </div>
          </div>
          <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/20" />
        </div>

        {/* Content & Technical Implementation */}
        <div className="relative">
          <div className="rounded-none border border-accent bg-ink p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center flex-shrink-0 border border-accent">
                <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Execute</div>
                <div className="text-sm font-medium text-paper">Content & Technical Implementation</div>
                <div className="text-xs text-ash mt-1">Hreflang, content, UX</div>
              </div>
            </div>
          </div>
          <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/20" />
        </div>

        {/* Regional Scale & Expansion */}
        <div className="relative">
          <div className="rounded-none border-2 border-stone bg-ink p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-none bg-stone flex items-center justify-center flex-shrink-0">
                <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Expand</div>
                <div className="text-sm font-medium text-paper">Regional Scale & Expansion</div>
                <div className="text-xs text-ash mt-1">Market penetration</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accent line */}
      <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/40 to-transparent rounded-full opacity-40" />
    </div>
  )
}
