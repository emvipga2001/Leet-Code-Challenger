/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let left = nums.slice(0,n)
    let right = nums.slice(n)
    let ans = [];
   for(let i = 0 ; i < n; i++){
       ans.push(left[i])
       ans.push(right[i])
   }
   return ans
};

shuffle([2,5,1,3,4,7],3)