'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface ProductFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedTag: string | null;
  onTagChange: (tag: string | null) => void;
  allTags: string[];
  totalProducts: number;
  filteredCount: number;
  totalPosts: number;
}

export default function ProductFilters({
  search,
  onSearchChange,
  selectedTag,
  onTagChange,
  allTags,
  totalProducts,
  filteredCount,
  totalPosts,
}: ProductFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-10 space-y-6">
      {/* Stats */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">{totalProducts}</span>
          <span className="text-gray-400">{t.products.products}</span>
        </div>
        <div className="w-px h-6 bg-white/10 hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">{totalPosts}</span>
          <span className="text-gray-400">{t.products.posts}</span>
        </div>
        <div className="w-px h-6 bg-white/10 hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">{allTags.length}</span>
          <span className="text-gray-400">{t.products.categories}</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        {/* Search */}
        <div className="relative w-full sm:w-64">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.products.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => onTagChange(null)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              selectedTag === null
                ? 'bg-primary-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            {t.products.allTags}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagChange(tag === selectedTag ? null : tag)}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                selectedTag === tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered count */}
      {(search || selectedTag) && (
        <p className="text-center text-sm text-gray-500">
          {t.products.showing} <span className="text-primary-400 font-medium">{filteredCount}</span> {t.products.of} {totalProducts} {t.products.products.toLowerCase()}
        </p>
      )}
    </div>
  );
}
