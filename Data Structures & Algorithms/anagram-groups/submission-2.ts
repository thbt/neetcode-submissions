class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // key: encoded frequency of chars in word, ie. "cat" -> "a1c1t1", "poop" -> o2p2
        // value: words[]
        const groups = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const freq = this.strToFreq(str);
            const key = this.encode(freq);
            groups.set(key, groups.has(key) ? [...groups.get(key), str] : [str]);
        }

        return [...groups.values()];
    }

    strToFreq(str: string): Map<string, number> {
        return str
            .split("")
            .sort()
            .reduce((acc, curr) => {
                acc.set(curr, (acc.get(curr) || 0) + 1);
                return acc;
            }, new Map<string, number>());
    }

    encode(freq: Map<string, number>): string {
        let str = "";
        for (let [key, val] of freq) {
            str += "" + key + val;
        }
        return str;
    }
}
