># 모델링(Modeling)
* 데이터를 어떤 구조로 표현할지 설계하는 것 = 데이터를 목적에 맞게 구조화하고 설계하는 과정

모델링에서 하는 과정들

># DTO
**Data Transfer Object**    (데이터 전송계층)
* DTO는 원시값이다

DTO의 예시

```swift
import Foundation
//서버(Json)에서 받아오는 원시값
struct 서버통신 : Decodable {
    let userId: Int
    let id: Int
    let title: String
    let body: String
}
//서버 데이터를 앱에서 쓰는 형식으로 변환 하는 부분
extension 서버통신: Identifiable { // 맵핑
    func todomain() -> post{  //서버용 데이터를 앱 내부용 데이터로 변환
        
        return post(
            user:userId,
            text:id,
            a:title,
            head:body
        )
        
    }
}
    // extension은 맵핑을 하는 함수 todomain을 쓸수있게함 todomain은 에약어가 아님 to????로 적는것 이다
    

    //앱에서 실제로 사용하는 데이터 구조
    struct post {
        let user: Int
        let text: Int
        let a: String
        let head: String
    }

```

># 실무에서는 서버 구조랑 앱 구조를 분리함
**왜냐?**
* 서버의 구조가 바뀔수도 있다
    * 서버 모델을 그대로 쓰면 서버에서 뭔갈 바꾸면 앱에서의 코드가 전체 오류가 나지만 중간에 도메인 모델이 있으면 서버 모델과 변환 모델만 수정하면 코드에 오류가 나지 않기 때문에 "서버 변경에 대응" 이 쉽다

* 앱 구조를 읽기 더 쉽게 바꾸려고
    * 나랑 팀원들이 유지보수를 하니까 필요하다 나중에 보기 편함!

* 앱만의 데이터 추가 기능
    * 앱에서 필요한 형태로 데이터를 재조립 하는 느낌

* 유지보수가 쉬움
    * 나중에 코드를 수정하려고 봤는데 뒤죽박죽이면 보기가 힘드니까 보기 편하게 정렬 할수있다



**여기에 key랑 value이 쓰인다 근데 swift에서 유연하게 쓰일수는 없다**
* swift가 타입 안정성을 중요시해서  명확한 구조체를 만들어서 쓰기때문

서버 데이터를 Swift 앱 내부에서 안전하고 읽기 쉽게 사용하도록 만든 구조
가 Domain Model 이다

># Domain Model
* 앱이 실제로 사용하기 편하게 정리한 데이터 구조

예시
```swift
택배를 시키면 상자랑 안에 내용물이 같이 오는데 택배 그대로 온걸 서버 데이터라고 하고
그 필요한 물건을 꺼낸게 바로 Domain model 이다
```
***즉 필요한 형태로 전환된 데이터라고 할수있다***




># Mapping(맵핑)

* 한 데이터를 다른 형태의 데이터로 변환하는 것

예시 
```swift
title_A : string 가 DTO에서 Domain Model로 넘어오면 title : string
```

># 실제 모델링이 되는 과정


```swift
서버(JSON)
↓
DTO(서버랑 통신하기 위한 모델)
↓
Mapping ( DTO를 앱용으로 변환)
↓
Domain Model(앱 내부에서 실제 사용하는 모델)
↓
UI(앱에서 우리가 보는 화면)
```


