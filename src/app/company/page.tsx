import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import UnicornBackground from '@/components/unicorn-background'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About TheProjectSEO | Leading SEO Agency',
  description:
    'Meet the team behind TheProjectSEO. We\'re on a mission to help businesses dominate search rankings through data-driven SEO strategies.',
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
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            At TheProjectSEO, we are dedicated to transforming how businesses approach 
            search engine optimization. Our mission is to provide our clients with a 
            competitive advantage through deep SEO insights, advanced analytics, and 
            proven strategies that drive real business results.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            We&apos;re obsessed with staying ahead of Google&apos;s algorithm changes and understanding 
            what makes websites rank. Every strategy we develop is backed by data, tested 
            rigorously, and customized to your business goals. We don&apos;t just promise rankings 
            – we deliver sustainable growth that translates to increased revenue.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <p className="text-gray-500 text-sm">SEO Analysis</p>
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-sm">Keyword Research</p>
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <p className="text-gray-500 text-sm">Content Strategy</p>
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <p className="text-gray-500 text-sm">Rankings Growth</p>
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Numbers</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Websites Ranked #1</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={400} end={500} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Average Traffic Increase</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={100} end={150} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Years of Experience</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={8} end={12} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">SEO Projects Completed</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
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
      <div className={`size-12 rounded-full ${img} flex items-center justify-center text-white font-medium text-sm`}>
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
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
          <p className="text-sm/6 text-gray-600">
            Our founder, Alex Rodriguez, started in SEO over 12 years ago when Google&apos;s 
            algorithm was much simpler. Through countless algorithm updates, from Panda 
            and Penguin to BERT and Core Web Vitals, Alex has consistently stayed ahead 
            of the curve, helping businesses not just survive but thrive in search results.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
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
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Team Photo</p>
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Alex Rodriguez"
          description="Founder & Lead SEO Strategist"
          img="bg-gray-400"
        />
        <Person
          name="Sarah Kim"
          description="Technical SEO Director"
          img="bg-gray-500"
        />
        <Person
          name="Michael Chen"
          description="Content Strategy Manager"
          img="bg-gray-600"
        />
        <Person
          name="Jessica Taylor"
          description="Local SEO Specialist"
          img="bg-gray-700"
        />
        <Person
          name="David Park"
          description="SEO Analytics Expert"
          img="bg-gray-800"
        />
        <Person
          name="Emily Johnson"
          description="Link Building Manager"
          img="bg-gray-500"
        />
        <Person
          name="Robert Martinez"
          description="E-commerce SEO Lead"
          img="bg-gray-600"
        />
        <Person
          name="Lisa Wong"
          description="International SEO Consultant"
          img="bg-gray-700"
        />
        <Person
          name="James Wilson"
          description="SEO Tools & Automation"
          img="bg-gray-400"
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
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
          <div className="size-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <span className="text-gray-950 font-semibold">01</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Data-Driven Approach</h3>
          <p className="text-gray-600">
            Every recommendation we make is backed by extensive data analysis and testing. 
            We don&apos;t guess – we prove what works.
          </p>
        </div>
        
        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
          <div className="size-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <span className="text-gray-950 font-semibold">02</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Algorithm Expertise</h3>
          <p className="text-gray-600">
            With 12+ years of experience, we&apos;ve weathered every major algorithm update 
            and know how to adapt quickly to changes.
          </p>
        </div>
        
        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
          <div className="size-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <span className="text-gray-950 font-semibold">03</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Transparent Reporting</h3>
          <p className="text-gray-600">
            You&apos;ll always know exactly what we&apos;re working on and how it&apos;s impacting 
            your rankings and traffic through detailed monthly reports.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white lg:text-4xl">
            TheProjectSEO increased our organic traffic by 340% in just 8 months. 
            The ROI has been incredible.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">David Thompson</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#e8f0e0] from-28% via-[#7a9471] via-70% to-[#4a5e42] bg-clip-text text-transparent">
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
          <div className="mt-8 space-y-8">
            <div className="flex gap-6">
              <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gray-950 font-semibold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Free SEO Audit</h4>
                <p className="text-gray-600 text-sm">
                  We start with a comprehensive analysis of your website to identify 
                  opportunities and create a customized strategy.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gray-950 font-semibold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Strategy Development</h4>
                <p className="text-gray-600 text-sm">
                  Based on the audit, we develop a data-driven SEO strategy tailored 
                  to your business goals and competitive landscape.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gray-950 font-semibold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Implementation & Optimization</h4>
                <p className="text-gray-600 text-sm">
                  We execute the strategy with precision, continuously monitoring and 
                  optimizing for maximum results.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-gray-950 font-semibold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Growth & Reporting</h4>
                <p className="text-gray-600 text-sm">
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
      <UnicornBackground />
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