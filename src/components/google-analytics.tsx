"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useTrackingConsent } from "@/lib/tracking-consent";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  const consent = useTrackingConsent();
  const validMeasurementId =
    measurementId && /^G-[A-Z0-9]+$/.test(measurementId) ? measurementId : null;

  useEffect(() => {
    if (!consent?.analytics || !validMeasurementId) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args: unknown[]) => {
        window.dataLayer?.push(args);
      });
    window.gtag("js", new Date());
    window.gtag("config", validMeasurementId, {
      send_page_view: false,
      anonymize_ip: true,
    });
  }, [consent?.analytics, validMeasurementId]);

  if (!consent?.analytics || !validMeasurementId) return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${validMeasurementId}`}
      strategy="afterInteractive"
    />
  );
}
