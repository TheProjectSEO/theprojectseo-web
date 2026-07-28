import { IndustryLeadPage } from '@/components/industry-lead-page'
import { analyticsServiceLeadPages } from '@/data/service-lead-pages-analytics'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'

const page = analyticsServiceLeadPages.technicalReporting

export const metadata = getIndustryLeadMetadata(page)

export default function AutomatedTechnicalReportingPage() {
  return <IndustryLeadPage page={page} />
}
