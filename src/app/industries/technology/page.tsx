import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { missionIndustryLeadPages } from '@/data/industry-lead-pages-mission'

const page = missionIndustryLeadPages.technology

export const metadata = getIndustryLeadMetadata(page)

export default function TechnologySEOPage() {
  return <IndustryLeadPage page={page} />
}
