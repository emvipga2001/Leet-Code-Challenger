/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    map = {}
    for (let num of nums) {
        if (map[num]) {
            map[num] += 1;
        } else map[num] = 1;
    }
    for (const [key, value] of Object.entries(map)) {
      if (value === 1) {
        return key
      }
    }
};

singleNumber([4,1,2,1,2])