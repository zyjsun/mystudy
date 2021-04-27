var maxProfit = function(prices) {
    let total = 0;  //贪心算法
     for (let i = 0; i < prices.length - 1; i++) {
         //原数组中如果后一个减去前一个是正数，说明是上涨的，
         //我们就要累加，否则就不累加
         total += Math.max(prices[i + 1] - prices[i], 0);
     }
     return total;
 };
 let price=[1,3,7,9,2,5,4]
 console.log(maxProfit(price))