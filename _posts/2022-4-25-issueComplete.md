---
layout: post
title: api요청시 강제로 https로 고정되는 현상에 대해
---

리액트를 공부하던 중 서버와 통신하기 위해 axios로 서버를 호출했는데, 응답이 전혀 오질 않음...  
그래서 오류를 파악하기 위해 여러번 get요청 시도,

- 브라우저 url에서 바로 get 요청 => 응답성공
- 클라이언트(vs코드)에서 아무런 조건없이 get요청 => 응답실패

위 사실을 토대로 서버는 문제가 없으나, 요청부분(클라이언트)에서 문제가 있는 것을 인지

```javascript
axios
  .get(`http://${BASE_URL}/api/post`)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.response));
```

해당 코드에서는 전혀 문제점을 발견할수 없었음....

그래서 관리자 탭을 통해 서버와 통신을 살펴보니 모든 요청이 https로 자동 변환됨을 발견함..

즉 http로 요청하면 응답이오고, https로 요청하면 응답이 안되는것인데...

이것을 고치기 위해 httpAgent라는 것을 발견하였지만, 적용할수 있는 부분은 아닌것 같고...

```javascript
// `httpAgent`와`httpsAgent`는 각각 Node.js에서 http와 https 요청을 수행 할 때
// 사용할 커스텀 에이전트를 정의합니다. 이것은 기본적으로 활성화되지 않은 `keepAlive`와 같은
// 옵션을 추가 할 수 있게 합니다.
httpAgent: new http.Agent({ keepAlive: true }),
httpsAgent: new https.Agent({ keepAlive: true }),
```

한참 고민하다 모르겠어서 동료들에게 SOS요청..

스택오버플로우에서 비슷한 사례를 발견하였고 나의 실수를 찾게 됨...  
이전에 localhost상에서는 잘 통신이 되었지만, firebase를 통해 배포한 시점에선 에러메시지가 뿜뿜...  
원인을 알기 위해 보니 http -> https로 호출이 가능하지만  
https -> http로 호출은 불가능 한것이었고, 물론 서버에서 localhost를 허용한 부분도 있겠지만,
localhost는 http로 시작하는 주소를 가지고 있었고  
firebase는 https로 시작하는 주소를 가지고 있었다.

따라서 이 문제를 서버말고 클라이언트에서 해결하고자 index.js에 메타태그를 추가하였는데,  
결국 이 메타태그가 제대로 지우지 않아 서버와 문제를 일으켰던것....

```javascript
<meta http-equiv=“Content-Security-Policy” content=“upgrade-insecure-requests”/>
```

해당 메타태그는 클라이언트에서 서버로 API통신을 할때 무조건 https로 변환시키는 메타태그로,  
이것을 이용해 firebase상에 배포한 클라이언트의 문제를 해결하려고 했지만, 결국 실패했다.

서버에서 https설정을 해줘야 되는것같아, 다시 코드를 원상 복귀하고 테스트를 진행했었는데, 이 메타태그 부분을 깜빡 잊었던것!!!!
