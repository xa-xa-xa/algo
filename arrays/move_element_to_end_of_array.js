//? move element to end of array, order of elements does not matter
//* you should move 'in place'

//------ SOLUTION ------//

//* Time O(N)
//* Space complexity O(1)
//* N - the length of the tested arrays

const arr = [2, 23, 2, 1, 2, 4, 4, 2, 5, 6, 7, 1, 4];
const moveToEnd = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    while (l !== r && arr[r] === target) {
      r--;
    }
    if (arr[l] === target) {
      const temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
    }
    l++;
  }
  return arr;
};

console.log(moveToEnd(arr, 2));
