import { JsonLd } from '@/components/json-ld'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import {
  CheckCircleIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
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
      <LeadForm variant="full" submitText="Get Your Free SEO Audit" />
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
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQSection />
      <Footer />
    </main>
  )
}
