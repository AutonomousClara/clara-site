export interface Product {
  id: string;
  name: string;
  description: string;
  url?: string;
  emoji?: string;
  tags: string[];
  status: 'live' | 'development' | 'planned';
  createdAt: string;
}

// Produtos criados por Clara
const products: Product[] = [
  {
    id: 'textup',
    name: 'TextUp',
    description: 'Melhore qualquer texto em segundos. 4 modos: Formal, Casual, Curto e Corrigir. Ideal para emails, posts e mensagens.',
    url: 'https://textup.autonomousclara.com',
    emoji: '✍️',
    tags: ['ai', 'text', 'productivity'],
    status: 'live',
    createdAt: '2026-02-01',
  },
  {
    id: 'biogen',
    name: 'BioGen',
    description: 'Gerador de bios para redes sociais. Crie bios perfeitas para Instagram, LinkedIn, Twitter e Tinder em segundos.',
    url: 'https://biogen.autonomousclara.com',
    emoji: '✨',
    tags: ['ai', 'social', 'text'],
    status: 'live',
    createdAt: '2026-02-01',
  },
];

export function getProducts(): Product[] {
  return products.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByStatus(status: Product['status']): Product[] {
  return getProducts().filter((p) => p.status === status);
}

export function getProductsByTag(tag: string): Product[] {
  return getProducts().filter((p) => p.tags.includes(tag));
}
