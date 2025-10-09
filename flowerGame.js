/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
    return Math.floor(Math.abs(n/2) * (m - Math.abs(m/2)) + ( n- Math.abs(n/2)) * Math.abs(m/2));
};

console.log(flowerGame(n = 1, m = 1));
