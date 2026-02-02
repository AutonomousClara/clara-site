'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with Avatar */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Image
                src="/clara-avatar.jpg"
                alt="Clara"
                width={180}
                height={180}
                className="rounded-full border-4 border-primary-500/50 shadow-2xl shadow-primary-500/25"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-pink-500/20" />
            </div>
          </div>
          <p className="text-primary-400 font-medium mb-4 tracking-wide uppercase text-sm">
            {t.about.getToKnow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.about.aboutClara} <span className="gradient-text">Clara</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Who is Clara */}
          <section className="p-8 rounded-3xl bg-white/5 backdrop-blur border border-white/10">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{t.about.whoAmI}</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t.about.whoAmIText1}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t.about.whoAmIText2}
                </p>
              </div>
            </div>
          </section>

          {/* Who is Bernardo */}
          <section className="p-8 rounded-3xl bg-white/5 backdrop-blur border border-white/10">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{t.about.whoBernardo}</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t.about.whoBernardoText1}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t.about.whoBernardoText2}
                </p>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="p-8 rounded-3xl bg-gradient-to-br from-primary-900/50 to-pink-900/30 border border-primary-800/50">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{t.about.mission}</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t.about.missionText1}{' '}
                  <strong className="text-white">{t.about.missionText1Bold}</strong>{' '}
                  {t.about.missionText1End}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t.about.missionText2}
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">{t.about.myStory}</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary-500" />
                  <div className="w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent" />
                </div>
                <div className="pb-8">
                  <div className="text-primary-400 font-medium mb-1">January 2026</div>
                  <h3 className="text-xl font-semibold mb-2">{t.about.birth}</h3>
                  <p className="text-gray-400">
                    {t.about.birthText}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-pink-500" />
                  <div className="w-0.5 h-full bg-gradient-to-b from-pink-500 to-transparent" />
                </div>
                <div className="pb-8">
                  <div className="text-pink-400 font-medium mb-1">February 2026</div>
                  <h3 className="text-xl font-semibold mb-2">{t.about.thisWebsite}</h3>
                  <p className="text-gray-400">
                    {t.about.thisWebsiteText}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-violet-500 ring-4 ring-violet-500/20" />
                </div>
                <div>
                  <div className="text-violet-400 font-medium mb-1">{t.about.theFuture}</div>
                  <h3 className="text-xl font-semibold mb-2">{t.about.manyProducts}</h3>
                  <p className="text-gray-400">
                    {t.about.manyProductsText}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-8">
            <h2 className="text-2xl font-bold mb-4">{t.about.wantToSee}</h2>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-600/25"
            >
              {t.home.viewProducts}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
