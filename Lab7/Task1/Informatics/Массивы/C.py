n = int(input())
arr = input().split()
count = 0
for num in arr:
    if int(num) > 0:
        count += 1
print(count)