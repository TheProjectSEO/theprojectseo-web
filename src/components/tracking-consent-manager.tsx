"use client";

import { useEffect, useState } from "react";
import { Link } from "@/components/link";
import {
  OPEN_TRACKING_PREFERENCES,
  readTrackingConsent,
  saveTrackingConsent,
  useTrackingConsent,
} from "@/lib/tracking-consent";

const RB2B_KEY = "E63P0HY72EOW";
const RB2B_SCRIPT_ID = "tps-rb2b-script";

declare global {
  interface Window {
    reb2b?: { loaded: boolean };
  }
}

export function TrackingConsentManager() {
  const consent = useTrackingConsent();
  const [open, setOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (consent === undefined) return;

    if (consent === null) {
      setOpen(true);
      return;
    }

    setAnalytics(consent.analytics);
    setMarketing(consent.marketing);
  }, [consent]);

  useEffect(() => {
    const handleOpenPreferences = () => {
      const current = readTrackingConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setCustomizing(true);
      setOpen(true);
    };

    window.addEventListener(OPEN_TRACKING_PREFERENCES, handleOpenPreferences);
    return () =>
      window.removeEventListener(
        OPEN_TRACKING_PREFERENCES,
        handleOpenPreferences,
      );
  }, []);

  useEffect(() => {
    if (consent?.marketing) loadRb2b();
  }, [consent?.marketing]);

  const applyConsent = (nextAnalytics: boolean, nextMarketing: boolean) => {
    const previousMarketing = readTrackingConsent()?.marketing === true;
    saveTrackingConsent({
      analytics: nextAnalytics,
      marketing: nextMarketing,
    });
    setAnalytics(nextAnalytics);
    setMarketing(nextMarketing);
    setOpen(false);
    setCustomizing(false);

    if (previousMarketing && !nextMarketing) {
      window.location.reload();
    }
  };

  if (!open || consent === undefined) return null;

  return (
    <section
      role="dialog"
      aria-modal="false"
      aria-labelledby="tracking-consent-title"
      aria-describedby="tracking-consent-description"
      data-cookie-consent
      className="fixed inset-x-4 bottom-4 z-[160] mx-auto max-w-4xl rounded-lg border border-border-strong bg-paper p-5 shadow-2xl sm:p-6"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
            Your privacy choices
          </p>
          <h2
            id="tracking-consent-title"
            className="mt-2 font-heading text-xl font-semibold text-ink"
          >
            Choose how we measure and improve the site
          </h2>
          <p
            id="tracking-consent-description"
            className="mt-2 max-w-2xl text-sm leading-6 text-slate"
          >
            Essential storage keeps the site working. With your permission, we
            use analytics to understand performance and marketing technology to
            identify relevant business interest. You can change this choice
            later in the footer. Read our{" "}
            <Link href="/privacy" className="font-semibold underline">
              privacy policy
            </Link>
            .
          </p>

          {customizing && (
            <fieldset className="mt-5 grid gap-3 sm:grid-cols-3">
              <legend className="sr-only">Tracking preferences</legend>
              <label className="flex items-start gap-3 rounded-md border border-border bg-white p-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-0.5 size-4 accent-accent"
                />
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    Essential
                  </span>
                  <span className="block text-xs leading-5 text-ash">
                    Always active
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 rounded-md border border-border bg-white p-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="mt-0.5 size-4 accent-accent"
                />
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    Analytics
                  </span>
                  <span className="block text-xs leading-5 text-ash">
                    CRO and site performance
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 rounded-md border border-border bg-white p-3">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(event) => setMarketing(event.target.checked)}
                  className="mt-0.5 size-4 accent-accent"
                />
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    Marketing
                  </span>
                  <span className="block text-xs leading-5 text-ash">
                    RB2B visitor identification
                  </span>
                </span>
              </label>
            </fieldset>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row lg:w-64 lg:flex-col">
          {customizing ? (
            <button
              type="button"
              onClick={() => applyConsent(analytics, marketing)}
              className="min-h-11 rounded-md bg-accent px-5 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Save my choices
            </button>
          ) : (
            <button
              type="button"
              onClick={() => applyConsent(true, true)}
              className="min-h-11 rounded-md bg-accent px-5 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Accept all
            </button>
          )}
          <button
            type="button"
            onClick={() => applyConsent(false, false)}
            className="min-h-11 rounded-md border border-border-emphasis bg-white px-5 py-2.5 font-heading text-sm font-semibold text-ink transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Essential only
          </button>
          {!customizing && (
            <button
              type="button"
              onClick={() => setCustomizing(true)}
              className="min-h-11 rounded-md px-5 py-2.5 text-sm font-semibold text-slate underline decoration-1 underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Customize
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function loadRb2b() {
  if (window.reb2b?.loaded || document.getElementById(RB2B_SCRIPT_ID)) return;

  window.reb2b = { loaded: true };
  const script = document.createElement("script");
  script.id = RB2B_SCRIPT_ID;
  script.async = true;
  script.src = `https://ddwl4m2hdecbv.cloudfront.net/b/${RB2B_KEY}/${RB2B_KEY}.js.gz`;
  script.onerror = () => {
    script.remove();
    delete window.reb2b;
  };
  document.head.appendChild(script);
}
