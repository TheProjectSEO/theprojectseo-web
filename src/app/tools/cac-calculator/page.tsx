'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

export default function CacCalculatorPage() {
  const [spend, setSpend] = useState(50000)
  const [newCustomers, setNewCustomers] = useState(100)
  const [ltv, setLtv] = useState(0)

  const cac = newCustomers > 0 ? spend / newCustomers : 0
  const ratio = ltv > 0 && cac > 0 ? ltv / cac : 0
  const verdict =
    ratio === 0 ? null : ratio < 1 ? 'Unsustainable' : ratio < 3 ? 'Needs improvement' : ratio < 5 ? 'Healthy' : 'Exceptional'
  const verdictColor =
    verdict === 'Unsustainable' ? 'text-red-600' :
    verdict === 'Needs improvement' ? 'text-amber-600' :
    verdict === 'Exceptional' ? 'text-emerald-700' : 'text-ink'

  const inputClass = 'w-full rounded-md border border-border-emphasis bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent'
  const labelClass = 'block font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1.5'

  return (
    <main className="overflow-hidden">
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/tools" className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent">Tools</Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">CAC Calculator</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Calculator</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">CAC Calculator</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">Customer Acquisition Cost plus LTV/CAC ratio. Enter your total sales and marketing spend, new customers acquired, and optional LTV to benchmark against SaaS standards.</p>
            <p className="mt-2 font-mono text-xs text-ash">Free forever. No signup. Runs in your browser.</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Your numbers</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Total sales and marketing spend (period)</label>
                  <input type="number" min={0} value={spend} onChange={(e) => setSpend(Number(e.target.value))} className={inputClass} />
                  <p className="mt-1 text-xs text-ash">All acquisition costs: ads, salaries, tools, content, agency fees</p>
                </div>
                <div>
                  <label className={labelClass}>New customers acquired (same period)</label>
                  <input type="number" min={0} value={newCustomers} onChange={(e) => setNewCustomers(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Customer lifetime value (optional)</label>
                  <input type="number" min={0} value={ltv} onChange={(e) => setLtv(Number(e.target.value))} className={inputClass} />
                  <p className="mt-1 text-xs text-ash">Leave 0 to skip the LTV/CAC ratio</p>
                </div>
              </div>
            </div>

            <div className="bg-cream p-8 border border-border">
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Results</h2>
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Customer Acquisition Cost</div>
                  <div className="font-display text-4xl font-medium text-accent mt-1">${cac.toFixed(0)}</div>
                </div>
                {ratio > 0 && (
                  <>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">LTV / CAC Ratio</div>
                      <div className="font-display text-4xl font-medium text-ink mt-1">{ratio.toFixed(2)}x</div>
                    </div>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Verdict</div>
                      <div className={`font-heading text-2xl font-semibold mt-1 ${verdictColor}`}>{verdict}</div>
                      <p className="mt-2 text-xs text-ash">SaaS benchmark: 3x or higher is healthy, 5x+ is exceptional. Below 1x means you lose money on every customer.</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <h2 className="font-heading text-xl font-semibold text-ink mb-4">How this calculates</h2>
            <p className="text-sm leading-relaxed text-slate max-w-3xl">
              CAC = total acquisition spend divided by new customers acquired in the same period. The LTV/CAC ratio tells you whether your economics work at scale. A ratio below 1 means you lose money acquiring each customer. Between 1 and 3 means you have a sustainability problem. 3-5x is healthy for most SaaS. Above 5x is exceptional but can signal underinvestment in growth.
            </p>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
