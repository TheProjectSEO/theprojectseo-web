"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  applyMeasurementConsent,
  initializeClarity,
  initializeGoogleMeasurement,
  initializeMicrosoftUet,
  trackEvent,
} from "@/lib/analytics";
import {
  captureAttribution,
  clearPersistentAttribution,
  persistCurrentAttribution,
} from "@/lib/attribution";
import {
  CONSENT_CHANGE_EVENT,
  getAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/consent";

const SAFE_PAGE_PARAMETERS = [
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
  "plan",
];

function safePageLocation(): string {
  const current = new URL(window.location.href);
  const safe = new URL(current.origin + current.pathname);
  for (const key of SAFE_PAGE_PARAMETERS) {
    const value = current.searchParams.get(key);
    if (value) safe.searchParams.set(key, value.slice(0, 500));
  }
  return safe.toString();
}

function MeasurementInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const previousPageRef = useRef<string | null>(null);

  useEffect(() => {
    captureAttribution();
    initializeGoogleMeasurement();
    initializeClarity();
    initializeMicrosoftUet();

    const savedConsent = getAnalyticsConsent() || "denied";
    setConsent(savedConsent);
    applyMeasurementConsent(savedConsent);
    if (savedConsent === "granted") persistCurrentAttribution();

    const handleConsent = (event: Event) => {
      const nextConsent = (event as CustomEvent<AnalyticsConsent>).detail;
      setConsent(nextConsent);
      applyMeasurementConsent(nextConsent);
      if (nextConsent === "granted") {
        persistCurrentAttribution();
      } else {
        clearPersistentAttribution();
      }
    };

    window.addEventListener(CONSENT_CHANGE_EVENT, handleConsent);
    return () =>
      window.removeEventListener(CONSENT_CHANGE_EVENT, handleConsent);
  }, []);

  useEffect(() => {
    if (consent !== "granted" || pathname.startsWith("/admin")) return;

    const pageLocation = safePageLocation();
    const pageUrl = new URL(pageLocation);
    if (previousPageRef.current === pageLocation) return;

    trackEvent("page_view", {
      page_location: pageLocation,
      page_path: `${pageUrl.pathname}${pageUrl.search}`,
      page_title: document.title,
    });
    previousPageRef.current = pageLocation;
  }, [consent, pathname, search]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_location: pathname });
        return;
      }
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_location: pathname });
        return;
      }

      let destination: URL;
      try {
        destination = new URL(link.href, window.location.href);
      } catch {
        return;
      }

      if (
        destination.origin === window.location.origin &&
        destination.pathname === "/contact"
      ) {
        trackEvent("lead_cta_click", {
          link_location: pathname,
          destination_path: destination.pathname,
          selected_plan: destination.searchParams.get("plan"),
        });
      } else if (destination.origin !== window.location.origin) {
        trackEvent("outbound_click", {
          link_location: pathname,
          destination_domain: destination.hostname,
        });
      } else if (/\.(pdf|docx?|xlsx?|zip)$/i.test(destination.pathname)) {
        trackEvent("file_download", {
          link_location: pathname,
          file_extension:
            destination.pathname.split(".").pop()?.toLowerCase() || "",
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  return null;
}

export function Measurement() {
  return (
    <Suspense fallback={null}>
      <MeasurementInner />
    </Suspense>
  );
}
