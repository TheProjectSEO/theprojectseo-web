import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { growthServiceLeadPages } from '@/data/service-lead-pages-growth'

const page = growthServiceLeadPages.seoConsulting

export const metadata = getIndustryLeadMetadata(page)

export default function SEOConsultingPage() {
  return <IndustryLeadPage page={page} />
}
