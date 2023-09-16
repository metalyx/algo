/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)

    const triplets = []

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        const cur = nums[i]
        let l = i + 1
        let r = nums.length - 1

        while (l < r) {
            let sum = cur + nums[l] + nums[r]

            if (sum === 0) {
                triplets.push([cur, nums[l], nums[r]])

                l++

                while (nums[l] === nums[l - 1] && l < r) {
                    l++
                }
            } else if (sum > 0) {
                r--
            } else if (sum < 0) {
                l++
            }
        }
    }

    return triplets
}

console.log(threeSum([-4, -1, -1, 0, 1, 2]))
// [(-4, -1, -1, 0, 1, 2)]

// a = [-4, -1, -1, 0, 1, 2]

// b = [
//     [-1, -1, 2],
//     [-1, 0, 1],
//     [-1, 0, 1],
// ]

// c = [
//     [-1, -1, 2],
//     [-1, 0, 1],
// ]
