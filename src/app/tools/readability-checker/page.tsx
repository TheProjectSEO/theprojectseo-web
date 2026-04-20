'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { LeadForm } from '@/components/lead-form'

interface ReadabilityScores {
  wordCount: number
  sentenceCount: number
  syllableCount: number
  avgWordsPerSentence: number
  avgSyllablesPerWord: number
  fleschKincaid: number
  smogIndex: number
  gunningFog: number
  automatedReadabilityIndex: number
  colemanLiau: number
}

function countSyllables(word: string): number {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, '')
  if (cleaned.length === 0) return 0
  if (cleaned.length <= 3) return 1
  let count = 0
  let prev = false
  for (const ch of cleaned) {
    const isVowel = 'aeiouy'.includes(ch)
    if (isVowel && !prev) count++
    prev = isVowel
  }
  if (cleaned.endsWith('e') && count > 1) count--
  return Math.max(1, count)
}

function tokenize(text: string): { words: string[]; sentences: number; letterCount: number } {
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
  const words = text.match(/\b[a-zA-Z'-]+\b/g) || []
  const letterCount = text.replace(/[^a-zA-Z]/g, '').length
  return { words, sentences: Math.max(1, sentences), letterCount }
}

function countComplexWords(words: string[]): number {
  return words.filter((w) => countSyllables(w) >= 3).length
}

function calculateReadability(text: string): ReadabilityScores {
  const { words, sentences, letterCount } = tokenize(text)
  const wordCount = words.length
  if (wordCount < 10) {
    return {
      wordCount,
      sentenceCount: sentences,
      syllableCount: 0,
      avgWordsPerSentence: 0,
      avgSyllablesPerWord: 0,
      fleschKincaid: 0,
      smogIndex: 0,
      gunningFog: 0,
      automatedReadabilityIndex: 0,
      colemanLiau: 0,
    }
  }

  const syllableCount = words.reduce((sum, w) => sum + countSyllables(w), 0)
  const avgWordsPerSentence = wordCount / sentences
  const avgSyllablesPerWord = syllableCount / wordCount
  const complexWords = countComplexWords(words)

  // Flesch-Kincaid Grade Level
  const fleschKincaid = 0.39 * avgWordsPerSentence + 11.8 * avgSyllablesPerWord - 15.59

  // SMOG Index (requires >= 30 sentences for accuracy, estimated for shorter)
  const smogIndex = 3 + Math.sqrt(complexWords * (30 / sentences))

  // Gunning Fog Index
  const gunningFog = 0.4 * (avgWordsPerSentence + 100 * (complexWords / wordCount))

  // Automated Readability Index
  const charsPerWord = letterCount / wordCount
  const automatedReadabilityIndex = 4.71 * charsPerWord + 0.5 * avgWordsPerSentence - 21.43

  // Coleman-Liau Index
  const L = (letterCount / wordCount) * 100
  const S = (sentences / wordCount) * 100
  const colemanLiau = 0.0588 * L - 0.296 * S - 15.8

  return {
    wordCount,
    sentenceCount: sentences,
    syllableCount,
    avgWordsPerSentence: Math.round(avgWordsPerSentence * 10) / 10,
    avgSyllablesPerWord: Math.round(avgSyllablesPerWord * 100) / 100,
    fleschKincaid: Math.max(0, Math.round(fleschKincaid * 10) / 10),
    smogIndex: Math.max(0, Math.round(smogIndex * 10) / 10),
    gunningFog: Math.max(0, Math.round(gunningFog * 10) / 10),
    automatedReadabilityIndex: Math.max(0, Math.round(automatedReadabilityIndex * 10) / 10),
    colemanLiau: Math.max(0, Math.round(colemanLiau * 10) / 10),
  }
}

function gradeColor(grade: number): string {
  if (grade <= 8) return 'text-green-600'
  if (grade <= 10) return 'text-blue-600'
  if (grade <= 12) return 'text-amber-600'
  return 'text-red-600'
}

function gradeBg(grade: number): string {
  if (grade <= 8) return 'bg-green-50 border-green-200'
  if (grade <= 10) return 'bg-blue-50 border-blue-200'
  if (grade <= 12) return 'bg-amber-50 border-amber-200'
  return 'bg-red-50 border-red-200'
}

function gradeLabel(grade: number): string {
  if (grade <= 6) return 'Very Easy'
  if (grade <= 8) return 'Easy'
  if (grade <= 10) return 'Target Range'
  if (grade <= 12) return 'Moderate'
  if (grade <= 14) return 'Difficult'
  return 'Very Difficult'
}

export default function ReadabilityCheckerPage() {
  const [text, setText] = useState('')
  const [scores, setScores] = useState<ReadabilityScores | null>(null)

  function handleCheck() {
    if (text.trim().length < 10) return
    setScores(calculateReadability(text))
  }

  const metrics = scores
    ? [
        { name: 'Flesch-Kincaid Grade Level', value: scores.fleschKincaid, info: 'Most widely used. Targets US school grade. Grade 8-10 is ideal for web content.' },
        { name: 'SMOG Index', value: scores.smogIndex, info: 'Measures polysyllabic word density. More conservative than FK. Common in healthcare writing.' },
        { name: 'Gunning Fog Index', value: scores.gunningFog, info: 'Focuses on sentence length and complex words. Good for business writing assessment.' },
        { name: 'Automated Readability Index', value: scores.automatedReadabilityIndex, info: 'Uses character count instead of syllable count. Faster and correlates well with FK.' },
        { name: 'Coleman-Liau Index', value: scores.colemanLiau, info: 'Based on letters per word and sentences per 100 words. Less sensitive to syllabication errors.' },
      ]
    : []

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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Readability Checker</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Tool</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              Readability Checker
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
              Paste any text to get five readability scores instantly: Flesch-Kincaid, SMOG, Gunning Fog,
              Automated Readability Index, and Coleman-Liau. Target Grade 8-10 for most web content.
            </p>
            <p className="mt-2 font-mono text-xs text-ash">Free forever. No signup. All calculations run in your browser.</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-semibold text-ink mb-4">Paste your text</h2>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your article, blog post, landing page copy, or any text here. Works best with 100+ words."
                className="w-full h-80 rounded-md border border-border-emphasis bg-paper px-4 py-3 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent resize-y"
              />
              <div className="flex items-center justify-between mt-3">
                <span className="font-mono text-xs text-ash">
                  {text.split(/\s+/).filter(Boolean).length} words
                </span>
                <button
                  onClick={handleCheck}
                  disabled={text.trim().split(/\s+/).length < 10}
                  className="px-6 py-2 bg-accent text-white font-heading font-semibold text-sm rounded-md hover:bg-accent/90 disabled:opacity-50 transition-colors"
                >
                  Check Readability
                </button>
              </div>
              {text.trim().length > 0 && text.split(/\s+/).filter(Boolean).length < 10 && (
                <p className="mt-2 text-xs text-amber-600">Enter at least 10 words for accurate scores.</p>
              )}
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-ink mb-4">Scores</h2>

              {!scores && (
                <div className="h-80 flex items-center justify-center border border-dashed border-border text-sm text-ash text-center px-8">
                  Paste text on the left and click Check Readability to see your scores.
                </div>
              )}

              {scores && scores.wordCount < 10 && (
                <div className="p-6 bg-amber-50 border border-amber-200 text-sm text-amber-700">
                  Not enough text. Add at least 10 words for meaningful scores.
                </div>
              )}

              {scores && scores.wordCount >= 10 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-px bg-border-strong mb-2">
                    <div className="bg-cream p-4 text-center">
                      <div className="font-mono text-2xl font-black text-ink">{scores.wordCount}</div>
                      <div className="font-mono text-xs uppercase tracking-wider text-ash mt-1">Words</div>
                    </div>
                    <div className="bg-cream p-4 text-center">
                      <div className="font-mono text-2xl font-black text-ink">{scores.sentenceCount}</div>
                      <div className="font-mono text-xs uppercase tracking-wider text-ash mt-1">Sentences</div>
                    </div>
                    <div className="bg-cream p-4 text-center">
                      <div className="font-mono text-2xl font-black text-ink">{scores.avgWordsPerSentence}</div>
                      <div className="font-mono text-xs uppercase tracking-wider text-ash mt-1">Avg Words/Sent</div>
                    </div>
                  </div>

                  {metrics.map((m) => (
                    <div key={m.name} className={`p-4 border ${gradeBg(m.value)}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-heading text-sm font-semibold text-ink">{m.name}</span>
                        <div className="flex items-center gap-2">
                          <span className={`font-mono text-xl font-black ${gradeColor(m.value)}`}>
                            {m.value}
                          </span>
                          <span className={`font-mono text-xs uppercase tracking-wider ${gradeColor(m.value)}`}>
                            {gradeLabel(m.value)}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-slate">{m.info}</p>
                    </div>
                  ))}

                  <div className="mt-4 bg-cream border border-border p-4">
                    <p className="text-xs leading-relaxed text-slate">
                      <strong className="text-ink">Grade scale reference:</strong> Grade 6-8 = Easy (general audience). Grade 8-10 = Standard web content target. Grade 10-12 = Moderate (educated reader). Grade 12+ = Academic or specialist content. Most SEO-optimized content targets Grade 8-10.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-cream py-16 border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-sm uppercase tracking-wider text-accent mb-3">How It Works</p>
            <h2 className="font-heading text-2xl font-semibold text-ink mb-6">Five indexes, one text input</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { name: 'Flesch-Kincaid Grade Level', formula: '0.39 x (words/sentences) + 11.8 x (syllables/words) - 15.59' },
                { name: 'SMOG Index', formula: '3 + sqrt(complex words x 30/sentences). Complex = 3+ syllables.' },
                { name: 'Gunning Fog Index', formula: '0.4 x (words/sentences + 100 x complex words/words)' },
                { name: 'Automated Readability Index', formula: '4.71 x (chars/words) + 0.5 x (words/sentences) - 21.43' },
                { name: 'Coleman-Liau Index', formula: '0.0588 x L - 0.296 x S - 15.8. L = letters/100 words, S = sentences/100 words.' },
              ].map((item) => (
                <div key={item.name} className="bg-paper p-4 border border-border">
                  <div className="font-heading text-sm font-semibold text-ink mb-1">{item.name}</div>
                  <div className="font-mono text-xs text-slate">{item.formula}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-20 border-t border-border">
        <Container>
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div className="lg:sticky lg:top-8">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-3">Need Content That Ranks?</p>
              <h2 className="font-heading text-[clamp(24px,3vw,40px)] font-semibold text-ink leading-tight mb-4">
                Readability is one signal. We optimize all of them.
              </h2>
              <p className="text-base leading-relaxed text-slate">
                Well-written content that misses keyword placement, topical depth, internal linking, and schema markup still does not rank. Our content service combines readability with every on-page signal that matters.
              </p>
            </div>
            <LeadForm variant="compact" submitText="Talk to Us About Content" />
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
