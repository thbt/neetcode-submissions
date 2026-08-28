class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set();
        for (let i = 0; i < nums.length; i++) {
            let n = nums[i];
            if (set.has(n)) {
                return true;
            } else {
                set.add(n);
            }
        }
        return false;
    }
}
