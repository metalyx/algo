/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)

    const output = []

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let l = i + 1
        let r = nums.length - 1

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]

            if (sum > 0) {
                r--
                continue
            } else if (sum < 0) {
                l++
                continue
            } else {
                output.push([nums[i], nums[l], nums[r]])

                l++

                while (nums[l] === nums[l - 1] && l < r) {
                    l++
                }
            }
        }
    }

    return output
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-4, -1, -1, 0, 1, 2]))

/*
Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 
*/
