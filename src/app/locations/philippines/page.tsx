import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { locationLeadPages } from '@/data/location-lead-pages'

const page = locationLeadPages.philippines

export const metadata = getIndustryLeadMetadata(page)

export default function PhilippinesSeoPage() {
  return <IndustryLeadPage page={page} />
}
