/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr = new Array(n).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i - 2]
    }
    return arr[n]
};

fib(2)