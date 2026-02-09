import { clsx } from 'clsx'

export function Logo({
  className,
  variant = 'default',
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  variant?: 'default' | 'reversed'
}) {
  const isReversed = variant === 'reversed'

  return (
    <div className={clsx('flex items-center gap-1.5', className)} {...props}>
      <span
        className={clsx(
          'font-heading text-base font-bold tracking-tight',
          isReversed ? 'text-white' : 'text-ink'
        )}
      >
        The Project
      </span>
      <span
        className={clsx(
          'h-5 w-px',
          isReversed ? 'bg-white/30' : 'bg-ink/30'
        )}
        aria-hidden="true"
      />
      <span className="font-display text-base font-semibold tracking-tight text-accent">
        SEO
      </span>
    </div>
  )
}
