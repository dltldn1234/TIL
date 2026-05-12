import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function FunctionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">함수</h1>
              <p className="text-slate-600 leading-relaxed">
                Swift 함수는 입력 매개변수를 받아 실행한 뒤 값을 반환할 수 있습니다. 클로저와 함께 더욱 유연하게 사용할 수 있습니다.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <pre className="whitespace-pre-wrap text-sm font-mono text-slate-900">{`
func sayHello(name: String) -> String {
  return "Hello, \(name)!"
}

let message = sayHello(name: "Siu")
print(message)
              
`}</pre>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
