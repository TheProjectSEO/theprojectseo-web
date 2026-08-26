import { SeoEditorialPage } from '@/components/seo-editorial-page'
import { buildEditorialMetadata } from '@/data/editorial-article-types'
import { getEditorialArticle } from '@/data/editorial-articles'

const article = getEditorialArticle('how-to-choose-seo-company')!

export const metadata = buildEditorialMetadata(article)

export default function Page() {
  return <SeoEditorialPage article={article} />
}
