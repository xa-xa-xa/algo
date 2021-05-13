// Suppose we have an unsorted log file of accesses to web resources. Each log entry consists of an access currTime, the ID of the user making the access, and the resource ID. 

// The access currTime is represented as seconds since 00:00:00, and all times are assumed to be in the same day.

// For example:
// logs1 = [
//     ["58523", "user_1", "resource_1"],
//     ["62314", "user_2", "resource_2"],
//     ["54001", "user_1", "resource_3"],
//     ["200", "user_6", "resource_5"],    
//     ["215", "user_6", "resource_4"],
//     ["54060", "user_2", "resource_3"],
//     ["53760", "user_3", "resource_3"],
//     ["58522", "user_22", "resource_1"],
//     ["53651", "user_5", "resource_3"],
//     ["2", "user_6", "resource_1"],
//     ["100", "user_6", "resource_6"],
//     ["400", "user_7", "resource_2"],
//     ["100", "user_8", "resource_6"],
//     ["54359", "user_1", "resource_3"],
// ]

// We would like to compute user sessions, specifically: write a function that takes the logs and returns a data structure that associates to each user their earliest and latest access times.

// Example:
// {'user_1': [54001, 58523], 
//  'user_2': [54060, 62314], 
//  'user_3': [53760, 53760], 
//  'user_5': [53651, 53651], 
//  'user_6': [2, 215], 
//  'user_7': [400, 400], 
//  'user_8': [100, 100],
//  'user_22': [58522, 58522], 
// }

// Example 2:
// logs2 = [
//     ["300", "user_1", "resource_3"],
//     ["599", "user_1", "resource_3"],
//     ["900", "user_1", "resource_3"],
//     ["1199", "user_1", "resource_3"],
//     ["1200", "user_1", "resource_3"],
//     ["1201", "user_1", "resource_3"],
//     ["1202", "user_1", "resource_3"]
// ]

// Should return:
// {'user_1': [300, 1202]}

// Complexity analysis variables:

// n: number of logs in the input

const logs1 = [
    ["58523", "user_1", "resource_1"],
    ["62314", "user_2", "resource_2"],
    ["54001", "user_1", "resource_3"],
    ["200", "user_6", "resource_5"],
    ["215", "user_6", "resource_4"],
    ["54060", "user_2", "resource_3"],
    ["53760", "user_3", "resource_3"],
    ["58522", "user_22", "resource_1"],
    ["53651", "user_5", "resource_3"],
    ["2", "user_6", "resource_1"],
    ["100", "user_6", "resource_6"],
    ["400", "user_7", "resource_2"],
    ["100", "user_8", "resource_6"],
    ["54359", "user_1", "resource_3"],
];

const logs2 = [
    ["300", "user_1", "resource_3"],
    ["599", "user_1", "resource_3"],
    ["900", "user_1", "resource_3"],
    ["1199", "user_1", "resource_3"],
    ["1200", "user_1", "resource_3"],
    ["1201", "user_1", "resource_3"],
    ["1202", "user_1", "resource_3"]
];

// Sol 1
// const userSessionTime = (arr) => {
//     const hash = {};
//     arr.forEach(item => {
//         const currTime = Number(item[0])

//         if (!hash[item[1]] === !undefined) {
//             hash[item[1]] = [currTime]
//         }
//         hash[item[1]] = [...hash[item[1]], currTime].sort((a, b) => a - b)
//     });

//     const res = Object.keys(hash).map(i => {
//         const item = hash[i]
//         const a = {}
//         a[i] = [item[0], item[item.length - 1]]
//         return a
//     })

//     const set = new Set(res)
//     return set
// }

//* optimal solution

const userSessionTime = (arr) => {
    const res = arr.reduce((acc, val) => {
        let [currTime, user] = val;
        currTime = Number(currTime)

        if (!acc[user]) {
            acc[user] = [currTime, currTime];
        }

        const [minTime, maxTime] = acc[user];
        if (currTime < minTime) {
            acc[user][0] = currTime
        };
        if (currTime > maxTime) {
            acc[user][1] = currTime
        };


        return acc;
    }, {});

    return JSON.stringify(res)
};


console.log("****", userSessionTime(logs2))


