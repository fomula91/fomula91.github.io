---
layout: post
title: TIL extraReducers 에서 action.payload가 undefined 경우
---

문제의 코드

```tsx
export const kakaoLogin = createAsyncThunk(
  "loginSlice/kakaoLogin",
  async (_, thunkAPI) => {
    console.log("hello kakaoLogin Slice!!");

    try {
      await axios({
        method: "get",
        url: "https://796760ed-2bcd-46dd-a78d-93a1aa5eee60.mock.pstmn.io/api/auth/login",
        data: {
          kakaoId: "kakao",
        },
      }).then((res) => {
        const info = {
          token: res.data.alonerz_access,
          refresh: res.data.alonerz_refresh,
          isSignup: res.data.isSignup,
        };
        return res.data;
      });
    } catch (err) {
      console.log(err);
    }
  }
);
```

나의 경우 이렇게 해결했다.  
[스택오버플로우](https://stackoverflow.com/questions/63128875/action-payload-in-creactasyncthunk-is-undefined)  
[참고한블로그](https://goforit.tistory.com/159)

```tsx
export const kakaoLogin = createAsyncThunk(
  "loginSlice/kakaoLogin",
  async (_, thunkAPI) => {
    console.log("hello kakaoLogin Slice!!");

    try {
      const response = await axios({
        method: "get",
        url: "https://796760ed-2bcd-46dd-a78d-93a1aa5eee60.mock.pstmn.io/api/auth/login",
        data: {
          kakaoId: "kakao",
        },
      }).then((res) => {
        const info = {
          token: res.data.alonerz_access,
          refresh: res.data.alonerz_refresh,
          isSignup: res.data.isSignup,
        };
        return res.data;
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);
```

리덕스 툴킷에서 createAsyncThunk가 payload를 넘길려면은 axios로 비동기 통신한 데이터를 reponse 변수에 담아서 return을 해줘야  
extraReducers의 action.payload에 담긴다.
