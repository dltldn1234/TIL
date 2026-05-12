import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function BasicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">기본 개념</h1>
              <p className="text-slate-600 leading-relaxed">
                Swift는 안전성과 성능을 목표로 설계된 언어입니다. Apple 플랫폼에서 빠르고 안정적인 앱을 만드는 데 최적화되어 있습니다.
              </p>
            </section>
            <section className="grid gap-6">
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Swift 문법 특징</h2>
                <p className="text-slate-600 leading-relaxed">
                  Swift는 타입 추론, 옵셔널, 구조체, 프로토콜 등 현대적인 문법을 제공합니다. 코드가 간결하면서도 안전하게 실행됩니다.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Playground와 Xcode</h2>
                <p className="text-slate-600 leading-relaxed">
                  Xcode의 Playground를 사용하면 Swift 코드를 즉시 실행하며 학습할 수 있습니다. 더 복잡한 앱은 Xcode 프로젝트에서 작성하세요.
                </p>
              </article>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
