---
layout: post
title: TIL input을 이용한 fileReader 사용방법
---

[참고](https://www.zerocho.com/category/HTML&DOM/post/592827558653d6001804a0a5)  
[참고2](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=horajjan&logNo=220463053828)

이미지 파일을 스토리지에 저장하기 위해서 사용하는 fileReader의 사용법에 대해 간단하게 알아보았다.

```javascript
return (
  <React.Fragment>
    <input
      type="file"
      onChange={selectFile}
      ref={fileInput}
      // disabled={is_uploading}
    />
    <Button _onClick={() => {}}>업로드하기</Button>
  </React.Fragment>
);
```

리액트에서 input태그를 생성하고 useRef로 선택된 파일의 정보를 담아두었다.

```javascript
const selectFile = (e) => {
  console.log(e);
  // -> onChange 이벤트....
  console.log(e.target);
  // -> input태그의 이벤트....

  console.log(e.target.files[0]);
  console.log(fileInput.current.files[0]);
  /* 
      e.target.files[0] -> 이벤트 핸들러를 사용해서 해당 파일의 정보를 읽어왔을때....
      File {name: '고양이.jpeg', lastModified: 1650003672699, lastModifiedDate: Fri Apr 15 2022 15:21:12 GMT+0900 (일본 표준시), webkitRelativePath: '', size: 441031, …}
      lastModified: 1650003672699
      lastModifiedDate: Fri Apr 15 2022 15:21:12 GMT+0900 (일본 표준시) {}
      name: "고양이.jpeg"
      size: 441031
      type: "image/jpeg"
      webkitRelativePath: ""
      [[Prototype]]: File

      React.useRef() -> 리액트 useRef를 사용해서 해당 파일의 정보를 읽어왔을때....
      File {name: '고양이.jpeg', lastModified: 1650003672699, lastModifiedDate: Fri Apr 15 2022 15:21:12 GMT+0900 (일본 표준시), webkitRelativePath: '', size: 441031, …}
      lastModified: 1650003672699
      lastModifiedDate: Fri Apr 15 2022 15:21:12 GMT+0900 (일본 표준시) {}
      name: "고양이.jpeg"
      size: 441031
      type: "image/jpeg"
      webkitRelativePath: ""
      [[Prototype]]: File
  */

  const reader = new FileReader();
  const file = fileInput.current.files[0];

  //선택한 파일을 url로 만드는 방법 base64로 인코딩한다
  reader.readAsDataURL(file);

  //onloaded 읽기가 완료됬을때 실행되는 이벤트 핸들러
  reader.onloadend = () => {
    console.log(reader.result);
    dispatch(imageActions.setPreview(reader.result));
  };
};
```

useRef를 사용해서 데이터를 받아오는 것이 별 차이가 없다고 느꼈고, FileReader를 new생성자를 통해 미리 정보를 읽어와 미리보기로 사용할수 있다는 점을 배우게 되었다.
