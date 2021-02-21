
//? Time O(N) - len of a string;
//? Space O(1) - pointers; 

function isPalindrome() {
    let R = str.length - 1;
    let L = 0;
    while (L < R) {
        if (str[L] !== str[R]) return false;
        L++;
        R--;
    }
    return true;
}


//* Iterative solution
//? Time O(N^2) - reacreating new string;, 
//? Space O(N) - 
function isPalindromeReverse(str) {
    if (str.length === 1) return true;
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        console.log("i:", i)
        reverseString += str[i];
    }

    console.log("R:", reverseString, "\nS:", str, "\n", str === reverseString)
    return str === reverseString;
}

//* Iterative solution
//? Time O(N) -
//? Space O(N) -
function isPalindromeIterative(str) { 
    if (str.length === 1) return true;
    const reversedChars = []
    for (const i in str) {
        reversedChars.unshift(str[i])
    }
    return str === reversedChars.join("");
}
//* Recursion solution
//? Time O(N) -
//? Space O(N) -
function isPalindromeRecursion(str, idx = 0) {
    let j = str.length - 1 - idx;
    return idx >= j ? true : str[j] === str[idx] && isPalindromeRecursion(str, idx + 1);
}

function isPalindromeRecursion(str, idx = 0) {
    let j = str.length - 1 - idx;
    return idx >= j ? true : str[j] === str[idx] && isPalindromeRecursion(str, idx + 1);
}

//* Make it tail recurursion thus not taking space in callstack (need make recursive call as the last call, so it can be rewritten)
function isPalindromeRecursionTail(str, idx = 0) {
    let j = str.length - 1 - idx;
    if (idx >= j) return true;
    if (str[Idx] !== str[j]) false;
    return isPalindromeRecursionTail(str, idx + 1);
}


// const str = "abcdefghihgfeddcba";
const str = "abcdcba";
console.log(isPalindrome(str))
// console.log(isPalindromeReverse(str))
// console.log(isPalindromeRecursion(str))
