'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

export default function ArpuCalculatorPage() {
  const [totalRevenue, setTotalRevenue] = useState(500000)
  const [activeUsers, setActiveUsers] = useState(10000)
  const [paidUsers, setPaidUsers] = useState(2000)

  const arpu = activeUsers > 0 ? totalRevenue / activeUsers : 0
  const arppu = paidUsers > 0 ? totalRevenue / paidUsers : 0
  const conversionRate = activeUsers > 0 ? (paidUsers / activeUsers) * 100 : 0
  const annualArpu = arpu * 12
  const per1kUsers = arpu * 1000

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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">ARPU Calculator</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Calculator</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">ARPU Calculator</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">Average Revenue Per User (all active) and ARPPU (paying users only). Useful for freemium products where the distinction matters.</p>
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
                  <label className={labelClass}>Total monthly revenue ($)</label>
                  <input type="number" min={0} value={totalRevenue} onChange={(e) => setTotalRevenue(Number(e.target.value))} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Active users (all)</label>
                  <input type="number" min={0} value={activeUsers} onChange={(e) => setActiveUsers(Number(e.target.value))} className={inputClass} />
                  <p className="mt-1 text-xs text-ash">Total engaged users including free tier</p>
                </div>
                <div>
                  <label className={labelClass}>Paying users only</label>
                  <input type="number" min={0} value={paidUsers} onChange={(e) => setPaidUsers(Number(e.target.value))} className={inputClass} />
                </div>
              </div>
            </div>

            <div className="bg-cream p-8 border border-border">
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Results</h2>
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">ARPU (all active users)</div>
                  <div className="font-display text-4xl font-medium text-accent mt-1">${arpu.toFixed(2)}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">ARPPU (paying users only)</div>
                  <div className="font-display text-4xl font-medium text-ink mt-1">${arppu.toFixed(2)}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Free-to-paid conversion rate</div>
                  <div className="font-display text-2xl font-medium text-ink mt-1">{conversionRate.toFixed(2)}%</div>
                  <p className="mt-2 text-xs text-ash">Freemium benchmark: 2-5% is typical, 10%+ is excellent</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Annualized ARPU</div>
                  <div className="font-display text-2xl font-medium text-ink mt-1">${annualArpu.toFixed(0)}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Revenue per 1,000 users</div>
                  <div className="font-display text-2xl font-medium text-ink mt-1">${per1kUsers.toFixed(0)}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-12">
            <h2 className="font-heading text-xl font-semibold text-ink mb-4">How this calculates</h2>
            <p className="text-sm leading-relaxed text-slate max-w-3xl">
              ARPU = total revenue divided by all active users (free + paid). ARPPU = total revenue divided by paying users only. The ratio between them reveals monetization efficiency. For freemium products, track both: ARPU shows user-base health, ARPPU shows pricing power. Healthy B2B SaaS typically sees ARPPU between $30-$500 monthly, consumer products $1-$10.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
