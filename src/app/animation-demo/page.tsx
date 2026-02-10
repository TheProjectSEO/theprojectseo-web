'use client'

import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Research',
    description:
      'We analyze your industry, competitors, and target audience to identify high-impact SEO opportunities.',
    icon: MagnifyingGlassIcon,
  },
  {
    number: '02',
    title: 'Strategy Development',
    description:
      'We create a customized SEO roadmap aligned with your business goals and market positioning.',
    icon: DocumentTextIcon,
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Our team executes on-page, technical, and content optimizations with precision and expertise.',
    icon: WrenchScrewdriverIcon,
  },
  {
    number: '04',
    title: 'Performance Tracking',
    description:
      'We monitor rankings, traffic, and conversions with detailed analytics and reporting.',
    icon: ChartBarIcon,
  },
  {
    number: '05',
    title: 'Continuous Optimization',
    description:
      'We refine and improve your strategy based on data insights and algorithm updates.',
    icon: ArrowTrendingUpIcon,
  },
]

// Animation Variant 1: Slate-style (fade + slide up with stagger)
function ProcessAnimationV1() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-paper py-24" ref={ref}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-medium text-ink mb-4">
            Variant 1: Slate-Style (Fade + Slide Up)
          </h2>
          <p className="text-stone text-lg">
            Staggered reveal with upward motion
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94], // power2.out
              }}
              className="rounded-none border border-border-strong p-8 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="size-12 bg-accent-soft rounded-none mb-6 flex items-center justify-center">
                <step.icon className="size-6 text-accent" />
              </div>
              <div className="font-mono text-sm font-semibold text-accent mb-2">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-stone leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// Animation Variant 2: Scale + Fade (zoom effect)
function ProcessAnimationV2() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-cream py-24" ref={ref}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-medium text-ink mb-4">
            Variant 2: Scale + Fade (Zoom In)
          </h2>
          <p className="text-stone text-lg">Cards scale from 95% to 100%</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1], // spring-like
              }}
              className="rounded-none border border-border-strong p-8 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="size-12 bg-accent-soft rounded-none mb-6 flex items-center justify-center">
                <step.icon className="size-6 text-accent" />
              </div>
              <div className="font-mono text-sm font-semibold text-accent mb-2">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-stone leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// Animation Variant 3: Blur + Fade (elegant reveal)
function ProcessAnimationV3() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-paper py-24" ref={ref}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-medium text-ink mb-4">
            Variant 3: Blur + Fade (Soft Focus)
          </h2>
          <p className="text-stone text-lg">
            Elements come into focus as they appear
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={
                isInView
                  ? { opacity: 1, filter: 'blur(0px)' }
                  : { opacity: 0, filter: 'blur(10px)' }
              }
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: 'easeOut',
              }}
              className="rounded-none border border-border-strong p-8 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="size-12 bg-accent-soft rounded-none mb-6 flex items-center justify-center">
                <step.icon className="size-6 text-accent" />
              </div>
              <div className="font-mono text-sm font-semibold text-accent mb-2">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-stone leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// Animation Variant 4: Slide from Left (sequential)
function ProcessAnimationV4() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-cream py-24" ref={ref}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-medium text-ink mb-4">
            Variant 4: Slide from Left (Timeline)
          </h2>
          <p className="text-stone text-lg">
            Cards slide in from the left sequentially
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -50 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="rounded-none border border-border-strong p-8 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="size-12 bg-accent-soft rounded-none mb-6 flex items-center justify-center">
                <step.icon className="size-6 text-accent" />
              </div>
              <div className="font-mono text-sm font-semibold text-accent mb-2">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-stone leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default function AnimationDemoPage() {
  return (
    <main>
      <Container className="py-8">
        <Navbar />
      </Container>

      <section className="bg-ink py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-white mb-6">
              Scroll Animation <em className="text-accent italic">Demo</em>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Scroll down to see different animation variants for the Process
              section. Each variant triggers when it enters the viewport.
            </p>
          </div>
        </Container>
      </section>

      <ProcessAnimationV1 />
      <ProcessAnimationV2 />
      <ProcessAnimationV3 />
      <ProcessAnimationV4 />

      <section className="bg-paper py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl font-medium text-ink mb-6">
              Which variant do you prefer?
            </h2>
            <p className="text-stone text-lg mb-8">
              <strong>Variant 1</strong> is closest to Slate&apos;s approach -{' '}
              <br />
              subtle, professional, and effective.
            </p>
            <p className="text-stone">
              Let me know which animation style you&apos;d like to implement
              across your Process sections, or if you&apos;d like to see any
              modifications!
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
