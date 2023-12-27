---
title: javascript basic 4 array 1
description: javascript 기초 4 배열 다루기 - 1
category: javascript
keyword: javascript, 배열
date: "2023-03-06"
---

# JavaScript 배열 다뤄보기

## 1. 배열 수정

```javascript
let Arr = [1, 2, 3, 4, 5];

// Arr배열의 0번째를 123으로 수정
Arr[0] = 123; // Arr = [123,2,3,4,5]
```

## 2. 배열 정렬 (Array.sort())

array.sort()는 매개변수가 입력되지 않으면 유니코드 순서에 따라 정렬된다.

또한 sort()는 원본 array를 참조하기 때문에 sort()를 통한 정렬은 원본 array도 동일하게 변경된다.

### 숫자 배열 정렬

```javascript
let arr = [1, 3, 2, 4];

arr.sort(); // [1,2,3,4]
arr.sort((a, b) => a - b); // [1,2,3,4]
arr.sort((a, b) => b - a); // [4,3,2,1]
```

### 문자 배열 정렬 (대소문자 구분x)

```javascript
let arr3 = ["jon", "awre", "gwgw", "zgfzg"];

// 오름차순
arr.sort(function (a, b) {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();

  if (upperCaseA > upperCaseB) return 1;
  if (upperCaseA < upperCaseB) return -1;
  if (upperCaseA === upperCaseB) return 0;
}); // ['awre', 'gwgw', 'jon', 'zgfzg']

// 내림차순
arr.sort(function (a, b) {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();

  if (upperCaseA < upperCaseB) return 1;
  if (upperCaseA > upperCaseB) return -1;
  if (upperCaseA === upperCaseB) return 0;
}); // ['zgfzg', 'jon', 'gwgw', 'awre']
```

### 영어가 아닌 한글 등의 문자 정렬

```javascript
let arr = ["가", "나", "바", "다"];

arr1.sort((a, b) => a.localeCompare(b)); // ['가', '나', '다', '바']
arr1.sort((a, b) => b.localeCompare(a)); // ['바', '다', '나', '가']
```

## 3. 배열 메서드

```javascript

let Arr = [1,2,3,4,5]

    // 배열의 마지막에 새로운 요소를 추가 / 변경된 배열의 길이를 반환
Arr.push(12) // Arr = [1,2,3,4,5,12] / 6

	// 배열의 마지막 요소를 제거 / 한 후, 제거한 요소를 반환
   .pop() // Arr = [1,2,3,4] / 5

   // 배열의 첫 번째 자리에 새로운 요소를 추가/ 변경된 배열의 길이를 반환
   .unshift(12) // Arr = [12,1,2,3,4,5] / 6

   // 배열의 첫 번째 요소를 제거 /  제거한 요소를 반환
   .shift() // Arr = [2,3,4,5] / 1

   // 배열의 1번째 index부터 2개 원소 제거
   .splice(1, 2) // Arr = [1, 4, 5] / [2, 3] 제거됨

   // 배열 반전
   .reverse() 배열 반전 // [5,4,3,2,1]

   // 배열 계산
   //Arr.reduce((이전결과, 현재요소)=>이전결과+현재요소, 초기값)
   // 초기값이 없는 경우 acc = Arr[0] , cur = Arr[1] 이 된다.
   .reduce((acc,cur)=>acc+cur) 배열 계산 // 15

    // 배열 추출
    // .slice(x, y) x이상 y미만 index에 해당하는 배열 추출
    // 매개변수가 x밖에 없다면 x 이상 index에 해당하는 배열 추출
    // 매개변수가 음수인 경우 ex. (-2) 라면, 배열 끝에서 2번째 index 이상의 배열 추출
    .slice(0, 2) // [1,2]

```
