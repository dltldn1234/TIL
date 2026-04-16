# Github 명령어

## **github 명령어**

### 1. 구성 (config)

1. **git -v**: git버전 확인
2. **git config --global core.autocrlf true** : 개행 문자 설정
3. **git config --global [user.name](http://user.name) ‘<이름>’** : 사용자 이름 설정
4. **git config -- global [user.email](http://user.email) ‘<이메일>’** : 사용자 이메일 설정
5. **git config --global pull.rebase true** : 명령어 실행 시 리베이스를 기본 동작으로 설정
6. **git config --global --list** : 구성 목록 확인
7. **git config --global --unset <항목이름>**: 구성 항목 삭제
8. **git config --global --unset-all <항목이름>** : 중복 수성 항목 삭제

### 2. 초기화 (init)

1. **git init** : 프로젝트 버전 관리 시작
2. **git remote** : 원격 저장소 목록 확인
3. **git remote -v** : 원격 저장소 URL 확인
4. **git remote  add <원격 별칭> <URL>** : 원격 저장소 추가
5. **git clone <URL>** : 원격 저장소 복제
6. **rd /s /q .git** : 버전 관리 초기화 (windows cmd)
7. **Remove-Item -Recurse -Forse .git** : 버전 관리 초기화 (powershell)

### 3. 추적 (track)

1. **git status** :  현재 브랜치의 변경 사항 확인
2. **git add <파일>** :  특정 파일 추적 및 스테이징
3. **git add .** : 모든 파일 추적 및 스테이징
4. **git mv <파일 A> <파일 B>** : 스테이징된 파이 이름 변경
5. **git rm -r --cached <파일>** : 추적 목록에서 제거
6. **git clean -fdn** : 삭제 가능한 추적 되지 않은 파일 목록 확인
7. **git clean -dd** : 추적 되지 않은 파일 삭제

### 4. 버전 생성 (commit)

1. **git commit -m ‘<메시지>’ :** 버전 생성
2. **git commit -am ‘<메시지>’** : 추적 파일 스테이징 및 버전 생성
3. **git commit > i > 메시지 입력 > esc >wq** : VIm 에디터로 메시지 작성 및 버전 생성
4. **git commit --amend** : 직전 커밋을 현재 커밋으로 덮어쓰기(이후 강제 푸시 필요)
5. **git commit --amend -m ‘<메시지>’** : 직전 커밋 메시지를 수정 (이후 강제 푸시 필요>
6. **git add <누락파일> 후 git commit --amend --no-edit** : 직전 커밋에 변경 사항 추가 후 메시지 유지 (이후 강제 푸시 필요)

### 5. 확인 (log)

1. **git log** :  현재 브랜치의 버전 내역 확인
2. **git log  -<숫자>** : 숫자만큼 최신 버전 내역 확인
3. **git log --all** : 모든 브랜치 내역 확인
4. **git log --oneline** : 간략한 버전 내역 확인
5. **git log --raph** : 그래프 형태로 버전 내역 확인
6. **git reflog** : 로컬의 모든 버전 관리 내역 확인
7. **git show** : 현재 브랜치의 최신 버전 확인
8. **git show <브랜치>** : 특정 브랜치의 최신 버전 확인
9. **git show <해시>** : 특정 버전 확인
10. **git blame <파일>** :  특정 파일의 작업자 확인
11. **git blame -L <시작>,<종료> <파일>** : 특정 줄 범위 작업자 확인
12. **git blame -L <시작> <파일>** : 특정 줄부터 끝까지 작업자 확인

### 6. 브랜치 (branch)

1. **git branch** : 로컬 브랜치 목록 확인
2. **git branch -r** : 원격 브랜치 목록 확인
3. **git branch -a** : 로컬 및 원격 브랜치 목록 확인
4. **git branch -vv** : 로컬 브랜치와 연결된 업스트림 정보 확인
5. **git branch <브랜치>** : 브랜치 생성
6. **git branch -D <브랜치>** : 브랜치 삭제
7. **git branch -d <브랜치>** : 병합 완료된 브랜치 삭제
8. **git branch -m <브랜치>** :  현재 브랜치 이름 변경
9. **git branch -m <이전 브랜치> <새 브랜치>** : 특정 브랜치 이름 변경
10. **git checkout <브랜치>** :  브랜치 전환
11. **git checkout -b <브랜치>** : 브랜치 생성 및 전환
12. **git checkout <해시>** : 특정 버전 체크 아웃

### 7. 밀어내기 (push)

1. **git push <원격 별칭> <브랜치>** : 원격 저장소로 밀어내기
2. **git push <원격별칭> --all** : 원격 저장소로 모든 브랜치 밀어내기
3. **git push <원격별칭> <브랜치> -f** :  원격 저장소로 강제 밀어내기
4. **git push <원격별칭> <브랜치> -u** : 원격 저장소로 밀어내기 후 생략 가능

### **8. 당겨오기 (pull)**

1.  **git pull <원격별칭> <브랜치>** :  원격 저장소에서 브랜치 당겨오기
2. **git pull --rebase <원격별칭> <브랜치>** : 원격 저장소의 브랜치로 로컬 브랜치 덮어 쓰기

### 9. 가져오기 (fetch)

1. **git fetch** : 현재 원격 저장소의 브랜치 목록 가져오기
2. **git fetch <원격별칭>** : 특정 원격 저장소의 브랜치 목록 가져오기
3. **git fetch --all** : 모든 원격 저장소의 브랜치 목록 가져오기
4. **git fetch --prune** : 원격 저장소에서 브랜치 목록 가져와서 로컬의 원격 브랜치 목록 덮어쓰기

### 10. 비교 (diff)

1. **git diff <파일>** : 파일의 수정 내용 확인
2. **git diff** : <파일A> <파일B> : A 와 B 파일 비교
3. **git diff <브랜치>** :  특정 브랜치와 현재 브랜치 비교
4. **git diff <브랜치A> <브랜치B>** : A와 B 브랜치 비교
5. **git diff <브랜치>:<파일> <브랜치B>:<파일>** : A 와 B 브랜치 비교
6. **git diff <해시>** :  현재 버전과 특정 버전 비교
7. **git diff <해시A> <해시B>** :  A와 B 버전 비교

### 11. 작업 취소 (rollback)

1. **git restore <파일>** : 특정 파일 롤백
2. **git reset --hard HEAD** : 모든 파일 롤백

### 12. 리셋 (reset)

1. **git reset --hard HEAD~<번호>** :  번호만큼 이전 버전으로 리셋
2. **git reset --hard HEAD~1 :** 직전 버전으로 리셋
3. **git reset --hard HEAD^ :** 마지막 버전을 삭제
4. **git reset --hard <해시> :** 특정 버전으로 리셋
5. **git reset --hard :** 수정 내용을 버림
6. **git reset --soft :** 수정 내용을 스테이징
7. **git reset --mixed :** 수정 내용을 스테이징 하지 않음

### 13. 되돌리기 (revert)

1. **git revert <해시>** : 특정 버전을 취소하고 새로운 버전 생성

### 14. 임시저장 (stash)

1. **git stash :** 현재 작업을 임시 저장
2. **git stash -a :** 미추적 파일 포함, 임시 저장
3. **git stash -m '<메시지>' :** 메시지와 함께 현재 작업을 임시 저장
4. **git stash -am '<메시지>' :** 미추적 파일 포함, 메시지와 함꼐 현재 작업을 임시 저장
5. **git stash list :** 임시 저장된 작업 목록 확인
6. **git stash show <번호> :** 특정 번호의 임시 저장 내용 보기
7. **git stash apply :** 가장 최신의 임시 저장 내용을 현재 브랜치에 적용
8. **git stash apply <번호> :** 특정 번호의 임시 저장 내용을 현재 브랜치에 적용
9. **git stash drop :** 가장 최신의 임시 저장 내용을 삭제
10. **git stash drop <번호> :** 특정 번호의 임시 저장 내용 삭제
11. **git stash pop :** 가장 최신의 임시 저장을 적용하고 목록에서 삭제
12. **git stash clean :** 모든 임시 저장 목록 삭제

### 15. 병합 (merge)

1. **git merge <브랜치> :** 현재 브랜치에 특정 브랜치 병합
2. **git merge --abort** : 충돌 시, 병합 과정 중단

### 16. 재배치 (rebase)

1. **git rebase <브랜치>** : 현재 브랜치를 대상 브랜치로 재배치
2. **git rebase --continue** : 재배치 계속 진행
3. **git rebase --abort** : 재배치 과정 중단

### 17. 선별 적용 (cherry-pick)

1. **git cherry-pick <해시>** : 특정 버전을 현재 브랜치에 적용
2. **git cherry-pick <해시A> <해시B>** : 여러 버전을 현재 브랜치에 적용 
3. **git cherry-pick** <해시A>..<해시B> : A 이후부터 B까지의 버전을 적용
4. **git cherry-pick --no-commit** <해시> : 커밋 없이 변경 사항만 적용
5. **git cherry-pick --continue** : 충돌 해결 후 체리픽 계속 진행
6. **git cherry-pick --abort** : 체리픽 과정 중단

### 18. 별칭 (alias)

1. **git config --global alias.<별칭> '<명령>'**  : 별칭 등록
2. **git config --global --unset alias.<별칭>** : 별칭 삭제
3. **git config --global --get-regexp alias** : 등록된 별칭 목록 확인

### **19. 태그 (tag)**

1. **git tag : 태그 목록 확인**
2. **git tag -l  ‘<패턴>’  :**  패턴과 일치하는 태그 목록 확인
3. **git tag <태그> <해시> :** 특졍 버전에 태그 생성
4. **git tag -d <태그> :** 태그 삭제
5. **git show <태그> :** 태그 정보 확인
6. **git push origin <태그> : 특정 태그를 원격에 업로드**
7. **git push origin --tags** : 모든 태그 업로드
8. **git push origin --delete <태그> : 원격 태그 삭제**
9. **git checkout <태그> :** 태그 커밋으로 이동

### 20. 서브모듈 (submodule)

1. **git submodule add <URL> [경로]**: 서브모듈 추가, .gitmodules 생성.
2. **git submodule init/update --init --recursive**: 초기화 및 업데이트, 중첩 지원.
3. **git submodule update --remote:** 원격 최신 버전 동기화.
4. **git submodule foreach**: 모든 서브모듈에 명령 실행.
5. **git clone --recurse-submodules**: 클론 시 서브모듈 포함.
6. **git submodule deinit/rm:** 제거 과정 (deinit 후 rm으로 삭제)

### 21. 워크트리 (worktree)

1. **git worktree list** : 현재 저장소에 연결된 워크트리 목록 확인
2. **git worktree add** <경로> <브랜치> : 지정한 브랜치를 경로에 워크트리로 추가
3. **git worktree add -b <브랜치> <경로> [베이스**] : 새 브랜치를 만들고 해당 브랜치용 워크트리 추가
4. **git worktree remove <경로>** : 해당 경로의 워크트리 제거