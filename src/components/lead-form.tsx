'use client'

import { useActionState, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { submitLead, type LeadFormState } from '@/app/actions/submit-lead'
import { Button } from '@/components/button'
import { Field, Input, Label, Select, Textarea } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'

const inputStyles = clsx(
  'block w-full rounded-md border border-border-emphasis bg-paper shadow-sm',
  'px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-base/6 sm:text-sm/6',
  'data-focus:outline-2 data-focus:-outline-offset-1 data-focus:outline-accent',
)

interface LeadFormProps {
  variant?: 'compact' | 'full'
  submitText?: string
  className?: string
}

export function LeadForm({
  variant = 'compact',
  submitText = 'Get Your Free SEO Audit',
  className,
}: LeadFormProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction, isPending] = useActionState<LeadFormState, FormData>(
    submitLead,
    { success: false }
  )

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset()
    }
  }, [state.success])

  if (state.success) {
    return (
      <div className={clsx('rounded-lg bg-paper p-8 border border-border-strong text-center', className)}>
        <div className="mx-auto size-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
          <CheckCircleIcon className="size-8 text-green-600" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-ink mb-2">
          Thank you!
        </h3>
        <p className="font-sans text-slate">
          We&apos;ll review your details and get back to you within 2 hours with your free SEO audit.
        </p>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className={clsx('rounded-lg bg-paper p-8 border border-border-strong', className)}
    >
      {/* Hidden attribution fields */}
      <input type="hidden" name="sourcePage" value={pathname} />
      <input type="hidden" name="sourceUrl" value={typeof window !== 'undefined' ? window.location.href : ''} />
      <input type="hidden" name="utmSource" value={searchParams.get('utm_source') || ''} />
      <input type="hidden" name="utmMedium" value={searchParams.get('utm_medium') || ''} />
      <input type="hidden" name="utmCampaign" value={searchParams.get('utm_campaign') || ''} />
      <input type="hidden" name="utmTerm" value={searchParams.get('utm_term') || ''} />
      <input type="hidden" name="utmContent" value={searchParams.get('utm_content') || ''} />
      <input type="hidden" name="referrer" value={typeof document !== 'undefined' ? document.referrer : ''} />

      {/* Name row */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field className="space-y-2">
          <Label className="font-sans text-sm/5 font-medium text-ink">First Name *</Label>
          <Input required type="text" name="firstName" placeholder="John" className={inputStyles} />
        </Field>
        <Field className="space-y-2">
          <Label className="font-sans text-sm/5 font-medium text-ink">Last Name *</Label>
          <Input required type="text" name="lastName" placeholder="Smith" className={inputStyles} />
        </Field>
      </div>

      {/* Email */}
      <Field className="mt-5 space-y-2">
        <Label className="font-sans text-sm/5 font-medium text-ink">Business Email *</Label>
        <Input required type="email" name="email" placeholder="john@company.com" className={inputStyles} />
      </Field>

      {/* Website URL */}
      <Field className="mt-5 space-y-2">
        <Label className="font-sans text-sm/5 font-medium text-ink">Website URL {variant === 'compact' ? '*' : ''}</Label>
        <Input
          type="url"
          name="websiteUrl"
          required={variant === 'compact'}
          placeholder="https://yourwebsite.com"
          className={inputStyles}
        />
      </Field>

      {variant === 'full' && (
        <>
          {/* Company + Phone */}
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field className="space-y-2">
              <Label className="font-sans text-sm/5 font-medium text-ink">Company</Label>
              <Input type="text" name="company" className={inputStyles} />
            </Field>
            <Field className="space-y-2">
              <Label className="font-sans text-sm/5 font-medium text-ink">Phone Number</Label>
              <Input type="tel" name="phone" className={inputStyles} />
            </Field>
          </div>

          {/* Service Interest */}
          <Field className="mt-5 space-y-2">
            <Label className="font-sans text-sm/5 font-medium text-ink">SEO Service Interest</Label>
            <div className="relative">
              <Select name="serviceInterest" className={clsx(inputStyles, 'appearance-none pr-8')}>
                <option value="">Select a service</option>
                <option value="seo-audit">SEO Audit &amp; Analysis</option>
                <option value="keyword-research">Keyword Research &amp; Strategy</option>
                <option value="technical-seo">Technical SEO Optimization</option>
                <option value="content-optimization">Content Optimization</option>
                <option value="local-seo">Local SEO</option>
                <option value="full-service">Complete SEO Management</option>
                <option value="aeo">AI Engine Optimization (AEO)</option>
                <option value="ecommerce-seo">E-commerce SEO</option>
                <option value="enterprise-seo">Enterprise SEO</option>
                <option value="other">Other / Not Sure</option>
              </Select>
              <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-2.5 size-4 fill-ash" aria-hidden="true" />
            </div>
          </Field>
        </>
      )}

      {/* Monthly Budget */}
      <Field className="mt-5 space-y-2">
        <Label className="font-sans text-sm/5 font-medium text-ink">Monthly SEO Budget</Label>
        <div className="relative">
          <Select name="monthlyBudget" className={clsx(inputStyles, 'appearance-none pr-8')}>
            <option value="">Select budget range</option>
            <option value="under-1k">Under $1,000/mo</option>
            <option value="1k-3k">$1,000 - $3,000/mo</option>
            <option value="3k-5k">$3,000 - $5,000/mo</option>
            <option value="5k-10k">$5,000 - $10,000/mo</option>
            <option value="10k-25k">$10,000 - $25,000/mo</option>
            <option value="25k+">$25,000+/mo</option>
          </Select>
          <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-2.5 size-4 fill-ash" aria-hidden="true" />
        </div>
      </Field>

      {variant === 'full' && (
        <Field className="mt-5 space-y-2">
          <Label className="font-sans text-sm/5 font-medium text-ink">Project Details</Label>
          <Textarea
            name="message"
            rows={4}
            placeholder="Tell us about your SEO goals, current challenges, or any specific questions you have..."
            className={clsx(inputStyles, 'resize-none')}
          />
        </Field>
      )}

      {/* Error message */}
      {state.error && (
        <p className="mt-4 text-sm text-red-600 font-sans">{state.error}</p>
      )}

      {/* Submit */}
      <div className="mt-6">
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Submitting...' : submitText}
        </Button>
        <p className="mt-3 font-sans text-xs text-ash text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="underline hover:text-slate">privacy policy</a>.
          We&apos;ll never spam you.
        </p>
      </div>

      {/* Social proof */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-1.5 text-xs text-ash">
          <div className="size-1.5 rounded-full bg-green-500" />
          <span>Average response time: <span className="font-semibold text-ink">under 2 hours</span></span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-ash">
          <CheckCircleIcon className="size-3.5 text-accent flex-shrink-0" />
          <span>Rated <span className="font-semibold text-ink">4.7/5</span> by our clients</span>
        </div>
      </div>
    </form>
  )
}
