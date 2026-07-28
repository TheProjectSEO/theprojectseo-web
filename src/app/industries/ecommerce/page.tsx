import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata, industryLeadPages } from '@/data/industry-lead-pages'

const page = industryLeadPages.ecommerce

export const metadata = getIndustryLeadMetadata(page)

export default function EcommerceSEOPage() {
  return <IndustryLeadPage page={page} />
}
