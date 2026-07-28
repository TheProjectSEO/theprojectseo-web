import { clsx } from "clsx";

type HeadingProps = {
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  dark?: boolean;
} & React.ComponentPropsWithoutRef<
  "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
>;

export function Heading({
  className,
  as: Element = "h2",
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "font-display text-[clamp(36px,5vw,68px)] font-medium leading-[1.02] tracking-[-0.035em] text-ink data-dark:text-white",
      )}
    />
  );
}

export function Subheading({
  className,
  as: Element = "h2",
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "font-mono text-xs font-semibold tracking-[0.16em] text-accent uppercase data-dark:text-accent",
      )}
    />
  );
}

export function Lead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={clsx(
        className,
        "font-sans text-xl leading-relaxed text-stone max-w-2xl",
      )}
      {...props}
    />
  );
}
