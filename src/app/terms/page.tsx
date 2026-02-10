import { Container } from '@/components/container'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | TheProjectSEO',
  description:
    'Read the Terms of Service for TheProjectSEO. Learn about our SEO consulting, content, and web services, payment terms, intellectual property, and more.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsOfService() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Terms of Service',
          url: 'https://theprojectseo.com/terms',
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
            <Heading as="h1" className="mt-4">
              Terms of Service
            </Heading>
            <p className="mt-6 text-slate leading-relaxed text-lg">
              Last updated: February 9, 2026
            </p>
          </div>
        </Container>
      </div>

      {/* Terms Content */}
      <Container className="pb-24">
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
            {/* 1. Agreement to Terms */}
            <h2>1. Agreement to Terms</h2>

            <p>
              By accessing or using the website and services provided by TheProjectSEO Digital
              (OPC) Private Limited (CIN: U73100JH2025OPC026020), operating as &quot;TheProjectSEO&quot;
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be
              bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to all of
              these Terms, you are prohibited from using our website and services and must
              discontinue use immediately.
            </p>

            <p>
              These Terms constitute a legally binding agreement between you
              (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) and TheProjectSEO governing your
              access to and use of our website, platform, and all related services.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 2. Services Description */}
            <h2>2. Services Description</h2>

            <p>
              TheProjectSEO provides a range of digital marketing and web services,
              including but not limited to:
            </p>

            <ul>
              <li>
                <strong>SEO Consulting:</strong> Comprehensive search engine optimization
                audits, strategy development, keyword research, on-page optimization,
                technical SEO, and ongoing performance monitoring
              </li>
              <li>
                <strong>Content Services:</strong> Content strategy, creation, optimization,
                blog management, copywriting, and content marketing campaigns
              </li>
              <li>
                <strong>Web Services:</strong> Website design and development, landing page
                creation, site speed optimization, Core Web Vitals improvement, and
                ongoing website maintenance
              </li>
              <li>
                <strong>Analytics and Reporting:</strong> Performance tracking, monthly
                reporting, competitive analysis, and data-driven strategy recommendations
              </li>
            </ul>

            <p>
              The specific scope of services for each engagement will be outlined in a
              separate Statement of Work (SOW) or service agreement agreed upon by both
              parties prior to the commencement of work.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 3. User Accounts */}
            <h2>3. User Accounts</h2>

            <p>
              Certain features of our services may require you to create an account. When
              creating an account, you agree to:
            </p>

            <ul>
              <li>
                Provide accurate, current, and complete information during the
                registration process
              </li>
              <li>
                Maintain and promptly update your account information to keep it accurate,
                current, and complete
              </li>
              <li>
                Maintain the security and confidentiality of your login credentials and
                restrict access to your account
              </li>
              <li>
                Accept responsibility for all activities that occur under your account
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account or any other
                breach of security
              </li>
            </ul>

            <p>
              We reserve the right to suspend or terminate your account at our discretion
              if any information provided proves to be inaccurate, not current, or
              incomplete, or if you violate any provision of these Terms.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 4. Payment Terms */}
            <h2>4. Payment Terms</h2>

            <h3>Invoicing</h3>

            <p>
              All fees for services will be outlined in the applicable Statement of Work
              or service agreement. Unless otherwise specified:
            </p>

            <ul>
              <li>
                Invoices are issued at the beginning of each billing cycle or upon project
                milestone completion, as defined in the SOW
              </li>
              <li>Payment is due within thirty (30) days of the invoice date</li>
              <li>
                All prices are quoted in US Dollars unless otherwise agreed upon in
                writing
              </li>
              <li>
                Late payments may incur a late fee of 1.5% per month on the outstanding
                balance
              </li>
            </ul>

            <h3>Refund Policy</h3>

            <p>
              Due to the nature of digital services, refunds are handled on a
              case-by-case basis. The following general guidelines apply:
            </p>

            <ul>
              <li>
                <strong>Pre-commencement cancellation:</strong> If you cancel before any
                work has begun, a full refund of any prepaid fees will be issued
              </li>
              <li>
                <strong>Work in progress:</strong> If you cancel after work has commenced,
                you will be invoiced for work completed to date, and any remaining prepaid
                balance will be refunded
              </li>
              <li>
                <strong>Monthly retainers:</strong> Monthly retainer fees are
                non-refundable once the billing cycle has begun. You may cancel future
                billing cycles with thirty (30) days written notice
              </li>
              <li>
                <strong>Completed deliverables:</strong> Fees for completed and delivered
                work are non-refundable
              </li>
            </ul>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 5. Intellectual Property */}
            <h2>5. Intellectual Property</h2>

            <p>
              Intellectual property rights for work produced under these Terms are
              allocated as follows:
            </p>

            <ul>
              <li>
                <strong>Client deliverables:</strong> Upon full payment, all custom
                content, designs, and other deliverables created specifically for the
                Client become the property of the Client, unless otherwise stated in the
                SOW
              </li>
              <li>
                <strong>Pre-existing materials:</strong> Each party retains ownership of
                all intellectual property that existed prior to the engagement. Any
                pre-existing materials incorporated into deliverables remain the property
                of the originating party, with a license granted for use within the
                deliverables
              </li>
              <li>
                <strong>Tools and methodologies:</strong> TheProjectSEO retains ownership
                of all proprietary tools, frameworks, processes, and methodologies used in
                the delivery of services, including templates and reusable components
              </li>
              <li>
                <strong>Third-party assets:</strong> Any third-party assets (stock images,
                fonts, plugins, etc.) are subject to their respective licenses and remain
                the property of their original owners
              </li>
            </ul>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 6. Client Responsibilities */}
            <h2>6. Client Responsibilities</h2>

            <p>
              To ensure the successful delivery of our services, the Client agrees to:
            </p>

            <ul>
              <li>
                <strong>Provide timely access:</strong> Grant necessary access to
                websites, hosting accounts, analytics platforms, content management
                systems, and any other tools required for the performance of services
              </li>
              <li>
                <strong>Timely approvals:</strong> Review and provide feedback or approval
                on deliverables within the timeframes specified in the SOW. Delays in
                Client approvals may result in corresponding delays to project timelines
              </li>
              <li>
                <strong>Content accuracy:</strong> Ensure that all content, information,
                and materials provided to TheProjectSEO are accurate, lawful, and do not
                infringe upon any third-party rights
              </li>
              <li>
                <strong>Designate a point of contact:</strong> Appoint a primary contact
                person authorized to make decisions and provide approvals on behalf of the
                Client
              </li>
              <li>
                <strong>Compliance:</strong> Ensure that any materials or instructions
                provided comply with all applicable laws and regulations
              </li>
            </ul>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 7. Confidentiality */}
            <h2>7. Confidentiality</h2>

            <p>
              Both parties agree to maintain the confidentiality of all proprietary and
              sensitive information disclosed during the course of the engagement.
              Confidential information includes, but is not limited to:
            </p>

            <ul>
              <li>Business strategies, plans, and financial information</li>
              <li>Customer data, user information, and analytics</li>
              <li>Technical specifications, source code, and system architectures</li>
              <li>Marketing strategies, keyword data, and competitive analyses</li>
              <li>Any information designated as confidential by either party</li>
            </ul>

            <p>
              Neither party shall disclose, publish, or disseminate confidential
              information to any third party without the prior written consent of the
              disclosing party, except as required by law. This obligation of
              confidentiality shall survive the termination of the service relationship
              for a period of two (2) years.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 8. Limitation of Liability */}
            <h2>8. Limitation of Liability</h2>

            <p>
              To the maximum extent permitted by applicable law:
            </p>

            <ul>
              <li>
                TheProjectSEO shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including but not limited to loss of
                profits, revenue, data, or business opportunities, regardless of the cause
                of action or theory of liability
              </li>
              <li>
                Our total aggregate liability arising out of or relating to these Terms or
                the services shall not exceed the total fees paid by the Client to
                TheProjectSEO during the twelve (12) months preceding the claim
              </li>
              <li>
                TheProjectSEO does not guarantee specific search engine rankings,
                traffic levels, or business results. SEO results depend on numerous
                factors beyond our control, including search engine algorithm changes,
                competitive landscape, and market conditions
              </li>
              <li>
                We are not responsible for any actions taken by third-party platforms,
                including but not limited to search engines, social media platforms, or
                hosting providers
              </li>
            </ul>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 9. Indemnification */}
            <h2>9. Indemnification</h2>

            <p>
              You agree to indemnify, defend, and hold harmless TheProjectSEO, its
              officers, directors, employees, agents, and affiliates from and against any
              and all claims, liabilities, damages, losses, costs, and expenses (including
              reasonable attorneys&apos; fees) arising out of or in connection with:
            </p>

            <ul>
              <li>Your use of or access to our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any applicable law or regulation</li>
              <li>
                Any content or materials provided by you that infringe upon the
                intellectual property or other rights of any third party
              </li>
              <li>
                Any misrepresentation made by you regarding the accuracy of information
                or content provided to us
              </li>
            </ul>

            <p>
              This indemnification obligation shall survive the termination of these Terms
              and any service agreement between the parties.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 10. Termination */}
            <h2>10. Termination</h2>

            <p>
              Either party may terminate the service relationship under the following
              conditions:
            </p>

            <ul>
              <li>
                <strong>Termination for convenience:</strong> Either party may terminate
                with thirty (30) days written notice. The Client shall be responsible for
                payment of all services rendered up to the effective date of termination
              </li>
              <li>
                <strong>Termination for cause:</strong> Either party may terminate
                immediately upon written notice if the other party materially breaches
                these Terms and fails to cure such breach within fifteen (15) days of
                receiving written notice of the breach
              </li>
              <li>
                <strong>Effect of termination:</strong> Upon termination, TheProjectSEO
                will deliver all completed work and work in progress to the Client.
                Access to any proprietary tools or platforms provided by TheProjectSEO
                will be revoked
              </li>
              <li>
                <strong>Survival:</strong> Sections regarding intellectual property,
                confidentiality, limitation of liability, indemnification, and governing
                law shall survive termination
              </li>
            </ul>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 11. Governing Law */}
            <h2>11. Governing Law</h2>

            <p>
              These Terms shall be governed by and construed in accordance with the laws
              of India. Any legal proceedings arising out of or relating to these Terms
              shall be brought exclusively in the courts of competent jurisdiction in
              Ranchi, Jharkhand, India, and both parties consent to the personal
              jurisdiction of such courts.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 12. Dispute Resolution */}
            <h2>12. Dispute Resolution</h2>

            <p>
              In the event of any dispute arising out of or relating to these Terms or the
              services provided, the parties agree to follow this resolution process:
            </p>

            <ul>
              <li>
                <strong>Informal resolution:</strong> The parties shall first attempt to
                resolve the dispute through good-faith negotiation for a period of thirty
                (30) days
              </li>
              <li>
                <strong>Mediation:</strong> If informal negotiation fails, the parties
                agree to submit the dispute to non-binding mediation before a mutually
                agreed-upon mediator
              </li>
              <li>
                <strong>Arbitration:</strong> If mediation is unsuccessful, the dispute
                shall be resolved through binding arbitration in accordance with the rules
                of a recognized arbitration body, with the decision of the arbitrator
                being final and enforceable in any court of competent jurisdiction
              </li>
              <li>
                <strong>Costs:</strong> Each party shall bear its own costs in connection
                with the dispute resolution process, unless the arbitrator determines
                otherwise
              </li>
            </ul>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 13. Changes to Terms */}
            <h2>13. Changes to Terms</h2>

            <p>
              TheProjectSEO reserves the right to modify or update these Terms at any
              time at our sole discretion. When we make changes:
            </p>

            <ul>
              <li>
                We will update the &quot;Last updated&quot; date at the top of this page
              </li>
              <li>
                For material changes, we will provide notice through our website or via
                email to registered users and active clients
              </li>
              <li>
                Your continued use of our website and services following the posting of
                revised Terms constitutes your acceptance of those changes
              </li>
              <li>
                If you do not agree to the revised Terms, you must discontinue your use of
                our services
              </li>
            </ul>

            <p>
              We encourage you to review these Terms periodically to stay informed of any
              updates.
            </p>

            {/* Section Divider */}
            <div className="border-t border-border my-16"></div>

            {/* 14. Contact Information */}
            <h2>14. Contact Information</h2>

            <p>
              If you have any questions, concerns, or requests regarding these Terms of
              Service, please contact us:
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
                <a href="mailto:legal@theprojectseo.com">legal@theprojectseo.com</a>
              </li>
              <li>
                <strong>Website:</strong>{' '}
                <a href="/contact">theprojectseo.com/contact</a>
              </li>
            </ul>

            <p>
              We will make every effort to respond to your inquiry within two (2) business
              days.
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
