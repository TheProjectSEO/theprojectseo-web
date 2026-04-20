'use client'

import { useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

interface AvatarProps {
  name: string
  src?: string
  size?: number
  className?: string
}

/**
 * Graceful-fallback avatar. Renders initials on a branded circle
 * when the image fails to load or src is missing. When photos are
 * added to /public/team/ or /public/testimonials/, the component
 * silently upgrades to real images with zero other code changes.
 */
export function Avatar({ name, src, size = 96, className }: AvatarProps) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed
  const initials = getInitials(name)

  return (
    <div
      className={clsx(
        'relative inline-flex items-center justify-center overflow-hidden rounded-full',
        'bg-gradient-to-br from-accent/25 via-accent/10 to-accent/5',
        'font-heading font-semibold text-ink select-none',
        className,
      )}
      style={{ width: size, height: size }}
      aria-label={name}
    >
      {showImage ? (
        <Image
          src={src!}
          alt={name}
          fill
          sizes={`${size}px`}
          className="object-cover object-top"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className="tracking-tight"
          style={{ fontSize: Math.max(12, Math.round(size * 0.34)) }}
        >
          {initials}
        </span>
      )}
    </div>
  )
}

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return '?'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  const first = words[0][0] ?? ''
  const last = words[words.length - 1][0] ?? ''
  return (first + last).toUpperCase()
}
