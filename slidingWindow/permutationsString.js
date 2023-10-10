/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let map = {}
    let l = 0

    for (let i = 0; i < s1.length; i++) {
        if (map[s1[i]] >= 1) {
            map[s1[i]]++
        } else {
            map[s1[i]] = 1
        }
    }

    let tmp = {}

    for (let r = 0; r < s2.length; r++) {
        tmp[s2[r]] = tmp[s2[r]] + 1 || 1

        if (r - l + 1 === s1.length) {
            if (compareMaps(map, tmp)) {
                return true
            }

            tmp[s2[l]] -= 1
            l++
        }
    }

    return false
}

function compareMaps(map1, map2) {
    let keys = Object.keys(map1)

    for (let i = 0; i < keys.length; i++) {
        if (map1[keys[i]] !== map2[keys[i]]) {
            return false
        }
    }

    return true
}

console.log(checkInclusion('abc', 'abdcba'))
