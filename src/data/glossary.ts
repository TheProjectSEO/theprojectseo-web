import { glossaryAiSearch } from './glossary-ai'
import { glossaryFundamentals } from './glossary-fundamentals'
import { glossaryLinksAndContent } from './glossary-links-content'
import { glossaryTechnical } from './glossary-technical'

export type { GlossaryCategory, GlossaryItem, GlossarySource, GlossaryTerm } from './glossary-types'

export const glossary = [
  ...glossaryFundamentals,
  ...glossaryLinksAndContent,
  ...glossaryTechnical,
  ...glossaryAiSearch,
]

export const glossarySlugs = glossary.map((entry) => entry.slug)

export function getGlossaryTermBySlug(slug: string) {
  return glossary.find((entry) => entry.slug === slug)
}
