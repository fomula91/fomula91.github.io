---
layout: post
title: 스택에 관해 공부한것들...
---

### `스택이란..`
라스트인 퍼스트아웃 Last In First Out(LIFO)즉 후입선출로 마지막으로 저장된 데이터가 첫번째로 출력되는 형태를 말한다.
보통 한쪽 끝에서 데이터를 빼낸다고 많이 말하는것 같고 빨래통이나 쌓아올린 택배 상자를 예시로 든다.

다음은 파이썬 문법에서 스택에 관한 구현을 해보았다.
스택을 구현하기 위해서는
- 노드Node
- 푸시Push
- 팝Pop
- 엠티or풀 is_empyt, is_full
의 정보가 필요한것 같다.

```python
class Node:
    #노드 클래스 구현, 스택에 필요한 밸류와 이전값을 지정합니다.
    def __init__(self, value, next):
        self.value = value
        self.next = None

class Stack:
    #스택클래스를 구현
    def __init__(self):
        self.top = None
    #요소를 검사(full or empty)
    def is_empty(self):
        return self.top is None

    #데이터를 집어 넣을때, 값과, 노드의 다음값을 지정합니다.
    def push(self, value):
        self.top = Node(value, next)

    #데이터를 꺼낼때, 만약 스택이 빈 배열이면 none을 리턴하고 그렇지 않으면
    #현재의 top데이터를 임시 변수에 저장하고, 현재의 top데이터를 노드의 다음 값으로 지정
    #임시 변수node에 저장된 데이터를 리턴합니다.
    def pop(self):
        if self.top is None:
            return None
        node = self.top
        self.top = self.top.next

        return node.value
        
```
- - -
### `풀어보면 좋은 문제들...`
유효한 가로 (leetcode 20.)
[문제 바로가기](https://leetcode.com/problems/valid-parentheses/)

* * *
#### `찾아본 자료..`
[스택1](http://dblab.duksung.ac.kr/ds/pdf/Chap04.pdf)

[자료형-스택](https://questionet.tistory.com/36)

[스택에 관해서](https://yoongrammer.tistory.com/45)