---
title: javascript basic 4 array 2
description: javascript 기초 4 배열 다루기 - 2
category: javascript
date: "2023-03-06"
---

# 고차함수와 메서드를 통해 JavaScript 배열 다뤄보기

## 고차함수란?

> 함수를 인자로 받거나, 함수를 반환함으로써 작동하는 함수로, .map() , .filter() , .forEach() , .reduce() 등이 있다.

### 참고

아래의 메서드들은 모두 원본 배열에 영향을 주지 않는다.

또한 함수 안의 화살표 함수 arr.filter/map/...((element)=>(element>2)) 와 같이 괄호()를 이용하면 return을 해줄 필요가 없지만, arr.filter/map/...((element)=>{return element > 2}) 처럼 중괄호를 사용하면 return을 꼭 해줘야 한다.

### Array.filter()

특정 조건을 부합하는 값만 모아서 새로운 배열을 만들어준다.

```javascript
// ex
const arr = ["a", "b", "b", "c"];
const filtered = arr.filter(element => element != "b"); // arr의 원소는 b가 아닌 값으로 거른다.
console.log(arr); // ['a', 'b', 'b', 'c']
console.log(filtered); // ['a', 'c']

const arr_num = [0, 1, 2, 3, 4, 5];
const new_array = arr_num.filter(element => element > 3); // arr_num의 원소는 3을 초과한다
console.log(new_array); // [ 4, 5 ]
```

### Array.map()

반복문처럼 사용 가능. 원본 배열을 흐트러뜨리지 않고, 새로운 배열을 반환한다.

단, key 값 같은 경우에는 값이 재할당되기 때문에 원본과 비교하는 의미가 없다. (ex. 리액트 사용 시)

```javascript
const array_num = [0, 1, 2, 3, 4, 5]; // arr_n은 상수이지만
const new_arr_num = array_num.map(
  element => element * 10, // 요렇게 map으로 *10을 돌려주면
);
console.log(new_arr_num); // [ 0, 10, 20, 30, 40, 50 ] // 원본 배열 변경 없이 새 배열이 잘 만들어진다.
```

### Array.concat()

두 배열을 합친다. 단, 중복 제거는 하지 않는다.

```javascript
const array_num = [0, 1, 2, 3, 4, 5];
const new_array = [4, 5];
const merge = array_num.concat(new_array);
console.log(merge); // [0, 1, 2, 3, 4, 5, 4, 5]
```

### Array.from()

배열로 만들어준다.

```javascript
const my_name = "vihan9";
const my_name_array = Array.from(my_name);
console.log(my_name_array); // [ 'v', 'i', 'h', 'a', 'n', '9' ]

// 조건을 넣어 배열을 만들고 싶다면? ex
const my_name_array = Array.from({ length: 4 }, (item, index) => index);
console.log(my_name_array); // [ 0, 1, 2, 3 ] // length가 4인 배열을 만들어준다.

// 어떤 배열을 index 값 배열로 바꾸고 싶다면? ex
const my_name = "vihan9";
const num_array = Array.from(my_name, (item, index) => index);
console.log(num_array); // [ 0, 1, 2, 3, 4, 5 ]
```

### Array.find()

숫자열 배열의 특정 값을 찾아주며, 조건에 맞는 첫 번째 값을 호출해준다.

```javascript
const arr_num = [0, 1, 2, 3, 4, 5];
const find_num = arr_num.find(v => v > 3);
console.log(find_num); // 4 // 3을 초과하는 첫 값인 4를 출력한다.
```

### indexOf()

배열에서 지정된 요소를 찾을 수 있는 첫 번째 반환하고, 존재하지 않으면 -1을 반환한다.

```javascript
const comment = "오늘도 오류 없는 하루가 되게 해주세요";
const searchStr = "오류";
const searchStr2 = "해주세요";

const indexOfFirst = comment.indexOf(searchStr);
const indexOfFirst2 = comment.indexOf(searchStr2);

console.log(indexOfFirst); // 4 // 오류는 4번째 인덱스부터 시작한다.
console.log(indexOfFirst2); // 17 // 해주세요는 17번째 인덱스부터 시작한다.
```
