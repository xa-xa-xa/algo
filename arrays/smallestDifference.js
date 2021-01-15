const arr1 = [-3, 1, 2, 5, 13, 35, 198];
const arr2 = [5, 4, 12, 53, 13, 35, 198];

//------ SOLUTION ------//

//* Time complexity O(Nlog(N) + Mlog(M))
//* Space complexity O(1)
//* N, M - the length of the tested arrays

// 'While' loop variant
function smallestDiff(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let pointer1 = 0;
  let pointer2 = 0;
  let smallestDiff = Infinity;
  let currDiff = Infinity;
  let smDiffPair = [];
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    let num1 = arr1[pointer1];
    let num2 = arr2[pointer2];
    if (num1 === num2) return [num1, num2];
    if (num1 < num2) {
      currDiff = num2 - num1;
      pointer1++;
    } else if (num1 > num2) {
      currDiff = num1 - num2;
      pointer1++;
    }
    if (smallestDiff > currDiff) {
      smallestDiff = currDiff;
      smDiffPair = [num1, num2];
    }
  }
  return smDiffPair;
}
console.log(
  `1. The pair with smallest difference of [${arr1}] and [${arr2}], is -`,
  smallestDiff(arr1, arr2)
);
