/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    var total = new Map()
    var res = 0;
    for (let i = 0; i < jewels.length; i++) {
        total.set(jewels[i])
    }
    for (let i = 0; i < stones.length; i++) {
        if(total.has(stones[i])){
            res++;
        }
    }
    return res;
};

numJewelsInStones("aA","aAAbbbb")