class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sortedS = s.split('').sort();
        const sortedT = t.split('').sort();

        if (sortedS.length !== sortedT.length) return false;

        for (let i = 0; i < sortedS.length; i++) {
            if (sortedS[i] === sortedT[i]) continue;

            return false;
        }

        return true;
    }
}
