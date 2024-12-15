# HackerRank Codes
## StairCase
```python
n=int(input())
i=1
while i<=n:
    print(" "*(n-i),"#"*i,sep="")
    i=i+1

###or###

n=int(input())
for i in range(1,n+1):
    print(" " *(n-i)+"#" *i)
```

## Cat and Mouse
```python
n = int(input())
for i in range(0, n):
    a, b, c = map(int, input().split(" "))
    d1 = abs(a - c)
    d2 = abs(b - c)
    if d1 < d2:
        print("Cat A")
    elif d1 > d2:
        print("Cat B")
    else:
        print("Mouse C")
```
## Find Digits
```python
nt = int(input())
for i in range(1, nt + 1):
    num_1 = int(input())
    num_2 = num_1
    count = 0
    while num_2 > 0:
        x = num_2 % 10
        if x != 0 and num_1 % x == 0:
            count = count + 1
        num_2 = num_2 // 10
    print(count)
```
## Left Rotation
```python
n, r = map(int, input().strip().split())
arr = list(map(int, input().strip().split()))
x = arr[0:r]
y = arr[r:]
result = y + x
for i in result:
    print(i, end=" ")
```
## Sherlock and Array
```python
nt = int(input()) 
for i in range(0, nt):
    n = int(input())
    a = list(map(int, input().strip().split(" ")))
    result = "NO"
    lsum = 0
    t = sum(a)
    for j in range(0, n):
        rsum = t - a[j] - lsum
        if lsum == rsum:
            result = "YES"
            break
        lsum = lsum + a[j]
    print(result)
```
## Migratory Birds
```python
n = int(input())
arr = list(map(int, input().strip().split(" ")))
arr.sort()
count = 1
max_count = 1
for i in range(0, n - 1):
    if arr[i] == arr[i + 1]:
        count = count + 1
    else:
        if count > max_count:
            result = arr[i]
            max_count = count
        count = 1
if count > max_count:
    result = arr[i]
print(result)
```
## Apple and Oranges
```python
s, t = map(int, input().strip().split(" "))
atp, otp = map(int, input().strip().split(" "))
a, o = map(int, input().strip().split(" "))
apples = list(map(int, input().strip().split(" ")))
oranges = list(map(int, input().strip().split(" ")))
apple = 0
for i in apples:
    x = atp + i
    if s <= x <= t:
        apple += 1
orange = 0
for i in oranges:
    x = otp + i
    if s <= x <= t:
        orange += 1
print(apple)
print(orange)
```
## Ice Cream Parlor
```python
nq = int(input().strip())
for _ in range(nq):
    total_money = int(input().strip())
    n = int(input().strip())
    arr = list(map(int, input().strip().split()))
    seen = {}
    for i in range(n):
        rem = total_money - arr[i]
        if rem in seen:
            print(seen[rem] + 1, i + 1)
            break
        seen[arr[i]] = i
```
