import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { coreServiceLeadPages } from '@/data/service-lead-pages-core'

const page = coreServiceLeadPages.seoAudit

export const metadata = getIndustryLeadMetadata(page)

export default function SEOAuditPage() {
  return <IndustryLeadPage page={page} />
}
