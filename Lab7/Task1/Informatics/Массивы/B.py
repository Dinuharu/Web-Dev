n = int(input())
arr = input().split()
for num in arr:
    if int(num) % 2 == 0:
        print(num, end=" ")