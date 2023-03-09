---
title: redux usage
description: redux 사용해보기
category: redux
date: "2023-03-04"
---

# React에서 Redux 사용해보기

리덕스 툴킷 x

## Redux 설치

```bash
yarn add redux react-redux
```

1. src 디렉토리 안에 redux 폴더 생성
2. redux 폴더 안에 config, modules 폴더 생성 (생성할 state들의 그룹)
3. modules 폴더 안 store.js 생성
   > 폴더/파일 명은 목적이나 폴더 구조에 맞춰 자유롭게 생성해줘도 괜찮다.

## 스토어 생성

```javascript
// src/configStore.js

import { createStore, combineReducers } from "redux";
import todo from "./modules/todo"; // 모듈에 있는 reducer 불러오기

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;
```

## 스토어 연동

```javascript
// 디렉토리 최상단 파일 ex/ index.js or app.js

import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어준다.
  <Provider store={store}>
    <App />
  </Provider>,
);
reportWebVitals();
```

## reducer 편집

```javascript
// 예제
// todo.js - ./modules에 있는 파일

// Actions
const CREATE = "my-app/todo/CREATE";
const REMOVE = "my-app/todo/REMOVE";

// Reducer
//action이 없으면 state는 아래 initialState의 초기값, 있으면 action 값
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE: {
      const new_todo_list = [...state.todos, action.todo];
      return { todos: new_todo_list };
    }
    case REMOVE: {
      const new_todo_list = action.todo;
      return { todos: new_todo_list };
    }

    // ...etc

    default:
      return state;
  }
}

// Action Creators
export function createTodo(todo) {
  console.log("create 액션 생성");
  return { type: CREATE, todo };
}

const initialState = {
  // createTodo(todo)의 초기값 설정
  todos: [
    {
      id: 1,
      name: "qwert",
    },
    {
      id: 2,
      name: "asdf",
    },
  ],
};

export function removeTodo(todo) {
  console.log("remove 액션 생성");
  return { type: REMOVE, todo };
}
```

## 컴포넌트에서의 사용

reducer를 모두 작성해준 후 컴포넌트에서 사용할 수 있다.

```javascript

// 리덕스 훅
import {useSelector , useDispatch} from "react-redux";


const test = () =>{
	// 해당 상수는 useSelector를 통해 reducer에 있는 state 값을 가져온다.
	const testList = useSelector((state=>state.todo.todos))
    // 액션을 생성하기 위해 준비
    const dispatch = useDispatch()

    const addBtn = () =>{
    	// ---실행하고싶은 코드들---
        // -------------------------
        // dispatch로 액션을 생성했으니, 원하는 처리는 reducer에서 입력하면 된다.
        dispatch(createTodo(reducer에서 처리하고 싶은 값))
    }
    return(
    	<div></div>
    )
}

```

참조 : https://ko.redux.js.org/
