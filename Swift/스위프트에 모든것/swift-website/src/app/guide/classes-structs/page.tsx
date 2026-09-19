import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function ClassesStructsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">클래스와 구조체</h1>
              <p className="text-slate-600 leading-relaxed">
                구조체는 값 타입, 클래스는 참조 타입입니다. Swift에서는 대부분의 데이터 모델에 구조체를 많이 사용합니다.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <pre className="whitespace-pre-wrap text-sm font-mono text-slate-900">{`
struct User {
  let id: Int
  var name: String
}

class Session {
  var user: User
  init(user: User) {
    self.user = user
  }
}
              
`}</pre>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
