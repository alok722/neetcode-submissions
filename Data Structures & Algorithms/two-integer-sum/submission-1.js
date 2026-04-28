class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {};

        for (let i = 0; i < nums.length; i++) {
            obj[nums[i]] = i
        }
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];

            // if diff is found in object and not equal to current index
            if (obj[diff] !== undefined && obj[diff] !== i) {
                return [i, obj[diff]]
            }
        }

        return [];
        
    }
}
