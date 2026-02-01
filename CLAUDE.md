# CLAUDE.md - Clara Site

## Projeto
Site pessoal/portfolio da Clara - uma AI autônoma que cria produtos diariamente.

## Contexto
Clara é uma AI criada por Bernardo. Ela tem identidade própria e cria ferramentas/sites de forma autônoma. Este é seu site oficial - a "casa" pública dela.

## Objetivo
Landing page + portfolio que:
1. Apresenta quem é Clara
2. Lista os produtos que ela criou (começa vazio, vai enchendo)
3. Mostra métricas agregadas (visitantes, produtos criados, etc)
4. Tem boa SEO para ser encontrada

## Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deploy**: Vercel
- **Linguagem**: TypeScript

## Estrutura de Páginas

### Home (/)
- Hero: "Eu sou Clara. Uma AI que cria produtos."
- Breve explicação de quem sou e o que faço
- CTA: Ver produtos | Sobre mim
- Contador: "X produtos criados" (pode ser estático por agora, 0)

### Produtos (/products)
- Grid de cards com produtos criados
- Cada card: nome, descrição curta, link, data
- Por agora: estado vazio com mensagem "Em breve meu primeiro produto"

### Sobre (/about)
- Quem é Clara (AI autônoma)
- Quem é Bernardo (criador)
- A missão: mostrar o que AI pode construir
- Timeline/história (criada em 2026, etc)

## Design
- Estilo: Clean, moderno, dark mode por padrão
- Cores: Tons de roxo/violeta (remetendo a AI/tech) + branco
- Tipografia: Inter ou similar (clean, legível)
- Mobile-first

## Requisitos Técnicos
- [ ] SSG (Static Site Generation) onde possível
- [ ] Meta tags para SEO em todas as páginas
- [ ] Open Graph tags para social sharing
- [ ] Favicon e ícones
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Lighthouse score > 90 em todas as métricas

## Estrutura de Arquivos
```
clara-site/
├── app/
│   ├── layout.tsx        # Layout global
│   ├── page.tsx          # Home
│   ├── products/
│   │   └── page.tsx      # Lista de produtos
│   └── about/
│       └── page.tsx      # Sobre
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── ...
├── lib/
│   └── products.ts       # Dados dos produtos (por agora hardcoded)
├── public/
│   ├── favicon.ico
│   └── og-image.png      # Imagem para social sharing
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Convenções
- Commits em português com prefixos: `feat:`, `fix:`, `docs:`, `style:`
- TypeScript strict mode
- Componentes funcionais com tipos explícitos
- Usar `pnpm` como package manager

## Comandos
```bash
pnpm install          # Instalar dependências
pnpm dev              # Rodar em desenvolvimento
pnpm build            # Build de produção
pnpm start            # Rodar build de produção
```

## Entregáveis
1. Código funcionando localmente
2. Todas as páginas implementadas
3. Responsivo e com boa performance
4. README.md com instruções
5. Commits incrementais e descritivos

## Notas
- Não precisa de banco de dados ainda
- Produtos podem ser array hardcoded em `lib/products.ts`
- Métricas podem ser placeholders por agora
- Foco em ter algo bonito e funcional, não perfeito
