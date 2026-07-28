import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Check,
  CircleGauge,
  Database,
  FileCheck2,
  Fingerprint,
  Globe2,
  Link2,
  Network,
  Quote,
  Sparkles,
} from "lucide-react";
import { BiLogoBing } from "react-icons/bi";
import { RiGoogleFill, RiOpenaiFill } from "react-icons/ri";
import { SiClaude, SiGooglegemini, SiPerplexity } from "react-icons/si";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { EvidencePlaceholder } from "@/components/evidence-placeholder";
import { FAQAccordion } from "@/components/faq-accordion";
import { Footer } from "@/components/footer";
import { HeroAnimation } from "@/components/hero-animation";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { CTAFormSection } from "@/components/service-page-sections";
import { Heading } from "@/components/text";
import { caseStudies } from "@/data/case-studies";
import { getEvidenceAsset } from "@/data/evidence-assets";
import { seoTiers } from "@/data/pricing";
import { testimonials } from "@/data/testimonials";

const homeHeroLead =
  "One evidence-led program for organic rankings, AI citations, brand recommendations, and measurable demand.";

const homeHeroDetail =
  "TheProjectSEO is an AI-native SEO agency for companies that need one accountable program across Google, Bing, AI Overviews, ChatGPT, Perplexity, Gemini, Claude, and other generative engines. We combine technical search engine optimization, content, authority, GEO, AEO, entity work, and measurement to improve organic rankings, AI citations, brand recommendations, and qualified demand.";

export const metadata: Metadata = {
  title: "AI-Native SEO Agency for Google & AI Search | TheProjectSEO",
  description:
    "AI-native SEO agency combining SEO, GEO, AEO, technical implementation, content, authority, and AI visibility measurement for Google, Bing, and generative engines.",
  keywords: [
    "AI-native SEO agency",
    "AI search SEO agency",
    "AI-first SEO agency",
    "SEO and GEO agency",
    "GEO SEO agency",
    "LLM SEO agency",
    "generative engine optimization agency",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI-Native SEO Agency for Google & AI Search",
    description: homeHeroLead,
    url: "https://theprojectseo.com",
    siteName: "TheProjectSEO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Native SEO Agency for Google & AI Search",
    description:
      "SEO, GEO, technical implementation, content, authority, and AI visibility measurement in one accountable program.",
  },
};

const platforms = [
  {
    name: "Google & Bing",
    state: "Rank and earn clicks",
    summary:
      "Technical eligibility, intent-matched pages, internal links, authority, and a useful experience remain the foundation across Google and Bing.",
    actions: [
      "Crawl, rendering, indexation, and template QA",
      "Keyword-to-page architecture and intent alignment",
      "Internal linking, structured data, and page experience",
      "Search Console and Bing Webmaster Tools measurement",
    ],
    href: "/services/seo",
    Icons: [RiGoogleFill, BiLogoBing],
    brand: "google-bing",
  },
  {
    name: "Google AI Overviews & AI Mode",
    state: "Become a supporting source",
    summary:
      "Google states that the same core best practices apply to its AI features. Pages must be indexed and eligible to appear with a snippet.",
    actions: [
      "Complete coverage of the question and its subtopics",
      "Concise answer blocks supported by deeper explanation",
      "Visible evidence, authorship, and accurate structured data",
      "Optimization for related-query fan-out, not one phrase",
    ],
    href: "/services/ai-search/google-ai-overviews-optimization",
    Icons: [RiGoogleFill],
    brand: "google-ai",
  },
  {
    name: "ChatGPT Search",
    state: "Be discoverable and cited",
    summary:
      "OpenAI says public sites can appear in ChatGPT search and advises publishers not to block OAI-SearchBot when they want content surfaced.",
    actions: [
      "OAI-SearchBot access and server-log verification",
      "Pages that state facts, scope, dates, and source context",
      "Brand and product entities corroborated off-site",
      "ChatGPT referral tracking separated from mentions",
    ],
    href: "/services/ai-search/chatgpt-seo",
    Icons: [RiOpenaiFill],
    brand: "chatgpt",
  },
  {
    name: "Perplexity",
    state: "Earn source inclusion",
    summary:
      "Perplexity publishes separate crawler guidance for search discovery and user-requested retrieval. Access is only the eligibility layer.",
    actions: [
      "Crawler, WAF, and CDN accessibility checks",
      "Citation-worthy pages with primary information",
      "Stable URLs, clear headings, and extractable passages",
      "Prompt-level source and competitor monitoring",
    ],
    href: "/services/ai-search/perplexity-seo",
    Icons: [SiPerplexity],
    brand: "perplexity",
  },
  {
    name: "Gemini",
    state: "Clarify the entity and evidence",
    summary:
      "We strengthen the same accessible source material Google can discover while monitoring how Gemini describes and recommends the brand.",
    actions: [
      "Consistent organization, product, and expert facts",
      "First-party data linked to its methodology",
      "Topic clusters that resolve adjacent questions",
      "Response monitoring by prompt, market, and date",
    ],
    href: "/services/ai-search/gemini-seo",
    Icons: [SiGooglegemini],
    brand: "gemini",
  },
  {
    name: "Claude",
    state: "Support live-web retrieval",
    summary:
      "We treat Claude as a distinct answer surface: test the prompts buyers use, inspect selected sources, and improve the evidence available on the open web.",
    actions: [
      "Repeatable commercial and informational prompt sets",
      "Clear passages that retain meaning when extracted",
      "Independent references that verify important claims",
      "Mention, citation, referral, and conversion tracking",
    ],
    href: "/services/ai-search/claude-seo",
    Icons: [SiClaude],
    brand: "claude",
  },
];

