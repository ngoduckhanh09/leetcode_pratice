/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [4, 1, 2, 1, 2];

var singleNumber = function (nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }


    for (let [key, value] of map) {
        if (value === 1) return key;
    }
};

console.log(singleNumber(nums)); // 4
