import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { coreServiceLeadPages } from '@/data/service-lead-pages-core'

const page = coreServiceLeadPages.seo

export const metadata = getIndustryLeadMetadata(page)

export default function SEOServicePage() {
  return <IndustryLeadPage page={page} />
}
