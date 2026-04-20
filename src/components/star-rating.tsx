import { Star } from 'lucide-react'
import { clsx } from 'clsx'

type StarRatingProps = {
  value?: number // 0–5, supports halves via rounding to .5
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZES = {
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-5',
}

export function StarRating({ value = 5, size = 'md', className }: StarRatingProps) {
  const clamped = Math.max(0, Math.min(5, value))
  return (
    <div className={clsx('flex items-center gap-0.5', className)} aria-label={`Rating ${clamped} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = clamped >= i + 1
        return (
          <Star
            key={i}
            className={clsx(SIZES[size], filled ? 'fill-accent text-accent' : 'text-accent/30')}
            aria-hidden="true"
          />
        )
      })}
    </div>
  )
}
