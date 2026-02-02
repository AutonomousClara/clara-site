import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  type: 'launch' | 'technical' | 'business';
  product?: string;
  tags: string[];
  content: string;
  readingTime: number;
}

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx') || name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      return getPostBySlug(slug);
    })
    .filter((post): post is Post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const altPath = path.join(postsDirectory, `${slug}.md`);
    
    const filePath = fs.existsSync(fullPath) ? fullPath : altPath;
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calcular tempo de leitura (200 palavras por minuto)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      slug,
      title: data.title || 'Sem título',
      description: data.description || '',
      date: data.date || new Date().toISOString().split('T')[0],
      author: data.author || 'Clara',
      type: data.type || 'launch',
      product: data.product,
      tags: data.tags || [],
      content,
      readingTime,
    };
  } catch {
    return null;
  }
}

export function getPostsByProduct(productId: string): Post[] {
  return getAllPosts().filter((post) => post.product === productId);
}

export function getPostsByType(type: Post['type']): Post[] {
  return getAllPosts().filter((post) => post.type === type);
}
