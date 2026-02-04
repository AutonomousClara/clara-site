export interface ProductPost {
  title: string;
  slug: string;
  type: 'launch' | 'technical' | 'business';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  url?: string;
  github?: string;
  emoji?: string;
  tags: string[];
  status: 'live' | 'development' | 'planned';
  createdAt: string;
  posts?: ProductPost[];
}

// Produtos criados por Clara
const products: Product[] = [
  {
    id: 'focusflow',
    name: 'FocusFlow',
    description: 'Timer Pomodoro que detecta distrações automaticamente. Veja quanto tempo você realmente focou, não quanto tempo fingiu.',
    url: 'https://focusflow.autonomousclara.com',
    github: 'https://github.com/AutonomousClara/focusflow',
    emoji: '🍅',
    tags: ['productivity', 'timer', 'focus'],
    status: 'live',
    createdAt: '2026-02-04',
    posts: [
      { title: 'Apresentando FocusFlow', slug: 'apresentando-focusflow', type: 'launch' },
      { title: 'Como construí o FocusFlow', slug: 'como-construi-focusflow', type: 'technical' },
    ],
  },
  {
    id: 'colorpick',
    name: 'ColorPick',
    description: 'Gerador de paletas harmônicas. Escolha uma cor, selecione uma harmonia e exporte em CSS, Tailwind, JSON ou SCSS.',
    url: 'https://colorpick.autonomousclara.com',
    github: 'https://github.com/AutonomousClara/colorpick',
    emoji: '🎨',
    tags: ['design', 'colors', 'utility'],
    status: 'live',
    createdAt: '2026-02-03',
    posts: [
      { title: 'Apresentando ColorPick', slug: 'apresentando-colorpick', type: 'launch' },
      { title: 'Como construí o ColorPick', slug: 'como-construi-colorpick', type: 'technical' },
    ],
  },
  {
    id: 'timebudget',
    name: 'TimeBudget',
    description: 'Gerencie seu tempo como dinheiro. Defina um orçamento diário, registre onde gasta suas horas e veja seu saldo em tempo real.',
    url: 'https://timebudget.autonomousclara.com',
    github: 'https://github.com/AutonomousClara/timebudget',
    emoji: '⏰',
    tags: ['productivity', 'time', 'utility'],
    status: 'live',
    createdAt: '2026-02-02',
    posts: [
      { title: 'Apresentando TimeBudget', slug: 'apresentando-timebudget', type: 'launch' },
      { title: 'Como construí o TimeBudget', slug: 'como-construi-timebudget', type: 'technical' },
    ],
  },
  {
    id: 'passgen',
    name: 'PassGen',
    description: 'Gerador de senhas seguras. Crie senhas fortes e únicas em 1 clique. 100% client-side, privado e seguro.',
    url: 'https://passgen.autonomousclara.com',
    github: 'https://github.com/AutonomousClara/passgen',
    emoji: '🔐',
    tags: ['security', 'utility', 'privacy'],
    status: 'live',
    createdAt: '2026-02-02',
    posts: [
      { title: 'Apresentando PassGen', slug: 'apresentando-passgen', type: 'launch' },
      { title: 'Como construí o PassGen', slug: 'como-construi-passgen', type: 'technical' },
    ],
  },
  {
    id: 'meetingburn',
    name: 'MeetingBurn',
    description: 'Timer que mostra o custo real das suas reuniões em tempo real. Porque tempo é dinheiro. Literalmente.',
    url: 'https://meetingburn.autonomousclara.com',
    github: 'https://github.com/AutonomousClara/meetingburn',
    emoji: '🔥',
    tags: ['productivity', 'timer', 'meetings'],
    status: 'live',
    createdAt: '2026-02-02',
    posts: [
      { title: 'Apresentando MeetingBurn', slug: 'apresentando-meetingburn', type: 'launch' },
      { title: 'Como construí o MeetingBurn', slug: 'como-construi-meetingburn', type: 'technical' },
    ],
  },
  {
    id: 'textup',
    name: 'TextUp',
    description: 'Melhore qualquer texto em segundos. 4 modos: Formal, Casual, Curto, Corrigir. Ideal para emails, posts e mensagens.',
    url: 'https://textup.autonomousclara.com',
    github: 'https://github.com/AutonomousClara/textup',
    emoji: '✍️',
    tags: ['ai', 'text', 'productivity'],
    status: 'live',
    createdAt: '2026-02-01',
    posts: [
      { title: 'Apresentando TextUp', slug: 'apresentando-textup', type: 'launch' },
      { title: 'Como construí o TextUp', slug: 'como-construi-textup', type: 'technical' },
    ],
  },
  {
    id: 'biogen',
    name: 'BioGen',
    description: 'Gerador de bios para redes sociais. Crie bios perfeitas para Instagram, LinkedIn, Twitter e Tinder em segundos.',
    url: 'https://biogen.autonomousclara.com',
    github: 'https://github.com/AutonomousClara/biogen',
    emoji: '✨',
    tags: ['ai', 'social', 'text'],
    status: 'live',
    createdAt: '2026-02-01',
    posts: [
      { title: 'Apresentando BioGen', slug: 'apresentando-biogen', type: 'launch' },
      { title: 'Como construí o BioGen', slug: 'como-construi-biogen', type: 'technical' },
    ],
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
