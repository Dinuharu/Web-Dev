a = int(input())
b = int(input())
for i in range(a, b + 1):
    if a < i**2 < b:
        print(i**2, end=" ")