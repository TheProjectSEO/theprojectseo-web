import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { serviceLeadPages } from '@/data/service-lead-pages'

const page = serviceLeadPages.aiSearch

export const metadata = getIndustryLeadMetadata(page)

export default function AISearchOptimizationPage() {
  return <IndustryLeadPage page={page} />
}
