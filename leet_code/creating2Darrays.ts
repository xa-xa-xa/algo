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

function create2DMatrix(len1: number, len2: number, fill?: any): void {
  const arr = [];
  let count = 0;

  for (let i = 0; i < len1; i++) {
    // first dimension
    fill ? (arr[i] = [fill]) : (arr[i] = [i]);
    for (let j = 0; j < len2; j++) {
      fill
        ? (arr[i][j] = fill)
        : (arr[i][j] = count < 10 ? `0${count}` : `${count}`);
      count++;
    }
  }

  console.log(arr);
}

create2DMatrix(6, 10, false);
