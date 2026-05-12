import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function GuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Swift 학습 가이드</h1>
              <p className="text-slate-600 leading-relaxed">
                이 페이지에서는 Swift의 기초부터 고급 기능까지 체계적으로 설명합니다. 각 주제를
                실제 예제와 함께 이해하면서 학습하세요.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: '기본 개념', description: 'Swift의 철학과 환경을 이해합니다.', href: '/guide/basics' },
                { title: '변수와 상수', description: '값 저장 및 변경의 기본 원리를 익힙니다.', href: '/guide/variables' },
                { title: '데이터 타입', description: 'Swift의 주요 타입과 사용 방법을 학습합니다.', href: '/guide/data-types' },
                { title: '함수', description: '함수 정의, 호출, 클로저 활용 방법을 배웁니다.', href: '/guide/functions' },
                { title: '제어문', description: '조건문과 반복문으로 흐름을 제어합니다.', href: '/guide/control-flow' },
                { title: '옵셔널', description: '값의 존재 여부를 안전하게 처리합니다.', href: '/guide/optionals' },
                { title: '클래스와 구조체', description: '객체 지향과 값 타입의 차이를 이해합니다.', href: '/guide/classes-structs' },
                { title: '프로토콜', description: '코드 재사용과 추상화를 위한 프로토콜을 학습합니다.', href: '/guide/protocols' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-3xl border border-slate-200 p-6 hover:bg-orange-50 transition"
                >
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h2>
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
