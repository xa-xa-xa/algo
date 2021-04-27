// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non - zero elements.
// Note that you must do this in-place without making a copy of the array.

//* Example 1:
const nums = [0, 0, 0, 2, 0, 0, 1] // TODO
// Output: [1, 0, 0, 0, 0, 0, 0]
//* Example 2:
// const nums = [0]
// Output: [0]
// const nums = [0,0,1]
// Output: [1,0,0]
//* Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

//* Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//? O() --- accepted
// const moveZeroes = function (nums) {
//     let i = 0;
//     while (i < nums.length - 1) {
//         if (nums[i] === 0) {
//             swap(i, nums)
//         }
//         if (nums[i - 1] === 0) {
//             swap(i - 1, nums);
//         }
//         i++
//     }
//     return nums
// };

// function swap(currIdx, arr) {
//     while (currIdx < arr.length - 1) {
//         let temp = arr[currIdx];
//         arr[currIdx] = arr[currIdx + 1];
//         arr[currIdx + 1] = temp;
//         currIdx++
//     }
// }


const moveZeroes = function (nums) {
    for (let currIdx = 0, zIdx = 0, length = nums.length; currIdx < length; currIdx++, zIdx++) {
        if (!nums[currIdx] || currIdx === length - 1) {
            while (currIdx < length - 1 && !nums[currIdx]) {
                currIdx++;
            }

            if (currIdx > zIdx) {
                nums[zIdx] = nums[currIdx];
                nums[currIdx] = 0;
                currIdx--;
            }

        }
    }
    return nums
};

console.log("res: ", moveZeroes(nums))