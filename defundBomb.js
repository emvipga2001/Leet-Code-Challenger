/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var a = ['a']
var merge = function(arr,k) {
    let arrTemp = new Array(arr.length).fill(0);
    var p = k < 0 ? 1 : -1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = k;j != 0; j += p) {
            let index = (i + j) % arr.length;
            index = index < 0 ? index + arr.length : index
            arrTemp[i] += arr[index]
        }
    }
    return arrTemp;
};

// [9,8,7,6]
nums1 = [2,4,9,3], m = -2
console.log(merge(nums1,m));