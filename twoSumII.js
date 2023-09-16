/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let l = 0
    let r = numbers.length - 1

    while (l < r) {
        if (numbers[l] + numbers[r] === target) {
            return [l + 1, r + 1]
        }

        if (numbers[l] + numbers[r] > target) {
            r--
            continue
        }

        l++
    }
}

// console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8))
