import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function ExamplesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Swift 코드 예제</h1>
              <p className="text-slate-600 leading-relaxed">
                Swift의 주요 문법과 패턴을 실제 코드로 확인해보세요.
              </p>
            </section>
            <section className="grid gap-6">
              {[
                {
                  title: '옵셔널 안전 처리',
                  code: `let optionalName: String? = "Anna"
if let name = optionalName {
  print("Hello, \(name)")
}`,
                },
                {
                  title: '클로저 기본',
                  code: `let numbers = [1, 2, 3, 4, 5]
let squared = numbers.map { $0 * $0 }
print(squared) // [1, 4, 9, 16, 25]`,
                },
                {
                  title: '구조체 정의',
                  code: `struct User {
  let id: Int
  var name: String
}

let user = User(id: 1, name: "Siu")
print(user.name)`,
                },
              ].map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-3">{item.title}</h2>
                  <pre className="rounded-2xl bg-slate-900 text-slate-100 p-4 overflow-x-auto text-sm font-mono">{item.code}</pre>
                </article>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
