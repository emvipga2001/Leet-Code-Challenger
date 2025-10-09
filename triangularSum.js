/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    let n = nums.length;
    for (let i = n - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            nums[j] = (nums[j] + nums[j + 1]) % 10;
        }
    }
    return nums[0];
};

console.log(triangularSum([1,2,3,4,5]));
