class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        // store chars frequencies of each strings
        const sFreq = new Map<string, number>();
        const tFreq = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            const sv = s[i];
            const sFreqEntry = sFreq.get(sv);
            sFreq.set(sv, sFreqEntry ? sFreqEntry + 1 : 1);

            const tv = t[i];
            const tFreqEntry = tFreq.get(tv);
            tFreq.set(tv, tFreqEntry ? tFreqEntry + 1 : 1);
        }

        return this.areMapsEquals(sFreq, tFreq);
    }

    areMapsEquals(a: Map<string, number>, b: Map<string, number>) {
        for (const [key, va] of a.entries()) {
            let vb = b.get(key);
            if (vb != va) {
                return false;
            }
        }
        return true;
    }
}
