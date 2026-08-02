"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_SETTINGS_EVENT,
  getAnalyticsConsent,
  setAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/consent";

export function ConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState<AnalyticsConsent | null>(null);

  useEffect(() => {
    const savedConsent = getAnalyticsConsent();
    setSelection(savedConsent);
    setIsOpen(savedConsent === null);

    const handleConsent = (event: Event) => {
      setSelection((event as CustomEvent<AnalyticsConsent>).detail);
      setIsOpen(false);
    };
    const handleOpen = () => setIsOpen(true);

    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsent);
    window.addEventListener(CONSENT_SETTINGS_EVENT, handleOpen);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsent);
      window.removeEventListener(CONSENT_SETTINGS_EVENT, handleOpen);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <section
      aria-label="Analytics preferences"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-lg border border-border-strong bg-paper p-5 shadow-2xl sm:p-6"
    >
      <div className="sm:flex sm:items-center sm:justify-between sm:gap-8">
        <div>
          <h2 className="font-heading text-base font-semibold text-ink">
            Your analytics choice
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
            We use Google Analytics, Microsoft Clarity, and configured
            advertising measurement to understand journeys and improve the site.
            Essential-only mode uses limited cookieless consent signals;
            analytics cookies and custom funnel events require your permission.
            Lead submission and same-visit attribution work either way. Read our{" "}
            <Link
              href="/privacy"
              className="font-medium text-accent underline underline-offset-2"
            >
              privacy policy
            </Link>
            .
          </p>
        </div>
        <div className="mt-4 flex shrink-0 flex-col-reverse gap-2 sm:mt-0 sm:flex-row">
          <button
            type="button"
            onClick={() => setAnalyticsConsent("denied")}
            aria-pressed={selection === "denied"}
            className="rounded-md border border-border-strong px-4 py-2.5 font-heading text-sm font-semibold text-ink transition-colors hover:bg-mist"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => setAnalyticsConsent("granted")}
            aria-pressed={selection === "granted"}
            className="rounded-md bg-accent px-4 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Allow analytics
          </button>
        </div>
      </div>
    </section>
  );
}
