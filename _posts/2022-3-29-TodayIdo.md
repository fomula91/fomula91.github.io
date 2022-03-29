---
layout: post
title: TID 정렬(mergeSort)에 공부한 것들...
---

mersort는 기본적으로 주어진 데이터를 재귀적으로 분할해서 순서를 정렬한뒤 재귀적으로 다시 합치는 과정을 거칩니다.
즉, 배열을 입력 받으면 배열의 길이를 기준으로 절반씩 분할하는 과정을 거치고
분할하는 과정에서 각 배열의 요소를 검사해서 정렬하는 과정을 거치고...  
다시 분할해서 정렬을 수행하고,
마지막엔 다시 정렬된 요소를 다시 합치는 형태로 알고리즘을 수행하게 됩니다.
이 과정에서 배열의 시간 복잡도는 분할하는 과정에서는 O(logn)이 걸리게 되고
각 배열의 요소를 검사해서 정렬하는 과정은 O(n)의 시간이 걸리게 됩니다.  
그래서 최종적으로 시간 복잡도는 O(nlogn)이 걸리게됩니다.

mergesort의 구현
```python
#받은 배열을 순서로 정렬하고 합치는 함수 구현
def merge(array1:list, array2:list):
    #결과값을 저장할 리스트 생성
    result = []
    #함수가 시작할때 i, j값으 초기화
    i = j = 0
    #만일 i가 array1의 길이를 넘지 않고, j가 array2의 길이를 넘지 않을때까지 반복
    #즉, 어느 한쪽의 배열을 먼저 탐색할때까지 서로의 값을 하나씩 비교
    while i < len(array1) and j < len(array2):
        if array1[i] < array2[j]:
            result.append(array1[i])
            i += 1
        else:
            result.append(array2[j])
            j += 1

    #만일 서로 비교한 배열에 남은 요소가 있다면 그 값을 차례로 결과 리스트에 저장함
    while i < len(array1):
        result.append(array1[i])
        i += 1
    while j < len(array2):
        result.append(array2[j])
        j += 1
    #결과 리스트를 반환함
    return result

#받은 인풋데이터를 두개로 나누고 다시 합치는 함수
def mergesort(inputData:list):
    #재귀적으로 호출된 함수가 탈출하는 조건, 매개변수로 받은 데이터의 길이가 1이라면 그대로 다시 반환됨
    if len(inputData) <= 1:
        return inputData
    
    #만일 데이터의 길이가 2이상이라면 현재 배열의 길이를 2로 나눠서 몫의 값을 기준으로 배열을 2개로 나눔
    mid = len(inputData) // 2
    #파이썬 배열의 슬라이싱 사용 
    l_data = inputData[:mid]
    r_data = inputData[mid:]

    return merge(mergesort(l_data), mergesort(r_data))
    
```

저는 다른 방식의 정렬방법이 있는지에 대해 개인적으로 궁금한 점이 생겼고,  
흥미로운 구현을 한 방식이 있어 그분의 코드를 검토해보았습니다.  
병합정렬이라 카테고리는 같지만, 거기에 삽입정렬의 개념을 추가해 공간복잡도를 줄인 모습입니다.  
```python
#index를 활용 해서 array를 추가적으로 생성하지 않고, 정렬한 데이터를 바로 원본 배열에 삽입하는 형식이었습니다.
def merge(list, start, end, arrayEnd):
    tempMerged = []
    leftNode, rightNode = start, right
    while leftNode < right and rigthNode <= arrayEnd:
        if list[leftNode] <= list[rightNode]:
            tempMerged.append(list[leftNode])
            leftNode += 1
        else:
            tempMerged.append(list[rightNode])
    while leftNode < end:
        tempMerged.append(list[leftNode])
        leftNode += 1
    while rightNode <= arrayEnd:
        tempMerged.append(list[rightNode])
        rightNode += 1

    leftNode = start
    for n in tempMerged:
        list[leftNode] = n
        leftNode += 1
#맨 처음 값을 입력할때 배열과 시작인덱스, 마지막 인덱스를 넣고 시작하는게 특징이다.

def mergeSort(list, start, end):
    if start >= end:
        return
    
    mid = (start + end)//2
    mergeSort(list, p, mid)
    mergeSort(list, mid + 1, end)
    merge(list, start, mid+1,end)

```