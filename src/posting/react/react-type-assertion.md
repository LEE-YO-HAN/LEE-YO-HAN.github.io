---
title: react type assertion
description: React Form event type (feat. 타입 단언 as)
category: react
keyword: typescript, 이벤트타입
date: "2023-04-13"
---

## Form Event Type

우리는 로그인이나 포스팅 등의 화면을 만들어줄 때 클라이언트가 입력하는 데이터를 입력받는 방법 중 하나로 onChange 등의 FormEvent를 이용해 원하는 값을 추출할 수 있다. 이때 이벤트 타입은 아래와 같이 사용될 수 있다.

```typescript
import { FormEvent } from "react";

export type FormEvents = FormEvent<HTMLFormElement>;
export type InputEvent = FormEvent<HTMLInputElement>;
export type LabelEvent = FormEvent<HTMLLabelElement>;
```

react에서 FormEvent 타입을 받아오고, 해당되는 element를 제네릭 타입으로 넣어주면 된다.

## onChangeHandler

```typescript
const [formData, setFormData] = useState(formDataInit);
const formChangeHandler = (e: FormEvent<HTMLFormElement>) => {
  const target = e.target;
  const name = target.name;
  const value = target.value;
  setFormData(prev => ({ ...prev, [name]: value }));
};
```

원하는 데이터를 받을 수는 있지만, name과 value의 타입 에러가 발생한다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F80Q0s%2Fbtr9SOPHzuW%2F7t6EmYi1k5gMiyeurxmCP0%2Fimg.png)

target의 타입을 정해줘도 타입 에러가 발생하는 것을 볼 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbsb5ww%2Fbtr9N2aq2VJ%2FsFJkJduLoSt1bhyae9SFdK%2Fimg.png)

하지만 우리는 form의 input이 변할때마다 대상의 값을 받아오는 것을 알고 있다.

이때 필요한 것이 타입 단언(as)이다.

## 타입 단언 사용 예시

```typescript
const formChangeHandler = (e: FormEvents) => {
  const target = e.target as InputTarget; // InputTarget === HTMLInputElement
  const name = target.name;
  const value = target.value;
  setFormData(prev => ({ ...prev, [name]: value }));
};
```

### 주의사항

타입 단언을 사용하면 타입 체크를 할 수 없다. 사실상 강제로 타입을 지정하는 행위이기 때문에 타입 체커에게 해당 타입 에러를 무시하라는 명령이나 다름없다. as를 남발하거나 내려받는 데이터가 확실하지 않는 경우에는 오류 탐색에 지장이 있을 수 있으니, 로직에 따라 조건문 등을 사용해 타입 에러를 피해 주는 것이 좋을 수 있다.

```typescript
// ex)
const someFN = (someData) =>{
	const someMutation = someData..logic
    if(someMutation){
    	// ... nest logic
    }
}
```
