---
layout: post
title: TIL 리액트 반응형 웹에서 이미지 비율 조정
---

리액트를 이용해 사이트 레이아웃을 구성하는 와중에 이미지를 일정하게 비율을 유지를 해야될 필요성이 있었다.  
[참고](https://hyung1.tistory.com/40)  

가로세로 비율을 유지하기 위해서 2개의 div태그를 중첩하여 각각 
witdh, height, position 설정을 해주면 손쉽게 원하는 비율로 고정할수 있다.  

```javascript
//이미지의 바깥에 들어갈 태그
const IMGOUT = styled.div`
  width: 100%;
`;

//이미지의 안쪽에 들어갈 태그, 이미지url과 같이 넣어주면 된다.
const IMGIN = styled.div`
  /* position: relative; */
  width: 100%;
  padding-top: 75%;

  background-image: url("https://firebasestorage.googleapis.com/v0/b/mycommunity-a2861.appspot.com/o/images%2FMGpAPQMOQ6VjT0D6sI8LfXQCmtf2_1650543022204?alt=media&token=7a9cda72-58da-4c01-9752-4bb358379d5d");
  background-size: cover;
`;
```

padding-top으로 쉽게 이미지의 비율을 맞추어서 고정할수 있다.

- 2:1 : padding-top: 50%
- 1:2 : padding-top: 200%
- 4:3 : padding-top: 75%
- 16:9 : padding-top: 56.25%