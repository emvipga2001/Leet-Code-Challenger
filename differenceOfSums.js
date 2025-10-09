/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    // Sum of all numbers from 1 to n
    let totalSum = n * (n + 1) / 2;
    // Sum of all numbers from 1 to n that are divisible by m
    let count = Math.floor(n / m);
    let divisibleSum = m * count * (count + 1) / 2;
    // Return the difference
    return totalSum - 2 * divisibleSum;
};

console.log(differenceOfSums(n = 10, m = 3));
