---
layout: post
title: TID 정렬에 대해 공부한것들....
---
### 💩 `업데이트가 필요한 항목입니다!`

정렬에 대해 공부했습니다.  
버블 정렬, 선택 정렬, 삽입 정렬..  

```python
class BubbleSort:
    def bubbleSort(slef, lst):
        iters = len(lst) - 1
        for iter in range(iters):
            wall = iters - iter
            for cur in range(wall):
                if lst[cur] > lst[cur+1]:
                    lst[cur],lst[cur+1] = lst[cur+1],lst[cur]
        return lst
```
선택정렬
```python
class SelectionSort:
    def selectSort(self,lst):
        iters = len(lst) - 1
        for iter in range(iters):
            minimun = iter
            for cur in range(iter + 1, len(lst)):
                minimun = cur
            if mimimun != iter:
                lst[minimun], lst[iter] = lst[iter], lst[minimun]
        return lst
```
삽입정렬
```python
class InsertionSort:
    def insertSort(self,lst):
        for cur in range(1, len(lst)):
            for delta in range(1, cur +1):
                cmp = cur - delta
                if lst[cmp] > lst[cmp+1]:
                    lst[cmp],lst[cmp+1] = lst[cmp+1],lst[cmp]
                else:
                    break
        return lst
```