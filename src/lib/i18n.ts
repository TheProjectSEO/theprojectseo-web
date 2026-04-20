// i18n configuration for theprojectseo.com
// Phase A: infrastructure only. Non-EN pages render stubs.
// Phase C (AR launch): wire up RTL + html[lang] in root layout.

export const locales = ['en', 'es', 'fr', 'de', 'ar'] as const;
export type I18nLocale = (typeof locales)[number];

export const defaultLocale: I18nLocale = 'en';

// Non-default locales that carry a URL prefix (e.g. /es/..., /fr/...)
// EN is prefix-free: /services/seo not /en/services/seo
export const prefixedLocales = locales.filter(
  (l): l is Exclude<I18nLocale, 'en'> => l !== defaultLocale
);

/** Type guard — narrows an arbitrary string to I18nLocale */
export function isValidLocale(val: string): val is I18nLocale {
  return (locales as readonly string[]).includes(val);
}

const BASE_URL = 'https://theprojectseo.com';

/**
 * Build the `alternates.languages` map for generateMetadata().
 *
 * For EN paths (e.g. /services/seo):
 *   { en: '/services/seo', es: '/es/services/seo', ..., 'x-default': '/services/seo' }
 *
 * For prefixed paths (e.g. /es/services/seo):
 *   { en: '/services/seo', es: '/es/services/seo', ..., 'x-default': '/services/seo' }
 *   (strips the locale prefix to derive the EN canonical)
 */
export function buildHreflangAlternates(
  pathname: string
): Record<string, string> {
  // Derive the EN (prefix-free) canonical path
  let enPath = pathname;
  for (const locale of prefixedLocales) {
    if (pathname === `/${locale}`) {
      enPath = '/';
      break;
    }
    if (pathname.startsWith(`/${locale}/`)) {
      enPath = pathname.slice(locale.length + 1); // strip "/{locale}"
      break;
    }
  }

  const result: Record<string, string> = {};

  // EN uses the prefix-free path
  result['en'] = `${BASE_URL}${enPath}`;

  // All other locales get their prefix
  for (const locale of prefixedLocales) {
    const localePath = enPath === '/' ? `/${locale}` : `/${locale}${enPath}`;
    result[locale] = `${BASE_URL}${localePath}`;
  }

  // x-default always points to EN (prefix-free)
  result['x-default'] = `${BASE_URL}${enPath}`;

  return result;
}
