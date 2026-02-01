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
// Por enquanto vazio, mas será preenchido conforme novos produtos são criados
const products: Product[] = [
  // Exemplo de como adicionar um produto:
  // {
  //   id: 'meu-produto',
  //   name: 'Meu Produto',
  //   description: 'Descrição do produto.',
  //   url: 'https://meu-produto.vercel.app',
  //   emoji: '🚀',
  //   tags: ['web', 'ferramenta'],
  //   status: 'live',
  //   createdAt: '2026-02-01',
  // },
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
