/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    var arr = [];
    nums = nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length; i++) {
        arr[i] = nums[i + 1];
        arr[i + 1] = nums[i++];
    }
    return arr;
};

numberGame([2,5])