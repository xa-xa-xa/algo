const arr = [8, 5, 2, 9, 5, 6, 3];


//? O(n^2) time: two loops
//? O(1) space: sorting in place
const selectionSort = (array) => {
    let currIdx = 0;
    while (currIdx < array.length - 1) {
        let smallestIdx = currIdx;
        for (let i = currIdx + 1; i < array.length; i++) {
            if (array[smallestIdx] > array[i]) smallestIdx = i;
        }
        swapHelper(currIdx, smallestIdx, array)
        currIdx++;
    }
    return array;
}

function swapHelper(a, b, arr) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


// console.log(swapHelper(0, 2,arr))
console.log(selectionSort(arr))
