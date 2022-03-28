---
layout: post
title: TID 정렬(quickSort)에 공부한 것들...
---
퀵소트는 파티션함수를 어떻게 구현하는지에 따라 시간복잡도가 달라질수 있다.  
파티션 기법에는 lomuto 파티션과 hoare 파티션이 있다.  

현재 공부한 lomuto 파티션의 경우
정렬 시작시, pivot을 가장 맨 뒤에있는걸 기준으로 잡는다  
i 는 인덱스의 -1 값을 부여한다.  
j 는 인덱스 값을 부여해서 피봇 전까지 탐색한다.  

만일 j의 값이 피봇 값보다 작거나 같은 경우  
i를 1올려서 i 와 j를 서로 교체한다.  
이때, j가 배열을 전부 탐색했다면...  
i를 1증가시키고 피봇값과 i를 교체한다.  

* 로무토 파티션을 이해하기 위한 레퍼런스 참고
    - [opnegenusIQ](https://iq.opengenus.org/lomuto-partition-scheme/)
    - [interview kickstart](https://www.interviewkickstart.com/learn/hoares-vs-lomuto-partition-scheme-quicksort)
    - [tistiory](https://ldgeao99.tistory.com/376)
    - [나중에참고하면좋을듯](https://seokdev.site/238)

로무토 파티션을 이용한 퀵소트 구현
```python
def quickSort(lst, start, end):
    def partition(part, ps, pe):
        pivot = part[pe]
        i = ps - 1
        for j in range(ps, pe):
            if part[j] <= pibot:
                i += 1
                part[i], part[j] = part[j], part[i]
        part[i + 1], part[pe] = part[pe], part[i+1]
        return i + 1
    if start >= end:
        return None
    p = partition(lst, start, end)
    quickSort(lst, start, p - 1)
    quickSort(lst, p + 1, end)
    return lst
```