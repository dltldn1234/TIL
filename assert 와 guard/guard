# guard
* 조건이 안 맞으면 바로 종료시키는 문법

# Early Exit
* guard를 사용하여 잘못된 값의 전달 시
특정 실행구문을 빠르게 종료합니다

* 디버깅 모드 뿐만 아니라 어떤 조건에서도 동작함
guard의 else 블럭 내부에는
특정 코드블럭을 종료하는 지시어(return, break 등)가
꼭 있어야 함

* 타입 캐스팅, 옵셔널과도 자주 사용된다

* 그 외 단순 조건 판단후 빠르게 종료할 때도 용이하다
*예시*
```swift
func checkAge(age: Int?) {
    guard let age = age else {
        print("나이가 없습니다")
        return
    }
    
    print("나이: \(age)")
}
```