import Image from 'next/image'
import type { EvidenceAsset } from '@/data/evidence-assets'
import {
  getEvidenceGraphic,
  type EvidenceGraphic,
} from '@/components/evidence-graphics'

type EvidencePlaceholderProps = {
  label: string
  description: string
  aspect?: 'landscape' | 'wide'
  className?: string
  asset?: EvidenceAsset
  graphic?: EvidenceGraphic
}

/**
 * A deliberately empty slot for first-party screenshots and diagrams.
 *
 * Keep these slots visible in preview builds so the final crop, caption, and
 * surrounding layout can be approved before an image is supplied. Replace the
 * inner content with next/image when the approved asset is available.
 */
export function EvidencePlaceholder({
  label,
  description,
  className = '',
  asset,
  graphic,
}: EvidencePlaceholderProps) {
  const resolvedGraphic = graphic ?? (!asset ? getEvidenceGraphic(label) : undefined)
  const source = asset?.source ?? resolvedGraphic?.source
  const reportingWindow = asset?.reportingWindow ?? resolvedGraphic?.reportingWindow
  const captureDate = asset?.captureDate ?? resolvedGraphic?.captureDate
  const badgeLabel = asset ? 'Verified capture' : resolvedGraphic?.badgeLabel
  const dateLabel = asset ? 'Captured' : (resolvedGraphic?.dateLabel ?? 'Captured')

  return (
    <figure
      data-evidence-slot={label}
      data-evidence-ready="true"
      className={`group relative isolate overflow-hidden border border-border-strong bg-paper shadow-md ${className}`}
    >
      <p className="sr-only">{description}</p>
      <div className="flex items-center justify-between gap-3 border-b border-border bg-paper px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="size-2 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(122,38,58,0.10)]"
          />
          <span className="truncate font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-stone">
            {source}
          </span>
        </div>
        <span className="shrink-0 bg-action px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ink">
          {badgeLabel}
        </span>
      </div>

      <div className="relative overflow-hidden bg-[linear-gradient(135deg,#e9e1e2_0%,#f7f5f3_52%,#e4e9ec_100%)] p-3 sm:p-5">
        <div
          aria-hidden="true"
          className="absolute -right-14 -top-14 size-40 rounded-full border border-accent/15 shadow-[0_0_0_24px_rgba(73,103,122,0.05),0_0_0_48px_rgba(122,38,58,0.03)]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-4 h-px w-24 bg-action"
        />
        <div className="relative overflow-hidden border border-ink/15 bg-white shadow-xl transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {asset ? (
            <Image
              src={asset.src}
              alt={asset.alt}
              width={asset.width}
              height={asset.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          ) : (
            resolvedGraphic?.content
          )}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/50"
          />
        </div>
      </div>

      <figcaption className="grid gap-2 border-t border-border bg-paper px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-end sm:px-5">
        <span className="text-sm font-semibold leading-5 text-ink">{label}</span>
        <span className="font-mono text-[9px] uppercase leading-4 tracking-[0.09em] text-ash sm:text-right">
          {reportingWindow}
          <br />
          {dateLabel} {captureDate}
        </span>
      </figcaption>
    </figure>
  )
}
