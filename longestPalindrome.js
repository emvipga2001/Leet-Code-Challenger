/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let dp = new Array(s.length).fill(null).map(()=> new Array(s.length).fill(0));
  dp[0][0] = 1;

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= 0; j--) {
      if (s[i] == s[j]) {
        dp[i][j] = 1;
      }
    }
  }
};

console.log(longestPalindrome("CADACZ"));