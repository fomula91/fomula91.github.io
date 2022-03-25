---
layout: post
title: 프로그래머스 타겟 넘버 문제 풀이...
---
오늘은 힙에 대해 공부하는 시간을 가졌습니다.  
힙에 대해 자세하게 공부하지는 못했습니다.  
주로 오늘 하루 시간 쏟은건 최대힙에 대해 구현하는 것을 집중적으로 고민해보고 백지상태의 코드에서 구현하는 시간을 가졌습니다.  
```python
class MaxHeap:
    def __init__(self):
        #Heap클래스가 시작되면 자동으로 실행되는 함수... item은 heap의 배열을 생성하고 초기화 합니다.
        #None은 실제 문제에 적용할때는 굳이 필요하지 않았습니다. index의 편의상 None을 넣어서 1부터 시작하게 했습니다.
        self.item = [None]
        
    #함수를 오버라이딩 해서 len()함수를 새롭게 정의했습니다. item배열을 초기화할때 None값을 넣었기 때문에 현재 배열의 -1을 해서 
    #배열의 길이를 0으로 조정했습니다.
    def __len__(self):
        return len(self.item) - 1
    #heap배열에 데이터를 집어넣기 위한 함수 입니다. sortUp함수를 사용해 바열의 최대값이 1번째 인덱스에 위치하도록 정렬합니다.
    def insert(self, data):
        self.item.append(data)
        self.sortUp()
    #heap배열에서 추출하는 함수입니다. 이 함수를 실행하게 되면 배열의 첫번째 값이 가장 큰 값이므로 root변수에 저장하고
    #배열의 첫번째(none이아닌)요소를 뒤로보내 pop하게 된다.
    #개인적인 생각으로는 굳이 첫번째 요소를 뒤로 보내지 않고도 pop연산을 사용해도 될것같다.
    #만일 그렇게 코드를 작성하게 되면 배열을 사용한 Maxheap을 구현한것이라 배열의 첫번째 요소를 삭제하면 나머지 요소를 다시 재정렬해야되는과정을 거치게되므로
    #시간 복잡도가 늘어날것이라고 생각한다.
    def extract(self):
        root = self.item[1]
        self.item[1] = self.item[-1]
        self.item.pop()
        self.sortDown(1)
        return root
    #보통의 경우 percolate_up()이라는 함수명으로 많이 쓰지만 개인적으로 이해하기 쉽게 변경했다/
    def sortUp(self):
        #삽입의 경우 배열의 맨 뒤에서 삽입되므로 배열의 최대길이는 곧 배열의 마지막 인덱스를 의미한다.
        currentNode = len(self.item)
        #배열의 마지막 요소의 부모 인덱스는 현재 인덱스의 2로 나눈값이 된다. 따라서 몫만 사용하기 위해 //2를 하게 된다.
        parentNode = currentNode // 2
        #아래의 반복문은 배열에서 최상위 노드인root까지 부모와 자식노드를 비교하며 서로의 위치를 변환한다.
        while parentNode > 0:
            if self.item[currentNode] > self.item[parentNode]:
                self.item[currentNode], self.item[parentNode] = self.item[parentNode], self.item[currentNode]
            currentNode = parentNode
            parentNode = currentNode // 2
    #heap에서 루트의 값이 곧 최대, 최소의 값이 되므로 root값이 추출되면 새로운 root를 기준으로 재정렬을 하게된다.
    def sortDown(self, index):
        #maxheap에서 index가 가장 큰값으로 가정하고, 힙트리에서 자식의 좌우 인덱스를 구해 어느 노드가 큰지 비교한다.
        biggest = index
        left = 2 * index
        right = 2 * index + 1
        if left <= len(self.item) and self.item[left] > self.item[biggest]:
            biggest = left
        if right <= len(self.item) and self.item[right] > self.item[biggest]:
            biggest = right
        #이 과정에서 만일 매개변수로 들어온 인덱스와 가장 큰값의 인덱스가 값이 서로 다를경우 재귀적으로 더 큰값을 찾게 된다.
        if biggest != index:
            self.item[index], self.item[biggest] = self.item[biggest], self.item[index]
            self.sortDown(biggest)
        
``` 