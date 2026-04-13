# Swift UI action

## action 클로저란?

**버튼, 토글 등 사용자 인터페이스 요소가 상호작용(클릭, 탭 등)을 받았을 때 실행되는 코드 블록이다**

*기본적인형식*
```swift
Button(action: {
    print("버튼 눌림.")
}) {
    Text("시작하세요") // 버튼의 모습
}
```
action 은 ()-> Void 타입의 클로저가 와야한다
* 인수가 없고 반환값이 존재하지 않는 함수나 클로저가 와야한다는 뜻!

외부에서 함수를 지정해도 되고 내부에서 동작을 지정해도 된다

*예시*
```swift
import SwiftUI

struct ButtonTest: View {
    
    func someFunc() -> Void{
        print("안녕 친구!")
    }
    
    var body: some View {
        
        let someClosure = { () -> Void in
            print("안녕 반가워")
        }
        
        Button(action: {
            print("안녕")
            
            someClosure()
            
            someFunc()
            
        }, label: {
            VStack{
                Image("하이파이브")
                    .resizable()
                    .frame(width:999 , height: 999)
                    .cornerRadius(999)
                
                Text("나를 클릭해!")
            }
        })  
    }
}
```

## label이란 ?
label은 이미지와 텍스트를 조합하여 사용자에게 인터페이스(매개체)의 의미를 명확하게 전달하는 구성요소중 이다


# 생략형태

```swift
Button(action: {
	print("hello world")
}){
	Text("Click")
}
```

여기에서 텍스트 컴포넌트를 생략하고 string 값만 넣는 형태도 지원한다

```swift
Button("Click Me"){
	print("hello world")
}
```


