def power(a, n):
    result = 1
    i = 0
    while i < n:
        result = result * a
        i = i + 1
    return result
a = float(input())
n = int(input())
print(power(a, n))