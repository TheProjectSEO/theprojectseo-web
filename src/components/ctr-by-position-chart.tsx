'use client'

/**
 * CTR-by-Google-position chart.
 *
 * Data is real: median organic CTR per rounded Google position across 16 client
 * properties in the TheProjectSEO data lake (69.6M impressions). Each site is
 * weighted equally (per-site median), so one high-impression property cannot skew
 * the curve. Numbers are static — regenerated from the lake, not fetched client-side.
 *
 * Built as hand-drawn inline SVG to match the site's charting idiom (see
 * seo-visual.tsx): no chart library, accent-colored line, and a screen-reader data
 * table so the figure is accessible AND citable by AI search engines.
 */

const DATA: { label: string; pct: number }[] = [
  { label: '#1', pct: 4.47 },
  { label: '#2', pct: 2.64 },
  { label: '#3', pct: 1.92 },
  { label: '#4', pct: 1.51 },
  { label: '#5', pct: 1.37 },
  { label: '#6', pct: 0.86 },
  { label: '#7', pct: 0.42 },
  { label: '#8', pct: 0.37 },
  { label: '#9', pct: 0.36 },
  { label: '#10', pct: 0.27 },
]

const W = 720
const H = 380
const PAD = { l: 48, r: 24, t: 32, b: 48 }
const PLOT_W = W - PAD.l - PAD.r
const PLOT_H = H - PAD.t - PAD.b
const VMAX = 5 // y-axis tops out at 5%

function x(i: number) {
  return PAD.l + (i / (DATA.length - 1)) * PLOT_W
}
function y(v: number) {
  return PAD.t + PLOT_H - (v / VMAX) * PLOT_H
}

export function CTRByPositionChart() {
  const points = DATA.map((d, i) => ({ ...d, cx: x(i), cy: y(d.pct) }))
  const poly = points.map((p) => `${p.cx.toFixed(1)},${p.cy.toFixed(1)}`).join(' ')
  const gridVals = [0, 1, 2, 3, 4, 5]

  return (
    <figure className="not-prose my-8 border border-border-strong bg-paper p-6 sm:p-8">
      <figcaption className="mb-1 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
        The click ceiling is falling
      </figcaption>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-stone">
        Median organic click-through rate by Google position, across 16 client
        properties we track. Even the #1 result now earns under 5% of clicks — AI
        Overviews and zero-click answers absorb the rest before a shopper reaches
        your store.
      </p>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Line chart: median organic CTR falls from 4.47% at position 1 to 0.27% at position 10"
        style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
      >
        {/* y gridlines + labels */}
        {gridVals.map((gv) => {
          const gy = y(gv)
          return (
            <g key={gv}>
              <line
                x1={PAD.l}
                y1={gy}
                x2={W - PAD.r}
                y2={gy}
                stroke="#0A0A0A"
                strokeWidth="0.5"
                opacity="0.12"
              />
              <text x={PAD.l - 10} y={gy + 4} textAnchor="end" fontSize="11" fill="#6B7280">
                {gv}%
              </text>
            </g>
          )
        })}

        {/* area under the line */}
        <polygon
          points={`${PAD.l},${PAD.t + PLOT_H} ${poly} ${W - PAD.r},${PAD.t + PLOT_H}`}
          fill="#D16847"
          opacity="0.06"
        />

        {/* the line */}
        <polyline points={poly} fill="none" stroke="#D16847" strokeWidth="2.5" />

        {/* points + value labels + x labels */}
        {points.map((p, i) => (
          <g key={p.label}>
            <circle cx={p.cx} cy={p.cy} r="3.5" fill="#D16847" />
            {(i === 0 || i === DATA.length - 1) && (
              <text
                x={p.cx}
                y={p.cy - 12}
                textAnchor={i === 0 ? 'start' : 'end'}
                fontSize="12"
                fontWeight="600"
                fill="#0A0A0A"
              >
                {p.pct}%
              </text>
            )}
            <text x={p.cx} y={PAD.t + PLOT_H + 22} textAnchor="middle" fontSize="11" fill="#6B7280">
              {p.label}
            </text>
          </g>
        ))}
      </svg>

      {/* screen-reader + AI-citable data table */}
      <table className="sr-only">
        <caption>Median organic CTR by Google position (16 TheProjectSEO client properties)</caption>
        <thead>
          <tr>
            <th>Google position</th>
            <th>Median CTR</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((d) => (
            <tr key={d.label}>
              <td>{d.label}</td>
              <td>{d.pct}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-ash">
        <span className="font-semibold text-stone">Method:</span> per-site median CTR per
        rounded position, each property weighted equally, 69.6M impressions across 16
        client sites. <span className="font-semibold text-stone">Source:</span>{' '}
        TheProjectSEO first-party Search Console data.
      </p>
    </figure>
  )
}