const disciplines = [
  {
    number: "01",
    title: "Market, SERP, and prompt research",
    description:
      "We map how buyers discover, compare, and validate options across conventional results and generated answers. The output joins keyword demand, prompt themes, visible competitors, cited sources, business value, and the page required to compete.",
    includes: [
      "Search-demand and intent map",
      "Buyer-prompt library",
      "SERP and citation-source corpus",
      "Prioritized opportunity model",
    ],
    href: "/services/seo-consulting",
    Icon: CircleGauge,
  },
  {
    number: "02",
    title: "Technical SEO and retrieval",
    description:
      "We find the engineering conditions that prevent pages from being crawled, rendered, indexed, understood, or retrieved. Recommendations identify the affected template, expected impact, implementation owner, and acceptance test.",
    includes: [
      "JavaScript and rendering diagnostics",
      "Crawl and indexation controls",
      "Core Web Vitals and page experience",
      "Bot, CDN, and server-log validation",
    ],
    href: "/services/technical-seo",
    Icon: Network,
  },
  {
    number: "03",
    title: "Information architecture and entities",
    description:
      "We make the relationship between the company, people, services, evidence, industries, and locations explicit. Clean architecture reduces ambiguity for users and gives crawlers reliable paths to the pages that matter.",
    includes: [
      "Entity and relationship mapping",
      "Navigation and taxonomy design",
      "Internal-link graph improvement",
      "Visible facts aligned with schema",
    ],
    href: "/services/ai-search/entity-seo",
    Icon: Fingerprint,
  },
  {
    number: "04",
    title: "Content strategy and production",
    description:
      "We create or improve commercial pages, supporting guides, comparisons, tools, and original research. A page is judged on whether it resolves the task, adds defensible information, and earns a place in the wider topic—not on word count alone.",
    includes: [
      "SERP-corpus content briefs",
      "Entity and subtopic coverage",
      "Expert interview integration",
      "Editorial review and refresh cycles",
    ],
    href: "/services/content",
    Icon: FileCheck2,
  },
  {
    number: "05",
    title: "Generative engine optimization",
    description:
      "Our GEO work makes important information easier to extract, attribute, verify, and reuse in an answer. It includes direct definitions, answer-first passages, supporting depth, source context, authorship, dates, and strong corroboration.",
    includes: [
      "GEO and AEO page architecture",
      "Citation-ready source sections",
      "Claim-to-evidence review",
      "Platform-specific retrieval checks",
    ],
    href: "/services/ai-search/geo",
    Icon: Sparkles,
  },
  {
    number: "06",
    title: "Authority and digital PR",
    description:
      "Owned pages cannot independently validate every claim they make. We develop relevant editorial links, expert contributions, source relationships, and brand mentions that strengthen discovery while providing third-party corroboration.",
    includes: [
      "Authority-gap analysis",
      "Relevant editorial link earning",
      "Expert-led digital PR",
      "Unlinked mention recovery",
    ],
    href: "/services/link-building",
    Icon: Link2,
  },
  {
    number: "07",
    title: "LLM visibility tracking",
    description:
      "A fixed prompt panel gives the team a repeatable view of mentions, recommendations, citations, and competitors. We preserve the model, prompt, location, date, and response because generated answers are variable observations—not permanent rankings.",
    includes: [
      "Prompt taxonomy and test controls",
      "Brand mention and citation logging",
      "Competitor share-of-answer",
      "Source and response change detection",
    ],
    href: "/services/ai-search/llm-visibility-tracking",
    Icon: BarChart3,
  },
  {
    number: "08",
    title: "Analytics and revenue attribution",
    description:
      "We connect visibility to what happened next. Search Console, analytics, CRM outcomes, and AI referrals are reported in separate layers so citations are not confused with visits and visits are not confused with qualified demand.",
    includes: [
      "GSC, GA4, and BigQuery pipelines",
      "AI referral channel definitions",
      "Lead and pipeline attribution",
      "Decision-focused reporting",
    ],
    href: "/services/analytics",
    Icon: Database,
  },
];

const phases = [
  {
    range: "Days 1–30",
    title: "Baseline and diagnosis",
    text: "We connect the available data, crawl the site, inspect templates, inventory current pages, map entities, research priority result sets, and build the first controlled prompt panel. The month ends with an evidence-backed backlog—not a generic audit checklist.",
    output:
      "Technical findings, organic baseline, AI-answer baseline, competitor corpus, page inventory, quick wins, and a sequenced implementation plan.",
  },
  {
    range: "Days 31–60",
    title: "Foundation and priority pages",
    text: "Engineering fixes and content work begin together. We repair discovery and rendering issues, tighten site architecture, improve the pages closest to revenue, add missing proof, and align visible information with structured data.",
    output:
      "Released fixes, upgraded commercial pages, new briefs, internal-link changes, entity corrections, and implementation QA.",
  },
  {
    range: "Days 61–90",
    title: "Coverage and authority",
    text: "The program expands into supporting questions, comparisons, original assets, and off-site validation. We rerun the controlled prompt panel and compare source selection, mentions, rankings, impressions, clicks, and conversions against the baseline.",
    output:
      "Topic-cluster releases, authority activity, citation comparison, organic movement, and a second-quarter opportunity model.",
  },
  {
    range: "Ongoing",
    title: "Compound what the evidence supports",
    text: "Each cycle separates shipped work from observed movement and business outcomes. Winning page patterns are scaled; weak assumptions are revised; declining pages are refreshed or consolidated; new result formats and platform behavior are tested.",
    output:
      "Weekly operating view, monthly decision review, content refreshes, new experiments, and a transparent record of what changed.",
  },
];

