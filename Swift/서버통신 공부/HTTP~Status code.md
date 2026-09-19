#  Swift 서버 통신 (HTTP ~ Status Code)

> iOS 개발에서 서버와 데이터를 주고받기 위해 반드시 알아야 하는 기본 개념

---

# 1. Client - Server 구조

## Client

사용자가 사용하는 프로그램이다.

예시
- iPhone 앱
- 웹 브라우저
- Android 앱

사용자의 요청(Request)을 서버로 보내고 응답(Response)을 받아 화면에 출력한다.

---

## Server

클라이언트의 요청을 처리하는 컴퓨터이다.

역할

- 데이터 저장
- 로그인 처리
- 회원가입 처리
- 게시글 저장
- 이미지 저장
- 응답 반환

---

## 동작 과정

```text
iPhone App
     │
Request
     │
     ▼
 Server
     │
Response
     │
     ▼
iPhone App
```

예시

사용자가 로그인 버튼을 누른다.

↓

앱이 서버에게

"아이디와 비밀번호가 맞나요?"

라고 요청한다.

↓

서버가 확인한다.

↓

성공 또는 실패를 반환한다.

↓

앱이 화면을 변경한다.

---

# 2. HTTP란?

HTTP(HyperText Transfer Protocol)

클라이언트와 서버가 데이터를 주고받기 위한 통신 규칙(Protocol)이다.

쉽게 말하면

> "앱과 서버가 대화하는 방법"

이다.

예시

```
앱
↓

GET /users

↓

서버

↓

회원 목록 반환
```

---

# 3. HTTPS란?

HTTPS는 HTTP에 보안(SSL/TLS)이 추가된 프로토콜이다.

차이점

HTTP

- 암호화 X
- 중간에서 데이터 확인 가능

HTTPS

- 암호화 O
- 안전하게 통신 가능

현재 대부분의 서비스는 HTTPS를 사용한다.

---

# 4. Protocol(프로토콜)

프로토콜은

> "통신 규칙"

이다.

사람도 대화 규칙이 있듯이

컴퓨터도 규칙이 있어야 통신할 수 있다.

예시

- HTTP
- HTTPS
- FTP
- TCP
- UDP

---

# 5. Request와 Response

## Request(요청)

클라이언트가 서버에게 보내는 데이터

예시

```
로그인 해주세요.

회원 정보를 주세요.

게시글을 작성해주세요.
```

---

## Response(응답)

서버가 클라이언트에게 보내는 데이터

예시

```
로그인 성공

회원 정보

게시글 저장 완료
```

---

## 전체 흐름

```text
Client

↓

Request

↓

Server

↓

Response

↓

Client
```

---

# 6. URL

URL(Uniform Resource Locator)

인터넷에서 서버의 위치를 나타내는 주소이다.

예시

```
https://api.test.com/users
```

구성

```
https://
```

프로토콜

```
api.test.com
```

도메인

```
/users
```

경로(Path)

---

# 7. URI

URI(Uniform Resource Identifier)

리소스를 식별하는 모든 방법을 의미한다.

URL은 URI의 한 종류이다.

즉,

```
URI > URL
```

관계이다.

---

# 8. Endpoint

Endpoint

API의 최종 주소이다.

예시

```
GET /users
```

```
POST /login
```

```
DELETE /users/3
```

Endpoint마다 기능이 다르다.

---

# 9. Path Parameter

주소 자체에 값을 포함하는 방식

예시

```
GET /users/15
```

15번 회원 조회

---

```
GET /posts/30
```

30번 게시글 조회

특정 리소스를 조회할 때 많이 사용한다.

---

# 10. Query Parameter

? 뒤에 값을 전달하는 방식

예시

```
GET /users?page=2
```

2페이지 조회

---

```
GET /users?name=siwoo
```

이름이 siwoo인 회원 조회

---

여러 개도 가능

```
GET /users?page=2&size=10
```

---

# Path Parameter vs Query Parameter

Path

```
/users/15
```

특정 데이터를 찾을 때

---

Query

```
/users?page=2
```

조건을 전달할 때

---

# 11. Header

