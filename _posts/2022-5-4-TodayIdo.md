---
layout: post
title: TIL 리액트 useRef, forwardRef
---

오늘 리액트로 기능 구현중, atom방식의 폴더구조를 만들어놓고 element에 input 컴포넌트를 만들었는데...  
이 input태그가 아니라 스타일-컴포넌트 + 외부에서 불러온 컴포넌트라 안에 들어있는 컴포넌의 value값을 제대로 받아오지 못하는 상황이 발생함.

```TSX
<DIV style={{ margin: "20px" }}>
          <Input
            ref={(menu) => (partyInput.current[2] = menu)}
            placeholder="메뉴를 입력해주세요"
            label="메뉴"
          />
        </DIV>
```

콘솔 오류 메시지로 forwardRef를 쓰는게 맞는지 물어보는 것 같아서 관련 정보를 검색하기 시작함...

```jsx
import React, { forwardRef } from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

const Input = forwardRef((props, ref) => {
  return (
    <Grid>
      <Text size="15px" bold="bold" margin="0px 0px 16px 0px">
        {label}
      </Text>
      <ELInput ref={ref} placeholder={placeholder} onChange={_onChange} />
    </Grid>
  );
});
export default Input;
```

최종적으로 해당 input은 element로 외부에서 불러와서 사용을 하게 된다.  
따라서 forwardRef를 함수 전체적으로 감싸주는 형태로 사용하게 되면.  
해당 컴포넌트의 ref값을 받아올수 있게 된다.
