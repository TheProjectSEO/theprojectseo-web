import { IndustryLeadPage } from '@/components/industry-lead-page'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'
import { regulatedIndustryLeadPages } from '@/data/industry-lead-pages-regulated'

const page = regulatedIndustryLeadPages.cybersecurity

export const metadata = getIndustryLeadMetadata(page)

export default function CybersecuritySEOPage() {
  return <IndustryLeadPage page={page} />
}
