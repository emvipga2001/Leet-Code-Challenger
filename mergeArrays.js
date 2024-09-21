/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const idMap = new Map();
    // Hợp nhất thông tin từ nums1 vào idMap
    for (const [id, value] of nums1) {
        idMap.set(id, (idMap.get(id) || 0) + value);
    }

    // Hợp nhất thông tin từ nums2 vào idMap
    for (const [id, value] of nums2) {
        idMap.set(id, (idMap.get(id) || 0) + value);
    }

    // Chuyển đổi idMap thành một mảng kết quả
    const result = Array.from(idMap).map(([id, value]) => [id, value]);

    // Sắp xếp kết quả theo id tăng dần
    result.sort((a, b) => a[0] - b[0]);

    return result;
};

nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
mergeArrays(nums1,nums2)