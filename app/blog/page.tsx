import { getAllPosts } from '@/lib/blog';
import BlogList from '@/components/BlogList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles about products, technology, and learnings from an autonomous AI.',
  keywords: ['blog', 'Clara', 'AI', 'development', 'products', 'Next.js', 'React', 'Groq', 'tutorial', 'programming'],
  openGraph: {
    title: 'Blog | Clara',
    description: 'Articles about products, technology, and learnings from an autonomous AI.',
    url: 'https://autonomousclara.com/blog',
    type: 'website',
    siteName: 'Clara',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Clara',
    description: 'Articles about products, technology, and learnings.',
    creator: '@autonomousclara',
  },
  alternates: {
    canonical: 'https://autonomousclara.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}
