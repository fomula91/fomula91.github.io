---
layout: post
title: 프로그래머스 타겟 넘버 문제 풀이...
---

오늘 파이썬으로 문제를 해결했습니다.  
문제에 대해 잘 이해하지 못해서 같이 공부하는 팀원에게 부연 설명을 들었습니다.  
문제의 요지는 주어지는 수열이 음수가 아닌 양수이고, 한번 계산할때 + 혹은 - 로 경우의 수를 따져서 최종적으로 target이 일치한지 확인하는 문제였습니다.  
그래서 이진트리를 이용해 수열이 [4,1,2,1]로 주어졌을때 4부터 시작해서 + 혹은 -로 계산하여 노드를 그렸더니 이진트리가 되었습니다.  
만들어진 이진트리를 DFS로 이용해 재귀적으로 노드를 탐색하는 방식을 생각했고, 차례로 탐색하게 되면 결국 리프에 모든 경우의 수를 거친 결과값이 나오므로  
리프노드와 타겟을 비교해서 만일 값이 같으면 answer에 그게 아니라면 리턴을 해서 이전 노드로 돌아가는 방식으로 구현하였습니다.  
이 과정에서 DFS 구현할때 인자값을 어떻게 줘야되는지 고민을 많이 하였고...  
  
주어지는 배열을 dfs안에서 복사하여 popleft()를 사용해 하나씩 배열을 줄여가는 방식으로 진행했습니다.
그러나 아래 코드를 보시면 numberarr과 arr은 복사는 됬지만 얕은 복사가 되어서 깊은 복사로 바꿀려고 했으나... 잘 안되서,  
index변수를 추가해서 재귀를 돌때마다 index + 1을 하는 방식을 사용하게 되었습니다.  
결국에는 구현에 성공하고 정답에 가까웠는데, DFS함수 시작할때 초기 시작값(start변수)을 0을 넣었는데, 예상과는 다르게 마이너스 트리쪽으로 가는 것을 발견했습니다.  
곰곰히 생각해보다가 +를 계산하는 재귀 함수가 끝나면 -를 계산하는 재귀 함수로 가는게 맞아, 결과적으론 맞았는데...  
마이너스를 계산하는 트리로는 갈 필요가 없다고 생각해서 처음 start변수를 주어진 수열의 첫번째 인덱스를 넣고 시작했더니, 일부 정답이 나오질 않았습니다.  
그래서 다시 원상복귀해서 원래 코드로 정답을 제출하고 정답처리를 받았습니다.

```python
from collections import deque
num = [1, 1, 1, 1, 1]
target = 3

def solution(numbers, target):
    answer = 0
    numberarr = deque(numbers)
    def dfs(arr, start, index):
        if len(arr) == index:
            if start == target:
               nonlocal answer
               answer += 1
            return
        dfs(arr, start + arr[index], index + 1)
        dfs(arr, start - arr[index], index + 1)
        return
    dfs(numberarr, 0, 0)
    return answer

solution(num,target)
```

### `다른사람과의 풀이 비교`

프로그래머스에서 가장 좋아요를 많이 받은 코드와 비교해보겠습니다.  

```python
def solution(numbers, target):
    #만약 numbers가 true가 아니고 target == 0 이면 1을 리턴
    if not numbers and target == 0 :
        return 1
    #만약 numbers가 true가 아니면 0을 리턴
    elif not numbers:
        return 0
    #그 외의 경우
    else:
        #현재 함수를 재귀로 호출합니다. 현재함수에서(numbers를 첫번째 인덱스를 지우고, target - numbers첫번째요소를 재귀로 탐색합니다.) + 현재함수에서(numbers를 첫번재 인덱스를 버리고 target + numbers첫번째요소를 재귀로 탐색합니다.)
        #결과적으로 두 재귀 함수의 리턴값을 더해서 최종 리턴을 합니다.
        return solution(numbers[1:], target-numbers[0]) + solution(numbers[1:], target+numbers[0])
```
  
제가 작성한 코드보다 훨씬 간결하게 작성된 코드입니다.  
`return` 문구에서 바로 재귀 함수를 사용해 결과를 도출하는것이 인상적입니다.  
제가 봤을때는 재귀함수를 훨씬 직관적으로 사용하고 코드를 간결하게는 것은 훌륭하지만  
numbers[1:]이 코드는 객체를 복사해서 사용하는 것인데....  
풀이를 비교해보니 제 코드가 살짝 더 빠르고 메모리를 살짝 더 적게 먹는 걸로 결과과 도출됩니다..  
근데 크게 의미는 없는것같습니다....  