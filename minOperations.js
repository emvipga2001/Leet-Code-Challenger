/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] == 0) {
            res++;
            for (let j = 0; j < 3; j++) {
                nums[i + j] = nums[i + j] == 0 ? 1 : 0;
            }
        }
    }

    return (nums[nums.length-1] === 1 && nums[nums.length-2] === 1) ? res : -1;
};

console.log(minOperations([1,0,0,1,1,1,0,1,1,1]));
