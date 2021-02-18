const arr = [141, 1, 7, 17, -7, -17, -27, 18, 541, 8, 7, 7];


//? O(N) - time: length of array
//? O(1) - space: just array of thee numbers

const getThreeLargesNums = (arr) => {
    const largestNums = [null, null, null];
    for (const el of arr) {
        updateLargestNum(largestNums, el);
    }
    return  largestNums; 
}

const updateLargestNum = (largestNums, num) => {
    if (largestNums[2] === null || num > largestNums[2]) {
        shiftAndUpdate(largestNums, num, 2) //
    } else if (largestNums[1] === null || num > largestNums[1]) {
        shiftAndUpdate(largestNums, num, 1); //
    } else if (largestNums[0] === null || num > largestNums[0]){
        shiftAndUpdate(largestNums, num, 0); //
    }
    // console.log(arr, num)

}

const shiftAndUpdate = (arr, num, currIdx) => {
    console.log(arr, num, currIdx)
    for (let i = 0; i < currIdx + 1; i++) {
        if (i === currIdx) {
            arr[i] = num
        } else {
            arr[i] = arr[i+1]
        }
    }  
}


console.log("Res:", getThreeLargesNums(arr));