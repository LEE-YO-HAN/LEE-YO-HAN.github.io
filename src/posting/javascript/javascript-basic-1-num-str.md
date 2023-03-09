---
title: javascript basic 1 num str
description: javascript 기초 1 숫자열문자열
category: javascript
date: "2023-03-06"
---

# 1. 숫자열을 문자열로 바꾸기

```javascript

// 숫자는 숫자+""만 해줘도 (혹은 다른 문자를 더해줘도) 문자열로 바뀐다.

let a = 1234
console.log(a) // a는 숫자 1234
let b = a+""
console.log(b) // b는 문자 '1234'
let c = 1234.toString()
console.log(c) // c는 문자 '1234

```

# 2. 문자열을 숫자열로 바꾸기

```javascript

//s는 String
Number(s)로 문자열을 숫자로 변환 - 인자를 바꿀 수 없으면(ex. 123입니다) NaN을 리턴한다.
parseInt(s)로 문자열을 숫자로 변환 - 정수나 NaN을 리턴한다.
parseFloat(s)로 문자열을 숫자로 변환 - 부동 소수점 숫자를 반환한다.

// parseFloat 예제

function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// 28.695307297889173

console.log(circumference('4.567abcdefgh'));
// 28.695307297889173

console.log(circumference('abcdefgh'));
// NaN


```

# 3. 문자열 다루기

```javascript

String.trim() - 문자열의 공백을 제거
      .trimStart() - 문자열 왼쪽 공백 제거
      .trimEnd() - 오른쪽 공백 제거
      .slice(0,-1) - 문자열에서 텍스트를 추출하고 새 문자열을 반환
      .split('') - 문자열 String을 ()안 인자(''등)로 나눠 각 글자별로 배열 생성
       		// ex) let name=hanbbi; name.split('') // [ 'h', 'a', 'n', 'b', 'b', 'i' ]
      .join('') 배열 내 요소들을 인자를 통해 이어준다.
      .replace("인자1","인자2") - 문자 내 맨 처음 발견된 인자1을 찾아 인자2로 바꿔준다.
      .replace("인자1","인자2") - 문자 내 모든 인자1을 찾아 인자2로 바꿔준다.
      .repeat() - 해당 문자를 ()번 반복
      .includes() - 문자열이 특정 문자열을 포함하는지 확인
      .charAt(0) - 스트링의 0번째 글자 가져오기(result = string)
      .substring(0,5) - 스트링의 0~4번째 글자 가져오기

```
