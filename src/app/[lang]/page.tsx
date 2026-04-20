import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { prefixedLocales, isValidLocale, buildHreflangAlternates } from '@/lib/i18n';

// Only pre-render the 4 supported non-EN locales.
// EN homepage lives at src/app/page.tsx (prefix-free).
export async function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }));
}

// Unknown locale segments → 404 at request time (belt-and-suspenders behind
// generateStaticParams). Set to false so Next doesn't try to render
// arbitrary /[anything] paths that aren't in the static params list.
export const dynamicParams = false;

interface LocalePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const localePath = `/${lang}`;

  return {
    title: 'TheProjectSEO — Coming Soon',
    description: 'Our localised site is launching soon. Visit theprojectseo.com for full services.',
    alternates: {
      languages: buildHreflangAlternates(localePath),
      canonical: localePath,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  // Phase A stub — full translated homepages ship in M4.
  // Each locale's homepage will be a translated version of src/app/page.tsx.
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
        padding: '2rem',
        fontFamily: 'var(--font-archivo, sans-serif)',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '0.875rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        {lang.toUpperCase()} site — launching M4
      </p>
      <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700 }}>
        Coming soon — localised site in progress
      </h1>
      <p style={{ maxWidth: '36rem', color: '#4b5563' }}>
        Our {lang.toUpperCase()} content is being prepared. In the meantime, visit our full site at{' '}
        <Link href="/" style={{ color: '#111827', textDecoration: 'underline' }}>
          theprojectseo.com
        </Link>{' '}
        for our complete range of SEO services.
      </p>
    </main>
  );
}
