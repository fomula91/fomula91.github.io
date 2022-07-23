---
layout: post
title: 클로저는 무엇인가?
---

클로저를 설명하기 위해서는 우선 실행 컨텍스트(Execution context) 대해서 알고 있다면 자연스럽게 스코프, 스코프체인, 클로저에 대해 설명할수 있다.

자바스크립트는 스코프가 존재하고 함수를 선언하면 함수 내부의 스코프를 가지게 된다.

```javascript
// global scope
function outerFn() {
  //outerFN scope
  var a = 0;
  function innerFn() {
    //innerFn scope
    var b = 1;
    console.log(a);
  }
  innerFn();
}
outerFN();

//
```

위 예제에서 `outerFN` 함수를 실행시키면 콘솔에는 0이 찍힌다.

이는 자바스크립트의 실행 컨텍스트에 의해 저장된 스코프 체인중 현재 스코프에서 먼저 검색을 하게 되고, 만일 찾고자 하는 변수가 없으면 상위 스코프를 검색하는 등, 스코프 체인 내에서 검색을 하기 때문에 해당 결과가 나오게 된다.

이를 스코프체인이라고 한다.

```javascript
// global scope
function outerFN() {
  var a = 0;
  function innerFN() {
    var b = 1;
    console.log(a);
  }
  return innerFN();
}
outerFN();
```

MDN의 설명을 기준으로 한다면 결국에는 클로저란 호출된 함수와 그 함수의 스코프체인의 조합으로, 어떤 함수의 내부 함수가 외부 함수를 참조하는 것을 의미한다.
