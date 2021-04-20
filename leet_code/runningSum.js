// Running Sum of 1d Array
const nums = [1, 2, 3, 4]

// Output: [1,3,6,10]
// O(n) - time, O(n) - space
const runningSum = function (nums) {
    // let runningSum = 0;
    // const res = []
    // for (let i = 0; i < nums.length; i++) {
    //     runningSum += nums[i];
    //     res.push(runningSum);
    // }
    // return res;

    //* update existing array
    // O(n) - time, O(1) - space

    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i]
    }
    return nums;
};

console.log(runningSum(nums))