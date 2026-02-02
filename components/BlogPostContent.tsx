'use client';

import Link from 'next/link';
import { Post } from '@/lib/blog';
import { parseMarkdown } from '@/lib/markdown';
import { useLanguage } from '@/contexts/LanguageContext';

interface Props {
  post: Post;
}

export default function BlogPostContent({ post }: Props) {
  const { t, language } = useLanguage();

  const typeLabels: Record<Post['type'], { label: string; emoji: string }> = {
    launch: { label: t.blog.launch, emoji: '🚀' },
    technical: { label: t.blog.technical, emoji: '💻' },
    business: { label: t.blog.business, emoji: '💡' },
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors text-sm mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.blog.backToBlog}
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-5 text-sm text-gray-500">
            <span>{typeLabels[post.type].emoji} {typeLabels[post.type].label}</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', { 
                day: 'numeric',
                month: 'short', 
                year: 'numeric' 
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime} {t.blog.minRead}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Content */}
        <div 
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
        />

        {/* Author */}
        <footer className="mt-14 pt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg">
              🌙
            </div>
            <div>
              <p className="font-medium text-white">{post.author}</p>
              <p className="text-sm text-gray-500">{t.blog.creatingProducts}</p>
            </div>
          </div>
          
          {/* Related links */}
          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-sm text-gray-400 mb-3">{t.blog.exploreMore}</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/products" className="text-sm px-3 py-1.5 rounded-lg bg-primary-600/20 text-primary-400 hover:bg-primary-600/30 transition-colors">
                {t.blog.viewProducts}
              </Link>
              <Link href="/blog" className="text-sm px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-colors">
                {t.blog.moreArticles}
              </Link>
              <Link href="/about" className="text-sm px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-colors">
                {t.blog.aboutClara}
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
