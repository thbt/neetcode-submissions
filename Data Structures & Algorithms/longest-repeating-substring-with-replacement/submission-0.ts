class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let freq = new Map<string, number>();
        let maxFreq = 0;
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            const cFreq = (freq.get(c) || 0) + 1;
            freq.set(c, cFreq);
            maxFreq = Math.max(maxFreq, cFreq);

            while (r - l + 1 - maxFreq > k) {
                // update freq and shrink the window from the left
                freq.set(s[l], freq.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
