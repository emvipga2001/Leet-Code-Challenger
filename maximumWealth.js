/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map((x) => x.reduce((i,j) => i+j,0)))
};

maximumWealth([[2,8,7],[7,1,3],[1,9,5]])