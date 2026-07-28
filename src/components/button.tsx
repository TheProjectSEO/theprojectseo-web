import * as Headless from "@headlessui/react";
import { clsx } from "clsx";
import { Link } from "./link";

const variants = {
  action: clsx(
    "inline-flex min-h-12 items-center justify-center px-6 py-3",
    "rounded-md border border-action bg-action shadow-sm",
    "text-sm font-heading font-bold tracking-[-0.01em] whitespace-nowrap text-ink",
    "transition-all duration-200",
    "data-disabled:bg-action/40 data-disabled:opacity-40",
    "data-hover:border-ink data-hover:bg-ink data-hover:text-white data-hover:shadow-md data-hover:-translate-y-px",
  ),
  solid: clsx(
    "inline-flex min-h-12 items-center justify-center px-6 py-3",
    "rounded-md border border-accent bg-accent shadow-sm",
    "text-sm font-heading font-bold tracking-[-0.01em] whitespace-nowrap text-white",
    "transition-all duration-200",
    "data-disabled:bg-accent/40 data-disabled:opacity-40",
    "data-hover:border-ink data-hover:bg-ink data-hover:shadow-md data-hover:-translate-y-px",
  ),
  ghost: clsx(
    "inline-flex min-h-12 items-center justify-center px-6 py-3",
    "rounded-md bg-transparent border border-accent",
    "text-sm font-heading font-bold tracking-[-0.01em] whitespace-nowrap text-accent",
    "transition-all duration-200",
    "data-disabled:opacity-40",
    "data-hover:bg-accent-soft",
  ),
  outline: clsx(
    "inline-flex min-h-12 items-center justify-center px-6 py-3",
    "rounded-md border border-border-emphasis",
    "text-sm font-heading font-bold tracking-[-0.01em] whitespace-nowrap text-stone",
    "transition-all duration-200",
    "data-disabled:opacity-40",
    "data-hover:bg-cream",
  ),
};

type ButtonProps = {
  variant?: keyof typeof variants;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
);

export function Button({
  variant = "solid",
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant]);

  if (typeof props.href === "undefined") {
    return <Headless.Button {...props} className={className} />;
  }

  return <Link {...props} className={className} />;
}
