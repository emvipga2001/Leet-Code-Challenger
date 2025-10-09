/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let res = 0;
    let i = 0;
    let j = 0;
    while (j < g.length && i < s.length) {
        if (s[i] >= g[j]) {
            j++;
            res++;
        }
        i++;
    }

    return res;
};

console.log(findContentChildren(g = [10,9,8,7], s = [5,6,7,8]));
