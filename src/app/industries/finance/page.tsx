import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata, industryLeadPages } from '@/data/industry-lead-pages'

const page = industryLeadPages.finance

export const metadata = getIndustryLeadMetadata(page)

export default function FinancialServicesSEOPage() {
  return <IndustryLeadPage page={page} />
}
