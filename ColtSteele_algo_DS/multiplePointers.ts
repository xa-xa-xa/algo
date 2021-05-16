//! Multiple Pointers Pattern

//* Example 1
// Write a function called sumZero which accepts a SORTED array of integers.
// The function should find the firs pair where the sum is 0.
// Return an array that includes both values that su to zero ofr undefined
// if a pair does not exist

// Naive solution 0(N^2)
// function sumZero(arr: number[]) {
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[i] + arr[j] == 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
//     return undefined
// }

// Optimal solution
function sumZero(arr: number[]) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let sum = arr[l] + arr[r]
        if (sum === 0) return [arr[l], arr[r]];
        sum > 0 ? r-- : l++;
    }
    return undefined
}

sumZero([-343, -23, -3, -2, -1, 0, 1, 2, 3, 7]);
sumZero([-6, -2, -1, 0, 1, 3]);
sumZero([1, 2, 3]);

//* Example 1
// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted

// Solution 1
// function countUniqueValues(arr: number[]) {
//     if (!arr.length) return 0
//     let count = 1;
//     let pointer1 = 0;
//     let pointer2 = pointer1 + 1;
//     while (pointer2 <= arr.length - 1) {
//         if (arr[pointer1] == arr[pointer2]) {
//             pointer2++;
//         } else {
//             pointer1 = pointer2;
//             pointer2++;
//             count++;
//         }
//     }
//     return count;
// }


// Solution 2 - If we  allowed to alter original array
function countUniqueValues(arr: number[]) {
    if (!arr.length) return 0;
    let pointer1 = 0;
    let pointer2 = 1;
    while (pointer2 < arr.length) {
        if (arr[pointer2] != arr[pointer1]) {
            pointer1++;
            arr[pointer1] = arr[pointer2];
        }
        pointer2++;
    }
    return pointer1 + 1;
}

countUniqueValues([1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 2, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13])
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);