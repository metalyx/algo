/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    // 1. Find all three-charactared substrings. splice(left, left + 2)
    // 2. Convert each such sbstring to a set. If set.size === 3. Count them

    // Time O(n)
    // Memory O(n)

    if (s.length < 3) {
        return 0
    }

    let pointer = 0
    let goodSbstrings = 0

    while (pointer <= s.length - 3) {
        const sbstr = s.slice(pointer, pointer + 3)

        if (new Set(sbstr).size === sbstr.length) {
            console.log(new Set(sbstr))
            goodSbstrings += 1
        }

        pointer += 1
    }

    return goodSbstrings
}

console.log(countGoodSubstrings('xyzzaz'))

/*
Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
*/
