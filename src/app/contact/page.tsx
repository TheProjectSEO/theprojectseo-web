import { Button } from '@/components/button'
import { JsonLd } from '@/components/json-ld'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Field, Input, Label, Select, Textarea } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import {
  CheckCircleIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact TheProjectSEO | Get Your Free SEO Audit',
  description:
    'Ready to dominate search rankings? Contact TheProjectSEO for a free SEO audit and consultation. Get started with proven SEO strategies today.',
  alternates: {
    canonical: '/contact',
  },
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Ready to dominate search rankings?</Heading>
      <Lead className="mt-6 max-w-3xl">
        Get your free SEO audit and discover exactly what it takes to rank #1 on Google.
        Our SEO experts are ready to help you drive more organic traffic and revenue.
      </Lead>
    </Container>
  )
}

function ContactForm() {
  return (
    <div className="mx-auto max-w-2xl">
      <form action="#" method="POST" className="rounded-lg bg-paper p-8 shadow-lg border border-border-strong">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field className="space-y-3">
            <Label className="font-sans text-sm/5 font-medium text-ink">First Name *</Label>
            <Input
              required
              type="text"
              name="firstName"
              className={clsx(
                'block w-full rounded-md border border-border-emphasis bg-paper shadow-sm',
                'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
                'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-accent',
              )}
            />
          </Field>

          <Field className="space-y-3">
            <Label className="font-sans text-sm/5 font-medium text-ink">Last Name *</Label>
            <Input
              required
              type="text"
              name="lastName"
              className={clsx(
                'block w-full rounded-md border border-border-emphasis bg-paper shadow-sm',
                'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
                'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-accent',
              )}
            />
          </Field>
        </div>

        <Field className="mt-6 space-y-3">
          <Label className="font-sans text-sm/5 font-medium text-ink">Email Address *</Label>
          <Input
            required
            type="email"
            name="email"
            className={clsx(
              'block w-full rounded-md border border-border-emphasis bg-paper shadow-sm',
              'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
              'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-accent',
            )}
          />
        </Field>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field className="space-y-3">
            <Label className="font-sans text-sm/5 font-medium text-ink">Company</Label>
            <Input
              type="text"
              name="company"
              className={clsx(
                'block w-full rounded-md border border-border-emphasis bg-paper shadow-sm',
                'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
                'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-accent',
              )}
            />
          </Field>

          <Field className="space-y-3">
            <Label className="font-sans text-sm/5 font-medium text-ink">Phone Number</Label>
            <Input
              type="tel"
              name="phone"
              className={clsx(
                'block w-full rounded-md border border-border-emphasis bg-paper shadow-sm',
                'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
                'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-accent',
              )}
            />
          </Field>
        </div>

        <Field className="mt-6 space-y-3">
          <Label className="font-sans text-sm/5 font-medium text-ink">Website URL</Label>
          <Input
            type="url"
            name="website"
            placeholder="https://yourwebsite.com"
            className={clsx(
              'block w-full rounded-md border border-border-emphasis bg-paper shadow-sm',
              'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
              'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-accent',
            )}
          />
        </Field>

        <Field className="mt-6 space-y-3">
          <Label className="font-sans text-sm/5 font-medium text-ink">SEO Service Interest</Label>
          <div className="relative">
            <Select
              name="service"
              className={clsx(
                'block w-full rounded-md border border-border-emphasis bg-paper shadow-sm',
                'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
                'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-accent',
                'appearance-none pr-8'
              )}
            >
              <option value="">Select a service</option>
              <option value="seo-audit">SEO Audit & Analysis</option>
              <option value="keyword-research">Keyword Research & Strategy</option>
              <option value="technical-seo">Technical SEO Optimization</option>
              <option value="content-optimization">Content Optimization</option>
              <option value="local-seo">Local SEO</option>
              <option value="full-service">Complete SEO Management</option>
              <option value="other">Other / Not Sure</option>
            </Select>
            <ChevronDownIcon
              className="pointer-events-none absolute right-2.5 top-2.5 size-4 fill-ash"
              aria-hidden="true"
            />
          </div>
        </Field>

        <Field className="mt-6 space-y-3">
          <Label className="font-sans text-sm/5 font-medium text-ink">Project Details</Label>
          <Textarea
            name="message"
            rows={4}
            placeholder="Tell us about your SEO goals, current challenges, or any specific questions you have..."
            className={clsx(
              'block w-full rounded-md border border-border-emphasis bg-paper shadow-sm',
              'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
              'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-accent',
              'resize-none'
            )}
          />
        </Field>

        <div className="mt-8">
          <Button type="submit" className="w-full">
            Get Your Free SEO Audit
          </Button>
          <p className="mt-4 font-sans text-sm text-ash text-center">
            We&apos;ll analyze your website and send you a detailed SEO report within 24 hours.
          </p>
        </div>
      </form>

      {/* Social proof */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <div className="flex items-center gap-2 text-xs text-ash">
          <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>Response in <span className="font-semibold text-ink">under 2 hours</span></span>
        </div>
        <div className="flex items-center gap-2 text-xs text-ash">
          <CheckCircleIcon className="size-3.5 text-accent flex-shrink-0" />
          <span>Rated <span className="font-semibold text-ink">4.9/5</span> by 500+ clients</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-ash">
          <CheckCircleIcon className="size-3.5 text-accent flex-shrink-0" />
          <span>No commitment required</span>
        </div>
      </div>
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="rounded-none bg-paper p-8 shadow-lg border border-border-strong text-center">
        <div className="mx-auto size-12 rounded-none bg-cream flex items-center justify-center mb-6">
          <EnvelopeIcon className="size-6 text-ash" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-ink mb-2">Email Us</h3>
        <p className="font-sans text-ash mb-4">Get in touch via email</p>
        <a href="mailto:hello@theprojectseo.com" className="font-sans text-ink font-medium hover:text-ink/75">
          hello@theprojectseo.com
        </a>
      </div>

      <div className="rounded-none bg-paper p-8 shadow-lg border border-border-strong text-center">
        <div className="mx-auto size-12 rounded-none bg-cream flex items-center justify-center mb-6">
          <PhoneIcon className="size-6 text-ash" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-ink mb-2">Call Us</h3>
        <p className="font-sans text-ash mb-4">Speak with an SEO expert</p>
        <a href="tel:+1-555-SEO-RANK" className="font-sans text-ink font-medium hover:text-ink/75">
          +1 (555) SEO-RANK
        </a>
      </div>

      <div className="rounded-none bg-paper p-8 shadow-lg border border-border-strong text-center">
        <div className="mx-auto size-12 rounded-none bg-cream flex items-center justify-center mb-6">
          <MapPinIcon className="size-6 text-ash" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-ink mb-2">Visit Us</h3>
        <p className="font-sans text-ash mb-4">Remote-first company</p>
        <p className="font-sans text-ink font-medium">
          Serving clients worldwide
        </p>
      </div>
    </div>
  )
}

function FAQSection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl">
        <Subheading className="text-center">Frequently Asked Questions</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Common questions about our SEO services.
        </Heading>

        <div className="mt-16 space-y-8">
          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-3">How long does the free SEO audit take?</h3>
            <p className="font-sans text-slate">
              We typically complete and deliver your comprehensive SEO audit within 24-48 hours
              of receiving your website information. The audit includes technical analysis,
              keyword opportunities, and actionable recommendations.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-3">What&apos;s included in the free audit?</h3>
            <p className="font-sans text-slate">
              Your free audit includes a technical SEO assessment, keyword gap analysis,
              competitor benchmarking, Core Web Vitals review, and a priority action plan
              with specific recommendations to improve your rankings.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-3">Do you work with businesses of all sizes?</h3>
            <p className="font-sans text-slate">
              Yes! We work with startups, small businesses, and enterprise companies.
              Our SEO strategies are customized based on your business size, industry,
              and specific goals.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-3">How quickly will I see SEO results?</h3>
            <p className="font-sans text-slate">
              Most clients start seeing improvements in 30-60 days, with significant
              ranking improvements typically occurring within 3-6 months. SEO is a
              long-term investment that builds momentum over time.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact TheProjectSEO',
          description: 'Get your free SEO audit...',
          url: 'https://theprojectseo.com/contact',
        }}
      />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Container className="pb-24">
        <ContactForm />
        <div className="mt-24">
          <ContactInfo />
        </div>
      </Container>
      <FAQSection />
      <Footer />
    </main>
  )
}
