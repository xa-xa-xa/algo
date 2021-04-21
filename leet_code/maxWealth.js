// You are given an m x n integer grid accounts where accounts[i][j] is the amount
// of money the i​th customer has in the j​th bank.Return the wealth that
// the richest customer has.

// A customer's wealth is the amount of money they have 
// in all their bank accounts.The richest customer is
// the customer that has the maximum wealth.

//* Example
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
//? Time O(n * n); Space O(n);
const maximumWealth = function (accounts) {
    let maxWealth = 0;
    accounts.forEach(account => {
        console.log("*1", account)
        console.count("account1")

        const total = account.reduce((a, c) => {
            console.log("*2", account)
            console.count("account 2")

            // console.log(account)
            return a + c
        });
        // console.count(account)
        if (total > maxWealth) {
            maxWealth = total
        }

    });
    return maxWealth;
    // return Math.max(...accounts.map(x => x.reduce((a, c) => a + c, 0)));
};

const accounts = [
    [2, 8, 7],
    [7, 1, 3],
    [1, 5, 4],
    [1, 2, 3],
    [3, 69, 4]];
console.log(maximumWealth(accounts), accounts.flat().length);