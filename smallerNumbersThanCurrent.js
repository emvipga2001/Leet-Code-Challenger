/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    var array = [];
    for (let i = 0; i < nums.length; i++) {
        var count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        array.push(count)
    }
    return array;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3])