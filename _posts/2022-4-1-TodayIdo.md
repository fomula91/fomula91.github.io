---
layout: post
title: TID 이진탐색 공부한것들....
---

이진 탐색은 정렬된 배열에서 원하는 데이터를 찾을때 절반씩 줄여가면서 찾아가는 탐색법입니다.  
제가 생각하기로는 분할, 정복의 개념인것 같습니다.  
시간 복잡도는 logn으로 효율이 좋은 알고리즘으로 생각합니다.  
그렇지만 단점으로는 데이터가 정렬이 되었을때 사용되어야 한다는 것은 단점인것 같습니다.

이진 탐색의 구현은 파이썬으로 공부했습니다.

```python
def binary_serch(num, target):
    #재귀적으로 기준점을 배열의 중간지점으로 갖습니다.
    #이진 탐색을 할때 매개변수로 배열의 시작과 끝을 넣어줍니다.
    def bs(start, end):
        if start > end:
            return -1
        #배열의 중간값은 2로 나눈 숫자의 몫으로, 항상 중앙에서 부터 시작됩니다.
        mid = (start + end) // 2
        #만일 target보다 찾고자 하는 대상보다 작다면 함수를 재귀적으로 불러와서 중간 값보다 작은 데이터를 찾아냅니다.
        if num[mid] < target:
            return bs(mid+1, end)
        #만일 중간값이 타켓보다 클 경우 대상은 중간값보다 크다는 걸로 알고 기준접에서 큰값의 데이터를 가져옵니다.
        elif num[mid] > target:
            return bs(start, mid -1)
        else:
            return mid
    
    return bs(0, len(num) -1)
```

