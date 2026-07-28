import { IndustryLeadPage } from '@/components/industry-lead-page'
import { aiSearchDetailPages } from '@/data/ai-search-detail-pages'
import { getIndustryLeadMetadata } from '@/data/industry-lead-pages'

const page = aiSearchDetailPages.chatgpt

export const metadata = getIndustryLeadMetadata(page)

export default function ChatGptSeoPage() {
  return <IndustryLeadPage page={page} />
}
