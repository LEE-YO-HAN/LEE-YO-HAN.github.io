---
title: redux toolkit async thunk
description: React reduxToolkit과 미들웨어 AsyncThunk 사용해보기
category: redux
date: "2023-03-24"
---

# ReduxToolkit

리덕스 툴킷은 일반적인 리덕스보다 store 설정을 용이하게 해주고, 추가적인 패키지 설치가 필요하지 않게 설계되었으며, 보일러플레이트(여러 군데에서 반복되는 코드)를 최소화하기 위해 만들어졌다.

더 사용하기 쉽다는 의미이다. 이번 글에서는 미들웨어인 AsyncThunk와 함께 사용하는 방법을 확인할 수 있다.

## 1. 설치

```bash
yarn add @reduxjs/toolkit react-redux
```

## 2. store 생성

```javascript
// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import posts from "./modules/postSlice"; // 만들어줄 Slice

const store = configureStore({
  reducer: {
    posts,
  },
});
export default store;
```

## 3. 최상위 파일(index.js, App.js 등)에 Provider import해오기

```javascript
// import -- 기존 코드들 --
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
```

## 4. 슬라이스 생성

2번의 store에 import 해줄 파일이다.

```javascript
// postSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

const initialState = {
  // data, isLoading, error로 상태관리
  posts: [],
  isLoading: false,
  error: null,
};

export const getPosts = createAsyncThunk(
  "GET_ALL_Posts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/posts`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addPosts = createAsyncThunk(
  "POST_Posts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/posts`, payload);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (errer) {
      return thunkAPI.rejectWithValue(errer);
    }
  },
);

