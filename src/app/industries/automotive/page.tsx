import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { growthIndustryLeadPages } from '@/data/industry-lead-pages-growth'

const page = growthIndustryLeadPages.automotive

export const metadata = getIndustryLeadMetadata(page)

export default function AutomotiveSEOPage() {
  return <IndustryLeadPage page={page} />
}
