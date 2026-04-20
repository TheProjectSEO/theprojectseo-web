import fs from 'fs';
import path from 'path';
import type { MetadataRoute } from 'next';
import { prefixedLocales } from '@/lib/i18n';
import { redirects } from '@/data/redirects';

const BASE_URL = 'https://theprojectseo.com';
const APP_DIR = path.join(process.cwd(), 'src', 'app');

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Convert an app-relative path segment to a public URL path */
function segmentToUrlPath(segment: string): string {
  // Strips trailing /page.tsx and leading src/app
  return segment
    .replace(/\/page\.tsx$/, '')
    .replace(/^\//, '')
    .replace(/\/$/, '');
}

/** Determine priority by URL prefix convention */
function getPriority(urlPath: string): number {
  if (urlPath === '') return 1.0;
  if (urlPath.startsWith('services')) return urlPath === 'services' ? 0.9 : 0.8;
  if (urlPath.startsWith('industries')) return 0.8;
  if (urlPath.startsWith('locations')) return 0.8;
  if (urlPath.startsWith('blog')) return 0.7;
  if (urlPath === 'pricing' || urlPath === 'contact') return 0.9;
  if (urlPath === 'company') return 0.8;
  if (urlPath === 'privacy' || urlPath === 'terms') return 0.3;
  return 0.7;
}

/** Determine changeFrequency by URL prefix convention */
function getChangeFreq(
  urlPath: string
): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (urlPath === '') return 'weekly';
  if (urlPath.startsWith('blog')) return urlPath === 'blog' ? 'weekly' : 'monthly';
  if (urlPath === 'privacy' || urlPath === 'terms') return 'yearly';
  return 'monthly';
}

/**
 * Recursively collect all page.tsx paths under a directory.
 * Returns paths relative to APP_DIR (e.g. "/blog/page.tsx").
 *
 * Excludes:
 *  - directories containing `[` (dynamic routes — enumerated separately)
 *  - /admin/ (robots-blocked, not for sitemap)
 *  - /animation-demo/ (internal demo, not for sitemap)
 *  - /demo/ (internal demo, not for sitemap)
 */
function collectStaticPages(dir: string, base = ''): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const name = entry.name;
    const rel = `${base}/${name}`;

    if (entry.isDirectory()) {
      // Skip dynamic segment directories
      if (name.includes('[')) continue;
      // Skip internal/admin segments
      if (name === 'admin' || name === 'animation-demo' || name === 'demo') continue;
      results.push(...collectStaticPages(path.join(dir, name), rel));
    } else if (name === 'page.tsx') {
      results.push(`${base}/page.tsx`);
    }
  }

  return results;
}

// ─── Build redirect exclusion set ───────────────────────────────────────────
// Pages whose source URL is in the redirect table should NOT appear in sitemap.
// (They 301 elsewhere; Google ignores them in the sitemap anyway.)
const redirectSources = new Set(
  redirects
    .filter((r) => r.permanent)
    .map((r) => r.source.replace(/^\//, '')) // strip leading slash
);

// ─── Sitemap export ──────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // 1. Auto-discovered static pages
  const staticPaths = collectStaticPages(APP_DIR);

  for (const rel of staticPaths) {
    const urlPath = segmentToUrlPath(rel);

    // Skip redirected sources
    if (redirectSources.has(urlPath)) continue;

    const url = urlPath === '' ? BASE_URL : `${BASE_URL}/${urlPath}`;

    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: getChangeFreq(urlPath),
      priority: getPriority(urlPath),
    });
  }

  // 2. Locale stub homepages (from [lang]/page.tsx — excluded by static scan)
  //    These ARE in sitemap so Google discovers them and sees the hreflang.
  //    robots: noindex is set on the page itself so they won't rank yet.
  for (const locale of prefixedLocales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  }

  // NOTE: /methodology and /case-studies/* URLs were previously declared here
  // but no page.tsx files exist — Google was crawling 404s. Stripped 2026-04-19
  // per IA redesign plan. Will be re-added once pages are built in Phase 1.
  // See ~/.claude/plans/do-a-comprehensive-research-expressive-pebble.md §A7

  return entries;
}
