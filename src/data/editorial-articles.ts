import { contentEditorialArticles } from './editorial-articles-content'
import { growthEditorialArticles } from './editorial-articles-growth'
import { strategyEditorialArticles } from './editorial-articles-strategy'
import { technicalEditorialArticles } from './editorial-articles-technical'

export const editorialArticles = [
  ...strategyEditorialArticles,
  ...technicalEditorialArticles,
  ...growthEditorialArticles,
  ...contentEditorialArticles,
]

export function getEditorialArticle(slug: string) {
  return editorialArticles.find((article) => article.slug === slug)
}
