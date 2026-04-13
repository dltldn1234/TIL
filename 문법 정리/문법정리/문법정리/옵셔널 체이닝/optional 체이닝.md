# 옵셔널 체이닝
**값이 있을 수도 있고(nil일 수도 있는 걸 안전하게 접근하는 방법)**

* 옵셔널 체이닝은 옵셔널 요소 내부의 프로퍼티로 
또다시 옵셔널이 연속적으로 연결되는 경우 유용하게 사용할 수 있다

* nil이면 멈추고 아니면 계속 실행 

*예를들어보자*
```swift
class Student {
    var name: String?
}

let student = Student()

// 값이 있을 때
student.name = "Siwoo"
print(student.name?.count)  // 5

// 값이 없을 때 (nil)
student.name = nil
print(student.name?.count)  // nil
```

### 옵셔널 체이닝이 실행 후 결과값이 nil일 수 있으므로 결과 타입도 옵셔널이다

# 옵셔널 체이닝의 장점 
* 안전하다
    * nil일 때 에러 없이 nil 반환
* 강제 추출(!) 안 써도 됨
    * ! 쓰면 잘못하면 런타임 에러 남
* 코드가 간결해짐
    * if-let 없이도 바로 접근 가능
```swift
// 옵셔널 체이닝
student.name?.count

// 기존 방식
if let name = student.name {
    print(name.count)
}
```


# nil 병합 연산자 
* 옵셔널 값이 nil이면 대신 다른 값을 쓰는 연산자

**값이 없을 때**
```swift
let name: String? = nil

print(name ?? "Guest")  // Guest
// name이 nil 이라서 다른값 출력
```
**값이 있을 때**
```swift
let name: String? = "Siwoo"

print(name ?? "Guest")  // Siwoo
// name에 값이 있으므로 값 출력
```