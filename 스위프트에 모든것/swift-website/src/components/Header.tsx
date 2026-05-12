'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-shadow">
              S
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
                Swift 완벽 가이드
              </h1>
              <p className="text-xs text-slate-500">모든 것을 배우세요</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-700 hover:text-orange-500 font-medium transition">
              홈
            </Link>
            <Link href="/guide" className="text-slate-700 hover:text-orange-500 font-medium transition">
              학습 가이드
            </Link>
            <Link href="/examples" className="text-slate-700 hover:text-orange-500 font-medium transition">
              코드 예제
            </Link>
            <Link href="/resources" className="text-slate-700 hover:text-orange-500 font-medium transition">
              자료
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <Link href="/" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 rounded">
              홈
            </Link>
            <Link href="/guide" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 rounded">
              학습 가이드
            </Link>
            <Link href="/examples" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 rounded">
              코드 예제
            </Link>
            <Link href="/resources" className="block px-4 py-2 text-slate-700 hover:bg-orange-50 rounded">
              자료
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
