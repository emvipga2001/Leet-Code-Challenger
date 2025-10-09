/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = new Array(numRows);
    res[0] = [1];
    res[1] = [1, 1];
    for (let i = 2; i < res.length; i++) {
        let temp = new Array(i)
        temp[0] = 1;
        for (let j = 1; j < i; j++) {
            temp[j] = res[i - 1][j] + res[i - 1][j - 1];
        }
        temp[i] = 1;
        res[i] = temp;
    }
    return res.slice(0, numRows);
};  

console.log(generate(1));
