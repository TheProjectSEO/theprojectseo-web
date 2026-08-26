import { contentEditorialArticles } from './editorial-articles-content'
import { commercialEditorialArticles } from './editorial-articles-commercial'
import { growthEditorialArticles } from './editorial-articles-growth'
import { industryEditorialArticles } from './editorial-articles-industry'
import { strategyEditorialArticles } from './editorial-articles-strategy'
import { technicalEditorialArticles } from './editorial-articles-technical'

export const editorialArticles = [
  ...commercialEditorialArticles,
  ...industryEditorialArticles,
  ...strategyEditorialArticles,
  ...technicalEditorialArticles,
  ...growthEditorialArticles,
  ...contentEditorialArticles,
]

export function getEditorialArticle(slug: string) {
  return editorialArticles.find((article) => article.slug === slug)
}
