---
title: javascript basic 3 math
description: javascript 기초 3 Math 다뤄보기
category: javascript
keyword: javascript, Math
date: "2023-03-06"
---

# Javascript Math 메서드

## 1. 소수점 표현

```javascript
// n = Number
Math.ceil(n); // 올림
Math.floor(n); // 내림
Math.round(n); // 반올림
Math.toFixed(n); // 소수점 n의 자릿수까지 표현 / 매개변수가 없으면 1의자릿수 반환

// .toFixed 예제
let num = 10.987654321;

num.toFixed(); // 11
num.toFixed(1); // 11.0
num.toFixed(2); // 10.99
num.toFixed(3); // 10.988
num.toFixed(4); // 10.9877
num.toFixed(5); // 10.98765
num.toFixed(10); // 10.9876543210
num.toFixed(14); // 10.98765432100000
```

## 2. 계산/정수 처리

```javascript
Math.abs(); // 절대값 반환
Math.max(); // 인자 중 가장 큰 값 반환 ex. Math.max(1,2,3) - 3 , Math.max([4,5,6]) - 6
Math.min(); // 인자 중 가장 작은 값 반환 - Math.max 반대
Math.pow(x, y); // 인자간 거듭제곱 값 반환 === x**y와 동일
Math.random(); // 0이상 1미만 랜덤값 반환
Math.sqrt(); // 제곱근 반환
```
