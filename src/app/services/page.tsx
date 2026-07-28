import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { servicesLeadPage } from '@/data/service-lead-page-index'

export const metadata = getIndustryLeadMetadata(servicesLeadPage)

export default function ServicesPage() {
  return <IndustryLeadPage page={servicesLeadPage} />
}
