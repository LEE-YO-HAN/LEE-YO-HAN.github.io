---
title: react common components
description: React 공통 컴포넌트 제작 (input, button)
category: react
keyword: react, 공통 컴포넌트
date: "2023-04-13"
---

## 공통 컴포넌트 제작의 필요성

> 하나의 사이트를 제작할때 비슷한 input이나 button을 사용해야 하는 상황이 자주 있는데, 공통된 컴포넌트를 만들어 놓으면 코드 중복을 줄이면서 상황에 맞춰 적절하게 사용할 수 있게 된다.

## 컴포넌트 제작

### Input

```typescript
import React from "react"; // element 속성을 가져오기 위해 import
import styled from "styled-components"; // CSS 적용

// 컴포넌트의 props 타입을 InputElement의 속성과 내가 설정하고자 하는 타입을 포함한다.
type Props = React.HTMLAttributes<HTMLInputElement> & InputProps;

interface InputProps {
  type?: string | undefined; // type?: 의 ?는 있어도 되고 없어도 된다는 의미
  name?: string | undefined;
  autoComplete?: string | undefined;
  width: string;
  height: string;
  border?: string | undefined;
}

// width와 height는 number로 지정해도 무관하나,
// 상황에 따라 뷰포트에 맞춰 쓸지, px에 맞춰 쓸지 달라질 수 있기 때문에 string으로 설정한 경우

export const MainInput = ({
  type,
  name,
  autoComplete,
  width,
  height,
  border,
  ...props
}: Props) => {
  return (
    <Main
      // input이 갖고 있는 속성을 사용할 수 있도록 도와준다. (placeholder, onChange 등 속성과 이벤트들)
      {...props}
      name={name}
      autoComplete={autoComplete || "on"}
      type={type || "text"}
      style={{
        width: `${width}`,
        height: `${height}`,
        border: `${border && border !== "" ? `1px solid ${border}` : ""}`,
      }}
    />
  );
};

const Main = styled.input`
  padding: 5px;
  border: none;
  border: 1px solid ${props => props.theme.inputBorderColor};
  border-radius: 5px;
  font-size: 1.2rem;
  &:hover {
    background: ${props => props.theme.inputBorderColor};
  }
  &:focus {
    outline: none;
    border-color: ${props => props.theme.hoverBorderColor};
    box-shadow: 0 0 1px ${props => props.theme.hoverBorderColor};
  }
`;
```

### TextArea

```typescript
type TaProps = React.HTMLAttributes<HTMLTextAreaElement> & TextAreaProps;
interface TextAreaProps {
  name?: string | undefined;
  width: string;
  height: string;
  border?: string | undefined;
}

export const MainTextArea = ({
  name,
  width,
  height,
  border,
  ...props
}: TaProps) => {
  return (
    <TextArea
      {...props}
      name={name}
      autoComplete="off"
      style={{
        width: `${width}`,
        height: `${height}`,
        border: `${border && border !== "" ? `1px solid ${border}` : ""}`,
      }}
    />
  );
};

const TextArea = styled.textarea`
  padding: 5px;
  border: none;
  border: 1px solid ${props => props.theme.inputBorderColor};
  border-radius: 5px;
  font-size: 1.2rem;
  resize: none;
  white-space: pre;
  &:hover {
    background: ${props => props.theme.inputBorderColor};
  }
  &:focus {
    outline: none;
    border-color: ${props => props.theme.hoverBorderColor};
    box-shadow: 0 0 1px ${props => props.theme.hoverBorderColor};
  }
`;
```

## Button

```typescript
type Props = React.HTMLAttributes<HTMLButtonElement> & ButtonProps;

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined; // 버튼 타입은 이와 같이 설정해준다.
  content: string;
  width: string;
  height: string;
}

export const MainButton = ({
  type,
  content,
  width,
  height,
  ...props
}: Props) => {
  return (
    <Main
      {...props}
      type={type || "button"}
      style={{ width: `${width}`, height: `${height}` }}
    >
      {content}
    </Main>
  );
};

const Main = styled.button`
  border: none;
  border-radius: 5px;
  background: none;
  background-color: ${props => props.theme.mainButton};
  color: ${props => props.theme.mainFontColor};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.mainButtonHover};
  }
`;
```
