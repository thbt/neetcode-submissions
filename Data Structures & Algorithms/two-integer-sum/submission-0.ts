class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        // number => index
        let seen = new Map<number, number>([[nums[0], 0]]);
        
        for (let j = 1; j < nums.length; j++) {
            const num = nums[j];
            const diff = target - num;
            if (seen.has(diff)) {
                return [seen.get(diff), j];
            } else {
                seen.set(num, j);
            }
        }
        throw new Error('notfound');
    }
}
