class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            let middle = l + Math.floor((r - l) / 2);
            if (nums[middle] < nums[r]) r = middle;
            else l = middle + 1;
        }
        
        return nums[l];
    }
}
