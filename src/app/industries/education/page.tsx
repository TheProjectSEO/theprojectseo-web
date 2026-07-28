import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { growthIndustryLeadPages } from '@/data/industry-lead-pages-growth'

const page = growthIndustryLeadPages.education

export const metadata = getIndustryLeadMetadata(page)

export default function EducationSEOPage() {
  return <IndustryLeadPage page={page} />
}
