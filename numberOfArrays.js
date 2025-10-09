/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
    let x = 0,
        y = 0,
        cur = 0;
    for (let d of differences) {
        cur += d;
        x = Math.min(x, cur);
        y = Math.max(y, cur);
        if (y - x > upper - lower) {
            return 0;
        }
    }
    return upper - lower - (y - x) + 1;
};

/**
 * Input: differences = [1,-3,4], lower = 1, upper = 6
 * Output: 2
 * Explanation: The possible hidden sequences are:
 * - [3, 4, 1, 5]
 * - [4, 5, 2, 6]
 * Thus, we return 2.
 */

/**
Với k = 3: [0+3, 1+3, -2+3, 2+3] = [3, 4, 1, 5] → Tất cả trong [1, 6].
Với k = 4: [0+4, 1+4, -2+4, 2+4] = [4, 5, 2, 6] → Tất cả trong [1, 6].
Với k = 2: [-2+2 = 0] → 0 < 1, không hợp lệ.
Với k = 5: [2+5 = 7] → 7 > 6, không hợp lệ.
 */

console.log(numberOfArrays(differences = [1,-3,4], lower = 1, upper = 6));
