import {
  ArrowDown,
  ArrowRight,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  CircleDollarSign,
  Hotel,
  Laptop,
  MousePointerClick,
  Search,
  ShieldCheck,
  Smartphone,
  UserCheck,
} from "lucide-react";
import type { ReactNode } from "react";

const monoLabel =
  "font-mono text-[9px] font-semibold uppercase tracking-[0.12em]";

function VisualHeader({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note: string;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-border px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7">
      <div>
        <p className={`${monoLabel} text-accent`}>{eyebrow}</p>
        <p className="mt-2 max-w-xl font-heading text-xl font-semibold leading-tight text-ink sm:text-2xl">
          {title}
        </p>
      </div>
      <p className="max-w-56 text-xs leading-5 text-ash sm:text-right">
        {note}
      </p>
    </div>
  );
}

function SaasPipelineMap() {
  return (
    <div
      role="img"
      aria-label="A plain-language diagram showing the ideal SaaS buyer, what the page must prove and where a qualified demo can be lost."
      className="bg-paper text-ink"
    >
      <VisualHeader
        eyebrow="Why organic traffic stalls"
        title="The right buyer lands on the page—but never sees enough reason to book."
        note="Start with buyer fit. Then check the page, the form and the sales follow-up."
      />
      <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_54px_minmax(0,.9fr)_54px_minmax(0,1fr)] lg:items-center">
        <div className="border border-border-strong bg-white">
          <div className="border-b border-border bg-signal px-5 py-4 text-white">
            <p className={`${monoLabel} text-white/60`}>The ideal customer</p>
            <p className="mt-2 font-heading text-lg font-semibold">
              Who should this page attract?
            </p>
          </div>
          <div className="divide-y divide-border px-5">
            {[
              ["Buyer", "VP or Head of Talent"],
              ["Company", "Mid-market employer with hiring volume"],
              ["Urgent problem", "Manual screening and slow coordination"],
            ].map(([label, value]) => (
              <div key={label} className="grid gap-1 py-4">
                <span className={`${monoLabel} text-ash`}>{label}</span>
                <span className="text-sm font-medium leading-6 text-ink">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown aria-hidden="true" className="size-6 text-accent lg:hidden" />
          <ArrowRight
            aria-hidden="true"
            className="hidden size-6 text-accent lg:block"
          />
        </div>

        <div className="border border-ink bg-ink p-5 text-white">
          <p className={`${monoLabel} text-action`}>The page</p>
          <p className="mt-3 font-heading text-xl font-semibold">
            What must it prove?
          </p>
          <div className="mt-5 grid gap-3">
            {[
              ["Built for us", "Show the exact hiring workflow"],
              ["Works with our stack", "Explain integrations, security and rollout"],
              ["Worth the next step", "Offer a demo that matches the buyer’s problem"],
            ].map(([question, answer]) => (
              <div key={question} className="border border-white/15 bg-white/5 p-3">
                <p className={`${monoLabel} text-white/45`}>{question}</p>
                <p className="mt-1 text-xs leading-5 text-white/80">{answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-action px-4 py-3 text-ink">
            <p className={`${monoLabel}`}>The five-second test</p>
            <p className="mt-1 text-xs font-semibold leading-5">
              The buyer can tell who the product is for, how it helps and what happens next
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown aria-hidden="true" className="size-6 text-accent lg:hidden" />
          <ArrowRight
            aria-hidden="true"
            className="hidden size-6 text-accent lg:block"
          />
        </div>

        <div className="border border-border-strong bg-white">
          <div className="border-b border-border bg-accent px-5 py-4 text-white">
            <p className={`${monoLabel} text-white/60`}>The lost demo</p>
            <p className="mt-2 font-heading text-lg font-semibold">
              Where does interest disappear?
            </p>
          </div>
          <div className="divide-y divide-border px-5">
            {[
              ["Wrong visitor", "The search attracted a student, job seeker or tiny team"],
              ["Weak proof", "The page makes claims but does not reduce buying risk"],
              ["Broken next step", "The form, routing or response loses the buyer"],
            ].map(([label, value], index) => (
              <div key={label} className="flex gap-3 py-4">
                <span
                  className={`grid size-7 shrink-0 place-items-center font-mono text-[10px] font-semibold ${
                    index === 2 ? "bg-action text-ink" : "bg-cream text-accent"
                  }`}
                >
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-px border-t border-border bg-border sm:grid-cols-[1fr_1fr_1.2fr]">
        {[
          ["Google Search shows", "Which pages people find and what they searched"],
          ["Your website shows", "Whether they read, trust and start the demo request"],
          ["Sales confirms", "Whether the company fits and a real opportunity exists"],
        ].map(([label, value], index) => (
          <div
            key={label}
            className={`${index === 2 ? "bg-action text-ink" : "bg-ink text-white"} p-4`}
          >
            <p className={`${monoLabel} opacity-50`}>{label}</p>
            <p className="mt-2 text-sm font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HotelGuestJourney() {
  return (
    <div
      role="img"
      aria-label="An editorial hotel direct-booking audit model that connects search intent, room and rate continuity, cross-domain measurement and a reconciled booking record."
      className="bg-paper text-ink"
    >
      <VisualHeader
        eyebrow="Search-to-booking operating model"
        title="A booking is accepted only when the guest context and transaction survive."
        note="The audit keeps volatile room, date, occupancy, rate and policy evidence attached to the test."
      />
      <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_54px_minmax(0,.9fr)_54px_minmax(0,1fr)] lg:items-center">
        <div className="border border-border-strong bg-white">
          <div className="border-b border-border bg-signal px-5 py-4 text-white">
            <p className={`${monoLabel} text-white/60`}>Input / guest decision</p>
            <p className="mt-2 font-heading text-lg font-semibold">
              Search and property evidence
            </p>
          </div>
          <div className="divide-y divide-border px-5">
            {[
              ["Search intent", "Family room near the convention centre"],
              ["Property proof", "Occupancy · parking · breakfast · policy"],
              ["Selected context", "Aug 12–14 · 2 adults + 2 children"],
            ].map(([label, value]) => (
              <div key={label} className="grid gap-1 py-4">
                <span className={`${monoLabel} text-ash`}>{label}</span>
                <span className="text-sm font-medium leading-6 text-ink">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown aria-hidden="true" className="size-6 text-accent lg:hidden" />
          <ArrowRight
            aria-hidden="true"
            className="hidden size-6 text-accent lg:block"
          />
        </div>

        <div className="border border-ink bg-ink p-5 text-white">
          <p className={`${monoLabel} text-action`}>Continuity test</p>
          <p className="mt-3 font-heading text-xl font-semibold">
            Site → booking engine
          </p>
          <div className="mt-5 grid gap-3">
            {[
              ["Session", "_gl reaches every redirect"],
              ["Selection", "dates, guests and room persist"],
              ["Promise", "rate, tax and policy stay explainable"],
            ].map(([label, value]) => (
              <div key={label} className="border border-white/15 bg-white/5 p-3">
                <p className={`${monoLabel} text-white/45`}>{label}</p>
                <p className="mt-1 text-xs leading-5 text-white/80">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-action px-4 py-3 text-ink">
            <p className={`${monoLabel}`}>Acceptance test</p>
            <p className="mt-1 text-xs font-semibold leading-5">
              Repeat on a real device and retain the exact rate conditions
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ArrowDown aria-hidden="true" className="size-6 text-accent lg:hidden" />
          <ArrowRight
            aria-hidden="true"
            className="hidden size-6 text-accent lg:block"
          />
        </div>

        <div className="border border-border-strong bg-white">
          <div className="border-b border-border bg-accent px-5 py-4 text-white">
            <p className={`${monoLabel} text-white/60`}>Output / verified booking</p>
            <p className="mt-2 font-heading text-lg font-semibold">
              Reconciled transaction
            </p>
          </div>
          <div className="divide-y divide-border px-5">
            {[
              ["GA4 purchase", "transaction_id + value + currency"],
              ["Engine record", "same ID, room, rate and dates"],
              ["Revenue review", "booking total reconciled within tolerance"],
            ].map(([label, value], index) => (
              <div key={label} className="flex gap-3 py-4">
                <span
                  className={`grid size-7 shrink-0 place-items-center font-mono text-[10px] font-semibold ${
                    index === 2 ? "bg-action text-ink" : "bg-cream text-accent"
                  }`}
                >
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-px border-t border-border bg-border sm:grid-cols-3">
        {[
          ["Before engine", "Question or room evidence remains unresolved"],
          ["At handoff", "Session, selection or rate context is lost"],
          ["Inside checkout", "Payment, policy or confirmation fails"],
        ].map(([label, value], index) => (
          <div
            key={label}
            className={`${index === 1 ? "bg-action text-ink" : "bg-ink text-white"} p-4`}
          >
            <p className={`${monoLabel} opacity-50`}>{label}</p>
            <p className="mt-2 text-sm font-semibold leading-6">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaasQueryPageMatrix() {
  const rows = [
    [
      "Problem",
      "reduce manual interview scheduling",
      "Workflow guide",
      "Discovery",
    ],
    [
      "Use case",
      "recruiting software for universities",
      "Use-case page",
      "Evaluation",
    ],
    [
      "Integration",
      "ATS with Microsoft Teams",
      "Integration page",
      "Technical fit",
    ],
    ["Comparison", "platform A vs platform B", "Comparison page", "Shortlist"],
    ["Trust", "AI hiring bias audit", "Governance resource", "Risk review"],
  ];

  return (
    <div
      role="img"
      aria-label="A query-to-page ownership matrix for a B2B SaaS website."
      className="bg-paper"
    >
      <VisualHeader
        eyebrow="Query-to-page ownership"
        title="Give each buying question one accountable page."
        note="If a blog post and service page both chase the same job, neither has a clear conversion route."
      />
      <div className="overflow-x-auto p-5 sm:p-7">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead className="bg-ink text-white">
            <tr>
              {[
                "Intent family",
                "Example query",
                "Page owner",
                "Buyer decision",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 font-heading text-xs font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row[0]} className="border-b border-border">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cell}
                    className={`px-4 py-3 text-xs leading-5 ${
                      cellIndex === 0
                        ? "font-mono font-semibold uppercase tracking-[0.08em] text-accent"
                        : index === rows.length - 1 && cellIndex === 2
                          ? "bg-action-soft font-semibold text-ink"
                          : "text-slate"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SaasEventChain() {
  const events = [
    ["view_item", "Relevant product/use-case page viewed", "GA4"],
    ["form_start", "Demo form receives first interaction", "GA4"],
    ["generate_lead", "Demo request submitted", "GA4"],
    ["qualify_lead", "Lead matches agreed fit criteria", "CRM → GA4"],
    ["close_convert_lead", "Opportunity becomes a customer", "CRM → GA4"],
  ];

  return (
    <div
      role="img"
      aria-label="A SaaS lead event contract from page view to converted lead."
      className="bg-paper"
    >
      <VisualHeader
        eyebrow="Measurement contract"
        title="Name the events before you build the report."
        note="A lead count without a shared event definition cannot survive a sales review."
      />
      <div className="grid gap-3 p-5 sm:p-7">
        {events.map(([event, meaning, owner], index) => (
          <div
            key={event}
            className="grid gap-3 border border-border-strong bg-white p-4 sm:grid-cols-[32px_170px_minmax(0,1fr)_90px] sm:items-center"
          >
            <span className="flex size-8 items-center justify-center bg-ink font-mono text-[10px] font-semibold text-white">
              {index + 1}
            </span>
            <code className="font-mono text-xs font-semibold text-accent">
              {event}
            </code>
            <span className="text-sm leading-6 text-slate">{meaning}</span>
            <span className={`${monoLabel} text-ash sm:text-right`}>
              {owner}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaasCohortDiagnostic() {
  const stages = [
    { label: "Search visitors", value: 1000, display: "1,000", width: "100%" },
    {
      label: "Visitors who stayed",
      value: 620,
      display: "620",
      width: "62%",
    },
    { label: "Opened the demo form", value: 48, display: "48", width: "38%" },
    { label: "Requested a demo", value: 18, display: "18", width: "26%" },
    { label: "Matched the ICP", value: 7, display: "7", width: "18%" },
    { label: "Accepted by sales", value: 3, display: "3", width: "12%" },
  ];

  return (
    <div
      role="img"
      aria-label="A fictional SaaS example showing where prospects are lost between a search visit and sales acceptance."
      className="bg-paper"
    >
      <VisualHeader
        eyebrow="Where prospects drop out"
        title="Follow the visitor from Google to a real sales conversation."
        note="Use this sequence with your own traffic, demo and sales numbers."
      />
      <div className="grid gap-3 p-5 sm:p-7">
        {stages.map((stage, index) => (
          <div
            key={stage.label}
            className="grid grid-cols-[118px_minmax(0,1fr)_58px] items-center gap-3"
          >
            <span className="text-[11px] font-medium leading-4 text-stone">
              {stage.label}
            </span>
            <div className="h-8 bg-cream">
              <div
                className={`flex h-full items-center px-3 ${index < 2 ? "bg-signal text-white" : index < 5 ? "bg-accent text-white" : "bg-action text-ink"}`}
                style={{ width: stage.width }}
              >
                <span className="font-mono text-[9px] font-semibold">
                  {stage.value}
                </span>
              </div>
            </div>
            <span className="text-right font-display text-lg font-medium text-ink">
              {stage.display}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-border bg-ink p-5 text-white sm:px-7">
        <p className="text-sm leading-6 text-white/70">
          The largest drop is not automatically the most valuable fix. Check
          whether the lost visitors match the ICP and whether the page answers
          a real buying question.
        </p>
      </div>
    </div>
  );
}

function SaasPriorityBoard() {
  const cells = [
    [
      "Ready to buy / not enough proof",
      "Add product evidence, security detail and a CTA that matches the buyer.",
      "bg-action",
    ],
    [
      "Ready to buy / strong proof",
      "Protect the page, reduce form friction and check whether sales accepts the leads.",
      "bg-accent text-white",
    ],
    [
      "Still learning / not enough proof",
      "Do not create more content until there is a useful path to the product.",
      "bg-cream",
    ],
    [
      "Still learning / useful proof",
      "Help the visitor progress; do not judge the page only by immediate demos.",
      "bg-signal text-white",
    ],
  ];

  return (
    <div
      role="img"
      aria-label="A SaaS priority matrix comparing how close a visitor is to buying with how much proof the page provides."
      className="bg-paper"
    >
      <VisualHeader
        eyebrow="What to fix first"
        title="Fix the pages closest to a buying decision first."
        note="This turns the diagnosis into a practical 90-day plan instead of another traffic report."
      />
      <div className="grid gap-px bg-border-strong p-px sm:grid-cols-2">
        {cells.map(([title, detail, color], index) => (
          <div key={title} className={`${color} min-h-40 p-5 sm:p-7`}>
            <p className={`${monoLabel} opacity-55`}>Priority {index + 1}</p>
            <p className="mt-3 font-heading text-lg font-semibold">{title}</p>
            <p className="mt-3 text-sm leading-6 opacity-75">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaasSearchMixFinding() {
  const calculatorSearches = [
    ["Severance pay calculator", "358"],
    ["End-of-service calculator", "328"],
    ["Salary increment calculator", "296"],
    ["Increment calculator", "216"],
  ];

  return (
    <div
      role="img"
      aria-label="A recruitment SaaS search analysis showing that calculator and job-research searches dominate the highest-click non-branded results."
      className="bg-paper"
    >
      <VisualHeader
        eyebrow="What the real search mix shows"
        title="The traffic is solving an employment question—not necessarily choosing software."
        note="Highest-click non-brand searches · three-month view"
      />
      <div className="grid gap-px bg-border-strong p-px lg:grid-cols-[1.1fr_.9fr]">
        <div className="bg-white p-5 sm:p-7">
          <div className="flex items-end justify-between gap-5 border-b border-border pb-5">
            <div>
              <p className={`${monoLabel} text-accent`}>Top six non-brand searches</p>
              <p className="mt-2 font-heading text-xl font-semibold text-ink">
                77% of their clicks came from calculators
              </p>
            </div>
            <p className="font-display text-5xl font-medium leading-none text-accent">
              77%
            </p>
          </div>
          <div className="divide-y divide-border">
            {calculatorSearches.map(([search, clicks]) => (
              <div
                key={search}
                className="grid grid-cols-[minmax(0,1fr)_4rem] gap-4 py-4"
              >
                <span className="text-sm leading-6 text-slate">{search}</span>
                <span className="text-right font-mono text-xs font-semibold text-ink">
                  {clicks} clicks
                </span>
              </div>
            ))}
          </div>
          <p className="border-t border-border pt-4 text-xs leading-6 text-ash">
            The remaining 23% of clicks in the visible top-six rows came from
            interview and job-description research.
          </p>
        </div>

        <div className="bg-ink p-5 text-white sm:p-7">
          <p className={`${monoLabel} text-action`}>Commercial interpretation</p>
          <div className="mt-5 space-y-5">
            {[
              [
                "What the visitor needs",
                "A calculation, employment answer or interview resource.",
              ],
              [
                "Why traffic can look successful",
                "Helpful utilities can earn large search visibility and clicks.",
              ],
              [
                "Why demos may stay flat",
                "The visitor may never be evaluating recruitment software.",
              ],
              [
                "What must be checked next",
                "Connect the landing page to demo requests and sales-qualified outcomes.",
              ],
            ].map(([label, detail]) => (
              <div key={label} className="border-t border-white/15 pt-4 first:border-t-0 first:pt-0">
                <p className={`${monoLabel} text-white/45`}>{label}</p>
                <p className="mt-2 text-sm leading-6 text-white/78">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-3 border-t border-border bg-action px-5 py-5 text-ink sm:grid-cols-[12rem_minmax(0,1fr)] sm:px-7">
        <p className={`${monoLabel}`}>Safe conclusion</p>
        <p className="text-sm font-semibold leading-6">
          Search Console proves the search mix. It does not prove which visitor
          became a qualified demo.
        </p>
      </div>
    </div>
  );
}

function HotelCrossDomain() {
  return (
    <div
      role="img"
      aria-label="A hotel website and external booking engine connected with GA4 cross-domain measurement."
      className="bg-paper"
    >
      <VisualHeader
        eyebrow="Cross-domain measurement"
        title="Keep one guest and one session across the booking handoff."
        note="Both domains use the same GA4 stream; the linker parameter must survive redirects."
      />
      <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1fr_150px_1fr] lg:items-center">
        <div className="border border-border-strong bg-white p-5">
          <div className="flex items-center justify-between">
            <Building2 aria-hidden="true" className="size-5 text-accent" />
            <span className={`${monoLabel} text-ash`}>Domain A</span>
          </div>
          <p className="mt-5 font-heading text-lg font-semibold text-ink">
            hotel.example
          </p>
          <p className="mt-2 text-xs leading-5 text-slate">
            Room, amenity, location and policy pages
          </p>
        </div>
        <div className="text-center">
          <code className="inline-block bg-action px-3 py-2 font-mono text-xs font-semibold text-ink">
            ?_gl=…
          </code>
          <ArrowRight
            aria-hidden="true"
            className="mx-auto mt-3 hidden size-6 text-accent lg:block"
          />
          <ArrowDown
            aria-hidden="true"
            className="mx-auto mt-3 size-6 text-accent lg:hidden"
          />
          <p className="mt-2 text-[10px] leading-4 text-ash">
            Preserve through every redirect
          </p>
        </div>
        <div className="border border-border-strong bg-accent p-5 text-white">
          <div className="flex items-center justify-between">
            <CalendarCheck2 aria-hidden="true" className="size-5" />
            <span className={`${monoLabel} text-white/55`}>Domain B</span>
          </div>
          <p className="mt-5 font-heading text-lg font-semibold">
            book.vendor.example
          </p>
          <p className="mt-2 text-xs leading-5 text-white/65">
            Availability, rate, guest detail and payment
          </p>
        </div>
      </div>
      <div className="grid gap-px bg-border sm:grid-cols-3">
        {[
          ["Same G-ID", "The same web stream tags both domains."],
          ["Linker retained", "The _gl value reaches the destination."],
          [
            "No self-referral",
            "Booking-engine traffic does not overwrite acquisition.",
          ],
        ].map(([title, detail]) => (
          <div key={title} className="bg-ink p-4 text-white">
            <CheckCircle2 aria-hidden="true" className="size-4 text-action" />
            <p className="mt-3 text-sm font-semibold">{title}</p>
            <p className="mt-1 text-xs leading-5 text-white/55">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HotelEventFunnel() {
  const events = [
    ["select_item", "Room or rate selected"],
    ["begin_checkout", "Guest enters booking flow"],
    ["add_payment_info", "Payment details submitted"],
    ["purchase", "Confirmed booking with transaction_id"],
  ];

  return (
    <div
      role="img"
      aria-label="A four-event GA4 hotel booking funnel."
      className="bg-paper"
    >
      <VisualHeader
        eyebrow="Booking event contract"
        title="Measure the handoff, the checkout and the confirmation."
        note="The purchase event needs a stable transaction identifier and value; button clicks are not bookings."
      />
      <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-7">
        {events.map(([event, meaning], index) => (
          <div
            key={event}
            className={`border border-border-strong p-5 ${index === events.length - 1 ? "bg-action" : "bg-white"}`}
          >
            <div className="flex items-center justify-between">
              <span className="flex size-8 items-center justify-center bg-ink font-mono text-[10px] font-semibold text-white">
                {index + 1}
              </span>
              <ShieldCheck aria-hidden="true" className="size-4 text-accent" />
            </div>
            <code className="mt-5 block font-mono text-xs font-semibold text-accent">
              {event}
            </code>
            <p className="mt-2 text-sm leading-6 text-slate">{meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HotelLeakageCohort() {
  const deviceRows = [
    ["Mobile", "6,800", "1,020", "612", "54", "0.79%"],
    ["Desktop", "2,700", "648", "496", "82", "3.04%"],
    ["Tablet", "500", "70", "45", "4", "0.80%"],
  ];

  return (
    <div
      role="img"
      aria-label="A modeled hotel booking leakage table segmented by device."
      className="bg-paper"
    >
      <VisualHeader
        eyebrow="Modeled audit dataset"
        title="Segment the booking cohort before changing the website."
        note="Fictional values show the audit structure. The rate is purchases divided by organic landing sessions."
      />
      <div className="overflow-x-auto p-5 sm:p-7">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead className="bg-ink text-white">
            <tr>
              {[
                "Device",
                "Organic landings",
                "Engine starts",
                "Checkout starts",
                "Purchases",
                "Booking rate",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 font-heading text-xs font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {deviceRows.map((row, index) => (
              <tr key={row[0]} className="border-b border-border">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cell}
                    className={`px-4 py-4 text-xs ${
                      cellIndex === 0
                        ? "font-semibold text-ink"
                        : "font-mono text-slate"
                    } ${index === 0 && cellIndex === row.length - 1 ? "bg-action font-semibold text-ink" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-3 border-t border-border bg-accent-soft p-5 sm:px-7">
        <Smartphone
          aria-hidden="true"
          className="size-5 shrink-0 text-accent"
        />
        <p className="text-sm leading-6 text-stone">
          Mobile has the largest absolute opportunity here, but the audit still
          checks source mix, engine errors and rate continuity before blaming
          the page design.
        </p>
      </div>
    </div>
  );
}

function HotelVerificationBoard() {
  const checks = [
    ["Search intent", "GSC query and landing-page fit", Search],
    ["Property evidence", "Room, amenity, policy and location answers", Hotel],
    [
      "Handoff integrity",
      "Same session reaches the booking engine",
      MousePointerClick,
    ],
    [
      "Rate continuity",
      "Dates, room, taxes and terms remain consistent",
      CalendarCheck2,
    ],
    [
      "Booking proof",
      "purchase contains transaction_id and value",
      CircleDollarSign,
    ],
    ["Human review", "Revenue team validates engine/PMS totals", UserCheck],
  ];

  return (
    <div
      role="img"
      aria-label="A hotel direct-booking audit verification board with six checks."
      className="bg-paper"
    >
      <VisualHeader
        eyebrow="Acceptance criteria"
        title="A green dashboard is not the finish line."
        note="The audit closes only when search, analytics, the booking engine and the revenue team agree."
      />
      <div className="grid gap-px bg-border-strong p-px sm:grid-cols-2 lg:grid-cols-3">
        {checks.map(([title, detail, Icon], index) => {
          const CheckIcon = Icon as typeof Laptop;
          return (
            <div
              key={title as string}
              className={`${index === checks.length - 1 ? "bg-action" : "bg-white"} p-5`}
            >
              <CheckIcon aria-hidden="true" className="size-5 text-accent" />
              <p className="mt-5 font-heading text-base font-semibold text-ink">
                {title as string}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate">
                {detail as string}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const graphics: Record<string, ReactNode> = {
  "saas-pipeline-map": <SaasPipelineMap />,
  "saas-query-page-matrix": <SaasQueryPageMatrix />,
  "saas-event-chain": <SaasEventChain />,
  "saas-cohort-diagnostic": <SaasCohortDiagnostic />,
  "saas-priority-board": <SaasPriorityBoard />,
  "saas-search-mix-finding": <SaasSearchMixFinding />,
  "hotel-guest-journey": <HotelGuestJourney />,
  "hotel-cross-domain": <HotelCrossDomain />,
  "hotel-event-funnel": <HotelEventFunnel />,
  "hotel-leakage-cohort": <HotelLeakageCohort />,
  "hotel-verification-board": <HotelVerificationBoard />,
};

export function getFlagshipArticleGraphic(key: string) {
  return graphics[key];
}
