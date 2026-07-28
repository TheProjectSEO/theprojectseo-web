import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { scaleServiceLeadPages } from '@/data/service-lead-pages-scale'

const page = scaleServiceLeadPages.enterprise

export const metadata = getIndustryLeadMetadata(page)

export default function EnterpriseSeoPage() {
  return <IndustryLeadPage page={page} />
}
