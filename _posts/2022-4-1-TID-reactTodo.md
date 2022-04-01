---
layout: post
title: TID 리액트에 관해서 공부한것들
---

오늘부터 2022.4.6일까지 리액트 TODO리스트를 만들기로 했습니다.  
이미 알고 있다고 생각한 것들에 대해서 실제로 작성을 하려고 보니깐 많이 어려웠습니다.

자기전에 작성해두지 않으면 까먹을것 같아서 미리미리 작성해두어야 될것 같습니다.

- 투두 리스트 요구사항
    - 버튼을 클릭했을때, 리스트에 추가됨
    - 추가된 리스트에 삭제 버튼이 있어 눌렀을떄 삭제되야됨
    - 단, 새로고침 눌렀을때  리스트는 그대로 남아있어야 됨.
    - 인터넷의 강의자료는 보지 않는다

 - - -
 ### `새로 알아야 하는 사항들...`

 [JSX]  
`JSX`는 자바스크립트의 확장 개념입니다.
```JSX
fuction features = () => {
    //javaScript부분
    return (
        // 이곳이 JSX사용하는 부분
        <h1> Hello World</h1>
    )
}
```
jsx는 return부분에 html문법도 사용할수 있습니다.
단, html문법이 여려개 존재할경우 부모태그로 여러문법을 감싸야됩니다.
```JSX
fuction fn = () => {
    return (
        <div>
            <input></input>
            <button></button>
        </div>
    )
}

import React, {Fragment} from 'react';
fuction fn2 = () => {
    return (
        <Fragment>
            <input></input>
            <button></button>
        </Fragment>
    )
}

import React, {Fragment} from 'react';
fuction fn3 = () => {
    return (
        <>
            <input></input>
            <button></button>
        <>
    )
}
```
 [로컬스토리지]  
 [useState]  
 [콜백함수]  

