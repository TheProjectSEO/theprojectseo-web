import type { ReactNode } from "react";

type EditorialFigureProps = {
  number: number;
  title: string;
  description: string;
  lookFor: string;
  caption: string;
  sourceNote?: string;
  children: ReactNode;
  hero?: boolean;
  breakout?: boolean;
  assetKey?: string;
};

export function EditorialFigure({
  number,
  title,
  description,
  lookFor,
  caption,
  sourceNote,
  children,
  hero = false,
  breakout = false,
  assetKey,
}: EditorialFigureProps) {
  const titleId = `editorial-figure-${number}-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  return (
    <figure
      aria-labelledby={titleId}
      className={`${hero ? "mt-10" : "my-14"} ${
        breakout
          ? "relative left-1/2 w-[min(1180px,calc(100vw-2rem))] -translate-x-1/2"
          : ""
      } min-w-0`}
    >
      <div className="relative mr-2 pb-2">
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-2 translate-y-2 bg-signal/18"
        />
        <div className="relative overflow-hidden border border-ink/20 bg-paper">
          <div className="flex flex-col gap-2 border-b border-white/15 bg-ink px-5 py-4 text-white sm:flex-row sm:items-baseline sm:justify-between">
            <div className="flex items-baseline gap-3">
              <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.13em] text-action">
                Figure {String(number).padStart(2, "0")}
              </span>
              <strong
                id={titleId}
                className="font-heading text-sm font-semibold sm:text-base"
              >
                {title}
              </strong>
            </div>
            {sourceNote && (
              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/55">
                {sourceNote}
              </span>
            )}
          </div>

          <p className="sr-only">{description}</p>
          <div
            data-figure-art={String(number).padStart(2, "0")}
            data-figure-key={assetKey}
            data-hero-art={hero ? "true" : undefined}
            className="bg-paper"
          >
            {children}
          </div>

          <div className="grid gap-px border-t border-border bg-border sm:grid-cols-[9rem_minmax(0,1fr)]">
            <div className="bg-action px-5 py-4 text-ink">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em]">
                Look here
              </p>
              <p className="mt-1 font-heading text-sm font-semibold">
                {String(number).padStart(2, "0")}
              </p>
            </div>
            <div className="bg-white px-5 py-4">
              <p className="text-sm leading-6 text-stone">{lookFor}</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption
        className={`mt-4 grid gap-2 border-l-2 border-accent pl-4 text-xs leading-6 text-ash ${
          sourceNote
            ? "sm:grid-cols-[minmax(0,1fr)_18rem] sm:gap-8"
            : ""
        }`}
      >
        <span>{caption}</span>
        {sourceNote && <span className="sm:text-right">{sourceNote}</span>}
      </figcaption>
    </figure>
  );
}
