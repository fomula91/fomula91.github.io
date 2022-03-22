---
layout: post
title: 그래프에 관해 공부한것들...
---

### `그래프란..`
recursive: 재귀적..
비선형 자료구조(nonlinear)  
하나의 자료 뒤에 여러개의 자료가 존재할수 있는 형태이다. 트리와 그래프가 대표적이다  
그래프는 노드와 노드를 모아놓는 자료구조로 추상적인 개념의 연결관계를 표현하기 위해 자주 사용된다.  
그래프의 순회란 그래프의 탐색이라고도 하는데 각 정점(노드)를 방문하는 과정을 말한다  
이런 그래프를 컴퓨터에서 표현하는 방법은 두가지가 있다..  
1. 인접 행렬Adjacency Matrix => 2차원의 배열로 그래프의 연결관계를 표현함
2. 인접 리스트Adjacnecy List => 링크드 리스트로 그래프의 연결관계를 표현


<details>
<summary>컴퓨터에서 그래프를 표현하는 방법</summary>
<div markdown="1">
아래의 그래프가 있다가 가정한다면  
```
          2 - 3  
          ⎜       
      0 - 1  
```
  
- 인접 행렬에서의 그래프의 표현방법..  
  0  1  2  3  
0 X  O  X  X  
1 O  X  O  X  
2 X  O  X  O  
3 X  X  O  X  

graph = [  
    [False, True, False, False],  
    [True, False, True, False],  
    [False, True, False, True],  
    [False, False, True, False]  
]

인접 리스트는 모든 노드에 연결된 노드에 대한 정보를 차례대로 다음과 같이 저장합니다.  

0 -> 1  
1 -> 0 -> 2  
2 -> 1 -> 3  
3 -> 2  
  
이를 딕셔너리 형태로 표현한다면 다음과 같이 표현됩니다.  
graph = {  
    0: [1],  
    1: [0, 2]  
    2: [1, 3]  
    3: [2]  
}
</div>
</details>

그래프에는 방향 그래프와 무방향 그래프가 존재한다 
그래프 탐색에서는 하나의 정점으로부터 시작하여 모든 정점을 한번씩 방문하는 것을 목표로 한다.  

### `깊이 우선 탐색`
깊이 우선 탐색은 하나의 노드에서 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법..  
모든 노드를 탐색하는 방법이 필요할때 효과적이며. 자기 자신을 호출하는 순환 알고리즘의 형태를 가지고 있다..  
이 알고리즘을 구현할때 가장 중요한 점은 어떤 노드를 방문했었는지의 대한 여부를 반드시 검사해야된다.  
깊이 우선 탐색에서의 시간 복잡도는 노드의 개수 + 탐색한 간선의 개수 = O(n+e) 이다  

- 깊이 우선 탐색을 구현하는 방법
 * 순환 호출 이용 (재귀 함수)
 * 명시적 스택 사용 (스택)

수도코드로도 작성해보면 좋을것같다

```python
print('이곳에 재귀 함수를 이용한 의사코드를 올리면 좋을것 같네요')
```
```python
print('이곳에 스택을 사용한 의사코드를 올리면 좋을것 같네요')
```


### `넓이 우선 탐색`
루트 노드에서 인접한 노드를 먼저 탐색하는 방법으로 시작  

BFS로 효과적으로 문제를 해결할수 있는 경우는 3가지이다.  
1. 최소비용
2. 간선의 가중치가 1이다
3. 정점의 간선의 개수가 적다

두 노드 사이에 최단 경로를 구하고 싶을때 사용한다  

```python
from collections import deque
#만일 그래프가 graph = {1:[2,3,4], 2:[5],3:[5],4:[],5:[6,7],6:[],7:[3]}이 주어졌을때
def myBFS(start):
    visited = [start]
    que = deque([start])

    while que:
        node = que.popleft()
        for graphKey in graph[node]:
            if graphKey not in visited:
                que.append(graphKey)
                visited.append(graphKey)
    return visited
```
```python
print('이곳에 파이썬으로 큐를 이용한BFS를 작성하면 좋을것 같네요')
```

- 일반적으로 사용하는것
짧은 거리 찾기 — BFS  
이분그래프 — BFS  
연결된 모든 요소 찾기 — BFS  
선택한 노드 찾기 — DFS  
의사 결정 트리 — DFS  
그래프의 전체 검색 공간 — DFS  
무한한 깊이와 한정적인 자식노드 — BFS  
한정적인 깊이와 무한한 자식노드 — DFS  
밀집 그래프 — DFS  
노드보다 간선이 많은 밀집 그래프 — BFS  

### `생각해볼것...`
- 백트래킹이란?
- 제약충족문제란?
- 스택 오버플로우?
- 비선형자료구조에서의? dfs에서의 사이클?
- 재귀함수는 재귀적으로 생각해야하는가?  
[재귀적생각_참고자료](https://velog.io/@eddy_song/you-can-solve-recursion)


* * *
### `관련된 문제..`
* DFS  
[leetcode_200](https://leetcode.com/problems/number-of-islands/)  
[programmers](https://programmers.co.kr/learn/courses/30/parts/12421)  
* BFS  
[backjoon-7576](https://www.acmicpc.net/problem/7576)  
[backjoon-7569](https://www.acmicpc.net/problem/7569)  


- - -
### `참고한 것들..`
[비선형 자료구조](https://goodgid.github.io/DS-Linear-and-NonLinear/)  
[깊이우선탐색_참고](https://www.fun-coding.org/Chapter18-dfs-live.html)  
[조합](https://velog.io/@unow30/%EC%A1%B0%ED%95%A9combination-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)  
[dfs,bfs_정리](https://developer-mac.tistory.com/64)  
[bfs,dbf차이](https://ko.gadget-info.com/difference-between-bfs)  
[dfs,bfs설명](https://medium.com/nerd-for-tech/dfs-bfs-introduction-26a65fca2344)  
[그래프기본용어](https://ratsgo.github.io/data%20structure&algorithm/2017/11/18/graph/)  