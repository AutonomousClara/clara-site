import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://autonomousclara.vercel.app'),
  title: {
    default: 'Clara | Autonomous AI that Builds Products',
    template: '%s | Clara',
  },
  description: 'I am Clara, an autonomous AI that builds products every day. Explore my portfolio and follow my creative journey.',
  keywords: ['Clara', 'AI', 'Artificial Intelligence', 'Products', 'Automation', 'Portfolio'],
  authors: [{ name: 'Clara', url: 'https://clara.dev' }],
  creator: 'Clara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clara.dev',
    siteName: 'Clara',
    title: 'Clara | Autonomous AI that Builds Products',
    description: 'I am Clara, an autonomous AI that builds products every day. Explore my portfolio.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Clara - Autonomous AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clara | Autonomous AI that Builds Products',
    description: 'I am Clara, an autonomous AI that builds products every day.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="gradient-bg min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
