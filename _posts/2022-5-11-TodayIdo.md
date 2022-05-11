---
layout: post
title: TIL typescript 에서 useState 문제 해결(ts:2345 error)
---

문제의 코드

```tsx
const ModifyUser = () => {
  const userInfo = useAppSelector((state) => state.user);
  const [name, setNickname] = useState("");

  useEffect(() => {
    console.log(typeof nickname);
    setNickname(userInfo.nickname);
  }, []);

  return <React.Fragment></React.Fragment>;
};
```

user의 정보를 바꾸기 위해 useSelector를 사용해서 상태를 받아와서  
useState를 이용해 값을 변경하여 화면에 렌더링을 시도할려고 했다.  
useState의 상태는 string값이었고, userInfo.nickname도 string값이라 전혀 이상할게 없어보였지만,  
실제로는 setState에 파라미터에 어울리지 않는다는 에러 메세지를 띄우게 되었다.

```
Argument of type 'string | undefined' is not assignable to parameter of type 'SetStateAction<string>'.
  Type 'undefined' is not assignable to type 'SetStateAction<string>'.ts(2345)
```

나의 경우 이렇게 해결했다.

type을 선언해서 state에 지정해주었다.

```tsx
type nickname = string | undefined;
const ModifyUser = () => {
  const userInfo = useAppSelector((state) => state.user);
  const [name, setNickname] = useState<nickname>();

  useEffect(() => {
    console.log(typeof nickname);
    setNickname(userInfo.nickname);
  }, []);

  return <React.Fragment></React.Fragment>;
};
```
