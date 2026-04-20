'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

export default function SitemapGeneratorPage() {
  const [urls, setUrls] = useState('https://example.com/\nhttps://example.com/about\nhttps://example.com/contact\nhttps://example.com/blog')
  const [defaultPriority, setDefaultPriority] = useState(0.8)
  const [defaultChangefreq, setDefaultChangefreq] = useState<'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'>('monthly')

  const generate = () => {
    const today = new Date().toISOString().split('T')[0]
    const urlList = urls.split('\n').map((u) => u.trim()).filter(Boolean)
    const entries = urlList.map((url) => {
      const isHomepage = url.split('/').filter(Boolean).length <= 2
      const priority = isHomepage ? '1.0' : defaultPriority.toFixed(1)
      const changefreq = isHomepage ? 'weekly' : defaultChangefreq
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    }).join('\n')
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`
  }

  const output = generate()
  const urlCount = urls.split('\n').map((u) => u.trim()).filter(Boolean).length
  const copy = () => navigator.clipboard.writeText(output)

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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Sitemap Generator</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Generator</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">XML Sitemap Generator</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">Paste a list of URLs, get a valid XML sitemap. Homepage automatically detected and assigned priority 1.0. Everything else uses your defaults.</p>
            <p className="mt-2 font-mono text-xs text-ash">Free forever. No signup. Runs in your browser.</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-semibold text-ink mb-8">URLs</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>URLs (one per line, with https://)</label>
                  <textarea value={urls} onChange={(e) => setUrls(e.target.value)} rows={12} className={`${inputClass} font-mono text-xs`} />
                  <p className="mt-1 text-xs text-ash">{urlCount} URL{urlCount === 1 ? '' : 's'}</p>
                </div>
                <div>
                  <label className={labelClass}>Default change frequency</label>
                  <select value={defaultChangefreq} onChange={(e) => setDefaultChangefreq(e.target.value as typeof defaultChangefreq)} className={inputClass}>
                    <option value="always">always</option>
                    <option value="hourly">hourly</option>
                    <option value="daily">daily</option>
                    <option value="weekly">weekly</option>
                    <option value="monthly">monthly</option>
                    <option value="yearly">yearly</option>
                    <option value="never">never</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Default priority (0.0 - 1.0)</label>
                  <input type="number" step={0.1} min={0} max={1} value={defaultPriority} onChange={(e) => setDefaultPriority(Number(e.target.value))} className={inputClass} />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-xl font-semibold text-ink">Output</h2>
                <button onClick={copy} className="font-mono text-xs uppercase tracking-[0.1em] text-accent hover:text-ink transition-colors">
                  Copy to clipboard
                </button>
              </div>
              <pre className="bg-ink text-paper p-6 font-mono text-xs leading-relaxed overflow-x-auto max-h-[600px] overflow-y-auto">{output}</pre>
              <p className="mt-4 text-xs text-ash">Save as <code className="font-mono text-accent">sitemap.xml</code> at your site root, then reference it in <code className="font-mono text-accent">robots.txt</code> and submit to Google Search Console.</p>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
