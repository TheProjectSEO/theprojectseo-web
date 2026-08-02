import { getAnalyticsConsent } from "@/lib/consent";

const SESSION_ID_KEY = "st_session_id";
const SESSION_ATTRIBUTION_KEY = "tps_session_attribution_v1";
const PERSISTENT_ATTRIBUTION_KEY = "tps_last_nondirect_attribution_v1";
const ATTRIBUTION_TTL_MS = 90 * 24 * 60 * 60 * 1000;

const ATTRIBUTION_PARAMETERS = [
  "utm_id",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "dclid",
  "gclsrc",
  "gbraid",
  "wbraid",
  "msclkid",
  "fbclid",
  "ttclid",
  "li_fat_id",
] as const;

type AttributionParameter = (typeof ATTRIBUTION_PARAMETERS)[number];

export type AttributionData = {
  capturedAt: number;
  landingPage: string;
  landingUrl: string;
  referrer: string;
  source: string;
  utmId: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  gclid: string;
  dclid: string;
  gclsrc: string;
  gbraid: string;
  wbraid: string;
  msclkid: string;
  fbclid: string;
  ttclid: string;
  liFatId: string;
};

export type LeadAttribution = AttributionData & {
  sourceUrl: string;
  sessionId: string;
};

function readStorage(storage: Storage, key: string): AttributionData | null {
  try {
    const value = storage.getItem(key);
    if (!value) return null;

    const parsed = JSON.parse(value) as AttributionData;
    if (
      !parsed ||
      typeof parsed.capturedAt !== "number" ||
      typeof parsed.landingUrl !== "string"
    ) {
      storage.removeItem(key);
      return null;
    }

    if (Date.now() - parsed.capturedAt > ATTRIBUTION_TTL_MS) {
      storage.removeItem(key);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function writeStorage(
  storage: Storage,
  key: string,
  value: AttributionData,
): void {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // Attribution must never interfere with the conversion path.
  }
}

function value(params: URLSearchParams, key: AttributionParameter): string {
  return (params.get(key) || "").slice(0, 500);
}

function sanitizeLandingUrl(url: URL): string {
  const sanitized = new URL(url.origin + url.pathname);

  for (const key of ATTRIBUTION_PARAMETERS) {
    const parameterValue = value(url.searchParams, key);
    if (parameterValue) sanitized.searchParams.set(key, parameterValue);
  }

  return sanitized.toString();
}

function sanitizeReferrer(referrer: string): string {
  if (!referrer) return "";

  try {
    const url = new URL(referrer);
    return `${url.origin}${url.pathname}`.slice(0, 2000);
  } catch {
    return "";
  }
}

function isInternalReferrer(referrer: string): boolean {
  if (!referrer) return false;

  try {
    const url = new URL(referrer);
    return (
      url.hostname === window.location.hostname ||
      url.hostname.endsWith(".theprojectseo.com")
    );
  } catch {
    return false;
  }
}

function sourceFromReferrer(referrer: string): string {
  if (!referrer) return "direct";

  try {
    const hostname = new URL(referrer).hostname.toLowerCase();
    if (isInternalReferrer(referrer)) return "internal";
    if (hostname.includes("google.")) return "google";
    if (hostname.includes("bing.com")) return "bing";
    if (hostname.includes("yahoo.")) return "yahoo";
    if (hostname.includes("duckduckgo.com")) return "duckduckgo";
    if (hostname.includes("baidu.com")) return "baidu";
    if (hostname.includes("yandex.")) return "yandex";
    if (hostname.includes("chatgpt.com")) return "chatgpt";
    if (hostname.includes("perplexity.ai")) return "perplexity";
    if (hostname.includes("claude.ai")) return "claude";
    if (hostname.includes("gemini.google.com")) return "gemini";
    if (hostname.includes("copilot.microsoft.com")) return "copilot";
    if (hostname.includes("facebook.com") || hostname.includes("fb.com"))
      return "facebook";
    if (hostname.includes("linkedin.com") || hostname.includes("lnkd.in"))
      return "linkedin";
    if (
      hostname.includes("twitter.com") ||
      hostname.includes("x.com") ||
      hostname.includes("t.co")
    )
      return "x";
    if (hostname.includes("reddit.com")) return "reddit";
    return "referral";
  } catch {
    return "direct";
  }
}

function sourceFromClickId(params: URLSearchParams): string | null {
  if (
    params.has("gclid") ||
    params.has("dclid") ||
    params.has("gclsrc") ||
    params.has("gbraid") ||
    params.has("wbraid")
  ) {
    return "google_ads";
  }
  if (params.has("msclkid")) return "microsoft_ads";
  if (params.has("fbclid")) return "meta_ads";
  if (params.has("ttclid")) return "tiktok_ads";
  if (params.has("li_fat_id")) return "linkedin_ads";
  return null;
}

function createAttribution(): AttributionData {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const referrer = isInternalReferrer(document.referrer)
    ? ""
    : sanitizeReferrer(document.referrer);

  return {
    capturedAt: Date.now(),
    landingPage: url.pathname,
    landingUrl: sanitizeLandingUrl(url),
    referrer,
    source:
      value(params, "utm_source").toLowerCase() ||
      sourceFromClickId(params) ||
      sourceFromReferrer(referrer),
    utmId: value(params, "utm_id"),
    utmSource: value(params, "utm_source"),
    utmMedium: value(params, "utm_medium"),
    utmCampaign: value(params, "utm_campaign"),
    utmTerm: value(params, "utm_term"),
    utmContent: value(params, "utm_content"),
    gclid: value(params, "gclid"),
    dclid: value(params, "dclid"),
    gclsrc: value(params, "gclsrc"),
    gbraid: value(params, "gbraid"),
    wbraid: value(params, "wbraid"),
    msclkid: value(params, "msclkid"),
    fbclid: value(params, "fbclid"),
    ttclid: value(params, "ttclid"),
    liFatId: value(params, "li_fat_id"),
  };
}

function hasNondirectSignal(attribution: AttributionData): boolean {
  return attribution.source !== "direct" && attribution.source !== "internal";
}

export function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";

  try {
    let id = window.sessionStorage.getItem(SESSION_ID_KEY);
    if (!id) {
      id = window.crypto.randomUUID();
      window.sessionStorage.setItem(SESSION_ID_KEY, id);
    }
    return id;
  } catch {
    return window.crypto.randomUUID();
  }
}

export function captureAttribution(): AttributionData | null {
  if (typeof window === "undefined") return null;

  const existingSession = readStorage(
    window.sessionStorage,
    SESSION_ATTRIBUTION_KEY,
  );
  if (existingSession) return existingSession;

  const current = createAttribution();
  const persisted = readStorage(
    window.localStorage,
    PERSISTENT_ATTRIBUTION_KEY,
  );
  const attribution = hasNondirectSignal(current)
    ? current
    : persisted || current;

  writeStorage(window.sessionStorage, SESSION_ATTRIBUTION_KEY, attribution);

  if (getAnalyticsConsent() === "granted" && hasNondirectSignal(attribution)) {
    writeStorage(window.localStorage, PERSISTENT_ATTRIBUTION_KEY, attribution);
  }

  return attribution;
}

export function persistCurrentAttribution(): void {
  if (typeof window === "undefined") return;
  const attribution = captureAttribution();
  if (!attribution || !hasNondirectSignal(attribution)) return;

  writeStorage(window.localStorage, PERSISTENT_ATTRIBUTION_KEY, attribution);
}

export function clearPersistentAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(PERSISTENT_ATTRIBUTION_KEY);
  } catch {
    // Ignore unavailable storage.
  }
}

export function getLeadAttribution(
  leadEventId: string,
): LeadAttribution | null {
  const attribution = captureAttribution();
  if (!attribution) return null;

  const sessionId = getOrCreateSessionId();
  const sourceUrl = new URL(attribution.landingUrl);
  if (sessionId) sourceUrl.searchParams.set("tps_session_id", sessionId);
  if (leadEventId) {
    sourceUrl.searchParams.set("tps_lead_event_id", leadEventId);
  }

  return {
    ...attribution,
    sourceUrl: sourceUrl.toString(),
    sessionId,
  };
}
