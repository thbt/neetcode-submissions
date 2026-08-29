class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let leftMax = heights[l];
        let rightMax = heights[r];
        let res = 0;

        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, heights[l]);
                res += leftMax - heights[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, heights[r]);
                res += rightMax - heights[r];
            }
        }
        return res;
    }
}
