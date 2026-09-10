class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        for (let i = 0; i < strs[0].length; i++) {
            for (let word of strs) {
                if (i === word.length || word[i] !== strs[0][i]) {
                    return word.slice(0, i);
                }
            }
        }
        return strs[0];
    }
}
