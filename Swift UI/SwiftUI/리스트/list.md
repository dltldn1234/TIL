# List 
* 단일 열에 정렬 된 데이터 행을 표시하는 컨테이너 임
```swift
struct ContentView: View {
    var body: some View {
        List {
            Text("첫번째 리스트")
            Text("두번째 리스트")
            Text("세번째 리스트")
        }
    }
}
```
![alt text](<스크린샷 2026-04-19 오전 2.04.10.png>)

## 정적 콘텐츠

 * List의 생성자에 원하는 뷰를 전달하면 하나씩 각 "row"에 담아 표현함
    * (여기서 뷰 하나는 row 하나에 해당함)


 * 텍스트가 아닌 다른 이미지 뷰를 넣어 봐도 동일하게 List를 작성 할 수 있음


## 동적 콘텐츠

**동적 콘텐츠를 표현방법**

1. 첫번째 방법은 **Range Int 타입의 값을 넘겨주는 것이다**

* ex) 1부터 100까지의 숫자를 출력하려면 다음과 같이 작성 하면 됨

```siwft
List(o..<100) {
  Text("\($0)")
} 
```

2. **두번째 방법은 RandomAccessCollection(데이터 양에 상관없이 인덱스를 통해 컬렉션의 특정 요소에 즉시 접근할 수 있는 고성능 컬렉션 프로토콜) 프로토콜을 준수하는 데이터를 제공하는 것**

### 데이터의 각 요소들을 구분하고 식별할 수 있는 방식이 두개가 있다
**1. 첫 번째는 id로 사용할 값을 직접 인수로 제공하는 것입니다. ```SwifUI```에서는 이것을 간단히 ``self``라고 입력할 수도 있음**
```siwft
.List(["A", "B", "C", "D"], id: \.self) { ... }
```

**2. 매개 변수에 id를 전달하는 대신 데이터 타입 자체에 ``identifiable``프로토콜을 채택하는 것이다 타입 자체에 id 프로퍼티를 만들고 이것을 식별자로 삼게 된다**

예를 들어서 지브리라는 struct를 만들고 Identifiable을 매개변수 타입으로 넣어준 후에 원하는 상수와 식별가능한 코드 id = UUID()를 작성한 예시 
```swift
struct Ghibli: Identifiable {
    let name: String
    let id = UUID()
}
private var ghibli = [
    Ghibli(name: "포뇨"),
    Ghibli(name: "소스케"),
    Ghibli(name: "치히로"),
    Ghibli(name: "센"),
    Ghibli(name: "하쿠"),
    Ghibli(name: "가오나시")
]
```
여기서 **UUID**는 유형, 인터페이스 및 기타 항목을 식별하는 데 사용할 수 있는 보편적으로 고유한 값이다

## 정적 콘텐츠와 동적 콘텐츠 조합
* ForEach를 이용하면 이 두 가지를 조합하는 것도 가능험

**ForEach란?**
* List처럼 id로 식별할 수 있는 데이터를 받아서 동적으로 뷰를 생성하는 역할을 함

*동적과 정적의 사용예시*
```swift
struct ContentView: View {
    
    let drink = ["사이다", "카프리썬", "포도주스", "오렌지주스"]
    let snack = ["프링글스", "홈런볼", "라면땅"]
    
    var body: some View {
        List {
            Text("음료수").font(.largeTitle)
            ForEach(drink, id: \.self) {
                Text("\($0)")
            }
            
            Label("과자").font(.largeTitle)
            ForEach(snack, id: \.self) {
                Text("\($0)")
            }
        }
    }
}
```
![alt text](<스크린샷 2026-04-21 오후 3.28.56.png>)

## section
섹션에는 header와 footer를 생략하거나 추가할 수 있고, 둘 중 하나만 사용할 수 있다

*예시*
```swift
import SwiftUI
struct ContentView: View {
    
    let drink = ["카프리썬", "콜라", "포도주스", "오렌지주스"]
    let snack = ["홈런볼", "똥", "꼬꼬댁"]
    
    var body: some View {
        
        let titles = ["음료수", "과자"]
        let data = [drink, snack]
        
        return List {
            ForEach(data.indices) { index in
                Section(header: Text(titles[index]), footer: HStack { Spacer(); Text("\(data[index].count)건")}
                ) {
                    ForEach(data[index], id: \.self) {
                    
                        Label($0, systemImage: "globe.fill")

                    }
                }
            }
        }
    }
}


#Preview {
    ContentView()
}

```
![alt text](<스크린샷 2026-04-21 오후 7.58.33.png>)

