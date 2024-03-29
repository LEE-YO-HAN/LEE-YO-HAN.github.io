---
title: github git cmd
description: 깃 명령어 모음
category: github
keyword: github, 명령어
date: "2023-03-09"
---

# 깃 명령어 모음

## 디렉토리

1. 홈 디렉토리로 이동

```bash
$ cd ~
```

2. 새 디렉토리에 디렉토리명을 생성

```bash
$ mkdir [디렉토리명]
```

3. [디렉토리명]으로 이동

```bash
$ cd [디렉토리명]
```

4. 부모 디렉토리로 이동

```bash
$ cd ..
```

5. 현재 경로를 출력 // print working directory

```bash
$ pwd
```

6. 디렉토리의 내용을 출력

```bash
$ ls
```

7. 디렉토리의 폴더 상세 정보까지 출력

```bash
$ ls -l
```

8. 디렉토리의 숨김 파일과 디렉토리까지 출력

```bash
$ ls -a
```

tip: 옵션은 합쳐서 ls -al 처럼 사용이 가능하다.

9. 파일이 있는 디렉토리를 내용물과 함께 삭제

```bash
$ rm -r [디렉토리명]
```

10. vi 편집기로 [파일명.확장자명] 파일을 작성

```bash
$ vim [파일명.확장자명]
```

11. 터미널 창의 내용을 삭제

```bash
$ clear
```

12. 터미널 창을 종료

```bash
$ exit
```

## git 유저 / 업로드

1. 현재 위치에서 지역 저장소를 생성

```bash
$ git init
```

2. 깃 환경에서 사용자 이름을 [사용자명]으로 지정

```bash
$ git config --global user.name "[사용자명]"
```

3. 깃 환경에서 사용자 이메일을 [사용자이메일명]으로 지정

```bash
$ git config --global user.email "[사용자이메일명]"
```

4. 깃의 상태를 확인

```bash
$ git status
```

## commit 명령어

1. [파일명.확장자명]을 스테이지에 올림

```bash
$ git add [파일명.확장자명]
```

2. 커밋 메시지 [메시지명]을 붙여 커밋

```bash
$ git commit -m "[메시지명]"
```

3. 메시지 [메시지명]을 붙여서 스테이징과 커밋을 동시에 진행

```bash
$ git commit -a -m "[메시지명]"
```

4. 커밋 내역 확인

```bash
$ git log
$ git log --pretty=oneline   # 한줄로 표기하기
```

5. 특정 커밋 내역 확인

```bash
$ git show [커밋 id]
```

6. 최근 버전과 작업 폴더의 수정 파일 사이의 차이를 출력

```bash
$ git diff
$ git diff [이전커밋 id] [이후커밋 id]
```

7. 지정한 커밋 해시로 이동

```bash
$ git checkout [커밋 해시]
```

8. 가장 최근 커밋을 취소

```bash
$ git reset HEAD^ # 현재 HEAD의 이전 커밋으로 되돌리기
$ git reset HEAD~n # 현재로 부터 n 번째 이전 커밋으로 되돌리기
```

9. 지정한 커밋 해시로 이동하고 커밋을 취소

```bash
$ git reset [커밋 해시]

# reset의 3가지 옵션
$ git reset --soft [커밋ID]  # head 만 바뀜
$ git reset --mixed [커밋ID] # staging 도 그 때로 바뀜
$ git reset --hard [커밋ID] # working디렉토리/staging 모두 그 때로 바꿈
```

10. 지정한 커밋 해시의 변경 이력을 취소

```bash
$ git revert [커밋 해시]
```

11. 커밋 수정하는 법

```bash
# 파일 수정 한 뒤
$ git add .
$ git commit --amend  : 최신 커밋 수정
```

## 브랜치 명령어

1. 새로운 브랜치 [브랜치명]을 생성

```bash
$ git branch [브랜치명]
# 브랜치 조회하기
$ git branch
```

2. [브랜치명]으로 체크아웃(이동)

```bash
$ git checkout [브랜치명]
$ git checkout -b [브랜치명]  # 브랜치만들고 바로 이동
# 브랜치 삭제
$ git branch -d 브랜치명
```

3. 커밋 로그에서 한 줄에 한 커밋씩 출력

