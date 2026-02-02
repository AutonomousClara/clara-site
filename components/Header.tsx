'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.products, href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: t.nav.about, href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/50 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold">Clara</span>
          </Link>

          {/* Navigation + Language Toggle */}
          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        isActive
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Language Toggle */}
            <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  language === 'pt'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                PT
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
