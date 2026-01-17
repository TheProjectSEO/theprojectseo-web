import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-[#e8f0e0] from-28% via-[#7a9471] via-70% to-[#4a5e42] sm:bg-linear-145',
      )}
    />
  )
}