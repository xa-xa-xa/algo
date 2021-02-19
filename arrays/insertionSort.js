const arr = [8, 5, 2, 9, 5, 6, 3];

const insertionSort = (arr) => {    
    for (const i in arr) {
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            swapHelper(j, j - 1, arr);
            j -= 1;
        }
    }
    return arr;
}


function swapHelper(a, b, arr) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// console.log(swapHelper(0, 2,arr))
console.log(insertionSort(arr))
