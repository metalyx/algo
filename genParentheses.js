/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = []

    const backtrack = (opened, closed, path) => {
        if (opened === n && closed === n) {
            result.push(path)

            return
        }

        if (opened === closed) {
            backtrack(opened + 1, closed, path + '(')
        }

        // O(2^n)
        if (opened > closed && opened < n) {
            backtrack(opened + 1, closed, path + '(')
            backtrack(opened, closed + 1, path + ')')
        }

        if (opened > closed && opened === n) {
            backtrack(opened, closed + 1, path + ')')
        }
    }

    backtrack(0, 0, '')

    return result
}

console.log(generateParenthesis(13))
