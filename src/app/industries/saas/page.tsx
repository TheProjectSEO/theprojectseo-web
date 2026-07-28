import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata, industryLeadPages } from '@/data/industry-lead-pages'

const page = industryLeadPages.saas

export const metadata = getIndustryLeadMetadata(page)

export default function SaaSSEOPage() {
  return <IndustryLeadPage page={page} />
}
