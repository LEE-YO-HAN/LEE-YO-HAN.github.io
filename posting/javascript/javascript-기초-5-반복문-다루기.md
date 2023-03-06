---
title: javascript 기초 5 반복문 다루기
description: javascript의 for문, while 문을 통해 반복적인 작업을 처리할 수 있다.
category: javascript
date: "2023-03-06"
---

# for문 사용법

## for문

```javascript

const arr = [1,2,3,4,5,6,7,8,9,10];

const newArr = []
 (초기값(i=0) ; 조건(i가 10 미만까지 반복) ; 증감문(i는 1씩 증가한다.))
for(let i = 0;i<arr.length;i++){
    newArr.push(arr[i])
}
// console.log
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]

// 원한다면 조건문을 통해 반복 중단 가능
for(~~){
	if(a===b){
    	braek
    }
}

// for문은 i를 통해 반복할 횟수를 설정하여 원하는 반복작업을 // 실행하게 해준다.

```

## for ~ of

```javascript
let test1 = [1, 2, 3, 4, 5];

let test2 = [4, 5, 6, 7, 8];

// test1 배열 안의 모든 요소를 순회
for (const items of test1) {
  test2.push(items);
}
console.log(test2); // [4, 5, 6, 7, 8, 1, 2, 3, 4, 5]
```

## for ~~ in

```javascript
const obj = { a: 1, b: 2, c: 3 };

// 오브젝트 안의 모든 객체 순회
for (const property in obj) {
  console.log(`${property}: ${obj[property]}`);
}

// "a: 1"
// "b: 2"
// "c: 3"
```

## while

while문의 첫 괄호() 안의 값이 true인 경우 반복해서 실행된다.

```javascript
let n = 0;

// n이 3 미만인 경우는 반복하여 실행
while (n < 3) {
  n++;
}

console.log(n); // 3
```

# 배열 메서드 반복문처럼 사용하기

## Array.forEach()

forEach 메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다.

```javascript

const arr = [1,2,3,4,5,6,7,8,9,10];

// element라는 이름은 중요하지 않다. 상황에 맞는 이름을 사용하는 것이 중요하다.
arr.forEach((element)=>console.log(element));

// console.log
1 2 3 4 5 6 7 8 9 10

// 간단 예제

arr.forEach((element)=>console.log(element*10)); // 10 20 30 40 --- 80 90 100

// for문처럼 화살표 함수 오른쪽 부분에 push 등과 같은 메서드를 통해 새 배열을 만들어줄 수도 있다.
const newArr = [];
arr.forEach((item)=>{newArr.push(item)});
// newArr =
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]

```

## .map()

forEach와 유사하게 배열 안의 각 요소들에게 콜백 함수를 적용시킨다.

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ex = arr.map(item => item * 10)[
  //console.log(ex)
  (10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
];

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ex = arr.map((item, index) => item * 10 + `(${index}번째)`)[
  //console.log(ex)
  ("10(0번째)",
  "20(1번째)",
  "30(2번째)",
  "40(3번째)",
  "50(4번째)",
  "60(5번째)",
  "70(6번째)",
  "80(7번째)",
  "90(8번째)",
  "100(9번째)")
];
```
