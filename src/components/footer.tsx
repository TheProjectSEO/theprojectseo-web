'use client'

import { Link } from './link'
import { Logo } from './logo'

function SocialIconX(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-8 py-16 lg:grid-cols-6 lg:gap-10 lg:py-20">
          {/* Brand + Social */}
          <div className="col-span-2 lg:col-span-1">
            <Logo variant="reversed" className="mb-4" />
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              Data-driven SEO strategies that deliver measurable growth.
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
                href="https://x.com/theprojectseo"
                target="_blank"
                aria-label="Visit us on X"
                className="text-white/40 transition-colors hover:text-white/70"
              >
                <SocialIconX className="size-4" />
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

          {/* Development */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              Development
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services/web-app-development" className="text-sm text-white/50 transition-colors hover:text-white/70">Web Development</Link></li>
              <li><Link href="/services/ai-development" className="text-sm text-white/50 transition-colors hover:text-white/70">AI Development</Link></li>
              <li><Link href="/services/mvp-development" className="text-sm text-white/50 transition-colors hover:text-white/70">MVP Development</Link></li>
              <li><Link href="/services/n8n-automation" className="text-sm text-white/50 transition-colors hover:text-white/70">N8n Automation</Link></li>
              <li><Link href="/services" className="text-sm text-white/50 transition-colors hover:text-white/70">All Services →</Link></li>
            </ul>
          </div>

          {/* SEO Services */}
          <div className="hidden lg:block">
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              SEO Services
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services/seo-consulting" className="text-sm text-white/50 transition-colors hover:text-white/70">SEO Consulting</Link></li>
              <li><Link href="/services/local-seo" className="text-sm text-white/50 transition-colors hover:text-white/70">Local SEO</Link></li>
              <li><Link href="/services/technical-seo" className="text-sm text-white/50 transition-colors hover:text-white/70">Technical SEO</Link></li>
              <li><Link href="/services/enterprise-seo" className="text-sm text-white/50 transition-colors hover:text-white/70">Enterprise SEO</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              Industries
            </h3>
            <ul className="space-y-3">
              <li><Link href="/industries/ai" className="text-sm text-white/50 transition-colors hover:text-white/70">AI & Machine Learning</Link></li>
              <li><Link href="/industries/ecommerce" className="text-sm text-white/50 transition-colors hover:text-white/70">E-commerce</Link></li>
              <li><Link href="/industries/healthcare" className="text-sm text-white/50 transition-colors hover:text-white/70">Healthcare</Link></li>
              <li><Link href="/industries/finance" className="text-sm text-white/50 transition-colors hover:text-white/70">Finance</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              Locations
            </h3>
            <ul className="space-y-3">
              <li><Link href="/locations/usa" className="text-sm text-white/50 transition-colors hover:text-white/70">United States</Link></li>
              <li><Link href="/locations/philippines" className="text-sm text-white/50 transition-colors hover:text-white/70">Philippines</Link></li>
              <li><Link href="/locations/hongkong" className="text-sm text-white/50 transition-colors hover:text-white/70">Hong Kong</Link></li>
              <li><Link href="/locations/singapore" className="text-sm text-white/50 transition-colors hover:text-white/70">Singapore</Link></li>
              <li><Link href="/locations/australia" className="text-sm text-white/50 transition-colors hover:text-white/70">Australia</Link></li>
              <li><Link href="/locations/germany" className="text-sm text-white/50 transition-colors hover:text-white/70">Germany</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link href="/company" className="text-sm text-white/50 transition-colors hover:text-white/70">About</Link></li>
              <li><Link href="/case-studies" className="text-sm text-white/50 transition-colors hover:text-white/70">Case Studies</Link></li>
              <li><Link href="/methodology" className="text-sm text-white/50 transition-colors hover:text-white/70">Our Process</Link></li>
              <li><Link href="/blog" className="text-sm text-white/50 transition-colors hover:text-white/70">Blog</Link></li>
              <li><Link href="/pricing" className="text-sm text-white/50 transition-colors hover:text-white/70">Pricing</Link></li>
              <li><Link href="/contact" className="text-sm text-white/50 transition-colors hover:text-white/70">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
              Newsletter
            </h3>
            <p className="text-sm text-white/50 mb-4">
              Get SEO insights delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-md bg-accent px-3 py-2 text-white transition-colors hover:bg-accent-hover"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} TheProjectSEO Digital (OPC) Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-white/30 mt-1">
            CIN: U73100JH2025OPC026020
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/40 transition-colors hover:text-white/60">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/40 transition-colors hover:text-white/60">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
