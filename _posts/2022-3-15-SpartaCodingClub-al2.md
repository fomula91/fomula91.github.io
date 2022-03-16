---
layout: post
title: 큐에 관한서 배운것들....
---

# 스택과 큐..
#### 추상적 자료구조 ADS라 하더라...
추상적 자료구조로써 코드로 표현하되, 가이드라인만 있는 개념으로 공부했다.
스택과 큐는 상당히 고전적인 자료구조이며 스택은 거의 모든 애플리케이션에서 사용되는 단골 메뉴인것 같다.

LIFO와 FIFO는 자주 거론되는 개념으로
스택Stack -> Last In First Out(후입선출)로 표현되고 가장 마지막에 들어온 데이터가 가장 첫번째로 나간다고 이해하고 있으며, 예시로는 물건를 수직으로 쌓아온 형태로 설명할수 있을것 같다..
큐Queue -> First In First Out(선입선출)로 표현되고 가장 처음 들어온 데이터가 가장 먼저 나간다고 이해하였다. 예시로는 대기열을 많이 이야기 하고 있다.

#### 파이썬 알고리즘 인터뷰
큐은 구현방법에 대해 파이썬으로 공부하였기 때문에 파이썬으로 구현한다.

큐를 이용한 스택이 구현(leetcode 225)
```python
import collections
class node:
    def __init__(self):
        self.queue = collections.deque()
    def push(self, x: int) -> None:
        self.queue.append(x)
        for _ in range(len(self.queue) - 1):
            self.queue.append(self.queue.popleft())
    def pop(self) -> int:
        return self.queue.popleft()
    def top(self) -> int:
        return self.queue[0]
    def empty(self) -> bool:
        return len(self.queue) == 0
```

스택을 이용한 큐 구현(leetcode 232)
```python
class MyQueue:
    def __init__(self):
        self.input = []
        self.output = []
    def push(self, x):
        self.input.append(x)
    def pop(self):
        self.peek()
        return self.output.pop()
    def peek(self):
        if not self.output:
            while self.input:
                self.output.append(self.input.pop())
        return self.output[-1]
    def empty(self):
        return self.input == [] and self.output == []
```

원형 큐 디자인(leetcode 622)
```python
class MyCircleQueue:
    def __init__(self, k:int):
        self.queue = [None] * k
        self.maxlength = k
        self.front = 0
        self.rear = 0
    def enQueue(self, value: int) -> bool:
        if self.queue[self.rear] is None:
            self.queue[self.rear] = value
            slef.rear = (self.rear +1) % self.maxlength
            return True
    def Front(self) -> int:
        return -1 if self.queue[self.front] is None else self.queue[self.front]
    def Rear(self) -> bool:
        return -1 if self.queue[self.rear -1] is None else self.queue[self.rear -1]
    def isEmpty(self) -> bool:
        return self.front == self.rear and self.queue[self.front] is None
    def isFull(self) -> bool:
        return self.front == self.rear and self.queue[self.front] is not None
```



