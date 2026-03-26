# 콘솔로그

**프로그램 실행 중에 값을 출력해서 확인하는 것**
```swift
var score = 100
print("현재 점수:", score)
```


# Print

**단순한 문자열 출력**

**특징**
- 콘솔에만 출력됨
- 사용자 화면에서는 안보임
- 문자열, 숫자,변수 등 값 출려 가능


```swift
print("Hello, World!")
```

# dump

**인스턴스의 자세한 설명 (description 프로퍼티) 까지 출력**
- 변수 안에 들어있는 모든 정보 출력
- 구조체, 클래스 같은 복잡한 데이터 분석에 좋음
- print보다 더 자세하게 보여줌

```swift
struct User {
    var name = "siwoo"
    var age = 17
}

let user = User()
dump(user)
```
