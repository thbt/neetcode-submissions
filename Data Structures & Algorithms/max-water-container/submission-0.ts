class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0, r = heights.length - 1, max = 0;
        while (l < r) {
            const hl = heights[l];
            const hr = heights[r];
            const area = (r - l) * Math.min(hl, hr);
            if (area > max) max = area;
            if (hl < hr) l++;
            else r--;
        }
        return max
    }
}
