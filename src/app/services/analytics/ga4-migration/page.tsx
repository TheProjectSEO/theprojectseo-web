import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  CTAFormSection,
  ProcessSection,
} from '@/components/service-page-sections'
import { RefreshCw, ShieldCheck, Code2, BarChart3, GitBranch, AlertTriangle } from 'lucide-react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export const metadata: Metadata = {
  title: 'GA4 Migration Services | GA4 Audit & Event Parity | TheProjectSEO',
  description:
    'GA4 migration done correctly: event parity audit, enhanced measurement double-counting fixes, dataLayer variable validation, and conversion event mapping with before/after verification.',
  alternates: {
    canonical: '/services/analytics/ga4-migration',
  },
  openGraph: {
    title: 'GA4 Migration Services | GA4 Audit & Event Parity | TheProjectSEO',
    description:
      'In 2026, many organizations still have GA4 setups that double-count events, miss bounced sessions, and have broken GTM conditions. We audit, fix, and verify every issue.',
    url: 'https://theprojectseo.com/services/analytics/ga4-migration',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'GA4 Migration',
  title: 'Your GA4 setup is probably',
  accentWord: 'broken.',
  titleAfterAccent: "Let's verify.",
  description:
    'UA was sunset in mid-2023. Most organizations made the switch. Far fewer organizations made the switch correctly. In 2026, the most common GA4 issues we encounter are: duplicate conversion events from parallel GTM containers, bounced sessions not counted because of deferred gtag.js loaders, enhanced measurement double-counting scroll and video events, and broken dataLayer variables that render as literal strings in GTM conditions. We audit every layer and fix what is wrong.',
  ctaPrimaryText: 'Audit My GA4 Setup',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Analytics Services',
  ctaSecondaryHref: '/services/analytics',
}

const statsData = [
  { value: '3', label: 'Average broken configurations per GA4 audit' },
  { value: '2x', label: 'Conversion count gap we found at one client (GA4 vs. key events)' },
  { value: '100%', label: 'Before/after verification on every fix' },
  { value: '4wk', label: 'Typical audit to verified fix timeline' },
]

