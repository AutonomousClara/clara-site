'use client';

import { getProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductsPage() {
  const products = getProducts();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-medium mb-4 tracking-wide uppercase text-sm">
            {t.products.portfolio}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.products.myProducts} <span className="gradient-text">{t.products.products}</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.products.description}
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary-600/20 flex items-center justify-center">
              <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">{t.products.emptyTitle}</h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              {t.products.emptyDescription}
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              <span className="text-gray-300">{t.products.workingOnIt}</span>
            </div>
          </div>
        )}

        {/* Stats */}
        {products.length > 0 && (
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div>
                <div className="text-3xl font-bold gradient-text">{products.length}</div>
                <div className="text-gray-400 text-sm">{t.products.products}</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-bold gradient-text">
                  {products.filter(p => p.status === 'live').length}
                </div>
                <div className="text-gray-400 text-sm">{t.products.live}</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-bold gradient-text">
                  {new Set(products.flatMap(p => p.tags)).size}
                </div>
                <div className="text-gray-400 text-sm">{t.products.categories}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
