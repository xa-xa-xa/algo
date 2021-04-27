// Given an array, rotate the array to the right by k steps,
// where k is non - negative.
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5,6,7,1,2,3,4]
//* Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

//? Try to come up with as many solutions as you can. 
//? There are at least three different ways to solve this problem.
//TODO Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// let nums = [1, 2, 3, 4, 5, 6, 7];
const rotate = function (nums, k) {
    //! --- VERY INEFFICIENT on large arrays 
    // const rValue = nums.length > k ? k : k % nums.length;
    // console.log("rValue", rValue, "len:", nums.length)
    // if (k === 0 || k === nums.length || rValue === 0) return;
    // for (let i = 0; i < rValue; i++) {
    //     nums.unshift(nums.pop());
    // }


    k = k % nums.length;
    if (k === 0 || !nums.length) return nums;

    reverse(nums, 0, nums.length - 1) // reverse all elements
    reverse(nums, 0, k - 1) // reverse back from start
    reverse(nums, k, nums.length - 1) // reverse back from end of array
    return nums;
};

function reverse(arr, start, end) {
    while (start < end) {
        console.log(start, end)
        console.log()
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

}

console.log(rotate(nums, k))

