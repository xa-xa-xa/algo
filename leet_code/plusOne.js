// Plus One
// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.



//* Example 1:
// const digits = [1,2,3] // Output: [1,2,4]
// Explanation: The array represents the integer 123.
//* Example 2:
// const digits = [4,3,2,1] // Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
//* Example 3:
// const digits = [0] // Output: [1]
//* Example 4:
const digits = [9, 9, 8] // Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
//! Constraints:
// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
const x = 10 % 10
console.log([1, ...digits])
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    // my
    // const num = BigInt(digits.join("")) + BigInt(1);
    // return num.toString().split('').map(i => Number(i));
    // 
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i]) {
            return digits;
        }
    }

    return [1, ...digits]
};

console.log(plusOne(digits))