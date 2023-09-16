/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let l = 0
    let r = s.length - 1

    while (l < r) {
        if (!isNonAlphaNumerical(s[l])) {
            l++
            continue
        }

        if (!isNonAlphaNumerical(s[r])) {
            r--
            continue
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }

        l++
        r--
    }

    return true
}

/**
 *
 * @param {string} char
 * @returns
 */
function isNonAlphaNumerical(char) {
    const matched = char.toLowerCase().match(/[a-z]|[0-9]/)

    if (!matched) {
        return false
    }

    return true
}

console.log(isPalindrome('race a car'))

/*

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
*/
