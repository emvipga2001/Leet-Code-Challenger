/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    var arr = new Array(indices.length);
    for (let i = 0; i < indices.length; i++) {
        arr[indices[i]] = s[i]
    }
    return arr.join("");
};

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])