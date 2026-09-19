'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: '기본 개념', href: '/guide/basics' },
  { label: '변수와 상수', href: '/guide/variables' },
  { label: '데이터 타입', href: '/guide/data-types' },
  { label: '함수', href: '/guide/functions' },
  { label: '제어문', href: '/guide/control-flow' },
  { label: '컬렉션', href: '/guide/collections' },
  { label: '옵셔널', href: '/guide/optionals' },
  { label: '클래스와 구조체', href: '/guide/classes-structs' },
  { label: '프로토콜', href: '/guide/protocols' },
  { label: '클로저', href: '/guide/closures' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-72 bg-white border-r border-slate-200 overflow-y-auto">
      <div className="sticky top-0 p-6 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <h2 className="font-bold text-slate-900 text-lg mb-2">목차</h2>
        <p className="text-sm text-slate-500">전체 학습 가이드</p>
      </div>
      
      <nav className="p-6 space-y-1">
        <Link
          href="/guide"
          className={`block px-4 py-3 rounded-lg font-medium transition ${
            pathname === '/guide'
              ? 'bg-orange-100 text-orange-600'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          📖 전체 가이드
        </Link>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase px-4 mb-3">학습 주제</p>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2.5 rounded-lg text-sm transition ${
                pathname === item.href
                  ? 'bg-orange-100 text-orange-600 font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase px-4 mb-3">추가 자료</p>
          <Link
            href="/examples"
            className={`block px-4 py-2.5 rounded-lg text-sm transition ${
              pathname === '/examples'
                ? 'bg-orange-100 text-orange-600 font-semibold'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            💻 코드 예제
          </Link>
          <Link
            href="/resources"
            className={`block px-4 py-2.5 rounded-lg text-sm transition ${
              pathname === '/resources'
                ? 'bg-orange-100 text-orange-600 font-semibold'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            📚 외부 자료
          </Link>
        </div>
      </nav>

      <div className="p-6 border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">💡 팁</p>
          <p className="text-xs text-blue-800">
            각 섹션을 천천히 읽고 예제를 직접 시도해보세요!
          </p>
        </div>
      </div>
    </aside>
  );
}
