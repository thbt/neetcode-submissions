class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    const l = nums.length;

    const prefix = new Array(l);
    prefix[0] = 1;
    for (let i = 1; i < l; i++) {
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }

    const suffix = new Array(l);
    suffix[l - 1] = 1;
    for (let i = l - 2; i >= 0; i--) {
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }

    const res = new Array(l);
    for (let i = 0; i < l; i++) {
      res[i] = prefix[i] * suffix[i];
    }
    return res;
  }
}
