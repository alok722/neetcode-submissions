class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set(nums);
        if (mySet.size === nums.length) return false;

        return true;
    }
}
