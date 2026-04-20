'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

type SchemaType = 'Organization' | 'Service' | 'FAQ' | 'HowTo' | 'LocalBusiness'

interface FAQItem {
  question: string
  answer: string
}

interface HowToStep {
  name: string
  text: string
}

function buildOrganizationSchema(fields: Record<string, string>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: fields.name || 'Your Organization',
    url: fields.url || 'https://example.com',
    description: fields.description || '',
    logo: fields.logo ? { '@type': 'ImageObject', url: fields.logo } : undefined,
    contactPoint: fields.phone
      ? {
          '@type': 'ContactPoint',
          telephone: fields.phone,
          contactType: 'customer service',
        }
      : undefined,
    sameAs: fields.sameAs
      ? fields.sameAs.split('\n').map((s) => s.trim()).filter(Boolean)
      : undefined,
  }
}

function buildServiceSchema(fields: Record<string, string>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: fields.name || 'Your Service',
    description: fields.description || '',
    url: fields.url || 'https://example.com',
    provider: {
      '@type': 'Organization',
      name: fields.providerName || 'Your Organization',
    },
    areaServed: fields.areaServed || 'Worldwide',
    serviceType: fields.serviceType || '',
  }
}

function buildFAQSchema(items: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items
      .filter((i) => i.question && i.answer)
      .map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
  }
}

function buildHowToSchema(fields: Record<string, string>, steps: HowToStep[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: fields.name || 'How To',
    description: fields.description || '',
    totalTime: fields.totalTime || undefined,
    step: steps
      .filter((s) => s.name && s.text)
      .map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.text,
      })),
  }
}

function buildLocalBusinessSchema(fields: Record<string, string>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: fields.name || 'Your Business',
    url: fields.url || 'https://example.com',
    telephone: fields.phone || '',
    description: fields.description || '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: fields.street || '',
      addressLocality: fields.city || '',
      addressRegion: fields.region || '',
      postalCode: fields.postalCode || '',
      addressCountry: fields.country || 'US',
    },
    geo: fields.lat && fields.lng
      ? {
          '@type': 'GeoCoordinates',
          latitude: parseFloat(fields.lat),
          longitude: parseFloat(fields.lng),
        }
      : undefined,
    openingHours: fields.openingHours
      ? fields.openingHours.split('\n').map((s) => s.trim()).filter(Boolean)
      : undefined,
  }
}

const inputClass =
  'w-full rounded-md border border-border-emphasis bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent'
const labelClass = 'block font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1.5'
const textareaClass =
  'w-full rounded-md border border-border-emphasis bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent resize-y min-h-[80px]'

