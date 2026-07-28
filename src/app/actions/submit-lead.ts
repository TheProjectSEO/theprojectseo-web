"use server";

import { z, type core } from "zod";
import { getLeadsSupabase } from "@/lib/supabase-leads";
import { Resend } from "resend";
import { getSeoTierByFormValue, getSeoTierFormLabel } from "@/data/pricing";

const leadSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  phone: z.string().optional(),
  websiteUrl: z.string().optional(),
  serviceInterest: z.string().optional(),
  selectedPlan: z
    .enum(["initial-3500", "growth-5500", "enterprise-custom"])
    .optional(),
  discoverySource: z
    .enum([
      "chatgpt",
      "google-search",
      "google-ai-overview",
      "bing-search",
      "perplexity",
      "claude",
      "linkedin-social",
      "referral",
      "other",
    ])
    .optional(),
  discoveryDetail: z.string().max(300).optional(),
  message: z.string().optional(),
  // Attribution
  sourcePage: z.string(),
  sourceUrl: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
  referrer: z.string().optional(),
  ctaSource: z.string().max(120).optional(),
  landingPage: z.string().max(500).optional(),
  sessionId: z.string().max(120).optional(),
});

export type LeadFormState = {
  success: boolean;
  error?: string;
};

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const str = (key: string) => {
    const v = formData.get(key);
    return typeof v === "string" ? v : undefined;
  };

  const raw = {
    firstName: str("firstName"),
    lastName: str("lastName"),
    email: str("email"),
    company: str("company"),
    phone: str("phone"),
    websiteUrl: str("websiteUrl"),
    serviceInterest: str("serviceInterest"),
    selectedPlan: str("selectedPlan") || undefined,
    discoverySource: str("discoverySource") || undefined,
    discoveryDetail: str("discoveryDetail"),
    message: str("message"),
    sourcePage: str("sourcePage"),
    sourceUrl: str("sourceUrl"),
    utmSource: str("utmSource"),
    utmMedium: str("utmMedium"),
    utmCampaign: str("utmCampaign"),
    utmTerm: str("utmTerm"),
    utmContent: str("utmContent"),
    referrer: str("referrer"),
    ctaSource: str("ctaSource"),
    landingPage: str("landingPage"),
    sessionId: str("sessionId"),
  };

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    const issues = parsed.error.issues as core.$ZodIssue[];
    return { success: false, error: issues[0]?.message || "Invalid form data" };
  }

  const lead = parsed.data;
  const fullName = `${lead.firstName} ${lead.lastName}`;
  const selectedTier = getSeoTierByFormValue(lead.selectedPlan);
  const selectedPlanLabel = selectedTier
    ? getSeoTierFormLabel(selectedTier)
    : undefined;
  const storedServiceInterest = [
    lead.serviceInterest,
    selectedPlanLabel ? `Selected SEO plan: ${selectedPlanLabel}` : undefined,
  ]
    .filter(Boolean)
    .join(" | ");

  // 1. Insert into Supabase
  let dbError: { message?: string } | null = null;

  try {
    const result = await getLeadsSupabase()
      .from("leads")
      .insert({
        name: fullName,
        first_name: lead.firstName,
        last_name: lead.lastName,
        email: lead.email,
        company: lead.company || null,
        phone: lead.phone || null,
        website_url: lead.websiteUrl || null,
        service_interest: storedServiceInterest || null,
        selected_plan: lead.selectedPlan || null,
        selected_plan_label: selectedPlanLabel || null,
        discovery_source: lead.discoverySource || null,
        discovery_detail: lead.discoveryDetail || null,
        message: lead.message || null,
        source_page: lead.sourcePage,
        source_url: lead.sourceUrl || null,
        utm_source: lead.utmSource || null,
        utm_medium: lead.utmMedium || null,
        utm_campaign: lead.utmCampaign || null,
        utm_term: lead.utmTerm || null,
        utm_content: lead.utmContent || null,
        referrer: lead.referrer || null,
        cta_source: lead.ctaSource || null,
        landing_page: lead.landingPage || null,
        session_id: lead.sessionId || null,
        status: "new",
      });
    dbError = result.error;
  } catch (error) {
    console.error("Supabase configuration error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  if (dbError) {
    console.error("Supabase insert error:", dbError);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  // Keep the database as the source of truth, but wait for notification
  // attempts so serverless runtimes do not terminate them early.
  const notificationResults = await Promise.allSettled([
    sendSlackNotification(lead, fullName),
    sendEmailNotification(lead, fullName),
  ]);

  for (const result of notificationResults) {
    if (result.status === "rejected") {
      console.error("Lead notification error:", result.reason);
    }
  }

  return { success: true };
}

async function sendSlackNotification(
  lead: z.infer<typeof leadSchema>,
  fullName: string,
) {
  const botToken = process.env.SLACK_BOT_TOKEN;
  const channelId = process.env.SLACK_LEADS_CHANNEL_ID;
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  const canUseBot = Boolean(botToken && channelId);

  if (!canUseBot && !webhookUrl) return;

  const serviceLabel = escapeSlackText(
    lead.serviceInterest || "Not specified",
    1_800,
  );
  const discoveryLabel = escapeSlackText(
    formatDiscoverySource(lead.discoverySource),
  );
  const selectedTier = getSeoTierByFormValue(lead.selectedPlan);
  const selectedPlanLabel = escapeSlackText(
    selectedTier ? getSeoTierFormLabel(selectedTier) : "No plan selected",
  );
  const pageLabel = escapeSlackText(lead.sourcePage || "Unknown");
  const ctaSourceLabel = escapeSlackText(lead.ctaSource || "Unattributed");
  const landingPageLabel = escapeSlackText(lead.landingPage || "Unknown");
  const safeFullName = escapeSlackText(fullName);
  const safeEmail = escapeSlackText(lead.email);
  const safeCompany = escapeSlackText(lead.company || "-");
  const safePhone = escapeSlackText(lead.phone || "-");
  const safeWebsite = escapeSlackText(lead.websiteUrl || "-");
  const safeDiscoveryDetail = escapeSlackText(
    lead.discoveryDetail || "-",
    1_800,
  );
  const blocks = [
    {
      type: "header",
      text: { type: "plain_text", text: "New Lead from TheProjectSEO" },
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Name:*\n${safeFullName}` },
        { type: "mrkdwn", text: `*Email:*\n${safeEmail}` },
        { type: "mrkdwn", text: `*Company:*\n${safeCompany}` },
        { type: "mrkdwn", text: `*Phone:*\n${safePhone}` },
        { type: "mrkdwn", text: `*Website:*\n${safeWebsite}` },
        {
          type: "mrkdwn",
          text: `*Selected SEO Plan:*\n${selectedPlanLabel}`,
        },
      ],
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Service Interest:*\n${serviceLabel}` },
        { type: "mrkdwn", text: `*Source Page:*\n${pageLabel}` },
        { type: "mrkdwn", text: `*CTA Source:*\n${ctaSourceLabel}` },
        { type: "mrkdwn", text: `*Landing Page:*\n${landingPageLabel}` },
        { type: "mrkdwn", text: `*Found us via:*\n${discoveryLabel}` },
        {
          type: "mrkdwn",
          text: `*Search / prompt:*\n${safeDiscoveryDetail}`,
        },
      ],
    },
    ...(lead.message
      ? [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Message:*\n${escapeSlackText(lead.message, 2_800)}`,
            },
          },
        ]
      : []),
    ...(lead.utmSource
      ? [
          {
            type: "context",
            elements: [
              {
                type: "mrkdwn",
                text: `UTM: source=${escapeSlackText(lead.utmSource || "-")} | medium=${escapeSlackText(lead.utmMedium || "-")} | campaign=${escapeSlackText(lead.utmCampaign || "-")} | term=${escapeSlackText(lead.utmTerm || "-")}`,
              },
            ],
          },
        ]
      : []),
  ];
  const payload = {
    text: `New TheProjectSEO lead: ${fullName} (${lead.email}) from ${lead.sourcePage}`,
    blocks,
  };

  if (canUseBot && botToken && channelId) {
    const response = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${botToken}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ channel: channelId, ...payload }),
    });
    const result = (await response.json()) as {
      ok?: boolean;
      error?: string;
    };

    if (!response.ok || !result.ok) {
      throw new Error(
        `Slack API notification failed: ${result.error || response.statusText}`,
      );
    }
    return;
  }

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(
        `Slack webhook notification failed: ${response.status} ${response.statusText}`,
      );
    }
  }
}

async function sendEmailNotification(
  lead: z.infer<typeof leadSchema>,
  fullName: string,
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const resend = new Resend(apiKey);
  const selectedTier = getSeoTierByFormValue(lead.selectedPlan);
  const selectedPlanLabel = selectedTier
    ? getSeoTierFormLabel(selectedTier)
    : "No plan selected";
  const discoveryLabel = formatDiscoverySource(lead.discoverySource);

  await resend.emails.send({
    from: "TheProjectSEO Leads <leads@theprojectseo.com>",
    to: "aditya@theprojectseo.com",
    subject: `New Lead: ${fullName} — ${lead.sourcePage}`,
    html: `
      <h2>New Lead from TheProjectSEO</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${fullName}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.company || "-"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.phone || "-"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Website</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.websiteUrl || "-"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Selected SEO Plan</td><td style="padding:8px;border-bottom:1px solid #eee;">${selectedPlanLabel}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.serviceInterest || "Not specified"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Found us via</td><td style="padding:8px;border-bottom:1px solid #eee;">${discoveryLabel}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Search / prompt</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.discoveryDetail || "-"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Source Page</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.sourcePage}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">CTA Source</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.ctaSource || "Unattributed"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Landing Page</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.landingPage || "Unknown"}</td></tr>
        ${lead.utmSource ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">UTM Source</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.utmSource}</td></tr>` : ""}
        ${lead.utmCampaign ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">UTM Campaign</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.utmCampaign}</td></tr>` : ""}
        ${lead.message ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.message}</td></tr>` : ""}
      </table>
      <p style="margin-top:16px;color:#666;font-size:12px;">This lead was submitted from <strong>${lead.sourcePage}</strong> on theprojectseo.com</p>
    `,
  });
}

function formatDiscoverySource(
  source?: z.infer<typeof leadSchema>["discoverySource"],
) {
  const labels: Record<NonNullable<typeof source>, string> = {
    chatgpt: "ChatGPT",
    "google-search": "Google Search",
    "google-ai-overview": "Google AI Overview",
    "bing-search": "Bing Search",
    perplexity: "Perplexity",
    claude: "Claude",
    "linkedin-social": "LinkedIn or social media",
    referral: "Referral or word of mouth",
    other: "Other",
  };

  return source ? labels[source] : "Not specified";
}

function escapeSlackText(value: string, maxLength = 900) {
  const truncated =
    value.length > maxLength ? `${value.slice(0, maxLength - 1)}…` : value;

  return truncated
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
