const nums = [5, 4, 4, 5, 6, "9j", undefined, "jk", "o", 7, 6, null, null, 8, 9, 0, 0, 2, 88, 9, 8, 7, 2]
var singleNumber = function (nums) {
    const hash = {};
    //* Solution #1 - HashMap O(n) - Time, O(n) - Space 
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            delete hash[nums[i]]
        }
    }
    return Object.keys(hash)[0]

    //* Solution #2 - Linear time, O(1) - Space, O(n) - Time
    // return nums.reduce((c, n) => c ^= n) //! sick!
    // or
    // let single = 0;
    // nums.map(i => single ^= i)
    // return single
};

console.log(singleNumber(nums))