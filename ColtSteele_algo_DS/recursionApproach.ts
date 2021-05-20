//! Factorial

//* Iteratively
// function factorial(num: number) {
//     let total = 1;
//     for (let i = num; i > 1; i--) {
//         total *= i;
//     }
//     return total;
// }

//* Recursively
function factorial(num) {
    if (num == 1 || num === 0) return 1; // base case
    return num * factorial(num - 1);
    // return num == 1 || num === 0 ? 1 : num * factorial(num - 1); // one liner
}

// factorial(2);
// factorial(0);
// factorial(4);

//* Helper Method Recursion - outer function call inner helper method recursively

// Example #1
// function collectOdds(arr: []) {
//     let res = [];

//     function helper(helperInput: []) {
//         if (helperInput.length == 0) return;
//         if (helperInput[0] % 2 != 0) res.push(helperInput[0]);
//         helper(helperInput.slice(1));
//     }

//     helper(arr);

//     return res;
// }

// Example #2 - Pure Recursion
// function collectOdds(arr: []) {
//     let newArr = [];

//     if (arr.length === 0) return newArr;
//     if (arr[0] % 2 != 0) newArr.push(arr[0]);

//     newArr = newArr.concat(collectOdds(arr.slice(1)));
//     return newArr;
// }

// collectOdds([11, 23, 45, 22, 3, 200]);

// * POWER
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.


// function power(base: number, exp: number) {
//     if (exp == 1) return base;
//     if (exp <= 0) return 1;

//     return base * power(base, exp - 1);
// }

// power(2, 0); // 1
// power(2, 2); // 4
// power(2, 4); // 16

// //* Product Array
// // Write a function which takes in an array of numbers and returns the product of them all.
// function productOfArray(arr: number[]) {
//     let total = 0;

//     function helper(arr: number[], acc = 1) {
//         let num = arr.pop();
//         acc = acc * num;
//         return arr.length ? helper(arr, acc) : acc;
//     }

//     total = helper(arr);

//     return total;
// }

// productOfArray([1, 2, 3]); // 6
// productOfArray([1, 2, 3, 10]); // 60

// //* Recursive Range
// Write a function called recursiveRange which accepts a number and adds up 
// all the numbers from 0 to the number passed to the function;

// function recursiveRange(num: number) {
//     if (!num) return 0;
//     let total = 0;

//     function helperTotal(num: number, acc = num) {
//         num = num - 1;
//         acc = acc + num;
//         return num <= 0 ? acc : helperTotal(num, acc);
//     }

//     total = helperTotal(num);
//     return total;
// }

// recursiveRange(6); // 21
// recursiveRange(10); // 55 

////* Fibonacci
// Write a recursive function called fib which accepts a number and returns the nth number
//  in the Fibonacci sequence.Recall that the Fibonacci sequence is the sequence of whole 
// numbers 1, 1, 2, 3, 5, 8, ...which starts with 1 and 1, and where every number
// thereafter is equal to the sum of the previous two numbers.

// Sol 1 (Recursion)
// function fib(num: number) {
//     if (num <= 0) return 0;
//     return num < 3 ? 1 : fib(num - 2) + fib(num - 1);
// }
// fib(-10); // 3
// fib(10); // 55
// fib(28); // 317811
// fib(35); // 9227465
// Sol 1 (Recursion+Memoization)
// function fib(num) {
//     if (num <= 0) return 0;
//     return num < 3 ? 1 : fib(num - 2) + fib(num - 1);
// }

// const memoize = (cb) => {
//     let memo = {};
//     return (arg) => {
//         if (memo[arg]) return memo[arg];
//         else {
//             memo[arg] = cb(arg);
//             return memo[arg];
//         }
//     };
// };

// const fibMemo = memoize(fib);
// const factMemo = memoize(factorial);
// // fibMemo(4); // 3
// console.log(fibMemo(28)); // 55
// console.log(factMemo(8)); // 55
// fibMemo(28); // 317811
// fibMemo(35); // 9227465


// Reverse string recursively
// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;


//* someRecursive
// Write a recursive function called someRecursive which accepts an array
// and a callback.The function returns true if a single value in the array 
// returns true when passed to the callback.
// Otherwise it returns false.
function someRecursive(arr: any[], cb) {
    let flag = false;
    arr.forEach(item => {
        if (cb(item)) {
            flag = true;
        }
    });
    return flag;
}

someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], val => val > 10); // false

