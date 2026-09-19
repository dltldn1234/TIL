import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">추가 학습 자료</h1>
              <p className="text-slate-600 leading-relaxed">
                Swift를 더 깊게 공부할 수 있는 공식 문서와 추천 리소스를 제공합니다.
              </p>
            </section>
            <section className="grid gap-6">
              {[
                {
                  title: '공식 Swift 문서',
                  description: 'Apple의 Swift 공식 사이트에서 최신 문법과 가이드를 확인하세요.',
                  href: 'https://swift.org/documentation/',
                },
                {
                  title: 'Apple 개발자 문서',
                  description: 'Apple Developer의 iOS 및 macOS SDK 자료를 확인하세요.',
                  href: 'https://developer.apple.com/documentation/',
                },
                {
                  title: 'Swift by Sundell',
                  description: 'Swift 관련 아티클과 실용 예제를 제공합니다.',
                  href: 'https://www.swiftbysundell.com/',
                },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-slate-200 bg-slate-50 p-6 hover:border-orange-300 hover:bg-orange-50 transition"
                >
                  <h2 className="text-2xl font-semibold text-slate-900 mb-2">{item.title}</h2>
                  <p className="text-slate-600">{item.description}</p>
                </a>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
