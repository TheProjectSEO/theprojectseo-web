import type { Metadata } from "next";
import {
  promptClusters,
  promptCoverageCounts,
  promptFamilies,
  visibilityPrompts,
} from "@/data/ai-visibility-prompts";

export const metadata: Metadata = {
  title: "AI Visibility Observation Registry | Admin",
  robots: { index: false, follow: false },
};

const coverageLabels = {
  existing: "Covered now",
  "needs-expansion": "Expand evidence",
  planned: "Page planned",
};

const coverageStyles = {
  existing: "border-emerald-200 bg-emerald-50 text-emerald-800",
  "needs-expansion": "border-amber-200 bg-amber-50 text-amber-800",
  planned: "border-slate-200 bg-slate-50 text-slate-700",
};

export default function AiVisibilityAdminPage() {
  const tierOneCount = promptFamilies.filter(
    (family) => family.priority === "tier-1",
  ).length;

  return (
    <main className="min-h-screen bg-paper px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <header className="max-w-4xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Internal measurement system
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            AI visibility observation registry
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">
            This registry measures repeated model observations. It does not call
            a single answer a permanent ranking. Every result needs the prompt,
            platform, model, interface, market, search state, timestamp and
            source URLs before it can be compared.
          </p>
        </header>

        <section className="mt-12 grid gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Canonical families", promptFamilies.length],
            ["Prompt phrasings", visibilityPrompts.length],
            ["Tier-one families", tierOneCount],
            ["Repeats per condition", 3],
          ].map(([label, value]) => (
            <div key={label} className="bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-slate">
                {label}
              </p>
              <p className="mt-2 font-mono text-3xl font-semibold text-ink">
                {value}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            Five buying and problem clusters
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-5">
            {Object.entries(promptClusters).map(([key, cluster]) => (
              <article
                key={key}
                className="border border-border-strong bg-white p-5"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                  {key}
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold text-ink">
                  {cluster.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate">
                  {cluster.evidenceStandard}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="border border-border-strong bg-white p-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              Run design
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-ink">
              Use a controlled panel, not an enormous Cartesian product.
            </h2>
            <ol className="mt-6 space-y-4 text-[15px] leading-7 text-slate">
              <li>
                <strong className="text-ink">1. Weekly sentinel:</strong> run
                tier-one canonical prompts three times on the two most valuable
                surfaces and markets.
              </li>
              <li>
                <strong className="text-ink">2. Rotating variants:</strong>{" "}
                distribute persona, evidence and decision phrasings across the
                remaining platforms and markets during the month.
              </li>
              <li>
                <strong className="text-ink">3. Event reruns:</strong> repeat
                affected families after material page releases, crawler-policy
                changes or model updates.
              </li>
              <li>
                <strong className="text-ink">4. Outcome join:</strong> compare
                observations with cited URLs, AI referrals, qualified leads and
                revenue. Visibility without demand remains directional.
              </li>
            </ol>
          </article>

          <article className="border border-border-strong bg-ink p-7 text-white">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              Page coverage
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold">
              The registry is also a content backlog.
            </h2>
            <div className="mt-7 space-y-4">
              {Object.entries(promptCoverageCounts).map(([status, count]) => (
                <div
                  key={status}
                  className="flex items-center justify-between border-b border-white/15 pb-4"
                >
                  <span className="text-white/70">
                    {coverageLabels[status as keyof typeof coverageLabels]}
                  </span>
                  <span className="font-mono text-2xl font-semibold">
                    {count}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-white/60">
              “Covered” means a relevant page exists. It does not mean the page
              is already cited, recommended or accurate on every model.
            </p>
          </article>
        </section>

        <section className="mt-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Canonical panel
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-ink">
                50 prompt families mapped to a page owner
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate">
              Each family expands into canonical, persona, evidence and decision
              variants. The CSV export contains all 200.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto border border-border-strong bg-white">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead>
                <tr className="border-b border-border-strong bg-cream text-slate">
                  <th className="px-4 py-3 font-medium">ID</th>
                  <th className="px-4 py-3 font-medium">Prompt</th>
                  <th className="px-4 py-3 font-medium">Page owner</th>
                  <th className="px-4 py-3 font-medium">Coverage</th>
                  <th className="px-4 py-3 font-medium">Priority</th>
                </tr>
              </thead>
              <tbody>
                {promptFamilies.map((family) => (
                  <tr
                    key={family.id}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-4 py-4 font-mono text-xs text-ash">
                      {family.id}
                    </td>
                    <td className="max-w-xl px-4 py-4 leading-6 text-ink">
                      {family.canonical}
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-slate">
                      {family.targetUrl}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex border px-2 py-1 text-xs font-medium ${coverageStyles[family.coverage]}`}
                      >
                        {coverageLabels[family.coverage]}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-mono text-xs uppercase text-slate">
                      {family.priority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
