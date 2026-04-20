'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

export default function LtvCalculatorPage() {
  const [aov, setAov] = useState(150)
  const [purchasesPerYear, setPurchasesPerYear] = useState(4)
  const [retentionYears, setRetentionYears] = useState(3)
  const [margin, setMargin] = useState(40)

  const annualRevenue = aov * purchasesPerYear
  const ltv = annualRevenue * retentionYears
  const ltvMargin = ltv * (margin / 100)
  const per100Customers = ltv * 100

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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">LTV Calculator</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Calculator</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">Customer LTV Calculator</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">Projected lifetime value per customer and across a 100-customer cohort. Factor in margin to get your real contribution LTV, not the vanity revenue number.</p>
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
                  <label className={labelClass}>Average order value</label>
                  <input type="number" min={0} value={aov} onChange={(e) => setAov(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Purchases per customer per year</label>
                  <input type="number" min={0} value={purchasesPerYear} onChange={(e) => setPurchasesPerYear(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Average customer lifespan (years)</label>
                  <input type="number" min={0} value={retentionYears} onChange={(e) => setRetentionYears(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Gross margin (%)</label>
                  <input type="number" min={0} max={100} value={margin} onChange={(e) => setMargin(Number(e.target.value))} className={inputClass} />
                </div>
              </div>
            </div>

            <div className="bg-cream p-8 border border-border">
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Results</h2>
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Revenue LTV per customer</div>
                  <div className="font-display text-4xl font-medium text-accent mt-1">${ltv.toFixed(0)}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Contribution LTV (after margin)</div>
                  <div className="font-display text-4xl font-medium text-ink mt-1">${ltvMargin.toFixed(0)}</div>
                  <p className="mt-2 text-xs text-ash">Use this for CAC comparison, not revenue LTV</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Revenue per 100-customer cohort</div>
                  <div className="font-display text-3xl font-medium text-ink mt-1">${per100Customers.toLocaleString()}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Annual revenue per active customer</div>
                  <div className="font-display text-2xl font-medium text-ink mt-1">${annualRevenue.toFixed(0)}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <h2 className="font-heading text-xl font-semibold text-ink mb-4">How this calculates</h2>
            <p className="text-sm leading-relaxed text-slate max-w-3xl">
              LTV = average order value × purchases per year × customer lifespan in years. Revenue LTV is the top-line number. Contribution LTV applies your gross margin so you know how much real profit each customer produces. Use contribution LTV when comparing against CAC, because CAC is an after-margin cost you recover from after-margin revenue.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
