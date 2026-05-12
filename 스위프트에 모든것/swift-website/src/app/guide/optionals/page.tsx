import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function OptionalsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">옵셔널</h1>
              <p className="text-slate-600 leading-relaxed">
                옵셔널은 값이 있을 수도 있고 없을 수도 있는 변수 타입입니다. 안전한 언래핑 방식으로 오류를 방지할 수 있습니다.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <pre className="whitespace-pre-wrap text-sm font-mono text-slate-900">
{`
let optionalName: String? = "Swift"

if let name = optionalName {
  print("Hello, \(name)")
}

let defaultName = optionalName ?? "Guest"
print(defaultName)
              
`}</pre>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
