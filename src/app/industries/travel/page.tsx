import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { missionIndustryLeadPages } from '@/data/industry-lead-pages-mission'

const page = missionIndustryLeadPages.travel

export const metadata = getIndustryLeadMetadata(page)

export default function TravelSEOPage() {
  return <IndustryLeadPage page={page} />
}
