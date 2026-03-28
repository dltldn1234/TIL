# 컬렉션(여러 개의 값을 모아서 저장하는 자료형(데이터 묶음)타입)

# Array(배열)
* 순서가 있는 리스트 컬렉션
```swift
// 배열 만들기
var arr = [1, 2, 3]
// 값 추가
arr.append(4)
```
## 불변Array
```swift
// let을 사용하여 Array를 선언하면 "불변"
let immutableArray = [1, 2, 3]
```

# Dictionary
* 키와 값의 쌍으로 이루어진 컬렉션
```swift
// Key가 string 타입이고 Value가 Any인 Dictionary 생성
var anyDictionary: Dictionary<String, Any> =[String: Any]()
```
### 비유

  사물함 

key = 번호

value = 안에 있는 물건

# Set
* 순서가 없고, 멤버가 유일한 컬렉션
```swift
// 중복이 자동으로 제거 된다
var set: Set = [1, 2, 3, 3, 2]
print(set) // [1, 2, 3]
```
### Set = 중복 제거용 배열 느낌

##  Append - 요소를 추가해주고 싶을때 쓴다 배열 뒤에 넣음

* 맨 뒤에 넣기 라는 뜻

## Contains - 어떤 값이 배열, 문자열, 집합 등에 포함되어 있는지 확인하는 함수이다

* 이 안에 이 값 있어? 라는 뜻

## Remove - 배열(Array)이나 컬렉션에서 값을 삭제하는 함수이다

* 이거 지워라 라는 뜻

## Count - 몇 개가 들어있나? 를 확인하는 함수

## Insert - 값을 특정 위치에 끼워 넣는 함수

* 중간에 끼워넣기 라는 뜻
