---
title: 정보처리기사 test
description: 정보처리기사 테스트
category: 정보처리기사
date: "2023-12-27"
---

# TEST

# TEST

# TEST

# TEST

# TEST

# TEST

```typescript

// 문자열
let str: string = "hello";

// 숫자
let num: number = 100;

// 배열
let arr: Array<number> = [10,20,30];
let arr2: number[] = [10,20,30];
let arr3: Array<string> = ["hello","hellololo" ];
let arr4: [string, number] = ["hello", 182];

// 객체
let obj:object = {name:"hello", age:29};
let person:{name: string, age:number};

// Boolean
let isAvaliable: boolean = true;


// 함수 선언
parameter와 return 값에 대해 타입 선언 가능
const sum = (a:number, b:number):number => {
return a+b;
}

// optional parameter일 경우 ?를 사용

const log = (time: string, result?: string, option?: string) => {
console.log(time, result, option);
}
log("2021-10-04", "success");

```

# 인터페이스 (interface)

### 자주 사용하는 타입들을 object 형태의 묶음으로 정의해 새로운 타입을 만들어 사용하는 기능

```typescript

// interface 선언
interface User {
age: number;
name: string;
}

// 변수 활용
const hanbbi: User = { age: 30, name: "hello"}


// 함수 인자로의 활용
const getUser = (user:User){
console.log(user);
}
getUser({ age:10, name: "hanbbi" })



// 함수 구조 활용
interface Sum {
(a:number, b:number): number;
}

let sumFinc: Sum:
sumFunc = function(a: number, b: number): number {
return a+b;
}



// 배열 활용
interface StringArray {
[index:number]: string;
}

let arr: StringArray = ["a", "b", "c"];


// 객체 활용
interface StringRegexObject {
[key: string]: RegExp;
}

const obj: StringRegexObject {
cssFile: /\.css$/,
   jsFile: /\.js$/
}


// interface 확장 (extends 사용)
interface Person {
name: string;
age:number;
}
interface Developer extends Person {
skill: string;
}

const juniorDeveloper = {
name: "hanbbi",
age:100,
skill: "JS"
}

```

# 타입 별칭(type aliases)

### 타입 키워드는 interface와 다르게 새로운 타입을 생성하는 것이 아닌 별칭을 부여하는 것으로, extends 키워드는 사용할 수 없음

```typescript

// 타입 별칭 선언 및 활용
type MyString = string;
const str: MyString = "Hello dear"

type Todo = {
id: string;
title: string;
done: boolean
}

const getTodo(todo:Todo){
console.log(todo);
}

```

# 연산자 (Operator)

## Uinon Type

### 한 가지 이상의 type을 선언하고자 할 때 사용 가능. | 기호 사용

```typescript
const logMessage = (value: string | number) => {
  if (typeof value === "string") {
    value.toString();
  } else if (typeof value === "number") {
    value.toLocaleString();
  } else {
    throw new TypeError("value must be string or number");
  }
};
logMessage("hello");
logMessage(1000);
```

## intersection Type

### 합집합과 같은 개념으로, 함수 호출의 경우 함수 인자에 명시한 type을 모두 제공해야 한다. & 기호 사용

```typescript

interface Zoo {
name: string;
location: string
price: number;
}

interface Animal {
name: string;
count: number;
}

const askZookeeper = ( value : Zoo & Animal ) => {
    // value 는
    { name:"어린이대공원", location: "서울시 광진구", price: 10000, count: 10000}
    // 와 같이 Zoo와 Animal이 모두 포함되는 인자를 줘야한다.
}

```

# Enum

### enum 키워드를 사용하면 일종의 default 값을 선언할 수 있다.

```typescript

// 숫자형 enum
// 자동으로 0에서 1씩 증가하는 값을 부여

enum Shoes {
Nike, // 0
Adidas, // 1
NewBalance //2
}
const myShoes = Shoes.Nike; // 0

문자형 enum
enum Food {
cake = "케익",
cookie = "쿠키"
}
const player = Food.cookie; // 쿠키

```

