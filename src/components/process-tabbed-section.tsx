'use client'

import { useState } from 'react'
import { Container } from '@/components/container'
import { Subheading } from '@/components/text'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface ProcessStep {
  number: string
  title: string
  description: string
  image?: string
}

interface ProcessTabbedSectionProps {
  subheading?: string
  heading: string
  steps: ProcessStep[]
  className?: string
  visual?: React.ReactNode // Custom visual component
  visualBg?: 'accent' | 'ink' | 'cream' // Background control for right panel
}

export function ProcessTabbedSection({
  subheading = 'Our Process',
  heading,
  steps,
  className = '',
  visual,
  visualBg = 'cream',
}: ProcessTabbedSectionProps) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className={`bg-cream py-24 ${className}`}>
      <Container>
        <div className="text-center mb-16">
          <Subheading>{subheading}</Subheading>
          <h2 className="mt-2 font-display text-[clamp(36px,5vw,72px)] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
            {heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Tabs */}
          <div className="space-y-3">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left px-6 py-5 rounded-none border transition-all duration-300 ${
                  activeStep === index
                    ? 'border-accent bg-white shadow-md'
                    : 'border-border-strong bg-paper hover:bg-white hover:border-border-emphasis'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 size-10 rounded-full flex items-center justify-center font-mono text-sm font-semibold ${
                      activeStep === index
                        ? 'bg-accent text-white'
                        : 'bg-accent-soft text-accent'
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-heading text-lg font-semibold text-ink mb-1">
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        activeStep === index ? 'text-slate' : 'text-slate/70'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Image/Visual */}
          <div className={`rounded-none border border-border-strong p-8 flex items-center justify-center min-h-[500px] ${
            visualBg === 'accent' ? 'bg-accent' :
            visualBg === 'ink' ? 'bg-ink' :
            'bg-white'
          }`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {visual ? (
                  <div className="w-full">{visual}</div>
                ) : steps[activeStep].image ? (
                  <img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="space-y-6 text-center">
                    <div className={`size-20 mx-auto rounded-full flex items-center justify-center ${
                      visualBg === 'ink' ? 'bg-stone' : 'bg-accent'
                    }`}>
                      <CheckCircle className={`size-10 ${
                        visualBg === 'ink' ? 'text-paper' : 'text-white'
                      }`} />
                    </div>
                    <div>
                      <h4 className={`font-heading text-2xl font-semibold mb-3 ${
                        visualBg === 'ink' ? 'text-paper' : 'text-ink'
                      }`}>
                        {steps[activeStep].title}
                      </h4>
                      <p className={`leading-relaxed max-w-md mx-auto ${
                        visualBg === 'ink' ? 'text-ash' : 'text-slate'
                      }`}>
                        {steps[activeStep].description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  )
}
