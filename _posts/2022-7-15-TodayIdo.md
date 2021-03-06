---
layout: post
title: 브라우저는 어떻게 동작하는가?
---

브라우져의 공통적인 구조  
사용자인터페이스

- 사용자와 직접 소통하는 부분

렌더링 엔진

- 사용자가 요청한 정보를 그려주는 부분

브라우저 엔진

- 사용자 인터페이스와 렌더링 엔진을 연결시켜주는 엔진

네트워크 파트

- 네트워크 요청을 수행하는 파트

ui백엔드 파트

- 체크박스나 기본적인 위젯을 그려주는 ui 백엔드 파트

자료저장소

- 데이터를 임시로 저장하는 파트

자바스크립터 해석기

- 자바스크립트를 실행하는 부분 (크롬의 v8엔진에 해당하는 부분)

렌더링 엔진의 목표

- 웹페이지에 포함된 모든 요소들을 화면에 보여준다
- 업데이트가 필요할때 효율적으로 렌더링을 할수 있도록 자료구조를 생성한다.

브라우저가 html과 css를 렌더링 엔진에 의해 일련의 과정을 거쳐서 사용자에게 화면을 그리게 되는데 이를 CRP라고 한다.

Critical Rendering Path
dom tree와 cssom tree를 생성해서 Render Tree를 생성하고 배치하고 최종적으로 화면을 그리게 된다.
dom tree와 cssom tree 생성 -> Render Tree 생성 -> Render Tree 배치 -> Render Tree 그리기

ui가 업데이트 되는 상황

Layout이 다시 발생되는 경우 -> 주로 요소의 크기나 위치가 바뀔때, 혹은 브라우저 창의 크기가 변경될때 다시 렌더링

paint가 다시 발생되는 경우 -> 주로 배경 이미지나 텍스트 색상, 그림자등 레이아웃 수치가 변경되지 않는 스타일이 변경될때 다시 렌더링

레이어의 합성만 다시 발생하는 경우 -> layout과 paint를 수행하지 않고 레이어 합성만 다시 렌더링 하므로 성능상 가장 큰 이점을 가지게 된다.
