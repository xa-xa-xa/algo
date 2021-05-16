// Give a sorted array of integers, write a function that accepts a value
// and returns the index where the value passed to the function is located.
// If the value is not found, return -1

// Naive, O(n) -- linear search
// function search(arr: number[], val: number) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) return i
//     }
//     return -1
// }

// Binary search
function search(arr: number[], val: number) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] < val) start = middle + 1;
        else if (arr[middle] > val) end = middle - 1;
        else return middle;
    }
    return -1;
}


search([1, 2, 3, 4, 5, 6], 4); // 3
search([1, 2, 3, 4, 5, 6], 6); // 5
search([1, 2, 3, 4, 5, 6], 11); // -1