'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

export default function RoasCalculatorPage() {
  const [adSpend, setAdSpend] = useState(10000)
  const [revenue, setRevenue] = useState(40000)
  const [margin, setMargin] = useState(40)

  const roas = adSpend > 0 ? revenue / adSpend : 0
  const grossProfit = revenue * (margin / 100)
  const poas = adSpend > 0 ? grossProfit / adSpend : 0
  const breakEvenRoas = margin > 0 ? 100 / margin : 0
  const verdict = roas === 0 ? null : roas < 1 ? 'Losing money' : roas < breakEvenRoas ? 'Below break-even on margin' : roas < breakEvenRoas * 1.5 ? 'Marginal' : roas < breakEvenRoas * 2 ? 'Healthy' : 'Strong'
  const verdictColor = verdict === 'Losing money' || verdict === 'Below break-even on margin' ? 'text-red-600' : verdict === 'Marginal' ? 'text-amber-600' : verdict === 'Strong' ? 'text-emerald-700' : 'text-ink'

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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">ROAS Calculator</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Calculator</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">ROAS Calculator</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">Return on Ad Spend plus Profit-on-Ad-Spend (POAS). Traditional ROAS ignores your margin, which is why accounts look profitable but drain cash.</p>
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
                  <label className={labelClass}>Ad spend</label>
                  <input type="number" min={0} value={adSpend} onChange={(e) => setAdSpend(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Revenue attributed to ads</label>
                  <input type="number" min={0} value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Gross profit margin (%)</label>
                  <input type="number" min={0} max={100} value={margin} onChange={(e) => setMargin(Number(e.target.value))} className={inputClass} />
                  <p className="mt-1 text-xs text-ash">After COGS. E-commerce DTC typically 40-60%, SaaS 70-85%</p>
                </div>
              </div>
            </div>

            <div className="bg-cream p-8 border border-border">
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Results</h2>
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">ROAS</div>
                  <div className="font-display text-4xl font-medium text-accent mt-1">{roas.toFixed(2)}x</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">POAS (profit on ad spend)</div>
                  <div className="font-display text-4xl font-medium text-ink mt-1">{poas.toFixed(2)}x</div>
                  <p className="mt-2 text-xs text-ash">Below 1x means ads destroy cash after margin</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Break-even ROAS</div>
                  <div className="font-display text-2xl font-medium text-ink mt-1">{breakEvenRoas.toFixed(2)}x</div>
                  <p className="mt-2 text-xs text-ash">ROAS needed to cover ad spend at your margin</p>
                </div>
                {verdict && (
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Verdict</div>
                    <div className={`font-heading text-2xl font-semibold mt-1 ${verdictColor}`}>{verdict}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <h2 className="font-heading text-xl font-semibold text-ink mb-4">How this calculates</h2>
            <p className="text-sm leading-relaxed text-slate max-w-3xl">
              ROAS = revenue divided by ad spend. A 4x ROAS sounds great until you factor in margin. If your gross margin is 40%, break-even ROAS is 2.5x. At 4x, your real profit on ad spend is 1.6x (POAS). Most e-commerce accounts aiming for 3x ROAS are actually losing cash once you subtract COGS, platform fees, and fulfillment.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
