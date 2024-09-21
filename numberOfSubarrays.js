/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let res = 0;
  let left = 0;
  let countOdd = 0;
  let prefixCount = 0;

  for (let right = 0; right < nums.length; right++) {
    // Tăng countOdd nếu phần tử hiện tại là số lẻ
    if (nums[right] % 2 === 1) {
        countOdd++;
        prefixCount = 0;
    }

    // Trong khi số lượng số lẻ trong cửa sổ vượt quá k, di chuyển con trỏ left
    while (countOdd === k) {
        prefixCount++;
        if (nums[left] % 2 === 1) {
            countOdd--;
        }
        left++;
    }

    // Thêm số lượng subarray hợp lệ kết thúc tại con trỏ 'right' vào kết quả
    res += prefixCount;
  }
  return res;
};

numberOfSubarrays([0,1,1], 1);
//                 0,1,2,3,4,5,6,7,8,9,10,11,12,13 
// k = 3
// 0 0 0 0 1 0 0 0 1 0 1 0 0 0
// 5 * 4 = 20

