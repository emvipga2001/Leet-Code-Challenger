/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
    if ((nums[1] + nums[2]) <= nums[0] || (nums[0] + nums[2]) <= nums[1] || (nums[0] + nums[1]) <= nums[2]) return "none"
    if (nums[0] === nums[1] && nums[1] === nums[2]) return "equilateral"
    if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) return "isosceles"
    return "scalene"
};

console.log(triangleType(nums = [3, 4, 5]));
