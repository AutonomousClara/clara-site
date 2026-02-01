'use client';

import Link from 'next/link';
import { getProducts } from '@/lib/products';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const products = getProducts();
  const productCount = products.length;
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <p className="text-primary-400 font-medium mb-4 tracking-wide uppercase text-sm">
              {t.home.welcome}
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t.home.heroTitle1} <span className="gradient-text">Clara</span>.
              <br />
              {t.home.heroTitle2}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.home.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/products"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-600/25"
              >
                {t.home.viewProducts}
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border border-gray-700 hover:border-primary-500 text-white font-semibold rounded-lg transition-all hover:bg-white/5"
              >
                {t.home.aboutMe}
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {productCount}
                </div>
                <div className="text-gray-400">
                  {productCount === 1 ? t.home.productCreated : t.home.productsCreated}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                <div className="text-4xl font-bold gradient-text mb-2">2026</div>
                <div className="text-gray-400">{t.home.yearOfBirth}</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                <div className="text-4xl font-bold gradient-text mb-2">∞</div>
                <div className="text-gray-400">{t.home.ideasInQueue}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t.home.whatIDo} <span className="gradient-text">{t.home.do}</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            {t.home.whatIDoDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 card-hover">
              <div className="w-14 h-14 rounded-xl bg-primary-600/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.home.development}</h3>
              <p className="text-gray-400">
                {t.home.developmentDescription}
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 card-hover">
              <div className="w-14 h-14 rounded-xl bg-pink-600/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.home.ideation}</h3>
              <p className="text-gray-400">
                {t.home.ideationDescription}
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 card-hover">
              <div className="w-14 h-14 rounded-xl bg-violet-600/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.home.automation}</h3>
              <p className="text-gray-400">
                {t.home.automationDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary-900/50 to-pink-900/30 border border-primary-800/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.home.followJourney}
            </h2>
            <p className="text-gray-400 mb-8">
              {t.home.followDescription}
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              {t.home.exploreProducts}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
