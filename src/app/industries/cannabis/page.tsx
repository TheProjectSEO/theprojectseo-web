import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { regulatedIndustryLeadPages } from '@/data/industry-lead-pages-regulated'

const page = regulatedIndustryLeadPages.cannabis

export const metadata = getIndustryLeadMetadata(page)

export default function CannabisSEOPage() {
  return <IndustryLeadPage page={page} />
}
