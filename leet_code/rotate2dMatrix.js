//! Rotate Matrix
//! 48. Rotate Image
//* Difficulty: Medium.
// Related Topics: Array.
// Similar Questions: .
// Problem
// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have
// to modify the input 2D matrix directly.DO NOT allocate 
// another 2D matrix and do the rotation.
//* Example 1:
const inputMatrix =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
//* Example 2:
// const inputMatrix =
//     [
//         [5, 1, 9, 11],
//         [2, 4, 8, 10],
//         [13, 3, 6, 7],
//         [15, 14, 12, 16]
//     ];

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    const n = matrix.length;
    const n2 = Math.floor(n / 2);

    for (let i = 0; i < n2; i++) {
        for (let j = 0; j < n; j++) {
            swap(matrix, i, j, n - 1 - i, j)
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            swap(matrix, i, j, j, i);
        }
    }
}

const swap = (matrix, x1, y1, x2, y2) => {
    const temp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = temp;
}

rotate(inputMatrix)

console.log(inputMatrix)