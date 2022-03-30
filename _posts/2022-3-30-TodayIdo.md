---
layout: post
title: TID 힙(heap)과 힙정렬(heap sort) 알아본 내용
---

힙은 완전이진트리로써 최댓값과 최솟값을 빠르게 연산하기 위해 고안된 자료구조이다.  
힙의 구현은 주로 배열로 구현한다.  
힙은 부모노드와 자식노드사이에 대소관계를 성립하며, 이 대소관계에 따라 최소힙, 최대힙으로 나뉜다.  

따라서 노드의 데이터에 따라 우선순위를 가지고 있는게 특징이며, 이를 응용하여 우선순위 큐의 자료구조를 구현할때 사용되기도 한다.  
힙은 대체적으로 이진트리의 구조를 사용하며, 이진트리의 특성에 따라 시간복잡도는 O(logn)이다  

힙 구조에서 삽입과 삭제가 일어나면 힙 구조는 깨지게 되는데, 이때 힙을 재구조화를 해야된다.
삽입이 되었을때는 데이터는 힙 구조에서 말단에 입력이 되므로 말단의 부모노드와 비교후 입력값이 더 크거나, 작거나를 성립할때 부모노드와 서로 위치를 교환한다.  
이렇게 데이터가 들어갔을때 부모노드와 자식노드가 서로 비교해서 위치를 교환하게되면 root노드에 우선순위가 높은 데이터가 들어간다.  

반대로 삭제가 될때에는 우선순위가 높은 노드부터 제거가 되야하므로 제일 말단의 노드와 root노드가 위치를 교체해야하고, 위치가 교환된 우선순위가 높은 노드는 삭제되고...  
root노드는 제일 말단 노드의 데이터를 가지고 있으므로, 이때 힙의 재구조화를 통해서 힙의 구조를 정렬한다.  
(루트노드를 삭제하고 말단노드를 루트노드에 넣는거나, 루트와 말단노드를 교환하고 말단 노드를 삭제하는거나 똑같은 거라고 생각한다.)  

##### `최소 힙 구현`
```python
class BinaryMinHeap:
    def __init__(self):
        self.item = [None]
        
    def __len__(self):
        return len(self.item) - 1

    def _percolate_up(self):
        cur = len(self)
        parent = cur // 2
        while parent > 0:
            if self.item[cur] < self.item[parent]:
                self.item[cur], self.item[parent] = self.item[parent], self.item[cur]
                cur = parent
                parent = cur // 2

    def _percolate_down(self, cur):
        smallest = cur
        left = 2 * cur
        right = 2 * cur + 1
        if left <= len(self) and self.item[left] < self.item[smallest]:
            smallest = left
        if right <= len(self) and self.item[right] < self.item[smallest]:
            smallest = right
        if smallest != cur:
            self.item[cur], self.item[smallest] = self.item[smallest], self.item[cur]
            self._percolate_down(smallest)

    def insert(self, k):
        self.item.append(k)
        self._percolate_up()

    def extract(self):
        if len(self) < 1:
            return None
        root = self.item[1]
        self.item[1] = self.item[-1]
        self.item.pop()
        self._percolate_down(1)
        return root
```
##### `최대힙 구현`
```python
class BinaryMaxHeap:
    def __init__(self):
        self.item = [None]

    def __len__(self):
        return len(self.item) - 
        1
    def _percolate_up(self):
        cur = len(self)
        parent = cur // 2
        while parent > 0:
            if self.item[cur] > self.item[parent]:
                self.item[cur], self.item[parent] = self.item[parent], self.item[cur]
            cur = parent
            parent = cur // 2

    def _percolate_down(self, cur):
        biggest = cur
        left = 2 * cur
        right = 2 * cur + 1
        if left <= len(self) and self.item[left] > self.item[biggest]:
            biggest = left
        if right <= len(self) and self.item[right] > self.item[biggest]:
            biggest = right
        if biggest != cur:
            self.item[cur], self.item[biggest] = self.item[biggest], self.item[cur]
            self._percolate_down(biggest)

    def insert(self, k):
        self.item.append(k)
        self._percolate_up()

    def extract(self):
        if len(self) < 1:
            return None
        root = slef.item[1]
        self.item[1] = self.item[-1]
        self.item.pop()
        self._percolate_down(1)
        return root
```