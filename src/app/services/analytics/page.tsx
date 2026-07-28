import { IndustryLeadPage } from '@/components/industry-lead-page'
import { analyticsServiceLeadPages } from '@/data/service-lead-pages-analytics'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'

const page = analyticsServiceLeadPages.analytics

export const metadata = getIndustryLeadMetadata(page)

export default function SeoAnalyticsPage() {
  return <IndustryLeadPage page={page} />
}
