/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let cur = m + n -1
    let i = m - 1,j = n -1

    if(i<0){
        nums1[cur]=nums2[j]
    }else if (j<0){
        nums1[cur]=nums1[i]
    }

    while (j >= 0) {
        if (nums1[i] > nums2[j] ) {
            nums1[cur--]=nums1[i--]
        }else{
            nums1[cur--]=nums2[j--]
        }
    }
};
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
merge(nums1,m,nums2,n)

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]