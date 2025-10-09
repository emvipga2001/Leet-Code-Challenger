/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let i = 0;
    let j = 0;
    let res = [];
    while (j < nums.length && i < nums.length) {
        if (nums[j] != key || i > j) {
            j++;
            continue;
        }
        if (Math.abs(i - j) <= k) {
            res.push(i);
        }maxSubsequence
        i++;
    }

    return res;
};

console.log(findKDistantIndices(nums = [2,2,2,2,2], key = 2, k = 2));
