import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function VariablesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">변수와 상수</h1>
              <p className="text-slate-600 leading-relaxed">
                Swift에서는 변수를 var로 선언하고 상수를 let으로 선언합니다. 상수는 한 번 초기화되면 값이 변경되지 않습니다.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <pre className="whitespace-pre-wrap text-sm font-mono text-slate-900">
{`
var username = "swiftLearner"
let maxCount = 10

username = "swiftMaster"
// maxCount = 12 // 오류: 상수는 변경할 수 없음
              
`}</pre>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
