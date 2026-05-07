# 열거형(Enum)
**정해진 값들만 사용 할 수 있게 묶어 놓은 타입**

## Enum은 타입이므로 대문자 카멜케이스를 사용하여 이름을 정의함

* 카멜케이스(변수나 함수 이름을 쓸 때 단어를 붙이되, 두 번째 단어부터 대문자로 쓰는 방식)

     *  왜? 카멜케이스냐 : 낙타 등처럼 중간중간 올라가 보인다고 해서 camelCase임
## 각 case는 소문자 카멜케이스로 정의함


## 각각의 Case가 고유의 값이 됨

* Case별로 각각 다른 값을 가져야함
---- 

```swift
enum 이름 {
    case 이름1
    case 이름2
    case 이름3, 이름4, 이름5
    ...
}
```
*열거형 사용 예시*
```swift
enum Weekday {
    case mon
    case tue
    case wed
    case thu, fri, sat, sun
}
```


# 원시값

## 원시값 이란?
**더 이상 쪼갤 수 없는 가장 기본 데이터**

* 한마디로 프로그래밍에서 제일 기본 단위

C언어의  enum처럼 정수값을 가질 수도 있다

raeValue를 사용하면 됨!

case별로 각각 다른 값을 가져야함

*원시값 예시*
```swift
let a = 10         // 숫자 (Int형)
let b = 3.14       // 실수 (Double형)
let c = "Hello"    // 문자열 (String향)
let d = true       // 불린 (Bool형)
let e: Int? = nil  // 값 없음 (nil형)
```
# 원시값을 통한 초기화도 가능

### rawValue
* 열거형(enum) 안에 있는 각 케이스에 붙는 실제 값

rawValue를 통해 초기화 한 인스턴스(클래스로 실제 만들어진 객체)는 옵셔널 타입이다

rawValue가 case에 해당하지 않을 수 있음

rawValue를 통해 초기화 할 수 있다
