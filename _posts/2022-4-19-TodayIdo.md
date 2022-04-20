---
layout: post
title: TIL 강의를 들으면서 생긴 오류 해결 과정
---

[`질문`] 강의자료에 나온대로 redux-logger, 와 redux의 미들웨어가 정상적으로 작동하지 않는것 같다. 에러메시지에 대한 정보를 찾아봤음에도 불구하고 문제점을 발견할수 없다.

[`답변`] 라이브러리의 사용법이 잘못된 것같다, 같은 강의를 듣고있는 수강생과 비슷한 케이스를 찾아서 해결하는 것이 빠른 해결에 도움이 될것같다.

먼저 해결과정에 앞서, 느닷없이 들이닥친 점은 다른 조원 분들에게 죄송합니다 :울음:  
요약있습니다. :아래쪽\_화살표: 요약이 핵심인건 안비밀

> Uncaught Error: Actions must be plain objects. Instead, the actual type was: ‘function’. You may need to add middleware to your store setup to handle dispatching other values, such as ‘redux-thunk’ to handle dispatching functions.

> Uncaught ReferenceError: process is not defined

위와 같은 에러 메시지를 확인하였고 맨처음 구글에서 오류메시지에 대한 정보를 찾았음에도 불구하고 해결에 대한 실마리는 떠오르지 않았습니다.

미들웨어 작성 부분에 잘못됬을거라는 판단으로 미들웨어쪽 코드를 살펴봤는데 문법적으로 오류는 보이지 않았습니다.

리덕스의 미들웨어 함수 user.js -> const loginAction 부분에서

```javascri pt
const loginAction = (user) => {
  console.log("1");
  console.log("2");
  return function (dispatch, getState, { history }) {
    console.log("3");
    dispatch(logIn(user));
    history.push("/");
  };
};
```

console.log1번과 2번까지는 제대로 출력이 되는 것을 확인했지만, 3번은 출력되지 않았습니다.  
아래는 리액트 강의를 듣고 계시는 분들에게 찾아가 물어보고 해결한 과정입니다.

1. 라이브러리 버전 의심
   - 강의 자료와 현재 코드에 설치되어있는 라이브러리가 다른것으로 의심....
   - 노드 모듈삭제 재설지 => 오류 해결 안됨
   - 노드 모듈과 yarn.lock을 삭제하고 재설치를 해야 충돌이 모듈간 충돌이 없다.
   - 노드 모듈 삭제 yarn.lock 삭제 및 재설지 => 오류 해결 안됨
   - 결론 라이브러리 문제는 아님
2. 비슷한 케이스 추적
   - 리액트 수강생을 기준으로 비슷한 케이스를 겪은 사람이 있는지 다른 조원들에게 문의
   - 비슷한 케이스 전혀없음 같은 코드 비교해봐도 문제점 찾을수 없음
   - 다 같이 오류 추적.....
3. 오류 메세지 추적
   - ConnectedRouter 와 history 모듈을 불러오는 과정이 문제가 있는 것 같다는 의견 수렴
   - 콘솔 창에 올라와있는 내 코드를 추적해서 확인함
   - configureStore.js 딱희 문제는 없었으나, composeEnhancers 함수를 사용하지 않는 점을 발견
   - composeEnhancers가 사용될만한 코드를 추적
   - middlewares binding 부분에서 코드를 잘못 사용하고 있다는 점을 발견!

```javascript
// redux devTools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// middlewares binding
const enhancer = combineReducers(applyMiddleware(...middlewares));
```

middlewares binding 에서 combineReducers부분을 composeEnhancers로 변경  
문제 해결!!!!

[결론 및 느낀점] 오류가 나면 자동완성된 코드도 다시보자

저의 문제에 대해 부족한 시간 내어주시고 같이 문제에 대해 고민해주시고 해결 방법을 제시해주신 리액트분들과 노드, 스프링 팀원분들에게 정말 감사드립니다!! :기도:
