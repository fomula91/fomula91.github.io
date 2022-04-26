---
layout: post
title: TIL ConnectedRouter 문제 해결과정...
---

Conneted Router를 이용해서 history를 주입해

redux의 middlewares에서 사용가능하게 하는 방법을 구현하고 있습니다.  
그런데 문제는 url은 변경이 됬는데 화면이 렌더링 되지않아 페이지 이동이 구현이 안됬습니다.

이를 해결하기 위해서 검색을 통해 문제를 해결하였습니다.

1. 해결방법 1
   [해결방법 1](https://joyful-development.tistory.com/16)
   history.push()를 사용했을때 페이지가 이동이 안되는 케이스를 검색...  
   쉽게 비슷한 사례를 찾을수 있었지만 `location.reload()`로 페이지를 강제로 렌더링을 하는 방법  
   혹은 useHistory를 hook을 이용한 페이지 이동방법을 찾았습니다.

그렇지만 처음에는 useHistory hook을 이용한 렌더링을 적용해서 해결됬다고 생각했는데,  
곰곰히 생각 해보니 보는 강의에서도 이런식으로 진행안했고, 별로 좋지 못한 방법(도구를 올바르게 쓰지 못한 방법) 이라는 생각이 들어 다른 해결법을 찾아보기로 했습니다.

2. 해결방법 2
   [해결방법 2](https://ablue-1.tistory.com/m/48)
   강의와 비슷하게 구현한 코드를 보니 conneted router를 Browser Router로 대체 하는 방법을 보았습니다.  
   이전에도 Browser Router와 conneted router가 동일한 기능을 한다는 얘기가 떠올라서 code상 browser router를 conneted router로 대체 하였습니다.

```javascript
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  post: Post,

  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];
```

리듀서와 미들웨어에 history를 추가하고

```javascript
function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Header></Header>
        <Route path="/" exact component={PostList} />
        <Route path="/login" component={Login} />
      </ConnectedRouter>
    </>
  );
}
```

app.js에서 Browser Router를 ConnectedRouter로 대체 하였더니
middlewares에서 history를 이용한 페이지 이동이 구현되었습니다.

---

`추가사항` 2022.4.26

react 18버전에선 ConnectedRouter가 제대로 동작하지 않는것 같다.  
똑같이 구성했지만, 동일하게 url만 바뀌고 페이지 새로고침이 되질 않았다.  
그래서 react 17.0.2 버전으로 다운그레이드하여 패키지를 적용해보니 작동이 잘되었다.

```javascript
// REACT 18
import React from "react";
import ReactDOM from "react-dom/client";
// some imports .....

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

```javascript
// REACT 17
import React from "react";
import ReactDOM from "react-dom";
// some imports .....

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```
