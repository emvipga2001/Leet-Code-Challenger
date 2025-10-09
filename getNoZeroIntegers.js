/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const pattern = /0/; 
    let a = 0;
    let b = 0;
    for (let i = 1; i <= n - 1; i++) {
        a = i
        b = n - i
        if (!pattern.test(a) && !pattern.test(b)) {
            break
        }
    }
    return [a, b]
};

console.log(getNoZeroIntegers(1001));
