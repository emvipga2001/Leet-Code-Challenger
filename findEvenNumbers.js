/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let res = [];
    let set = new Set();
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 != 0) continue
        for (let j = 0; j < digits.length; j++) {
            if (digits[j] == 0 || j == i) continue
            for (let k = 0; k < digits.length; k++) {
                if (k == i || k == j) continue
                let temp = "" + digits[j] + digits[k] + digits[i]
                if (set.has(Number(temp))) continue
                res.push(Number(temp))
                set.add(Number(temp))
            }
        }
    }
    res.sort((a,b) => a - b)
    return res;
};

console.log(findEvenNumbers([2,2,8,8,2]));
