//* Recursive
// O (n2) - time, Space O(n)
const n = 30;

const fibs = (n) => {
    if (n <= 1) return n;
    return fibs(n - 1) + fibs(n - 2)
}

function fibsM(n) {
    if (n <= 1) return n
    return memo(n)
}

function memo(n) {
    n
    const cache = {
        0: 0,
        1: 1,
    }
    for (let i = 2; i < n + 1; i++) {
        cache[i] = cache[i - 1] + cache[i - 2]
    }

    return cache[n];
}






console.log(fibsM(n));

console.log(fibs(n));

