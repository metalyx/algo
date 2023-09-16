/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let l = 0
    let r = s.length - 1

    while (l !== r && l < r) {
        if (!checkIsValidAlphaNumerical(s[l])) {
            l++
            continue
        }

        if (!checkIsValidAlphaNumerical(s[r])) {
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

const checkIsValidAlphaNumerical = (char) => {
    if (char.toLowerCase().match(/[a-z]|[0-9]/)) {
        return true
    }

    return false
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
// console.log(isPalindrome('1221'))
// console.log(isPalindrome('absba'))
