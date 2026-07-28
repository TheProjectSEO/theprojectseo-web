import { ImageIcon } from 'lucide-react'

type EvidencePlaceholderProps = {
  label: string
  description: string
  aspect?: 'landscape' | 'wide'
  className?: string
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
  aspect = 'landscape',
  className = '',
}: EvidencePlaceholderProps) {
  return (
    <figure
      data-evidence-slot={label}
      className={`border border-dashed border-border-emphasis bg-cream/50 p-4 ${className}`}
    >
      <div
        className={`flex items-center justify-center border border-border bg-paper ${
          aspect === 'wide' ? 'aspect-[16/7]' : 'aspect-[16/10]'
        }`}
      >
        <div className="max-w-md px-8 text-center">
          <ImageIcon aria-hidden="true" className="mx-auto size-7 text-ash/60" />
          <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
            Image reserved
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ash">
        {label}
      </figcaption>
    </figure>
  )
}
