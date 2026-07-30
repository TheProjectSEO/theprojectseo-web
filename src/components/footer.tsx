"use client";

import { useEffect, useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "./link";
import { Logo } from "./logo";
import { trackConversionEvent } from "@/lib/conversion-analytics";
import { openTrackingPreferences } from "@/lib/tracking-consent";
import { BRAND_DESCRIPTION } from "@/lib/brand";

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  );
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  );
}

export function Footer() {
  const conversionBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const block = conversionBlockRef.current;
    if (!block) return;

    let tracked = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !tracked) {
          tracked = true;
          trackConversionEvent("cta_impression", {
            placement: "footer_cta",
            label: "Request Your SEO Review",
            variant: "footer_conversion_block_v1",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(block);
    return () => observer.disconnect();
  }, []);

  return (
    <footer data-site-footer className="border-t-4 border-signal bg-ink">
      <div className="mx-auto max-w-[1380px] px-6 lg:px-10">
        <div
          ref={conversionBlockRef}
          className="grid gap-8 border-b border-white/[0.1] py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-signal">
              Turn search visibility into pipeline
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">
              Tell us where search is failing to create qualified demand.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
              Share your site and growth target. We&apos;ll review how buyers
              find you across Google and AI search, then recommend the clearest
              next move.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="/contact?cta_source=footer_cta"
              data-analytics-placement="footer_cta"
              data-analytics-label="Request Your SEO Review"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Request your SEO review
              <ArrowRightIcon className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/pricing"
              data-analytics-placement="footer_cta"
              data-analytics-label="Review SEO Pricing"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3.5 font-heading text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.06]"
            >
              Review pricing
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="footer-grid grid grid-cols-2 gap-8 py-16 lg:gap-8 lg:py-24">
          {/* Brand + Social */}
          <div className="col-span-2 lg:col-span-1">
            <Logo variant="reversed" className="mb-4" />
            <p className="max-w-sm text-sm leading-relaxed text-white/50 mb-6">
              {BRAND_DESCRIPTION}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com/theprojectseo"
                target="_blank"
                aria-label="Visit us on Facebook"
                className="text-white/40 transition-colors hover:text-white/70"
              >
                <SocialIconFacebook className="size-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/theprojectseo"
                target="_blank"
                aria-label="Visit us on LinkedIn"
                className="text-white/40 transition-colors hover:text-white/70"
              >
                <SocialIconLinkedIn className="size-4" />
              </Link>
            </div>
          </div>

          {/* SEO Solutions */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              SEO Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/ai-search"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  AI Search Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo-automation"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  SEO Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  SEO Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  SEO Content
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  All SEO Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* SEO Services */}
          <div className="hidden lg:block">
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              SEO Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/seo-consulting"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  SEO Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/local-seo"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Local SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/technical-seo"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Technical SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/enterprise-seo"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Enterprise SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/international-seo"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  International SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/on-page-seo"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  On-Page SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/off-page-seo"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Off-Page SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/link-building"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Link Building
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo-audit"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  SEO Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Who We Serve (industries), keyword-optimized anchors */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              Who We Serve
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/industries/saas"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  SaaS SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/startups"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Startup SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/ecommerce"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Ecommerce SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/finance"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Finance SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/healthcare"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Healthcare SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/legal"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Legal & Law Firm SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/technology"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Technology SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/ai"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  AI & Machine Learning SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Where We Are (locations), keyword-optimized anchors */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              Where We Are
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/locations/india"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  India SEO Agency
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/philippines"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Philippines SEO Agency
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/company"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/methodology"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/50 transition-colors hover:text-white/70"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              Ready to grow?
            </h3>
            <p className="text-sm text-white/50 mb-4">
              Start with a practical review of your current search visibility,
              competitors, and lead opportunity.
            </p>
            <Link
              href="/contact?cta_source=footer_contact_link"
              data-analytics-placement="footer_contact"
              data-analytics-label="Share Your Project"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-signal"
            >
              Share your project
              <ArrowRightIcon className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} TheProjectSEO Digital (OPC)
            Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-white/30 mt-1">
            CIN: U73100JH2025OPC026020
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={openTrackingPreferences}
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
