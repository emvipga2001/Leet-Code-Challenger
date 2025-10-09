/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    nums.sort((a, b)=> a - b)
    let sum = 0;
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        sum = nums[l] + nums[r];
        if (sum == target) return [l, r]
        if (sum > target) {
            r--;
        } else {
            l++;
        }      
    }
};

console.log(twoSum(nums = [3,2,4], target = 6));
