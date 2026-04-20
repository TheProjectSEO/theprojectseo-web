'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

export default function ChurnRateCalculatorPage() {
  const [startCustomers, setStartCustomers] = useState(500)
  const [lostCustomers, setLostCustomers] = useState(25)
  const [startMrr, setStartMrr] = useState(50000)
  const [lostMrr, setLostMrr] = useState(2500)
  const [expansionMrr, setExpansionMrr] = useState(1500)

  const grossLogoChurn = startCustomers > 0 ? (lostCustomers / startCustomers) * 100 : 0
  const grossMrrChurn = startMrr > 0 ? (lostMrr / startMrr) * 100 : 0
  const netMrrChurn = startMrr > 0 ? ((lostMrr - expansionMrr) / startMrr) * 100 : 0
  const annualizedChurn = 1 - Math.pow(1 - grossLogoChurn / 100, 12)
  const verdict = grossMrrChurn < 1 ? 'Exceptional' : grossMrrChurn < 2 ? 'Healthy' : grossMrrChurn < 5 ? 'Needs attention' : 'Critical'
  const verdictColor = verdict === 'Exceptional' ? 'text-emerald-700' : verdict === 'Healthy' ? 'text-ink' : verdict === 'Needs attention' ? 'text-amber-600' : 'text-red-600'

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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Churn Rate Calculator</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Calculator</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">Churn Rate Calculator</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">Logo churn, gross MRR churn, and net MRR churn (the only number investors actually care about). Enter your monthly numbers to see annualized impact.</p>
            <p className="mt-2 font-mono text-xs text-ash">Free forever. No signup. Runs in your browser.</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Your numbers (monthly)</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Customers at start of month</label>
                  <input type="number" min={0} value={startCustomers} onChange={(e) => setStartCustomers(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Customers lost this month</label>
                  <input type="number" min={0} value={lostCustomers} onChange={(e) => setLostCustomers(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>MRR at start of month ($)</label>
                  <input type="number" min={0} value={startMrr} onChange={(e) => setStartMrr(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>MRR lost to churn this month ($)</label>
                  <input type="number" min={0} value={lostMrr} onChange={(e) => setLostMrr(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Expansion MRR this month ($)</label>
                  <input type="number" min={0} value={expansionMrr} onChange={(e) => setExpansionMrr(Number(e.target.value))} className={inputClass} />
                  <p className="mt-1 text-xs text-ash">Upgrades, add-ons, seat expansion from existing customers</p>
                </div>
              </div>
            </div>

            <div className="bg-cream p-8 border border-border">
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Results</h2>
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Gross MRR churn (monthly)</div>
                  <div className="font-display text-4xl font-medium text-accent mt-1">{grossMrrChurn.toFixed(2)}%</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Net MRR churn (monthly)</div>
                  <div className={`font-display text-4xl font-medium mt-1 ${netMrrChurn < 0 ? 'text-emerald-700' : 'text-ink'}`}>
                    {netMrrChurn.toFixed(2)}%
                  </div>
                  <p className="mt-2 text-xs text-ash">Negative net churn (expansion {'>'} churn) is the gold standard</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Logo churn (monthly)</div>
                  <div className="font-display text-2xl font-medium text-ink mt-1">{grossLogoChurn.toFixed(2)}%</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Annualized logo churn</div>
                  <div className="font-display text-2xl font-medium text-ink mt-1">{(annualizedChurn * 100).toFixed(1)}%</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Verdict</div>
                  <div className={`font-heading text-2xl font-semibold mt-1 ${verdictColor}`}>{verdict}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <h2 className="font-heading text-xl font-semibold text-ink mb-4">How this calculates</h2>
            <p className="text-sm leading-relaxed text-slate max-w-3xl">
              Gross MRR churn = churned MRR divided by starting MRR. Net MRR churn = (churned MRR minus expansion MRR) divided by starting MRR, which can go negative when expansion exceeds churn. SaaS benchmarks: SMB tolerates 3-5% monthly gross churn, mid-market 1-2%, enterprise {'<'}1%. Negative net churn is the gold standard because it means revenue compounds even without acquiring new customers.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
