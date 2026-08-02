import { getAnalyticsConsent } from "@/lib/consent";

type EventParameters = Record<
  string,
  string | number | boolean | null | undefined
>;

type Gtag = (...args: unknown[]) => void;
type Clarity = ((...args: unknown[]) => void) & { q?: unknown[][] };
type UetQueue = { push: (...args: unknown[]) => unknown };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    clarity?: Clarity;
    uetq?: UetQueue;
    UET?: new (options: { q: UetQueue; ti: string }) => UetQueue;
    __tpsGaInitialized?: boolean;
    __tpsClarityInitialized?: boolean;
    __tpsUetInitialized?: boolean;
  }
}

// These are public, site-specific identifiers rather than secrets. Keep
// environment overrides for previews and forks, while making production
// measurement resilient to a missing hosting-variable configuration.
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-N4WG429GVJ";
const CLARITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "xtspwvskr4";
const GOOGLE_ADS_CONVERSION_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
const GOOGLE_ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL;
const MICROSOFT_UET_TAG_ID = process.env.NEXT_PUBLIC_MICROSOFT_UET_TAG_ID;

function ensureGtag(): Gtag {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  return window.gtag;
}

function loadScript(id: string, src: string): void {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function ensureUetQueue(): UetQueue {
  if (!window.uetq) {
    window.uetq = [] as unknown as UetQueue;
  }
  return window.uetq;
}

function consentParameters(consent: "granted" | "denied") {
  return {
    analytics_storage: consent,
    ad_storage: consent,
    ad_user_data: consent,
    ad_personalization: consent,
  };
}

export function initializeGoogleMeasurement(): void {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;

  const isLocalDebugSession =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const gtag = ensureGtag();
  if (!window.__tpsGaInitialized) {
    gtag("consent", "default", {
      ...consentParameters("denied"),
      wait_for_update: 500,
    });
    gtag("set", "ads_data_redaction", true);
    gtag("set", "url_passthrough", true);
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false,
      allow_enhanced_conversions: false,
      ...(isLocalDebugSession ? { debug_mode: true } : {}),
    });
    if (GOOGLE_ADS_CONVERSION_ID) {
      gtag("config", GOOGLE_ADS_CONVERSION_ID);
    }
    window.__tpsGaInitialized = true;
  }

  loadScript(
    "tps-google-tag",
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      GA_MEASUREMENT_ID,
    )}`,
  );
}

export function initializeClarity(): void {
  if (typeof window === "undefined" || !CLARITY_PROJECT_ID) return;

  if (!window.clarity) {
    const clarity: Clarity = (...args: unknown[]) => {
      clarity.q = clarity.q || [];
      clarity.q.push(args);
    };
    window.clarity = clarity;
  }

  if (!window.__tpsClarityInitialized) {
    loadScript(
      "tps-clarity",
      `https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_PROJECT_ID)}`,
    );
    window.__tpsClarityInitialized = true;
  }
}

export function initializeMicrosoftUet(): void {
  if (typeof window === "undefined" || !MICROSOFT_UET_TAG_ID) return;

  const queue = ensureUetQueue();
  if (window.__tpsUetInitialized) return;

  queue.push("consent", "default", { ad_storage: "denied" });

  if (!document.getElementById("tps-microsoft-uet")) {
    const script = document.createElement("script");
    script.id = "tps-microsoft-uet";
    script.async = true;
    script.src = "https://bat.bing.com/bat.js";
    script.onload = () => {
      if (!window.UET || !MICROSOFT_UET_TAG_ID) return;
      const queuedCommands = ensureUetQueue();
      window.uetq = new window.UET({
        ti: MICROSOFT_UET_TAG_ID,
        q: queuedCommands,
      });
      window.uetq.push("pageLoad");
    };
    document.head.appendChild(script);
  }

  window.__tpsUetInitialized = true;
}

export function applyMeasurementConsent(consent: "granted" | "denied"): void {
  if (typeof window === "undefined") return;

  if (GA_MEASUREMENT_ID) {
    ensureGtag()("consent", "update", consentParameters(consent));
  }

  if (CLARITY_PROJECT_ID && window.clarity) {
    window.clarity("consentv2", {
      ad_Storage: consent,
      analytics_Storage: consent,
    });
  }

  if (MICROSOFT_UET_TAG_ID) {
    ensureUetQueue().push("consent", "update", {
      ad_storage: consent,
    });
  }
}

export function trackEvent(
  eventName: string,
  parameters: EventParameters = {},
): boolean {
  if (typeof window === "undefined" || getAnalyticsConsent() !== "granted") {
    return false;
  }

  // A child component can emit an event before Measurement's effect runs.
  // Initialize here as well so consent-default-denied is always queued before
  // the first event, including for returning visitors who already opted in.
  initializeGoogleMeasurement();
  initializeClarity();
  initializeMicrosoftUet();
  applyMeasurementConsent("granted");

  const safeParameters = Object.fromEntries(
    Object.entries(parameters).filter(
      ([, value]) => value !== undefined && value !== null,
    ),
  );

  if (GA_MEASUREMENT_ID) {
    ensureGtag()("event", eventName, safeParameters);
  }

  if (CLARITY_PROJECT_ID && window.clarity) {
    window.clarity("event", eventName);
  }

  if (MICROSOFT_UET_TAG_ID && window.uetq) {
    window.uetq.push("event", eventName, safeParameters);
  }

  return true;
}

export function trackLeadConversion(
  leadEventId: string,
  parameters: EventParameters = {},
): void {
  if (
    !trackEvent("generate_lead", {
      ...parameters,
      event_id: leadEventId,
    })
  ) {
    return;
  }

  if (GOOGLE_ADS_CONVERSION_ID && GOOGLE_ADS_LEAD_LABEL && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_LEAD_LABEL}`,
      transaction_id: leadEventId,
    });
  }
}
