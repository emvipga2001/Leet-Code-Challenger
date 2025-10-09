/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let mapNums = nums.map((v, i) => [v, i])
    mapNums.sort((a, b) => b[0] - a[0]) 
     
    return mapNums.slice(0, k).sort((a, b) => a[1] - b[1]).map((v) => v[0])
};

console.log(maxSubsequence(nums = [-1,-2,3,4], k = 3));
