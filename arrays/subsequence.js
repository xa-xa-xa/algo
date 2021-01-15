const arr = [-3, 1, 2, 5, 13, 35, 198];
const sequence = [1, 5, 13];
const arr2 = [-3, 0, 2, 5, 13, 35, 198];
const sequence2 = [1, 5, 13];

//------ SOLUTION ------//

//* Time complexity O(N)
//* Space complexity O(1)
//* N - the length of the tested array

// 'While' loop variant
function isSubsequence(arr, seq) {
  let arrIndex = 0,
    seqIndex = 0;

  while (seqIndex < seq.length && arrIndex < arr.length) {
    if (seq[seqIndex] === arr[arrIndex]) {
      seqIndex++;
    }
    arrIndex++;
  }
  return seqIndex === seq.length;
}
console.log(
  `1. Is [${sequence}] a subsquence of [${arr}]? -`,
  isSubsequence(arr, sequence)
);
console.log(
  `1. Is [${sequence2}] a subsquence of [${arr2}]? -`,
  isSubsequence(arr2, sequence2)
);

// 'For' loop variant
function isSubsequence2(arr, seq) {
  let seqIndex = 0;
  for (const value of arr) {
    if (seqIndex === seq.length) {
      break;
    }
    if (seq[seqIndex] === value) {
      seqIndex++;
    }
  }
  return seqIndex === seq.length;
}
//* Time complexity O(N)
//* Space complexity O(1)
//* N - the length of the tested array

//------ TEST ------//
console.log(
  `2. Is [${sequence}] a subsquence of [${arr}]? -`,
  isSubsequence2(arr, sequence)
);

console.log(
  `2. Is [${sequence2}] a subsquence of [${arr2}]? -`,
  isSubsequence2(arr2, sequence2)
);
