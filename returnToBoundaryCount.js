/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let res = 0;
    let step = nums[0];
    for (let i = 1; i < nums.length; i++) {
        step = step + nums[i]
        if (step == 0) {
            res++;
        }
    }
    return res;
};

console.log(returnToBoundaryCount([3,2,-5]));
