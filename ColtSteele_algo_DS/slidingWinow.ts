// The Sliding Window
//! Max Subarray Sum
// Write a function which accepts an array of an integers 
// and number called n. The function should calculate the
// maximum sum of n consecutive elements in the array.

// Solution 1 - Naive approach O(n^2) - time, O(1) - space
// function maxSubarraySum(arr: number[], n: number) {
//     if (!arr.length && n > arr.length) return 0;
//     let sum = -Infinity;
//     for (let i = 0; i < arr.length - n + 1; i++) {
//         let tempSum = arr[i];
//         for (let j = 1; j < n; j++) {
//             tempSum += arr[i + j];
//         }
//         if (tempSum > sum) sum = tempSum
//     }
//     return sum;
// }
// Solution 2 - Time O(n), 
function maxSubarraySum(arr: number[], n: number) {
    if (arr.length < n) return 0;
    let sum = 0;
    let tempSum = 0;
    // sum first n numbers in the array
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    tempSum = sum;
    for (let i = n; i < arr.length; i++) {
        arr[i];
        arr[i - n];
        tempSum = tempSum - arr[i - n] + arr[i];
        if (sum < tempSum) sum = tempSum;
    }
    return sum;
}


//* Results check
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([-4, -2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // 0


const throttle = (func, delay) => {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= delay) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, delay - (Date.now() - lastRan));
        }
    };
};
