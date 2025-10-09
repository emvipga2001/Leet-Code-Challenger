/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    const mod = Math.pow(10, 9) + 7;

    let prev = new Array(target + 1).fill(0);
    let curr = new Array(target + 1).fill(0);

    prev[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            let ans = 0;
            for (let x = 1; x <= k; x++) {
                if (j - x >= 0) {
                    ans += prev[j - x] % mod;
                }
            }
            curr[j] = ans;
        }
        prev = [...curr];
    }
    return prev[target] % mod;
};

console.log(numRollsToTarget(n = 3, k = 6, target = 7));

