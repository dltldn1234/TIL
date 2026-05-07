# Swift의 기본 데이터 타입


## Bool
* true 와 false만 가진다 (이외의 값은 오류가 뜸)

```swift
var someBool: Bool = true
someBool = false
//someBool = 0
//someBool = 1
```

## Int
* 정수형 타입 양수 음수 0 포함(이외에는 오류가 뜸)
```swift
var someInt: Int = -100
//someInt = `100.1은 오류
```

## Uint
* 부호가 없는 정수 ( 양의 정수)  만 가능 0도 가능
```swift
var someUint: Uint= 100
// someUint = -100은 오류
```

## Float
* 부동 소수형 타입 소수를 지정하는 타입
```swift
var someFloat: Float = 3.14
// someFloat = 3을 넣어줘도 문제 없음
```

## Double
* 부동 소수형 실수를 저장하는 자료형 (float보다 실무에서 많이 씀 정밀도가 높다)
```swift
var someDouble: Double =3.14
// someDouble = 3 도 허용
```

## Character
* 유니코드( 한국어나 이모지 등) 를 표현하는 타입 큰 따움표 사용 문자 한개만 사용해야함 안그럼 string으로 넘어감
```swift
var someCharacter: Character = "🥀"
// someCharacter = "😎"
// someCharacter = "가"
// someCharacter = "A"
// someCharacter = "하하하"는 문자열로 타입 오류뜸
```

## String
* 문자열 타입 여러 문자를 넣을수 있음 연산문자를 사용하여 문자를 합칠수도 있다 character로 변환 가능
```swift
var someString: String = "하하하 😎"
// someString = someString + "하하 웃으면 행복해" 연산숫자를 사용해서 문자열을 합칠수도있다
```

---


부동소수 : 소수를 컴퓨터가 저장하고 계산하는 방식( 소수점이 움직이는 숫자 표현 방법)