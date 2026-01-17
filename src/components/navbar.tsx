'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/react'
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'

const serviceLinks = [
  { href: '/services/aeo', label: 'AEO Services' },
  { href: '/services/seo', label: 'SEO Services' },
  { href: '/services/content', label: 'Content Services' },
  { href: '/services/web', label: 'Web Services' },
]

const industryLinks = [
  { href: '/industries/ai', label: 'AI & Machine Learning' },
  { href: '/industries/ecommerce', label: 'E-commerce' },
  { href: '/industries/healthcare', label: 'Healthcare' },
  { href: '/industries/finance', label: 'Finance' },
  { href: '/industries/realestate', label: 'Real Estate' },
  { href: '/industries/cannabis', label: 'Cannabis' },
  { href: '/industries/cybersecurity', label: 'Cybersecurity' },
  { href: '/industries/fashion', label: 'Fashion' },
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
  { href: '/contact', label: 'Contact' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {/* Services Dropdown */}
      <Menu as="div" className="relative">
        <MenuButton className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5">
          Services
          <ChevronDownIcon className="ml-1 h-4 w-4" />
        </MenuButton>
        <MenuItems className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
          <div className="py-1">
            {serviceLinks.map(({ href, label }) => (
              <MenuItem key={href} as="div">
                <Link
                  href={href}
                  className="block px-4 py-2 text-sm text-gray-700 data-hover:bg-gray-50"
                >
                  {label}
                </Link>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>

      {/* Industries Dropdown */}
      <Menu as="div" className="relative">
        <MenuButton className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5">
          Industries
          <ChevronDownIcon className="ml-1 h-4 w-4" />
        </MenuButton>
        <MenuItems className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
          <div className="py-1">
            {industryLinks.map(({ href, label }) => (
              <MenuItem key={href} as="div">
                <Link
                  href={href}
                  className="block px-4 py-2 text-sm text-gray-700 data-hover:bg-gray-50"
                >
                  {label}
                </Link>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>

      {/* Locations Dropdown */}
      <Menu as="div" className="relative">
        <MenuButton className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5">
          Locations
          <ChevronDownIcon className="ml-1 h-4 w-4" />
        </MenuButton>
        <MenuItems className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
          <div className="py-1">
            {locationLinks.map(({ href, label }) => (
              <MenuItem key={href} as="div">
                <Link
                  href={href}
                  className="block px-4 py-2 text-sm text-gray-700 data-hover:bg-gray-50"
                >
                  {label}
                </Link>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>

      {/* Regular Links */}
      {links.map(({ href, label }) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
          >
            {label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  const allLinks = [
    // Services
    { href: '/services/aeo', label: 'AEO Services' },
    { href: '/services/seo', label: 'SEO Services' },
    { href: '/services/content', label: 'Content Services' },
    { href: '/services/web', label: 'Web Services' },
    // Industries
    { href: '/industries/ai', label: 'AI & Machine Learning' },
    { href: '/industries/ecommerce', label: 'E-commerce' },
    { href: '/industries/healthcare', label: 'Healthcare' },
    { href: '/industries/finance', label: 'Finance' },
    // Locations
    { href: '/locations/usa', label: 'United States' },
    { href: '/locations/philippines', label: 'Philippines' },
    // Regular pages
    ...links
  ]

  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {allLinks.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="relative flex justify-between">
            <div className="relative flex gap-6">
              <div className="py-3">
                <Link href="/" title="Home">
                  <Logo className="h-9" />
                </Link>
              </div>
              {banner && (
                <div className="relative hidden items-center py-3 lg:flex">
                  {banner}
                </div>
              )}
            </div>
            <DesktopNav />
            <MobileNavButton />
          </div>
        </div>
      </div>
      <MobileNav />
    </Disclosure>
  )
}