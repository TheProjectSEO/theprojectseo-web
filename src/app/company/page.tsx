import { AnimatedNumber } from '@/components/animated-number'
import { JsonLd } from '@/components/json-ld'
import { Button } from '@/components/button'
import { HeroAnimation } from '@/components/hero-animation'
import { SEOVisual } from '@/components/seo-visual'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { AIAgentsShowcase } from '@/components/ai-agents-showcase'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import { testimonials } from '@/data/testimonials'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About TheProjectSEO | Leading SEO Agency',
  description:
    'Meet the team behind TheProjectSEO. We\'re on a mission to help businesses dominate search rankings through data-driven SEO strategies.',
  alternates: {
    canonical: '/company',
  },
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">We help businesses dominate search rankings.</Heading>
      <Lead className="mt-6 max-w-3xl">
        We&apos;re on a mission to transform how businesses approach SEO by providing
        data-driven strategies that deliver measurable results and sustained growth.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="font-heading text-2xl font-medium tracking-tight text-ink">Our mission</h2>
          <p className="mt-6 font-display italic text-lg/7 text-slate">
            At TheProjectSEO, we are dedicated to transforming how businesses approach
            search engine optimization. Our mission is to provide our clients with a
            competitive advantage through deep SEO insights, advanced analytics, and
            proven strategies that drive real business results.
          </p>
          <p className="mt-8 text-sm/6 font-sans text-ash">
            We&apos;re obsessed with staying ahead of Google&apos;s algorithm changes and understanding
            what makes websites rank. Every strategy we develop is backed by data, tested
            rigorously, and customized to your business goals. We don&apos;t just promise rankings
            – we deliver sustainable growth that translates to increased revenue.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <SEOVisual type="ranking" label="Ranking Trends" />
            <div className="-mt-8 lg:-mt-32">
              <SEOVisual type="keywords" label="Keyword Research" />
            </div>
            <SEOVisual type="traffic" label="Traffic Growth" />
            <div className="-mt-8 lg:-mt-32">
              <SEOVisual type="conversion" label="Conversion Optimization" />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Numbers</Subheading>
          <hr className="mt-6 border-t border-border" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-border pb-4">
              <dt className="text-sm/6 font-sans text-ash">Websites Ranked #1</dt>
              <dd className="order-first font-heading text-6xl font-medium tracking-tight text-ink">
                <AnimatedNumber start={400} end={500} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-border pb-4">
              <dt className="text-sm/6 font-sans text-ash">Average Traffic Increase</dt>
              <dd className="order-first font-heading text-6xl font-medium tracking-tight text-ink">
                <AnimatedNumber start={200} end={340} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-border max-sm:pb-4">
              <dt className="text-sm/6 font-sans text-ash">Years of Experience</dt>
              <dd className="order-first font-heading text-6xl font-medium tracking-tight text-ink">
                <AnimatedNumber start={8} end={12} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 font-sans text-ash">SEO Projects Completed</dt>
              <dd className="order-first font-heading text-6xl font-medium tracking-tight text-ink">
                <AnimatedNumber start={800} end={1200} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

