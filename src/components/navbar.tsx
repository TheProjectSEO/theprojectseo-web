'use client'

import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link } from './link'
import { Logo } from './logo'

const serviceLinks = [
  { href: '/services/aeo', label: 'AEO Services', desc: 'Answer Engine Optimization' },
  { href: '/services/seo', label: 'SEO Services', desc: 'Search Engine Optimization' },
  { href: '/services/content', label: 'Content Services', desc: 'Strategic content creation' },
  { href: '/services/web', label: 'Web Services', desc: 'Web design & development' },
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
        <div className="invisible absolute left-0 mt-2 w-64 origin-top-left border border-border-strong rounded-lg bg-white shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 z-50">
          <div className="p-2">
            {serviceLinks.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col gap-0.5 rounded-md px-3 py-2.5 transition-colors hover:bg-cream"
              >
                <span className="text-sm font-medium text-ink">{label}</span>
                {desc && <span className="text-xs text-ash">{desc}</span>}
              </Link>
            ))}
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
  return (
    <header className="sticky top-0 z-50 h-[72px] bg-paper/85 backdrop-blur-[20px] border-b border-border">
      {/* Mobile Menu Toggle - CSS Only */}
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="peer sr-only"
      />

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

        <label
          htmlFor="mobile-menu-toggle"
          className="flex size-10 items-center justify-center rounded-md transition-colors hover:bg-cream lg:hidden cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          <svg className="size-5 text-ink peer-checked:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16" />
          </svg>
          <svg className="hidden size-5 text-ink peer-checked:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      {/* Mobile Menu Backdrop */}
      <div className="fixed inset-0 z-[90] bg-ink/20 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-opacity duration-300 lg:hidden" />

      {/* Mobile Menu Panel - CSS Only */}
      <div className="fixed inset-0 z-[100] bg-white translate-x-full peer-checked:translate-x-0 transition-transform duration-300 lg:hidden">
        <div className="flex h-[72px] items-center justify-between px-6 border-b border-border">
          <Logo />
          <label
            htmlFor="mobile-menu-toggle"
            className="flex size-10 items-center justify-center rounded-md hover:bg-cream cursor-pointer"
            aria-label="Close mobile menu"
          >
            <svg className="size-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        <div className="overflow-y-auto px-6 py-4" style={{ maxHeight: 'calc(100vh - 72px)' }}>
          {/* Services Accordion */}
          <details className="border-b border-border">
            <summary className="flex w-full items-center justify-between py-4 font-sans text-base font-medium text-ink cursor-pointer list-none">
              Services
              <ChevronDownIcon className="h-4 w-4 text-ash transition-transform" />
            </summary>
            <div className="pb-4 pl-4 space-y-3">
              {serviceLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm text-slate hover:text-ink"
                >
                  {label}
                </Link>
              ))}
            </div>
          </details>

          {/* Industries Accordion */}
          <details className="border-b border-border">
            <summary className="flex w-full items-center justify-between py-4 font-sans text-base font-medium text-ink cursor-pointer list-none">
              Industries
              <ChevronDownIcon className="h-4 w-4 text-ash transition-transform" />
            </summary>
            <div className="pb-4 pl-4 space-y-3">
              {industryLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm text-slate hover:text-ink"
                >
                  {label}
                </Link>
              ))}
            </div>
          </details>

          {/* Locations Accordion */}
          <details className="border-b border-border">
            <summary className="flex w-full items-center justify-between py-4 font-sans text-base font-medium text-ink cursor-pointer list-none">
              Locations
              <ChevronDownIcon className="h-4 w-4 text-ash transition-transform" />
            </summary>
            <div className="pb-4 pl-4 space-y-3">
              {locationLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
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
              className="block border-b border-border py-4 font-sans text-base font-medium text-ink"
            >
              {label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="block w-full rounded-md bg-accent px-5 py-3 text-center font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Rotate chevron when details is open */
        details[open] summary svg {
          transform: rotate(180deg);
        }

        /* Hide the label's X icon by default, show when checked */
        #mobile-menu-toggle:checked ~ div label svg:first-child {
          display: none;
        }
        #mobile-menu-toggle:checked ~ div label svg:last-child {
          display: block;
        }

        /* Show mobile menu when checkbox is checked */
        #mobile-menu-toggle:checked ~ div {
          transform: translateX(0);
        }
      `}</style>
    </header>
  )
}
