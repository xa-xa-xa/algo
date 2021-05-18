//* Counter
// Write a function called same, which accept two arrays
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency if values must be the same.
//* same([1,2,3], [4,1,9]) // true
//* same([1,2,3], [1,9]) // false
//* same([1,2,1], [4,1,4]) // false (must be same frequency)

// naive approach O(n^2) - time
// function same(arr1: number[], arr2: number[]) {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             return false;
//         } arr2.splice(correctIndex, 1)
//     }
//     return true;
// }

// //! Frequency Counter Pattern
// //* O(3N) -> O(N) - time
// function same(arr1: number[], arr2: number[]) {
//     if (arr1.length != arr2.length) return false;
//     const fCounter1 = {};
//     const fCounter2 = {};
//     for (let val of arr1) {
//         fCounter1[val] = (fCounter1[val] || 0) + 1;
//     }
//     for (let val of arr2) {
//         fCounter2[val] = (fCounter2[val] || 0) + 1;
//     }

    
//     for (let _key in fCounter1) {
//         let key = Number(_key)**2;
//         if (!(key in fCounter2)) return false;
//         if (fCounter2[key**2] !== fCounter1[key]) return false
//     }
//     fCounter1
//     fCounter2
//     return true
//  }

//  same([1,2, 2,3], [4,4,1,9]);
// //* O(3N) -> O(N) - time
//! ANAGRAMS
// Given two strings, write a function to determine in str2 is anagram of str1

//* Solution 1
// function validAnagram(str1: string, str2: string) {
//     if(str1.length != str2.length) return false
//     const counter1 = {}
//     const counter2 = {}
//     for (let char of str1) counter1[char] = (counter1[char] || 0) + 1
//     for (let char of str2) counter2[char] = (counter2[char] || 0) + 1
//     for (let key in counter1) {
//         if(counter1[key] != counter2[key])  return false
//     }
//     return true;
// }

// //* Solution 2
// //* O(2N) -> O(N) - time
// function validAnagram(str1: string, str2: string) {
//     if (str1.length != str2.length) return false
//     const lookup = {};
//     for (let letter of str1) {
//         lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
//     }
//     for (let _letter of str2) {
//         if (!lookup[_letter]) return false;
//         lookup[_letter]--;
//     }

//     lookup
//     return true;
// }

// validAnagram("ccinema", "ciceman");
// validAnagram("cinemawa", "icemanww");


//* Example #2
// Write a function that given two positive integers, finds out
// if the two numbers have same frequency of digits.
// Must be O(n) - time

// Time O(4n) => O(n)


function sameFrequency(a: number, b: number) {
    const lookup = {};
    const getDigits = (n: number) => Array.from(n.toString(), Number);
    const digitsA = getDigits(a);
    const digitsB = getDigits(b);
    if (digitsA.length !== digitsB.length) return false;
    for (let i = 0; i < digitsA.length; i++) {
        let digit = digitsA[i];
        lookup[digit] = !lookup[digit] ? 1 : ++lookup[digit];
    }

    for (let i = 0; i < digitsB.length; i++) {
        let d = digitsB[i];
        if (lookup[d]) {
            lookup[d]--;
        } else {
            return false;
        }
    }
    return true
}

sameFrequency(182, 281); // true
sameFrequency(23, 14); // false
sameFrequency(3585798, 8537598); // true
sameFrequency(22, 222); // false