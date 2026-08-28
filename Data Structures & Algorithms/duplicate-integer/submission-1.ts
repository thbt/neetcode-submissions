class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set();
        for (let i = 0; i < nums.length; i++) {
            let n = nums[i];
            if (seen.has(n)) {
                return true;
            } else {
                seen.add(n);
            }
        }
        return false;
    }
}
