//! 20. Valid Parentheses
//
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
//* Example 1:
// const s = "()"
// Output: true
//* Example 2:
// const s = "()[]{}"
// Output: true
// *Example 3:
// const s = "(]"
// Output: false
//* Example 4:
// const s = "([)]"
// Output: false
//* Example 5:
const s = "((({[][()[]]})())(){()})(())"
// Output: true

//* Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
const isValidParentheses = function (s) {

    //* Solution 1
    // const stack = []; // FIFO
    // for (par of s) {
    //     if (par === "(" || par === "[" || par === "{") {
    //         stack.push(par)
    //     } else {
    //         if (stack.length === 0) return false;
    //         const top = stack.pop(); // returns most top element
    //         if (top === "(" && par !== ")") return false;
    //         else if (top === "[" && par !== "]") return false;
    //         else if (top === "{" && par !== "}") return false;
    //     }
    // }    
    // return stack.length === 0;

    //* Solution 2
    const hash = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const openPar = Object.values(hash);
    const stack = [];

    for (par of s) {
        if (openPar.includes(par)) {
            stack.push(par);
            continue;
        }

        const lastInStack = stack.pop();
        if (hash[par] && lastInStack !== hash[par]) return false;
        stack
    }
    return stack.length === 0;
    //* Solution 3
    const hash = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    const stack = [];

    for (par of s) {
        if (hash[par] !== undefined) {
            stack.push(par)
        } else {
            const leftBracket = stack.pop();
            const correctBracket = hash[leftBracket]
            if (par !== correctBracket) {
                return false
            }
        }
    }
    return stack.length === 0
};

console.log(">>------->", isValidParentheses(s))