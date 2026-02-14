'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link } from './link'
import { Logo } from './logo'

// Development Services
const developmentServices = [
  { href: '/services/web-app-development', label: 'Web Application Development', desc: 'Custom web apps & PWAs' },
  { href: '/services/ai-development', label: 'AI Development', desc: 'LLM apps & ML models' },
  { href: '/services/mvp-development', label: 'MVP Development', desc: 'Rapid product validation' },
  { href: '/services/ecommerce-development', label: 'E-commerce Development', desc: 'Custom online stores' },
  { href: '/services/n8n-automation', label: 'N8n Automation', desc: 'Workflow automation' },
]

// Core SEO Services
const seoServices = [
  { href: '/services/seo-consulting', label: 'SEO Consulting', desc: 'Strategic SEO guidance' },
  { href: '/services/local-seo', label: 'Local SEO', desc: 'Google Business optimization' },
  { href: '/services/link-building', label: 'Link Building', desc: 'White-hat link acquisition' },
  { href: '/services/seo-audit', label: 'SEO Audit', desc: 'Comprehensive site analysis' },
  { href: '/services/technical-seo', label: 'Technical SEO', desc: 'Speed & crawlability' },
  { href: '/services/on-page-seo', label: 'On-Page SEO', desc: 'Content optimization' },
  { href: '/services/off-page-seo', label: 'Off-Page SEO', desc: 'Link building & PR' },
  { href: '/services/ecommerce-seo', label: 'E-commerce SEO', desc: 'Product page optimization' },
  { href: '/services/enterprise-seo', label: 'Enterprise SEO', desc: 'Large-scale SEO solutions' },
  { href: '/services/international-seo', label: 'International SEO', desc: 'Multi-country optimization' },
]

// Automation & AI Services
const automationServices = [
  { href: '/services/seo-automation', label: 'SEO Automation', desc: 'Automated tracking & reporting' },
  { href: '/services/ai-seo-agent', label: 'AI SEO Agent', desc: 'AI-powered optimization' },
  { href: '/services/n8n-automation/marketing-automation', label: 'Marketing Automation', desc: 'Lead gen workflows' },
  { href: '/services/n8n-automation/sales-automation', label: 'Sales Automation', desc: 'Pipeline management' },
  { href: '/services/n8n-automation/crm-automation', label: 'CRM Automation', desc: 'Data sync & updates' },
  { href: '/services/n8n-automation/reporting-automation', label: 'Reporting Automation', desc: 'Automated dashboards' },
  { href: '/services/n8n-automation/data-pipeline-automation', label: 'Data Pipeline Automation', desc: 'ETL workflows' },
  { href: '/services/n8n-automation/customer-service-automation', label: 'Customer Service', desc: 'Ticket routing' },
]

// Specialized Services
const specializedServices = [
  { href: '/services/data-visualization', label: 'Data Visualization', desc: 'Custom dashboards & BI' },
  { href: '/services/data-engineering', label: 'Data Engineering', desc: 'ETL & data pipelines' },
  { href: '/services/aeo', label: 'AEO Services', desc: 'Answer Engine Optimization' },
  { href: '/services/content', label: 'Content Services', desc: 'Strategic content creation' },
  { href: '/services/web', label: 'Web Design', desc: 'Website design & development' },
]

const industryLinks = [
  { href: '/industries/ai', label: 'AI & Machine Learning' },
  { href: '/industries/automotive', label: 'Automotive' },
  { href: '/industries/cannabis', label: 'Cannabis' },
  { href: '/industries/cybersecurity', label: 'Cybersecurity' },
  { href: '/industries/ecommerce', label: 'E-commerce' },
  { href: '/industries/education', label: 'Education' },
  { href: '/industries/fashion', label: 'Fashion' },
  { href: '/industries/finance', label: 'Finance' },
  { href: '/industries/food', label: 'Food & Beverage' },
  { href: '/industries/healthcare', label: 'Healthcare' },
  { href: '/industries/legal', label: 'Legal' },
  { href: '/industries/nonprofit', label: 'Nonprofit' },
  { href: '/industries/realestate', label: 'Real Estate' },
  { href: '/industries/saas', label: 'SaaS' },
  { href: '/industries/technology', label: 'Technology' },
  { href: '/industries/travel', label: 'Travel & Tourism' },
]

const locationLinks = [
  { href: '/locations/usa', label: 'United States' },
  { href: '/locations/philippines', label: 'Philippines' },
  { href: '/locations/hongkong', label: 'Hong Kong' },
  { href: '/locations/singapore', label: 'Singapore' },
  { href: '/locations/australia', label: 'Australia' },
  { href: '/locations/germany', label: 'Germany' },
]

