import type { Metadata } from 'next'

export type EditorialSource = {
  id: string
  name: string
  url: string
  publisher: string
  note: string
}

export type EditorialListItem = {
  title: string
  detail: string
}

export type EditorialTable = {
  headers: string[]
  rows: string[][]
}

export type EditorialSection = {
  id: string
  title: string
  answer: string
  paragraphs?: string[]
  bullets?: EditorialListItem[]
  steps?: EditorialListItem[]
  table?: EditorialTable
  sourceIds?: string[]
}

export type EditorialVisual = {
  afterSection: number
  label: string
  description: string
  aspect?: 'landscape' | 'wide'
}

export type EditorialArticle = {
  slug: string
  targetKeyword: string
  title: string
  metaTitle: string
  description: string
  category: string
  publishedAt: string
  updatedAt: string
  readTime: string
  dek: string
  directAnswer: string
  takeaways: string[]
  audience: string[]
  sections: EditorialSection[]
  faqs: Array<{ question: string; answer: string }>
  sources: EditorialSource[]
  relatedSlugs: string[]
  primaryService: { href: string; label: string }
  secondaryService?: { href: string; label: string }
  conversionTitle: string
  conversionBody: string
  visuals: EditorialVisual[]
}

export function buildEditorialMetadata(article: EditorialArticle): Metadata {
  const canonical = `/blog/${article.slug}`
  return {
    title: article.metaTitle,
    description: article.description,
    alternates: { canonical },
    authors: [{ name: 'Aditya Aman', url: '/company' }],
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://theprojectseo.com${canonical}`,
      siteName: 'TheProjectSEO',
      locale: 'en_US',
      type: 'article',
      publishedTime: `${article.publishedAt}T00:00:00.000Z`,
      modifiedTime: `${article.updatedAt}T00:00:00.000Z`,
      authors: ['Aditya Aman'],
    },
  }
}

