'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

function formatCurrency(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`
  return `$${value.toFixed(0)}`
}

function formatNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(2)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`
  return value.toFixed(0)
}

export default function SeoRoiCalculatorPage() {
  const [monthlyTraffic, setMonthlyTraffic] = useState(5000)
  const [trafficGrowthPct, setTrafficGrowthPct] = useState(30)
  const [conversionRate, setConversionRate] = useState(2.5)
  const [aov, setAov] = useState(200)
  const [monthlyCost, setMonthlyCost] = useState(2500)

  const projectedTraffic = Math.round(monthlyTraffic * (1 + trafficGrowthPct / 100))
  const additionalTraffic = projectedTraffic - monthlyTraffic
  const additionalConversions = (additionalTraffic * conversionRate) / 100
  const additionalRevenue = additionalConversions * aov
  const annualRevenue = additionalRevenue * 12
  const annualCost = monthlyCost * 12
  const roi = annualCost > 0 ? ((annualRevenue - annualCost) / annualCost) * 100 : 0
  const paybackMonths = additionalRevenue > 0 ? monthlyCost / additionalRevenue : 0

  const inputClass =
    'w-full rounded-md border border-border-emphasis bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent'
  const labelClass = 'block font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1.5'

  return (
    <main className="overflow-hidden">
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/tools"
                className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent"
              >
                Tools
              </Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">
                SEO ROI Calculator
              </span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              Free Calculator
            </p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              SEO ROI Calculator
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
              Estimate the revenue impact of organic traffic growth. Enter your current traffic,
              projected growth, conversion rate, and average order value to see the numbers.
            </p>
            <p className="mt-2 font-mono text-xs text-ash">
              Free forever. No signup. Runs in your browser.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Inputs */}
            <div>
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Your numbers</h2>

              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Current monthly organic traffic</label>
                  <input
                    type="number"
                    min={0}
                    value={monthlyTraffic}
                    onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                    className={inputClass}
                  />
                  <p className="mt-1 text-xs text-ash">Sessions per month from organic search</p>
                </div>

                <div>
                  <label className={labelClass}>Projected traffic growth (%)</label>
                  <input
                    type="number"
                    min={0}
                    max={1000}
                    value={trafficGrowthPct}
                    onChange={(e) => setTrafficGrowthPct(Number(e.target.value))}
                    className={inputClass}
                  />
                  <p className="mt-1 text-xs text-ash">
                    Expected increase over 12 months. Conservative: 20%. Typical: 30-50%.
                  </p>
                </div>

                <div>
                  <label className={labelClass}>Organic conversion rate (%)</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    step={0.1}
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className={inputClass}
                  />
                  <p className="mt-1 text-xs text-ash">
                    Percentage of visitors who convert to a lead or purchase
                  </p>
                </div>

                <div>
                  <label className={labelClass}>Average order value / lead value ($)</label>
                  <input
                    type="number"
                    min={0}
                    value={aov}
                    onChange={(e) => setAov(Number(e.target.value))}
                    className={inputClass}
                  />
                  <p className="mt-1 text-xs text-ash">
                    Revenue per conversion. For SaaS, use MRR x average months retained.
                  </p>
                </div>

                <div>
                  <label className={labelClass}>Monthly SEO investment ($)</label>
                  <input
                    type="number"
                    min={0}
                    value={monthlyCost}
                    onChange={(e) => setMonthlyCost(Number(e.target.value))}
                    className={inputClass}
                  />
                  <p className="mt-1 text-xs text-ash">Agency retainer, tools, and content costs combined</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Projected results</h2>

              <div className="grid grid-cols-2 gap-px bg-border-strong">
                <div className="bg-cream p-6">
                  <div className="font-mono text-[clamp(28px,4vw,40px)] font-black text-accent">
                    {formatNumber(projectedTraffic)}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mt-2">
                    Projected monthly traffic
                  </div>
                </div>

                <div className="bg-cream p-6">
                  <div className="font-mono text-[clamp(28px,4vw,40px)] font-black text-accent">
                    +{formatNumber(additionalTraffic)}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mt-2">
                    Additional visitors/mo
                  </div>
                </div>

                <div className="bg-cream p-6">
                  <div className="font-mono text-[clamp(28px,4vw,40px)] font-black text-accent">
                    {additionalConversions.toFixed(1)}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mt-2">
                    New conversions/mo
                  </div>
                </div>

                <div className="bg-cream p-6">
                  <div className="font-mono text-[clamp(28px,4vw,40px)] font-black text-accent">
                    {formatCurrency(additionalRevenue)}
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mt-2">
                    Additional revenue/mo
                  </div>
                </div>
              </div>

              <div className="mt-px grid grid-cols-1 gap-px bg-border-strong">
                <div className="bg-ink p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="font-mono text-[clamp(32px,5vw,56px)] font-black text-white">
                        {formatCurrency(annualRevenue)}
                      </div>
                      <div className="font-mono text-xs uppercase tracking-[0.1em] text-white/40 mt-2">
                        Annual revenue added
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[clamp(32px,5vw,56px)] font-black text-white">
                        {roi >= 0 ? '+' : ''}{roi.toFixed(0)}%
                      </div>
                      <div className="font-mono text-xs uppercase tracking-[0.1em] text-white/40 mt-2">
                        12-month ROI
                      </div>
                    </div>
                  </div>

                  {paybackMonths > 0 && paybackMonths < 120 && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <span className="font-mono text-sm text-white/60">
                        Estimated payback period:{' '}
                        <strong className="text-white">{paybackMonths.toFixed(1)} months</strong>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 bg-cream border border-border p-5">
                <p className="text-xs leading-relaxed text-slate">
                  <strong className="text-ink">Methodology:</strong> Projected traffic = current traffic x
                  (1 + growth%). Additional conversions = additional visitors x conversion rate.
                  Additional revenue = conversions x AOV. ROI = (annual revenue added - annual cost) /
                  annual cost x 100. These are estimates based on your inputs. Actual results
                  depend on competitive landscape, existing domain authority, and execution quality.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <div className="bg-cream py-20 border-t border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              Want a real forecast?
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,48px)] font-semibold text-ink leading-tight">
              We model this with your actual GSC data.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              This calculator uses estimates. A proper SEO forecast uses your real keyword rankings,
              competitor traffic gaps, and historical conversion data from Google Analytics. That is what
              we build in every engagement kickoff.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-heading font-semibold text-base transition-all duration-200 hover:bg-accent/90"
              >
                Get a Data-Backed Forecast
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border-emphasis text-stone font-heading font-medium text-base transition-all duration-200 hover:bg-paper"
              >
                Browse All Tools
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
