# Navigation

* 화면 -> 화면으로 이동하는 구조를 만드는 핵심 기능

특징

* 자동으로 뒤로가기 버튼이 생성됨
* 선언형UI라서 가독성이 좋음!
* 버튼처럼 화면이동이 가능함
* 최신방식인 Stack이 나와서 View 보다 안정적임  View(는 ios 15이하만 가능) 


## Navigation에서의 push와 pop이란?

* Push는 화면 이동 이라고 보면 된다

* Pop는 뒤로 가기라고 보면 된다

# NavigationStack

* 후속 탐색에서 뷰를 설정하는 데 사용되고 새 뷰를 이전 뷰 위에 쌓아서 하나의 뷰가 항상 맨위에 있음

```swift
NavigationStack {
    Text("홈 화면")
}
```

* 뷰 위에 다른 뷰들을 계층적 스택(Stack) 구조로 쌓고(push) 제거(pop)하는 화면 전환을 관리

**핵심!**

NavigationStack의 핵심은 

화면 이동은 UI가 아니라 상태(state)로 관리한다 라는 것이다!





## NavigationLink

기본 형식

* 버튼처럼 사용하면서 화면 이동함

```swift
NavigationStack {
    NavigationLink("ios good") {
        Text("apple View")
    }
}
```

## Navigation Title
상단에 네비게이션 바를 만드는것 

예시
```swift
NavigationStack {
    Text("king bob View")
        .navigationTitle("KIng Bob!!")
}
```
**타이틀의 옵션으로 navigationBarTitleDisplayMode이것을 통해서
타이틀의 스타일을 조정해줄수있음**

![alt text](<스크린샷 2026-04-14 오후 10.50.16.png>)

**automatic**
* 가장 적절한 화면 전환 방식을 자동으로 결정하는 스타일을 의미함

**inline**
* 타이틀(제목)을 화면 상단 내비게이션 바 내부의 표준 위치(중앙)에 작게 표시하는 모드를 의미함

**large**
* 내비게이션 바의 제목을 더 크고 강조하여 보여주는 기능임


## Navigation 총 정리

* NavigationStack-> 화면 전환을 관리

* NavigationLink-> 버튼처럼 활용함

* Navigation Title->네비게이션바 생성