const teamMembers = [
  {
    name: 'Aditya Aman',
    role: 'Founder & SEO Consultant',
    focus: 'Systems & Processes',
    bio: 'With 10+ years in SEO, Aditya has helped 500+ websites achieve top rankings. He focuses on building repeatable systems and processes that deliver predictable organic growth.',
    image: '/team/aditya-aman.png',
    linkedin: 'https://www.linkedin.com/in/adityaaman/',
  },
  {
    name: 'Siraj Akmal',
    role: 'Technical Lead',
    focus: 'Technical SEO',
    bio: 'Siraj leads our technical SEO practice — from site architecture and crawl optimization to Core Web Vitals and schema implementation.',
    image: '/team/siraj-akmal.png',
    linkedin: 'https://www.linkedin.com/in/shiraz100/',
  },
  {
    name: 'Vaibhav Singh',
    role: 'Project Lead',
    focus: 'Strategy & Delivery',
    bio: 'Vaibhav manages client engagements end-to-end, ensuring every project stays on track and delivers against KPIs.',
    image: '/team/vaibhav-singh.png',
    linkedin: 'https://www.linkedin.com/in/vaibhav-singh-2522b3174/',
  },
  {
    name: 'Smit Dholakiya',
    role: 'SEO Executive',
    focus: 'On-Page & Content',
    bio: 'Smit specializes in on-page optimization and content strategy, turning keyword research into high-ranking content.',
    image: '/team/smit-dholakiya.png',
    linkedin: 'https://www.linkedin.com/in/smit-dholakiya/',
  },
  {
    name: 'Mohd. Rushan',
    role: 'SEO Executive',
    focus: 'Link Building & Outreach',
    bio: 'Rushan drives our link building campaigns, securing high-quality backlinks through strategic outreach and digital PR.',
    image: '/team/mohd-rushan.jpeg',
    linkedin: 'https://www.linkedin.com/in/mohd-rushan/',
  },
]

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        A lean team that delivers outsized results.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We&apos;re not a bloated agency with layers of account managers between you and the
        people doing the work. You get direct access to the specialists driving your growth.
      </Lead>

      {/* Founder spotlight */}
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        <div className="max-lg:order-last">
          <a href={teamMembers[0].linkedin} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="overflow-hidden border border-border-strong">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/team/aditya-aman.png"
                  alt="Aditya Aman"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-6 pt-16">
                  <div className="flex items-center gap-2">
                    <div className="font-heading text-lg font-semibold text-white">Aditya Aman</div>
                    <Linkedin className="size-4 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-accent">Founder & SEO Consultant</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="max-w-lg">
          <p className="text-sm/6 font-sans text-ash">
            Aditya started in SEO over 10 years ago. Through countless algorithm updates —
            from Panda and Penguin to BERT, Helpful Content, and AI Overviews — he has
            consistently stayed ahead of the curve, helping businesses not just survive
            but thrive in search results.
          </p>
          <p className="mt-8 text-sm/6 font-sans text-ash">
            His focus is on building systems and processes that make SEO predictable.
            Every strategy at TheProjectSEO is built on data, tested rigorously, and
            designed to deliver bottom-line results — not just traffic vanity metrics.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="/contact">
              Work with us
            </Button>
          </div>
        </div>
      </div>

      {/* Rest of team */}
      <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="mt-6 border-t border-border" />
      <div className="mt-12 grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.slice(1).map((member) => (
          <div key={member.name} className="group bg-paper p-8">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative mb-5 size-20 overflow-hidden rounded-full border-2 border-accent/20">
                <Image src={member.image} alt={member.name} width={80} height={80} className="size-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-all group-hover:bg-ink/40">
                  <Linkedin className="size-4 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
              <h3 className="font-heading text-base font-semibold text-ink">{member.name}</h3>
            </a>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-accent mt-1">{member.role}</p>
            <p className="text-xs text-ash mt-1 mb-4">{member.focus}</p>
            <p className="text-sm text-slate leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function WhyWe() {
  return (
    <Container className="mt-32">
      <Subheading>Why TheProjectSEO</Subheading>
      <Heading as="h3" className="mt-2">
        What makes us different.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We don&apos;t just follow SEO best practices – we create them. Our data-driven
        approach and commitment to staying ahead of algorithm changes sets us apart.
      </Lead>

      <div className="mt-16 space-y-0">
        <div className="border-b border-border py-8">
          <div className="flex gap-6">
            <span className="font-mono text-sm font-semibold text-accent">01</span>
            <div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Data-Driven Approach</h3>
              <p className="font-sans text-ash">
                Every recommendation we make is backed by extensive data analysis and testing.
                We don&apos;t guess – we prove what works.
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-border py-8">
          <div className="flex gap-6">
            <span className="font-mono text-sm font-semibold text-accent">02</span>
            <div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Algorithm Expertise</h3>
              <p className="font-sans text-ash">
                With 12+ years of experience, we&apos;ve weathered every major algorithm update
                and know how to adapt quickly to changes.
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-border py-8">
          <div className="flex gap-6">
            <span className="font-mono text-sm font-semibold text-accent">03</span>
            <div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Transparent Reporting</h3>
              <p className="font-sans text-ash">
                You&apos;ll always know exactly what we&apos;re working on and how it&apos;s impacting
                your rankings and traffic through detailed monthly reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function Testimonial() {
  const t = testimonials[0] // Caleb Hoon

  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-none sm:aspect-5/4 lg:aspect-3/4">
        <HeroAnimation />
      <div className="absolute inset-0 bg-accent"></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-none bg-linear-to-t from-black from-10% to-75% ring-1 ring-ink/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative font-display italic text-xl/7 text-white lg:text-4xl">
            {t.quote.length > 200 ? t.quote.slice(0, 200).trim() + '...' : t.quote}
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-heading font-medium text-white">{t.author}</p>
          <p className="text-sm/6 font-mono">
            <span className="text-white/70">
              {t.role}, {t.company}
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function GetStarted() {
  return (
    <Container className="my-32">
      <Subheading>Get Started</Subheading>
      <Heading as="h3" className="mt-2">
        Ready to dominate search rankings?
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Join 500+ businesses that trust TheProjectSEO to drive their organic growth.
        Let&apos;s discuss how we can help your business rank #1.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Our Process</Subheading>
          <div className="mt-8 space-y-0">
            <div className="border-b border-border py-6 flex gap-6">
              <span className="font-mono text-sm font-semibold text-accent flex-shrink-0 mt-1">01</span>
              <div>
                <h4 className="font-heading font-semibold text-ink mb-2">Free SEO Audit</h4>
                <p className="font-sans text-ash text-sm">
                  We start with a comprehensive analysis of your website to identify
                  opportunities and create a customized strategy.
                </p>
              </div>
            </div>

            <div className="border-b border-border py-6 flex gap-6">
              <span className="font-mono text-sm font-semibold text-accent flex-shrink-0 mt-1">02</span>
              <div>
                <h4 className="font-heading font-semibold text-ink mb-2">Strategy Development</h4>
                <p className="font-sans text-ash text-sm">
                  Based on the audit, we develop a data-driven SEO strategy tailored
                  to your business goals and competitive landscape.
                </p>
              </div>
            </div>

            <div className="border-b border-border py-6 flex gap-6">
              <span className="font-mono text-sm font-semibold text-accent flex-shrink-0 mt-1">03</span>
              <div>
                <h4 className="font-heading font-semibold text-ink mb-2">Implementation & Optimization</h4>
                <p className="font-sans text-ash text-sm">
                  We execute the strategy with precision, continuously monitoring and
                  optimizing for maximum results.
                </p>
              </div>
            </div>

            <div className="border-b border-border py-6 flex gap-6">
              <span className="font-mono text-sm font-semibold text-accent flex-shrink-0 mt-1">04</span>
              <div>
                <h4 className="font-heading font-semibold text-ink mb-2">Growth & Reporting</h4>
                <p className="font-sans text-ash text-sm">
                  Watch your rankings and traffic grow while receiving detailed monthly
                  reports on progress and ROI.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Get Your Free SEO Audit</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About TheProjectSEO',
          description: 'Learn about our SEO agency...',
          url: 'https://theprojectseo.com/company',
        }}
      />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <WhyWe />
      <AIAgentsShowcase
        subheading="AI-Powered SEO"
        heading="Human expertise amplified by AI agents."
        lead="Our team is backed by 8 specialized AI agents that execute, monitor, and optimize around the clock — giving you the advantage of tireless, data-driven SEO at every level."
      />
      <GetStarted />
      <Footer />
    </main>
  )
}
