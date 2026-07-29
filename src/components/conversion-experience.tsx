"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "@/components/link";
import {
  getLandingPage,
  trackConversionEvent,
  type ConversionEventName,
} from "@/lib/conversion-analytics";
import { useTrackingConsent } from "@/lib/tracking-consent";

const POPUP_SEEN_KEY = "tps_popup_seen";
const POPUP_DISMISSED_UNTIL_KEY = "tps_popup_dismissed_until";
const LEAD_SUBMITTED_UNTIL_KEY = "tps_lead_submitted_until";
const SESSION_PAGE_COUNT_KEY = "tps_page_count";
const POPUP_DISMISSAL_MS = 7 * 24 * 60 * 60 * 1000;
const LEAD_SUPPRESSION_MS = 30 * 24 * 60 * 60 * 1000;

const popupSuppressedPaths = [
  "/contact",
  "/pricing",
  "/privacy",
  "/terms",
  "/admin",
  "/demo",
  "/animation-demo",
];

export function ConversionExperience() {
  const [popupOpen, setPopupOpen] = useState(false);
  const consent = useTrackingConsent();
  const consentDecided = consent !== undefined && consent !== null;

  return (
    <>
      {consent?.analytics && <GlobalConversionTracker />}
      {consentDecided && <StickyContactBar suppressed={popupOpen} />}
      {consentDecided && <LeadCapturePopup onOpenChange={setPopupOpen} />}
    </>
  );
}

function GlobalConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    getLandingPage();
    const pageCount =
      Number(sessionStorage.getItem(SESSION_PAGE_COUNT_KEY) || "0") + 1;
    sessionStorage.setItem(SESSION_PAGE_COUNT_KEY, String(pageCount));

    trackConversionEvent("page_view", {
      metadata: {
        page_count: pageCount,
        page_title: document.title.slice(0, 120),
      },
    });

    const engagedTimer = window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        trackConversionEvent("engaged_session", {
          value: 30,
          metadata: { engagement_seconds: 30 },
        });
      }
    }, 30_000);

    const reached = new Set<number>();
    const scrollMilestones = [25, 50, 75, 90];
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const depth = Math.min(
        100,
        Math.round((window.scrollY / scrollable) * 100),
      );
      for (const milestone of scrollMilestones) {
        if (depth >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          trackConversionEvent("scroll_depth", {
            value: milestone,
            metadata: { percent_scrolled: milestone },
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(engagedTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const destination = link.href || href;
      const placement = link.dataset.analyticsPlacement || inferPlacement(link);
      const label =
        link.dataset.analyticsLabel ||
        link.textContent?.trim().replace(/\s+/g, " ").slice(0, 120) ||
        "Unlabelled link";
      const explicitEvent = link.dataset.analyticsEvent as
        | ConversionEventName
        | undefined;

      if (explicitEvent) {
        trackConversionEvent(explicitEvent, {
          placement,
          label,
          destination,
          variant: link.dataset.analyticsVariant,
          trigger: link.dataset.analyticsTrigger,
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackConversionEvent("email_click", {
          placement,
          label,
          destination: href,
        });
        return;
      }

      if (href.startsWith("tel:")) {
        trackConversionEvent("phone_click", {
          placement,
          label,
          destination: href,
        });
        return;
      }

      if (isContactDestination(link)) {
        const url = new URL(link.href);
        const selectedPlan = url.searchParams.get("plan");
        trackConversionEvent(
          selectedPlan ? "pricing_plan_select" : "cta_click",
          {
            placement,
            label,
            destination: `${url.pathname}${url.search}`,
            metadata: { selected_plan: selectedPlan },
          },
        );
        return;
      }

      if (
        link.origin === window.location.origin &&
        link.dataset.analyticsPlacement
      ) {
        const url = new URL(link.href);
        trackConversionEvent("cta_click", {
          placement,
          label,
          destination: `${url.pathname}${url.search}`,
          variant: link.dataset.analyticsVariant,
        });
        return;
      }

      if (link.origin !== window.location.origin) {
        trackConversionEvent("outbound_click", {
          placement,
          label,
          destination,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

function StickyContactBar({ suppressed }: { suppressed: boolean }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [conversionSurfaceVisible, setConversionSurfaceVisible] =
    useState(false);
  const impressionTracked = useRef(false);

  useEffect(() => {
    if (isPopupSuppressedPath(pathname)) {
      setVisible(false);
      return;
    }

    const updateVisibility = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setVisible(progress >= 0.2);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        setConversionSurfaceVisible(
          entries.some((entry) => entry.isIntersecting),
        );
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll("[data-site-footer], form[data-lead-form]")
      .forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      observer.disconnect();
    };
  }, [pathname]);

  const shouldShow = visible && !suppressed && !conversionSurfaceVisible;

  useEffect(() => {
    if (shouldShow && !impressionTracked.current) {
      impressionTracked.current = true;
      trackConversionEvent("cta_impression", {
        placement: "sticky_bottom_bar",
        label: "Request an SEO review",
        variant: "qualified_review_v1",
      });
    }
  }, [shouldShow]);

  if (!shouldShow) return null;

  return (
    <aside
      aria-label="Request an SEO review"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-white/15 bg-ink/95 px-4 py-3 shadow-[0_-12px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl"
      data-analytics-placement="sticky_bottom_bar"
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate font-heading text-sm font-semibold text-white sm:text-base">
            Search visibility should create qualified demand.
          </p>
          <p className="hidden text-xs text-white/60 sm:block">
            Share your site and the decision that needs to change.
          </p>
        </div>
        <Link
          href="/contact?cta_source=sticky_bottom_bar"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md bg-action px-4 py-2 font-heading text-sm font-bold text-ink transition-colors hover:bg-white"
          data-analytics-placement="sticky_bottom_bar"
          data-analytics-label="Request an SEO review"
        >
          <span className="hidden sm:inline">Request an SEO review</span>
          <span className="sm:hidden">SEO review</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}

function LeadCapturePopup({
  onOpenChange,
}: {
  onOpenChange: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState("engaged_visit");
  const startedAt = useRef(0);
  const maxScroll = useRef(0);
  const closeTracked = useRef(false);

  useEffect(() => {
    setOpen(false);
    onOpenChange(false);
    closeTracked.current = false;

    if (isPopupSuppressedPath(pathname) || isPopupFrequencyBlocked()) return;

    startedAt.current = Date.now();
    maxScroll.current = 0;

    const showPopup = (nextTrigger: string) => {
      if (
        isPopupFrequencyBlocked() ||
        document.visibilityState !== "visible" ||
        isLeadFormVisible() ||
        document.querySelector("[data-cookie-consent]")
      ) {
        return;
      }

      sessionStorage.setItem(POPUP_SEEN_KEY, "1");
      closeTracked.current = false;
      setTrigger(nextTrigger);
      setOpen(true);
      onOpenChange(true);
      trackConversionEvent("popup_eligible", {
        placement: "engagement_popup",
        variant: "qualified_review_v1",
        trigger: nextTrigger,
      });
      trackConversionEvent("popup_view", {
        placement: "engagement_popup",
        variant: "qualified_review_v1",
        trigger: nextTrigger,
      });
    };

    const checkEngagement = () => {
      const elapsed = Date.now() - startedAt.current;
      const mobile = window.innerWidth < 768;
      const minimumTime = mobile ? 60_000 : 45_000;
      const minimumScroll = mobile ? 60 : 50;

      if (elapsed >= minimumTime && maxScroll.current >= minimumScroll) {
        showPopup(mobile ? "mobile_engagement" : "desktop_engagement");
      }
    };

    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      maxScroll.current = Math.max(
        maxScroll.current,
        Math.round((window.scrollY / scrollable) * 100),
      );
      checkEngagement();
    };

    const handleMouseOut = (event: MouseEvent) => {
      const elapsed = Date.now() - startedAt.current;
      if (
        window.innerWidth >= 1024 &&
        event.clientY <= 8 &&
        !event.relatedTarget &&
        elapsed >= 20_000 &&
        maxScroll.current >= 20
      ) {
        showPopup("desktop_exit_intent");
      }
    };

    const engagementTimer = window.setInterval(checkEngagement, 5_000);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.clearInterval(engagementTimer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [pathname, onOpenChange]);

  useEffect(() => {
    const handleLeadSubmitted = () => {
      localStorage.setItem(
        LEAD_SUBMITTED_UNTIL_KEY,
        String(Date.now() + LEAD_SUPPRESSION_MS),
      );
      setOpen(false);
      onOpenChange(false);
    };

    window.addEventListener("tps:lead-submitted", handleLeadSubmitted);
    return () =>
      window.removeEventListener("tps:lead-submitted", handleLeadSubmitted);
  }, [onOpenChange]);

  const dismiss = (dismissTrigger: string) => {
    if (!closeTracked.current) {
      closeTracked.current = true;
      localStorage.setItem(
        POPUP_DISMISSED_UNTIL_KEY,
        String(Date.now() + POPUP_DISMISSAL_MS),
      );
      trackConversionEvent("popup_dismiss", {
        placement: "engagement_popup",
        variant: "qualified_review_v1",
        trigger: dismissTrigger,
      });
    }
    setOpen(false);
    onOpenChange(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => dismiss("escape_or_backdrop")}
      className="relative z-[120]"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-ink/55 backdrop-blur-sm transition-opacity duration-200 data-closed:opacity-0 motion-reduce:transition-none"
      />
      <div className="fixed inset-0 overflow-y-auto p-4 sm:p-6">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel
            transition
            className="relative w-full max-w-2xl border border-border-strong bg-paper p-7 shadow-2xl transition duration-200 data-closed:translate-y-4 data-closed:opacity-0 motion-reduce:transform-none motion-reduce:transition-none sm:p-10"
          >
            <button
              type="button"
              onClick={() => dismiss("close_button")}
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full text-slate transition-colors hover:bg-cream hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Close this message"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              A useful next step—not a free generic audit
            </p>
            <DialogTitle className="mt-4 max-w-xl font-display text-3xl font-medium leading-tight tracking-[-0.03em] text-ink sm:text-4xl">
              Find where search is losing qualified demand.
            </DialogTitle>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate">
              Share your site, market, commercial goal, and implementation
              constraints. We will review fit and recommend the appropriate
              assessment, project, or ongoing engagement.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-ink sm:grid-cols-2">
              {[
                "Google, Bing, and AI-search visibility",
                "Technical, content, entity, and authority gaps",
                "Implementation and measurement requirements",
                "Ongoing engagements from $3,500/month",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/contact?cta_source=engagement_popup&popup_trigger=${trigger}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                data-analytics-event="popup_cta_click"
                data-analytics-placement="engagement_popup"
                data-analytics-label="Request a scoped SEO review"
                data-analytics-variant="qualified_review_v1"
                data-analytics-trigger={trigger}
              >
                Request a scoped SEO review
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-border-emphasis px-6 py-3 font-heading text-sm font-bold text-ink transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                data-analytics-placement="engagement_popup"
                data-analytics-label="Review verified evidence"
              >
                Review verified evidence
              </Link>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

function isPopupSuppressedPath(pathname: string) {
  return popupSuppressedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

function isPopupFrequencyBlocked() {
  if (typeof window === "undefined") return true;
  if (sessionStorage.getItem(POPUP_SEEN_KEY)) return true;

  const dismissedUntil = Number(
    localStorage.getItem(POPUP_DISMISSED_UNTIL_KEY) || "0",
  );
  const leadSubmittedUntil = Number(
    localStorage.getItem(LEAD_SUBMITTED_UNTIL_KEY) || "0",
  );

  return dismissedUntil > Date.now() || leadSubmittedUntil > Date.now();
}

function isLeadFormVisible() {
  return [...document.querySelectorAll("form[data-lead-form]")].some(
    (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    },
  );
}

function isContactDestination(link: HTMLAnchorElement) {
  try {
    return new URL(link.href).pathname === "/contact";
  } catch {
    return false;
  }
}

function inferPlacement(link: HTMLAnchorElement) {
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  if (link.closest("article")) return "article";
  if (link.closest("main")) return "main_content";
  return "unknown";
}
