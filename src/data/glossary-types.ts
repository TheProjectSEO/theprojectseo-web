export type GlossaryCategory =
  | 'seo'
  | 'technical-seo'
  | 'content'
  | 'ai-search'

export type GlossarySource = {
  name: string
  publisher: string
  url: string
  note: string
}

export type GlossaryItem = {
  title: string
  detail: string
}

export type GlossaryTerm = {
  slug: string
  term: string
  category: GlossaryCategory
  shortDefinition: string
  plainEnglish: string
  whyItMatters: string[]
  howItWorks: GlossaryItem[]
  example: {
    scenario: string
    interpretation: string
  }
  mistakes: GlossaryItem[]
  actionSteps: GlossaryItem[]
  measurement: string[]
  relatedSlugs: string[]
  relatedService: { href: string; label: string }
  relatedGuide?: { href: string; label: string }
  faqs: Array<{ question: string; answer: string }>
  sources: GlossarySource[]
  updatedAt: string
}
