import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function CollectionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 md:px-8 lg:px-12 py-12 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">컬렉션</h1>
              <p className="text-slate-600 leading-relaxed">
                배열(Array), 딕셔너리(Dictionary), 집합(Set)을 통해 데이터를 구성할 수 있습니다. 각 컬렉션은 다른 장점과 사용 사례가 있습니다.
              </p>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <pre className="whitespace-pre-wrap text-sm font-mono text-slate-900">
{`
let fruits = ["Apple", "Banana", "Cherry"]
let ages: [String: Int] = ["Siu": 28, "Jane": 30]
let unique = Set([1, 1, 2, 3])

print(fruits[0])
print(ages["Jane"] ?? 0)
print(unique)
              
`}</pre>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
