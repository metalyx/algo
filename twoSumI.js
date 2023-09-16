/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // keys are numbers, values are indices
    const obj = {}

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]

        if (obj[target - value] !== undefined) {
            return [obj[target - value], i]
        } else {
            obj[value] = i
        }
    }
}

console.log(twoSum([42, 23, 21, 12, 9, 5], 51))

// [42, 23, 21, 12, 9, 5] 51
