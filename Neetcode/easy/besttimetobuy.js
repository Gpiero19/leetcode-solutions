
function maxProfit(prices) {
    let maxProfit = 0
    let buy = 0; sell = 1

    while (sell < prices.length) {
        if (prices[buy] < prices[sell]) {
            let profit = prices[sell] - prices[buy]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            buy = sell
        }
        sell ++
    }
    console.log(maxProfit)
    return maxProfit

}
let prices = [10,1,5,6,7,1]
// prices=[7,1,5,3,6,4]
// prices=[7,6,4,3,1]


// Output: 6

function maxProfit(prices) {
    let res = 0;
    for (let i = 0; i < prices.length; i++) {
        let buy = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            let sell = prices[j];
            res = Math.max(res, sell - buy);
        }
    }
    return res;
}

maxProfit(prices)