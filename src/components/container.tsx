import { clsx } from 'clsx'

export function Container({
  className,
  children,
  ...props
}: {
  className?: string
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx(className, 'px-6 lg:px-12')} {...props}>
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </div>
  )
}
