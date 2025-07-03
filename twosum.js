class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            for (let x = i + 1; x < nums.length; x++) {
               if (nums[i] + nums[x] == target) {
                return [i, x]
               }
            }
        }
    }
}

nums = [3,4,5,6]
target = 7