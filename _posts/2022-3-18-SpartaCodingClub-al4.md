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

제가 스스로 스택에 대해서 linked-list로 한번 공부하면서 작성해 보았습니다.
```python
class Node:
    def __init__(self, value, next):
        self.value = value
        self.next = next
        return

    def __str__(self) -> str:
        return f"Node({self.value})"

class LinkedList:
    head: Node
    def __init__(self):
        self.head = None

    # 추가
    def push(self, value):
        if not self.head:
            self.head = Node(value, None)
            return
        
        node = self.head
        while node:
            if not node.next:
                node.next = Node(value, None)
                break
            node = node.next

    # 삽입
    def insert(self, index ,value):
        if not self.head:
            self.head = Node(value, None)
            return
        if index == 0:
            node = Node(value, self.head)
            self.head = node
            return

        prevNode = self.head
        node = self.head.next
        nodeIndex = 1
        while node:
            if nodeIndex == index:
                node = Node(value, node)
                prevNode.next = node
                return

            prevNode = node
            node = node.next
            nodeIndex += 1
        prevNode.next = Node(value, None)

    # 맨뒤 데이터 삭제
    def pop(self):
        if not self.head:
            return None
            
        node = self.head
        while node.next:
            prevNode = node
            node = node.next
        prevNode.next = None
        return node.value

    # 중간 데이터 삭제
    def remove(self, index):
        if not self.head:
            return
        if index == 0:
            self.head = self.head.next
            return

        prevNode = self.head
        node = self.head.next
        nodeIndex = 1
        while node:
            if nodeIndex == index:
                prevNode.next = node.next
                return
            prevNode = node
            node = node.next
            nodeIndex += 1

    # 데이터 얻기
    def get(self, index):
        if not self.head:
            return None

        node = self.head
        nodeIndex = 0
        while node:
            if nodeIndex == index:
                return node.value
            node = node.next
            nodeIndex += 1
        return None
        

    # 데이터 위치 얻기
    def index(self, value):
        if not self.head:
            return
        node = self.head
        index = 0
        while node:
            if node.value == value:
                return index
            index += 1
```

스택에서 앞뒤를 연결하여 linked-list를 작성해보았습니다.

```python
class Node:
    def __init__(self, value, prev, next):
        self.value = value
        self.prev = prev
        self.next = next
        return
        
class DoubleLinkedList:
    head: Node
    tail: Node
    def __init__(self):
        self.head = None
        self.tail = None

    def push(self, value):
        if not self.head:
            self.head = Node(value, None, None)
            self.tail = self.head
            return

        node = Node(value, self.tail, None)
        prevNode = self.tail
        prevNode.next = node
        self.tail = node


    def pop(self):
        if not self.tail:
            return

        node = self.tail
        prevNode = node.prev
        self.tail = prevNode
        prevNode.next = None
        return node.value

    def insert(self, index ,value):
        node = Node(value, None, None)
        if not self.tail:
            self.head = node
            self.tail = node
            return

        if index == 0:
            nextNode = self.head
            node.next = nextNode
            nextNode.prev = node
            self.head = node
            return

        curnode = self.head.next
        nodeIndex = 1
        while curnode:
            if index == nodeIndex:
                prevNode = curnode.prev

                node.next = curnode
                node.prev = prevNode

                prevNode.next = node
                curnode.prev = node
                return
            curnode = curnode.next
            nodeIndex += 1

    def remove(self, value):
        if not self.tail:
            return None
        if self.head.value == value:
            nextNode = self.head.next
            nextNode.prev = None
            self.head = nextNode
            return
        
        curNode = self.tail
        while curNode:
            if curNode.value == value:
                prevNode = curNode.prev
                nextNode = curNode.next
                prevNode.next = nextNode
                nextNode.prev = prevNode
                curNode = None
                return
            curNode = curNode.prev
```
- - -
### `링크드 리스트를 만들어보고 풀어본 문제들...`
[백준-스택10828](https://www.acmicpc.net/problem/10828)  
[백준-제로10773](https://www.acmicpc.net/problem/10773)  
[프로그래머스-기능개발](https://programmers.co.kr/learn/courses/30/lessons/42586)  
[프로그래머스-프린터](https://programmers.co.kr/learn/courses/30/lessons/42587)  
> 프린터 문제에서 문서의 중요도를 정렬하여 가장 높은 우선순위 부터
> 차례로 빼내서 문서의 순서를 count하는 방식으로 생각하고 먼저 구현해보았지만,
> 첫번째 코드에선 반복문이 문서의 중요도를 건너띄고 체크하는 문제가 발생하여
> 전체적으로 문서의 중요도를 체크하는 방법에 대해서 많은 시간을 할애했습니다.
> 최종적으로는 가장 중요한(높은 점수의) 문서의 인덱스를 저장한뒤 반복문이 돌때마다 문서의 중요도를 체크해서
> 저장한 문서보다 중요도가 낮으면 뒤로보내고, 저장한 문서의 중요도와 현재 문서의 중요도가 일치하면 배열에서 없애는
> 방식으로 구현하였고 생각보다 쉽게 문제 해결에 성공하였습니다.
[프로그래머스-다리를지나는트럭](https://programmers.co.kr/learn/courses/30/lessons/42583)  
> 다리를 지나는 트럭에서 스택을 이용하여 배열에서 빼고 넣는 작업을 반복하는 형식으로 구현하였습니다.
> 중간 테스트에서 문제를 해결한 방식은 맞았지만, 테스트 케이스 5번에서 오류가 발생해서 이 부분을 해결하는데 시간을 많이 들였습니다.
> 반복문이 돌때마다 sum(), len()함수와 같이 배열 전체의 요소의 대한 검사가 조건문마다 계속 반복적으로 진행되어
> 불필요한 연산때문에 시간 복잡도가 계속 늘어나는 케이스였습니다.
> 시간 복잡도를 줄이기 위해 고민하는 시간을 가졌지만 끝내 해결하지 못했습니다.
> 최종적으로는 조건문을 한개로 줄이고 트럭의 무게를 저장하는 새로운 배열을 만들어 넣고 빼고를 반복하여 해결하였습니다.


- - -
### `풀어보면 좋은 문제들...`
유효한 가로 (leetcode 20.)
[문제 바로가기](https://leetcode.com/problems/valid-parentheses/)

* * *
#### `찾아본 자료..`
[스택1](http://dblab.duksung.ac.kr/ds/pdf/Chap04.pdf)

[자료형-스택](https://questionet.tistory.com/36)

[스택에 관해서](https://yoongrammer.tistory.com/45)