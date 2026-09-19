# 옵셔널
**값이 `있을 수도, 없을 수도 있음'**
## 옵셔널이 왜 필요할까?
### Nil(값이 존재하지 않는 상태)의 가능성을 명시적으로 표현 대소문자 구분해야됨

- nil 가능성을 문서화 하지 않아도 코드만으로 충분히 표현가능
- 전달받은 값이 옵셔널이 아니라면 nil체크를 하지 않더라도 안심하고 사용
- 예외 상황을 최소화하는 안전한 코딩
- 문서/주석 작성 시간을 절약
- 효율적인 코딩

## 옵셔널을 표현하는방법

## !
**암시적 추출 옵셔널**
```swift
var optionalValue: Int! = 100
switch optinalValue {
case .nono: 
    print("This Optional variable is nil")
case .some(let value):
    print("Value is \(value)")
}
``` 


1. 기존 변수처럼 사용 가능
```swift
optionalValue = optionalValue + 1
```
2. nil 할당 가능 
```swift
optionalValue = nil
```

3. 잘못된 접근으로 인한 런타임 오류 발생
```swift
optionalValue = optionalValue + 1
```


## ?
**옵셔널 타입**
```swift
var optionalValue: Int? = 100
switch optinalValue {
case .nono: 
    print("This Optional variable is nil")
case .some(let value):
    print("Value is \(value)")
}
```
1. nil 할당 가능 
```swift
optionalValue = nil
```
2. 기존 변수처럼 사용불가-옵셔널과 일반 값은 다른 타입이므로 연산불가
```swift
optionalValue = optionalValue + 1 
```
