import { Container } from '@/components/container'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | TheProjectSEO',
  description:
    'Learn how TheProjectSEO collects, uses, and protects your personal information. Read our full privacy policy for details on data handling, cookies, and your rights.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Privacy Policy',
          url: 'https://theprojectseo.com/privacy',
        }}
      />
      <Container>
        <Navbar />
      </Container>

      {/* Page Header */}
      <div className="relative py-16">
        <HeroAnimation />
        <Container>
          <div className="mx-auto max-w-4xl">
            <Subheading>Legal</Subheading>
            <Heading as="h1" className="mt-6">
              Privacy Policy
            </Heading>
            <p className="mt-6 text-slate leading-relaxed text-lg">
              Your privacy is important to us. This Privacy Policy explains how TheProjectSEO
              collects, uses, discloses, and safeguards your information when you visit our
              website and use our services.
            </p>
            <p className="mt-4 text-ash text-sm">
              Last updated: February 9, 2026
            </p>
          </div>
        </Container>
      </div>

      {/* Policy Content */}
      <Container className="py-16">
        <div className="mx-auto max-w-4xl">
          <div
            className="prose prose-lg max-w-none
            [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:text-ink
            [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:text-ink
            [&_p]:text-slate [&_p]:leading-relaxed [&_p]:mb-6
            [&_ul]:my-6 [&_ul]:space-y-3 [&_li]:text-slate
            [&_a]:text-accent [&_a]:font-medium [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-2 [&_a]:hover:text-accent-hover
            [&_strong]:text-ink [&_strong]:font-semibold"
          >
            {/* 1. Introduction */}
            <h2>1. Introduction</h2>

            <p>
              TheProjectSEO Digital (OPC) Private Limited (CIN: U73100JH2025OPC026020),
              operating as &quot;TheProjectSEO&quot; (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), is committed to protecting your
              privacy. This Privacy Policy describes the types of information we may collect from you or
              that you may provide when you visit our website and our practices for collecting, using,
              maintaining, protecting, and disclosing that information.
            </p>

            <p>
              By accessing or using our website and services, you agree to this Privacy Policy. If you do
              not agree with the terms of this policy, please do not access or use our services.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 2. Information We Collect */}
            <h2>2. Information We Collect</h2>

            <h3>Personal Information</h3>

            <p>
              We may collect personally identifiable information that you voluntarily provide to us when
              you fill out forms, subscribe to our newsletter, request a consultation, or otherwise
              contact us. This information may include:
            </p>

            <ul>
              <li>Name and email address</li>
              <li>Phone number</li>
              <li>Company name and job title</li>
              <li>Website URL</li>
              <li>Billing and payment information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Usage Data</h3>

            <p>
              We automatically collect certain information when you visit, use, or navigate our website.
              This usage data may include:
            </p>

            <ul>
              <li>Your IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages viewed and links clicked</li>
              <li>Time spent on pages and navigation paths</li>
              <li>Referring website addresses</li>
              <li>Date and time of your visit</li>
            </ul>

            <h3>Cookies and Tracking Technologies</h3>

            <p>
              We use cookies and similar tracking technologies to collect and store information about your
              interactions with our website. For more details, see the Cookies Policy section below.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 3. How We Use Your Information */}
            <h2>3. How We Use Your Information</h2>

            <p>
              We use the information we collect for various purposes, including:
            </p>

            <ul>
              <li>
                <strong>Service Delivery:</strong> To provide, operate, and maintain our SEO services
                and website, including processing your requests and managing your account
              </li>
              <li>
                <strong>Communication:</strong> To send you updates, newsletters, marketing materials,
                and other information that may be of interest to you, with your consent where required
              </li>
              <li>
                <strong>Improvement:</strong> To understand how users interact with our website so we
                can improve our services, content, and user experience
              </li>
              <li>
                <strong>Analytics:</strong> To monitor and analyze usage patterns and trends to enhance
                our website performance
              </li>
              <li>
                <strong>Security:</strong> To detect, prevent, and address technical issues, fraud, or
                other security concerns
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and
                legal processes
              </li>
            </ul>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 4. Information Sharing */}
            <h2>4. Information Sharing</h2>

            <p>
              <strong>We do not sell, trade, or rent your personal information to third parties.</strong> We
              may share your information only in the following circumstances:
            </p>

            <ul>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with
                trusted third-party service providers who assist us in operating our website, conducting
                our business, or providing services to you (e.g., email delivery, analytics, payment
                processing). These providers are contractually obligated to keep your information
                confidential and use it only for the purposes we specify.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required to do
                so by law or in response to valid requests by public authorities (e.g., a court order
                or government agency).
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
                all or a portion of our assets, your information may be transferred as part of that
                transaction.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information for any other purpose
                with your explicit consent.
              </li>
            </ul>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 5. Data Security */}
            <h2>5. Data Security</h2>

            <p>
              We implement industry-standard security measures to protect your personal information from
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>

            <ul>
              <li>Encryption of data in transit using SSL/TLS protocols</li>
              <li>Secure storage of personal information with access controls</li>
              <li>Regular security assessments and vulnerability testing</li>
              <li>Employee training on data protection best practices</li>
              <li>Restricted access to personal information on a need-to-know basis</li>
            </ul>

            <p>
              While we strive to use commercially acceptable means to protect your personal information,
              no method of transmission over the Internet or method of electronic storage is 100%
              secure. We cannot guarantee absolute security, but we are committed to maintaining the
              highest practical standards to protect your data.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 6. Your Rights */}
            <h2>6. Your Rights</h2>

            <p>
              Depending on your location and applicable laws, you may have the following rights
              regarding your personal information:
            </p>

            <ul>
              <li>
                <strong>Access:</strong> You have the right to request a copy of the personal
                information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> You have the right to request that we correct any
                inaccurate or incomplete personal information
              </li>
              <li>
                <strong>Deletion:</strong> You have the right to request that we delete your personal
                information, subject to certain legal exceptions
              </li>
              <li>
                <strong>Opt-Out:</strong> You have the right to opt out of receiving marketing
                communications from us at any time
              </li>
              <li>
                <strong>Data Portability:</strong> You have the right to request a copy of your data
                in a structured, commonly used, and machine-readable format
              </li>
              <li>
                <strong>Restriction:</strong> You have the right to request that we restrict the
                processing of your personal information under certain circumstances
              </li>
            </ul>

            <p>
              To exercise any of these rights, please contact us using the information provided in the
              Contact Us section below. We will respond to your request within a reasonable timeframe
              and in accordance with applicable law.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 7. Cookies Policy */}
            <h2>7. Cookies Policy</h2>

            <p>
              Cookies are small text files placed on your device when you visit our website. We use
              cookies to enhance your browsing experience and analyze website traffic.
            </p>

            <h3>Types of Cookies We Use</h3>

            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to
                function properly. They enable core functionality such as security, network management,
                and accessibility. You cannot opt out of these cookies.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies help us understand how visitors
                interact with our website by collecting and reporting information anonymously. We use
                this data to improve our website and services.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These cookies enable enhanced functionality and
                personalization, such as remembering your preferences and settings.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> These cookies are used to track visitors across
                websites to display relevant advertisements. They are set by our advertising partners
                with our permission.
              </li>
            </ul>

            <h3>How to Manage Cookies</h3>

            <p>
              Most web browsers allow you to control cookies through their settings. You can set your
              browser to refuse all cookies or to indicate when a cookie is being sent. However,
              disabling cookies may affect the functionality of certain parts of our website. You can
              manage your cookie preferences through:
            </p>

            <ul>
              <li>Your browser settings (Chrome, Firefox, Safari, Edge, etc.)</li>
              <li>Our cookie consent banner when you first visit our site</li>
              <li>Third-party opt-out tools such as the Digital Advertising Alliance opt-out page</li>
            </ul>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 8. Third-Party Links */}
            <h2>8. Third-Party Links</h2>

            <p>
              Our website may contain links to third-party websites, services, or content that are not
              owned or controlled by TheProjectSEO. We have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of any third-party
              websites or services.
            </p>

            <p>
              We strongly advise you to read the privacy policy of every website you visit. We are not
              responsible for the privacy practices or the content of any third-party sites, and
              accessing these links is at your own risk.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 9. Children's Privacy */}
            <h2>9. Children&apos;s Privacy</h2>

            <p>
              Our website and services are not directed at individuals under the age of 13. We do not
              knowingly collect personal information from children under 13. If we become aware that we
              have collected personal information from a child under the age of 13 without verification
              of parental consent, we will take steps to remove that information from our servers
              promptly.
            </p>

            <p>
              If you are a parent or guardian and you believe that your child has provided us with
              personal information, please contact us immediately so that we can take appropriate
              action.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 10. Changes to This Policy */}
            <h2>10. Changes to This Policy</h2>

            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices,
              technology, legal requirements, or other factors. When we make changes, we will update the
              &quot;Last updated&quot; date at the top of this page.
            </p>

            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we
              are protecting your information. For significant changes, we will provide a more prominent
              notice, which may include email notification to users who have provided their email
              address, or a banner on our website.
            </p>

            <p>
              Your continued use of our website and services after any changes to this Privacy Policy
              constitutes your acceptance of the updated terms.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 11. Contact Us */}
            <h2>11. Contact Us</h2>

            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us at:
            </p>

            <ul>
              <li>
                <strong>Legal Entity:</strong> TheProjectSEO Digital (OPC) Private Limited
              </li>
              <li>
                <strong>CIN:</strong> U73100JH2025OPC026020
              </li>
              <li>
                <strong>Registered Address:</strong> No. 808, Mahabir Tower, Main Road, P.S. Hindpiri, Ranchi, Jharkhand &ndash; 834001, India
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@theprojectseo.com">privacy@theprojectseo.com</a>
              </li>
              <li>
                <strong>Website:</strong>{' '}
                <a href="https://theprojectseo.com/contact">theprojectseo.com/contact</a>
              </li>
            </ul>

            <p>
              We will make every effort to respond to your inquiry within 30 days.
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
