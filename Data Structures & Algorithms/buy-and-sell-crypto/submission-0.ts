class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buy = prices[0];
        let maxProfit = 0;
        for (let i = 1; i < prices.length; i++) {
            const price = prices[i];
            const profit = price - buy;
            maxProfit = Math.max(maxProfit, profit);
            buy = Math.min(buy, price);
        }
        return maxProfit;
    }
}
