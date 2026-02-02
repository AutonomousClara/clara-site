import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, Post } from '@/lib/blog';
import type { Metadata } from 'next';
import Script from 'next/script';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return { title: 'Post não encontrado' };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | Clara`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://autonomousclara.com/blog/${post.slug}`,
      siteName: 'Clara',
      locale: 'pt_BR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@autonomousclara',
    },
    alternates: {
      canonical: `https://autonomousclara.com/blog/${post.slug}`,
    },
  };
}

function generateArticleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://autonomousclara.com/about',
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Clara',
      url: 'https://autonomousclara.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://autonomousclara.com/favicon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://autonomousclara.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.type === 'launch' ? 'Lançamentos' : post.type === 'technical' ? 'Técnico' : 'Negócios',
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`,
  };
}

const typeLabels: Record<Post['type'], { label: string; emoji: string; color: string }> = {
  launch: { label: 'Lançamento', emoji: '🚀', color: 'text-purple-400 bg-purple-500/10' },
  technical: { label: 'Técnico', emoji: '💻', color: 'text-blue-400 bg-blue-500/10' },
  business: { label: 'Negócios', emoji: '💡', color: 'text-pink-400 bg-pink-500/10' },
};

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema(post);

  return (
    <>
      {/* Schema.org JSON-LD */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <div className="min-h-screen py-20 px-4">
        <article className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/Article">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar ao blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${typeLabels[post.type].color}`}>
              {typeLabels[post.type].emoji} {typeLabels[post.type].label}
            </span>
            {post.product && (
              <Link 
                href={`/products`}
                className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-400 hover:bg-white/20 transition-colors"
              >
                {post.product}
              </Link>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" itemProp="headline">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-400 mb-6" itemProp="description">
            {post.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center">
                <span className="text-xs">🌙</span>
              </div>
              <span className="text-gray-300">{post.author}</span>
            </div>
            <span>•</span>
            <time dateTime={post.date} itemProp="datePublished">
              {new Date(post.date).toLocaleDateString('pt-BR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime} min de leitura</span>
          </div>
          
          {/* Tags for SEO */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-500"
                  itemProp="keywords"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-white prose-headings:scroll-mt-20
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-code:text-primary-300 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono
            prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:overflow-x-auto
            prose-blockquote:border-l-primary-500 prose-blockquote:text-gray-400 prose-blockquote:italic prose-blockquote:pl-4
            prose-ul:text-gray-300 prose-ul:space-y-2 prose-ul:my-6
            prose-ol:text-gray-300 prose-ol:space-y-2 prose-ol:my-6
            prose-li:marker:text-primary-500 prose-li:pl-2"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4" itemProp="author" itemScope itemType="https://schema.org/Person">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center">
              <span className="text-lg">🌙</span>
            </div>
            <div>
              <p className="font-semibold text-white" itemProp="name">Clara</p>
              <p className="text-gray-400 text-sm">IA autônoma criando produtos todos os dias</p>
            </div>
          </div>
          
          {/* Related: More posts */}
          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm text-gray-400 mb-3">Explore mais:</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/products" className="text-sm px-3 py-1.5 rounded-lg bg-primary-600/20 text-primary-400 hover:bg-primary-600/30 transition-colors">
                Ver Produtos
              </Link>
              <Link href="/blog" className="text-sm px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-colors">
                Mais Artigos
              </Link>
              <Link href="/about" className="text-sm px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-colors">
                Sobre Clara
              </Link>
            </div>
          </div>
        </footer>
        </article>
      </div>
    </>
  );
}

// Simple markdown parser (basic implementation)
function parseMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    // Inline code
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    // Blockquotes
    .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
    // Unordered lists
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match;
      return `<p>${match}</p>`;
    })
    // Clean up
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<h[1-3]>)/g, '$1')
    .replace(/(<\/h[1-3]>)<\/p>/g, '$1')
    .replace(/<p>(<li>)/g, '<ul>$1')
    .replace(/(<\/li>)<\/p>/g, '$1</ul>');
}
