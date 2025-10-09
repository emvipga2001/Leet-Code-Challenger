/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
    const MOD = 1e9 + 7;
    const dp = new Array(n).fill(0);
    dp[0] = 1; // Day 1: one person knows the secret
    let share = 0;

    for (let i = 1; i < n; i++) {
        if (i - delay >= 0) {
            share = (share + dp[i - delay]) % MOD;
        }
        if (i - forget >= 0) {
            share = (share - dp[i - forget] + MOD) % MOD;
        }
        dp[i] = share;
    }

    let res = 0;
    for (let i = n - forget; i < n; i++) {
        if (i >= 0) {
            res = (res + dp[i]) % MOD;
        }
    }
    return res;
};

console.log(peopleAwareOfSecret(n = 6, delay = 2, forget = 5));