export const updatePosts = createAsyncThunk(
  "UPDATAE_Posts",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await axios.put(
        `${BASE_URL}/posts/${payload.id}`,
        payload,
      );
      console.log("data", DataTransfer);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deletePosts = createAsyncThunk(
  "DELETE_posts",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    /* Pending */
    [getPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deletePosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    /* Fulfilled */
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.posts = [...action.payload];
    },
    [addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [updatePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      const newState = state.posts.map(item =>
        action.meta.arg.id === item.id
          ? { ...item, content: action.meta.arg.content }
          : item,
      );
      state.posts = newState;
      return state;
    },
    [deletePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      const newState = state.posts.filter(item => item.id !== action.meta.arg);
      state.posts = newState;
      return state;
    },
    /* Rejected */
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
```

이 상태에서 Postman을 통해 json 서버를 이용하기 때문에 BASE_URL은 로컬 경로로 설정해줬다.

extraReducers 의 pending, fulfilled, rejected는 각각 대기중/성공/실패 정도로 생각하면 된다.

아래와 같이 PostMan을 통해 db.json에 데이터가 정상적으로 확인되면

포스트맨 사용법 : https://lee-yo-han.github.io/redux/redux와-mock-server-사용하기

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fri6Yi%2FbtrMjiBl1Va%2FlCNsQyz5vPTIhIfBFfpC41%2Fimg.png)

아래와 같이 Redux hook을 통해 데이터를 자유롭게 사용할 수 있다.

```javascript
import { getPosts } from "../redux/modules/postSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Redux hooks

export default function Home() {
  const data = useSelector(state => state.posts.posts); // postSlice에 있는 전역 State 가져오기
  const dispatch = useDispatch(); //dispatch 사용 준비

  useEffect(() => {
    dispatch(getPosts()); // dispatch 사용 dispatch(액션함수())
  }, []);

  console.log(data);

  return (
    <div>
      <p>redux랑 포스팅CRUD</p>
      <p>데이터를 주세욥</p>
      <ul>
        {data.map(item => (
          <li>
            <span>{item.id}</span>
            <span>{item.nickname}</span>
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

위의 코드에서는 액션 함수의 인자(괄호())가 비어있지만, Slice에 원하는 액션 함수들을 작성한 후 dispatch를 해줄때 데이터가 필요한 경우는 아래의 순서로 데이터가 처리된다고 생각하면 좋다.

### 데이터 처리 순서

```javascript

// jsx component
dispath(액션함수(id등의 데이터))

// => postSlice 파일 내의 액션 함수
export const addPosts = createAsyncThunk(
    "POST_Posts",
    async (payload, thunkAPI) => { // payload를 통해 데이터를 받고 아래 코드에서 처리할 수 있도록 함
      try {
        const { data } = await axios.post(`${BASE_URL}/posts`, payload);
        console.log("data", data);
        return thunkAPI.fulfillWithValue(data); // 요청 성공 부분
      } catch (errer) {
        return thunkAPI.rejectWithValue(errer);
      }
    }
  );

// => extraReducers
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // ---- 생략 ----
    /* Fulfilled */
    [addPosts.fulfilled]: (state, action) => { // 요청 성공 시, action 인자를 통해 state(전역 상태)를 관리해줄 수 있음 (ex action.payload .---)
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    // ---- 생략 ----
```

데이터가 정상적으로 화면으로 출력되는 것을 볼 수 있다.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKVbGZ%2FbtrMljZJHmV%2F3XHhLVMqFgXEAjz2HqKky0%2Fimg.png)

단, useSelector를 사용할 때, (state)=>state... 부분은 데이터에 따라 값의 구조가 다를 수 있기 때문에, console.log()를 통해 데이터를 어떻게 받아오는지 확인하며 코드를 작성해주자.

## 간단한 CRUD 적용 예시

![image](https://blog.kakaocdn.net/dn/bDrG2e/btrMjWLhmxB/gsemxzlV7oyCzREe8oHOM1/img.gif)

## AsyncThunk를 사용한다는 것은

공식문서 : https://redux-toolkit.js.org/api/createAsyncThunk

공식 문서에 반환된 Promise를 기반으로 LifeCycle 작업을 전달하는 Thunk 작업 생성자를 반환해 비동기 요청 LifeCycle을 처리하기 위한 표준 권장 접근 방식을 추상화한다는 내용이 있다

이것은 위의 데이터 처리 순서로 설명한 것과 유사하다.

```javascript

export const addPosts = createAsyncThunk(
    "POST_Posts",
    async (payload, thunkAPI) => {
      try {
        const { data } = await axios.post(`${BASE_URL}/posts`, payload);
        console.log("data", data);
        return thunkAPI.fulfillWithValue(data);
      } catch (errer) {
        return thunkAPI.rejectWithValue(errer);
      }
    }
  );

  ↑↑↑ 이 부분에서 Promise를 반환해주고




 ↓↓↓↓ 이 부분에서 대기/성공/실패 로 구분해 데이터를 처리해준다

 //Panding
 //Fulfilled
 ...

 [addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload); // 게시글을 추가했을때 처리해주는 방식
    },

 ...
 //Rejected

```

# 전체 예제코드

```javascript
// Home.jsx

import {
  deletePosts,
  getPosts,
  updatePosts,
  addPosts,
} from "../redux/modules/postSlice";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [inputValue, setInputValue] = useState();

  const data = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(data);

  const addButton = () => {
    let addData = {
      nickname: "한삐",
      content: inputValue,
    };
    dispatch(addPosts(addData));
  };

  const deletButton = props => {
    dispatch(deletePosts(props));
  };

  const editButton = props => {
    let updateData = {
      id: props,
      nickname: "한삐",
      content: "냠냠1231241214",
    };
    dispatch(updatePosts(updateData));
  };

  return (
    <div>
      <p>redux랑 포스팅CRUD</p>
      <p>데이터를 주세욥</p>
      <input onChange={e => setInputValue(e.target.value)} type="text" />
      <button onClick={addButton}>글쓰기</button>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <div>
              <span>{item.id}</span>
              <br />
              <span>{item.nickname}</span>
              <br />
              <span>{item.content}</span>
              <br />
            </div>
            <div>
              <button onClick={() => editButton(item.id)}>수정</button>
              <button onClick={() => deletButton(item.id)}>삭제</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

```javascript
// store.js
import { configureStore } from "@reduxjs/toolkit";
import posts from "./modules/postSlice";

const store = configureStore({
  reducer: {
    posts,
  },
});

export default store;
```

```javascript
// postSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

const initialState = {
  // data, isLoading, error로 상태관리
  posts: [],
  isLoading: false,
  error: null,
};

export const getPosts = createAsyncThunk(
  "GET_ALL_Posts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/posts`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addPosts = createAsyncThunk(
  "POST_Posts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/posts`, payload);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (errer) {
      return thunkAPI.rejectWithValue(errer);
    }
  },
);

export const updatePosts = createAsyncThunk(
  "UPDATAE_Posts",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const { data } = await axios.put(
        `${BASE_URL}/posts/${payload.id}`,
        payload,
      );
      console.log("data", DataTransfer);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deletePosts = createAsyncThunk(
  "DELETE_posts",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    /* Pending */
    [getPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addPosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deletePosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    /* Fulfilled */
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.posts = [...action.payload];
    },
    [addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [updatePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      const newState = state.posts.map(item =>
        action.meta.arg.id === item.id
          ? { ...item, content: action.meta.arg.content }
          : item,
      );
      state.posts = newState;
      return state;
    },
    [deletePosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      const newState = state.posts.filter(item => item.id !== action.meta.arg);
      state.posts = newState;
      return state;
    },
    /* Rejected */
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
```
