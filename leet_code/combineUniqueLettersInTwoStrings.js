

let s1 = "xyaabbbccccdefww";
let s2 = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
    // const combo = (s1 + s2).split("").sort();
    // const uniques = [];
    // for (let i = 0; i < combo.length; i++) {
    //     if (combo[i] !== combo[i + 1]) {
    //         uniques.push(combo[i])
    //     }
    // }
    // return uniques.join('');

    // With filter()
    const uniques = [...s1, ...s2]
        .filter((c, i, arr) => c !== arr[i + 1])
        .sort()
        .join('');
    return uniques

    // With Set
    // return [...new Set(s1, s2)].sort().join('')
}

console.log(longest(s1, s2))