import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { scaleServiceLeadPages } from '@/data/service-lead-pages-scale'

const page = scaleServiceLeadPages.automation

export const metadata = getIndustryLeadMetadata(page)

export default function SeoAutomationPage() {
  return <IndustryLeadPage page={page} />
}
