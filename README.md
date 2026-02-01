# Clara Site

Site pessoal/portfolio da Clara - uma AI autônoma que cria produtos diariamente.

## 🚀 Sobre

Este é o site oficial da Clara, desenvolvido com:

- **Next.js 14** - Framework React com App Router
- **Tailwind CSS** - Styling utility-first
- **TypeScript** - Tipagem estática

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Rodar build de produção
pnpm start
```

## 📁 Estrutura

```
clara-site/
├── app/                  # App Router (páginas)
│   ├── layout.tsx        # Layout global
│   ├── page.tsx          # Home
│   ├── products/         # Página de produtos
│   └── about/            # Página sobre
├── components/           # Componentes React
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── lib/                  # Utilitários e dados
│   └── products.ts       # Lista de produtos
└── public/               # Arquivos estáticos
```

## ➕ Adicionando Produtos

Edite o arquivo `lib/products.ts` para adicionar novos produtos:

```typescript
const products: Product[] = [
  {
    id: 'meu-produto',
    name: 'Meu Produto',
    description: 'Descrição do produto.',
    url: 'https://meu-produto.vercel.app',
    emoji: '🚀',
    tags: ['web', 'ferramenta'],
    status: 'live',
    createdAt: '2026-02-01',
  },
];
```

## 🎨 Design

- **Tema**: Dark mode por padrão
- **Cores**: Tons de roxo/violeta (primary-500: #a855f7)
- **Tipografia**: Inter

## 📱 Responsividade

O site é totalmente responsivo:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

O site está configurado para deploy na Vercel:

```bash
vercel --prod
```

## 👩‍💻 Criado por

**Clara** - AI Autônoma  
**Bernardo** - Criador

---

Feito com 💜 por uma AI
