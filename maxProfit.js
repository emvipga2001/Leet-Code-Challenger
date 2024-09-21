// Easy
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//     var profitMax = 0
//     var left = 0
//     var right = 1
//     while (right < prices.length) {
//         if (prices[right] > prices[left]) {
//             profitMax = Math.max(prices[right] - prices[left],profitMax)
//         }else{
//             left = right
//         }
//         right++
//     }
//     return profitMax
// };

// Medium
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//     let profit = 0;

//     for(let i = 1; i<prices.length; i++)

//         if(prices[i]>prices[i-1]) profit+=(prices[i]-prices[i-1]);
    
//     return profit;
// };

// Hard
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    
    let firstBuy = Number.MIN_SAFE_INTEGER; // Lợi nhuận sau giao dịch mua lần 1
    let firstSell = 0; // Lợi nhuận sau giao dịch bán lần 1
    let secondBuy = Number.MIN_SAFE_INTEGER; // Lợi nhuận sau giao dịch mua lần 2
    let secondSell = 0; // Lợi nhuận sau giao dịch bán lần 2
    
    for (let price of prices) {
        firstBuy = Math.max(firstBuy, -price); // Cập nhật lợi nhuận sau giao dịch mua lần 1
        firstSell = Math.max(firstSell, firstBuy + price); // Cập nhật lợi nhuận sau giao dịch bán lần 1
        secondBuy = Math.max(secondBuy, firstSell - price); // Cập nhật lợi nhuận sau giao dịch mua lần 2
        secondSell = Math.max(secondSell, secondBuy + price); // Cập nhật lợi nhuận sau giao dịch bán lần 2
    }
    
    return secondSell; // Trả về lợi nhuận tối đa sau hai giao dịch
};



maxProfit([1,2,3,4,5])