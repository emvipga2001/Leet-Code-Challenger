/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    check = 0;
    for (let x = 0; x < nums.length; x++) {
        for (let y = 0; y < nums.length; y++) {
            if(nums[y] > nums[x] && nums[y] - nums[x] > check && x < y){
                check = nums[y] - nums[x]
            }
        }
    }
    return check ? check : -1;
};

maximumDifference([1,5,2,10])