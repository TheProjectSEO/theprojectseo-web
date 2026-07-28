import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { scaleServiceLeadPages } from '@/data/service-lead-pages-scale'

const page = scaleServiceLeadPages.offPage

export const metadata = getIndustryLeadMetadata(page)

export default function OffPageSeoPage() {
  return <IndustryLeadPage page={page} />
}
