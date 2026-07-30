import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata, industryLeadPages } from '@/data/industry-lead-pages'

const page = industryLeadPages.startups

export const metadata = getIndustryLeadMetadata(page)

export default function StartupsSEOPage() {
  return <IndustryLeadPage page={page} />
}
