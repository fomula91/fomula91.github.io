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
    #로토무 파티션을 이용해 pivot 을 구한다
    def partition(part, ps, pe):
        #초기 pivot값은 주어진 배열의 끝요소
        pivot = part[pe]
        #인덱스 i는 탐색 위치의 - 1
        i = ps - 1
        #j를 포인터로 이용해 배열을 전제적으로 지정한 pivot까지 탐색한다
        for j in range(ps, pe):
            #탐색 포인터인 j가 피봇값보다 작을시 인덱스 i의 값을 증가시키고,
            #j 와 i의 요소값을 서로 교체한다.
            if part[j] <= pibot:
                i += 1
                part[i], part[j] = part[j], part[i]
        #j의 포인터가 배열을 전부 돌았다면 i포인터를 다음으로 이동시킨후
        #pivot과 자리를 교체한다.
        part[i + 1], part[pe] = part[pe], part[i+1]
        #그리고 현재 피봇값을 return한다.
        return i + 1
    #재귀 호출중 시작포인터가 끝나는 포인터의 값보다 클경우
    #재귀 호출을 정지한다.
    if start >= end:
        return None
    p = partition(lst, start, end)
    #재귀적으로 함수를 호출하여 pivot값을 새롭게 정의하면서 정렬을 한다.
    #pivot값이 작은 부분부터 pivot보다 큰값순으로 함수를 재귀적으로 호출한다.
    quickSort(lst, start, p - 1)
    quickSort(lst, p + 1, end)
    #매개변수로 받은 lst는 함수를 호출할때마다 새로 깊은 복사되지 않았으니,
    #원본값이 정렬된 값으로 변경되있다.
    return lst
```