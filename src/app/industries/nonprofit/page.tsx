import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { missionIndustryLeadPages } from '@/data/industry-lead-pages-mission'

const page = missionIndustryLeadPages.nonprofit

export const metadata = getIndustryLeadMetadata(page)

export default function NonprofitSEOPage() {
  return <IndustryLeadPage page={page} />
}
