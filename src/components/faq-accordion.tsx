'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items?: FAQItem[]
  title?: string
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How long does it take to see SEO results?",
    answer: "Most clients start seeing improvements within 30-90 days, with significant results typically appearing within 6 months. SEO is a long-term strategy that builds momentum over time."
  },
  {
    question: "What makes your SEO approach different?",
    answer: "We focus on data-driven strategies, transparent reporting, and sustainable growth. Our team combines technical expertise with creative content strategies to deliver measurable results."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "We work with businesses across all industries, from e-commerce and SaaS to healthcare and finance. Our strategies are customized based on your specific market and competition."
  },
  {
    question: "What's included in your SEO audit?",
    answer: "Our comprehensive audit covers technical SEO, on-page optimization, content analysis, competitor research, and keyword opportunities. You'll receive a detailed report with actionable recommendations."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track rankings, organic traffic, conversions, and revenue attribution. You'll receive monthly reports showing exactly how your SEO investment is performing and driving business growth."
  }
]

export function FAQAccordion({ items = defaultFAQs, title }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mx-auto max-w-3xl">
      <div className="text-center mb-12">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-3">FAQ</p>
        <h2 className="font-heading text-[28px] font-semibold tracking-tight text-ink sm:text-[40px]">
          {title || 'Frequently asked questions'}
        </h2>
      </div>

      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-border-strong"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between py-5 text-left transition-colors"
            >
              <span className="font-heading text-[17px] font-semibold text-ink pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={clsx(
                  'size-5 flex-shrink-0 transition-all duration-200',
                  openIndex === index ? 'rotate-180 text-accent' : 'text-ash'
                )}
              />
            </button>
            <div
              className={clsx(
                'overflow-hidden transition-all duration-300 ease-in-out',
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="pb-5 text-[15px] leading-relaxed text-slate">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
