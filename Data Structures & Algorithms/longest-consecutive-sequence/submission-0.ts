class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let max = 0;
        const unique = new Set(nums);
        
        for (let i = 0; i < nums.length; i++) {
          const n = nums[i];
          if (!unique.has(n - 1)) {
            // n starts a sequence, start counting
            let l = 1;
            while (unique.has(n + l)) {
                l++;
            }
            max = Math.max(max, l);
          }
        }
        return max;
    }
}
