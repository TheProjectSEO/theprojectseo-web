import { SeoEditorialPage } from '@/components/seo-editorial-page'
import { buildEditorialMetadata } from '@/data/editorial-article-types'
import { getEditorialArticle } from '@/data/editorial-articles'

const article = getEditorialArticle('google-algorithm-updates-2024')!

export const metadata = buildEditorialMetadata(article)

export default function Page() {
  return <SeoEditorialPage article={article} />
}
