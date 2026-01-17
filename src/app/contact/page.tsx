import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import UnicornBackground from '@/components/unicorn-background'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Field, Input, Label, Select, Textarea } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { 
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
      <form action="#" method="POST" className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field className="space-y-3">
            <Label className="text-sm/5 font-medium">First Name *</Label>
            <Input
              required
              type="text"
              name="firstName"
              className={clsx(
                'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
                'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
                'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-blue-600',
              )}
            />
          </Field>
          
          <Field className="space-y-3">
            <Label className="text-sm/5 font-medium">Last Name *</Label>
            <Input
              required
              type="text"
              name="lastName"
              className={clsx(
                'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
                'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
                'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-blue-600',
              )}
            />
          </Field>
        </div>
        
        <Field className="mt-6 space-y-3">
          <Label className="text-sm/5 font-medium">Email Address *</Label>
          <Input
            required
            type="email"
            name="email"
            className={clsx(
              'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
              'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
              'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-blue-600',
            )}
          />
        </Field>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field className="space-y-3">
            <Label className="text-sm/5 font-medium">Company</Label>
            <Input
              type="text"
              name="company"
              className={clsx(
                'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
                'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
                'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-blue-600',
              )}
            />
          </Field>
          
          <Field className="space-y-3">
            <Label className="text-sm/5 font-medium">Phone Number</Label>
            <Input
              type="tel"
              name="phone"
              className={clsx(
                'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
                'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
                'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-blue-600',
              )}
            />
          </Field>
        </div>
        
        <Field className="mt-6 space-y-3">
          <Label className="text-sm/5 font-medium">Website URL</Label>
          <Input
            type="url"
            name="website"
            placeholder="https://yourwebsite.com"
            className={clsx(
              'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
              'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
              'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-blue-600',
            )}
          />
        </Field>
        
        <Field className="mt-6 space-y-3">
          <Label className="text-sm/5 font-medium">SEO Service Interest</Label>
          <div className="relative">
            <Select
              name="service"
              className={clsx(
                'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
                'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
                'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-blue-600',
                'appearance-none bg-white pr-8'
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
              className="pointer-events-none absolute right-2.5 top-2.5 size-4 fill-black/60"
              aria-hidden="true"
            />
          </div>
        </Field>
        
        <Field className="mt-6 space-y-3">
          <Label className="text-sm/5 font-medium">Project Details</Label>
          <Textarea
            name="message"
            rows={4}
            placeholder="Tell us about your SEO goals, current challenges, or any specific questions you have..."
            className={clsx(
              'block w-full rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
              'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
              'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-blue-600',
              'resize-none'
            )}
          />
        </Field>
        
        <div className="mt-8">
          <Button type="submit" className="w-full">
            Get Your Free SEO Audit
          </Button>
          <p className="mt-4 text-sm text-gray-500 text-center">
            We&apos;ll analyze your website and send you a detailed SEO report within 24 hours.
          </p>
        </div>
      </form>
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 text-center">
        <div className="mx-auto size-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          <EnvelopeIcon className="size-6 text-gray-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Email Us</h3>
        <p className="text-gray-600 mb-4">Get in touch via email</p>
        <a href="mailto:hello@theprojectseo.com" className="text-gray-950 font-medium hover:text-gray-950/75">
          hello@theprojectseo.com
        </a>
      </div>
      
      <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 text-center">
        <div className="mx-auto size-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          <PhoneIcon className="size-6 text-gray-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Call Us</h3>
        <p className="text-gray-600 mb-4">Speak with an SEO expert</p>
        <a href="tel:+1-555-SEO-RANK" className="text-gray-950 font-medium hover:text-gray-950/75">
          +1 (555) SEO-RANK
        </a>
      </div>
      
      <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 text-center">
        <div className="mx-auto size-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
          <MapPinIcon className="size-6 text-gray-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
        <p className="text-gray-600 mb-4">Remote-first company</p>
        <p className="text-gray-950 font-medium">
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
            <h3 className="text-lg font-semibold mb-3">How long does the free SEO audit take?</h3>
            <p className="text-gray-600">
              We typically complete and deliver your comprehensive SEO audit within 24-48 hours 
              of receiving your website information. The audit includes technical analysis, 
              keyword opportunities, and actionable recommendations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">What's included in the free audit?</h3>
            <p className="text-gray-600">
              Your free audit includes a technical SEO assessment, keyword gap analysis, 
              competitor benchmarking, Core Web Vitals review, and a priority action plan 
              with specific recommendations to improve your rankings.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Do you work with businesses of all sizes?</h3>
            <p className="text-gray-600">
              Yes! We work with startups, small businesses, and enterprise companies. 
              Our SEO strategies are customized based on your business size, industry, 
              and specific goals.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">How quickly will I see SEO results?</h3>
            <p className="text-gray-600">
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
      <UnicornBackground />
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