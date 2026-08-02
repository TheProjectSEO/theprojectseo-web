import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesCombined,
  CircleCheck,
  FileSearch,
  Repeat2,
  SearchCheck,
} from "lucide-react";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { HeroAnimation } from "@/components/hero-animation";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "How to Measure AI Search Visibility Across 200 Prompts",
  description:
    "A defensible AI visibility measurement method for ChatGPT, Google AI features, Claude, Gemini and Perplexity: prompt panels, repeated observations, citations, referrals and qualified demand.",
  alternates: { canonical: "/research/ai-visibility-measurement" },
  openGraph: {
    title: "How to Measure AI Search Visibility Across 200 Prompts",
    description:
      "A practical method for measuring generated-answer visibility without inventing a permanent AI ranking.",
    type: "article",
    url: "https://theprojectseo.com/research/ai-visibility-measurement",
  },
};

const sources = [
  {
    label: "Google Search: AI features and your website",
    href: "https://developers.google.com/search/docs/appearance/ai-features",
    use: "Eligibility, query fan-out and Search Console measurement",
  },
  {
    label: "Google: Optimizing for generative AI features",
    href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?authuser=4&hl=en",
    use: "Current guidance on unique, useful and non-commodity content",
  },
  {
    label: "OpenAI: ChatGPT search",
    href: "https://help.openai.com/en/articles/9237897-chatgpt-search",
    use: "Query rewriting, source links and OAI-SearchBot access",
  },
  {
    label: "OpenAI: Publishers and developers FAQ",
    href: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
    use: "ChatGPT referral attribution and search crawler controls",
  },
  {
    label: "Anthropic: Web search in Claude",
    href: "https://support.anthropic.com/en/articles/10684626-enabling-and-using-web-search",
    use: "Live web search, citations and location-sensitive answers",
  },
  {
    label: "Perplexity: Crawler documentation",
    href: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers",
    use: "Search indexing, user fetches and crawler verification",
  },
];

const observationFields = [
  "Exact prompt and prompt-family ID",
  "Platform, model and user interface",
  "Market, language and location context",
  "Whether live web search was active",
  "Timestamp and repeat number",
  "Brand inclusion and shortlist order",
  "Recommendation versus passing mention",
  "Cited brand URL and every source URL",
  "Visible search queries or query fan-out",
  "Competitors included in the same answer",
  "Factual accuracy and sentiment",
  "AI referral sessions, leads and revenue",
];

const faq = [
  {
    question: "Can a company rank number one in ChatGPT?",
    answer:
      "Not in the same stable, query-position sense used for a conventional search result. Generated answers can change with the prompt, model, interface, market, web-search state and time. The defensible unit is a repeated observation under a recorded condition.",
  },
  {
    question: "Why use 200 prompts instead of one brand query?",
    answer:
      "The 200-prompt registry begins with 50 commercial prompt families and expands each into canonical, persona, evidence and decision variants. That exposes wording sensitivity while keeping every variation tied to the same buying problem and page owner.",
  },
  {
    question: "Should every prompt run on every platform and in every market?",
    answer:
      "No. That creates an expensive Cartesian product without guaranteeing a better decision. Use a small weekly sentinel panel, rotate the remaining variants across platforms and markets, and run event-based checks after material releases or model changes.",
  },
  {
    question: "Does an AI citation prove commercial impact?",
    answer:
      "No. A citation is an observable source-selection signal. It should be joined with AI referrals, assisted conversions, qualified leads and revenue before it is treated as a business outcome.",
  },
];

export default function AiVisibilityMeasurementPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id":
                "https://theprojectseo.com/research/ai-visibility-measurement#article",
              headline: metadata.title,
              description: metadata.description,
              url: "https://theprojectseo.com/research/ai-visibility-measurement",
              datePublished: "2026-07-29",
              dateModified: "2026-07-29",
              author: {
                "@type": "Person",
                name: "Aditya Aman",
                url: "https://theprojectseo.com/company",
              },
              publisher: {
                "@type": "Organization",
                "@id": "https://theprojectseo.com/#organization",
              },
              citation: sources.map((source) => source.href),
              about: [
                "AI search visibility",
                "Generative engine optimization",
                "ChatGPT search",
                "Google AI features",
                "Claude web search",
                "Perplexity search",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ],
        }}
      />

      <section className="relative border-b border-border">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="mx-auto max-w-6xl py-20 sm:py-28 lg:py-36">
            <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  Research method · Updated 29 July 2026
                </p>
                <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,7vw,92px)] font-medium leading-[0.94] tracking-[-0.03em] text-ink">
                  Measure AI visibility without inventing an{" "}
                  <span className="text-accent">AI ranking.</span>
                </h1>
                <p className="mt-8 max-w-3xl text-xl leading-9 text-stone">
                  Use a controlled prompt panel, repeat every condition and
                  record the answer, sources, competitors, accuracy, referrals
                  and qualified demand. A mention is an observation. It becomes
                  useful only when the context and outcome stay attached.
                </p>
              </div>
              <div className="border border-border-strong bg-paper p-7 shadow-[12px_12px_0_0_var(--color-cream)]">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-ash">
                  TheProjectSEO registry
                </p>
                <p className="mt-3 font-display text-6xl font-semibold text-accent">
                  50 → 200
                </p>
                <p className="mt-3 text-sm leading-6 text-slate">
                  Fifty commercial prompt families, each expanded into
                  canonical, persona, evidence and decision phrasings.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Direct answer
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Prompt variation is not noise to remove. It is a condition to
                control.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate">
                ChatGPT can rewrite one question into several targeted searches.
                Google describes a similar query fan-out process for its AI
                features. Claude may use live web search and location context.
                That means wording, model, interface, market and time can change
                the sources and shortlist. We preserve those conditions and run
                the same prompt three times before comparing it with another
                period.
              </p>
            </div>

            <div className="mt-12 grid gap-px bg-border-strong md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: SearchCheck,
                  title: "Canonical",
                  body: "The clean commercial question used as the family baseline.",
                },
                {
                  icon: Repeat2,
                  title: "Persona",
                  body: "The same need with buyer role and company context added.",
                },
                {
                  icon: FileSearch,
                  title: "Evidence",
                  body: "The same need with explicit proof and validation criteria.",
                },
                {
                  icon: ChartNoAxesCombined,
                  title: "Decision",
                  body: "The same need framed as a comparison or next-step decision.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <article key={title} className="bg-paper p-7">
                  <Icon aria-hidden="true" className="size-6 text-accent" />
                  <h3 className="mt-6 font-heading text-2xl font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-cream py-20 sm:py-28">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Observation record
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Keep the answer and its operating conditions together.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate">
                Aggregate visibility scores hide the reason an answer changed.
                These fields keep the raw observation available for audit,
                diagnosis and commercial attribution.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {observationFields.map((field, index) => (
                <div
                  key={field}
                  className="flex gap-4 border border-border-strong bg-paper p-4"
                >
                  <span className="font-mono text-xs font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-ink">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                What can improve source selection
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Build pages worth retrieving, citing and trusting.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate">
                Google says there are no additional technical requirements or
                special AI schema files for its AI features beyond normal Search
                eligibility. OpenAI, Anthropic and Perplexity document search
                crawlers that publishers can allow. The practical work remains
                strong search fundamentals plus sources that add first-hand
                information a generated answer can verify.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Answer the real decision",
                  body: "Give the buyer a direct answer, comparison criteria, limitations and a useful next step. Do not manufacture separate thin pages for every prompt wording.",
                },
                {
                  title: "Publish original evidence",
                  body: "Use named methods, dates, screenshots, definitions, before-and-after validation and project-specific caveats. Commodity summaries give a retrieval system little reason to choose you.",
                },
                {
                  title: "Make entities unambiguous",
                  body: "Keep the company, people, services, projects, locations and evidence consistently named and internally connected. Correct inaccurate facts at the source rather than trying to manipulate an answer.",
                },
                {
                  title: "Protect crawl and index access",
                  body: "Verify Google and Bing indexability and make an explicit choice for OAI-SearchBot, Claude-SearchBot, PerplexityBot and their user-fetch agents. Training controls are not the same as search visibility controls.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="border border-border-strong p-7 sm:p-9"
                >
                  <CircleCheck
                    aria-hidden="true"
                    className="size-6 text-accent"
                  />
                  <h3 className="mt-6 font-heading text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-ink py-20 text-white sm:py-28">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                What Expressway.PH teaches us
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                Task ownership can travel from search results into generated
                answers.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Expressway.PH was organized around real driver tasks—tolls,
                routes, exits, RFID systems, restrictions, traffic and policy
                updates—rather than a disconnected volume of generic articles. A
                supplied July 2026 Ahrefs snapshot showed 49.2K estimated
                monthly organic traffic, 6.8K keywords, 3.4K AI Overview
                responses and 2.4K ChatGPT responses.
              </p>
              <p className="mt-5 text-sm leading-7 text-white/50">
                Those figures are point-in-time third-party observations. They
                are not audited revenue, visitor counts from the AI platforms or
                a guaranteed outcome.
              </p>
              <Link
                href="/case-studies/expressway-ph"
                className="mt-8 inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-accent hover:text-accent"
              >
                Review the Expressway.PH evidence
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <div className="border border-white/15 bg-white/[0.04] p-7 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                Applied to TheProjectSEO
              </p>
              <ol className="mt-6 space-y-5 text-[15px] leading-7 text-white/70">
                <li>
                  <strong className="text-white">
                    01 · Own the buying task.
                  </strong>{" "}
                  Map every commercial prompt family to one credible page
                  instead of creating a page for every wording.
                </li>
                <li>
                  <strong className="text-white">02 · Show the work.</strong>{" "}
                  Connect methodology, pricing, named project evidence, people
                  and implementation scope.
                </li>
                <li>
                  <strong className="text-white">
                    03 · Observe the answer.
                  </strong>{" "}
                  Run three times, retain citations and competitors, and
                  separate mention from recommendation.
                </li>
                <li>
                  <strong className="text-white">04 · Measure demand.</strong>{" "}
                  Join GSC, Bing, server logs, AI referrals, qualified forms,
                  pipeline and revenue.
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Primary sources
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Platform claims should remain traceable.
              </h2>
            </div>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-2 py-5 sm:grid-cols-[1fr_1fr_auto] sm:items-center"
                >
                  <span className="font-semibold text-ink group-hover:text-accent">
                    {source.label}
                  </span>
                  <span className="text-sm text-slate">{source.use}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-accent"
                  />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-cream py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Questions the method should answer
            </p>
            <div className="mt-8 divide-y divide-border-strong border-y border-border-strong">
              {faq.map((item) => (
                <article key={item.question} className="py-7">
                  <h2 className="font-heading text-2xl font-semibold text-ink">
                    {item.question}
                  </h2>
                  <p className="mt-3 max-w-4xl text-[16px] leading-8 text-slate">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Need the implementation?
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Start with the prompt families tied to qualified demand.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                We will map the questions, page owners, source gaps and
                measurement conditions before recommending content or technical
                changes. The goal is not more prompt screenshots. It is
                attributable search demand across Google and generated answers.
              </p>
              <Link
                href="/services/ai-search/llm-visibility-tracking"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                Review AI visibility tracking
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <LeadForm
              variant="compact"
              submitText="Request an AI visibility review"
            />
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
