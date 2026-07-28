import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { growthServiceLeadPages } from '@/data/service-lead-pages-growth'

const page = growthServiceLeadPages.localSeo

export const metadata = getIndustryLeadMetadata(page)

export default function LocalSEOPage() {
  return <IndustryLeadPage page={page} />
}
