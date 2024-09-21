/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;
    let resTemp = new Array(nums.length).fill(0);
    
    for (let i = 0; i < n; i++) {
        resTemp[(i+k)%n]=nums[i];
    }
    for (let i = 0; i < n; i++) {
       nums[i] = resTemp[i];
    }
};

rotate(nums = [1,2,3,4,5,6,7], k = 3)

