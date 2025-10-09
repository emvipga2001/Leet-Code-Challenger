/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    let set = new Set(nums);
    let res = 0;
    nums.sort((a,b)=> b - a);
    for (let i = nums[0]; i >= 0; i--) {
        if (!set.has(i)) continue
        let check = i - k;
        i = check;
        res++;
    }

    return res;
};

console.log(partitionArray(nums = [6,5,3], k = 2));
