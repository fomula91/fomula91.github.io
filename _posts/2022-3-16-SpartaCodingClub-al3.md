---
layout: post
title: 해쉬에 대해서 배운것들...
---

해시 테이블은 연관 배열의 구현 형태이며, 해시, 해싱, 버킷, 슬롯, 해싱함수 등을 포함한 개념이다. 
(해시 테이블 -> 딕셔너리 라고 생각하면 된다.. 즉, 딕셔너리를 내부적으로 파고들면 해시 테이블을 이용한다는 것같다...)
(딕셔너리는 내부적으로 어떻게 구동되는가에 대한 답은 해시 테이블이라고 할수 있을것 같다.)

```
해시 자료구조에서 알아야 되는 용어
- 해시 테이블hash table
- 버킷(bucket)과 슬롯(slot)
- 해시hash
- 해시 함수hash function
- 해싱hashing
- 해시 충돌hash collision
```

#### 해시 함수
임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수
이때 매핑 전 값을 키, 매핑 후 데이터를 해시라고 한다.
key -> hash로 매핑 시켜주는 함수를 해시 함수라고 한다.

* 좋은 해시 함수의 조건
- 해시 값이 해시 테이블 주소 영역 내에서 고르게 분포 되어야 한다.
- 충돌이 적어야 한다. :중복값이 적어야 한다.
- 계산이 빨라야 된다.

#### 해싱
key -> hash -> value로 값을 탕색하는 과정으로 해시 함수를 사용한 탐색을 가리켜 해싱이라고 하며 해싱은 매우 빠른 검색을 위한 용도로 많이 사용되고 있다.

해싱의 선능은 해시 함수의 성능과 해시 테이블의 크기에 따라 달라진다.

#### 해시 충돌
해시 함수가 서로 다른 두개의 키에 대해 동일한 해시값을 내는 경우로, 해시 충돌이라고 이야기한다.
따라서 해싱을 할때에는 해시 충돌이 발생할 수 있기 때문에 해시 충돌에 대한 처리가 반드시 필요하다.

* 해시 함수의 구현 방법
- division method
- multiplication method
- mid-squares
- folding
(나중에 알아보자...)

#### 해시 충돌의 처리 방법
1. Chaining : 해시 충돌이 일어나면 연결 리스트형태로 이어나가 충돌을 처리하는 기법
2. Open adressing : 해시 충돌이 일어나면 다른 버켓에 데이터를 삽입하는 방식

##### 해시 충돌의 처리 방법 : Chaining
chain처럼 연결되어 이어나간다는 의미로 해시 충돌이 발생했을 경우 연결 리스트 형태로 이어나간다.
open hashing 이라고도 하며 노드를 연결시켜주는 형태로 크기에 제한이 자유롭다.

하지만 이 형태로 해시 충돌을 처리하게 된다면 최악의 경우 한 노드에서 많은 데이터를 처리해야 하므로 시간 복잡도는 O(n)이 되지만 평균적으로 해시 충돌이 일어나지 않았을 경우 O(1)의 시간복잡도를 가지게 된다.

##### 해시 충돌의 처리 방법 : Open adressing
해싱 과정을 거쳐 데이터를 버켓에 담을때 지정된 노드가 사용되고 있다면 다른 빈 노드를 찾게 되고 그곳에 저장한다.
Closed hashing이라고도 한다. chaining과 다르게 버킷의 크기가 지정되있어 버켓이 꽉차게 된다면 새로운 버켓을 생성하여 그곳에 저장하여야 한다. 이 과정을 resizing이라고 한다.


### 해시 테이블의 장단점
- 장점 : 삽입, 삭제, 탐색시간이 빠르다.
- 단점 : 순서가 보장되지 않는다.


## 참고자료
연관배열 -> https://ko.wikipedia.org/wiki/%EC%97%B0%EA%B4%80_%EB%B0%B0%EC%97%B4
-> https://en.wikipedia.org/wiki/Associative_array
해시테이블 -> https://ko.wikipedia.org/wiki/%ED%95%B4%EC%8B%9C_%ED%85%8C%EC%9D%B4%EB%B8%94

해시 함수의 구현 방법 -> https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EB%B2%84%EC%84%A4_%ED%95%B4%EC%8B%B1

https://gamedevlog.tistory.com/38

https://velog.io/@2seunghye/%ED%8C%8C%EC%9D%B4%EC%8D%AC%EA%B3%BC-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%ED%95%B4%EC%89%AC-%ED%85%8C%EC%9D%B4%EB%B8%94

https://velog.io/@adam2/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%ED%95%B4%EC%8B%9C-%ED%85%8C%EC%9D%B4%EB%B8%94

https://bcho.tistory.com/1072

https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/DataStructure#hash-table