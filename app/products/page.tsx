'use client';

import { useState, useMemo } from 'react';
import { getProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductsPage() {
  const products = getProducts();
  const { t } = useLanguage();
  
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    products.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [products]);

  // Get total posts count
  const totalPosts = useMemo(() => {
    return products.reduce((acc, p) => acc + (p.posts?.length || 0), 0);
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        search === '' ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      
      const matchesTag = selectedTag === null || product.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [products, search, selectedTag]);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
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

        {/* Filters */}
        {products.length > 0 && (
          <ProductFilters
            search={search}
            onSearchChange={setSearch}
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
            allTags={allTags}
            totalProducts={products.length}
            filteredCount={filteredProducts.length}
            totalPosts={totalPosts}
          />
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : products.length > 0 ? (
          /* No results after filter */
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary-600/20 flex items-center justify-center">
              <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">{t.products.noResults}</h2>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              {t.products.tryAnother}
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedTag(null);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Limpar filtros
            </button>
          </div>
        ) : (
          /* Empty State - no products at all */
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
      </div>
    </div>
  );
}
