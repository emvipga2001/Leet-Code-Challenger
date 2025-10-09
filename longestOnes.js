/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;
    let zeros = 0;
    let maxLen = 0;
    
    while (right < nums.length) {
        if (nums[right] === 0) {
            zeros++;
        }
        
        while (zeros > k) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }
    
    return maxLen;
};

// var longestOnes = function(nums, k) {
//     let n = nums.length;
//     let l = 0;
//     let r = 0;
//     let countK = 0;
//     let res = 0;
//     if(k >= n) return n;
    
//     while (l <= r && r < n) {
//         if (countK == k + 1) {
//             res = Math.max(res, r - l - 1)
//             nums[l] == 0 && countK--;
//             l++;
//             continue
//         }
//         if (nums[r] == 0) {
//             countK++;
//         }
//         r++;
//         if (countK == k + 1 && r == n) {
//             res = Math.max(res, r - l - 1)
//         }
//     }

//     if (countK == k && r == n) {
//         res = Math.max(res, r - l)
//     }

//     if (res == 0 && countK <= k) {
//         return n;
//     }

//     return res;
// };

console.log(longestOnes(nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3));
// console.log(longestOnes(nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2));

