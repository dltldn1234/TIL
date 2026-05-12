import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function DataTypesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">데이터 타입</h1>
              <p className="text-slate-600 leading-relaxed">
                Swift는 String, Int, Double, Bool 등 기본 타입을 제공하며, 사용자 정의 타입도 쉽게 만들 수 있습니다.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <pre className="whitespace-pre-wrap text-sm font-mono text-slate-900">
{`
let title: String = "Swift"
let score: Int = 100
let ratio: Double = 0.75
let isActive: Bool = true
              
`}</pre>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
