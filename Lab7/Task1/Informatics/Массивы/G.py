n = int(input())
arr = input().split()
i = 0
while i < n // 2:
    arr[i], arr[n - 1 - i] = arr[n - 1 - i], arr[i]
    i += 1
print(" ".join(arr))