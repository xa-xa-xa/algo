//* Counter
// Write a function called same, which accept two arrays
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency if values must be the same.
//* same([1,2,3], [4,1,9]) // true
//* same([1,2,3], [1,9]) // false
//* same([1,2,1], [4,1,4]) // false (must be same frequency)

// naive approach
function same(arr1: number[], arr2: number[]) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        } arr2.splice(correctIndex, 1)
    }
    return true;
}

same([1, 2, 3], [4, 1, 9]);