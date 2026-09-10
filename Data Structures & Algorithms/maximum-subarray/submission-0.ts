class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums: number[]): number {
    let maxSum = nums[0];
    let curSum = 0;

    for (let n of nums) {
      curSum = Math.max(curSum, 0);
      curSum += n;
      maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
  }
}
