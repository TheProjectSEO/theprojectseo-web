'use client'

/**
 * Scroll Reveal Animation Component
 *
 * Inspired by Slate's content engineering approach animation.
 * Uses Intersection Observer for scroll-triggered reveals with staggered entrance.
 *
 * Design: Progressive disclosure - elements fade in and slide up as you scroll.
 * Performance: Uses CSS transforms (GPU-accelerated) and IntersectionObserver (native browser API).
 */

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  /** Delay in ms before animation starts after intersection (default: 0) */
  delay?: number
  /** Stagger delay between multiple children in ms (default: 150) */
  stagger?: number
  /** Animation duration in ms (default: 800) */
  duration?: number
  /** Threshold for intersection observer (default: 0.1) */
  threshold?: number
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  stagger = 150,
  duration = 800,
  threshold = 0.1,
  className = '',
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [threshold, isVisible])

  return (
    <div ref={containerRef} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className="transition-all"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay + index * stagger}ms`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}

/**
 * Scroll Reveal Grid - Optimized for gap-px grid patterns
 *
 * Animates grid items with staggered entrance while maintaining
 * the design system's borderless grid pattern.
 */

interface ScrollRevealGridProps {
  children: React.ReactNode[]
  /** Grid columns (e.g., 'sm:grid-cols-2 lg:grid-cols-3') */
  gridCols: string
  /** Stagger delay between items in ms (default: 100) */
  stagger?: number
  /** Animation duration in ms (default: 600) */
  duration?: number
  className?: string
}

export function ScrollRevealGrid({
  children,
  gridCols,
  stagger = 100,
  duration = 600,
  className = '',
}: ScrollRevealGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.05 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [isVisible])

  return (
    <div
      ref={containerRef}
      className={`grid ${gridCols} gap-px bg-border-strong ${className}`}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className="transition-all"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
            transitionDuration: `${duration}ms`,
            transitionDelay: `${index * stagger}ms`,
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
