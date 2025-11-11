/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let slow = 0
    let fast = 1

    while (fast <= nums.length) {
        if (nums[fast] != nums[slow]) {
            nums[slow] = nums[fast]
            slow += 1
        }
        fast += 1

    }
    return slow + 1
};