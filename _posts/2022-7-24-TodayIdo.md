---
layout: post
title: 호이스팅이란 무엇인가?
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
