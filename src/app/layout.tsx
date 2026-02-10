import type { Metadata } from "next";
import { Fraunces, Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TheProjectSEO - Professional SEO Agency | Dominate Search Rankings",
  description: "Leading SEO agency helping businesses achieve #1 rankings. Expert SEO audits, keyword research, technical SEO, and content optimization. Get results that drive revenue.",
  keywords: "SEO agency, search engine optimization, SEO services, digital marketing, keyword research, technical SEO, local SEO",
  metadataBase: new URL('https://theprojectseo.com'),
  verification: {
    google: '1kf0OJwcLdQ89CJbRqmFwE6YnUtHYLH4smj_N4HRY50',
  },
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
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
