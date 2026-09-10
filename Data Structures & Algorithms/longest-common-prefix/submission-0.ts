class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let prefix = "";

        let i = 0;
        while (i < strs[0].length) {
            const candidateLetter = strs[0][i];
            for (let word of strs) {
                if (word[i] != candidateLetter) {
                    return prefix;
                }
            }
            prefix += candidateLetter;
            i++;
        }

        return prefix;
    }
}