const servicesData = {
  subheading: 'What We Audit and Fix',
  heading: 'Six GA4 failure modes we diagnose and correct.',
  services: [
    {
      icon: RefreshCw,
      title: 'Event Parity Audit',
      description:
        'We build a side-by-side comparison of every conversion event you tracked in Universal Analytics against what is currently firing in GA4. Gaps in event parity mean you are making decisions on incomplete data.',
      features: [
        'UA goal list vs. GA4 conversion event mapping',
        'Event volume comparison by month to identify gaps',
        'Missing event identification with GTM fix plan',
        'Documentation of each event\'s firing condition and trigger',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Double-Counting Diagnosis',
      description:
        'The most common GA4 error we see: a site with two GTM containers, a gtag.js snippet, and a GA4 tag in each container. A single page load sends the GA4 measurement ID three times. Every event appears two or three times in reporting, making conversion rate and funnel data meaningless.',
      features: [
        'Network request audit to identify all GA4 payloads on page load',
        'GTM container inventory: which containers are active on which pages',
        'Duplicate tag identification and removal plan',
        'Post-fix verification against expected event volumes',
      ],
    },
    {
      icon: Code2,
      title: 'dataLayer Variable Validation',
      description:
        'Many sites push variables to the dataLayer (page type, user status, product ID) so GTM tags can fire conditionally. If the variable names or value formats changed during a site rebuild, GTM conditions that depend on them break silently. Tags fire everywhere or nowhere instead of following the intended logic.',
      features: [
        'dataLayer variable inventory across all page types',
        'GTM trigger condition audit against actual dataLayer values',
        'Broken variable identification and fix specification',
        'Testing protocol across all page templates',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Enhanced Measurement Review',
      description:
        'GA4\'s enhanced measurement fires automatic events for scrolls, file downloads, outbound clicks, and video engagement. When combined with manually implemented events tracking the same interactions, you get doubled counts. We audit which enhanced measurement events are active and which overlap with manual implementations.',
      features: [
        'Enhanced measurement settings audit per GA4 property',
        'Overlap identification between automatic and manual events',
        'Deduplication strategy and implementation',
        'Impact assessment: how much did double-counting inflate your numbers',
      ],
    },
    {
      icon: GitBranch,
      title: 'Deferred Loader Issue Fixes',
      description:
        'Some site implementations load GA4 or GTM using a deferred script or behind a consent management interaction. Sessions where users bounce before any interaction never get counted. This artificially deflates session counts and inflates average session duration.',
      features: [
        'Script load order audit across all page templates',
        'Bounce session undercount estimation',
        'Consent management and GA4 initialization sequence review',
        'Fix implementation for immediate (non-deferred) GA4 initialization',
      ],
    },
    {
      icon: BarChart3,
      title: 'Conversion Event Mapping and Verification',
      description:
        'GA4 distinguishes between events and key events (conversions). We map your business conversion events (form submissions, demo requests, trial sign-ups, purchases) to GA4 key events with proper counting method and value parameters, then verify in DebugView before declaring the migration complete.',
      features: [
        'Business conversion event to GA4 key event mapping',
        'Value parameter configuration for revenue-bearing events',
        'DebugView verification for every key event',
        'Funnel visualization setup in GA4 Explore',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Full GA4 configuration audit',
    description:
      'We review every component of your GA4 setup: the property configuration, all active data streams, every GTM container loading on the site, the full tag and trigger inventory, the dataLayer implementation, and the consent management setup. We document every issue we find, ranked by impact on data quality. Most audits surface three to six distinct problems.',
  },
  {
    number: '02',
    title: 'Fix specification and approval',
    description:
      'For each issue found, we write a specific fix specification: exactly what to change in GTM, what to update in GA4, and what the expected outcome is. You approve the fix list before we touch anything. For clients with development teams, we coordinate the fixes with whoever owns the site codebase. For clients using tag managers only, we implement fixes directly.',
  },
  {
    number: '03',
    title: 'Implementation and DebugView verification',
    description:
      'We implement fixes in GTM preview mode, verify every event in GA4 DebugView before publishing, and run a staging-to-production verification sequence. Nothing publishes until we have confirmed the fix works and has not introduced new issues. For conversion events, we verify against known test submissions to confirm end-to-end data flow.',
  },
  {
    number: '04',
    title: 'Post-fix monitoring and documentation',
    description:
      'We monitor GA4 event volumes for two weeks after implementation to confirm that the fixed numbers are stable and within expected ranges relative to pre-fix baselines. You receive a documentation package covering every change made, every verification step completed, and the expected data ranges for your key events going forward.',
  },
]

const caseStudyData = {
  subheading: 'GA4 Migration in Practice',
  heading: 'The X0PA case: dual GTM containers, deferred loaders, and a 2x conversion inflation.',
  challenge:
    'An AI-driven HR technology platform had a GA4 setup with two active GTM containers: one loading immediately on page load, one loading deferred behind a user interaction. They also had a standalone gtag.js snippet. The result was that every conversion event appeared 2 to 3 times in GA4 reports. Their November 2025 paid search showed 1,131 conversions in a month where the true number was closer to 200. The inflated data was driving paid spend decisions on false conversion rates.',
  solution:
    'We audited the full container and tag inventory, identified the three-way GA4 initialization (two GTM containers plus gtag.js), documented which tags were duplicated across containers, and built a fix plan: consolidate to one GTM container, remove the gtag.js snippet, and move the GA4 tag to immediate (non-deferred) initialization. We also identified that multiple dataLayer variables were pushing literal template strings instead of resolved values, breaking 4 GTM trigger conditions.',
  results: [
    { metric: 'GA4 conversion count before fix', improvement: '1,131', timeframe: 'November 2025 paid search (inflated)' },
    { metric: 'Actual conversion count after deduplication', improvement: '~200', timeframe: 'Same period, real number' },
    { metric: 'Broken GTM trigger conditions fixed', improvement: '4', timeframe: 'All caused by literal dataLayer variable strings' },
    { metric: 'Paid channel optimization improvement after real data available', improvement: '31%', timeframe: 'Better CPL from accurate conversion data' },
  ],
}

const faqItems = [
  {
    question: 'Is GA4 migration still relevant in 2026?',
    answer:
      'Yes. UA was sunsetted in July 2023 and stopped processing data in July 2024. Despite this, a significant number of organizations that migrated to GA4 did so under time pressure with minimal QA. The result is that many GA4 setups are technically running but producing unreliable data due to double-counting, broken event mappings, deferred loading issues, or incorrect conversion event configuration. The migration may be complete in name; it is not necessarily complete in data quality.',
  },
  {
    question: 'How do I know if my GA4 setup has double-counting issues?',
    answer:
      'Check two things. First, open your GA4 property and compare the "conversions" count to the "key events" count in the same report. If conversions is more than 20% higher than key events for the same time period, you likely have duplicate event firing. Second, compare your GA4 session count to your server log session count for the same period. If GA4 shows significantly fewer sessions than your server logs, you likely have a deferred loading issue missing bounce sessions. Both checks take 10 minutes and are worth doing before trusting any GA4 reporting.',
  },
  {
    question: 'What is a deferred gtag.js loader issue?',
    answer:
      'Some developers optimize page performance by loading third-party scripts (including GA4 or GTM) with a defer attribute or behind a user interaction trigger (first scroll, first click). This improves initial page load speed but means that any user who bounces before the trigger fires never gets counted as a session. For content sites with high bounce rates, this can suppress session counts by 15 to 40%, making your organic bounce rate and average session duration metrics meaningless.',
  },
  {
    question: 'How long does a GA4 audit take?',
    answer:
      'The audit itself takes one to two weeks depending on site complexity. A single GTM container with a straightforward tag structure takes 5 business days to audit. Multiple containers, custom dataLayer implementations, and consent management complexity can extend this to 10 to 15 days. Implementation and verification take an additional one to two weeks. Total timeline from start to verified clean GA4 setup is typically three to four weeks.',
  },
  {
    question: 'Do you need developer access to fix GA4 issues?',
    answer:
      'It depends on the issue. Most GA4 and GTM configuration fixes can be made through the tag manager interface alone, which requires Editor access to the GTM container. Fixes to the dataLayer implementation (adding or changing variables pushed in the site code) require developer access. We specify exactly which fixes need developer time versus GTM-only changes in our fix specification document before any implementation begins.',
  },
]

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="GA4 migration questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function Ga4MigrationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/analytics/ga4-migration',
          name: 'GA4 Migration Services',
          description:
            'GA4 event parity audit, double-counting diagnosis, dataLayer variable validation, enhanced measurement review, and conversion event mapping with before/after verification.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: { '@type': 'Country', name: 'Worldwide' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.slice(0, 4).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessSection
        subheading="How We Run the Audit"
        heading="Four steps from suspected issues to verified clean setup."
        steps={processSteps}
      />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Verify Your GA4 Setup?"
        heading="Book a GA4 audit before making any more data-driven decisions."
        lead="We will tell you within two weeks whether your conversion data is trustworthy. Most clients are surprised by what we find."
        benefits={[
          'GA4 property and GTM container access required',
          'Audit report delivered within 10 business days',
          'Fix specification included at no extra cost',
        ]}
        submitText="Book the GA4 Audit"
      />
      <Footer />
    </main>
  )
}
