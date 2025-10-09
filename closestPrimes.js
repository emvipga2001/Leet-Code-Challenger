/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    let resTemp = [];
    let res = [];
    let min = Infinity;

    for (let i = left; i <= right; i++) {
        if (i == 1) continue 
        if (i == 2 || i == 3) {
            resTemp.push(i)
        }else{
            let sqrt = Math.floor(Math.sqrt(i))
            let count = 0;
            for (let j = 2; j <= sqrt; j++) {
                count = i % j;
                if (count == 0) break
            }
            if (count !== 0) resTemp.push(i)
        }
        if (resTemp[resTemp.length - 1] - resTemp[resTemp.length - 2] <= 3) {
            return [resTemp[resTemp.length - 2], resTemp[resTemp.length - 1]]
        }
    }

    for (let i = 0; i < resTemp.length - 1; i++) {
        if (resTemp[i + 1] - resTemp[i] < min) {
            min = resTemp[i + 1] - resTemp[i];
            res = [resTemp[i], resTemp[i + 1]]
        }
    }

    return res.length == 0 ? [-1, -1] : res
};

console.log(closestPrimes(left = 1, right = 1000000));
