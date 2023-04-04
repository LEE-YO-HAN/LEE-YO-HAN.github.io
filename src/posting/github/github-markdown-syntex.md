---
title: github markdown syntex
description: Markdown 문법 정리
category: github
date: "2023-03-31"
---

## 1. headers

\# 으로 시작하는 텍스트로 1-6개 가능 (h1 ~ h6)

```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIOzmy%2Fbtr7d8qRKov%2FiXZSIKWKSOiAtliDzN63vK%2Fimg.png)

## 2. 구분선

"---"이나 "\*\*\*"를 통해 구분선 생성 가능

```
***
---
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgcFby%2Fbtr7dx5ZjTh%2FlEqZkNRdg7rLooCPmMFZW0%2Fimg.png)

## 3. 줄바꿈

"<br>"

```
줄을<br>바꿈
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc8z1Q4%2Fbtr7fs3s9fI%2FhLPfWRYRfKMIC2tUvU8531%2Fimg.png)

## 4. 강조

기울여쓰기(italic) : \* 또는 \_로 감싼 텍스트.

두껍게 쓰기(bold) : \*\* 또는 \_\_로 감싼 텍스트.

취소선 : ~~로 감싼 텍스트

```
_기울여쓰기 1_
*기울여쓰기 2*
**두껍게 1**
__두껍게 2__
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbu2sXJ%2Fbtr7dNgeNxn%2FcCfQQ9PumZ7OzrH2KeXq5K%2Fimg.png)

## 5. 인용

\>로 시작하는 텍스트로 >>>와 같이 3개까지 사용 가능

```
> 인용문
> > 3개까지
> > > 사용 가능
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGU0Me%2Fbtr7ghUUjee%2FqgoUnVkdOOkK7Kb5Gq1oPK%2Fimg.png)

## 6. 리스트

리스트는 Tab을 통해 목록 안의 목록 생성 가능

### 순서가 없는 목록

\*, +, -를 통해 순서가 없는 목록 생성 가능

```
- 순서가 없는 목록1
- 순서가 없는 목록1
- 순서가 없는 목록1

* 순서가 없는 목록2
  - 탭을 이용한 목록 안의 목록
    - 탭을 이용한 목록 안의 목록 안의 목록

1. 순서가 있는 목록1
2. 순서가 있는 목록1
3. 순서가 있는 목록1
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdQp7i8%2Fbtr7e1ygv06%2FvMIjB3OsI8Q5fAteCTJbF1%2Fimg.png)

### 순서가 있는 목록

숫자를 기입하면 순서가 있는 목록이 됨

들여쓰기를 하면 모양이 바뀜

숫자를 무엇을 쓰든 순서대로 알아서 숫자를 매김

리스트 안에 하위 리스트를 만들기 위해서는 tab과 함께 숫자 1번부터 나열하면 적용 가능

```
1. 순서가 있는 목록2
2. 순서가 있는 목록2
   1. 탭을 이용한 순서가 있는 목록 안의 목록
      1. 탭을 이용한 순서가 있는 목록 안의 목록 안의 목록
   2. 탭을 이용한 순서가 있는 목록 안의 목록
5. 순서가 있는 목록2
```

혼합 리스트도 적용 가능

```
1. 순서가 있는 목록2
2. 순서가 있는 목록2
   1. 탭을 이용한 순서가 있는 목록 안의 목록
      * 탭을 이용한 순서가 있는 목록 안의 목록 안의 순서가 없는 목록
   2. 탭을 이용한 순서가 있는 목록 안의 목록
5. 순서가 있는 목록2
```

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlhYHi%2Fbtr7dPd52Gh%2FY87O8eblzYL1LiuEiIdMik%2Fimg.png)

## 7. 이미지

링크와 비슷하나 앞에 느낌표가 붙음

인라인 이미지 : ![텍스트](이미지파일 경로)

![image]("./../../../../public/images/cards/GITHUB.png)

링크 이미지 : ![텍스트] (이미지파일URL)

![image](https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F5148697%2Fattach%2Fc60c2213f3984f0b9da48413e3fa277e)

이미지 파일에 마우스를 올렸을 때 커서 앞에 나오는 텍스트 설정

![텍스트] (이미지경로/URL "이미지이름")

![image](https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F5148697%2Fattach%2Fc60c2213f3984f0b9da48413e3fa277e "이미지지롱")

링크와 이미지를 합친 문법 (이미지를 링크로 사용)

[![텍스트] (이미지URL)] (링크URL)

[![image](https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F5148697%2Fattach%2Fc60c2213f3984f0b9da48413e3fa277e)](https://lee-yo-han.github.io/github-token-expired)

## 8. Link (Anchor)

글자로 된 하이퍼링크

```
[구글] (링크)
```

[구글](https://www.google.com/)

내부(해시) 링크

[보여지는 내용] (#이동할 헤드(제목))

괄호 안 링크의 띄어쓰기는 -로 연결, 영어는 모두 소문자로 작성

```
[어디로든문](#1-headers)
```

[어디로든문](#1-headers)

## 9. 코드 블럭

백틱(`) 3개씩으로 감싸서 사용

```
'''javascript
some code ...
'''
```

## 10. 테이블

헤더와 셀 구분 시 3개 이상의 하이픈(-) 필요
헤더 셀을 구분하면서 콜론(:)으로 정렬 가능
가장 좌측과 가장 우측에 있는 vertical bar( | ) 기호 생략 가능

```
| 헤더1 | 헤더2    |   헤더3    |    헤더4 |
| ----- | :------- | :--------: | -------: |
| 셀1   | 셀2      |    셀3     |      셀4 |
| 기본  | 좌로정렬 | 가운데정렬 | 우로정렬 |
| 셀9   | 셀10     |    셀11    |     셀12 |
```

| 헤더1 | 헤더2    |   헤더3    |    헤더4 |
| ----- | :------- | :--------: | -------: |
| 셀1   | 셀2      |    셀3     |      셀4 |
| 기본  | 좌로정렬 | 가운데정렬 | 우로정렬 |
| 셀9   | 셀10     |    셀11    |     셀12 |

---

참조 https://inpa.tistory.com/entry/MarkDown-%F0%9F%93%9A-%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EB%AC%B8%EB%B2%95-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC
