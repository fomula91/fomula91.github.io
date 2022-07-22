---
layout: post
title: TIL 스파르타 코딩클럽 리액트 강좌에서 오늘 배운것
---

#### 리액트에서 자주 사용하는 자바스크립트

`class`  
리액트에서는 클래스를 사용해 작성하는것보다 함수형을 이용한 코딩을 사용하기를 권장한다.  
[리액트 공식문서]  
그러나 실제 리액트로 구성된 서비스들은 클래스로 사용해 구성되있는 경우도 있으므로,  
클래스로 구성된 리액트 코드를 볼수 있어야 하므로, 어떻게 코드를 작성하는지에 대한 이해도가 필요한다.  
따라서 자바스크립트의 클래스 상속에 대해 알아보았다.

```javascript
class Cat {
		constructor(생성시 들어갈 매개변수) {
				this.name = name
				// this -> Cat을 의미 즉 자기 자신의 클래스
		}
		showName(){
			console.log(this.name)
		}
}
상속
class MyCat extends Cat{ //Cat으로부터 상속받은 (데이터를 전달받음)
		constructor(name, age){
			super(name); //부모클래스로부터 생성자 불러오기
			this.age
		}
		showName(){
			console.log(this.name + “입니다”
		}
		showAge(){
			console.log(this.age);
		}
}
-> 자식 클래스와 부모 클래스가 같은 함수를 선언 했을때 자식 클래스를 호출하면 자식 클래스에서 선언한 함수가 호출된다.
```

추가로 Array의 내장함수중 많이 쓰는 내장함수는

1. `map`
2. `filter`
3. `concat`
4. `from`

이며 각각 사용법에 대해 간단히 익혔다.

스프레드 문법  
[벨로퍼트](https://learnjs.vlpt.us/useful/07-spread-and-rest.html)
기존에 정의된 배열이나 해시테이블을 수정하지 않고 새로운 객체로 반환되는걸로 이해했다.

```JSX
let num = [1,2]
let num2 = [3,4,5]
let result = [...num, num2]
// result = 1,2,3,4,5
```

> 알아볼것 => 묵시적형변환

#### styed-components

css-in-javascript 라이브러리 중 하나로 컴포넌트에 직접 스타일을 적용하는 방식이다.  
scss설치없이 scss문법을 사용할수 있다.
작성이 간편하다
