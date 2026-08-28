class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) { return false; }
        const sSorted = this.sortChars(s), tSorted = this.sortChars(t);
        return sSorted == tSorted;
    }

    sortChars(s: string) {
        return s.split('').sort().join();
    }
}
