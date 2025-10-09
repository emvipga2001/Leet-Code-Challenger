/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = new Array(n);
    let temp = Math.floor(n/2);
    let i = 0;
    if (n % 2 !== 0) {
        res[temp] = 0;
    }
    while (temp > 0 && i >= 0) {
        res[i] = -temp;
        res[n - i - 1] = temp;
        temp = temp - 1;
        i++;
    }
    return res;
};

console.log(sumZero(7));
