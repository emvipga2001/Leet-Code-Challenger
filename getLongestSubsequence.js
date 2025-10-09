/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let res = [words[0]];
    for (let i = 1; i < groups.length; i++) {
        if (groups[i - 1] !== groups[i]) {
            res.push(words[i]);
        }
    }

    return res;
};

console.log(getLongestSubsequence(words = ["e","a","b"], groups = [0,0,1]));
