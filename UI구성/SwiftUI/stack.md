# 1. Stack은 언제 쓸까?
 * 한 개 이상의 View를 묶어서 배치할 때 사용 한다
 ```swift
 struct ContentView: View {
    var body: some View {
        Text("Hello, world!")
        Text("Hello, world!2")
    }
}
// Text들을 view로 통합한것
 ```

 # Stack의 종류 

1. HStack

2. VStack

3. ZStack


----

# HStack
**내부에 선언된 View들을 Leading에서 Trailing으로 배치함**

* HStack은 View를 "수평"으로 배치해주는 View
    * 배치 방향이 Leading(왼쪽) -> Trailing(오른쪽)

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        HStack {
            Text("나는 시우!")
            Text("안녕 친구들")
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
```

# VStack
**내부에 선언된 View들을 Top에서 Bottom으로 배치함**

* VStack은 View를 "수직"으로 배치해주는 View
    * 근데 이제 배치 방향이 Top(위) -> Bottom(아래)

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("나는 시우에요")
                .background(.green)
            Text("만나서 다들 방갑구리~")
                .background(.mint)
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
```

# ZStack
**내부에 선언된 View들을 겹쳐서 두 축으로 배치함=View를 겹쳐서 쌓는 스택**
* 내가 보고 있는 화면의 방향으로 뷰를 배치한단 것

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Text("ios 사랑해요")
                .background(.orange)
                .font(.system(size: 100))
            Text("준표형 사랑해요")
                .background(.brown)
                .font(.system(size: 50))
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
```

## 내부 뷰의 크기가 다를 경우!

* 너비 or 폭이 가장 큰 놈에 의해서 프레임이 맞춰진다

### Stack의 Frame을 직접 지정해주고 싶을 경우에는!
* .frame이라는 modifier를 이용해서 직접 설정해줄 수 있음

## modifier이란?
* View에 효과(스타일, 동작)를 추가하는 함수이다

## Stack 내의 정렬 방식 변경하기

stack들은 기본 정렬이 .center이기 때문에 항상 가운데로 정렬이 되는것임 이것을 바꾸려면 
* Stack을 생성할 때 파라미터 값으로 alignment를 직접 설정해 줄 수 있음
![alt text](<스크린샷 2026-04-07 오후 10.45.32.png>)

VStack의 경우 trailing / leading / center 총 세가지가 있는데,

이를 만약 trailing으로 바꿔주면, 
오른쪽으로 텍스트 정렬이 바뀐다

# Stack의 종류에 따라 정렬 방식이 각각 다 달라진다??

**Stack**에 따라서 정렬 방식이 달라짐!
![alt text](<스크린샷 2026-04-07 오후 10.56.38.png>)


# Stack 내의 여백 크기 변경하기
### spacing을 사용해서 여백의 크기를 변경한다
Stack 내부 뷰 간격 간의 여백을 지정하는 **spacing**이란 파라미터의 기본 값은 nil 이지만

이때 nil은 0이 아니라 기본 값이다


## 만약 여백을 직접 설정하고 싶거나 아예 없애고 싶다면?
정렬과 처럼 Stack을 생성할 때 파라미터 값으로 spacing을 설정해 줄 수 있음@@

![alt text](<스크린샷 2026-04-07 오후 11.09.59.png>)