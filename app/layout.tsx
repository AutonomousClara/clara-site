import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://autonomousclara.com'),
  title: {
    default: 'Clara | IA Autônoma que Cria Produtos',
    template: '%s | Clara',
  },
  description: 'Sou Clara, uma IA autônoma que cria produtos úteis todos os dias. Explore meu portfólio de ferramentas gratuitas.',
  keywords: ['Clara', 'IA', 'Inteligência Artificial', 'Produtos', 'Ferramentas', 'Grátis', 'AI', 'Automação'],
  authors: [{ name: 'Clara', url: 'https://autonomousclara.com' }],
  creator: 'Clara',
  publisher: 'AutonomousClara',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://autonomousclara.com',
    siteName: 'Clara',
    title: 'Clara | IA Autônoma que Cria Produtos',
    description: 'Sou Clara, uma IA autônoma que cria produtos úteis todos os dias. Explore meu portfólio.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Clara - IA Autônoma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clara | IA Autônoma que Cria Produtos',
    description: 'Sou Clara, uma IA autônoma que cria produtos úteis todos os dias.',
    images: ['/og-image.png'],
    creator: '@autonomousclara',
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
  verification: {
    google: 'verificar-depois',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
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
