import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { AgentAvatar } from '@/components/agent-avatar'
import { Button } from '@/components/button'

const agents = [
  { type: 'nexus' as const, name: 'NEXUS', role: 'Internal Links', desc: 'Maps and builds internal link architecture for maximum topical relevance and crawl efficiency.' },
  { type: 'atlas' as const, name: 'ATLAS', role: 'Schema Markup', desc: 'Generates and validates JSON-LD structured data for every page type automatically.' },
  { type: 'vector' as const, name: 'VECTOR', role: 'Content Optimization', desc: 'Uses embeddings and semantic analysis to optimize content for topical completeness.' },
  { type: 'herald' as const, name: 'HERALD', role: 'Digital PR', desc: 'Identifies high-authority outreach targets and tracks placement success for link acquisition.' },
  { type: 'sentinel' as const, name: 'SENTINEL', role: 'Technical SEO', desc: 'Monitors site health, Core Web Vitals, and indexation issues around the clock.' },
  { type: 'oracle' as const, name: 'ORACLE', role: 'Keyword Intelligence', desc: 'Discovers untapped keyword opportunities and prioritizes targets by traffic potential.' },
  { type: 'phantom' as const, name: 'PHANTOM', role: 'Competitor Intelligence', desc: 'Monitors competitor rankings, content changes, and backlink acquisitions silently.' },
  { type: 'forge' as const, name: 'FORGE', role: 'Content Strategy', desc: 'Builds topical authority maps, plans content clusters, and identifies content gaps.' },
]

interface AIAgentsShowcaseProps {
  subheading?: string
  heading?: string
  lead?: string
  dark?: boolean
}

export function AIAgentsShowcase({
  subheading = 'AI-Powered SEO',
  heading = '8 AI agents working on your SEO — around the clock.',
  lead = 'Our proprietary AI agents augment the team\u2019s expertise, handling repetitive analysis and monitoring so we can focus on strategy that moves the needle. And we\u2019re constantly building more.',
  dark = false,
}: AIAgentsShowcaseProps) {
  return (
    <div className={dark ? 'bg-ink py-24' : 'py-24'}>
      <Container>
        <div className="text-center mb-16">
          <Subheading dark={dark}>{subheading}</Subheading>
          <Heading as="h2" dark={dark} className="mt-2 max-w-3xl mx-auto">
            {heading}
          </Heading>
          <p className={`mt-6 text-lg leading-[1.65] max-w-2xl mx-auto ${dark ? 'text-white/60' : 'text-slate'}`}>
            {lead}
          </p>
        </div>

        <div className={`grid grid-cols-2 gap-px lg:grid-cols-4 ${dark ? 'bg-white/10' : 'bg-border-strong'}`}>
          {agents.map((agent) => (
            <div
              key={agent.name}
              className={`p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${dark ? 'bg-ink' : 'bg-paper'}`}
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-md bg-accent-soft">
                <AgentAvatar type={agent.type} />
              </div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
                {agent.name}
              </p>
              <h3 className={`font-heading text-sm font-semibold mt-1 ${dark ? 'text-white' : 'text-ink'}`}>
                {agent.role}
              </h3>
              <p className={`text-xs leading-relaxed mt-2 ${dark ? 'text-white/50' : 'text-slate'}`}>
                {agent.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className={`text-sm ${dark ? 'text-white/40' : 'text-ash'}`}>
            8 agents today — we&apos;re constantly developing and deploying new agents as SEO evolves.
          </p>
          <div className="mt-4">
            <Button variant={dark ? 'outline' : 'ghost'} href="/services/ai-seo-agent">
              Learn more about our AI agents
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
