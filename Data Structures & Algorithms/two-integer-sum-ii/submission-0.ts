class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0, j = numbers.length - 1, res = -1;
        do {
            res = numbers[i] + numbers[j];
            if (res > target) j--;
            else if (res < target) i++;
        } while (res != target);
            
        return [i + 1, j + 1];
    }
}
