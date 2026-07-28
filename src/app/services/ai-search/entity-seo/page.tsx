import { IndustryLeadPage } from '@/components/industry-lead-page'
import { aiSearchDetailPages } from '@/data/ai-search-detail-pages'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'

const page = aiSearchDetailPages.entity

export const metadata = getIndustryLeadMetadata(page)

export default function EntitySeoPage() {
  return <IndustryLeadPage page={page} />
}
