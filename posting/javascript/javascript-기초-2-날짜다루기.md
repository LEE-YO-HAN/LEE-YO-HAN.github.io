---
title: javascript 기초 2 날짜다루기
description: javascript의 문법과 메서드들을 통해 날짜와 관련되 작업을 해볼 수 있다.
category: javascript
date: "2023-03-06"
---

# Javascript 날짜 다루기

## 날짜 계산

```javascript
// 날짜 예제
// Sunday - Saturday : 0 - 6
const someday = new Date("2022-01-23");
// 날짜 형식은 자유로움 ('january 23 ,2022') 처럼 사용 가능

const day1 = someday.getDay();
console.log(day1); //  22.01.23은 일요일이므로, 0 반환

// 날짜 추출
let today = new Date(); // 인자가 비어있는 경우 현재 날짜/시간 반환

let year = today?.getFullYear();
console.log(year); // 123 - 2023년 반환값 (2022년 반환값 = 122)

let month = today?.getMonth() + 1; // javascript에서는 1월을 0부터 계산해주기 떄문에 + 1을 해준다.
console.log(month); // 3

let day = today?.getDate();
console.log(day); // 6

let hour = today?.getHour();
console.log(hour); // 현재 시간 추출

let minutes = today?.getMinutes();
console.log(minutes); // 현재 분 추출

let seconds = today?.getSeconds();
console.log(seconds); // 현재 초 추출
```
