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

//* Example 3:
// const inputMatrix = [[1]]
// Output: [[1]]
//* Example 4:
// const inputMatrix = [[1, 2], [3, 4]]
// Output: [[3,1],[4,2]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//* Time O(n), Space(1)
//* Solution #1
// const rotate = function (matrix) {
//     const n = matrix.length;
//     const n2 = Math.floor(n / 2);

//     for (let i = 0; i < n2; i++) {
//         for (let j = 0; j < n; j++) {
//             swap(matrix, i, j, n - 1 - i, j)
//             console.count("swaps 1");
//             //* horizontal swap
//             // 1 2 3     7 8 9
//             // 4 5 6  => 4 5 6
//             // 7 8 9     1 2 3
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             swap(matrix, i, j, j, i);
//             console.count("swaps 2");
//             //* diagonal swap
//             // 7 8 9     7 4 1
//             // 4 5 6  => 8 5 2
//             // 1 2 3     9 6 3
//         }
//     }
// }
// const swap = (matrix, x1, y1, x2, y2) => {
//     const temp = matrix[x1][y1];
//     matrix[x1][y1] = matrix[x2][y2];
//     matrix[x2][y2] = temp;
// }

//* Solution #2
// const rotate = function (matrix) {
//     const n = matrix.length;
//     for (let i = 0; i < Math.floor(n / 2); i++) {
//         for (let j = 0; j < n / 2; j++) {
//             let temp = matrix[n - 1 - j][i];
//             matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
//             matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
//             matrix[j][n - 1 - i] = matrix[i][j];
//             matrix[i][j] = temp;
//         }
//     }
// }

//* Solution #3
// const rotate = (matrix) => {
//     const n = matrix.length
//     transpose(matrix, n);
//     // console.log("\ntranspose:", matrix)
//     // reflect(matrix, n);
//     // console.log("\nreflect:", matrix)
//     return matrix
// }

// function transpose(matrix, n) {
//     console.log(matrix, n)
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let temp = matrix[[j][i]];
//             matrix[j][i] = matrix[i][j];
//             matrix[i][j] = temp;

//         }
//     }
//     console.log(matrix)
// }

// function reflect(matrix, n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < Math.floor(n / 2); j++) {
//             let temp = matrix[i][j];
//             matrix[i][j] = matrix[i][n - j - 1];
//             matrix[i][n - j - 1] = temp;
//         }
//     }
// }








console.log("\n*******", rotate(inputMatrix))