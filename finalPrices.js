/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    return prices.map((v, i) => {
        let j = i + 1;
        while (j <= prices.length - 1) {
            if(v >= prices[j]) return v - prices[j]
            j++;
        }
        return v
    })
};

console.log(finalPrices(prices = [8,7,4,2,8,1,7,7,10,1]));
