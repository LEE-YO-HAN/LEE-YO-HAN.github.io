---
title: react simple formdata code
description: react formdata 코드간소화
category: react
keyword: react, 코드 간소화
date: "2023-03-03"
---

# FormData 저장 코드 간소화하기

하나의 폼에서 여러 개의 input 값을 변경하기 위해 함수를 만들어 간단하게 코드를 간소화시킬 수 있다.

```typescript
// form.tsx
<Container onSubmit={e => onSubmitHandler(e, dispatch)}>
  <input
    type="text"
    name="profile_url"
    placeholder="https://picsum.photos/id/1/50/50 - 필수 X"
    value={formData.profile_url}
    onChange={e => onChangeHandler(e)}
  />
  <br />
  <input
    type="text"
    name="author"
    placeholder="작성자"
    value={formData.author}
    onChange={e => onChangeHandler(e)}
    required
  />
  <br />
  <textarea
    name="content"
    placeholder="내용"
    value={formData.content}
    onChange={e => onChangeHandler(e)}
    required
  ></textarea>
  <br />
  <input
    type="text"
    name="createdAt"
    placeholder={`${todayDate()}`}
    disabled
    required
  />
  <br />
  <button type="submit">{isEdit ? "수정하기" : "등록"}</button>
</Container>;

// useForm.tsx
const [formData, setFormData] = useState<FormData>({
  profile_url: "",
  author: "",
  content: "",
  createdAt: todayDate(),
});

const onChangeHandler = (e: InputEvent) => {
  let type = e.target.name;
  let value = e.target.value;
  if (type === "profile_url")
    setFormData(prev => ({ ...prev, profile_url: value }));
  if (type === "author") setFormData(prev => ({ ...prev, author: value }));
  if (type === "content") setFormData(prev => ({ ...prev, content: value }));
  setFormData(prev => ({ ...prev, [type]: value }));
};
```

하지만 위와 같이 if문이 많아져 코드의 성능과 가독성을 떨어뜨릴 수 있기 때문에, 아래와 같이 변경해볼 수 있다.

```typescript
// useForm.tsx

const [formData, setFormData] = useState<FormData>({
  profile_url: "",
  author: "",
  content: "",
  createdAt: todayDate(),
});

const onChangeHandler = (e: InputEvent) => {
  const { name, value } = e.target.name;
  setFormData(prev => ({ ...prev, [name]: value }));
};
```

html input의 name 속성을 이용해 setState 코드를 간소화시킬 수 있는 방법이다.