```bash
$ git log --oneline
```

4. 수정한 전체 파일을 스페이지에 올린다.

```bash
$ git add .
```

5. 커밋 로그에 각 브랜치의 커밋을 그래프로 표시

```bash
$ git log --branches --graph
```

6. [브랜치명]을 master 브랜치와 병합

```bash
$ git merge [브랜치명]
$ git merge [브랜치명] --edit # 병합 후 바로 vi  편집기가 나오면서 커밋 메시지 수정 가능
$ git merge [브랜치명] --no-edit # 커밋 메시지 수정없이 바로 병합
```

7. merge 취소하기

```bash
$ git merge --abort
```

## git hub 원격 저장소

1. 원격 저장소에 연결

```bash
$ git remote add origin [github 레포지 주소]
$ git remote add origin [branch 이름]   #없으면 생성됨
```

2. 원격 저장소에 연결됐는지 확인

```bash
$ git remote -v
```

3. 지역 저장소의 커밋을 맨 처음 원격 저장소에 올리는 경우

```bash
$ git push -u origin master
```

4. 3번을 한 후에 지역 저장소의 커밋을 원격 저장소에 올리는 경우(업로드)

```bash
$ git push
$ git push origin master
```

5. 원격 저장소의 커밋을 지역 저장소로 가져옴

```bash
$ git pull
$ git pull origin master
```

6. SSH 키를 생성함

```bash
$ ssh-keygen
```

7. 원격 저장소 복제하기

```bash
# 첫번째 커밋이 아니라면 풀 먼저하기
$ git remote remove origin

#원격 저장소를 [지역저장소명]에 복제하기
$ git clone [원격 저장소 주소]
```

8. 원격 저장소의 커밋을 가져오기만 하고 merge하지 않는다
   가져온 branch 내용은 origin/[브랜치] 로 저장됨

```bash
$ git fetch
# 이후엔 diff 로 비교
$ git diff test origin/test # 브랜치 이름이 test일 경우 예시
```

9. 패치로 가져온 정보가 있는 브랜치\[FETCH_HEAD\]로 이동

```bash
$ git checkout FETCH_HEAD
```

10. 패치로 가져온 정보가 있는 브랜치[FETCH_HEAD]를 master 브랜치에 병합한다

```bash
$ git merge FETCH_HEAD
```

11. [브랜치명]을 만드는 것과 동시에 체크아웃한다

```bash
$ git checkout -b [브랜치명]
```

12. 원격 저장소에 [브랜치명]의 브랜치의 커밋을 올린다

```bash
$ git push origin [브랜치명]
```

13. 원격저장소 삭제

```bash
$ git remote remove origin
```

## 파일/보관 명령어(stash)

1. 파일 내용 출력

```bash
$ cat [파일명.확장자명]
```

2. 디렉토리를 만드는 동시에 지역저장소 생성

```bash
$ cd init [디렉토리명]
```

3. 현재 커밋을 다른 브랜치에 있는 [커밋메시지] 커밋으로 되돌림

```bash
$ git reset [커밋메시지] [커밋해시]
```

4. 병합이 끝난 [브랜치명]을 삭제

```bash
$ git branch [브랜치명] -d
```

5. 작업 트리의 수정 내용 stash에 따로 보관하기

```bash
$ git stash
$ git stash save
```

6. 보관한 내용을 목록을 출력

```bash
$ git stash list
```

7. 보관한 내용을 적용

```bash
$ git stash apply
$ git stash apply stash@{1}
```

8. 보관한 내용 중 가장 최근 항목을 삭제

```bash
$ git stash drop
$ git stash drop stash@{1}
```

9. stash를 apply하고 제거(drop) 하기

```bash
$ git stash pop
```

## 기타 명령어

1. 긴 명령어 짧게 이름 붙여 사용하기

```bash
# ex) git log --pretty=oneline을
# ->git history 라는 별명으로 바꾸기.

git config alias.[별명] '원하는 명령어'
git config alias.history 'log --pretty=oneline'
```

2. tag 설정 하기

```bash
$ git tag [태그이름][커밋 ID]
$ git tag Version_2 86a99 # tag 달기
$ git tag    #tag 조회하기
$ git show Version_2
```
