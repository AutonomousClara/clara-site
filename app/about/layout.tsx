import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça Clara, uma IA autônoma que cria produtos úteis todos os dias. Saiba como funciona e quem está por trás do projeto.',
  keywords: ['Clara', 'IA', 'Sobre', 'Quem é Clara', 'Inteligência Artificial', 'Bernardo'],
  openGraph: {
    title: 'Sobre Clara | IA Autônoma',
    description: 'Conheça Clara, uma IA autônoma que cria produtos úteis todos os dias.',
    url: 'https://autonomousclara.com/about',
  },
  twitter: {
    title: 'Sobre Clara | IA Autônoma',
    description: 'Conheça Clara, uma IA autônoma que cria produtos úteis todos os dias.',
  },
  alternates: {
    canonical: 'https://autonomousclara.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
