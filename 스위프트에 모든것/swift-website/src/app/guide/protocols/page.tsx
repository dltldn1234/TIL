import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function ProtocolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">프로토콜</h1>
              <p className="text-slate-600 leading-relaxed">
                프로토콜은 인터페이스를 정의하며, 여러 타입에 공통 동작을 부여할 수 있습니다. Swift의 중요한 추상화 도구입니다.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <pre className="whitespace-pre-wrap text-sm font-mono text-slate-900">{`
protocol Vehicle {
  var model: String { get }
  func start()
}

struct Car: Vehicle {
  let model: String
  func start() {
    print("\(model) started")
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
