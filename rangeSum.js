/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var rangeSum = function (nums, n, left, right) {
  let MOD = 1e9 + 7;
  let tempRes = [];
  for (let i = 0; i < n; i++) {
    tempRes.push(nums[i])
    for (let j = i + 1; j < n; j++) {
      tempRes.push(nums[j] + tempRes[tempRes.length - 1]);
    }
  }
  tempRes.sort((a, b) => a - b);
  let res = 0;
  for (let i = left - 1; i < right; i++) {
    res = (res + tempRes[i]) % MOD;
  }
  return res;
};

rangeSum((nums = [1, 2, 3, 4]), (n = 4), (left = 1), (right = 5));
