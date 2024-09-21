/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let length = candyType.length;
    let set = new Set(candyType);
    return Math.min(length / 2, set.size);
};

console.log(distributeCandies([1,1,2,3]));