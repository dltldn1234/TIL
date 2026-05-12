import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-12 md:p-16 border border-orange-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white text-3xl">
                  🚀
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                    Swift에 오신 것을 환영합니다!
                  </h1>
                  <p className="text-lg text-slate-600">
                    Apple의 강력하고 직관적인 프로그래밍 언어 배우기
                  </p>
                </div>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                Swift는 iOS, macOS, watchOS, tvOS 애플리케이션 개발을 위한 현대적인 프로그래밍 언어입니다. 
                안전성, 속도, 표현력을 갖춘 Swift로 놀라운 앱을 만들어보세요.
              </p>
              <div className="flex gap-4">
                <Link href="/guide" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
                  📖 학습 시작
                </Link>
                <Link href="/examples" className="px-6 py-3 bg-white text-orange-600 border-2 border-orange-500 rounded-lg font-semibold hover:bg-orange-50 transition">
                  💻 코드 보기
                </Link>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Swift의 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: '⚡',
                  title: '빠른 성능',
                  desc: 'C++와 유사한 성능으로 빠른 실행 속도를 제공합니다.',
                },
                {
                  icon: '🔒',
                  title: '안전성',
                  desc: '타입 안전성과 메모리 안전성으로 버그를 줄입니다.',
                },
                {
                  icon: '📖',
                  title: '읽기 쉬운 문법',
                  desc: '직관적이고 명확한 코드를 작성할 수 있습니다.',
                },
                {
                  icon: '🎯',
                  title: '최신 기능',
                  desc: '제네릭, 프로토콜, 옵셔널 등 현대적인 기능을 지원합니다.',
                },
              ].map((feature, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Start */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">빠른 시작</h2>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre>{
`// 첫 번째 Swift 프로그램
import Foundation

let greeting = "Hello, Swift!"
print(greeting)

// 변수와 상수
var age = 25
let name = "John Doe"

// 함수 정의
func greet(name: String) -> String {
    return "안녕하세요, \(name)!"
}

// 함수 호출
print(greet(name: name))`
              }</pre>
            </div>
          </section>

          {/* Topics */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">학습 주제</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { emoji: '📝', text: '기본 개념', link: '/guide/basics' },
                { emoji: '🔤', text: '변수와 상수', link: '/guide/variables' },
                { emoji: '🔢', text: '데이터 타입', link: '/guide/data-types' },
                { emoji: '⚙️', text: '함수', link: '/guide/functions' },
                { emoji: '🔄', text: '제어문', link: '/guide/control-flow' },
                { emoji: '📦', text: '컬렉션', link: '/guide/collections' },
                { emoji: '❓', text: '옵셔널', link: '/guide/optionals' },
                { emoji: '🏗️', text: '클래스와 구조체', link: '/guide/classes-structs' },
              ].map((topic, i) => (
                <Link key={i} href={topic.link} className="bg-white border border-slate-200 rounded-lg p-4 hover:border-orange-400 hover:shadow-md transition-all group">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{topic.emoji}</span>
                    <span className="font-semibold text-slate-900 group-hover:text-orange-600 transition">{topic.text}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">지금 시작하세요!</h2>
              <p className="text-slate-700 mb-6">
                Swift를 배우고 iOS, macOS, 그리고 더 많은 플랫폼을 위한 앱을 만들어보세요.
              </p>
              <Link href="/guide" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                학습 시작하기 →
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
