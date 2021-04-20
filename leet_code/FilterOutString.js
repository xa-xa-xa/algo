// FilterOutString
function filterOutString(arr) {
    return arr.filter(i => typeof i !== "string")
}

const arr = [1, "s", 34, "34rt", 4, 4,]

console.log(filterOutString(arr))