export type AnalyticsConsent = "granted" | "denied";

export const CONSENT_STORAGE_KEY = "tps_analytics_consent_v1";
export const CONSENT_CHANGE_EVENT = "tps:analytics-consent";
export const CONSENT_SETTINGS_EVENT = "tps:open-consent-settings";

export function getAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setAnalyticsConsent(value: AnalyticsConsent): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // Consent still applies to this page even if storage is unavailable.
  }

  window.dispatchEvent(
    new CustomEvent<AnalyticsConsent>(CONSENT_CHANGE_EVENT, {
      detail: value,
    }),
  );
}

export function openConsentSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
}
