---
layout: post
title: 호이스팅이란 무엇인가?, post vs put
---

호이스팅이란 무엇인가?

[MDN 레퍼런스](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)

```
JavaScript에서 호이스팅(hoisting)이란, 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다.

var로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화합니다.

반면 let과 const로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않습니다.
```

자바스크립트 엔진은 코드를 실행하기 전 코드를 형상화하고 구분 하는 과정을 진행하는데 이를 실행 컨텍스트 과정이라고 한다.

이 실행 컨텍스트 과정에서 코드에서 선언된 변수와 함수 선언을 스코프에 저장하는데 이는 변수 선언이나 함수 선인이 위로 끌어올려진것 같은 현상을 보인다. 이를 호이스팅이라고 한다. 즉 호이스트은 자바스크립트 엔진이 실행하기 위해 일어나는 실행 컨텍스트에 의해 생기는 현상이다.

---

[참고 1](https://hanamon.kr/javascript-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80-hoisting/)  
[참고 2](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)  
[참고 3](https://www.youtube.com/watch?v=SBTyD_fLZnE)  
[참고 4](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)

# REST API에서 post와 put의 차이점은 무엇인가?

idempotent, 멱등성이라고 하는 부분에서 차이가 발생한다.
post와 put 두 요청을 반복하게 되면 post의 경우 서버에서는 매번 다른 리소스를 전달하게 되지만 put 요청의 경우 매 요청마다 같은 리소스를 전달하게 된다.(물론 내용은 변경된다.)

---

[참고1](https://www.w3schools.com/tags/ref_httpmethods.asp)  
[참고2](https://velog.io/@53_eddy_jo/RESTful%ED%95%9C-%EC%84%B8%EA%B3%84%EC%97%90%EC%84%9C%EC%9D%98-POST%EC%99%80-PUT%EC%9D%98-%EC%B0%A8%EC%9D%B4-%EA%B1%B0%EA%B8%B0%EC%97%90-FETCH%EA%B9%8C%EC%A7%80)  
[참고3](https://velog.io/@dion/HTTP-%EB%A9%94%EC%86%8C%EB%93%9C%EC%9D%98-%EB%A9%B1%EB%93%B1%EC%84%B1-%EA%B7%B8%EA%B2%8C-%EB%AD%94%EB%8D%B0)
