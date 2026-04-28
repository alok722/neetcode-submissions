class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const source = s.split('').sort().join();
        const target = t.split('').sort().join();

        if (source === target) return true;

        return false;
    }
}
