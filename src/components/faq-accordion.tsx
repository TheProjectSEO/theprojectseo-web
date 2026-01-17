'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { clsx } from 'clsx'

interface FAQItem {
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
    <div className="space-y-6">
      {title && (
        <h2 className="text-2xl font-bold text-gray-950 mb-8">{title}</h2>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
            >
              <span className="text-lg font-semibold text-gray-950 pr-4">
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="size-5 text-gray-600 flex-shrink-0 transition-transform" />
              ) : (
                <ChevronDown className="size-5 text-gray-600 flex-shrink-0 transition-transform" />
              )}
            </button>
            <div
              className={clsx(
                'overflow-hidden transition-all duration-300 ease-in-out',
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}