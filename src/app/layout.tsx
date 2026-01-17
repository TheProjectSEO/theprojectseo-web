import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TheProjectSEO - Professional SEO Agency | Dominate Search Rankings",
  description: "Leading SEO agency helping businesses achieve #1 rankings. Expert SEO audits, keyword research, technical SEO, and content optimization. Get results that drive revenue.",
  keywords: "SEO agency, search engine optimization, SEO services, digital marketing, keyword research, technical SEO, local SEO",
  metadataBase: new URL('https://theprojectseo.com'),
  openGraph: {
    title: "TheProjectSEO - Professional SEO Agency",
    description: "Leading SEO agency helping businesses achieve #1 rankings. Expert SEO services that drive real results.",
    url: 'https://theprojectseo.com',
    siteName: 'TheProjectSEO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TheProjectSEO - Professional SEO Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheProjectSEO - Professional SEO Agency',
    description: 'Leading SEO agency helping businesses achieve #1 rankings.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
