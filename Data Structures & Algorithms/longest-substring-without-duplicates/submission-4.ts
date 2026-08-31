class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s: string): number {
    const chars = s.split("");

    let seen = new Set();
    let l = 0;
    let max = 0;

    for (let r = 0; r < chars.length; r++) {
        while (seen.has(chars[r])) {
            seen.delete(chars[l]);
            l++;
        }
        seen.add(chars[r]);
        max = Math.max(max, r - l + 1);
    }

    return max;
  }
}
