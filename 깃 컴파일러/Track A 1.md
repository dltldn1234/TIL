Microsoft Copilot 너무 멍청하다

Copilot Studio 너무 세팅이 힘들다

GitHub Copilot 은?

Chat이 있고 Agent 모드도 있고

instructions, promptsm skills 등등도 있고
코드들도 만들수 있음

Sean을 만든 3가지 핵심 

1. 파일시스템으로 맥락 공유
* 5명이 같은 context를 공유하는 시스템 
SharePoint Library가 5명 PC에 자동 동기화

    * 폴더 구조 자체가 시스템 아키텍처

    * .md 는 사람 및 Ai가 읽는 문서, .json은 데이터

    * 새 서버/SaaS0개 * MS 365를 "연결" 했을 뿐

2. 팀에 맞춰 Copilot 커스터 마이즈



3. Ai - Json -Power automate(json 읽고 실행)






Copilot을 진짜로 살리는 3가지

A -두뇌

`copilot instructions.md`

**Sean의 두뇌**

팀의 일하는 방식,용어,규칙을 자연어로 적어두면 colilot 이 매 대화마다 그걸 기억합니다

B - 단축키

`prompts/`

**자주 쓰는 프롬프트 사전**

반복되는 작업(주간보고 작성,회의록 정리 등)을 `/명령어` 한줄로 호출

C-도구함

`skills/`

**진자 게임체인저**

특정 작업을 위한 전문 메뉴얼 도구 묶음. 필요할 때만 자동으로 꺼내 씁니다


A-두뇌

`copilot instructions.md`

팀의 모든 컨텍스트를 한 파일에.
* 우리 팀이 누구인지, 무슨 일을 하는지, 어떤 용어를 쓰는지

* Sean이 응답할 때 지켜야 할톤, 출력 규칙, 거절해야 할 것

* 자주 참조하는 폴더 위치, JSON 스키마, 워크플로우


B-단축키

`prompts/`

한 번 만들면 5명이 `/명령어`로 바로 호출.
* 주간보고 작성,회으록 정리,메일 초안 등 반복 작업을 단축

* 프롬프트 자체를 쓰는 건 어렵지 않음. 어려운건 `"어떤 프롬프트를 만들지 떠올리는 것"`



C-도구함

`skills/`

필요할 때만 꺼내 쓰는 전문 매뉴얼+도구 묶음.
* `frontend-design` -슬라이드 같은 HTML 생성( 오늘 들은 발표 슬라이드도 이것으로 만든 것)
`https://github.com/zarazhangrui/frontend-slides`

* `agent-browser` - AI가 직접 브라우저를 조작


Copilot의 Agent는 손이 많습니다.

* Ask / Plan모드 -답변과 계획만

* Agent모드 - 파일 생성 * 수정, 터미널 실행, 코드 검색 등 다양한 도구를 직접 사용

AI에 손과 발을 달아주기

* 외부 액션은 Power Automate가 대신, 둘은 SharePoint를 통해 만납니다

* 주문서(JSON)패턴: Sean이 `outbox`에 떨구면 -> Cloud의 SharePoint로 sync->Power Automate가 감시 -> 액션 실행


비개발자가 GitHub Copilot을 쓰는 방식
* 며칠 걸릴 자료를 10분 만에

* 업무 자동화 앱을 클릭 몇 번으로

* 여전히 GitHub,PR,Node,js가 뭔지 모름. 그래도 괜찮음

* 그들은 그냥 일을 해내고 있음 - Get Things Done


VS Code는 바이브 코딩 도구가 아니라. AI