Request 또는 Response의 부가 정보를 저장하는 공간이다.

예시

```
Authorization

Content-Type

Accept

User-Agent
```

대표적으로

로그인 토큰

콘텐츠 타입

앱 버전

등을 전달한다.

---

# 12. Body

실제 데이터를 담는 공간이다.

회원가입

로그인

게시글 작성

등에서 많이 사용된다.

예시

```json
{
    "email":"test@test.com",
    "password":"1234"
}
```

---

# Header와 Body 차이

Header

- 부가 정보

Body

- 실제 데이터

---

# 13. HTTP Method

HTTP Method는

"무슨 작업을 할 것인지"

를 의미한다.

---

## GET

조회

예시

```
회원 조회

게시글 조회
```

데이터를 가져오기만 한다.

---

## POST

생성

예시

```
회원가입

로그인

게시글 작성
```

새로운 데이터를 만든다.

---

## PUT

전체 수정

기존 데이터를

전부 교체한다.

---

## PATCH

부분 수정

일부만 수정한다.

예시

닉네임만 변경

프로필 사진만 변경

---

## DELETE

삭제

예시

회원 삭제

게시글 삭제

---

# CRUD

Create

POST

---

Read

GET

---

Update

PUT / PATCH

---

Delete

DELETE

---

# 14. HTTP Status Code

서버가 요청 처리 결과를 알려주는 숫자이다.

---

## 200 OK

요청 성공

---

## 201 Created

데이터 생성 성공

회원가입

게시글 작성

---

## 204 No Content

성공했지만

보낼 데이터는 없음

---

## 400 Bad Request

잘못된 요청

예시

필수값 누락

형식 오류

---

## 401 Unauthorized

인증 실패

로그인이 안되어 있음

토큰 만료

---

## 403 Forbidden

권한 없음

로그인은 했지만

접근 권한이 없음

예시

일반 사용자가 관리자 페이지 접근

---

## 404 Not Found

주소가 없음

잘못된 URL

삭제된 데이터

---

## 500 Internal Server Error

서버 내부 오류

개발자가 수정해야 하는 오류

---

## 자주 사용하는 Status Code

| 코드 | 의미 |
|------|------|
| 200 | 성공 |
| 201 | 생성 성공 |
| 204 | 성공(응답 없음) |
| 400 | 잘못된 요청 |
| 401 | 인증 실패 |
| 403 | 권한 없음 |
| 404 | 찾을 수 없음 |
| 500 | 서버 오류 |

---


### Path Parameter와 Query Parameter 차이는?

Path Parameter

- 특정 리소스를 지정할 때 사용

예시

```
/users/10
```

---

Query Parameter

- 조건이나 옵션을 전달할 때 사용

예시

```
/users?page=2
```

---

### Header에는 무엇이 들어가는가?

- Authorization
- Content-Type
- Accept
- User-Agent
- Token

---

### Body에는 무엇이 들어가는가?

실제 데이터를 넣는다.

예시

```json
{
    "email":"abc@test.com",
    "password":"1234"
}
```

---

### 401과 403의 차이

401

> 인증이 안됨

로그인 안함

토큰 만료

---

403

> 인증은 됐지만 권한이 없음

관리자 권한 필요

접근 불가

---

### GET과 POST의 차이

GET

- 데이터를 조회한다.

POST

- 데이터를 생성하거나 서버에 전달한다.

---

#  핵심 정리

- Client는 요청(Request)을 보내고 Server는 응답(Response)을 반환한다.
- HTTP는 서버와 통신하기 위한 규칙이다.
- HTTPS는 HTTP에 암호화가 추가된 안전한 통신 방식이다.
- URL은 서버 주소이며 Endpoint는 특정 기능(API)의 주소이다.
- Path Parameter는 특정 리소스를, Query Parameter는 조건을 전달한다.
- Header에는 부가 정보, Body에는 실제 데이터를 담는다.
- HTTP Method는 CRUD(Create, Read, Update, Delete)를 수행하기 위한 방식이다.
- Status Code는 서버가 요청 처리 결과를 숫자로 알려준다.