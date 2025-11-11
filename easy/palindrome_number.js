/**
 * @param {number} x
 * @return {boolean}
 * two pointer
 */
var isPalindrome = function (x) {
    let y = x.toString()
    let left = 0
    let right = x.toString().length
    while (left <= right) {
        if (y[left] == y[right - 1]) {
            left += 1
            right -= 1
        } else {
            return false
        }

    }
    return true
};