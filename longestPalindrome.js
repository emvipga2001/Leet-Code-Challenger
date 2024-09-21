/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let m = s.length;
  let dp = Array.from({ length: m }, () => Array(m).fill(0));
  let start = 0;
  let end = 1;
  for (let i = 0; i < m; i++) {
    dp[i][i] = 1;
  }

  for (let i = 0; i < m - 1; i++) {
    if (s[i] == s[i + 1]) {
      start = i;
      end = 2;
      dp[i][i + 1] = 1;
    }
  }

  for (let k = 3; k <= m; k++) {
    for (let i = 0; i < m - k + 1; i++) {
      j = i + k - 1;
      if (dp[i + 1][j - 1] == 1 && s[i] == s[j]) {
        console.log(s[i + 1] + ": " + (i + 1) + "  J: " + (j - 1)+ "  K: " +k);
        dp[i][j] = 1;
        if (k > end) {
          start = i;
          end = k;
        }
      }
    }
  }
  return s.slice(start, start + end);
};
// C D | A A | D C | A Z
// C A | A C | D Z
// C C | A Z 
// C Z
console.log(longestPalindrome("CADACZ"));

// 1 0 0 0 1 0
// 0 1 0 1 0 0
// 0 0 1 0 0 0
// 0 0 0 1 0 0
// 0 0 0 0 1 0
// 0 0 0 0 0 1
