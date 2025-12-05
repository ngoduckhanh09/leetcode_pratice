class Solution(object):
    def getSum(self, n):
        s = 0
        while n != 0:
            d = n % 10
            s += d * d
            n //= 10
        return s

    def isHappy(self, n):
        seen = set()

        while True:
            if n == 1:
                return True
            if n in seen:
                return False
            seen.add(n)
            n = self.getSum(n)
