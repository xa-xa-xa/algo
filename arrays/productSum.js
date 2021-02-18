const { arrayOf } = require("prop-types");

const arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];


// Time - O(N), N - total number of elemets in array including all subbarays
// Space - O(D), D - max depth of the subarrays
const productSum = (arr, depth = 1) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += productSum(arr[i], depth + 1);
        } else {
            sum += arr[i];
        }
    }
    return sum * depth
}

console.log("res:", productSum(arr));