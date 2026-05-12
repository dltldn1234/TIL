import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function ControlFlowPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">제어문</h1>
              <p className="text-slate-600 leading-relaxed">
                if, switch, for, while 등을 사용해 코드의 흐름을 제어할 수 있습니다. 조건과 반복을 통해 다양한 프로그램을 작성하세요.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <pre className="whitespace-pre-wrap text-sm font-mono text-slate-900">{`
let score = 85

if score >= 90 {
  print("A")
} else if score >= 75 {
  print("B")
} else {
  print("C")
}

for index in 1...3 {
  print(index)
}
              
`}</pre>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
