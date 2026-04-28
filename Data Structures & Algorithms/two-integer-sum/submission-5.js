// This approach works well when you can sort the array.
// If the array is unsorted and you want O(n) time, prefer a HashMap approach (store value → index and check complements).
class Solution {
    twoSum(nums, target) {
        // Pair each value with its original index
        const valueIndexPairs = nums.map((value, index) => [value, index]);

        // Sort pairs based on value (needed for two-pointer technique)
        valueIndexPairs.sort((a, b) => a[0] - b[0]);

        let left = 0;                          // smallest value
        let right = valueIndexPairs.length - 1; // largest value

        while (left < right) {
            const leftValue = valueIndexPairs[left][0];
            const rightValue = valueIndexPairs[right][0];
            const currentSum = leftValue + rightValue;

            if (currentSum === target) {
                // Return original indices
                return [
                    valueIndexPairs[left][1],
                    valueIndexPairs[right][1]
                ];
            }

            if (currentSum < target) {
                left++;   // need bigger sum → move left forward
            } else {
                right--;  // need smaller sum → move right backward
            }
        }

        return [];
    }
}