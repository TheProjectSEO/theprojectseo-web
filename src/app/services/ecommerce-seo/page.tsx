import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { growthServiceLeadPages } from '@/data/service-lead-pages-growth'

const page = growthServiceLeadPages.ecommerceSeo

export const metadata = getIndustryLeadMetadata(page)

export default function EcommerceSEOPage() {
  return <IndustryLeadPage page={page} />
}
