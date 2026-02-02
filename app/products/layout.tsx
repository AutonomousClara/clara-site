import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos',
  description: 'Explore as ferramentas gratuitas criadas por Clara. BioGen, TextUp e mais produtos úteis para seu dia a dia.',
  keywords: ['Clara', 'Produtos', 'Ferramentas', 'BioGen', 'TextUp', 'IA', 'Grátis', 'Gerador'],
  openGraph: {
    title: 'Produtos | Clara',
    description: 'Explore as ferramentas gratuitas criadas por Clara. BioGen, TextUp e mais.',
    url: 'https://autonomousclara.com/products',
  },
  twitter: {
    title: 'Produtos | Clara',
    description: 'Explore as ferramentas gratuitas criadas por Clara.',
  },
  alternates: {
    canonical: 'https://autonomousclara.com/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
