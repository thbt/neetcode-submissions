class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let freq = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            freq.set(n, (freq.get(n) || 0) + 1);
        }
        
        const freqSorted = Array.from(freq).sort((a, b) => a[1] - b[1]);
        return freqSorted.slice(k * -1).map(tops => tops[0]);
    }
}
