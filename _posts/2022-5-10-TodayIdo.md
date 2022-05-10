---
layout: post
title: TIL extraReducer에서 user 객체에 action.payload 객체 넣기
---

문제의 코드

```tsx
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state = action.payload.user;
    });
  },
});
```

user의 state를 변경하기 위해 다음과 같이 했지만 전혀 적용되지 않았다.

```tsx
state.userId = action.payload.user.userId;
```

위와 같은 코드는 적용되었지만, `state`도 객체 `payload.user`도 객체,  
action은 발생했지만 `state`에 전혀 적용되지 않았다.

그래서 반복문을 통해 `state`의 key값과 `payload.user` key값과 비교하여  
하나씩 집어넣을려고 했지만, 타입스크립트와 리덕스 툴킷의 미숙한 사용으로 인해 실패하였다..

나의 경우 이렇게 해결했다.  
[redux-toolkit docs](https://redux-toolkit.js.org/api/createSlice)

그래서 마지막 거의 포기하고 싶어질때 쯤, 공식문서를 보기로 하였다.
공식문서의 예제를 보고, `return`을 추가했더니 성공!

간단한 해결책이지만 3~4시간동안 검색한 결과.... 겨우 해결......

```tsx
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      return (state = action.payload.user);
    });
  },
});
```
