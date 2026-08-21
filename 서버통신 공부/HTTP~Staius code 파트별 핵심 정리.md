#  핵심 정리

## Client - Server

- Client는 사용자의 요청(Request)을 서버로 보낸다.
- Server는 요청을 처리한 뒤 응답(Response)을 반환한다.
- 대부분의 앱은 Client와 Server 구조로 동작한다.

---

## HTTP

- HTTP는 클라이언트와 서버가 데이터를 주고받기 위한 통신 규칙(Protocol)이다.
- Request와 Response 방식으로 통신한다.
- 암호화되지 않은 통신이다.

---

## HTTPS

- HTTPS는 HTTP에 SSL/TLS 암호화가 추가된 프로토콜이다.
- 데이터를 안전하게 보호한다.
- 현재 대부분의 서비스는 HTTPS를 사용한다.

---

## Protocol

- Protocol은 컴퓨터끼리 통신하기 위한 규칙이다.
- 대표적으로 HTTP, HTTPS, TCP, UDP 등이 있다.

---

## Request & Response

- Request는 클라이언트가 서버에 보내는 요청이다.
- Response는 서버가 클라이언트에게 보내는 응답이다.
- 모든 서버 통신은 Request → Response 순서로 이루어진다.

---

## URL

- URL은 서버의 주소를 의미한다.
- Protocol + Domain + Path로 구성된다.

---

## URI

- URI는 리소스를 식별하는 모든 방법이다.
- URL은 URI의 한 종류이다.

---

## Endpoint

- Endpoint는 특정 API 기능의 최종 주소이다.
- 기능마다 Endpoint가 다르다.

---

## Path Parameter

- 특정 리소스를 지정할 때 사용한다.
- URL 경로에 포함된다.

예시

/users/1

---

## Query Parameter

- 검색 조건이나 옵션을 전달할 때 사용한다.
- URL 뒤에 ?를 사용하여 전달한다.

예시

/users?page=2

---

## Header

- 요청 또는 응답의 부가 정보를 담는다.
- Authorization, Content-Type 등이 저장된다.

---

## Body

- 실제 데이터를 담는다.
- 로그인, 회원가입, 게시글 작성 등에 사용된다.

---

## HTTP Method

- GET : 조회(Read)
- POST : 생성(Create)
- PUT : 전체 수정(Update)
- PATCH : 부분 수정(Update)
- DELETE : 삭제(Delete)

---

## CRUD

- Create → POST
- Read → GET
- Update → PUT / PATCH
- Delete → DELETE

---

## HTTP Status Code

- 서버가 요청 처리 결과를 숫자로 알려주는 코드이다.

### 성공

- 200 : 성공
- 201 : 생성 성공
- 204 : 성공(응답 데이터 없음)

### 클라이언트 오류

- 400 : 잘못된 요청
- 401 : 인증 실패
- 403 : 권한 없음
- 404 : 찾을 수 없음

### 서버 오류

- 500 : 서버 내부 오류