# 제네릭

### 제네릭을 활용하면 인자를 넘겨 호출하는 시점에 타입을 결정할 수 있다. 제네릭 활용 시 동일한 기능을 하는 함수를 일일이 만들 필요가 없으며, 타입 추론에 있어 강점을 가진다.

제네릭 선언
<T>와 같이 타입을 선언한다. 알파벳은 통상 T로 정해져 있다.

```typescript

const logText<T> = (text: T):T => {
console.log(text);
return text;
}
logText<string>("Hello hanbbi");


// interface에 제네릭 선언

interface Dropdown<T> {
value: T;
selected: boolean;
}
cosnt obj: Dropdown<string> = { value: "hamburger" , selected: true};

```

# 제네릭 타입 제한

## 1. 배열 힌트

```typescript

const logTextLength<T> = (text: T[]): T[] =>{
console.log(text.length);
text.forEach(text =>{
console.log(text):
});
}
logTextLength<string>(["hi", "hello"]);


```

## 2. 정의된 타입 이용(extends)과 keyof

```typescript

interface ShoppingItem {
name: string;
price: number;
stock: number;
}

const getShoppingItemOption<T extends keyof ShoppinggItem>(itemOption: T): T {
return itemOption;
}

// "name", "price", "stock"만 인자로 가능
getShoppingItemOption("price");

```

# 타입 추론 (Type inference)

## 1. 기본 변수 타입 추론

```typescript

// string으로 추론
let a = "abc";

// a: number로 추론
// b: string으로 추론
// return value는 string으로 추론
const getValue(a = 10) {
let b = "hello";
return a + b;
}


```

## 2. interface추론

```typescript

// interface 1개
interface Dropdown<T> {
value: T;
title: string;
}
const shoppingItem:Dropdown<number> ={
value: 10000;
title: "shoe"
}
// interface 2개
interface Dropdown2<T> {
value: T;
title: string;
}
interface DetailedDropdown<K> extends Dropdown2<K>{
tag: K;
desc: string;
}
const detailed: DetailedDropdown<string>{
value: "10000";
title: "shoe",
tag: "10000",
desc: "description"
}

```

# 타입 단언 (Type assertion)

### as 키워드를 사용해 타입을 정함으로써 typescript에게 타입을 알려줄 수 있다. 주로 DOM API를 조작할 떄 사용한다.

```typescript
// div가 있는지 장담할 수 없음, HTMLDivElement | null
// 따라서 typescript에게 타입을 단언해 타입을 알려줄 수 있음.
const div = document.querySelector("div") as HTMLDivElement;
div.innerText = "test";
```

# 타입 가드 (Type guard)

### union type을 사용하는 경우 공통된 속성만 접근 가능하며, 로직상 공통되지 않은 속성에 접근하고자 할 때 불편함을 해소하기 위해 타입 단언으로 공통되지 않은 속성에 접근하고자 하는 방법이 있지만, 코드 가독성을 위해 타입 가드 방법을 주로 사용한다.

```typescript
const isDeveloper = (target: Developer | Humanoid): target is Developer => {
  return (target as Developer).skill !== undefined;
};
if (isDeveloper(tom)) {
  console.log(tom.name);
  console.log(tom.skill);
} else {
  console.log(tom.name);
  console.log(tom.age);
}
```

# 타입 호환 (Type compatibility)

### TypeScript에서 더 큰 타입 구조를 갖는 변수에 작은 타입 구조를 갖는 변수를 할당 가능

```typescript
let add = function (a: number) {
  // ...
};
let sum = function (a: number, b: number) {
  // ...
};
// 아래는 에러가
// add = sum;

// 에러가 나지 않는 방식. sum의 구조가 더 크다고 볼 수 있음
sum = add;
```

참조 : https://yeomkyeorae.github.io/typesciprt/basic_typescript/
