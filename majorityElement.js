/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let res = 0;
    let n = nums.length;
    
    nums.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1)
        if (n / 2 < map.get(num)) {
            res = num;
        }
    });

    return res;
};

console.log(majorityElement([2,2,1,1,1,2,2]));
