'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ProcessSectionAnimatedProps {
  subheading?: string
  heading: string
  steps: ProcessStep[]
  className?: string
}

export function ProcessSectionAnimated({
  subheading = 'Our Process',
  heading,
  steps,
  className = '',
}: ProcessSectionAnimatedProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className={`bg-paper py-24 ${className}`} ref={ref}>
      <Container>
        <div className="text-center mb-16">
          <Subheading>{subheading}</Subheading>
          <Heading as="h2" className="mt-2">
            {heading}
          </Heading>
        </div>

        <div className="mx-auto max-w-3xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94], // power2.out
              }}
              className={`py-8 ${index < steps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}
