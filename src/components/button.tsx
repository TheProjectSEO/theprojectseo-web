import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  solid: clsx(
    'inline-flex items-center justify-center px-6 py-3',
    'rounded-md bg-accent shadow-sm',
    'text-base font-heading font-semibold whitespace-nowrap text-white',
    'transition-all duration-200',
    'data-disabled:bg-accent/40 data-disabled:opacity-40',
    'data-hover:bg-accent-hover data-hover:shadow-md data-hover:-translate-y-px',
  ),
  ghost: clsx(
    'inline-flex items-center justify-center px-6 py-3',
    'rounded-md bg-transparent border-[1.5px] border-accent',
    'text-base font-heading font-semibold whitespace-nowrap text-accent',
    'transition-all duration-200',
    'data-disabled:opacity-40',
    'data-hover:bg-accent-soft',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-6 py-3',
    'rounded-md border border-border-emphasis',
    'text-base font-heading font-medium whitespace-nowrap text-stone',
    'transition-all duration-200',
    'data-disabled:opacity-40',
    'data-hover:bg-cream',
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'solid',
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
