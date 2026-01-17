import { clsx } from 'clsx'

export function Logo({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
      {...props}
    >
      <text
        x="10"
        y="28"
        fontSize="16"
        fontWeight="bold"
        fill="currentColor"
        className="font-sans"
      >
        TheProjectSEO
      </text>
    </svg>
  )
}