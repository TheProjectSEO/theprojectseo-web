import { AnimatedNumber } from '@/components/animated-number'
import { JsonLd } from '@/components/json-ld'
import { Button } from '@/components/button'
import { HeroAnimation } from '@/components/hero-animation'
import { SEOVisual } from '@/components/seo-visual'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
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

function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <div className={`size-12 rounded-none ${img} flex items-center justify-center text-white font-heading font-medium text-sm`}>
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="text-sm/6">
        <h3 className="font-heading font-medium text-ink">{name}</h3>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Founded by SEO experts who deliver.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        TheProjectSEO is founded by seasoned SEO professionals with a combined 25+ years
        of experience helping businesses dominate search rankings.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 font-sans text-ash">
            Our founder, Alex Rodriguez, started in SEO over 12 years ago when Google&apos;s
            algorithm was much simpler. Through countless algorithm updates, from Panda
            and Penguin to BERT and Core Web Vitals, Alex has consistently stayed ahead
            of the curve, helping businesses not just survive but thrive in search results.
          </p>
          <p className="mt-8 text-sm/6 font-sans text-ash">
            Today, TheProjectSEO combines cutting-edge SEO technology with time-tested
            strategies. Our team of SEO specialists, content strategists, and technical
            experts work together to deliver results that matter – increased organic
            traffic, higher search rankings, and most importantly, more revenue for your business.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="/contact">
              Work with us
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-none shadow-xl border border-border-strong bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center p-12">
            <div className="grid grid-cols-3 gap-4 w-full">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-none bg-accent/20 flex items-center justify-center"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="size-8 rounded-full bg-accent/40" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="mt-6 border-t border-border" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Alex Rodriguez"
          description="Founder & Lead SEO Strategist"
          img="bg-accent"
        />
        <Person
          name="Sarah Kim"
          description="Technical SEO Director"
          img="bg-ink"
        />
        <Person
          name="Michael Chen"
          description="Content Strategy Manager"
          img="bg-accent"
        />
        <Person
          name="Jessica Taylor"
          description="Local SEO Specialist"
          img="bg-ink"
        />
        <Person
          name="David Park"
          description="SEO Analytics Expert"
          img="bg-accent"
        />
        <Person
          name="Emily Johnson"
          description="Link Building Manager"
          img="bg-ink"
        />
        <Person
          name="Robert Martinez"
          description="E-commerce SEO Lead"
          img="bg-accent"
        />
        <Person
          name="Lisa Wong"
          description="International SEO Consultant"
          img="bg-ink"
        />
        <Person
          name="James Wilson"
          description="SEO Tools & Automation"
          img="bg-accent"
        />
      </ul>
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
            TheProjectSEO increased our organic traffic by 340% in just 8 months.
            The ROI has been incredible.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-heading font-medium text-white">David Thompson</p>
          <p className="text-sm/6 font-mono">
            <span className="text-white/70">
              CEO, GrowthTech Solutions
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
      <GetStarted />
      <Footer />
    </main>
  )
}
