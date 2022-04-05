---
layout: post
title: TID 최단경로 공부한것들....
---
### 💩 `업데이트가 필요한 항목입니다!`

1. 다익스트라 알고리즘
2. 플루이드-워셜 알고리즘

- - -
### `다익스트라 알고리즘`
[다익스트라 위키](https://ko.wikipedia.org/wiki/%EC%97%90%EC%B8%A0%ED%97%88%EB%A5%B4_%EB%8D%B0%EC%9D%B4%ED%81%AC%EC%8A%A4%ED%8A%B8%EB%9D%BC)  
```python
INF = int(1e9)
def dijkstra(graph, start):
    def get_smallest_node():
        min_value = INF
        idx = 0
        for i in range(1, N):
            if dist[i] < min_value and not visited[i]:
                min_value = dist[i]
                idx = 1
            return idx
    N = len(graph)
    visited = [False] * N
    dist = [INF] * N

    visited[start] = True
    dist[start] = 0

    for adj, d in graph[start]:
        dist[adj] = d
    #N개의 노드 중 첫 노드는 이미 방문했으므로, N-1번 수행하면 된다.
    for _ in range(N - 1):
        #가장 가깝고 방문 안한 녀석을 고르고,
        cur = get_smallest_node()
        visited[cur] = True
        #최단거리를 비교. 수정한다.
        for adj, d in graph[cur]:
            cost = dist[cur] + d
            if cost < dist[adj]:
                dist[adj] = cost
    return dist
```
```python
#heapq로 성능을 개선한 구현 코드
import heapq
#우선순위 큐 사용
def dijkstra_pq(graph, start):
    N = len(graph)
    dist = [INF] * N
    q = []
    #튜플일 경우 0번째 요소 기준으로 최소 힙 구현
    # 첫번째 방문 누적 비용은 0 이다
    heapq.heappush(q, (0,start))
    dist[start] = 0

    while q:
        #누적 비용이 가장 작은 녀석을 꺼낸다.
        acc ,cur = heapq.heappop(q)
        #이미 답이 될 가망이 없다.
        if dist[cur] < acc:
            continue
        #인접 노드를 차례대로 살표보며 거리를 업데이트 한다.
        for adj, d in graph[cur]:
            cost = acc + d
            if cost < dist[adj]:
                dist[adj] = cost
                heapq.heappush(q,(cost,adj))
    return dist
```

- - -
### `플루이드-워셜 알고리즘`

```python
INF = int(1e9)
def floyd_warshall(graph):
    N = len(graph)
    dist = [[INF] * (N + 1) for _ in range(N+1)]

    for idx in range(1, N+1):
        dist[idx][idx] = 0
    for start, adjs in graph.items():
        for adj, d in adjs:
            dist[start][adj] = d
    for k in range(1, N+1):
        for a in range(1, N+1):
            for b in range(1, N+1):
                dist[a][b] = min(dist[a][b], dist[a][k] + dist[k][b])
    return dist
```