/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let res = 0;
    let left = 0;
    let i = 0;
    for (let j = 1; j < nums.length - 1; j++) {
        left = Math.max(left, nums[i] - nums[j]);
        if (nums[i] < nums[j]) {
            i = j;
        }
        res = Math.max(res, left * nums[j + 1]);
    }

    return res;
};

console.log(maximumTripletValue([16,2,10,20,16,2,13,8,19]));
