class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const n = this.normalize(s);
        console.log(n);

        let i = 0, j = n.length - 1;
        
        while (i < j && i != j) {
            if (n[i] != n[j]) {
                console.log(n[i], n[j]);
                return false;
            }
            i++;
            j--;
        }

        return true;
    }

    normalize(s: string): string {

        return s.split('').filter(c => /[A-Za-z0-9]/.test(c)).join().toLowerCase();
    }
}
