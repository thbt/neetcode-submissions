class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i++) {
      const ni = nums[i];

      // skip duplicate
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let j = i + 1, k = nums.length - 1;

      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];

        if (sum < 0) j++;
        else if (sum > 0) k--;
        else {
          res.push([nums[i], nums[j], nums[k]]);
          j++;
          while (j < k && nums[j] === nums[j-1]) j++
        }
      }
    }
    return res;
  }
}
