'use client'

/**
 * FAQ Dark Section
 *
 * Black background with orange accent labels and white text.
 * Similar styling to CaseStudyDark for visual consistency.
 */

import { Container } from '@/components/container'
import { FAQAccordion, type FAQItem } from '@/components/faq-accordion'

interface FAQDarkSectionProps {
  title?: string
  items: FAQItem[]
}

export function FAQDarkSection({ title = 'Frequently asked questions', items }: FAQDarkSectionProps) {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              FAQ
            </p>
            <h2 className="font-heading text-[clamp(32px,4vw,56px)] font-semibold leading-[1.15] tracking-tight text-white">
              {title}
            </h2>
          </div>

          {/* FAQ Accordion with dark styling */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <FAQAccordionItem key={index} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

// Custom FAQ Accordion Item for dark background
function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-white/10 rounded-none bg-stone/20 overflow-hidden transition-all duration-200 hover:border-accent/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
      >
        <span className="font-heading text-lg font-semibold text-white group-hover:text-accent transition-colors">
          {item.question}
        </span>
        <svg
          className={`size-5 text-accent flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96' : 'max-h-0'}
        `}
      >
        <div className="px-6 pb-5 text-white/80 leading-relaxed">{item.answer}</div>
      </div>
    </div>
  )
}

import { useState } from 'react'
