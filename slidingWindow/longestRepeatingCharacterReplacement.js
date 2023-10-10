/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let l = 0
    let r = -1
    let map = {}
    let max = 0

    // O(28n)
    while (r < s.length) {
        if (formula(r - l + 1, k, map)) {
            max = max < r - l + 1 ? r - l + 1 : max
            r++
            map[s[r]] = !map[s[r]] ? 1 : map[s[r]] + 1
        } else {
            map[s[l]] -= 1
            l++
        }
    }

    return max
}
// O(28 * 1)
function formula(length, k, map) {
    function countMax() {
        const values = Object.values(map)

        let max = 0

        values.forEach((val) => {
            max = max < val ? val : max
        })

        return max
    }

    if (length - countMax() <= k) {
        return true
    }

    return false
}
