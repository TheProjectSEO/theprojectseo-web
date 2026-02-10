'use client'

import { useEffect, useState } from 'react'

interface SEOVisualProps {
  type: 'ranking' | 'traffic' | 'keywords' | 'conversion'
  label: string
}

export function SEOVisual({ type, label }: SEOVisualProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderVisual = () => {
    switch (type) {
      case 'ranking':
        return (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full p-4"
            aria-label="SEO ranking improvement visualization"
          >
            {/* Grid lines */}
            <line x1="10" y1="20" x2="90" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            <line x1="10" y1="40" x2="90" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            <line x1="10" y1="60" x2="90" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            <line x1="10" y1="80" x2="90" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />

            {/* Upward trend line */}
            <polyline
              points="10,80 30,60 50,45 70,25 90,15"
              fill="none"
              stroke="#D16847"
              strokeWidth="2"
              className={mounted ? 'animate-draw-line' : 'opacity-0'}
            />

            {/* Data points */}
            {[
              { x: 10, y: 80 },
              { x: 30, y: 60 },
              { x: 50, y: 45 },
              { x: 70, y: 25 },
              { x: 90, y: 15 },
            ].map((point, i) => (
              <circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="2"
                fill="#D16847"
                className={mounted ? 'animate-pulse' : 'opacity-0'}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </svg>
        )

      case 'traffic':
        return (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full p-4"
            aria-label="Traffic growth visualization"
          >
            {/* Bar chart */}
            {[
              { x: 15, height: 20 },
              { x: 30, height: 35 },
              { x: 45, height: 50 },
              { x: 60, height: 68 },
              { x: 75, height: 85 },
            ].map((bar, i) => (
              <rect
                key={i}
                x={bar.x}
                y={95 - bar.height}
                width="8"
                height={mounted ? bar.height : 0}
                fill="#D16847"
                opacity={0.8}
                className="transition-all duration-1000"
                style={{ transitionDelay: `${i * 0.1}s` }}
              />
            ))}

            {/* Baseline */}
            <line x1="10" y1="95" x2="90" y2="95" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          </svg>
        )

      case 'keywords':
        return (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full p-4"
            aria-label="Keyword rankings visualization"
          >
            {/* Search icon representation */}
            <circle
              cx="35"
              cy="35"
              r="15"
              fill="none"
              stroke="#D16847"
              strokeWidth="2"
              className={mounted ? 'animate-pulse' : 'opacity-0'}
            />
            <line
              x1="46"
              y1="46"
              x2="60"
              y2="60"
              stroke="#D16847"
              strokeWidth="2"
              className={mounted ? 'animate-pulse' : 'opacity-0'}
            />

            {/* Keywords as dots */}
            <circle cx="70" cy="25" r="3" fill="#D16847" opacity="0.6" />
            <circle cx="80" cy="35" r="2" fill="#D16847" opacity="0.6" />
            <circle cx="75" cy="45" r="2.5" fill="#D16847" opacity="0.6" />
            <circle cx="85" cy="55" r="2" fill="#D16847" opacity="0.6" />
            <circle cx="65" cy="65" r="3" fill="#D16847" opacity="0.6" />
          </svg>
        )

      case 'conversion':
        return (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full p-4"
            aria-label="Conversion funnel visualization"
          >
            {/* Funnel shape */}
            <path
              d="M 20 20 L 80 20 L 70 45 L 60 70 L 40 70 L 30 45 Z"
              fill="none"
              stroke="#D16847"
              strokeWidth="2"
              className={mounted ? 'animate-draw-path' : 'opacity-0'}
            />

            {/* Funnel sections */}
            <line x1="20" y1="20" x2="80" y2="20" stroke="#D16847" strokeWidth="1.5" opacity="0.3" />
            <line x1="24" y1="32" x2="76" y2="32" stroke="#D16847" strokeWidth="1.5" opacity="0.3" />
            <line x1="27" y1="45" x2="73" y2="45" stroke="#D16847" strokeWidth="1.5" opacity="0.3" />
            <line x1="33" y1="58" x2="67" y2="58" stroke="#D16847" strokeWidth="1.5" opacity="0.3" />

            {/* Arrow down */}
            <path
              d="M 50 70 L 50 88 M 50 88 L 45 83 M 50 88 L 55 83"
              stroke="#D16847"
              strokeWidth="2"
              fill="none"
              className={mounted ? 'animate-pulse' : 'opacity-0'}
            />
          </svg>
        )
    }
  }

  return (
    <div className="aspect-square overflow-hidden rounded-none shadow-xl border border-accent bg-ink flex flex-col items-center justify-center p-4">
      <div className="w-full h-2/3 text-paper">
        {renderVisual()}
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mt-4 text-center">
        {label}
      </p>
    </div>
  )
}
