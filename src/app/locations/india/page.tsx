import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { locationLeadPages } from '@/data/location-lead-pages'

const page = locationLeadPages.india

export const metadata = getIndustryLeadMetadata(page)

export default function IndiaSeoPage() {
  return <IndustryLeadPage page={page} />
}