const faqItems = [
  {
    question: "What is an AI-native SEO agency?",
    answer:
      "An AI-native SEO agency uses artificial intelligence throughout research, analysis, production support, quality control, implementation, and monitoring—not only to draft copy. Search data and defined instructions provide context; automation handles repeatable work; an experienced practitioner remains responsible for strategy, evidence, and release. At TheProjectSEO, the operating system supports conventional organic growth and visibility in generated answers as one connected discipline.",
  },
  {
    question: "What is an AI search SEO agency?",
    answer:
      "An AI search SEO agency improves how a brand is discovered, described, cited, and recommended in products such as Google AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini, and Claude. That requires more than monitoring prompts. The website must be accessible, the entity must be clear, important questions must be answered, claims need evidence, and independent sources should corroborate the brand.",
  },
  {
    question: "What is the difference between SEO, GEO, AEO, and LLM SEO?",
    answer:
      "SEO improves visibility in organic result sets. Generative engine optimization, or GEO, improves the likelihood that source material can support a generated response. Answer engine optimization, or AEO, emphasizes concise, extractable answers. LLM SEO is an informal label for brand visibility in large-language-model products. The terms overlap, so we manage them through one SEO and GEO strategy with platform-specific tests.",
  },
  {
    question:
      "Does generative engine optimization replace search engine optimization?",
    answer:
      "No. Google explicitly says its existing fundamentals remain relevant to AI Overviews and AI Mode, and that eligible pages must be indexed and able to appear with a snippet. Other answer products also need accessible sources. Strong GEO therefore begins with sound technical implementation, useful pages, clear internal relationships, and credible authority; it adds answer formatting, evidence design, entity work, and response measurement.",
  },
  {
    question:
      "Can an agency guarantee ChatGPT, Perplexity, or Google AI citations?",
    answer:
      "No. A vendor cannot control a platform index, retrieval process, model, prompt interpretation, or generated response. We can improve eligibility and the quality of the available evidence, then measure whether citations and recommendations change. We do not turn a variable observation into a guarantee or claim that one page edit caused every movement.",
  },
  {
    question: "How do you measure AI visibility when answers keep changing?",
    answer:
      "We use a controlled prompt panel. Each observation records the platform, model where available, prompt wording, market, date, brand appearance, recommendation context, cited URLs, and competing brands. Repeated runs reveal patterns without pretending an answer is a fixed rank. AI referral sessions and conversions are measured separately because a mention, citation, click, and lead are different events.",
  },
  {
    question: "Do we need a separate page for every AI-related keyword?",
    answer:
      "Not when the intent is the same. This homepage intentionally consolidates the agency-level cluster—AI-native SEO agency, AI-first SEO agency, AI search SEO agency, SEO and GEO agency, GEO SEO agency, and LLM SEO agency—into one substantial entity page. Separate service pages exist only where a visitor needs a distinct scope, process, or platform-specific answer.",
  },
  {
    question: "Do you create large volumes of AI-written articles?",
    answer:
      "No. AI can accelerate corpus analysis, clustering, brief construction, internal-link discovery, QA, and drafting support. It does not establish facts or decide what should be published. Every release should have a user task, source context, useful information, an accountable reviewer, and a place in the site architecture. Pages without those conditions are consolidated, improved, or not created.",
  },
  {
    question: "How long does SEO and GEO take?",
    answer:
      "Eligibility fixes can be released quickly, but crawling, indexation, authority development, result-set movement, and stable changes in generated answers happen on different timelines. The first 30 days establish the baseline and backlog; the first 90 days provide enough operating evidence to judge implementation velocity and early movement. Durable commercial growth normally requires continued iteration.",
  },
  {
    question: "What does an engagement cost?",
    answer:
      "Ongoing engagements start at $3,500 per month. The final scope depends on site size, technical complexity, content production, authority requirements, markets, and measurement access. A defined audit or implementation project can be priced separately. The proposal identifies deliverables, responsibilities, assumptions, and what is outside scope before work begins.",
  },
  {
    question: "Who is TheProjectSEO best suited for?",
    answer:
      "The strongest fit is a company with a proven offer, meaningful organic discovery demand, a website it can change, access to subject-matter expertise, and a team prepared to implement. We are particularly useful when technical work, page strategy, analytics, and AI-answer visibility have become disconnected across multiple vendors or internal owners.",
  },
  {
    question: "Where is TheProjectSEO located?",
    answer:
      "Our dedicated location coverage is limited to India and the Philippines. The company is registered in India and the team has direct operating knowledge across both markets. We can serve companies that operate elsewhere, but we do not publish location pages for countries where we cannot demonstrate genuine relevance.",
  },
];

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`font-mono text-sm font-semibold uppercase tracking-[0.15em] ${
        dark ? "text-accent" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}

function Hero() {
  return (
    <header className="home-hero relative overflow-hidden border-b border-border">
      <HeroAnimation />
      <Container className="relative z-10">
        <Navbar />
        <div className="home-hero-grid grid grid-cols-1 gap-12 py-14 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:py-24">
          <div className="home-hero-copy">
            <Eyebrow>AI-Native SEO Agency</Eyebrow>
            <h1 className="home-hero-title mt-6 max-w-5xl font-display text-[clamp(52px,8vw,112px)] font-medium leading-[0.88] tracking-[-0.04em] text-ink">
              Be found on Google.{" "}
              <em className="text-accent">Be chosen by AI.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-stone">
              {homeHeroLead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="action" href="/contact">
                Request a Search Review
              </Button>
              <Button
                variant="ghost"
                href="#evidence"
                className="home-cta-secondary"
              >
                Inspect the Evidence
              </Button>
            </div>
            <p className="mt-5 font-mono text-xs leading-relaxed text-ash">
              Engagements from $3,500/month · India and Philippines · Strategy,
              implementation, and measurement
            </p>
          </div>

          <div className="home-surface-panel border border-border-strong bg-paper p-5 shadow-sm sm:p-7">
            <div className="home-surface-header flex items-center justify-between gap-5 border-b border-border pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                  Connected discovery system
                </p>
                <p className="mt-1 font-heading text-base font-semibold text-ink">
                  One evidence base. Six surfaces.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 bg-green-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-green-700">
                Measured
              </span>
            </div>
            <div className="home-surface-map mt-4">
              <span className="home-surface-core" aria-label="TheProjectSEO">
                <span className="home-surface-brand">TPS</span>
              </span>
              {platforms.map(({ name, state, Icons, brand }) => (
                <div
                  key={name}
                  className="home-surface-node flex items-center gap-3 border border-border bg-cream/50 p-3"
                >
                  <div
                    className={`home-surface-icon is-${brand} flex size-9 shrink-0 items-center justify-center bg-white`}
                  >
                    {Icons.map((BrandIcon, index) => (
                      <BrandIcon
                        key={`${brand}-${index}`}
                        className="home-brand-icon"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div className="home-surface-copy">
                    <p className="text-sm font-medium text-ink">{name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ash">
                      {state}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 border border-accent/20 bg-accent-soft p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                The principle
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Publish information people trust, machines can retrieve, and
                independent sources can corroborate.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

function HomeHeroDetail() {
  return (
    <section className="border-b border-border bg-cream py-12 sm:py-16">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[0.58fr_1.42fr] lg:items-start lg:gap-14">
          <Eyebrow>One accountable program</Eyebrow>
          <p className="text-lg leading-8 text-stone sm:text-xl sm:leading-9">
            {homeHeroDetail}
          </p>
        </div>
      </Container>
    </section>
  );
}

function ChapterNavigation() {
  return (
    <nav className="home-chapter-nav" aria-label="Homepage sections">
      <Container>
        <div className="home-chapter-track">
          {[
            ["The short answer", "#overview"],
            ["First-party proof", "#evidence"],
            ["Platform strategy", "#platforms"],
            ["Complete service scope", "#services"],
            ["Client Work", "#case-studies"],
            ["First 90 days", "#process"],
            ["Pricing", "#pricing"],
            ["FAQ", "#faq"],
          ].map(([label, href], index) => (
            <Link key={href} href={href} className="home-chapter-link">
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
}

function ConversionBridge({
  id,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: {
  id: string;
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
}) {
  return (
    <div
      id={id}
      className="home-conversion-bridge scroll-mt-14"
      aria-label={primaryText}
    >
      <Container>
        <div className="home-conversion-bridge-inner">
          <span className="home-conversion-track" aria-hidden="true" />
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              variant="action"
              href={primaryHref}
              className="gap-2"
            >
              {primaryText}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              href={secondaryHref}
              className="home-conversion-secondary gap-2"
            >
              {secondaryText}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

function ExecutiveAnswer() {
  const takeaways = [
    "SEO and GEO are not competing channels. The same accessible, useful, well-supported source material can contribute to both.",
    "AI-native describes how the work operates: data-connected research, reusable workflows, human quality gates, implementation, and continuous measurement.",
    "A mention, a citation, a referral visit, and a conversion are four different events. We report them separately.",
    "This page covers the complete agency-intent cluster. Platform and discipline pages provide deeper implementation detail without duplicating the proposition.",
  ];

  return (
    <section
      id="overview"
      data-home-section="overview"
      data-chapter="01"
      className="bg-paper py-20 sm:py-24"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow>The short answer</Eyebrow>
            <Heading as="h2" className="mt-4">
              What does an AI-native SEO agency actually do?
            </Heading>
            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-heading text-sm font-semibold text-ink">
                Reviewed by Aditya Aman
              </p>
              <p className="mt-1 text-sm text-ash">
                Founder &amp; SEO Consultant · Updated July 27, 2026
              </p>
              <Link
                href="/company"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-ink"
              >
                About the team
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xl leading-[1.75] text-ink">
              An AI-native SEO agency helps a business become easier to find,
              understand, verify, and choose across organic results and
              AI-generated responses. It does this by connecting technical
              accessibility, information architecture, useful pages, structured
              facts, evidence people can trust, prompt research, and outcome
              measurement in one operating system.
            </p>
            <div className="mt-8 space-y-5 text-base leading-[1.8] text-slate">
              <p>
                The phrase <strong className="text-ink">AI-native</strong>{" "}
                should describe the delivery model, not a fashionable service
                label. We use automation where it improves coverage and
                consistency: processing crawl data, clustering large query sets,
                finding internal-link opportunities, comparing a draft with a
                live competitor corpus, checking structured information, and
                detecting performance changes. Human practitioners still choose
                the strategy, validate the evidence, edit the work, and own the
                release decision.
              </p>
              <p>
                The phrase{" "}
                <strong className="text-ink">SEO and GEO agency</strong>{" "}
                describes the market problem. A buyer may start with a
                conventional query, continue with a detailed prompt, compare
                vendors inside a generated answer, and visit only the sources
                that appear credible. A modern program must support that whole
                journey without pretending traditional results and every AI
                platform use the same retrieval or ranking system.
              </p>
            </div>
            <div className="mt-9 border border-border-strong bg-cream">
              <div className="border-b border-border-strong p-5">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  Key takeaways
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {takeaways.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 p-5 text-sm leading-relaxed text-slate"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProofSection() {
  return (
    <section
      id="evidence"
      data-home-section="evidence"
      data-chapter="02"
      className="border-y border-border bg-cream py-24"
    >
      <Container>
        <div className="max-w-4xl">
          <Eyebrow>First-party proof</Eyebrow>
          <Heading as="h2" className="mt-4">
            What evidence shows the model working in both Google and AI answers?
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Expressway.PH and TaxCalculator.com.ph are owned projects with
            direct access to their underlying performance data. That makes them
            useful public examples: we can show the reporting period, identify
            the source of each metric, and distinguish an observed result from a
            causal claim.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          <article className="grid grid-cols-1 border border-border-strong bg-paper lg:grid-cols-2">
            <div className="p-8 sm:p-10">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Expressway.PH · Search publication
              </p>
              <h3 className="mt-4 font-display text-4xl font-medium leading-tight text-ink">
                A practical road resource becoming a source across organic and
                AI results.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-slate">
                Expressway.PH resolves specific Philippine driving tasks: toll
                rates, routes, RFID guidance, and road information. Its
                architecture is built around real journeys rather than a stream
                of disconnected posts. Ahrefs showed strong organic reach and
                thousands of tracked appearances across AI Overviews and ChatGPT
                in the July 2026 capture.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-px bg-border-strong">
                {[
                  ["49.2K", "Estimated monthly organic traffic"],
                  ["6.8K", "Organic keywords"],
                  ["3.4K", "AI Overview responses"],
                  ["2.4K", "ChatGPT responses"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-cream p-4">
                    <dt className="font-mono text-2xl font-black text-ink">
                      {value}
                    </dt>
                    <dd className="mt-1 text-xs leading-relaxed text-ash">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-ash">
                Source: Ahrefs Site Explorer capture supplied July 2026. AI
                totals refer to Ahrefs&apos; tracked response index, not unique
                people or visits.
              </p>
              <Link
                href="/case-studies/expressway-ph"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-ink"
              >
                Examine the Expressway.PH case study
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="border-t border-border-strong bg-white p-5 lg:border-t-0 lg:border-l">
              <EvidencePlaceholder
                label="Expressway.PH — Ahrefs organic traffic and keyword trend"
                description="Reserved for the approved Ahrefs screenshot with Avg. organic traffic selected and the organic keyword trend visible."
                asset={getEvidenceAsset(
                  "Expressway.PH — Ahrefs organic traffic and keyword trend",
                )}
                className="h-full"
              />
            </div>
          </article>

          <article className="grid grid-cols-1 border border-border-strong bg-paper lg:grid-cols-2">
            <div className="order-2 border-t border-border-strong bg-white p-5 lg:order-1 lg:border-t-0 lg:border-r">
              <EvidencePlaceholder
                label="TaxCalculator.com.ph — Google Search Console performance"
                description="Reserved for the approved three-month Search Console screenshot showing total clicks, total impressions, and the full trend."
                className="h-full"
              />
            </div>
            <div className="order-1 p-8 sm:p-10 lg:order-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                TaxCalculator.com.ph · Utility-led growth
              </p>
              <h3 className="mt-4 font-display text-4xl font-medium leading-tight text-ink">
                A focused utility gaining demand from a zero-authority baseline.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-slate">
                TaxCalculator.com.ph turns a difficult Philippine tax task into
                a clear, usable calculation experience. The project launched in
                June 2026. Its latest three-month Search Console view showed
                32,300 impressions and 335 clicks while Ahrefs still reported
                zero referring domains in the supplied capture.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-px bg-border-strong">
                {[
                  ["32.3K", "Search Console impressions"],
                  ["335", "Search Console clicks"],
                  ["3 months", "Selected reporting window"],
                  ["0", "Referring domains in Ahrefs"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-cream p-4">
                    <dt className="font-mono text-2xl font-black text-ink">
                      {value}
                    </dt>
                    <dd className="mt-1 text-xs leading-relaxed text-ash">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-ash">
                Sources: Google Search Console totals and Ahrefs overview
                supplied July 2026. Early movement is encouraging, not a promise
                of future performance.
              </p>
              <Link
                href="/case-studies/taxcalculator-com-ph"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-ink"
              >
                Examine the TaxCalculator.com.ph case study
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

function TerminologySection() {
  const rows = [
    {
      term: "SEO",
      means: "Search engine optimization",
      focus: "Organic result visibility, qualified clicks, and conversions",
      work: "Technical eligibility, intent alignment, pages, links, usability, and measurement",
    },
    {
      term: "GEO",
      means: "Generative engine optimization",
      focus:
        "Source inclusion, citations, and accurate representation in generated responses",
      work: "Extractable answers, evidence, entities, topical depth, corroboration, and prompt testing",
    },
    {
      term: "AEO",
      means: "Answer engine optimization",
      focus: "Becoming a concise answer or supporting passage",
      work: "Question-led sections, direct definitions, structured facts, and supporting explanation",
    },
    {
      term: "LLM SEO",
      means: "An informal market term",
      focus: "Brand discovery and recommendation in LLM-powered products",
      work: "Platform access, source quality, entity clarity, third-party validation, and response monitoring",
    },
  ];

  return (
    <section
      data-home-section="terminology"
      data-chapter="03"
      className="bg-ink py-24 text-white"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Eyebrow dark>Shared language</Eyebrow>
            <Heading as="h2" dark className="mt-4">
              How are SEO, GEO, AEO, and LLM SEO different?
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              These labels describe related outcomes, not four isolated
              marketing departments. A credible AI-first SEO agency identifies
              which mechanic is relevant, then coordinates the work around one
              business objective. Answer engines can select different sources
              even when a user&apos;s intent is similar.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/50">
              Our umbrella term is{" "}
              <strong className="text-white">AI search optimization</strong>.
              The engagement includes conventional organic optimization because
              discoverable, indexable, authoritative source pages remain
              essential.
            </p>
            <Button
              variant="ghost"
              href="/services/ai-search"
              className="mt-8 border-white/30 text-white"
            >
              Explore AI Search Services
            </Button>
          </div>
          <div className="overflow-x-auto border border-white/15">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/15 bg-white/5">
                  <th className="p-4 font-mono text-xs uppercase tracking-wider text-accent">
                    Term
                  </th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider text-accent">
                    Meaning
                  </th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider text-accent">
                    Primary focus
                  </th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider text-accent">
                    Typical work
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.term}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <th className="p-4 align-top font-heading text-lg font-semibold text-white">
                      {row.term}
                    </th>
                    <td className="p-4 align-top text-sm leading-relaxed text-white/65">
                      {row.means}
                    </td>
                    <td className="p-4 align-top text-sm leading-relaxed text-white/65">
                      {row.focus}
                    </td>
                    <td className="p-4 align-top text-sm leading-relaxed text-white/65">
                      {row.work}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PlatformSection() {
  return (
    <section
      id="platforms"
      data-home-section="platforms"
      data-chapter="04"
      className="bg-paper py-24"
    >
      <Container>
        <div className="max-w-4xl">
          <Eyebrow>Platform strategy</Eyebrow>
          <Heading as="h2" className="mt-4">
            How does optimization change across Google, ChatGPT, Perplexity,
            Gemini, and Claude?
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            The common foundation is accessible, useful, verifiable information.
            The platform layer changes how we test eligibility, observe source
            selection, and measure the result. Strategies for ChatGPT, Gemini,
            Perplexity, Claude, and Google therefore share a foundation but not
            an identical checklist. We avoid universal &ldquo;LLM ranking
            factors&rdquo; claims when a provider has not published them.
            Different platforms and engines require different tests, and those
            tests help us separate access problems from evidence problems. The
            engines also change, so the observation date always stays attached
            to the result.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {platforms.map(
            ({ name, state, summary, actions, href, Icons, brand }) => (
            <article
              key={name}
              className="group bg-paper p-7 transition-colors hover:bg-cream sm:p-9"
            >
              <div className="flex items-start justify-between gap-5">
                <div
                  className={`home-platform-icon is-${brand} flex size-11 items-center justify-center bg-accent-soft`}
                >
                  {Icons.map((BrandIcon, index) => (
                    <BrandIcon
                      key={`${brand}-${index}`}
                      className="home-brand-icon"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ash">
                  {state}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-ink">
                {name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {summary}
              </p>
              <ul className="mt-6 space-y-2.5">
                {actions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-ink"
              >
                See the platform playbook
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      data-home-section="services"
      data-chapter="05"
      className="border-y border-border bg-cream py-24"
    >
      <Container>
        <div className="max-w-4xl">
          <Eyebrow>Complete service scope</Eyebrow>
          <Heading as="h2" className="mt-4">
            What does our AI search SEO agency deliver?
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            We do not rename a content retainer &ldquo;GEO.&rdquo; The diagnosis
            determines the disciplines and strategies required. A rendering
            problem needs engineering; an incomplete topic needs better
            information; an unverified claim needs evidence and independent
            authority; an unclear result needs stronger measurement. This
            evidence-driven scope helps the team invest in the constraint that
            is actually limiting performance.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {disciplines.map(
            ({ number, title, description, includes, href, Icon }) => (
              <article
                key={title}
                className="group bg-paper p-7 transition-colors hover:bg-white sm:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex size-11 items-center justify-center bg-accent-soft">
                    <Icon className="size-5 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-ash">{number}</span>
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {description}
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-xs leading-relaxed text-slate"
                    >
                      <Check
                        className="mt-0.5 size-3.5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-ink"
                >
                  Explore this discipline
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

function CaseStudiesSection() {
  const industryLabels: Record<string, string> = {
    automotive: "Automotive & Publishing",
    finance: "Finance & Utilities",
    "real-estate": "Real Estate & Storage",
    hrtech: "HR Technology",
    saas: "B2B SaaS",
    ai: "AI & Software",
    travel: "Travel & OTA",
  };

  return (
    <section
      id="case-studies"
      data-home-section="case-studies"
      data-chapter="06"
      className="bg-paper py-24"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <Eyebrow>Client Work</Eyebrow>
            <Heading as="h2" className="mt-4">
              SEO Case Studies &amp; Results
            </Heading>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-slate">
            Approved results from two owned search projects. Each public metric
            names its source and reporting window; private client work remains
            private until publication is explicitly approved.
          </p>
        </div>

        <div className="home-case-study-grid mt-14">
          {caseStudies.map((study, index) => {
            return (
              <article
                key={study.slug}
                className="home-case-study-card is-approved"
              >
                <div className="flex items-start justify-between gap-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash">
                    {industryLabels[study.industry] ?? study.industry}
                  </p>
                  <span className="font-mono text-[10px] text-ash">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl font-medium leading-tight text-ink">
                  {study.client}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate">
                  {study.headline}
                </p>
                <div className="mt-auto pt-9">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink">
                    {study.headlineMetric}
                  </p>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-ink"
                  >
                    View case study
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function OperatingSystemSection() {
  const stack = [
    {
      title: "1. Ground the context",
      text: "Search Console, analytics, rank data, crawl output, CRM definitions, existing pages, product facts, and expert input establish what is known.",
    },
    {
      title: "2. Build the live corpus",
      text: "We study the pages, result features, cited sources, headings, entities, questions, and content formats already competing for the target task.",
    },
    {
      title: "3. Score the opportunity",
      text: "A local Python-based content optimizer measures topic and entity coverage against the live corpus. Its score informs editing; it never overrides accuracy or user value.",
    },
    {
      title: "4. Add practitioner judgment",
      text: "A specialist chooses the page type, argument, evidence, internal relationships, and commercial action. Generic term recommendations are rejected when they add no meaning.",
    },
    {
      title: "5. Implement and verify",
      text: "Copy, code, structured data, links, analytics, and technical changes are reviewed in the rendered page—not approved in an isolated document.",
    },
    {
      title: "6. Preserve the learning",
      text: "The released version, baseline, later movement, and decision history remain connected so future work compounds instead of restarting from a slide deck.",
    },
  ];

  return (
    <section
      data-home-section="operating-system"
      data-chapter="07"
      className="bg-ink py-24 text-white"
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Eyebrow dark>AI-first operating system</Eyebrow>
            <Heading as="h2" dark className="mt-4">
              How do we use AI without producing generic content?
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              AI is most valuable when it operates inside a controlled chain of
              context, constraints, checks, and accountable decisions. The
              objective is better analysis and faster implementation—not maximum
              output.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/50">
              This homepage itself was rebuilt through that process: a live
              eight-page competitor corpus, deterministic term scoring, entity
              extraction, a consolidated brief, editorial judgment, and a second
              scoring pass.
            </p>
            <Button
              variant="ghost"
              href="/methodology"
              className="mt-8 border-white/30 text-white"
            >
              Inspect Our Methodology
            </Button>
          </div>
          <ol className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
            {stack.map((item) => (
              <li key={item.title} className="bg-ink p-7">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section
      id="process"
      data-home-section="roadmap"
      data-chapter="08"
      className="bg-paper py-24"
    >
      <Container>
        <div className="max-w-4xl">
          <Eyebrow>First 90 days</Eyebrow>
          <Heading as="h2" className="mt-4">
            What happens after you hire TheProjectSEO?
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            The exact backlog changes by site, but the operating sequence does
            not: establish a reliable baseline, release the highest-value
            foundation and page improvements, expand evidence and authority,
            then compound what the data supports. Within the first three months,
            the aim is to replace assumptions with a working evidence loop.
          </p>
        </div>
        <ol className="mt-14 border border-border-strong">
          {phases.map((phase, index) => (
            <li
              key={phase.range}
              className="grid grid-cols-1 border-b border-border-strong last:border-b-0 lg:grid-cols-[0.25fr_0.75fr]"
            >
              <div className="bg-cream p-7 lg:border-r lg:border-border-strong">
                <span className="font-mono text-xs font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-xl font-semibold text-ink">
                  {phase.range}
                </h3>
              </div>
              <div className="p-7 sm:p-9">
                <h3 className="font-heading text-xl font-semibold text-ink">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {phase.text}
                </p>
                <p className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-slate">
                  <strong className="text-ink">Typical output:</strong>{" "}
                  {phase.output}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function DeliverablesSection() {
  const rows = [
    [
      "Opportunity model",
      "Keywords, prompts, cited sources, competitors, value, feasibility, target URL",
      "Initial build; monthly update",
    ],
    [
      "Technical backlog",
      "Affected template, evidence, impact, owner, implementation notes, acceptance test",
      "Initial audit; sprint updates",
    ],
    [
      "Page and topic architecture",
      "Commercial pages, supporting questions, consolidation, internal links, proof requirements",
      "Quarterly plan; ongoing release",
    ],
    [
      "Content brief and QA record",
      "SERP corpus, entity coverage, outline, sources, claims, reviewer, change notes",
      "Per priority page",
    ],
    [
      "AI-answer observation panel",
      "Platform, prompt, date, response, mentions, citations, competitors, source URLs",
      "Baseline plus agreed reruns",
    ],
    [
      "Decision report",
      "Released work, visibility movement, traffic, qualified demand, interpretation, next action",
      "Monthly",
    ],
  ];

  return (
    <section
      data-home-section="deliverables"
      data-chapter="09"
      className="border-y border-border bg-cream py-24"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <Eyebrow>Deliverables</Eyebrow>
            <Heading as="h2" className="mt-4">
              What will your team actually receive?
            </Heading>
            <p className="mt-6 text-base leading-relaxed text-slate">
              Advice is packaged so somebody can implement and verify it. Every
              important recommendation includes its evidence, priority,
              dependency, owner, and completion condition.
            </p>
            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="font-display text-2xl italic leading-relaxed text-ink">
                The output is not a deck of observations. It is an operating
                backlog.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto border border-border-strong bg-paper">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border-strong bg-white">
                  <th className="p-4 font-mono text-xs uppercase tracking-wider text-accent">
                    Asset
                  </th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider text-accent">
                    What it contains
                  </th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider text-accent">
                    Cadence
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([asset, contains, cadence]) => (
                  <tr
                    key={asset}
                    className="border-b border-border last:border-b-0"
                  >
                    <th className="p-4 align-top font-heading text-sm font-semibold text-ink">
                      {asset}
                    </th>
                    <td className="p-4 align-top text-sm leading-relaxed text-slate">
                      {contains}
                    </td>
                    <td className="p-4 align-top text-sm leading-relaxed text-slate">
                      {cadence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MeasurementSection() {
  const layers = [
    [
      "01",
      "Eligibility",
      "Crawl access, rendering, indexation, snippet eligibility, bot access, valid structured information",
    ],
    [
      "02",
      "Visibility",
      "Impressions, positions, non-brand coverage, answer mentions, citations, source inclusion, competitor share",
    ],
    [
      "03",
      "Engagement",
      "Organic clicks, ChatGPT referrals, other identifiable AI referrals, landing-page behavior",
    ],
    [
      "04",
      "Qualified demand",
      "Forms, calls, demos, leads, assisted conversions, lead quality, sales-accepted opportunities",
    ],
    [
      "05",
      "Commercial impact",
      "Pipeline, closed revenue, acquisition efficiency, payback, and the confidence of the attribution",
    ],
  ];

  return (
    <section
      data-home-section="measurement"
      data-chapter="10"
      className="bg-ink py-24 text-white"
    >
      <Container>
        <div className="max-w-4xl">
          <Eyebrow dark>Measurement</Eyebrow>
          <Heading as="h2" dark className="mt-4">
            How do we connect rankings and AI citations to revenue?
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-white/65">
            We report a chain of evidence instead of compressing everything into
            one visibility score. A page can be eligible but unseen, visible but
            unclicked, cited but never visited, or visited without producing
            qualified demand. Each state requires a different decision. We run
            the controlled observation panel over time so a single generated
            response is never mistaken for a trend.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-5">
          {layers.map(([number, title, text]) => (
            <div key={title} className="bg-ink p-6">
              <span className="font-mono text-xs text-accent">{number}</span>
              <h3 className="mt-4 font-heading text-base font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-white/55">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <EvidencePlaceholder
            label="Reporting layer — Google Search Console and organic growth"
            description="Reserved for an approved dashboard showing its selected metrics, reporting window, and comparison period."
            asset={getEvidenceAsset(
              "Reporting layer — Google Search Console and organic growth",
            )}
            aspect="wide"
            className="border-white/20"
          />
          <EvidencePlaceholder
            label="Reporting layer — AI mention and citation observations"
            description="Reserved for an approved report showing platform, prompt panel, observation date, citations, and competing brands."
            asset={getEvidenceAsset(
              "Reporting layer — AI mention and citation observations",
            )}
            aspect="wide"
            className="border-white/20"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3">
          {[
            [
              "No blended vanity number",
              "Organic performance and generated-answer observations retain their own definitions and sources.",
            ],
            [
              "No false precision",
              "Variable answer results are dated observations. They are not presented as permanent positions.",
            ],
            [
              "No automatic causality",
              "A release and a later movement are reported together, but causal confidence depends on the available evidence.",
            ],
          ].map(([title, text]) => (
            <div key={title} className="bg-ink p-6">
              <h3 className="font-heading text-base font-semibold text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section
      data-home-section="testimonial"
      data-chapter="11"
      className="home-testimonial-section overflow-hidden bg-signal py-20 sm:py-24"
    >
      <Container>
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="grid grid-cols-1 overflow-hidden border border-ink/15 bg-paper lg:grid-cols-[0.72fr_1.28fr]"
          >
            <div className="relative min-h-80 overflow-hidden bg-ink lg:min-h-[560px]">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[0.15em] text-white/80">
                Client Testimonial
              </p>
            </div>
            <div className="relative flex flex-col justify-between p-8 sm:p-12 lg:p-16">
              <Quote className="size-10 text-accent" aria-hidden="true" />
              <blockquote className="my-10">
                <p className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[1.02] tracking-[-0.03em] text-ink">
                  “{testimonial.quote}”
                </p>
              </blockquote>
              <figcaption className="border-t border-border-strong pt-6">
                <p className="font-heading text-base font-semibold text-ink">
                  {testimonial.author}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                  {testimonial.role}, {testimonial.company}
                </p>
              </figcaption>
            </div>
          </figure>
        ))}
      </Container>
    </section>
  );
}

function PricingSection() {
  return (
    <section
      id="pricing"
      data-home-section="pricing"
      data-chapter="12"
      className="bg-cream py-24"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <Eyebrow>SEO Services</Eyebrow>
            <Heading as="h2" className="mt-4">
              Monthly SEO retainers
            </Heading>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-slate">
            Ongoing SEO management with transparent deliverables, monthly
            reporting, and a dedicated team focused on your organic growth.
          </p>
        </div>

        <div className="home-pricing-grid mt-14">
          {seoTiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`home-pricing-card ${tier.featured ? "is-featured" : ""}`}
            >
              <div className="flex items-center justify-between gap-5">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {tier.name}
                </p>
                <span className="font-mono text-xs text-ash">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-6 min-h-12 text-sm leading-relaxed text-slate">
                {tier.description}
              </p>
              <div className="mt-8 flex items-end gap-2 border-y border-border-strong py-7">
                <span className="font-display text-[clamp(42px,5vw,64px)] font-medium leading-none text-ink">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="pb-1 text-sm text-ash">{tier.period}</span>
                )}
              </div>
              <ul className="mt-8 space-y-3">
                {tier.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="action" href="/contact" className="mt-9 w-full">
                {tier.name === "Enterprise" ? "Contact us" : "Get started"}
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FitAndPricingSection() {
  return (
    <section
      data-home-section="fit"
      data-chapter="13"
      className="bg-paper py-24"
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <Eyebrow>Fit and investment</Eyebrow>
            <Heading as="h2" className="mt-4">
              Is TheProjectSEO the right partner for your business?
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Ongoing engagements start at{" "}
              <strong className="text-ink">$3,500 per month</strong>. Scope
              changes with technical complexity, page production, authority
              requirements, markets, and access to measurement data.
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate">
              The proposal identifies what we will deliver, what your team owns,
              the assumptions behind the plan, and what is not included. Defined
              audits and implementation projects can be scoped separately.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="action" href="/pricing">
                Review Pricing
              </Button>
              <Button variant="ghost" href="/contact">
                Discuss Your Site
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
            <div className="bg-cream p-7 sm:p-9">
              <h3 className="font-heading text-lg font-semibold text-ink">
                A strong fit
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "A proven product or service with meaningful discovery demand",
                  "Access to the website, analytics, and subject-matter experts",
                  "A team able to approve technical and editorial changes",
                  "A need to join Google, GEO, data, and implementation",
                  "A durable growth horizon rather than an instant guarantee",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream p-7 sm:p-9">
              <h3 className="font-heading text-lg font-semibold text-ink">
                Not the right fit
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Guaranteed rankings, citations, or revenue are required",
                  "The goal is unreviewed AI publishing at maximum volume",
                  "No owner can implement changes on the website",
                  "Success is limited to a proprietary visibility score",
                  "The plan depends on fake locations or unsupported claims",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate"
                  >
                    <span
                      className="mt-1 size-3 shrink-0 border border-ash"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CompanySection() {
  return (
    <section
      data-home-section="company"
      data-chapter="14"
      className="border-y border-border bg-cream py-24"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <Globe2 className="size-5 text-accent" aria-hidden="true" />
              <Eyebrow>Company and locations</Eyebrow>
            </div>
            <Heading as="h2" className="mt-4">
              Who is accountable for the work, and where do we operate?
            </Heading>
            <div className="mt-6 max-w-4xl space-y-5 text-base leading-relaxed text-slate">
              <p>
                TheProjectSEO is led by Aditya Aman, an SEO consultant with
                practitioner experience across technical optimization, content
                systems, ecommerce, analytics, and programmatic workflows. The
                team works across India and the Philippines and uses owned
                projects to test methods before turning them into client
                recommendations.
              </p>
              <p>
                Our dedicated location coverage is intentionally limited to
                those two countries. We can work with international companies,
                but we do not create thin city or country pages to imply a local
                presence that does not exist. Industry pages follow the same
                rule: a page needs a distinct search problem, useful expertise,
                and enough depth to deserve its URL.
              </p>
            </div>
          </div>
          <div className="flex min-w-72 flex-col gap-3">
            <Button variant="ghost" href="/company">
              Meet TheProjectSEO
            </Button>
            <Button variant="ghost" href="/locations/india">
              SEO Agency in India
            </Button>
            <Button variant="ghost" href="/locations/philippines">
              SEO Agency in the Philippines
            </Button>
            <Button variant="ghost" href="/case-studies">
              View All Case Studies
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SourcesSection() {
  const sources = [
    {
      name: "Google Search Central — AI features and your website",
      note: "Eligibility, query fan-out, foundational best practices, controls, and measurement for AI Overviews and AI Mode.",
      href: "https://developers.google.com/search/docs/appearance/ai-features",
    },
    {
      name: "OpenAI — Publishers and Developers FAQ",
      note: "Public-site discovery, OAI-SearchBot access, GPTBot distinction, and ChatGPT referral tracking.",
      href: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
    },
    {
      name: "Perplexity — Crawler documentation",
      note: "Published behavior and access guidance for PerplexityBot and Perplexity-User.",
      href: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers",
    },
  ];

  return (
    <section
      data-home-section="sources"
      data-chapter="15"
      className="bg-paper py-20"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <Eyebrow>Primary sources</Eyebrow>
            <Heading as="h2" className="mt-4">
              Which official guidance supports this approach?
            </Heading>
            <p className="mt-6 text-sm leading-relaxed text-slate">
              Provider documentation changes. These links were reviewed on July
              27, 2026. Where a platform does not publish a claimed ranking
              factor, we describe our method as an observation or test—not a
              fact about the model.
            </p>
          </div>
          <ul className="border border-border-strong">
            {sources.map((source) => (
              <li
                key={source.href}
                className="border-b border-border p-6 last:border-b-0"
              >
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-heading text-base font-semibold text-ink hover:text-accent"
                >
                  {source.name}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {source.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function MobileConversionBar() {
  return (
    <div className="home-mobile-conversion md:hidden">
      <Link href="#contact" className="home-mobile-conversion-link">
        Request a Search Review
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://theprojectseo.com/#organization",
    name: "TheProjectSEO",
    legalName: "TheProjectSEO Digital (OPC) Private Limited",
    url: "https://theprojectseo.com",
    logo: "https://theprojectseo.com/logos/wordmark_A_full.svg",
    description:
      "AI-native SEO agency combining search engine optimization, generative engine optimization, technical implementation, content, authority, and AI visibility measurement.",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Philippines" },
    ],
    knowsAbout: [
      "Search engine optimization",
      "AI search optimization",
      "Generative engine optimization",
      "Answer engine optimization",
      "Technical SEO",
      "Entity SEO",
      "Content strategy",
      "Digital PR",
      "Search analytics",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 808, Mahabir Tower, Main Road, P.S. Hindpiri",
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      postalCode: "834001",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: "Aditya Aman",
      jobTitle: "Founder & SEO Consultant",
      url: "https://theprojectseo.com/company",
      sameAs: "https://www.linkedin.com/in/adityaaman/",
    },
    sameAs: [
      "https://facebook.com/theprojectseo",
      "https://x.com/theprojectseo",
      "https://linkedin.com/company/theprojectseo",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://theprojectseo.com/contact",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://theprojectseo.com/#ai-native-seo-service",
    name: "AI-Native SEO and Generative Engine Optimization",
    serviceType: [
      "Search engine optimization",
      "Generative engine optimization",
      "Answer engine optimization",
      "AI search optimization",
    ],
    provider: { "@id": "https://theprojectseo.com/#organization" },
    url: "https://theprojectseo.com/",
    description:
      "An integrated SEO and GEO program covering technical implementation, content, entities, authority, AI-answer monitoring, and business measurement.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "3500",
      description:
        "Ongoing engagements start at USD 3,500 per month. Final scope is customized.",
      url: "https://theprojectseo.com/pricing",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="home-page overflow-hidden">
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://theprojectseo.com/#website",
          name: "TheProjectSEO",
          url: "https://theprojectseo.com",
          publisher: { "@id": "https://theprojectseo.com/#organization" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://theprojectseo.com/#webpage",
          url: "https://theprojectseo.com/",
          name: "AI-Native SEO Agency for Google & AI Search",
          dateModified: "2026-07-27",
          author: {
            "@type": "Person",
            name: "Aditya Aman",
            url: "https://theprojectseo.com/company",
          },
          about: { "@id": "https://theprojectseo.com/#ai-native-seo-service" },
          isPartOf: { "@id": "https://theprojectseo.com/#website" },
        }}
      />
      <JsonLd data={faqSchema} />

      <Hero />
      <ChapterNavigation />
      <main>
        <HomeHeroDetail />
        <ExecutiveAnswer />
        <ProofSection />
        <ConversionBridge
          id="after-proof"
          primaryText="Request a Search Review"
          primaryHref="/contact"
          secondaryText="View All Case Studies"
          secondaryHref="/case-studies"
        />
        <TerminologySection />
        <PlatformSection />
        <ServicesSection />
        <ConversionBridge
          id="after-services"
          primaryText="Discuss Your Site"
          primaryHref="/contact"
          secondaryText="Review Pricing"
          secondaryHref="#pricing"
        />
        <CaseStudiesSection />
        <OperatingSystemSection />
        <RoadmapSection />
        <ConversionBridge
          id="after-roadmap"
          primaryText="Request a Search Review"
          primaryHref="/contact"
          secondaryText="Inspect Our Methodology"
          secondaryHref="/methodology"
        />
        <DeliverablesSection />
        <MeasurementSection />
        <TestimonialSection />
        <PricingSection />
        <FitAndPricingSection />
        <CompanySection />
        <SourcesSection />
        <section
          id="faq"
          data-home-section="faq"
          data-chapter="16"
          className="border-t border-border bg-cream py-24"
        >
          <Container>
            <FAQAccordion
              title="AI-native SEO agency questions"
              items={faqItems}
            />
          </Container>
        </section>
        <div id="contact" className="home-contact-section scroll-mt-24">
          <CTAFormSection
            subheading="Build one discovery system"
            heading="Find the gap between being indexed and being chosen."
            lead="We will review your organic footprint, AI-answer presence, technical foundation, page architecture, authority, and measurement setup—then identify the highest-value next move."
            benefits={[
              "Google and AI-answer baseline",
              "Competitor, source, and page gaps",
              "Prioritized implementation roadmap",
            ]}
            submitText="Request Your Search Review"
          />
        </div>
      </main>
      <Footer />
      <MobileConversionBar />
    </div>
  );
}
