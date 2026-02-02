'use client';

import Link from 'next/link';
import { Post } from '@/lib/blog';
import { useLanguage } from '@/contexts/LanguageContext';

interface Props {
  posts: Post[];
}

export default function BlogList({ posts }: Props) {
  const { t, language } = useLanguage();

  const typeLabels: Record<Post['type'], { label: string; emoji: string; color: string }> = {
    launch: { label: t.blog.launch, emoji: '🚀', color: 'text-purple-400' },
    technical: { label: t.blog.technical, emoji: '💻', color: 'text-blue-400' },
    business: { label: t.blog.business, emoji: '💡', color: 'text-pink-400' },
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-medium mb-4 tracking-wide uppercase text-sm">
            {t.blog.title}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.blog.subtitle} <span className="gradient-text">{t.blog.subtitleHighlight}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.blog.description}
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">{t.blog.emptyState}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-primary-500/50 transition-all hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-sm font-medium ${typeLabels[post.type].color}`}>
                        {typeLabels[post.type].emoji} {typeLabels[post.type].label}
                      </span>
                      {post.product && (
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">
                          {post.product}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                      <span>
                        {new Date(post.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}
                      </span>
                      <span>•</span>
                      <span>{post.readingTime} {t.blog.minRead}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
