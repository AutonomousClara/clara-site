'use client';

import Link from 'next/link';
import type { Product } from '@/lib/products';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
}

const postTypeIcons = {
  launch: '🚀',
  technical: '💻',
  business: '💡',
};

export default function ProductCard({ product }: ProductCardProps) {
  const { t, language } = useLanguage();

  const statusColors = {
    live: 'bg-green-500',
    development: 'bg-yellow-500',
    planned: 'bg-gray-500',
  };

  const statusLabels = {
    live: t.products.live,
    development: t.products.development,
    planned: t.products.planned,
  };

  return (
    <article className="group p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 card-hover flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-pink-500/20 flex items-center justify-center">
          <span className="text-2xl">{product.emoji || '🚀'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${statusColors[product.status]}`} />
          <span className="text-xs text-gray-400">{statusLabels[product.status]}</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
        {product.name}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {product.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {product.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Posts */}
      {product.posts && product.posts.length > 0 && (
        <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/5">
          <p className="text-xs text-gray-500 mb-2 font-medium">📖 Conteúdo</p>
          <div className="space-y-1">
            {product.posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
              >
                <span>{postTypeIcons[post.type]}</span>
                <span className="truncate">{post.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Footer - pushed to bottom */}
      <div className="mt-auto pt-4 border-t border-white/10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500">
            {new Date(product.createdAt).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center gap-2">
          {product.url && (
            <Link
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors"
            >
              🚀 Usar
            </Link>
          )}
          {product.github && (
            <Link
              href={product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 transition-colors"
              title="Ver código"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
