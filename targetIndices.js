/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);
    let res = [];
    binarySearch(res, nums, 0 , nums.length-1, target);
    return res.sort((a, b) => a - b);
};

function binarySearch(lists, sorted, low, high, target){
    if(low > high) return;
    
    const mid = Math.floor((high + low) / 2);
    
    if(sorted[mid] === target){
        lists.push(mid);
    }
    
    binarySearch(lists, sorted, low, mid-1, target);
    binarySearch(lists, sorted, mid+1, high, target);
}

console.log(targetIndices(nums = [1,2,5,2,3], target = 2));