## ListStyle
* ListStyle을 사용하기위해서는 List { ... } / .listStyle() 처럼 리스트 밖에 스타일을 추가해줘야 한다

### ListStyle 종류

**ios에서 쓰는 ListStyle 종류**

DefaultListStyle()  - 기본 리스트 스타일

GroupedListStyle() - 각 섹션을 분리된 그룹으로 묶어 표현하는 스타일

InsetGroupedListStyle()-iOS 설정 앱처럼 예쁘게 만들어주는 List 스타일

PlainListStyle() - 데이터 목록을 각 행마다 하나씩 나열하는 형태의 기본 스타일

InsetListStyle()-여백만 넣은 깔끔한 리스트 스타일

SidebarListStyle()-왼쪽 메뉴용 리스트 (앱 구조 잡는 핵심임!)


## onDelete / onMove

List 내부에있는 텍스트를 옮기거나(move) 삭제(delete)할 수 도 있음 이것을 사용하려면 .onDelete(perform: ) 와 .onMove(perform: ) 를 사용하고 함수를 정의해줘야 한다

### 1. onDelete(삭제)
*예시*
```swift
 func removeList(at offsets: IndexSet) {
        users.remove(atOffsets: offsets)
    }
```

### 2. onMove(이동)
*예시*
```swift
    func moveList(from source: IndexSet, to destination: Int) {
        users.move(fromOffsets: source, toOffset: destination)
    }
```

이 코드들을 사용하려면 List를 네비게이션뷰로 감싸고 그옆에 edit버튼을 추가해줘야 쓸수 있다 버튼이 없으면 Text를 슬라이스해서 삭제 할수는 있지만 Move는 못하기 때문이다

```swift
.toolbar { EditButton() }
// edit 버튼 넣기
```

## Selection in Lists
* 목록 데이터의 Identifiable 단일 인스턴스에 바인딩
    * Id 유형은 단일 선택 목록을 생성합니다. Set에 바인딩하면 여러 선택 항목을 지원하는 목록이 생성

예시로 만들어보자!
1. @State 변수를 추가해 준다
2. NavigationView를 생성 후 List에 multiSelection을 추가해준다
3. NavigationBarTitle을 이용하여 이름을 설정해주고, 그 옆에 .toolbar { EditButton() } 를 추가해 선택 가능한 버튼을 만들어 준다 
4. 화면 하단에 몇개가 선택 되었는지 표시해줍니다
```swift
4
import SwiftUI

struct Ghibli: Identifiable {
    let name: String
    let id = UUID()
}
private var ghibli = [
    Ghibli(name: "마뇨"),
    Ghibli(name: "사스케"),
    Ghibli(name: "소피아"),
    Ghibli(name: "치히로"),
    Ghibli(name: "하쿠"),
    Ghibli(name: "토토로")
]

struct ContentView: View {
    
    @State private var multiSelection = Set<UUID>()
    
    var body: some View {
        NavigationView {
            List(ghibli, selection: $multiSelection) {
                Text($0.name).font(.system(size: 20))
                
            }
            .navigationBarTitle("Studio Ghibli")
            .toolbar { EditButton() }
        }
        Text("\(multiSelection.count) selections")
    }
    
}
#Preview {
    ContentView()
}

```
![](<스크린샷 2026-04-21 오후 8.37.36.png>)

# editbutton 쓴거

![alt text](<스크린샷 2026-04-21 오후 8.38.15.png>)


# 리스트의 여백 설정 listRowInsets

list에는 기본적으로 padding이 들어가있다

이 padding을 더 쉽게 보려면 이미지를 적용하면 더 쉽게 볼수가있다

이 여백을 설정하고 싶으면 listRowInsets 를 사용하면 된다

```swift
.listRowInsets(EdgeInsets.init())

.listRowInsets(EdgeInsets.init(top: , leading: , bottom: , trailing: ))
```
