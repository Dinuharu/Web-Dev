n = int(input())
arr = input().split()
count = 0
for i in range(1, n - 1):
    if int(arr[i-1]) < int(arr[i]) > int(arr[i + 1]):
        count += 1
print(count)