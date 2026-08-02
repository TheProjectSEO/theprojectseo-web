import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { redirects } from "@/data/redirects";
import { caseStudies } from "@/data/case-studies";
import { editorialArticles } from "@/data/editorial-articles";
import { glossary } from "@/data/glossary";

const BASE_URL = "https://theprojectseo.com";
const APP_DIR = path.join(process.cwd(), "src", "app");
const editorialUpdatedAt = new Map(
  editorialArticles.map((article) => [
    `blog/${article.slug}`,
    new Date(article.updatedAt),
  ]),
);

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Convert an app-relative path segment to a public URL path */
function segmentToUrlPath(segment: string): string {
  // Strips trailing /page.tsx and leading src/app
  return segment
    .replace(/\/page\.tsx$/, "")
    .replace(/^\//, "")
    .replace(/\/$/, "");
}

/** Determine priority by URL prefix convention */
function getPriority(urlPath: string): number {
  if (urlPath === "") return 1.0;
  if (urlPath.startsWith("services")) return urlPath === "services" ? 0.9 : 0.8;
  if (urlPath.startsWith("industries")) return 0.8;
  if (urlPath.startsWith("locations")) return 0.8;
  if (urlPath.startsWith("blog")) return 0.7;
  if (urlPath === "pricing" || urlPath === "contact") return 0.9;
  if (urlPath === "company") return 0.8;
  if (urlPath === "privacy" || urlPath === "terms") return 0.3;
  return 0.7;
}

/** Determine changeFrequency by URL prefix convention */
function getChangeFreq(
  urlPath: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (urlPath === "") return "weekly";
  if (urlPath.startsWith("blog"))
    return urlPath === "blog" ? "weekly" : "monthly";
  if (urlPath === "privacy" || urlPath === "terms") return "yearly";
  return "monthly";
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
function collectStaticPages(dir: string, base = ""): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const name = entry.name;
    const rel = `${base}/${name}`;

    if (entry.isDirectory()) {
      // Skip dynamic segment directories
      if (name.includes("[")) continue;
      // Skip internal/admin segments
      if (name === "admin" || name === "animation-demo" || name === "demo")
        continue;
      results.push(...collectStaticPages(path.join(dir, name), rel));
    } else if (name === "page.tsx") {
      results.push(`${base}/page.tsx`);
    }
  }

  return results;
}

// ─── Build redirect exclusion set ───────────────────────────────────────────
// Pages whose source URL is in the redirect table should NOT appear in sitemap.
// (They 301 elsewhere; Google ignores them in the sitemap anyway.)
const redirectSources = new Set(
  redirects.filter((r) => r.permanent).map((r) => r.source.replace(/^\//, "")), // strip leading slash
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

    const url = urlPath === "" ? BASE_URL : `${BASE_URL}/${urlPath}`;

    entries.push({
      url,
      // Only publish lastmod when the source has a maintained date. A build
      // timestamp makes every page look changed on every deployment.
      ...(editorialUpdatedAt.has(urlPath)
        ? { lastModified: editorialUpdatedAt.get(urlPath) }
        : {}),
      changeFrequency: getChangeFreq(urlPath),
      priority: getPriority(urlPath),
    });
  }

  // 2. Data-driven SEO case studies
  for (const caseStudy of caseStudies) {
    entries.push({
      url: `${BASE_URL}/case-studies/${caseStudy.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // 3. Data-driven SEO and AI search glossary definitions
  for (const term of glossary) {
    entries.push({
      url: `${BASE_URL}/resources/glossary/${term.slug}`,
      lastModified: new Date(term.updatedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
