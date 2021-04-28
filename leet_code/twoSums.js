//! Two Sum

//* Solution
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


//* Example 1:
const nums = [2, 7, 11, 15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
//* Example 2:
// const nums = [3,2,4], target = 6
// Output: [1,2]
//* Example 3:
// const nums = [3,3], target = 6
// Output: [0,1]
//* Example 4:
// const nums = [2,7,11,15], target = 9
//* Example 6:
// const nums = [3,2,4], target = 6
// Output: [1,2]
//* Constraints:
// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const hash = {};
    for (let idx = 0; idx < nums.length; idx++) {
        const num = nums[idx]
        const compliment = target - num;
        if (hash[num] !== undefined) {
            return [idx, hash[num]];
        }

        if (!hash[compliment]) {
            hash[compliment] = idx;
        }
    }
    return []
};

console.log(twoSum(nums, target))