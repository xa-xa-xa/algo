// //* creating Multi Dimensional Arrays
// let twoDimArray = [];
// twoDimArray = [...Array(3)].map(() => [...Array(4)].map(() => "."));

// console.log(twoDimArray);

// //* TS creating Multi Dimensional Arrays
// const createMDimArrayTS = <T>(
//   n: number,
//   m: number,
//   initialValue?: T
// ): T[][] => {
//   const matrix = [...Array(n)].map(() => [...Array(m)]);
//   return initialValue === undefined
//     ? matrix
//     : matrix.map((r) => r.map(() => initialValue));
// };

// const twoDArray = createMDimArrayTS(2, 4, "");
// twoDArray[1][0] = "x";
// console.log(twoDArray);

//* new

// function create2DMatrix(len1: number, len2: number, fill?: any): void {
//     const arr = [];

//     for (let i = 0; i < len1; i++) {
//         // first dimension
//         fill ? (arr[i] = [fill]) : (arr[i] = [i]);
//         for (let j = 0; j < len2; j++) {
//             fill ? (arr[i][j] = fill) : (arr[i][j] = i.toString() + j.toString());
//         }
//     }

//     console.log(arr);
// }

// create2DMatrix(6, 10, false);

const data = [
    ["Rahul", 23],
    ["Vikky", 27],
    ["Sanjay", 29],
    ["Jay", 19],
    ["Dinesh", 21],
    ["Sandeep", 45],
    ["Sanjay", 3],
    ["Jay", 4],
    ["Dinesh", 5],
    ["Sandeep", 45],
    ["Umesh", 32],
    ["Rohit", 28],
    ["Sandeep", 5000],
    ["Umesh", 5000],
    ["Rohit", 5000],
    ["Rohit", 1]
];







console.log("RES: ", constructObject(data));
