'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

export default function ContentBriefGeneratorPage() {
  const [keyword, setKeyword] = useState('technical SEO audit')
  const [audience, setAudience] = useState('in-house SEO managers at mid-market SaaS')
  const [intent, setIntent] = useState<'informational' | 'commercial' | 'navigational' | 'transactional'>('commercial')

  const wordTarget = intent === 'informational' ? '2,500 - 3,500 words' : intent === 'commercial' ? '1,800 - 2,500 words' : intent === 'transactional' ? '1,200 - 1,800 words' : '800 - 1,200 words'
  const titleTag = intent === 'commercial' ? `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} Services: What to Expect and How to Evaluate` : intent === 'informational' ? `${keyword.charAt(0).toUpperCase() + keyword.slice(1)}: Complete Guide for ${new Date().getFullYear()}` : intent === 'transactional' ? `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} | Get a Free Quote` : keyword.charAt(0).toUpperCase() + keyword.slice(1)
  const metaDescription = `Everything ${audience} needs to know about ${keyword.toLowerCase()}. Covers methodology, common pitfalls, what to expect, and how to measure success.`
  const h1 = titleTag
  const h2s = intent === 'informational' ? [
    `What is ${keyword}?`,
    `Why ${keyword} matters for ${audience}`,
    `How ${keyword} works step by step`,
    `Common mistakes to avoid`,
    `Tools and resources`,
    `Real-world examples`,
    `Next steps`,
  ] : intent === 'commercial' ? [
    `What ${keyword} includes`,
    `Who benefits from ${keyword}`,
    `Typical timeline and deliverables`,
    `How to evaluate providers`,
    `Pricing benchmarks`,
    `What questions to ask`,
    `How we approach ${keyword}`,
  ] : intent === 'transactional' ? [
    `${keyword} overview`,
    `What you get`,
    `Process and timeline`,
    `Pricing`,
    `FAQs`,
    `Get started`,
  ] : [
    `About ${keyword}`,
    `Contact us`,
  ]

  const questions = [
    `What exactly is ${keyword}?`,
    `How much does ${keyword} cost?`,
    `How long does ${keyword} take to deliver results?`,
    `Who should invest in ${keyword}?`,
    `What should ${audience} look for in a ${keyword} provider?`,
    `How do I know if ${keyword} is working?`,
  ]

  const internalLinkTargets = [
    `/services/ with pillar-relevant service (e.g., /services/seo)`,
    `/industries/ with ${audience.split(' ').slice(-1)[0]}-relevant industry page`,
    `/resources/glossary/ for term definitions mentioned in-text`,
    `/case-studies/ with relevant client example`,
    `/blog/ with previously published related post`,
  ]

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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Content Brief Generator</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Generator</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">Content Brief Generator</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">Instant SEO content brief from a target keyword, audience, and intent. Get title, meta, H1, suggested H2s, FAQ questions, word-count target, and internal link targets.</p>
            <p className="mt-2 font-mono text-xs text-ash">Free forever. No signup. Heuristic-based (no AI API required).</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Inputs</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Target keyword</label>
                  <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Target audience</label>
                  <input type="text" value={audience} onChange={(e) => setAudience(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Search intent</label>
                  <select value={intent} onChange={(e) => setIntent(e.target.value as typeof intent)} className={inputClass}>
                    <option value="informational">Informational (how to, what is)</option>
                    <option value="commercial">Commercial (comparison, evaluation)</option>
                    <option value="transactional">Transactional (buy, quote)</option>
                    <option value="navigational">Navigational (brand/name)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">Brief</h2>
              <div className="space-y-6">
                <div className="bg-cream p-6 border border-border">
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Target word count</div>
                  <div className="font-heading text-lg font-semibold text-ink">{wordTarget}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">Title tag (max 60 chars)</div>
                  <div className="bg-cream p-4 border border-border font-mono text-sm text-ink">{titleTag}</div>
                  <p className="mt-1 text-xs text-ash">{titleTag.length} chars</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">Meta description (max 160 chars)</div>
                  <div className="bg-cream p-4 border border-border font-mono text-sm text-ink">{metaDescription}</div>
                  <p className="mt-1 text-xs text-ash">{metaDescription.length} chars</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">H1</div>
                  <div className="bg-cream p-4 border border-border font-mono text-sm text-ink">{h1}</div>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">Suggested H2 structure</div>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-ink">
                    {h2s.map((h2, i) => (<li key={i}>{h2}</li>))}
                  </ol>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">Questions to answer (FAQ)</div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-ink">
                    {questions.map((q, i) => (<li key={i}>{q}</li>))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">Internal link targets</div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-ink">
                    {internalLinkTargets.map((t, i) => (<li key={i}>{t}</li>))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
