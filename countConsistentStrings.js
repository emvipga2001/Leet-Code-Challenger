/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let res = 0
    let hashMap = {};
    for(let char of allowed){
        hashMap[char] = (hashMap[char] || 0) + 1;
    }

    for (let i = 0; i < words.length; i++) {
        res++
        for (let x = 0; x < words[i].length; x++) {
            if(!hashMap[words[i][x]]){
                res--
                break
            }
        }
    }
    return res
};

countConsistentStrings("ab",["ad","bd","aaab","baa","badab"])