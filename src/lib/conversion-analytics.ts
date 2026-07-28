"use client";

import { getPageType } from "@/lib/page-utils";

export const SESSION_KEY = "st_session_id";
export const LANDING_PAGE_KEY = "tps_landing_page";

export type ConversionEventName =
  | "page_view"
  | "scroll_depth"
  | "engaged_session"
  | "cta_impression"
  | "cta_click"
  | "popup_eligible"
  | "popup_view"
  | "popup_dismiss"
  | "popup_cta_click"
  | "form_view"
  | "form_start"
  | "form_submit"
  | "form_error"
  | "generate_lead"
  | "pricing_plan_select"
  | "email_click"
  | "phone_click"
  | "outbound_click";

export type ConversionEventParams = {
  placement?: string;
  label?: string;
  destination?: string;
  variant?: string;
  trigger?: string;
  value?: number;
  metadata?: Record<string, string | number | boolean | null | undefined>;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getOrCreateAnalyticsSessionId() {
  if (typeof window === "undefined") return "server";

  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }

  return sessionId;
}

export function getLandingPage() {
  if (typeof window === "undefined") return "";

  let landingPage = sessionStorage.getItem(LANDING_PAGE_KEY);
  if (!landingPage) {
    landingPage = window.location.pathname;
    sessionStorage.setItem(LANDING_PAGE_KEY, landingPage);
  }

  return landingPage;
}

export function trackConversionEvent(
  eventName: ConversionEventName,
  params: ConversionEventParams = {},
) {
  if (typeof window === "undefined") return;

  const metadata = compactMetadata({
    ...getCampaignMetadata(),
    ...params.metadata,
    device_type: getDeviceType(),
  });
  const payload = {
    sessionId: getOrCreateAnalyticsSessionId(),
    eventName,
    pagePath: window.location.pathname,
    pageType: getPageType(window.location.pathname),
    placement: trimValue(params.placement, 80),
    label: trimValue(params.label, 120),
    destination: trimValue(params.destination, 500),
    variant: trimValue(params.variant, 80),
    trigger: trimValue(params.trigger, 80),
    value:
      typeof params.value === "number" && Number.isFinite(params.value)
        ? params.value
        : undefined,
    metadata,
  };

  sendToGoogleAnalytics(eventName, payload);
  sendToFirstPartyAnalytics(payload);
}

function sendToGoogleAnalytics(
  eventName: ConversionEventName,
  payload: {
    pagePath: string;
    pageType: string;
    placement?: string;
    label?: string;
    destination?: string;
    variant?: string;
    trigger?: string;
    value?: number;
    metadata: Record<string, string | number | boolean | null>;
  },
) {
  const gaParams = compactMetadata({
    page_path: payload.pagePath,
    page_type: payload.pageType,
    cta_placement: payload.placement,
    cta_label: payload.label,
    link_url: payload.destination,
    experience_variant: payload.variant,
    popup_trigger: payload.trigger,
    value: payload.value,
    ...payload.metadata,
  });

  if (window.gtag) {
    window.gtag("event", eventName, gaParams);
  } else if (window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...gaParams });
  }
}

function sendToFirstPartyAnalytics(payload: Record<string, unknown>) {
  const body = JSON.stringify(payload);

  try {
    if (navigator.sendBeacon) {
      const queued = navigator.sendBeacon(
        "/api/conversion-events",
        new Blob([body], { type: "application/json" }),
      );
      if (queued) return;
    }

    void fetch("/api/conversion-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  } catch {
    // Analytics must never interrupt navigation or conversion.
  }
}

function getCampaignMetadata() {
  const searchParams = new URLSearchParams(window.location.search);

  return {
    landing_page: getLandingPage(),
    cta_source: searchParams.get("cta_source"),
    utm_source: searchParams.get("utm_source"),
    utm_medium: searchParams.get("utm_medium"),
    utm_campaign: searchParams.get("utm_campaign"),
    utm_content: searchParams.get("utm_content"),
  };
}

function getDeviceType() {
  if (window.innerWidth < 768) return "mobile";
  if (window.innerWidth < 1024) return "tablet";
  return "desktop";
}

function compactMetadata(
  metadata: Record<string, string | number | boolean | null | undefined>,
) {
  return Object.fromEntries(
    Object.entries(metadata)
      .filter(([, value]) => value !== undefined && value !== "")
      .slice(0, 20)
      .map(([key, value]) => [key.slice(0, 60), value ?? null]),
  ) as Record<string, string | number | boolean | null>;
}

function trimValue(value: string | undefined, maxLength: number) {
  if (!value) return undefined;
  return value.slice(0, maxLength);
}