export default function SchemaGeneratorPage() {
  const [schemaType, setSchemaType] = useState<SchemaType>('Organization')
  const [fields, setFields] = useState<Record<string, string>>({})
  const [faqItems, setFaqItems] = useState<FAQItem[]>([{ question: '', answer: '' }])
  const [howToSteps, setHowToSteps] = useState<HowToStep[]>([{ name: '', text: '' }])
  const [copied, setCopied] = useState(false)

  function updateField(key: string, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }))
  }

  function buildSchema(): object {
    switch (schemaType) {
      case 'Organization':
        return buildOrganizationSchema(fields)
      case 'Service':
        return buildServiceSchema(fields)
      case 'FAQ':
        return buildFAQSchema(faqItems)
      case 'HowTo':
        return buildHowToSchema(fields, howToSteps)
      case 'LocalBusiness':
        return buildLocalBusinessSchema(fields)
    }
  }

  const output = JSON.stringify(buildSchema(), null, 2)

  function handleCopy() {
    navigator.clipboard.writeText(
      `<script type="application/ld+json">\n${output}\n</script>`
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const schemaTypes: SchemaType[] = ['Organization', 'Service', 'FAQ', 'HowTo', 'LocalBusiness']

  return (
    <main className="overflow-hidden">
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/tools" className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent">
                Tools
              </Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Schema Generator</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Generator</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              Schema Markup Generator
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
              Generate valid JSON-LD schema markup for Organization, Service, FAQ, HowTo, and
              LocalBusiness types. Fill in the fields and copy the output directly into your
              HTML.
            </p>
            <p className="mt-2 font-mono text-xs text-ash">Free forever. No signup. All processing runs in your browser.</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: controls */}
            <div>
              {/* Schema type selector */}
              <div className="mb-8">
                <label className={labelClass}>Schema type</label>
                <div className="flex flex-wrap gap-2">
                  {schemaTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => { setSchemaType(type); setFields({}) }}
                      className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-sm transition-colors ${
                        schemaType === type
                          ? 'bg-accent text-white'
                          : 'border border-border-emphasis text-stone hover:border-accent hover:text-accent'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Organization fields */}
              {schemaType === 'Organization' && (
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Organization name *</label>
                    <input type="text" className={inputClass} value={fields.name || ''} onChange={(e) => updateField('name', e.target.value)} placeholder="TheProjectSEO" />
                  </div>
                  <div>
                    <label className={labelClass}>Website URL *</label>
                    <input type="url" className={inputClass} value={fields.url || ''} onChange={(e) => updateField('url', e.target.value)} placeholder="https://theprojectseo.com" />
                  </div>
                  <div>
                    <label className={labelClass}>Description</label>
                    <textarea className={textareaClass} value={fields.description || ''} onChange={(e) => updateField('description', e.target.value)} placeholder="AI-native SEO agency..." />
                  </div>
                  <div>
                    <label className={labelClass}>Logo URL</label>
                    <input type="url" className={inputClass} value={fields.logo || ''} onChange={(e) => updateField('logo', e.target.value)} placeholder="https://example.com/logo.png" />
                  </div>
                  <div>
                    <label className={labelClass}>Phone number</label>
                    <input type="tel" className={inputClass} value={fields.phone || ''} onChange={(e) => updateField('phone', e.target.value)} placeholder="+1-555-000-0000" />
                  </div>
                  <div>
                    <label className={labelClass}>Social profiles (one per line)</label>
                    <textarea className={textareaClass} value={fields.sameAs || ''} onChange={(e) => updateField('sameAs', e.target.value)} placeholder="https://twitter.com/yourhandle&#10;https://linkedin.com/company/yourco" />
                  </div>
                </div>
              )}

              {/* Service fields */}
              {schemaType === 'Service' && (
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Service name *</label>
                    <input type="text" className={inputClass} value={fields.name || ''} onChange={(e) => updateField('name', e.target.value)} placeholder="Technical SEO Audit" />
                  </div>
                  <div>
                    <label className={labelClass}>Service page URL</label>
                    <input type="url" className={inputClass} value={fields.url || ''} onChange={(e) => updateField('url', e.target.value)} placeholder="https://example.com/services/seo-audit" />
                  </div>
                  <div>
                    <label className={labelClass}>Description *</label>
                    <textarea className={textareaClass} value={fields.description || ''} onChange={(e) => updateField('description', e.target.value)} placeholder="Comprehensive technical SEO audit covering..." />
                  </div>
                  <div>
                    <label className={labelClass}>Provider name</label>
                    <input type="text" className={inputClass} value={fields.providerName || ''} onChange={(e) => updateField('providerName', e.target.value)} placeholder="TheProjectSEO" />
                  </div>
                  <div>
                    <label className={labelClass}>Service type</label>
                    <input type="text" className={inputClass} value={fields.serviceType || ''} onChange={(e) => updateField('serviceType', e.target.value)} placeholder="SEO Audit" />
                  </div>
                  <div>
                    <label className={labelClass}>Area served</label>
                    <input type="text" className={inputClass} value={fields.areaServed || ''} onChange={(e) => updateField('areaServed', e.target.value)} placeholder="Worldwide" />
                  </div>
                </div>
              )}

              {/* FAQ fields */}
              {schemaType === 'FAQ' && (
                <div>
                  <p className="text-sm text-slate mb-5">
                    Add the questions and answers you want to mark up. Each pair becomes a Question entity.
                  </p>
                  <div className="space-y-6">
                    {faqItems.map((item, i) => (
                      <div key={i} className="border border-border p-5">
                        <p className="font-mono text-xs text-ash uppercase tracking-wider mb-4">Question {i + 1}</p>
                        <div className="space-y-4">
                          <div>
                            <label className={labelClass}>Question</label>
                            <input
                              type="text"
                              className={inputClass}
                              value={item.question}
                              onChange={(e) => {
                                const updated = [...faqItems]
                                updated[i] = { ...updated[i], question: e.target.value }
                                setFaqItems(updated)
                              }}
                              placeholder="What is schema markup?"
                            />
                          </div>
                          <div>
                            <label className={labelClass}>Answer</label>
                            <textarea
                              className={textareaClass}
                              value={item.answer}
                              onChange={(e) => {
                                const updated = [...faqItems]
                                updated[i] = { ...updated[i], answer: e.target.value }
                                setFaqItems(updated)
                              }}
                              placeholder="Schema markup is structured data..."
                            />
                          </div>
                        </div>
                        {faqItems.length > 1 && (
                          <button
                            onClick={() => setFaqItems(faqItems.filter((_, idx) => idx !== i))}
                            className="mt-3 font-mono text-xs text-ash hover:text-red-500 uppercase tracking-wider"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setFaqItems([...faqItems, { question: '', answer: '' }])}
                    className="mt-4 font-mono text-xs text-accent uppercase tracking-wider hover:text-accent/80"
                  >
                    + Add question
                  </button>
                </div>
              )}

              {/* HowTo fields */}
              {schemaType === 'HowTo' && (
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>How-to title *</label>
                    <input type="text" className={inputClass} value={fields.name || ''} onChange={(e) => updateField('name', e.target.value)} placeholder="How to do a technical SEO audit" />
                  </div>
                  <div>
                    <label className={labelClass}>Description</label>
                    <textarea className={textareaClass} value={fields.description || ''} onChange={(e) => updateField('description', e.target.value)} placeholder="A step-by-step guide to..." />
                  </div>
                  <div>
                    <label className={labelClass}>Total time (ISO 8601 format)</label>
                    <input type="text" className={inputClass} value={fields.totalTime || ''} onChange={(e) => updateField('totalTime', e.target.value)} placeholder="PT30M (30 minutes) or PT2H (2 hours)" />
                  </div>
                  <div>
                    <p className={labelClass}>Steps</p>
                    <div className="space-y-4">
                      {howToSteps.map((step, i) => (
                        <div key={i} className="border border-border p-4">
                          <p className="font-mono text-xs text-ash uppercase tracking-wider mb-3">Step {i + 1}</p>
                          <div className="space-y-3">
                            <div>
                              <label className={labelClass}>Step name</label>
                              <input
                                type="text"
                                className={inputClass}
                                value={step.name}
                                onChange={(e) => {
                                  const updated = [...howToSteps]
                                  updated[i] = { ...updated[i], name: e.target.value }
                                  setHowToSteps(updated)
                                }}
                                placeholder="Crawl the site"
                              />
                            </div>
                            <div>
                              <label className={labelClass}>Step instructions</label>
                              <textarea
                                className={textareaClass}
                                value={step.text}
                                onChange={(e) => {
                                  const updated = [...howToSteps]
                                  updated[i] = { ...updated[i], text: e.target.value }
                                  setHowToSteps(updated)
                                }}
                                placeholder="Run a full crawl using Screaming Frog..."
                              />
                            </div>
                          </div>
                          {howToSteps.length > 1 && (
                            <button
                              onClick={() => setHowToSteps(howToSteps.filter((_, idx) => idx !== i))}
                              className="mt-2 font-mono text-xs text-ash hover:text-red-500 uppercase tracking-wider"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setHowToSteps([...howToSteps, { name: '', text: '' }])}
                      className="mt-3 font-mono text-xs text-accent uppercase tracking-wider hover:text-accent/80"
                    >
                      + Add step
                    </button>
                  </div>
                </div>
              )}

              {/* LocalBusiness fields */}
              {schemaType === 'LocalBusiness' && (
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Business name *</label>
                    <input type="text" className={inputClass} value={fields.name || ''} onChange={(e) => updateField('name', e.target.value)} placeholder="Acme Local Services" />
                  </div>
                  <div>
                    <label className={labelClass}>Website URL</label>
                    <input type="url" className={inputClass} value={fields.url || ''} onChange={(e) => updateField('url', e.target.value)} placeholder="https://acmelocal.com" />
                  </div>
                  <div>
                    <label className={labelClass}>Phone number</label>
                    <input type="tel" className={inputClass} value={fields.phone || ''} onChange={(e) => updateField('phone', e.target.value)} placeholder="+1-555-000-0000" />
                  </div>
                  <div>
                    <label className={labelClass}>Description</label>
                    <textarea className={textareaClass} value={fields.description || ''} onChange={(e) => updateField('description', e.target.value)} />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Street address</label>
                      <input type="text" className={inputClass} value={fields.street || ''} onChange={(e) => updateField('street', e.target.value)} placeholder="123 Main St" />
                    </div>
                    <div>
                      <label className={labelClass}>City</label>
                      <input type="text" className={inputClass} value={fields.city || ''} onChange={(e) => updateField('city', e.target.value)} placeholder="San Francisco" />
                    </div>
                    <div>
                      <label className={labelClass}>State / Region</label>
                      <input type="text" className={inputClass} value={fields.region || ''} onChange={(e) => updateField('region', e.target.value)} placeholder="CA" />
                    </div>
                    <div>
                      <label className={labelClass}>Postal code</label>
                      <input type="text" className={inputClass} value={fields.postalCode || ''} onChange={(e) => updateField('postalCode', e.target.value)} placeholder="94102" />
                    </div>
                    <div>
                      <label className={labelClass}>Country code</label>
                      <input type="text" className={inputClass} value={fields.country || ''} onChange={(e) => updateField('country', e.target.value)} placeholder="US" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Latitude</label>
                      <input type="text" className={inputClass} value={fields.lat || ''} onChange={(e) => updateField('lat', e.target.value)} placeholder="37.7749" />
                    </div>
                    <div>
                      <label className={labelClass}>Longitude</label>
                      <input type="text" className={inputClass} value={fields.lng || ''} onChange={(e) => updateField('lng', e.target.value)} placeholder="-122.4194" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Opening hours (one per line, e.g. Mo-Fr 09:00-17:00)</label>
                    <textarea className={textareaClass} value={fields.openingHours || ''} onChange={(e) => updateField('openingHours', e.target.value)} placeholder="Mo-Fr 09:00-18:00&#10;Sa 10:00-14:00" />
                  </div>
                </div>
              )}
            </div>

            {/* Right: output */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-lg font-semibold text-ink">Output</h2>
                <button
                  onClick={handleCopy}
                  className="font-mono text-xs uppercase tracking-wider px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy with <script> tag'}
                </button>
              </div>
              <pre className="bg-ink text-white/80 text-xs leading-relaxed p-6 overflow-x-auto rounded-sm max-h-[600px] overflow-y-auto">
                {`<script type="application/ld+json">\n${output}\n</script>`}
              </pre>
              <div className="mt-4 bg-cream border border-border p-4">
                <p className="text-xs leading-relaxed text-slate">
                  Paste this into the <code className="font-mono text-accent">&lt;head&gt;</code> of your
                  HTML. Validate at{' '}
                  <a
                    href="https://search.google.com/test/rich-results"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-accent"
                  >
                    Google Rich Results Test
                  </a>{' '}
                  before deploying.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-cream py-16 border-t border-border">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <p className="font-mono text-sm uppercase tracking-wider text-accent mb-3">Need more schema types?</p>
            <h2 className="font-heading text-2xl font-semibold text-ink mb-4">
              We implement schema at scale.
            </h2>
            <p className="text-sm leading-relaxed text-slate mb-6">
              For sites with hundreds of pages needing schema, manual generation does not scale.
              Our technical SEO service includes schema implementation as a deliverable with
              before/after GSC rich result tracking.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-heading font-semibold text-base transition-all duration-200 hover:bg-accent/90"
            >
              Talk to Us
            </Link>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
