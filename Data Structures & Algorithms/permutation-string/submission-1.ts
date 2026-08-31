class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const s1Freq = this.freqMap(s1);
        // console.log(s1Freq)

        for (let i = 0; i <= s2.length - s1.length; i++) {
            const substring = s2.slice(i, i + s1.length);
            const freq = this.freqMap(substring);
            console.log(substring)
            if (this.areFreqMapEquals(s1Freq, freq)) return true;
        }

        return false;
    }

    freqMap(s: string): Map<string, number> {
        return s.split('').reduce((acc, curr) => {
            acc.set(curr, (acc.get(curr) || 0) + 1);
            return acc;
        }, new Map<string, number>());
    }

    areFreqMapEquals(m1: Map<string, number>, m2: Map<string, number>) {
        if (m1.size != m2.size) return false;
        for (let [c, f] of m1.entries()) {
            if (f != m2.get(c)) return false;
        }
        return true;
    }
}
