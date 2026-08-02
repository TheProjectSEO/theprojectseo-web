import clusterData from "@/data/ai-visibility-prompt-clusters.json";
import familyData from "@/data/ai-visibility-prompt-families.json";

export type PromptMode =
  | "recommendation"
  | "diagnostic"
  | "evaluation"
  | "comparison";

export type PromptCoverage = "existing" | "needs-expansion" | "planned";
export type PromptPriority = "tier-1" | "tier-2";
export type PromptVariant = "canonical" | "persona" | "evidence" | "decision";

export interface PromptCluster {
  label: string;
  buyerContext: string;
  evidenceStandard: string;
}

export interface PromptFamily {
  id: string;
  cluster: keyof typeof clusterData;
  mode: PromptMode;
  canonical: string;
  targetUrl: string;
  coverage: PromptCoverage;
  priority: PromptPriority;
}

export interface VisibilityPrompt extends PromptFamily {
  promptId: string;
  variant: PromptVariant;
  prompt: string;
  repeatCount: 3;
}

export const promptClusters = clusterData satisfies Record<
  string,
  PromptCluster
>;
export const promptFamilies = familyData as PromptFamily[];

function decisionInstruction(
  mode: PromptMode,
  evidenceStandard: string,
): string {
  switch (mode) {
    case "recommendation":
      return "Compare no more than five options and separate verified evidence from marketing claims.";
    case "diagnostic":
      return "Give a prioritized diagnosis, the evidence to collect, and the first three checks.";
    case "evaluation":
      return "Use current public sources, cite each material claim, and flag anything that cannot be verified.";
    case "comparison":
      return `Compare the options against ${evidenceStandard} and explain what would change the decision.`;
  }
}

function buildVariants(family: PromptFamily): VisibilityPrompt[] {
  const cluster = promptClusters[family.cluster];
  const variants: Array<[PromptVariant, string]> = [
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
  ];

  return variants.map(([variant, prompt]) => ({
    ...family,
    promptId: `${family.id}-${variant}`,
    variant,
    prompt,
    repeatCount: 3,
  }));
}

export const visibilityPrompts = promptFamilies.flatMap(buildVariants);

if (visibilityPrompts.length !== 200) {
  throw new Error(
    `The AI visibility registry must contain 200 prompts; found ${visibilityPrompts.length}.`,
  );
}

export const promptCoverageCounts = promptFamilies.reduce<
  Record<PromptCoverage, number>
>(
  (counts, family) => {
    counts[family.coverage] += 1;
    return counts;
  },
  { existing: 0, "needs-expansion": 0, planned: 0 },
);
