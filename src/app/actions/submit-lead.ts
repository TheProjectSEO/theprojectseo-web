'use server'

import { z, type core } from 'zod'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const leadSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().optional(),
  phone: z.string().optional(),
  websiteUrl: z.string().optional(),
  serviceInterest: z.string().optional(),
  monthlyBudget: z.string().optional(),
  message: z.string().optional(),
  // Attribution
  sourcePage: z.string(),
  sourceUrl: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
  referrer: z.string().optional(),
})

export type LeadFormState = {
  success: boolean
  error?: string
}

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const str = (key: string) => {
    const v = formData.get(key)
    return typeof v === 'string' ? v : undefined
  }

  const raw = {
    firstName: str('firstName'),
    lastName: str('lastName'),
    email: str('email'),
    company: str('company'),
    phone: str('phone'),
    websiteUrl: str('websiteUrl'),
    serviceInterest: str('serviceInterest'),
    monthlyBudget: str('monthlyBudget'),
    message: str('message'),
    sourcePage: str('sourcePage'),
    sourceUrl: str('sourceUrl'),
    utmSource: str('utmSource'),
    utmMedium: str('utmMedium'),
    utmCampaign: str('utmCampaign'),
    utmTerm: str('utmTerm'),
    utmContent: str('utmContent'),
    referrer: str('referrer'),
  }

  const parsed = leadSchema.safeParse(raw)
  if (!parsed.success) {
    const issues = parsed.error.issues as core.$ZodIssue[]
    return { success: false, error: issues[0]?.message || 'Invalid form data' }
  }

  const lead = parsed.data
  const fullName = `${lead.firstName} ${lead.lastName}`

  // 1. Insert into Supabase
  const { error: dbError } = await supabase.from('leads').insert({
    name: fullName,
    first_name: lead.firstName,
    last_name: lead.lastName,
    email: lead.email,
    company: lead.company || null,
    phone: lead.phone || null,
    website_url: lead.websiteUrl || null,
    service_interest: lead.serviceInterest || null,
    monthly_budget: lead.monthlyBudget || null,
    message: lead.message || null,
    source_page: lead.sourcePage,
    source_url: lead.sourceUrl || null,
    utm_source: lead.utmSource || null,
    utm_medium: lead.utmMedium || null,
    utm_campaign: lead.utmCampaign || null,
    utm_term: lead.utmTerm || null,
    utm_content: lead.utmContent || null,
    referrer: lead.referrer || null,
    status: 'new',
  })

  if (dbError) {
    console.error('Supabase insert error:', dbError)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  // 2. Send Slack notification (fire-and-forget)
  sendSlackNotification(lead, fullName).catch(console.error)

  // 3. Send email notification (fire-and-forget)
  sendEmailNotification(lead, fullName).catch(console.error)

  return { success: true }
}

async function sendSlackNotification(
  lead: z.infer<typeof leadSchema>,
  fullName: string
) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL
  if (!webhookUrl) return

  const budgetLabel = lead.monthlyBudget || 'Not specified'
  const serviceLabel = lead.serviceInterest || 'Not specified'
  const pageLabel = lead.sourcePage || 'Unknown'

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      blocks: [
        {
          type: 'header',
          text: { type: 'plain_text', text: 'New Lead from TheProjectSEO' },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*Name:*\n${fullName}` },
            { type: 'mrkdwn', text: `*Email:*\n${lead.email}` },
            { type: 'mrkdwn', text: `*Company:*\n${lead.company || '-'}` },
            { type: 'mrkdwn', text: `*Phone:*\n${lead.phone || '-'}` },
            { type: 'mrkdwn', text: `*Website:*\n${lead.websiteUrl || '-'}` },
            { type: 'mrkdwn', text: `*Budget:*\n${budgetLabel}` },
          ],
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*Service Interest:*\n${serviceLabel}` },
            { type: 'mrkdwn', text: `*Source Page:*\n${pageLabel}` },
          ],
        },
        ...(lead.message
          ? [
              {
                type: 'section',
                text: { type: 'mrkdwn', text: `*Message:*\n${lead.message}` },
              },
            ]
          : []),
        ...(lead.utmSource
          ? [
              {
                type: 'context',
                elements: [
                  {
                    type: 'mrkdwn',
                    text: `UTM: source=${lead.utmSource || '-'} | medium=${lead.utmMedium || '-'} | campaign=${lead.utmCampaign || '-'} | term=${lead.utmTerm || '-'}`,
                  },
                ],
              },
            ]
          : []),
      ],
    }),
  })
}

async function sendEmailNotification(
  lead: z.infer<typeof leadSchema>,
  fullName: string
) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return

  const resend = new Resend(apiKey)

  await resend.emails.send({
    from: 'TheProjectSEO Leads <leads@theprojectseo.com>',
    to: 'aditya@theprojectseo.com',
    subject: `New Lead: ${fullName} — ${lead.sourcePage}`,
    html: `
      <h2>New Lead from TheProjectSEO</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${fullName}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.company || '-'}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.phone || '-'}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Website</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.websiteUrl || '-'}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Budget</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.monthlyBudget || 'Not specified'}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.serviceInterest || 'Not specified'}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Source Page</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.sourcePage}</td></tr>
        ${lead.utmSource ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">UTM Source</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.utmSource}</td></tr>` : ''}
        ${lead.utmCampaign ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">UTM Campaign</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.utmCampaign}</td></tr>` : ''}
        ${lead.message ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${lead.message}</td></tr>` : ''}
      </table>
      <p style="margin-top:16px;color:#666;font-size:12px;">This lead was submitted from <strong>${lead.sourcePage}</strong> on theprojectseo.com</p>
    `,
  })
}
