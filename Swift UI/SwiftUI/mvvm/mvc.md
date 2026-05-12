# MVC

-MVC는 앱을 역할별로 나누어서 개발하는 구조이다-
```swift
M = Model
V = View
C = Controller
```
각자 맡은 역할이 서로 다름

## Model

-Model은 데이터를 관리하는 역할이다-

예를 들어 게시물 앱이 있다고 가정하면
```swift
제목
설명
날짜
```
같은 데이터들을 저장하고 관리한다

또 서버에서 받은 JSON 데이터를 Swift 구조체로 디코딩하는 역할도 한다

```swift
struct Post: Decodable {
    let title: String
    let description: String
    let date: String
}
```

Model은 데이터의 형식과 구조를 정의함


## View

View는 사용자에게 보이는 화면(UI)을 담당한다.

*예시*
```swift
버튼
이미지
텍스트
화면 배치
```
등등을 구성함

사용자는 View를 통해 앱을 사용하게 된다


*예시*
```swfit
Text("로그인")
Button("확인") {

}
```
즉, View는 화면을 그리는 역할이다

## Controller

Controller는 Model과 View를 연결하는 역할이다.

사용자가 버튼을 누르면

1.Controller가 이벤트를 감지

2.서버에 요청(Request)

3.응답(Response) 받기

3.Model로 디코딩

4.View 업데이트

를 한다

즉, 앱의 전체 흐름과 로직을 처리하는 "중심" 역할이다


## MVC의 흐름

```swift
사용자
 ↓
View
 ↓
Controller
 ↓
Server
 ↓
Model(디코딩)
 ↓
Controller
 ↓
View 업데이트
```