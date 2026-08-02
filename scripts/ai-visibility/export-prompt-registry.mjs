import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(scriptDirectory, "..", "..");
const outputDirectory = join(
  projectRoot,
  "outputs",
  "ai-visibility-2026-07-29",
);

const clusters = JSON.parse(
  await readFile(
    join(projectRoot, "src", "data", "ai-visibility-prompt-clusters.json"),
    "utf8",
  ),
);
const families = JSON.parse(
  await readFile(
    join(projectRoot, "src", "data", "ai-visibility-prompt-families.json"),
    "utf8",
  ),
);

function decisionInstruction(mode, evidenceStandard) {
  if (mode === "recommendation") {
    return "Compare no more than five options and separate verified evidence from marketing claims.";
  }
  if (mode === "diagnostic") {
    return "Give a prioritized diagnosis, the evidence to collect, and the first three checks.";
  }
  if (mode === "evaluation") {
    return "Use current public sources, cite each material claim, and flag anything that cannot be verified.";
  }
  return `Compare the options against ${evidenceStandard} and explain what would change the decision.`;
}

function variantsFor(family) {
  const cluster = clusters[family.cluster];
  return [
    ["canonical", family.canonical],
    ["persona", `I lead ${cluster.buyerContext}. ${family.canonical}`],
    [
      "evidence",
      `${family.canonical} Base the answer on ${cluster.evidenceStandard}.`,
    ],
    [
      "decision",
      `${family.canonical} ${decisionInstruction(family.mode, cluster.evidenceStandard)}`,
    ],
  ].map(([variant, prompt]) => ({
    prompt_id: `${family.id}-${variant}`,
    family_id: family.id,
    cluster: family.cluster,
    mode: family.mode,
    variant,
    prompt,
    target_url: family.targetUrl,
    coverage: family.coverage,
    priority: family.priority,
    repeat_count: 3,
  }));
}

function escapeCsv(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toCsv(rows, columns) {
  return [
    columns.join(","),
    ...rows.map((row) =>
      columns.map((column) => escapeCsv(row[column])).join(","),
    ),
  ].join("\n");
}

const prompts = families.flatMap(variantsFor);
if (families.length !== 50 || prompts.length !== 200) {
  throw new Error(
    `Expected 50 prompt families and 200 prompt variants; found ${families.length} and ${prompts.length}.`,
  );
}

const promptColumns = [
  "prompt_id",
  "family_id",
  "cluster",
  "mode",
  "variant",
  "prompt",
  "target_url",
  "coverage",
  "priority",
  "repeat_count",
];

const observationColumns = [
  "run_id",
  "prompt_id",
  "family_id",
  "platform",
  "model",
  "interface",
  "market",
  "language",
  "web_search_state",
  "run_number",
  "queried_at",
  "response_url",
  "brand_included",
  "brand_position",
  "brand_recommended",
  "cited_brand_url",
  "cited_urls",
  "search_queries",
  "competitors",
  "answer_accuracy",
  "sentiment",
  "referral_sessions",
  "qualified_leads",
  "revenue",
  "reviewer",
  "notes",
];

const backlogRows = families.map((family) => ({
  family_id: family.id,
  cluster: family.cluster,
  canonical_prompt: family.canonical,
  target_url: family.targetUrl,
  coverage: family.coverage,
  priority: family.priority,
  next_action:
    family.coverage === "existing"
      ? "Validate direct answer, evidence, internal links, crawler access and conversion path"
      : family.coverage === "needs-expansion"
        ? "Expand the existing page with primary evidence, measurement detail and objections"
        : "Validate demand and evidence before creating the planned page",
}));

const backlogColumns = [
  "family_id",
  "cluster",
  "canonical_prompt",
  "target_url",
  "coverage",
  "priority",
  "next_action",
];

await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  writeFile(
    join(outputDirectory, "theprojectseo-ai-prompt-registry-2026-07-29.csv"),
    `${toCsv(prompts, promptColumns)}\n`,
  ),
  writeFile(
    join(
      outputDirectory,
      "theprojectseo-ai-observation-template-2026-07-29.csv",
    ),
    `${observationColumns.join(",")}\n`,
  ),
  writeFile(
    join(outputDirectory, "theprojectseo-ai-content-backlog-2026-07-29.csv"),
    `${toCsv(backlogRows, backlogColumns)}\n`,
  ),
  writeFile(
    join(outputDirectory, "theprojectseo-ai-prompt-registry-2026-07-29.json"),
    `${JSON.stringify(
      {
        generatedAt: "2026-07-29",
        methodology: "Controlled observations, not deterministic rankings",
        families: families.length,
        prompts: prompts.length,
        repeatCount: 3,
        prompts,
      },
      null,
      2,
    )}\n`,
  ),
]);

console.log(
  `Exported ${families.length} families and ${prompts.length} prompts to ${outputDirectory}`,
);
