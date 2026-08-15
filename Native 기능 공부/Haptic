# Haptic
* Haptic이란 사용자에게 촉각으로 피드백을 주는 기능이다

**예를 들면**
```swift
버튼 눌렀을 때 톡
Picker 돌릴 때 톡톡
작업 성공했을 때 특정 진동
실패했을 때 다른 느낌의 진동
```
이런 것들이다

단순히 폰을 부우웅 진동시키는 개념보다는, UI에서 사용자의 행동에 대한 촉각 피드백을 주는 것이라고 이해하면 쉽다

# SwiftUI에서 쓰는 방법

```swift
.sensoryFeedback()
```
```swift
import SwiftUI

struct ContentView: View {
    @State private var count = 0

    var body: some View {
        Button("눌러봐") {
            count += 1
        }
        .sensoryFeedback(.impact, trigger: count)
    }
}
```
**간단한 예제 코드가 있는데 여기서 주목해야 할 코드가 `trigger: count` 이게 중요하다**

#### `trigger: count`는 count 값이 변하면 햅틱이 실행되는 구조이다
* Apple 공식 문서도 trigger 값이 변경될 때 지정된 feedback을 재생한다고 설명함

```
버튼 누름
    ↓
count += 1
    ↓
count 값 변경
    ↓
sensoryFeedback 감지
    ↓
Haptic 발생
```
**이런 형식으로 Haptic이 일어나는 것 이다다**

# Haptic의 종류 

선택이 바뀌었을때는 
```
.sensoryFeedback(.selection, trigger: selection)
```
Impact를 줄때
```
.sensoryFeedback(.impact, trigger: count)
```
성공 할때
```
.sensoryFeedback(.success, trigger: isSuccess)
```
경고 할때
```
.sensoryFeedback(.warning, trigger: warning)
```
에러가 뜰때
```
.sensoryFeedback(.error, trigger: hasError)
```

그리고 Impact에서는 강도의 개념도 있다
```
.sensoryFeedback(
    .impact(weight: .heavy, intensity: 1.0),
    trigger: count
)
```
Apple의 `SensoryFeedback.Weight`에는 `light, medium, heavy` 같은 무게 표현이 있고 `impact(weight:intensity:)`에 사용할 수 있다

