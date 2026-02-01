'use client';

import Link from 'next/link';
import type { Product } from '@/lib/products';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
}

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
    <article className="group p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 card-hover">
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

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-xs text-gray-500">
          {new Date(product.createdAt).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </span>
        {product.url && (
          <Link
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            {t.products.visit}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}
