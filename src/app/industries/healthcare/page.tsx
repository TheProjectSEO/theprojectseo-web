import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata, industryLeadPages } from '@/data/industry-lead-pages'

const page = industryLeadPages.healthcare

export const metadata = getIndustryLeadMetadata(page)

export default function HealthcareSEOPage() {
  return <IndustryLeadPage page={page} />
}
