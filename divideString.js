/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let fills = "";
    let res = [];

    for (let i = 0; i < s.length; i++) {
        fills = s.slice(i, i + k)
        if (fills.length < k) {
            fills += fill.repeat(k - fills.length);
        }
        res.push(fills)
        i += k - 1;
    }
    return res;
};

console.log(divideString(s = "abcdefghij", k = 3, fill = "x"));
