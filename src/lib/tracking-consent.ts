"use client";

import { useEffect, useState } from "react";

export const TRACKING_CONSENT_KEY = "tps_tracking_consent_v1";
export const TRACKING_CONSENT_CHANGED = "tps:tracking-consent-changed";
export const OPEN_TRACKING_PREFERENCES = "tps:open-tracking-preferences";

export type TrackingConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

export function readTrackingConsent(): TrackingConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(TRACKING_CONSENT_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as Partial<TrackingConsent>;
    if (
      parsed.necessary !== true ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.marketing !== "boolean" ||
      typeof parsed.decidedAt !== "string"
    ) {
      return null;
    }

    return parsed as TrackingConsent;
  } catch {
    return null;
  }
}

export function saveTrackingConsent(
  selection: Pick<TrackingConsent, "analytics" | "marketing">,
) {
  const consent: TrackingConsent = {
    necessary: true,
    analytics: selection.analytics,
    marketing: selection.marketing,
    decidedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(TRACKING_CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Consent still applies to this page even if storage is unavailable.
  }

  window.dispatchEvent(
    new CustomEvent<TrackingConsent>(TRACKING_CONSENT_CHANGED, {
      detail: consent,
    }),
  );

  return consent;
}

export function hasAnalyticsConsent() {
  return readTrackingConsent()?.analytics === true;
}

export function openTrackingPreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_TRACKING_PREFERENCES));
}

export function useTrackingConsent() {
  const [consent, setConsent] = useState<TrackingConsent | null | undefined>(
    undefined,
  );

  useEffect(() => {
    setConsent(readTrackingConsent());

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<TrackingConsent>;
      setConsent(customEvent.detail || readTrackingConsent());
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === TRACKING_CONSENT_KEY) {
        setConsent(readTrackingConsent());
      }
    };

    window.addEventListener(TRACKING_CONSENT_CHANGED, handleConsentChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(TRACKING_CONSENT_CHANGED, handleConsentChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return consent;
}