const links = [
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/methodology', label: 'Our Process' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/company', label: 'About' },
  { href: '/blog', label: 'Blog' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden items-center gap-1 lg:flex">
      {/* Services Dropdown */}
      <div className="group relative">
        <button className="flex items-center gap-1 px-3 py-2 font-sans text-sm font-medium text-slate transition-colors hover:text-ink">
          Services
          <ChevronDownIcon className="h-3.5 w-3.5" />
        </button>
        <div className="invisible absolute left-0 mt-2 w-[840px] origin-top-left border border-border-strong rounded-lg bg-white shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 z-50">
          <div className="p-4">
            <div className="grid grid-cols-4 gap-6">
              {/* Development Services */}
              <div>
                <h3 className="mb-3 text-xs font-mono uppercase tracking-wider text-ash">Development</h3>
                <div className="space-y-1">
                  {developmentServices.map(({ href, label, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block rounded-md px-2 py-2 group/item hover:bg-cream"
                    >
                      <div className="text-sm font-medium text-ink group-hover/item:text-accent">{label}</div>
                      <div className="text-xs text-slate mt-0.5">{desc}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* SEO Services */}
              <div>
                <h3 className="mb-3 text-xs font-mono uppercase tracking-wider text-ash">SEO Services</h3>
                <div className="space-y-1">
                  {seoServices.map(({ href, label, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block rounded-md px-2 py-2 group/item hover:bg-cream"
                    >
                      <div className="text-sm font-medium text-ink group-hover/item:text-accent">{label}</div>
                      <div className="text-xs text-slate mt-0.5">{desc}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Automation & AI */}
              <div>
                <h3 className="mb-3 text-xs font-mono uppercase tracking-wider text-ash">Automation & AI</h3>
                <div className="space-y-1">
                  {automationServices.map(({ href, label, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block rounded-md px-2 py-2 group/item hover:bg-cream"
                    >
                      <div className="text-sm font-medium text-ink group-hover/item:text-accent">{label}</div>
                      <div className="text-xs text-slate mt-0.5">{desc}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Specialized Services */}
              <div>
                <h3 className="mb-3 text-xs font-mono uppercase tracking-wider text-ash">Specialized</h3>
                <div className="space-y-1">
                  {specializedServices.map(({ href, label, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block rounded-md px-2 py-2 group/item hover:bg-cream"
                    >
                      <div className="text-sm font-medium text-ink group-hover/item:text-accent">{label}</div>
                      <div className="text-xs text-slate mt-0.5">{desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Dropdown */}
      <div className="group relative">
        <button className="flex items-center gap-1 px-3 py-2 font-sans text-sm font-medium text-slate transition-colors hover:text-ink">
          Industries
          <ChevronDownIcon className="h-3.5 w-3.5" />
        </button>
        <div className="invisible absolute left-0 mt-2 w-[640px] origin-top-left border border-border-strong rounded-lg bg-white shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 z-50">
          <div className="p-3">
            <div className="grid grid-cols-3 gap-x-4">
              {industryLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-md px-3 py-2 text-sm text-slate transition-colors hover:bg-cream hover:text-ink"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Locations Dropdown */}
      <div className="group relative">
        <button className="flex items-center gap-1 px-3 py-2 font-sans text-sm font-medium text-slate transition-colors hover:text-ink">
          Locations
          <ChevronDownIcon className="h-3.5 w-3.5" />
        </button>
        <div className="invisible absolute left-0 mt-2 w-56 origin-top-left border border-border-strong rounded-lg bg-white shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 z-50">
          <div className="p-2">
            {locationLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block rounded-md px-3 py-2 text-sm text-slate transition-colors hover:bg-cream hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Regular Links */}
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="px-3 py-2 font-sans text-sm font-medium text-slate transition-colors hover:text-ink"
        >
          {label}
        </Link>
      ))}

      {/* CTA Button */}
      <Link
        href="/contact"
        className="ml-4 inline-flex items-center rounded-md bg-accent px-4 py-2 font-heading text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md hover:-translate-y-px"
      >
        Free SEO Audit
      </Link>
    </nav>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header className="sticky top-0 z-50 h-[72px] bg-paper/85 backdrop-blur-[20px] border-b border-border">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-6">
            <Link href="/" title="Home">
              <Logo />
            </Link>
            {banner && (
              <div className="hidden items-center lg:flex">
                {banner}
              </div>
            )}
          </div>

          <DesktopNav />

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex size-10 items-center justify-center rounded-md transition-colors hover:bg-cream lg:hidden"
            aria-label="Open mobile menu"
          >
            <svg className="size-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop - outside header to avoid backdrop-filter containing block */}
      <div
        className={`fixed inset-0 z-[90] bg-ink/20 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel - outside header to avoid backdrop-filter containing block */}
      <div
        className={`fixed inset-0 z-[100] transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="flex h-[72px] items-center justify-between px-6 border-b border-border">
          <Logo />
          <button
            onClick={closeMenu}
            className="flex size-10 items-center justify-center rounded-md hover:bg-cream"
            aria-label="Close mobile menu"
          >
            <svg className="size-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(100vh - 72px)', backgroundColor: '#ffffff' }}>
          {/* Services Accordion */}
          <details className="group border-b border-border">
            <summary className="flex w-full items-center justify-between py-4 font-sans text-base font-medium text-ink cursor-pointer list-none">
              Services
              <ChevronDownIcon className="h-4 w-4 text-ash transition-transform group-open:rotate-180" />
            </summary>
            <div className="pb-4 pl-4 space-y-4">
              {/* Development Services */}
              <details className="group/sub">
                <summary className="text-sm font-medium text-ink py-2 cursor-pointer list-none flex items-center justify-between">
                  Development Services
                  <ChevronDownIcon className="h-3.5 w-3.5 text-ash transition-transform group-open/sub:rotate-180" />
                </summary>
                <div className="pl-4 space-y-2 mt-2">
                  {developmentServices.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={closeMenu} className="block text-sm text-slate hover:text-ink py-1">
                      {label}
                    </Link>
                  ))}
                </div>
              </details>

              {/* SEO Services */}
              <details className="group/sub">
                <summary className="text-sm font-medium text-ink py-2 cursor-pointer list-none flex items-center justify-between">
                  SEO Services
                  <ChevronDownIcon className="h-3.5 w-3.5 text-ash transition-transform group-open/sub:rotate-180" />
                </summary>
                <div className="pl-4 space-y-2 mt-2">
                  {seoServices.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={closeMenu} className="block text-sm text-slate hover:text-ink py-1">
                      {label}
                    </Link>
                  ))}
                </div>
              </details>

              {/* Automation & AI */}
              <details className="group/sub">
                <summary className="text-sm font-medium text-ink py-2 cursor-pointer list-none flex items-center justify-between">
                  Automation & AI
                  <ChevronDownIcon className="h-3.5 w-3.5 text-ash transition-transform group-open/sub:rotate-180" />
                </summary>
                <div className="pl-4 space-y-2 mt-2">
                  {automationServices.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={closeMenu} className="block text-sm text-slate hover:text-ink py-1">
                      {label}
                    </Link>
                  ))}
                </div>
              </details>

              {/* Specialized Services */}
              <details className="group/sub">
                <summary className="text-sm font-medium text-ink py-2 cursor-pointer list-none flex items-center justify-between">
                  Specialized Services
                  <ChevronDownIcon className="h-3.5 w-3.5 text-ash transition-transform group-open/sub:rotate-180" />
                </summary>
                <div className="pl-4 space-y-2 mt-2">
                  {specializedServices.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={closeMenu} className="block text-sm text-slate hover:text-ink py-1">
                      {label}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </details>

          {/* Industries Accordion */}
          <details className="group border-b border-border">
            <summary className="flex w-full items-center justify-between py-4 font-sans text-base font-medium text-ink cursor-pointer list-none">
              Industries
              <ChevronDownIcon className="h-4 w-4 text-ash transition-transform group-open:rotate-180" />
            </summary>
            <div className="pb-4 pl-4 space-y-3">
              {industryLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="block text-sm text-slate hover:text-ink"
                >
                  {label}
                </Link>
              ))}
            </div>
          </details>

          {/* Locations Accordion */}
          <details className="group border-b border-border">
            <summary className="flex w-full items-center justify-between py-4 font-sans text-base font-medium text-ink cursor-pointer list-none">
              Locations
              <ChevronDownIcon className="h-4 w-4 text-ash transition-transform group-open:rotate-180" />
            </summary>
            <div className="pb-4 pl-4 space-y-3">
              {locationLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="block text-sm text-slate hover:text-ink"
                >
                  {label}
                </Link>
              ))}
            </div>
          </details>

          {/* Regular Links */}
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="block border-b border-border py-4 font-sans text-base font-medium text-ink"
            >
              {label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="mt-6">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full rounded-md bg-accent px-5 py-3 text-center font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
