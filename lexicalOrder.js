/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    let res = [];
    
    function dfs(num) {
        if (num > n) return;
        res.push(num);
        
        for (let i = 0; i <= 9; i++) {
            let nextNum = num * 10 + i;
            if (nextNum > n) break; // Dừng lại nếu vượt quá `n`
            dfs(nextNum);
        }
    }
    
    for (let i = 1; i <= 9; i++) {
        dfs(i);
    }

    return res;
};

console.log(lexicalOrder(100));


// Input: n = 13
// Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
