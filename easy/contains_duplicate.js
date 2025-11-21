/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // let map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     map.set(nums[i], 1)
    // }
    // console.log(map.size);
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }
    console.log(set.size);


};
let nums = [1, 2, 3, 1]

containsDuplicate(nums)