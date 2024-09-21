/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hm = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(i - hm.get(nums[i])) <= k) {
            return true
        }
        hm.set(nums[i], i)
    }
    return false
}

nums = [1,2,3,1,2,3], k = 2
containsNearbyDuplicate(nums, k);