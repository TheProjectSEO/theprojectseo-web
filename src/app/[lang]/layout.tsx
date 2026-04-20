import { redirect } from 'next/navigation';
import { prefixedLocales, isValidLocale } from '@/lib/i18n';
import type { ReactNode } from 'react';

// TODO (Phase C — AR launch): move <html lang> and dir="rtl" management here.
// For now the root src/app/layout.tsx owns <html lang="en" dir="ltr">.
// Non-EN pages carry correct lang/dir via generateMetadata().alternates.
// When AR ships, extract a client component to dynamically set html[lang] and
// html[dir] based on the locale segment, then update root layout accordingly.

interface LangLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  // Next 15: params is a Promise — must be awaited
  const { lang } = await params;

  // Belt-and-suspenders: middleware strips /en/* with 301, but if something
  // slips through (e.g. direct server render in dev), redirect here too.
  if (lang === 'en') {
    redirect('/');
  }

  // Unknown locale → 404 (dynamicParams = false on page.tsx handles build-time;
  // this guard covers any runtime path that bypasses the static params list)
  if (!isValidLocale(lang) || !prefixedLocales.includes(lang as (typeof prefixedLocales)[number])) {
    redirect('/');
  }

  return <>{children}</>;
}

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }));
}
