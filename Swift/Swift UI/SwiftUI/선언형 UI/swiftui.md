# Swift Ui 구성
**Swift는 사용자 인터페이스 디자인을 선언형 방식으로 제공함**

## 용어 익히기!
**뷰란?**
* 화면을 구성하는 요소 하나하나
```swift
Text("안녕")       // 글자
Image("cat")      // 이미지
Button("클릭") { } // 버튼
VStack { }        // 레이아웃
```
## VStack이란?
* VStack = View들을 **세로로** 쌓는 레이아웃
```swift
VStack {
    Text("첫 번째")
    Text("두 번째")
    Text("세 번째")
}
```
**위에서 아래로 순차적으로 진행된다**


## 수정자란?
* View의 모양이나 속성을 바꾸는 것

*예를 들어보자*
```swift
Text("안녕")
    .font(.title)
    .foregroundColor(.blue)
``` 
이렇게 있으면 .font와 .foregroundColor이 수정자이다
글씨 **모양**을 바꾸고 색깔을 **수정**했기 때문이다

## 컴포지트란?
* 여러 View를 하나처럼 묶어서 사용하는 구조
    * 쉽게 말하면: 작은 View들을 합쳐서 하나의 큰 View처럼 쓰는 것
```swift
VStack {
    Text("아이디")
    Text("비밀번호")
    Button("로그인") { }
}
```
```swift
// 여기서 Text와 Button은 작은 view들이고 VStack이 이것들을 묶은 큰 view라고 생각 하면 된다.
```


-
-
-
## 선언형이란?
* 결과적으로 화면이 어떤 모습이어야 하는지를 쓰는 방식

### 명령형 방식
* 뷰를 생성
* 뷰 배치하기
* 뷰 설정하기
* 상태 변화에 따라 지속적으로 업데이트하는 책임

이 모든걸 **컨트롤러 코드가 부담함**

**하지만 선언형 방식은 UI의 원하는 레이아웃을 반영하는 뷰 계층을 선언함으로
사용자 인터페이스의 간단한 설명을 만듬**
그리고 나서 Swift UI가 사용자 입력이나 상태 변화 같은 이벤트에 반응 하여 뷰를 그리거나 업데이트 하는 과정을 관리한다

* **SwiftUI는 사용자 인터페이스 내에서 뷰를 정의하고 구성하기 위한 도구를 제공한다**

* **SwiftUI가 제공하는 내장 뷰들과 이미 정의된 다른 컴포지트 뷰들을 조합하여 커스텀 뷰를 만들 수 있다**


# View 프로토콜을 따르기
**커스텀 뷰 타입을 선언하려면 View 프로토콜을 따르는 구조체를 정의 해야함!**

```swift
struct ContentView: View {
    var body: some View {
        Text("안녕")
    }
}
```
**코드를 해석해보자면**
* struct ContentView = 우리가 만든 화면
* : View = view 프로토콜을 따른다는 표시
* var body: some View = 이거는 없으면 안되는것 나 어떻게 생겼다고 보여주는거

# body 선언하기
**view 프로토콜의 주요 요구사항이 body라는 계산 프로퍼티를 정의 하는것 이다**
```swift
struct MyView: View {
    var body: some View {
    }
}

```

SwiftUI는 뷰를 업데이트할 필요가 있을 때마다 이 프로퍼티의 값을 읽는다

이러한 업데이트는 사용자 입력이나 시스템 이벤트에 반응하여 반복적으로 일어날 수 있음 이때 반환된 값은 SwiftUI가 화면에 그리는 요소이다!

view 프로토콜의 부가적인 요구사항이 body 프로퍼티에 대한 연관된 타입을 지정해야 한다는것이다 
그러나 이 타입을 명시적으로 선언할 필요가 없음 대신 some View라는 "불투명 타입"을 사용 하여 body의 반환값이 view 프로토콜을 따른다는 사실만 명시하면된다

# 뷰 콘텐츠 구성하기
* body 안에 View들을 배치해서 화면을 만드는 것

**body프로퍼티에 콘텐츠를 추가하여 뷰의 외형을 설명을 함 스위프트에서 제공하는 내장되어있는 뷰 말고 다른 곳에서 정의한 커스텀 뷰도 사용 할수있음**

예를 들어, 내장 Text 뷰를 사용하여 “Hello, World!“라는 문자열을 표시할 수 있음
```swift
struct MyView: View {
    var body: some View {
        Text("Hello, World!")
    }
}
```


SwiftUI는 Text, Toggle, ProgressView와 같은 특정 콘텐츠를 위한 뷰 외에도, 다른 뷰들을 정렬하는 데 사용할 수 있는 내장 뷰들을 제공합니다. 예를 들어 VStack을 사용해 두 개의 Text 뷰를 수직으로 쌓을 수 있다
```swift
struct MyView: View {
    var body: some View {
        VStack {
            Text("Hello, World!")
            Text("Glad to meet you.")
        }
    }
}
```


# 뷰를 수정자로 구성하기

* body에 정의된 뷰를 설정하려면 뷰 수정자(view modifier)를 적용한다.

*  수정자는 뷰에 호출되는 메서드일 뿐이며, 호출 시 원래 뷰 대신 사용할 수 있는 새로운 뷰를 반환합니다


* SwiftUI는 이를 위해 View 프로토콜에 다양한 메서드를 확장으로 제공합니다.

*  모든 View 프로토콜 채택자는 — 내장 뷰든 커스텀 뷰든 — 이러한 메서드를 통해 뷰의 동작을 변경할 수 있음

 예를 들어, 텍스트 뷰의 폰트를 .title로 설정하려면 다음과 같이 작성한다
```swift
struct MyView: View {
    var body: some View {
        VStack {
            Text("Hello, World!")
                .font(.title)
            Text("Nice to meet you.")
        }
    }
}

```



#  뷰 계층에 추가하기
**뷰를 정의한 후에는, 내장 뷰와 마찬가지로 다른 뷰 안에 포함시킬 수 있고. 뷰를 어디에 나타내고 싶은지에 따라 해당 위치에 선언하면 된다.**

**예를 들어, Xcode가 새로운 앱 프로젝트에서 루트 뷰로 생성하는 ContentView 안에 MyView를 넣을 수 있다**
```swift
struct ContentView: View {
    var body: some View {
        MyView(helloFont: .title)
    }
}
```
