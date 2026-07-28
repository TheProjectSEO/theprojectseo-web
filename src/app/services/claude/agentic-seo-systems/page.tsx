import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { agenticServiceLeadPages } from '@/data/service-lead-pages-agentic'

const page = agenticServiceLeadPages.agenticSystems

export const metadata = getIndustryLeadMetadata(page)

export default function AgenticSeoSystemsPage() {
  return <IndustryLeadPage page={page} />
}
