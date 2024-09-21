/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let maxVal = Math.max(...nums)
    let i = 0;
    let res = 0;
    let maxRes = 0;
    while (i < nums.length) {
        if(nums[i] == maxVal) res++;
        else res = 0;
        maxRes = Math.max(maxRes, res)
        i++;
    }
    return maxRes;
};

longestSubarray([311155,311155,311155,311155,311155,311155,311155,311155,201191,311155])