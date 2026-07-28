import { NextResponse } from "next/server";
import { z } from "zod";
import { getLeadsSupabase } from "@/lib/supabase-leads";

const eventNames = [
  "page_view",
  "scroll_depth",
  "engaged_session",
  "cta_impression",
  "cta_click",
  "popup_eligible",
  "popup_view",
  "popup_dismiss",
  "popup_cta_click",
  "form_view",
  "form_start",
  "form_submit",
  "form_error",
  "generate_lead",
  "pricing_plan_select",
  "email_click",
  "phone_click",
  "outbound_click",
] as const;

const eventSchema = z.object({
  sessionId: z.string().min(1).max(100),
  eventName: z.enum(eventNames),
  pagePath: z.string().min(1).max(500),
  pageType: z.string().min(1).max(80),
  placement: z.string().max(80).optional(),
  label: z.string().max(120).optional(),
  destination: z.string().max(500).optional(),
  variant: z.string().max(80).optional(),
  trigger: z.string().max(80).optional(),
  value: z.number().finite().optional(),
  metadata: z
    .record(
      z.string().max(60),
      z.union([
        z.string().max(500),
        z.number().finite(),
        z.boolean(),
        z.null(),
      ]),
    )
    .optional(),
});

export async function POST(request: Request) {
  if (!isAllowedOrigin(request.headers.get("origin"))) {
    return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = eventSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid event" }, { status: 400 });
  }

  const event = parsed.data;
  const { error } = await getLeadsSupabase()
    .from("conversion_events")
    .insert({
      session_id: event.sessionId,
      event_name: event.eventName,
      page_path: event.pagePath,
      page_type: event.pageType,
      placement: event.placement || null,
      label: event.label || null,
      destination: event.destination || null,
      variant: event.variant || null,
      trigger: event.trigger || null,
      value: event.value ?? null,
      metadata: event.metadata || {},
    });

  if (error) {
    console.error("Conversion event insert error:", error);
    return new Response(null, { status: 204 });
  }

  return new Response(null, { status: 204 });
}

function isAllowedOrigin(origin: string | null) {
  if (!origin) return true;

  try {
    const hostname = new URL(origin).hostname;
    return (
      hostname === "theprojectseo.com" ||
      hostname === "www.theprojectseo.com" ||
      hostname === "localhost" ||
      hostname.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
}
