import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { methodologyLeadPage } from '@/data/methodology-lead-page'

export const metadata = getIndustryLeadMetadata(methodologyLeadPage)

export default function MethodologyPage() {
  return <IndustryLeadPage page={methodologyLeadPage} />
}
